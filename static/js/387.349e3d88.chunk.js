"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,a,c,o,i,u,s,p,f=e(5861),d=e(9439),l=e(4687),h=e.n(l),x=e(2791),g=e(7689),m=e(4390),v=e(168),w=e(7924),Z=w.ZP.div(r||(r=(0,v.Z)(["\n  margin-top: 30px;\n  padding-right: 80px;\n  padding-left: 80px;\n  padding-bottom: 40px;\n"]))),b=w.ZP.h3(a||(a=(0,v.Z)(["\n  font-size: 25px;\n  font-weight: 500;\n  text-align: center;\n"]))),k=w.ZP.ul(c||(c=(0,v.Z)(["\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  flex-wrap: wrap;\n"]))),y=w.ZP.li(o||(o=(0,v.Z)(["\n  width: calc((100% - 4 * 40px) / 5);\n  height: 400px;\n  word-wrap: break-word;\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.3s ease;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),_=w.ZP.img(i||(i=(0,v.Z)(["\n  border-radius: 15px;\n  object-fit: cover;\n"]))),j=w.ZP.div(u||(u=(0,v.Z)(["\n  margin-top: 20px;\n  max-width: 220px;\n"]))),P=w.ZP.h3(s||(s=(0,v.Z)(["\n  margin-bottom: 10px;\n"]))),S=w.ZP.p(p||(p=(0,v.Z)(["\n  margin: 30px auto 0 auto;\n  text-align: center;\n  padding: 20px;\n  background-color: #f8f8f8;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n"]))),U=e(184),C=function(){var n=(0,g.UO)().movieId,t=(0,x.useState)([]),e=(0,d.Z)(t,2),r=e[0],a=e[1];return(0,x.useEffect)((function(){var t=function(){var t=(0,f.Z)(h().mark((function t(){var e,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,m.uV)(n);case 3:e=t.sent,r=e.cast,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,U.jsxs)(Z,{children:[(0,U.jsx)(b,{children:"Cast"}),r.length?(0,U.jsx)(k,{children:r.map((function(n){return(0,U.jsxs)(y,{className:"cast-card",children:[n.profile_path?(0,U.jsx)(_,{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:"".concat(n.name," profile")}):(0,U.jsx)(_,{src:"https://via.placeholder.com/200x300?text=No+Image",alt:"".concat(n.name," profile")}),(0,U.jsxs)(j,{children:[(0,U.jsx)(P,{children:n.name}),(0,U.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))}):(0,U.jsx)(S,{children:"We don't have any information about the cast yet."})]})}},4390:function(n,t,e){e.d(t,{E3:function(){return p},Hx:function(){return l},Mc:function(){return f},_k:function(){return s},uV:function(){return d}});var r=e(5861),a=e(4687),c=e.n(a),o=e(5294),i="https://api.themoviedb.org",u="c94d8e5ef8b4fe69956b21ebd01a6f37",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/3/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/3/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/3/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/3/movie/").concat(t,"}/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.349e3d88.chunk.js.map