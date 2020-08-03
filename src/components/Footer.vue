<template>
  <footer class="bg-black mt-40">
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
  <SocialMedia/>
    <div class="rights">
      <p>© Personal House Shopper. All rights reserved. Designed by THA.</p>
    </div>
  </footer>
</template>

<script>

import SocialMedia from "@/components/SocialMedia.vue";
export default {
  name: "Footer",
  components:{
    SocialMedia
  }
};
</script>

<style scoped>
.rights {
  padding-top: 10px;
  text-align: center;
  color: white;
  font-size: 12px;
}

.rights p {
  padding-bottom: 15px;
  margin: 0;
}
</style>
