"use strict";(self.webpackChunkeliftech_test=self.webpackChunkeliftech_test||[]).push([[345],{345:function(e,r,t){t.r(r),t.d(r,{default:function(){return g}});var n=t(439),a=t(791),s="OrderForm_Button__uWy3i",i="OrderForm_OrderList__Tuyve",l="OrderForm_OrderCard__VXc3a",d="OrderForm_FormWrapper__gmNpB",c="OrderForm_OrderPic__i8fwB",u="OrderForm_FlexWrapper__2pnRg",o="OrderForm_TextWrapper__WTvDJ",m="OrderForm_RemoveButton__QQ-ix",h="OrderForm_SubmitButton__F7CPa",x="OrderForm_Amount__dBDUa",p="OrderForm_Total__p1v8B",j=t(174),_=t(184),b=function(e){var r=e.handleSubmitOrder,t=e.cart,b=e.setCart,g=e.handleAmountChange,f=(0,a.useState)(""),v=(0,n.Z)(f,2),F=v[0],C=v[1],O=(0,a.useState)(""),y=(0,n.Z)(O,2),N=y[0],A=y[1],S=(0,a.useState)(""),B=(0,n.Z)(S,2),k=B[0],Z=B[1],P=(0,a.useState)(""),T=(0,n.Z)(P,2),W=T[0],q=T[1],w=t.reduce((function(e,r){return e+r.amount*r.price}),0),z=function(e){"name"===e.target.name&&C(e.target.value),"email"===e.target.name&&A(e.target.value),"number"===e.target.name&&Z(e.target.value),"address"===e.target.name&&q(e.target.value)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j.Ix,{}),t.length>0&&(0,_.jsx)("form",{onSubmit:function(e){e.preventDefault(),r({name:F,email:N,phone:k,address:W,order:t,total:w}),C(""),A(""),Z(""),q(""),b([])},children:(0,_.jsxs)("div",{style:{padding:"0 35px",margin:"0 auto"},children:[(0,_.jsxs)("div",{className:d,children:[(0,_.jsxs)("ul",{children:[(0,_.jsxs)("li",{children:[(0,_.jsxs)("label",{htmlFor:"",children:["Name:",(0,_.jsx)("br",{}),(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spacecs For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:F,onChange:z})]}),(0,_.jsx)("br",{}),(0,_.jsx)("br",{})]}),(0,_.jsxs)("li",{children:[(0,_.jsxs)("label",{htmlFor:"",children:["Email:",(0,_.jsx)("br",{}),(0,_.jsx)("input",{type:"text",name:"email",title:"Email",required:!0,value:N,onChange:z})]}),(0,_.jsx)("br",{}),(0,_.jsx)("br",{})]}),(0,_.jsxs)("li",{children:[(0,_.jsxs)("label",{htmlFor:"",children:["Phone:",(0,_.jsx)("br",{}),(0,_.jsx)("input",{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:k,onChange:z})]}),(0,_.jsx)("br",{}),(0,_.jsx)("br",{})]}),(0,_.jsxs)("li",{children:[(0,_.jsxs)("label",{htmlFor:"",children:["Address:",(0,_.jsx)("br",{}),(0,_.jsx)("input",{type:"text",name:"address",title:"Address",required:!0,value:W,onChange:z})]}),(0,_.jsx)("br",{}),(0,_.jsx)("br",{})]})]}),(0,_.jsx)("ul",{className:i,children:t.map((function(e){return(0,_.jsxs)("li",{className:l,children:[(0,_.jsx)("img",{className:c,src:e.photo,alt:""}),(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)("p",{children:e.title}),(0,_.jsxs)("p",{children:["Price: ",e.price]}),(0,_.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"10px"},children:[(0,_.jsx)("button",{className:s,type:"button",onClick:function(){return g(e._id,1)},children:"+"}),(0,_.jsx)("p",{className:x,children:e.amount}),(0,_.jsx)("button",{className:s,type:"button",onClick:function(){return g(e._id,-1)},children:"-"})]}),(0,_.jsx)("button",{className:m,onClick:function(){return r=e._id,void b((function(e){return e.filter((function(e){return e._id!==r}))}));var r},children:"Remove"})]})]},e._id)}))})]}),(0,_.jsxs)("div",{className:u,children:[(0,_.jsxs)("p",{className:p,children:["Total price: ",w]}),(0,_.jsx)("button",{className:h,type:"submit",children:"Submit order"})]})]})}),0===t.length&&(0,_.jsx)("p",{children:"You cart is empty! Go shopping first"})]})},g=function(e){var r=e.cart,t=e.setCart,n=e.handleAmountChange,a=e.handleSubmitOrder;return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(b,{cart:r,handleAmountChange:n,setCart:t,handleSubmitOrder:a})})}}}]);
//# sourceMappingURL=345.9f0751a3.chunk.js.map