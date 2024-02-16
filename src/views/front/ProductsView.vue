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
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
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
    Loading
  },
  mounted () {
    this.getProduct()
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
