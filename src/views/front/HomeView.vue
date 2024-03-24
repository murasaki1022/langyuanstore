<template>
<LangyuanLoading v-model:active="isLoading"></LangyuanLoading>
  <div class="container">
    <div class="d-flex justify-content-center mt-5">
      <swiper
        :autoplay="{
        delay: 6000,
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
            alt="全館免運優惠進行中"
        />
        </swiper-slide>
        <swiper-slide
          ><img
            style="width: 100%"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/langyuanstore/1709842871677.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mpdhmaoSoSCsOQLZoIutXyvg45CTO2UgaVlw4x7mIYgdRsSGulYd1twnaL5RHNAi2BsQAqBYL9My3qPf7iYTbHukbeAcnmFzl7N%2FxhsjRQtT5kY62DxV12qiA0xDJW5Z%2F7wOGptE8EhMDql2MrsVkMHgygCtBoO15QpntB0bttdE%2BqKb5aR1eLtBF6N3WawbFJmHlzE%2BeKBg0ynxptQ98ykBFXnxAIteW0Xzcrfxz%2Fkc1V%2F1l1cB4SmCxYQHleSfFodMGA2xq4bXcLTgUhpo5g7lX73KHCgI95RaOc5fL6U25Ye0frLx9U6jNJ0385XD229mWn21dkNWEDmXE1LMnA%3D%3D"
            alt="輸入折扣碼【lovelangyuan】享有8折優惠"
        /></swiper-slide>
      </swiper>
    </div>
  </div>
    <div class="bg-secondary3 mt-5 pt-5 pb-5">
      <div class="container">
      <h3 class="d-flex justify-content-center fw-bold pt-2">關於浪元
      <img src="@/assets/langyuanstorelogo.svg" class="img-fluid ms-3" style="height: 32px;" alt="浪元logo">
      <span class="text-secondary2 mx-2">x</span>
      <img src="@/assets/langyuanlogo.svg" class="img-fluid" style="height: 32px;" alt="浪圓logo"></h3>
      <hr>
      <p class="d-flex justify-content-center pt-2">
        「浪元小賣店」與浪圓寵物領養平台攜手，專營高品質寵物用品。每筆盈餘致力支持浪圓的救援使命，為更多毛小孩尋找安心家庭。
      </p>
      <p class="d-flex justify-content-center">
        選擇我們，不僅為您的寵物提供品質生活，更是為流浪動物帶來愛與溫暖。感謝您的支持，共同為浪圓的使命努力，讓愛無所不在。
      </p>
      </div>
    </div>
  <div class="container">
    <div class="d-flex justify-content-center mb-5 mt-5" data-aos="fade-up" data-aos-duration="1000">
      <img
        class="img-fluid"
        style="width: 90%; height:auto;"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/langyuanstore/1709839733636.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Sxfa6dnAowTOi%2FV2vEuOvs6ssVnLneb1nT2ABHXluC0XJmepNI1YImS4H55x004o%2FFdtqOkPPZjmSZ9euf%2BkBwVNtocfMxTNIJ7Qmwpg3%2BG3K8yd8Pas43rW4SjzR2GqwBfq1fAalQhzE1Wm%2BJWADVCRkq5RwKzfC9mLyI0DL3df49D7re%2FwDC%2BKr4Zv24eUJFI2FKedK2qgr72agltHCkUlwgveNKXyJWm1txXbZOTW2wwLXAPKNJE0uxsBDQUu2STBuuylQvJUyOnnwy8TokzD4fywjmJJJS1JU3W5a7ibTOQSaSVNyAMHXx0YbstJ5quQATfT9u5qrMDCKDBmYQ%3D%3D"
        alt="165防詐騙提醒"
      />
    </div>
    </div>
    <div class="container text-center">
      <div class="row  d-flex justify-content-around">
        <div class="col">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            class="img-fluid rounded card-product-img"
            style="width: auto; height:80%;"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/langyuanstore/1709759477846.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=O75aBurFDP%2BJc%2FIbmZ%2FPgWgeeatBQb%2FzTwcY%2FcGr06K8Z8AI%2BDA15lETCBZSUXz%2FEo3DwgdiiBlfFmnsL1Q4Dj0uLFBMU0v1Ss8cGlGi8wuxJdnk6jDPl9DWDtIrpbZJIOPZt4nU4edIB1ZJ1k4T2tMlYk3GjXj8fIOS8zDh3iHNlEdEBUY9c5S1fNfvbkgjG9kPqJrB3rZ4T%2BN9LYCqv5xCD36hkxEt1UHg%2FddaTrKAffUNXcmFBKOkEA%2BMVYPkH5o1j0Z9ZhFVL%2FiobPb5Tjn8VHreTTwJBEQYdcnH%2Fp202Ag8MWUrMleu6fIUa3Bq3cVfwoKiCDXUW1CNLqA1AQ%3D%3D"
            alt="最新消息"
          />
        </div>
        <div class="col">
        <RouterLink :to="`/products`">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              class="img-fluid rounded card-product-img"
              style="width: auto; height:80%"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/langyuanstore/1709758075985.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WWF3ZdHMzarwyY2IeCpNwAl3B%2FSQjq7wblEZizzo1sJXnFux2TZIK2wIteBrJb8mjkRmoZa1ouNTnm2rfiLCbdZWbq36ZuQnDVXOu0pwiSdUbuWyapKigw875eN10XDLYiptwUv%2BhV1X%2Bc%2B9GsFvdI5CzL1Xl0CXmg%2FQHP1ICIHwmXTdeJUFG9tld%2BUfHJOqb%2F3Jmk1bHWcdE3Fvn3JpQjPS1FR9x13UVmMHDRbJ%2By1Ql9AxjFMY4vag9CVORcJyAme851hnB6n3NtVVt6hsB4omouCMhB3zAd%2B25JZZcsurovQOA%2B1LyRwahAK08eqXh3OI%2BDlsv0b95aaVL0xm%2FA%3D%3D"
              alt="購買主食類贈送試吃包"
            />
        </RouterLink>
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
            <RouterLink :to="`/product/${product.id}`" class="card-product-link">
            <img :src="product.imageUrl" class="card-product-img" alt="商品圖片"/>
            </RouterLink>
            <div class="card-body">
              <span class="badge rounded-pill bg-primary mb-2">{{ product.category }}</span>
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
    <div class="d-flex justify-content-center fs-2 fw-bold mt-5 pt-5" data-aos="fade-down" data-aos-duration="1500">
      好評推薦
    </div>
    <div class="my-0 my-md-5" data-aos="fade-down" data-aos-duration="1500">
      <div class="row justify-content-center container-fluid">
        <div class="col-md-6 col-lg-3 text-center mx-3 mt-2">
          <img
            class="rounded-pill object-fit-cover image-fluid"
            src="https://images.unsplash.com/photo-1562248852-58987553bd46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style="width: 18rem; height:12rem;"
            alt="扭扭照片"
          />
          <p class="fs-4 fw-bold img-fluid mt-3">扭扭</p>
          <a href="https://murasaki1022.github.io/langyuanstore/#/product/-Nocs9XwxWKcWd2509R2" class=""><p class="fs-5">貓咪優格口味食物罐</p></a>
          <p class="mx-5">
            自從在寵物展買過汪喵挑嘴罐後，扭扭一試成主顧，終於！終結了媽媽找不到適合又安心的罐罐噩夢！
          </p>
        </div>
        <div class="col-md-6 col-lg-3 text-center mx-3 mt-2">
          <img
            class="rounded-pill object-fit-cover image-fluid"
            src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style="width: 18rem; height:12rem"
            alt="來福照片"
          />
          <p class="fs-4 fw-bold mt-4">來福</p>
          <a href="https://murasaki1022.github.io/langyuanstore/#/product/-NoggO8PuQ1DN26XXEiK" class=""><p class="fs-5">高纖維健脾狗狗主食</p></a>
          <p class="mx-5">
            來福食量大很難全濕食，但又怕營養不夠，所以偶爾會在來福的飼料裡面拌汪喵罐罐，營養均衡，長得更帥了！
          </p>
        </div>
        <div class="col-md-6 col-lg-3 text-center mx-3 mt-2">
          <img
            class="rounded-pill object-fit-cover image-fluid"
            src="https://images.unsplash.com/photo-1580238169544-86bf7cd8c84c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style="width: 18rem;  height:12rem;"
            alt="麻糬照片"
          />
          <p class="fs-4 fw-bold mt-3">麻糬</p>
          <a href="https://murasaki1022.github.io/langyuanstore/#/product/-NobcCf1piWEGGXXZ5Di" class=""><p class="fs-5">貓咪天然野味主食</p></a>
          <p class="mx-5">
            為了讓麻糬轉吃生食而先選擇凍乾，結果嗜口性超好，不攝取澱粉飼料後，麻糬體態變得精實、大便比較不臭也不再容易軟便！
          </p>
        </div>
      </div>
    </div>

  </div>
<div class="container">
<div class="row">
<div class="col">
        <button type="button" class="fixed btn " style="z-index: 100;" @click="BackToTop">
        <img src="@/assets/backtotop_1.png" alt="回到頂端" style="height: 3rem;">
        </button>
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

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import axios from 'axios'
import cartStore from '@/stores/cartStore'
import { mapActions, mapState } from 'pinia'
import LangyuanLoading from '../../components/LangyuanLoading.vue'

AOS.init()

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
          alert(err.data.message)
        })
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
          alert(err.response.data.message)
        })
    },
    BackToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
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

<style scoped>
a{
  text-decoration: none;
}
</style>
