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
    <div class="footer-social">
      <div class="fa fa-instagram" href="www.instagram.com"></div>
      <div class="fa fa-twitter" to="/"></div>
      <div class="fa fa-facebook" to="/"></div>
      <div class="fa fa-youtube" to="/"></div>
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
.footer ul li {
  list-style-type: none;
  padding: 10px;
  color: white;
}
.footer-navigation-social a:hover {
  color: #d5c8bb;
}
.footer-navigation,
.footer-navigation-social {
  display: flex;
  justify-content: center;
}
.footer-social > ul > li {
  list-style-type: none;
  padding: 10px;
  font-size: 20px;
}
.fa {
  color: white;
}
/*Rights*/

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
