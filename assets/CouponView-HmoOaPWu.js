import{_ as a,c as e,b as t,F as c,g as u,d as i,r as _,o as s,t as o}from"./index-JFojWkfZ.js";const p={},h={class:"container"},b=t("h1",null,"優惠券頁面",-1),m={class:"text-end"},y={class:"table mt-4"},f=t("thead",null,[t("tr",null,[t("th",{width:"120"},"優惠代碼"),t("th",{width:"120"},"優惠券內容"),t("th",{width:"120"},"折扣"),t("th",{width:"120"},"結束日期"),t("th",{width:"100"},"是否啟用"),t("th",{width:"100"},"編輯")])],-1),w={class:"text-end"},k={class:"text-end"},v={key:0,class:"text-success"},g={key:1},C=t("td",null,[t("div",{class:"btn-group"},[t("button",{type:"button",class:"btn btn-outline-primary btn-sm"}," 編輯 "),t("button",{type:"button",class:"btn btn-outline-danger btn-sm"}," 刪除 ")])],-1);function P(n,l){const r=_("DeleteProductModal");return s(),e(c,null,[t("div",h,[b,t("div",m,[t("button",{class:"btn btn-primary mt-4",onClick:l[0]||(l[0]=d=>n.postCoupons())}," 新增優惠券 ")]),t("table",y,[f,t("tbody",null,[(s(!0),e(c,null,u(n.products,d=>(s(),e("tr",{key:d.id},[t("td",null,o(),1),t("td",null,o(),1),t("td",w,"$"+o(),1),t("td",k,"$"+o(),1),t("td",null,[d.is_enabled?(s(),e("span",v,"啟用")):(s(),e("span",g,"未啟用"))]),C]))),128))])])]),i(r,{"temp-product":n.tempProduct,"delete-product":n.deleteProduct,ref:"removeModal"},null,8,["temp-product","delete-product"])],64)}const B=a(p,[["render",P]]);export{B as default};