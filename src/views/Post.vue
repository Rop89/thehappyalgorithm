<template>
  <section>
    <div class="mt-58">
      <ul>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
      <div class="mt-32">
        <h1>{{ post.title }}</h1>
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
        console.log(this.post);
      });
    },
  },
  created() {
    this.getPost();
  },
};
</script>

<style></style>
