<template>
  <div
    id="app"
    class="bg-erik font-joan text-black w-full h-100 m-0 p-0 overflow-hidden"
  >
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
/* a {
  color: inherit;
}

a:active {
  text-decoration: none;
}

a:link {
  text-decoration: none;
  color: white;
} */
</style>
