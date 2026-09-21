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

    return (
        <div>reviews</div>
    )   
}