(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{cAhR:function(n,t,e){"use strict";e.r(t);var o=e("ODXe"),r=e("h4VS"),i=e("q1tI"),a=e.n(i),c=e("vOnD"),u=e("wd/R"),l=e.n(u),d=e("nOHt"),s=e("8Kt/"),f=e.n(s),b=e("jdwX"),p=e("YFqc"),h=e.n(p),m=e("hd/a"),j=e("ff+w"),O=e("d+M8"),g=e("rQ2n"),w=e("xY5u"),x=e("lHlY"),v=e("pRT7"),S=a.a.createElement;function Y(){var n=Object(r.a)(["\n  p {\n    margin-bottom: 1em;\n  }\n"]);return Y=function(){return n},n}function H(){var n=Object(r.a)(["\n  color: ",";\n  display: inline-block;\n  border: 3px solid ",";\n  padding: 10px;\n  border-radius: 5px;\n  margin-top: 10px;\n"]);return H=function(){return n},n}function k(){var n=Object(r.a)(["\n  padding: 20px;\n  background-color: ",";\n  color: white;\n  line-height: 1.3em;\n  margin-bottom: 60px;\n\n  @media screen and (min-width: 991px) {\n    float: right;\n    width: calc(60% - 40px);\n  }\n\n  li {\n    list-style: inside;\n    margin-bottom: 10px;\n  }\n"]);return k=function(){return n},n}function _(){var n=Object(r.a)(["\n  padding: 20px;\n  background-color: ",";\n  color: white;\n  line-height: 1.3em;\n  margin-bottom: 60px;\n\n  @media screen and (min-width: 991px) {\n    float: left;\n    width: calc(40% - 40px);\n  }\n"]);return _=function(){return n},n}function E(){var n=Object(r.a)(["\n  font-size: 30px;\n  line-height: 1.5em;\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n\n  @media screen and (min-width: 768px) {\n    font-size: 90px;\n  }\n"]);return E=function(){return n},n}function T(){var n=Object(r.a)(["\n  height: 200px;\n  position: relative;\n  background-color: ",";\n  color: white;\n  text-decoration: none;\n\n  @media screen and (min-width: 768px) {\n    height: 500px;\n  }\n"]);return T=function(){return n},n}var y=c.a.div(T(),(function(n){return n.colour})),M=c.a.h2(E()),q=c.a.div(_(),(function(n){return n.colour})),R=c.a.div(k(),(function(n){return n.colour})),D=c.a.a(H(),(function(n){return n.colour}),(function(n){return n.colour})),L=c.a.div(Y());t.default=function(){var n=Object(i.useState)(!0),t=n[0],e=n[1],r=Object(i.useState)(""),c=r[0],u=r[1],s=Object(i.useState)(""),p=s[0],Y=s[1],H=Object(i.useState)(""),k=H[0],_=H[1],E=Object(i.useState)(""),T=E[0],X=E[1],F=Object(i.useState)(""),z=F[0],A=F[1],C=Object(i.useState)(""),I=C[0],J=C[1],N=Object(i.useState)(""),P=N[0],V=N[1],G=Object(i.useState)(""),K=G[0],Q=G[1],B=Object(i.useState)(""),U=B[0],W=B[1],Z=Object(d.useRouter)().query.id;return Object(i.useEffect)((function(){Z&&W(Z.split(" ").join("-").split("%20").join("-").toLowerCase())}),[Z]),Object(i.useEffect)((function(){0!==U.length&&Object(v.c)("data/events/".concat(U,".json")).then((function(n){var t=Object(v.b)(Object(v.g)(n)),r=Object(o.a)(t,3),i=r[0],a=r[1],c=r[2];J(i),V(a),Q(c),_(l()(n.dateTime).format("dddd DD MMM YYYY")),X(l()(n.dateTime).format("HH:mm")),u(n.title),Y(n.image),A(n.article),e(!1)}))}),[U]),Z?t?null:S(a.a.Fragment,null,S(f.a,null,S("title",{key:"title"},c," - Gateway Church, York")),S(m.a,{colour:I,colourHex:P,colourHexLight:K,Header:O.a}),S("main",null,S(y,{colour:P},S(w.a,{url:Object(v.d)(p)}),S(M,null,c)),S(g.a,null,S(q,{colour:K},S("div",null,k),S("div",null,T)),S(R,{colour:P},z&&S(a.a.Fragment,null,S(L,{dangerouslySetInnerHTML:{__html:b.markdown.toHTML(z)}}),S(h.a,{href:"/events",passHref:!0},S(D,{colour:K},"View a list of all events")))),S(x.a,null))),S(j.a,null)):null}},jEqY:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[id]",function(){return e("cAhR")}])}},[["jEqY",0,1,6,5,2,3,4,9,7]]]);