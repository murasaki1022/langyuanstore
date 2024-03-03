<template>
  <LangyuanLoading v-model:active="isLoading">
  </LangyuanLoading>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="fw-bold mb-4 pt-3">訂購人資訊</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <div class="d-flex mt-2" v-for="cart in carts.carts" :key="cart.id">
              <div class="me-2" style="width: 48px; height: 48px;
              background-size: cover; background-position: center;"
              :style="{backgroundImage:`url(${cart.product.imageUrl})`}"></div>
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">{{ cart.product.title }}</p>
                  <p class="mb-0">NT${{ cart.total }}</p>
                </div>
                <p class="mb-0 fw-bold">x {{ cart.qty }} / {{ cart.product.unit }}</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
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
          </div>
        </div>
        <div class="col-md-6">
          <v-form
                ref="form"
                v-slot="{ errors }"
                @submit="onSubmit">
            <div class="mb-0">
              <div class="mb-2">
              <label for="ContactMail" class="text-muted mb-0">收件人Email</label>
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
              <div class="mb-2">
                <label for="ContactName" class="text-muted mb-0">收件人姓名</label>
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
              <div class="mb-2">
                <label for="ContactTel" class="text-muted mb-0">收件人電話</label>
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
              <div class="mb-2">
                <label for="ContactAddress" class="text-muted mb-0">收件人地址</label>
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
              <div class="mb-2">
                <label for="message" class="form-label">留言</label>
                <textarea
                    id="message"
                    class="form-control"
                    cols="30"
                    rows="10"
                    v-model="form.message"
                  ></textarea>
              </div>
            </div>
          <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
            <router-link to="/cart">
              <button type="button" class="btn btn-outline-primary btn-lg mb-5 mt-3">
                <i class="bi bi-chevron-compact-left"></i>
                回到購物車
            </button>
          </router-link>
          <button type="submit" class="btn btn-primary btn-lg mb-5 mt-3">
                確認付款<i class="bi bi-chevron-compact-right"></i>
          </button>
          </div>
        </v-form>
        </div>
      </div>
    </div>
<langyuan-footer></langyuan-footer>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import LangyuanLoading from '../../components/LangyuanLoading.vue'
import LangyuanFooter from '../../components/LangyuanFooter.vue'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      carts: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      orderId: this.$route.params.id
    }
  },
  methods: {
    getCart () {
      axios
        .get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart`)
        .then((res) => {
          this.carts = res.data.data
          console.log(res.data.data)
        })
        .catch((err) => {
          console.log(err.response.data.message)
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
          this.$router.push(`/payment/${res.data.orderId}`)
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
  mounted () {
    this.getCart()
  },
  components: {
    LangyuanLoading,
    LangyuanFooter
  }
}
</script>
