(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a(204)},103:function(e,t,a){e.exports=a.p+"static/media/baize.012af2b4.jpg"},118:function(e,t,a){e.exports=a(202)},127:function(e,t,a){},129:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(1),l=a.n(n),r=a(9),o=a.n(r),c=a(114),i=a(101),u=a.n(i),s=a(211),d=a(22),p=a(23),m=a(25),f=a(24),h=a(26),E=(a(127),a(209)),y=a(53),b=(a(129),a(206)),g=a(205),v=a(103),j=a.n(v),O=a(0),C=a.n(O),k=E.a.Sider,x=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.collapsed;return l.a.createElement(k,{className:"sider",trigger:null,collapsible:!0,breakpoint:"lg",collapsed:e,width:256},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:j.a,alt:"logo"}),l.a.createElement("h1",null,"Dev Tools")),l.a.createElement(b.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},l.a.createElement(b.a.Item,{key:"1"},l.a.createElement(y.a,{type:"key"}),l.a.createElement("span",null,"UUID"),l.a.createElement(g.a,{to:"/uuid"})),l.a.createElement(b.a.Item,{key:"2"},l.a.createElement(y.a,{type:"barcode"}),l.a.createElement("span",null,"Product Code"),l.a.createElement(g.a,{to:"/product"}))))}}]),t}(l.a.Component);x.contextTypes={router:C.a.object};var w=x,B=a(208),M=function(e){var t=e.collapsed,a=e.isMobile,n=e.onClose;return a?l.a.createElement(B.a,{placement:"left",closable:!1,onClose:n,visible:!t,style:{padding:0}},l.a.createElement(w,e)):l.a.createElement(w,e)},I=a(210),S=a(212),U=a(213),A=a(207),D=a(203),N=a(58),T=function(e){return function(t){return function(a){function n(t){var a;return Object(d.a)(this,n),(a=Object(m.a)(this,Object(f.a)(n).call(this,t))).handleCopy=function(e){console.log("copy"),a.setState({copied:!0})},a.handleBulid=function(){console.log("Build");var t=e();a.setState({text:t,copied:!1})},a.state={text:"",copied:!1},a}return Object(h.a)(n,a),Object(p.a)(n,[{key:"render",value:function(){var e=this.state,a=e.text,n=e.copied;return l.a.createElement(t,Object.assign({},this.props,{onBuild:this.handleBulid,onCopy:this.handleCopy,text:a,copied:n}))}}]),n}(l.a.Component)}},W=T(function(){return function(e,t){var a,n,l="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];if(t=t||l.length,e)for(a=0;a<e;a++)r[a]=l[0|Math.random()*t];else for(a=0;a<36;a++)r[a]||(n=0|16*Math.random(),r[a]=l[19===a?3&n|8:n]);return r.join("")}(32,16)})(function(e){var t=e.text,a=e.copied,n=e.onCopy,r=e.onBuild;return l.a.createElement(S.a,{type:"flex",align:"middle",justify:"center",gutter:10},l.a.createElement(U.a,null,l.a.createElement("label",{style:{textAlign:"center"}},"UUID\uff1a")),l.a.createElement(U.a,{span:12},l.a.createElement(A.a,{placeholder:"\u751f\u6210UUID",defaultValue:t,readOnly:!0,addonAfter:l.a.createElement(U.a,null,l.a.createElement(N.CopyToClipboard,{text:t,onCopy:n},l.a.createElement(y.a,{type:a?"check":"copy"})))})),l.a.createElement(U.a,null,l.a.createElement(D.a,{type:"primary",onClick:r},"\u751f\u6210")))}),H=T(function(){for(var e="",t=[],a=0;a<100;a++)t[a]=Math.floor(10*Math.random());e+="690";for(var n=0;n<10;n++)e+=t[Math.floor(100*Math.random())];return e})(function(e){var t=e.text,a=e.copied,n=e.onCopy,r=e.onBuild;return l.a.createElement(S.a,{type:"flex",align:"middle",justify:"center",gutter:10},l.a.createElement(U.a,null,l.a.createElement("label",{style:{textAlign:"center"}},"\u8d27\u54c1\u7801\uff1a")),l.a.createElement(U.a,{span:8},l.a.createElement(A.a,{placeholder:"\u751f\u6210\u8d27\u54c1\u7801",defaultValue:t,readOnly:!0,addonAfter:l.a.createElement(U.a,null,l.a.createElement(N.CopyToClipboard,{text:t,onCopy:n},l.a.createElement(y.a,{type:a?"check":"copy"})))})),l.a.createElement(U.a,null,l.a.createElement(D.a,{type:"primary",onClick:r},"\u751f\u6210")))}),J=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Welcome")}}]),t}(l.a.Component),V=l.a.createElement("div",{className:"container"},l.a.createElement(I.a,{exact:!0,path:"/",component:J}),l.a.createElement(I.a,{path:"/uuid",component:W}),l.a.createElement(I.a,{path:"/product",component:H})),z=E.a.Header,K=E.a.Content,P=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={collapsed:!1},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.onClose=function(){a.setState({collapsed:!0})},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.collapsed;return l.a.createElement(E.a,null,l.a.createElement(M,{collapsed:e,onClose:this.onClose}),l.a.createElement(z,{style:{background:"#fff",padding:0}},l.a.createElement(y.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle})),l.a.createElement(K,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},V))}}]),t}(n.Component),q=u()();o.a.render(l.a.createElement(c.a,{store:q},l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(P,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},204:function(e,t,a){"use strict";a.r(t);var n=a(102),l=a(34),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type,e},o=Object(l.c)({auth:r}),c=a(115);t.default=function(e){return Object(l.d)(o,e,Object(l.a)(n.a,Object(c.a)()))}}},[[118,2,1]]]);
//# sourceMappingURL=main.2b8be60e.chunk.js.map