<template>
  <section>
    <transition mode="out-in">
      <div
        v-if="podcasts"
        key="podcasts"
        class=" mt-32 ml-16 grid grid-rows-3 gap-3 grid-flow-col justify-center"
      >
        <div
          class=" text-center mt-8 mb-8 pt-8 "
          v-for="(podcast, index) in podcasts"
          :key="index"
        >
          <a :href="podcast.link" target="__blank">
            <img
              class=" post-img rounded h-64 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 "
              :src="'/' + podcast.img"
              :alt="podcast.title"
            />
          </a>
          <p class="text-justify text-sm pt-6 flex justify-center">
            {{ podcast.description }}
          </p>
        </div>
      </div>
      <LoadingPage key="loading" v-else />
    </transition>
  </section>
</template>

<script>
import { api } from "@/../services.js";

export default {
  name: "Podcasts",
  data() {
    return {
      podcasts: null,
    };
  },
  methods: {
    getAllPodcasts() {
      window.setTimeout(() => {
        api.get(`/podcast`).then(response => {
          return (this.podcasts = response.data);
        });
      }, 1500);
    },
  },
  created() {
    this.getAllPodcasts();
  },
};
</script>
