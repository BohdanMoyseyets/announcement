(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{10:function(e,t,n){e.exports={content:"Items_content__kVvff",items:"Items_items__2lC3K",add_item:"Items_add_item__3csN1",add_item_button:"Items_add_item_button__1HJLA",add_item_title:"Items_add_item_title__1BRxZ",add_item_desc:"Items_add_item_desc__g5F4r"}},17:function(e,t,n){e.exports={item:"Item_item__3HbDp",description:"Item_description__3rTMZ",date:"Item_date__2Utd0",edit:"Item_edit__2ozbC",delete:"Item_delete__30ZQD"}},18:function(e,t,n){e.exports={item:"ItemDetails_item__BaXwe",description:"ItemDetails_description__2H3Vc",date:"ItemDetails_date__2CME9",edit:"ItemDetails_edit__3jphK",delete:"ItemDetails_delete__KHIes"}},19:function(e,t,n){e.exports={item:"ItemEdit_item__1ZY_I",title:"ItemEdit_title__2GlCR",description:"ItemEdit_description__2SJ-P"}},26:function(e,t,n){e.exports={app:"App_app__3ICZJ"}},30:function(e,t,n){e.exports={item:"ItemSimilar_item__1ptQ8",description:"ItemSimilar_description__1QY5h",date:"ItemSimilar_date__IN4xs",edit:"ItemSimilar_edit__2HaLe",delete:"ItemSimilar_delete__3nFpJ"}},36:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),c=n.n(i),s=n(15),d=n.n(s),l=(n(36),n(26)),r=n.n(l),o=n(16),m=n(11),u=n(4),x="ADD_ITEM",j="ADD_ITEM_CHANGE_TITLE",h="ADD_ITEM_CHANGE_DESC",b="EDIT_ITEM",I="EDIT_ITEM_DESC",D="EDIT_ITEM_TITLE",_="DELETE_ITEM",T="SHOW_DETAILS",O="SEARCH_ITEM",f="SHOW_SIMILAR",p={announcementData:[{id:1,text:"A111aaa11aa1a1a1a1 fsh ks sfh skhf skfhks ",title:"First",date:"Dec 27, 2020 11:43 PM",showDetails:!1,showSimilar:!1},{id:2,text:"B2b2b2bb2b2b2b2b22 dgsdgs",title:"Second",date:"Dec 27, 2020 11:43 PM",showDetails:!1,showSimilar:!1},{id:3,text:"C3 wfsfsfw",title:"Third",date:"Dec 27, 2020 11:43 PM",showDetails:!1,showSimilar:!1},{id:4,text:"D4 f sdgsdg s s",title:"Fourth",date:"Dec 27, 2020 11:43 PM",showDetails:!1,showSimilar:!1}],editTitleText:"",editDescText:"",newTitleText:"aaaa",newDescText:"bla",searchItemTitle:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n=e.announcementData.length>0?e.announcementData[e.announcementData.length-1].id+1:1,a={id:n,text:e.newDescText,title:e.newTitleText,date:t.addDate,showDetails:!1};return Object(u.a)(Object(u.a)({},e),{},{announcementData:[].concat(Object(m.a)(e.announcementData),[a]),newTitleText:"",newDescText:""});case j:return Object(u.a)(Object(u.a)({},e),{},{newTitleText:t.newTitleText});case h:return Object(u.a)(Object(u.a)({},e),{},{newDescText:t.newDescText});case _:Object(m.a)(e.announcementData.splice(t.itemID,1));return Object(u.a)(Object(u.a)({},e),{},{announcementData:Object(m.a)(e.announcementData)});case T:return e.announcementData[t.itemIndex].showDetails=!e.announcementData[t.itemIndex].showDetails,Object(u.a)(Object(u.a)({},e),{},{announcementData:Object(m.a)(e.announcementData)});case b:return e.announcementData[t.itemIndex].title=t.itemTitle,e.announcementData[t.itemIndex].text=t.itemDesc,Object(u.a)(Object(u.a)({},e),{},{announcementData:Object(m.a)(e.announcementData)});case I:return Object(u.a)(Object(u.a)({},e),{},{editDescText:t.editDescText});case D:return Object(u.a)(Object(u.a)({},e),{},{editTitleText:t.editTitleText});case O:return Object(u.a)(Object(u.a)({},e),{},{searchItemTitle:t.searchTitle});case f:return e.announcementData[t.itemIndex].showSimilar=!e.announcementData[t.itemIndex].showSimilar,Object(u.a)(Object(u.a)({},e),{},{announcementData:Object(m.a)(e.announcementData)});default:return e}},g=n(29),v=n.n(g),C=n(9),S=n(3),E=n(17),N=n.n(E),M=n(18),k=n.n(M),y=function(e){return Object(a.jsxs)("div",{className:k.a.item,children:[Object(a.jsx)("div",{className:k.a.description,children:e.text}),Object(a.jsx)("div",{className:k.a.date,children:e.date})]})},A=n(19),H=n.n(A),L=function(e){var t=c.a.createRef(),n=c.a.createRef();return Object(a.jsxs)("div",{className:H.a.item,children:[Object(a.jsx)("h3",{children:"Edit Announcement"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Title"}),Object(a.jsx)("input",{onChange:function(){var n=t.current.value;e.editItemChangeTitle(n)},className:H.a.title,ref:t,defaultValue:e.data.title})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Description"}),Object(a.jsx)("textarea",{onChange:function(){var t=n.current.value;e.editItemChangeDesc(t)},className:H.a.description,ref:n,defaultValue:e.data.text})]}),Object(a.jsx)("button",{onClick:function(){e.editItem(e.index,t.current.value,n.current.value)},children:Object(a.jsx)(C.b,{to:"",children:"Ok"})}),Object(a.jsx)("button",{children:Object(a.jsx)(C.b,{to:"",children:" Cancel"})})]})},R=n(30),F=n.n(R),J=function(e){return Object(a.jsx)("div",{className:F.a.item,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:e.data.title}),Object(a.jsx)("div",{children:e.data.text})]})})},P=function(e){var t=e.data.showDetails?Object(a.jsx)(y,{text:e.data.text,date:e.data.date}):null,n=e.itemsData.map((function(t){return t.title==e.data.title||t.text==e.data.text?Object(a.jsx)(J,{data:t}):null}));return console.log(n),Object(a.jsxs)("div",{className:N.a.item,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:e.data.title}),t,Object(a.jsx)("button",{onClick:function(){e.showDetailsItem(e.index)},children:e.data.showDetails?"Hide Details":"Show Details"})]}),Object(a.jsx)(C.b,{to:"/edit"+e.data.id,children:Object(a.jsx)("button",{className:N.a.edit,children:"Edit"})}),Object(a.jsx)(S.a,{path:"/edit"+e.data.id,render:function(){return Object(a.jsx)(L,{data:e.data,index:e.index,editItem:e.editItem,editItemChangeDesc:e.editItemChangeDesc,editItemChangeTitle:e.editItemChangeTitle,editTitleText:e.editTitleText,editDescText:e.editDescText})}}),Object(a.jsx)("button",{onClick:function(){e.deleteItem(e.index)},className:N.a.delete,children:"Delete"}),Object(a.jsx)("button",{onClick:function(){e.showSimilarItem(e.index)},children:e.data.showSimilar?"Hide Similar":"Show similar"}),e.data.showSimilar?n:null]})},B=n(10),Z=n.n(B),V=function(e){var t=e.itemsData.map((function(t,n){return Object(a.jsx)(P,{showSimilarItem:e.showSimilarItem,showDetailsItem:e.showDetailsItem,deleteItem:e.deleteItem,editItem:e.editItem,editItemChangeTitle:e.editItemChangeTitle,editItemChangeDesc:e.editItemChangeDesc,editTitleText:e.editTitleText,editDescText:e.editDescText,itemsData:e.itemsData,data:t,index:n})})),n=c.a.createRef(),i=c.a.createRef(),s=c.a.createRef(),d=e.itemsData.map((function(t,n){return t.title.includes(e.searchItemTitle)?Object(a.jsx)(P,{showSimilarItem:e.showSimilarItem,showDetailsItem:e.showDetailsItem,deleteItem:e.deleteItem,editItem:e.editItem,editItemChangeTitle:e.editItemChangeTitle,editItemChangeDesc:e.editItemChangeDesc,editTitleText:e.editTitleText,editDescText:e.editDescText,itemsData:e.itemsData,data:t,index:n}):null}));console.log(d);return Object(a.jsxs)("div",{className:Z.a.items,children:[Object(a.jsxs)("div",{className:Z.a.add_item,children:[Object(a.jsxs)("div",{className:Z.a.add_item_title,children:[Object(a.jsx)("label",{children:"Title"}),Object(a.jsx)("input",{onChange:function(){var t=n.current.value;e.addItemChangeTitle(t)},type:"text",ref:n,value:e.newTitleText})]}),Object(a.jsxs)("div",{className:Z.a.add_item_desc,children:[Object(a.jsx)("label",{children:"Description"}),Object(a.jsx)("textarea",{onChange:function(){var t=i.current.value;e.addItemChangeDesc(t)},ref:i,value:e.newDescText})]}),Object(a.jsx)("button",{className:Z.a.add_item_button,onClick:function(){var t=v()().format("lll");e.addItem(t)},children:"add new announcement"})]}),Object(a.jsx)("h1",{children:"Announcements"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Search Announcement"}),Object(a.jsx)("input",{onChange:function(){var t=s.current.value;e.searchItem(t)},ref:s,value:e.searchItemTitle})]}),Object(a.jsx)("div",{className:Z.a.content,children:""==e.searchItemTitle?t:d})]})},G=Object(o.b)((function(e){return{itemsData:e.announcement.announcementData,newTitleText:e.announcement.newTitleText,newDescText:e.announcement.newDescText,editTitleText:e.announcement.editTitleText,editDescText:e.announcement.editDescText,searchItemTitle:e.announcement.searchItemTitle}}),(function(e){return{addItem:function(t){e(function(e){return{type:x,addDate:e}}(t))},addItemChangeTitle:function(t){e(function(e){return{type:j,newTitleText:e}}(t))},addItemChangeDesc:function(t){e(function(e){return{type:h,newDescText:e}}(t))},deleteItem:function(t){e(function(e){return{type:_,itemID:e}}(t))},showDetailsItem:function(t){e(function(e){return{type:T,itemIndex:e}}(t))},editItemChangeTitle:function(t){e(function(e){return{type:D,editTitleText:e}}(t))},editItemChangeDesc:function(t){e(function(e){return{type:I,editDescText:e}}(t))},editItem:function(t,n,a){e(function(e,t,n){return{type:b,itemIndex:e,itemTitle:t,itemDesc:n}}(t,n,a))},searchItem:function(t){e(function(e){return{type:O,searchTitle:e}}(t))},showSimilarItem:function(t){e(function(e){return{type:f,itemIndex:e}}(t))}}}))(V);var K=function(e){return Object(a.jsxs)("div",{className:r.a.app,children:[Object(a.jsx)(G,{store:e.store}),Object(a.jsx)("div",{})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))},W=n(14),Y=Object(W.b)({announcement:w});void 0==typeof localStorage["redux-store"]&&(localStorage["redux-store"]="{}");var z=Object(W.c)(Y,JSON.parse(localStorage["redux-store"]));z.subscribe((function(){localStorage["redux-store"]=JSON.stringify(z.getState())})),console.log(localStorage),console.log(localStorage);var U=z;d.a.render(Object(a.jsx)(C.a,{children:Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(o.a,{store:U,children:Object(a.jsx)(K,{})})})}),document.getElementById("root")),Q()}},[[47,1,2]]]);
//# sourceMappingURL=main.49175738.chunk.js.map