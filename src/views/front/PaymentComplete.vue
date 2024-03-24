<template>
    <div class="position-relative d-flex">
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row my-auto pb-7">
          <div class="col-md-4 d-flex flex-column">
            <div class="my-auto">
              <h2 class="">付款完成</h2>
              <h4 class="">感謝您的購買<i class="bi bi-balloon-heart text-danger fs-4"></i></h4>
              <RouterLink to="/"><button type="button" class="btn btn-primary mt-4 px-5">回到首頁</button></RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="w-md-80 w-50 position-absolute opacity-1" style="z-index: -1; min-height: 100vh; right: 0; background-size: cover;
        background-position: center;
        background-image: url(https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
      </div>
    </div>
</template>

<script>
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCart'])
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  mounted () {
    this.getCart()
  }
}

</script>
