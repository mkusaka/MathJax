/*
 *  /MathJax/jax/output/NativeMML/jax.js
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

(function(l, c, g, e) {
  var f,
    i = c.Browser.isMSIE;
  var h, b, d, k;
  c.Register.StartupHook("MathZoom Ready", function() {
    k = MathJax.Extension.MathZoom;
  });
  var j = function(m, o) {
    var n = e.Element("span");
    m = "padding" + m;
    if (o) {
      n.style.cssText = o.getAttribute("style") || "";
      if (n.style.padding === "" && (n.style[m] || "") === "") {
        n.style[m] = "0px";
        o.setAttribute("style", n.style.cssText);
      }
    }
  };
  var a = function(r, m, p) {
    if (r) {
      var o = e.Element("span");
      o.style.cssText = r.getAttribute("style") || "";
      if (o.style.padding === "") {
        var q = {
          paddingLeft: p,
          paddingTop: m,
          paddingRight: "0px",
          paddingBottom: "0px"
        };
        for (var n in q) {
          if (q.hasOwnProperty(n)) {
            if ((o.style[n] || "") === "") {
              o.style[n] = q[n];
            }
          }
        }
      }
      r.setAttribute("style", o.style.cssText);
    }
  };
  l.Augment({
    config: {
      styles: {
        ".MathJax_MathML": {
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
        "span.MathJax_MathML": { display: "inline!important" },
        "div.MathJax_MathML": { display: "block!important" },
        ".MathJax_mmlExBox": {
          display: "block!important",
          overflow: "hidden",
          height: "1px",
          width: "60ex",
          "min-height": 0,
          "max-height": "none",
          padding: 0,
          border: 0,
          margin: 0
        }
      }
    },
    handlesVariants: false,
    settings: c.config.menuSettings,
    ex: 1,
    scale: 1,
    adjustWidths: [],
    Config: function() {
      this.SUPER(arguments).Config.call(this);
      if (this.settings.scale) {
        this.config.scale = this.settings.scale;
      }
      if (c.config.displayAlign !== "center") {
        var o = c.config.displayAlign,
          m = c.config.displayIndent;
        var n = { "text-align": o + "!important" };
        n["margin-" + o] = m + "!important";
        c.Insert(this.config.styles, {
          "div.MathJax_MathML": n,
          "div.MathJax_MathML math": { "text-align": o },
          "div.MathJax_MathContainer > span": { "text-align": o + "!important" }
        });
      }
      if (!this.require) {
        this.require = [];
      }
      this.require.push(MathJax.OutputJax.extensionDir + "/MathEvents.js");
    },
    Startup: function() {
      h = MathJax.Extension.MathEvents.Event;
      b = MathJax.Extension.MathEvents.Touch;
      d = MathJax.Extension.MathEvents.Hover;
      this.ContextMenu = h.ContextMenu;
      this.Mousedown = h.AltContextMenu;
      this.Mouseover = d.Mouseover;
      this.Mouseout = d.Mouseout;
      this.Mousemove = d.Mousemove;
      if (!c.Browser.hasMathPlayer) {
        this.EmExSpan = e.Element(
          "span",
          { style: { position: "absolute", "font-size-adjust": "none" } },
          [
            ["div", { className: "MathJax_mmlExBox" }],
            ["span", { className: "MathJax_MathML" }]
          ]
        );
        f.math(f.mspace().With({ width: "60ex" })).toNativeMML(
          this.EmExSpan.lastChild
        );
      }
      return g.Styles(this.config.styles);
    },
    InitializeMML: function() {
      this.initialized = true;
      if (c.Browser.hasMathPlayer) {
        try {
          if (!c.Browser.mpNamespace) {
            var m = document.createElement("object");
            m.id = "mathplayer";
            m.classid = "clsid:32F66A20-7614-11D4-BD11-00104BD3F987";
            document.getElementsByTagName("head")[0].appendChild(m);
            document.namespaces.add("m", "http://www.w3.org/1998/Math/MathML");
            c.Browser.mpNamespace = true;
          }
          if (!c.Browser.mpImported) {
            document.namespaces.m.doImport("#mathplayer");
            c.Browser.mpImported = true;
          }
        } catch (n) {
          if (!this.config.noMathPlayerWarning) {
            alert(
              MathJax.Localization._(
                ["MathML", "MathPlayer"],
                "MathJax was not able to set up MathPlayer.\n\nIf MathPlayer is not installed, you need to install it first.\nOtherwise, your security settings may be preventing ActiveX     \ncontrols from running.  Use the Internet Options item under\nthe Tools menu and select the Security tab, then press the\nCustom Level button. Check that the settings for\n'Run ActiveX Controls', and 'Binary and script behaviors'\nare enabled.\n\nCurrently you will see error messages rather than\ntypeset mathematics."
              )
            );
          }
        }
      } else {
        document.body.appendChild(this.EmExSpan);
        this.defaultEx = this.EmExSpan.firstChild.offsetWidth / 60;
        this.defaultMEx = this.EmExSpan.lastChild.offsetWidth / 60;
        document.body.removeChild(this.EmExSpan);
      }
    },
    preTranslate: function(o) {
      var t = o.jax[this.id],
        u,
        p = t.length,
        y,
        r,
        A,
        w,
        z,
        n,
        v,
        s,
        q;
      for (u = 0; u < p; u++) {
        y = t[u];
        if (!y.parentNode) {
          continue;
        }
        if (!this.initialized) {
          this.InitializeMML();
        }
        r = y.previousSibling;
        if (r && r.className === "MathJax_MathML") {
          r.parentNode.removeChild(r);
        }
        n = y.MathJax.elementJax;
        if (!n) {
          continue;
        }
        z = n.root;
        n.NativeMML = {};
        var x = z.Get("display") === "block" ? "div" : "span";
        A = e.Element(
          x,
          { className: "MathJax_MathML", id: n.inputID + "-Frame" },
          [
            [
              "span",
              {
                className: "MathJax_MathContainer",
                isMathJax: true,
                jaxID: this.id,
                style: {
                  position: "relative",
                  display: "inline-block",
                  "white-space": "nowrap"
                }
              },
              [
                [
                  "span",
                  { isMathJax: true, style: { display: "inline-block" } }
                ]
              ]
            ]
          ]
        );
        y.parentNode.insertBefore(A, y);
        if (!i) {
          y.parentNode.insertBefore(this.EmExSpan.cloneNode(true), y);
        }
      }
      for (u = 0; u < p; u++) {
        y = t[u];
        if (!y.parentNode) {
          continue;
        }
        n = y.MathJax.elementJax;
        if (!n) {
          continue;
        }
        if (!i) {
          w = y.previousSibling;
          v = w.firstChild.offsetWidth / 60;
          s = w.lastChild.offsetWidth / 60;
          if (v === 0 || v === "NaN") {
            v = this.defaultEx;
            s = this.defaultMEx;
          }
          q = this.config.matchFontHeight && s > 1 ? v / s : 1;
          q = Math.floor(
            Math.max(this.config.minScaleAdjust / 100, q) * this.config.scale
          );
          n.NativeMML.ex = v;
          n.NativeMML.mex = s;
        } else {
          q = 100;
        }
        n.NativeMML.fontSize = q + "%";
        n.NativeMML.scale = q / 100;
      }
      if (!i) {
        for (u = 0; u < p; u++) {
          y = t[u];
          if (y.parentNode && y.MathJax.elementJax) {
            y.parentNode.removeChild(y.previousSibling);
          }
        }
      }
    },
    Translate: function(s) {
      if (!s.parentNode) {
        return;
      }
      var m = s.MathJax.elementJax,
        t = m.root;
      var u = document.getElementById(m.inputID + "-Frame");
      if (!u) {
        return;
      }
      var n = u.firstChild,
        q = n.firstChild;
      this.ex = m.NativeMML.ex || this.defaultEx;
      this.scale = m.NativeMML.scale || 1;
      if (this.scale !== 1) {
        u.style.fontSize = m.NativeMML.fontSize;
      }
      try {
        t.toNativeMML(q, m);
      } catch (r) {
        if (r.restart) {
          while (q.firstChild) {
            q.removeChild(q.firstChild);
          }
        }
        throw r;
      }
      if (i) {
        if (n.addEventListener) {
          for (var o in this.MSIE9events) {
            if (this.MSIE9events.hasOwnProperty(o)) {
              n.addEventListener(o, this.MSIE9event, true);
            }
          }
        } else {
          var p = (this.config.showMathMenuMSIE != null ? this : c).config;
          if (
            p.showMathMenuMSIE &&
            !this.settings.mpContext &&
            !this.settings.mpMouse
          ) {
            this.MSIEoverlay(n);
          } else {
            n.style.position = "";
            q.firstChild.onmousedown = this.MSIEaltMenu;
          }
        }
      } else {
        n.oncontextmenu = h.Menu;
        n.onmouseover = h.Mouseover;
        n.onmouseout = h.Mouseout;
        n.onmousedown = h.Mousedown;
        n.onclick = h.Click;
        n.ondblclick = h.DblClick;
        n.onkeydown = h.Keydown;
        n.tabIndex = c.getTabOrder(m);
        if (c.Browser.noContextMenu) {
          n.ontouchstart = b.start;
          n.ontouchend = b.end;
        }
      }
    },
    postTranslate: function(n) {
      if (this.forceReflow) {
        var m = (document.styleSheets || [])[0] || {};
        m.disabled = true;
        m.disabled = false;
      }
    },
    Remove: function(m) {
      var n = m.SourceElement();
      if (!n) {
        return;
      }
      n = n.previousSibling;
      if (!n) {
        return;
      }
      if (n.className.match(/MathJax_MathML/)) {
        n.parentNode.removeChild(n);
      }
    },
    MMLnamespace: "http://www.w3.org/1998/Math/MathML",
    isFullWidth: function(r) {
      if (!r) {
        return;
      }
      var q =
        r.getAttribute("width") ||
        (String(r.getAttribute("style")).match(/(?:^| )width: *([^; ]*)/) ||
          [])[1];
      if (q) {
        return !!q.match(/%/);
      }
      if (r.nodeName.match(/^(semantics|math|mstyle)$/)) {
        q = this.isFullWidth(r.firstChild);
      } else {
        if (r.nodeName.toLowerCase() === "mrow") {
          for (var o = 0, n = r.childNodes.length; o < n && !q; o++) {
            q = this.isFullWidth(r.childNodes[o]);
          }
        }
      }
      if (q) {
        var p = "width:100%; " + (r.getAttribute("style") || "");
        r.setAttribute("style", p.replace(/ +$/, ""));
      }
      return q;
    },
    MSIEoverlay: function(m) {
      var n = m.firstChild;
      if (n.nodeName.toLowerCase() === "span") {
        n = n.firstChild;
      }
      var o = this.getHoverBBox(null, n, {});
      e.addElement(
        m,
        "span",
        {
          style: {
            display: "inline-block",
            width: 0,
            height: 0,
            position: "relative"
          }
        },
        [
          [
            "span",
            {
              isMathJax: true,
              className: "MathJax_MathPlayer_Overlay",
              style: {
                display: "inline-block",
                position: "absolute",
                left: d.Px(-o.w),
                top: d.Px(-o.h - (o.y || 0) - 1),
                width: d.Px(o.w),
                height: d.Px(o.h + o.d),
                cursor: "pointer",
                "background-color": "white",
                filter: "alpha(opacity=0)"
              }
            }
          ]
        ]
      );
      c.Insert(m, {
        msieMath: n,
        onmousedown: this.MSIEevent,
        oncontextmenu: this.MSIEevent,
        onclick: this.MSIEevent,
        onmouseup: this.MSIEevent,
        onmousemove: this.MSIEevent,
        ondblclick: this.MSIEevent,
        onmouseover: this.MSIEevent,
        onmouseout: this.MSIEevent
      });
    },
    MSIEevents: {
      mousedown: "Mousedown",
      contextmenu: "ContextMenu",
      click: "Click",
      mouseup: "Mouseup",
      mousemove: "Mousemove",
      dblclick: "DblClick",
      mouseover: "Mouseover",
      mouseout: "Mouseout"
    },
    MSIEevent: function() {
      var n = window.event;
      var m = l.MSIEevents[n.type];
      if (l[m] && l[m](n, this) === false) {
        return false;
      }
      if (k && k.HandleEvent(n, m, this) === false) {
        return false;
      }
      if (
        n.srcElement.className === "MathJax_MathPlayer_Overlay" &&
        this.msieMath.fireEvent
      ) {
        if (m === "ContextMenu" || m === "Mouseover" || m === "Mouseout") {
          this.msieMath.fireEvent("on" + n.type, n);
        }
      }
      return h.False(n);
    },
    MSIEaltMenu: function() {
      var m = this.parentNode.parentNode;
      while (!m.jaxID) {
        m = m.parentNode;
      }
      h.AltContextMenu(window.event, m);
    },
    MSIE9events: {
      contextmenu: "Menu",
      click: "Click",
      dblclick: "DblClick",
      mouseup: "False",
      mouseover: "Mouseover",
      mouseout: "Mouseout"
    },
    MSIE9event: function(n) {
      if (n.type === "contextmenu" && l.settings.mpContext) {
        return true;
      }
      if (n.type === "mouseup" && l.settings.mpMouse) {
        return true;
      }
      if (n.type === "click" && l.settings.mpContext) {
        return h.AltContextMenu(n, this);
      }
      var m = l.MSIE9events[n.type];
      return h[m].call(this, n);
    },
    getJaxFromMath: function(m) {
      m = m.parentNode;
      do {
        m = m.nextSibling;
      } while (m && m.nodeName.toLowerCase() !== "script");
      return c.getJaxFor(m);
    },
    getHoverSpan: function(m, n) {
      return n.firstChild;
    },
    getHoverBBox: function(m, n, o) {
      return h.getBBox(n.parentNode);
    },
    Zoom: function(n, u, s, m, r) {
      n.root.toNativeMML(u);
      if (this.msieIE8HeightBug) {
        u.style.position = "absolute";
      }
      if (l.widthBug) {
        u.style.width = u.parentNode.style.width = "";
      }
      if (u.parentNode.style.width.match(/%$/)) {
        u.parentNode.style.minWidth = Math.ceil((3 * r) / 4) + "px";
      }
      var p = s.offsetWidth || s.scrollWidth,
        v = s.offsetHeight || s.scrollHeight;
      var t = u.offsetWidth,
        q = u.offsetHeight;
      if (l.widthBug || u.style.width.match(/%/)) {
        var o = u.firstChild.firstChild.scrollWidth;
        if (o > t) {
          t = o;
          u.parentNode.style.width = u.style.minWidth = t + "px";
        }
      }
      if (this.msieIE8HeightBug) {
        u.style.position = "";
      }
      return { Y: -h.getBBox(u.parentNode).h, mW: p, mH: v, zW: t, zH: q };
    },
    NAMEDSPACE: {
      negativeveryverythinmathspace: "-.0556em",
      negativeverythinmathspace: "-.1111em",
      negativethinmathspace: "-.1667em",
      negativemediummathspace: "-.2222em",
      negativethickmathspace: "-.2778em",
      negativeverythickmathspace: "-.3333em",
      negativeveryverythickmathspace: "-.3889em",
      veryverythinmathspace: ".0556em",
      verythinmathspace: ".1111em",
      thinmathspace: ".1667em",
      mediummathspace: ".2222em",
      thickmathspace: ".2778em",
      verythickmathspace: ".3333em",
      veryverythickmathspace: ".3889em"
    }
  });
  c.Register.StartupHook("mml Jax Ready", function() {
    f = MathJax.ElementJax.mml;
    f.mbase.Augment({
      toNativeMML: function(r) {
        var p = this.NativeMMLelement(this.type);
        this.NativeMMLattributes(p);
        for (var q = 0, o = this.data.length; q < o; q++) {
          if (this.data[q]) {
            this.data[q].toNativeMML(p);
          } else {
            p.appendChild(this.NativeMMLelement("mrow"));
          }
        }
        r.appendChild(p);
      },
      NativeMMLattributes: function(w) {
        var r =
          this.type === "mstyle" ? f.math.prototype.defaults : this.defaults;
        var t = this.attrNames || f.copyAttributeNames,
          v = f.skipAttributes,
          o = f.copyAttributes;
        if (!this.attrNames) {
          for (var p in r) {
            if (!v[p] && !o[p] && r.hasOwnProperty(p)) {
              if (this[p] != null && this[p] !== r[p]) {
                if (this.Get(p, null, 1) !== this[p]) {
                  w.setAttribute(p, this.NativeMMLattribute(this[p]));
                }
              }
            }
          }
        }
        for (var s = 0, q = t.length; s < q; s++) {
          if (o[t[s]] === 1 && !r.hasOwnProperty(t[s])) {
            continue;
          }
          var u = (this.attr || {})[t[s]];
          if (u == null) {
            u = this[t[s]];
          }
          if (u != null) {
            w.setAttribute(t[s], this.NativeMMLattribute(u));
          }
        }
        this.NativeMMLclass(w);
      },
      NativeMMLclass: function(o) {
        var q = [];
        if (this["class"]) {
          q.push(this["class"]);
        }
        if (this.isa(f.TeXAtom)) {
          var p = [
            "ORD",
            "OP",
            "BIN",
            "REL",
            "OPEN",
            "CLOSE",
            "PUNCT",
            "INNER",
            "VCENTER"
          ][this.texClass];
          if (p) {
            q.push("MJX-TeXAtom-" + p);
            if (p === "OP" && !this.movablelimits) {
              q.push("MJX-fixedlimits");
            }
          }
        }
        if (this.mathvariant && this.NativeMMLvariants[this.mathvariant]) {
          q.push("MJX" + this.mathvariant);
        }
        if (this.variantForm) {
          q.push("MJX-variant");
        }
        if (q.length) {
          o.setAttribute("class", q.join(" "));
        }
      },
      NativeMMLattribute: function(o) {
        o = String(o);
        if (l.NAMEDSPACE[o]) {
          o = l.NAMEDSPACE[o];
        } else {
          if (o.match(/^\s*(([-+])?(\d+(\.\d*)?|\.\d+))\s*mu\s*$/)) {
            o =
              (RegExp.$2 || "") +
              ((1 / 18) * RegExp.$3).toFixed(3).replace(/\.?0+$/, "") +
              "em";
          } else {
            if (this.NativeMMLvariants[o]) {
              o = this.NativeMMLvariants[o];
            }
          }
        }
        return o;
      },
      NativeMMLvariants: {
        "-tex-caligraphic": f.VARIANT.SCRIPT,
        "-tex-caligraphic-bold": f.VARIANT.BOLDSCRIPT,
        "-tex-oldstyle": f.VARIANT.NORMAL,
        "-tex-oldstyle-bold": f.VARIANT.BOLD,
        "-tex-mathit": f.VARIANT.ITALIC
      },
      NativeMMLelement: function(o) {
        var p = c.Browser.mpNamespace
          ? document.createElement("m:" + o)
          : document.createElementNS
          ? document.createElementNS(l.MMLnamespace, o)
          : document.createElement(o);
        p.isMathJax = true;
        return p;
      }
    });
    f.mrow.Augment({
      toNativeMML: function(s) {
        var r, p;
        if (this.inferred && this.parent.inferRow) {
          for (r = 0, p = this.data.length; r < p; r++) {
            if (this.data[r]) {
              this.data[r].toNativeMML(s);
            } else {
              s.appendChild(this.NativeMMLelement("mrow"));
            }
          }
        } else {
          if (l.stretchyMoBug && (this.open || this.close)) {
            var q = this.NativeMMLelement("mfenced");
            this.NativeMMLattributes(q);
            (r = 0), (p = this.data.length);
            if (this.open) {
              q.setAttribute("open", this.open);
              r++;
            }
            if (this.close) {
              q.setAttribute("close", this.close);
              p--;
            }
            var o = q;
            if (p - r + 1 > 1) {
              o = this.NativeMMLelement("mrow");
              s.appendChild(q);
              s = q;
            }
            for (; r < p; r++) {
              if (this.data[r]) {
                this.data[r].toNativeMML(o);
              } else {
                o.appendChild(this.NativeMMLelement("mrow"));
              }
            }
            s.appendChild(o);
          } else {
            this.SUPER(arguments).toNativeMML.call(this, s);
          }
        }
      }
    });
    f.msubsup.Augment({
      toNativeMML: function(s) {
        var r = this.type;
        if (this.data[this.sup] == null) {
          r = "msub";
        }
        if (this.data[this.sub] == null) {
          r = "msup";
        }
        var p = this.NativeMMLelement(r);
        this.NativeMMLattributes(p);
        if (this.data[0]) {
          delete this.data[0].inferred;
        }
        for (var q = 0, o = this.data.length; q < o; q++) {
          if (this.data[q]) {
            this.data[q].toNativeMML(p);
          }
        }
        s.appendChild(p);
      }
    });
    f.munderover.Augment({
      toNativeMML: function(s) {
        var r = this.type;
        var t = this.data[this.base];
        if (
          t &&
          t.isa(f.TeXAtom) &&
          t.movablelimits &&
          !t.Get("displaystyle")
        ) {
          r = "msubsup";
          if (this.data[this.under] == null) {
            r = "msup";
          }
          if (this.data[this.over] == null) {
            r = "msub";
          }
        } else {
          if (this.data[this.under] == null) {
            r = "mover";
          }
          if (this.data[this.over] == null) {
            r = "munder";
          }
        }
        var p = this.NativeMMLelement(r);
        this.NativeMMLattributes(p);
        if (this.data[0]) {
          delete this.data[0].inferred;
        }
        for (var q = 0, o = this.data.length; q < o; q++) {
          if (this.data[q]) {
            this.data[q].toNativeMML(p);
          }
        }
        s.appendChild(p);
      }
    });
    if (!i) {
      var m = c.SplitList;
      f.mtable.Augment({
        toNativeMML: function(z) {
          var s, q;
          if (l.tableSpacingBug) {
            var A = this.getValues("rowspacing", "columnspacing");
            this.nMMLtopPadding = m("0px " + A.rowspacing);
            this.nMMLleftPadding = m("0px " + A.columnspacing);
            var y = this.nMMLtopPadding,
              v = y.length;
            for (s = 0, q = this.data.length; s < q; s++) {
              if (this.data[s]) {
                this.data[s].nMMLtopPadding = y[s < v ? s : v - 1];
              }
            }
          }
          if (l.tableLabelBug) {
            for (s = 0, q = this.data.length; s < q; s++) {
              if (this.data[s] && this.data[s].isa(f.mlabeledtr)) {
                var u = c.config.displayAlign.charAt(0),
                  w = this.Get("side").charAt(0);
                this.nMMLhasLabels = true;
                this.nMMLlaMatch = u === w;
                this.nMMLforceWidth =
                  u === "c" || !!(this.width || "").match("%");
                break;
              }
            }
          }
          if (this.width && this.ffTableWidthBug) {
            var B = (this.style || "").replace(/;\s*$/, "").split(";");
            if (B[0] === "") {
              B.shift();
            }
            B.push("width:" + this.width);
            this.style = B.join(";");
          }
          this.SUPER(arguments).toNativeMML.call(this, z);
          if (this.nMMLhasLabels) {
            var r = z.firstChild;
            if (this.nMMLforceWidth || w !== "r") {
              var p = (u !== "l" ? 1 : 0) + (w === "l" ? 1 : 0);
              if (p) {
                var t = {
                  columnalign: "left",
                  columnwidth: "auto",
                  columnspacing: "0px",
                  columnlines: "none"
                };
                for (var o in t) {
                  if (t.hasOwnProperty(o) && this[o]) {
                    var x = [t[o], t[o]].slice(2 - p).join(" ") + " ";
                    r.setAttribute(o, x + r.getAttribute(o));
                  }
                }
              }
            }
            if (this.nMMLforceWidth || !this.nMMLlaMatch) {
              r.setAttribute("width", "100%");
            }
          }
        }
      });
      f.mtr.Augment({
        toNativeMML: function(v) {
          this.SUPER(arguments).toNativeMML.call(this, v);
          var p = v.lastChild;
          if (l.tableSpacingBug) {
            var r = this.parent.nMMLleftPadding,
              t = r.length;
            for (var w = p.firstChild, q = 0; w; w = w.nextSibling, q++) {
              a(w, this.nMMLtopPadding, r[q < t ? q : t - 1]);
            }
          }
          if (l.tableLabelBug) {
            var o = this.parent.nMMLforceWidth,
              u = this.parent.Get("side").charAt(0),
              s = c.config.displayAlign.charAt(0);
            if (this.parent.nMMLhasLabels && p.firstChild) {
              if (o || u !== "r") {
                j("Left", p.firstChild);
                if (s !== "l") {
                  p.insertBefore(
                    this.NativeMMLelement("mtd"),
                    p.firstChild
                  ).setAttribute("style", "padding:0");
                }
                if (u === "l") {
                  p.insertBefore(
                    this.NativeMMLelement("mtd"),
                    p.firstChild
                  ).setAttribute("style", "padding:0");
                }
              }
              if (o || u !== "l") {
                j("Right", p.lastChild);
              }
            }
          }
        }
      });
      f.mlabeledtr.Augment({
        toNativeMML: function(C) {
          var t = this.NativeMMLelement("mtr");
          this.NativeMMLattributes(t);
          for (var u = 1, s = this.data.length; u < s; u++) {
            if (this.data[u]) {
              this.data[u].toNativeMML(t);
            } else {
              t.appendChild(this.NativeMMLelement("mtd"));
            }
          }
          if (l.tableSpacingBug) {
            var v = this.parent.nMMLleftPadding,
              y = v.length;
            u = 0;
            for (var D = t.firstChild; D; D = D.nextSibling, u++) {
              a(D, this.nMMLtopPadding, v[u < y ? u : y - 1]);
            }
          }
          if (l.tableLabelBug && this.data[0]) {
            var z = this.parent.Get("side").charAt(0),
              x = c.config.displayAlign.charAt(0),
              q = c.config.displayIndent;
            this.data[0].toNativeMML(t);
            var A = t.lastChild,
              r = A;
            if (z === x) {
              A.setAttribute("style", "width:" + q);
              A.setAttribute("columnalign", c.config.displayAlign);
            } else {
              r = this.NativeMMLelement("mpadded");
              r.setAttribute("style", "width:0");
              r.setAttribute("width", "0px");
              r.appendChild(A.firstChild);
              A.appendChild(r);
            }
            j("", A);
            t.removeChild(A);
            var o = 100,
              p = this.parent.nMMLforceWidth;
            if ((this.parent.width || "").match(/%/)) {
              o -= parseFloat(this.parent.width);
            }
            var B = o;
            if (p || z !== "r") {
              j("Left", t.firstChild);
              if (x !== "l") {
                if (x === "c") {
                  B /= 2;
                }
                o -= B;
                t.insertBefore(
                  this.NativeMMLelement("mtd"),
                  t.firstChild
                ).setAttribute("style", "padding:0;width:" + B + "%");
              }
              if (z === "l") {
                t.insertBefore(A, t.firstChild);
              }
            }
            if (p || z !== "l") {
              j("Right", t.lastChild);
              if (x !== "r") {
                t.appendChild(this.NativeMMLelement("mtd")).setAttribute(
                  "style",
                  "padding:0;width:" + o + "%"
                );
              }
              if (z === "r") {
                if (z !== x) {
                  r.setAttribute("lspace", "-1width");
                }
                t.appendChild(A);
              }
            }
          }
          C.appendChild(t);
        }
      });
      f.mtd.Augment({
        toNativeMML: function(r) {
          var p = r.appendChild(this.NativeMMLelement(this.type));
          this.NativeMMLattributes(p);
          if (l.mtdWidthBug) {
            l.adjustWidths.push(p);
            p = p.appendChild(this.NativeMMLelement("mrow"));
          }
          for (var q = 0, o = this.data.length; q < o; q++) {
            if (this.data[q]) {
              this.data[q].toNativeMML(p);
            } else {
              p.appendChild(this.NativeMMLelement("mrow"));
            }
          }
        }
      });
      f.mspace.Augment({
        toNativeMML: function(q) {
          this.SUPER(arguments).toNativeMML.call(this, q);
          if (l.spaceWidthBug && this.width) {
            var r = q.lastChild;
            var p = r.getAttribute("width");
            var o = (r.getAttribute("style") || "").replace(/;?\s*/, "; ");
            r.setAttribute("style", o + "width:" + p);
          }
        }
      });
      f.mn.Augment({
        NativeMMLremapMinus: function(o) {
          return o.replace(/^-/, "\u2212");
        },
        toNativeMML: function(s) {
          var p = this.NativeMMLelement(this.type);
          this.NativeMMLattributes(p);
          var r = this.NativeMMLremapMinus;
          for (var q = 0, o = this.data.length; q < o; q++) {
            if (this.data[q]) {
              this.data[q].toNativeMML(p, r);
              r = null;
            }
          }
          s.appendChild(p);
        }
      });
      var n = g.fileURL(MathJax.OutputJax.fontDir + "/HTML-CSS/TeX/otf");
      l.Augment({
        config: {
          styles: {
            '[class="MJX-tex-oldstyle"]': {
              "font-family": "MathJax_Caligraphic, MathJax_Caligraphic-WEB"
            },
            '[class="MJX-tex-oldstyle-bold"]': {
              "font-family": "MathJax_Caligraphic, MathJax_Caligraphic-WEB",
              "font-weight": "bold"
            },
            '[class="MJX-tex-caligraphic"]': {
              "font-family": "MathJax_Caligraphic, MathJax_Caligraphic-WEB"
            },
            '[class="MJX-tex-caligraphic-bold"]': {
              "font-family": "MathJax_Caligraphic, MathJax_Caligraphic-WEB",
              "font-weight": "bold"
            },
            "@font-face /*1*/": {
              "font-family": "MathJax_Caligraphic-WEB",
              src: "url('" + n + "/MathJax_Caligraphic-Regular.otf')"
            },
            "@font-face /*2*/": {
              "font-family": "MathJax_Caligraphic-WEB",
              "font-weight": "bold",
              src: "url('" + n + "/MathJax_Caligraphic-Bold.otf')"
            }
          }
        }
      });
      if (!this.handlesVariants) {
        l.Augment({
          config: {
            styles: {
              '[mathvariant="double-struck"]': {
                "font-family": "MathJax_AMS, MathJax_AMS-WEB"
              },
              '[mathvariant="script"]': {
                "font-family": "MathJax_Script, MathJax_Script-WEB"
              },
              '[mathvariant="fraktur"]': {
                "font-family": "MathJax_Fraktur, MathJax_Fraktur-WEB"
              },
              '[mathvariant="bold-script"]': {
                "font-family": "MathJax_Script, MathJax_Caligraphic-WEB",
                "font-weight": "bold"
              },
              '[mathvariant="bold-fraktur"]': {
                "font-family": "MathJax_Fraktur, MathJax_Fraktur-WEB",
                "font-weight": "bold"
              },
              '[mathvariant="monospace"]': { "font-family": "monospace" },
              '[mathvariant="sans-serif"]': { "font-family": "sans-serif" },
              '[mathvariant="bold-sans-serif"]': {
                "font-family": "sans-serif",
                "font-weight": "bold"
              },
              '[mathvariant="sans-serif-italic"]': {
                "font-family": "sans-serif",
                "font-style": "italic"
              },
              '[mathvariant="sans-serif-bold-italic"]': {
                "font-family": "sans-serif",
                "font-style": "italic",
                "font-weight": "bold"
              },
              "@font-face /*3*/": {
                "font-family": "MathJax_AMS-WEB",
                src: "url('" + n + "/MathJax_AMS-Regular.otf')"
              },
              "@font-face /*4*/": {
                "font-family": "MathJax_Script-WEB",
                src: "url('" + n + "/MathJax_Script-Regular.otf')"
              },
              "@font-face /*5*/": {
                "font-family": "MathJax_Fraktur-WEB",
                src: "url('" + n + "/MathJax_Fraktur-Regular.otf')"
              },
              "@font-face /*6*/": {
                "font-family": "MathJax_Fraktur-WEB",
                "font-weight": "bold",
                src: "url('" + n + "/MathJax_Fraktur-Bold.otf')"
              }
            }
          }
        });
      }
    }
    f.math.Augment({
      toNativeMML: function(y, p) {
        var A = this.NativeMMLelement(this.type),
          w = A;
        var u = p ? MathJax.InputJax[p.inputJax].annotationEncoding : null;
        var v, r;
        l.adjustWidths = [];
        A.setAttribute("xmlns", l.MMLnamespace);
        this.NativeMMLattributes(A);
        if (l.widthBug) {
          A = A.appendChild(this.NativeMMLelement("mrow"));
        }
        if (u) {
          A = A.appendChild(this.NativeMMLelement("semantics"));
          A.appendChild(this.NativeMMLelement("mrow"));
          var s = A.appendChild(this.NativeMMLelement("annotation"));
          s.appendChild(document.createTextNode(p.originalText));
          s.setAttribute("encoding", u);
          A = A.firstChild;
        }
        for (v = 0, r = this.data.length; v < r; v++) {
          if (this.data[v]) {
            this.data[v].toNativeMML(A);
          } else {
            A.appendChild(this.NativeMMLelement("mrow"));
          }
        }
        var t = (this.data[0] || { data: [] }).data[0] || {};
        if (t.nMMLhasLabels) {
          if (t.nMMLforceWidth || !t.nMMLlaMatch) {
            A.setAttribute("style", "width:100%");
            if (u) {
              A.parentNode.setAttribute("style", "width:100%");
            }
          }
          if (t.nMMLlaMatch) {
            if (y.parentNode.parentNode.nodeName.toLowerCase() === "div") {
              y.parentNode.parentNode.style.setProperty(
                "margin-" + c.config.displayAlign,
                "0px",
                "important"
              );
            }
          }
        }
        var x = l.isFullWidth(w);
        if (x) {
          y.style.width = y.parentNode.style.width = "100%";
        }
        y.appendChild(w);
        if (l.widthBug && !x) {
          y.style.width =
            (w.firstChild.scrollWidth / l.ex / l.scale).toFixed(3) + "ex";
          if (p) {
            p.NativeMML.scrollWidth = w.firstChild.scrollWidth;
          }
        }
        if (l.adjustWidths.length) {
          var z = [];
          for (v = 0, r = l.adjustWidths.length; v < r; v++) {
            A = l.adjustWidths[v];
            var o = A.getAttribute("style") || "";
            if (!o.match(/(^|;)\s*min-width:/)) {
              var q = A.firstChild.scrollWidth;
              z.push(q);
              q = (q / l.ex).toFixed(3) + "ex";
              o = o.replace(/;?\s*$/, "; ");
              A.setAttribute("style", o + "min-width:" + q);
            }
          }
          if (!p) {
            p = c.getJaxFor(y);
          }
          if (p) {
            p.NativeMML.mtds = z;
          }
          w.MathJaxMtds = l.adjustWidths;
          l.adjustWidths = [];
        }
      }
    });
    f.mfenced.Augment({
      toNativeMML: function(w) {
        if (!l.mfencedBug) {
          this.SUPER(arguments).toNativeMML.call(this, w);
          return;
        }
        var t = c.Browser.isOpera;
        var u, p, r;
        var q = this.getValues("open", "close", "separators");
        q.open = q.open.replace(/^\s+/, "").replace(/\s+$/, "");
        q.close = q.close.replace(/^\s+/, "").replace(/\s+$/, "");
        q.separators = q.separators.replace(/\s+/g, "").split("");
        if (q.separators.length == 0) {
          q.separators = null;
        } else {
          if (q.separators.length < this.data.length - 1) {
            var v = q.separators[q.separators.length - 1];
            for (u = this.data.length - 1 - q.separators.length; u > 0; u--) {
              q.separators.push(v);
            }
          }
        }
        var o = this.NativeMMLelement(t ? this.type : "mrow");
        this.NativeMMLattributes(o);
        o.removeAttribute("separators");
        if (t) {
          o.setAttribute("open", q.open);
          o.setAttribute("close", q.close);
          if (this.data.length > 1) {
            w.appendChild(o);
            w = o;
            o = this.NativeMMLelement("mrow");
          }
        } else {
          o.removeAttribute("open");
          o.removeAttribute("close");
        }
        if (!t) {
          r = this.NativeMMLelement("mo");
          r.setAttribute("fence", "true");
          r.textContent = q.open;
          o.appendChild(r);
        }
        for (u = 0, p = this.data.length; u < p; u++) {
          if (q.separators && u > 0) {
            r = this.NativeMMLelement("mo");
            r.setAttribute("separator", "true");
            r.textContent = q.separators[u - 1];
            o.appendChild(r);
          }
          if (this.data[u]) {
            this.data[u].toNativeMML(o);
          } else {
            o.appendChild(this.NativeMMLelement("mrow"));
          }
        }
        if (!t) {
          r = this.NativeMMLelement("mo");
          r.setAttribute("fence", "true");
          r.textContent = q.close;
          o.appendChild(r);
        }
        w.appendChild(o);
      }
    });
    f.TeXAtom.Augment({
      toNativeMML: function(p) {
        var o = this.NativeMMLelement("mrow");
        this.NativeMMLattributes(o);
        this.data[0].toNativeMML(o);
        p.appendChild(o);
      }
    });
    f.chars.Augment({
      toNativeMML: function(p, o) {
        var q = this.toString();
        if (o) {
          q = o(q);
        }
        p.appendChild(document.createTextNode(q));
      }
    });
    f.entity.Augment({
      toNativeMML: function(o) {
        o.appendChild(document.createTextNode(this.toString()));
      }
    });
    f.xml.Augment({
      toNativeMML: function(q) {
        for (var p = 0, o = this.data.length; p < o; p++) {
          q.appendChild(this.data[p].cloneNode(true));
        }
      }
    });
    f.mi.Augment({
      toNativeMML: function(p) {
        this.SUPER(arguments).toNativeMML.call(this, p);
        if (l.miItalicBug) {
          if (this.Get("mathvariant") === f.VARIANT.NORMAL) {
            var o = p.lastChild;
            o.setAttribute("mathvariant", f.VARIANT.NORMAL);
          }
        }
      }
    });
    f.mo.Augment({
      toNativeMML: function(t) {
        this.SUPER(arguments).toNativeMML.call(this, t);
        if (l.webkitMoSpacingBug) {
          var o = 0,
            s = 0,
            v = this.parent;
          if (v && v.type === "mrow" && (v.inferred || !v.isEmbellished())) {
            var q = this.getValues("lspace", "rspace");
            (o = q.lspace), (s = q.rspace);
            if (l.NAMEDSPACE[o]) {
              o = l.NAMEDSPACE[o];
            }
            if (l.NAMEDSPACE[s]) {
              s = l.NAMEDSPACE[s];
            }
          }
          var u = t.lastChild;
          var r = e.Element("span");
          r.style.cssText = u.getAttribute("style") || "";
          r.style.setProperty("-webkit-margin-start", o);
          r.style.setProperty("-webkit-margin-end", s);
          u.setAttribute("style", r.style.cssText);
        }
      }
    });
    f.mmultiscripts.Augment({
      toNativeMML: function(s) {
        if (!l.mmultiscriptsBug || this.data.length === 0) {
          this.SUPER(arguments).toNativeMML.call(this, s);
          return;
        }
        var q = this.NativeMMLelement("mrow");
        this.NativeMMLattributes(q);
        if (this.data[0]) {
          this.data[0].toNativeMML(q);
        } else {
          q.appendChild(this.NativeMMLelement("mrow"));
        }
        var t = q.removeChild(q.lastChild);
        var p = this.data.length,
          r,
          o;
        for (r = 1; r < p; r += 2) {
          if (this.data[r].type === "mprescripts") {
            break;
          }
          o = this.NativeMMLelement("msubsup");
          o.appendChild(t);
          if (this.data[r]) {
            this.data[r].toNativeMML(o);
          } else {
            o.appendChild(this.NativeMMLelement("mrow"));
          }
          if (r + 1 < p && this.data[r + 1]) {
            this.data[r + 1].toNativeMML(o);
          } else {
            o.appendChild(this.NativeMMLelement("mrow"));
          }
          t = o;
        }
        q.appendChild(t);
        for (r++; r < p; r += 2) {
          o = this.NativeMMLelement("msubsup");
          o.appendChild(this.NativeMMLelement("mrow"));
          if (this.data[r]) {
            this.data[r].toNativeMML(o);
          } else {
            o.appendChild(this.NativeMMLelement("mrow"));
          }
          if (r + 1 < p && this.data[r + 1]) {
            this.data[r + 1].toNativeMML(o);
          } else {
            o.appendChild(this.NativeMMLelement("mrow"));
          }
          q.insertBefore(o, t);
        }
        s.appendChild(q);
      }
    });
    c.Register.StartupHook("TeX mathchoice Ready", function() {
      f.TeXmathchoice.Augment({
        toNativeMML: function(o) {
          this.Core().toNativeMML(o);
        }
      });
    });
    setTimeout(MathJax.Callback(["loadComplete", l, "jax.js"]), 0);
  });
  c.Browser.Select({
    MSIE: function(m) {
      var n = document.documentMode || 0;
      l.msieIE8HeightBug = n === 8;
    },
    Opera: function(m) {
      l.stretchyMoBug = true;
      l.tableLabelBug = true;
      l.mfencedBug = true;
      l.miBug = true;
      l.mmultiscriptsBug = true;
    },
    Firefox: function(m) {
      var n = m.versionAtLeast("29.0");
      l.ffTableWidthBug = !m.versionAtLeast("13.0");
      l.forceReflow = !n;
      l.widthBug = !n;
      l.mtdWidthBug = true;
      l.handlesVariants = n;
      l.spaceWidthBug = !m.versionAtLeast("20.0");
      l.tableSpacingBug = !m.versionAtLeast("33.0");
      l.tableLabelBug = true;
      l.mfencedBug = true;
    },
    Chrome: function(m) {
      l.tableSpacingBug = true;
      l.tableLabelBug = true;
      l.mfencedBug = true;
    },
    Safari: function(m) {
      l.tableSpacingBug = true;
      l.tableLabelBug = true;
      l.mfencedBug = true;
      l.miItalicBug = true;
      l.webkitMoSpacingBug = true;
      l.spaceWidthBug = true;
      l.mmultiscriptsBug = true;
    }
  });
  c.Register.StartupHook("End Cookie", function() {
    if (c.config.menuSettings.zoom !== "None") {
      g.Require("[MathJax]/extensions/MathZoom.js");
    }
  });
})(MathJax.OutputJax.NativeMML, MathJax.Hub, MathJax.Ajax, MathJax.HTML);
