<template>
  <section>
    <h2 class="mt-32 flex justify-center text-3xl ">The Happy Algorithm</h2>
    <div class="ml-10 flex flex-row">
      <div class="ml-64">
        <a href=""
          ><img class=" mt-8 pt-32 " src="../assets/study-work.png" alt=""
        /></a>
      </div>
      <div class="pl-32 pr-32 p-20 mt-8 ml-10 mr-64">
        <h2>Working and Studying Full - Time - What the heck?</h2>
        <p class="text-justify text-sm pt-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <router-link :to="{ name: 'post', params: { id: post.id } }">
          <div>
            <button class="read-more">Read more about this</button>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "LatestPost",
  props: ["id"],
};
</script>

<style scoped></style>
