<template>
<<<<<<< HEAD
    <div>
        <DashboardNavbar></DashboardNavbar>
        <router-view style="padding-left: 250px;"></router-view>
=======
    <div class="container-fluid">
      <div class="row">
          <div class="col-auto col-sm-3 g-0"><DashboardNavbar></DashboardNavbar></div>
          <div class="col-auto col-sm-8">
            <router-view></router-view>
          </div>
      </div>
>>>>>>> df26f2ce5cba0a6d3249145aa431e40c5a9c93a7
    </div>
</template>

<script>
import axios from 'axios'
import DashboardNavbar from '../../components/DashboardNavbar.vue'
const { VITE_APP_API_URL } = import.meta.env

export default {
  components: {
    DashboardNavbar
  },
  methods: {
    checkAdmin () {
      const url = `${VITE_APP_API_URL}/v2/api/user/check`
      axios
        .post(url)
        .then((response) => {
          this.$router.push('/admin/products')
        })
        .catch((error) => {
          console.log(error)
          alert(error.response.data.message)
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    axios.defaults.headers.common.Authorization = token
    this.checkAdmin()
  }
}
</script>
