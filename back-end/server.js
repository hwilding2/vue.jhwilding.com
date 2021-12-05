/* eslint-disable */
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// connect to the database
mongoose.connect("mongodb://localhost:27017/books", {
  useNewUrlParser: true,
});

// Create a schema for books in the booklist:
const bookSchema = new mongoose.Schema({
  Title: String,
  Author: String,
  "Year Published": Number,
  "Year Read": Number,
  "Amazon Price": String,
  myRating: Number,
});

// Create a model for books in our collection.
const Book = mongoose.model("Book", bookSchema);

// Populate with our booklist if we're spinning up the server the first time.
const populate = async () => {
  try {
    let books = await Book.find();
    if (books.length == 0) {
      console.log("Populating booklist for the first time!");
      const bookList = require("./bookList.json");
      bookList.map(async (book) => {
        const addThis = new Book({
          Title: book.Title,
          Author: book.Author,
          "Year Published": book["Year Published"],
          "Year Read": book["Year Read"],
          "Amazon Price": book["Amazon Price"],
          myRating: book.Rating,
        });
        await addThis.save();
      });
    } else {
      console.log("You've already populated the basic booklist!");
    }
  } catch (error) {
    console.log(error);
  }
};
populate();

// Create a new item in the museum: takes a title and a path to an image.
app.post("/api/books", async (req, res) => {
  const book = new Book({
    Title: req.body.title,
    Author: req.body.author,
    "Year Published": req.body.yearPublished,
    "Amazon Price": req.body.price,
    "Year Read": req.body.yearRead,
    myRating: req.body.myRating,
  });
  try {
    await book.save();
    res.send(book);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
app.get("/api/books", async (req, res) => {
  try {
    let books = await Book.find();
    res.send(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/api/books/:id", async (req, res) => {
  try {
    await Book.deleteOne({ _id: req.params.id });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/books/:id", async (req, res) => {
  try {
    let book = await Book.findOne({ _id: req.params.id });
    book.myRating = req.body.myRating;
    book.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3030, () => console.log("Server listening on port 3030!"));
