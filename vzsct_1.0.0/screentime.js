!function(i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof module&&module.exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){var t={fields:[],percentOnScreen:"50%",reportInterval:30,googleAnalytics:!1,callback:function(){}};i.screentime=function(e){function n(t){this.selector=t.selector,$elem=this.$elem=i(t.selector),this.name=t.name,this.top=$elem.offset().top,this.height=$elem.height(),this.bottom=this.top+this.height,this.width=$elem.width()}function s(){var t=i(window);this.top=t.scrollTop(),this.height=t.height(),this.bottom=this.top+this.height,this.width=t.width()}function o(i,t){d&&ga("send","event","Screentime","Time on Screen",i,parseInt(t,10),{nonInteraction:!0}),u&&_gaq.push(["_trackEvent","Screentime","Time on Screen",i,parseInt(t,10),!0])}function c(i,t){var n,s,o;return t.bottom<=i.bottom&&t.top>=i.top?!0:t.height>i.height&&(n=i.bottom-t.top>i.height/2&&t.bottom-i.top>i.height/2)?!0:(s=t.height*(e.percentOnScreen/100),o=i.bottom-s>=t.top&&t.bottom-s>i.top)}function h(){var t=new s;i.each(v,function(i,e){c(t,e)&&(g[i]+=1,p[i]+=1)})}function l(){var t={};i.each(p,function(i,n){n>0&&(t[i]=n,p[i]=0,e.googleAnalytics&&o(i,n))}),i.isEmptyObject(t)||e.callback.call(this,t,g)}function r(){w||(h(),w=!0),m=setInterval(function(){h()},1e3),reporter=setInterval(function(){l()},1e3*e.reportInterval)}function a(){clearInterval(m),clearInterval(reporter)}function f(){i.each(e.fields,function(t,e){if(i(e.selector).length){var s=new n(e);v[s.name]=s,p[s.name]=0,g[s.name]=0}}),r(),visibly.onHidden(function(){console.log("page is hidden"),a()}),visibly.onVisible(function(){console.log("page is visible"),a(),r()})}e=i.extend({},t,e),e.percentOnScreen=parseInt(e.percentOnScreen.replace("%",""),10);var d,u,p={},v={},g={},m=null,w=!1;e.fields.length&&(!function(){window.visibly={q:document,p:void 0,prefixes:["webkit","ms","o","moz","khtml"],props:["VisibilityState","visibilitychange","Hidden"],m:["focus","blur"],visibleCallbacks:[],hiddenCallbacks:[],genericCallbacks:[],_callbacks:[],cachedPrefix:"",fn:null,onVisible:function(i){"function"==typeof i&&this.visibleCallbacks.push(i)},onHidden:function(i){"function"==typeof i&&this.hiddenCallbacks.push(i)},getPrefix:function(){if(!this.cachedPrefix)for(var i=0;b=this.prefixes[i++];)if(b+this.props[2]in this.q)return this.cachedPrefix=b,this.cachedPrefix},visibilityState:function(){return this._getProp(0)},hidden:function(){return this._getProp(2)},visibilitychange:function(i){"function"==typeof i&&this.genericCallbacks.push(i);var t=this.genericCallbacks.length;if(t)if(this.cachedPrefix)for(;t--;)this.genericCallbacks[t].call(this,this.visibilityState());else for(;t--;)this.genericCallbacks[t].call(this,arguments[0])},isSupported:function(i){return this.cachedPrefix+this.props[2]in this.q},_getProp:function(i){return this.q[this.cachedPrefix+this.props[i]]},_execute:function(i){if(i){this._callbacks=1==i?this.visibleCallbacks:this.hiddenCallbacks;for(var t=this._callbacks.length;t--;)this._callbacks[t]()}},_visible:function(){window.visibly._execute(1),window.visibly.visibilitychange.call(window.visibly,"visible")},_hidden:function(){window.visibly._execute(2),window.visibly.visibilitychange.call(window.visibly,"hidden")},_nativeSwitch:function(){this[this._getProp(2)?"_hidden":"_visible"]()},_listen:function(){try{this.isSupported()?this.q.addEventListener(this.cachedPrefix+this.props[1],function(){window.visibly._nativeSwitch.apply(window.visibly,arguments)},1):this.q.addEventListener?(window.addEventListener(this.m[0],this._visible,1),window.addEventListener(this.m[1],this._hidden,1)):this.q.attachEvent&&(this.q.attachEvent("onfocusin",this._visible),this.q.attachEvent("onfocusout",this._hidden))}catch(i){}},init:function(){this.getPrefix(),this._listen()}},this.visibly.init()}(),i.screentime.reset=function(){a(),i.each(v,function(i,t){g[i]=0,p[i]=0}),r()},f())}});
