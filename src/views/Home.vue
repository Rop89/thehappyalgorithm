<template>
  <div>
    <section>
      <LatestPost />
      <MainPosts />
    </section>
  </div>
</template>

<script>
import LatestPost from "@/components/LatestPost.vue";
import MainPosts from "@/views/MainPosts.vue";

export default {
  name: "Home",
  components: {
    LatestPost,
    MainPosts,
  },
};
</script>

<style></style>
