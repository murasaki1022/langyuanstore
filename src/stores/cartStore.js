import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import axios from 'axios'
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    cart: [],
    carts: {},
    final_total: 0,
    total: 0
  }),
  actions: {
    getCart () {
      axios
        .get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart`)
        .then((res) => {
          this.cart = res.data.data.carts
          this.final_total = res.data.data.final_total
          this.total = res.data.data.total
        })
    },
    addCart (id, qty = 1) {
      const order = {
        product_id: id,
        qty
      }
      axios
        .post(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart`, { data: order })
        .then((res) => {
          Swal.fire(res.data.message)
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
})
