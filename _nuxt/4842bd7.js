(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{642:function(t,n,e){var content=e(643);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("53887fd2",content,!0,{sourceMap:!1})},643:function(t,n,e){var o=e(21)((function(i){return i[1]}));o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);border-radius:8px;color:#fff;display:inline-block;font-size:14px;line-height:22px;opacity:0;padding:5px 16px;pointer-events:none;position:absolute;text-transform:none;width:auto}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),o.locals={},t.exports=o},665:function(t,n,e){"use strict";e.r(n);var o=e(218),r=e(449),c=e(454),l=e(448),h=e(2),d=(e(28),e(642),e(134)),v=e(43),f=e(163),_=e(290),m=e(206),y=e(0),x=e(8),w=e(9),k=Object(w.a)(v.a,f.a,_.a,m.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,n=t.activator,content=t.content,e=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?n.offsetLeft:n.left,r=0;return this.top||this.bottom||e?r=o+n.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?n.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,n=t.activator,content=t.content,e=!1!==this.attach?n.offsetTop:n.top,o=0;return this.top||this.bottom?o=e+(this.bottom?n.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=e+n.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(y.d)(this.maxWidth),minWidth:Object(y.d)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(y.k)(this,"activator",!0)&&Object(x.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,n=d.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(n.focus=function(n){t.getActivator(n),t.runDelay("open")},n.blur=function(n){t.getActivator(n),t.runDelay("close")}),n.keydown=function(n){n.keyCode===y.n.esc&&(t.getActivator(n),t.runDelay("close"))},n},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:Object(h.a)(Object(h.a)(Object(h.a)({},this.contentClass,!0),"menuable__content__active",this.isActive),"v-tooltip__content--fixed",this.activatorFixed),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var n=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[n.genTransition()]})),this.genActivator()])}}),C={name:"UiTooltip",data:function(){return{}},methods:{}},T=e(54),component=Object(T.a)(C,(function(){var t=this,n=t._self._c;return n("div",[n("div",{staticClass:"mini-spacer"},[n(c.a,[n(l.a,{attrs:{justify:"center"}},[n(r.a,{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"ui-title font-weight-bold"},[t._v("Tooltip")]),t._v(" "),n("p",[t._v("\n              Here you can check Demos we created based on WrapKit. Its quite\n              easy to Create your own dream website & dashboard in No-time.\n            ")])])])],1)],1)],1),t._v(" "),n("div",[n(c.a,[n("div",{staticClass:"text-center"},[n("div",{staticClass:"btn-groups"},[n(k,{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n(o.a,t._g(t._b({attrs:{color:"accent",elevation:"0",dark:""}},"v-btn",c,!1),r),[t._v("\n                Left\n              ")])]}}])},[t._v(" "),n("span",[t._v("Left tooltip")])]),t._v(" "),n(k,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n(o.a,t._g(t._b({attrs:{color:"accent",elevation:"0",dark:""}},"v-btn",c,!1),r),[t._v("\n                Top\n              ")])]}}])},[t._v(" "),n("span",[t._v("Top tooltip")])]),t._v(" "),n(k,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n(o.a,t._g(t._b({attrs:{color:"accent",elevation:"0",dark:""}},"v-btn",c,!1),r),[t._v("\n                Bottom\n              ")])]}}])},[t._v(" "),n("span",[t._v("Bottom tooltip")])]),t._v(" "),n(k,{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[n(o.a,t._g(t._b({attrs:{color:"accent",elevation:"0",dark:""}},"v-btn",c,!1),r),[t._v("\n                Right\n              ")])]}}])},[t._v(" "),n("span",[t._v("Right tooltip")])])],1)])])],1)])}),[],!1,null,null,null);n.default=component.exports}}]);