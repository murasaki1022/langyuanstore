import{a as V}from"./axios-L6U4YIEh.js";import{S as b,c as f}from"./cartStore-A0Sx59X3.js";import{_ as P,a as A,m as S,c as u,d as o,b as e,F as h,g as k,t as r,w as v,r as i,o as _,n as L,k as c,j as C,v as E,e as g}from"./index-pNsrxfov.js";import{L as I}from"./LangyuanLoading-LVp8PndA.js";import"./bootstrap.esm-bUYV0ftw.js";var N={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:T,VITE_APP_API_NAME:U}=N,j={data(){return{carts:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},orderId:this.$route.params.id}},methods:{...A(f,["addCart","getCart"]),onSubmit(){const a=this.form;V.post(`${T}/v2/api/${U}/order`,{data:a}).then(t=>{b.fire(t.data.message),this.$refs.form.resetForm(),this.getCart(),this.$router.push(`/payment/${t.data.orderId}`)}).catch(t=>{b.fire({icon:"error",title:t.response.data.message})})},isPhone(a){return/^(09)[0-9]{8}$/.test(a)?!0:"請輸入09開頭，共10碼的正確的電話號碼"}},mounted(){this.getCart()},components:{LangyuanLoading:I},computed:{...S(f,["cart","final_total"])}},D={class:"container"},M=e("div",{class:"row justify-content-center"},[e("div",{class:"col-md-10"},[e("h3",{class:"fw-bold mb-4 pt-3"},"訂購人資訊")])],-1),R={class:"row flex-row-reverse justify-content-center pb-5"},q={class:"col-md-4"},B={class:"border p-4 mb-4"},O={class:"w-100"},z={class:"d-flex justify-content-between"},F={class:"mb-0 fw-bold"},$={class:"mb-0"},G={class:"mb-0 fw-bold"},H={class:"table mt-4 border-top border-bottom text-muted"},J=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"Subtotal",-1),K={class:"text-end border-0 px-0 pt-4"},Q=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"Payment"),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),W={class:"d-flex justify-content-between mt-4"},X=e("p",{class:"mb-0 h4 fw-bold"},"Total",-1),Y={class:"mb-0 h4 fw-bold"},Z={class:"col-md-6"},ee={class:"mb-0"},te={class:"mb-2"},se=e("label",{for:"ContactMail",class:"text-muted mb-0"},"收件人Email",-1),oe={class:"mb-2"},le=e("label",{for:"ContactName",class:"text-muted mb-0"},"收件人姓名",-1),ae={class:"mb-2"},ne=e("label",{for:"ContactTel",class:"text-muted mb-0"},"收件人電話",-1),re={class:"mb-2"},ie=e("label",{for:"ContactAddress",class:"text-muted mb-0"},"收件人地址",-1),de={class:"mb-2"},me=e("label",{for:"message",class:"form-label"},"留言",-1),ce={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"},ue=e("button",{type:"button",class:"btn btn-outline-primary btn-lg mb-5 mt-3"},[e("i",{class:"bi bi-chevron-compact-left"}),g(" 回到購物車 ")],-1),_e=e("button",{type:"submit",class:"btn btn-primary btn-lg mb-5 mt-3"},[g(" 確認付款"),e("i",{class:"bi bi-chevron-compact-right"})],-1);function pe(a,t,be,fe,l,p){const x=i("LangyuanLoading"),d=i("v-field"),m=i("error-message"),y=i("router-link"),w=i("v-form");return _(),u(h,null,[o(x,{active:a.isLoading,"onUpdate:active":t[0]||(t[0]=s=>a.isLoading=s)},null,8,["active"]),e("div",D,[M,e("div",R,[e("div",q,[e("div",B,[(_(!0),u(h,null,k(a.cart,s=>(_(),u("div",{class:"d-flex mt-2",key:s.id},[e("div",{class:"me-2",style:L([{width:"48px",height:"48px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${s.product.imageUrl})`}])},null,4),e("div",O,[e("div",z,[e("p",F,r(s.product.title),1),e("p",$,"NT$"+r(s.total),1)]),e("p",G,"x "+r(s.qty)+" / "+r(s.product.unit),1)])]))),128)),e("table",H,[e("tbody",null,[e("tr",null,[J,e("td",K,"NT$"+r(a.final_total),1)]),Q])]),e("div",W,[X,e("p",Y,"NT$"+r(a.final_total),1)])])]),e("div",Z,[o(w,{ref:"form",onSubmit:p.onSubmit},{default:v(({errors:s})=>[e("div",ee,[e("div",te,[se,o(d,{id:"email",name:"email",type:"email",class:c(["form-control",{"is-invalid":s.email}]),rules:"email|required",placeholder:"請輸入 Email",modelValue:l.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=n=>l.form.user.email=n)},null,8,["class","modelValue"]),o(m,{name:"email",class:"invalid-feedback"})]),e("div",oe,[le,o(d,{id:"name",name:"收件人姓名",type:"text",class:c(["form-control",{"is-invalid":s.收件人姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=n=>l.form.user.name=n)},null,8,["class","modelValue"]),o(m,{name:"收件人姓名",class:"invalid-feedback"})]),e("div",ae,[ne,o(d,{id:"tel",name:"phone",type:"tel",class:c(["form-control",{"is-invalid":s.phone}]),rules:p.isPhone,placeholder:"請輸入電話",modelValue:l.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=n=>l.form.user.tel=n)},null,8,["rules","class","modelValue"]),o(m,{name:"phone",class:"invalid-feedback"})]),e("div",re,[ie,o(d,{id:"address",name:"收件人地址",type:"text",class:c(["form-control",{"is-invalid":s.收件人地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=n=>l.form.user.address=n)},null,8,["class","modelValue"]),o(m,{name:"收件人地址",class:"invalid-feedback"})]),e("div",de,[me,C(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=n=>l.form.message=n)},null,512),[[E,l.form.message]])])]),e("div",ce,[o(y,{to:"/cart"},{default:v(()=>[ue]),_:1}),_e])]),_:1},8,["onSubmit"])])])])],64)}const we=P(j,[["render",pe]]);export{we as default};