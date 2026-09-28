import { useEffect, useState } from "react";

import Link from "next/link";
import { Movie } from "../types";
import MovieReview from "./MovieReview";


export type MovieListItemProps = {
    movie: Movie;
}

export default function MoviesListItem(props: MovieListItemProps) {
    const { movie } = props
    const [selected, setSelected] = useState<Boolean>(false);

    useEffect(() => {
        console.log('selected', selected);
    }, [selected])

    return (
        <li onClick={() => setSelected(prev => !prev)}>
            <div>
                <a>
                    <span>
                        {movie.title}
                    </span>
                </a>
                {selected ? <MovieReview id={movie.id} title={movie.title} /> : null}
            </div>
        </li>
    )
}
