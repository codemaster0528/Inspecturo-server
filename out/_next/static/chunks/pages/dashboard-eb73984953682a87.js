(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{78445:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});var a=t(63366),i=t(87462),n=t(67294),s=t(86010),o=t(27192),d=t(15861),l=t(71657),c=t(11496),u=t(28979),m=t(76087);function h(e){return(0,u.Z)("MuiCardHeader",e)}let p=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var x=t(85893);let g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=e=>{let{classes:r}=e;return(0,o.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,r)},f=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,r)=>(0,i.Z)({[`& .${p.title}`]:r.title,[`& .${p.subheader}`]:r.subheader},r.root)})({display:"flex",alignItems:"center",padding:16}),Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),w=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,r)=>r.content})({flex:"1 1 auto"}),y=n.forwardRef(function(e,r){let t=(0,l.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:o,className:c,component:u="div",disableTypography:m=!1,subheader:h,subheaderTypographyProps:p,title:y,titleTypographyProps:b}=t,T=(0,a.Z)(t,g),C=(0,i.Z)({},t,{component:u,disableTypography:m}),S=v(C),M=y;null==M||M.type===d.Z||m||(M=(0,x.jsx)(d.Z,(0,i.Z)({variant:o?"body2":"h5",className:S.title,component:"span",display:"block"},b,{children:M})));let H=h;return null==H||H.type===d.Z||m||(H=(0,x.jsx)(d.Z,(0,i.Z)({variant:o?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},p,{children:H}))),(0,x.jsxs)(f,(0,i.Z)({className:(0,s.Z)(S.root,c),as:u,ref:r,ownerState:C},T,{children:[o&&(0,x.jsx)(Z,{className:S.avatar,ownerState:C,children:o}),(0,x.jsxs)(w,{className:S.content,ownerState:C,children:[M,H]}),n&&(0,x.jsx)(j,{className:S.action,ownerState:C,children:n})]}))});var b=y},83965:function(e,r,t){"use strict";t.d(r,{Z:function(){return Z}});var a=t(63366),i=t(87462),n=t(67294),s=t(86010),o=t(27192),d=t(71657),l=t(11496),c=t(28979);function u(e){return(0,c.Z)("MuiCardMedia",e)}(0,t(76087).Z)("MuiCardMedia",["root","media","img"]);var m=t(85893);let h=["children","className","component","image","src","style"],p=e=>{let{classes:r,isMediaComponent:t,isImageComponent:a}=e;return(0,o.Z)({root:["root",t&&"media",a&&"img"]},u,r)},x=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e,{isMediaComponent:a,isImageComponent:i}=t;return[r.root,a&&r.media,i&&r.img]}})(({ownerState:e})=>(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),g=["video","audio","picture","iframe","img"],v=["picture","img"],f=n.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:o,component:l="div",image:c,src:u,style:f}=t,Z=(0,a.Z)(t,h),j=-1!==g.indexOf(l),w=!j&&c?(0,i.Z)({backgroundImage:`url("${c}")`},f):f,y=(0,i.Z)({},t,{component:l,isMediaComponent:j,isImageComponent:-1!==v.indexOf(l)}),b=p(y);return(0,m.jsx)(x,(0,i.Z)({className:(0,s.Z)(b.root,o),as:l,role:!j&&c?"img":void 0,ref:r,style:w,ownerState:y,src:j?c||u:void 0},Z,{children:n}))});var Z=f},6538:function(e,r,t){"use strict";r.Z=void 0;var a,i=(0,((a=t(65129))&&a.__esModule?a:{default:a}).default)("M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z","Calendar");r.Z=i},45779:function(e,r,t){"use strict";r.Z=void 0;var a,i=(0,((a=t(65129))&&a.__esModule?a:{default:a}).default)("M19.83 7.5L17.56 5.23C17.63 4.81 17.74 4.42 17.88 4.08C17.96 3.9 18 3.71 18 3.5C18 2.67 17.33 2 16.5 2C14.86 2 13.41 2.79 12.5 4H7.5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10V19H12V21H17.5L19.18 15.41L22 14.47V7.5H19.83M13 9H8V7H13V9M16 11C15.45 11 15 10.55 15 10S15.45 9 16 9C16.55 9 17 9.45 17 10S16.55 11 16 11Z","PiggyBank");r.Z=i},91910:function(e,r,t){"use strict";r.Z=void 0;var a,i=(0,((a=t(65129))&&a.__esModule?a:{default:a}).default)("M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z","Star");r.Z=i},91015:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(35070)}])},35070:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return T}});var a=t(85893),i=t(67294),n=t(86886),s=t(20037),o=t(66242),d=t(83965),l=t(15861),c=t(44267),u=t(39437);let m=()=>{let[e,r]=(0,i.useState)([{stateHeatmapsId:1,regionId:1,stateHeatmapsImage:"https://picsum.photos/536/354",dateTimeAdded:"2022-09-15 17:41:08"},{stateHeatmapsId:2,regionId:2,stateHeatmapsImage:"https://picsum.photos/536/354",dateTimeAdded:"2022-09-15 17:41:08"}]);(0,i.useEffect)(()=>{2==e.length&&t()},[]);let t=async()=>{var e=new Headers;e.append("Content-Type","application/x-www-form-urlencoded");var t=new URLSearchParams;t.append("ascout_keyValue",u.M4),t.append("regionId","1"),fetch("http://161.35.118.186/mkulima/ramani",{method:"POST",headers:e,body:t,redirect:"follow"}).then(e=>e.json()).then(e=>{r(e.data)}).catch(e=>console.log("error",e))};return(0,a.jsxs)(o.Z,{sx:{height:350},children:[(0,a.jsx)(c.Z,{sx:{pt:4},children:(0,a.jsx)(l.Z,{variant:"h6",children:"HEATMAP OF TURO CARS IN YOUR STATE"})}),(0,a.jsx)(d.Z,{sx:{height:280},image:e[0].stateHeatmapsImage})]})};var h=t(79172);let p=()=>(0,a.jsx)(o.Z,{sx:{position:"relative",height:"auto"},children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(h.Z,{children:(0,a.jsx)(h.Z,{sx:{mr:2,mb:6,display:"flex",flexDirection:"column"},children:(0,a.jsx)(l.Z,{variant:"h6",children:"ROBERT MAYER"})})}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(h.Z,{sx:{mr:2,mb:1,display:"flex",flexDirection:"column"},children:(0,a.jsx)("iframe",{src:"https://www.example.com/",frameBorder:"0"})})})]})});var x=t(78445),g=t(71967),v=t(7071);t(92024);var f=t(56701);let Z=()=>{let[e,r]=(0,i.useState)(3),[t,n]=(0,i.useState)(!1),[s,d]=(0,i.useState)([{regionLogId:141,regionId:1,regionTripValueOld:6801,regionTripValueChange:-721,regionTripValueNew:6080,dateTimeAdded:"2022-10-23 17:58:42"}]);(0,i.useEffect)(()=>{1==s.length&&c()},[]);let c=async()=>{var e=new Headers;e.append("Content-Type","application/x-www-form-urlencoded");var r=new URLSearchParams;r.append("ascout_keyValue",u.M4),r.append("regionId",window.localStorage.getItem(f.Z.storageCurrentRegion)),fetch("http://161.35.118.186/mkulima/ukuaji",{method:"POST",headers:e,body:r,redirect:"follow"}).then(e=>e.json()).then(e=>{d(e.data)}).catch(e=>console.log("error",e))},m=[{flex:.2,field:"State",headerName:"State",hide:t,renderCell(e){let{row:r}=e;return(0,a.jsx)(h.Z,{sx:{display:"flex",alignItems:"center"},children:(0,a.jsx)(h.Z,{sx:{display:"flex",flexDirection:"column"},children:(0,a.jsx)(l.Z,{noWrap:!0,variant:"body2",sx:{color:"text.primary",fontWeight:600},children:r.regionId})})})}},{flex:.35,headerName:"Previous Tips",field:"PreviousTips",renderCell:e=>(0,a.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.regionTripValueOld})},{flex:.25,field:"NewTips",headerName:"New Tips",renderCell:e=>(0,a.jsx)(l.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.regionTripValueOld})},{flex:.2,field:"Growth",headerName:"Growth",renderCell(e){let r="success";return e.row.regionTripValueChange*e.row.regionTripValueOld<0&&(r="error"),(0,a.jsx)(v.Z,{size:"small",skin:"light",color:r,label:(e.row.growth,e.row.regionTripValueChange/e.row.regionTripValueOld*100+"%"),sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})}}];return(0,a.jsxs)(o.Z,{sx:{height:350},children:[(0,a.jsx)(x.Z,{title:"STATE-BY-STATE GROWTH"}),(0,a.jsx)(g._,{autoHeight:!0,rows:s,columns:m,pageSize:e,getRowId:e=>e.regionLogId,disableSelectionOnClick:!0,rowsPerPageOptions:[3,7,10,25,50],onPageSizeChange:e=>r(e)})]})};var j=t(96634),w=t(44995),y=t(24446);let b=()=>((0,i.useEffect)(()=>{var e=window.location.href;if(!e.includes("?"))return;var r=e.split("?");let t=r[r.length-1];window.localStorage.setItem(f.Z.storageCurrentRegion,t),e.includes("?")&&(window.location.href="/dashboard")}),(0,a.jsx)(s.Z,{repaint:!0,children:(0,a.jsxs)(n.ZP,{container:!0,spacing:6,children:[(0,a.jsx)(n.ZP,{item:!0,xs:12,sm:12,md:4,children:(0,a.jsx)(j.Z,{})}),(0,a.jsx)(n.ZP,{item:!0,xs:12,sm:12,md:4,children:(0,a.jsx)(w.Z,{})}),(0,a.jsx)(n.ZP,{item:!0,xs:12,sm:12,md:4,children:(0,a.jsx)(y.Z,{})}),(0,a.jsx)(n.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(m,{})}),(0,a.jsx)(n.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(Z,{})}),(0,a.jsx)(n.ZP,{item:!0,xs:12,sm:12,children:(0,a.jsx)(p,{})})]})}));var T=b},24446:function(e,r,t){"use strict";var a=t(85893),i=t(67294),n=t(79172),s=t(66242),o=t(83965),d=t(15861),l=t(44267),c=t(45779),u=t(91910),m=t(6538);t(56701);var h=t(76883),p=t(39437);let x=()=>{let[e,r]=(0,i.useState)([{driverId:2519,regionId:1,driverKey:"722440",driverName:"Andr\xe1s S.",driverLat:"33.94457886026851",driverLong:"-118.37280606827956",driverState:"CA",driverTrips:13911,driverJoinDate:"2015-01-07",driverRating:"4.80",driverListingUrl:"https://turo.com/drivers/722440",dateTimeModified:"2022-09-26 14:28:17",dateTimeAdded:"2022-09-12 12:48:34",driverInspecturoScore:96.53320967443882,driverRevenue:"4740.12"}]);(0,i.useEffect)(()=>{let a=async()=>{let a=await (0,h.l)("MostPopularOwner");if(a&&0!=Object.keys(a).length)r(a);else{if(1!=e.length)return;t()}};a()},[]);let t=async()=>{var e=new Headers;e.append("Content-Type","application/x-www-form-urlencoded");var t=new URLSearchParams;t.append("ascout_keyValue",p.M4),t.append("regionId","1"),fetch("http://161.35.118.186/mkulima/dereva/safari",{method:"POST",headers:e,body:t,redirect:"follow"}).then(e=>e.json()).then(e=>{e.data.sort(function(e,r){return r.driverTrips-e.driverTrips}),(0,h.Z)("MostPopularOwner",e.data),r(e.data)}).catch(e=>console.log("error",e))};return(0,a.jsxs)(s.Z,{sx:{height:500},children:[(0,a.jsx)(o.Z,{sx:{height:150,width:150,borderRadius:40,margin:"auto",mt:5},image:"/images/svgs/popular-owners.svg"}),(0,a.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center"},children:[(0,a.jsx)(d.Z,{variant:"h6",sx:{mb:1},children:e[0].driverName.substr(0,20)}),(0,a.jsx)(d.Z,{variant:"body2",sx:{mb:4,fontWeight:600},children:"Most Owner"}),(0,a.jsx)(d.Z,{variant:"body2",sx:{mb:1,fontWeight:600},children:e[0].driverTrips}),(0,a.jsx)(d.Z,{variant:"body2",sx:{mb:4,fontWeight:600},children:"Total Trips"}),(0,a.jsxs)(d.Z,{variant:"h6",sx:{mb:1},children:[(0,a.jsx)("p",{style:{visibility:"hidden",height:0,marginTop:0},children:e[0].driverName.substr(0,20)}),(0,a.jsxs)(n.Z,{sx:{py:1.25,mb:5,display:"flex",alignItems:"center"},children:[(0,a.jsx)(c.Z,{sx:{color:"primary.main",mr:2.5},fontSize:"small"}),(0,a.jsx)(d.Z,{variant:"body2",children:e[0].driverRevenue})]}),(0,a.jsxs)(n.Z,{sx:{py:1.25,mb:5,display:"flex",alignItems:"center"},children:[(0,a.jsx)(u.Z,{sx:{color:"primary.main",mr:2.5},fontSize:"small"}),(0,a.jsx)(d.Z,{variant:"body2",children:e[0].driverRating})]}),(0,a.jsxs)(n.Z,{sx:{py:1.25,mb:5,display:"flex",alignItems:"center"},children:[(0,a.jsx)(m.Z,{sx:{color:"primary.main",mr:2.5},fontSize:"small"}),(0,a.jsx)(d.Z,{variant:"body2",children:e[0].driverJoinDate})]})]})]})]})};r.Z=x}},function(e){e.O(0,[959,531,967,3,774,888,179],function(){return e(e.s=91015)}),_N_E=e.O()}]);