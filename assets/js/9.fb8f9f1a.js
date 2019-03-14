(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(t,e,o){},218:function(t,e,o){"use strict";var i=o(197);o.n(i).a},229:function(t,e,o){"use strict";o.r(e);o(54);var i={name:"guluPopover",props:{position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=0}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=0}}},data:function(){return{visible:!1}},mounted:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.close))},computed:{openEvent:function(){return"click"===this.trigger?"click":"mouseenter"},closeEvent:function(){return"click"===this.trigger?"click":"mouseleave"}},destroyed:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseleave",this.close))},methods:{positionContent:function(){var t=this.$refs,e=t.contentWrapper,o=t.triggerWrapper;(this.container||document.body).appendChild(e);var i=o.getBoundingClientRect(),n=i.width,r=i.height,s=i.top,p=i.left,c=e.getBoundingClientRect().height,l={top:{top:s+window.scrollY,left:p+window.scrollX},bottom:{top:s+r+window.scrollY,left:p+window.scrollX},left:{top:s+window.scrollY+(r-c)/2,left:p+window.scrollX},right:{top:s+window.scrollY+(r-c)/2,left:p+window.scrollX+n}};e.style.left=l[this.position].left+"px",e.style.top=l[this.position].top+"px"},onClickDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},open:function(){var t=this;this.visible=!0,this.$nextTick(function(){t.positionContent(),document.addEventListener("click",t.onClickDocument)})},close:function(){this.visible=!1,this.$emit("close"),document.removeEventListener("click",this.onClickDocument)},onClick:function(t){this.$refs.triggerWrapper.contains(t.target)&&(!0===this.visible?this.close():this.open())}}},n=(o(218),o(1)),r={components:{GPopover:Object(n.a)(i,function(){var t,e=this.$createElement,o=this._self._c||e;return o("div",{ref:"popover",staticClass:"popover"},[o("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],ref:"contentWrapper",staticClass:"content-wrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content",null,{close:this.close})],2),this._v(" "),o("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[this._t("default")],2)])},[],!1,null,"b41c4170",null).exports}},s=Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"padding-top":"20px"}},[o("p",{staticStyle:{color:"green"}},[t._v("click")]),t._v(" "),o("g-popover",{attrs:{position:"top"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),[o("button",[t._v("上弹出")])]],2),t._v(" "),o("g-popover",{attrs:{position:"left"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),[o("button",[t._v("左弹出")])]],2),t._v(" "),o("g-popover",{attrs:{position:"right"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),[o("button",[t._v("右弹出")])]],2),t._v(" "),o("g-popover",{attrs:{position:"bottom"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),[o("button",[t._v("下弹出")])]],2),t._v(" "),o("p",{staticStyle:{color:"green"}},[t._v("hover")]),t._v(" "),o("g-popover",{attrs:{position:"top",trigger:"hover"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),[o("button",[t._v("上弹出")])]],2),t._v(" "),o("g-popover",{attrs:{position:"left",trigger:"hover"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),[o("button",[t._v("左弹出")])]],2),t._v(" "),o("g-popover",{attrs:{position:"right",trigger:"hover"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),[o("button",[t._v("右弹出")])]],2),t._v(" "),o("g-popover",{attrs:{position:"bottom",trigger:"hover"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),[o("button",[t._v("下弹出")])]],2)],1)},[],!1,null,"721ff3ee",null);e.default=s.exports}}]);