<template>
  <section>
    <transition mode="out-in">
      <div
        v-if="hacks"
        key="hacks"
        class=" mt-32 grid grid-rows-1 grid-flow-col justify-center"
      >
        <div
          class=" text-center mt-8 mb-8 pl-6 pt-8 "
          v-for="(hack, index) in hacks"
          :key="index"
        >
          <a :href="hack.link" target="__blank">
            <img
              class=" hack-img rounded h-64 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 "
              :src="'/' + hack.img"
              :alt="hack.title"
            />
          </a>

          <h2 class="hack-title pt-4 flex justify-center">
            {{ hack.title }}
          </h2>
          <p class="text-justify text-sm pt-6 flex justify-center">
            {{ hack.description }}
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
  name: "ProductivityHacks",
  data() {
    return {
      hacks: null,
    };
  },
  methods: {
    getAllHacks() {
      api.get(`/hack`).then(response => {
        return (this.hacks = response.data);
      });
    },
  },
  created() {
    this.getAllHacks();
  },
};
</script>
