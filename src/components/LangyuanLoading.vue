<template>
    <Loading>
      <img class="loading-img" src="@/assets/langyuanstoreLoadImage.png" alt="LoadingIcon">
    </Loading>
</template>

<script>

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default {
  components: {
    Loading
  }
}
</script>
