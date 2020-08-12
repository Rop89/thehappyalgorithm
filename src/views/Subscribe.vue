<template>
<div class="subscribe-wrapper"> 
  <div class=" subscribe pt-40 flex flex-col items-center ">
      <h1 class="subscribe-title pb-8 text-lg">Subscribe to our newsletter 🚀 </h1>
      <p class="subscribe-title pb-8">If you want to be a part of our Happy Algorithm community don't forget to sign up to our newsletter.<br>
        We will have loads of new productivity hacks for you and much much more. 
      </p>
  </div>
    <form action="" class="flex flex-col justify-center items-center">
      <label class="pt-4 pb-4 text-center" for="email">Email*</label>
      <input class="email rounded p-1 shadow resize-none w-56"  name="email" type="email" v-model="email">
      <button class="bg-black text-white w-48 mt-8 p-3 rounded" @click.prevent="createSub">Submit</button>
    </form>
  </div>


</template>

<script>
import { mapFields } from "@/../helpers.js";
export default {
  computed:{
    ...mapFields({
      fields:[
        "email",
      ],
      base:"subscriber",
      mutation:"UPDATE_SUBSCRIBER"
    })
  },
  methods:{
    async createSub(){
     try {
        await this.$store.dispatch("createSub", this.$store.state.subscriber);
        await this.$store.dispatch(
          "getSubscriber",
          this.$store.state.subscriber.id
        );
        this.$router.push({ name: "email" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};

</script>

<style>


</style>
