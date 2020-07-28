<template>
  <header>
    <nav
      class="flex flex-row justify-center fixed top-0 left-0 z-1000 w-full pt-8 pb-8 bg-black text-white"
    >
      <router-link to="" class="">
        <img src="" alt="" />
      </router-link>
      <router-link class="pr-4 hover:text-sofia" to="/"> Home</router-link>
      <router-link class="pr-4 hover:text-sofia" to="/productivityhacks"
        >Productivity Hacks</router-link
      >
      <router-link class="pr-4 hover:text-sofia" to="/podcasts"
        >Podcasts</router-link
      >
      <router-link class="pr-4 hover:text-sofia" to="/books">Books</router-link>
      <router-link class="pr-4 hover:text-sofia" to="/getintouch"
        >Get in touch
      </router-link>
      <router-link class="pr-4 hover:text-sofia" to="/subscribe"
        >Subscribe
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
