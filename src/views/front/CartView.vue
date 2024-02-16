<template>
    <loading v-model:active="isLoading">
          <div class="loadingio-spinner-ripple-64xhhn6i6r6">
            <div class="ldio-aeq8wza18cr">
              <div></div>
              <div></div>
            </div></div
        ></loading>
<div class="container">
 <div class="mt-4">
                <!-- 購物車列表 -->
              <div class="text-end">
                <button
                  class="btn btn-outline-danger"
                  type="button"
                  @click="deleteCartAll()"
                >
                  清空購物車
                </button>
              </div>
              <table class="table align-middle">
                <thead>
                  <tr>
                    <th></th>
                    <th>品名</th>
                    <th style="width: 150px">數量/單位</th>
                    <th class="text-end">單價</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cart in carts.carts" :key="cart.id">
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        @click="deleteCartItem(cart.id)"
                      >
                        x
                      </button>
                    </td>
                    <td>{{cart.product.title}}</td>
                    <td>
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
                          <span class="input-group-text" id="basic-addon2"
                            >{{cart.product.unit}}</span
                          >
                        </div>
                      </div>
                    </td>
                    <td class="text-end">${{cart.total}}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-end">總計</td>
                    <td class="text-end">${{carts.final_total}}</td>
                  </tr>
                </tfoot>
              </table>
            <div class="my-5 row justify-content-center">
              <v-form
                ref="form"
                class="col-md-6"
                v-slot="{ errors }"
                @submit="onSubmit"
              >
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <v-field
                    id="email"
                    name="email"
                    type="email"
                    class="form-control"
                    rules="email|required"
                    :class="{ 'is-invalid': errors['email'] }"
                    placeholder="請輸入 Email"
                    v-model="form.user.email"
                  ></v-field>
                  <error-message
                    name="email"
                    class="invalid-feedback"
                  ></error-message>
                </div>

                <div class="mb-3">
                  <label for="name" class="form-label">收件人姓名</label>
                  <v-field
                    id="name"
                    name="收件人姓名"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['收件人姓名'] }"
                    placeholder="請輸入姓名"
                    rules="required"
                    v-model="form.user.name"
                  ></v-field>
                  <error-message
                    name="收件人姓名"
                    class="invalid-feedback"
                  ></error-message>
                </div>

                <div class="mb-3">
                  <label for="tel" class="form-label">收件人電話</label>
                  <v-field
                    id="tel"
                    name="phone"
                    type="tel"
                    class="form-control"
                    :rules="isPhone"
                    :class="{ 'is-invalid': errors['phone'] }"
                    placeholder="請輸入電話"
                    v-model="form.user.tel"
                  ></v-field>
                  <error-message
                    name="phone"
                    class="invalid-feedback"
                  ></error-message>
                </div>

                <div class="mb-3">
                  <label for="address" class="form-label">收件人地址</label>
                  <v-field
                    id="address"
                    name="收件人地址"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['收件人地址'] }"
                    placeholder="請輸入地址"
                    rules="required"
                    v-model="form.user.address"
                  ></v-field>
                  <error-message
                    name="收件人地址"
                    class="invalid-feedback"
                  ></error-message>
                </div>

                <div class="mb-3">
                  <label for="message" class="form-label">留言</label>
                  <textarea
                    id="message"
                    class="form-control"
                    cols="30"
                    rows="10"
                    v-model="form.message"
                  ></textarea>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-danger">送出訂單</button>
                </div>
              </v-form>
 </div>
          </div>
</div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      isLoading: true,
      products: [],
      tempProduct: {},
      carts: {},
      status: {
        addCartLoading: '',
        changeCartNumLoading: ''
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getProduct () {
      axios
        .get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },
    openModal (product) {
      this.tempProduct = product
      this.$refs.userModal.open()
    },
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
    addCart (productId, qty = 1) {
      const order = {
        productId,
        qty
      }
      this.status.addCartLoading = productId
      axios
        .post(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart`, { data: order })
        .then((res) => {
          this.status.addCartLoading = ''
          Swal.fire(res.data.message)
          this.$refs.userModal.close()
          this.getCart()
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
    },
    onSubmit () {
      const userOrder = this.form
      axios
        .post(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/order`, { data: userOrder })
        .then((res) => {
          Swal.fire(res.data.message)
          this.$refs.form.resetForm()
          this.getCart()
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value)
        ? true
        : '請輸入09開頭，共10碼的正確的電話號碼'
    }
  },
  components: {
    Loading
  },
  mounted () {
    this.getProduct()
    this.getCart()
  }

}
</script>

<style scoped>
@keyframes ldio-aeq8wza18cr {
    0% {
      top: 96px;
      left: 96px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 18px;
      left: 18px;
      width: 156px;
      height: 156px;
      opacity: 0;
    }
  }
  .ldio-aeq8wza18cr div {
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ldio-aeq8wza18cr 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .ldio-aeq8wza18cr div:nth-child(1) {
    border-color: #5f2a62;
    animation-delay: 0s;
  }
  .ldio-aeq8wza18cr div:nth-child(2) {
    border-color: #a976c3;
    animation-delay: -0.5s;
  }
  .loadingio-spinner-ripple-64xhhn6i6r6 {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: rgba(NaN, NaN, NaN, 0);
  }
  .ldio-aeq8wza18cr {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-aeq8wza18cr div {
    box-sizing: content-box;
  }
  /* generated by https://loading.io/ */
</style>
