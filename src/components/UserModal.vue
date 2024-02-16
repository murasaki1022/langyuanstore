<template>
<div class="modal fade" id="productModal" tabindex="-1" role="dialog"
          aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="exampleModalLabel">
                <span>{{tempProduct.title}}</span>
            </h5>
              <button type="button" class="btn-close"
                      data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-6">
                  <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
            </div>
                <div class="col-sm-6">
                  <span class="badge bg-primary rounded-pill">{{tempProduct.category}}</span>
                  <p>商品描述：{{tempProduct.description}}</p>
                  <p>商品內容：{{tempProduct.content}}</p>
                  <div v-if="tempProduct.price === tempProduct.origin_price" class="h5">{{tempProduct.price}} 元</div>
                <div v-else>
                    <del class="h6">原價 {{tempProduct.origin_price}} 元</del>
                    <div class="h5">現在只要 {{tempProduct.price}} 元</div>
                </div>
                  <div>
                    <div class="input-group">
                      <input type="number" class="form-control"
                          min="1" v-model="qty">
                      <button type="button" class="btn btn-primary"
                      @click="addCart(tempProduct.id,qty)"
                      :disabled="tempProduct.id === status.addCartLoading"><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="tempProduct.id === status.addCartLoading"></span>加入購物車</button>
            </div>
            </div>
            </div>
                <!-- col-sm-6 end -->
            </div>
            </div>
            </div>
            </div>
            </div>
</template>

<script>
import { Modal } from 'bootstrap'
export default {
  props: ['tempProduct', 'addCart', 'status'],
  data () {
    return {
      productModal: null,
      qty: 1
    }
  },
  template: '#userProductModal',
  methods: {
    open () {
      this.productModal.show()
    },
    close () {
      this.productModal.hide()
    }
  },
  watch: {
    tempProduct () {
      this.qty = 1
    }
  },
  mounted () {
    this.productModal = new Modal(this.$refs.modal)
  }
}
</script>

<style scoped>
</style>
