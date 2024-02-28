<template>
    <LangyuanLoading v-model:active="isLoading">
  </LangyuanLoading>
        <div class="text-end">
          <button class="btn btn-primary mt-4" @click="openModal('new')">
            建立新的產品
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">分類</th>
              <th width="120">產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="100">是否啟用</th>
              <th width="100">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{item.category}}</td>
              <td>{{item.title}}</td>
              <td class="text-end">${{item.origin_price}}</td>
              <td class="text-end">${{item.price}}</td>
              <td>
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    @click="openModal('edit',item)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="openModal('delete',item)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 分頁元件 -->
        <PaginationComponent
          :pages="pages"
          @change-pages="getProductList"
        ></PaginationComponent>
      <!-- Modal -->
      <ProductsModal
        :update-product="updateProduct"
        :temp-product="tempProduct"
        :isNew="isNew"
        ref="pModal"
      ></ProductsModal>
      <!-- deleteModal -->
      <DeleteProductModal
        :temp-product="tempProduct"
        :delete-product="deleteProduct"
        ref="removeModal"
      ></DeleteProductModal>
</template>

<script>
import axios from 'axios'
import DeleteProductModal from '../../components/DeleteProductModal.vue'
import PaginationComponent from '../../components/PaginationComponent.vue'
import ProductsModal from '../../components/ProductsModal.vue'
import LangyuanLoading from '../../components/LangyuanLoading.vue'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      isLoading: true,
      products: [],
      isNew: false,
      tempProduct: {
        imagesUrl: []
      },
      pages: {}
    }
  },
  methods: {
    getProductList (page = 1) {
      const url = `${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/products?page=${page}`
      axios
        .get(url)
        .then((response) => {
          this.products = response.data.products
          this.pages = response.data.pagination
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    openModal (status, item) {
      if (status === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        // productModal.show();
        this.$refs.pModal.openModal()
      } else if (status === 'edit') {
        this.tempProduct = { ...item }
        if (!Array.isArray(this.tempProduct.imagesUrl)) {
          this.tempProduct.imagesUrl = []
        }
        this.isNew = false
        // productModal.show();
        this.$refs.pModal.openModal()
      } else if (status === 'delete') {
        this.tempProduct = { ...item }
        // delProductModal.show();
        this.$refs.removeModal.openModal()
      }
    },
    updateProduct () {
      let url = `${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/product/${this.tempProduct.id}`
      let http = 'put'

      if (this.isNew) {
        url = `${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/product`
        http = 'post'
      }

      axios[http](url, { data: this.tempProduct })
        .then((response) => {
          alert(response.data.message)
          // productModal.hide();
          this.$refs.pModal.hideModal()
          this.getProductList()
        })
        .catch((error) => {
          alert(error.data.message)
        })
    },
    deleteProduct () {
      const url = `${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/product/${this.tempProduct.id}`

      axios
        .delete(url)
        .then((response) => {
          alert(response.data.message)
          this.$refs.removeModal.hideModal()
          this.getProductList()
        })
        .catch((error) => {
          alert(error.data.message)
        })
    }
  },
  components: { DeleteProductModal, PaginationComponent, ProductsModal, LangyuanLoading },
  mounted () {
    this.getProductList()
  }
}
</script>

<style scoped>
</style>
