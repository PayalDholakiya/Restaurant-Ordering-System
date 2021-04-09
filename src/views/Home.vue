<template>
  <div class="font-mono ">
    <Header />
    <div
      class="grid items-start grid-cols-1 gap-12 xl:grid-cols-3 sm:grid-cols-2 m-14 "
    >
      <Products :detail="item" v-for="(item, index) in items" :key="index" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header.vue'
import Products from '../components/Products.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Products,
  },
  data() {
    return {
      details: '',
    }
  },
  computed: {
    ...mapGetters(['items']),
  },
}
</script>
