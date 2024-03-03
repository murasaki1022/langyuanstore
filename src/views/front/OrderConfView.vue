<template>
  <LangyuanLoading v-model:active="isLoading">
  </LangyuanLoading>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="fw-bold mb-4 pt-3">結帳頁面</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <div class="d-flex">
              <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">Lorem ipsum</p>
                  <p class="mb-0">NT$12,000</p>
                </div>
                <p class="mb-0 fw-bold">x1</p>
              </div>
            </div>
            <div class="d-flex mt-2">
              <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">Lorem ipsum</p>
                  <p class="mb-0">NT$12,000</p>
                </div>
                <p class="mb-0 fw-bold">x1</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                  <td class="text-end border-0 px-0 pt-4">NT$24,000</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">Total</p>
              <p class="mb-0 h4 fw-bold">NT$24,000</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <form action="">
            <p>訂購人資訊</p>
            <div class="mb-0">
              <div class="mb-2">
              <label for="ContactMail" class="text-muted mb-0">收件人Email</label>
              <input type="email" class="form-control" id="ContactMail" aria-describedby="emailHelp" placeholder="請輸入Email">
            </div>
              <div class="mb-2">
                <label for="ContactName" class="text-muted mb-0">收件人姓名</label>
                <input type="text" class="form-control" id="ContactName" placeholder="請輸入姓名">
              </div>
              <div class="mb-2">
                <label for="ContactTel" class="text-muted mb-0">收件人電話</label>
                <input type="tel" class="form-control" id="ContactTel" placeholder="請輸入電話">
              </div>
              <div class="mb-2">
                <label for="ContactAddress" class="text-muted mb-0">收件人地址</label>
                <input type="text" class="form-control" id="ContactAddress" placeholder="請輸入地址">
              </div>
              <div class="mb-2">
                <label for="message" class="form-label">留言</label>
                  <textarea
                    id="message"
                    class="form-control"
                    cols="30"
                    rows="10"
                  ></textarea>
              </div>
            </div>
          </form>
          <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
            <router-link to="/cart">
              <button type="button" class="btn btn-outline-primary btn-lg mb-5 mt-3">
                <i class="bi bi-chevron-compact-left"></i>
                回到購物車
            </button>
          </router-link>
          <button type="button" class="btn btn-primary btn-lg mb-5 mt-3">
                確認結帳<i class="bi bi-chevron-compact-right"></i>
          </button>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import LangyuanLoading from '../../components/LangyuanLoading.vue'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
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
  mounted () {},
  components: {
    LangyuanLoading
  }
}
</script>
