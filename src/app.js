import express from 'express';
import connectMongoDB from './config/dbConnect.js';
import routes from './routes/index.js';

const connection = await connectMongoDB();

const app = express();
routes(app);

app.delete("/books/:id", (req, res) => {
    const index = getBookById(req.params.id);
    books.splice(index, 1);
    res.status(200).json(books);
})

export default app;