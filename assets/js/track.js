;(function(Extensions){'use strict';Extensions.Inst=Extensions.Inst||{};Extensions.Track=new Class({initialize:function(){var that=this;document.addEvent('click:relay(.js-track)',function(ev,link){this.event(link.get('data-track-action'),{event_category:link.get('data-track-category')},ev,function(){that.followLink(link);});}.bind(this));this.scrollContent=document.id('content');if(this.scrollContent!=null){this.resetScrollEvents();window.addEvent('resize',this.setScrollHandler.bind(this));}},event:function(action,data,ev,callback){data=this.setData(data);if(callback!=null){if(ev!=null){ev.preventDefault();}
data.event_callback=callback;}
if(window.ga!=null){window.gtag('event',action,data);}else if(callback!=null){callback();}},pageView:function(data){data=this.setData(data);try{var trackingId=ga.getAll()[0].get('trackingId');window.gtag('config',trackingId,data);}catch(error){if(window.console&&window.console.error){console.error(error);}}},setData:function(data){data=data||{};data.page_location=data.page_location||location.href;data.page_path=data.page_path||location.pathname;data.page_title=data.page_title||document.title;data.event_label=data.event_label||data.page_title;return data;},setScrollHandler:function(){var viewportHeight=document.documentElement.clientHeight;var contentRect=this.scrollContent.getBoundingClientRect();var scrollStart=contentRect.top+window.pageYOffset-viewportHeight;this.scrollEnd=scrollStart+contentRect.height;if(!this.isScrollCheckSet){this.checkScroll=this.checkScroll.bind(this);window.addEvent('scroll',this.checkScroll);this.isScrollCheckSet=true;}
this.checkScroll();},checkScroll:function(){var progress=window.pageYOffset/this.scrollEnd;var allFired=true;this.scrollEvents.forEach(function(ev){if(!ev.fired){allFired=false;if(progress>=ev.position){ev.fired=true;this.event('scroll '+ev.position*100+'%',{event_category:'engagement'});}}}.bind(this));if(allFired){window.removeEvent('scroll',this.checkScroll);}},resetScrollEvents:function(){this.isScrollCheckSet=false;this.scrollEvents=[{position:0.25},{position:0.5},{position:0.75},{position:1}];this.setScrollHandler();},followLink:function(link){var redirect=document.createElement('a');document.body.appendChild(redirect);redirect.download=link.download;redirect.href=link.href;redirect.target=link.target;redirect.rel=link.rel;redirect.click();}});window.addEvent('domready',function(){Extensions.Inst['Track']=new Extensions.Track();});})(window.Extensions||{});