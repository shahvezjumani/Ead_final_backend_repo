import {Book} from "../models/book.model.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    if (!books) {
      throw new Error("Something went wrong while fetching all books");
    }

    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ _id: id });
    if (!book) {
      throw new Error("Something went wrong while fetching book");
    }

    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author } = req.body;

    
    if (!title || !author) {
      throw new Error("all fields are required");
    }

    const book = await Book.create({
      title,
      author,
    });

    if (!book) {
      throw new Error("Something went wrong while fetching book");
    }

    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("id is required to delete book");
    }

    await Book.deleteOne({ _id: id });

    return res.status(200).json({});
  } catch (error) {
    console.log(error);
  }
};

export { getAllBooks, getBookById, createBook, deleteBook };
