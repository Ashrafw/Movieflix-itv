import './Genres.css';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import MovieCards from './MovieCards';

const genreObj = [
    // {
    //     id: 0,
    //     genre: 'Popular',
    //     url:
    //         'api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    // },
    {
        id: 1,
        genre: 'Action',
        url: 'api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
        // url: 'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 2,
        genre: 'Drama',
        url: 'api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 3,
        genre: 'Crime',
        url: 'api.themoviedb.org/3/discover/movie?with_genres=80&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 4,
        genre: 'Children',
        url: 'api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 5,
        genre: 'Romance',
        url: 'api.themoviedb.org/3/discover/movie?with_genres=10749&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 6,
        genre: 'Thriller',
        url: 'api.themoviedb.org/3/discover/movie?with_genres=53&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
];

export default function Genres() {
    const [width, setWidth] = useState(1000);
    const [move, setMove] = useState(0);
    const [event, setEvent] = useState([
        {
            id: 1,
            translation: 0,
            genre: 'Action',
            url: 'api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
        },
        {
            id: 2,
            translation: 0,
            genre: 'Drama',
            url: 'api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
        },
        {
            id: 3,
            translation: 0,
            genre: 'Crime',
            url: 'api.themoviedb.org/3/discover/movie?with_genres=80&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
        },
        {
            id: 4,
            translation: 0,
            genre: 'Children',
            url: 'api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
        },
        {
            id: 5,
            translation: 0,
            genre: 'Romance',
            url: 'api.themoviedb.org/3/discover/movie?with_genres=10749&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
        },
        {
            id: 6,
            translation: 0,
            genre: 'Thriller',
            url: 'api.themoviedb.org/3/discover/movie?with_genres=53&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
        },
    ]);
    const ref = useRef(2000);
    console.log(event);

    useEffect(() => {
        console.log('width', ref.current.clientWidth);
    }, [ref]);
    const moveRight = (e) => {
        console.log('you just clicked', e);
        console.log(ref.current);
        console.log(event);
        // setMove((prev) => prev - 70);

        setEvent((prevEvent) => {
            console.log('prevEvent: ', prevEvent);

            return prevEvent.filter((event) => {
                console.log('event.genre === e: ', event.genre === e);

                if (event.genre === e) {
                    console.log(event.translation);

                    return (event.translation =
                        event.translation - ref.current.clientWidth * 0.6);
                    console.log(event.translation);

                    // setMove(event.translation);
                } else {
                    return true;
                }
            });
        });
    };
    const moveLeft = (e) => {
        console.log('you just clicked', e);
        console.log(ref.current);
        console.log(event);
        // setMove((prev) => prev - 70);

        setEvent((prevEvent) => {
            console.log('prevEvent: ', prevEvent);
            return prevEvent.filter((event) => {
                console.log('event.genre === e: ', event.genre === e);
                if (event.genre === e) {
                    console.log(event.translation);
                    return (event.translation =
                        event.translation + ref.current.clientWidth * 0.6);
                } else {
                    return true;
                }
            });
        });
    };
    return event.map((section) => (
        <>
            <div className='genres' key={section.genre} id={section.genre}>
                <div className='genre-titles'>
                    <Link to={`/genre/${section.id}`}>
                        {section.genre}
                        <div className='explore'>
                            Explore <i className='fas fa-chevron-right'></i>
                        </div>
                    </Link>
                </div>
                <div className='posters'>
                    <div
                        className='chevron-left'
                        onClick={(e) => moveLeft(section.genre)}
                    >
                        <i class='fa-solid fa-chevron-left'></i>
                    </div>
                    <div
                        className='posters-section'
                        ref={ref}
                        style={{ transform: `translate(${section.translation}px)` }}
                    >
                        <MovieCards url={section.url} genre={section.genre} />
                    </div>
                    <div
                        className='chevron-right'
                        onClick={(e) => moveRight(section.genre)}
                    >
                        <i class='fa-solid fa-chevron-right'></i>
                    </div>
                </div>
            </div>
            <hr />
        </>
    ));
}
