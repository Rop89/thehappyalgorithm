<template>
  <section>
    <h2 class="mt-32 flex justify-center text-3xl ">The Happy Algorithm</h2>
    <transition mode="out-in">
    <div class="grid grid-rows-4 grid-flow-col justify-center">
      <div class="ml-12 text-center " v-for="(post, index) in posts" :key="index">
        <router-link :to="{ name: 'post', params: { id: post.id } }">
          <a href=""
            ><img
              class=" mt-8 mb-8 pt-10 h-64 w-64"
              :src="'/' + post.photo"
              :alt="post.title"
          /></a>
          <h2>{{ post.title }}</h2>
          <p class="text-justify text-sm pt-6">
            {{ post.description }}
          </p>
        </router-link>
      </div>
    </div>
    </transition>
  </section>
</template>
<script>
import { api } from "@/../services.js";

export default {
  name: "LatestPost",
  props: ["id"],
  data() {
    return {
      posts: null,
    };
  },
  methods: {
    getAllPosts() {
      api.get(`/post`).then(response => {
       return this.posts = response.data;
      });
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>

<style scoped></style>
