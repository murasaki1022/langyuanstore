<template>
    <LangyuanNavbar></LangyuanNavbar>
    <router-view></router-view>
    <LangyuanFooter></LangyuanFooter>
</template>

<script>
import LangyuanNavbar from '../../components/LangyuanNavbar.vue'
import LangyuanFooter from '../../components/LangyuanFooter.vue'

export default {
  components: {
    LangyuanNavbar,
    LangyuanFooter
  }
}
</script>

<style scoped>
</style>
