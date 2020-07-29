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
    <div
      class="footer-social flex flex-row justify-center text-white text-sm pb-3 cursor-pointer"
    >
      <div
        class="fa fa-instagram pr-3 hover:text-sofia"
        to="https://www.instagram.com"
      ></div>
      <div class="fa fa-twitter pr-3 hover:text-sofia" to="/"></div>
      <div class="fa fa-facebook pr-3 hover:text-sofia" to="/"></div>
      <div class="fa fa-youtube pr-3 hover:text-sofia" to="/"></div>
    </div>
    <div class="rights">
      <p>© Personal House Shopper. All rights reserved. Designed by THA.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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
