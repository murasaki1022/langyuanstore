<template>
    <div class="container mt-5">
        <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-6">
          <div class="border p-4 mb-4">
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 pb-4 font-weight-normal">訂單編號</th>
                  <td class="border-0 px-0 pt-4">{{ order.id }}
                  <!-- 複製單號功能後補 -->
                  <!-- <button type="button" class="mx-3 btn btn-outline-primary btn-sm">複製單號</button> -->
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">收件人姓名</th>
                  <td class="border-0 px-0 pt-0 pb-4">{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">收件人手機</th>
                  <td class="border-0 px-0 pt-0 pb-4">{{ order.user.tel}}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">收件人Email</th>
                  <td class="border-0 px-0 pt-0 pb-4">{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">收件人地址</th>
                  <td class="border-0 px-0 pt-0 pb-4">{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">備註</th>
                  <td class="border-0 px-0 pt-0 pb-4">{{ order.message }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款狀態</th>
                  <td class="border-0 px-0 pt-0 pb-4">未付款</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-4">
          <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col" class="border-0 ps-0 text-center">品名</th>
                  <th scope="col" class="border-0">數量</th>
                  <th scope="col" class="border-0 text-end">小計</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-bottom border-top" v-for="order in order.products" :key="order.id">
                  <td class="py-3">{{ order.product.title }}</td>
                  <td class="py-3 border-0 align-middle">{{ order.qty }}/ {{ order.product.unit }}</td>
                  <td class="py-3 border-0 align-middle" style="max-width: 160px;"><p class="mb-0 ms-auto text-end">NT$ {{ order.total }}</p></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td class="py-3 text-end">總計：NT$ {{ order.total }}</td>
                </tr>
              </tfoot>
            </table>
            <button type="submit" class="btn btn-primary w-100 mt-4" @click.prevent="payOrder">確認付款</button>
          </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import cartStore from '@/stores/cartStore'
import { mapActions, mapState } from 'pinia'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      order: {
        user: {},
        product: {}
      },
      orderProduct: [],
      orderId: this.$route.params.id
    }
  },
  methods: {
    getOrder (id) {
      axios.get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/order/${id}`)
        .then((res) => {
          this.order = res.data.order
          this.orderProducts = Object.keys(this.order.products).map((i) => this.order.products[i])
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    payOrder () {
      axios.post(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/pay/${this.orderId}`)
        .then((res) => {
          Swal.fire(res.data.message)
          this.$router.push('/payment-complete')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    ...mapActions(cartStore, ['getCart'])
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  mounted () {
    this.getOrder(this.orderId)
  }
}
</script>
