<template>
      <div class="container-fluid mt-5">
        <div class="row justify-content-center">
        <img class="img-fluid" style="width: 150px; height:150px" src="@/assets/langyuanstorelogo.svg" alt="">
          <h1 class="h3 mb-3 font-weight-normal text-center">後台管理員登入</h1>
          <div class="col-4">
            <form id="form" class="form-signin" @submit.prevent="login">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  v-model="user.username"
                  class="form-control"
                  id="username"
                  placeholder="name@example.com"
                  required
                  autofocus
                />
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  v-model="user.password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  required
                />
                <label for="password">Password</label>
              </div>
              <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios'
const { VITE_APP_API_URL } = import.meta.env
export default {
  data () {
    return {
      user: { username: '', password: '' }
    }
  },
  methods: {
    login () {
      const apiUrl = `${VITE_APP_API_URL}/v2/admin/signin`
      axios
        .post(apiUrl, this.user)
        .then((response) => {
          alert(response.data.message)
          const { token, expired } = response.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`
          this.$router.push('/admin/order')
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    }
  }
}
</script>
