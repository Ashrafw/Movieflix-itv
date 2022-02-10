import { useState, useEffect } from 'react';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
// import OverlayMovie from '../../components/OverlayMovie';

import './GenrePage.css';
const genreObj = [
    {
        id: '0',
        genre: 'Popular',
        url: 'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=',
    },
    {
        id: '1',
        genre: 'Action',
        url: 'https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=',
    },
    {
        id: '2',
        genre: 'Drama',
        url: 'https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=',
    },
    {
        id: '3',
        genre: 'Crime',
        url: 'https://api.themoviedb.org/3/discover/movie?with_genres=80&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=',
    },
    {
        id: '4',
        genre: 'Children',
        url: 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=',
    },
    {
        id: '5',
        genre: 'Romance',
        url: 'https://api.themoviedb.org/3/discover/movie?with_genres=10749&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=',
    },
    {
        id: '6',
        genre: 'Thriller',
        url: 'https://api.themoviedb.org/3/discover/movie?with_genres=53&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
];

export default function GenrePage() {
    const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
    const [selectedGenreUrl, setSelectedGenreUrl] = useState('');
    const [title, setTitle] = useState('');
    const [posterPath, setPosterPath] = useState('');
    const [backdropPath, setBackdropPath] = useState('');
    const [rate, setRate] = useState('');
    const [date, setDate] = useState('');
    const [overview, setOverview] = useState('');
    const [pageInit, setPageInit] = useState(1);
    const { id } = useParams();

    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [genreName, setGenreName] = useState('');

    const { data, isPending, error } = useFetch(selectedGenreUrl);
    const [clickedValue, setClickedValue] = useState(false);
    const [clickedId, setClickedId] = useState('');
    useEffect(() => {
        genreObj.map((list) => {
            if (list.id === id) {
                // console.log('printf= ', list.url);
                setSelectedGenreUrl(list.url + pageNumber);
                // console.log(list);
                setGenreName(list.genre);
            }
        });
        if (data) {
            setTitle(data.results[count].title);
            setPosterPath(IMG_URL + data.results[count].poster_path);
            setBackdropPath(IMG_URL + data.results[count].backdrop_path);
            setRate(data.results[count].vote_average);
            setDate(data.results[count].release_date);
            setOverview(data.results[count].overview);
        }
        if (error) {
            setTimeout(() => {
                navigate('/movie');
            }, 2000);
        }
    }, [id, data, error, pageNumber, navigate, count]);

    return (
        <div className='genre-page container-p'>
            <div className='genre-page-info'>
                <h1>{genreName}</h1>
                <div className='pagination'>
                    <button
                        onClick={() => {
                            setPageInit((prev) => 1);
                        }}
                        className={pageNumber === '>' ? 'active-page' : ''}
                    >
                        <i class='fa-solid fa-chevron-left'></i>
                        <i class='fa-solid fa-chevron-left'></i>
                    </button>
                    <button
                        onClick={() =>
                            setPageInit((prev) => (prev > 3 ? prev - 3 : prev))
                        }
                        className={pageNumber === '>>' ? 'active-page' : ''}
                    >
                        <i class='fa-solid fa-chevron-left'></i>
                    </button>
                    <button
                        onClick={() => {
                            setPageNumber(pageInit);
                            if (pageNumber > 3) {
                                setPageInit((prev) => prev - 3);
                            }
                        }}
                        className={pageNumber === pageInit ? 'active-page' : ''}
                    >
                        {pageInit}
                    </button>
                    <button
                        onClick={() => setPageNumber(pageInit + 1)}
                        className={pageNumber === pageInit + 1 ? 'active-page' : ''}
                    >
                        {pageInit + 1}
                    </button>
                    <button
                        onClick={() => setPageNumber(pageInit + 2)}
                        className={pageNumber === pageInit + 2 ? 'active-page' : ''}
                    >
                        {pageInit + 2}
                    </button>
                    <button
                        onClick={() => setPageNumber(pageInit + 3)}
                        className={pageNumber === pageInit + 3 ? 'active-page' : ''}
                    >
                        {pageInit + 3}
                    </button>
                    <button
                        onClick={() => setPageNumber(pageInit + 4)}
                        className={pageNumber === pageInit + 4 ? 'active-page' : ''}
                    >
                        {pageInit + 4}
                    </button>
                    <button
                        onClick={() => setPageNumber(pageInit + 5)}
                        className={pageNumber === pageInit + 5 ? 'active-page' : ''}
                    >
                        {pageInit + 5}
                    </button>
                    <button
                        onClick={() => {
                            setPageNumber(pageInit + 6);
                            setPageInit((prev) => prev + 3);
                        }}
                        className={pageNumber === pageInit + 6 ? 'active-page' : ''}
                    >
                        {pageInit + 6}
                    </button>
                    {/* <button
                        onClick={() => setPageNumber(pageInit + 6)}
                        className={pageNumber === pageInit + 6 ? 'active-page' : ''}
                    >
                        {pageInit + 6}
                    </button>
                    <button
                        onClick={() => setPageNumber(pageInit + 7)}
                        className={pageNumber === pageInit + 7 ? 'active-page' : ''}
                    >
                        {pageInit + 7}
                    </button> */}
                    <button
                        onClick={() => setPageInit((prev) => prev + 8)}
                        className={pageNumber === '>' ? 'active-page' : ''}
                    >
                        <i class='fa-solid fa-chevron-right'></i>
                    </button>
                    <button
                        onClick={() => setPageNumber(8)}
                        className={pageNumber === '>>' ? 'active-page' : ''}
                    >
                        <i class='fa-solid fa-chevron-right'></i>
                        <i class='fa-solid fa-chevron-right'></i>
                    </button>
                </div>
            </div>

            <div className='genre-section'>
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {data &&
                    data.results.map((movie) => (
                        <div className='movie' key={movie.title}>
                            {/* <OverlayMovie
                                title={movie.title}
                                date={movie.release_date}
                                overview={movie.overview}
                                clickedValue={clickedValue}
                                setClickedValue={setClickedValue}
                                info={clickedId === movie.title ? true : false}
                            /> */}
                            <img
                                src={IMG_URL + movie.poster_path}
                                alt=''
                                srcSet=''
                                onClick={(e) => {
                                    if (!clickedValue) {
                                        setClickedValue(true);
                                        setClickedId(movie.title);
                                    } else {
                                        setClickedId('');
                                        setClickedValue(false);
                                    }
                                }}
                            />
                            <div className='movie-info'>
                                <h5>{movie.title}</h5>
                                <div className='movie-info-sec'>
                                    <p>{movie.release_date}</p>
                                    <span>{movie.vote_average}</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
