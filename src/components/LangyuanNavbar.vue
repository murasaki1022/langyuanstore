<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img height="80" src="../assets/langyuannavbar.svg" alt="" />
        </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link fw-bold text-change" to="/">回到首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold text-change" to="/products">商品專區</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold text-change" to="/q&a">常見問題</router-link>
            </li>
          </ul>
        </div>
          <p class="fs-2 bi bi-search text-primary mx-2"></p>
          <router-link to="/search-order"><p class="fs-2 bi bi-clipboard2-check text-primary mx-2"></p></router-link>
          <router-link to="/cart" class="position-relative">
            <p class="fs-2 bi bi-cart4 mx-2"></p>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ cart.length }}
            <span class="visually-hidden">unread messages</span>
            </span>
          </router-link>
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
