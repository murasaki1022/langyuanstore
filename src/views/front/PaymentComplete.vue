<template>
    <div class="position-relative d-flex">
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row my-auto pb-7">
          <div class="col-md-4 d-flex flex-column">
            <div class="my-auto">
              <h2 class="">付款完成</h2>
              <h4 class="">感謝您的購買<i class="bi bi-balloon-heart text-danger fs-4"></i></h4>
              <router-link to="/"><button type="button" class="btn btn-primary mt-4 px-5">回到首頁</button></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="w-md-50 w-50 position-absolute opacity-1" style="z-index: -1; min-height: 100vh; right: 0; background-image: url(https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
      background-position: center;">
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
