<template>
  <div>
    <h1>The Book List</h1>
    <form class="pb-4">
      <h2>Add a Book</h2>
      <div class="">
        <div class="">
          <label for="Title">Title</label>
          <input id="Title" type="text" class="mx-2 p-1" v-model="title" />
        </div>
        <div class="">
          <label for="Author">Author</label>
          <input id="Author" type="text" class="mx-2 p-1" v-model="author" />
        </div>
      </div>
      <div class="">
        <label for="Title">Year Published</label>
        <input
          id="Title"
          type="text"
          class="mx-2 p-1"
          v-model="yearPublished"
        />
      </div>
      <div class="">
        <label for="Author">Price</label>
        <input id="Author" type="text" class="mx-2 p-1" v-model="price" />
      </div>
      <div class="">
        <label for="Title">Year Read</label>
        <input id="Title" type="text" class="mx-2 p-1" v-model="yearRead" />
      </div>
      <div>
        <label for="star-rating">Rating</label>
        <star-rating
          id="star-rating"
          @rating-selected="setRating(index)"
          v-bind:increment="0.5"
          active-color="red"
          v-bind:show-rating="false"
          v-model="myRating"
          :star-size="30"
        ></star-rating>
      </div>
    </form>
    <button class="button text-white" @click.prevent="submit">
      Add a new book!
    </button>

    <h2>Books We've Read</h2>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <!-- <th scope="col">#</th> -->
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Year Published</th>
          <th scope="col">Amazon Price</th>
          <th scope="col">Year Read</th>
          <th scope="col">Rating</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="book._id">
          <td>{{ book.Title }}</td>
          <td>{{ book.Author }}</td>
          <td>{{ book["Year Published"] }}</td>
          <td>{{ book["Amazon Price"] }}</td>
          <td>{{ book["Year Read"] }}</td>
          <td>
            <star-rating
              @rating-selected="setRating(index)"
              v-bind:increment="0.5"
              active-color="red"
              v-bind:show-rating="false"
              v-model="book.myRating"
              :star-size="20"
            ></star-rating>
          </td>
          <td class="text-center">
            <button class="bg-red-700 p-1" @click="removeBook(book._id)">
              &#10005;
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import axios from "axios";

export default {
  name: "BookList",
  components: {
    StarRating,
  },
  data() {
    return {
      books: [],
      title: "",
      author: "",
      yearPublished: 2000,
      price: "$10.00",
      yearRead: 2021,
      myRating: 3.5,
      ratings: {},
    };
  },
  created() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      try {
        let response = await axios.get("/api/books");
        this.books = response.data.sort(
          (a, b) => b["Year Read"] - a["Year Read"]
        );
        return true;
      } catch (error) {
        return false;
      }
    },
    async setRating(index) {
      try {
        await axios.put("/api/books/" + this.books[index]._id, {
          myRating: this.books[index].myRating,
        });
      } catch (error) {
        return error;
      }
    },
    async submit() {
      try {
        await axios.post("/api/books", {
          title: this.title,
          author: this.author,
          yearPublished: this.yearPublished,
          price: this.price,
          yearRead: this.yearRead,
          myRating: this.myRating,
        });
        this.getBooks();
      } catch (error) {
        error;
      }
    },
    async removeBook(id) {
      try {
        await axios.delete("/api/books/" + id);
        this.getBooks();
      } catch (error) {
        return error;
      }
    },
  },
};
</script>
