import{a as w}from"./axios-L6U4YIEh.js";import{S as b,c as f}from"./cartStore-1TopY6Uw.js";import{_ as y,a as V,m as P,c as u,b as e,F as A,g as S,t as r,d as l,w as h,r as m,o as _,n as k,l as c,k as C,v as E,e as v}from"./index-JFojWkfZ.js";import"./commonjsHelpers-4gQjN7DL.js";var I={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:N,VITE_APP_API_NAME:T}=I,U={data(){return{carts:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},orderId:this.$route.params.id}},methods:{...V(f,["addCart","getCart"]),onSubmit(){const n=this.form;w.post(`${N}/v2/api/${T}/order`,{data:n}).then(t=>{b.fire(t.data.message),this.$refs.form.resetForm(),this.getCart(),this.$router.push(`/payment/${t.data.orderId}`)}).catch(t=>{b.fire({icon:"error",title:t.response.data.message})})},isPhone(n){return/^(09)[0-9]{8}$/.test(n)?!0:"請輸入09開頭，共10碼的正確的電話號碼"}},mounted(){this.getCart()},computed:{...P(f,["cart","final_total"])}},R={class:"container"},L=e("div",{class:"row justify-content-center"},[e("div",{class:"col-md-10"},[e("h3",{class:"fw-bold mb-4 pt-3"},"訂購人資訊")])],-1),j={class:"row flex-row-reverse justify-content-center pb-5"},D={class:"col-md-4"},M={class:"border p-4 mb-4"},q={class:"w-100"},B={class:"d-flex justify-content-between"},O={class:"mb-0 fw-bold"},z={class:"mb-0"},F={class:"mb-0 fw-bold"},$={class:"table mt-4 border-top border-bottom text-muted"},G=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"Subtotal",-1),H={class:"text-end border-0 px-0 pt-4"},J=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"Payment"),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),K={class:"d-flex justify-content-between mt-4"},Q=e("p",{class:"mb-0 h4 fw-bold"},"Total",-1),W={class:"mb-0 h4 fw-bold"},X={class:"col-md-6"},Y={class:"mb-0"},Z={class:"mb-2"},ee=e("label",{for:"ContactMail",class:"text-muted mb-0"},"收件人Email",-1),te={class:"mb-2"},se=e("label",{for:"ContactName",class:"text-muted mb-0"},"收件人姓名",-1),oe={class:"mb-2"},le=e("label",{for:"ContactTel",class:"text-muted mb-0"},"收件人電話",-1),ae={class:"mb-2"},ne=e("label",{for:"ContactAddress",class:"text-muted mb-0"},"收件人地址",-1),re={class:"mb-2"},ie=e("label",{for:"message",class:"form-label"},"留言",-1),de={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"},me=e("button",{type:"button",class:"btn btn-outline-primary btn-lg mb-5 mt-3"},[e("i",{class:"bi bi-chevron-compact-left"}),v(" 回到購物車 ")],-1),ce=e("button",{type:"submit",class:"btn btn-primary btn-lg mb-5 mt-3"},[v(" 確認付款"),e("i",{class:"bi bi-chevron-compact-right"})],-1);function ue(n,t,_e,pe,o,p){const i=m("v-field"),d=m("error-message"),g=m("RouterLink"),x=m("v-form");return _(),u("div",R,[L,e("div",j,[e("div",D,[e("div",M,[(_(!0),u(A,null,S(n.cart,s=>(_(),u("div",{class:"d-flex mt-2",key:s.id},[e("div",{class:"me-2",style:k([{width:"48px",height:"48px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${s.product.imageUrl})`}])},null,4),e("div",q,[e("div",B,[e("p",O,r(s.product.title),1),e("p",z,"NT$"+r(s.total),1)]),e("p",F,"x "+r(s.qty)+" / "+r(s.product.unit),1)])]))),128)),e("table",$,[e("tbody",null,[e("tr",null,[G,e("td",H,"NT$"+r(n.final_total),1)]),J])]),e("div",K,[Q,e("p",W,"NT$"+r(n.final_total),1)])])]),e("div",X,[l(x,{ref:"form",onSubmit:p.onSubmit},{default:h(({errors:s})=>[e("div",Y,[e("div",Z,[ee,l(i,{id:"email",name:"email",type:"email",class:c(["form-control",{"is-invalid":s.email}]),rules:"email|required",placeholder:"請輸入 Email",modelValue:o.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=a=>o.form.user.email=a)},null,8,["class","modelValue"]),l(d,{name:"email",class:"invalid-feedback"})]),e("div",te,[se,l(i,{id:"name",name:"收件人姓名",type:"text",class:c(["form-control",{"is-invalid":s.收件人姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=a=>o.form.user.name=a)},null,8,["class","modelValue"]),l(d,{name:"收件人姓名",class:"invalid-feedback"})]),e("div",oe,[le,l(i,{id:"tel",name:"phone",type:"tel",class:c(["form-control",{"is-invalid":s.phone}]),rules:p.isPhone,placeholder:"請輸入電話",modelValue:o.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=a=>o.form.user.tel=a)},null,8,["rules","class","modelValue"]),l(d,{name:"phone",class:"invalid-feedback"})]),e("div",ae,[ne,l(i,{id:"address",name:"收件人地址",type:"text",class:c(["form-control",{"is-invalid":s.收件人地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=a=>o.form.user.address=a)},null,8,["class","modelValue"]),l(d,{name:"收件人地址",class:"invalid-feedback"})]),e("div",re,[ie,C(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=a=>o.form.message=a)},null,512),[[E,o.form.message]])])]),e("div",de,[l(g,{to:"/cart"},{default:h(()=>[me]),_:1}),ce])]),_:1},8,["onSubmit"])])])])}const ge=y(U,[["render",ue]]);export{ge as default};