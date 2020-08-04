<template>
<div>
  <div class=" subscribe pt-32 flex flex-col justify-center border-solid border-red">
    <h1 class="subscribe-title pb-8">Subscribe to our newsletter 🚀 </h1>
    <p class="subscribe-title pb-8"> If you want to be a part of our Happy Algorithm community don't forget to sign up to our newsletter.
      We will have loads of new productivity hacks for you and much much more. 
    </p>
    <h2 class="subscribe-title pb-8">Click below to sign up</h2>
  </div>
  <form action="" class="flex justify-center flex-col">
    <label class="pt-4 pb-4 text-center " for="email ">Email*</label>
    <input class="email rounded p-1 shadow resize-none w-40"  name="email" type="email" v-model="email">
  </form>
  <div>
    <button class="bg-black text-white w-48 ml-8 p-2 rounded" @click.prevent="createSub">Submit</button>
  </div>
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
