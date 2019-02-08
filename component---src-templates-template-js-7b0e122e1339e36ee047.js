(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{188:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"pageQuery",function(){return d});n(32);var o=n(6),i=n.n(o),a=n(0),s=(n(208),n(200)),r=n(223),l=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){var e=this.props.data.page;return t.createElement(r.a,{page:Object.assign({},e.fields,e.frontmatter)},t.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))},n}(a.Component);e.default=Object(s.withStyles)(function(t){return{}},{withTheme:!0})(l);var d="2440764513"}.call(this,n(59))},223:function(t,e,n){"use strict";(function(t){n(32),n(61),n(209),n(60),n(210),n(94),n(92),n(91),n(93);var o=n(6),i=n.n(o),a=n(224),s=n(0),r=n.n(s),l=n(208),d=n.n(l),c=n(200),u=n(225),f=(n(234),n(90)),p=n(235),g=n(237),h=n(241),b=n(243),m=n(244),y=n(245),I=function(e){function n(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={open:!0,breakpoint:960},t}i()(n,e);var o=n.prototype;return o.componentDidMount=function(){window.innerWidth<this.state.breakpoint&&this.setState({open:!1})},o.render=function(){var e=this,n=this.props,o=n.children,i=n.classes,a=n.data,s=n.page,l=a.site.siteMetadata,c=function(){e.setState({open:!e.state.open})},u=function(){window.innerWidth<e.state.breakpoint&&e.setState({open:!1})},f={children:{}};return a.menu.edges.forEach(function(t){var e=t.node.fields.slug.split("/").filter(function(t){return t}),n=f;e.forEach(function(t){n.children[t]||(n.children[t]={data:{},children:{}}),n=n.children[t]}),n.data={id:e.join("/"),title:t.node.frontmatter.title,slug:t.node.fields.slug,sort:t.node.frontmatter.sort||99}}),t.createElement("div",{className:i.root},t.createElement(d.a,{title:"NIKITA - "+s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords}]},t.createElement("html",{lang:"en"})),t.createElement(p.a,{breakpoint:this.state.breakpoint,open:this.state.open,onClickModal:c,main:t.createElement(r.a.Fragment,null,t.createElement(g.a,{onMenuClick:c,site:l,open:this.state.open}),t.createElement("div",{className:i.content},t.createElement(h.a,{page:s},o),t.createElement(b.a,{site:l}))),drawer:t.createElement(m.a,null,Object.values(f.children).sort(function(t,e){return t.data.sort>e.data.sort}).map(function(n){return t.createElement(y.a,{key:n.data.slug,menu:n,path:e.state.path,onClickLink:u})}))}))},n}(r.a.Component);e.a=Object(u.a)(Object(c.withStyles)(function(t){return{root:{},content:{backgroundColor:"rgb(242,242,242)",paddingTop:60}}},{withTheme:!0})(function(e){return t.createElement(f.StaticQuery,{query:"2774815564",render:function(n){return t.createElement(I,Object.assign({data:n},e))},data:a})}))}).call(this,n(59))},224:function(t){t.exports={data:{site:{siteMetadata:{title:"Nikita",github:{url:"https://github.com/adaltas/node-nikita",title:"Nikita GitHub Repository"},issues:{url:"https://github.com/adaltas/node-nikita/issues",title:"Report an issue"},footer:[{title:"Navigate",content:null,links:[{label:"Getting started",url:"/about/"},{label:"Usages",url:"/usages/"},{label:"Options",url:"/options/"}],xs:6,sm:3},{title:"Contribute",content:null,links:[{label:"GitHub",url:"https://github.com/adaltas/node-nikita"},{label:"Issue Tracker",url:"https://github.com/adaltas/node-nikita/issues"},{label:"License",url:"/about/license"}],xs:6,sm:3},{title:"About",content:'Nikita is an open source product hosted on <a href="https://www.github.com" target="_blank" rel="noopener">GitHub</a> and developed by <a href="http://www.adaltas.com" target="_blank" rel="noopener">Adaltas</a>.',links:null,xs:12,sm:6}]}},menu:{edges:[{node:{id:"f0342420-5d1a-5183-94ed-06b989f5fc5b",excerpt:"About Table of Contents Introduction Content Introduction Nikita is designed to help developers and operators to deploy infrastructures and softwares. It is an automation and deployment orchestration solution that we originally wrote to deploy Big…",frontmatter:{title:"About",sort:1},fields:{slug:"/about/"}}},{node:{id:"2300d5db-c5ea-572b-a8f5-cbe8f6b8f3a3",excerpt:"Introduction Table of Contents Introduction Purpose Audience Introduction Automation is central when operating and scaling complex systems. The more servers and services there are to manage, the harder it gets for a team to fulfill their operational…",frontmatter:{title:"Introduction",sort:1},fields:{slug:"/about/introduction/"}}},{node:{id:"f2bd4595-9d76-5c13-8d60-280eef0638a4",excerpt:"Actions, options, handlers and callbacks Table of Contents Introduction Options Handlers Callbacks Introduction An action is the single unit of work in Nikita. Technically, it is a simple JavaScript object consisting of well defined properties as…",frontmatter:{title:"Actions",sort:1},fields:{slug:"/usages/actions/"}}},{node:{id:"fb0d0144-264e-53c0-b786-211cd19b25b3",excerpt:"Tutorial Table of Contents Introduction What is Nikita ? Technologies Use cases What is inside Nikita Installation instructions Dependencies Initialization Core concepts About CoffeeScript Actions handler Calling actions Actions callback Idempotence…",frontmatter:{title:"Tutorial",sort:2},fields:{slug:"/about/tutorial/"}}},{node:{id:"6d39bb67-f116-5924-a9b7-d84333a38059",excerpt:"Usage Table of Contents Introduction Recommendation Content Introduction The Nikita API is simple and concise. It also powerful and comes with a lot of functionalities. This section detail the subtleties of the API organized by topics. A lot of…",frontmatter:{title:"Usages",sort:2},fields:{slug:"/usages/"}}},{node:{id:"d2fd9a97-8685-5e9c-86c1-f473b0cc0f2d",excerpt:"Call and user defined handlers Table of Contents Introduction Calling a function Calling a module Introduction Nikita gives you the choice between calling your own function, which we call handlers, or calling an  registered function  by its name…",frontmatter:{title:"Call",sort:2},fields:{slug:"/usages/call/"}}},{node:{id:"0eff2900-954c-517b-b7c0-b1ebef3d36dd",excerpt:"Sync and async execution Table of Contents Introduction Nikita session The call action Synchronous execution Asynchronous execution Action registration inside callbacks Status Introduction The asynchronous nature of JavaScript coupled with how Nikita…",frontmatter:{title:"Sync and async",sort:2},fields:{slug:"/usages/sync_async/"}}},{node:{id:"74796f10-230a-57f4-ad35-2c79fe67a47c",excerpt:"Developer information Table of Contents Introduction Project layout Core engine Actions Utils function Tests execution SSH or locally Customization Environments Docker Introduction You are encouraged to  contribute  to Nikita. There are multiple way…",frontmatter:{title:"Developer",sort:3},fields:{slug:"/about/developers/"}}},{node:{id:"9d85d2d4-727a-5c80-93a8-2544b137ad93",excerpt:"Options Table of Contents Global options Usage Available actions Options is a plain JavaScript object used to contextualise the execution of an action. Global options  (number, readonly, 0)\nIndicates the number of times an action has been rescheduled…",frontmatter:{title:"Options",sort:3},fields:{slug:"/options/"}}},{node:{id:"f74b03ce-5f83-55e7-87bf-636499af7070",excerpt:"Action Registration Table of Contents Introduction Global registration Local registration API Registration Introduction The registration API allows actions to be registered and access by names. To write an action commonly involves writting a function…",frontmatter:{title:"Action Registration",sort:3},fields:{slug:"/usages/registry/"}}},{node:{id:"574de576-b259-58af-a750-9fa8c3f1d576",excerpt:"Status Table of Contents Introduction Sync versus Async handlers Using it with next Introduction The status is an information indicating whether an action had any impact or not. It's meaning may differ from one action to another. Here are a few…",frontmatter:{title:"Status",sort:3},fields:{slug:"/usages/status/"}}},{node:{id:"65af7729-4729-5b71-b1cb-b65c73471ec4",excerpt:"Contributing Table of Contents Introduction Open Development Branch Organization Semantic Versioning Documentation Discussions Proposing a Change Pull requests Project Guideline Bugs Where to Find Known Issues Reporting New Issues Introduction Nikita…",frontmatter:{title:"Contribute",sort:4},fields:{slug:"/about/contribute/"}}},{node:{id:"8ce24d3c-2e00-5837-9d16-71dd8b393e65",excerpt:"Local and remote (SSH) execution Table of Contents Introduction Implementation Options Passing an existing SSH connection Passing an SSH configuation Root access Introduction Nikita is designed to run transparently either locally or remotely through…",frontmatter:{title:"Local and Remote (SSH)",sort:4},fields:{slug:"/usages/local_remote/"}}},{node:{id:"bb3c7581-5288-5e98-9060-17f50d1dda02",excerpt:"Changelog Table of Contents Version 0.8.0 Version 0.7.0 Version 0.6.8 Version 0.6.7 Version 0.6.5 Version 0.6.4 Version 0.6.3 Version 0.6.2 Version 0.6.1 Version 0.6.0 Version 0.8.0 Backward incompatibilities: misc.file: deprecate usage of hash and…",frontmatter:{title:"Changelog",sort:5},fields:{slug:"/about/changelog/"}}},{node:{id:"233788c4-b6ab-5cce-b6a2-3b8a71f61328",excerpt:"Conditions and assertions Table of Contents Introduction Usage Example Option if Option unless Option if_exec Option unless_exec Option if_exists Option unless_exists Option should_exist Option should_not_exist Internal API Condition writing…",frontmatter:{title:"Conditions and assertions",sort:5},fields:{slug:"/usages/conditions_assertions/"}}},{node:{id:"914a653a-8414-5fa8-97f6-c6ae6fa670da",excerpt:"Software License Agreement - MIT License (MIT) Table of Contents Content Content Copyright (c) 2012 SARL Adaltas Permission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the…",frontmatter:{title:"License (MIT)",sort:6},fields:{slug:"/about/license/"}}},{node:{id:"29695ce8-f00f-56c1-8a13-a05d7bde22ad",excerpt:"Events API Table of Contents Introduction Usage Available events Introduction A Nikita session extends the  native Node.js Events API . It provides a facility to listen to internal notification and know the current state of the program. Usage…",frontmatter:{title:"Events API",sort:6},fields:{slug:"/usages/events/"}}},{node:{id:"42985b9b-04d8-5af1-be1f-3a1ab6006bfc",excerpt:"Logging and Debugging Table of Contents Introduction Quick debugging Getting started with logging Deep dive into logging Listening to events Extending nikita.log.stream Extending nikita.log.fs CLI reporting CSV and Markdown logs Introduction Nikita…",frontmatter:{title:"Logging and Debugging",sort:6},fields:{slug:"/usages/logging_debugging/"}}},{node:{id:"044cfd12-2739-5440-b32d-1795466ac26c",excerpt:"Control Flow Table of Contents Introduction Sequential execution End of the execution Interrupting the execution Condition and status Introduction Nikita run every actions sequentially. This behavior ensures there are no conflict between two commands…",frontmatter:{title:"Control Flow",sort:7},fields:{slug:"/usages/control_flow/"}}},{node:{id:"8d82d1a1-843c-5bcc-a420-3ded4a6f7ba3",excerpt:"Error handling Table of Contents Introduction Emitting errors Catching errors Introduction Nikita implements error management by following familiar  Node.js  conventions. The handling of errors different slightly between synchronous and asynchronous…",frontmatter:{title:"Error handling",sort:8},fields:{slug:"/usages/error/"}}},{node:{id:"729ebfe7-ad50-55d1-be5f-d0991f713ac5",excerpt:'Option "attempt" (number, readonly, 0) Table of Contents Introduction Usage With "relax" option Introduction The "attempt" option is an indicator of the number of times an action has been rescheduled for execution when an error occurred. The "attempt…',frontmatter:{title:'Option "attempt"',sort:null},fields:{slug:"/options/attempt/"}}},{node:{id:"efb82505-a670-5248-8235-af7cb5e3afed",excerpt:'Option "cascade" (object|array, optional) Table of Contents Usage Hiding an option Global definition Session definition Options may be propagated to every child actions. This is not the default behavior, options are not passed to child actions unless…',frontmatter:{title:'Option "cascade"',sort:null},fields:{slug:"/options/cascade/"}}},{node:{id:"d188c50f-b548-57d3-997b-02d87be56df7",excerpt:'Option "debug" (boolean, optional, false) Table of Contents Activating debugging Redirecting output to stdout The "debug" option print detailed logs to the standard error output ( ). It provides a quick and convenient solution to understand the…',frontmatter:{title:'Option "debug"',sort:null},fields:{slug:"/options/debug/"}}},{node:{id:"58e41a16-460c-536f-95ef-f1b34fad33f7",excerpt:'Option "handler" (function, required) Table of Contents Synchronous handlers Asynchronous handlers Style Asynchronous handlers inside synchronous handlers The "handler" option define the function that an action implements to get things done. It is…',frontmatter:{title:'Option "handler"',sort:null},fields:{slug:"/options/handler/"}}},{node:{id:"7eaaf643-b424-5218-8aea-0fa2327f21fa",excerpt:'Option "header" (string, optional) Table of Contents Usage CLI reporting Markdown reporting Integration The "header" option is mostly used as a reporting mechanism and provides a title to a group of actions. It leverages the parent-child nature of…',frontmatter:{title:'Option "header"',sort:null},fields:{slug:"/options/header/"}}},{node:{id:"bfea62ff-b6b9-5c6a-a86a-5400223db58a",excerpt:'Option "once" (boolean|array|string, optional, false) Table of Contents Usage This option compare multiple actions in a Nikita session and ensure that the same actions are only executed once. Usage If  , all the option will be compared, included…',frontmatter:{title:'Option "once"',sort:null},fields:{slug:"/options/once/"}}},{node:{id:"fa76a818-5df4-5e34-855e-6b6ceeee3385",excerpt:'Option "relax" (boolean, optional, false) Table of Contents Usage Callback The "relax" option makes an action tolerant to internal errors. Sometimes, you wish to handle errors not in the action itself but inside the callback function or inside…',frontmatter:{title:'Option "relax"',sort:null},fields:{slug:"/options/relax/"}}},{node:{id:"88f5c663-b7c5-5dc4-9130-17d136fda7a5",excerpt:'Option "retry" (number|boolean, optional, 1) Table of Contents Usage Setting the "retry" option provides control over how many time an action is re-scheduled on error before it is finally treated as a failure. It is commonly used conjointly with the…',frontmatter:{title:'Option "retry"',sort:null},fields:{slug:"/options/retry/"}}},{node:{id:"4eac0f85-9468-584f-918a-50d109ef3f84",excerpt:'Option "shy" (boolean, optional, false) Table of Contents Usage Callback Status function The "shy" option disables the modification of the session status. Sometimes, some actions are not relevant to indicate of change of status. There are multiple…',frontmatter:{title:'Option "shy"',sort:null},fields:{slug:"/options/shy/"}}},{node:{id:"425d3f25-f2ef-535d-bf0b-8a421ba2600b",excerpt:'Option "sleep" (number, optional, 3000) Table of Contents Description Usage Default value Description The "sleep" option indicates the time lapse when a failed action is rescheduled. It only has effect if the "attempt" option is set to a value…',frontmatter:{title:'Option "sleep"',sort:null},fields:{slug:"/options/sleep/"}}},{node:{id:"00175143-3dcb-5174-9f2c-7025bb01621a",excerpt:'Option "sudo" (boolean, optional, false) Table of Contents Introduction Usage Introduction The "sudo" option escalates the right of the current user with   privileges. Passwordless sudo for the user must be enabled. The "sudo" option is cascaded to…',frontmatter:{title:'Option "sudo"',sort:null},fields:{slug:"/options/sudo/"}}}]}}}}}]);
//# sourceMappingURL=component---src-templates-template-js-7b0e122e1339e36ee047.js.map