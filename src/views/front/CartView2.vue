<template>
<!--<LangyuanLoading v-model:active="isLoading"></LangyuanLoading>-->
<div class="container mt-5">
    <div class="mt-3">
        <div class="row">
          <div class="col-md-8">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 ps-0" style="width: 300px">品名</th>
                  <th scope="col" class="border-0" style="width: 200px">數量</th>
                  <th scope="col" class="border-0 text-end">小計</th>
                  <th scope="col" class="border-0"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-bottom border-top" v-for="cart in carts.carts" :key="cart.id">
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <td
                    style="width: 72px; height: 72px; background-size: cover;
                    background-position: center;"
                    :style="{backgroundImage:`url(${cart.product.imageUrl})`}"></td>
                    <p class="mb-0 fw-bold my-3 d-inline-block">{{cart.product.title}}</p>
                  </th>
                  <td class="border-0 align-middle">
                    <div class="input-group input-group-sm">
                        <div class="input-group mb-3">
                          <input
                            min="1"
                            type="number"
                            class="form-control"
                            v-model="cart.qty"
                            :disabled="cart.id === status.changeCartNumLoading"
                            @change="changeCartNum(cart,cart.qty)"
                          />
                          <span class="input-group-text bg-secondary3" id="basic-addon2"
                            >{{cart.product.unit}}</span
                          >
                        </div>
                      </div>
                  </td>
                  <td class="border-0 align-middle" style="max-width: 160px;"><p class="mb-0 ms-auto text-end">NT${{cart.total}}</p></td>
                  <td class="border-0 align-middle text-center"><i type="button" class="bi bi-trash3 text-danger fs-5" @click="deleteCartItem(cart.id)"></i></td>
                </tr>
              </tbody>
            </table>
            <div class="input-group w-50 mb-3">
              <input type="text" class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none" placeholder="Coupon Code" aria-label="Recipient's username" aria-describedby="button-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-primary border-bottom border-top-0 border-start-0 border-end-0 rounded-0" type="button" id="button-addon2"><i class="bi bi-send-fill"></i></button>
              </div>
            </div>
            <router-link to="/products">
                <button type="button" class="btn btn-outline-primary mb-5 mt-3">
                <i class="bi bi-chevron-compact-left"></i>
                回到商品專區
            </button>
            </router-link>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="fw-bold mb-4">購物明細</h4>
              <table class="table text-muted border-bottom">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                    <td class="text-end border-0 px-0 pt-4">NT${{ carts.final_total }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                    <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold">Total</p>
                <p class="mb-0 h4 fw-bold">NT${{ carts.final_total }}</p>
              </div>
              <router-link to="/order-confirmation"><button type="submit" class="btn btn-primary w-100 mt-4">輸入訂購人資訊</button></router-link>
            </div>
          </div>
        </div>
      </div>
</div>
<langyuan-footer></langyuan-footer>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import LangyuanFooter from '../../components/LangyuanFooter.vue'
// import LangyuanLoading from '../../components/LangyuanLoading.vue'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      isLoading: true,
      carts: {},
      status: {
        changeCartNumLoading: ''
      }
    }
  },
  methods: {
    getCart () {
      axios
        .get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart`)
        .then((res) => {
          this.carts = res.data.data
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },
    changeCartNum (item, qty = 1) {
      const order = {
        product_id: item.product_id,
        qty
      }
      this.status.changeCartNumLoading = item.id
      axios
        .put(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart/${item.id}`, { data: order })
        .then((res) => {
          this.status.changeCartNumLoading = ''
          this.getCart()
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },
    deleteCartItem (id) {
      Swal.fire({
        title: '確定刪除該品項?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定刪除',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart/${id}`)
            .then((res) => {
              this.getCart()
            })
            .catch((err) => {
              console.log(err.response.data.message)
            })
          Swal.fire({
            title: '已刪除成功',
            icon: 'success'
          })
        }
      })
    },
    deleteCartAll () {
      Swal.fire({
        title: '確定清空購物車?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/carts`)
            .then((res) => {
              this.getCart()
              Swal.fire({
                title: '已清空購物車',
                icon: 'success'
              })
            })
            .catch((err) => {
              console.log(err)
              Swal.fire({
                icon: 'error',
                title: err.response.data.message
              })
            })
        }
      })
    }
  },
  components: {
    // LangyuanLoading,
    LangyuanFooter
  },
  mounted () {
    this.getCart()
  }
}
</script>
