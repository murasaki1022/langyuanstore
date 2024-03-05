<template>
<LangyuanLoading v-model:active="isLoading">
</LangyuanLoading>
<div class="container">
      <div class="row m-sm-auto">
        <div class="col-12 my-4">
          <div class="path">
            <router-link to="/" style="text-decoration: none;">首頁</router-link>
            &gt;
            <router-link to="/products" style="text-decoration: none;">全部商品</router-link>
            &gt; {{ productInfo.title }}
          </div>
        </div>
        <div class="col-md-6 align-items-center">
        <img class="img-fluid" :src="productInfo.imageUrl" alt="">
        </div>
        <div class="col-md-5">
          <h2 class="fw-bold h1 mb-4">{{ productInfo.title }}</h2>
          <h4><span class="badge rounded-pill bg-primary mb-2">{{productInfo.category}}</span></h4>
            <div class="row d-flex flex-column">
            <div class="col">
            <p class="fs-5 text-secondary2">{{ productInfo.description }}</p>
            </div>
            <div class="col">
            <p class="text-muted">規格：{{ productInfo.content }}</p>
            </div>
            </div>
          <p class="mb-0 text-muted ">原價<del>NT${{ productInfo.origin_price }}</del></p>
          <p class="h4 fw-bold">現正特價<span class="text-primary"> NT${{ productInfo.price }}</span><span class="ms-3">/ {{ productInfo.unit }}</span></p>
          <div class="row d-flex mt-5">
              <div class="col-3 col-md-4">
                <select class="form-select" v-model.number="qty">
                    <option v-for="i in 10" :key="`add-${i}-count`">
                      {{ i }}
                    </option>
              </select>
              </div>
              <div class="col-5 col-md-8">
                <a class="btn btn-primary d-flex justify-content-center text-white"
                  @click.prevent="addCart(productInfo.id,qty)"><i class="bi bi-cart-plus-fill  me-2"></i>加入購物車</a>
              </div>
          </div>

        </div>
      </div>
      <h3 class="fw-bold mt-5">更多推薦商品</h3>
      <hr class="mb-5">
      <swiper
    :autoplay = true
    :slidesPerView="1"
    :spaceBetween="10"
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
      qty: 1,
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
