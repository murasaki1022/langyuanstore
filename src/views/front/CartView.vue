<template>
  <LangyuanLoading v-model:active="isLoading">
  </LangyuanLoading>
<div class="container">
 <div class="mt-4">
   <div class="container bg-primary">
    <p class="pt-3 pb-3 px-2 mb-3 fs-5 fw-bold">
      <i class="bi bi-journal-check px-2"></i>購物明細
    </p>
  </div>
                <!-- 購物車列表 -->
              <table class="table align-middle">
                <thead class="bg-secondary3">
                  <tr>
                    <th class="my-2" style="width: 200px"></th>
                    <th class="text-center">品名</th>
                    <th class="text-end" style="width: 150px">數量/單位</th>
                    <th class="text-end" style="width: 150px">單價</th>
                    <th class="text-center" style="width: 150px">刪除商品</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cart in carts.carts" :key="cart.id">
                    <td
                    class="my-2"
                    style="height: 200px;
                    background-size: cover;
                    background-position: center;"
                    :style="{backgroundImage:`url(${cart.product.imageUrl})`}">
                    </td>
                    <td class="text-center">{{cart.product.title}}</td>
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
                          <span class="input-group-text bg-secondary3" id="basic-addon2"
                            >{{cart.product.unit}}</span
                          >
                        </div>
                      </div>
                    </td>
                    <td class="text-end">NT${{cart.total}}</td>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn text-danger bi bi-trash-fill fs-3"
                        @click="deleteCartItem(cart.id)"
                      ></button>
                    </td>
                  </tr>
                </tbody>
           <!--     <tfoot>
                  <tr>
                    <td></td>
                    <td colspan="3" class="text-end">總計</td>
                    <td class="text-end">${{carts.final_total}}</td>
                  </tr>
                </tfoot>-->
              </table>
  <div class="container bg-secondary3 px-5 pt-3 pb-3 mb-3">
    <div class="flex-column pt-3">
      <div class="input-group mb-3" style="width: 15rem">
       <input type="text" class="form-control" placeholder="輸入折扣碼" aria-label="Recipient's username" aria-describedby="button-addon2">
       <button class="btn btn-primary" type="button" id="button-addon2">使用<br>折扣碼</button>
    </div>
    <div class="d-flex align-items-end flex-column">
      <div class="py-2">
        共 {{ carts.length }} 項商品，總數量 {{ carts.qty }}
      </div>
  <!--<div class="col pt-3">折扣金額：NT$ {{ }}元</div>-->
      <div class="py-1">
        總金額：NT$ {{ carts.final_total }}元
      </div>
      <div class="pt-4 pb-2">
                <button
                  class="btn btn-danger"
                  type="button"
                  @click="deleteCartAll()">
                  清空購物車
                </button>
        </div>
    </div>
  </div>
</div>
            <!--訂購人資訊-->
            <div class="container bg-primary">
              <p class="pt-3 pb-3 px-2 mb-3 fs-5 fw-bold">
                <i class="bi bi-person-circle px-2"></i>訂購人資訊
              </p>
            </div>
            <div class="my-4 row justify-content-center">
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
                  <button type="button" class="btn btn-lg btn-secondary3 text-primary mx-3">
                    <router-link to="/products" style="text-decoration: none;">回商品專區</router-link></button>
                  <button type="submit" class="btn btn-lg btn-outline-primary">訂單確認</button>
                </div>
              </v-form>
 </div>
          </div>
</div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import cartStore from '@/stores/cartStore'
import { mapActions } from 'pinia'
import LangyuanLoading from '../../components/LangyuanLoading.vue'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      isLoading: true,
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
    ...mapActions(cartStore, ['addCart']),
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
    LangyuanLoading
  },
  mounted () {
    this.getCart()
  }

}
</script>
