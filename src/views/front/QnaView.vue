<template>
    <div class="container mt-5">
        <div class="container-lg container-md container-sm mb-4" style="width: 800px">
        <p class="fs-2 fw-bold">
            <i class="bi bi-hash"></i>訂單常見問題
        </p>
        <div class="accordion container-lg container-md container-sm" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    如何確認我的訂單是否已經成功提交？
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    您可以通過查看您的電子郵件收件箱，查看是否收到了訂單確認郵件。另外，您也可以登入您在網站上的帳戶，查看訂單歷史記錄或訂單狀態，以確認訂單是否成功提交。
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    在哪裡可以查詢我的訂單狀態？
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    您可以登入您在網站上的帳戶，然後尋找訂單歷史或訂單跟蹤部分。在那裡，您可以查看您之前提交的訂單，並查詢每個訂單的當前狀態，例如處理中、運送中或已送達。
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    訂單處於不同狀態時代表什麼，例如處理中、運送中和已送達？
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    不同訂單狀態代表著不同的處理階段和進度。當訂單狀態顯示為“處理中”時，這意味著您的訂單已經提交，但尚未準備好進入運送階段。當訂單狀態顯示為“運送中”時，這表示您的訂單已經準備好並正在配送過程中。最後，當訂單狀態顯示為“已送達”時，這意味著您的訂單已經成功送達到您提供的送貨地址。這些狀態的更新通常由系統自動處理，以及時地提供訂單的最新狀態資訊。
                </div>
                </div>
            </div>
        </div>
        </div>
        <div class="container-lg container-md container-sm mb-4" style="width: 800px">
        <p class="fs-2 fw-bold">
            <i class="bi bi-hash"></i>付款運送說明
        </p>
        <div class="accordion container-lg container-md container-sm" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    付款方式
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    我們接受信用卡（Visa、MasterCard、American Express）、PayPal等付款方式。您可以在結帳頁面選擇您偏好的付款方式，並根據指示完成付款。
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    運送方式
                </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    我們提供標準運送和快遞運送兩種方式。標準運送通常需要3-5個工作日，而快遞運送則通常在1-2個工作日內送達。您可以在結帳時選擇適合您需求的運送方式。
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    國際運送
                </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    我們支持國際運送，但國際運送所需的運費和時效可能會有所不同。請在結帳時提供正確的送貨地址，我們將計算並顯示相應的國際運送選項及費用。
                </div>
                </div>
            </div>
        </div>
        </div>
        <div class="container-lg container-md container-sm mb-4" style="width: 800px">
        <p class="fs-2 fw-bold">
            <i class="bi bi-hash"></i>優惠券使用說明
        </p>
        <div class="accordion container-lg container-md container-sm" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    優惠券代碼輸入
                </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    在結帳頁面或購物車頁面中，您將看到一個專用的文本框，通常標註為“優惠券代碼”或“促銷代碼”。將您收到的優惠券代碼輸入該框中，然後點擊應用或提交按鈕，系統將自動應用優惠券的相應折扣。
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    滿額使用
                </button>
                </h2>
                <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    某些優惠券可能有最低消費額限制。在使用這類優惠券時，確保您的訂單金額達到了優惠券的最低消費額要求，否則優惠券可能無法生效。
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    限定商品
                </button>
                </h2>
                <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    有些優惠券僅適用於特定商品或商品類別。在使用優惠券之前，請仔細閱讀優惠券的使用條款和細則，以確保您的訂單中包含符合優惠券要求的商品。
                </div>
                </div>
            </div>
        </div>
        </div>
        <div class="container-lg container-md container-sm mb-5" style="width: 800px">
        <p class="fs-2 fw-bold">
            <i class="bi bi-hash"></i>退換貨說明
        </p>
        <div class="accordion container-lg container-md container-sm" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                    退貨政策
                </button>
                </h2>
                <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    我們提供退貨政策，如果您對購買的商品不滿意，可以在一定期限內（通常為30天）申請退貨。請確保商品未使用且包裝完好，並隨附原始收據或訂單號碼。
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEle" aria-expanded="false" aria-controls="collapseEle">
                    退換貨流程
                </button>
                </h2>
                <div id="collapseEle" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    請在退換貨政策內的規定時間內聯繫我們的客服部門，提交退換貨申請。客服將指導您完成退貨手續，包括提供退貨地址和相關流程。一旦收到退貨並檢查無誤，我們將安排退款或換貨。
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwel" aria-expanded="false" aria-controls="collapseTwel">
                    特殊商品規定
                </button>
                </h2>
                <div id="collapseTwel" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    某些商品可能不支持退換貨，如個性化定製品或清倉特價商品。請在購買前仔細閱讀商品頁面上的退換貨政策，以確保您理解特殊商品的相關規定。
                </div>
                </div>
            </div>
        </div>
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
