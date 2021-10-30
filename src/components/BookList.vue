<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
        <th scope="col">Year Published</th>
        <th scope="col">Amazon Price</th>
        <th scope="col">Year Read</th>
        <th scope="col">Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(book, index) in books" :key="index">
        <th scope="row">{{ index + 1 }}</th>
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
            v-model="book.Rating"
            :star-size="15"
          ></star-rating>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import bookList from "../../bookList.js";
import StarRating from "vue-star-rating";

export default {
  name: "BookList",
  components: {
    StarRating,
  },
  data() {
    return {
      books: bookList,
      rating: 0,
      ratings: {},
    };
  },
  methods: {
    setRating(rating, book) {
      this.ratings[book].rating = rating;
    },
  },
};
</script>