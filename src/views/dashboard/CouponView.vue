<template>
    <div class="container">
        <h1>優惠券頁面</h1>
        <div class="text-end">
          <button class="btn btn-primary mt-4" @click="postCoupons()">
            新增優惠券
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">優惠代碼</th>
              <th width="120">優惠券內容</th>
              <th width="120">折扣</th>
              <th width="120">結束日期</th>
              <th width="100">是否啟用</th>
              <th width="100">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{}}</td>
              <td>{{}}</td>
              <td class="text-end">${{}}</td>
              <td class="text-end">${{}}</td>
              <td>
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 分頁元件 -->
        <!-- <PaginationComponent
          :pages="pages"
          :get-product-list="getProductList"
        ></PaginationComponent> -->
      </div>
      <!-- Modal -->
      <!-- <ProductsModal
        :update-product="updateProduct"
        :temp-product="tempProduct"
        :isNew="isNew"
        ref="pModal"
      ></ProductsModal> -->
      <!-- deleteModal -->
      <DeleteProductModal
        :temp-product="tempProduct"
        :delete-product="deleteProduct"
        ref="removeModal"
      ></DeleteProductModal>

</template>

<script>

export default {

}
</script>

<style scoped>
</style>
