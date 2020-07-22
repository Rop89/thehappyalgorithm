<template>
  <section>
    <div>
      <ul></ul>
    </div>
  </section>
</template>

<script>
import { api } from "@/../services.js";

export default {
  name: "Post",
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
