!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=45)}([function(t,e,n){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),e.weexPlus=e.default=void 0,o="function"==typeof getUni?getUni:function(){var t=function(t){return"function"==typeof t},e=/^\$|^on|^create|Sync$|Manager$|^pause/,n=["os","getCurrentSubNVue","getSubNVueById","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],o=function(t){return!(e.test(t)&&"createBLEConnection"!==t||~n.indexOf(t))},a=function(e){return function(){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(a.success)||t(a.fail)||t(a.complete)?e.apply(void 0,[a].concat(o)):new Promise(function(t,n){e.apply(void 0,[Object.assign({},a,{success:t,fail:n})].concat(o)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},r=[],s=void 0;function u(t){r.forEach(function(e){return e({origin:s,data:t})})}var c=i.webview.currentWebview().id,l=new BroadcastChannel("UNI-APP-SUBNVUE");function d(t){t.$processed=!0;var e=i.webview.currentWebview().id===t.id,n="uniNView"===t.__uniapp_origin_type&&t.__uniapp_origin_id,o=t.id;if(t.postMessage=function(t){n?l.postMessage({data:t,to:e?n:o}):b({type:"UniAppSubNVue",data:t})},t.onMessage=function(t){r.push(t)},t.__uniapp_mask_id){s=t.__uniapp_host;var a=t.__uniapp_mask,u=i.webview.getWebviewById(t.__uniapp_mask_id);u=u.parent()||u;var c=t.show,d=t.hide,f=t.close,p=function(){u.setStyle({mask:"none"})};t.show=function(){u.setStyle({mask:a});for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return c.apply(t,n)},t.hide=function(){p();for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return d.apply(t,n)},t.close=function(){p();for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return f.apply(t,n)}}}function f(t){var e=i.webview.getWebviewById(t);return e&&!e.$processed&&d(e),e}l.onmessage=function(t){t.data.to===c&&u(t.data.data)};var p=weex.requireModule("plus"),g=weex.requireModule("globalEvent"),h=0,v={},_="__uniapp__service";g.addEventListener("plusMessage",function(t){"UniAppJsApi"===t.data.type?y(t.data.id,t.data.data):"UniAppSubNVue"===t.data.type?u(t.data.data,t.data.options):"onNavigationBarButtonTap"===t.data.type?"function"==typeof w&&w(t.data.data):"onNavigationBarSearchInputChanged"===t.data.type?"function"==typeof T&&T(t.data.data):"onNavigationBarSearchInputConfirmed"===t.data.type?"function"==typeof x&&x(t.data.data):"onNavigationBarSearchInputClicked"===t.data.type&&"function"==typeof k&&k(t.data.data)});var y=function(t,e){var n=v[t];n?(n(e),n.keepAlive||delete v[t]):console.error("callback["+t+"] is undefined")},m=function(e){var n,o,i=e.id,a=e.type,r=e.params;v[i]=(o=function(e){t(n)?n(e):n&&(~e.errMsg.indexOf(":ok")?t(n.success)&&n.success(e):~e.errMsg.indexOf(":fail")&&t(n.fail)&&n.fail(e),t(n.complete)&&n.complete(e))},(t(n=r)||n&&t(n.callback))&&(o.keepAlive=!0),o),p.postMessage({id:i,type:a,params:r},_)};function b(t){p.postMessage(t,_)}var S=function(t){return function(e){m({id:h++,type:t,params:e})}},w=void 0,T=void 0,x=void 0,k=void 0;function D(t){w=t}function I(t){T=t}function C(t){x=t}function j(t){k=t}function P(t){return weex.requireModule(t)}var R=weex.requireModule("dom"),L=weex.requireModule("globalEvent"),q=[];function N(t){"function"==typeof t&&(this.isUniAppReady?t():q.push(t))}L.addEventListener("plusMessage",function(t){"UniAppReady"===t.data.type&&(N.isUniAppReady=!0,q.length&&(q.forEach(function(t){return t()}),q=[]))});var O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$=weex.requireModule("stream"),M="GET",B=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded";return"object"===(void 0===t?"undefined":O(t))?"POST"===e.toUpperCase()&&"application/json"===n.toLowerCase()?JSON.stringify(t):Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"):t},V=weex.requireModule("plusstorage"),A="__TYPE",E=weex.requireModule("clipboard"),U=function(){if("function"==typeof getUniEmitter)return getUniEmitter;var t={$on:function(){console.warn("uni.$on failed")},$off:function(){console.warn("uni.$off failed")},$once:function(){console.warn("uni.$once failed")},$emit:function(){console.warn("uni.$emit failed")}};return function(){return t}}();function z(t,e,n){return t[e].apply(t,n)}var F=Object.freeze({loadFontFace:function(e){var n=e.family,o=e.source,i=(e.desc,e.success),a=(e.fail,e.complete);R.addRule("fontFace",{fontFamily:n,src:o.replace(/"/g,"'")});var r={errMsg:"loadFontFace:ok",status:"loaded"};t(i)&&i(r),t(a)&&a(r)},ready:N,request:function(e){var n=e.url,o=e.data,i=e.header,a=e.method,r=void 0===a?"GET":a,s=e.dataType,u=void 0===s?"json":s,c=(e.responseType,e.success),l=e.fail,d=e.complete,f=!1,p=!1,g={};if(i)for(var h in i)p||"content-type"!==h.toLowerCase()?g[h]=i[h]:(p=!0,g["Content-Type"]=i[h]);return r===M&&o&&(n=n+(~n.indexOf("?")?"&"===n.substr(-1)||"?"===n.substr(-1)?"":"&":"?")+B(o)),$.fetch({url:n,method:r,headers:g,type:"json"===u?"json":"text",body:r!==M?B(o,r,g["Content-Type"]):""},function(e){var n=e.status,o=(e.ok,e.statusText,e.data),i=e.headers,a={};!n||-1===n||f?(a.errMsg="request:fail",t(l)&&l(a)):(a.data=o,a.statusCode=n,a.header=i,t(c)&&c(a)),t(d)&&d(a)}),{abort:function(){f=!0}}},getStorage:function(e){var n=e.key,o=(e.data,e.success),i=e.fail,a=e.complete;V.getItem(n+A,function(e){if("success"===e.result){var r=e.data;V.getItem(n,function(e){if("success"===e.result){var n=e.data;r&&n?("String"!==r&&(n=JSON.parse(n)),t(o)&&o({errMsg:"getStorage:ok",data:n})):(e.errMsg="setStorage:fail",t(i)&&i(e))}else e.errMsg="setStorage:fail",t(i)&&i(e);t(a)&&a(e)})}else e.errMsg="setStorage:fail",t(i)&&i(e),t(a)&&a(e)})},setStorage:function(e){var n=e.key,o=e.data,i=e.success,a=e.fail,r=e.complete,s="String";"object"===(void 0===o?"undefined":O(o))&&(s="Object",o=JSON.stringify(o)),V.setItem(n,o,function(e){"success"===e.result?V.setItem(n+A,s,function(e){"success"===e.result?t(i)&&i({errMsg:"setStorage:ok"}):(e.errMsg="setStorage:fail",t(a)&&a(e))}):(e.errMsg="setStorage:fail",t(a)&&a(e)),t(r)&&r(e)})},removeStorage:function(e){var n=e.key,o=(e.data,e.success),i=e.fail,a=e.complete;V.removeItem(n,function(e){"success"===e.result?t(o)&&o({errMsg:"removeStorage:ok"}):(e.errMsg="removeStorage:fail",t(i)&&i(e)),t(a)&&a(e)}),V.removeItem(n+A)},clearStorage:function(t){t.key,t.data,t.success,t.fail,t.complete},getClipboardData:function(e){var n=e.success,o=(e.fail,e.complete);E.getString(function(e){var i={errMsg:"getClipboardData:ok",data:e.data};t(n)&&n(i),t(o)&&o(i)})},setClipboardData:function(e){var n=e.data,o=e.success,i=(e.fail,e.complete),a={errMsg:"setClipboardData:ok"};E.setString(n),t(o)&&o(a),t(i)&&i(a)},onSubNVueMessage:u,getSubNVueById:f,getCurrentSubNVue:function(){return f(i.webview.currentWebview().id)},$on:function(){return z(U(),"$on",[].concat(Array.prototype.slice.call(arguments)))},$off:function(){return z(U(),"$off",[].concat(Array.prototype.slice.call(arguments)))},$once:function(){return z(U(),"$once",[].concat(Array.prototype.slice.call(arguments)))},$emit:function(){return z(U(),"$emit",[].concat(Array.prototype.slice.call(arguments)))}}),H={os:{nvue:!0}},J={};return"undefined"!=typeof Proxy?J=new Proxy({},{get:function(t,e){if("os"===e)return{nvue:!0};if("postMessage"===e)return b;if("requireNativePlugin"===e)return P;if("onNavigationBarButtonTap"===e)return D;if("onNavigationBarSearchInputChanged"===e)return I;if("onNavigationBarSearchInputConfirmed"===e)return C;if("onNavigationBarSearchInputClicked"===e)return j;var n=F[e];return n||(n=S(e)),o(e)?a(n):n}}):(Object.keys(H).forEach(function(t){J[t]=H[t]}),J.postMessage=b,J.requireNativePlugin=P,J.onNavigationBarButtonTap=D,J.onNavigationBarSearchInputChanged=I,J.onNavigationBarSearchInputConfirmed=C,J.onNavigationBarSearchInputClicked=j,Object.keys({uploadFile:!0,downloadFile:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,saveFile:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,showToast:!0,showLoading:!0,hideToast:!0,hideLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,navigateTo:!0,redirectTo:!0,reLaunch:!0,switchTab:!0,navigateBack:!0,getProvider:!0,login:!0,getUserInfo:!0,share:!0,requestPayment:!0,subscribePush:!0,unsubscribePush:!0,onPush:!0,offPush:!0}).forEach(function(t){var e=F[t];e||(e=S(t)),o(t)?J[t]=a(e):J[t]=e})),J};var i=new WeexPlus(weex);e.weexPlus=i;var a=o(weex,i,BroadcastChannel);e.default=a},function(t,e){t.exports={"@FONT-FACE":[{fontFamily:"iconfont",src:"url('https://at.alicdn.com/t/font_1447575_fav8jsxiuzd.eot?#iefix') format('embedded-opentype'),\r\n  url('https://at.alicdn.com/t/font_1447575_fav8jsxiuzd.woff2') format('woff2'),\r\n  url('https://at.alicdn.com/t/font_1447575_fav8jsxiuzd.woff') format('woff'),\r\n  url('https://at.alicdn.com/t/font_1447575_fav8jsxiuzd.ttf') format('truetype'),\r\n  url('https://at.alicdn.com/t/font_1447575_fav8jsxiuzd.svg#iconfont') format('svg')"}],iconfont:{fontFamily:'"iconfont"',fontSize:"16",fontStyle:"normal",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"icon-iconset0142":{"content:before":'"\\e629"'},"icon-daohang1":{"content:before":'"\\e651"'},"icon-xiangmushenbao":{"content:before":'"\\e6a6"'},"icon-project":{"content:before":'"\\e620"'},"icon-fenxiang-m":{"content:before":'"\\e60e"'},"icon-zhuti":{"content:before":'"\\e616"'},"icon-close":{"content:before":'"\\e60b"'},"icon-shoucang":{"content:before":'"\\e659"'},"icon-xiangmutixi":{"content:before":'"\\e605"'},"icon-gongzhonghao":{"content:before":'"\\e735"'},"icon-wangzhan":{"content:before":'"\\e6f5"'},"icon-close1":{"content:before":'"\\e61c"'},"icon-tuichu":{"content:before":'"\\e630"'},"icon-pengyouquan":{"content:before":'"\\e878"'},"icon-shouye":{"content:before":'"\\e87b"'},"icon-sousuo":{"content:before":'"\\e87c"'},"icon-wode":{"content:before":'"\\e87d"'},"icon-yanchu":{"content:before":'"\\e87f"'},"icon-iconzhengli_xiangmu":{"content:before":'"\\e64c"'},"icon-sousuo1":{"content:before":'"\\e658"'},"icon-shoucang1":{"content:before":'"\\e640"'},"icon-Forward":{"content:before":'"\\e63d"'},"icon-screen":{"content:before":'"\\e63e"'},"icon-collection":{"content:before":'"\\e63f"'},bgimg:{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},text_overflow:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}},function(t,e,n){"use strict";function o(t,e,n,o,i,a,r,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return o})},function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__D010B51"}},function(t,e,n){"use strict";(function(t,e){function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var c=n(5).version,l="__DC_STAT_UUID",d="__DC_UUID_VALUE";function f(){var n="";if("n"===h()){try{n=t.runtime.getDCloudId()}catch(t){n=""}return n}try{n=e.getStorageSync(l)}catch(t){n=d}if(!n){n=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(l,n)}catch(t){e.setStorageSync(l,d)}}return n}var p,g=function(){return parseInt((new Date).getTime()/1e3)},h=function(){return"n"},v=function(){var t="";return"wx"!==h()&&"qq"!==h()||e.canIUse("getAccountInfoSync")&&(t=e.getAccountInfoSync().miniProgram.appId||""),t},_=function(){return"n"===h()?t.runtime.version:""},y=function(){var e="";return"n"===h()&&(e=t.runtime.channel),e},m=0,b=0,S=function(){return m=g(),"n"===h()&&e.setStorageSync("__page__residence__time",g()),m},w=0,T=0,x=function(){var t=(new Date).getTime();return w=t,T=0,t},k=function(){var t=(new Date).getTime();return T=t,t},D=function(t){var e=0;return 0!==w&&(e=T-w),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},I=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===h()?n.$mp&&n.$mp.page.is+i:n.$scope&&n.$scope.route+i||n.$mp&&n.$mp.page.route+i},C=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},j=n(6).default,P=n(3).default||n(3),R=e.getSystemInfoSync(),L=function(){function n(){r(this,n),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:f(),ut:h(),mpn:v(),ak:P.appid,usv:c,v:_(),ch:y(),cn:"",pn:"",ct:"",t:g(),tt:"",p:"android"===R.platform?"a":"i",brand:R.brand||"",md:R.model,sv:R.system.replace(/(Android|iOS)\s/,""),mpsdk:R.SDKVersion||"",mpv:R.version||"",lang:R.language,pr:R.pixelRatio,ww:R.windowWidth,wh:R.windowHeight,sw:R.screenWidth,sh:R.screenHeight}}return u(n,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(k(),D("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,k();var n=D();x();var o=I(this);this._sendHideRequest({urlref:o,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=I(this),o=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===h()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=j&&j.pages[o]&&j.pages[o].titleNView&&j.pages[o].titleNView.titleText||j&&j.pages[o]&&j.pages[o].navigationBarTitleText||"",this.__licationShow)return x(),this.__licationShow=!1,void(this._lastPageRoute=n);if(k(),this._lastPageRoute=n,D("page").overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}x()}},{key:"_pageHide",value:function(){if(!this.__licationHide){k();var t=D("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var n,o,i=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+i||"",this.statData.t=g(),this.statData.sc=function(t){var n=h(),o="";return t||("wx"===n&&(o=e.getLaunchOptionsSync().scene),o)}(t.scene),this.statData.fvts=(n=e.getStorageSync("First__Visit__Time"),o=0,n?o=n:(o=g(),e.setStorageSync("First__Visit__Time",o),e.removeStorageSync("Last__Visit__Time")),o),this.statData.lvts=function(){var t=e.getStorageSync("Last__Visit__Time"),n=0;return n=t||"",e.setStorageSync("Last__Visit__Time",g()),n}(),this.statData.tvc=function(){var t=e.getStorageSync("Total__Visit__Count"),n=1;return t&&(n=t,n++),e.setStorageSync("Total__Visit__Count",n),n}(),"n"===h()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,o=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,o=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,o=t.value,i=void 0===o?"":o,a=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:n,e_v:"object"==typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:g(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;t.runtime.getProperty(t.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;P.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,n){var o=this,i=g(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var r=this._reportingRequestData;if("n"===h()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[t.lt]||(r[t.lt]=[]),r[t.lt].push(t),"n"===h()&&e.setStorageSync("__UNI__STAT__DATA",r),b=g(),"n"===h()&&(m=e.getStorageSync("__page__residence__time")),!(b-m<10)||n){var s=this._reportingRequestData;"n"===h()&&(s=e.getStorageSync("__UNI__STAT__DATA")),S();var u=[],l=[],d=[],f=function(t){s[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?u.push(n):3===t?d.push(n):l.push(n)})};for(var p in s)f(p);u.push.apply(u,l.concat(d));var v={usv:c,t:i,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===h()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==h()||"a"!==this.statData.p?this._sendRequest(v):setTimeout(function(){o._sendRequest(v)},200):this.imageRequest(v)}}},{key:"_sendRequest",value:function(t){var n=this;e.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},o="";for(var i in e)n[e[i]]=t[e[i]],o+=e[i]+"="+t[e[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,o;(o=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof o&&"object"!=typeof o?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof o&&o.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof o?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),n}(),q=function(t){function n(){var t;return r(this,n),(t=o(this,i(n).call(this))).instance=null,"function"==typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(n,L),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var n=this;t?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,S(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,C(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,C(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(n)}}]),n}().getInstance(),N=!1,O={onLaunch:function(t){q.report(t,this)},onReady:function(){q.ready(this)},onLoad:function(t){if(q.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return q.interceptShare(!1),e.call(this,t)}}},onShow:function(){N=!1,q.show(this)},onHide:function(){N=!0,q.hide(this)},onUnload:function(){N?N=!1:q.hide(this)},onError:function(t){q.error(t)}};((p=n(7)).default||p).mixin(O),e.report=function(t,e){q.sendEvent(t,e)}}).call(this,n(0).weexPlus,n(0).default)},function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24220191115004",_inBundle:!1,_integrity:"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz",_shasum:"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bcf65737c5111d47398695d3db8ed87305df346e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24220191115004"}},function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}},function(t,e){t.exports=Vue},function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(9).default,Vue.prototype.__$appStyle__)},function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=i.a},,function(t,e,n){"use strict";var o=n(33),i=n(19),a=n(2);var r=Object(a.a)(i.default,o.a,o.b,!1,null,null,"09b95a8e");(function(){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(40).default,this.options.style):Object.assign(this.options.style,n(40).default)}).call(r),e.default=r.exports},,,,,,,,function(t,e,n){"use strict";var o=n(20),i=n.n(o);e.default=i.a},function(t,e,n){"use strict";(function(t){var o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{scrollIntoView:"tabId0",tabIndex:0,tabsList:[],contentList:[],refreshing:!1,refreshTxt:"下拉刷新",loadingText:"上拉加载更多",pageSize:0,isLoading:!1}},methods:{changeTabs:function(t){this.isLoading=!1,this.pageSize=0,this.tabIndex=t,this.scrollIntoView="tabId"+t,this.getMainData(0,this.tabsList[t].id)},swiperChange:function(t){this.isLoading=!1,this.pageSize=0,this.tabIndex=t.detail.current,this.scrollIntoView="tabId"+t.detail.current,this.getMainData(0,this.tabsList[t.detail.current].id)},onrefresh:function(t){this.pageSize=0,this.isLoading=!1,this.refreshing=!0,this.refreshTxt="正在刷新...",this.getMainData(0,this.tabsList[t].id)},onpullingdown:function(t){Math.abs(t.pullingDistance)>=Math.abs(t.viewHeight)?this.refreshTxt="释放刷新":this.refreshTxt="下拉刷新"},loadMore:function(t){this.isLoading||(this.isLoading=!0,this.loadingText="加载中...",this.pageSize++,this.getMainData(this.pageSize,this.tabsList[t].id))},getTabData:function(){t.showLoading({});var e=this;t.request({url:"https://www.wanandroid.com/project/tree/json",data:{},header:{"content-Type":"application/json"},success:function(n){var o=n.data;t.hideLoading(),e.tabsList=o.data,e.getMainData(0,e.tabsList[0].id)}})},getMainData:function(e,n){t.showLoading({});var o=this;t.request({url:"https://www.wanandroid.com/project/list/".concat(e,"/json?cid=").concat(n),data:{},header:{"content-Type":"application/json"},success:function(e){var n=e.data;t.hideLoading(),1==o.refreshing&&(o.refreshing=!1,o.refreshTxt="已刷新"),n.data.curPage>0?(n.data.curPage==n.data.pageCount?(o.loadingText="暂无更多",o.isLoading=!0):(o.loadingText="上拉加载更多",o.isLoading=!1),o.contentList=o.contentList.concat(n.data.datas)):0==n.data.curPage&&(o.contentList=n.data.datas)}})}},onLoad:function(){var e=this;this.getTabData(),t.$on("login",function(){e.getTabData()}),t.$on("logout",function(){e.getTabData()})},onUnload:function(){t.$off()},components:{listItem:((o=n(46))&&o.__esModule?o:{default:o}).default}};e.default=i}).call(this,n(0).default)},function(t,e,n){"use strict";n.r(e);var o=n(22),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=i.a},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{dataItem:{type:Object,default:function(t){return{}}}},data:function(){return{}},created:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:'url("https://at.alicdn.com/t/font_1447575_fav8jsxiuzd.ttf")'})},methods:{collect:function(e,n,o){e.stopPropagation(),this.$store.state.userName.length>0?this.dataItem.collect?(this.dataItem.collect=!1,t.request({url:"https://www.wanandroid.com/lg/uncollect_originId/".concat(n,"/json"),data:{},header:{"content-Type":"application/json"},method:"POST",success:function(t){}})):(this.dataItem.collect=!0,t.request({url:"https://www.wanandroid.com/lg/collect/".concat(n,"/json"),data:{},header:{"content-Type":"application/json"},method:"POST",success:function(e){t.showToast({title:"收藏成功",duration:2e3,position:"bottom"})},complete:function(t){}})):t.showModal({title:"提示",content:"您还未登录，去登录查看更多功能",success:function(e){e.confirm?t.navigateTo({url:"../login/login"}):e.cancel}})},toDetail:function(e){t.navigateTo({url:"../article_detail/article_detail?url="+e})}}};e.default=n}).call(this,n(0).default)},function(t,e){t.exports={main:{flexDirection:"row",height:"165",alignItems:"center",paddingTop:"10",paddingRight:"5",paddingBottom:"10",paddingLeft:"5",marginTop:"4",marginRight:0,marginBottom:"4",marginLeft:0,backgroundColor:"#ffffff",borderRadius:"4"},right:{width:"90",height:"150",marginLeft:"5",borderRadius:"4",overflow:"hidden",paddingTop:"5",paddingRight:0,paddingBottom:"5",paddingLeft:0},left:{flex:1,height:"130",flexDirection:"column",justifyContent:"space-between",paddingTop:"5",paddingRight:"5",paddingBottom:"5",paddingLeft:"5"},title:{fontSize:"14",color:"#333333",lines:2,justifyContent:"flex-start",textOverflow:"ellipsis"},des:{fontSize:"12",color:"#999999",lines:3,textOverflow:"ellipsis"},oprate:{flexDirection:"row",alignItems:"center"},time:{fontSize:"12",color:"#aaaaaa"},author:{fontSize:"12",color:"#aaaaaa",marginLeft:"15"},imgs:{flex:1},hover:{backgroundColor:"#EFEFEF"},collect_status:{fontSize:"10",marginRight:"15",color:"#aaaaaa"},iconfont:{fontFamily:"iconfont",fontSize:"16"},collec_true:{color:"#DD524D"}}},function(t,e){t.exports={pro:{flex:1},top:{borderBottomWidth:"1rpx",borderBottomColor:"#eeeeee",borderBottomStyle:"solid"},scroll_top:{width:"750rpx",flexDirection:"row",paddingTop:"10",paddingRight:"0",paddingBottom:"10",paddingLeft:"0"},tabtxt:{color:"#aaaaaa",fontSize:"14",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10"},active:{color:"#DD524D"},bot:{flex:1,backgroundColor:"#eeeeee"},swiper:{flex:1},swiper_item:{flex:1},loading_txt:{lineHeight:"60",fontSize:"14",color:"#999999",paddingTop:"10",paddingRight:0,paddingBottom:"10",paddingLeft:0},refresh:{height:"60",flexDirection:"row",alignItems:"center",justifyContent:"center"},"loading-icon":{width:"20",height:"20",marginRight:"5",color:"#999999"},"loading-more-text":{lineHeight:"30",fontSize:"14",color:"#999999",paddingTop:"10",paddingRight:0,paddingBottom:"10",paddingLeft:0,textAlign:"center"}}},,,,,,,,,function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["pro"]},[n("view",{staticClass:["top"]},[n("scroll-view",{staticClass:["scroll_top"],attrs:{showScrollbar:"false",scrollWithAnimation:"true",scrollX:"true",scrollIntoView:t.scrollIntoView}},t._l(t.tabsList,function(e,o){return n("view",{key:o,staticClass:["tabs"],attrs:{id:"tabId"+o}},[n("u-text",{staticClass:["tabtxt"],class:t.tabIndex==o?"active":"",on:{click:function(e){t.changeTabs(o)}}},[t._v(t._s(e.name))])])}),0)],1),n("view",{staticClass:["bot"]},[n("swiper",{staticClass:["swiper"],attrs:{current:t.tabIndex,indicatorDots:!1,autoplay:!1,interval:3e3,duration:1e3},on:{change:t.swiperChange}},t._l(t.tabsList,function(e,o){return n("swiper-item",{key:o,staticClass:["swiper_item"]},[n("list",{staticClass:["list"],attrs:{loadmoreoffset:"15"},on:{loadmore:function(e){t.loadMore(o)}}},[n("refresh",{staticClass:["refresh"],attrs:{display:t.refreshing?"show":"hide"},on:{refresh:function(e){t.onrefresh(o)},pullingdown:t.onpullingdown}},[t.refreshing?n("loading-indicator",{staticClass:["loading-icon"],attrs:{animating:"true"}}):t._e(),n("u-text",{staticClass:["loading_txt"]},[t._v(t._s(t.refreshTxt))])]),t._l(t.contentList,function(t,e){return n("cell",{key:e,staticClass:["cell"],appendAsTree:!0,attrs:{append:"tree"}},[n("listItem",{attrs:{dataItem:t}})],1)}),t.isLoading?n("cell",{staticClass:["loading-more"],appendAsTree:!0,attrs:{append:"tree"}},[n("u-text",{staticClass:["loading-more-text"]},[t._v(t._s(t.loadingText))])]):t._e()],2)])}),1)],1)])])},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:["main"],attrs:{hoverClass:"hover"},on:{click:function(e){t.toDetail(t.dataItem.link)}}},[n("view",{staticClass:["left"]},[n("view",[n("u-text",{staticClass:["title"]},[t._v(t._s(t.dataItem.title))])]),n("view",[n("u-text",{staticClass:["des"]},[t._v(t._s(t.dataItem.desc))])]),n("view",{staticClass:["oprate"]},[n("u-text",{class:["collect_status","iconfont",t.dataItem.collect?"collec_true":""],on:{click:function(e){t.collect(e,t.dataItem.id,t.dataindex)}}},[t._v("")]),n("u-text",{staticClass:["time"]},[t._v(t._s(t.dataItem.niceDate))]),n("u-text",{staticClass:["author"]},[t._v(t._s(t.dataItem.author))])])]),n("view",{staticClass:["right"]},[n("u-image",{staticClass:["imgs"],attrs:{src:t.dataItem.envelopePic,mode:""}})],1)])},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},,,,,function(t,e,n){"use strict";n.r(e);var o=n(23),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=i.a},function(t,e,n){"use strict";n.r(e);var o=n(24),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=i.a},,,,,function(t,e,n){"use strict";n.r(e);n(4),n(8);var o=n(11);o.default.mpType="page",o.default.route="pages/project/project",o.default.el="#root",new Vue(o.default)},function(t,e,n){"use strict";n.r(e);var o=n(34),i=n(21);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var r=n(2);var s=Object(r.a)(i.default,o.a,o.b,!1,null,null,"6de83be7");(function(){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(39).default,this.options.style):Object.assign(this.options.style,n(39).default)}).call(s),e.default=s.exports}]);