<template>
  <div class="font-mono ">
    <Header />
    <div
      class="grid items-start grid-cols-1 gap-12 xl:grid-cols-3 sm:grid-cols-2 m-14 "
    >
      <div
        class="flex flex-col text-2xl bg-white shadow-2xl hover:shadow-xl"
        v-for="(item, index) in items"
        :key="index"
      >
        <div>
          <img class="w-full rounded-lg lg:h-80" :src="item.image" />
        </div>
        <div>
          <p>{{ item.name }}</p>
          <p>${{ item.price }}</p>
        </div>
        <div class="flex justify-center">
          <button
            @click="add(item)"
            class="flex p-2 my-3 text-xl text-white bg-pink-400 rounded-lg shadow-inner hover:bg-pink-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mt-1 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
  },
  computed: {
    ...mapGetters(['items']),
    ...mapGetters(['totalItems']),
  },
  methods: {
    add(item) {
      this.$store.dispatch('add', item.id)
    },
  },
}
</script>
