<template>
  <div id="app">
    <Header />
    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  background-color: #eaebeb;
  color: black;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background: black;
  color: white;
}

nav a:hover {
  color: #d5c8bb;
}

nav ul li a {
  padding: 0 16px;
  font-size: 14px;
  text-decoration: none;
}

.navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  padding-bottom: 10px;
}

a {
  color: inherit;
}

a:active {
  text-decoration: none;
}

a:link {
  text-decoration: none;
  color: white;
}
</style>
