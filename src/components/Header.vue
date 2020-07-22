<template>
  <header>
    <nav class="fixed top-0 left-0 z-1000 w-full pt-8 pb-8 bg-black text-white">
      <router-link to="/" class="">
        <img src="" alt="" />
      </router-link>
      <ul
        class="p-0 p-b-8 flex flex-row justify-center list-none text-sm cursor-pointer"
        id="nav"
      >
        <router-link to="/"
          ><li><a class="pr-4 hover:text-sofia">Home</a></li></router-link
        >
        <router-link to="">
          <li>
            <a class="pr-4 hover:text-sofia">Productivity Hacks</a>
          </li>
        </router-link>
        <router-link to="/podcasts">
          <li><a class="pr-4 hover:text-sofia">Podcasts</a></li>
        </router-link>
        <router-link>
          <li><a class="pr-4 hover:text-sofia">Books</a></li>
        </router-link>
        <li><a class="pr-4 hover:text-sofia">All Posts</a></li>
        <li>
          <a class="pr-4 hover:text-sofia">Get in touch</a>
        </li>
        <li>
          <a class="pr-4 hover:text-sofia">Subscribe</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
