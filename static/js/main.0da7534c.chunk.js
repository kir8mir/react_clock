(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),i=c(3),r=c(5),s=c(4),l=c(1),u=(c(12),c(0)),m=function(t){Object(r.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={today:new Date},t.timerId=0,t.timer=function(){t.setState({today:new Date}),console.info(t.state.today.toLocaleTimeString())},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.timer,1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.clockName;this.props.clockName!==e&&console.debug("Renamed from ".concat(e," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsxs)("p",{children:["Click Right Mouse Button to",Object(u.jsx)("strong",{children:" Hide Clock"})]}),Object(u.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.state.today.toLocaleTimeString()})]})}}]),c}(l.Component);function d(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var h=function(t){Object(r.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={clockName:"Clock-0",hasClock:!0},t.timerId=0,t.timerName=function(){t.setState({clockName:d()})},t.hideClock=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.showClock=function(){t.setState({hasClock:!0})},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.timerName,3300),document.addEventListener("contextmenu",this.hideClock),document.addEventListener("click",this.showClock)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.hideClock),document.removeEventListener("click",this.showClock)}},{key:"render",value:function(){var t=this.state,e=t.clockName,c=t.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),c?Object(u.jsx)(m,{clockName:e}):Object(u.jsxs)("p",{children:["Click Left Mouse Button to",Object(u.jsx)("strong",{children:" Show Clock"})]})]})}}]),c}(l.Component);o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0da7534c.chunk.js.map