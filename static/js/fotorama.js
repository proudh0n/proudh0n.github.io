"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};fotoramaVersion="4.6.3",(function(t,e,n,o,i){function r(){}function a(t,e,n){return Math.max(isNaN(e)?-1/0:e,Math.min(isNaN(n)?1/0:n,t))}function s(t){return t.match(/ma/)&&t.match(/-?\d+(?!d)/g)[t.match(/3d/)?12:4]}function u(t){return Ne?+s(t.css("transform")):+t.css("left").replace("px","")}function l(t){var e={};return Ne?e.transform="translate3d("+t+"px,0,0)":e.left=t,e}function c(t){return{"transition-duration":t+"ms"}}function f(t,e){return isNaN(t)?e:t}function d(t,e){return f(+String(t).replace(e||"px",""))}function h(t){return/%$/.test(t)?d(t,"%"):i}function m(t,e){return f(h(t)/100*e,d(t))}function p(t){return(!isNaN(d(t))||!isNaN(d(t,"%")))&&t}function v(t,e,n,o){return(t-(o||0))*(e+(n||0))}function w(t,e,n,o){return-Math.round(t/(e+(n||0))-(o||0))}function g(t){var e=t.data();if(!e.tEnd){K(t[0],{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"}[ge.prefixed("transition")],(function(t){e.tProp&&t.propertyName.match(e.tProp)&&e.onEndFn()})),e.tEnd=!0}}function y(t,e,n,o){var i,r=t.data();r&&(r.onEndFn=function(){i||(i=!0,clearTimeout(r.tT),n())},r.tProp=e,clearTimeout(r.tT),r.tT=setTimeout((function(){r.onEndFn()}),1.5*o),g(t))}function b(t,e){if(t.length){var n=t.data();Ne?(t.css(c(0)),n.onEndFn=r,clearTimeout(n.tT)):t.stop();var o=x(e,(function(){return u(t)}));return t.css(l(o)),o}}function x(){for(var t,e=0,n=arguments.length;n>e&&"number"!=typeof(t=e?arguments[e]():arguments[e]);e++);return t}function _(t,e){return Math.round(t+(e-t)/1.5)}function C(){return C.p=C.p||("https:"===n.protocol?"https://":"http://"),C.p}function T(t){var n=e.createElement("a");return n.href=t,n}function k(t,e){if("string"!=typeof t)return t;t=T(t);var n,o;if(t.host.match(/youtube\.com/)&&t.search){if(n=t.search.split("v=")[1]){var i=n.indexOf("&");-1!==i&&(n=n.substring(0,i)),o="youtube"}}else t.host.match(/youtube\.com|youtu\.be/)?(n=t.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),o="youtube"):t.host.match(/vimeo\.com/)&&(o="vimeo",n=t.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return n&&o||!e||(n=t.href,o="custom"),!!n&&{id:n,type:o,s:t.search.replace(/^\?/,""),p:C()}}function S(t,e,n){var i,r,a=t.video;return"youtube"===a.type?(r=C()+"img.youtube.com/vi/"+a.id+"/default.jpg",i=r.replace(/\/default.jpg$/,"/hqdefault.jpg"),t.thumbsReady=!0):"vimeo"===a.type?o.ajax({url:C()+"vimeo.com/api/v2/video/"+a.id+".json",dataType:"jsonp",success:function(o){t.thumbsReady=!0,M(e,{img:o[0].thumbnail_large,thumb:o[0].thumbnail_small},t.i,n)}}):t.thumbsReady=!0,{img:i,thumb:r}}function M(t,e,n,i){for(var r=0,a=t.length;a>r;r++){var s=t[r];if(s.i===n&&s.thumbsReady){var u={videoReady:!0};u[Be]=u[Qe]=u[Xe]=!1,i.splice(r,1,o.extend({},s,u,e));break}}}function F(t){function e(t,e,i){var r=t.children("img").eq(0),a=t.attr("href"),s=t.attr("src"),u=r.attr("src"),l=e.video,c=!!i&&k(a,!0===l);c?a=!1:c=l,n(t,r,o.extend(e,{video:c,img:e.img||a||s||u,thumb:e.thumb||u||s||a}))}function n(t,e,n){var i=n.thumb&&n.img!==n.thumb,r=d(n.width||t.attr("width")),a=d(n.height||t.attr("height"));o.extend(n,{width:r,height:a,thumbratio:H(n.thumbratio||d(n.thumbwidth||e&&e.attr("width")||i||r)/d(n.thumbheight||e&&e.attr("height")||i||a))})}var i=[];return t.children().each((function(){var t=o(this),r=W(o.extend(t.data(),{id:t.attr("id")}));if(t.is("a, img"))e(t,r,!0);else{if(t.is(":empty"))return;n(t,null,o.extend(r,{html:this,_html:t.html()}))}i.push(r)})),i}function E(t){return 0===t.offsetWidth&&0===t.offsetHeight}function P(t){return!o.contains(e.documentElement,t)}function j(t,e,n,o){return j.i||(j.i=1,j.ii=[!0]),o=o||j.i,void 0===j.ii[o]&&(j.ii[o]=!0),t()?e():j.ii[o]&&setTimeout((function(){j.ii[o]&&j(t,e,n,o)}),n||100),j.i++}function N(t){n.replace(n.protocol+"//"+n.host+n.pathname.replace(/^\/?/,"/")+n.search+"#"+t)}function $(t,e,n,o){var i=t.data(),r=i.measures;if(r&&(!i.l||i.l.W!==r.width||i.l.H!==r.height||i.l.r!==r.ratio||i.l.w!==e.w||i.l.h!==e.h||i.l.m!==n||i.l.p!==o)){var s=r.width,u=r.height,l=e.w/e.h,c=r.ratio>=l,f="scaledown"===n,d="contain"===n,h="cover"===n,p=G(o);c&&(f||d)||!c&&h?(s=a(e.w,0,f?s:1/0),u=s/r.ratio):(c&&h||!c&&(f||d))&&(u=a(e.h,0,f?u:1/0),s=u*r.ratio),t.css({width:s,height:u,left:m(p.x,e.w-s),top:m(p.y,e.h-u)}),i.l={W:r.width,H:r.height,r:r.ratio,w:e.w,h:e.h,m:n,p:o}}return!0}function q(t,e){var n=t[0];n.styleSheet?n.styleSheet.cssText=e:t.html(e)}function A(t,e,n){return e!==n&&(e>=t?"left":t>=n?"right":"left right")}function z(t,e,n,o){if(!n)return!1;if(!isNaN(t))return t-(o?0:1);for(var i,r=0,a=e.length;a>r;r++){if(e[r].id===t){i=r;break}}return i}function L(t,e,n){n=n||{},t.each((function(){var t,i=o(this),a=i.data();a.clickOn||(a.clickOn=!0,o.extend(et(i,{onStart:function(e){t=e,(n.onStart||r).call(this,e)},onMove:n.onMove||r,onTouchEnd:n.onTouchEnd||r,onEnd:function(n){n.moved||e.call(this,t)}}),{noMove:!0}))}))}function O(t,e){return'<div class="'+t+'">'+(e||"")+"</div>"}function I(t){for(var e=t.length;e;){var n=Math.floor(Math.random()*e--),o=t[e];t[e]=t[n],t[n]=o}return t}function D(t){return"[object Array]"==Object.prototype.toString.call(t)&&o.map(t,(function(t){return o.extend({},t)}))}function R(t,e,n){t.scrollLeft(e||0).scrollTop(n||0)}function W(t){if(t){var e={};return o.each(t,(function(t,n){e[t.toLowerCase()]=n})),e}}function H(t){if(t){var e=+t;return isNaN(e)?(e=t.split("/"),+e[0]/+e[1]||i):e}}function K(t,e,n,o){e&&(t.addEventListener?t.addEventListener(e,n,!!o):t.attachEvent("on"+e,n))}function V(t){return!!t.getAttribute("disabled")}function B(t){return{tabindex:-1*t+"",disabled:t}}function X(t,e){K(t,"keyup",(function(n){V(t)||13==n.keyCode&&e.call(t,n)}))}function Q(t,e){K(t,"focus",t.onfocusin=function(n){e.call(t,n)},!0)}function U(t,e){t.preventDefault?t.preventDefault():t.returnValue=!1,e&&t.stopPropagation&&t.stopPropagation()}function Y(t){return t?">":"<"}function G(t){return t=(t+"").split(/\s+/),{x:p(t[0])||Ge,y:p(t[1])||Ge}}function J(t,e){var n=t.data(),i=Math.round(e.pos),a=function(){n.sliding=!1,(e.onEnd||r)()};void 0!==e.overPos&&e.overPos!==e.pos&&(i=e.overPos,a=function(){J(t,o.extend({},e,{overPos:e.pos,time:Math.max(De,e.time/2)}))});var s=o.extend(l(i),e.width&&{width:e.width});n.sliding=!0,Ne?(t.css(o.extend(c(e.time),s)),e.time>10?y(t,"transform",a,e.time):a()):t.stop().animate(s,e.time,Ye,a)}function Z(t,e,n,i,a,s){var u=void 0!==s;if(u||(a.push(arguments),Array.prototype.push.call(arguments,a.length),!(a.length>1))){t=t||o(t),e=e||o(e);var l=t[0],c=e[0],f="crossfade"===i.method,d=function t(){if(!t.done){t.done=!0;var e=(u||a.shift())&&a.shift();e&&Z.apply(this,e),(i.onEnd||r)(!!e)}},h=i.time/(s||1);n.removeClass(Wt+" "+Rt),t.stop().addClass(Wt),e.stop().addClass(Rt),f&&c&&t.fadeTo(0,0),t.fadeTo(f?h:0,1,f&&d),e.fadeTo(h,0,d),l&&f||c||d()}}function tt(t){var e=(t.touches||[])[0]||t;t._x=e.pageX,t._y=e.clientY,t._now=o.now()}function et(t,n){function i(t){return d=o(t.target),b.checked=p=v=g=!1,c||b.flow||t.touches&&t.touches.length>1||t.which>1||tn&&tn.type!==t.type&&nn||(p=n.select&&d.is(n.select,y))?p:(m="touchstart"===t.type,v=d.is("a, a *",y),h=b.control,w=b.noMove||b.noSwipe||h?16:b.snap?0:4,tt(t),f=tn=t,en=t.type.replace(/down|start/,"move").replace(/Down/,"Move"),(n.onStart||r).call(y,t,{control:h,$target:d}),c=b.flow=!0,void((!m||b.go)&&U(t)))}function a(t){if(t.touches&&t.touches.length>1||Le&&!t.isPrimary||en!==t.type||!c)return c&&s(),void(n.onTouchEnd||r)();tt(t);var e=Math.abs(t._x-f._x),o=Math.abs(t._y-f._y),i=e-o,a=(b.go||b.x||i>=0)&&!b.noSwipe,u=0>i;m&&!b.checked?(c=a)&&U(t):(U(t),(n.onMove||r).call(y,t,{touch:m})),!g&&Math.sqrt(Math.pow(e,2)+Math.pow(o,2))>w&&(g=!0),b.checked=b.checked||a||u}function s(t){(n.onTouchEnd||r)();var e=c;b.control=c=!1,e&&(b.flow=!1),!e||v&&!b.checked||(t&&U(t),nn=!0,clearTimeout(on),on=setTimeout((function(){nn=!1}),1e3),(n.onEnd||r).call(y,{moved:g,$target:d,control:h,touch:m,startEvent:f,aborted:!t||"MSPointerCancel"===t.type}))}function u(){b.flow||setTimeout((function(){b.flow=!0}),10)}function l(){b.flow&&setTimeout((function(){b.flow=!1}),Ie)}var c,f,d,h,m,p,v,w,g,y=t[0],b={};return Le?(K(y,"MSPointerDown",i),K(e,"MSPointerMove",a),K(e,"MSPointerCancel",s),K(e,"MSPointerUp",s)):(K(y,"touchstart",i),K(y,"touchmove",a),K(y,"touchend",s),K(e,"touchstart",u),K(e,"touchend",l),K(e,"touchcancel",l),Fe.on("scroll",l),t.on("mousedown",i),Ee.on("mousemove",a).on("mouseup",s)),t.on("click","a",(function(t){b.checked&&U(t)})),b}function nt(t,e){function n(n,o){S=!0,c=f=n._x,v=n._now,p=[[v,c]],d=h=E.noMove||o?0:b(t,(e.getPos||r)()),(e.onStart||r).call(M,n)}function i(t,e){g=E.min,y=E.max,x=E.snap,C=t.altKey,S=k=!1,(T=e.control)||F.sliding||n(t)}function s(o,i){E.noSwipe||(S||n(o),f=o._x,p.push([o._now,f]),h=d-(c-f),m=A(h,g,y),g>=h?h=_(h,g):h>=y&&(h=_(h,y)),E.noMove||(t.css(l(h)),k||(k=!0,i.touch||Le||t.addClass(oe)),(e.onMove||r).call(M,o,{pos:h,edge:m})))}function u(i){if(!E.noSwipe||!i.moved){S||n(i.startEvent,!0),i.touch||Le||t.removeClass(oe),w=o.now();for(var s,u,l,c,m,v,b,_,T,k=w-Ie,F=null,P=De,j=e.friction,N=p.length-1;N>=0;N--){if(s=p[N][0],u=Math.abs(s-k),null===F||l>u)F=s,c=p[N][1];else if(F===k||u>l)break;l=u}b=a(h,g,y);var $=c-f,q=$>=0,A=w-F,z=A>Ie,L=!z&&h!==d&&b===h;x&&(b=a(Math[L?q?"floor":"ceil":"round"](h/x)*x,g,y),g=y=b),L&&(x||b===h)&&(T=-$/A,P*=a(Math.abs(T),e.timeLow,e.timeHigh),m=Math.round(h+T*P/j),x||(b=m),(!q&&m>y||q&&g>m)&&(v=q?g:y,_=m-v,x||(b=v),_=a(b+.03*_,v-50,v+50),P=Math.abs((h-_)/(T/j)))),P*=C?10:1,(e.onEnd||r).call(M,o.extend(i,{moved:i.moved||z&&x,pos:h,newPos:b,overPos:_,time:P}))}}var c,f,d,h,m,p,v,w,g,y,x,C,T,k,S,M=t[0],F=t.data(),E={};return E=o.extend(et(e.$wrap,o.extend({},e,{onStart:i,onMove:s,onEnd:u})),E)}function ot(t,e){var n,i,a,s=t[0],u={prevent:{}};return K(s,Oe,(function(t){var s=t.wheelDeltaY||-1*t.deltaY||0,l=t.wheelDeltaX||-1*t.deltaX||0,c=Math.abs(l)&&!Math.abs(s),f=Y(0>l),d=i===f,h=o.now(),m=Ie>h-a;i=f,a=h,c&&u.ok&&(!u.prevent[f]||n)&&(U(t,!0),n&&d&&m||(e.shift&&(n=!0,clearTimeout(u.t),u.t=setTimeout((function(){n=!1}),Re)),(e.onEnd||r)(t,e.shift?f:l)))})),u}function it(){o.each(o.Fotorama.instances,(function(t,e){e.index=t}))}function rt(t){o.Fotorama.instances.push(t),it()}function at(t){o.Fotorama.instances.splice(t.index,1),it()}var st="fotorama",ut="fullscreen",lt=st+"__wrap",ct=lt+"--css2",ft=lt+"--css3",dt=lt+"--video",ht=lt+"--fade",mt=lt+"--slide",pt=lt+"--no-controls",vt=lt+"--no-shadows",wt=lt+"--pan-y",gt=lt+"--rtl",yt=lt+"--only-active",bt=lt+"--no-captions",xt=lt+"--toggle-arrows",_t=st+"__stage",Ct=_t+"__frame",Tt=Ct+"--video",kt=_t+"__shaft",St=st+"__grab",Mt=st+"__pointer",Ft=st+"__arr",Et=Ft+"--disabled",Pt=Ft+"--prev",jt=Ft+"--next",Nt=st+"__nav",$t=Nt+"-wrap",qt=Nt+"__shaft",At=Nt+"--dots",zt=Nt+"--thumbs",Lt=Nt+"__frame",Ot=Lt+"--dot",It=Lt+"--thumb",Dt=st+"__fade",Rt=Dt+"-front",Wt=Dt+"-rear",Ht=st+"__shadow",Kt=Ht+"s",Vt=Kt+"--left",Bt=Kt+"--right",Xt=st+"__active",Qt=st+"__select",Ut=st+"--hidden",Yt=st+"--fullscreen",Gt=st+"__fullscreen-icon",Jt=st+"__error",Zt=st+"__loading",te=st+"__loaded",ee=te+"--full",ne=te+"--img",oe=st+"__grabbing",ie=st+"__img",re=ie+"--full",ae=st+"__dot",se=st+"__thumb",ue=se+"-border",le=st+"__html",ce=st+"__video",fe=ce+"-play",de=ce+"-close",he=st+"__caption",me=st+"__caption__wrap",pe=st+"__spinner",ve='" tabindex="0" role="button',we=o&&o.fn.jquery.split(".");if(!we||we[0]<1||1==we[0]&&we[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var ge=(function(t,e,n){function o(t,e){return(void 0===t?"undefined":_typeof(t))===e}function i(t,e){return!!~(""+t).indexOf(e)}function r(t,e){for(var o in t){var r=t[o];if(!i(r,"-")&&m[r]!==n)return"pfx"!=e||r}return!1}function a(t,e,i){for(var r in t){var a=e[t[r]];if(a!==n)return!1===i?t[r]:o(a,"function")?a.bind(i||e):a}return!1}function s(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),s=(t+" "+w.join(i+" ")+i).split(" ");return o(e,"string")||o(e,"undefined")?r(s,e):(s=(t+" "+g.join(i+" ")+i).split(" "),a(s,e,n))}var u,l,c={},f=e.documentElement,d="modernizr",h=e.createElement(d),m=h.style,p=" -webkit- -moz- -o- -ms- ".split(" "),v="Webkit Moz O ms",w=v.split(" "),g=v.toLowerCase().split(" "),y={},b=[],x=b.slice,_=function(t,n,o,i){var r,a,s,u,l=e.createElement("div"),c=e.body,h=c||e.createElement("body");if(parseInt(o,10))for(;o--;)s=e.createElement("div"),s.id=i?i[o]:d+(o+1),l.appendChild(s);return r=["&#173;",'<style id="s',d,'">',t,"</style>"].join(""),l.id=d,(c?l:h).innerHTML+=r,h.appendChild(l),c||(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),a=n(l,t),c?l.parentNode.removeChild(l):(h.parentNode.removeChild(h),f.style.overflow=u),!!a},C={}.hasOwnProperty;l=o(C,"undefined")||o(C.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return C.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=x.call(arguments,1);return function o(){if(this instanceof o){var i=function(){};i.prototype=e.prototype;var r=new i,a=e.apply(r,n.concat(x.call(arguments)));return Object(a)===a?a:r}return e.apply(t,n.concat(x.call(arguments)))}}),y.csstransforms3d=function(){return!!s("perspective")};for(var T in y)l(y,T)&&(u=T.toLowerCase(),c[u]=y[T](),b.push((c[u]?"":"no-")+u));return c.addTest=function(t,e){if("object"==(void 0===t?"undefined":_typeof(t)))for(var o in t)l(t,o)&&c.addTest(o,t[o]);else{if(t=t.toLowerCase(),c[t]!==n)return c;e="function"==typeof e?e():e,"undefined"!=typeof enableClasses&&enableClasses&&(f.className+=" "+(e?"":"no-")+t),c[t]=e}return c},(function(t){m.cssText=t})(""),h=null,c._version="2.6.2",c._prefixes=p,c._domPrefixes=g,c._cssomPrefixes=w,c.testProp=function(t){return r([t])},c.testAllProps=s,c.testStyles=_,c.prefixed=function(t,e,n){return e?s(t,e,n):s(t,"pfx")},c})(0,e),ye={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},be="webkit moz o ms khtml".split(" ");if(void 0!==e.cancelFullScreen)ye.ok=!0;else for(var xe=0,_e=be.length;_e>xe;xe++)if(ye.prefix=be[xe],void 0!==e[ye.prefix+"CancelFullScreen"]){ye.ok=!0;break}ye.ok&&(ye.event=ye.prefix+"fullscreenchange",ye.is=function(){switch(this.prefix){case"":return e.fullScreen;case"webkit":return e.webkitIsFullScreen;default:return e[this.prefix+"FullScreen"]}},ye.request=function(t){return""===this.prefix?t.requestFullScreen():t[this.prefix+"RequestFullScreen"]()},ye.cancel=function(){return""===this.prefix?e.cancelFullScreen():e[this.prefix+"CancelFullScreen"]()});var Ce,Te={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},ke={top:"auto",left:"auto",className:""};!(function(t,e){Ce=(function(){function t(t,n){var o,i=e.createElement(t||"div");for(o in n)i[o]=n[o];return i}function n(t){for(var e=1,n=arguments.length;n>e;e++)t.appendChild(arguments[e]);return t}function o(t,e,n,o){var i=["opacity",e,~~(100*t),n,o].join("-"),r=.01+n/o*100,a=Math.max(1-(1-t)/e*(100-r),t),s=f.substring(0,f.indexOf("Animation")).toLowerCase(),u=s&&"-"+s+"-"||"";return h[i]||(m.insertRule("@"+u+"keyframes "+i+"{0%{opacity:"+a+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+e)%100+"%{opacity:"+t+"}100%{opacity:"+a+"}}",m.cssRules.length),h[i]=1),i}function r(t,e){var n,o,r=t.style;for(e=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<d.length;o++)if(n=d[o]+e,r[n]!==i)return n;return r[e]!==i?e:void 0}function a(t,e){for(var n in e)t.style[r(t,n)||n]=e[n];return t}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]===i&&(t[o]=n[o])}return t}function u(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function l(t,e){return"string"==typeof t?t:t[e%t.length]}function c(t){return void 0===this?new c(t):void(this.opts=s(t||{},c.defaults,p))}var f,d=["webkit","Moz","ms","O"],h={},m=(function(){var o=t("style",{type:"text/css"});return n(e.getElementsByTagName("head")[0],o),o.sheet||o.styleSheet})(),p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};c.defaults={},s(c.prototype,{spin:function(e){this.stop();var n,o,i=this,r=i.opts,s=i.el=a(t(0,{className:r.className}),{position:r.position,width:0,zIndex:r.zIndex}),l=r.radius+r.length+r.width;if(e&&(e.insertBefore(s,e.firstChild||null),o=u(e),n=u(s),a(s,{left:("auto"==r.left?o.x-n.x+(e.offsetWidth>>1):parseInt(r.left,10)+l)+"px",top:("auto"==r.top?o.y-n.y+(e.offsetHeight>>1):parseInt(r.top,10)+l)+"px"})),s.setAttribute("role","progressbar"),i.lines(s,i.opts),!f){var c,d=0,h=(r.lines-1)*(1-r.direction)/2,m=r.fps,p=m/r.speed,v=(1-r.opacity)/(p*r.trail/100),w=p/r.lines;!(function t(){d++;for(var e=0;e<r.lines;e++)c=Math.max(1-(d+(r.lines-e)*w)%p*v,r.opacity),i.opacity(s,e*r.direction+h,c,r);i.timeout=i.el&&setTimeout(t,~~(1e3/m))})()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=i),this},lines:function(e,i){function r(e,n){return a(t(),{position:"absolute",width:i.length+i.width+"px",height:i.width+"px",background:e,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/i.lines*u+i.rotate)+"deg) translate("+i.radius+"px,0)",borderRadius:(i.corners*i.width>>1)+"px"})}for(var s,u=0,c=(i.lines-1)*(1-i.direction)/2;u<i.lines;u++)s=a(t(),{position:"absolute",top:1+~(i.width/2)+"px",transform:i.hwaccel?"translate3d(0,0,0)":"",opacity:i.opacity,animation:f&&o(i.opacity,i.trail,c+u*i.direction,i.lines)+" "+1/i.speed+"s linear infinite"}),i.shadow&&n(s,a(r("#000","0 0 4px #000"),{top:"2px"})),n(e,n(s,r(l(i.color,u),"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(t,e,n){e<t.childNodes.length&&(t.childNodes[e].style.opacity=n)}});var v=a(t("group"),{behavior:"url(#default#VML)"});return!r(v,"transform")&&v.adj?(function(){function e(e,n){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}m.addRule(".spin-vml","behavior:url(#default#VML)"),c.prototype.lines=function(t,o){function i(){return a(e("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function r(t,r,s){n(d,n(a(i(),{rotation:360/o.lines*t+"deg",left:~~r}),n(a(e("roundrect",{arcsize:o.corners}),{width:u,height:o.width,left:o.radius,top:-o.width>>1,filter:s}),e("fill",{color:l(o.color,t),opacity:o.opacity}),e("stroke",{opacity:0}))))}var s,u=o.length+o.width,c=2*u,f=2*-(o.width+o.length)+"px",d=a(i(),{position:"absolute",top:f,left:f});if(o.shadow)for(s=1;s<=o.lines;s++)r(s,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(s=1;s<=o.lines;s++)r(s);return n(t,d)},c.prototype.opacity=function(t,e,n,o){var i=t.firstChild;o=o.shadow&&o.lines||0,i&&e+o<i.childNodes.length&&(i=i.childNodes[e+o],i=i&&i.firstChild,(i=i&&i.firstChild)&&(i.opacity=n))}})():f=r(v,"animation"),c})()})();var Se,Me,Fe=o(t),Ee=o(e),Pe="quirks"===n.hash.replace("#",""),je=ge.csstransforms3d,Ne=je&&!Pe,$e=je||"CSS1Compat"===e.compatMode,qe=ye.ok,Ae=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),ze=!Ne||Ae,Le=navigator.msPointerEnabled,Oe="onwheel"in e.createElement("div")?"wheel":e.onmousewheel!==i?"mousewheel":"DOMMouseScroll",Ie=250,De=300,Re=1400,We=5e3,He=64,Ke=500,Ve=333,Be="$stageFrame",Xe="$navDotFrame",Qe="$navThumbFrame",Ue="auto",Ye=(function(t){var e="bez_"+o.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof o.easing[e]){var n=function(t,e){var n=[null,null],o=[null,null],i=[null,null],r=function(r,a){return i[a]=3*t[a],o[a]=3*(e[a]-t[a])-i[a],n[a]=1-i[a]-o[a],r*(i[a]+r*(o[a]+r*n[a]))},a=function(t){return i[0]+t*(2*o[0]+3*n[0]*t)},s=function(t){for(var e,n=t,o=0;++o<14&&(e=r(n,0)-t,!(Math.abs(e)<.001));)n-=e/a(n);return n};return function(t){return r(s(t),1)}};o.easing[e]=function(e,o,i,r,a){return r*n([t[0],t[1]],[t[2],t[3]])(o/a)+i}}return e})([.1,0,.25,1]),Ge="50%",Je={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:2,glimpse:0,fit:"contain",position:Ge,thumbposition:Ge,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:He,thumbheight:He,thumbmargin:2,thumbborderwidth:2,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:De,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},Ze={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};j.stop=function(t){j.ii[t]=!1};var tn,en,nn,on;jQuery.Fotorama=function(t,i){function r(){o.each(Tn,(function(t,e){if(!e.i){e.i=ho++;var n=k(e.video,!0);if(n){var o={};e.video=n,e.img||e.thumb?e.thumbsReady=!0:o=S(e,Tn,uo),M(Tn,{img:o.img,thumb:o.thumb},e.i,uo)}}}))}function s(t){return Gn[t]||uo.fullScreen}function u(t){var e="keydown."+st,n=st+lo,o="keydown."+n,r="resize."+n+" orientationchange."+n;t?(Ee.on(o,(function(t){var e,n;Fn&&27===t.keyCode?(e=!0,dn(Fn,!0,!0)):(uo.fullScreen||i.keyboard&&!uo.index)&&(27===t.keyCode?(e=!0,uo.cancelFullScreen()):t.shiftKey&&32===t.keyCode&&s("space")||37===t.keyCode&&s("left")||38===t.keyCode&&s("up")?n="<":32===t.keyCode&&s("space")||39===t.keyCode&&s("right")||40===t.keyCode&&s("down")?n=">":36===t.keyCode&&s("home")?n="<<":35===t.keyCode&&s("end")&&(n=">>")),(e||n)&&U(t),n&&uo.show({index:n,slow:t.altKey,user:!0})})),uo.index||Ee.off(e).on(e,"textarea, input, select",(function(t){!Me.hasClass(ut)&&t.stopPropagation()})),Fe.on(r,uo.resize)):(Ee.off(o),Fe.off(r))}function f(e){e!==f.f&&(e?(t.html("").addClass(st+" "+co).append(wo).before(po).before(vo),rt(uo)):(wo.detach(),po.detach(),vo.detach(),t.html(mo.urtext).removeClass(co),at(uo)),u(e),f.f=e)}function h(){Tn=uo.data=Tn||D(i.data)||F(t),kn=uo.size=Tn.length,!Cn.ok&&i.shuffle&&I(Tn),r(),zo=T(zo),kn&&f(!0)}function g(){var t=2>kn&&!i.enableifsingleframe||Fn;Io.noMove=t||Kn,Io.noSwipe=t||!i.swipe,!Qn&&yo.toggleClass(St,!i.click&&!Io.noMove&&!Io.noSwipe),Le&&wo.toggleClass(wt,!Io.noSwipe)}function y(t){!0===t&&(t=""),i.autoplay=Math.max(+t||We,1.5*Xn)}function _(){function t(t,n){e[t?"add":"remove"].push(n)}uo.options=i=W(i),Kn="crossfade"===i.transition||"dissolve"===i.transition,On=i.loop&&(kn>2||Kn&&(!Qn||"slide"!==Qn)),Xn=+i.transitionduration||De,Yn="rtl"===i.direction,Gn=o.extend({},i.keyboard&&Ze,i.keyboard);var e={add:[],remove:[]};kn>1||i.enableifsingleframe?(In=i.nav,Rn="top"===i.navposition,e.remove.push(Qt),Co.toggle(!!i.arrows)):(In=!1,Co.hide()),Ht(),Mn=new Ce(o.extend(Te,i.spinner,ke,{direction:Yn?-1:1})),Ae(),Oe(),i.autoplay&&y(i.autoplay),Vn=d(i.thumbwidth)||He,Bn=d(i.thumbheight)||He,Do.ok=Wo.ok=i.trackpad&&!ze,g(),on(i,[Oo]),Dn="thumbs"===In,Dn?(we(kn,"navThumb"),Sn=Fo,so=Qe,q(po,o.Fotorama.jst.style({w:Vn,h:Bn,b:i.thumbborderwidth,m:i.thumbmargin,s:lo,q:!$e})),ko.addClass(zt).removeClass(At)):"dots"===In?(we(kn,"navDot"),Sn=Mo,so=Xe,ko.addClass(At).removeClass(zt)):(In=!1,ko.removeClass(zt+" "+At)),In&&(Rn?To.insertBefore(go):To.insertAfter(go),_e.nav=!1,_e(Sn,So,"nav")),Wn=i.allowfullscreen,Wn?(Po.prependTo(go),Hn=qe&&"native"===Wn):(Po.detach(),Hn=!1),t(Kn,ht),t(!Kn,mt),t(!i.captions,bt),t(Yn,gt),t("always"!==i.arrows,xt),Un=i.shadows&&!ze,t(!Un,vt),wo.addClass(e.add.join(" ")).removeClass(e.remove.join(" ")),Lo=o.extend({},i)}function C(t){return 0>t?(kn+t%kn)%kn:t>=kn?t%kn:t}function T(t){return a(t,0,kn-1)}function E(t){return On?C(t):T(t)}function V(t){return!!(t>0||On)&&t-1}function G(t){return!!(kn-1>t||On)&&t+1}function tt(){Io.min=On?-1/0:-v(kn-1,Oo.w,i.margin,jn),Io.max=On?1/0:-v(0,Oo.w,i.margin,jn),Io.snap=Oo.w+i.margin}function et(){Ro.min=Math.min(0,Oo.nw-So.width()),Ro.max=0,So.toggleClass(St,!(Ro.noMove=Ro.min===Ro.max))}function it(t,e,n){if("number"==typeof t){t=new Array(t);var i=!0}return o.each(t,(function(t,o){if(i&&(o=t),"number"==typeof o){var r=Tn[C(o)];if(r){var a="$"+e+"Frame",s=r[a];n.call(this,t,o,r,s,a,s&&s.data())}}}))}function Dt(t,e,n,o){(!Jn||"*"===Jn&&o===Ln)&&(t=p(i.width)||p(t)||Ke,e=p(i.height)||p(e)||Ve,uo.resize({width:t,ratio:i.ratio||n||t/e},0,o!==Ln&&"*"))}function Rt(t,e,n,r,a,s){it(t,e,(function(t,u,l,c,f,d){function h(t){var e=C(u);rn(t,{index:e,src:_,frame:Tn[e]})}function m(){y.remove(),o.Fotorama.cache[_]="error",l.html&&"stage"===e||!T||T===_?(!_||l.html||w?"stage"===e&&(c.trigger("f:load").removeClass(Zt+" "+Jt).addClass(te),h("load"),Dt()):(c.trigger("f:error").removeClass(Zt).addClass(Jt),h("error")),d.state="error",!(kn>1&&Tn[u]===l)||l.html||l.deleted||l.video||w||(l.deleted=!0,uo.splice(u,1))):(l[x]=_=T,Rt([u],e,n,r,a,!0))}function p(){o.Fotorama.measures[_]=b.measures=o.Fotorama.measures[_]||{width:g.width,height:g.height,ratio:g.width/g.height},Dt(b.measures.width,b.measures.height,b.measures.ratio,u),y.off("load error").addClass(ie+(w?" "+re:"")).prependTo(c),$(y,(o.isFunction(n)?n():n)||Oo,r||l.fit||i.fit,a||l.position||i.position),o.Fotorama.cache[_]=d.state="loaded",setTimeout((function(){c.trigger("f:load").removeClass(Zt+" "+Jt).addClass(te+" "+(w?ee:ne)),"stage"===e?h("load"):(l.thumbratio===Ue||!l.thumbratio&&i.thumbratio===Ue)&&(l.thumbratio=b.measures.ratio,xn())}),0)}function v(){var t=10;j((function(){return!ro||!t--&&!ze}),(function(){p()}))}if(c){var w=uo.fullScreen&&l.full&&l.full!==l.img&&!d.$full&&"stage"===e;if(!d.$img||s||w){var g=new Image,y=o(g),b=y.data();d[w?"$full":"$img"]=y;var x="stage"===e?w?"full":"img":"thumb",_=l[x],T=w?null:l["stage"===e?"thumb":"img"];if("navThumb"===e&&(c=d.$wrap),!_)return void m();o.Fotorama.cache[_]?(function t(){"error"===o.Fotorama.cache[_]?m():"loaded"===o.Fotorama.cache[_]?setTimeout(v,0):setTimeout(t,100)})():(o.Fotorama.cache[_]="*",y.on("load",v).on("error",m)),d.state="",g.src=_}}}))}function Wt(t){Ao.append(Mn.spin().el).appendTo(t)}function Ht(){Ao.detach(),Mn&&Mn.stop()}function oe(){var t=En[Be];t&&!t.data().state&&(Wt(t),t.on("f:load f:error",(function(){t.off("f:load f:error"),Ht()})))}function ce(t){X(t,gn),Q(t,(function(){setTimeout((function(){R(ko)}),0),Ge({time:Xn,guessIndex:o(this).data().eq,minMax:Ro})}))}function we(t,e){it(t,e,(function(t,n,i,r,a,s){if(!r){r=i[a]=wo[a].clone(),s=r.data(),s.data=i;var u=r[0];"stage"===e?(i.html&&o('<div class="'+le+'"></div>').append(i._html?o(i.html).removeAttr("id").html(i._html):i.html).appendTo(r),i.caption&&o(O(he,O(me,i.caption))).appendTo(r),i.video&&r.addClass(Tt).append(No.clone()),Q(u,(function(){setTimeout((function(){R(go)}),0),pn({index:s.eq,user:!0})})),bo=bo.add(r)):"navDot"===e?(ce(u),Mo=Mo.add(r)):"navThumb"===e&&(ce(u),s.$wrap=r.children(":first"),Fo=Fo.add(r),i.video&&s.$wrap.append(No.clone()))}}))}function ge(t,e,n,o){return t&&t.length&&$(t,e,n,o)}function be(t){it(t,"stage",(function(t,e,n,r,a,s){if(r){var u=C(e),l=n.fit||i.fit,f=n.position||i.position;s.eq=u,Ko[Be][u]=r.css(o.extend({left:Kn?0:v(e,Oo.w,i.margin,jn)},Kn&&c(0))),P(r[0])&&(r.appendTo(yo),dn(n.$video)),ge(s.$img,Oo,l,f),ge(s.$full,Oo,l,f)}}))}function xe(t,e){if("thumbs"===In&&!isNaN(t)){var n=-t,r=-t+Oo.nw;Fo.each((function(){var t=o(this),a=t.data(),s=a.eq,u=function(){return{h:Bn,w:a.w}},l=u(),c=Tn[s]||{},f=c.thumbfit||i.thumbfit,d=c.thumbposition||i.thumbposition;l.w=a.w,a.l+a.w<n||a.l>r||ge(a.$img,l,f,d)||e&&Rt([s],"navThumb",u,f,d)}))}}function _e(t,e,n){if(!_e[n]){var r="nav"===n&&Dn,a=0;e.append(t.filter((function(){for(var t,e=o(this),n=e.data(),i=0,r=Tn.length;r>i;i++)if(n.data===Tn[i]){t=!0,n.eq=i;break}return t||e.remove()&&!1})).sort((function(t,e){return o(t).data().eq-o(e).data().eq})).each((function(){if(r){var t=o(this),e=t.data(),n=Math.round(Bn*e.data.thumbratio)||Vn;e.l=a,e.w=n,t.css({width:n}),a+=n+i.thumbmargin}}))),_e[n]=!0}}function Pe(t){return t-Vo>Oo.w/3}function je(t){return!(On||zo+t&&zo-kn+t||Fn)}function Ae(){var t=je(0),e=je(1);xo.toggleClass(Et,t).attr(B(t)),_o.toggleClass(Et,e).attr(B(e))}function Oe(){Do.ok&&(Do.prevent={"<":je(0),">":je(1)})}function Re(t){var e,n,o=t.data();return Dn?(e=o.l,n=o.w):(e=t.position().left,n=t.width()),{c:e+n/2,min:-e+10*i.thumbmargin,max:-e+Oo.w-n-10*i.thumbmargin}}function Ye(t){var e=En[so].data();J(Eo,{time:1.2*t,pos:e.l,width:e.w-2*i.thumbborderwidth})}function Ge(t){var e=Tn[t.guessIndex][so];if(e){var n=Ro.min!==Ro.max,o=t.minMax||n&&Re(En[so]),i=n&&(t.keep&&Ge.l?Ge.l:a((t.coo||Oo.nw/2)-Re(e).c,o.min,o.max)),r=n&&a(i,Ro.min,Ro.max),s=1.1*t.time;J(So,{time:s,pos:r||0,onEnd:function(){xe(r,!0)}}),fn(ko,A(r,Ro.min,Ro.max)),Ge.l=i}}function Je(){tn(so),Ho[so].push(En[so].addClass(Xt))}function tn(t){for(var e=Ho[t];e.length;)e.shift().removeClass(Xt)}function en(t){var e=Ko[t];o.each(Pn,(function(t,n){delete e[C(n)]})),o.each(e,(function(t,n){delete e[t],n.detach()}))}function nn(t){jn=Nn=zo;var e=En[Be];e&&(tn(Be),Ho[Be].push(e.addClass(Xt)),t||uo.show.onEnd(!0),b(yo,0,!0),en(Be),be(Pn),tt(),et())}function on(t,e){t&&o.each(e,(function(e,n){n&&o.extend(n,{width:t.width||n.width,height:t.height,minwidth:t.minwidth,maxwidth:t.maxwidth,minheight:t.minheight,maxheight:t.maxheight,ratio:H(t.ratio)})}))}function rn(e,n){t.trigger(st+":"+e,[uo,n])}function an(){clearTimeout(sn.t),ro=1,i.stopautoplayontouch?uo.stopAutoplay():no=!0}function sn(){ro&&(i.stopautoplayontouch||(un(),ln()),sn.t=setTimeout((function(){ro=0}),De+Ie))}function un(){no=!(!Fn&&!oo)}function ln(){if(clearTimeout(ln.t),j.stop(ln.w),!i.autoplay||no)return void(uo.autoplay&&(uo.autoplay=!1,rn("stopautoplay")));uo.autoplay||(uo.autoplay=!0,rn("startautoplay"));var t=zo,e=En[Be].data();ln.w=j((function(){return e.state||t!==zo}),(function(){ln.t=setTimeout((function(){if(!no&&t===zo){var e=zn,n=Tn[e][Be].data();ln.w=j((function(){return n.state||e!==zn}),(function(){no||e!==zn||uo.show(On?Y(!Yn):zn)}))}}),i.autoplay)}))}function cn(){uo.fullScreen&&(uo.fullScreen=!1,qe&&ye.cancel(fo),Me.removeClass(ut),Se.removeClass(ut),t.removeClass(Yt).insertAfter(vo),Oo=o.extend({},io),dn(Fn,!0,!0),wn("x",!1),uo.resize(),Rt(Pn,"stage"),R(Fe,to,Zn),rn("fullscreenexit"))}function fn(t,e){Un&&(t.removeClass(Vt+" "+Bt),e&&!Fn&&t.addClass(e.replace(/^|\s/g," "+Kt+"--")))}function dn(t,e,n){e&&(wo.removeClass(dt),Fn=!1,g()),t&&t!==Fn&&(t.remove(),rn("unloadvideo")),n&&(un(),ln())}function hn(t){wo.toggleClass(pt,t)}function mn(t){if(!Io.flow){var e=t?t.pageX:mn.x,n=e&&!je(Pe(e))&&i.click;mn.p!==n&&go.toggleClass(Mt,n)&&(mn.p=n,mn.x=e)}}function pn(t){clearTimeout(pn.t),i.clicktransition&&i.clicktransition!==i.transition?setTimeout((function(){var e=i.transition;uo.setOptions({transition:i.clicktransition}),Qn=e,pn.t=setTimeout((function(){uo.show(t)}),10)}),0):uo.show(t)}function vn(t,e){var n=t.target;o(n).hasClass(fe)?uo.playVideo():n===jo?uo.toggleFullScreen():Fn?n===qo&&dn(Fn,!0,!0):e?hn():i.click&&pn({index:t.shiftKey||Y(Pe(t._x)),slow:t.altKey,user:!0})}function wn(t,e){Io[t]=Ro[t]=e}function gn(t){pn({index:o(this).data().eq,slow:t.altKey,user:!0,coo:t._x-ko.offset().left})}function yn(t){pn({index:Co.index(this)?">":"<",slow:t.altKey,user:!0})}function bn(t){Q(t,(function(){setTimeout((function(){R(go)}),0),hn(!1)}))}function xn(){if(h(),_(),!xn.i){xn.i=!0;var t=i.startindex;(t||i.hash&&n.hash)&&(Ln=z(t||n.hash.replace(/^#/,""),Tn,0===uo.index||t,t)),zo=jn=Nn=$n=Ln=E(Ln)||0}if(kn){if(_n())return;Fn&&dn(Fn,!0),Pn=[],en(Be),xn.ok=!0,uo.show({index:zo,time:0}),uo.resize()}else uo.destroy()}function _n(){return!_n.f===Yn?(_n.f=Yn,zo=kn-1-zo,uo.reverse(),!0):void 0}function Cn(){Cn.ok||(Cn.ok=!0,rn("ready"))}Se=o("html"),Me=o("body")
;var Tn,kn,Sn,Mn,Fn,En,Pn,jn,Nn,$n,qn,An,zn,Ln,On,In,Dn,Rn,Wn,Hn,Kn,Vn,Bn,Xn,Qn,Un,Yn,Gn,Jn,Zn,to,eo,no,oo,io,ro,ao,so,uo=this,lo=o.now(),co=st+lo,fo=t[0],ho=1,mo=t.data(),po=o("<style></style>"),vo=o(O(Ut)),wo=o(O(lt)),go=o(O(_t)).appendTo(wo),yo=(go[0],o(O(kt)).appendTo(go)),bo=o(),xo=o(O(Ft+" "+Pt+ve)),_o=o(O(Ft+" "+jt+ve)),Co=xo.add(_o).appendTo(go),To=o(O($t)),ko=o(O(Nt)).appendTo(To),So=o(O(qt)).appendTo(ko),Mo=o(),Fo=o(),Eo=(yo.data(),So.data(),o(O(ue)).appendTo(So)),Po=o(O(Gt+ve)),jo=Po[0],No=o(O(fe)),$o=o(O(de)).appendTo(go),qo=$o[0],Ao=o(O(pe)),zo=!1,Lo={},Oo={},Io={},Do={},Ro={},Wo={},Ho={},Ko={},Vo=0,Bo=[];wo[Be]=o(O(Ct)),wo[Qe]=o(O(Lt+" "+It+ve,O(se))),wo[Xe]=o(O(Lt+" "+Ot+ve,O(ae))),Ho[Be]=[],Ho[Qe]=[],Ho[Xe]=[],Ko[Be]={},wo.addClass(Ne?ft:ct).toggleClass(pt,!i.controlsonstart),mo.fotorama=this,uo.startAutoplay=function(t){return uo.autoplay?this:(no=oo=!1,y(t||i.autoplay),ln(),this)},uo.stopAutoplay=function(){return uo.autoplay&&(no=oo=!0,ln()),this},uo.show=function(t){var e;"object"!=(void 0===t?"undefined":_typeof(t))?(e=t,t={}):e=t.index,e=">"===e?Nn+1:"<"===e?Nn-1:"<<"===e?0:">>"===e?kn-1:e,e=isNaN(e)?z(e,Tn,!0):e,e=void 0===e?zo||0:e,uo.activeIndex=zo=E(e),qn=V(zo),An=G(zo),zn=C(zo+(Yn?-1:1)),Pn=[zo,qn,An],Nn=On?e:zo;var n=Math.abs($n-Nn),o=x(t.time,(function(){return Math.min(Xn*(1+(n-1)/12),2*Xn)})),r=t.overPos;t.slow&&(o*=10);var s=En;uo.activeFrame=En=Tn[zo];var u=s===En&&!t.user;dn(Fn,En.i!==Tn[C(jn)].i),we(Pn,"stage"),be(ze?[Nn]:[Nn,V(Nn),G(Nn)]),wn("go",!0),u||rn("show",{user:t.user,time:o}),no=!0;var l=uo.show.onEnd=function(e){if(!l.ok){if(l.ok=!0,e||nn(!0),u||rn("showend",{user:t.user}),!e&&Qn&&Qn!==i.transition)return uo.setOptions({transition:Qn}),void(Qn=!1);oe(),Rt(Pn,"stage"),wn("go",!1),Oe(),mn(),un(),ln()}};if(Kn){Z(En[Be],zo!==$n?Tn[$n][Be]:null,bo,{time:o,method:i.transition,onEnd:l},Bo)}else J(yo,{pos:-v(Nn,Oo.w,i.margin,jn),overPos:r,time:o,onEnd:l});if(Ae(),In){Je();var c=T(zo+a(Nn-$n,-1,1));Ge({time:o,coo:c!==zo&&t.coo,guessIndex:void 0!==t.coo?c:zo,keep:u}),Dn&&Ye(o)}return eo=void 0!==$n&&$n!==zo,$n=zo,i.hash&&eo&&!uo.eq&&N(En.id||zo+1),this},uo.requestFullScreen=function(){return Wn&&!uo.fullScreen&&(Zn=Fe.scrollTop(),to=Fe.scrollLeft(),R(Fe),wn("x",!0),io=o.extend({},Oo),t.addClass(Yt).appendTo(Me.addClass(ut)),Se.addClass(ut),dn(Fn,!0,!0),uo.fullScreen=!0,Hn&&ye.request(fo),uo.resize(),Rt(Pn,"stage"),oe(),rn("fullscreenenter")),this},uo.cancelFullScreen=function(){return Hn&&ye.is()?ye.cancel(e):cn(),this},uo.toggleFullScreen=function(){return uo[(uo.fullScreen?"cancel":"request")+"FullScreen"]()},K(e,ye.event,(function(){!Tn||ye.is()||Fn||cn()})),uo.resize=function(t){if(!Tn)return this;var e=arguments[1]||0,n=arguments[2];on(uo.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:W(t),[Oo,n||uo.fullScreen||i]);var o=Oo.width,r=Oo.height,s=Oo.ratio,u=Fe.height()-(In?ko.height():0);return p(o)&&(wo.addClass(yt).css({width:o,minWidth:Oo.minwidth||0,maxWidth:Oo.maxwidth||99999}),o=Oo.W=Oo.w=wo.width(),Oo.nw=In&&m(i.navwidth,o)||o,i.glimpse&&(Oo.w-=Math.round(2*(m(i.glimpse,o)||0))),yo.css({width:Oo.w,marginLeft:(Oo.W-Oo.w)/2}),r=m(r,u),(r=r||s&&o/s)&&(o=Math.round(o),r=Oo.h=Math.round(a(r,m(Oo.minheight,u),m(Oo.maxheight,u))),go.stop().animate({width:o,height:r},e,(function(){wo.removeClass(yt)})),nn(),In&&(ko.stop().animate({width:Oo.nw},e),Ge({guessIndex:zo,time:e,keep:!0}),Dn&&_e.nav&&Ye(e)),Jn=n||!0,Cn())),Vo=go.offset().left,this},uo.setOptions=function(t){return o.extend(i,t),xn(),this},uo.shuffle=function(){return Tn&&I(Tn)&&xn(),this},uo.destroy=function(){return uo.cancelFullScreen(),uo.stopAutoplay(),Tn=uo.data=null,f(),Pn=[],en(Be),xn.ok=!1,this},uo.playVideo=function(){var t=En,e=t.video,n=zo;return"object"==(void 0===e?"undefined":_typeof(e))&&t.videoReady&&(Hn&&uo.fullScreen&&uo.cancelFullScreen(),j((function(){return!ye.is()||n!==zo}),(function(){n===zo&&(t.$video=t.$video||o(o.Fotorama.jst.video(e)),t.$video.appendTo(t[Be]),wo.addClass(dt),Fn=t.$video,g(),Co.blur(),Po.blur(),rn("loadvideo"))}))),this},uo.stopVideo=function(){return dn(Fn,!0,!0),this},go.on("mousemove",mn),Io=nt(yo,{onStart:an,onMove:function(t,e){fn(go,e.edge)},onTouchEnd:sn,onEnd:function(t){fn(go);var e=(Le&&!ao||t.touch)&&i.arrows&&"always"!==i.arrows;if(t.moved||e&&t.pos!==t.newPos&&!t.control){var n=w(t.newPos,Oo.w,i.margin,jn);uo.show({index:n,time:Kn?Xn:t.time,overPos:t.overPos,user:!0})}else t.aborted||t.control||vn(t.startEvent,e)},timeLow:1,timeHigh:1,friction:2,select:"."+Qt+", ."+Qt+" *",$wrap:go}),Ro=nt(So,{onStart:an,onMove:function(t,e){fn(ko,e.edge)},onTouchEnd:sn,onEnd:function(t){function e(){Ge.l=t.newPos,un(),ln(),xe(t.newPos,!0)}if(t.moved)t.pos!==t.newPos?(no=!0,J(So,{time:t.time,pos:t.newPos,overPos:t.overPos,onEnd:e}),xe(t.newPos),Un&&fn(ko,A(t.newPos,Ro.min,Ro.max))):e();else{var n=t.$target.closest("."+Lt,So)[0];n&&gn.call(n,t.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:ko}),Do=ot(go,{shift:!0,onEnd:function(t,e){an(),sn(),uo.show({index:e,slow:t.altKey})}}),Wo=ot(ko,{onEnd:function(t,e){an(),sn();var n=b(So)+.25*e;So.css(l(a(n,Ro.min,Ro.max))),Un&&fn(ko,A(n,Ro.min,Ro.max)),Wo.prevent={"<":n>=Ro.max,">":n<=Ro.min},clearTimeout(Wo.t),Wo.t=setTimeout((function(){Ge.l=n,xe(n,!0)}),Ie),xe(n)}}),wo.hover((function(){setTimeout((function(){ro||hn(!(ao=!0))}),0)}),(function(){ao&&hn(!(ao=!1))})),L(Co,(function(t){U(t),yn.call(this,t)}),{onStart:function(){an(),Io.control=!0},onTouchEnd:sn}),Co.each((function(){X(this,(function(t){yn.call(this,t)})),bn(this)})),X(jo,uo.toggleFullScreen),bn(jo),o.each("load push pop shift unshift reverse sort splice".split(" "),(function(t,e){uo[e]=function(){return Tn=Tn||[],"load"!==e?Array.prototype[e].apply(Tn,arguments):arguments[0]&&"object"==_typeof(arguments[0])&&arguments[0].length&&(Tn=D(arguments[0])),xn(),uo}})),xn()},o.fn.fotorama=function(e){return this.each((function(){var n=this,i=o(this),r=i.data(),a=r.fotorama;a?a.setOptions(e,!0):j((function(){return!E(n)}),(function(){r.urtext=i.html(),new o.Fotorama(i,o.extend({},Je,t.fotoramaDefaults,e,r))}))}))},o.Fotorama.instances=[],o.Fotorama.cache={},o.Fotorama.measures={},o=o||{},o.Fotorama=o.Fotorama||{},o.Fotorama.jst=o.Fotorama.jst||{},o.Fotorama.jst.style=function(t){var e,n="";return n+=".fotorama"+(null==(e=t.s)?"":e)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(e=t.m)?"":e)+"px;\nheight:"+(null==(e=t.h)?"":e)+"px}\n.fotorama"+(null==(e=t.s)?"":e)+" .fotorama__thumb-border{\nheight:"+(null==(e=t.h-t.b*(t.q?0:2))?"":e)+"px;\nborder-width:"+(null==(e=t.b)?"":e)+"px;\nmargin-top:"+(null==(e=t.m)?"":e)+"px}"},o.Fotorama.jst.video=function(t){var e="",n=Array.prototype.join;return e+='<div class="fotorama__video"><iframe src="',(function(){e+=n.call(arguments,"")})(("youtube"==t.type?t.p+"youtube.com/embed/"+t.id+"?autoplay=1":"vimeo"==t.type?t.p+"player.vimeo.com/video/"+t.id+"?autoplay=1&badge=0":t.id)+(t.s&&"custom"!=t.type?"&"+t.s:"")),e+='" frameborder="0" allowfullscreen></iframe></div>\n'},o((function(){o("."+st+':not([data-auto="false"])').fotorama()}))})(window,document,location,"undefined"!=typeof jQuery&&jQuery);
//# sourceMappingURL=fotorama.js.map
