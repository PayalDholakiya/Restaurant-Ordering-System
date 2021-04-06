<template>
  <div
    class="font-semibold text-3xl shadow-xl font-mono flex justify-around bg-pink-300 h-20 items-center text-2xl  font-sans"
  >
    <div class="flex justify-around ">
      <img class="h-10 w-10 mr-10" src="../assets/logo.jpg" />
      <ul class="list-none  flex flex-row gap-10 justify-center cursor-pointer">
        <li
          class="rounded-lg hover:bg-white hover:shadow-lg hover:border-transparent"
          @click="home"
        >
          Home
        </li>
        <li
          class="rounded-lg hover:bg-white hover:shadow-lg hover:border-transparent transition delay-300 duration-300 ease-in-out"
        >
          Menu
        </li>
      </ul>
    </div>
    <div class="flex">
      <!-- <img class="h-10 w-10 mr-10" src="../assets/cart.jpg" /> -->
      <button
        class="font-semibold hover:bg-white hover:shadow-lg hover:border-transparent rounded-lg"
        @click="cart"
      >
        Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    cart() {
      this.$router.push('/cart')
    },
    home() {
      this.$router.push('/')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
