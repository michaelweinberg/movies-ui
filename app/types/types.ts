export type Genre = 'Drama' | 'Science Fiction' | 'Crime' | 'Animation' | 'Thriller' | 'Comedy' | 'Horror' | 'Romance'

export interface Movie {
    genre: Genre;
    id: number;
    title: string;
}

export interface Review {
    comment: string;
    id: number;
    movie: Movie;
    rating: number;
}