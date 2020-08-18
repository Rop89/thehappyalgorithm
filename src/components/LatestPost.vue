<template>
  <section>
    <h2 class="site-title mt-32 flex justify-center text-3xl ">
      The Happy Algorithm
    </h2>
    <transition mode="out-in">
      <div
        v-if="posts"
        key="posts"
        class="grid grid-rows-1 grid-flow-col justify-center"
      >
        <div
          class=" text-center mt-8 mb-8 pl-6 pt-8 "
          v-for="(post, index) in posts"
          :key="index"
        >
          <a :href="post.link" target="__blank">
            <img
              class=" post-img rounded h-64 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 "
              :src="'/' + post.photo"
              :alt="post.title"
            />
          </a>

          <h2 class="post-title pt-4 flex justify-center">
            {{ post.title }}
          </h2>
          <p class="text-justify text-sm pt-6 flex justify-center">
            {{ post.description }}
          </p>
        </div>
      </div>
      <LoadingPage key="loading" v-else />
    </transition>
  </section>
</template>

<script>
import { api } from "@/../services.js";

export default {
  name: "LatestPost",
  data() {
    return {
      posts: null,
    };
  },
  methods: {
    getAllPosts() {
      api.get(`/post`).then(response => {
        return (this.posts = response.data);
      });
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>
