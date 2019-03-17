/*
 *  /MathJax/jax/output/SVG/jax.js
 *
 *  Copyright (c) 2009-2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function(j, e, g, a) {
  var i;
  var h = MathJax.Object.isArray;
  var b = "http://www.w3.org/2000/svg";
  var m = "http://www.w3.org/1999/xlink";
  var k, c, f;
  var d =
    document.getElementsByTagName("base").length === 0
      ? ""
      : String(document.location).replace(/#.*$/, "");
  a.Augment({
    HFUZZ: 2,
    DFUZZ: 2,
    config: {
      styles: {
        ".MathJax_SVG": {
          display: "inline",
          "font-style": "normal",
          "font-weight": "normal",
          "line-height": "normal",
          "font-size": "100%",
          "font-size-adjust": "none",
          "text-indent": 0,
          "text-align": "left",
          "text-transform": "none",
          "letter-spacing": "normal",
          "word-spacing": "normal",
          "word-wrap": "normal",
          "white-space": "nowrap",
          float: "none",
          direction: "ltr",
          "max-width": "none",
          "max-height": "none",
          "min-width": 0,
          "min-height": 0,
          border: 0,
          padding: 0,
          margin: 0
        },
        ".MathJax_SVG_Display": {
          position: "relative",
          display: "block!important",
          "text-indent": 0,
          "max-width": "none",
          "max-height": "none",
          "min-width": 0,
          "min-height": 0,
          width: "100%"
        },
        ".MathJax_SVG *": {
          transition: "none",
          "-webkit-transition": "none",
          "-moz-transition": "none",
          "-ms-transition": "none",
          "-o-transition": "none"
        },
        ".MathJax_SVG > div": { display: "inline-block" },
        ".mjx-svg-href": { fill: "blue", stroke: "blue" },
        ".MathJax_SVG_Processing": {
          visibility: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          overflow: "hidden",
          display: "block!important"
        },
        ".MathJax_SVG_Processed": { display: "none!important" },
        ".MathJax_SVG_test": {
          "font-style": "normal",
          "font-weight": "normal",
          "font-size": "100%",
          "font-size-adjust": "none",
          "text-indent": 0,
          "text-transform": "none",
          "letter-spacing": "normal",
          "word-spacing": "normal",
          overflow: "hidden",
          height: "1px"
        },
        ".MathJax_SVG_test.mjx-test-display": { display: "table!important" },
        ".MathJax_SVG_test.mjx-test-inline": {
          display: "inline!important",
          "margin-right": "-1px"
        },
        ".MathJax_SVG_test.mjx-test-default": {
          display: "block!important",
          clear: "both"
        },
        ".MathJax_SVG_ex_box": {
          display: "inline-block!important",
          position: "absolute",
          overflow: "hidden",
          "min-height": 0,
          "max-height": "none",
          padding: 0,
          border: 0,
          margin: 0,
          width: "1px",
          height: "60ex"
        },
        ".mjx-test-inline .MathJax_SVG_left_box": {
          display: "inline-block",
          width: 0,
          float: "left"
        },
        ".mjx-test-inline .MathJax_SVG_right_box": {
          display: "inline-block",
          width: 0,
          float: "right"
        },
        ".mjx-test-display .MathJax_SVG_right_box": {
          display: "table-cell!important",
          width: "10000em!important",
          "min-width": 0,
          "max-width": "none",
          padding: 0,
          border: 0,
          margin: 0
        },
        "#MathJax_SVG_Tooltip": {
          position: "absolute",
          left: 0,
          top: 0,
          width: "auto",
          height: "auto",
          display: "none"
        }
      }
    },
    hideProcessedMath: true,
    fontNames: [
      "TeX",
      "STIX",
      "STIX-Web",
      "Asana-Math",
      "Gyre-Termes",
      "Gyre-Pagella",
      "Latin-Modern",
      "Neo-Euler"
    ],
    Config: function() {
      this.SUPER(arguments).Config.apply(this, arguments);
      var p = e.config.menuSettings,
        o = this.config,
        n = p.font;
      if (p.scale) {
        o.scale = p.scale;
      }
      if (n && n !== "Auto") {
        n = n.replace(/(Local|Web|Image)$/i, "");
        n = n.replace(/([a-z])([A-Z])/, "$1-$2");
        this.fontInUse = n;
      } else {
        this.fontInUse = o.font || "TeX";
      }
      if (this.fontNames.indexOf(this.fontInUse) < 0) {
        this.fontInUse = "TeX";
      }
      this.fontDir += "/" + this.fontInUse;
      if (!this.require) {
        this.require = [];
      }
      this.require.push(this.fontDir + "/fontdata.js");
      this.require.push(MathJax.OutputJax.extensionDir + "/MathEvents.js");
    },
    Startup: function() {
      k = MathJax.Extension.MathEvents.Event;
      c = MathJax.Extension.MathEvents.Touch;
      f = MathJax.Extension.MathEvents.Hover;
      this.ContextMenu = k.ContextMenu;
      this.Mousedown = k.AltContextMenu;
      this.Mouseover = f.Mouseover;
      this.Mouseout = f.Mouseout;
      this.Mousemove = f.Mousemove;
      this.hiddenDiv = g.Element("div", {
        style: {
          visibility: "hidden",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          height: "1px",
          width: "auto",
          padding: 0,
          border: 0,
          margin: 0,
          textAlign: "left",
          textIndent: 0,
          textTransform: "none",
          lineHeight: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal"
        }
      });
      if (!document.body.firstChild) {
        document.body.appendChild(this.hiddenDiv);
      } else {
        document.body.insertBefore(this.hiddenDiv, document.body.firstChild);
      }
      this.hiddenDiv = g.addElement(this.hiddenDiv, "div", {
        id: "MathJax_SVG_Hidden"
      });
      var n = g.addElement(this.hiddenDiv, "div", { style: { width: "5in" } });
      this.pxPerInch = n.offsetWidth / 5;
      this.hiddenDiv.removeChild(n);
      this.textSVG = this.Element("svg");
      l.GLYPH.defs = this.addElement(
        this.addElement(this.hiddenDiv.parentNode, "svg"),
        "defs",
        { id: "MathJax_SVG_glyphs" }
      );
      this.TestSpan = g.Element("span", { className: "MathJax_SVG_test" }, [
        ["span", { className: "MathJax_SVG_left_box" }],
        ["span", { className: "MathJax_SVG_ex_box" }],
        ["span", { className: "MathJax_SVG_right_box" }]
      ]);
      return j.Styles(this.config.styles, ["InitializeSVG", this]);
    },
    InitializeSVG: function() {
      var n = document.body.appendChild(this.TestSpan.cloneNode(true));
      n.className += " mjx-test-inline mjx-test-default";
      this.defaultEx = n.childNodes[1].offsetHeight / 60;
      this.defaultWidth = Math.max(
        0,
        n.lastChild.offsetLeft - n.firstChild.offsetLeft - 2
      );
      document.body.removeChild(n);
    },
    preTranslate: function(s) {
      var r = s.jax[this.id],
        D,
        z = r.length,
        y,
        G,
        w,
        C,
        u,
        E,
        p,
        F,
        o,
        v,
        t = false,
        A,
        q = this.config.linebreaks.automatic,
        x = this.config.linebreaks.width;
      if (q) {
        t = x.match(/^\s*(\d+(\.\d*)?%\s*)?container\s*$/) != null;
        if (t) {
          x = x.replace(/\s*container\s*/, "");
        } else {
          v = this.defaultWidth;
        }
        if (x === "") {
          x = "100%";
        }
      } else {
        v = 100000;
      }
      for (D = 0; D < z; D++) {
        G = r[D];
        if (!G.parentNode) {
          continue;
        }
        w = G.previousSibling;
        if (
          w &&
          String(w.className).match(
            /^MathJax(_SVG)?(_Display)?( MathJax(_SVG)?_Process(ing|ed))?$/
          )
        ) {
          w.parentNode.removeChild(w);
        }
        if (G.MathJax.preview) {
          G.MathJax.preview.style.display = "none";
        }
        p = G.MathJax.elementJax;
        if (!p) {
          continue;
        }
        p.SVG = {
          display: p.root.Get("display") === "block",
          preview: (p.SVG || {}).preview
        };
        C = u = g.Element("span", {
          style: {
            "font-size": this.config.scale + "%",
            display: "inline-block"
          },
          className: "MathJax_SVG",
          id: p.inputID + "-Frame",
          isMathJax: true,
          jaxID: this.id,
          oncontextmenu: k.Menu,
          onmousedown: k.Mousedown,
          onmouseover: k.Mouseover,
          onmouseout: k.Mouseout,
          onmousemove: k.Mousemove,
          onclick: k.Click,
          ondblclick: k.DblClick,
          onkeydown: k.Keydown,
          tabIndex: e.getTabOrder(p)
        });
        if (e.Browser.noContextMenu) {
          C.ontouchstart = c.start;
          C.ontouchend = c.end;
        }
        if (p.SVG.display) {
          u = g.Element("div", { className: "MathJax_SVG_Display" });
          u.appendChild(C);
        }
        u.className += " MathJax_SVG_Processing";
        G.parentNode.insertBefore(u, G);
        E = this.TestSpan.cloneNode(true);
        E.className += " mjx-test-" + (p.SVG.display ? "display" : "inline");
        G.parentNode.insertBefore(E, G);
      }
      var B = [];
      for (D = 0; D < z; D++) {
        G = r[D];
        if (!G.parentNode) {
          continue;
        }
        E = G.previousSibling;
        u = E.previousSibling;
        p = G.MathJax.elementJax;
        if (!p) {
          continue;
        }
        F = E.childNodes[1].offsetHeight / 60;
        A =
          (Math.max(
            0,
            p.SVG.display
              ? E.lastChild.offsetWidth - 1
              : E.lastChild.offsetLeft - E.firstChild.offsetLeft - 2
          ) /
            this.config.scale) *
          100;
        if (F === 0 || F === "NaN") {
          B.push(u);
          p.SVG.isHidden = true;
          F = this.defaultEx;
          A = this.defaultWidth;
        }
        if (A === 0 && !p.SVG.display) {
          A = this.defaultWidth;
        }
        if (t) {
          v = A;
        }
        p.SVG.ex = F;
        p.SVG.em = o = (F / a.TeX.x_height) * 1000;
        p.SVG.cwidth = (A / o) * 1000;
        p.SVG.lineWidth = q ? this.length2em(x, 1, (v / o) * 1000) : a.BIGDIMEN;
      }
      for (D = 0, y = B.length; D < y; D++) {
        this.hiddenDiv.appendChild(B[D]);
        this.addElement(this.hiddenDiv, "br");
      }
      for (D = 0; D < z; D++) {
        G = r[D];
        if (!G.parentNode) {
          continue;
        }
        p = G.MathJax.elementJax;
        if (!p) {
          continue;
        }
        G.parentNode.removeChild(G.previousSibling);
        if (G.MathJax.preview) {
          G.MathJax.preview.style.display = "";
        }
      }
      s.SVGeqn = s.SVGlast = 0;
      s.SVGi = -1;
      s.SVGchunk = this.config.EqnChunk;
      s.SVGdelay = false;
    },
    Translate: function(o, s) {
      if (!o.parentNode) {
        return;
      }
      if (s.SVGdelay) {
        s.SVGdelay = false;
        e.RestartAfter(MathJax.Callback.Delay(this.config.EqnChunkDelay));
      }
      var n = o.MathJax.elementJax,
        r = n.root,
        u,
        p,
        t = a.config.useFontCache && !a.config.useGlobalCache;
      if (n.SVG.isHidden) {
        p = document.getElementById(n.inputID + "-Frame");
        u = n.SVG.display ? p.parentElement : p;
      } else {
        u = o.previousSibling;
        p = n.SVG.display ? (u || {}).firstChild || u : u;
      }
      if (!u) {
        return;
      }
      this.em = i.mbase.prototype.em = n.SVG.em;
      this.ex = n.SVG.ex;
      this.linebreakWidth = n.SVG.lineWidth;
      this.cwidth = n.SVG.cwidth;
      this.mathDiv = u;
      p.appendChild(this.textSVG);
      if (t) {
        a.resetGlyphs();
      }
      this.initSVG(r, p);
      r.setTeXclass();
      try {
        r.toSVG(p, u);
      } catch (q) {
        if (q.restart) {
          while (p.firstChild) {
            p.removeChild(p.firstChild);
          }
        }
        if (t) {
          l.GLYPH.n--;
        }
        throw q;
      }
      p.removeChild(this.textSVG);
      if (n.SVG.isHidden) {
        o.parentNode.insertBefore(u, o);
      }
      u.className = u.className.split(/ /)[0];
      if (this.hideProcessedMath) {
        u.className += " MathJax_SVG_Processed";
        if (o.MathJax.preview) {
          n.SVG.preview = o.MathJax.preview;
          delete o.MathJax.preview;
        }
        s.SVGeqn += s.i - s.SVGi;
        s.SVGi = s.i;
        if (s.SVGeqn >= s.SVGlast + s.SVGchunk) {
          this.postTranslate(s, true);
          s.SVGchunk = Math.floor(s.SVGchunk * this.config.EqnChunkFactor);
          s.SVGdelay = true;
        }
      }
    },
    postTranslate: function(t, q) {
      var o = t.jax[this.id];
      if (!this.hideProcessedMath) {
        return;
      }
      for (var r = t.SVGlast, n = t.SVGeqn; r < n; r++) {
        var p = o[r];
        if (p && p.MathJax.elementJax) {
          p.previousSibling.className = p.previousSibling.className.split(
            / /
          )[0];
          var s = p.MathJax.elementJax.SVG;
          if (s.preview) {
            s.preview.innerHTML = "";
            p.MathJax.preview = s.preview;
            delete s.preview;
          }
        }
      }
      t.SVGlast = t.SVGeqn;
    },
    resetGlyphs: function(o) {
      if (this.config.useFontCache) {
        var n = l.GLYPH;
        if (this.config.useGlobalCache) {
          n.defs = document.getElementById("MathJax_SVG_glyphs");
          n.defs.innerHTML = "";
        } else {
          n.defs = this.Element("defs");
          n.n++;
        }
        n.glyphs = {};
        if (o) {
          n.n = 0;
        }
      }
    },
    hashCheck: function(n) {
      if (n && n.nodeName.toLowerCase() === "g") {
        do {
          n = n.parentNode;
        } while (n && n.firstChild.nodeName !== "svg");
      }
      return n;
    },
    getJaxFromMath: function(n) {
      if (n.parentNode.className.match(/MathJax_SVG_Display/)) {
        n = n.parentNode;
      }
      do {
        n = n.nextSibling;
      } while (n && n.nodeName.toLowerCase() !== "script");
      return e.getJaxFor(n);
    },
    getHoverSpan: function(n, o) {
      o.style.position = "relative";
      return o.firstChild;
    },
    getHoverBBox: function(n, o, p) {
      var q = k.getBBox(o.parentNode);
      q.h += 2;
      q.d -= 2;
      return q;
    },
    Zoom: function(o, x, w, n, u) {
      x.className = "MathJax_SVG";
      var z = x.appendChild(this.TestSpan.cloneNode(true));
      var t = z.childNodes[1].offsetHeight / 60;
      this.em = i.mbase.prototype.em = (t / a.TeX.x_height) * 1000;
      this.ex = t;
      this.linebreakWidth = o.SVG.lineWidth;
      this.cwidth = o.SVG.cwidth;
      z.parentNode.removeChild(z);
      x.appendChild(this.textSVG);
      this.mathDIV = x;
      this.zoomScale = parseInt(e.config.menuSettings.zscale) / 100;
      var s = o.root.data[0].SVGdata.tw;
      if (s && s < this.cwidth) {
        this.cwidth = s;
      }
      this.idPostfix = "-zoom";
      o.root.toSVG(x, x);
      this.idPostfix = "";
      this.zoomScale = 1;
      x.removeChild(this.textSVG);
      var r = x.getElementsByTagName("svg")[0].style;
      r.marginTop = r.marginRight = r.marginLeft = 0;
      if (r.marginBottom.charAt(0) === "-") {
        x.style.marginBottom = r.marginBottom.substr(1);
      }
      if (this.operaZoomRefresh) {
        setTimeout(function() {
          x.firstChild.style.border = "1px solid transparent";
        }, 1);
      }
      if (x.offsetWidth < x.firstChild.offsetWidth) {
        x.style.minWidth = x.firstChild.offsetWidth + "px";
        w.style.minWidth = w.firstChild.offsetWidth + "px";
      }
      x.style.position = w.style.position = "absolute";
      var v = x.offsetWidth,
        q = x.offsetHeight,
        y = w.offsetHeight,
        p = w.offsetWidth;
      x.style.position = w.style.position = "";
      return { Y: -k.getBBox(x).h, mW: p, mH: y, zW: v, zH: q };
    },
    initSVG: function(o, n) {},
    Remove: function(n) {
      var o = document.getElementById(n.inputID + "-Frame");
      if (o) {
        if (n.SVG.display) {
          o = o.parentNode;
        }
        o.parentNode.removeChild(o);
      }
      delete n.SVG;
    },
    Em: function(n) {
      if (Math.abs(n) < 0.0006) {
        return "0";
      }
      return n.toFixed(3).replace(/\.?0+$/, "") + "em";
    },
    Ex: function(n) {
      n = n / this.TeX.x_height;
      if (Math.abs(n) < 0.0006) {
        return "0";
      }
      return n.toFixed(3).replace(/\.?0+$/, "") + "ex";
    },
    Percent: function(n) {
      return (100 * n).toFixed(1).replace(/\.?0+$/, "") + "%";
    },
    Fixed: function(o, p) {
      if (Math.abs(o) < 0.0006) {
        return "0";
      }
      return o.toFixed(p || 3).replace(/\.?0+$/, "");
    },
    length2em: function(s, o, q) {
      if (typeof s !== "string") {
        s = s.toString();
      }
      if (s === "") {
        return "";
      }
      if (s === i.SIZE.NORMAL) {
        return 1000;
      }
      if (s === i.SIZE.BIG) {
        return 2000;
      }
      if (s === i.SIZE.SMALL) {
        return 710;
      }
      if (s === "infinity") {
        return a.BIGDIMEN;
      }
      if (s.match(/mathspace$/)) {
        return 1000 * a.MATHSPACE[s];
      }
      var t = (this.zoomScale || 1) / a.em;
      var p = s.match(
        /^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/
      );
      var n = parseFloat(p[1] || "1") * 1000,
        r = p[2];
      if (q == null) {
        q = 1000;
      }
      if (o == null) {
        o = 1;
      }
      if (r === "em") {
        return n;
      }
      if (r === "ex") {
        return (n * a.TeX.x_height) / 1000;
      }
      if (r === "%") {
        return ((n / 100) * q) / 1000;
      }
      if (r === "px") {
        return n * t;
      }
      if (r === "pt") {
        return n / 10;
      }
      if (r === "pc") {
        return n * 1.2;
      }
      if (r === "in") {
        return n * this.pxPerInch * t;
      }
      if (r === "cm") {
        return (n * this.pxPerInch * t) / 2.54;
      }
      if (r === "mm") {
        return (n * this.pxPerInch * t) / 25.4;
      }
      if (r === "mu") {
        return (n / 18) * o;
      }
      return (n * q) / 1000;
    },
    thickness2em: function(o, n) {
      var p = a.TeX.rule_thickness;
      if (o === i.LINETHICKNESS.MEDIUM) {
        return p;
      }
      if (o === i.LINETHICKNESS.THIN) {
        return 0.67 * p;
      }
      if (o === i.LINETHICKNESS.THICK) {
        return 1.67 * p;
      }
      return this.length2em(o, n, p);
    },
    border2em: function(o, n) {
      if (o === i.LINETHICKNESS.THIN) {
        o = "1px";
      }
      if (o === i.LINETHICKNESS.MEDIUM) {
        o = "3px";
      }
      if (o === i.LINETHICKNESS.THICK) {
        o = "5px";
      }
      return this.length2em(o, n);
    },
    getPadding: function(o) {
      var q = { top: 0, right: 0, bottom: 0, left: 0 },
        n = false;
      for (var r in q) {
        if (q.hasOwnProperty(r)) {
          var p = o["padding" + r.charAt(0).toUpperCase() + r.substr(1)];
          if (p) {
            q[r] = this.length2em(p);
            n = true;
          }
        }
      }
      return n ? q : false;
    },
    getBorders: function(r) {
      var p = { top: 0, right: 0, bottom: 0, left: 0 },
        o = false;
      for (var s in p) {
        if (p.hasOwnProperty(s)) {
          var n = "border" + s.charAt(0).toUpperCase() + s.substr(1);
          var q = r[n + "Style"];
          if (q && q !== "none") {
            o = true;
            p[s] = this.border2em(r[n + "Width"] || i.LINETHICKNESS.MEDIUM);
            p[s + "Style"] = r[n + "Style"];
            p[s + "Color"] = r[n + "Color"];
            if (p[s + "Color"] === "initial") {
              p[s + "Color"] = "";
            }
          } else {
            delete p[s];
          }
        }
      }
      return o ? p : false;
    },
    Element: function(n, o) {
      var p = typeof n === "string" ? document.createElementNS(b, n) : n;
      p.isMathJax = true;
      if (o) {
        for (var q in o) {
          if (o.hasOwnProperty(q)) {
            p.setAttribute(q, o[q].toString());
          }
        }
      }
      return p;
    },
    addElement: function(o, n, p) {
      return o.appendChild(this.Element(n, p));
    },
    TextNode: g.TextNode,
    addText: g.addText,
    ucMatch: g.ucMatch,
    HandleVariant: function(u, t, D) {
      var x = l.G();
      var q, z, B, r, C, v, s, p, A, o;
      if (!u) {
        u = this.FONTDATA.VARIANT[i.VARIANT.NORMAL];
      }
      if (u.forceFamily) {
        D = l.TEXT(t, D, u.font);
        if (u.h != null) {
          D.h = u.h;
        }
        if (u.d != null) {
          D.d = u.d;
        }
        x.Add(D);
        D = "";
      }
      C = u;
      for (v = 0, s = D.length; v < s; v++) {
        u = C;
        q = D.charCodeAt(v);
        B = D.charAt(v);
        if (q >= 55296 && q < 56319) {
          v++;
          q = ((q - 55296) << 10) + (D.charCodeAt(v) - 56320) + 65536;
          if (this.FONTDATA.RemapPlane1) {
            var y = this.FONTDATA.RemapPlane1(q, u);
            q = y.n;
            u = y.variant;
          }
        } else {
          o = this.FONTDATA.RANGES;
          for (p = 0, A = o.length; p < A; p++) {
            if (o[p].name === "alpha" && u.noLowerCase) {
              continue;
            }
            z = u["offset" + o[p].offset];
            if (z && q >= o[p].low && q <= o[p].high) {
              if (o[p].remap && o[p].remap[q]) {
                q = z + o[p].remap[q];
              } else {
                if (o[p].remapOnly) {
                  break;
                }
                q = q - o[p].low + z;
                if (o[p].add) {
                  q += o[p].add;
                }
              }
              if (u["variant" + o[p].offset]) {
                u = this.FONTDATA.VARIANT[u["variant" + o[p].offset]];
              }
              break;
            }
          }
        }
        if (u.remap && u.remap[q]) {
          q = u.remap[q];
          if (u.remap.variant) {
            u = this.FONTDATA.VARIANT[u.remap.variant];
          }
        } else {
          if (this.FONTDATA.REMAP[q] && !u.noRemap) {
            q = this.FONTDATA.REMAP[q];
          }
        }
        if (h(q)) {
          u = this.FONTDATA.VARIANT[q[1]];
          q = q[0];
        }
        if (typeof q === "string") {
          D = q + D.substr(v + 1);
          s = D.length;
          v = -1;
          continue;
        }
        r = this.lookupChar(u, q);
        B = r[q];
        if (B) {
          if ((B[5] && B[5].space) || (B[5] === "" && B[0] + B[1] === 0)) {
            x.w += B[2];
          } else {
            B = [t, r.id + "-" + q.toString(16).toUpperCase()].concat(B);
            x.Add(l.GLYPH.apply(l, B), x.w, 0);
          }
        } else {
          if (this.FONTDATA.DELIMITERS[q]) {
            B = this.createDelimiter(q, 0, 1, r);
            x.Add(B, x.w, this.FONTDATA.DELIMITERS[q].dir === "V" ? B.d : 0);
          } else {
            if (q <= 65535) {
              B = String.fromCharCode(q);
            } else {
              z = q - 65536;
              B =
                String.fromCharCode((z >> 10) + 55296) +
                String.fromCharCode((z & 1023) + 56320);
            }
            var w = l.TEXT((t * 100) / a.config.scale, B, {
              "font-family": u.defaultFamily || a.config.undefinedFamily,
              "font-style": u.italic ? "italic" : "",
              "font-weight": u.bold ? "bold" : ""
            });
            if (u.h != null) {
              w.h = u.h;
            }
            if (u.d != null) {
              w.d = u.d;
            }
            B = l.G();
            B.Add(w);
            x.Add(B, x.w, 0);
            e.signal.Post(["SVG Jax - unknown char", q, u]);
          }
        }
      }
      if (a.isChar(D) && r.skew && r.skew[q]) {
        x.skew = r.skew[q] * 1000;
      }
      if (
        x.element.childNodes.length === 1 &&
        !x.element.firstChild.getAttribute("x")
      ) {
        x.element = x.element.firstChild;
        x.removeable = false;
        x.scale = t;
      }
      return x;
    },
    lookupChar: function(r, u) {
      var q, o;
      if (!r.FONTS) {
        var t = this.FONTDATA.FONTS;
        var s = r.fonts || this.FONTDATA.VARIANT.normal.fonts;
        if (!(s instanceof Array)) {
          s = [s];
        }
        if (r.fonts != s) {
          r.fonts = s;
        }
        r.FONTS = [];
        for (q = 0, o = s.length; q < o; q++) {
          if (t[s[q]]) {
            r.FONTS.push(t[s[q]]);
          }
        }
      }
      for (q = 0, o = r.FONTS.length; q < o; q++) {
        var p = r.FONTS[q];
        if (typeof p === "string") {
          delete r.FONTS;
          this.loadFont(p);
        }
        if (p[u]) {
          return p;
        } else {
          this.findBlock(p, u);
        }
      }
      return { id: "unknown" };
    },
    isChar: function(o) {
      if (o.length === 1) {
        return true;
      }
      if (o.length !== 2) {
        return false;
      }
      var p = o.charCodeAt(0);
      return p >= 55296 && p < 56319;
    },
    findBlock: function(o, s) {
      if (o.Ranges) {
        for (var r = 0, n = o.Ranges.length; r < n; r++) {
          if (s < o.Ranges[r][0]) {
            return;
          }
          if (s <= o.Ranges[r][1]) {
            var q = o.Ranges[r][2];
            for (var p = o.Ranges.length - 1; p >= 0; p--) {
              if (o.Ranges[p][2] == q) {
                o.Ranges.splice(p, 1);
              }
            }
            this.loadFont(o.directory + "/" + q + ".js");
          }
        }
      }
    },
    loadFont: function(n) {
      e.RestartAfter(j.Require(this.fontDir + "/" + n));
    },
    createDelimiter: function(n, p, s, q) {
      if (!s) {
        s = 1;
      }
      var u = l.G();
      if (!n) {
        u.Clean();
        delete u.element;
        u.w = u.r = this.TeX.nulldelimiterspace * s;
        return u;
      }
      if (!(p instanceof Array)) {
        p = [p, p];
      }
      var v = p[1];
      p = p[0];
      var o = { alias: n };
      while (o.alias) {
        n = o.alias;
        o = this.FONTDATA.DELIMITERS[n];
        if (!o) {
          o = { HW: [0, this.FONTDATA.VARIANT[i.VARIANT.NORMAL]] };
        }
      }
      if (o.load) {
        e.RestartAfter(j.Require(this.fontDir + "/fontdata-" + o.load + ".js"));
      }
      for (var t = 0, r = o.HW.length; t < r; t++) {
        if (
          o.HW[t][0] * s >= p - 10 - a.config.blacker ||
          (t == r - 1 && !o.stretch)
        ) {
          if (o.HW[t][2]) {
            s *= o.HW[t][2];
          }
          if (o.HW[t][3]) {
            n = o.HW[t][3];
          }
          return this.createChar(s, [n, o.HW[t][1]], q).With({
            stretched: true
          });
        }
      }
      if (o.stretch) {
        this["extendDelimiter" + o.dir](u, v, o.stretch, s, q);
      }
      return u;
    },
    createChar: function(u, s, p) {
      var t = "",
        r = { fonts: [s[1]], noRemap: true };
      if (p && p === i.VARIANT.BOLD) {
        r.fonts = [s[1] + "-bold", s[1]];
      }
      if (typeof s[1] !== "string") {
        r = s[1];
      }
      if (s[0] instanceof Array) {
        for (var q = 0, n = s[0].length; q < n; q++) {
          t += String.fromCharCode(s[0][q]);
        }
      } else {
        t = String.fromCharCode(s[0]);
      }
      if (s[4]) {
        u = u * s[4];
      }
      var o = this.HandleVariant(r, u, t);
      if (s[2]) {
        o.x = s[2] * 1000;
      }
      if (s[3]) {
        o.y = s[3] * 1000;
      }
      if (s[5]) {
        o.h += s[5] * 1000;
      }
      if (s[6]) {
        o.d += s[6] * 1000;
      }
      return o;
    },
    extendDelimiterV: function(u, C, o, q, p) {
      var A = this.createChar(q, o.top || o.ext, p);
      var w = this.createChar(q, o.bot || o.ext, p);
      var t = A.h + A.d + w.h + w.d;
      var z = -A.h;
      u.Add(A, 0, z);
      z -= A.d;
      if (o.mid) {
        var B = this.createChar(q, o.mid, p);
        t += B.h + B.d;
      }
      if (o.min && C < t * o.min) {
        C = t * o.min;
      }
      if (C > t) {
        var n = this.createChar(q, o.ext, p);
        var r = o.mid ? 2 : 1,
          x = (C - t) / r,
          D = (x + 100) / (n.h + n.d);
        while (r-- > 0) {
          var v = a.Element("g", {
            transform:
              "translate(" +
              n.y +
              "," +
              (z - D * n.h + 50 + n.y) +
              ") scale(1," +
              D +
              ")"
          });
          v.appendChild(n.element.cloneNode(false));
          u.element.appendChild(v);
          z -= x;
          if (o.mid && r) {
            u.Add(B, 0, z - B.h);
            z -= B.h + B.d;
          }
        }
      } else {
        if (o.mid) {
          z += (t - C) / 2;
          u.Add(B, 0, z - B.h);
          z += -(B.h + B.d) + (t - C) / 2;
        } else {
          z += t - C;
        }
      }
      u.Add(w, 0, z - w.h);
      u.Clean();
      u.scale = q;
      u.isMultiChar = true;
    },
    extendDelimiterH: function(v, q, o, t, p) {
      var r = this.createChar(t, o.left || o.rep, p);
      var E = this.createChar(t, o.right || o.rep, p);
      v.Add(r, -r.l, 0);
      var D = r.r - r.l + (E.r - E.l),
        B = r.r - r.l;
      if (o.mid) {
        var C = this.createChar(t, o.mid, p);
        D += C.w;
      }
      if (o.min && q < D * o.min) {
        q = D * o.min;
      }
      if (q > D) {
        var A = this.createChar(t, o.rep, p),
          n = o.fuzz || 0;
        var u = o.mid ? 2 : 1,
          z = (q - D) / u,
          F = (z + n) / (A.r - A.l);
        while (u-- > 0) {
          var y = a.Element("g", {
            transform:
              "translate(" +
              (B - n / 2 - F * A.l + A.x) +
              "," +
              A.y +
              ") scale(" +
              F +
              ",1)"
          });
          y.appendChild(A.element.cloneNode(false));
          v.element.appendChild(y);
          B += z;
          if (o.mid && u) {
            v.Add(C, B, 0);
            B += C.w;
          }
        }
      } else {
        if (o.mid) {
          B -= (D - q) / 2;
          v.Add(C, B, 0);
          B += C.w - (D - q) / 2;
        } else {
          B -= D - q;
        }
      }
      v.Add(E, B - E.l, 0);
      v.Clean();
      v.scale = t;
      v.isMultiChar = true;
    },
    MATHSPACE: {
      veryverythinmathspace: 1 / 18,
      verythinmathspace: 2 / 18,
      thinmathspace: 3 / 18,
      mediummathspace: 4 / 18,
      thickmathspace: 5 / 18,
      verythickmathspace: 6 / 18,
      veryverythickmathspace: 7 / 18,
      negativeveryverythinmathspace: -1 / 18,
      negativeverythinmathspace: -2 / 18,
      negativethinmathspace: -3 / 18,
      negativemediummathspace: -4 / 18,
      negativethickmathspace: -5 / 18,
      negativeverythickmathspace: -6 / 18,
      negativeveryverythickmathspace: -7 / 18
    },
    TeX: {
      x_height: 430.554,
      quad: 1000,
      num1: 676.508,
      num2: 393.732,
      num3: 443.73,
      denom1: 685.951,
      denom2: 344.841,
      sup1: 412.892,
      sup2: 362.892,
      sup3: 288.888,
      sub1: 150,
      sub2: 247.217,
      sup_drop: 386.108,
      sub_drop: 50,
      delim1: 2390,
      delim2: 1000,
      axis_height: 250,
      rule_thickness: 60,
      big_op_spacing1: 111.111,
      big_op_spacing2: 166.666,
      big_op_spacing3: 200,
      big_op_spacing4: 600,
      big_op_spacing5: 100,
      scriptspace: 100,
      nulldelimiterspace: 120,
      delimiterfactor: 901,
      delimitershortfall: 300,
      min_rule_thickness: 1.25,
      min_root_space: 1.5
    },
    BIGDIMEN: 10000000,
    NBSP: "\u00A0"
  });
  var l = (a.BBOX = MathJax.Object.Subclass({
    type: "g",
    removeable: true,
    Init: function(n) {
      this.h = this.d = -a.BIGDIMEN;
      this.H = this.D = 0;
      this.w = this.r = 0;
      this.l = a.BIGDIMEN;
      this.x = this.y = 0;
      this.scale = 1;
      this.n = 0;
      if (this.type) {
        this.element = a.Element(this.type, n);
      }
    },
    With: function(n) {
      return e.Insert(this, n);
    },
    Add: function(q, w, v, n, u) {
      if (w) {
        q.x += w;
      }
      if (v) {
        q.y += v;
      }
      if (q.element) {
        if (q.removeable && q.element.childNodes.length === 1 && q.n === 1) {
          var o = q.element.firstChild,
            s = o.nodeName.toLowerCase();
          if (s === "use" || s === "rect") {
            q.element = o;
            q.scale = q.childScale;
            var t = q.childX,
              r = q.childY;
            q.x += t;
            q.y += r;
            q.h -= r;
            q.d += r;
            q.H -= r;
            q.D += r;
            q.w -= t;
            q.r -= t;
            q.l += t;
            q.removeable = false;
            o.setAttribute("x", Math.floor(q.x / q.scale));
            o.setAttribute("y", Math.floor(q.y / q.scale));
          }
        }
        if (Math.abs(q.x) < 1 && Math.abs(q.y) < 1) {
          q.remove = q.removeable;
        } else {
          s = q.element.nodeName.toLowerCase();
          if (s === "g") {
            if (!q.element.firstChild) {
              q.remove = q.removeable;
            } else {
              q.element.setAttribute(
                "transform",
                "translate(" + Math.floor(q.x) + "," + Math.floor(q.y) + ")"
              );
            }
          } else {
            if (s === "line" || s === "polygon" || s === "path" || s === "a") {
              var p = q.element.getAttribute("transform") || "";
              if (p) {
                p = " " + p;
              }
              p =
                "translate(" +
                Math.floor(q.x) +
                "," +
                Math.floor(q.y) +
                ")" +
                p;
              q.element.setAttribute("transform", p);
            } else {
              q.element.setAttribute("x", Math.floor(q.x / q.scale));
              q.element.setAttribute("y", Math.floor(q.y / q.scale));
            }
          }
        }
        if (q.remove) {
          this.n += q.n;
          while (q.element.firstChild) {
            if (u && this.element.firstChild) {
              this.element.insertBefore(
                q.element.firstChild,
                this.element.firstChild
              );
            } else {
              this.element.appendChild(q.element.firstChild);
            }
          }
        } else {
          if (u) {
            this.element.insertBefore(q.element, this.element.firstChild);
          } else {
            this.element.appendChild(q.element);
          }
        }
        delete q.element;
      }
      if (q.hasIndent) {
        this.hasIndent = q.hasIndent;
      }
      if (q.tw != null) {
        this.tw = q.tw;
      }
      if (q.d - q.y > this.d) {
        this.d = q.d - q.y;
        if (this.d > this.D) {
          this.D = this.d;
        }
      }
      if (q.y + q.h > this.h) {
        this.h = q.y + q.h;
        if (this.h > this.H) {
          this.H = this.h;
        }
      }
      if (q.D - q.y > this.D) {
        this.D = q.D - q.y;
      }
      if (q.y + q.H > this.H) {
        this.H = q.y + q.H;
      }
      if (q.x + q.l < this.l) {
        this.l = q.x + q.l;
      }
      if (q.x + q.r > this.r) {
        this.r = q.x + q.r;
      }
      if (n || q.x + q.w + (q.X || 0) > this.w) {
        this.w = q.x + q.w + (q.X || 0);
      }
      this.childScale = q.scale;
      this.childX = q.x;
      this.childY = q.y;
      this.n++;
      return q;
    },
    Align: function(r, s, q, p, o) {
      q =
        { left: q, center: (this.w - r.w) / 2, right: this.w - r.w - q }[s] ||
        0;
      var n = this.w;
      this.Add(r, q + (o || 0), p);
      this.w = n;
    },
    Clean: function() {
      if (this.h === -a.BIGDIMEN) {
        this.h = this.d = this.l = 0;
      }
      return this;
    }
  }));
  l.ROW = l.Subclass({
    Init: function() {
      this.SUPER(arguments).Init.call(this);
      this.svg = [];
      this.sh = this.sd = 0;
    },
    Check: function(o) {
      var n = o.toSVG();
      this.svg.push(n);
      if (o.SVGcanStretch("Vertical")) {
        n.mml = o;
      }
      if (n.h + n.y > this.sh) {
        this.sh = n.h + n.y;
      }
      if (n.d - n.y > this.sd) {
        this.sd = n.d - n.y;
      }
    },
    Stretch: function() {
      for (var q = 0, n = this.svg.length; q < n; q++) {
        var o = this.svg[q],
          p = o.mml;
        if (p) {
          if (
            p.forceStretch ||
            p.SVGdata.h !== this.sh ||
            p.SVGdata.d !== this.sd
          ) {
            o = p.SVGstretchV(this.sh, this.sd);
          }
          p.SVGdata.HW = this.sh;
          p.SVGdata.D = this.sd;
        }
        if (o.ic) {
          this.ic = o.ic;
        } else {
          delete this.ic;
        }
        this.Add(o, this.w, 0, true);
      }
      delete this.svg;
    }
  });
  l.RECT = l.Subclass({
    type: "rect",
    removeable: false,
    Init: function(o, q, n, p) {
      if (p == null) {
        p = { stroke: "none" };
      }
      p.width = Math.floor(n);
      p.height = Math.floor(o + q);
      this.SUPER(arguments).Init.call(this, p);
      this.w = this.r = n;
      this.h = this.H = o + q;
      this.d = this.D = this.l = 0;
      this.y = -q;
    }
  });
  l.FRAME = l.Subclass({
    type: "rect",
    removeable: false,
    Init: function(q, u, n, p, s, o, r) {
      if (r == null) {
        r = {};
      }
      r.fill = "none";
      r["stroke-width"] = a.Fixed(p, 2);
      r.width = Math.floor(n - p);
      r.height = Math.floor(q + u - p);
      r.transform =
        "translate(" + Math.floor(p / 2) + "," + Math.floor(-u + p / 2) + ")";
      if (s === "dashed") {
        r["stroke-dasharray"] = [
          Math.floor(6 * a.em),
          Math.floor(6 * a.em)
        ].join(" ");
      }
      this.SUPER(arguments).Init.call(this, r);
      this.w = this.r = n;
      this.h = this.H = q;
      this.d = this.D = u;
      this.l = 0;
    }
  });
  l.HLINE = l.Subclass({
    type: "line",
    removeable: false,
    Init: function(p, r, u, q, s) {
      if (s == null) {
        s = { "stroke-linecap": "square" };
      }
      if (q && q !== "") {
        s.stroke = q;
      }
      s["stroke-width"] = a.Fixed(r, 2);
      s.x1 = s.y1 = s.y2 = Math.floor(r / 2);
      s.x2 = Math.floor(p - r / 2);
      if (u === "dashed") {
        var v = Math.floor(Math.max(0, p - r) / (6 * r)),
          o = Math.floor(Math.max(0, p - r) / (2 * v + 1));
        s["stroke-dasharray"] = o + " " + o;
      }
      if (u === "dotted") {
        s["stroke-dasharray"] = [1, Math.max(150, Math.floor(2 * r))].join(" ");
        s["stroke-linecap"] = "round";
      }
      this.SUPER(arguments).Init.call(this, s);
      this.w = this.r = p;
      this.l = 0;
      this.h = this.H = r;
      this.d = this.D = 0;
    }
  });
  l.VLINE = l.Subclass({
    type: "line",
    removeable: false,
    Init: function(r, q, u, p, s) {
      if (s == null) {
        s = { "stroke-linecap": "square" };
      }
      if (p && p !== "") {
        s.stroke = p;
      }
      s["stroke-width"] = a.Fixed(q, 2);
      s.x1 = s.x2 = s.y1 = Math.floor(q / 2);
      s.y2 = Math.floor(r - q / 2);
      if (u === "dashed") {
        var v = Math.floor(Math.max(0, r - q) / (6 * q)),
          o = Math.floor(Math.max(0, r - q) / (2 * v + 1));
        s["stroke-dasharray"] = o + " " + o;
      }
      if (u === "dotted") {
        s["stroke-dasharray"] = [1, Math.max(150, Math.floor(2 * q))].join(" ");
        s["stroke-linecap"] = "round";
      }
      this.SUPER(arguments).Init.call(this, s);
      this.w = this.r = q;
      this.l = 0;
      this.h = this.H = r;
      this.d = this.D = 0;
    }
  });
  l.TEXT = l.Subclass({
    type: "text",
    removeable: false,
    Init: function(q, p, n) {
      if (!n) {
        n = {};
      }
      n.stroke = "none";
      if (n["font-style"] === "") {
        delete n["font-style"];
      }
      if (n["font-weight"] === "") {
        delete n["font-weight"];
      }
      this.SUPER(arguments).Init.call(this, n);
      a.addText(this.element, p);
      a.textSVG.appendChild(this.element);
      var o = this.element.getBBox();
      a.textSVG.removeChild(this.element);
      q *= 1000 / a.em;
      this.element.setAttribute(
        "transform",
        "scale(" + a.Fixed(q) + ") matrix(1 0 0 -1 0 0)"
      );
      this.w = this.r = o.width * q;
      this.l = 0;
      this.h = this.H = -o.y * q;
      this.d = this.D = (o.height + o.y) * q;
    }
  });
  l.G = l;
  l.NULL = l.Subclass({
    Init: function() {
      this.SUPER(arguments).Init.apply(this, arguments);
      this.Clean();
    }
  });
  l.GLYPH = l.Subclass(
    {
      type: "path",
      removeable: false,
      Init: function(x, q, A, B, C, y, o, s) {
        var u,
          D = a.config.blacker,
          z = l.GLYPH;
        var n = a.config.useFontCache;
        var v = x === 1 ? null : "scale(" + a.Fixed(x) + ")";
        if (n && !a.config.useGlobalCache) {
          q = "E" + z.n + "-" + q;
        }
        if (!n || !z.glyphs[q]) {
          u = { "stroke-width": D };
          if (n) {
            u.id = q;
          } else {
            if (v) {
              u.transform = v;
            }
          }
          u.d = s ? "M" + s + "Z" : "";
          this.SUPER(arguments).Init.call(this, u);
          if (n) {
            z.defs.appendChild(this.element);
            z.glyphs[q] = true;
          }
        }
        if (n) {
          u = {};
          if (v) {
            u.transform = v;
          }
          this.element = a.Element("use", u);
          this.element.setAttributeNS(m, "href", d + "#" + q);
        }
        this.h = (A + D) * x;
        this.d = (B + D) * x;
        this.w = (C + D / 2) * x;
        this.l = (y + D / 2) * x;
        this.r = (o + D / 2) * x;
        this.H = Math.max(0, this.h);
        this.D = Math.max(0, this.d);
        this.x = this.y = 0;
        this.scale = x;
      }
    },
    { glyphs: {}, defs: null, n: 0 }
  );
  e.Register.StartupHook("mml Jax Ready", function() {
    i = MathJax.ElementJax.mml;
    i.mbase.Augment(
      {
        SVG: l,
        toSVG: function() {
          this.SVGgetStyles();
          var q = this.SVGgetVariant();
          var o = this.SVG();
          this.SVGgetScale(o);
          this.SVGhandleSpace(o);
          for (var p = 0, n = this.data.length; p < n; p++) {
            if (this.data[p]) {
              var s = o.Add(this.data[p].toSVG(q, o.scale), o.w, 0, true);
              if (s.skew) {
                o.skew = s.skew;
              }
            }
          }
          o.Clean();
          var r = this.data.join("");
          if (o.skew && !a.isChar(r)) {
            delete o.skew;
          }
          if (o.r > o.w && a.isChar(r) && !q.noIC) {
            o.ic = o.r - o.w;
            o.w = o.r;
          }
          this.SVGhandleColor(o);
          this.SVGsaveData(o);
          return o;
        },
        SVGchildSVG: function(n) {
          return this.data[n] ? this.data[n].toSVG() : l();
        },
        SVGdataStretched: function(o, n, p) {
          this.SVGdata = { HW: n, D: p };
          if (!this.data[o]) {
            return l();
          }
          if (p != null) {
            return this.data[o].SVGstretchV(n, p);
          }
          if (n != null) {
            return this.data[o].SVGstretchH(n);
          }
          return this.data[o].toSVG();
        },
        SVGsaveData: function(n) {
          if (!this.SVGdata) {
            this.SVGdata = {};
          }
          (this.SVGdata.w = n.w), (this.SVGdata.x = n.x);
          (this.SVGdata.h = n.h), (this.SVGdata.d = n.d);
          if (n.y) {
            this.SVGdata.h += n.y;
            this.SVGdata.d -= n.y;
          }
          if (n.X != null) {
            this.SVGdata.X = n.X;
          }
          if (n.tw != null) {
            this.SVGdata.tw = n.tw;
          }
          if (n.skew) {
            this.SVGdata.skew = n.skew;
          }
          if (n.ic) {
            this.SVGdata.ic = n.ic;
          }
          if (this["class"]) {
            n.removeable = false;
            a.Element(n.element, { class: this["class"] });
          }
          if (this.id) {
            n.removeable = false;
            a.Element(n.element, { id: this.id });
          }
          if (this.href) {
            this.SVGaddHref(n);
          }
          if (a.config.addMMLclasses) {
            this.SVGaddClass(n.element, "mjx-svg-" + this.type);
            n.removeable = false;
          }
          var o = this.style;
          if (o && n.element) {
            n.element.style.cssText = o;
            if (n.element.style.fontSize) {
              n.element.style.fontSize = "";
            }
            n.element.style.border = n.element.style.padding = "";
            if (n.removeable) {
              n.removeable = n.element.style.cssText === "";
            }
          }
          this.SVGaddAttributes(n);
        },
        SVGaddClass: function(p, n) {
          var o = p.getAttribute("class");
          p.setAttribute("class", (o ? o + " " : "") + n);
        },
        SVGaddAttributes: function(o) {
          if (this.attrNames) {
            var u = this.attrNames,
              q = i.nocopyAttributes,
              t = e.config.ignoreMMLattributes;
            var r =
              this.type === "mstyle"
                ? i.math.prototype.defaults
                : this.defaults;
            for (var p = 0, n = u.length; p < n; p++) {
              var s = u[p];
              if (
                t[s] == false ||
                (!q[s] &&
                  !t[s] &&
                  r[s] == null &&
                  typeof o.element[s] === "undefined")
              ) {
                o.element.setAttribute(s, this.attr[s]);
                o.removeable = false;
              }
            }
          }
        },
        SVGaddHref: function(o) {
          var n = a.Element("a", { class: "mjx-svg-href" });
          n.setAttributeNS(m, "href", this.href);
          n.onclick = this.SVGlink;
          a.addElement(n, "rect", {
            width: o.w,
            height: o.h + o.d,
            y: -o.d,
            fill: "none",
            stroke: "none",
            "pointer-events": "all"
          });
          if (o.type === "svg") {
            var p = o.element.firstChild;
            while (p.firstChild) {
              n.appendChild(p.firstChild);
            }
            p.appendChild(n);
          } else {
            n.appendChild(o.element);
            o.element = n;
          }
          o.removeable = false;
        },
        SVGlink: function() {
          var n = this.href.animVal;
          if (n.charAt(0) === "#") {
            var o = a.hashCheck(document.getElementById(n.substr(1)));
            if (o && o.scrollIntoView) {
              setTimeout(function() {
                o.parentNode.scrollIntoView(true);
              }, 1);
            }
          }
          document.location = n;
        },
        SVGgetStyles: function() {
          if (this.style) {
            var n = g.Element("span");
            n.style.cssText = this.style;
            this.styles = this.SVGprocessStyles(n.style);
          }
        },
        SVGprocessStyles: function(n) {
          var o = { border: a.getBorders(n), padding: a.getPadding(n) };
          if (!o.border) {
            delete o.border;
          }
          if (!o.padding) {
            delete o.padding;
          }
          if (n.fontSize) {
            o.fontSize = n.fontSize;
          }
          if (n.color) {
            o.color = n.color;
          }
          if (n.backgroundColor) {
            o.background = n.backgroundColor;
          }
          if (n.fontStyle) {
            o.fontStyle = n.fontStyle;
          }
          if (n.fontWeight) {
            o.fontWeight = n.fontWeight;
          }
          if (n.fontFamily) {
            o.fontFamily = n.fontFamily;
          }
          if (o.fontWeight && o.fontWeight.match(/^\d+$/)) {
            o.fontWeight = parseInt(o.fontWeight) > 600 ? "bold" : "normal";
          }
          return o;
        },
        SVGhandleSpace: function(q) {
          if (this.hasMMLspacing()) {
            if (this.type !== "mo") {
              return;
            }
            var p = this.getValues("scriptlevel", "lspace", "rspace");
            if (
              p.scriptlevel <= 0 ||
              this.hasValue("lspace") ||
              this.hasValue("rspace")
            ) {
              var o = this.SVGgetMu(q);
              p.lspace = Math.max(0, a.length2em(p.lspace, o));
              p.rspace = Math.max(0, a.length2em(p.rspace, o));
              var n = this,
                r = this.Parent();
              while (r && r.isEmbellished() && r.Core() === n) {
                n = r;
                r = r.Parent();
              }
              if (p.lspace) {
                q.x += p.lspace;
              }
              if (p.rspace) {
                q.X = p.rspace;
              }
            }
          } else {
            var s = this.texSpacing();
            this.SVGgetScale();
            if (s !== "") {
              q.x += a.length2em(s, this.scale) * this.mscale;
            }
          }
        },
        SVGhandleColor: function(r) {
          var A = this.getValues("mathcolor", "color");
          if (this.styles && this.styles.color && !A.color) {
            A.color = this.styles.color;
          }
          if (A.color && !this.mathcolor) {
            A.mathcolor = A.color;
          }
          if (A.mathcolor) {
            a.Element(r.element, { fill: A.mathcolor, stroke: A.mathcolor });
            r.removeable = false;
          }
          var v = (this.styles || {}).border,
            y = (this.styles || {}).padding,
            w = (v || {}).left || 0,
            t = (y || {}).left || 0,
            n;
          A.background =
            this.mathbackground ||
            this.background ||
            (this.styles || {}).background ||
            i.COLOR.TRANSPARENT;
          if (w + t) {
            var o = l();
            for (n in r) {
              if (r.hasOwnProperty(n)) {
                o[n] = r[n];
              }
            }
            o.x = 0;
            o.y = 0;
            r.element = a.Element("g");
            r.removeable = true;
            r.Add(o, w + t, 0);
          }
          if (y) {
            r.w += y.right || 0;
            r.h += y.top || 0;
            r.d += y.bottom || 0;
          }
          if (v) {
            r.w += v.right || 0;
            r.h += v.top || 0;
            r.d += v.bottom || 0;
          }
          if (A.background !== i.COLOR.TRANSPARENT) {
            var x = r.element.nodeName.toLowerCase();
            if (x !== "g" && x !== "svg") {
              var s = a.Element("g");
              s.appendChild(r.element);
              r.element = s;
              r.removeable = true;
            }
            r.Add(
              l.RECT(r.h, r.d, r.w, { fill: A.background, stroke: "none" }),
              0,
              0,
              false,
              true
            );
          }
          if (v) {
            var z = 5;
            var p = {
              left: ["V", r.h + r.d, -z, -r.d],
              right: ["V", r.h + r.d, r.w - v.right + z, -r.d],
              top: ["H", r.w, 0, r.h - v.top + z],
              bottom: ["H", r.w, 0, -r.d - z]
            };
            for (n in p) {
              if (p.hasOwnProperty(n)) {
                if (v[n]) {
                  var u = p[n],
                    q = l[u[0] + "LINE"];
                  r.Add(
                    q(u[1], v[n], v[n + "Style"], v[n + "Color"]),
                    u[2],
                    u[3]
                  );
                }
              }
            }
          }
        },
        SVGhandleVariant: function(n, p, o) {
          return a.HandleVariant(n, p, o);
        },
        SVGgetVariant: function() {
          var n = this.getValues(
            "mathvariant",
            "fontfamily",
            "fontweight",
            "fontstyle"
          );
          var o = n.mathvariant;
          if (this.variantForm) {
            o = "-" + a.fontInUse + "-variant";
          }
          n.hasVariant = this.Get("mathvariant", true);
          if (!n.hasVariant) {
            n.family = n.fontfamily;
            n.weight = n.fontweight;
            n.style = n.fontstyle;
          }
          if (this.styles) {
            if (!n.style && this.styles.fontStyle) {
              n.style = this.styles.fontStyle;
            }
            if (!n.weight && this.styles.fontWeight) {
              n.weight = this.styles.fontWeight;
            }
            if (!n.family && this.styles.fontFamily) {
              n.family = this.styles.fontFamily;
            }
          }
          if (n.family && !n.hasVariant) {
            if (!n.weight && n.mathvariant.match(/bold/)) {
              n.weight = "bold";
            }
            if (!n.style && n.mathvariant.match(/italic/)) {
              n.style = "italic";
            }
            o = { forceFamily: true, font: { "font-family": n.family } };
            if (n.style) {
              o.font["font-style"] = n.style;
            }
            if (n.weight) {
              o.font["font-weight"] = n.weight;
            }
            return o;
          }
          if (n.weight === "bold") {
            o =
              {
                normal: i.VARIANT.BOLD,
                italic: i.VARIANT.BOLDITALIC,
                fraktur: i.VARIANT.BOLDFRAKTUR,
                script: i.VARIANT.BOLDSCRIPT,
                "sans-serif": i.VARIANT.BOLDSANSSERIF,
                "sans-serif-italic": i.VARIANT.SANSSERIFBOLDITALIC
              }[o] || o;
          } else {
            if (n.weight === "normal") {
              o =
                {
                  bold: i.VARIANT.normal,
                  "bold-italic": i.VARIANT.ITALIC,
                  "bold-fraktur": i.VARIANT.FRAKTUR,
                  "bold-script": i.VARIANT.SCRIPT,
                  "bold-sans-serif": i.VARIANT.SANSSERIF,
                  "sans-serif-bold-italic": i.VARIANT.SANSSERIFITALIC
                }[o] || o;
            }
          }
          if (n.style === "italic") {
            o =
              {
                normal: i.VARIANT.ITALIC,
                bold: i.VARIANT.BOLDITALIC,
                "sans-serif": i.VARIANT.SANSSERIFITALIC,
                "bold-sans-serif": i.VARIANT.SANSSERIFBOLDITALIC
              }[o] || o;
          } else {
            if (n.style === "normal") {
              o =
                {
                  italic: i.VARIANT.NORMAL,
                  "bold-italic": i.VARIANT.BOLD,
                  "sans-serif-italic": i.VARIANT.SANSSERIF,
                  "sans-serif-bold-italic": i.VARIANT.BOLDSANSSERIF
                }[o] || o;
            }
          }
          if (!(o in a.FONTDATA.VARIANT)) {
            o = "normal";
          }
          return a.FONTDATA.VARIANT[o];
        },
        SVGgetScale: function(o) {
          var p = 1;
          if (this.mscale) {
            p = this.scale;
          } else {
            var n = this.getValues("scriptlevel", "fontsize");
            n.mathsize = (this.isToken ? this : this.Parent()).Get("mathsize");
            if ((this.styles || {}).fontSize && !n.fontsize) {
              n.fontsize = this.styles.fontSize;
            }
            if (n.fontsize && !this.mathsize) {
              n.mathsize = n.fontsize;
            }
            if (n.scriptlevel !== 0) {
              if (n.scriptlevel > 2) {
                n.scriptlevel = 2;
              }
              p = Math.pow(this.Get("scriptsizemultiplier"), n.scriptlevel);
              n.scriptminsize = a.length2em(this.Get("scriptminsize")) / 1000;
              if (p < n.scriptminsize) {
                p = n.scriptminsize;
              }
            }
            this.scale = p;
            this.mscale = a.length2em(n.mathsize) / 1000;
          }
          if (o) {
            o.scale = p;
            if (this.isToken) {
              o.scale *= this.mscale;
            }
          }
          return p * this.mscale;
        },
        SVGgetMu: function(p) {
          var n = 1,
            o = this.getValues("scriptlevel", "scriptsizemultiplier");
          if (p.scale && p.scale !== 1) {
            n = 1 / p.scale;
          }
          if (o.scriptlevel !== 0) {
            if (o.scriptlevel > 2) {
              o.scriptlevel = 2;
            }
            n = Math.sqrt(Math.pow(o.scriptsizemultiplier, o.scriptlevel));
          }
          return n;
        },
        SVGnotEmpty: function(n) {
          while (n) {
            if (
              (n.type !== "mrow" && n.type !== "texatom") ||
              n.data.length > 1
            ) {
              return true;
            }
            n = n.data[0];
          }
          return false;
        },
        SVGcanStretch: function(p) {
          var o = false;
          if (this.isEmbellished()) {
            var n = this.Core();
            if (n && n !== this) {
              o = n.SVGcanStretch(p);
              if (o && n.forceStretch) {
                this.forceStretch = true;
              }
            }
          }
          return o;
        },
        SVGstretchV: function(n, o) {
          return this.toSVG(n, o);
        },
        SVGstretchH: function(n) {
          return this.toSVG(n);
        },
        SVGlineBreaks: function() {
          return false;
        }
      },
      {
        SVGemptySVG: function() {
          var n = this.SVG();
          n.Clean();
          this.SVGsaveData(n);
          return n;
        },
        SVGautoload: function() {
          this.constructor.Augment({ toSVG: i.mbase.SVGautoloadFail });
          var n = a.autoloadDir + "/" + this.type + ".js";
          e.RestartAfter(j.Require(n));
        },
        SVGautoloadFail: function() {
          throw Error("SVG can't autoload '" + this.type + "'");
        },
        SVGautoloadList: {},
        SVGautoloadFile: function(n) {
          if (i.mbase.SVGautoloadList.hasOwnProperty(n)) {
            throw Error("SVG can't autoload file '" + n + "'");
          }
          i.mbase.SVGautoloadList[n] = true;
          var o = a.autoloadDir + "/" + n + ".js";
          e.RestartAfter(j.Require(o));
        }
      }
    );
    i.chars.Augment({
      toSVG: function(o, r, n, p) {
        var q = this.data.join("").replace(/[\u2061-\u2064]/g, "");
        if (n) {
          q = n(q, p);
        }
        return this.SVGhandleVariant(o, r, q);
      }
    });
    i.entity.Augment({
      toSVG: function(o, r, n, p) {
        var q = this.toString().replace(/[\u2061-\u2064]/g, "");
        if (n) {
          q = n(q, p);
        }
        return this.SVGhandleVariant(o, r, q);
      }
    });
    i.mo.Augment({
      toSVG: function(o, n) {
        this.SVGgetStyles();
        var v = (this.svg = this.SVG());
        var r = this.SVGgetScale(v);
        this.SVGhandleSpace(v);
        if (this.data.length == 0) {
          v.Clean();
          this.SVGsaveData(v);
          return v;
        }
        if (n != null) {
          return this.SVGstretchV(o, n);
        } else {
          if (o != null) {
            return this.SVG.strechH(o);
          }
        }
        var t = this.SVGgetVariant();
        var B = this.getValues("largeop", "displaystyle");
        if (B.largeop) {
          t = a.FONTDATA.VARIANT[B.displaystyle ? "-largeOp" : "-smallOp"];
        }
        var A = this.CoreParent(),
          s = A && A.isa(i.msubsup) && this !== A.data[0],
          p = s ? this.remapChars : null;
        if (
          a.isChar(this.data.join("")) &&
          A &&
          A.isa(i.munderover) &&
          a.isChar(this.CoreText(A.data[A.base]))
        ) {
          var w = A.data[A.over],
            z = A.data[A.under];
          if (w && this === w.CoreMO() && A.Get("accent")) {
            p = a.FONTDATA.REMAPACCENT;
          } else {
            if (z && this === z.CoreMO() && A.Get("accentunder")) {
              p = a.FONTDATA.REMAPACCENTUNDER;
            }
          }
        }
        if (s && this.data.join("").match(/['`"\u00B4\u2032-\u2037\u2057]/)) {
          t = a.FONTDATA.VARIANT["-" + a.fontInUse + "-variant"];
        }
        for (var u = 0, q = this.data.length; u < q; u++) {
          if (this.data[u]) {
            var C = this.data[u].toSVG(t, r, this.remap, p),
              y = v.w;
            if (y === 0 && -C.l > 10 * C.w) {
              y += -C.l;
            }
            v.Add(C, y, 0, true);
            if (C.skew) {
              v.skew = C.skew;
            }
          }
        }
        v.Clean();
        if (!a.isChar(this.data.join(""))) {
          delete v.skew;
        }
        if (B.largeop) {
          v.y = a.TeX.axis_height - (v.h - v.d) / 2 / r;
          if (v.r > v.w) {
            v.ic = v.r - v.w;
            v.w = v.r;
          }
        }
        this.SVGhandleColor(v);
        this.SVGsaveData(v);
        return v;
      },
      SVGcanStretch: function(r) {
        if (!this.Get("stretchy")) {
          return false;
        }
        var s = this.data.join("");
        if (s.length > 1) {
          return false;
        }
        var o = this.CoreParent();
        if (
          o &&
          o.isa(i.munderover) &&
          a.isChar(this.CoreText(o.data[o.base]))
        ) {
          var q = o.data[o.over],
            n = o.data[o.under];
          if (q && this === q.CoreMO() && o.Get("accent")) {
            s = a.FONTDATA.REMAPACCENT[s] || s;
          } else {
            if (n && this === n.CoreMO() && o.Get("accentunder")) {
              s = a.FONTDATA.REMAPACCENTUNDER[s] || s;
            }
          }
        }
        s = a.FONTDATA.DELIMITERS[s.charCodeAt(0)];
        var p = s && s.dir == r.substr(0, 1);
        if (!p) {
          delete this.svg;
        }
        this.forceStretch =
          p && (this.Get("minsize", true) || this.Get("maxsize", true));
        return p;
      },
      SVGstretchV: function(s, t) {
        var p = this.svg || this.toSVG();
        var o = this.getValues("symmetric", "maxsize", "minsize");
        var r = a.TeX.axis_height * p.scale,
          n = this.SVGgetMu(p),
          q;
        if (o.symmetric) {
          q = 2 * Math.max(s - r, t + r);
        } else {
          q = s + t;
        }
        o.maxsize = a.length2em(o.maxsize, n, p.h + p.d);
        o.minsize = a.length2em(o.minsize, n, p.h + p.d);
        q = Math.max(o.minsize, Math.min(o.maxsize, q));
        if (q != o.minsize) {
          q = [
            Math.max(
              (q * a.TeX.delimiterfactor) / 1000,
              q - a.TeX.delimitershortfall
            ),
            q
          ];
        }
        p = a.createDelimiter(this.data.join("").charCodeAt(0), q, p.scale);
        if (o.symmetric) {
          q = (p.h + p.d) / 2 + r;
        } else {
          q = ((p.h + p.d) * s) / (s + t);
        }
        p.y = q - p.h;
        this.SVGhandleSpace(p);
        this.SVGhandleColor(p);
        delete this.svg.element;
        this.SVGsaveData(p);
        p.stretched = true;
        return p;
      },
      SVGstretchH: function(o) {
        var q = this.svg || this.toSVG(),
          n = this.SVGgetMu(q);
        var p = this.getValues(
          "maxsize",
          "minsize",
          "mathvariant",
          "fontweight"
        );
        if (
          (p.fontweight === "bold" || parseInt(p.fontweight) >= 600) &&
          !this.Get("mathvariant", true)
        ) {
          p.mathvariant = i.VARIANT.BOLD;
        }
        p.maxsize = a.length2em(p.maxsize, n, q.w);
        p.minsize = a.length2em(p.minsize, n, q.w);
        o = Math.max(p.minsize, Math.min(p.maxsize, o));
        q = a.createDelimiter(
          this.data.join("").charCodeAt(0),
          o,
          q.scale,
          p.mathvariant
        );
        this.SVGhandleSpace(q);
        this.SVGhandleColor(q);
        delete this.svg.element;
        this.SVGsaveData(q);
        q.stretched = true;
        return q;
      }
    });
    i.mn.Augment({
      SVGremapMinus: function(n) {
        return n.replace(/^-/, "\u2212");
      },
      toSVG: function() {
        this.SVGgetStyles();
        var r = this.SVGgetVariant();
        var o = this.SVG();
        this.SVGgetScale(o);
        this.SVGhandleSpace(o);
        var q = this.SVGremapMinus;
        for (var p = 0, n = this.data.length; p < n; p++) {
          if (this.data[p]) {
            var t = o.Add(this.data[p].toSVG(r, o.scale, q), o.w, 0, true);
            if (t.skew) {
              o.skew = t.skew;
            }
            q = null;
          }
        }
        o.Clean();
        var s = this.data.join("");
        if (o.skew && !a.isChar(s)) {
          delete o.skew;
        }
        if (o.r > o.w && a.isChar(s) && !r.noIC) {
          o.ic = o.r - o.w;
          o.w = o.r;
        }
        this.SVGhandleColor(o);
        this.SVGsaveData(o);
        return o;
      }
    }),
      i.mtext.Augment({
        toSVG: function() {
          if (a.config.mtextFontInherit || this.Parent().type === "merror") {
            this.SVGgetStyles();
            var n = this.SVG(),
              q = this.SVGgetScale(n);
            this.SVGhandleSpace(n);
            var o = this.SVGgetVariant(),
              p = { direction: this.Get("dir") };
            if (o.bold) {
              p["font-weight"] = "bold";
            }
            if (o.italic) {
              p["font-style"] = "italic";
            }
            o = this.Get("mathvariant");
            if (o === "monospace") {
              p["class"] = "MJX-monospace";
            } else {
              if (o.match(/sans-serif/)) {
                p["class"] = "MJX-sans-serif";
              }
            }
            n.Add(l.TEXT((q * 100) / a.config.scale, this.data.join(""), p));
            n.Clean();
            this.SVGhandleColor(n);
            this.SVGsaveData(n);
            return n;
          } else {
            return this.SUPER(arguments).toSVG.call(this);
          }
        }
      });
    i.merror.Augment({
      toSVG: function(p, n) {
        this.SVGgetStyles();
        var t = this.SVG(),
          r = a.length2em(this.styles.fontSize || 1) / 1000;
        this.SVGhandleSpace(t);
        var o = r !== 1 ? { transform: "scale(" + a.Fixed(r) + ")" } : {};
        var v = l(o);
        v.Add(this.SVGchildSVG(0));
        v.Clean();
        if (r !== 1) {
          v.removeable = false;
          var u = ["w", "h", "d", "l", "r", "D", "H"];
          for (var s = 0, q = u.length; s < q; s++) {
            v[u[s]] *= r;
          }
        }
        t.Add(v);
        t.Clean();
        this.SVGhandleColor(t);
        this.SVGsaveData(t);
        return t;
      },
      SVGgetStyles: function() {
        var n = g.Element("span", { style: a.config.merrorStyle });
        this.styles = this.SVGprocessStyles(n.style);
        if (this.style) {
          n.style.cssText = this.style;
          e.Insert(this.styles, this.SVGprocessStyles(n.style));
        }
      }
    });
    i.ms.Augment({ toSVG: i.mbase.SVGautoload });
    i.mglyph.Augment({ toSVG: i.mbase.SVGautoload });
    i.mspace.Augment({
      toSVG: function() {
        this.SVGgetStyles();
        var p = this.getValues("height", "depth", "width");
        p.mathbackground = this.mathbackground;
        if (this.background && !this.mathbackground) {
          p.mathbackground = this.background;
        }
        var o = this.SVG();
        this.SVGgetScale(o);
        var q = this.mscale,
          n = this.SVGgetMu(o);
        o.h = a.length2em(p.height, n) * q;
        o.d = a.length2em(p.depth, n) * q;
        o.w = o.r = a.length2em(p.width, n) * q;
        if (o.w < 0) {
          o.x = o.w;
          o.w = o.r = 0;
        }
        if (o.h < -o.d) {
          o.d = -o.h;
        }
        o.l = 0;
        o.Clean();
        this.SVGhandleColor(o);
        this.SVGsaveData(o);
        return o;
      }
    });
    i.mphantom.Augment({
      toSVG: function(n, p) {
        this.SVGgetStyles();
        var o = this.SVG();
        this.SVGgetScale(o);
        if (this.data[0] != null) {
          this.SVGhandleSpace(o);
          o.Add(this.SVGdataStretched(0, n, p));
          o.Clean();
          while (o.element.firstChild) {
            o.element.removeChild(o.element.firstChild);
          }
        }
        this.SVGhandleColor(o);
        this.SVGsaveData(o);
        if (o.removeable && !o.element.firstChild) {
          delete o.element;
        }
        return o;
      }
    });
    i.mpadded.Augment({
      toSVG: function(q, n) {
        this.SVGgetStyles();
        var t = this.SVG();
        if (this.data[0] != null) {
          this.SVGgetScale(t);
          this.SVGhandleSpace(t);
          var r = this.SVGdataStretched(0, q, n),
            A = this.SVGgetMu(t);
          var z = this.getValues(
              "height",
              "depth",
              "width",
              "lspace",
              "voffset"
            ),
            p = 0,
            o = 0;
          if (z.lspace) {
            p = this.SVGlength2em(r, z.lspace, A);
          }
          if (z.voffset) {
            o = this.SVGlength2em(r, z.voffset, A);
          }
          var s = r.h,
            u = r.d,
            x = r.w,
            v = r.y;
          t.Add(r, p, o);
          t.Clean();
          t.h = s + v;
          t.d = u - v;
          t.w = x;
          t.removeable = false;
          if (z.height !== "") {
            t.h = this.SVGlength2em(t, z.height, A, "h", 0);
          }
          if (z.depth !== "") {
            t.d = this.SVGlength2em(t, z.depth, A, "d", 0);
          }
          if (z.width !== "") {
            t.w = this.SVGlength2em(t, z.width, A, "w", 0);
          }
          if (t.h > t.H) {
            t.H = t.h;
          }
          if (t.d > t.D) {
            t.D = t.d;
          }
        }
        this.SVGhandleColor(t);
        this.SVGsaveData(t);
        return t;
      },
      SVGlength2em: function(q, t, o, u, n) {
        if (n == null) {
          n = -a.BIGDIMEN;
        }
        var r = String(t).match(/width|height|depth/);
        var s = r ? q[r[0].charAt(0)] : u ? q[u] : 0;
        var p = a.length2em(t, o, s / this.mscale) * this.mscale;
        if (u && String(t).match(/^\s*[-+]/)) {
          return Math.max(n, q[u] + p);
        } else {
          return p;
        }
      }
    });
    i.mrow.Augment({
      SVG: l.ROW,
      toSVG: function(q, s) {
        this.SVGgetStyles();
        var o = this.SVG();
        this.SVGhandleSpace(o);
        if (s != null) {
          o.sh = q;
          o.sd = s;
        }
        for (var p = 0, n = this.data.length; p < n; p++) {
          if (this.data[p]) {
            o.Check(this.data[p]);
          }
        }
        o.Stretch();
        o.Clean();
        if (this.data.length === 1 && this.data[0]) {
          var r = this.data[0].SVGdata;
          if (r.skew) {
            o.skew = r.skew;
          }
        }
        if (this.SVGlineBreaks(o)) {
          o = this.SVGmultiline(o);
        }
        this.SVGhandleColor(o);
        this.SVGsaveData(o);
        return o;
      },
      SVGlineBreaks: function(n) {
        if (!this.parent.linebreakContainer) {
          return false;
        }
        return (
          (a.config.linebreaks.automatic && n.w > a.linebreakWidth) ||
          this.hasNewline()
        );
      },
      SVGmultiline: function(n) {
        i.mbase.SVGautoloadFile("multiline");
      },
      SVGstretchH: function(o) {
        var p = this.SVG();
        this.SVGhandleSpace(p);
        for (var q = 0, n = this.data.length; q < n; q++) {
          p.Add(this.SVGdataStretched(q, o), p.w, 0);
        }
        p.Clean();
        this.SVGhandleColor(p);
        this.SVGsaveData(p);
        return p;
      }
    });
    i.mstyle.Augment({
      toSVG: function() {
        this.SVGgetStyles();
        var n = this.SVG();
        if (this.data[0] != null) {
          this.SVGhandleSpace(n);
          var o = n.Add(this.data[0].toSVG());
          n.Clean();
          if (o.ic) {
            n.ic = o.ic;
          }
          this.SVGhandleColor(n);
        }
        this.SVGsaveData(n);
        return n;
      },
      SVGstretchH: function(n) {
        return this.data[0] != null ? this.data[0].SVGstretchH(n) : l.NULL();
      },
      SVGstretchV: function(n, o) {
        return this.data[0] != null ? this.data[0].SVGstretchV(n, o) : l.NULL();
      }
    });
    i.mfrac.Augment({
      toSVG: function() {
        this.SVGgetStyles();
        var B = this.SVG(),
          K = this.SVGgetScale(B);
        var r = l();
        r.scale = B.scale;
        this.SVGhandleSpace(r);
        var w = this.SVGchildSVG(0),
          s = this.SVGchildSVG(1);
        var n = this.getValues(
          "displaystyle",
          "linethickness",
          "numalign",
          "denomalign",
          "bevelled"
        );
        var F = n.displaystyle;
        var J = a.TeX.axis_height * K;
        if (n.bevelled) {
          var I = F ? 400 : 150;
          var x = Math.max(w.h + w.d, s.h + s.d) + 2 * I;
          var G = a.createDelimiter(47, x);
          r.Add(w, 0, (w.d - w.h) / 2 + J + I);
          r.Add(G, w.w - I / 2, (G.d - G.h) / 2 + J);
          r.Add(s, w.w + G.w - I, (s.d - s.h) / 2 + J - I);
        } else {
          var o = Math.max(w.w, s.w);
          var A = a.thickness2em(n.linethickness, this.scale) * this.mscale,
            D,
            C,
            z,
            y;
          var E = (a.TeX.min_rule_thickness / a.em) * 1000;
          if (F) {
            z = a.TeX.num1;
            y = a.TeX.denom1;
          } else {
            z = A === 0 ? a.TeX.num3 : a.TeX.num2;
            y = a.TeX.denom2;
          }
          z *= K;
          y *= K;
          if (A === 0) {
            D = Math.max((F ? 7 : 3) * a.TeX.rule_thickness, 2 * E);
            C = z - w.d - (s.h - y);
            if (C < D) {
              z += (D - C) / 2;
              y += (D - C) / 2;
            }
            r.w = o;
            A = 0;
          } else {
            D = Math.max((F ? 2 : 0) * E + A, A / 2 + 1.5 * E);
            C = z - w.d - (J + A / 2);
            if (C < D) {
              z += D - C;
            }
            C = J - A / 2 - (s.h - y);
            if (C < D) {
              y += D - C;
            }
            r.Add(l.RECT(A / 2, A / 2, o + 2 * A), 0, J);
          }
          r.Align(w, n.numalign, A, z);
          r.Align(s, n.denomalign, A, -y);
        }
        r.Clean();
        B.Add(r, 0, 0);
        B.Clean();
        this.SVGhandleColor(B);
        this.SVGsaveData(B);
        return B;
      },
      SVGcanStretch: function(n) {
        return false;
      },
      SVGhandleSpace: function(n) {
        if (!this.texWithDelims) {
          n.x = n.X = a.TeX.nulldelimiterspace * this.mscale;
        }
        this.SUPER(arguments).SVGhandleSpace.call(this, n);
      }
    });
    i.msqrt.Augment({
      toSVG: function() {
        this.SVGgetStyles();
        var v = this.SVG(),
          s = this.SVGgetScale(v);
        this.SVGhandleSpace(v);
        var r = this.SVGchildSVG(0),
          w,
          u;
        var A = a.TeX.rule_thickness * s,
          o,
          n,
          z,
          y = 0;
        if (this.Get("displaystyle")) {
          o = a.TeX.x_height * s;
        } else {
          o = A;
        }
        n = Math.max(A + o / 4, (1000 * a.TeX.min_root_space) / a.em);
        z = r.h + r.d + n + A;
        u = a.createDelimiter(8730, z, s);
        if (u.h + u.d > z) {
          n = (u.h + u.d - (z - A)) / 2;
        }
        w = l.RECT(A, 0, r.w);
        z = r.h + n + A;
        y = this.SVGaddRoot(v, u, y, u.h + u.d - z, s);
        v.Add(u, y, z - u.h);
        v.Add(w, y + u.w, z - w.h);
        v.Add(r, y + u.w, 0);
        v.Clean();
        v.h += A;
        v.H += A;
        this.SVGhandleColor(v);
        this.SVGsaveData(v);
        return v;
      },
      SVGaddRoot: function(o, p, n, r, q) {
        return n;
      }
    });
    i.mroot.Augment({
      toSVG: i.msqrt.prototype.toSVG,
      SVGaddRoot: function(q, o, t, r, n) {
        var v = (o.isMultiChar ? 0.55 : 0.65) * o.w;
        if (this.data[1]) {
          var s = this.data[1].toSVG();
          s.x = 0;
          var p = this.SVGrootHeight(o.h + o.d, n, s) - r;
          var u = Math.min(s.w, s.r);
          t = Math.max(u, v);
          q.Add(s, t - u, p);
        } else {
          v = t;
        }
        return t - v;
      },
      SVGrootHeight: function(p, o, n) {
        return 0.45 * (p - 900 * o) + 600 * o + Math.max(0, n.d - 75);
      }
    });
    i.mfenced.Augment({
      SVG: l.ROW,
      toSVG: function() {
        this.SVGgetStyles();
        var o = this.SVG();
        this.SVGhandleSpace(o);
        if (this.data.open) {
          o.Check(this.data.open);
        }
        if (this.data[0] != null) {
          o.Check(this.data[0]);
        }
        for (var p = 1, n = this.data.length; p < n; p++) {
          if (this.data[p]) {
            if (this.data["sep" + p]) {
              o.Check(this.data["sep" + p]);
            }
            o.Check(this.data[p]);
          }
        }
        if (this.data.close) {
          o.Check(this.data.close);
        }
        o.Stretch();
        o.Clean();
        this.SVGhandleColor(o);
        this.SVGsaveData(o);
        return o;
      }
    });
    i.menclose.Augment({ toSVG: i.mbase.SVGautoload });
    i.maction.Augment({ toSVG: i.mbase.SVGautoload });
    i.semantics.Augment({
      toSVG: function() {
        this.SVGgetStyles();
        var n = this.SVG();
        if (this.data[0] != null) {
          this.SVGhandleSpace(n);
          n.Add(this.data[0].toSVG());
          n.Clean();
        } else {
          n.Clean();
        }
        this.SVGsaveData(n);
        return n;
      },
      SVGstretchH: function(n) {
        return this.data[0] != null ? this.data[0].SVGstretchH(n) : l.NULL();
      },
      SVGstretchV: function(n, o) {
        return this.data[0] != null ? this.data[0].SVGstretchV(n, o) : l.NULL();
      }
    });
    i.munderover.Augment({
      toSVG: function(G, E) {
        this.SVGgetStyles();
        var n = this.getValues(
          "displaystyle",
          "accent",
          "accentunder",
          "align"
        );
        var p = this.data[this.base];
        if (
          !n.displaystyle &&
          p != null &&
          (p.movablelimits || p.CoreMO().Get("movablelimits"))
        ) {
          return i.msubsup.prototype.toSVG.call(this);
        }
        var F = this.SVG(),
          O = this.SVGgetScale(F);
        this.SVGhandleSpace(F);
        var q = [],
          L = [],
          v,
          K,
          H,
          o = -a.BIGDIMEN,
          J = o,
          N;
        for (K = 0, H = this.data.length; K < H; K++) {
          if (this.data[K] != null) {
            if (K == this.base) {
              v = q[K] = this.SVGdataStretched(K, G, E);
              L[K] =
                (E != null || G == null) &&
                this.data[K].SVGcanStretch("Horizontal");
              if (this.data[this.over] && n.accent) {
                v.h = Math.max(v.h, O * a.TeX.x_height);
              }
            } else {
              v = q[K] = this.data[K].toSVG();
              v.x = 0;
              delete v.X;
              L[K] = this.data[K].SVGcanStretch("Horizontal");
            }
            N = v.w + v.x + (v.X || 0);
            if (N > J) {
              J = N;
            }
            if (!L[K] && J > o) {
              o = J;
            }
          }
        }
        if (E == null && G != null) {
          o = G;
        } else {
          if (o == -a.BIGDIMEN) {
            o = J;
          }
        }
        for (K = J = 0, H = this.data.length; K < H; K++) {
          if (this.data[K]) {
            v = q[K];
            if (L[K]) {
              v = q[K] = this.data[K].SVGstretchH(o);
              if (K !== this.base) {
                v.x = 0;
                delete v.X;
              }
            }
            N = v.w + v.x + (v.X || 0);
            if (N > J) {
              J = N;
            }
          }
        }
        var C = a.TeX.rule_thickness * this.mscale;
        var u,
          r,
          z,
          w,
          s,
          B,
          I,
          M = 0;
        p = q[this.base] || {
          w: 0,
          h: 0,
          d: 0,
          H: 0,
          D: 0,
          l: 0,
          r: 0,
          y: 0,
          scale: O
        };
        if (p.ic) {
          M = 1.3 * p.ic + 0.05;
        }
        for (K = 0, H = this.data.length; K < H; K++) {
          if (this.data[K] != null) {
            v = q[K];
            s = a.TeX.big_op_spacing5 * O;
            var A = K != this.base && n[this.ACCENTS[K]];
            if (A && v.w <= 1) {
              v.x = -v.l;
              q[K] = l.G().With({ removeable: false });
              q[K].Add(v);
              q[K].Clean();
              q[K].w = -v.l;
              v = q[K];
            }
            N = v.w + v.x + (v.X || 0);
            B = { left: 0, center: (J - N) / 2, right: J - N }[n.align];
            u = B;
            r = 0;
            if (K == this.over) {
              if (A) {
                I = C * O;
                s = 0;
                if (p.skew) {
                  u += p.skew;
                  F.skew = p.skew;
                  if (u + N > J) {
                    F.skew += (J - N - u) / 2;
                  }
                }
              } else {
                z = a.TeX.big_op_spacing1 * O;
                w = a.TeX.big_op_spacing3 * O;
                I = Math.max(z, w - Math.max(0, v.d));
              }
              I = Math.max(I, 1500 / a.em);
              u += M / 2;
              r = p.y + p.h + v.d + I;
              v.h += s;
              if (v.h > v.H) {
                v.H = v.h;
              }
            } else {
              if (K == this.under) {
                if (A) {
                  I = 3 * C * O;
                  s = 0;
                } else {
                  z = a.TeX.big_op_spacing2 * O;
                  w = a.TeX.big_op_spacing4 * O;
                  I = Math.max(z, w - v.h);
                }
                I = Math.max(I, 1500 / a.em);
                u -= M / 2;
                r = p.y - (p.d + v.h + I);
                v.d += s;
                if (v.d > v.D) {
                  v.D = v.d;
                }
              }
            }
            F.Add(v, u, r);
          }
        }
        F.Clean();
        this.SVGhandleColor(F);
        this.SVGsaveData(F);
        return F;
      }
    });
    i.msubsup.Augment({
      toSVG: function(M, G) {
        this.SVGgetStyles();
        var I = this.SVG(),
          Q = this.SVGgetScale(I);
        this.SVGhandleSpace(I);
        var K = this.SVGgetMu(I);
        var y = I.Add(this.SVGdataStretched(this.base, M, G));
        var w = (
          this.data[this.sup] ||
          this.data[this.sub] ||
          this
        ).SVGgetScale();
        var O = a.TeX.x_height * Q,
          F = a.TeX.scriptspace * Q;
        var n, z;
        if (this.SVGnotEmpty(this.data[this.sup])) {
          n = this.data[this.sup].toSVG();
          n.w += F;
          n.r = Math.max(n.w, n.r);
        }
        if (this.SVGnotEmpty(this.data[this.sub])) {
          z = this.data[this.sub].toSVG();
          z.w += F;
          z.r = Math.max(z.w, z.r);
        }
        var J = a.TeX.sup_drop * w,
          H = a.TeX.sub_drop * w;
        var C = y.h + (y.y || 0) - J,
          B = y.d - (y.y || 0) + H,
          P = 0,
          L;
        if (y.ic) {
          y.w -= y.ic;
          P = 1.3 * y.ic + 0.05;
        }
        if (
          this.data[this.base] &&
          (this.data[this.base].type === "mi" ||
            this.data[this.base].type === "mo")
        ) {
          if (
            a.isChar(this.data[this.base].data.join("")) &&
            y.scale === 1 &&
            !y.stretched &&
            !this.data[this.base].Get("largeop")
          ) {
            C = B = 0;
          }
        }
        var N = this.getValues("subscriptshift", "superscriptshift");
        N.subscriptshift =
          N.subscriptshift === "" ? 0 : a.length2em(N.subscriptshift, K);
        N.superscriptshift =
          N.superscriptshift === "" ? 0 : a.length2em(N.superscriptshift, K);
        var A = y.w + y.x;
        if (!n) {
          if (z) {
            B = Math.max(
              B,
              a.TeX.sub1 * Q,
              z.h - (4 / 5) * O,
              N.subscriptshift
            );
            I.Add(z, A, -B);
            this.data[this.sub].SVGdata.dy = -B;
          }
        } else {
          if (!z) {
            var o = this.getValues("displaystyle", "texprimestyle");
            L =
              a.TeX[
                o.displaystyle ? "sup1" : o.texprimestyle ? "sup3" : "sup2"
              ];
            C = Math.max(C, L * Q, n.d + (1 / 4) * O, N.superscriptshift);
            I.Add(n, A + P, C);
            this.data[this.sup].SVGdata.dx = P;
            this.data[this.sup].SVGdata.dy = C;
          } else {
            B = Math.max(B, a.TeX.sub2 * Q);
            var E = a.TeX.rule_thickness * Q;
            if (C - n.d - (z.h - B) < 3 * E) {
              B = 3 * E - C + n.d + z.h;
              J = (4 / 5) * O - (C - n.d);
              if (J > 0) {
                C += J;
                B -= J;
              }
            }
            I.Add(n, A + P, Math.max(C, N.superscriptshift));
            I.Add(z, A, -Math.max(B, N.subscriptshift));
            this.data[this.sup].SVGdata.dx = P;
            this.data[this.sup].SVGdata.dy = Math.max(C, N.superscriptshift);
            this.data[this.sub].SVGdata.dy = -Math.max(B, N.subscriptshift);
          }
        }
        I.Clean();
        this.SVGhandleColor(I);
        this.SVGsaveData(I);
        return I;
      }
    });
    i.mmultiscripts.Augment({ toSVG: i.mbase.SVGautoload });
    i.mtable.Augment({ toSVG: i.mbase.SVGautoload });
    i["annotation-xml"].Augment({ toSVG: i.mbase.SVGautoload });
    i.math.Augment({
      SVG: l.Subclass({ type: "svg", removeable: false }),
      toSVG: function(B, p) {
        var F = a.config;
        if (this.data[0]) {
          this.SVGgetStyles();
          i.mbase.prototype.displayAlign = e.config.displayAlign;
          i.mbase.prototype.displayIndent = e.config.displayIndent;
          if (String(e.config.displayIndent).match(/^0($|[a-z%])/i)) {
            i.mbase.prototype.displayIndent = "0";
          }
          var v = l.G();
          v.Add(this.data[0].toSVG(), 0, 0, true);
          v.Clean();
          this.SVGhandleColor(v);
          a.Element(v.element, {
            stroke: "currentColor",
            fill: "currentColor",
            "stroke-width": 0,
            transform: "matrix(1 0 0 -1 0 0)"
          });
          v.removeable = false;
          var x = this.SVG();
          x.element.setAttribute("xmlns:xlink", m);
          if (F.useFontCache && !F.useGlobalCache) {
            x.element.appendChild(l.GLYPH.defs);
          }
          x.Add(v);
          x.Clean();
          this.SVGsaveData(x);
          if (!B) {
            x.element = x.element.firstChild;
            x.element.removeAttribute("transform");
            x.removable = true;
            return x;
          }
          var u = Math.max(-x.l, 0),
            o = Math.max(x.r - x.w, 0);
          var q = x.element.style,
            A = a.TeX.x_height / a.ex;
          var E = (Math.ceil(x.H / A) + 1) * A + a.HFUZZ,
            n = (Math.ceil(x.D / A) + 1) * A + a.DFUZZ;
          var z = u + x.w + o;
          x.element.setAttribute("width", a.Ex(z));
          x.element.setAttribute("height", a.Ex(E + n));
          q.verticalAlign = a.Ex(-n);
          if (u) {
            q.marginLeft = a.Ex(-u);
          }
          if (o) {
            q.marginRight = a.Ex(-o);
          }
          x.element.setAttribute(
            "viewBox",
            a.Fixed(-u, 1) +
              " " +
              a.Fixed(-E, 1) +
              " " +
              a.Fixed(z, 1) +
              " " +
              a.Fixed(E + n, 1)
          );
          if (x.H > x.h) {
            q.marginTop = a.Ex(x.h - E);
          }
          if (x.D > x.d) {
            q.marginBottom = a.Ex(x.d - n);
            q.verticalAlign = a.Ex(-x.d);
          }
          if (Math.abs(z - a.cwidth) < 10) {
            q.maxWidth =
              a.Fixed(((a.cwidth * a.em) / 1000) * a.config.scale) + "px";
          }
          var y = this.Get("alttext");
          if (y && !x.element.getAttribute("aria-label")) {
            x.element.setAttribute("aria-label", y);
          }
          if (!x.element.getAttribute("role")) {
            x.element.setAttribute("role", "img");
          }
          x.element.setAttribute("focusable", "false");
          B.appendChild(x.element);
          x.element = null;
          if (
            !this.isMultiline &&
            this.Get("display") === "block" &&
            !x.hasIndent
          ) {
            var C = this.getValues(
              "indentalignfirst",
              "indentshiftfirst",
              "indentalign",
              "indentshift"
            );
            if (C.indentalignfirst !== i.INDENTALIGN.INDENTALIGN) {
              C.indentalign = C.indentalignfirst;
            }
            if (C.indentalign === i.INDENTALIGN.AUTO) {
              C.indentalign = this.displayAlign;
            }
            if (C.indentshiftfirst !== i.INDENTSHIFT.INDENTSHIFT) {
              C.indentshift = C.indentshiftfirst;
            }
            if (C.indentshift === "auto") {
              C.indentshift = "0";
            }
            var s = a.length2em(C.indentshift, 1, a.cwidth);
            if (this.displayIndent !== "0") {
              var t = a.length2em(this.displayIndent, 1, a.cwidth);
              s += C.indentalign === i.INDENTALIGN.RIGHT ? -t : t;
            }
            p.style.textAlign = C.indentalign;
            if (s) {
              e.Insert(
                q,
                {
                  left: { marginLeft: a.Ex(s) },
                  right: {
                    marginRight: a.Ex(-s),
                    marginLeft: a.Ex(Math.max(0, s - z))
                  },
                  center: { marginLeft: a.Ex(s), marginRight: a.Ex(-s) }
                }[C.indentalign]
              );
            }
          }
        }
        return B;
      }
    });
    i.TeXAtom.Augment({
      toSVG: function(n, q) {
        this.SVGgetStyles();
        var o = this.SVG();
        this.SVGhandleSpace(o);
        if (this.data[0] != null) {
          var p = this.SVGdataStretched(0, n, q),
            r = 0;
          if (this.texClass === i.TEXCLASS.VCENTER) {
            r = a.TeX.axis_height - (p.h + p.d) / 2 + p.d;
          }
          o.Add(p, 0, r);
          o.ic = p.ic;
          o.skew = p.skew;
        }
        this.SVGhandleColor(o);
        this.SVGsaveData(o);
        return o;
      }
    });
    i.maligngroup.Augment({ toSVG: i.mbase.SVGemptySVG });
    i.malignmark.Augment({ toSVG: i.mbase.SVGemptySVG });
    i.mprescripts.Augment({ toSVG: i.mbase.SVGemptySVG });
    i.none.Augment({ toSVG: i.mbase.SVGemptySVG });
    e.Register.StartupHook("onLoad", function() {
      setTimeout(MathJax.Callback(["loadComplete", a, "jax.js"]), 0);
    });
  });
  e.Browser.Select({
    Opera: function(n) {
      a.Augment({ operaZoomRefresh: true });
    }
  });
  e.Register.StartupHook("End Cookie", function() {
    if (e.config.menuSettings.zoom !== "None") {
      j.Require("[MathJax]/extensions/MathZoom.js");
    }
  });
  if (!document.createElementNS) {
    if (!document.namespaces.svg) {
      document.namespaces.add("svg", b);
    }
    a.Augment({
      Element: function(n, o) {
        var p = typeof n === "string" ? document.createElement("svg:" + n) : n;
        p.isMathJax = true;
        if (o) {
          for (var q in o) {
            if (o.hasOwnProperty(q)) {
              p.setAttribute(q, o[q].toString());
            }
          }
        }
        return p;
      }
    });
  }
})(MathJax.Ajax, MathJax.Hub, MathJax.HTML, MathJax.OutputJax.SVG);
