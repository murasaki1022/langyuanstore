<template>
<div class="container mt-5" style="width: 800px">
<div class="container bg-primary"><p class="pt-3 pb-3 px-2 mb-3 fs-5 fw-bold">訂單資訊</p></div>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">品名</th>
            <th scope="col">數量/單位</th>
            <th scope="col">小計</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="cart in carts.carts" :key="cart.id">
            <td>{{ cart.product.title }}</td>
            <td>{{ cart.qty }} / {{ cart.product.unit }}</td>
            <td>{{ cart.final_total }}</td>
        </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2" class="text-end">總計</td>
                <td class="text-end">${{ carts.final_total }}</td>
            </tr>
        </tfoot>
    </table>
    <div class="container bg-primary"><p class="pt-3 pb-3 px-2 mb-3 fs-5 fw-bold">訂購人資訊</p></div>
    <table class="table">
        <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      carts: {}
    }
  },
  methods: {
    getOrder () {
      axios
        .get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart`)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
