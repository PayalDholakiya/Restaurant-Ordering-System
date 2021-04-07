<template>
  <div>
    <Header />
    <div v-if="data" class="m-10 font-mono text-2xl">
      <div
        class="sm:flex justify-between items-center m-5 gap-5 shadow-xl hover:shadow-2xl "
        v-for="order in totalItems"
      >
        <img class="h-16 w-20" :src="order.Image" />
        <div>
          <p>{{ order.name }}</p>
        </div>
        <div>
          <p class="pr-10">${{ order.Price }}</p>
        </div>
      </div>
      <div class="flex flex-row-reverse pr-14 ">Total: ${{ Price }}</div>
      <div>
        <button
          @click="orderconfirm"
          class="bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-600"
        >
          OrderNow
        </button>
      </div>
    </div>
    <div v-if="show" class="m-20 font-mono text-xl">
      <form class="inline-block">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Full Name:
            </label>
          </div>
          <div>
            <input
              v-model="user.name"
              class="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Address :
            </label>
          </div>
          <div>
            <input
              v-model="user.address"
              class="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            >
              Phone :
            </label>
          </div>
          <div>
            <input
              v-model="user.phone"
              class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            />
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              @click="Submit"
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    <div v-if="order" class="my-40 font-mono text-3xl">
      <p>Your order placed successfully !!.</p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '../components/Header'
import Order from '../views/Order'
export default {
  data() {
    return {
      data: true,
      show: false,
      order: false,
      hide: false,
      orderData: null,
      user: {
        name: '',
        address: '',
        phone: '',
      },
    }
  },
  components: {
    Header,
    Order,
  },
  computed: {
    ...mapGetters({
      totalItems: 'totalItems',
      Price: 'totalPrice',
    }),
  },
  methods: {
    ...mapActions(['addUser']),

    orderconfirm() {
      this.show = true
      this.data = false
    },
    Submit() {
      this.order = true
      this.show = false

      var user = {
        ...this.user,
        order: {
          items: this.totalItems.length,
          total: this.Price,
          item: [
            {
              item: this.totalItems,
            },
          ],
        },
      }
      var counter = localStorage.getItem('counter')
      counter++
      localStorage.setItem('orderdata:' + counter, JSON.stringify(user))
      this.orderData = JSON.parse(localStorage.getItem('orderdata:' + counter))
      localStorage.setItem('counter', counter)
    },
  },
}
</script>
