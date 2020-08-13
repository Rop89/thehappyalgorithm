<template>
  <section>
    <h2 class="mt-32 flex justify-center text-3xl ">The Happy Algorithm</h2>
    <transition mode="out-in">
      <div
        v-if="posts"
        key="posts"
        class="grid grid-rows-4 grid-flow-col justify-center"
      >
        <div
          class=" text-center mt-8 mb-8 pl-6 pt-8 "
          v-for="(post, index) in posts"
          :key="index"
        >
          <router-link :to="{ name: 'post', params: { id: post.id } }">
            <img
              class=" post-img rounded h-48 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
              :src="'/' + post.photo"
              :alt="post.title"
            />

            <h2 class="post-title pt-4 flex justify-center">
              {{ post.title }}
            </h2>
            <p class="text-justify text-sm pt-6 flex justify-center">
              {{ post.description }}
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
  name: "LatestPost",
  props: ["id"],
  data() {
    return {
      posts: null,
    };
  },
  methods: {
    getAllPosts() {
      window.setTimeout(() => {
        api.get(`/post`).then(response => {
          return (this.posts = response.data);
        });
      }, 1500);
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>

<style scoped></style>
