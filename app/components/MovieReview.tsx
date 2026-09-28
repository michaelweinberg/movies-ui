'use client';

import { useEffect, useState } from 'react';

import { fetchMovie } from "../lib";
import { Review } from '../types';

export type MovieReviewProps = {
    id: number;
    title: string;
}

export default function MovieReview(props: MovieReviewProps) {
    const { id, title } = props;
    const [reviews, setReviews] = useState<Review[] | null>(null);

    useEffect(() => {
        fetchMovie(id)
        .then(response => {
            console.log('reviews response', response);
            setReviews(response)
        })
        .catch(error => {
            console.error(error);
        })
    }, [])

    useEffect(() => {
        console.log('reviews', reviews);
    }, [reviews])

    return (
        <div>
            {
                reviews ? reviews?.map(review => (
                    <>  
                        <p>Reivew for {title}</p>
                        <div>{review.comment}</div>
                        <div>{review.movie.genre}</div>
                    </>
                )) : null
            }
        </div>
    )   
}