<template>
<LangyuanLoading v-model:active="isLoading">
</LangyuanLoading>
<div class="container">
      <div class="row align-items-center">
        <div class="col-md-7">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3">
              <li class="breadcrumb-item"><a class="text-muted" href="./index.html">Home</a></li>
              <li class="breadcrumb-item"><a class="text-muted" href="./product.html">Product</a></li>
              <li class="breadcrumb-item active" aria-current="page">Detail</li>
            </ol>
          </nav>
          <h2 class="fw-bold h1 mb-1">{{ products.title }}</h2>
          <p class="mb-0 text-muted text-end"><del>NT$1,200</del></p>
          <p class="h4 fw-bold text-end">NT$1,080</p>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
                <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
                <div class="input-group-append">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6">
              <a href="./checkout.html" class="text-nowrap btn btn-dark w-100 py-2">Lorem ipsum</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-4">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
        </div>
        <div class="col-md-3">
          <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
      </div>
      <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
      <div class="swiper-container mt-4 mb-5">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
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
      isLoading: true,
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
  components: { LangyuanLoading },
  mounted () {
    this.getProduct()
  }

}
</script>
