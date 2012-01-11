/*
 *  /MathJax/jax/output/NativeMML/jax.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

(function(j,b,f,d){var e,h=b.Browser.isMSIE;var g,a,c,i;b.Register.StartupHook("MathZoom Ready",function(){i=MathJax.Extension.MathZoom});j.Augment({config:{styles:{".MathJax_mmlExBox":{display:"block",overflow:"hidden",height:"1px",width:"60ex",padding:0,border:0,margin:0}}},settings:b.config.menuSettings,Config:function(){this.SUPER(arguments).Config.call(this);if(this.settings.scale){this.config.scale=this.settings.scale}if(b.config.displayAlign!=="center"){var m=b.config.displayAlign,k=b.config.displayIndent;var l={"text-align":m+"!important"};l["margin-"+m]=k+"!important";MathJax.Hub.Insert(this.config.styles,{"div.MathJax_MathML":l,"div.MathJax_MathML math":{"text-align":m},"div.MathJax_MathContainer > span":{"text-align":m+"!important"}})}this.require.push(MathJax.OutputJax.extensionDir+"/MathEvents.js")},Startup:function(){g=MathJax.Extension.MathEvents.Event;a=MathJax.Extension.MathEvents.Touch;c=MathJax.Extension.MathEvents.Hover;this.ContextMenu=g.ContextMenu;this.Mousedown=g.AltContextMenu;this.Mouseover=c.Mouseover;this.Mouseout=c.Mouseout;this.Mousemove=c.Mousemove;if(!h){this.EmExSpan=d.Element("span",{style:{position:"absolute","font-size-adjust":"none"}},[["div",{className:"MathJax_mmlExBox"}],["span",{className:"MathJax_MathML"}]]);e.math(e.mspace().With({width:"60ex"})).toNativeMML(this.EmExSpan.lastChild)}return f.Styles(this.config.styles)},InitializeMML:function(){this.initialized=true;if(h){try{var k=document.createElement("object");k.id="mathplayer";k.classid="clsid:32F66A20-7614-11D4-BD11-00104BD3F987";document.getElementsByTagName("head")[0].appendChild(k);document.namespaces.add("mjx","http://www.w3.org/1998/Math/MathML");document.namespaces.mjx.doImport("#mathplayer")}catch(l){alert("MathJax was not able to set up MathPlayer.\n\nIf MathPlayer is not installed, you need to install it first.\nOtherwise, your security settings may be preventing ActiveX     \ncontrols from running.  Use the Internet Options item under\nthe Tools menu and select the Security tab, then press the\nCustom Level button. Check that the settings for\n'Run ActiveX Controls', and 'Binary and script behaviors'\nare enabled.\n\nCurrently you will see error messages rather than\ntypeset mathematics.")}}else{document.body.appendChild(this.EmExSpan);this.defaultEx=this.EmExSpan.firstChild.offsetWidth/60;this.defaultMEx=this.EmExSpan.lastChild.offsetWidth/60;document.body.removeChild(this.EmExSpan)}},preTranslate:function(l){var r=l.jax[this.id],s,n=r.length,w,p,y,u,x,k,t,q,o;for(s=0;s<n;s++){w=r[s];if(!w.parentNode){continue}if(!this.initialized){this.InitializeMML()}p=w.previousSibling;if(p&&p.className==="MathJax_MathML"){p.parentNode.removeChild(p)}k=w.MathJax.elementJax;x=k.root;k.NativeMML={};var v=(x.Get("display")==="block"?"div":"span");y=d.Element(v,{className:"MathJax_MathML",id:k.inputID+"-Frame"},[["span",{className:"MathJax_MathContainer",isMathJax:true,jaxID:this.id,style:{position:"relative",display:"inline-block","white-space":"nowrap"}},[["span",{isMathJax:true,style:{display:"inline-block"}}]]]]);w.parentNode.insertBefore(y,w);if(!h){w.parentNode.insertBefore(this.EmExSpan.cloneNode(true),w)}}for(s=0;s<n;s++){w=r[s];if(!w.parentNode){continue}k=w.MathJax.elementJax;if(!h){u=w.previousSibling;y=u.previousSibling;t=u.firstChild.offsetWidth/60;q=u.lastChild.offsetWidth/60;if(t===0||t==="NaN"){t=this.defaultEx;q=this.defaultMEx}o=(q>1?t/q:1)*this.config.scale;o=Math.floor(Math.max(this.config.minScaleAdjust/100,o))}else{o=100}k.NativeMML.fontSize=o+"%"}if(!h){for(s=0;s<n;s++){w=r[s];if(!w.parentNode){continue}u=r[s].previousSibling;u.parentNode.removeChild(u)}}},Translate:function(m){if(!m.parentNode){return}var l=m.MathJax.elementJax,q=l.root;var o=document.getElementById(l.inputID+"-Frame"),k=o.firstChild,r=k.firstChild;o.style.fontSize=l.NativeMML.fontSize;try{q.toNativeMML(r)}catch(p){if(p.restart){while(r.firstChild){r.removeChild(r.firstChild)}}throw p}if(h){if(k.addEventListener){k.addEventListener("contextmenu",g.Menu,true);k.addEventListener("mouseover",g.Mouseover,true);k.addEventListener("mouseout",g.Mouseout,true);k.addEventListener("mousedown",g.Mousedown,true);k.addEventListener("mouseup",g.False,true);k.addEventListener("click",g.Click,true);k.addEventListener("dblclick",g.DblClick,true)}else{var n=(this.config.showMathMenuMSIE!=null?this:b).config;if(n.showMathMenuMSIE){this.MSIEoverlay(k)}else{k.style.position=""}}}else{k.oncontextmenu=g.Menu;k.onmouseover=g.Mouseover;k.onmouseout=g.Mouseout;k.onmousedown=g.Mousedown;k.onclick=g.Click;k.ondblclick=g.DblClick}},postTranslate:function(l){if(this.forceReflow){var k=(document.styleSheets||[])[0]||{};k.disabled=true;k.disabled=false}},Remove:function(k){var l=k.SourceElement();if(!l){return}l=l.previousSibling;if(!l){return}if(l.className.match(/MathJax_MathML/)){l.parentNode.removeChild(l)}},MMLnamespace:"http://www.w3.org/1998/Math/MathML",MSIEoverlay:function(k){var l=k.firstChild;if(l.nodeName.toLowerCase()==="span"){l=l.firstChild}var m=this.getHoverBBox(null,l,{});d.addElement(k,"span",{style:{display:"inline-block",width:0,height:0,position:"relative"}},[["span",{isMathJax:true,className:"MathJax_MathPlayer_Overlay",style:{display:"inline-block",position:"absolute",left:c.Px(-m.w),top:c.Px(-m.h-(m.y||0)-1),width:c.Px(m.w),height:c.Px(m.h+m.d),cursor:"pointer","background-color":"white",filter:"alpha(opacity=0)"}}]]);b.Insert(k,{msieMath:l,onmousedown:this.MSIEevent,oncontextmenu:this.MSIEevent,onclick:this.MSIEevent,onmouseup:this.MSIEevent,onmousemove:this.MSIEevent,ondblclick:this.MSIEevent,onmouseover:this.MSIEevent,onmouseout:this.MSIEevent})},MSIEevents:{mousedown:"Mousedown",contextmenu:"ContextMenu",click:"Click",mouseup:"Mouseup",mousemove:"Mousemove",dblclick:"DblClick",mouseover:"Mouseover",mouseout:"Mouseout"},MSIEevent:function(){var l=window.event;var k=j.MSIEevents[l.type];if(j[k]&&j[k](l,this)===false){return false}if(i&&i.HandleEvent(l,k,this)===false){return false}if(l.srcElement.className==="MathJax_MathPlayer_Overlay"&&this.msieMath.fireEvent){if(k==="ContextMenu"){this.msieMath.fireEvent("on"+l.type,l)}}return g.False(l)},getJaxFromMath:function(k){return b.getJaxFor(k.parentNode.nextSibling)},getHoverSpan:function(k,l){return l.firstChild},getHoverBBox:function(k,l,m){return g.getBBox(l.parentNode)},Zoom:function(l,r,p,k,o){l.root.toNativeMML(r,r);if(this.msieIE8HeightBug){r.style.position="absolute"}var m=p.offsetWidth||p.scrollWidth,s=p.offsetHeight||p.scrollHeight;var q=r.offsetWidth,n=r.offsetHeight;if(this.msieIE8HeightBug){r.style.position=""}return{Y:-g.getBBox(r.parentNode).h,mW:m,mH:s,zW:q,zH:n}},NAMEDSPACE:{negativeveryverythinmathspace:"-.0556em",negativeverythinmathspace:"-.1111em",negativethinmathspace:"-.1667em",negativemediummathspace:"-.2222em",negativethickmathspace:"-.2778em",negativeverythickmathspace:"-.3333em",negativeveryverythickmathspace:"-.3889em"}});b.Register.StartupHook("mml Jax Ready",function(){e=MathJax.ElementJax.mml;e.mbase.Augment({toNativeMML:function(p){var n=this.NativeMMLelement(this.type);this.NativeMMLattributes(n);for(var o=0,l=this.data.length;o<l;o++){if(this.data[o]){this.data[o].toNativeMML(n)}else{n.appendChild(this.NativeMMLelement("mrow"))}}p.appendChild(n)},NativeMMLattributes:function(n){var r=this.defaults;var t=(this.attrNames||e.copyAttributeNames),p=e.skipAttributes;if(!this.attrNames){if(this.type==="mstyle"){r=e.math.prototype.defaults}for(var s in r){if(!p[s]&&r.hasOwnProperty(s)){if(this[s]!=null){n.setAttribute(s,this.NativeMMLattribute(this[s]))}}}}for(var o=0,l=t.length;o<l;o++){var q=(this.attr||{})[t[o]];if(q==null){q=this[t[o]]}if(q!=null){n.setAttribute(t[o],this.NativeMMLattribute(q))}}this.NativeMMLclass(n)},NativeMMLclass:function(l){var n=[];if(this["class"]){n.push(this["class"])}if(this.isa(e.TeXAtom)){var m=["ORD","OP","BIN","REL","OPEN","CLOSE","PUNCT","INNER","VCENTER"][this.texClass];if(m){n.push("MJX-TeXAtom-"+m)}}if(this.mathvariant&&this.NativeMMLvariants[this.mathvariant]){n.push("MJX"+this.mathvariant)}if(this.arrow){n.push("MJX-arrow")}if(this.variantForm){n.push("MJX-variant")}if(n.length){l.setAttribute("class",n.join(" "))}},NativeMMLattribute:function(l){l=String(l);if(j.NAMEDSPACE[l]){l=j.NAMEDSPACE[l]}else{if(l.match(/^\s*(([-+])?(\d+(\.\d*)?|\.\d+))\s*mu\s*$/)){l=((1/18)*RegExp.$1).toFixed(3).replace(/\.?0+$/,"")+"em"}else{if(this.NativeMMLvariants[l]){l=this.NativeMMLvariants[l]}}}return l},NativeMMLvariants:{"-tex-caligraphic":e.VARIANT.SCRIPT,"-tex-caligraphic-bold":e.VARIANT.BOLDSCRIPT,"-tex-oldstyle":e.VARIANT.NORMAL,"-tex-oldstyle-bold":e.VARIANT.BOLD,"-tex-mathit":e.VARIANT.ITALIC},NativeMMLelement:function(l){var m=(h?document.createElement("mjx:"+l):document.createElementNS(j.MMLnamespace,l));m.isMathJax=true;return m}});e.mrow.Augment({toNativeMML:function(o){if(this.inferred&&this.parent.inferRow){for(var n=0,l=this.data.length;n<l;n++){if(this.data[n]){this.data[n].toNativeMML(o)}else{o.appendChild(this.NativeMMLelement("mrow"))}}}else{this.SUPER(arguments).toNativeMML.call(this,o)}}});e.msubsup.Augment({toNativeMML:function(q){var p=this.type;if(this.data[this.sup]==null){p="msub"}if(this.data[this.sub]==null){p="msup"}var n=this.NativeMMLelement(p);this.NativeMMLattributes(n);delete this.data[0].inferred;for(var o=0,l=this.data.length;o<l;o++){if(this.data[o]){this.data[o].toNativeMML(n)}}q.appendChild(n)}});e.munderover.Augment({toNativeMML:function(q){var p=this.type;if(this.data[this.under]==null){p="mover"}if(this.data[this.over]==null){p="munder"}var n=this.NativeMMLelement(p);this.NativeMMLattributes(n);delete this.data[0].inferred;for(var o=0,l=this.data.length;o<l;o++){if(this.data[o]){this.data[o].toNativeMML(n)}}q.appendChild(n)}});if(b.Browser.isFirefox){e.mtable.Augment({toNativeMML:function(l){if(this.width){var m=(this.style||"").replace(/;\s*$/,"").split(";");m.push("width:"+this.width);this.style=m.join(";")}this.SUPER(arguments).toNativeMML.call(this,l)}});if(!b.Browser.versionAtLeast("9.0")){e.mlabeledtr.Augment({toNativeMML:function(p){var n=this.NativeMMLelement("mtr");this.NativeMMLattributes(n);for(var o=1,l=this.data.length;o<l;o++){if(this.data[o]){this.data[o].toNativeMML(n)}else{n.appendChild(this.NativeMMLelement("mrow"))}}p.appendChild(n)}})}var k=MathJax.OutputJax.fontDir+"/HTML-CSS/TeX/otf";j.Augment({config:{styles:{'[mathvariant="double-struck"]':{"font-family":"MathJax_AMS, MathJax_AMS-WEB"},'[mathvariant="script"]':{"font-family":"MathJax_Script, MathJax_Script-WEB"},'[mathvariant="fraktur"]':{"font-family":"MathJax_Fraktur, MathJax_Fraktur-WEB"},'[mathvariant="bold-script"]':{"font-family":"MathJax_Script, MathJax_Caligraphic-WEB","font-weight":"bold"},'[mathvariant="bold-fraktur"]':{"font-family":"MathJax_Fraktur, MathJax_Fraktur-WEB","font-weight":"bold"},'[mathvariant="monospace"]':{"font-family":"monospace"},'[mathvariant="sans-serif"]':{"font-family":"sans-serif"},'[mathvariant="bold-sans-serif"]':{"font-family":"sans-serif","font-weight":"bold"},'[mathvariant="sans-serif-italic"]':{"font-family":"sans-serif","font-style":"italic"},'[mathvariant="sans-serif-bold-italic"]':{"font-family":"sans-serif","font-style":"italic","font-weight":"bold"},'[class="MJX-tex-oldstyle"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB"},'[class="MJX-tex-oldstyle-bold"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB","font-weight":"bold"},'[class="MJX-tex-caligraphic"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB"},'[class="MJX-tex-caligraphic-bold"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB","font-weight":"bold"},"@font-face /*1*/":{"font-family":"MathJax_AMS-WEB",src:"url('"+k+"/MathJax_AMS-Regular.otf')"},"@font-face /*2*/":{"font-family":"MathJax_Script-WEB",src:"url('"+k+"/MathJax_Script-Regular.otf')"},"@font-face /*3*/":{"font-family":"MathJax_Fraktur-WEB",src:"url('"+k+"/MathJax_Fraktur-Regular.otf')"},"@font-face /*4*/":{"font-family":"MathJax_Caligraphic-WEB",src:"url('"+k+"/MathJax_Caligraphic-Regular.otf')"},"@font-face /*5*/":{"font-family":"MathJax_Fraktur-WEB","font-weight":"bold",src:"url('"+k+"/MathJax_Fraktur-Bold.otf')"},"@font-face /*6*/":{"font-family":"MathJax_Caligraphic-WEB","font-weight":"bold",src:"url('"+k+"/MathJax_Caligraphic-Bold.otf')"}}}})}if(b.Browser.isChrome){e.math.Augment({toNativeMML:function(l){this.SUPER(arguments).toNativeMML.call(this,l);l.lastChild.setAttribute("xmlns",j.MMLnamespace)}})}e.TeXAtom.Augment({toNativeMML:function(m){var l=this.NativeMMLelement("mrow");this.NativeMMLattributes(l);this.data[0].toNativeMML(l);m.appendChild(l)}});e.chars.Augment({toNativeMML:function(l){l.appendChild(document.createTextNode(this.toString()))}});e.entity.Augment({toNativeMML:function(l){l.appendChild(document.createTextNode(this.toString()))}});e.xml.Augment({toNativeMML:function(o){for(var n=0,l=this.data.length;n<l;n++){o.appendChild(this.data[n].cloneNode(true))}}});b.Register.StartupHook("TeX mathchoice Ready",function(){e.TeXmathchoice.Augment({toNativeMML:function(l){this.Core().toNativeMML(l)}})});setTimeout(MathJax.Callback(["loadComplete",j,"jax.js"]),0)});b.Browser.Select({MSIE:function(k){var l=(document.documentMode||0);j.msieIE8HeightBug=(l===8)},Opera:function(k){j.operaPositionBug=true},Firefox:function(k){j.forceReflow=true}});b.Register.StartupHook("End Cookie",function(){if(b.config.menuSettings.zoom!=="None"){f.Require("[MathJax]/extensions/MathZoom.js")}})})(MathJax.OutputJax.NativeMML,MathJax.Hub,MathJax.Ajax,MathJax.HTML);

