(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17d255fe"],{"0e7a":function(t,s,e){},1148:function(t,s,e){"use strict";var a=e("a691"),n=e("1d80");t.exports="".repeat||function(t){var s=String(n(this)),e="",i=a(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(s+=s))1&i&&(e+=s);return e}},"14f3":function(t,s,e){"use strict";e("0e7a")},1592:function(t,s,e){"use strict";e("88f8")},"1ccd":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAMAAAD/A0kuAAAAe1BMVEUAAACZmZmampqZmZmampqZmZmampqampqbm5uenp6ampqampqampqcnJyampqZmZmampqZmZmZmZmampqbm5uampqbm5ubm5uampqampqurq7b29uampqampqampqZmZmampqampqZmZmfn5+ZmZmampqampqqqqqZmZmKvX5MAAAAKHRSTlMA9Lv8+R6F7EIU5decJyK4raiLfWReU002MQcE3crIpJBwbBoKzFEM1bcTtgAAAQFJREFUOMvNlNmSgjAQRROCRJZBXEdcR2c7//+FFlXRoKVNP3qemq5TTWgumCzF2WltVFg6vM7uJgN7o2UMdqu2C/hQyxNYqeUZZGp5Cc31cZ/j7PE7yC3swiJf44O9cbgfeTJwDKNLWBuRT/ChnMJClnNwoZzD1+CLO8SbJLJ8giqUNXhZruDcC18uynsYX+tDVwts+9MqOElyDcXt4gyVJK9g0t/MryTPYRZ3PpD/Bpbq/JfQavO/dqSbu/w7JMq7/Mv4/iFbJNImujH/SmL+ZWL+BxHyL31ku1wr/ztpG9mDvUDAmgf+CmnyWzJKbDLS9hPCn0bTt3FDYl8/WX/mC+pzPnfPOji8AAAAAElFTkSuQmCC"},"2f2f":function(t,s,e){},"39ab":function(t,s,e){},"3fa2":function(t,s,e){},"408a":function(t,s,e){var a=e("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},6569:function(t,s,e){"use strict";e("9b74")},"6ab7":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detail"},[e("DetailNavBar",{ref:"detailNav",on:{navClick:t.navClick}}),e("Scroll",{ref:"scroll",staticClass:"content",attrs:{probeType:3},on:{scrollPositio:t.scrollPositio}},[e("DatailSwiper",{attrs:{banners:t.banners}}),e("DetailBaseInfo",{attrs:{goodsBaseInfo:t.goodsBaseInfo}}),e("DetailShopInfo",{attrs:{shopInfo:t.shopInfo}}),e("DetailShowImgs",{attrs:{goodsShowImgs:t.goodsShowImgs}}),e("DetailGoodsParams",{ref:"goodsParams",attrs:{goodsParams:t.goodsParams}}),e("DetailGoodsRate",{ref:"goodsRate",attrs:{rate:t.rate}}),e("DetailRecommend",{ref:"goodsRecommend",attrs:{recommend:t.recommends}})],1),e("BackTop",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],staticClass:"back_top",nativeOn:{click:function(s){return t.backtop(s)}}}),e("DetailBottomUntil",{on:{addCart:t.addCart}}),e("Toast")],1)},n=[],i=e("b3df"),o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("NavBar",[a("div",{staticClass:"detail_back iconfont",attrs:{slot:"nav_left"},on:{click:t.detailBack},slot:"nav_left"},[t._v("")]),a("div",{staticClass:"detail_nav",attrs:{slot:"nav_center"},slot:"nav_center"},t._l(t.nav_list,(function(s,e){return a("div",{key:e,staticClass:"detail_nav_item",class:{active:t.currentIndex===e},on:{click:function(s){return t.detailNavClick(e)}}},[t._v(" "+t._s(s)+" ")])})),0),a("div",{staticClass:"cart_img",attrs:{slot:"nav_right"},on:{click:t.cart},slot:"nav_right"},[a("img",{attrs:{src:e("1ccd"),alt:""}})])])},r=[],c=e("d110"),l={components:{NavBar:c["a"]},data:function(){return{nav_list:["商品","参数","评论","推荐"],currentIndex:0}},methods:{detailNavClick:function(t){this.currentIndex=t,this.$emit("navClick",t)},detailBack:function(){this.$router.go(-1)},cart:function(){this.$router.push({name:"购物车"})}}},u=l,d=(e("d049"),e("2877")),f=Object(d["a"])(u,o,r,!1,null,"3add1192",null),m=f.exports,_=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Swiper",{staticClass:"detail_swiper"},t._l(t.banners,(function(t,s){return e("SwiperItem",{key:s},[e("a",{attrs:{href:""}},[e("img",{attrs:{src:"http:"+t,alt:""}})])])})),1)},p=[],v=e("9cf9"),h=e("129f"),g={components:{Swiper:v["a"],SwiperItem:h["a"]},props:{banners:{type:Array,default:function(){return[]}}}},C=g,b=(e("71c1"),Object(d["a"])(C,_,p,!1,null,"80e39534",null)),I=b.exports,w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.goodsBaseInfo).length?e("div",{staticClass:"detail_baseinfo"},[e("div",{staticClass:"title"},[e("h4",[t._v(t._s(t.goodsBaseInfo.title))])]),e("div",{staticClass:"price_info"},[e("p",[e("span",{staticClass:"price"},[t._v(t._s(t.goodsBaseInfo.price))]),e("del",{staticClass:"oldPrice"},[t._v(t._s(t.goodsBaseInfo.oldPrice))]),e("span",{staticClass:"discount",style:{backgroundColor:t.goodsBaseInfo.discountBgColor}},[t._v(t._s(t.goodsBaseInfo.discountDesc))])])]),e("div",{staticClass:"columns"},t._l(t.goodsBaseInfo.columns,(function(s,a){return e("span",{key:a,staticClass:"columns_item"},[t._v(" "+t._s(s)+" ")])})),0),e("div",{staticClass:"services"},t._l(t.goodsBaseInfo.services,(function(s,a){return e("span",{key:a,staticClass:"services_item"},[e("img",{attrs:{src:s.icon}}),e("i",[t._v(t._s(s.name))])])})),0)]):t._e()},k=[],y={props:{goodsBaseInfo:{type:Object,default:function(){return{}}}}},S=y,B=(e("7a51"),Object(d["a"])(S,w,k,!1,null,"6ea58e92",null)),A=B.exports,O=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.shopInfo).length?e("div",{staticClass:"detail_shopinfo"},[e("div",{staticClass:"shop_name"},[e("img",{attrs:{src:t.shopInfo.shopLogo,alt:""}}),e("span",[t._v(t._s(t.shopInfo.name))])]),e("div",{staticClass:"shop_info"},[e("div",{staticClass:"shop_sells"},[e("i",[t._v(t._s(t._f("sells")(t.shopInfo.cSells)))]),e("span",[t._v("总销量")])]),e("div",{staticClass:"shop_goods"},[e("i",[t._v(t._s(t.shopInfo.cGoods))]),e("span",[t._v("全部宝贝")])]),e("div",{staticClass:"score"},t._l(t.shopInfo.score,(function(s,a){return e("p",{key:a,staticClass:"score_item"},[e("span",{staticClass:"score_name"},[t._v(t._s(s.name))]),e("span",{staticClass:"score_point",style:s.isBetter?"color:red":"color:green"},[t._v(t._s(s.score))]),e("span",{staticClass:"score_h",style:s.isBetter?"background-color:red":"background-color:green"},[t._v(t._s(s.isBetter?"高":"低"))])])})),0)]),t._m(0)]):t._e()},x=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"enter"},[e("div",{staticClass:"enter_shop"},[t._v("进店逛逛")])])}],D=(e("b680"),{props:{shopInfo:{type:Object,default:function(){return{}}}},filters:{sells:function(t){var s=t;return t>=1e4&&(s=(t/1e4).toFixed(1)+"万"),s}}}),q=D,E=(e("6569"),Object(d["a"])(q,O,x,!1,null,"670940f8",null)),P=E.exports,T=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.goodsShowImgs).length?e("div",{staticClass:"goods_show_imgs"},[e("div",{staticClass:"desc_info"},[e("div",{staticClass:"start"}),e("div",{staticClass:"desc"},[t._v(" "+t._s(t.goodsShowImgs.desc)+" ")]),e("div",{staticClass:"end"})]),t._l(t.goodsShowImgs.detailImage,(function(s,a){return e("div",{key:a},[e("h4",{staticClass:"show_title"},[t._v(t._s(s.key))]),t._l(s.list,(function(t,s){return e("div",{key:s,staticClass:"goods_imgs"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http:"+t,expression:"'http:'+items"}],attrs:{alt:""}})])}))],2)}))],2):t._e()},$=[],Z={props:{goodsShowImgs:{type:Object,default:function(){return{}}}},methods:{}},j=Z,N=(e("d56c"),Object(d["a"])(j,T,$,!1,null,"0fb2f0de",null)),R=N.exports,L=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.goodsParams).length?e("div",{staticClass:"rule_info"},[e("div",{staticClass:"goods_params_info"},[e("div",{staticClass:"goods_title"},[t._v(" "+t._s(t.goodsParams.info.key)+" ")]),t._l(t.goodsParams.info.set,(function(s,a){return e("div",{key:a,staticClass:"goods_params"},[e("div",{staticClass:"goods_params_item"},[e("span",[t._v(t._s(s.key))]),e("span",[t._v(t._s(s.value))])])])}))],2),e("div",{staticClass:"rule_title"},[t._v(" "+t._s(t.goodsParams.rule.key)+" ")]),t._l(t.goodsParams.rule.tables,(function(s,a){return e("div",{key:a,staticClass:"rule_params"},t._l(s,(function(s,a){return e("div",{key:a,staticClass:"rule_params_item"},t._l(s,(function(s,a){return e("span",{key:a,staticClass:"rule_params_info"},[t._v(" "+t._s(s)+" ")])})),0)})),0)}))],2):t._e()},F=[],J={props:{goodsParams:{type:Object,default:function(){return{}}}}},M=J,U=(e("14f3"),Object(d["a"])(M,L,F,!1,null,"1fb22fbd",null)),G=U.exports,K=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.rate).length?e("div",{staticClass:"rate_info"},[e("div",{staticClass:"rate_title"},[e("span",[t._v("用户评论")]),e("i",[t._v("("+t._s(t.rate.cRate)+")")]),e("span",{staticClass:"rate_more"},[t._v("更多")]),e("i",{staticClass:"iconfont rate_more_icon"},[t._v("")])]),e("div",{staticClass:"rate_user"},[e("div",{staticClass:"user_info"},[e("img",{attrs:{src:t.rate.list[0].user.avatar,alt:""}}),e("strong",{staticClass:"uname"},[t._v(t._s(t.rate.list[0].user.uname))])]),e("div",{staticClass:"rate_content"},[t._v(" "+t._s(t.rate.list[0].content)+" ")]),e("div",{staticClass:"rate_params"},[e("span",{staticClass:"time"},[t._v(t._s(t._f("showDate")(t.rate.list[0].created)))]),e("span",{staticClass:"goods_params"},[t._v(t._s(t.rate.list[0].style))])])])]):e("div",{staticClass:"rate_info"},[t._m(0),e("div",{staticClass:"rate_content"},[t._v(" 暂无评论 ")]),t._m(1)])},z=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rate_title"},[e("span",[t._v("用户评论")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"handel"},[e("span",{staticClass:"askAll"},[t._v("问大家")]),e("span",{staticClass:"tips"},[t._v("宝贝好不好，问问已买过的人")])])}],W=e("c88e"),X={props:{rate:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var s=new Date(1e3*t);return Object(W["b"])(s,"yyyy-MM-dd")}}},Q=X,V=(e("7be6"),Object(d["a"])(Q,K,z,!1,null,"2ac2b314",null)),Y=V.exports,H=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"recommend"},[e("div",{staticClass:"recommend_title"},[t._v(" 热门推荐 ")]),e("GoodsListShow",{attrs:{goods:t.recommend}})],1)},tt=[],st=e("0d9a"),et={components:{GoodsListShow:st["a"]},props:{recommend:{type:Array,default:function(){return[]}}}},at=et,nt=(e("7303"),Object(d["a"])(at,H,tt,!1,null,"5fc081a5",null)),it=nt.exports,ot=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detail_bottom"},[t._m(0),t._m(1),t._m(2),e("div",{staticClass:"btn_add_cart btn_buy",on:{click:t.addCart}},[e("span",[t._v("加入购物车")])]),t._m(3)])},rt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"btn_shop user_btn"},[e("span",{staticClass:"iconfont"},[t._v("")]),e("span",{staticClass:"txt"},[t._v("店铺")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"btn_service user_btn"},[e("span",{staticClass:"iconfont"},[t._v("")]),e("span",{staticClass:"txt"},[t._v("客服")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"btn_like user_btn"},[e("span",{staticClass:"iconfont"},[t._v("")]),e("span",{staticClass:"txt"},[t._v("收藏")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"buy btn_buy"},[e("span",[t._v("立即购买")])])}],ct={methods:{addCart:function(){this.$emit("addCart")}}},lt=ct,ut=(e("1592"),Object(d["a"])(lt,ot,rt,!1,null,"beb61cc8",null)),dt=ut.exports,ft=e("c537"),mt=e("d16e");function _t(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}var pt=e("1bab");function vt(t){return Object(pt["a"])({url:"/detail",params:{iid:t}})}function ht(){return Object(pt["a"])({url:"/recommend"})}var gt=function t(s){_t(this,t),this.title=s.itemInfo.title,this.price=s.itemInfo.price,this.lowNowPrice=s.itemInfo.lowNowPrice,this.oldPrice=s.itemInfo.oldPrice,this.discountDesc=s.itemInfo.discountDesc,this.discountBgColor=s.itemInfo.discountBgColor,this.columns=s.columns,this.services=s.shopInfo.services},Ct=e("787b"),bt={name:"Detail",components:{Scroll:i["a"],DetailNavBar:m,DatailSwiper:I,DetailBaseInfo:A,DetailShopInfo:P,DetailShowImgs:R,DetailGoodsParams:G,DetailGoodsRate:Y,DetailRecommend:it,DetailBottomUntil:dt,BackTop:mt["a"],Toast:ft["a"]},mixins:[Ct["a"]],data:function(){return{iid:null,banners:[],goodsBaseInfo:{},shopInfo:{},goodsShowImgs:{},goodsParams:{},rate:{},recommends:[],itemImgLoad:null,moduleOffSetTop:[],navLinkageIndex:0,isShowBackTop:!1}},mounted:function(){console.log(this.$toast)},created:function(){var t=this;console.log(Ct["a"]),this.iid=this.$route.params.iid,vt(this.iid).then((function(s){console.log(s),t.banners=s.result.itemInfo.topImages,t.goodsBaseInfo=new gt(s.result),t.shopInfo=s.result.shopInfo,t.goodsShowImgs=s.result.detailInfo,t.goodsParams=s.result.itemParams,0!==s.result.rate.cRate&&(t.rate=s.result.rate)})),ht().then((function(s){console.log(s),t.recommends=s.data.list}))},destroyed:function(){this.$bus.$off("imgLoad",this.itemImgLoad)},methods:{navClick:function(t){this.$refs.scroll.scrollTop(0,-this.moduleOffSetTop[t],100)},scrollPositio:function(t){this.isShowBackTop=Math.abs(t.y)>=610,this.navLinkage(t.y)},navLinkage:function(t){for(var s=0;s<this.moduleOffSetTop.length;s++)(this.navLinkageIndex!==s&&s<this.moduleOffSetTop.length-1&&this.moduleOffSetTop[s]<=-t&&this.moduleOffSetTop[s+1]>=-t||this.navLinkageIndex!==s&&s===this.moduleOffSetTop.length-1&&-t>=this.moduleOffSetTop[s])&&(this.navLinkageIndex=s,this.$refs.detailNav.currentIndex=s)},backtop:function(){this.$refs.scroll.scrollTop(0,0,300)},addCart:function(){var t=this,s={};s.imges=this.goodsShowImgs.detailImage[0].list[0],s.title=this.goodsBaseInfo.title,s.price=this.goodsBaseInfo.lowNowPrice,s.iid=this.iid,console.log(s),this.$store.dispatch("addCart",s).then((function(s){t.$toast.showToast(s,1500)}))}}},It=bt,wt=(e("79f4"),Object(d["a"])(It,a,n,!1,null,"78ea6468",null));s["default"]=wt.exports},"6d00":function(t,s,e){},"71c1":function(t,s,e){"use strict";e("39ab")},7303:function(t,s,e){"use strict";e("3fa2")},7790:function(t,s,e){},"79f4":function(t,s,e){"use strict";e("6d00")},"7a51":function(t,s,e){"use strict";e("2f2f")},"7be6":function(t,s,e){"use strict";e("7790")},"88f8":function(t,s,e){},"9b74":function(t,s,e){},b680:function(t,s,e){"use strict";var a=e("23e7"),n=e("a691"),i=e("408a"),o=e("1148"),r=e("d039"),c=1..toFixed,l=Math.floor,u=function(t,s,e){return 0===s?e:s%2===1?u(t,s-1,e*t):u(t*t,s/2,e)},d=function(t){var s=0,e=t;while(e>=4096)s+=12,e/=4096;while(e>=2)s+=1,e/=2;return s},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));a({target:"Number",proto:!0,forced:f},{toFixed:function(t){var s,e,a,r,c=i(this),f=n(t),m=[0,0,0,0,0,0],_="",p="0",v=function(t,s){var e=-1,a=s;while(++e<6)a+=t*m[e],m[e]=a%1e7,a=l(a/1e7)},h=function(t){var s=6,e=0;while(--s>=0)e+=m[s],m[s]=l(e/t),e=e%t*1e7},g=function(){var t=6,s="";while(--t>=0)if(""!==s||0===t||0!==m[t]){var e=String(m[t]);s=""===s?e:s+o.call("0",7-e.length)+e}return s};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(_="-",c=-c),c>1e-21)if(s=d(c*u(2,69,1))-69,e=s<0?c*u(2,-s,1):c/u(2,s,1),e*=4503599627370496,s=52-s,s>0){v(0,e),a=f;while(a>=7)v(1e7,0),a-=7;v(u(10,a,1),0),a=s-1;while(a>=23)h(1<<23),a-=23;h(1<<a),v(1,1),h(2),p=g()}else v(0,e),v(1<<-s,0),p=g()+o.call("0",f);return f>0?(r=p.length,p=_+(r<=f?"0."+o.call("0",f-r)+p:p.slice(0,r-f)+"."+p.slice(r-f))):p=_+p,p}})},d049:function(t,s,e){"use strict";e("de39")},d56c:function(t,s,e){"use strict";e("dcd4")},dcd4:function(t,s,e){},de39:function(t,s,e){}}]);
//# sourceMappingURL=chunk-17d255fe.01190d01.js.map