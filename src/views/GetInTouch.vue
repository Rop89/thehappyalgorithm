<template>
<div class="form">
  <form class=" form flex justify-center">
    <div class="form-container pt-24 flex flex-col justify-center ">
      <h1 class="text-center text-lg mt-6 mb-10">Get in touch 📱</h1>
      <label class="pt-4 pb-4 text-center" for="name">Name</label>
      <input class="name rounded p-1 shadow resize-none"  name="name" type="text" v-model="name" />
      <label class="pt-4 pb-4 text-center " for="email ">Email*</label>
      <input class="email rounded p-1 shadow resize-none"  name="email" type="email" v-model="email">
      <label class="pt-4 pb-4 text-center" for="message">Message</label>
      <textarea class="message w-64 resize-none rounded mb-8 shadow" name="message" type="text" v-model="message"></textarea>
      <button class="bg-black text-white w-48 ml-8 p-2 rounded" @click.prevent="createUser">Submit</button>
    </div>
  </form>
  <div class="social-media-contact">
  <h1 class="flex justify-center pt-16 text-lg">Or message us on one of our Social Media channels</h1>
  <SocialMedia class="pt-8 text-4xl"/>
  </div>


  </div>
  
</template>

<script>

import { mapFields } from "@/../helpers.js";
import SocialMedia from "@/components/SocialMedia.vue"

export default {
  components:{
    SocialMedia
  },
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
  },
  methods:{
    async createUser(){
     try {
        await this.$store.dispatch("createUser", this.$store.state.user);
        await this.$store.dispatch(
          "getUser",
          this.$store.state.user.email
        );
        this.$router.push({ name: "user" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};

</script>

<style>



</style>
