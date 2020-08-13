<template>
  <section>
    <div class="mt-58">
      <ul>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
      <div class="mt-32" v-if="book">
        <h1>{{ book.title }}</h1>
        <p>{{ book.article }}</p>
      </div>
    </div>
  </section>
</template>
<script>
import { api } from "@/../services.js";
export default {
  name: "book",
  props: ["id"],
  data() {
    return {
      book: null,
    };
  },
  methods: {
    getBook() {
      api.get(`/book/${this.id}`).then(response => {
        this.book = response.data;
      });
    },
  },
  created() {
    this.getBook();
  },
};
</script>
