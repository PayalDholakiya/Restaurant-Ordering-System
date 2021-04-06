<template>
  <div class="font-mono ">
    <Header />
    <div
      class="grid grid-cols-1 gap-12 items-start  xl:grid-cols-3 sm:grid-cols-2 m-14 "
    >
      <div
        class="flex flex-col text-2xl shadow-2xl hover:shadow-xl"
        v-for="(item, index) in items"
        :key="index"
      >
        <div>
          <img class="rounded-lg lg:h-80 w-full" :src="item.image" />
        </div>
        <div>
          <p>{{ item.name }}</p>
          <p>${{ item.price }}</p>
        </div>
        <div>
          <button
            @click="add(item)"
            class="my-3 shadow-inner bg-pink-400 p-2 rounded-lg hover:bg-pink-500 shadow-inner rounded-lg text-xl text-white"
          >
            AddToCart
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
  },
  methods: {
    add(item) {
      this.$store.dispatch('add', item.id)
    },
  },
}
</script>
