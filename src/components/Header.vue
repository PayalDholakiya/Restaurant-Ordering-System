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
      <button
        class="font-semibold rounded-lg hover:bg-white hover:shadow-lg hover:border-transparent"
      >
        <router-link to="/cart"> Cart</router-link>
      </button>
      <button
        class="ml-5 font-semibold rounded-lg hover:bg-white hover:shadow-lg hover:border-transparent"
      >
        <router-link to="/order"> orders</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
