(this.webpackJsonpgstring=this.webpackJsonpgstring||[]).push([[0],{21:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){},34:function(t,e,a){"use strict";a.r(e);var i=a(1),r=a(3),c=a.n(r),s=(a(21),a(10)),n=a(11),o=a(15),l=a(13),u=(a(22),a(12)),j=(a(9),a.p+"static/media/srv.dc4bd20a.jpg"),d=a.p+"static/media/jimmy.cb484ac8.jpg",p=a.p+"static/media/joe.e4abe6b0.jpg",m=a.p+"static/media/mollo.4761a07e.jpg",b=a.p+"static/media/eric.895e1abc.jpg",g=[{image:j,artist:"Stevie Ray Vaughan",audio:a.p+"static/media/srv.2594c00c.mp3"},{image:d,artist:"Jimmi Page",audio:a.p+"static/media/jimmy.aab72f6e.ogg"},{image:m,artist:"Ricardo Mollo",audio:a.p+"static/media/mollo.44176207.ogg"},{image:b,artist:"Eric Clapton",audio:a.p+"static/media/eric.f188a84b.mp3"},{image:p,artist:"Joe Satriani",audio:a.p+"static/media/joe.ebaf880a.mp3"}],O=a(0),f=function(t){var e=t.audio,a=t.artist;return Object(O.jsxs)("div",{className:"carr__playerContainer",children:[Object(O.jsx)("p",{className:"carr__legend",children:a}),Object(O.jsx)("i",{onClick:function(t){t.target.parentNode.querySelector("audio").play()},className:"fas fa-play-circle carr__playerPlay"}),Object(O.jsx)("i",{onClick:function(t){t.target.parentNode.querySelector("audio").pause()},className:"far fa-pause-circle carr__playerPause"}),Object(O.jsx)("p",{className:"carr__subtitle",children:"Prueba de sonido"}),Object(O.jsx)("audio",{className:"carr__audio",src:e})]})},h=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(O.jsx)(u.Carousel,{showThumbs:!1,autoPlay:!0,interval:5e3,infiniteLoop:!0,transitionTime:1e3,onChange:function(){document.querySelectorAll("audio").forEach((function(t){t.pause(),t.currentTime=0}))},children:g.map((function(t,e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{alt:t.artist,src:t.image,className:"carr__image"}),Object(O.jsx)(f,{audio:t.audio,artist:t.artist})]},e)}))})}}]),a}(i.Component),x=a(14),_=a.p+"static/media/strato.013c25f2.jpg",v=[{id:Date.now(),title:"guitar",description:"stratocaster",price:19999,pictureUrl:_},{id:Date.now(),title:"guitar",description:"stratocaster",price:19999,pictureUrl:_},{id:Date.now(),title:"guitar",description:"stratocaster",price:19999,pictureUrl:_},{id:Date.now(),title:"guitar",description:"stratocaster",price:19999,pictureUrl:_},{id:Date.now(),title:"guitar",description:"stratocaster",price:19999,pictureUrl:_},{id:Date.now(),title:"guitar",description:"stratocaster",price:19999,pictureUrl:_},{id:Date.now(),title:"guitar",description:"stratocaster",price:19999,pictureUrl:_},{id:Date.now(),title:"guitar",description:"stratocaster",price:19999,pictureUrl:_},{id:Date.now(),title:"guitar",description:"stratocaster",price:19999,pictureUrl:_},{id:Date.now(),title:"guitar",description:"stratocaster",price:19999,pictureUrl:_},{id:Date.now(),title:"guitar",description:"stratocaster",price:19999,pictureUrl:_}],N=new Promise((function(t,e){setTimeout((function(){t(v)}),2e3)})),y=a(16),w=function(t){var e=t.title,a=t.description,i=t.price,r=t.pictureUrl;return console.log(e),Object(O.jsxs)("div",{className:"product__card",children:[Object(O.jsx)("img",{className:"product__img",src:r,alt:""}),Object(O.jsx)("p",{children:e}),Object(O.jsxs)("p",{children:["$",i]}),Object(O.jsx)("p",{children:a})]})},U=function(t){var e=t.products;return Object(O.jsx)(O.Fragment,{children:e.map((function(t,e){return Object(O.jsx)(w,Object(y.a)({},t))}))})},D=(a(32),function(t){t.greeting;var e=Object(i.useState)([]),a=Object(x.a)(e,2),r=a[0],c=a[1];return Object(i.useEffect)((function(){N.then((function(t){return c(t)}))}),[]),console.log(r),Object(O.jsx)("main",{className:"main__container",children:Object(O.jsx)(U,{products:r})})}),C=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("i",{className:"fas fa-shopping-cart navbar__cart"})})},P=(a(33),a.p+"static/media/guitar.9957837d.png"),S=function(){return Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsxs)("div",{className:"navbar__container",children:[Object(O.jsx)("img",{className:"navbar__logo",src:P,alt:"logo gtring"}),Object(O.jsx)("h1",{children:"Gtring"})]}),Object(O.jsx)("i",{className:"fas fa-bars navbar__menu"}),Object(O.jsxs)("ul",{className:"navbar__listItem",children:[Object(O.jsx)("a",{href:"/",children:Object(O.jsx)("li",{className:"navbar__item",children:"Fender"})}),Object(O.jsx)("a",{href:"/",children:Object(O.jsx)("li",{className:"navbar__item",children:"Otras"})}),Object(O.jsx)("a",{href:"/",children:Object(O.jsx)("li",{className:"navbar__item ",children:"Gibson"})})]}),Object(O.jsxs)("form",{className:"navbar__form",children:[Object(O.jsx)("input",{className:"navbar__search",placeholder:"Buscar",type:"text"}),Object(O.jsx)("i",{className:"fas fa-search  navbar__icon-search"})]}),Object(O.jsx)(C,{})]})};var k=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(S,{}),Object(O.jsx)(h,{}),Object(O.jsx)(D,{greeting:"Productos"})]})};c.a.render(Object(O.jsx)(k,{}),document.getElementById("root"))},9:function(t,e,a){}},[[34,1,2]]]);
//# sourceMappingURL=main.15f3c9d7.chunk.js.map