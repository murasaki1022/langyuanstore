<template>
<LangyuanLoading v-model:active="isLoading">
</LangyuanLoading>
<div class="container">
      <div class="row align-items-center mt-5">
        <div class="col-md-6">
        <img class="img-fluid" :src="productInfo.imageUrl" alt="">
        </div>
        <div class="col-md-5">
          <h2 class="fw-bold h1 mb-1">{{ productInfo.title }}</h2>
          <p class="mb-0 text-muted text-end">原價<del>NT${{ productInfo.origin_price }}</del></p>
          <p class="h4 fw-bold text-end">現正特價NT${{ productInfo.price }}</p>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                    <i class="bi bi-dash-circle"></i>
                  </button>
                </div>
                <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light"
                v-model="qty"
                aria-label="Example text with button addon" aria-describedby="button-addon1" min="1" value="1">
                <div class="input-group-append">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                    <i class="bi bi-plus-circle"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6">
              <a class="btn btn-primary d-flex justify-content-center text-white"
                @click.prevent="addCart(productInfo.id,qty)"><i class="bi bi-cart-plus-fill  me-2"></i>加入購物車</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-4">
          <p>{{ productInfo.description }}</p>
        </div>
        <div class="col-md-3">
          <p class="text-muted">{{ productInfo.content }}</p>
        </div>
      </div>
      <h3 class="fw-bold">更多推薦商品</h3>
      <hr class="mb-5">
      <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '375': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }"
    :modules="modules"
    class="mySwiper">
    <swiper-slide v-for="product in products" :key="product.id">
      <div class="row">
          <div class="col-md-4 col-sm">
          <div class="card product-card mb-sm-4 ms-md-4 m-sm-auto">
            <router-link :to="`/product/${product.id}`" class="card-product-link">
            <img :src="product.imageUrl" class="card-product-img" />
            </router-link>
            <div class="card-body">
              <span class="badge rounded-pill bg-primary mb-2">{{product.category}}</span>
              <h5 class="card-title fs-6 fw-bold">{{ product.title }}</h5>
              <p class="card-text">NT$ {{ product.price }}</p>
              <a class="btn btn-primary d-flex justify-content-center text-white"
                @click.prevent="addCart(product.id)"><i class="bi bi-cart-plus-fill  me-2"></i>加入購物車</a>
            </div>
          </div>
            </div>
          </div>
      </swiper-slide>
  </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import axios from 'axios'
import Swal from 'sweetalert2'
import LangyuanLoading from '../../components/LangyuanLoading.vue'
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      isLoading: true,
      products: [],
      productInfo: [],
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
        .get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/products`)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    getProductInfo () {
      const { id } = this.$route.params
      axios
        .get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/product/${id}`)
        .then((res) => {
          this.productInfo = res.data.product
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err.data.message)
        })
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
    LangyuanLoading,
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  },
  mounted () {
    this.getProduct()
    this.getProductInfo()
  }

}
</script>
