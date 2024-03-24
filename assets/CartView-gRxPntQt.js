import{a as c}from"./axios-L6U4YIEh.js";import{S as a,c as m}from"./cartStore-ac9aelhc.js";import{_ as x,a as y,m as w,c as l,b as t,F as v,g as N,d as g,w as f,t as r,f as P,r as $,o as u,n as A,k as B,v as T,e as k}from"./index-i-bzWmd5.js";import"./bootstrap.esm-bUYV0ftw.js";var V={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:p,VITE_APP_API_NAME:_}=V,I={data(){return{isLoading:!0,carts:{},status:{changeCartNumLoading:""}}},methods:{...y(m,["addCart","getCart"]),changeCartNum(e,s=1){const n={product_id:e.product_id,qty:s};this.status.changeCartNumLoading=e.id,c.put(`${p}/v2/api/${_}/cart/${e.id}`,{data:n}).then(d=>{this.status.changeCartNumLoading="",this.getCart()}).catch(d=>{alert(d.response.data.message)})},deleteCartItem(e){a.fire({title:"確定刪除該品項?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定刪除",cancelButtonText:"取消"}).then(s=>{s.isConfirmed&&(c.delete(`${p}/v2/api/${_}/cart/${e}`).then(n=>{this.getCart()}).catch(n=>{alert(n.response.data.message)}),a.fire({title:"已刪除成功",icon:"success"}))})},deleteCartAll(){a.fire({title:"確定清空購物車?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定",cancelButtonText:"取消"}).then(e=>{e.isConfirmed&&c.delete(`${p}/v2/api/${_}/carts`).then(s=>{this.getCart(),a.fire({title:"已清空購物車",icon:"success"})}).catch(s=>{a.fire({icon:"error",title:s.response.data.message})})})}},components:{},computed:{...w(m,["cart","final_total"])},mounted(){this.getCart()}},L={class:"container mt-5"},S={class:"mt-3"},E={class:"row"},R={class:"col-md-8"},U={class:"table"},D=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0",style:{width:"300px"}},"品名"),t("th",{scope:"col",class:"border-0",style:{width:"200px"}},"數量"),t("th",{scope:"col",class:"border-0 text-end"},"小計"),t("th",{scope:"col",class:"border-0"})])],-1),M={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},q={class:"mb-0 fw-bold my-3 d-inline-block"},z={class:"border-0 align-middle"},F={class:"input-group input-group-sm"},O={class:"input-group mb-3"},j=["onUpdate:modelValue","disabled","onChange"],G={class:"input-group-text bg-secondary3",id:"basic-addon2"},H={class:"border-0 align-middle",style:{"max-width":"160px"}},J={class:"mb-0 ms-auto text-end"},K={class:"border-0 align-middle text-center"},Q=["onClick"],W=P('<div class="input-group w-50 mb-3"><input type="text" class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none" placeholder="Coupon Code" aria-label="Recipient&#39;s username" aria-describedby="button-addon2"><div class="input-group-append"><button class="btn btn-outline-primary border-bottom border-top-0 border-start-0 border-end-0 rounded-0" type="button" id="button-addon2"><i class="bi bi-send-fill"></i></button></div></div>',1),X=t("button",{type:"button",class:"btn btn-outline-primary mb-5 mt-3"},[t("i",{class:"bi bi-chevron-compact-left"}),k(" 回到商品專區 ")],-1),Y={class:"col-md-4"},Z={class:"border p-4 mb-4"},tt=t("h4",{class:"fw-bold mb-4"},"購物明細",-1),et={class:"table text-muted border-bottom"},ot=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"Subtotal",-1),st={class:"text-end border-0 px-0 pt-4"},nt=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"Payment"),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),at={class:"d-flex justify-content-between mt-4"},rt=t("p",{class:"mb-0 h4 fw-bold"},"Total",-1),dt={class:"mb-0 h4 fw-bold"},it=t("button",{type:"submit",class:"btn btn-primary w-100 mt-4"},"輸入訂購人資訊",-1);function ct(e,s,n,d,C,b){const h=$("RouterLink");return u(),l("div",L,[t("div",S,[t("div",E,[t("div",R,[t("table",U,[D,t("tbody",null,[(u(!0),l(v,null,N(e.cart,o=>(u(),l("tr",{class:"border-bottom border-top",key:o.id},[t("th",M,[t("td",{style:A([{width:"72px",height:"72px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${o.product.imageUrl})`}])},null,4),t("p",q,r(o.product.title),1)]),t("td",z,[t("div",F,[t("div",O,[B(t("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":i=>o.qty=i,disabled:o.id===C.status.changeCartNumLoading,onChange:i=>b.changeCartNum(o,o.qty)},null,40,j),[[T,o.qty]]),t("span",G,r(o.product.unit),1)])])]),t("td",H,[t("p",J,"NT$"+r(o.total),1)]),t("td",K,[t("i",{type:"button",class:"bi bi-trash3 text-danger fs-5",onClick:i=>b.deleteCartItem(o.id)},null,8,Q)])]))),128))])]),W,g(h,{to:"/products"},{default:f(()=>[X]),_:1})]),t("div",Y,[t("div",Z,[tt,t("table",et,[t("tbody",null,[t("tr",null,[ot,t("td",st,"NT$"+r(e.final_total),1)]),nt])]),t("div",at,[rt,t("p",dt,"NT$"+r(e.final_total),1)]),g(h,{to:"/order-confirmation"},{default:f(()=>[it]),_:1})])])])])])}const bt=x(I,[["render",ct]]);export{bt as default};
