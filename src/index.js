const DBUri = "mongodb+srv://shahvez:Shahvez123@cluster0.w1f3t.mongodb.net";

const express = require("express");

const app = express();

app.get("/", () => {
  console.log("I am Happy");
});

app.listen(3000, () => {
  console.log("server is running");
});
