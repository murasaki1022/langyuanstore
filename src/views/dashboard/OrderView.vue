<template>
<div class="container">
  <LangyuanLoading v-model:active="isLoading">
  </LangyuanLoading>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="100">購買時間</th>
          <th width="60">Email</th>
          <th width="150">購買品項</th>
          <th width="80">應付金額</th>
          <th width="80">是否付款</th>
          <th width="60">編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in orders" :key="item.id">
          <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
            <td>{{$filters.changeDate(item.create_at)}}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="product in item.products" :key="product.id">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">${{ item.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${item.id}`"
                  v-model="item.is_paid"
                  @change="updateOrder(item)"
                />
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="openOrderModal(item)"
                >
                  檢視
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click="openDelOrderModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <PaginationComponent
            :pages="pages"
            @change-pages="getOrderList"
          ></PaginationComponent>
    <OrderModal
          :temp-order="tempOrder"
          :update-order="updateOrder"
          ref="orderModal"
        ></OrderModal>
    <DeleteOrderModal
          :temp-order="tempOrder"
          :delete-order="deleteOrder"
          ref="removeModal"></DeleteOrderModal>
</div>
</template>

<script>
import axios from 'axios'
import DeleteOrderModal from '../../components/DeleteOrderModal.vue'
import OrderModal from '../../components/OrderModal.vue'
import PaginationComponent from '../../components/PaginationComponent.vue'
import LangyuanLoading from '../../components/LangyuanLoading.vue'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data () {
    return {
      isLoading: true,
      orders: [],
      tempOrder: {},
      pages: {}
    }
  },
  methods: {
    getOrderList (page = 1) {
      const url = `${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/orders?page=${page}`
      axios
        .get(url)
        .then((response) => {
          this.orders = response.data.orders
          this.pages = response.data.pagination
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error.response.data.message)
          alert(error.response.data.message)
        })
    },
    openOrderModal (item) {
      this.tempOrder = { ...item }
      this.$refs.orderModal.openModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      this.$refs.removeModal.openModal()
    },
    updateOrder (item) {
      const url = `${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }

      axios.put(url, { data: paid })
        .then((response) => {
          alert(response.data.message)
          this.$refs.orderModal.hideModal()
          this.getOrderList()
        })
        .catch((error) => {
          console.log(error.response.data.message)
          alert(error.response.data.message)
        })
    },
    deleteOrder () {
      const url = `${VITE_APP_API_URL}/v2/api/${VITE_APP_API_NAME}/admin/order/${this.tempOrder.id}`

      axios
        .delete(url)
        .then((response) => {
          alert(response.data.message)
          this.$refs.removeModal.hideModal()
          this.getOrderList()
        })
        .catch((error) => {
          alert(error.data.message)
        })
    }
  },
  components: { DeleteOrderModal, OrderModal, PaginationComponent, LangyuanLoading },
  mounted () {
    this.getOrderList()
  }
}
</script>

<style scoped>
</style>
