<template>
  <section>
    <LatestPost />
    <MainPosts />
  </section>
</template>

<script>
import LatestPost from "@/components/LatestPost.vue";
import MainPosts from "@/components/MainPosts.vue";

export default {
  name: "home",
  components: {
    LatestPost,
    MainPosts,
  },
};
</script>

<style></style>
