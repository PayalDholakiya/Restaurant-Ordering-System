import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: [],
    orderData: [],

    user: null,
  },
  getters: {
    getItems: (state) => {
      console.log(state.orderData)
      return state.orderData
    },
    totalItems: (state) => {
      return state.total
    },
    totalPrice: (state) => {
      var sum = 0
      state.total.filter((e) => {
        if (e.Price) {
          sum += e.Price
          console.log(sum)
        }
      })
      return sum
    },
    getUser: (state) => {
      return state.user
    },
  },
  mutations: {
    add(state, ItemId) {
      const x = state.orderData.find((item) => {
        return item.id == ItemId
      })
      x.done = true
      const add = {
        id: ItemId,
        name: x.name,
        Price: x.price,
      }
      state.total.push(add)
      this.$toastr('Item added in cart.')
      this.$toastr.defaultTimeout = 2000
    },
    addUser(state, data) {
      console.log(state.user)
      state.user = data
    },
    setItems(state, data) {
      state.orderData = data
    },
  },
  actions: {
    add({ commit }, ItemId) {
      setTimeout(() => {
        commit('add', ItemId)
      })
    },
    addUser({ commit }, data) {
      commit('addUser', data)
    },
    setItems({ commit }) {
      var orderData = []
      firebase
        .database()
        .ref('items')
        .once('value')
        .then((data) => {
          const obj = data.val()
          for (let key in obj) {
            orderData.push({
              id: 1,
              name: obj[key].name,
              image: obj[key].image,
              price: obj[key].price,
              done: obj[key].done,
            })
          }
          commit('setItems', orderData)
          console.log(orderData, 'data')
        })
    },
  },
  modules: {},
})
