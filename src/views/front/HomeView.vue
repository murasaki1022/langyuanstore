<template>
<LangyuanLoading v-model:active="isLoading"></LangyuanLoading>
  <div class="container">
    <div class="d-flex justify-content-center mt-5">
      <swiper
        :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
        }"
        :pagination="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          ><img
            style="width: 100%"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/langyuanstore/1709761717400.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lIA0tvVWHKM5MjS8MJFe3sgoJTpcrnMvAps8qSZ1Nm40VTfNZNJt%2FJTGIr%2FLYVH3T2CvV9u7kmXngDRt9zC0uH7go%2FqfzhiyBZNwbI9auk4G0bDPNmR96Jxp8n8rkM2ioGmcUTC20p0YNrK3o6kt8uwFbKNLo0ntamDEJbyvu64tG%2F5bNLMTxIH%2FopTmPgxv%2F0cd6rvXMTs9ihMn9r3ppQ4yLQs6ERCsiNY4O%2FzBSEcsPprxU4KYCRuU4WE1qKsuqZG1Xr46v6xYXNb%2BAHchhDSel52h3b%2FGe1MAdWoGHO0IijfhO0uPseCtyggcceIvEJLHCuxJJMxVmfTV0C5N7A%3D%3D"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            style="width: 50rem"
            src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            style="width: 50rem"
            src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            style="width: 50rem"
            src="https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            style="width: 50rem"
            src="https://images.unsplash.com/photo-1573435567032-ff5982925350?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </div>
    <div class="bg-secondary3 mt-5 pt-5 pb-5">
      <div class="container">
      <h3 class="d-flex justify-content-left fw-bold pt-2">關於浪元</h3>
      <p class="d-flex justify-content-left pt-2">
        浪圓，帶著給予流浪動物與人的團圓。
        「浪」代表著流浪貓狗的意思；「圓」為團圓的意思，給予浪浪們有一個與新家人團圓的期望。
      </p>
      <p class="d-flex justify-content-left">
        浪圓致力於發展流浪動物的媒合平台，以更有效的方法整合及提供各種小學堂讓大眾能更了解基本小資訊，提高毛孩們找到新的家。
        期待你的加入，讓我們一起，帶牠回家。
      </p>
      </div>
    </div>
  <div class="container">
    <div class="d-flex justify-content-center mb-5 mt-5">
      <img
        class="rounded w-100 h-auto"
        style="height: 25rem"
        src="https://cdn-v4.petpetgo.com/1500/public/a0318a6f-6f72-4da1-83f3-f590989836f6.jpg"
        alt=""
      />
    </div>
    </div>
    <div class="container text-center">
      <div class="row  d-flex justify-content-around">
        <div class="col">
          <img
            class="img-fluid rounded card-product-img"
            style="width: auto; height:80%;"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/langyuanstore/1709759477846.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=O75aBurFDP%2BJc%2FIbmZ%2FPgWgeeatBQb%2FzTwcY%2FcGr06K8Z8AI%2BDA15lETCBZSUXz%2FEo3DwgdiiBlfFmnsL1Q4Dj0uLFBMU0v1Ss8cGlGi8wuxJdnk6jDPl9DWDtIrpbZJIOPZt4nU4edIB1ZJ1k4T2tMlYk3GjXj8fIOS8zDh3iHNlEdEBUY9c5S1fNfvbkgjG9kPqJrB3rZ4T%2BN9LYCqv5xCD36hkxEt1UHg%2FddaTrKAffUNXcmFBKOkEA%2BMVYPkH5o1j0Z9ZhFVL%2FiobPb5Tjn8VHreTTwJBEQYdcnH%2Fp202Ag8MWUrMleu6fIUa3Bq3cVfwoKiCDXUW1CNLqA1AQ%3D%3D"
            alt=""
          />
        </div>
        <div class="col">
        <router-link :to="`/products`">
            <img
              class="img-fluid rounded card-product-img"
              style="width: auto; height:80%"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/langyuanstore/1709758075985.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WWF3ZdHMzarwyY2IeCpNwAl3B%2FSQjq7wblEZizzo1sJXnFux2TZIK2wIteBrJb8mjkRmoZa1ouNTnm2rfiLCbdZWbq36ZuQnDVXOu0pwiSdUbuWyapKigw875eN10XDLYiptwUv%2BhV1X%2Bc%2B9GsFvdI5CzL1Xl0CXmg%2FQHP1ICIHwmXTdeJUFG9tld%2BUfHJOqb%2F3Jmk1bHWcdE3Fvn3JpQjPS1FR9x13UVmMHDRbJ%2By1Ql9AxjFMY4vag9CVORcJyAme851hnB6n3NtVVt6hsB4omouCMhB3zAd%2B25JZZcsurovQOA%2B1LyRwahAK08eqXh3OI%2BDlsv0b95aaVL0xm%2FA%3D%3D"
              alt=""
            />
        </router-link>
        </div>
      </div>
    </div>
    <p class="d-flex justify-content-center fs-2 fw-bold mb-3 mt-5">熱銷商品</p>
    <div class="d-flex justify-content-center">
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
              <button class="btn btn-primary mx-auto px-4 d-flex justify-content-center text-white"
                @click.prevent="addCart(product.id)"><i class="bi bi-cart-plus-fill me-2"></i>加入購物車</button>
            </div>
          </div>
            </div>
          </div>
      </swiper-slide>
  </swiper>
  </div>
  <div class="bg-secondary3 pb-5">
    <div class="d-flex justify-content-center fs-2 fw-bold mt-5 pt-5">
      好評推薦
    </div>
    <div class="row-cols-2 d-flex justify-content-center mt-5">
      <div class="row">
        <div class="col">
          <img
            src="https://images.unsplash.com/photo-1562248852-58987553bd46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style="width: 14rem"
            alt=""
          />
          <p class="fs-4 fw-bold">扭扭</p>
          <p>挑嘴貓無膠主食罐</p>
          <p>
            自從在寵物展買過汪喵挑嘴罐後，扭扭一試成主顧，終於！終結了媽媽找不到適合又安心的罐罐噩夢！
          </p>
        </div>
        <div class="col">
          <img
            src="https://images.unsplash.com/photo-1616044543567-a31e09b178ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style="width: 14rem"
            alt=""
          />
          <p class="fs-4 fw-bold">來福</p>
          <p>95% 鮮肉無膠主食罐</p>
          <p>
            來福食量大很難全濕食，但又怕營養不夠，所以偶爾會在來福的飼料裡面拌汪喵罐罐，營養均衡，長得更帥了！
          </p>
        </div>
        <div class="col">
          <img
            src="https://images.unsplash.com/photo-1580238169544-86bf7cd8c84c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style="width: 14rem"
            alt=""
          />
          <p class="fs-4 fw-bold">麻糬</p>
          <p>冷凍乾燥生食餐</p>
          <p>
            為了讓麻糬轉吃生食而先選擇凍乾，結果嗜口性超好，不攝取澱粉飼料後，麻糬體態變得精實、大便比較不臭也不再容易軟便！
          </p>
        </div>
      </div>
    </div>
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
import cartStore from '@/stores/cartStore'
import { mapActions, mapState } from 'pinia'
import LangyuanLoading from '../../components/LangyuanLoading.vue'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      isLoading: true,
      products: [],
      tempProduct: {},
      carts: {}
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
    ...mapActions(cartStore, ['addCart', 'getCart']),
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
    Swiper,
    SwiperSlide,
    LangyuanLoading
  },
  setup () {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped></style>
