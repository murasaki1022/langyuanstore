<template>
<LangyuanLoading v-model:active="isLoading"></LangyuanLoading>
  <div class="container">
    <div class="d-flex justify-content-center mt-5">
      <swiper
        :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        }"
        :pagination="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          ><img
            style="width: 50rem"
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    <div class="row">
      <div class="col">
        <img
          class="w-100 h-auto rounded"
          src="https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div class="col">
        <img
          class="w-100 h-auto rounded"
          src="https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
    <p class="d-flex justify-content-center fs-2 fw-bold mb-3 mt-5">熱銷商品</p>
    <div class="d-flex justify-content-center">
    <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }"
    :modules="modules"
    class="mySwiper">
    <swiper-slide v-for="product in products" :key="product.id">
      <div class="row row-cols-md-4 row-cols-sm-2 g-3">
      <div class="col-xs-2 col-sm col-md-4 col-lg">
          <div class="card" style="width: 14rem">
            <div
            style="height: 200px; background-size: cover; background-position: center;"
            :style="{backgroundImage:`url(${product.imageUrl})`}"
            class="card-img-top"
            alt=""></div>
            <div class="card-body">
              <h5 class="card-title fs-6 fw-bold">{{ product.title }}</h5>
              <p class="card-text">NT$ {{ product.price }}</p>
              <a class="btn btn-primary d-flex justify-content-center"
                @click.prevent="addCart(product.id)">立即購買</a>
            </div>
          </div>
        </div>
      </div>
      </swiper-slide>
  </swiper>
  </div>
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
  <div class="bg-primary mt-5 pt-5 pb-5">
    <div class="d-flex justify-content-center">
      <div class="fw-bold">
        <div class="row">
          <div class="col">
            <ul class="fs-5">浪圓集團
              <li class="fs-6">浪元小賣店</li>
              <li class="fs-6">浪圓</li>
            </ul>
          </div>
          <div class="col">
            <ul class="fs-5">常見問題
              <li class="fs-6">FAQ</li>
            </ul>
          </div>
          <div class="col">
            <ul class="fs-5">聯絡我們
              <li class="fs-6">營業時間：<br />周一至周五 09:30 - 18:00</li>
              <li class="fs-6">客服電話：<br />02-1234-6789</li>
              <li class="fs-6">E-mail：<br />service@gmail.com</li>
            </ul>
          </div>
          <div class="col">
            <a href="https://www.facebook.com/?locale=zh_TW"
              ><i class="bi bi-facebook fs-1 mx-2 text-white"></i
            ></a>
            <a href="https://www.instagram.com/"
              ><i class="bi bi-instagram fs-1 mx-2 text-white"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center mt-1">
    <h5 class="fs-6">
      本專題僅為學習用途・不做任何商業使用・圖片來源請見GitHub Repo
    </h5>
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
import { mapActions } from 'pinia'
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
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped></style>
