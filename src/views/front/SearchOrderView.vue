<template>
    <div class="container mt-5" style="width: 800px">
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="在此輸入訂單編號" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-primary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
    </div>
<div class="container bg-primary"><p class="pt-3 pb-3 px-2 mb-3 fs-5 fw-bold">訂單資訊</p></div>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">品名</th>
            <th scope="col">數量/單位</th>
            <th scope="col">小計</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>{{  }}</td>
            <td>{{  }} / {{  }}</td>
            <td>{{  }}</td>
        </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2" class="text-end">總計</td>
                <td class="text-end">${{  }}</td>
            </tr>
        </tfoot>
    </table>
    <div class="container bg-primary"><p class="pt-3 pb-3 px-2 mb-3 fs-5 fw-bold">訂購人資訊</p></div>
    <table class="table">
        <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
        </tbody>
    </table>
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
