<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="" alt="" />
      </router-link>
      <ul class="menu-navigation" id="menu-nav">
        <router-link to="/"
          ><li><a class="">Home</a></li></router-link
        >
        <router-link to="">
          <li>
            <a class="">Productivity Hacks</a>
          </li>
        </router-link>
        <router-link to="/podcasts">
          <li><a class="">Podcasts</a></li>
        </router-link>
        <router-link>
          <li><a class="">Books</a></li>
        </router-link>
        <li><a class="">Latest Posts</a></li>
        <li>
          <a class="">Get in touch</a>
        </li>
        <li>
          <a class="">Subscribe</a>
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
