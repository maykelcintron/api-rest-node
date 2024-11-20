import {movies} from '../data/movies.js';
import crypto from 'node:crypto';

class MovieModel{
    static getAllMovies(){
        return movies;
    }

    static createMovie(title, year, director){
        const movie = {
            id: crypto.randomUUID(), 
            title: title,
            year: year,
            director: director
        };

        movies.push(movie);
        return movies;
    }

    static updateMovie(id, {title, year, director}){
        const movie = movies.find(movie => movie.id == id);

        if (!movie) {
            return {error: 'Movie not found'};
        }

        const index = movies.findIndex(movie => movie.id == id);

        movie.title = title ?? movie.title;
        movie.year = year ?? movie.year;
        movie.director = director ?? movie.director;

        movies[index] = movie;
        return movies;
    }

    static deleteMovie(id){
        if (movies.findIndex(movie => movie.id == id) == -1) {
            return {error: 'Movie not found'};
        }
        movies.splice(movies.findIndex(movie => movie.id == id), 1);
        return movies;
    }
}

export default MovieModel;