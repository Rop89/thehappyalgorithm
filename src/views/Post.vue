<template>
  <section>
    <div class="mt-58 flex flex-col justify-center align-middle">
      <div class="mt-32 pt-6 " v-if="post">
        <img
          class="post-img rounded pb-6 "
          :src="'/' + post.photo"
          :alt="post.title"
        />
        <h1 class="article-title text-xl font-bold pb-6">{{ post.title }}</h1>
        <p>{{ post.article }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/../services.js";
export default {
  name: "post",
  props: ["id"],
  data() {
    return {
      post: null,
    };
  },
  methods: {
    getPost() {
      api.get(`/post/${this.id}`).then(response => {
        this.post = response.data;
      });
    },
  },
  created() {
    this.getPost();
  },
};
</script>
