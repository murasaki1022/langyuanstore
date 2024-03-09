<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <nav class="navbar navbar-expand-xl navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="container-fluid">
        <!-- LOGO 和 nav button -->
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <router-link class="navbar-brand" to="/">
          <img height="80" src="../assets/langyuannavbar.svg" alt="" />
        </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        <!-- nav -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="width: 100vw;">
            <ul class="navbar-nav me-auto mb-lg-0 cursor-pointer d-flex justify-content-center">
            <li class="nav-item mx-1">
              <router-link class="nav-link fw-bold fs-6 text-change" to="/">
                <i class="bi bi-house-door-fill me-1"></i>回到首頁</router-link>
            </li>
            <li class="nav-item mx-1">
              <router-link class="nav-link fw-bold fs-6 text-change" to="/products">
                <i class="bi bi-bag-fill me-1"></i>商品專區</router-link>
            </li>
            <li class="nav-item mx-1">
              <router-link class="nav-link fw-bold fs-6 text-change" to="/q&a">
                <i class="bi bi-journal-check me-1"></i>常見問題</router-link>
            </li>
            <li class="nav-item mx-1">
              <router-link class="nav-link fw-bold fs-6 text-change" to="/search-order">
                <i class="bi bi-search me-1"></i>訂單查詢</router-link>
            </li>
          </ul>
        <!-- icon按鈕 -->
          <div class="d-flex justify-content-center align-items-center me-2">
            <router-link to="/cart" class="position-relative"><p class="fs-3 bi bi-cart4 mx-2 mt-2"></p>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2">
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
