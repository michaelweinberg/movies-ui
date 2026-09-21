'use client';

import { useEffect, useState } from 'react';

import Link from "next/link";
import { Movie, Genre} from "../types";
import { fetchMovies } from "../lib/api"
import MoviesListItem from './MoviesListItem';

export default function MoviesList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMovies()
        .then(response => {
            console.log('response', response);
            setMovies(response)
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => setLoading(false));
    }, [])

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if (movies.length == 0) {
        return (
            <h3>
                No movies found...
            </h3>
        )
    }
    return (
        <>
        <h3>Movie List</h3>
            <ul>
                { movies.map(movie => (
                    <MoviesListItem key ={movie.id} movie={movie} />
                ))}
            </ul>
        </>
    )
}