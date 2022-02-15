import './Genres.css';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import MovieCards from './MovieCards';
import useSliding from '../hooks/useSliding';
import useSizeElement from '../hooks/useSizeElement';

const genreObj = [
    {
        id: 1,
        genre: 'Action',
        url: 'api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
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
const eventObj = [
    {
        id: 1,
        translation: 0,
        movement: 0,
        genre: 'Action',
        url: 'api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 2,
        translation: 0,
        movement: 0,
        genre: 'Drama',
        url: 'api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 3,
        translation: 0,
        movement: 0,
        genre: 'Crime',
        url: 'api.themoviedb.org/3/discover/movie?with_genres=80&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 4,
        translation: 0,
        movement: 0,
        genre: 'Children',
        url: 'api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 5,
        translation: 0,
        movement: 0,
        genre: 'Romance',
        url: 'api.themoviedb.org/3/discover/movie?with_genres=10749&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
    {
        id: 6,
        translation: 0,
        movement: 0,
        genre: 'Thriller',
        url: 'api.themoviedb.org/3/discover/movie?with_genres=53&sort_by=popularity.desc&api_key=9c9a236c211df46e640b24f29796b6c0&page=1',
    },
];
const PADDINGS = 200;
export default function Genres() {
    const [move, setMove] = useState(0);
    const [movement, setMovement] = useState(10);
    const [event, setEvent] = useState(eventObj);

    // =================================================
    // =================================================
    // =================================================
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    const [containerWidth, setContainerWidth] = useState(0);
    const [distance, setDistance] = useState(0);
    const [totalInViewport, setTotalInViewport] = useState(0);
    const [viewed, setViewed] = useState(0);

    useLayoutEffect(() => {
        if (containerRef.current.clientWidth != width) {
            setWidth(containerRef.current.clientWidth);
            const containerWidth = containerRef.current.clientWidth - PADDINGS;

            setContainerWidth(containerWidth);
            setTotalInViewport(Math.floor(containerWidth / 240));
        }
        // console.log(containerWidth);
        // console.log(viewed);
        // console.log(distance);
        // console.log(containerWidth);
    }, [containerRef.current]);

    const handlePrev = (e) => {
        // if (e) {
        //     setViewed(viewed - totalInViewport);
        //     setDistance(containerWidth);
        //     console.log(viewed, distance);
        // }
        console.log(event);

        setEvent((prevEvent) => {
            return prevEvent.filter((event) => {
                if (event.genre === e && event.translation + containerWidth < 1) {
                    setViewed(viewed - totalInViewport);
                    setDistance(containerWidth);
                    event.translation = event.translation + distance;
                    console.log(event.genre);
                    return event;
                } else {
                    return event;
                }
            });
        });
    };

    const handleNext = (e) => {
        console.log(event);
        // if (e) {
        //     console.log('distance: ', distance);
        //     console.log('totalInViewport: ', totalInViewport);
        //     console.log('viewed: ', viewed);
        //     console.log('width: ', width);
        // }
        setEvent((prevEvent) => {
            return prevEvent.filter((event) => {
                if (event.genre === e && event.translation - containerWidth > -260 * 19) {
                    setViewed(viewed + totalInViewport);
                    setDistance(containerWidth);
                    event.translation = event.translation - distance;
                    return event;
                } else {
                    return event;
                }
            });
        });

        // setEvent((prevEvent) => {
        //     return prevEvent.filter((event) => {
        //         if (event.genre === e) {
        //             setViewed(viewed + totalInViewport);
        //             setDistance(distance - containerWidth);

        //             return (event.translation = distance);
        //         } else {
        //             return true;
        //         }
        //     });
        // });
    };

    // =================================================
    // =================================================
    // =================================================

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
                        onClick={() => handlePrev(section.genre)}
                    >
                        <i className='fa-solid fa-chevron-left'></i>
                    </div>
                    <div
                        className='posters-section'
                        ref={containerRef}
                        style={{ transform: `translateX(${section.translation}px)` }}
                    >
                        <MovieCards
                            url={section.url}
                            genre={section.genre}
                            width={width}
                            setWidth={setWidth}
                        />
                    </div>
                    <div
                        className='chevron-right'
                        onClick={() => handleNext(section.genre)}
                    >
                        <i className='fa-solid fa-chevron-right'></i>
                    </div>
                </div>
            </div>
            <hr />
        </>
    ));
}
