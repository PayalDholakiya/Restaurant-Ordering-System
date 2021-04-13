<template>
  <div class="font-mono ">
    <Header />
    <div
      class="grid items-start grid-cols-1 gap-12 xl:grid-cols-3 sm:grid-cols-2 m-14 "
    >
      <Product :detail="item" v-for="(item, index) in getItems" :key="index" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '@/components/Header.vue'
import Product from '../components/Product.vue'

export default {
  name: 'Home',

  components: {
    Header,
    Product,
  },

  computed: {
    ...mapGetters(['getItems']),
  },

  async mounted() {
    await this.setItems()
  },

  methods: {
    ...mapActions(['setItems']),
  },
}
</script>
