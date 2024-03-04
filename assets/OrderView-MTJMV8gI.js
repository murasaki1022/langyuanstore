import{a as b}from"./axios-L6U4YIEh.js";import{M as k}from"./bootstrap.esm-owtkFIww.js";import{_ as M,o as d,c as s,b as e,e as v,t as o,D as f,F as m,u as y,A as $,E as x,d as u,r as p,C as P}from"./index-952WuPKQ.js";import{P as D}from"./PaginationComponent-eQrzvSKX.js";import{L as E}from"./LangyuanLoading-Iigl8Enj.js";import"./commonjsHelpers-4gQjN7DL.js";const V={data(){return{delOrderModal:null}},methods:{openModal(){this.delOrderModal.show()},hideModal(){this.delOrderModal.hide()}},props:["tempOrder","deleteOrder"],mounted(){this.delOrderModal=new k(this.$refs.delOrderModal,{keyboard:!1,backdrop:"static"})}},A={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true"},I={class:"modal-dialog"},T={class:"modal-content border-0"},U=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delOrderModalLabel",class:"modal-title"},[e("span",null,"刪除訂單")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},S={class:"text-danger"},R={class:"modal-footer"},B=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function q(l,r,a,h,t,_){return d(),s("div",A,[e("div",I,[e("div",T,[U,e("div",N,[v(" 是否刪除 "),e("strong",S,"訂單"+o(a.tempOrder.id),1),v(" (刪除後將無法恢復)。 ")]),e("div",R,[B,e("button",{type:"button",class:"btn btn-danger",onClick:r[0]||(r[0]=(...i)=>a.deleteOrder&&a.deleteOrder(...i))}," 確認刪除 ")])])])],512)}const F=M(V,[["render",q]]),j={data(){return{orderModal:null,editOrder:{},is_paid:!1}},props:["tempOrder","updateOrder"],methods:{openModal(){this.orderModal.show()},hideModal(){this.orderModal.hide()}},watch:{tempOrder(){this.editOrder=this.tempOrder}},mounted(){this.orderModal=new k(this.$refs.orderModal,"orderModal",{keyboard:!1,backdrop:"static"}),this.editOrder=this.tempOrder}},z={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"orderModal"},G={class:"modal-dialog modal-xl",role:"document"},H={class:"modal-content border-0"},J=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),K={class:"modal-body"},Q={class:"row"},W={class:"col-md-4"},X=e("h3",null,"用戶資料",-1),Y={class:"table"},Z={key:0},ee=e("th",{style:{width:"100px"}},"姓名",-1),te=e("th",null,"Email",-1),de=e("th",null,"電話",-1),se=e("th",null,"地址",-1),oe={class:"col-md-8"},le=e("h3",null,"訂單細節",-1),re={class:"table"},ne=e("th",{style:{width:"100px"}},"訂單編號",-1),ae=e("th",null,"下單時間",-1),ie=e("th",null,"付款時間",-1),ce={key:0},_e={key:1},he=e("th",null,"付款狀態",-1),ue={key:0,class:"text-success"},pe={key:1,class:"text-muted"},me=e("th",null,"總金額",-1),be=e("h3",null,"選購商品",-1),Oe={class:"table"},ge=e("thead",null,[e("tr")],-1),fe={class:"text-end"},ye={class:"d-flex justify-content-end"},Me={class:"form-check"},ve={class:"form-check-label",for:"flexCheckDefault"},ke={key:0},$e={key:1},xe={class:"modal-footer"},Ce=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Le(l,r,a,h,t,_){return d(),s("div",z,[e("div",G,[e("div",H,[J,e("div",K,[e("div",Q,[e("div",W,[X,e("table",Y,[t.editOrder.user?(d(),s("tbody",Z,[e("tr",null,[ee,e("td",null,o(t.editOrder.user.name),1)]),e("tr",null,[te,e("td",null,o(t.editOrder.user.email),1)]),e("tr",null,[de,e("td",null,o(t.editOrder.user.tel),1)]),e("tr",null,[se,e("td",null,o(t.editOrder.user.address),1)])])):f("",!0)])]),e("div",oe,[le,e("table",re,[e("tbody",null,[e("tr",null,[ne,e("td",null,o(t.editOrder.id),1)]),e("tr",null,[ae,e("td",null,o(l.$filters.changeDate(t.editOrder.create_at)),1)]),e("tr",null,[ie,e("td",null,[t.editOrder.paid_date?(d(),s("span",ce,o(l.$filters.changeDate(t.editOrder.paid_date)),1)):(d(),s("span",_e,"時間不正確"))])]),e("tr",null,[he,e("td",null,[t.editOrder.is_paid?(d(),s("strong",ue,"已付款")):(d(),s("span",pe,"尚未付款"))])]),e("tr",null,[me,e("td",null," $"+o(l.$filters.changeToMoney(t.editOrder.total)),1)])])]),be,e("table",Oe,[ge,e("tbody",null,[(d(!0),s(m,null,y(t.editOrder.products,i=>(d(),s("tr",{key:i.id},[e("th",null,o(i.product.title),1),e("td",null,o(i.qty)+" / "+o(i.product.unit),1),e("td",fe," $"+o(l.$filters.changeToMoney(i.final_total)),1)]))),128))])]),e("div",ye,[e("div",Me,[$(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":r[0]||(r[0]=i=>t.editOrder.is_paid=i)},null,512),[[x,t.editOrder.is_paid]]),e("label",ve,[t.editOrder.is_paid?(d(),s("span",ke,"已付款")):(d(),s("span",$e,"未付款"))])])])])])]),e("div",xe,[Ce,e("button",{type:"button",class:"btn btn-primary",onClick:r[1]||(r[1]=i=>a.updateOrder(t.editOrder))}," 修改付款狀態 ")])])])],512)}const we=M(j,[["render",Le]]);var Pe={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:O,VITE_APP_API_NAME:g}=Pe,De={data(){return{isLoading:!0,orders:[],tempOrder:{},pages:{}}},methods:{getOrderList(l=1){const r=`${O}/v2/api/${g}/admin/orders?page=${l}`;b.get(r).then(a=>{this.orders=a.data.orders,this.pages=a.data.pagination,this.isLoading=!1}).catch(a=>{console.log(a.response.data.message),alert(a.response.data.message)})},openOrderModal(l){this.tempOrder={...l},this.$refs.orderModal.openModal()},openDelOrderModal(l){this.tempOrder={...l},this.$refs.removeModal.openModal()},updateOrder(l){const r=`${O}/v2/api/${g}/admin/order/${l.id}`,a={is_paid:l.is_paid};b.put(r,{data:a}).then(h=>{alert(h.data.message),this.$refs.orderModal.hideModal(),this.getOrderList()}).catch(h=>{console.log(h.response.data.message),alert(h.response.data.message)})},deleteOrder(){const l=`${O}/v2/api/${g}/admin/order/${this.tempOrder.id}`;b.delete(l).then(r=>{alert(r.data.message),this.$refs.removeModal.hideModal(),this.getOrderList()}).catch(r=>{alert(r.data.message)})}},components:{DeleteOrderModal:F,OrderModal:we,PaginationComponent:D,LangyuanLoading:E},mounted(){this.getOrderList()}},Ee={class:"container"},Ve={class:"table mt-4"},Ae=e("thead",null,[e("tr",null,[e("th",{width:"100"},"購買時間"),e("th",{width:"60"},"Email"),e("th",{width:"150"},"購買品項"),e("th",{width:"80"},"應付金額"),e("th",{width:"80"},"是否付款"),e("th",{width:"60"},"編輯")])],-1),Ie=["textContent"],Te={class:"list-unstyled"},Ue={class:"text-right"},Ne={class:"form-check form-switch"},Se=["id","onUpdate:modelValue","onChange"],Re=["for"],Be={key:0},qe={key:1},Fe={class:"btn-group"},je=["onClick"],ze=["onClick"];function Ge(l,r,a,h,t,_){const i=p("LangyuanLoading"),C=p("PaginationComponent"),L=p("OrderModal"),w=p("DeleteOrderModal");return d(),s("div",Ee,[u(i,{active:t.isLoading,"onUpdate:active":r[0]||(r[0]=n=>t.isLoading=n)},null,8,["active"]),e("table",Ve,[Ae,e("tbody",null,[(d(!0),s(m,null,y(t.orders,n=>(d(),s(m,{key:n.id},[t.orders.length?(d(),s("tr",{key:0,class:P({"text-secondary":!n.is_paid})},[e("td",null,o(l.$filters.changeDate(n.create_at)),1),e("td",null,[n.user?(d(),s("span",{key:0,textContent:o(n.user.email)},null,8,Ie)):f("",!0)]),e("td",null,[e("ul",Te,[(d(!0),s(m,null,y(n.products,c=>(d(),s("li",{key:c.id},o(c.product.title)+" 數量："+o(c.qty)+" "+o(c.product.unit),1))),128))])]),e("td",Ue,"$"+o(n.total),1),e("td",null,[e("div",Ne,[$(e("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${n.id}`,"onUpdate:modelValue":c=>n.is_paid=c,onChange:c=>_.updateOrder(n)},null,40,Se),[[x,n.is_paid]]),e("label",{class:"form-check-label",for:`paidSwitch${n.id}`},[n.is_paid?(d(),s("span",Be,"已付款")):(d(),s("span",qe,"未付款"))],8,Re)])]),e("td",null,[e("div",Fe,[e("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:c=>_.openOrderModal(n)}," 檢視 ",8,je),e("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:c=>_.openDelOrderModal(n)}," 刪除 ",8,ze)])])],2)):f("",!0)],64))),128))])]),u(C,{pages:t.pages,onChangePages:_.getOrderList},null,8,["pages","onChangePages"]),u(L,{"temp-order":t.tempOrder,"update-order":_.updateOrder,ref:"orderModal"},null,8,["temp-order","update-order"]),u(w,{"temp-order":t.tempOrder,"delete-order":_.deleteOrder,ref:"removeModal"},null,8,["temp-order","delete-order"])])}const Ye=M(De,[["render",Ge]]);export{Ye as default};
