(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{387:function(t,n,e){t.exports=e.p+"img/mainlogo.fadb36e.png"},396:function(t,n,e){"use strict";e.r(n);e(2),e(1);var c={data:function(){return{isActive:!1,menus:[],change_bg:{left:"7px",transition:".3s"}}},mounted:function(){var t=this;this.$axios.get("menu",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(n){console.log(n.data),t.menus=n.data}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},l=e(78),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("header",[c("div",{staticClass:"phone_menu",class:{show_menu:t.isActive}},[c("div",{staticClass:"container"},[c("div",{staticClass:"mobi_menu"},[c("div",{staticClass:"navbar_logo"}),t._v(" "),c("div",{staticClass:"navbar_menu"},[c("div",{staticClass:"hamburger"},[c("svg",{staticClass:"ham hamRotate ham1",class:{active:t.isActive},attrs:{viewBox:"0 0 100 100",width:"50"},on:{click:function(n){t.isActive=!t.isActive}}},[c("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),t._v(" "),c("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),t._v(" "),c("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])]),t._v(" "),c("div",{staticClass:"lang_group_f"},[c("div",{staticClass:"lang_groups"},[c("NuxtLink",{staticClass:"ml-3",attrs:{to:t.switchLocalePath("uz")}},[t._v("O’zbekcha")]),t._v(" "),c("NuxtLink",{attrs:{to:t.switchLocalePath("ru")}},[t._v("Русский")]),t._v(" "),c("NuxtLink",{staticClass:"mr-3",attrs:{to:t.switchLocalePath("en")}},[t._v("English")])],1)]),t._v(" "),t._l(t.menus,(function(n,e){return c("div",{key:e,staticClass:"main_links"},[c("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath(""+n.link)}},[t._v(t._s(n.title))])],1)})),t._v(" "),c("div",{staticClass:"nav_item order_tike mt-4"},[c("NuxtLink",{attrs:{to:"/visit"}},[t._v(t._s(t.$t("visits")))])],1)],2)]),t._v(" "),c("div",{staticClass:"mobi_menu"},[c("div",{staticClass:"navbar_logo"},[c("img",{attrs:{src:e(387),alt:""}}),t._v(" "),c("div",[t._v(t._s(t.$t("title")))])]),t._v(" "),c("div",{staticClass:"navbar_menu"},[c("div",{staticClass:"hamburger"},[c("svg",{staticClass:"ham hamRotate ham1",class:{active:t.isActive},attrs:{viewBox:"0 0 100 100",width:"50"},on:{click:function(n){t.isActive=!t.isActive}}},[c("path",{staticClass:"line top",attrs:{d:"m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"}}),t._v(" "),c("path",{staticClass:"line middle",attrs:{d:"m 30,50 h 40"}}),t._v(" "),c("path",{staticClass:"line bottom",attrs:{d:"m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"}})])])])])])}),[],!1,null,null,null);n.default=component.exports}}]);