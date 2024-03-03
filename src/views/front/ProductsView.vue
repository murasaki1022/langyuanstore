<template>
  <LangyuanLoading v-model:active="isLoading">
  </LangyuanLoading>
      <div class="container">
        <div class="mt-4">
          <!-- 產品Modal -->
          <user-modal
            :temp-product="tempProduct"
            :add-cart="addCart"
            :status="status"
            ref="userModal"
          ></user-modal>
          <!-- 產品Modal -->

          <table class="table align-middle">
            <thead>
              <tr>
                <th>圖片</th>
                <th>商品名稱</th>
                <th>價格</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td style="width: 200px">
                  <div
                    style="
                      height: 100px;
                      background-size: cover;
                      background-position: center;
                    "
                    :style="{backgroundImage:`url(${product.imageUrl
})`}
                    "
                  ></div>
                </td>
                <td>{{product.title}}</td>
                <td>
                  <div v-if="product.origin_price ===product.price " class="h5">
                    {{product.price}} 元
                  </div>
                  <div v-else>
                    <del class="h6">原價 {{product.origin_price}} 元</del>
                    <div class="h5">現在只要 {{product.price}} 元</div>
                  </div>
                </td>
                <td>
                  <div class="btn-group btn-group-sm">
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                      @click="openModal(product)"
                    >
                      查看更多
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      :disabled="product.id === status.addCartLoading"
                      @click="addCart(product.id)"
                    >
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                        v-if="product.id === status.addCartLoading"
                      ></span>
                      加到購物車
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      </div>
      <langyuan-footer></langyuan-footer>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import LangyuanLoading from '../../components/LangyuanLoading.vue'
import LangyuanFooter from '../../components/LangyuanFooter.vue'
import UserModal from '../../components/UserModal.vue'
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
          console.log(err.data.message)
        })
    },
    openModal (product) {
      this.tempProduct = product
      this.$refs.userModal.open()
    },
    // eslint-disable-next-line camelcase
    addCart (product_id, qty = 1) {
      const order = {
        // eslint-disable-next-line camelcase
        product_id,
        qty
      }
      // eslint-disable-next-line camelcase
      this.status.addCartLoading = product_id
      axios
        .post(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart`, { data: order })
        .then((res) => {
          this.status.addCartLoading = ''
          Swal.fire(res.data.message)
          this.$refs.userModal.close()
        })
        .catch((err) => {
          console.log(err)
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
    }
  },
  components: {
    UserModal,
    LangyuanLoading,
    LangyuanFooter
  },
  mounted () {
    this.getProduct()
  }

}
</script>

<style scoped>
</style>
