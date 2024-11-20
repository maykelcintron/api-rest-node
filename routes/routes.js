import {Router} from 'express';
import express from 'express';
import MovieController from '../controllers/movie.js';

const router = Router();

router.use(express.json());
router.get('/', MovieController.getAllMovies);
router.post('/', MovieController.createMovie);
router.patch('/:id', MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);

export default router;