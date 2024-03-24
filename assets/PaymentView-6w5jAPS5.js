import{a as p}from"./axios-L6U4YIEh.js";import{S as b,c as i}from"./cartStore-ac9aelhc.js";import{_ as u,a as m,m as x,c as a,b as t,e as f,t as e,F as y,g,i as w,o as c}from"./index-i-bzWmd5.js";import"./bootstrap.esm-bUYV0ftw.js";var P={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:_,VITE_APP_API_NAME:h}=P,v={data(){return{order:{user:{},product:{}},orderProduct:[],orderId:this.$route.params.id}},methods:{getOrder(r){p.get(`${_}/v2/api/${h}/order/${r}`).then(d=>{this.order=d.data.order,this.orderProducts=Object.keys(this.order.products).map(n=>this.order.products[n])}).catch(d=>{alert(d.response.data.message)})},payOrder(){p.post(`${_}/v2/api/${h}/pay/${this.orderId}`).then(r=>{b.fire(r.data.message),this.$router.push("/payment-complete")}).catch(r=>{alert(r.response.data.message)})},...m(i,["getCart"])},computed:{...x(i,["cart"])},mounted(){this.getOrder(this.orderId)}},A={class:"container mt-5"},E={class:"row flex-row-reverse justify-content-center pb-5"},I={class:"col-md-6"},O={class:"border p-4 mb-4"},S={class:"table mt-4 border-top border-bottom text-muted"},V=t("th",{scope:"row",class:"border-0 px-0 pt-4 pb-4 font-weight-normal"},"訂單編號",-1),T={class:"border-0 px-0 pt-4"},N=t("button",{type:"button",class:"mx-3 btn btn-outline-primary btn-sm"},"複製單號",-1),k=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人姓名",-1),R={class:"border-0 px-0 pt-0 pb-4"},B=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人手機",-1),D={class:"border-0 px-0 pt-0 pb-4"},L=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人Email",-1),M={class:"border-0 px-0 pt-0 pb-4"},$=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"收件人地址",-1),U={class:"border-0 px-0 pt-0 pb-4"},j=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"備註",-1),C={class:"border-0 px-0 pt-0 pb-4"},F=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"付款狀態"),t("td",{class:"border-0 px-0 pt-0 pb-4"},"未付款")],-1),q={class:"col-md-4"},z={class:"table table-hover"},G=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0 text-center"},"品名"),t("th",{scope:"col",class:"border-0"},"數量"),t("th",{scope:"col",class:"border-0 text-end"},"小計")])],-1),H={class:"py-3"},J={class:"py-3 border-0 align-middle"},K={class:"py-3 border-0 align-middle",style:{"max-width":"160px"}},Q={class:"mb-0 ms-auto text-end"},W=t("td",null,null,-1),X=t("td",null,null,-1),Y={class:"py-3 text-end"};function Z(r,d,n,tt,s,l){return c(),a("div",A,[t("div",E,[t("div",I,[t("div",O,[t("table",S,[t("tbody",null,[t("tr",null,[V,t("td",T,[f(e(s.order.id)+" ",1),N])]),t("tr",null,[k,t("td",R,e(s.order.user.name),1)]),t("tr",null,[B,t("td",D,e(s.order.user.tel),1)]),t("tr",null,[L,t("td",M,e(s.order.user.email),1)]),t("tr",null,[$,t("td",U,e(s.order.user.address),1)]),t("tr",null,[j,t("td",C,e(s.order.message),1)]),F])])])]),t("div",q,[t("table",z,[G,t("tbody",null,[(c(!0),a(y,null,g(s.order.products,o=>(c(),a("tr",{class:"border-bottom border-top",key:o.id},[t("td",H,e(o.product.title),1),t("td",J,e(o.qty)+"/ "+e(o.product.unit),1),t("td",K,[t("p",Q,"NT$ "+e(o.total),1)])]))),128))]),t("tfoot",null,[t("tr",null,[W,X,t("td",Y,"總計：NT$ "+e(s.order.total),1)])])]),t("button",{type:"submit",class:"btn btn-primary w-100 mt-4",onClick:d[0]||(d[0]=w((...o)=>l.payOrder&&l.payOrder(...o),["prevent"]))},"確認付款")])])])}const dt=u(v,[["render",Z]]);export{dt as default};
