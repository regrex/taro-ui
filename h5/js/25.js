(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"249":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=n(45),r=_interopRequireDefault(n(46)),o=_interopRequireDefault(n(64)),c=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(250);var u=function(e){function AtNavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtNavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtNavBar.__proto__||Object.getPrototypeOf(AtNavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtNavBar,c.default),a(AtNavBar,[{"key":"handleClickLeftView","value":function handleClickLeftView(){var e;(e=this.props).onClickLeftIcon.apply(e,arguments)}},{"key":"handleClickSt","value":function handleClickSt(){var e;(e=this.props).onClickRgIconSt.apply(e,arguments)}},{"key":"handleClickNd","value":function handleClickNd(){var e;(e=this.props).onClickRgIconNd.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.style,n=e.color,a=e.fixed,r=e.leftIconType,c=e.leftText,u=e.title,s=e.rightFirstIconType,f=e.rightSecondIconType,d="color: "+n+";";return l.default.createElement(i.View,{"className":a?"at-nav-bar at-nav-bar--fixed":"at-nav-bar","style":t},l.default.createElement(i.View,{"className":"at-nav-bar__left_view","onClick":this.handleClickLeftView.bind(this),"style":d},l.default.createElement(o.default,{"value":r}),l.default.createElement(i.Text,{"className":"at-nav-bar__text"},c)),l.default.createElement(i.View,{"className":"at-nav-bar__title"},u),l.default.createElement(i.View,{"className":"at-nav-bar__right_view"},l.default.createElement(i.View,{"className":f?"at-nav-bar__container":"at-nav-bar__container--hide","style":d,"onClick":this.handleClickNd.bind(this)},l.default.createElement(o.default,{"value":f})),l.default.createElement(i.View,{"className":s?"at-nav-bar__container":"at-nav-bar__container--hide","style":d,"onClick":this.handleClickSt.bind(this)},l.default.createElement(o.default,{"value":s}))))}}]),AtNavBar}(),s=function defaultFunc(){};u.defaultProps={"style":"","fixed":!1,"color":"#6190E8","leftIconType":"","leftText":"","title":"","rightFirstIconType":"","rightSecondIconType":"","onClickLeftIcon":s,"onClickRgIconSt":s,"onClickRgIconNd":s},u.propTypes={"style":r.default.oneOfType([r.default.object,r.default.string]),"fixed":r.default.bool,"color":r.default.string,"leftIconType":r.default.string,"leftText":r.default.string,"title":r.default.string,"rightFirstIconType":r.default.string,"rightSecondIconType":r.default.string,"onClickLeftIcon":r.default.func,"onClickRgIconSt":r.default.func,"onClickRgIconNd":r.default.func},t.default=u},"250":function(e,t,n){},"252":function(e,t,n){},"32":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=_interopRequireDefault(n(1)),i=_interopRequireDefault(n(0)),r=n(45),o=_interopRequireDefault(n(249)),c=_interopRequireDefault(n(48));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(252);var u=function(e){function Index(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var a=arguments.length,l=Array(a),i=0;i<a;i++)l[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(l))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,i.default.Component),a(Index,[{"key":"handleClick","value":function handleClick(e){l.default.showToast({"title":e,"duration":2e3,"icon":"success"})}},{"key":"clickReturn","value":function clickReturn(){l.default.showToast({"title":"返回","duration":2e3,"icon":"success"})}},{"key":"clickMy","value":function clickMy(){l.default.showToast({"title":"我的","duration":2e3,"icon":"success"})}},{"key":"clickList","value":function clickList(){l.default.showToast({"title":"功能列表","duration":2e3,"icon":"success"})}},{"key":"render","value":function render(){return i.default.createElement(r.View,{"className":"page"},i.default.createElement(c.default,{"title":"NavBar 导航栏"}),i.default.createElement(r.View,{"className":"doc-body"},i.default.createElement(r.View,{"className":"panel"},i.default.createElement(r.View,{"className":"panel__title"},"基础用法"),i.default.createElement(r.View,{"className":"panel__content no-padding"},i.default.createElement(r.View,{"className":"example-item"},i.default.createElement(o.default,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left"})),i.default.createElement(r.View,{"className":"example-item"},i.default.createElement(o.default,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})),i.default.createElement(r.View,{"className":"example-item"},i.default.createElement(o.default,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left","rightFirstIconType":"user"})))),i.default.createElement(r.View,{"className":"panel"},i.default.createElement(r.View,{"className":"panel__title"},"自定义左上角文案"),i.default.createElement(r.View,{"className":"panel__content no-padding"},i.default.createElement(r.View,{"className":"example-item"},i.default.createElement(o.default,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftText":"返回","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})),i.default.createElement(r.View,{"className":"example-item"},i.default.createElement(o.default,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})))),i.default.createElement(r.View,{"className":"panel"},i.default.createElement(r.View,{"className":"panel__title"},"自定义颜色"),i.default.createElement(r.View,{"className":"panel__content no-padding"},i.default.createElement(o.default,{"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})))))}}]),Index}();t.default=u}}]);