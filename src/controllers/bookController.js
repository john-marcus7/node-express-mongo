import book from "../models/Book.js";

class BookController {

    static async getBooks(req, res) {
        try {
          // controller calls model book through method book.find({})
          console.log("getBooks called");
          const bookList = await book.find({});
          res.status(200).json(bookList);
        } catch (error) {
          res
            .status(500)
            .json({ message: `${error.message} - failed to get books.` });
        }
    }

    static async addBook(req, res) {
        try {
          const newBook = await book.create(req.body);
          res.status(201).json({ message: "Book added successfully", book: newBook });
        } catch (error) {
          res
            .status(500)
            .json({ message: `${error.message} - failed to add book.` });
        }
    }

    static async getBookById(req, res) {
      try {
        const id = req.params.id;
        console.log("getBooks called");
        const bookFound = await book.findById(id);
        res.status(200).json(bookFound);
      } catch (error) {
        res
          .status(500)
          .json({ message: `${error.message} - failed to get book with id ${id}.` });
      }
    }

    static async updateBookById(req, res) {
      try {
        const id = req.params.id;
        console.log(req.body);
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

};

export default BookController;