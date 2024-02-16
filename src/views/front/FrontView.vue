<template>
    <LangyuanNavbar></LangyuanNavbar>
    <router-view></router-view>
</template>

<script>
import LangyuanNavbar from '../../components/LangyuanNavbar.vue'

export default {
  components: {
    LangyuanNavbar
  }
}
</script>

<style scoped>
</style>
