<template>
  <LangyuanLoading v-model:active="isLoading">
  </LangyuanLoading>
  <div class="container">
    </div>
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 400px;">
      <div class="position-absolute" style="background-size: cover; top:0; bottom: 0; left: 0; right: 0; background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/langyuanstore/1709404618785.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oo2yt95kfXo6GVgQ%2FszSqGyOV0LZVCpDbF7Fa80OFYm44h9nnCRT7GzLlM3LGCenWNzb4H7TQHi29aYWxCV7Y0kUJb2qEhviyeMbV0i%2FWBZR5YrQ%2BtNvBQOXDZvp6Ffb27GEEVcs1%2F8SzCTMWVJxux7qi7DauVKsEM47RhsdpWNznsJW6m58Sr3iYpIuZsmdp0EfZGlqoPngkbIQFGMNFj%2B7D%2BtphUUm2x7iqgICnxFoaGo6%2FMhBhztbND3uFymwMU4CPMB0g%2FoZmeGmsyeTOE9qsCxKJCOvZSWHcVY%2FPRuFV%2B3yALgn%2BtfzQKFtmh%2FiPd9XdYBQ0cMi3cLQvghxMw%3D%3D); opacity: 0.4;"></div>
      <h2 class="fw-bold">愛牠，所以給牠最好的</h2>
    </div>
    <!-- 搜尋欄 -->
    <div class="bg-light py-4">
      <div class="container">
      <div class="row d-flex justify-content-end ">
          <div class="col-md-3">
            <div class="input-group w-md-50 mt-md-0 mt-3">
              <input type="text" v-model.trim="search" class="form-control rounded-0 border-primary" placeholder="要找什麼商品呢?" />
              <div class="input-group-append">
                <button class="btn btn-primary rounded-0" type="button" id="search">
                  <i class="bi bi-search-heart"></i>
                </button>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <!-- 商品種類篩選 -->
        <div class="col-md-3 mb-sm-4">
          <div class="list-group list-group-flush">
          <a href="#" class="list-group-item list-group-item-action" :class="{ active: category === '' }" @click.prevent="getProduct('','')">
          全部商品
          </a>
          <a href="#" class="list-group-item list-group-item-action" :class="{ active: category === '貓狗通用' }" @click.prevent="getProduct('','貓狗通用')">貓狗通用</a>
          <a href="#" class="list-group-item list-group-item-action" :class="{ active: category === '狗狗專用' }" @click.prevent="getProduct('','狗狗專用')" >狗狗專用</a>
          <a href="#" class="list-group-item list-group-item-action" :class="{ active: category === '貓貓專用' }" @click.prevent="getProduct('','貓貓專用')">貓貓專用</a>
        </div>
        </div>
        <!-- 商品列表 -->
        <div class="col-md-9">
        <div class="container">
            <div class="row m-auto">
            <div class="col-xl-4 col-lg-5  col-md-6 col-sm product-list m-auto" v-for="product in products" :key="product.id">
            <div class="card product-card mb-sm-4 ms-md-4 m-sm-auto">
              <router-link :to="`/product/${product.id}`" class="card-product-link">
              <img :src="product.imageUrl" class="card-product-img" />
              </router-link>
              <div class="card-body">
                <span class="badge rounded-pill bg-primary mb-2">{{ product.category }}</span>
                <h5 class="card-title fs-md-2 fs-6 fw-bold">{{ product.title }}</h5>
                <p class="card-text">NT$ {{ product.price }}</p>
                <a class="btn btn-primary d-flex justify-content-center text-white"
                  @click.prevent="addCart(product.id)"><i class="bi bi-cart-plus-fill  me-2"></i>加入購物車</a>
              </div>
            </div>
              </div>
            </div>
            </div>
            <PaginationComponent
            :pages="pages"
            @change-pages="getProduct"
            class="d-flex justify-content-center mb-4 mb-md-6 m-auto"
          ></PaginationComponent>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import cartStore from '@/stores/cartStore'
import { mapActions, mapState } from 'pinia'
import LangyuanLoading from '../../components/LangyuanLoading.vue'
import PaginationComponent from '../../components/PaginationComponent.vue'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      isLoading: true,
      search: '',
      pages: {},
      products: [],
      category: '',
      tempProduct: {},
      carts: {},
      status: {
        addCartLoading: '',
        changeCartNumLoading: ''
      }
    }
  },
  methods: {
    getProduct (page = 1, category = '') {
      axios
        .get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/products?page=${page}&category=${category}`)
        .then((res) => {
          this.products = res.data.products
          this.pages = res.data.pagination
          this.category = category
          this.isLoading = false
          // 關鍵字搜尋
          this.products = this.products.filter(item => item.title.trim().toLowerCase().includes(this.search.toLowerCase()))
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
    ...mapActions(cartStore, ['addCart', 'getCart']),
    changeCartNum (item, qty = 1) {
      const order = {
        product_id: item.product_id,
        qty
      }
      this.status.changeCartNumLoading = item.id
      axios
        .put(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/cart/${item.id}`, { data: order })
        .then(() => {
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
    PaginationComponent
  },
  watch: {
    search () {
    // 在這裡執行即時搜尋，例如調用 getProduct 方法
      this.getProduct(1, '')
    }
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  mounted () {
    this.getProduct()
    this.getCart()
  }

}
</script>
