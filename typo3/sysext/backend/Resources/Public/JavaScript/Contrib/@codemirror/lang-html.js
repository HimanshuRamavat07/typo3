import{parser,configureNesting}from"@lezer/html";import{cssLanguage,css}from"@codemirror/lang-css";import{javascriptLanguage,typescriptLanguage,jsxLanguage,tsxLanguage,javascript}from"@codemirror/lang-javascript";import{EditorView}from"@codemirror/view";import{EditorSelection}from"@codemirror/state";import{syntaxTree,LRLanguage,indentNodeProp,foldNodeProp,bracketMatchingHandle,LanguageSupport}from"@codemirror/language";const Targets=["_blank","_self","_top","_parent"],Charsets=["ascii","utf-8","utf-16","latin1","latin1"],Methods=["get","post","put","delete"],Encs=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],Bool=["true","false"],S={},Tags={a:{attrs:{href:null,ping:null,type:null,media:null,target:Targets,hreflang:null}},abbr:S,address:S,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:S,aside:S,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:S,base:{attrs:{href:null,target:Targets}},bdi:S,bdo:S,blockquote:{attrs:{cite:null}},body:S,br:S,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:Encs,formmethod:Methods,formnovalidate:["novalidate"],formtarget:Targets,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:S,center:S,cite:S,code:S,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:S,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:S,div:S,dl:S,dt:S,em:S,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:S,figure:S,footer:S,form:{attrs:{action:null,name:null,"accept-charset":Charsets,autocomplete:["on","off"],enctype:Encs,method:Methods,novalidate:["novalidate"],target:Targets}},h1:S,h2:S,h3:S,h4:S,h5:S,h6:S,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:S,hgroup:S,hr:S,html:{attrs:{manifest:null}},i:S,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:Encs,formmethod:Methods,formnovalidate:["novalidate"],formtarget:Targets,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:S,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:S,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:S,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:Charsets,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:S,noscript:S,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:S,param:{attrs:{name:null,value:null}},pre:S,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:S,rt:S,ruby:S,samp:S,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:Charsets}},section:S,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},slot:{attrs:{name:null}},small:S,source:{attrs:{src:null,type:null,media:null}},span:S,strong:S,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:S,summary:S,sup:S,table:S,tbody:S,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:S,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:S,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:S,time:{attrs:{datetime:null}},title:S,tr:S,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},ul:{children:["li","script","template","ul","ol"]},var:S,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:S},GlobalAttrs={accesskey:null,class:null,contenteditable:Bool,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:Bool,autocorrect:Bool,autocapitalize:Bool,style:null,tabindex:null,title:null,translate:["yes","no"],rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":Bool,"aria-autocomplete":["inline","list","both","none"],"aria-busy":Bool,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":Bool,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":Bool,"aria-hidden":Bool,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":Bool,"aria-multiselectable":Bool,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":Bool,"aria-relevant":null,"aria-required":Bool,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},eventAttributes="beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map((e=>"on"+e));for(let e of eventAttributes)GlobalAttrs[e]=null;class Schema{constructor(e,t){this.tags=Object.assign(Object.assign({},Tags),e),this.globalAttrs=Object.assign(Object.assign({},GlobalAttrs),t),this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}}function elementName(e,t,l=e.length){if(!t)return"";let a=t.firstChild,n=a&&a.getChild("TagName");return n?e.sliceString(n.from,Math.min(n.to,l)):""}function findParentElement(e,t=!1){for(;e;e=e.parent)if("Element"==e.name){if(!t)return e;t=!1}return null}function allowedChildren(e,t,l){let a=l.tags[elementName(e,findParentElement(t))];return(null==a?void 0:a.children)||l.allTags}function openTags(e,t){let l=[];for(let a=findParentElement(t);a&&!a.type.isTop;a=findParentElement(a.parent)){let n=elementName(e,a);if(n&&"CloseTag"==a.lastChild.name)break;n&&l.indexOf(n)<0&&("EndTag"==t.name||t.from>=a.firstChild.to)&&l.push(n)}return l}Schema.default=new Schema;const identifier=/^[:\-\.\w\u00b7-\uffff]*$/;function completeTag(e,t,l,a,n){let r=/\s*>/.test(e.sliceDoc(n,n+5))?"":">",o=findParentElement(l,!0);return{from:a,to:n,options:allowedChildren(e.doc,o,t).map((e=>({label:e,type:"type"}))).concat(openTags(e.doc,l).map(((e,t)=>({label:"/"+e,apply:"/"+e+r,type:"type",boost:99-t})))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function completeCloseTag(e,t,l,a){let n=/\s*>/.test(e.sliceDoc(a,a+5))?"":">";return{from:l,to:a,options:openTags(e.doc,t).map(((e,t)=>({label:e,apply:e+n,type:"type",boost:99-t}))),validFor:identifier}}function completeStartTag(e,t,l,a){let n=[],r=0;for(let a of allowedChildren(e.doc,l,t))n.push({label:"<"+a,type:"type"});for(let t of openTags(e.doc,l))n.push({label:"</"+t+">",type:"type",boost:99-r++});return{from:a,to:a,options:n,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}function completeAttrName(e,t,l,a,n){let r=findParentElement(l),o=r?t.tags[elementName(e.doc,r)]:null,s=o&&o.attrs?Object.keys(o.attrs):[];return{from:a,to:n,options:(o&&!1===o.globalAttrs?s:s.length?s.concat(t.globalAttrNames):t.globalAttrNames).map((e=>({label:e,type:"property"}))),validFor:identifier}}function completeAttrValue(e,t,l,a,n){var r;let o,s=null===(r=l.parent)||void 0===r?void 0:r.getChild("AttributeName"),i=[];if(s){let r=e.sliceDoc(s.from,s.to),u=t.globalAttrs[r];if(!u){let a=findParentElement(l),n=a?t.tags[elementName(e.doc,a)]:null;u=(null==n?void 0:n.attrs)&&n.attrs[r]}if(u){let t=e.sliceDoc(a,n).toLowerCase(),l='"',r='"';/^['"]/.test(t)?(o='"'==t[0]?/^[^"]*$/:/^[^']*$/,l="",r=e.sliceDoc(n,n+1)==t[0]?"":t[0],t=t.slice(1),a++):o=/^[^\s<>='"]*$/;for(let e of u)i.push({label:e,apply:l+e+r,type:"constant"})}}return{from:a,to:n,options:i,validFor:o}}function htmlCompletionFor(e,t){let{state:l,pos:a}=t,n=syntaxTree(l).resolveInner(a,-1),r=n.resolve(a);for(let e,t=a;r==n&&(e=n.childBefore(t));){let l=e.lastChild;if(!l||!l.type.isError||l.from<l.to)break;r=n=e,t=l.from}return"TagName"==n.name?n.parent&&/CloseTag$/.test(n.parent.name)?completeCloseTag(l,n,n.from,a):completeTag(l,e,n,n.from,a):"StartTag"==n.name?completeTag(l,e,n,a,a):"StartCloseTag"==n.name||"IncompleteCloseTag"==n.name?completeCloseTag(l,n,a,a):t.explicit&&("OpenTag"==n.name||"SelfClosingTag"==n.name)||"AttributeName"==n.name?completeAttrName(l,e,n,"AttributeName"==n.name?n.from:a,a):"Is"==n.name||"AttributeValue"==n.name||"UnquotedAttributeValue"==n.name?completeAttrValue(l,e,n,"Is"==n.name?a:n.from,a):!t.explicit||"Element"!=r.name&&"Text"!=r.name&&"Document"!=r.name?null:completeStartTag(l,e,n,a)}function htmlCompletionSource(e){return htmlCompletionFor(Schema.default,e)}function htmlCompletionSourceWith(e){let{extraTags:t,extraGlobalAttributes:l}=e,a=l||t?new Schema(t,l):Schema.default;return e=>htmlCompletionFor(a,e)}const jsonParser=javascriptLanguage.parser.configure({top:"SingleExpression"}),defaultNesting=[{tag:"script",attrs:e=>"text/typescript"==e.type||"ts"==e.lang,parser:typescriptLanguage.parser},{tag:"script",attrs:e=>"text/babel"==e.type||"text/jsx"==e.type,parser:jsxLanguage.parser},{tag:"script",attrs:e=>"text/typescript-jsx"==e.type,parser:tsxLanguage.parser},{tag:"script",attrs:e=>/^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(e.type),parser:jsonParser},{tag:"script",attrs:e=>!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type),parser:javascriptLanguage.parser},{tag:"style",attrs:e=>(!e.lang||"css"==e.lang)&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type)),parser:cssLanguage.parser}],defaultAttrs=[{name:"style",parser:cssLanguage.parser.configure({top:"Styles"})}].concat(eventAttributes.map((e=>({name:e,parser:javascriptLanguage.parser})))),htmlPlain=LRLanguage.define({name:"html",parser:parser.configure({props:[indentNodeProp.add({Element(e){let t=/^(\s*)(<\/)?/.exec(e.textAfter);return e.node.to<=e.pos+t[0].length?e.continue():e.lineIndent(e.node.from)+(t[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag":e=>e.column(e.node.from)+e.unit,Document(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue();let t,l=null;for(let t=e.node;;){let e=t.lastChild;if(!e||"Element"!=e.name||e.to!=t.to)break;l=t=e}return l&&(!(t=l.lastChild)||"CloseTag"!=t.name&&"SelfClosingTag"!=t.name)?e.lineIndent(l.from)+e.unit:null}}),foldNodeProp.add({Element(e){let t=e.firstChild,l=e.lastChild;return t&&"OpenTag"==t.name?{from:t.to,to:"CloseTag"==l.name?l.from:e.to}:null}}),bracketMatchingHandle.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}}),htmlLanguage=htmlPlain.configure({wrap:configureNesting(defaultNesting,defaultAttrs)});function html(e={}){let t,l="";!1===e.matchClosingTags&&(l="noMatch"),!0===e.selfClosingTags&&(l=(l?l+" ":"")+"selfClosing"),(e.nestedLanguages&&e.nestedLanguages.length||e.nestedAttributes&&e.nestedAttributes.length)&&(t=configureNesting((e.nestedLanguages||[]).concat(defaultNesting),(e.nestedAttributes||[]).concat(defaultAttrs)));let a=t?htmlPlain.configure({wrap:t,dialect:l}):l?htmlLanguage.configure({dialect:l}):htmlLanguage;return new LanguageSupport(a,[htmlLanguage.data.of({autocomplete:htmlCompletionSourceWith(e)}),!1!==e.autoCloseTags?autoCloseTags:[],javascript().support,css().support])}const selfClosers=new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")),autoCloseTags=EditorView.inputHandler.of(((e,t,l,a,n)=>{if(e.composing||e.state.readOnly||t!=l||">"!=a&&"/"!=a||!htmlLanguage.isActiveAt(e.state,t,-1))return!1;let r=n(),{state:o}=r,s=o.changeByRange((e=>{var t,l,n;let r,s=o.doc.sliceString(e.from-1,e.to)==a,{head:i}=e,u=syntaxTree(o).resolveInner(i-1,-1);if("TagName"!=u.name&&"StartTag"!=u.name||(u=u.parent),s&&">"==a&&"OpenTag"==u.name){if("CloseTag"!=(null===(l=null===(t=u.parent)||void 0===t?void 0:t.lastChild)||void 0===l?void 0:l.name)&&(r=elementName(o.doc,u.parent,i))&&!selfClosers.has(r)){return{range:e,changes:{from:i,to:i+(">"===o.doc.sliceString(i,i+1)?1:0),insert:`</${r}>`}}}}else if(s&&"/"==a&&"IncompleteCloseTag"==u.name){let e=u.parent;if(u.from==i-2&&"CloseTag"!=(null===(n=e.lastChild)||void 0===n?void 0:n.name)&&(r=elementName(o.doc,e,i))&&!selfClosers.has(r)){let e=i+(">"===o.doc.sliceString(i,i+1)?1:0),t=`${r}>`;return{range:EditorSelection.cursor(i+t.length,-1),changes:{from:i,to:e,insert:t}}}}return{range:e}}));return!s.changes.empty&&(e.dispatch([r,o.update(s,{userEvent:"input.complete",scrollIntoView:!0})]),!0)}));export{autoCloseTags,html,htmlCompletionSource,htmlCompletionSourceWith,htmlLanguage,htmlPlain};