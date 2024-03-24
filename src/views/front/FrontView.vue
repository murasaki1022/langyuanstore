<template>
    <LangyuanNavbar />
    <RouterView></RouterView>
    <LangyuanFooter />
</template>

<script>
import LangyuanNavbar from '@/components/LangyuanNavbar.vue'
import LangyuanFooter from '@/components/LangyuanFooter.vue'

export default {
  components: {
    LangyuanNavbar,
    LangyuanFooter
  }
}
</script>
