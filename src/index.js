const DBUri = "mongodb+srv://shahvez:Shahvez123@cluster0.w1f3t.mongodb.net";

import mongoose from "mongoose";
import express from "express";

const app = express();

(async () => {
  const connection = await mongoose.connect(`${DBUri}/BookDB`);
  console.log(connection.connection.host, "Host");
  app.listen(3000, () => {
    console.log("server is runnig");
  });
})();

import bookRouter from "./routes/book.routes.js";

app.use(express.json());

app.use("/books", bookRouter);
