import{a as r}from"./axios-L6U4YIEh.js";import{S as i}from"./sweetalert2.all-kdo4UVoD.js";import{c as B}from"./cartStore-3WxirmGR.js";import{_ as N,a as E,r as _,o as y,c as x,d as l,b as e,F as C,u as S,t as d,w as V,e as h,x as T,z as L,A as P,B as g}from"./index-CeSh2qIn.js";import{L as U}from"./LangyuanLoading-vz4UvjCZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./bootstrap.esm-owtkFIww.js";/* empty css              */var I={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:c,VITE_APP_API_NAME:m}=I,q={data(){return{isLoading:!0,products:[],tempProduct:{},carts:{},status:{addCartLoading:"",changeCartNumLoading:""},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getProduct(){r.get(`${c}/v2/api/${m}/products/all`).then(s=>{this.products=s.data.products,this.isLoading=!1}).catch(s=>{console.log(s.response.data.message)})},openModal(s){this.tempProduct=s,this.$refs.userModal.open()},getCart(){r.get(`${c}/v2/api/${m}/cart`).then(s=>{this.carts=s.data.data,console.log(s.data.data)}).catch(s=>{console.log(s.response.data.message)})},...E(B,["addCart"]),changeCartNum(s,t=1){const u={product_id:s.product_id,qty:t};this.status.changeCartNumLoading=s.id,r.put(`${c}/v2/api/${m}/cart/${s.id}`,{data:u}).then(v=>{this.status.changeCartNumLoading="",this.getCart()}).catch(v=>{console.log(v.response.data.message)})},deleteCartItem(s){i.fire({title:"確定刪除該品項?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定刪除",cancelButtonText:"取消"}).then(t=>{t.isConfirmed&&(r.delete(`${c}/v2/api/${m}/cart/${s}`).then(u=>{this.getCart()}).catch(u=>{console.log(u.response.data.message)}),i.fire({title:"已刪除成功",icon:"success"}))})},deleteCartAll(){i.fire({title:"確定清空購物車?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定",cancelButtonText:"取消"}).then(s=>{s.isConfirmed&&r.delete(`${c}/v2/api/${m}/carts`).then(t=>{this.getCart(),i.fire({title:"已清空購物車",icon:"success"})}).catch(t=>{console.log(t),i.fire({icon:"error",title:t.response.data.message})})})},onSubmit(){const s=this.form;r.post(`${c}/v2/api/${m}/order`,{data:s}).then(t=>{i.fire(t.data.message),this.$refs.form.resetForm(),this.getCart()}).catch(t=>{i.fire({icon:"error",title:t.response.data.message})})},isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"請輸入09開頭，共10碼的正確的電話號碼"}},components:{LangyuanLoading:U},mounted(){this.getProduct(),this.getCart()}},M={class:"container"},R={class:"mt-4"},D=e("div",{class:"container bg-primary"},[e("p",{class:"pt-3 pb-3 px-2 mb-3 fs-5 fw-bold"},[e("i",{class:"bi bi-journal-check px-2"}),h("購物明細 ")])],-1),$={class:"table align-middle"},z=e("thead",{class:"bg-secondary3"},[e("tr",null,[e("th",{class:"my-2",style:{width:"200px"}}),e("th",{class:"text-center"},"品名"),e("th",{class:"text-end",style:{width:"150px"}},"數量/單位"),e("th",{class:"text-end",style:{width:"150px"}},"單價"),e("th",{class:"text-center",style:{width:"150px"}},"刪除商品")])],-1),F={class:"text-center"},O={class:"input-group input-group-sm"},j={class:"input-group mb-3"},G=["onUpdate:modelValue","disabled","onChange"],H={class:"input-group-text bg-secondary3",id:"basic-addon2"},J={class:"text-end"},K={class:"text-center"},Q=["onClick"],W={class:"container bg-secondary3 px-5 pt-3 pb-3 mb-3"},X={class:"flex-column pt-3"},Y=e("div",{class:"input-group mb-3",style:{width:"15rem"}},[e("input",{type:"text",class:"form-control",placeholder:"輸入折扣碼","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),e("button",{class:"btn btn-primary",type:"button",id:"button-addon2"},[h("使用"),e("br"),h("折扣碼")])],-1),Z={class:"d-flex align-items-end flex-column"},ee={class:"py-2"},te={class:"py-1"},se={class:"pt-4 pb-2"},oe=e("div",{class:"container bg-primary"},[e("p",{class:"pt-3 pb-3 px-2 mb-3 fs-5 fw-bold"},[e("i",{class:"bi bi-person-circle px-2"}),h("訂購人資訊 ")])],-1),ae={class:"my-4 row justify-content-center"},ne={class:"mb-3"},le=e("label",{for:"email",class:"form-label"},"Email",-1),ie={class:"mb-3"},re=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),de={class:"mb-3"},ce=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),me={class:"mb-3"},ue=e("label",{for:"address",class:"form-label"},"收件人地址",-1),pe={class:"mb-3"},_e=e("label",{for:"message",class:"form-label"},"留言",-1),he={class:"text-end"},be={type:"button",class:"btn btn-lg btn-secondary3 text-primary mx-3"},fe=e("button",{type:"submit",class:"btn btn-lg btn-outline-primary"},"訂單確認",-1);function ge(s,t,u,v,a,p){const w=_("LangyuanLoading"),b=_("v-field"),f=_("error-message"),k=_("router-link"),A=_("v-form");return y(),x(C,null,[l(w,{active:a.isLoading,"onUpdate:active":t[0]||(t[0]=o=>a.isLoading=o)},null,8,["active"]),e("div",M,[e("div",R,[D,e("table",$,[z,e("tbody",null,[(y(!0),x(C,null,S(a.carts.carts,o=>(y(),x("tr",{key:o.id},[e("td",{class:"my-2",style:T([{height:"200px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${o.product.imageUrl})`}])},null,4),e("td",F,d(o.product.title),1),e("td",null,[e("div",O,[e("div",j,[L(e("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":n=>o.qty=n,disabled:o.id===a.status.changeCartNumLoading,onChange:n=>p.changeCartNum(o,o.qty)},null,40,G),[[P,o.qty]]),e("span",H,d(o.product.unit),1)])])]),e("td",J,"NT$"+d(o.total),1),e("td",K,[e("button",{type:"button",class:"btn text-danger bi bi-trash-fill fs-3",onClick:n=>p.deleteCartItem(o.id)},null,8,Q)])]))),128))])]),e("div",W,[e("div",X,[Y,e("div",Z,[e("div",ee," 共 "+d(a.carts.length)+" 項商品，總數量 "+d(a.carts.qty),1),e("div",te," 總金額：NT$ "+d(a.carts.final_total)+"元 ",1),e("div",se,[e("button",{class:"btn btn-danger",type:"button",onClick:t[1]||(t[1]=o=>p.deleteCartAll())}," 清空購物車 ")])])])]),oe,e("div",ae,[l(A,{ref:"form",class:"col-md-6",onSubmit:p.onSubmit},{default:V(({errors:o})=>[e("div",ne,[le,l(b,{id:"email",name:"email",type:"email",class:g(["form-control",{"is-invalid":o.email}]),rules:"email|required",placeholder:"請輸入 Email",modelValue:a.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=n=>a.form.user.email=n)},null,8,["class","modelValue"]),l(f,{name:"email",class:"invalid-feedback"})]),e("div",ie,[re,l(b,{id:"name",name:"收件人姓名",type:"text",class:g(["form-control",{"is-invalid":o.收件人姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:a.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=n=>a.form.user.name=n)},null,8,["class","modelValue"]),l(f,{name:"收件人姓名",class:"invalid-feedback"})]),e("div",de,[ce,l(b,{id:"tel",name:"phone",type:"tel",class:g(["form-control",{"is-invalid":o.phone}]),rules:p.isPhone,placeholder:"請輸入電話",modelValue:a.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=n=>a.form.user.tel=n)},null,8,["rules","class","modelValue"]),l(f,{name:"phone",class:"invalid-feedback"})]),e("div",me,[ue,l(b,{id:"address",name:"收件人地址",type:"text",class:g(["form-control",{"is-invalid":o.收件人地址}]),placeholder:"請輸入地址",rules:"required",modelValue:a.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=n=>a.form.user.address=n)},null,8,["class","modelValue"]),l(f,{name:"收件人地址",class:"invalid-feedback"})]),e("div",pe,[_e,L(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[6]||(t[6]=n=>a.form.message=n)},null,512),[[P,a.form.message]])]),e("div",he,[e("button",be,[l(k,{to:"/products",style:{"text-decoration":"none"}},{default:V(()=>[h("回商品專區")]),_:1})]),fe])]),_:1},8,["onSubmit"])])])])],64)}const ke=N(q,[["render",ge]]);export{ke as default};