(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/1.c8a63cea.jpg"},function(e,t,n){e.exports=n.p+"static/media/2.6cd1e235.jpg"},function(e,t,n){e.exports=n.p+"static/media/3.a7334f08.jpg"},function(e,t,n){e.exports=n.p+"static/media/logo.c32c161e.png"},function(e,t,n){e.exports=n.p+"static/media/WhoWeAre.7fc12165.jpg"},,function(e,t,n){e.exports=n(27)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(4),l=n.n(i),r=n(2),u=n(1),s=n(10),m=(n(17),n(5)),o=n.n(m),d=n(6),E=n.n(d),f=n(7),b=n.n(f),p=[{img:o.a,title:"We Grow & <br />Sell Organic Fruits",content:"Excepteur sint occaecat cupidatat non proident, <br />\n        sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:E.a,title:"Fresh Produce<br /> Right to Your Door",content:"Excepteur sint occaecat cupidatat non proident, <br />\n        sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:b.a,title:"Natural & <br /> Fresh Fruits Supply",content:"Excepteur sint occaecat cupidatat non proident,<br />\n        sunt in culpa qui officia deserunt mollit anim id est laborum."}],g=function(e,t){var n=Object(a.useState)(0),c=Object(u.a)(n,2),i=c[0],l=c[1];return Object(a.useEffect)(function(){if(e){var n=null,a=null;return n=requestAnimationFrame(function e(c){a||(a=c);var i=c-a;l(i),i<t&&(n=requestAnimationFrame(e))}),function(){return cancelAnimationFrame(n)}}},[e,t]),e?Math.min(i/t,t):0},v=3e3;function h(e){return c.a.createElement("section",Object.assign({className:"Carousel"},e))}function N(e){return c.a.createElement("ul",e)}function O(e){var t=e.isCurrent,n=e.takeFocus,i=e.image,l=e.id,r=e.title,u=e.children,s=Object(a.useRef)();return Object(a.useEffect)(function(){t&&n&&s.current.focus()},[t,n]),c.a.createElement("li",{ref:s,"aria-hidden":!t,tabIndex:"-1","aria-labelledby":l,className:"Slide",style:{backgroundImage:"url(".concat(i,")")}},c.a.createElement("div",{className:"SlideContent"},c.a.createElement("h2",{id:l,dangerouslySetInnerHTML:{__html:r}}),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:u}})))}function w(e){return c.a.createElement("ul",Object.assign({className:"SlideNav"},e))}function j(e){var t=e.isCurrent,n=Object(s.a)(e,["isCurrent"]);return c.a.createElement("li",{className:"SlideNavItem"},c.a.createElement("button",Object.assign({},n,{"aria-current":t}),c.a.createElement("span",null)))}function x(e){var t=e.animate,n=e.time,a=g(t,n);return c.a.createElement("div",{className:"ProgressBar"},c.a.createElement("div",{style:{width:"".concat(100*a,"%")}}))}var y=function(){var e=Object(a.useReducer)(function(e,t){switch(t.type){case"PROGRESS":case"NEXT":return Object(r.a)({},e,{takeFocus:!1,isPlaying:"PROGRESS"===t.type,currentIndex:(e.currentIndex+1)%p.length});case"PREV":return Object(r.a)({},e,{takeFocus:!1,isPlaying:!1,currentIndex:(e.currentIndex-1+p.length)%p.length});case"PLAY":return Object(r.a)({},e,{takeFocus:!1,isPlaying:!0});case"PAUSE":return Object(r.a)({},e,{takeFocus:!1,isPlaying:!1});case"GOTO":return Object(r.a)({},e,{takeFocus:!0,currentIndex:t.index});default:return e}},{currentIndex:0,isPlaying:!0,takeFocus:!1}),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)(function(){if(n.isPlaying){var e=setTimeout(function(){i({type:"PROGRESS"})},v);return function(){return clearTimeout(e)}}},[n.currentIndex,n.isPlaying]),c.a.createElement(h,{"aria-label":"Images from Space"},c.a.createElement(N,null,p.map(function(e,t){return c.a.createElement(O,{key:t,id:"image-".concat(t),image:e.img,title:e.title,isCurrent:t===n.currentIndex,takeFocus:n.takeFocus,children:e.content})})),c.a.createElement(w,null,p.map(function(e,t){return c.a.createElement(j,{key:t,isCurrent:t===n.currentIndex,"aria-label":"Slide ".concat(t+1),onClick:function(){i({type:"GOTO",index:t})}})})),c.a.createElement(x,{key:n.currentIndex+n.isPlaying,time:v,animate:n.isPlaying}))},P=(n(18),n(8)),S=n.n(P),I=(n(19),function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),i=n[0],l=n[1];return c.a.createElement("button",{className:"hamburger",onClick:function(){l(!i)}},c.a.createElement("div",{className:"icon"},c.a.createElement("div",{className:"".concat(i?"icon-container icon-container-active":"icon-container")},c.a.createElement("span",{className:"line"}))),c.a.createElement("span",{className:"title"},"MENU"))}),k=(n(20),function(e){return c.a.createElement("div",{className:"socialIcons"})}),C=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),i=n[0],l=n[1];Object(a.useEffect)(function(){window.addEventListener("scroll",function(e){l(window.scrollY)})},[i]);return c.a.createElement("header",{className:"".concat(i?"isFixed":"")},c.a.createElement("div",{className:"container header-content"},c.a.createElement(I,null),c.a.createElement("a",{href:"/"},c.a.createElement("img",{className:"logo",src:S.a})),c.a.createElement(k,null)))},F=n(9),q=n.n(F),D=(n(21),function(e){return c.a.createElement("div",{className:"whoWeAre"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"main-title"},c.a.createElement("strong",null,"Who")," we are"),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"left__content"},c.a.createElement("h2",null,"welcome to our organic fruit - we serve all types of seasonal fruits"),c.a.createElement("p",null,"Cras blandit nibh ut pretium elementum. Duis bibendum convallis nun cael dictum. Quisquen ac ipsum porta, ultrices metus sit amet, curs in nisl. Dui aliquet varius sem sit amet convallis nun ca dictum. Cras blandit nibh ut pretium elementum. Duis bibendum convallis nun ca dictum aliquet."),c.a.createElement("ul",null,c.a.createElement("li",null,"Duis Bibendum Convallis Blandit Dictum."),c.a.createElement("li",null,"Cras Blandit Nibh Blandit Pretium Dolor Ipsum."),c.a.createElement("li",null,"Bibendum Convallis Nun Ca Dictum Elementum Ipsum Elit."))),c.a.createElement("div",{className:"right__content"},c.a.createElement("img",{src:q.a,alt:"who we are"})))))}),R=(n(22),function(e){return c.a.createElement("div",{className:"howWeWork"},c.a.createElement("div",{className:"container"},c.a.createElement("h3",{class:"heading text-center mb-lg-5 text-white mb-4"},"How We Work"),c.a.createElement("div",{class:"row text-center join agile-info"},c.a.createElement("div",{class:"col-lg-4 col-md-6 steps-reach w3-agile-grid"},c.a.createElement("span",{class:"fa fa-cogs"}),c.a.createElement("h4",null,"Step 1"),c.a.createElement("p",null,"Pretium elementum. Duis bibendum convallis nun ca dictum convallis nun ca dictum. Cras blandit nibh ut aliquet varius sem sit amet convallis.")),c.a.createElement("div",{class:"col-lg-4 col-md-6 mt-md-0 mt-5 steps-reach w3-agile-grid"},c.a.createElement("span",{class:"fa fa-cubes"}),c.a.createElement("h4",null,"Step 2"),c.a.createElement("p",null,"Pretium elementum. Duis bibendum convallis nun ca dictum convallis nun ca dictum. Cras blandit nibh ut aliquet varius sem sit amet convallis.")),c.a.createElement("div",{class:"col-lg-4 col-md-6 mt-lg-0 mt-5 steps-reach w3-agile-grid"},c.a.createElement("span",{class:"fa fa-cart-arrow-down","aria-hidden":"true"}),c.a.createElement("h4",null,"Step 3"),c.a.createElement("p",null,"Pretium elementum. Duis bibendum convallis nun ca dictum convallis nun ca dictum. Cras blandit nibh ut aliquet varius sem sit amet convallis.")))))}),W=(n(23),function(e){return c.a.createElement("div",{className:"ourProducts"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Our Products")))}),_=(n(24),function(e){return c.a.createElement("div",{className:"certificates"},c.a.createElement("div",{className:"container"}))}),A=(n(25),function(e){return c.a.createElement("div",{className:"app"},c.a.createElement(C,null),c.a.createElement(y,null),c.a.createElement("main",null,c.a.createElement(D,null),c.a.createElement(R,null),c.a.createElement(W,null),c.a.createElement(_,null)))});n(26);l.a.render(c.a.createElement(A,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.c89cdb0b.chunk.js.map