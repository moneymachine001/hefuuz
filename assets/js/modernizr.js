/*!
* modernizr v3.6.0
* Build https://modernizr.com/download?-backgroundsize-csstransforms-csstransitions-flexbox-input-opacity-domprefixes-mq-prefixes-setclasses-shiv-testallprops-testprop-teststyles-dontmin
*
* Copyright (c)
* Faruk Ates
* Paul Irish
* Alex Sexton
* Ryan Seddon
* Patrick Kettner
* Stu Cox
* Richard Herrera
* MIT License
*/;(function(window,document,undefined){var classes=[];var tests=[];var ModernizrProto={_version:'3.6.0',_config:{'classPrefix':'','enableClasses':true,'enableJSClass':true,'usePrefixes':true},_q:[],on:function(test,cb){var self=this;setTimeout(function(){cb(self[test]);},0);},addTest:function(name,fn,options){tests.push({name:name,fn:fn,options:options});},addAsyncTest:function(fn){tests.push({name:null,fn:fn});}};var Modernizr=function(){};Modernizr.prototype=ModernizrProto;Modernizr=new Modernizr();var prefixes=(ModernizrProto._config.usePrefixes?' -webkit- -moz- -o- -ms- '.split(' '):['','']);ModernizrProto._prefixes=prefixes;function is(obj,type){return typeof obj===type;};function testRunner(){var featureNames;var feature;var aliasIdx;var result;var nameIdx;var featureName;var featureNameSplit;for(var featureIdx in tests){if(tests.hasOwnProperty(featureIdx)){featureNames=[];feature=tests[featureIdx];if(feature.name){featureNames.push(feature.name.toLowerCase());if(feature.options&&feature.options.aliases&&feature.options.aliases.length){for(aliasIdx=0;aliasIdx<feature.options.aliases.length;aliasIdx++){featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());}}}
result=is(feature.fn,'function')?feature.fn():feature.fn;for(nameIdx=0;nameIdx<featureNames.length;nameIdx++){featureName=featureNames[nameIdx];featureNameSplit=featureName.split('.');if(featureNameSplit.length===1){Modernizr[featureNameSplit[0]]=result;}else{if(Modernizr[featureNameSplit[0]]&&!(Modernizr[featureNameSplit[0]]instanceof Boolean)){Modernizr[featureNameSplit[0]]=new Boolean(Modernizr[featureNameSplit[0]]);}
Modernizr[featureNameSplit[0]][featureNameSplit[1]]=result;}
classes.push((result?'':'no-')+featureNameSplit.join('-'));}}}};var docElement=document.documentElement;var isSVG=docElement.nodeName.toLowerCase()==='svg';function setClasses(classes){var className=docElement.className;var classPrefix=Modernizr._config.classPrefix||'';if(isSVG){className=className.baseVal;}
if(Modernizr._config.enableJSClass){var reJS=new RegExp('(^|\\s)'+classPrefix+'no-js(\\s|$)');className=className.replace(reJS,'$1'+classPrefix+'js$2');}
if(Modernizr._config.enableClasses){className+=' '+classPrefix+classes.join(' '+classPrefix);if(isSVG){docElement.className.baseVal=className;}else{docElement.className=className;}}};var html5;if(!isSVG){;(function(window,document){var version='3.7.3';var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando='_html5shiv';var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement('a');a.innerHTML='<xyz></xyz>';supportsHtml5Styles=('hidden'in a);supportsUnknownElements=a.childNodes.length==1||(function(){(document.createElement)('a');var frag=document.createDocumentFragment();return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined');}());}catch(e){supportsHtml5Styles=true;supportsUnknownElements=true;}}());function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;p.innerHTML='x<style>'+cssText+'</style>';return parent.insertBefore(p.lastChild,parent.firstChild);}
function getElements(){var elements=html5.elements;return typeof elements=='string'?elements.split(' '):elements;}
function addElements(newElements,ownerDocument){var elements=html5.elements;if(typeof elements!='string'){elements=elements.join(' ');}
if(typeof newElements!='string'){newElements=newElements.join(' ');}
html5.elements=elements+' '+newElements;shivDocument(ownerDocument);}
function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data;}
return data;}
function createElement(nodeName,ownerDocument,data){if(!ownerDocument){ownerDocument=document;}
if(supportsUnknownElements){return ownerDocument.createElement(nodeName);}
if(!data){data=getExpandoData(ownerDocument);}
var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode();}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode();}else{node=data.createElem(nodeName);}
return node.canHaveChildren&&!reSkip.test(nodeName)&&!node.tagUrn?data.frag.appendChild(node):node;}
function createDocumentFragment(ownerDocument,data){if(!ownerDocument){ownerDocument=document;}
if(supportsUnknownElements){return ownerDocument.createDocumentFragment();}
data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++){clone.createElement(elems[i]);}
return clone;}
function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag();}
ownerDocument.createElement=function(nodeName){if(!html5.shivMethods){return data.createElem(nodeName);}
return createElement(nodeName,ownerDocument,data);};ownerDocument.createDocumentFragment=Function('h,f','return function(){'+
'var n=f.cloneNode(),c=n.createElement;'+
'h.shivMethods&&('+
getElements().join().replace(/[\w\-:]+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return 'c("'+nodeName+'")';})+
');return n}')(html5,data.frag);}
function shivDocument(ownerDocument){if(!ownerDocument){ownerDocument=document;}
var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){data.hasCSS=!!addStyleSheet(ownerDocument,'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}'+
'mark{background:#FF0;color:#000}'+
'template{display:none}');}
if(!supportsUnknownElements){shivMethods(ownerDocument,data);}
return ownerDocument;}
var html5={'elements':options.elements||'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video','version':version,'shivCSS':(options.shivCSS!==false),'supportsUnknownElements':supportsUnknownElements,'shivMethods':(options.shivMethods!==false),'type':'default','shivDocument':shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment,addElements:addElements};window.html5=html5;shivDocument(document);if(typeof module=='object'&&module.exports){module.exports=html5;}}(typeof window!=='undefined'?window:this,document));};var omPrefixes='Moz O ms Webkit';var domPrefixes=(ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(' '):[]);ModernizrProto._domPrefixes=domPrefixes;function createElement(){if(typeof document.createElement!=='function'){return document.createElement(arguments[0]);}else if(isSVG){return document.createElementNS.call(document,'http://www.w3.org/2000/svg',arguments[0]);}else{return document.createElement.apply(document,arguments);}};/*!
{
"name": "CSS Opacity",
"caniuse": "css-opacity",
"property": "opacity",
"tags": ["css"]
}
!*/Modernizr.addTest('opacity',function(){var style=createElement('a').style;style.cssText=prefixes.join('opacity:.55;');return(/^0.55$/).test(style.opacity);});var inputElem=createElement('input');/*!
{
"name": "Input attributes",
"property": "input",
"tags": ["forms"],
"authors": ["Mike Taylor"],
"notes": [{
"name": "WHATWG spec",
"href": "https://html.spec.whatwg.org/multipage/forms.html#input-type-attr-summary"
}],
"knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
!*/var inputattrs='autocomplete autofocus list placeholder max min multiple pattern required step'.split(' ');var attrs={};Modernizr.input=(function(props){for(var i=0,len=props.length;i<len;i++){attrs[props[i]]=!!(props[i]in inputElem);}
if(attrs.list){attrs.list=!!(createElement('datalist')&&window.HTMLDataListElement);}
return attrs;})(inputattrs);function getBody(){var body=document.body;if(!body){body=createElement(isSVG?'svg':'body');body.fake=true;}
return body;};function injectElementWithStyles(rule,callback,nodes,testnames){var mod='modernizr';var style;var ret;var node;var docOverflow;var div=createElement('div');var body=getBody();if(parseInt(nodes,10)){while(nodes--){node=createElement('div');node.id=testnames?testnames[nodes]:mod+(nodes+1);div.appendChild(node);}}
style=createElement('style');style.type='text/css';style.id='s'+mod;(!body.fake?div:body).appendChild(style);body.appendChild(div);if(style.styleSheet){style.styleSheet.cssText=rule;}else{style.appendChild(document.createTextNode(rule));}
div.id=mod;if(body.fake){body.style.background='';body.style.overflow='hidden';docOverflow=docElement.style.overflow;docElement.style.overflow='hidden';docElement.appendChild(body);}
ret=callback(div,rule);if(body.fake){body.parentNode.removeChild(body);docElement.style.overflow=docOverflow;docElement.offsetHeight;}else{div.parentNode.removeChild(div);}
return!!ret;};var mq=(function(){var matchMedia=window.matchMedia||window.msMatchMedia;if(matchMedia){return function(mq){var mql=matchMedia(mq);return mql&&mql.matches||false;};}
return function(mq){var bool=false;injectElementWithStyles('@media '+mq+' { #modernizr { position: absolute; } }',function(node){bool=(window.getComputedStyle?window.getComputedStyle(node,null):node.currentStyle).position=='absolute';});return bool;};})();ModernizrProto.mq=mq;var testStyles=ModernizrProto.testStyles=injectElementWithStyles;var cssomPrefixes=(ModernizrProto._config.usePrefixes?omPrefixes.split(' '):[]);ModernizrProto._cssomPrefixes=cssomPrefixes;function contains(str,substr){return!!~(''+str).indexOf(substr);};function cssToDOM(name){return name.replace(/([a-z])-([a-z])/g,function(str,m1,m2){return m1+m2.toUpperCase();}).replace(/^-/,'');};function fnBind(fn,that){return function(){return fn.apply(that,arguments);};};function testDOMProps(props,obj,elem){var item;for(var i in props){if(props[i]in obj){if(elem===false){return props[i];}
item=obj[props[i]];if(is(item,'function')){return fnBind(item,elem||obj);}
return item;}}
return false;};var modElem={elem:createElement('modernizr')};Modernizr._q.push(function(){delete modElem.elem;});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style;});function domToCSS(name){return name.replace(/([A-Z])/g,function(str,m1){return '-'+m1.toLowerCase();}).replace(/^ms-/,'-ms-');};function computedStyle(elem,pseudo,prop){var result;if('getComputedStyle'in window){result=getComputedStyle.call(window,elem,pseudo);var console=window.console;if(result!==null){if(prop){result=result.getPropertyValue(prop);}}else{if(console){var method=console.error?'error':'log';console[method].call(console,'getComputedStyle returning null, its possible modernizr test results are inaccurate');}}}else{result=!pseudo&&elem.currentStyle&&elem.currentStyle[prop];}
return result;};function nativeTestProps(props,value){var i=props.length;if('CSS'in window&&'supports'in window.CSS){while(i--){if(window.CSS.supports(domToCSS(props[i]),value)){return true;}}
return false;}
else if('CSSSupportsRule'in window){var conditionText=[];while(i--){conditionText.push('('+domToCSS(props[i])+':'+value+')');}
conditionText=conditionText.join(' or ');return injectElementWithStyles('@supports ('+conditionText+') { #modernizr { position: absolute; } }',function(node){return computedStyle(node,null,'position')=='absolute';});}
return undefined;};function testProps(props,prefixed,value,skipValueTest){skipValueTest=is(skipValueTest,'undefined')?false:skipValueTest;if(!is(value,'undefined')){var result=nativeTestProps(props,value);if(!is(result,'undefined')){return result;}}
var afterInit,i,propsLength,prop,before;var elems=['modernizr','tspan','samp'];while(!mStyle.style&&elems.length){afterInit=true;mStyle.modElem=createElement(elems.shift());mStyle.style=mStyle.modElem.style;}
function cleanElems(){if(afterInit){delete mStyle.style;delete mStyle.modElem;}}
propsLength=props.length;for(i=0;i<propsLength;i++){prop=props[i];before=mStyle.style[prop];if(contains(prop,'-')){prop=cssToDOM(prop);}
if(mStyle.style[prop]!==undefined){if(!skipValueTest&&!is(value,'undefined')){try{mStyle.style[prop]=value;}catch(e){}
if(mStyle.style[prop]!=before){cleanElems();return prefixed=='pfx'?prop:true;}}
else{cleanElems();return prefixed=='pfx'?prop:true;}}}
cleanElems();return false;};var testProp=ModernizrProto.testProp=function(prop,value,useValue){return testProps([prop],undefined,value,useValue);};function testPropsAll(prop,prefixed,elem,value,skipValueTest){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+' '+cssomPrefixes.join(ucProp+' ')+ucProp).split(' ');if(is(prefixed,'string')||is(prefixed,'undefined')){return testProps(props,prefixed,value,skipValueTest);}else{props=(prop+' '+(domPrefixes).join(ucProp+' ')+ucProp).split(' ');return testDOMProps(props,prefixed,elem);}}
ModernizrProto.testAllProps=testPropsAll;function testAllProps(prop,value,skipValueTest){return testPropsAll(prop,undefined,undefined,value,skipValueTest);}
ModernizrProto.testAllProps=testAllProps;/*!
{
"name": "Background Size",
"property": "backgroundsize",
"tags": ["css"],
"knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
"notes": [{
"name": "Related Issue",
"href": "https://github.com/Modernizr/Modernizr/issues/396"
}]
}
!*/Modernizr.addTest('backgroundsize',testAllProps('backgroundSize','100%',true));/*!
{
"name": "CSS Transforms",
"property": "csstransforms",
"caniuse": "transforms2d",
"tags": ["css"]
}
!*/Modernizr.addTest('csstransforms',function(){return navigator.userAgent.indexOf('Android 2.')===-1&&testAllProps('transform','scale(1)',true);});/*!
{
"name": "CSS Transitions",
"property": "csstransitions",
"caniuse": "css-transitions",
"tags": ["css"]
}
!*/Modernizr.addTest('csstransitions',testAllProps('transition','all',true));/*!
{
"name": "Flexbox",
"property": "flexbox",
"caniuse": "flexbox",
"tags": ["css"],
"notes": [{
"name": "The _new_ flexbox",
"href": "http://dev.w3.org/csswg/css3-flexbox"
}],
"warnings": [
"A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
]
}
!*/Modernizr.addTest('flexbox',testAllProps('flexBasis','1px',true));testRunner();setClasses(classes);delete ModernizrProto.addTest;delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++){Modernizr._q[i]();}
window.Modernizr=Modernizr;;})(window,document);