import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String },
    price: { type: Number},
    pages: { type: Number},
    author: authorSchema
}, { versionKey: false });

// Create a model from the schema, using collection name "livros"
const book = mongoose.model("livros", bookSchema);

export default book;