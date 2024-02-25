<template>
  <div class="d-flex flex-column p-3 text-white bg-dark" style="width: 250px; height:100vh; position:fixed">
    <router-link class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none fs-4" to="/">返回前台</router-link>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/order">訂單列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/products">產品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/coupon">優惠卷</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/news">最新消息(最後做)</router-link>
            </li>
    </ul>
    <hr>
    <div class="col-3"><button type="button" class="btn btn-outline-light btn-sm" @click.prevent="signOut">登出</button></div>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_APP_API_URL } = import.meta.env
export default {
  methods: {
    signOut () {
      const apiUrl = `${VITE_APP_API_URL}/v2/logout`
      axios
        .post(apiUrl)
        .then((response) => {
          alert(response.data.message)
          document.cookie = 'hexToken=; expires=; path=/'
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    }
  }
}
</script>

<style scoped>

</style>
