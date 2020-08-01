<template>
  <form>
    
    <div class="user pt-24 flex flex-col justify-center">
      <h1 class="text-center mt-6 mb-10">Get in touch</h1>
      <label for="nome">Name</label>
      <input id="name" name="name" type="text" v-model="name" />
      <label for="email">Email</label>
      <input id="email" name="email" type="email" v-model="email" />
      <label for="message">Message</label>
      <input id="message" name="message" type="text" v-model="message" />
      
    </div>
    <button>Submit</button>
  </form>
</template>

<script>

import { mapFields } from "@/../helpers.js";

export default {
  computed:{
    ...mapFields({
      fields:[
        "name",
        "email",
        "message"
      ],
      base:"user",
      mutation:"UPDATE_USER"
    })
  }
};
</script>

<style></style>
