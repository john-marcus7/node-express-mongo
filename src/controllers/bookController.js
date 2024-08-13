import book from "../models/Book.js";
import { author } from "../models/Author.js";

class BookController {

    static async getBooks(req, res) {
        try {
          const bookList = await book.find({});
          res.status(200).json(bookList);
        } catch (error) {
          res
            .status(500)
            .json({ message: `${error.message} - failed to get books.` });
        }
    }

    static async addBook(req, res) {
      const newBook = req.body;  
      try {
        const authorFound = await author.findById(newBook.author);
        const newBookFull = { ...newBook, author: { ...authorFound._doc} };  
        const createdBook = await book.create(newBookFull);
          res.status(201).json({ message: "Book added successfully", book: createdBook });
        } catch (error) {
          res
            .status(500)
            .json({ message: `${error.message} - failed to add book.` });
        }
    }

    static async getBookById(req, res) {
      const id = req.params.id;
      try {
        const bookFound = await book.findById(id);
        res.status(200).json(bookFound);
      } catch (error) {
        res
          .status(500)
          .json({ message: `${error.message} - failed to get book with id ${id}.` });
      }
    }

    static async updateBookById(req, res) {
      const id = req.params.id;
      const updatedBook = req.body;
      try {
        if (updatedBook.author) {
          const authorFound = await author.findById(updatedBook.author);
          if (!authorFound) {
            return res.status(404).json({ message: "Author not found" });
          }
          updatedBook.author = { ...authorFound._doc };
        }
        await book.findByIdAndUpdate(id, req.body);
        const bookFound = await book.findById(id);
        res.status(200).json({ message: "Book updated successfully", book: bookFound });
      } catch (error) {
        res
          .status(500)
          .json({ message: `${error.message} - failed to update book with id ${id}.` });
      }
    }

    static async deleteBookById(req, res) {
      try {
        const id = req.params.id;
        const bookFound = await book.findByIdAndDelete(id);
        res.status(200).json({ message: "Book deleted successfully", book: bookFound });
      }
      catch (error) {
        res
          .status(500)
          .json({ message: `${error.message} - failed to delete book with id ${id}.` });
      }
    }

    static async getBooksByPublisher(req, res) {
      const publisher = req.query.publisher;
      try {
        const booksFound = await book.find({ publisher: publisher });
        res.status(200).json(booksFound);
      } catch (error) {
        res
          .status(500)
          .json({ message: `${error.message} - failed to get books with publisher ${publisher}.` });
      }
    }

};

export default BookController;