<template>
  <section>
    <transition mode="out-in">
      <div
        v-if="books"
        key="books"
        class=" mt-32 grid grid-rows-1 grid-flow-col gap-4 justify-center"
      >
        <div
          class=" text-center mt-8 mb-8 pt-8 "
          v-for="(book, index) in books"
          :key="index"
        >
          <router-link :to="{ name: 'book', params: { id: book.id } }">
            <img
              class=" post-img rounded h-64 w-40 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
              :src="'/' + book.photo"
              :alt="book.title"
            />

            <h2 class="book-title pt-4 flex justify-center">
              {{ book.title }}
            </h2>
            <p class="text-justify text-sm pt-6 flex justify-center">
              {{ book.description }}
            </p>
          </router-link>
        </div>
      </div>
      <LoadingPage key="loading" v-else />
    </transition>
  </section>
</template>

<script>
import { api } from "@/../services.js";

export default {
  name: "Books",
  props: ["id"],
  data() {
    return {
      books: null,
    };
  },
  methods: {
    getAllBooks() {
      api.get(`/book`).then(response => {
        return (this.books = response.data);
      });
    },
  },
  created() {
    this.getAllBooks();
  },
};
</script>
