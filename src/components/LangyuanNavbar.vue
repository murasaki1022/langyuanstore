<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <!-- LOGO 和 nav button -->
        <div class="w-100 container-lg d-flex justify-content-between align-items-center">
          <router-link class="navbar-brand" to="/">
          <img height="80" src="../assets/langyuannavbar.svg" alt="" />
        </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        <!-- nav -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 cursor-pointer">
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-5 text-change" to="/">
                <i class="bi bi-house-door-fill"></i>回到首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-5 text-change" to="/products">
                <i class="bi bi-bag-fill mx-1"></i>商品專區</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-5 text-change" to="/q&a">
                <i class="bi bi-journal-check mx-1"></i>常見問題</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-5 text-change" to="/search-order">
                <i class="bi bi-search mx-1"></i>訂單查詢</router-link>
            </li>
          </ul>
        <!-- icon按鈕 -->
          <div class="d-flex">
            <router-link to="/cart" class="position-relative"><p class="fs-2 bi bi-cart4 mx-2"></p>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{ cart.length }}
              </span>
          </router-link>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
import cartStore from '../stores/cartStore'
import { mapActions, mapState } from 'pinia'
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap

export default {
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart'])
  },
  mounted () {
    this.getCart()
  }
}
</script>

<style scoped>
</style>
