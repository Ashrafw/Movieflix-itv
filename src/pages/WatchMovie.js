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
    const [rate, setRate] = useState(0);
    const [starts, setStarts] = useState([]);

    useEffect(() => {
        if (data) {
            console.log('hello');
            setImgBackdrop(IMG_URL + data.backdrop_path);
            setImgPoster(IMG_URL + data.poster_path);
            setRate(Math.floor(data.vote_average / 2));
            // setRate((prev) => prev / 2);
            let sizeArr = new Array(rate);
            console.log(sizeArr);
            // sizeArr.map((m) => <i class='fa-solid fa-star'></i>);
            for (let i = 0; i < rate; i++) {
                sizeArr[i] = <i class='fa-solid fa-star'></i>;
            }
            if (rate < 5) {
                for (let i = sizeArr.length; i < 5; i++) {
                    sizeArr[i] = <i class='fa-solid fa-star gray'></i>;
                }
            }

            setStarts(sizeArr);
            console.log(starts);
        }
    }, [isPending, rate, data, error, imgBackdrop]);

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
                            {data.adult ? (
                                <img src='/images/18.svg' alt='' />
                            ) : (
                                <img src='/images/pg.png' alt='' />
                            )}
                            <ul>
                                {starts.map((s) => (
                                    <li>{s}</li>
                                ))}
                            </ul>
                            <h3>Release date: {data.release_date}</h3>
                            {/* <h3>Rating: {rate}</h3> */}

                            <h3>
                                Runtime: <span>{data.runtime}min</span>{' '}
                            </h3>
                            <h3>
                                Status: <span>{data.status}</span>{' '}
                            </h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
