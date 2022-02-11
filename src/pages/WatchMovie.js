import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

import './WatchMovie.css';

export default function WatchMovie() {
    const { id } = useParams();
    const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
    const Url = `https://api.themoviedb.org/3/movie/${id}?api_key=9c9a236c211df46e640b24f29796b6c0&language=en-US`;
    const { data, isPending, error } = useFetch(Url);
    const [imgBackdrop, setImgBackdrop] = useState(null);
    const [imgPoster, setImgPoster] = useState(null);
    useEffect(() => {
        if (data) {
            console.log('hello');
            setImgBackdrop(IMG_URL + data.backdrop_path);
            setImgPoster(IMG_URL + data.poster_path);
        }
    }, [isPending, data, error, imgBackdrop]);

    return (
        <>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <div className='main-movie'>
                    <div className='movie-img'>
                        <img src={imgBackdrop} alt='' />
                        <div className='play-icon'>
                            <i class='fa-solid fa-play'></i>
                        </div>
                    </div>

                    <div className='movie-info'>
                        {/* <div className='logo'>{data.id}</div> */}
                        <img src={imgPoster} alt='' />
                        <div className='movie-info-main'>
                            <h1>{data.original_title}</h1>
                            <h2></h2>
                            <p>{data.overview}</p>
                            <h3>Genres: </h3>
                            <ul>
                                {data.genres.map((gen) => (
                                    <li>{gen.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='movie-info-sec'>
                            <h3>Release date: {data.release_date}</h3>
                            <h3>Rating: {data.vote_average}</h3>
                            <h3>Runtime: {data.runtime}min</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
