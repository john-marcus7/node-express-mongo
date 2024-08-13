import { author } from "../models/Author.js";

class AuthorController {

    static async getAuthors(req, res) {
        try {
          const AuthorList = await author.find({});
          res.status(200).json(AuthorList);
        } catch (error) {
          res
            .status(500)
            .json({ message: `${error.message} - failed to get Authors.` });
        }
    }

    static async addAuthor(req, res) {
        try {
          const newAuthor = await author.create(req.body);
          res.status(201).json({ message: "Author added successfully", Author: newAuthor });
        } catch (error) {
          res
            .status(500)
            .json({ message: `${error.message} - failed to add Author.` });
        }
    }

    static async getAuthorById(req, res) {
      try {
        const id = req.params.id;
        const AuthorFound = await Author.findById(id);
        res.status(200).json(AuthorFound);
      } catch (error) {
        res
          .status(500)
          .json({ message: `${error.message} - failed to get Author with id ${id}.` });
      }
    }

    static async updateAuthorById(req, res) {
      try {
        const id = req.params.id;
        console.log(req.body);
        await Author.findByIdAndUpdate(id, req.body);
        const AuthorFound = await Author.findById(id);
        res.status(200).json({ message: "Author updated successfully", Author: AuthorFound });
      } catch (error) {
        res
          .status(500)
          .json({ message: `${error.message} - failed to update Author with id ${id}.` });
      }
    }

    static async deleteAuthorById(req, res) {
      try {
        const id = req.params.id;
        const AuthorFound = await Author.findByIdAndDelete(id);
        res.status(200).json({ message: "Author deleted successfully", Author: AuthorFound });
      }
      catch (error) {
        res
          .status(500)
          .json({ message: `${error.message} - failed to delete Author with id ${id}.` });
      }
    }

};

export default AuthorController;