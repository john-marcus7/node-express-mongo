import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String },
    price: { type: Number},
    pages: { type: Number}
}, { versionKey: false });

// Create a model from the schema, using collection name "livros"
const book = mongoose.model("livros", bookSchema);

export default book;