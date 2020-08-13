<template>
  <footer class="bg-black mt-40">
    <div class="wrapper min-h-full h-auto mt-0 mr-auto m--10 ">
      <div
        class="flex flex-row justify-center w-full pt-8 pb-8 bg-black text-white "
      >
        <router-link class="pr-4 hover:text-sofia" to="/"
          >&uarr;Back to Top</router-link
        >

        <router-link class="pr-4 hover:text-sofia" to="/"> Home</router-link>
        <router-link class="pr-4 hover:text-sofia" to="/getintouch"
          >Get in touch
        </router-link>
      </div>
      <SocialMedia />
      <div
        class="rights flex justify-center align-middle pt-4 text-white text-sm "
      >
        <p class="m-0">
          © Personal House Shopper. All rights reserved. Designed by THA.
        </p>
      </div>
      <div class="push h-12"></div>
    </div>
    <div class="footer h-12"></div>
  </footer>
</template>

<script>
import SocialMedia from "@/components/SocialMedia.vue";
export default {
  name: "Footer",
  components: {
    SocialMedia,
  },
};
</script>

<style scoped></style>
