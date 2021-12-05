<template>
  <body
    class="home-body"
    :style="{
      backgroundImage: 'url(' + require('@/assets/img/brightangel.jpg') + ')',
    }"
  >
    <div class="container">
      <BookList />
    </div>
  </body>
</template>

<script>
import BookList from "../components/BookList.vue";

export default {
  name: "Books",
  components: {
    BookList,
  },
};
</script>
