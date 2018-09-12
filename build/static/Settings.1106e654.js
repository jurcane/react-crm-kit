(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{2298:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PureSettings=void 0;var n,r,s,o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();t.mapState2Props=v;var l=a(1),i=g(l),c=g(a(0)),d=a(141),u=a(192),p=g(a(839)),f=a(191),m=a(54),h=g(a(278));a(2297);var w=g(a(77));function g(e){return e&&e.__esModule?e:{default:e}}function y(e,t,a,n,r){var s={};return Object.keys(n).forEach(function(e){s[e]=n[e]}),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=a.slice().reverse().reduce(function(a,n){return n(e,t,a)||a},s),r&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(r):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(e,t,s),s=null),s}var P=[{value:"zh-Hans",label:"中文"},{value:"en-US",label:"English"}],b={lang:c.default.string,dispatch:c.default.func};function v(e){return{lang:(e.app||{}).locales.lang}}var _=t.PureSettings=(s=r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={oldPassword:"",newPassword:"",confirmPassword:""},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"handleLangChange",value:function(e){this.logger.log(e),this.props.dispatch(h.default.switchLang(e))}},{key:"handleSubmit",value:function(){var e=this,t=this.state,a=t.oldPassword,n=t.newPassword,r=t.confirmPassword,s={};a?n?n===r&&n?(s.newer=n,s.origin=a,w.default.authPassword(s).then(function(t){e.logger.log(t),m.message.success("Change Password Success!"),e.setState({newPassword:"",oldPassword:"",confirmPassword:""})}).catch(function(e){m.message.error(e.message)})):m.message.error("Confirm Password do not math!"):m.message.error("Please Input New Password"):m.message.error("Please Input Old Password")}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.handleSubmit()}},{key:"handlePwdChange",value:function(e,t){var a,n,r;this.setState((a={},n=t,r=e.target.value,n in a?Object.defineProperty(a,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[n]=r,a))}},{key:"renderLang",value:function(){return i.default.createElement("div",{className:"c-form c-form-group"},i.default.createElement("legend",{className:"s-setcommon__root"},"Language Change"),i.default.createElement("span",{className:"s-setcommon__item"},i.default.createElement(m.Select.Simple,{name:"form-field-name",value:this.props.lang,clearable:!1,options:P,onChange:this.handleLangChange})))}},{key:"render",value:function(){var e=this.state,t=e.oldPassword,a=e.newPassword,n=e.confirmPassword;return i.default.createElement(p.default,{className:"s-settings"},i.default.createElement(p.default.Body,null,i.default.createElement("div",{className:"c-form  c-form-group"},i.default.createElement("legend",{className:"s-setscy__root"},"Change Password"),i.default.createElement("div",{className:"s-setscy__line"},i.default.createElement("label",{htmlFor:"oldPassword"},"Old Password             "),i.default.createElement(m.Input,{id:"oldPassword",type:"password",placeholder:"Old Password",className:"s-setscy__input s-query__item",value:t,onChange:this.handlePwdChange})),i.default.createElement("div",{className:"s-setscy__line"},i.default.createElement("label",{htmlFor:"newPassword"},"New Password          "),i.default.createElement(m.Input,{id:"newPassword",type:"password",placeholder:"New Password",className:" s-setscy__input s-query__item",value:a,onChange:this.handlePwdChange})),i.default.createElement("div",{className:"s-setscy__line"},i.default.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password     "),i.default.createElement(m.Input,{id:"confirmPassword",type:"password",placeholder:"Confirm New Password",className:"s-setscy__input s-query__item",value:n,onChange:this.handlePwdChange,onKeyPress:this.handleKeyPress})),i.default.createElement(m.Button,{type:"primary",onClick:this.handleSubmit},"Submit"))))}}]),t}(),r.propTypes=b,y((n=s).prototype,"handleLangChange",[d.bind],Object.getOwnPropertyDescriptor(n.prototype,"handleLangChange"),n.prototype),y(n.prototype,"handleSubmit",[d.bind],Object.getOwnPropertyDescriptor(n.prototype,"handleSubmit"),n.prototype),y(n.prototype,"handleKeyPress",[d.bind],Object.getOwnPropertyDescriptor(n.prototype,"handleKeyPress"),n.prototype),y(n.prototype,"handlePwdChange",[d.bind],Object.getOwnPropertyDescriptor(n.prototype,"handlePwdChange"),n.prototype),n);t.default=(0,u.connect)(v)((0,f.containerInject)(_))}}]);
//# sourceMappingURL=Settings.1106e654.js.map