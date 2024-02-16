<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img height="30" src="" alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">商品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">購物車</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
