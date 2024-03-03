<template>
    <div class="container mt-5" style="width: 800px">
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="在此輸入訂單編號" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-primary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
    </div>
</div>
<langyuan-footer></langyuan-footer>
</template>

<script>
import LangyuanFooter from '../../components/LangyuanFooter.vue'

export default {
  components: {
    LangyuanFooter
  }
}
</script>
