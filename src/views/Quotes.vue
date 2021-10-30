<template>
  <body
    class="home-body"
    :style="{
      backgroundImage: 'url(' + require('@/assets/img/brightangel.jpg') + ')',
    }"
  >
    <div class="container">
      <h1 class="display-4 text-center p-5">words to live by</h1>
      <div class="app">
        <p class="words-section">
          Here you'll find a collection of some of our favorite quotes that
          inspire us every day. Simply select a category and press "Get Quote"
          to retrieve a random quote from our repository.
        </p>
        <div class="select">
          <select
            id="category"
            name="category"
            v-model="category"
            class="form-select form-select-lg"
          >
            <option
              v-for="option in categories"
              :key="option._id"
              :value="option.name"
            >
              {{ camelCaseClean(option.name) }}
            </option>
          </select>
          <button
            id="getQuote"
            @click.prevent="getQuote"
            class="btn btn-primary"
          >
            Get Quote
          </button>
        </div>
      </div>
      <div id="quote" v-if="showQuote" class="words-section">
        <p id="quote-content">{{ this.quote }}</p>
        <p id="quote-author" class="author">
          <i>&quot; {{ this.author }} &quot;</i>
        </p>
      </div>
      <img src="@/assets/img/books.jpg" class="image" />
    </div>
  </body>
</template>

<style scoped>
body {
  /* font-family: 'Raleway', sans-serif; */
  color: black;
  display: flex;
  flex-direction: column;
}

.footer {
  flex-shrink: 0;
}

.words-body {
  /* background: url(../img/snowcanyon.jpg) no-repeat center center fixed; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.words-section {
  border-radius: 2em;
  background-color: #fdf7f7;
  padding: 2em;
}

.app {
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding: 1em;
  margin: 1em;
}

.select {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 1em;
}

#quote {
  font-size: 24px;
  margin: 1em;
}

#quote-text {
  font-style: italic;
  text-align: center;
}

#quote-author {
  text-align: center;
}

.logo {
  max-width: 3em;
}

.bg-custom {
  background-image: linear-gradient(#5c2018, rgba(0, 0, 0, 0.2));
}

.bg-custom-dark {
  background-color: #5c2018;
}

.container {
  padding: 2em;
  background-color: #f3e0dc;
}

.title {
  background-color: #f3e0dc;
  color: #5c2018;
  padding: 2vh;
  border-radius: 1em;
}

.column {
  display: flex;
  flex-direction: column;
  width: 33%;
}

.image {
  max-width: 100%;
  height: auto;
  cursor: pointer;
  display: block;
  z-index: 999;
  -webkit-transition-property: all;
  -webkit-transition-duration: 1s;
  -webkit-transition-timing-function: ease;
}

.image:hover {
  transform: scale(1.1);
}

/* Mobile Styles */
@media only screen and (max-width: 500px) {
  .app {
    flex-direction: column;
  }

  .title {
    font-size: 2.5em;
    width: 100%;
    margin: 3em 0em;
  }

  .container {
    margin: 0em;
  }

  .column {
    width: 100%;
  }

  .footer {
    flex-shrink: 0;
  }
}

/* Tablet Styles */
@media only screen and (min-width: 501px) and (max-width: 960px) {
  .title {
    font-size: 2.5em;
    width: 100%;
    margin: 3em 0em;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .plans-img {
    max-width: 100%;
    border-radius: 2em;
  }

  .plan {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .col1,
  .col2 {
    width: 50%;
    padding: 2em;
  }

  .col1,
  .right {
    text-align: left;
    float: right;
  }

  .col2,
  .left {
    text-align: left;
    float: left;
  }

  .plan p {
    font-style: italic;
  }
}
</style>

<script>
// import axios from "axios";

export default {
  name: "Quotes",
  data() {
    return {
      url: "https://api.quotable.io",
      category: String,
      categories: Array,
      quote: "",
      author: "",
      showQuote: false,
    };
  },
  async created() {
    await this.loadCategories();
    this.category = this.categories[0].name;
  },
  methods: {
    async loadCategories() {
      try {
        let response = await fetch(this.url + "/tags");
        this.categories = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    camelCaseClean(str) {
      str = str.replace("-", " ");
      let splitStr = str.split(" ");
      for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
      }
      str = splitStr.join(" ");
      return str;
    },
    async getQuote() {
      try {
        let response = await fetch(this.url + "/random?" + this.category);
        let json = await response.json();
        this.quote = json.content;
        this.author = json.author;
        this.showQuote = true;
      } catch (error) {
        return error;
      }
    },
  },
};
</script>
