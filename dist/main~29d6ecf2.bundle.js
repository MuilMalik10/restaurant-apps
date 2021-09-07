!function(e){function t(t){for(var n,o,u=t[0],s=t[1],c=t[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(d&&d(t);p.length;)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={2:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=s;i.push([10,1,0]),r()}({10:function(e,t,r){"use strict";r.r(t);r(4),r(5),r(1),r(9);var n={init:function(e){var t=this,r=e.button,n=e.drawer;r.addEventListener("click",(function(e){t._toggleDrawer(e,n)})),window.addEventListener("hashchange",(function(e){t._closeDrawer(e,n)}))},_toggleDrawer:function(e,t){e.stopPropagation(),t.classList.toggle("toggle")},_closeDrawer:function(e,t){e.stopPropagation(),t.classList.remove("toggle")}},a={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),t=this._urlSplitter(e);return this._urlCombiner(t)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var t=e.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}},i={KEY:12345,BASE_URL:"https://restaurant-api.dicoding.dev",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images",CACHE_NAME:"restaurant-cache",DATABASE_NAME:"food-planet-database",DATABASE_VERSION:"1",OBJECT_STORE_NAME:"restaurants"},o={LIST:"".concat(i.BASE_URL,"/list"),DETAIL:function(e){return"".concat(i.BASE_URL,"/detail/").concat(e)}};function u(e,t,r,n,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){u(i,n,a,o,s,"next",e)}function s(e){u(i,n,a,o,s,"throw",e)}o(void 0)}))}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n,a,i;return t=e,r=null,n=[{key:"listRestaurants",value:(i=s(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.LIST);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.restaurants);case 7:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)})},{key:"detailRestaurant",value:(a=s(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.DETAIL(t));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n.restaurant);case 7:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})}],r&&c(t.prototype,r),n&&c(t,n),e}(),l=function(e){var t=e.id,r=e.pictureId,n=e.rating,a=e.name,o=e.city,u=e.description;return'\n  <article class="restaurant" tabindex="0">\n  <div class="restaurant-image lazyload" data-bg="'.concat(i.BASE_IMAGE_URL,"/small/").concat(r,'">\n    <div class="rating">\n      <h3>⭐').concat(n,'</h3>\n    </div>\n  </div>\n  <h3><a href="#/detail/').concat(t,'" class="restaurant-name">').concat(a," - ").concat(o,'</a></h3>\n  <p class="restaurant-description">').concat(u,"</p>\n  </article>\n")},p=function(e){var t=e.name;return'<p class="item">'.concat(t,"</p>")},f=function(e){var t=e.name;return'<span class="categories"><p>'.concat(t,"</p></span>")},m=function(e){var t=e.name,r=e.review,n=e.date;return'\n  <div class="review">  \n    <h3>'.concat(t,'</h3>\n    <p class="date">').concat(n,"</p>\n    <p>").concat(r,"</p>\n  </div>\n")};function h(e,t,r,n,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,a)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){h(i,n,a,o,u,"next",e)}function u(e){h(i,n,a,o,u,"throw",e)}o(void 0)}))}}var g={render:function(){return v(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <h2 class="header">Eatery List</h2>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return v(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.listRestaurants();case 2:t=e.sent,r=document.querySelector(".restaurants"),t.forEach((function(e){r.innerHTML+=l(e)}));case 5:case"end":return e.stop()}}),e)})))()}},b=r(3);function x(e,t,r,n,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,a)}function w(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){x(i,n,a,o,u,"next",e)}function u(e){x(i,n,a,o,u,"throw",e)}o(void 0)}))}}var y=i.DATABASE_NAME,k=i.DATABASE_VERSION,R=i.OBJECT_STORE_NAME,_=Object(b.a)(y,k,{upgrade:function(e){e.createObjectStore(R,{keyPath:"id"})}}),E={getAllRestaurants:function(){return w(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_;case 2:return e.abrupt("return",e.sent.getAll(R));case 3:case"end":return e.stop()}}),e)})))()},getRestaurant:function(e){return w(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,_;case 4:return t.abrupt("return",t.sent.get(R,e));case 5:case"end":return t.stop()}}),t)})))()},putRestaurant:function(e){return w(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.hasOwnProperty("id")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,_;case 4:return t.abrupt("return",t.sent.put(R,e));case 5:case"end":return t.stop()}}),t)})))()},deleteRestaurant:function(e){return w(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_;case 2:return t.abrupt("return",t.sent.delete(R,e));case 3:case"end":return t.stop()}}),t)})))()}};function A(e,t,r,n,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,a)}function S(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){A(i,n,a,o,u,"next",e)}function u(e){A(i,n,a,o,u,"throw",e)}o(void 0)}))}}function P(e,t,r,n,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,a)}function L(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){P(i,n,a,o,u,"next",e)}function u(e){P(i,n,a,o,u,"throw",e)}o(void 0)}))}}var B={Init:function(e){var t=this;return L(regeneratorRuntime.mark((function r(){var n,a,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.likeButtonContainer,a=e.favoriteRestaurants,i=e.restaurant,t._likeButtonContainer=n,t._restaurant=i,t._favoriteRestaurants=a,r.next=6,t._renderButton();case 6:case"end":return r.stop()}}),r)})))()},_renderButton:function(){var e=this;return L(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e._restaurant.id,t.next=3,e._isRestaurantExist(r);case 3:if(!t.sent){t.next=7;break}e._renderLiked(),t.next=8;break;case 7:e._renderLike();case 8:case"end":return t.stop()}}),t)})))()},_isRestaurantExist:function(e){var t=this;return L(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._favoriteRestaurants.getRestaurant(e);case 2:return n=r.sent,r.abrupt("return",!!n);case 4:case"end":return r.stop()}}),r)})))()},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this restaurant" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",L(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._favoriteRestaurants.putRestaurant(e._restaurant);case 2:e._renderButton();case 3:case"end":return t.stop()}}),t)}))))},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this restaurant" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",L(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._favoriteRestaurants.deleteRestaurant(e._restaurant.id);case 2:e._renderButton();case 3:case"end":return t.stop()}}),t)}))))}};function j(e,t,r,n,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,a)}function C(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){j(i,n,a,o,u,"next",e)}function u(e){j(i,n,a,o,u,"throw",e)}o(void 0)}))}}var O={"/":g,"/home":g,"/favorite":{render:function(){return S(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <h2 class="header">Favorite</h2>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return S(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAllRestaurants();case 2:t=e.sent,r=document.querySelector(".restaurants"),t.forEach((function(e){r.innerHTML+=l(e)}));case 5:case"end":return e.stop()}}),e)})))()}},"/detail/:id":{render:function(){return C(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n      <div id="detail" class="restaurant-detail"></div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return C(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.parseActiveUrlWithoutCombiner(),e.next=3,d.detailRestaurant(t.id);case 3:r=e.sent,document.querySelector("#detail").innerHTML=(o=void 0,u=void 0,s=void 0,c=void 0,l=void 0,h=void 0,v=void 0,g=void 0,b=void 0,o=(n=r).pictureId,u=n.rating,s=n.name,c=n.address,l=n.categories,h=n.city,v=n.description,g=n.menus,b=n.customerReviews,'\n  <div class="restaurant-image" style="background-image: url(\''.concat(i.BASE_IMAGE_URL,"/small/").concat(o,'\')">\n    <div class="rating">\n      <h3>⭐').concat(u,'</h3>\n    </div>\n  </div>\n  <div class="restaurant-info" tabindex="0">\n    <h2>').concat(s,'</h2>\n    <p class="address"><span class="material-icons">location_city</span>').concat(c,", ").concat(h,"</p>\n    ").concat(l.map(f).join(" "),"\n    <p>").concat(v,'</p>\n  </div>\n  <div class="menu" tabindex="0">\n    <h2 class="menu-header">Menu</h2>\n    <div class="menu-foods">\n      <h3>Foods</h3>\n      ').concat(g.foods.map(p).join(" "),'\n    </div>\n    <div class="menu-drinks">\n      <h3>Drinks</h3>\n      ').concat(g.drinks.map(p).join(" "),'\n    </div>\n  </div>\n  <div class="customer-review" tabindex="0">\n    <h2>Customer Review</h2>\n    ').concat(b.map(m).join(" "),'\n  </div>\n  <div id="likeButtonContainer"></div>\n')),B.Init({likeButtonContainer:document.querySelector("#likeButtonContainer"),favoriteRestaurants:E,restaurant:{id:r.id,pictureId:r.pictureId,rating:r.rating,name:r.name,city:r.city,description:r.description}});case 7:case"end":return e.stop()}var n,o,u,s,c,l,h,v,g,b}),e)})))()}}};function T(e,t,r,n,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,a)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var z=function(){function e(t){var r=t.button,n=t.drawer,a=t.content;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._button=r,this._drawer=n,this._content=a,this._initialAppShell()}var t,r,i,o,u;return t=e,(r=[{key:"_initialAppShell",value:function(){n.init({button:this._button,drawer:this._drawer})}},{key:"renderPage",value:(o=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.parseActiveUrlWithCombiner(),r=O[t],e.next=4,r.render();case 4:return this._content.innerHTML=e.sent,e.next=7,r.afterRender();case 7:case"end":return e.stop()}}),e,this)})),u=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=o.apply(e,t);function i(e){T(a,r,n,i,u,"next",e)}function u(e){T(a,r,n,i,u,"throw",e)}i(void 0)}))},function(){return u.apply(this,arguments)})}])&&M(t.prototype,r),i&&M(t,i),e}(),I=r(2),D=r.n(I);function U(e,t,r,n,a,i,o){try{var u=e[i](o),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,a)}var q=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,D.a.register();case 3:return e.abrupt("return");case 4:console.log("service worker is not supported in this browser");case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){U(i,n,a,o,u,"next",e)}function u(e){U(i,n,a,o,u,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),N=new z({button:document.querySelector("#burger-menu"),drawer:document.querySelector("#menu"),content:document.querySelector("#maincontent")});window.addEventListener("hashchange",(function(){N.renderPage()})),window.addEventListener("load",(function(){N.renderPage(),q()}))},5:function(e,t,r){var n=r(6),a=r(7);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};n(a,i);e.exports=a.locals||{}},7:function(e,t,r){(t=r(8)(!1)).push([e.i,'*{box-sizing:border-box;margin:0;padding:0}body{font-family:"Poppins",sans-serif;background-color:#eaeaea}.skip-link{position:absolute;top:-40px;left:0;background-color:#bf1722;color:#fff;padding:8px;z-index:100}.skip-link:focus{top:0}img{width:100%}.nav-bar{display:flex;background-color:#52489c;justify-content:space-evenly;align-items:center;padding:14px 0;font-size:1.2em}.nav-bar .brand{user-select:none;color:#ebebeb;font-family:"Bebas Neue",cursive;font-size:1.2em;letter-spacing:1px;font-weight:900;z-index:2}.nav-bar .menu{display:none;position:absolute;list-style:none;top:0;height:100vh;width:100%;justify-content:space-evenly;flex-direction:column;align-items:center;background-color:#52489c;z-index:1}.nav-bar .menu li a{font-weight:700;color:#ebebeb;text-decoration:none;padding:44px}.nav-bar .menu li a:hover{background-color:#5b50ad}@media screen and (min-width: 680px){.nav-bar .menu{display:flex;position:relative;width:inherit;height:inherit;flex-direction:row;background-color:inherit;z-index:inherit}.nav-bar .menu li a{display:inline-block;padding:20px}}.nav-bar .burger-menu{display:flex;flex-direction:column;min-height:44px;min-width:44px;justify-content:space-around;background-color:inherit;border:0;cursor:pointer;z-index:2}.nav-bar .burger-menu span{display:block;width:100%;height:3px;background-color:#ebebeb;border-radius:3px}@media screen and (min-width: 680px){.nav-bar .burger-menu{display:none}}.nav-bar .menu.toggle{display:flex}.hero{display:flex;justify-content:center;position:relative;width:100%;height:280px;margin-bottom:26px;object-fit:cover;overflow:hidden}.hero picture,.hero img{width:100%}.hero-description{height:100%;display:flex;position:absolute;flex-direction:column;justify-content:center;align-items:center}.hero-description h2,.hero-description p{display:block;color:#ebebeb;background-color:#000;padding:5px;margin-bottom:3px;box-shadow:1px 1px 2px rgba(0,0,0,.5)}@media screen and (min-width: 500px){.hero{height:380px}}@media screen and (min-width: 1280px){.hero{height:400px}}.restaurants{margin-top:50px;text-align:center;gap:10px;margin-left:8px;margin-right:8px;display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));margin-bottom:50px}.restaurants .header{font-weight:700;text-decoration:underline;text-align:center;grid-column:1/-1}.restaurants .restaurant{background-color:#fff;padding:35px 10px;box-shadow:0 0 5px rgba(0,0,0,.2);border-radius:3px}.restaurants .restaurant h3{margin:20px 0 15px}.restaurants .restaurant h3 .restaurant-name{font-size:1.1em;padding:8px;max-width:90%;margin:0 auto;text-decoration:none;color:#52489c}.restaurants .restaurant-image{height:250px;background-position:center;background-size:cover;box-shadow:0 0 5px rgba(0,0,0,.5);border-radius:5px;margin-bottom:23px}.restaurants .restaurant-image .rating{display:grid;justify-content:right}.restaurants .restaurant-image .rating h3{min-width:70px;text-align:center;padding:7px;border-radius:4px;border-top-left-radius:unset;border-bottom-right-radius:unset;display:inline-block;background-color:#4062bb;color:#ebebeb}.restaurants .restaurant-description{display:-webkit-box;text-align:left;font-size:.9em;line-height:1.5em;overflow:hidden;-webkit-line-clamp:4;-webkit-box-orient:vertical}@media screen and (min-width: 760px){.restaurants .restaurant-description{padding-left:7px;padding-right:7px}}.restaurants .restaurant-detail{display:grid;grid-template-columns:1fr;gap:20px}.restaurants .restaurant-detail .restaurant-image{height:300px}.restaurants .restaurant-detail .restaurant-info{text-align:left}.restaurants .restaurant-detail .restaurant-info .categories{display:inline-block;padding:7px;background-color:#4062bb;color:#ebebeb;border-radius:7px}.restaurants .restaurant-detail .restaurant-info .address{line-height:2.2em;font-weight:600}.restaurants .restaurant-detail .menu-foods h3,.restaurants .restaurant-detail .menu-drinks h3{text-align:left;margin-top:30px;margin-bottom:5px;border-bottom:1px dashed #000;padding-left:4px;padding-bottom:4px}.restaurants .restaurant-detail .menu-foods .item,.restaurants .restaurant-detail .menu-drinks .item{width:100%;border-bottom:1px dashed #000;line-height:2.4em;text-align:center}.restaurants .restaurant-detail .customer-review h2{margin-top:10px;margin-bottom:8px}.restaurants .restaurant-detail .customer-review .review{text-align:left;border:5px solid #52489c;margin-bottom:15px;padding:15px;border-radius:10px}.restaurants .restaurant-detail .customer-review .review .date{font-size:.7em}@media screen and (min-width: 650px){.restaurants .restaurant-detail{grid-template-columns:1fr 1fr}.restaurants .restaurant-detail .menu,.restaurants .restaurant-detail .customer-review{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:20px}.restaurants .restaurant-detail .menu h2,.restaurants .restaurant-detail .customer-review h2{margin-top:30px;grid-column:1/-1}.restaurants .restaurant-detail .menu .menu-foods h3,.restaurants .restaurant-detail .menu .menu-drinks h3,.restaurants .restaurant-detail .customer-review .menu-foods h3,.restaurants .restaurant-detail .customer-review .menu-drinks h3{margin:0}}.restaurants #likeButtonContainer .like{font-size:18px;position:fixed;bottom:16px;right:16px;background-color:#4062bb;color:#fff;border:0;border-radius:50%;width:55px;height:55px;cursor:pointer;display:flex;align-items:center;justify-content:center}@media screen and (min-width: 1280px){.restaurants{grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));margin-left:138px;margin-right:138px;gap:13px}}.footer{background-color:#52489c;padding:40px;color:#ebebeb;text-align:center;font-size:.6em}',""]),e.exports=t}});