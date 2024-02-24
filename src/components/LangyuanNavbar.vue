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
              <router-link class="nav-link" to="/">回到首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">商品專區</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="">關於我們</router-link>
            </li>
            <p class="fs-2 bi bi-search text-primary mx-2"></p>
            <p class="fs-2 bi bi-clipboard2-check text-primary mx-2"></p>
            <router-link to="/cart"><p class="fs-2 bi bi-cart4 mx-2"></p></router-link>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>

import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap
export default {
}
</script>

<style scoped>
</style>
