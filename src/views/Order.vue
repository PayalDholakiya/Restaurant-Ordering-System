<template>
  <div>
    <Header />
    <div
      class="mx-10 mt-5 text-left bg-white px-5"
      v-for="(data, index) in orderData"
    >
      <div class="flex justify-between">
        <h1 class="font-bold ">Order Details : {{ index + 1 }}</h1>
        <svg
          @click="deleteData(data)"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 mt-1 mr-2 cursor-pointer "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
      <p>Name : {{ orderData[index].name }}</p>
      <p>Address : {{ orderData[index].address }}</p>
      <p>Items : {{ orderData[index].order.items }}</p>
      <p>Total amount : ${{ orderData[index].order.total }}</p>
      <hr />
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
export default {
  name: 'Order',
  components: {
    Header,
  },

  data() {
    return {
      orderData: [],
    }
  },
  methods: {
    add() {
      var counter = localStorage.getItem('counter')
      for (let i = 1; i <= counter; i++) {
        this.orderData.push(JSON.parse(localStorage.getItem('orderdata:' + i)))
      }
      console.log(orderData)
      return orderData
    },
    deleteData() {
      this.orderData.splice(this.orderData.indexOf(this.data), 1)
    },
  },
  created() {
    this.add()
  },
}
</script>
