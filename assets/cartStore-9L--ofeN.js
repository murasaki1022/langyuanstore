import{z as i}from"./index-Hf4qKoHF.js";import{S as c}from"./sweetalert2.all-t36qbmOe.js";import{a as o}from"./axios-L6U4YIEh.js";import{b as n}from"./bootstrap.esm-owtkFIww.js";var _={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io",VITE_APP_API_NAME:"langyuanstore",BASE_URL:"/langyuanstore/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};window.bootstrap=n;const{VITE_APP_API_URL:r,VITE_APP_API_NAME:e}=_,P=i("cartStore",{state:()=>({cart:[],final_total:0,total:0}),actions:{getCart(){o.get(`${r}/v2/api/${e}/cart`).then(t=>{this.cart=t.data.data.carts,this.final_total=t.data.data.final_total,this.total=t.data.data.total,console.log("pinia",this.cart)})},addCart(t){const s={product_id:t,qty:1};o.post(`${r}/v2/api/${e}/cart`,{data:s}).then(a=>{c.fire(a.data.message),this.getCart()}).catch(a=>{console.log(a)})}}});export{P as c};
