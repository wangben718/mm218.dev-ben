(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2rMq":function(e,t,n){var o;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return a}.call(t,n,t,e))||(e.exports=o)}()},E6xs:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("7oih");n("91GP");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=n("17x9"),g=n.n(h),f=n("dAtF"),j=n.n(f),w=n("2rMq"),O=n.n(w),y="https://platform.twitter.com/widgets.js";d(function(e){function t(e){var n;return i(this,t),(n=p(this,u(t).call(this,e))).state={isLoading:!0},n}return b(t,e),s(t,[{key:"buildChromeOptions",value:function(e){return e.chrome="",this.props.noHeader&&(e.chrome=e.chrome+" noheader"),this.props.noFooter&&(e.chrome=e.chrome+" nofooter"),this.props.noBorders&&(e.chrome=e.chrome+" noborders"),this.props.noScrollbar&&(e.chrome=e.chrome+" noscrollbar"),this.props.transparent&&(e.chrome=e.chrome+" transparent"),e}},{key:"buildOptions",value:function(){var e=Object.assign({},this.props.options);return this.props.autoHeight&&(e.height=this.refs.embedContainer.parentNode.offsetHeight),e=Object.assign({},e,{theme:this.props.theme,linkColor:this.props.linkColor,borderColor:this.props.borderColor,lang:this.props.lang})}},{key:"renderWidget",value:function(e){var t=this,n=this.props.onLoad;this.isMountCanceled||window.twttr.widgets.createTimeline({sourceType:this.props.sourceType,screenName:this.props.screenName,userId:this.props.userId,ownerScreenName:this.props.ownerScreenName,slug:this.props.slug,id:this.props.id||this.props.widgetId,url:this.props.url},this.refs.embedContainer,e).then((function(e){t.setState({isLoading:!1}),n&&n(e)}))}},{key:"componentDidMount",value:function(){var e=this;O.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){if(window.twttr){var t=e.buildOptions();t=e.buildChromeOptions(t),e.renderWidget(t)}else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{sourceType:g.a.oneOf(["profile","likes","list","collection","url","widget"]).isRequired,screenName:j()(g.a.string,(function(e){return!e.hasOwnProperty("userId")&&("profile"===e.sourceType||"likes"===e.sourceType)})),userId:j()(g.a.number,(function(e){return!e.hasOwnProperty("screenName")&&("profile"===e.sourceType||"likes"===e.sourceType)})),ownerScreenName:j()(g.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),slug:j()(g.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),id:j()(g.a.oneOfType([g.a.number,g.a.string]),(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("ownerScreenName")&&!e.hasOwnProperty("slug")||"collection"===e.sourceType})),url:j()(g.a.string,(function(e){return"url"===e.sourceType})),widgetId:j()(g.a.string,(function(e){return"widget"===e.sourceType})),options:g.a.object,autoHeight:g.a.bool,theme:g.a.oneOf(["dark","light"]),linkColor:g.a.string,borderColor:g.a.string,noHeader:g.a.bool,noFooter:g.a.bool,noBorders:g.a.bool,noScrollbar:g.a.bool,transparent:g.a.bool,lang:g.a.string,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),d(function(e){function t(e){var n;return i(this,t),(n=p(this,u(t).call(this,e))).state={isLoading:!0},n}return b(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createShareButton(e.props.url,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterShareButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{url:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),d(function(e){function t(e){var n;return i(this,t),(n=p(this,u(t).call(this,e))).state={isLoading:!0},n}return b(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createFollowButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{screenName:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),d(function(e){function t(e){var n;return i(this,t),(n=p(this,u(t).call(this,e))).state={isLoading:!0},n}return b(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createHashtagButton(e.props.tag,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{tag:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),d(function(e){function t(e){var n;return i(this,t),(n=p(this,u(t).call(this,e))).state={isLoading:!0},n}return b(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMentionButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{screenName:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func});var v=function(e){function t(e){var n;return i(this,t),(n=p(this,u(t).call(this,e))).state={isLoading:!0},n}return b(t,e),s(t,[{key:"renderWidget",value:function(){var e=this,t=this.props.onLoad;window.twttr?this.isMountCanceled||window.twttr.widgets.createTweet(this.props.tweetId,this.refs.embedContainer,this.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.")}},{key:"componentDidMount",value:function(){var e=this;O.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){e.renderWidget()}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component);d(v,"propTypes",{tweetId:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),d(function(e){function t(e){var n;return i(this,t),(n=p(this,u(t).call(this,e))).state={isLoading:!0},n}return b(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMoment(e.props.momentId,e.refs.shareMoment,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"shareMoment"}))}}]),t}(o.Component),"propTypes",{momentId:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),d(function(e){function t(e){var n;return i(this,t),(n=p(this,u(t).call(this,e))).state={isLoading:!0},n}return b(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createDMButton(e.props.id,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterDMButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{id:g.a.number.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),d(function(e){function t(e){var n;return i(this,t),(n=p(this,u(t).call(this,e))).state={isLoading:!0},n}return b(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createVideo(e.props.id,e.refs.embedContainer).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{id:g.a.string.isRequired,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func}),d(function(e){function t(e){var n;return i(this,t),(n=p(this,u(t).call(this,e))).state={isLoading:!0},n}return b(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;O.a.canUseDOM&&n("ojxP")(y,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createPeriscopeOnAirButton(e.props.username,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{username:g.a.string.isRequired,options:g.a.object,placeholder:g.a.oneOfType([g.a.string,g.a.element]),onLoad:g.a.func});var N=n("YIkO"),k=n.n(N),C=n("+22N"),M=(n("Zt1/"),n("obyI")),x=n.n(M),T=n("qKvR");var L=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).state={tabs:[{content:"Portfolio",href:"about"},{content:"Maps",href:"maps"},{content:"Generative",href:"generative"},{content:"Experimental",href:"experimental"}],isCollapsed:!0},n.toggleNavbar=n.toggleNavbar.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},r.render=function(){var e=this.state,t=e.tabs,n=e.isCollapsed;return Object(T.c)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top border border-dark",id:"sideNav"},Object(T.c)("a",{className:"navbar-brand",href:"#page-top"},Object(T.c)("span",{className:"d-block d-lg-none"},x.a.firstName," ",x.a.lastName)),Object(T.c)("button",{className:"navbar-toggler navbar-toggler-right "+(n?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},Object(T.c)("span",{className:"navbar-toggler-icon"})),Object(T.c)("div",{className:"collapse navbar-collapse "+(n?"":"show"),id:"navbarSupportedContent"},Object(T.c)(k.a,{items:t.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},t.map((function(e,t){var n=e.href,o=e.content;return Object(T.c)("li",{className:"nav-item",key:n},Object(T.c)(C.a,{type:"id",element:n},Object(T.c)("a",{className:"nav-link",href:""+n},o)))})))))},o}(o.Component);t.default=function(){return Object(T.c)(a.a,null,Object(T.c)(L,null),Object(T.c)("div",{className:"container-fluid p-0"},Object(T.c)("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},Object(T.c)("div",{className:"w-100"},Object(T.c)("h1",{className:"mb-0"},"Portfolio"),Object(T.c)("div",{className:"subheading mb-5"},"Mike Mahoney · Digital Art ·",Object(T.c)("a",{href:"mailto:"+x.a.email},x.a.email),Object(T.c)("p",null,Object(T.c)("a",{href:"/"},"Back to the main site"))))),Object(T.c)("hr",{className:"m-0"}),Object(T.c)("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"maps"},Object(T.c)("div",{className:"w-100"},Object(T.c)("h2",{className:"mb-5"},"Maps"),Object(T.c)("div",null,Object(T.c)("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},Object(T.c)("div",{className:"resume-content"},Object(T.c)("h3",{className:"mb-0"},Object(T.c)("a",{href:"https://github.com/mikemahoney218/spacey"},"spacey")),Object(T.c)("p",null,"Maps generated using the ",Object(T.c)("a",{href:"https://github.com/mikemahoney218/spacey"},"spacey "),"library to make maps with ",Object(T.c)("a",{href:"https://github.com/tylermorganwall/rayshader"},"rayshader. "),"Note that the maps are pretty compressed to help the website load faster -- if you're looking for prints,",Object(T.c)("a",{href:"https://www.redbubble.com/people/mm218/shop"}," check out my store on RedBubble.")),Object(T.c)("br",null),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Mt. Washington"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/washington.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/washington.webp",type:"image/webp"}),Object(T.c)("img",{alt:"An abstract map of Mt. Katahdin",src:"../img/portfolio/washington.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Mt. Katahadin"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/katahdin.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/katahdin.webp",type:"image/webp"}),Object(T.c)("img",{alt:"An abstract map of Mt. Katahdin",src:"../img/portfolio/katahdin.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Mt. Marcy"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/marcy.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/marcy.webp",type:"image/webp"}),Object(T.c)("img",{alt:"An abstract map of Mt. Marcy",src:"../img/portfolio/marcy.jpg",type:"image/jpeg"}))))),Object(T.c)("br",null),Object(T.c)("div",{className:"resume-date text-md-right"},Object(T.c)("a",{href:"https://www.redbubble.com/people/mm218/shop",className:"text-primary"},"Check it out on RedBubble"),Object(T.c)("br",null),Object(T.c)("a",{href:"https://github.com/mikemahoney218/spacey",className:"text-primary"},"spacey on GitHub")))),Object(T.c)("br",null),Object(T.c)("hr",{className:"m-0"}),Object(T.c)("br",null),Object(T.c)("div",null,Object(T.c)("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},Object(T.c)("div",{className:"resume-content"},Object(T.c)("h3",{className:"mb-0"},"Other Maps"),Object(T.c)("br",null),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Albany, NY"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/albany.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/albany.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A monochromatic map of Albany",src:"../img/portfolio/albany.jpg",type:"image/jpeg"})))),Object(T.c)("div",{className:"subheading mb-3"},"Atlanta, GA"),Object(T.c)("p",null,Object(T.c)("a",{target:"_blank",href:"../img/portfolio/atlanta.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/atlanta.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A monochromatic map of Atlanta",src:"../img/portfolio/atlanta.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Boston, MA"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/boston.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/boston.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A monochromatic map of Boston",src:"../img/portfolio/boston.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Bozeman, MT"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/bozeman.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/bozeman.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A monochromatic map of Bozeman",src:"../img/portfolio/bozeman.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Pittsburgh, PA"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/pittsburgh.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/pittsburgh.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A monochromatic map of Pittsburgh",src:"../img/portfolio/pittsburgh.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Philadelphia, PA"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/philadelphia.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/philadelphia.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A monochromatic map of Philadelphia",src:"../img/portfolio/philadelphia.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Rochester, NY"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/rochester.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/rochester.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A monochromatic map of Rochester",src:"../img/portfolio/rochester.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Syracuse, NY"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/syracuse.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/syracuse.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A monochromatic map of Syracuse",src:"../img/portfolio/syracuse.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Las Vegas, NV"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/vegas.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/vegas.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A monochromatic map of Las Vegas",src:"../img/portfolio/vegas.jpg",type:"image/jpeg"}))))),Object(T.c)("br",null),Object(T.c)("div",{className:"resume-date text-md-right"},Object(T.c)("a",{href:"https://www.redbubble.com/people/mm218/shop",className:"text-primary"},"Check it out on RedBubble")))),Object(T.c)("br",null))),Object(T.c)("br",null),Object(T.c)("hr",{className:"m-0"}),Object(T.c)("br",null),Object(T.c)("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"generative"},Object(T.c)("div",{className:"w-100"},Object(T.c)("h2",{className:"mb-5"},"Generative Art"),Object(T.c)("div",null,Object(T.c)("div",{className:"subheading mb-3"},"Frost on a Windshield"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/frost.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/frost.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A Worley-noise pattern edited to be much higher contrast",src:"../img/portfolio/frost.jpg",type:"image/jpeg"}))),Object(T.c)("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},Object(T.c)("div",{className:"resume-content"},Object(T.c)("h3",{className:"mb-0"},Object(T.c)("a",{href:"https://mm218.shinyapps.io/have_a_tree/"},"Can I Offer You a Tree in this Trying Time?")),Object(T.c)("p",null,"Geometric patterns created using ",Object(T.c)("a",{href:"https://mm218.shinyapps.io/have_a_tree/"}," an interactive shiny app. ")),Object(T.c)("br",null),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Clear Directions"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/arrow_bg.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/arrow_bg.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A geometric pattern in the shape of arrows",src:"../img/portfolio/arrow_bg.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"City Streets"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/cst.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/cst.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A geometric pattern in the shape of squares",src:"../img/portfolio/cst.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Treeangle"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/tree.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/tree.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A geometric pattern in the shape of a tree",src:"../img/portfolio/tree.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Going Somewhere"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/tree7.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/tree7.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A geometric pattern in the shape of hexagons",src:"../img/portfolio/tree7.jpg",type:"image/jpeg"})))),Object(T.c)("p",null,Object(T.c)("div",{className:"subheading mb-3"},"Nautilus"),Object(T.c)("a",{target:"_blank",href:"../img/portfolio/tree8.jpg"},Object(T.c)("picture",null,Object(T.c)("source",{srcset:"../img/portfolio/tree8.webp",type:"image/webp"}),Object(T.c)("img",{alt:"A geometric pattern in the shape of curved lines",src:"../img/portfolio/tree8.jpg",type:"image/jpeg"}))))),Object(T.c)("br",null),Object(T.c)("div",{className:"resume-date text-md-right"},Object(T.c)("a",{href:"https://www.redbubble.com/people/mm218/shop",className:"text-primary"},"Check it out on RedBubble"),Object(T.c)("br",null),Object(T.c)("a",{href:"https://mm218.shinyapps.io/have_a_tree/",className:"text-primary"},"Play with the app")))),Object(T.c)("br",null))),Object(T.c)("br",null),Object(T.c)("hr",{className:"m-0"}),Object(T.c)("br",null),Object(T.c)("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experimental"},Object(T.c)("div",{className:"w-100"},Object(T.c)("h2",{className:"mb-5"},"Experimental"),Object(T.c)("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},Object(T.c)("div",{className:"resume-content"},Object(T.c)("h3",{className:"mb-0"},Object(T.c)("a",{href:"https://twitter.com/fortunes_teller",className:"text-primary"},"@fortunes_teller")),Object(T.c)("p",null,'A human-curated AI tweetbot created by training the GPT-2 355M model against "fortunes" packages from various Linux distros. Began running in May 2020.')),Object(T.c)("br",null),Object(T.c)("div",{className:"resume-date text-md-right"},Object(T.c)("a",{href:"https://twitter.com/fortunes_teller",className:"text-primary"},"See it in action"),Object(T.c)("br",null),Object(T.c)("a",{href:"https://github.com/mikemahoney218/fortunes_teller",className:"text-primary"},"See the code"))),Object(T.c)("div",{className:"resume-item d-flex col-lg flex-md-row justify-content-between mb-5"},Object(T.c)("div",{className:"resume-content"},Object(T.c)(v,{tweetId:"1260738147647918081"}),Object(T.c)(v,{tweetId:"1261294163343159300"}),Object(T.c)(v,{tweetId:"1261629139125182465"})),Object(T.c)("div",{className:"resume-content"},Object(T.c)(v,{tweetId:"1261766168102256641"}),Object(T.c)(v,{tweetId:"1261690038452174850"}),Object(T.c)(v,{tweetId:"1261659590036520961"}))),Object(T.c)("br",null),Object(T.c)("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},Object(T.c)("div",{className:"resume-content"},Object(T.c)("h3",{className:"mb-0"},Object(T.c)("a",{href:"https://twitter.com/fund_me_please_",className:"text-primary"},"@fund_me_please_")),Object(T.c)("p",null,"An tweetbot created by training the GPT-2 355M model against ~150 Graduate Research Fellowship Program personal statements, with the outputs representing a surreal fun-house-mirror take on what we think review boards want us to be. Began running in September 2020.")),Object(T.c)("br",null),Object(T.c)("div",{className:"resume-date text-md-right"},Object(T.c)("a",{href:"https://twitter.com/fund_me_please_",className:"text-primary"},"See it in action"),Object(T.c)("br",null))))),Object(T.c)("hr",{className:"m-0"})))}},dAtF:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n,o){return"boolean"==typeof e?e:"function"==typeof e?e(t,n,o):!(!0!=!!e||!e)},r=function(e,t){return Object.hasOwnProperty.call(e,t)},a=function(e,t,n,o){return o?new Error(o):new Error("Required "+e[t]+" `"+t+"` was not specified in `"+n+"`.")};t.default=function(e,t,n){return function(e,t){if("function"!=typeof e)throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");if(t&&"string"!=typeof t)throw new TypeError("The error message is optional, but must be a string if provided.")}(e,n),function(i,c,s){for(var l=arguments.length,p=Array(3<l?l-3:0),u=3;u<l;u++)p[u-3]=arguments[u];return o(t,i,c,s)?r(i,c)?e.apply(void 0,[i,c,s].concat(p)):a(i,c,s,n):e.apply(void 0,[i,c,s].concat(p))}}},ojxP:function(e,t,n){var o,r,a;n("V+eJ"),n("KKXr"),a=function(){var e,t,n=document,o=n.getElementsByTagName("head")[0],r={},a={},i={},c={};function s(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return!1;return 1}function l(e,t){s(e,(function(e){return t(e),1}))}function p(t,n,o){t=t.push?t:[t];var m=n&&n.call,b=m?n:o,d=m?t.join(""):n,h=t.length;function g(e){return e.call?e():r[e]}function f(){if(!--h)for(var e in r[d]=1,b&&b(),i)s(e.split("|"),g)&&!l(i[e],g)&&(i[e]=[])}return setTimeout((function(){l(t,(function t(n,o){return null===n?f():(o||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),c[n]?(d&&(a[d]=1),2==c[n]?f():setTimeout((function(){t(n,!0)}),0)):(c[n]=1,d&&(a[d]=1),void u(n,f)))}))}),0),p}function u(e,r){var a,i=n.createElement("script");i.onload=i.onerror=i.onreadystatechange=function(){i.readyState&&!/^c|loade/.test(i.readyState)||a||(i.onload=i.onreadystatechange=null,a=1,c[e]=2,r())},i.async=1,i.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,o.insertBefore(i,o.lastChild)}return p.get=u,p.order=function(e,t,n){!function o(r){r=e.shift(),e.length?p(r,o):p(r,t,n)}()},p.path=function(t){e=t},p.urlArgs=function(e){t=e},p.ready=function(e,t,n){e=e.push?e:[e];var o,a=[];return!l(e,(function(e){r[e]||a.push(e)}))&&s(e,(function(e){return r[e]}))?t():(o=e.join("|"),i[o]=i[o]||[],i[o].push(t),n&&n(a)),p},p.done=function(e){p([null],e)},p},e.exports?e.exports=a():void 0===(r="function"==typeof(o=a)?o.call(t,n,t,e):o)||(e.exports=r)}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-958c445a940797f13daf.js.map