<template>
  <div
    class="flex items-center justify-around h-20  font-mono  text-3xl  font-semibold bg-pink-300 shadow-xl"
  >
    <div class="flex justify-around ">
      <img class="w-10 h-10 mr-10" src="../assets/logo.jpg" />
      <ul class="flex flex-row justify-center gap-10 list-none cursor-pointer">
        <li
          class=" rounded-lg hover:bg-white hover:shadow-lg hover:border-transparent"
        >
          <router-link to="/"> Home</router-link>
        </li>
      </ul>
    </div>
    <div class="flex">
      <div class="relative">
        <button
          class="font-semibold rounded-lg hover:p-5  hover:bg-white hover:shadow-lg hover:border-transparent"
        >
          <router-link to="/cart"> Cart</router-link>
        </button>
        <span class="absolute h-6 w-6 rounded-full  text-base bg-white">{{
          totalItems.length
        }}</span>
      </div>
      <button
        class="ml-8 font-semibold rounded-lg hover:bg-white hover:shadow-lg hover:border-transparent"
      >
        <router-link to="/order"> orders</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['totalItems']),
  },
}
</script>
