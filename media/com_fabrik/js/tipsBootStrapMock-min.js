var FloatingTips=new Class({Implements:[Options,Events],options:{fxProperties:{transition:Fx.Transitions.linear,duration:500},position:"top",showOn:"mouseenter",hideOn:"mouseleave",content:"title",distance:50,tipfx:"Fx.Transitions.linear",heading:"",duration:500,fadein:false,notice:false,showFn:function(a){a.stop();return true},hideFn:function(a){a.stop();return true},placement:function(c,b){Fabrik.fireEvent("bootstrap.tips.place",[c,b]);var d=Fabrik.eventResults.length===0?false:Fabrik.eventResults[0];if(d===false){var a=JSON.decode(b.get("opts","{}").opts);return a&&a.position?a.position:"top"}else{return d}}},initialize:function(elements,options){this.setOptions(options);this.options.fxProperties={transition:eval(this.options.tipfx),duration:this.options.duration};window.addEvent("tips.hideall",function(e,trigger){this.hideOthers(trigger)}.bind(this));if(elements){this.attach(elements)}},attach:function(a){this.elements=$$(a);this.elements.each(function(b){var d=JSON.decode(b.get("opts","{}").opts);d=d?d:{};if(d.position){d.defaultPos=d.position;delete (d.position)}var e=Object.merge(Object.clone(this.options),d);if(e.content==="title"){e.content=b.get("title");b.erase("title")}else{if(typeOf(e.content)==="function"){var f=e.content(b);e.content=typeOf(f)==="null"?"":f.innerHTML}}e.placement=this.options.placement;e.title=e.heading;if(b.hasClass("tip-small")){e.title=e.content;jQuery(b).tooltip(e)}else{if(!e.notice){e.title+='<button class="close" data-popover="'+b.id+'">&times;</button>'}jQuery(b).popoverex(e)}}.bind(this))},addStartEvent:function(a,b){},addEndEvent:function(a,b){},getTipContent:function(a,b){},show:function(a,b){},hide:function(a,b){},hideOthers:function(a){},hideAll:function(){}});(function(b){var a=function(d,c){this.init("popover",d,c)};a.prototype=b.extend({},b.fn.popover.Constructor.prototype,{constructor:a,tip:function(){if(!this.$tip){this.$tip=b(this.options.template);if(this.options.modifier){this.$tip.addClass(this.options.modifier)}}return this.$tip},show:function(){var g,c,i,e,h,d,f;if(this.hasContent()&&this.enabled){g=this.tip();this.setContent();if(this.options.animation){g.addClass("fade")}d=typeof this.options.placement==="function"?this.options.placement.call(this,g[0],this.$element[0]):this.options.placement;c=/in/.test(d);g.remove().css({top:0,left:0,display:"block"}).appendTo(c?this.$element:document.body);i=this.getPosition(c);e=g[0].offsetWidth;h=g[0].offsetHeight;switch(c?d.split(" ")[1]:d){case"bottom":f={top:i.top+i.height,left:i.left+i.width/2-e/2};break;case"bottom-left":f={top:i.top+i.height,left:i.left};d="bottom";break;case"bottom-right":f={top:i.top+i.height,left:i.left+i.width-e};d="bottom";break;case"top":f={top:i.top-h,left:i.left+i.width/2-e/2};break;case"top-left":f={top:i.top-h,left:i.left};d="top";break;case"top-right":f={top:i.top-h,left:i.left+i.width-e};d="top";break;case"left":f={top:i.top+i.height/2-h/2,left:i.left-e};break;case"right":f={top:i.top+i.height/2-h/2,left:i.left+i.width};break}g.css(f).addClass(d).addClass("in")}}});b.fn.popoverex=function(c){return this.each(function(){var f=b(this),e=f.data("popover"),d=typeof c==="object"&&c;if(!e){f.data("popover",(e=new a(this,d)))}if(typeof c==="string"){e[c]()}})}})(window.jQuery);