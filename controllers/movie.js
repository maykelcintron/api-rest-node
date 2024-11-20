import MovieModel from '../models/movie.js';

class MovieController {
    static getAllMovies(req, res) {
        return res.status(200).json(MovieModel.getAllMovies()) ?? res.status(400).json({error: 'No movies found'});
    }

    static createMovie(req, res) {
        const {title, year, director} = req.body;

        if (!title || !year || !director) {
            return res.status(400).json({error: 'Missing required fields'});
        }
        return res.status(201).json(MovieModel.createMovie(title, year, director));
    }

    static updateMovie(req, res) {
        const {id} = req.params;
        const {title, year, director} = req.body;

        const movie = {
            title: title,
            year: year,
            director: director 
        }

        return !id? res.status(400).json({error: 'Missing required fields'}) : res.status(200).json(MovieModel.updateMovie(id, movie));
    }

    static deleteMovie(req, res) {
        const {id} = req.params;
        return !id? res.status(400).json({error: 'Missing required fields'}) : res.status(200).json(MovieModel.deleteMovie(id));
    }
}

export default MovieController;