const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export async function fetchMovies() {
    const response = await fetch(`${BASE_URL}/movies`);
    if (!response.ok) throw new Error(`Something went wrong: ${response.status}`);
    return response.json();
}

export async function fetchMovie(id: number) {
    console.log('id value', id)
    const response = await fetch(`${BASE_URL}/reviews/${id}`)
    if (!response.ok) throw new Error(`Something went wrong: ${response.status}`);
    return response.json();
}
