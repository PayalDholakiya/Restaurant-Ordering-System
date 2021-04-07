<template>
  <div>
    <Header />
    <div class="mx-10 mt-5 text-left" v-for="(data, index) in orderData">
      <h1 class="font-bold ">Order Details : {{ index + 1 }}</h1>
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
  },
  created() {
    this.add()
    // var counter = localStorage.getItem('counter')

    // for (let i = 1; i <= counter; i++) {
    //   this.orderData.push(JSON.parse(localStorage.getItem('orderdata:' + i)))
    // }
    // console.log(orderData[1])
    // return orderData
  },
}
</script>
