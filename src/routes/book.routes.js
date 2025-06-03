import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  deleteBook,
} from "../controllers/book.controller.js";

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
router.delete("/:id", deleteBook);
