<template>
  <section>
    <div v-if="post" class="pt-20">
      <h1>Post</h1>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
        voluptas quam iusto, nostrum unde pariatur asperiores nihil atque a
        velit facere inventore reiciendis excepturi, sequi eum! Ipsum aperiam
        odio sed.
      </p>
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
      posts: null,
    };
  },
  methods: {
    getPost() {
      api.get(`/post/${this.id}`).then(response => {
        this.posts = response.data;
        console.log(this.posts);
      });
    },
  },
  created() {
    this.getPost();
  },
};
</script>

<style></style>
