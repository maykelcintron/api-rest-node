import express from 'express';
import routes from './routes/routes.js';

const app = express();
app.use('/movies', routes);

app.listen(process.env.SERVER_PORT ?? 3000, () => {
    console.log(`Server running at http://localhost:${process.env.SERVER_PORT ?? 3000}/`);
});