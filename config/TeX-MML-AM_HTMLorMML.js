/*
 *  /MathJax/config/TeX-MML-AM_HTMLorMML.js
 *
 *  Copyright (c) 2010-2018 The MathJax Consortium
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 *
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Config({ delayJaxRegistration: true });

MathJax.Ajax.Preloading(
  "[MathJax]/jax/input/TeX/config.js",
  "[MathJax]/jax/input/MathML/config.js",
  "[MathJax]/jax/input/AsciiMath/config.js",
  "[MathJax]/jax/output/HTML-CSS/config.js",
  "[MathJax]/jax/output/NativeMML/config.js",
  "[MathJax]/jax/output/PreviewHTML/config.js",
  "[MathJax]/config/MMLorHTML.js",
  "[MathJax]/extensions/tex2jax.js",
  "[MathJax]/extensions/mml2jax.js",
  "[MathJax]/extensions/asciimath2jax.js",
  "[MathJax]/extensions/MathEvents.js",
  "[MathJax]/extensions/MathZoom.js",
  "[MathJax]/extensions/MathMenu.js",
  "[MathJax]/jax/element/mml/jax.js",
  "[MathJax]/extensions/toMathML.js",
  "[MathJax]/extensions/TeX/noErrors.js",
  "[MathJax]/extensions/TeX/noUndefined.js",
  "[MathJax]/jax/input/TeX/jax.js",
  "[MathJax]/extensions/TeX/AMSmath.js",
  "[MathJax]/extensions/TeX/AMSsymbols.js",
  "[MathJax]/jax/input/MathML/jax.js",
  "[MathJax]/jax/input/AsciiMath/jax.js",
  "[MathJax]/jax/output/PreviewHTML/jax.js",
  "[MathJax]/extensions/fast-preview.js",
  "[MathJax]/extensions/AssistiveMML.js",
  "[MathJax]/extensions/a11y/accessibility-menu.js"
);

MathJax.Hub.Config({
  extensions: ["[a11y]/accessibility-menu.js"]
});

MathJax.InputJax.TeX = MathJax.InputJax({
  id: "TeX",
  version: "2.7.5",
  directory: MathJax.InputJax.directory + "/TeX",
  extensionDir: MathJax.InputJax.extensionDir + "/TeX",
  config: {
    TagSide: "right",
    TagIndent: "0.8em",
    MultLineWidth: "85%",
    equationNumbers: {
      autoNumber: "none",
      formatNumber: function(a) {
        return a;
      },
      formatTag: function(a) {
        return "(" + a + ")";
      },
      formatID: function(a) {
        return "mjx-eqn-" + String(a).replace(/\s/g, "_");
      },
      formatURL: function(b, a) {
        return a + "#" + encodeURIComponent(b);
      },
      useLabelIds: true
    }
  },
  resetEquationNumbers: function() {}
});
MathJax.InputJax.TeX.Register("math/tex");
MathJax.InputJax.TeX.loadComplete("config.js");
MathJax.InputJax.MathML = MathJax.InputJax({
  id: "MathML",
  version: "2.7.5",
  directory: MathJax.InputJax.directory + "/MathML",
  extensionDir: MathJax.InputJax.extensionDir + "/MathML",
  entityDir: MathJax.InputJax.directory + "/MathML/entities",
  config: { useMathMLspacing: false }
});
MathJax.InputJax.MathML.Register("math/mml");
MathJax.InputJax.MathML.loadComplete("config.js");
MathJax.InputJax.AsciiMath = MathJax.InputJax({
  id: "AsciiMath",
  version: "2.7.5",
  directory: MathJax.InputJax.directory + "/AsciiMath",
  extensionDir: MathJax.InputJax.extensionDir + "/AsciiMath",
  config: {
    fixphi: true,
    useMathMLspacing: true,
    displaystyle: true,
    decimalsign: "."
  }
});
MathJax.InputJax.AsciiMath.Register("math/asciimath");
MathJax.InputJax.AsciiMath.loadComplete("config.js");
MathJax.OutputJax["HTML-CSS"] = MathJax.OutputJax({
  id: "HTML-CSS",
  version: "2.7.5",
  directory: MathJax.OutputJax.directory + "/HTML-CSS",
  extensionDir: MathJax.OutputJax.extensionDir + "/HTML-CSS",
  autoloadDir: MathJax.OutputJax.directory + "/HTML-CSS/autoload",
  fontDir: MathJax.OutputJax.directory + "/HTML-CSS/fonts",
  webfontDir: MathJax.OutputJax.fontDir + "/HTML-CSS",
  config: {
    noReflows: true,
    matchFontHeight: true,
    scale: 100,
    minScaleAdjust: 50,
    availableFonts: ["STIX", "TeX"],
    preferredFont: "TeX",
    webFont: "TeX",
    imageFont: "TeX",
    undefinedFamily: "STIXGeneral,'Arial Unicode MS',serif",
    mtextFontInherit: false,
    EqnChunk: MathJax.Hub.Browser.isMobile ? 10 : 50,
    EqnChunkFactor: 1.5,
    EqnChunkDelay: 100,
    linebreaks: { automatic: false, width: "container" },
    styles: {
      ".MathJax_Display": { "text-align": "center", margin: "1em 0em" },
      ".MathJax .merror": {
        "background-color": "#FFFF88",
        color: "#CC0000",
        border: "1px solid #CC0000",
        padding: "1px 3px",
        "font-style": "normal",
        "font-size": "90%"
      },
      ".MathJax .MJX-monospace": { "font-family": "monospace" },
      ".MathJax .MJX-sans-serif": { "font-family": "sans-serif" },
      "#MathJax_Tooltip": {
        "background-color": "InfoBackground",
        color: "InfoText",
        border: "1px solid black",
        "box-shadow": "2px 2px 5px #AAAAAA",
        "-webkit-box-shadow": "2px 2px 5px #AAAAAA",
        "-moz-box-shadow": "2px 2px 5px #AAAAAA",
        "-khtml-box-shadow": "2px 2px 5px #AAAAAA",
        filter:
          "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')",
        padding: "3px 4px",
        "z-index": 401
      }
    }
  }
});
if (MathJax.Hub.Browser.isMSIE && document.documentMode >= 9) {
  delete MathJax.OutputJax["HTML-CSS"].config.styles["#MathJax_Tooltip"].filter;
}
if (!MathJax.Hub.config.delayJaxRegistration) {
  MathJax.OutputJax["HTML-CSS"].Register("jax/mml");
}
MathJax.Hub.Register.StartupHook("End Config", [
  function(b, c) {
    var a = b.Insert(
      {
        minBrowserVersion: {
          Firefox: 3,
          Opera: 9.52,
          MSIE: 6,
          Chrome: 0.3,
          Safari: 2,
          Konqueror: 4
        },
        inlineMathDelimiters: ["$", "$"],
        displayMathDelimiters: ["$$", "$$"],
        multilineDisplay: true,
        minBrowserTranslate: function(f) {
          var e = b.getJaxFor(f),
            k = ["[Math]"],
            j;
          var h = document.createElement("span", {
            className: "MathJax_Preview"
          });
          if (e.inputJax === "TeX") {
            if (e.root.Get("displaystyle")) {
              j = a.displayMathDelimiters;
              k = [j[0] + e.originalText + j[1]];
              if (a.multilineDisplay) {
                k = k[0].split(/\n/);
              }
            } else {
              j = a.inlineMathDelimiters;
              k = [
                j[0] +
                  e.originalText.replace(/^\s+/, "").replace(/\s+$/, "") +
                  j[1]
              ];
            }
          }
          for (var g = 0, d = k.length; g < d; g++) {
            h.appendChild(document.createTextNode(k[g]));
            if (g < d - 1) {
              h.appendChild(document.createElement("br"));
            }
          }
          f.parentNode.insertBefore(h, f);
        }
      },
      b.config["HTML-CSS"] || {}
    );
    if (
      b.Browser.version !== "0.0" &&
      !b.Browser.versionAtLeast(a.minBrowserVersion[b.Browser] || 0)
    ) {
      c.Translate = a.minBrowserTranslate;
      b.Config({ showProcessingMessages: false });
      MathJax.Message.Set(
        ["MathJaxNotSupported", "Your browser does not support MathJax"],
        null,
        4000
      );
      b.Startup.signal.Post("MathJax not supported");
    }
  },
  MathJax.Hub,
  MathJax.OutputJax["HTML-CSS"]
]);
MathJax.OutputJax["HTML-CSS"].loadComplete("config.js");
MathJax.OutputJax.NativeMML = MathJax.OutputJax({
  id: "NativeMML",
  version: "2.7.5",
  directory: MathJax.OutputJax.directory + "/NativeMML",
  extensionDir: MathJax.OutputJax.extensionDir + "/NativeMML",
  config: {
    matchFontHeight: true,
    scale: 100,
    minScaleAdjust: 50,
    styles: {
      "div.MathJax_MathML": { "text-align": "center", margin: ".75em 0px" }
    }
  }
});
if (!MathJax.Hub.config.delayJaxRegistration) {
  MathJax.OutputJax.NativeMML.Register("jax/mml");
}
MathJax.OutputJax.NativeMML.loadComplete("config.js");
MathJax.OutputJax.PreviewHTML = MathJax.OutputJax({
  id: "PreviewHTML",
  version: "2.7.5",
  directory: MathJax.OutputJax.directory + "/PreviewHTML",
  extensionDir: MathJax.OutputJax.extensionDir + "/PreviewHTML",
  noFastPreview: true,
  config: {
    scale: 100,
    minScaleAdjust: 50,
    mtextFontInherit: false,
    linebreaks: { automatic: false, width: "container" }
  }
});
if (!MathJax.Hub.config.delayJaxRegistration) {
  MathJax.OutputJax.PreviewHTML.Register("jax/mml");
}
MathJax.OutputJax.PreviewHTML.loadComplete("config.js");
(function(c, g) {
  var f = "2.7.0";
  var a = MathJax.Hub.CombineConfig("MMLorHTML", {
    prefer: {
      MSIE: "MML",
      Firefox: "HTML",
      Opera: "HTML",
      Chrome: "HTML",
      Safari: "HTML",
      other: "HTML"
    }
  });
  var e = {
    Firefox: 3,
    Opera: 9.52,
    MSIE: 6,
    Chrome: 0.3,
    Safari: 2,
    Konqueror: 4
  };
  var b = g.version === "0.0" || g.versionAtLeast(e[g] || 0);
  var d =
    (g.isFirefox && g.versionAtLeast("1.5")) ||
    (g.isMSIE && g.hasMathPlayer) ||
    (g.isSafari && g.versionAtLeast("5.0")) ||
    (g.isOpera && g.versionAtLeast("9.52"));
  c.Register.StartupHook("End Config", function() {
    var h =
      a.prefer && typeof a.prefer === "object"
        ? a.prefer[MathJax.Hub.Browser] || a.prefer.other || "HTML"
        : a.prefer;
    if (b || d) {
      if (d && (h === "MML" || !b)) {
        if (MathJax.OutputJax.NativeMML) {
          MathJax.OutputJax.NativeMML.Register("jax/mml");
        } else {
          c.config.jax.unshift("output/NativeMML");
        }
        c.Startup.signal.Post("NativeMML output selected");
      } else {
        if (MathJax.OutputJax["HTML-CSS"]) {
          MathJax.OutputJax["HTML-CSS"].Register("jax/mml");
        } else {
          c.config.jax.unshift("output/HTML-CSS");
        }
        c.Startup.signal.Post("HTML-CSS output selected");
      }
    } else {
      c.PreProcess.disabled = true;
      c.prepareScripts.disabled = true;
      MathJax.Message.Set(
        ["MathJaxNotSupported", "Your browser does not support MathJax"],
        null,
        4000
      );
      c.Startup.signal.Post("MathJax not supported");
    }
  });
})(MathJax.Hub, MathJax.Hub.Browser);
MathJax.Ajax.loadComplete("[MathJax]/config/MMLorHTML.js");
MathJax.Extension.tex2jax = {
  version: "2.7.5",
  config: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    skipTags: [
      "script",
      "noscript",
      "style",
      "textarea",
      "pre",
      "code",
      "annotation",
      "annotation-xml"
    ],
    ignoreClass: "tex2jax_ignore",
    processClass: "tex2jax_process",
    processEscapes: false,
    processEnvironments: true,
    processRefs: true,
    preview: "TeX"
  },
  ignoreTags: {
    br: MathJax.Hub.Browser.isMSIE && document.documentMode < 9 ? "\n" : " ",
    wbr: "",
    "#comment": ""
  },
  PreProcess: function(a) {
    if (!this.configured) {
      this.config = MathJax.Hub.CombineConfig("tex2jax", this.config);
      if (this.config.Augment) {
        MathJax.Hub.Insert(this, this.config.Augment);
      }
      if (
        typeof this.config.previewTeX !== "undefined" &&
        !this.config.previewTeX
      ) {
        this.config.preview = "none";
      }
      this.configured = true;
    }
    if (typeof a === "string") {
      a = document.getElementById(a);
    }
    if (!a) {
      a = document.body;
    }
    if (this.createPatterns()) {
      this.scanElement(a, a.nextSibling);
    }
  },
  createPatterns: function() {
    var d = [],
      e = [],
      c,
      a,
      b = this.config;
    this.match = {};
    for (c = 0, a = b.inlineMath.length; c < a; c++) {
      d.push(this.patternQuote(b.inlineMath[c][0]));
      this.match[b.inlineMath[c][0]] = {
        mode: "",
        end: b.inlineMath[c][1],
        pattern: this.endPattern(b.inlineMath[c][1])
      };
    }
    for (c = 0, a = b.displayMath.length; c < a; c++) {
      d.push(this.patternQuote(b.displayMath[c][0]));
      this.match[b.displayMath[c][0]] = {
        mode: "; mode=display",
        end: b.displayMath[c][1],
        pattern: this.endPattern(b.displayMath[c][1])
      };
    }
    if (d.length) {
      e.push(d.sort(this.sortLength).join("|"));
    }
    if (b.processEnvironments) {
      e.push("\\\\begin\\{([^}]*)\\}");
    }
    if (b.processEscapes) {
      e.push("\\\\*\\\\\\$");
    }
    if (b.processRefs) {
      e.push("\\\\(eq)?ref\\{[^}]*\\}");
    }
    this.start = new RegExp(e.join("|"), "g");
    this.skipTags = new RegExp("^(" + b.skipTags.join("|") + ")$", "i");
    var f = [];
    if (MathJax.Hub.config.preRemoveClass) {
      f.push(MathJax.Hub.config.preRemoveClass);
    }
    if (b.ignoreClass) {
      f.push(b.ignoreClass);
    }
    this.ignoreClass = f.length
      ? new RegExp("(^| )(" + f.join("|") + ")( |$)")
      : /^$/;
    this.processClass = new RegExp("(^| )(" + b.processClass + ")( |$)");
    return e.length > 0;
  },
  patternQuote: function(a) {
    return a.replace(/([\^$(){}+*?\-|\[\]\:\\])/g, "\\$1");
  },
  endPattern: function(a) {
    return new RegExp(this.patternQuote(a) + "|\\\\.|[{}]", "g");
  },
  sortLength: function(d, c) {
    if (d.length !== c.length) {
      return c.length - d.length;
    }
    return d == c ? 0 : d < c ? -1 : 1;
  },
  scanElement: function(c, b, g) {
    var a, e, d, f;
    while (c && c != b) {
      if (c.nodeName.toLowerCase() === "#text") {
        if (!g) {
          c = this.scanText(c);
        }
      } else {
        a = typeof c.className === "undefined" ? "" : c.className;
        e = typeof c.tagName === "undefined" ? "" : c.tagName;
        if (typeof a !== "string") {
          a = String(a);
        }
        f = this.processClass.exec(a);
        if (
          c.firstChild &&
          !a.match(/(^| )MathJax/) &&
          (f || !this.skipTags.exec(e))
        ) {
          d = (g || this.ignoreClass.exec(a)) && !f;
          this.scanElement(c.firstChild, b, d);
        }
      }
      if (c) {
        c = c.nextSibling;
      }
    }
  },
  scanText: function(c) {
    if (c.nodeValue.replace(/\s+/, "") == "") {
      return c;
    }
    var b,
      d,
      e = 0,
      a;
    this.search = { start: true };
    this.pattern = this.start;
    while (c) {
      a = null;
      this.pattern.lastIndex = e;
      e = 0;
      while (
        c &&
        c.nodeName.toLowerCase() === "#text" &&
        (b = this.pattern.exec(c.nodeValue))
      ) {
        if (this.search.start) {
          c = this.startMatch(b, c);
        } else {
          c = this.endMatch(b, c);
        }
      }
      if (this.search.matched) {
        c = this.encloseMath(c);
      } else {
        if (!this.search.start) {
          a = this.search;
        }
      }
      if (c) {
        do {
          d = c;
          c = c.nextSibling;
        } while (c && this.ignoreTags[c.nodeName.toLowerCase()] != null);
        if (!c || c.nodeName !== "#text") {
          if (!a) {
            return this.search.close ? this.prevEndMatch() : d;
          }
          c = a.open;
          e = a.opos + a.olen + (a.blen || 0);
          this.search = { start: true };
          this.pattern = this.start;
        }
      }
    }
    return c;
  },
  startMatch: function(a, b) {
    var f = this.match[a[0]];
    if (f != null) {
      this.search = {
        end: f.end,
        mode: f.mode,
        pcount: 0,
        open: b,
        olen: a[0].length,
        opos: this.pattern.lastIndex - a[0].length
      };
      this.switchPattern(f.pattern);
    } else {
      if (a[0].substr(0, 6) === "\\begin") {
        this.search = {
          end: "\\end{" + a[1] + "}",
          mode: "; mode=display",
          pcount: 0,
          open: b,
          olen: 0,
          opos: this.pattern.lastIndex - a[0].length,
          blen: a[1].length + 3,
          isBeginEnd: true
        };
        this.switchPattern(this.endPattern(this.search.end));
      } else {
        if (a[0].substr(0, 4) === "\\ref" || a[0].substr(0, 6) === "\\eqref") {
          this.search = {
            mode: "",
            end: "",
            open: b,
            pcount: 0,
            olen: 0,
            opos: this.pattern.lastIndex - a[0].length
          };
          return this.endMatch([""], b);
        } else {
          var d = a[0].substr(0, a[0].length - 1),
            g,
            c;
          if (d.length % 2 === 0) {
            c = [d.replace(/\\\\/g, "\\")];
            g = 1;
          } else {
            c = [d.substr(1).replace(/\\\\/g, "\\"), "$"];
            g = 0;
          }
          c = MathJax.HTML.Element("span", null, c);
          var e = MathJax.HTML.TextNode(b.nodeValue.substr(0, a.index));
          b.nodeValue = b.nodeValue.substr(a.index + a[0].length - g);
          b.parentNode.insertBefore(c, b);
          b.parentNode.insertBefore(e, c);
          this.pattern.lastIndex = g;
        }
      }
    }
    return b;
  },
  endMatch: function(a, c) {
    var b = this.search;
    if (a[0] == b.end) {
      if (!b.close || b.pcount === 0) {
        b.close = c;
        b.cpos = this.pattern.lastIndex;
        b.clen = b.isBeginEnd ? 0 : a[0].length;
      }
      if (b.pcount === 0) {
        b.matched = true;
        c = this.encloseMath(c);
        this.switchPattern(this.start);
      }
    } else {
      if (a[0] === "{") {
        b.pcount++;
      } else {
        if (a[0] === "}" && b.pcount) {
          b.pcount--;
        }
      }
    }
    return c;
  },
  prevEndMatch: function() {
    this.search.matched = true;
    var a = this.encloseMath(this.search.close);
    this.switchPattern(this.start);
    return a;
  },
  switchPattern: function(a) {
    a.lastIndex = this.pattern.lastIndex;
    this.pattern = a;
    this.search.start = a === this.start;
  },
  encloseMath: function(b) {
    var a = this.search,
      g = a.close,
      f,
      d,
      c;
    if (a.cpos === g.length) {
      g = g.nextSibling;
    } else {
      g = g.splitText(a.cpos);
    }
    if (!g) {
      f = g = MathJax.HTML.addText(a.close.parentNode, "");
    }
    a.close = g;
    d = a.opos ? a.open.splitText(a.opos) : a.open;
    while ((c = d.nextSibling) && c !== g) {
      if (c.nodeValue !== null) {
        if (c.nodeName === "#comment") {
          d.nodeValue += c.nodeValue.replace(
            /^\[CDATA\[((.|\n|\r)*)\]\]$/,
            "$1"
          );
        } else {
          d.nodeValue += c.nodeValue;
        }
      } else {
        var h = this.ignoreTags[c.nodeName.toLowerCase()];
        d.nodeValue += h == null ? " " : h;
      }
      d.parentNode.removeChild(c);
    }
    var e = d.nodeValue.substr(a.olen, d.nodeValue.length - a.olen - a.clen);
    d.parentNode.removeChild(d);
    if (this.config.preview !== "none") {
      this.createPreview(a.mode, e);
    }
    d = this.createMathTag(a.mode, e);
    this.search = {};
    this.pattern.lastIndex = 0;
    if (f) {
      f.parentNode.removeChild(f);
    }
    return d;
  },
  insertNode: function(b) {
    var a = this.search;
    a.close.parentNode.insertBefore(b, a.close);
  },
  createPreview: function(d, a) {
    var b = MathJax.Hub.config.preRemoveClass;
    var c = this.config.preview;
    if (c === "none") {
      return;
    }
    if ((this.search.close.previousSibling || {}).className === b) {
      return;
    }
    if (c === "TeX") {
      c = [this.filterPreview(a)];
    }
    if (c) {
      c = MathJax.HTML.Element("span", { className: b }, c);
      this.insertNode(c);
    }
  },
  createMathTag: function(c, b) {
    var a = document.createElement("script");
    a.type = "math/tex" + c;
    MathJax.HTML.setScript(a, b);
    this.insertNode(a);
    return a;
  },
  filterPreview: function(a) {
    return a;
  }
};
MathJax.Hub.Register.PreProcessor(["PreProcess", MathJax.Extension.tex2jax]);
MathJax.Ajax.loadComplete("[MathJax]/extensions/tex2jax.js");
MathJax.Extension.mml2jax = {
  version: "2.7.5",
  config: { preview: "mathml" },
  MMLnamespace: "http://www.w3.org/1998/Math/MathML",
  PreProcess: function(e) {
    if (!this.configured) {
      this.config = MathJax.Hub.CombineConfig("mml2jax", this.config);
      if (this.config.Augment) {
        MathJax.Hub.Insert(this, this.config.Augment);
      }
      this.InitBrowser();
      this.configured = true;
    }
    if (typeof e === "string") {
      e = document.getElementById(e);
    }
    if (!e) {
      e = document.body;
    }
    var h = [];
    this.PushMathElements(h, e, "math");
    this.PushMathElements(h, e, "math", this.MMLnamespace);
    var d, b;
    if (typeof document.namespaces !== "undefined") {
      try {
        for (d = 0, b = document.namespaces.length; d < b; d++) {
          var f = document.namespaces[d];
          if (f.urn === this.MMLnamespace) {
            this.PushMathElements(h, e, f.name + ":math");
          }
        }
      } catch (g) {}
    } else {
      var c = document.getElementsByTagName("html")[0];
      if (c) {
        for (d = 0, b = c.attributes.length; d < b; d++) {
          var a = c.attributes[d];
          if (
            a.nodeName.substr(0, 6) === "xmlns:" &&
            a.nodeValue === this.MMLnamespace
          ) {
            this.PushMathElements(h, e, a.nodeName.substr(6) + ":math");
          }
        }
      }
    }
    this.ProcessMathArray(h);
  },
  PushMathElements: function(f, d, a, c) {
    var h,
      g = MathJax.Hub.config.preRemoveClass;
    if (c) {
      if (!d.getElementsByTagNameNS) {
        return;
      }
      h = d.getElementsByTagNameNS(c, a);
    } else {
      h = d.getElementsByTagName(a);
    }
    for (var e = 0, b = h.length; e < b; e++) {
      var j = h[e].parentNode;
      if (j && j.className !== g && !j.isMathJax && !h[e].prefix === !c) {
        f.push(h[e]);
      }
    }
  },
  ProcessMathArray: function(c) {
    var b,
      a = c.length;
    if (a) {
      if (this.MathTagBug) {
        for (b = 0; b < a; b++) {
          if (c[b].nodeName === "MATH") {
            this.ProcessMathFlattened(c[b]);
          } else {
            this.ProcessMath(c[b]);
          }
        }
      } else {
        for (b = 0; b < a; b++) {
          this.ProcessMath(c[b]);
        }
      }
    }
  },
  ProcessMath: function(e) {
    var d = e.parentNode;
    if (!d || d.className === MathJax.Hub.config.preRemoveClass) {
      return;
    }
    var a = document.createElement("script");
    a.type = "math/mml";
    d.insertBefore(a, e);
    if (this.AttributeBug) {
      var b = this.OuterHTML(e);
      if (this.CleanupHTML) {
        b = b
          .replace(/<\?import .*?>/i, "")
          .replace(/<\?xml:namespace .*?\/>/i, "");
        b = b.replace(/&nbsp;/g, "&#xA0;");
      }
      MathJax.HTML.setScript(a, b);
      d.removeChild(e);
    } else {
      var c = MathJax.HTML.Element("span");
      c.appendChild(e);
      MathJax.HTML.setScript(a, c.innerHTML);
    }
    if (this.config.preview !== "none") {
      this.createPreview(e, a);
    }
  },
  ProcessMathFlattened: function(f) {
    var d = f.parentNode;
    if (!d || d.className === MathJax.Hub.config.preRemoveClass) {
      return;
    }
    var b = document.createElement("script");
    b.type = "math/mml";
    d.insertBefore(b, f);
    var c = "",
      e,
      a = f;
    while (f && f.nodeName !== "/MATH") {
      e = f;
      f = f.nextSibling;
      c += this.NodeHTML(e);
      e.parentNode.removeChild(e);
    }
    if (f && f.nodeName === "/MATH") {
      f.parentNode.removeChild(f);
    }
    b.text = c + "</math>";
    if (this.config.preview !== "none") {
      this.createPreview(a, b);
    }
  },
  NodeHTML: function(e) {
    var c, b, a;
    if (e.nodeName === "#text") {
      c = this.quoteHTML(e.nodeValue);
    } else {
      if (e.nodeName === "#comment") {
        c = "<!--" + e.nodeValue + "-->";
      } else {
        c = "<" + e.nodeName.toLowerCase();
        for (b = 0, a = e.attributes.length; b < a; b++) {
          var d = e.attributes[b];
          if (d.specified && d.nodeName.substr(0, 10) !== "_moz-math-") {
            c +=
              " " +
              d.nodeName.toLowerCase().replace(/xmlns:xmlns/, "xmlns") +
              "=";
            var f = d.nodeValue;
            if (f == null && d.nodeName === "style" && e.style) {
              f = e.style.cssText;
            }
            c += '"' + this.quoteHTML(f) + '"';
          }
        }
        c += ">";
        if (e.outerHTML != null && e.outerHTML.match(/(.<\/[A-Z]+>|\/>)$/)) {
          for (b = 0, a = e.childNodes.length; b < a; b++) {
            c += this.OuterHTML(e.childNodes[b]);
          }
          c += "</" + e.nodeName.toLowerCase() + ">";
        }
      }
    }
    return c;
  },
  OuterHTML: function(d) {
    if (d.nodeName.charAt(0) === "#") {
      return this.NodeHTML(d);
    }
    if (!this.AttributeBug) {
      return d.outerHTML;
    }
    var c = this.NodeHTML(d);
    for (var b = 0, a = d.childNodes.length; b < a; b++) {
      c += this.OuterHTML(d.childNodes[b]);
    }
    c += "</" + d.nodeName.toLowerCase() + ">";
    return c;
  },
  quoteHTML: function(a) {
    if (a == null) {
      a = "";
    }
    return a
      .replace(/&/g, "&#x26;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;");
  },
  createPreview: function(g, f) {
    var e = this.config.preview;
    if (e === "none") {
      return;
    }
    var i = false;
    var c = MathJax.Hub.config.preRemoveClass;
    if ((f.previousSibling || {}).className === c) {
      return;
    }
    if (e === "mathml") {
      i = true;
      if (this.MathTagBug) {
        e = "alttext";
      } else {
        e = g.cloneNode(true);
      }
    }
    if (e === "alttext" || e === "altimg") {
      i = true;
      var d = this.filterPreview(g.getAttribute("alttext"));
      if (e === "alttext") {
        if (d != null) {
          e = MathJax.HTML.TextNode(d);
        } else {
          e = null;
        }
      } else {
        var a = g.getAttribute("altimg");
        if (a != null) {
          var b = {
            width: g.getAttribute("altimg-width"),
            height: g.getAttribute("altimg-height")
          };
          e = MathJax.HTML.Element("img", { src: a, alt: d, style: b });
        } else {
          e = null;
        }
      }
    }
    if (e) {
      var h;
      if (i) {
        h = MathJax.HTML.Element("span", { className: c });
        h.appendChild(e);
      } else {
        h = MathJax.HTML.Element("span", { className: c }, e);
      }
      f.parentNode.insertBefore(h, f);
    }
  },
  filterPreview: function(a) {
    return a;
  },
  InitBrowser: function() {
    var b = MathJax.HTML.Element("span", {
      id: "<",
      className: "mathjax",
      innerHTML: "<math><mi>x</mi><mspace /></math>"
    });
    var a = b.outerHTML || "";
    this.AttributeBug =
      a !== "" &&
      !(
        a.match(/id="&lt;"/) &&
        a.match(/class="mathjax"/) &&
        a.match(/<\/math>/)
      );
    this.MathTagBug = b.childNodes.length > 1;
    this.CleanupHTML = MathJax.Hub.Browser.isMSIE;
  }
};
MathJax.Hub.Register.PreProcessor(["PreProcess", MathJax.Extension.mml2jax], 5);
MathJax.Ajax.loadComplete("[MathJax]/extensions/mml2jax.js");
MathJax.Extension.asciimath2jax = {
  version: "2.7.5",
  config: {
    delimiters: [["`", "`"]],
    skipTags: [
      "script",
      "noscript",
      "style",
      "textarea",
      "pre",
      "code",
      "annotation",
      "annotation-xml"
    ],
    ignoreClass: "asciimath2jax_ignore",
    processClass: "asciimath2jax_process",
    preview: "AsciiMath"
  },
  ignoreTags: {
    br: MathJax.Hub.Browser.isMSIE && document.documentMode < 9 ? "\n" : " ",
    wbr: "",
    "#comment": ""
  },
  PreProcess: function(a) {
    if (!this.configured) {
      this.config = MathJax.Hub.CombineConfig("asciimath2jax", this.config);
      if (this.config.Augment) {
        MathJax.Hub.Insert(this, this.config.Augment);
      }
      this.configured = true;
    }
    if (typeof a === "string") {
      a = document.getElementById(a);
    }
    if (!a) {
      a = document.body;
    }
    if (this.createPatterns()) {
      this.scanElement(a, a.nextSibling);
    }
  },
  createPatterns: function() {
    var d = [],
      c,
      a,
      b = this.config;
    this.match = {};
    if (b.delimiters.length === 0) {
      return false;
    }
    for (c = 0, a = b.delimiters.length; c < a; c++) {
      d.push(this.patternQuote(b.delimiters[c][0]));
      this.match[b.delimiters[c][0]] = {
        mode: "",
        end: b.delimiters[c][1],
        pattern: this.endPattern(b.delimiters[c][1])
      };
    }
    this.start = new RegExp(d.sort(this.sortLength).join("|"), "g");
    this.skipTags = new RegExp("^(" + b.skipTags.join("|") + ")$", "i");
    var e = [];
    if (MathJax.Hub.config.preRemoveClass) {
      e.push(MathJax.Hub.config.preRemoveClass);
    }
    if (b.ignoreClass) {
      e.push(b.ignoreClass);
    }
    this.ignoreClass = e.length
      ? new RegExp("(^| )(" + e.join("|") + ")( |$)")
      : /^$/;
    this.processClass = new RegExp("(^| )(" + b.processClass + ")( |$)");
    return true;
  },
  patternQuote: function(a) {
    return a.replace(/([\^$(){}+*?\-|\[\]\:\\])/g, "\\$1");
  },
  endPattern: function(a) {
    return new RegExp(this.patternQuote(a) + "|\\\\.", "g");
  },
  sortLength: function(d, c) {
    if (d.length !== c.length) {
      return c.length - d.length;
    }
    return d == c ? 0 : d < c ? -1 : 1;
  },
  scanElement: function(c, b, g) {
    var a, e, d, f;
    while (c && c != b) {
      if (c.nodeName.toLowerCase() === "#text") {
        if (!g) {
          c = this.scanText(c);
        }
      } else {
        a = typeof c.className === "undefined" ? "" : c.className;
        e = typeof c.tagName === "undefined" ? "" : c.tagName;
        if (typeof a !== "string") {
          a = String(a);
        }
        f = this.processClass.exec(a);
        if (
          c.firstChild &&
          !a.match(/(^| )MathJax/) &&
          (f || !this.skipTags.exec(e))
        ) {
          d = (g || this.ignoreClass.exec(a)) && !f;
          this.scanElement(c.firstChild, b, d);
        }
      }
      if (c) {
        c = c.nextSibling;
      }
    }
  },
  scanText: function(c) {
    if (c.nodeValue.replace(/\s+/, "") == "") {
      return c;
    }
    var b,
      d,
      e = 0,
      a;
    this.search = { start: true };
    this.pattern = this.start;
    while (c) {
      a = null;
      this.pattern.lastIndex = e || 0;
      e = 0;
      while (
        c &&
        c.nodeName.toLowerCase() === "#text" &&
        (b = this.pattern.exec(c.nodeValue))
      ) {
        if (this.search.start) {
          c = this.startMatch(b, c);
        } else {
          c = this.endMatch(b, c);
        }
      }
      if (this.search.matched) {
        c = this.encloseMath(c);
      } else {
        if (!this.search.start) {
          a = this.search;
        }
      }
      if (c) {
        do {
          d = c;
          c = c.nextSibling;
        } while (c && this.ignoreTags[c.nodeName.toLowerCase()] != null);
        if (!c || c.nodeName !== "#text") {
          if (!a) {
            return d;
          }
          c = a.open;
          e = a.opos + a.olen;
          this.search = { start: true };
          this.pattern = this.start;
        }
      }
    }
    return c;
  },
  startMatch: function(a, b) {
    var c = this.match[a[0]];
    if (c != null) {
      this.search = {
        end: c.end,
        mode: c.mode,
        open: b,
        olen: a[0].length,
        opos: this.pattern.lastIndex - a[0].length
      };
      this.switchPattern(c.pattern);
    }
    return b;
  },
  endMatch: function(a, b) {
    if (a[0] == this.search.end) {
      this.search.close = b;
      this.search.cpos = this.pattern.lastIndex;
      this.search.clen = this.search.isBeginEnd ? 0 : a[0].length;
      this.search.matched = true;
      b = this.encloseMath(b);
      this.switchPattern(this.start);
    }
    return b;
  },
  switchPattern: function(a) {
    a.lastIndex = this.pattern.lastIndex;
    this.pattern = a;
    this.search.start = a === this.start;
  },
  encloseMath: function(b) {
    var a = this.search,
      g = a.close,
      f,
      d,
      c;
    if (a.cpos === g.length) {
      g = g.nextSibling;
    } else {
      g = g.splitText(a.cpos);
    }
    if (!g) {
      f = g = MathJax.HTML.addText(a.close.parentNode, "");
    }
    a.close = g;
    d = a.opos ? a.open.splitText(a.opos) : a.open;
    while ((c = d.nextSibling) && c !== g) {
      if (c.nodeValue !== null) {
        if (c.nodeName === "#comment") {
          d.nodeValue += c.nodeValue.replace(
            /^\[CDATA\[((.|\n|\r)*)\]\]$/,
            "$1"
          );
        } else {
          d.nodeValue += d.nextSibling.nodeValue;
        }
      } else {
        var h = this.ignoreTags[c.nodeName.toLowerCase()];
        d.nodeValue += h == null ? " " : h;
      }
      d.parentNode.removeChild(c);
    }
    var e = d.nodeValue.substr(a.olen, d.nodeValue.length - a.olen - a.clen);
    d.parentNode.removeChild(d);
    if (this.config.preview !== "none") {
      this.createPreview(a.mode, e);
    }
    d = this.createMathTag(a.mode, e);
    this.search = {};
    this.pattern.lastIndex = 0;
    if (f) {
      f.parentNode.removeChild(f);
    }
    return d;
  },
  insertNode: function(b) {
    var a = this.search;
    a.close.parentNode.insertBefore(b, a.close);
  },
  createPreview: function(d, a) {
    var b = MathJax.Hub.config.preRemoveClass;
    var c = this.config.preview;
    if (c === "none") {
      return;
    }
    if ((this.search.close.previousSibling || {}).className === b) {
      return;
    }
    if (c === "AsciiMath") {
      c = [this.filterPreview(a)];
    }
    if (c) {
      c = MathJax.HTML.Element("span", { className: b }, c);
      this.insertNode(c);
    }
  },
  createMathTag: function(c, a) {
    var b = document.createElement("script");
    b.type = "math/asciimath" + c;
    MathJax.HTML.setScript(b, a);
    this.insertNode(b);
    return b;
  },
  filterPreview: function(a) {
    return a;
  }
};
MathJax.Hub.Register.PreProcessor([
  "PreProcess",
  MathJax.Extension.asciimath2jax
]);
MathJax.Ajax.loadComplete("[MathJax]/extensions/asciimath2jax.js");
(function(d, h, l, g, m, b, j) {
  var p = "2.7.5";
  var i = MathJax.Extension;
  var c = (i.MathEvents = { version: p });
  var k = d.config.menuSettings;
  var o = {
    hover: 500,
    frame: {
      x: 3.5,
      y: 5,
      bwidth: 1,
      bcolor: "#A6D",
      hwidth: "15px",
      hcolor: "#83A"
    },
    button: { x: -6, y: -3, wx: -2 },
    fadeinInc: 0.2,
    fadeoutInc: 0.05,
    fadeDelay: 50,
    fadeoutStart: 400,
    fadeoutDelay: 15 * 1000,
    styles: {
      ".MathJax_Hover_Frame": {
        "border-radius": ".25em",
        "-webkit-border-radius": ".25em",
        "-moz-border-radius": ".25em",
        "-khtml-border-radius": ".25em",
        "box-shadow": "0px 0px 15px #83A",
        "-webkit-box-shadow": "0px 0px 15px #83A",
        "-moz-box-shadow": "0px 0px 15px #83A",
        "-khtml-box-shadow": "0px 0px 15px #83A",
        border: "1px solid #A6D ! important",
        display: "inline-block",
        position: "absolute"
      },
      ".MathJax_Menu_Button .MathJax_Hover_Arrow": {
        position: "absolute",
        cursor: "pointer",
        display: "inline-block",
        border: "2px solid #AAA",
        "border-radius": "4px",
        "-webkit-border-radius": "4px",
        "-moz-border-radius": "4px",
        "-khtml-border-radius": "4px",
        "font-family": "'Courier New',Courier",
        "font-size": "9px",
        color: "#F0F0F0"
      },
      ".MathJax_Menu_Button .MathJax_Hover_Arrow span": {
        display: "block",
        "background-color": "#AAA",
        border: "1px solid",
        "border-radius": "3px",
        "line-height": 0,
        padding: "4px"
      },
      ".MathJax_Hover_Arrow:hover": {
        color: "white!important",
        border: "2px solid #CCC!important"
      },
      ".MathJax_Hover_Arrow:hover span": {
        "background-color": "#CCC!important"
      }
    }
  };
  var n = (c.Event = {
    LEFTBUTTON: 0,
    RIGHTBUTTON: 2,
    MENUKEY: "altKey",
    KEY: {
      RETURN: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    },
    Mousedown: function(q) {
      return n.Handler(q, "Mousedown", this);
    },
    Mouseup: function(q) {
      return n.Handler(q, "Mouseup", this);
    },
    Mousemove: function(q) {
      return n.Handler(q, "Mousemove", this);
    },
    Mouseover: function(q) {
      return n.Handler(q, "Mouseover", this);
    },
    Mouseout: function(q) {
      return n.Handler(q, "Mouseout", this);
    },
    Click: function(q) {
      return n.Handler(q, "Click", this);
    },
    DblClick: function(q) {
      return n.Handler(q, "DblClick", this);
    },
    Menu: function(q) {
      return n.Handler(q, "ContextMenu", this);
    },
    Handler: function(t, r, s) {
      if (l.loadingMathMenu) {
        return n.False(t);
      }
      var q = b[s.jaxID];
      if (!t) {
        t = window.event;
      }
      t.isContextMenu = r === "ContextMenu";
      if (q[r]) {
        return q[r](t, s);
      }
      if (i.MathZoom) {
        return i.MathZoom.HandleEvent(t, r, s);
      }
    },
    False: function(q) {
      if (!q) {
        q = window.event;
      }
      if (q) {
        if (q.preventDefault) {
          q.preventDefault();
        } else {
          q.returnValue = false;
        }
        if (q.stopPropagation) {
          q.stopPropagation();
        }
        q.cancelBubble = true;
      }
      return false;
    },
    Keydown: function(r, q) {
      if (!r) {
        r = window.event;
      }
      if (r.keyCode === n.KEY.SPACE) {
        n.ContextMenu(r, this);
      }
    },
    ContextMenu: function(t, E, w) {
      var B = b[E.jaxID],
        v = B.getJaxFromMath(E);
      var F = (B.config.showMathMenu != null ? B : d).config.showMathMenu;
      if (!F || (k.context !== "MathJax" && !w)) {
        return;
      }
      if (c.msieEventBug) {
        t = window.event || t;
      }
      n.ClearSelection();
      f.ClearHoverTimer();
      if (v.hover) {
        if (v.hover.remove) {
          clearTimeout(v.hover.remove);
          delete v.hover.remove;
        }
        v.hover.nofade = true;
      }
      var u = MathJax.Menu;
      var G, D;
      if (u) {
        if (u.loadingDomain) {
          return n.False(t);
        }
        G = m.loadDomain("MathMenu");
        if (!G) {
          u.jax = v;
          var r = u.menu.Find("Show Math As").submenu;
          r.items[0].name = v.sourceMenuTitle;
          r.items[0].format = v.sourceMenuFormat || "MathML";
          r.items[1].name = j[v.inputJax].sourceMenuTitle;
          r.items[5].disabled = !j[v.inputJax].annotationEncoding;
          var A = r.items[2];
          A.disabled = true;
          var q = A.submenu.items;
          annotationList = MathJax.Hub.Config.semanticsAnnotations;
          for (var z = 0, y = q.length; z < y; z++) {
            var s = q[z].name[1];
            if (v.root && v.root.getAnnotation(s) !== null) {
              A.disabled = false;
              q[z].hidden = false;
            } else {
              q[z].hidden = true;
            }
          }
          var x = u.menu.Find("Math Settings", "MathPlayer");
          x.hidden = !(v.outputJax === "NativeMML" && d.Browser.hasMathPlayer);
          return u.menu.Post(t);
        }
        u.loadingDomain = true;
        D = function() {
          delete u.loadingDomain;
        };
      } else {
        if (l.loadingMathMenu) {
          return n.False(t);
        }
        l.loadingMathMenu = true;
        G = l.Require("[MathJax]/extensions/MathMenu.js");
        D = function() {
          delete l.loadingMathMenu;
          if (!MathJax.Menu) {
            MathJax.Menu = {};
          }
        };
      }
      var C = {
        pageX: t.pageX,
        pageY: t.pageY,
        clientX: t.clientX,
        clientY: t.clientY
      };
      g.Queue(G, D, ["ContextMenu", n, C, E, w]);
      return n.False(t);
    },
    AltContextMenu: function(s, r) {
      var t = b[r.jaxID];
      var q = (t.config.showMathMenu != null ? t : d).config.showMathMenu;
      if (q) {
        q = (t.config.showMathMenuMSIE != null ? t : d).config.showMathMenuMSIE;
        if (k.context === "MathJax" && !k.mpContext && q) {
          if (!c.noContextMenuBug || s.button !== n.RIGHTBUTTON) {
            return;
          }
        } else {
          if (!s[n.MENUKEY] || s.button !== n.LEFTBUTTON) {
            return;
          }
        }
        return t.ContextMenu(s, r, true);
      }
    },
    ClearSelection: function() {
      if (c.safariContextMenuBug) {
        setTimeout("window.getSelection().empty()", 0);
      }
      if (document.selection) {
        setTimeout("document.selection.empty()", 0);
      }
    },
    getBBox: function(s) {
      s.appendChild(c.topImg);
      var r = c.topImg.offsetTop,
        t = s.offsetHeight - r,
        q = s.offsetWidth;
      s.removeChild(c.topImg);
      return { w: q, h: r, d: t };
    }
  });
  var f = (c.Hover = {
    Mouseover: function(s, r) {
      if (k.discoverable || k.zoom === "Hover") {
        var u = s.fromElement || s.relatedTarget,
          t = s.toElement || s.target;
        if (
          u &&
          t &&
          (d.isMathJaxNode(u) !== d.isMathJaxNode(t) ||
            d.getJaxFor(u) !== d.getJaxFor(t))
        ) {
          var q = this.getJaxFromMath(r);
          if (q.hover) {
            f.ReHover(q);
          } else {
            f.HoverTimer(q, r);
          }
          return n.False(s);
        }
      }
    },
    Mouseout: function(s, r) {
      if (k.discoverable || k.zoom === "Hover") {
        var u = s.fromElement || s.relatedTarget,
          t = s.toElement || s.target;
        if (
          u &&
          t &&
          (d.isMathJaxNode(u) !== d.isMathJaxNode(t) ||
            d.getJaxFor(u) !== d.getJaxFor(t))
        ) {
          var q = this.getJaxFromMath(r);
          if (q.hover) {
            f.UnHover(q);
          } else {
            f.ClearHoverTimer();
          }
          return n.False(s);
        }
      }
    },
    Mousemove: function(s, r) {
      if (k.discoverable || k.zoom === "Hover") {
        var q = this.getJaxFromMath(r);
        if (q.hover) {
          return;
        }
        if (f.lastX == s.clientX && f.lastY == s.clientY) {
          return;
        }
        f.lastX = s.clientX;
        f.lastY = s.clientY;
        f.HoverTimer(q, r);
        return n.False(s);
      }
    },
    HoverTimer: function(q, r) {
      this.ClearHoverTimer();
      this.hoverTimer = setTimeout(g(["Hover", this, q, r]), o.hover);
    },
    ClearHoverTimer: function() {
      if (this.hoverTimer) {
        clearTimeout(this.hoverTimer);
        delete this.hoverTimer;
      }
    },
    Hover: function(q, u) {
      if (i.MathZoom && i.MathZoom.Hover({}, u)) {
        return;
      }
      var t = b[q.outputJax],
        v = t.getHoverSpan(q, u),
        y = t.getHoverBBox(q, v, u),
        w = (t.config.showMathMenu != null ? t : d).config.showMathMenu;
      var A = o.frame.x,
        z = o.frame.y,
        x = o.frame.bwidth;
      if (c.msieBorderWidthBug) {
        x = 0;
      }
      q.hover = { opacity: 0, id: q.inputID + "-Hover" };
      var r = h.Element(
        "span",
        {
          id: q.hover.id,
          isMathJax: true,
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
              className: "MathJax_Hover_Frame",
              isMathJax: true,
              style: {
                display: "inline-block",
                position: "absolute",
                top: this.Px(-y.h - z - x - (y.y || 0)),
                left: this.Px(-A - x + (y.x || 0)),
                width: this.Px(y.w + 2 * A),
                height: this.Px(y.h + y.d + 2 * z),
                opacity: 0,
                filter: "alpha(opacity=0)"
              }
            }
          ]
        ]
      );
      var s = h.Element(
        "span",
        {
          isMathJax: true,
          id: q.hover.id + "Menu",
          className: "MathJax_Menu_Button",
          style: {
            display: "inline-block",
            "z-index": 1,
            width: 0,
            height: 0,
            position: "relative"
          }
        },
        [
          [
            "span",
            {
              className: "MathJax_Hover_Arrow",
              isMathJax: true,
              math: u,
              onclick: this.HoverMenu,
              jax: t.id,
              style: {
                left: this.Px(y.w + A + x + (y.x || 0) + o.button.x),
                top: this.Px(-y.h - z - x - (y.y || 0) - o.button.y),
                opacity: 0,
                filter: "alpha(opacity=0)"
              }
            },
            [["span", { isMathJax: true }, "\u25BC"]]
          ]
        ]
      );
      if (y.width) {
        r.style.width = s.style.width = y.width;
        r.style.marginRight = s.style.marginRight = "-" + y.width;
        r.firstChild.style.width = y.width;
        s.firstChild.style.left = "";
        s.firstChild.style.right = this.Px(o.button.wx);
      }
      v.parentNode.insertBefore(r, v);
      if (w) {
        v.parentNode.insertBefore(s, v);
      }
      if (v.style) {
        v.style.position = "relative";
      }
      this.ReHover(q);
    },
    ReHover: function(q) {
      if (q.hover.remove) {
        clearTimeout(q.hover.remove);
      }
      q.hover.remove = setTimeout(g(["UnHover", this, q]), o.fadeoutDelay);
      this.HoverFadeTimer(q, o.fadeinInc);
    },
    UnHover: function(q) {
      if (!q.hover.nofade) {
        this.HoverFadeTimer(q, -o.fadeoutInc, o.fadeoutStart);
      }
    },
    HoverFade: function(q) {
      delete q.hover.timer;
      q.hover.opacity = Math.max(0, Math.min(1, q.hover.opacity + q.hover.inc));
      q.hover.opacity = Math.floor(1000 * q.hover.opacity) / 1000;
      var s = document.getElementById(q.hover.id),
        r = document.getElementById(q.hover.id + "Menu");
      s.firstChild.style.opacity = q.hover.opacity;
      s.firstChild.style.filter =
        "alpha(opacity=" + Math.floor(100 * q.hover.opacity) + ")";
      if (r) {
        r.firstChild.style.opacity = q.hover.opacity;
        r.firstChild.style.filter = s.style.filter;
      }
      if (q.hover.opacity === 1) {
        return;
      }
      if (q.hover.opacity > 0) {
        this.HoverFadeTimer(q, q.hover.inc);
        return;
      }
      s.parentNode.removeChild(s);
      if (r) {
        r.parentNode.removeChild(r);
      }
      if (q.hover.remove) {
        clearTimeout(q.hover.remove);
      }
      delete q.hover;
    },
    HoverFadeTimer: function(q, s, r) {
      q.hover.inc = s;
      if (!q.hover.timer) {
        q.hover.timer = setTimeout(g(["HoverFade", this, q]), r || o.fadeDelay);
      }
    },
    HoverMenu: function(q) {
      if (!q) {
        q = window.event;
      }
      return b[this.jax].ContextMenu(q, this.math, true);
    },
    ClearHover: function(q) {
      if (q.hover.remove) {
        clearTimeout(q.hover.remove);
      }
      if (q.hover.timer) {
        clearTimeout(q.hover.timer);
      }
      f.ClearHoverTimer();
      delete q.hover;
    },
    Px: function(q) {
      if (Math.abs(q) < 0.006) {
        return "0px";
      }
      return q.toFixed(2).replace(/\.?0+$/, "") + "px";
    },
    getImages: function() {
      if (k.discoverable) {
        var q = new Image();
        q.src = o.button.src;
      }
    }
  });
  var a = (c.Touch = {
    last: 0,
    delay: 500,
    start: function(r) {
      var q = new Date().getTime();
      var s = q - a.last < a.delay && a.up;
      a.last = q;
      a.up = false;
      if (s) {
        a.timeout = setTimeout(a.menu, a.delay, r, this);
        r.preventDefault();
      }
    },
    end: function(r) {
      var q = new Date().getTime();
      a.up = q - a.last < a.delay;
      if (a.timeout) {
        clearTimeout(a.timeout);
        delete a.timeout;
        a.last = 0;
        a.up = false;
        r.preventDefault();
        return n.Handler(r.touches[0] || r.touch, "DblClick", this);
      }
    },
    menu: function(r, q) {
      delete a.timeout;
      a.last = 0;
      a.up = false;
      return n.Handler(r.touches[0] || r.touch, "ContextMenu", q);
    }
  });
  d.Browser.Select({
    MSIE: function(q) {
      var s = document.documentMode || 0;
      var r = q.versionAtLeast("8.0");
      c.msieBorderWidthBug = document.compatMode === "BackCompat";
      c.msieEventBug = q.isIE9;
      c.msieAlignBug = !r || s < 8;
      if (s < 9) {
        n.LEFTBUTTON = 1;
      }
    },
    Safari: function(q) {
      c.safariContextMenuBug = true;
    },
    Opera: function(q) {
      c.operaPositionBug = true;
    },
    Konqueror: function(q) {
      c.noContextMenuBug = true;
    }
  });
  c.topImg = c.msieAlignBug
    ? h.Element("img", {
        style: { width: 0, height: 0, position: "relative" },
        src: "about:blank"
      })
    : h.Element("span", {
        style: { width: 0, height: 0, display: "inline-block" }
      });
  if (c.operaPositionBug) {
    c.topImg.style.border = "1px solid";
  }
  c.config = o = d.CombineConfig("MathEvents", o);
  var e = function() {
    var q = o.styles[".MathJax_Hover_Frame"];
    q.border = o.frame.bwidth + "px solid " + o.frame.bcolor + " ! important";
    q["box-shadow"] = q["-webkit-box-shadow"] = q["-moz-box-shadow"] = q[
      "-khtml-box-shadow"
    ] = "0px 0px " + o.frame.hwidth + " " + o.frame.hcolor;
  };
  g.Queue(
    d.Register.StartupHook("End Config", {}),
    [e],
    ["getImages", f],
    ["Styles", l, o.styles],
    ["Post", d.Startup.signal, "MathEvents Ready"],
    ["loadComplete", l, "[MathJax]/extensions/MathEvents.js"]
  );
})(
  MathJax.Hub,
  MathJax.HTML,
  MathJax.Ajax,
  MathJax.Callback,
  MathJax.Localization,
  MathJax.OutputJax,
  MathJax.InputJax
);
(function(a, d, f, c, j) {
  var k = "2.7.5";
  var i = a.CombineConfig("MathZoom", {
    styles: {
      "#MathJax_Zoom": {
        position: "absolute",
        "background-color": "#F0F0F0",
        overflow: "auto",
        display: "block",
        "z-index": 301,
        padding: ".5em",
        border: "1px solid black",
        margin: 0,
        "font-weight": "normal",
        "font-style": "normal",
        "text-align": "left",
        "text-indent": 0,
        "text-transform": "none",
        "line-height": "normal",
        "letter-spacing": "normal",
        "word-spacing": "normal",
        "word-wrap": "normal",
        "white-space": "nowrap",
        float: "none",
        "-webkit-box-sizing": "content-box",
        "-moz-box-sizing": "content-box",
        "box-sizing": "content-box",
        "box-shadow": "5px 5px 15px #AAAAAA",
        "-webkit-box-shadow": "5px 5px 15px #AAAAAA",
        "-moz-box-shadow": "5px 5px 15px #AAAAAA",
        "-khtml-box-shadow": "5px 5px 15px #AAAAAA",
        filter:
          "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"
      },
      "#MathJax_ZoomOverlay": {
        position: "absolute",
        left: 0,
        top: 0,
        "z-index": 300,
        display: "inline-block",
        width: "100%",
        height: "100%",
        border: 0,
        padding: 0,
        margin: 0,
        "background-color": "white",
        opacity: 0,
        filter: "alpha(opacity=0)"
      },
      "#MathJax_ZoomFrame": {
        position: "relative",
        display: "inline-block",
        height: 0,
        width: 0
      },
      "#MathJax_ZoomEventTrap": {
        position: "absolute",
        left: 0,
        top: 0,
        "z-index": 302,
        display: "inline-block",
        border: 0,
        padding: 0,
        margin: 0,
        "background-color": "white",
        opacity: 0,
        filter: "alpha(opacity=0)"
      }
    }
  });
  var e, b, g;
  MathJax.Hub.Register.StartupHook("MathEvents Ready", function() {
    g = MathJax.Extension.MathEvents.Event;
    e = MathJax.Extension.MathEvents.Event.False;
    b = MathJax.Extension.MathEvents.Hover;
  });
  var h = (MathJax.Extension.MathZoom = {
    version: k,
    settings: a.config.menuSettings,
    scrollSize: 18,
    HandleEvent: function(n, l, m) {
      if (h.settings.CTRL && !n.ctrlKey) {
        return true;
      }
      if (h.settings.ALT && !n.altKey) {
        return true;
      }
      if (h.settings.CMD && !n.metaKey) {
        return true;
      }
      if (h.settings.Shift && !n.shiftKey) {
        return true;
      }
      if (!h[l]) {
        return true;
      }
      return h[l](n, m);
    },
    Click: function(m, l) {
      if (this.settings.zoom === "Click") {
        return this.Zoom(m, l);
      }
    },
    DblClick: function(m, l) {
      if (
        this.settings.zoom === "Double-Click" ||
        this.settings.zoom === "DoubleClick"
      ) {
        return this.Zoom(m, l);
      }
    },
    Hover: function(m, l) {
      if (this.settings.zoom === "Hover") {
        this.Zoom(m, l);
        return true;
      }
      return false;
    },
    Zoom: function(o, u) {
      this.Remove();
      b.ClearHoverTimer();
      g.ClearSelection();
      var s = MathJax.OutputJax[u.jaxID];
      var p = s.getJaxFromMath(u);
      if (p.hover) {
        b.UnHover(p);
      }
      var q = this.findContainer(u);
      var l = Math.floor(0.85 * q.clientWidth),
        t = Math.max(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      if (this.getOverflow(q) !== "visible") {
        t = Math.min(q.clientHeight, t);
      }
      t = Math.floor(0.85 * t);
      var n = d.Element("span", { id: "MathJax_ZoomFrame" }, [
        ["span", { id: "MathJax_ZoomOverlay", onmousedown: this.Remove }],
        [
          "span",
          {
            id: "MathJax_Zoom",
            onclick: this.Remove,
            style: { visibility: "hidden", fontSize: this.settings.zscale }
          },
          [
            [
              "span",
              { style: { display: "inline-block", "white-space": "nowrap" } }
            ]
          ]
        ]
      ]);
      var z = n.lastChild,
        w = z.firstChild,
        r = n.firstChild;
      u.parentNode.insertBefore(n, u);
      u.parentNode.insertBefore(u, n);
      if (w.addEventListener) {
        w.addEventListener("mousedown", this.Remove, true);
      }
      var m = z.offsetWidth || z.clientWidth;
      l -= m;
      t -= m;
      z.style.maxWidth = l + "px";
      z.style.maxHeight = t + "px";
      if (this.msieTrapEventBug) {
        var y = d.Element("span", {
          id: "MathJax_ZoomEventTrap",
          onmousedown: this.Remove
        });
        n.insertBefore(y, z);
      }
      if (this.msieZIndexBug) {
        var v = d.addElement(document.body, "img", {
          src: "about:blank",
          id: "MathJax_ZoomTracker",
          width: 0,
          height: 0,
          style: { width: 0, height: 0, position: "relative" }
        });
        n.style.position = "relative";
        n.style.zIndex = i.styles["#MathJax_ZoomOverlay"]["z-index"];
        n = v;
      }
      var x = s.Zoom(p, w, u, l, t);
      if (this.msiePositionBug) {
        if (this.msieSizeBug) {
          z.style.height = x.zH + "px";
          z.style.width = x.zW + "px";
        }
        if (z.offsetHeight > t) {
          z.style.height = t + "px";
          z.style.width = x.zW + this.scrollSize + "px";
        }
        if (z.offsetWidth > l) {
          z.style.width = l + "px";
          z.style.height = x.zH + this.scrollSize + "px";
        }
      }
      if (this.operaPositionBug) {
        z.style.width = Math.min(l, x.zW) + "px";
      }
      if (
        z.offsetWidth > m &&
        z.offsetWidth - m < l &&
        z.offsetHeight - m < t
      ) {
        z.style.overflow = "visible";
      }
      this.Position(z, x);
      if (this.msieTrapEventBug) {
        y.style.height = z.clientHeight + "px";
        y.style.width = z.clientWidth + "px";
        y.style.left = parseFloat(z.style.left) + z.clientLeft + "px";
        y.style.top = parseFloat(z.style.top) + z.clientTop + "px";
      }
      z.style.visibility = "";
      if (this.settings.zoom === "Hover") {
        r.onmouseover = this.Remove;
      }
      if (window.addEventListener) {
        addEventListener("resize", this.Resize, false);
      } else {
        if (window.attachEvent) {
          attachEvent("onresize", this.Resize);
        } else {
          this.onresize = window.onresize;
          window.onresize = this.Resize;
        }
      }
      a.signal.Post(["math zoomed", p]);
      return e(o);
    },
    Position: function(p, r) {
      p.style.display = "none";
      var q = this.Resize(),
        m = q.x,
        s = q.y,
        l = r.mW;
      p.style.display = "";
      var o = -l - Math.floor((p.offsetWidth - l) / 2),
        n = r.Y;
      p.style.left = Math.max(o, 10 - m) + "px";
      p.style.top = Math.max(n, 10 - s) + "px";
      if (!h.msiePositionBug) {
        h.SetWH();
      }
    },
    Resize: function(m) {
      if (h.onresize) {
        h.onresize(m);
      }
      var q = document.getElementById("MathJax_ZoomFrame"),
        l = document.getElementById("MathJax_ZoomOverlay");
      var o = h.getXY(q),
        n = h.findContainer(q);
      if (h.getOverflow(n) !== "visible") {
        l.scroll_parent = n;
        var p = h.getXY(n);
        o.x -= p.x;
        o.y -= p.y;
        p = h.getBorder(n);
        o.x -= p.x;
        o.y -= p.y;
      }
      l.style.left = -o.x + "px";
      l.style.top = -o.y + "px";
      if (h.msiePositionBug) {
        setTimeout(h.SetWH, 0);
      } else {
        h.SetWH();
      }
      return o;
    },
    SetWH: function() {
      var l = document.getElementById("MathJax_ZoomOverlay");
      if (!l) {
        return;
      }
      l.style.display = "none";
      var m = l.scroll_parent || document.documentElement || document.body;
      l.style.width = m.scrollWidth + "px";
      l.style.height = Math.max(m.clientHeight, m.scrollHeight) + "px";
      l.style.display = "";
    },
    findContainer: function(l) {
      l = l.parentNode;
      while (
        l.parentNode &&
        l !== document.body &&
        h.getOverflow(l) === "visible"
      ) {
        l = l.parentNode;
      }
      return l;
    },
    getOverflow: window.getComputedStyle
      ? function(l) {
          return getComputedStyle(l).overflow;
        }
      : function(l) {
          return (l.currentStyle || { overflow: "visible" }).overflow;
        },
    getBorder: function(o) {
      var m = { thin: 1, medium: 2, thick: 3 };
      var n = window.getComputedStyle
        ? getComputedStyle(o)
        : o.currentStyle || { borderLeftWidth: 0, borderTopWidth: 0 };
      var l = n.borderLeftWidth,
        p = n.borderTopWidth;
      if (m[l]) {
        l = m[l];
      } else {
        l = parseInt(l);
      }
      if (m[p]) {
        p = m[p];
      } else {
        p = parseInt(p);
      }
      return { x: l, y: p };
    },
    getXY: function(o) {
      var l = 0,
        n = 0,
        m;
      m = o;
      while (m.offsetParent) {
        l += m.offsetLeft;
        m = m.offsetParent;
      }
      if (h.operaPositionBug) {
        o.style.border = "1px solid";
      }
      m = o;
      while (m.offsetParent) {
        n += m.offsetTop;
        m = m.offsetParent;
      }
      if (h.operaPositionBug) {
        o.style.border = "";
      }
      return { x: l, y: n };
    },
    Remove: function(n) {
      var p = document.getElementById("MathJax_ZoomFrame");
      if (p) {
        var o = MathJax.OutputJax[p.previousSibling.jaxID];
        var l = o.getJaxFromMath(p.previousSibling);
        a.signal.Post(["math unzoomed", l]);
        p.parentNode.removeChild(p);
        p = document.getElementById("MathJax_ZoomTracker");
        if (p) {
          p.parentNode.removeChild(p);
        }
        if (h.operaRefreshBug) {
          var m = d.addElement(document.body, "div", {
            style: {
              position: "fixed",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              opacity: 0
            },
            id: "MathJax_OperaDiv"
          });
          document.body.removeChild(m);
        }
        if (window.removeEventListener) {
          removeEventListener("resize", h.Resize, false);
        } else {
          if (window.detachEvent) {
            detachEvent("onresize", h.Resize);
          } else {
            window.onresize = h.onresize;
            delete h.onresize;
          }
        }
      }
      return e(n);
    }
  });
  a.Browser.Select({
    MSIE: function(l) {
      var n = document.documentMode || 0;
      var m = n >= 9;
      h.msiePositionBug = !m;
      h.msieSizeBug =
        l.versionAtLeast("7.0") &&
        (!document.documentMode || n === 7 || n === 8);
      h.msieZIndexBug = n <= 7;
      h.msieInlineBlockAlignBug = n <= 7;
      h.msieTrapEventBug = !window.addEventListener;
      if (document.compatMode === "BackCompat") {
        h.scrollSize = 52;
      }
      if (m) {
        delete i.styles["#MathJax_Zoom"].filter;
      }
    },
    Opera: function(l) {
      h.operaPositionBug = true;
      h.operaRefreshBug = true;
    }
  });
  h.topImg = h.msieInlineBlockAlignBug
    ? d.Element("img", {
        style: { width: 0, height: 0, position: "relative" },
        src: "about:blank"
      })
    : d.Element("span", {
        style: { width: 0, height: 0, display: "inline-block" }
      });
  if (h.operaPositionBug || h.msieTopBug) {
    h.topImg.style.border = "1px solid";
  }
  MathJax.Callback.Queue(
    ["StartupHook", MathJax.Hub.Register, "Begin Styles", {}],
    ["Styles", f, i.styles],
    ["Post", a.Startup.signal, "MathZoom Ready"],
    ["loadComplete", f, "[MathJax]/extensions/MathZoom.js"]
  );
})(
  MathJax.Hub,
  MathJax.HTML,
  MathJax.Ajax,
  MathJax.OutputJax["HTML-CSS"],
  MathJax.OutputJax.NativeMML
);
(function(f, o, q, e, r) {
  var p = "2.7.5";
  var d = MathJax.Callback.Signal("menu");
  MathJax.Extension.MathMenu = { version: p, signal: d };
  var t = function(u) {
    return MathJax.Localization._.apply(
      MathJax.Localization,
      [["MathMenu", u]].concat([].slice.call(arguments, 1))
    );
  };
  var i = MathJax.Object.isArray;
  var a = f.Browser.isPC,
    l = f.Browser.isMSIE,
    m = (document.documentMode || 0) > 8;
  var j = a ? null : "5px";
  var s = f.CombineConfig("MathMenu", {
    delay: 150,
    showRenderer: true,
    showMathPlayer: true,
    showFontMenu: false,
    showContext: false,
    showDiscoverable: false,
    showLocale: true,
    showLocaleURL: false,
    semanticsAnnotations: {
      TeX: ["TeX", "LaTeX", "application/x-tex"],
      StarMath: ["StarMath 5.0"],
      Maple: ["Maple"],
      ContentMathML: ["MathML-Content", "application/mathml-content+xml"],
      OpenMath: ["OpenMath"]
    },
    windowSettings: {
      status: "no",
      toolbar: "no",
      locationbar: "no",
      menubar: "no",
      directories: "no",
      personalbar: "no",
      resizable: "yes",
      scrollbars: "yes",
      width: 400,
      height: 300,
      left: Math.round((screen.width - 400) / 2),
      top: Math.round((screen.height - 300) / 3)
    },
    styles: {
      "#MathJax_About": {
        position: "fixed",
        left: "50%",
        width: "auto",
        "text-align": "center",
        border: "3px outset",
        padding: "1em 2em",
        "background-color": "#DDDDDD",
        color: "black",
        cursor: "default",
        "font-family": "message-box",
        "font-size": "120%",
        "font-style": "normal",
        "text-indent": 0,
        "text-transform": "none",
        "line-height": "normal",
        "letter-spacing": "normal",
        "word-spacing": "normal",
        "word-wrap": "normal",
        "white-space": "nowrap",
        float: "none",
        "z-index": 201,
        "border-radius": "15px",
        "-webkit-border-radius": "15px",
        "-moz-border-radius": "15px",
        "-khtml-border-radius": "15px",
        "box-shadow": "0px 10px 20px #808080",
        "-webkit-box-shadow": "0px 10px 20px #808080",
        "-moz-box-shadow": "0px 10px 20px #808080",
        "-khtml-box-shadow": "0px 10px 20px #808080",
        filter:
          "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"
      },
      "#MathJax_About.MathJax_MousePost": { outline: "none" },
      ".MathJax_Menu": {
        position: "absolute",
        "background-color": "white",
        color: "black",
        width: "auto",
        padding: a ? "2px" : "5px 0px",
        border: "1px solid #CCCCCC",
        margin: 0,
        cursor: "default",
        font: "menu",
        "text-align": "left",
        "text-indent": 0,
        "text-transform": "none",
        "line-height": "normal",
        "letter-spacing": "normal",
        "word-spacing": "normal",
        "word-wrap": "normal",
        "white-space": "nowrap",
        float: "none",
        "z-index": 201,
        "border-radius": j,
        "-webkit-border-radius": j,
        "-moz-border-radius": j,
        "-khtml-border-radius": j,
        "box-shadow": "0px 10px 20px #808080",
        "-webkit-box-shadow": "0px 10px 20px #808080",
        "-moz-box-shadow": "0px 10px 20px #808080",
        "-khtml-box-shadow": "0px 10px 20px #808080",
        filter:
          "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"
      },
      ".MathJax_MenuItem": {
        padding: a ? "2px 2em" : "1px 2em",
        background: "transparent"
      },
      ".MathJax_MenuArrow": {
        position: "absolute",
        right: ".5em",
        "padding-top": ".25em",
        color: "#666666",
        "font-family": l ? "'Arial unicode MS'" : null,
        "font-size": ".75em"
      },
      ".MathJax_MenuActive .MathJax_MenuArrow": { color: "white" },
      ".MathJax_MenuArrow.RTL": { left: ".5em", right: "auto" },
      ".MathJax_MenuCheck": {
        position: "absolute",
        left: ".7em",
        "font-family": l ? "'Arial unicode MS'" : null
      },
      ".MathJax_MenuCheck.RTL": { right: ".7em", left: "auto" },
      ".MathJax_MenuRadioCheck": {
        position: "absolute",
        left: a ? "1em" : ".7em"
      },
      ".MathJax_MenuRadioCheck.RTL": {
        right: a ? "1em" : ".7em",
        left: "auto"
      },
      ".MathJax_MenuLabel": {
        padding: a ? "2px 2em 4px 1.33em" : "1px 2em 3px 1.33em",
        "font-style": "italic"
      },
      ".MathJax_MenuRule": {
        "border-top": a ? "1px solid #CCCCCC" : "1px solid #DDDDDD",
        margin: a ? "4px 1px 0px" : "4px 3px"
      },
      ".MathJax_MenuDisabled": { color: "GrayText" },
      ".MathJax_MenuActive": {
        "background-color": a ? "Highlight" : "#606872",
        color: a ? "HighlightText" : "white"
      },
      ".MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus": {
        "background-color": "#E8E8E8"
      },
      ".MathJax_ContextMenu:focus": { outline: "none" },
      ".MathJax_ContextMenu .MathJax_MenuItem:focus": { outline: "none" },
      "#MathJax_AboutClose": { top: ".2em", right: ".2em" },
      ".MathJax_Menu .MathJax_MenuClose": { top: "-10px", left: "-10px" },
      ".MathJax_MenuClose": {
        position: "absolute",
        cursor: "pointer",
        display: "inline-block",
        border: "2px solid #AAA",
        "border-radius": "18px",
        "-webkit-border-radius": "18px",
        "-moz-border-radius": "18px",
        "-khtml-border-radius": "18px",
        "font-family": "'Courier New',Courier",
        "font-size": "24px",
        color: "#F0F0F0"
      },
      ".MathJax_MenuClose span": {
        display: "block",
        "background-color": "#AAA",
        border: "1.5px solid",
        "border-radius": "18px",
        "-webkit-border-radius": "18px",
        "-moz-border-radius": "18px",
        "-khtml-border-radius": "18px",
        "line-height": 0,
        padding: "8px 0 6px"
      },
      ".MathJax_MenuClose:hover": {
        color: "white!important",
        border: "2px solid #CCC!important"
      },
      ".MathJax_MenuClose:hover span": { "background-color": "#CCC!important" },
      ".MathJax_MenuClose:hover:focus": { outline: "none" }
    }
  });
  var n, k, b;
  f.Register.StartupHook("MathEvents Ready", function() {
    n = MathJax.Extension.MathEvents.Event.False;
    k = MathJax.Extension.MathEvents.Hover;
    b = MathJax.Extension.MathEvents.Event.KEY;
  });
  var h = MathJax.Object.Subclass(
    {
      Keydown: function(u, v) {
        switch (u.keyCode) {
          case b.ESCAPE:
            this.Remove(u, v);
            break;
          case b.RIGHT:
            this.Right(u, v);
            break;
          case b.LEFT:
            this.Left(u, v);
            break;
          case b.UP:
            this.Up(u, v);
            break;
          case b.DOWN:
            this.Down(u, v);
            break;
          case b.RETURN:
          case b.SPACE:
            this.Space(u, v);
            break;
          default:
            return;
            break;
        }
        return n(u);
      },
      Escape: function(u, v) {},
      Right: function(u, v) {},
      Left: function(u, v) {},
      Up: function(u, v) {},
      Down: function(u, v) {},
      Space: function(u, v) {}
    },
    {}
  );
  var g = (MathJax.Menu = h.Subclass(
    {
      version: p,
      items: [],
      posted: false,
      title: null,
      margin: 5,
      Init: function(u) {
        this.items = [].slice.call(arguments, 0);
      },
      With: function(u) {
        if (u) {
          f.Insert(this, u);
        }
        return this;
      },
      Post: function(M, E, B) {
        if (!M) {
          M = window.event || {};
        }
        var I = document.getElementById("MathJax_MenuFrame");
        if (!I) {
          I = g.Background(this);
          delete c.lastItem;
          delete c.lastMenu;
          delete g.skipUp;
          d.Post(["post", g.jax]);
          g.isRTL = MathJax.Localization.fontDirection() === "rtl";
        }
        var v = o.Element("div", {
          onmouseup: g.Mouseup,
          ondblclick: n,
          ondragstart: n,
          onselectstart: n,
          oncontextmenu: n,
          menuItem: this,
          className: "MathJax_Menu",
          onkeydown: g.Keydown,
          role: "menu"
        });
        if (M.type === "contextmenu" || M.type === "mouseover") {
          v.className += " MathJax_ContextMenu";
        }
        if (!B) {
          MathJax.Localization.setCSS(v);
        }
        for (var N = 0, K = this.items.length; N < K; N++) {
          this.items[N].Create(v);
        }
        if (g.isMobile) {
          o.addElement(
            v,
            "span",
            {
              className: "MathJax_MenuClose",
              menu: E,
              ontouchstart: g.Close,
              ontouchend: n,
              onmousedown: g.Close,
              onmouseup: n
            },
            [["span", {}, "\u00D7"]]
          );
        }
        I.appendChild(v);
        this.posted = true;
        if (v.offsetWidth) {
          v.style.width = v.offsetWidth + 2 + "px";
        }
        var H = M.pageX,
          F = M.pageY;
        var u = document.body.getBoundingClientRect();
        var C = window.getComputedStyle
          ? window.getComputedStyle(document.body)
          : { marginLeft: "0px" };
        var A = u.right - Math.min(0, u.left) + parseFloat(C.marginLeft);
        if (!H && !F && "clientX" in M) {
          H =
            M.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft;
          F =
            M.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop;
        }
        if (!E) {
          var L = g.CurrentNode() || M.target;
          if ((M.type === "keydown" || (!H && !F)) && L) {
            var P = window.pageXOffset || document.documentElement.scrollLeft;
            var O = window.pageYOffset || document.documentElement.scrollTop;
            var w = L.getBoundingClientRect();
            H = (w.right + w.left) / 2 + P;
            F = (w.bottom + w.top) / 2 + O;
          }
          if (H + v.offsetWidth > A - this.margin) {
            H = A - v.offsetWidth - this.margin;
          }
          if (g.isMobile) {
            H = Math.max(5, H - Math.floor(v.offsetWidth / 2));
            F -= 20;
          }
          g.skipUp = M.isContextMenu;
        } else {
          var z = "left",
            J = E.offsetWidth;
          H = g.isMobile ? 30 : J - 2;
          F = 0;
          while (E && E !== I) {
            H += E.offsetLeft;
            F += E.offsetTop;
            E = E.parentNode;
          }
          if (!g.isMobile) {
            if (
              (g.isRTL && H - J - v.offsetWidth > this.margin) ||
              (!g.isRTL && H + v.offsetWidth > A - this.margin)
            ) {
              z = "right";
              H = Math.max(this.margin, H - J - v.offsetWidth + 6);
            }
          }
          if (!a) {
            v.style["borderRadiusTop" + z] = 0;
            v.style["WebkitBorderRadiusTop" + z] = 0;
            v.style["MozBorderRadiusTop" + z] = 0;
            v.style["KhtmlBorderRadiusTop" + z] = 0;
          }
        }
        v.style.left = H + "px";
        v.style.top = F + "px";
        if (document.selection && document.selection.empty) {
          document.selection.empty();
        }
        var G = window.pageXOffset || document.documentElement.scrollLeft;
        var D = window.pageYOffset || document.documentElement.scrollTop;
        g.Focus(v);
        if (M.type === "keydown") {
          g.skipMouseoverFromKey = true;
          setTimeout(function() {
            delete g.skipMouseoverFromKey;
          }, s.delay);
        }
        window.scrollTo(G, D);
        return n(M);
      },
      Remove: function(u, v) {
        d.Post(["unpost", g.jax]);
        var w = document.getElementById("MathJax_MenuFrame");
        if (w) {
          w.parentNode.removeChild(w);
          if (this.msieFixedPositionBug) {
            detachEvent("onresize", g.Resize);
          }
        }
        if (g.jax.hover) {
          delete g.jax.hover.nofade;
          k.UnHover(g.jax);
        }
        g.Unfocus(v);
        if (u.type === "mousedown") {
          g.CurrentNode().blur();
        }
        return n(u);
      },
      Find: function(u) {
        return this.FindN(1, u, [].slice.call(arguments, 1));
      },
      FindId: function(u) {
        return this.FindN(0, u, [].slice.call(arguments, 1));
      },
      FindN: function(y, v, x) {
        for (var w = 0, u = this.items.length; w < u; w++) {
          if (this.items[w].name[y] === v) {
            if (x.length) {
              if (!this.items[w].submenu) {
                return null;
              }
              return this.items[w].submenu.FindN(y, x[0], x.slice(1));
            }
            return this.items[w];
          }
        }
        return null;
      },
      IndexOf: function(u) {
        return this.IndexOfN(1, u);
      },
      IndexOfId: function(u) {
        return this.IndexOfN(0, u);
      },
      IndexOfN: function(x, v) {
        for (var w = 0, u = this.items.length; w < u; w++) {
          if (this.items[w].name[x] === v) {
            return w;
          }
        }
        return null;
      },
      Right: function(u, v) {
        g.Right(u, v);
      },
      Left: function(u, v) {
        g.Left(u, v);
      },
      Up: function(v, w) {
        var u = w.lastChild;
        u.menuItem.Activate(v, u);
      },
      Down: function(v, w) {
        var u = w.firstChild;
        u.menuItem.Activate(v, u);
      },
      Space: function(u, v) {
        this.Remove(u, v);
      }
    },
    {
      config: s,
      Remove: function(u) {
        return g.Event(u, this, "Remove");
      },
      Mouseover: function(u) {
        return g.Event(u, this, "Mouseover");
      },
      Mouseout: function(u) {
        return g.Event(u, this, "Mouseout");
      },
      Mousedown: function(u) {
        return g.Event(u, this, "Mousedown");
      },
      Mouseup: function(u) {
        return g.Event(u, this, "Mouseup");
      },
      Keydown: function(u) {
        return g.Event(u, this, "Keydown");
      },
      Touchstart: function(u) {
        return g.Event(u, this, "Touchstart");
      },
      Touchend: function(u) {
        return g.Event(u, this, "Touchend");
      },
      Close: function(u) {
        return g.Event(
          u,
          this.menu || this.parentNode,
          this.menu ? "Touchend" : "Remove"
        );
      },
      Event: function(w, y, u, x) {
        if (g.skipMouseover && u === "Mouseover" && !x) {
          return n(w);
        }
        if (g.skipMouseoverFromKey && u === "Mouseover") {
          delete g.skipMouseoverFromKey;
          return n(w);
        }
        if (g.skipUp) {
          if (u.match(/Mouseup|Touchend/)) {
            delete g.skipUp;
            return n(w);
          }
          if (u === "Touchstart" || (u === "Mousedown" && !g.skipMousedown)) {
            delete g.skipUp;
          }
        }
        if (!w) {
          w = window.event;
        }
        var v = y.menuItem;
        if (v && v[u]) {
          return v[u](w, y);
        }
        return null;
      },
      BGSTYLE: {
        position: "absolute",
        left: 0,
        top: 0,
        "z-index": 200,
        width: "100%",
        height: "100%",
        border: 0,
        padding: 0,
        margin: 0
      },
      Background: function(v) {
        var w = o.addElement(
          document.body,
          "div",
          { style: this.BGSTYLE, id: "MathJax_MenuFrame" },
          [
            [
              "div",
              { style: this.BGSTYLE, menuItem: v, onmousedown: this.Remove }
            ]
          ]
        );
        var u = w.firstChild;
        if (g.msieBackgroundBug) {
          u.style.backgroundColor = "white";
          u.style.filter = "alpha(opacity=0)";
        }
        if (g.msieFixedPositionBug) {
          w.width = w.height = 0;
          this.Resize();
          attachEvent("onresize", this.Resize);
        } else {
          u.style.position = "fixed";
        }
        return w;
      },
      Resize: function() {
        setTimeout(g.SetWH, 0);
      },
      SetWH: function() {
        var u = document.getElementById("MathJax_MenuFrame");
        if (u) {
          u = u.firstChild;
          u.style.width = u.style.height = "1px";
          u.style.width = document.body.scrollWidth + "px";
          u.style.height = document.body.scrollHeight + "px";
        }
      },
      posted: false,
      active: null,
      GetNode: function(u) {
        var v = document.getElementById(u.inputID + "-Frame");
        return v.isMathJax ? v : v.firstChild;
      },
      CurrentNode: function() {
        return g.GetNode(g.jax);
      },
      AllNodes: function() {
        var v = MathJax.Hub.getAllJax();
        var w = [];
        for (var x = 0, u; (u = v[x]); x++) {
          w.push(g.GetNode(u));
        }
        return w;
      },
      ActiveNode: function() {
        return g.active;
      },
      FocusNode: function(u) {
        g.active = u;
        u.focus();
      },
      Focus: function(u) {
        !g.posted ? g.Activate(u) : (g.ActiveNode().tabIndex = -1);
        u.tabIndex = 0;
        g.FocusNode(u);
      },
      Activate: function(u, v) {
        g.UnsetTabIndex();
        g.posted = true;
      },
      Unfocus: function() {
        g.ActiveNode().tabIndex = -1;
        g.SetTabIndex();
        g.FocusNode(g.CurrentNode());
        g.posted = false;
      },
      MoveHorizontal: function(y, z, w) {
        if (!y.shiftKey) {
          return;
        }
        var v = g.AllNodes();
        var u = v.length;
        if (u === 0) {
          return;
        }
        var x = v[g.Mod(w(g.IndexOf(v, g.CurrentNode())), u)];
        if (x === g.CurrentNode()) {
          return;
        }
        g.menu.Remove(y, z);
        g.jax = MathJax.Hub.getJaxFor(x);
        g.FocusNode(x);
        g.menu.Post(null);
      },
      Right: function(u, v) {
        g.MoveHorizontal(u, v, function(w) {
          return w + 1;
        });
      },
      Left: function(u, v) {
        g.MoveHorizontal(u, v, function(w) {
          return w - 1;
        });
      },
      UnsetTabIndex: function() {
        var v = g.AllNodes();
        for (var w = 0, u; (u = v[w]); w++) {
          if (u.tabIndex > 0) {
            u.oldTabIndex = u.tabIndex;
          }
          u.tabIndex = -1;
        }
      },
      SetTabIndex: function() {
        var v = g.AllNodes();
        for (var w = 0, u; (u = v[w]); w++) {
          if (u.oldTabIndex !== undefined) {
            u.tabIndex = u.oldTabIndex;
            delete u.oldTabIndex;
          } else {
            u.tabIndex = f.getTabOrder(u);
          }
        }
      },
      Mod: function(u, v) {
        return ((u % v) + v) % v;
      },
      IndexOf: Array.prototype.indexOf
        ? function(u, v, w) {
            return u.indexOf(v, w);
          }
        : function(u, x, y) {
            for (var w = y || 0, v = u.length; w < v; w++) {
              if (x === u[w]) {
                return w;
              }
            }
            return -1;
          },
      saveCookie: function() {
        o.Cookie.Set("menu", this.cookie);
      },
      getCookie: function() {
        this.cookie = o.Cookie.Get("menu");
      }
    }
  ));
  MathJax.Menu.NAV = h;
  var c = (g.ITEM = h.Subclass(
    {
      name: "",
      node: null,
      menu: null,
      Attributes: function(u) {
        return f.Insert(
          {
            onmouseup: g.Mouseup,
            ondragstart: n,
            onselectstart: n,
            onselectend: n,
            ontouchstart: g.Touchstart,
            ontouchend: g.Touchend,
            className: "MathJax_MenuItem",
            role: this.role,
            menuItem: this
          },
          u
        );
      },
      Create: function(w) {
        if (!this.hidden) {
          var v = this.Attributes();
          var u = this.Label(v, w);
          o.addElement(w, "div", v, u);
        }
      },
      Name: function() {
        return t(this.name[0], this.name[1]);
      },
      Mouseover: function(u, v) {
        if (v.parentNode === g.ActiveNode().parentNode) {
          this.Deactivate(g.ActiveNode());
        }
        this.Activate(u, v);
      },
      Mouseout: function(u, v) {
        this.Deactivate(v);
      },
      Mouseup: function(u, v) {
        return this.Remove(u, v);
      },
      DeactivateSubmenus: function(z) {
        var y = document.getElementById("MathJax_MenuFrame").childNodes,
          v = c.GetMenuNode(z).childNodes;
        for (var w = 0, u = v.length; w < u; w++) {
          var x = v[w].menuItem;
          if (x && x.submenu && x.submenu.posted && x !== z.menuItem) {
            x.Deactivate(v[w]);
          }
        }
        this.RemoveSubmenus(z, y);
      },
      RemoveSubmenus: function(w, v) {
        v = v || document.getElementById("MathJax_MenuFrame").childNodes;
        var u = v.length - 1;
        while (u >= 0 && c.GetMenuNode(w).menuItem !== v[u].menuItem) {
          v[u].menuItem.posted = false;
          v[u].parentNode.removeChild(v[u]);
          u--;
        }
      },
      Touchstart: function(u, v) {
        return this.TouchEvent(u, v, "Mousedown");
      },
      Touchend: function(u, v) {
        return this.TouchEvent(u, v, "Mouseup");
      },
      TouchEvent: function(v, w, u) {
        if (this !== c.lastItem) {
          if (c.lastMenu) {
            g.Event(v, c.lastMenu, "Mouseout");
          }
          g.Event(v, w, "Mouseover", true);
          c.lastItem = this;
          c.lastMenu = w;
        }
        if (this.nativeTouch) {
          return null;
        }
        g.Event(v, w, u);
        return false;
      },
      Remove: function(u, v) {
        v = v.parentNode.menuItem;
        return v.Remove(u, v);
      },
      With: function(u) {
        if (u) {
          f.Insert(this, u);
        }
        return this;
      },
      isRTL: function() {
        return g.isRTL;
      },
      rtlClass: function() {
        return this.isRTL() ? " RTL" : "";
      }
    },
    {
      GetMenuNode: function(u) {
        return u.parentNode;
      }
    }
  ));
  g.ENTRY = g.ITEM.Subclass({
    role: "menuitem",
    Attributes: function(u) {
      u = f.Insert(
        {
          onmouseover: g.Mouseover,
          onmouseout: g.Mouseout,
          onmousedown: g.Mousedown,
          onkeydown: g.Keydown,
          "aria-disabled": !!this.disabled
        },
        u
      );
      u = this.SUPER(arguments).Attributes.call(this, u);
      if (this.disabled) {
        u.className += " MathJax_MenuDisabled";
      }
      return u;
    },
    MoveVertical: function(u, E, w) {
      var x = c.GetMenuNode(E);
      var D = [];
      for (var z = 0, C = x.menuItem.items, y; (y = C[z]); z++) {
        if (!y.hidden) {
          D.push(y);
        }
      }
      var B = g.IndexOf(D, this);
      if (B === -1) {
        return;
      }
      var A = D.length;
      var v = x.childNodes;
      do {
        B = g.Mod(w(B), A);
      } while (D[B].hidden || !v[B].role || v[B].role === "separator");
      this.Deactivate(E);
      D[B].Activate(u, v[B]);
    },
    Up: function(v, u) {
      this.MoveVertical(v, u, function(w) {
        return w - 1;
      });
    },
    Down: function(v, u) {
      this.MoveVertical(v, u, function(w) {
        return w + 1;
      });
    },
    Right: function(v, u) {
      this.MoveHorizontal(v, u, g.Right, !this.isRTL());
    },
    Left: function(v, u) {
      this.MoveHorizontal(v, u, g.Left, this.isRTL());
    },
    MoveHorizontal: function(A, z, u, B) {
      var x = c.GetMenuNode(z);
      if (x.menuItem === g.menu && A.shiftKey) {
        u(A, z);
      }
      if (B) {
        return;
      }
      if (x.menuItem !== g.menu) {
        this.Deactivate(z);
      }
      var v = x.previousSibling.childNodes;
      var y = v.length;
      while (y--) {
        var w = v[y];
        if (w.menuItem.submenu && w.menuItem.submenu === x.menuItem) {
          g.Focus(w);
          break;
        }
      }
      this.RemoveSubmenus(z);
    },
    Space: function(u, v) {
      this.Mouseup(u, v);
    },
    Activate: function(u, v) {
      this.Deactivate(v);
      if (!this.disabled) {
        v.className += " MathJax_MenuActive";
      }
      this.DeactivateSubmenus(v);
      g.Focus(v);
    },
    Deactivate: function(u) {
      u.className = u.className.replace(/ MathJax_MenuActive/, "");
    }
  });
  g.ITEM.COMMAND = g.ENTRY.Subclass({
    action: function() {},
    Init: function(u, w, v) {
      if (!i(u)) {
        u = [u, u];
      }
      this.name = u;
      this.action = w;
      this.With(v);
    },
    Label: function(u, v) {
      return [this.Name()];
    },
    Mouseup: function(u, v) {
      if (!this.disabled) {
        this.Remove(u, v);
        d.Post(["command", this]);
        this.action.call(this, u);
      }
      return n(u);
    }
  });
  g.ITEM.SUBMENU = g.ENTRY.Subclass({
    submenu: null,
    marker: "\u25BA",
    markerRTL: "\u25C4",
    Attributes: function(u) {
      u = f.Insert({ "aria-haspopup": "true" }, u);
      u = this.SUPER(arguments).Attributes.call(this, u);
      return u;
    },
    Init: function(u, w) {
      if (!i(u)) {
        u = [u, u];
      }
      this.name = u;
      var v = 1;
      if (!(w instanceof g.ITEM)) {
        this.With(w), v++;
      }
      this.submenu = g.apply(g, [].slice.call(arguments, v));
    },
    Label: function(u, v) {
      this.submenu.posted = false;
      return [
        this.Name() + " ",
        [
          "span",
          { className: "MathJax_MenuArrow" + this.rtlClass() },
          [this.isRTL() ? this.markerRTL : this.marker]
        ]
      ];
    },
    Timer: function(u, v) {
      this.ClearTimer();
      u = { type: u.type, clientX: u.clientX, clientY: u.clientY };
      this.timer = setTimeout(e(["Mouseup", this, u, v]), s.delay);
    },
    ClearTimer: function() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    Touchend: function(v, x) {
      var w = this.submenu.posted;
      var u = this.SUPER(arguments).Touchend.apply(this, arguments);
      if (w) {
        this.Deactivate(x);
        delete c.lastItem;
        delete c.lastMenu;
      }
      return u;
    },
    Mouseout: function(u, v) {
      if (!this.submenu.posted) {
        this.Deactivate(v);
      }
      this.ClearTimer();
    },
    Mouseover: function(u, v) {
      this.Activate(u, v);
    },
    Mouseup: function(u, v) {
      if (!this.disabled) {
        if (!this.submenu.posted) {
          this.ClearTimer();
          this.submenu.Post(u, v, this.ltr);
          g.Focus(v);
        } else {
          this.DeactivateSubmenus(v);
        }
      }
      return n(u);
    },
    Activate: function(u, v) {
      if (!this.disabled) {
        this.Deactivate(v);
        v.className += " MathJax_MenuActive";
      }
      if (!this.submenu.posted) {
        this.DeactivateSubmenus(v);
        if (!g.isMobile) {
          this.Timer(u, v);
        }
      }
      g.Focus(v);
    },
    MoveVertical: function(w, v, u) {
      this.ClearTimer();
      this.SUPER(arguments).MoveVertical.apply(this, arguments);
    },
    MoveHorizontal: function(w, y, v, x) {
      if (!x) {
        this.SUPER(arguments).MoveHorizontal.apply(this, arguments);
        return;
      }
      if (this.disabled) {
        return;
      }
      if (!this.submenu.posted) {
        this.Activate(w, y);
        return;
      }
      var u = c.GetMenuNode(y).nextSibling.childNodes;
      if (u.length > 0) {
        this.submenu.items[0].Activate(w, u[0]);
      }
    }
  });
  g.ITEM.RADIO = g.ENTRY.Subclass({
    variable: null,
    marker: a ? "\u25CF" : "\u2713",
    role: "menuitemradio",
    Attributes: function(v) {
      var u = s.settings[this.variable] === this.value ? "true" : "false";
      v = f.Insert({ "aria-checked": u }, v);
      v = this.SUPER(arguments).Attributes.call(this, v);
      return v;
    },
    Init: function(v, u, w) {
      if (!i(v)) {
        v = [v, v];
      }
      this.name = v;
      this.variable = u;
      this.With(w);
      if (this.value == null) {
        this.value = this.name[0];
      }
    },
    Label: function(v, w) {
      var u = { className: "MathJax_MenuRadioCheck" + this.rtlClass() };
      if (s.settings[this.variable] !== this.value) {
        u = { style: { display: "none" } };
      }
      return [["span", u, [this.marker]], " " + this.Name()];
    },
    Mouseup: function(x, y) {
      if (!this.disabled) {
        var z = y.parentNode.childNodes;
        for (var v = 0, u = z.length; v < u; v++) {
          var w = z[v].menuItem;
          if (w && w.variable === this.variable) {
            z[v].firstChild.style.display = "none";
          }
        }
        y.firstChild.display = "";
        s.settings[this.variable] = this.value;
        g.cookie[this.variable] = s.settings[this.variable];
        g.saveCookie();
        d.Post(["radio button", this]);
      }
      this.Remove(x, y);
      if (this.action && !this.disabled) {
        this.action.call(g, this);
      }
      return n(x);
    }
  });
  g.ITEM.CHECKBOX = g.ENTRY.Subclass({
    variable: null,
    marker: "\u2713",
    role: "menuitemcheckbox",
    Attributes: function(v) {
      var u = s.settings[this.variable] ? "true" : "false";
      v = f.Insert({ "aria-checked": u }, v);
      v = this.SUPER(arguments).Attributes.call(this, v);
      return v;
    },
    Init: function(v, u, w) {
      if (!i(v)) {
        v = [v, v];
      }
      this.name = v;
      this.variable = u;
      this.With(w);
    },
    Label: function(v, w) {
      var u = { className: "MathJax_MenuCheck" + this.rtlClass() };
      if (!s.settings[this.variable]) {
        u = { style: { display: "none" } };
      }
      return [["span", u, [this.marker]], " " + this.Name()];
    },
    Mouseup: function(u, v) {
      if (!this.disabled) {
        v.firstChild.display = s.settings[this.variable] ? "none" : "";
        s.settings[this.variable] = !s.settings[this.variable];
        g.cookie[this.variable] = s.settings[this.variable];
        g.saveCookie();
        d.Post(["checkbox", this]);
      }
      this.Remove(u, v);
      if (this.action && !this.disabled) {
        this.action.call(g, this);
      }
      return n(u);
    }
  });
  g.ITEM.LABEL = g.ENTRY.Subclass({
    role: "menuitem",
    Init: function(u, v) {
      if (!i(u)) {
        u = [u, u];
      }
      this.name = u;
      this.With(v);
    },
    Label: function(u, v) {
      u.className += " MathJax_MenuLabel";
      return [this.Name()];
    },
    Activate: function(u, v) {
      this.Deactivate(v);
      g.Focus(v);
    },
    Mouseup: function(u, v) {}
  });
  g.ITEM.RULE = g.ITEM.Subclass({
    role: "separator",
    Attributes: function(u) {
      u = f.Insert({ "aria-orientation": "vertical" }, u);
      u = this.SUPER(arguments).Attributes.call(this, u);
      return u;
    },
    Label: function(u, v) {
      u.className += " MathJax_MenuRule";
      return null;
    }
  });
  g.About = function(y) {
    var v = g.About.GetFont();
    var A = g.About.GetFormat();
    var u = ["MathJax.js v" + MathJax.fileversion, ["br"]];
    u.push([
      "div",
      { style: { "border-top": "groove 2px", margin: ".25em 0" } }
    ]);
    g.About.GetJax(u, MathJax.InputJax, ["InputJax", "%1 Input Jax v%2"]);
    g.About.GetJax(u, MathJax.OutputJax, ["OutputJax", "%1 Output Jax v%2"]);
    g.About.GetJax(u, MathJax.ElementJax, ["ElementJax", "%1 Element Jax v%2"]);
    u.push([
      "div",
      { style: { "border-top": "groove 2px", margin: ".25em 0" } }
    ]);
    g.About.GetJax(
      u,
      MathJax.Extension,
      ["Extension", "%1 Extension v%2"],
      true
    );
    u.push(
      ["div", { style: { "border-top": "groove 2px", margin: ".25em 0" } }],
      [
        "center",
        {},
        [
          f.Browser +
            " v" +
            f.Browser.version +
            (A ? " \u2014 " + t(A.replace(/ /g, ""), A) : "")
        ]
      ]
    );
    g.About.div = g.Background(g.About);
    var x = o.addElement(
      g.About.div,
      "div",
      { id: "MathJax_About", tabIndex: 0, onkeydown: g.About.Keydown },
      [
        ["b", { style: { fontSize: "120%" } }, ["MathJax"]],
        " v" + MathJax.version,
        ["br"],
        t(v.replace(/ /g, ""), "using " + v),
        ["br"],
        ["br"],
        [
          "span",
          {
            style: {
              display: "inline-block",
              "text-align": "left",
              "font-size": "80%",
              "max-height": "20em",
              overflow: "auto",
              "background-color": "#E4E4E4",
              padding: ".4em .6em",
              border: "1px inset"
            },
            tabIndex: 0
          },
          u
        ],
        ["br"],
        ["br"],
        ["a", { href: "http://www.mathjax.org/" }, ["www.mathjax.org"]],
        [
          "span",
          {
            className: "MathJax_MenuClose",
            id: "MathJax_AboutClose",
            onclick: g.About.Remove,
            onkeydown: g.About.Keydown,
            tabIndex: 0,
            role: "button",
            "aria-label": t("CloseAboutDialog", "Close about MathJax dialog")
          },
          [["span", {}, "\u00D7"]]
        ]
      ]
    );
    if (y.type === "mouseup") {
      x.className += " MathJax_MousePost";
    }
    x.focus();
    MathJax.Localization.setCSS(x);
    var z = document.documentElement || {};
    var w = window.innerHeight || z.clientHeight || z.scrollHeight || 0;
    if (g.prototype.msieAboutBug) {
      x.style.width = "20em";
      x.style.position = "absolute";
      x.style.left =
        Math.floor((document.documentElement.scrollWidth - x.offsetWidth) / 2) +
        "px";
      x.style.top =
        Math.floor((w - x.offsetHeight) / 3) + document.body.scrollTop + "px";
    } else {
      x.style.marginLeft = Math.floor(-x.offsetWidth / 2) + "px";
      x.style.top = Math.floor((w - x.offsetHeight) / 3) + "px";
    }
  };
  g.About.Remove = function(u) {
    if (g.About.div) {
      document.body.removeChild(g.About.div);
      delete g.About.div;
    }
  };
  (g.About.Keydown = function(u) {
    if (
      u.keyCode === b.ESCAPE ||
      (this.id === "MathJax_AboutClose" &&
        (u.keyCode === b.SPACE || u.keyCode === b.RETURN))
    ) {
      g.About.Remove(u);
      g.CurrentNode().focus();
      n(u);
    }
  }),
    (g.About.GetJax = function(v, A, y, x) {
      var z = [];
      for (var B in A) {
        if (A.hasOwnProperty(B) && A[B]) {
          if ((x && A[B].version) || (A[B].isa && A[B].isa(A))) {
            z.push(t(y[0], y[1], A[B].id || B, A[B].version));
          }
        }
      }
      z.sort();
      for (var w = 0, u = z.length; w < u; w++) {
        v.push(z[w], ["br"]);
      }
      return v;
    });
  g.About.GetFont = function() {
    var u = MathJax.Hub.outputJax["jax/mml"][0] || {};
    var v =
      {
        SVG: "web SVG",
        CommonHTML: "web TeX",
        "HTML-CSS": u.imgFonts
          ? "image"
          : (u.webFonts ? "web" : "local") + " " + u.fontInUse
      }[u.id] || "generic";
    return v + " fonts";
  };
  g.About.GetFormat = function() {
    var u = MathJax.Hub.outputJax["jax/mml"][0] || {};
    if (u.id !== "HTML-CSS" || !u.webFonts || u.imgFonts) {
      return;
    }
    return u.allowWebFonts.replace(/otf/, "woff or otf") + " fonts";
  };
  g.Help = function(u) {
    q.Require("[MathJax]/extensions/HelpDialog.js", function() {
      MathJax.Extension.Help.Dialog({ type: u.type });
    });
  };
  g.ShowSource = function(y) {
    if (!y) {
      y = window.event;
    }
    var x = { screenX: y.screenX, screenY: y.screenY };
    if (!g.jax) {
      return;
    }
    if (this.format === "MathML") {
      var v = MathJax.ElementJax.mml;
      if (v && typeof v.mbase.prototype.toMathML !== "undefined") {
        try {
          g.ShowSource.Text(g.jax.root.toMathML("", g.jax), y);
        } catch (w) {
          if (!w.restart) {
            throw w;
          }
          e.After([this, g.ShowSource, x], w.restart);
        }
      } else {
        if (!q.loadingToMathML) {
          q.loadingToMathML = true;
          g.ShowSource.Window(y);
          e.Queue(
            q.Require("[MathJax]/extensions/toMathML.js"),
            function() {
              delete q.loadingToMathML;
              if (!v.mbase.prototype.toMathML) {
                v.mbase.prototype.toMathML = function() {};
              }
            },
            [this, g.ShowSource, x]
          );
          return;
        }
      }
    } else {
      if (this.format === "Error") {
        g.ShowSource.Text(g.jax.errorText, y);
      } else {
        if (s.semanticsAnnotations[this.format]) {
          var u = g.jax.root.getAnnotation(this.format);
          if (u.data[0]) {
            g.ShowSource.Text(u.data[0].toString());
          }
        } else {
          if (g.jax.originalText == null) {
            alert(t("NoOriginalForm", "No original form available"));
            return;
          }
          g.ShowSource.Text(g.jax.originalText, y);
        }
      }
    }
  };
  g.ShowSource.Window = function(v) {
    if (!g.ShowSource.w) {
      var w = [],
        u = s.windowSettings;
      for (var x in u) {
        if (u.hasOwnProperty(x)) {
          w.push(x + "=" + u[x]);
        }
      }
      g.ShowSource.w = window.open("", "_blank", w.join(","));
    }
    return g.ShowSource.w;
  };
  g.ShowSource.Text = function(z, x) {
    var u = g.ShowSource.Window(x);
    delete g.ShowSource.w;
    z = z.replace(/^\s*/, "").replace(/\s*$/, "");
    z = z
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    var y = t("EqSource", "MathJax Equation Source");
    if (g.isMobile) {
      u.document.open();
      u.document.write(
        "<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>" +
          y +
          "</title></head><body style='font-size:85%'>"
      );
      u.document.write("<pre>" + z + "</pre>");
      u.document.write(
        "<hr><input type='button' value='" +
          t("Close", "Close") +
          "' onclick='window.close()' />"
      );
      u.document.write("</body></html>");
      u.document.close();
    } else {
      u.document.open();
      u.document.write(
        "<html><head><title>" +
          y +
          "</title></head><body style='font-size:85%'>"
      );
      u.document.write("<table><tr><td><pre>" + z + "</pre></td></tr></table>");
      u.document.write("</body></html>");
      u.document.close();
      var v = u.document.body.firstChild;
      setTimeout(function() {
        var B = u.outerHeight - u.innerHeight || 30,
          A = u.outerWidth - u.innerWidth || 30,
          w,
          E;
        A = Math.max(
          140,
          Math.min(Math.floor(0.5 * screen.width), v.offsetWidth + A + 25)
        );
        B = Math.max(
          40,
          Math.min(Math.floor(0.5 * screen.height), v.offsetHeight + B + 25)
        );
        if (g.prototype.msieHeightBug) {
          B += 35;
        }
        u.resizeTo(A, B);
        var D;
        try {
          D = x.screenX;
        } catch (C) {}
        if (x && D != null) {
          w = Math.max(
            0,
            Math.min(x.screenX - Math.floor(A / 2), screen.width - A - 20)
          );
          E = Math.max(
            0,
            Math.min(x.screenY - Math.floor(B / 2), screen.height - B - 20)
          );
          u.moveTo(w, E);
        }
      }, 50);
    }
  };
  g.Scale = function() {
    var z = ["CommonHTML", "HTML-CSS", "SVG", "NativeMML", "PreviewHTML"],
      u = z.length,
      y = 100,
      w,
      v;
    for (w = 0; w < u; w++) {
      v = r[z[w]];
      if (v) {
        y = v.config.scale;
        break;
      }
    }
    var x = prompt(
      t("ScaleMath", "Scale all mathematics (compared to surrounding text) by"),
      y + "%"
    );
    if (x) {
      if (x.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)) {
        x = parseFloat(x);
        if (x) {
          if (x !== y) {
            for (w = 0; w < u; w++) {
              v = r[z[w]];
              if (v) {
                v.config.scale = x;
              }
            }
            g.cookie.scale = f.config.scale = x;
            g.saveCookie();
            f.Queue(["Rerender", f]);
          }
        } else {
          alert(t("NonZeroScale", "The scale should not be zero"));
        }
      } else {
        alert(
          t("PercentScale", "The scale should be a percentage (e.g., 120%%)")
        );
      }
    }
  };
  g.Zoom = function() {
    if (!MathJax.Extension.MathZoom) {
      q.Require("[MathJax]/extensions/MathZoom.js");
    }
  };
  g.Renderer = function() {
    var v = f.outputJax["jax/mml"];
    if (v[0] !== s.settings.renderer) {
      var y = f.Browser,
        x,
        u = g.Renderer.Messages,
        w;
      switch (s.settings.renderer) {
        case "NativeMML":
          if (!s.settings.warnedMML) {
            if (y.isChrome && y.version.substr(0, 3) !== "24.") {
              x = u.MML.WebKit;
            } else {
              if (y.isSafari && !y.versionAtLeast("5.0")) {
                x = u.MML.WebKit;
              } else {
                if (y.isMSIE) {
                  if (!y.hasMathPlayer) {
                    x = u.MML.MSIE;
                  }
                } else {
                  if (y.isEdge) {
                    x = u.MML.WebKit;
                  } else {
                    x = u.MML[y];
                  }
                }
              }
            }
            w = "warnedMML";
          }
          break;
        case "SVG":
          if (!s.settings.warnedSVG) {
            if (y.isMSIE && !m) {
              x = u.SVG.MSIE;
            }
          }
          break;
      }
      if (x) {
        x = t(x[0], x[1]);
        x += "\n\n";
        x += t(
          "SwitchAnyway",
          "Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)"
        );
        g.cookie.renderer = v[0].id;
        g.saveCookie();
        if (!confirm(x)) {
          g.cookie.renderer = s.settings.renderer = o.Cookie.Get(
            "menu"
          ).renderer;
          g.saveCookie();
          return;
        }
        if (w) {
          g.cookie.warned = s.settings.warned = true;
        }
        g.cookie.renderer = s.settings.renderer;
        g.saveCookie();
      }
      f.Queue(
        ["setRenderer", f, s.settings.renderer, "jax/mml"],
        ["Rerender", f]
      );
    }
  };
  g.Renderer.Messages = {
    MML: {
      WebKit: [
        "WebkitNativeMMLWarning",
        "Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable."
      ],
      MSIE: [
        "MSIENativeMMLWarning",
        "Internet Explorer requires the MathPlayer plugin in order to process MathML output."
      ],
      Opera: [
        "OperaNativeMMLWarning",
        "Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly."
      ],
      Safari: [
        "SafariNativeMMLWarning",
        "Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."
      ],
      Firefox: [
        "FirefoxNativeMMLWarning",
        "Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."
      ]
    },
    SVG: {
      MSIE: [
        "MSIESVGWarning",
        "SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly."
      ]
    }
  };
  g.AssistiveMML = function(w, u) {
    var v = MathJax.Extension.AssistiveMML;
    if (!v) {
      if (!u) {
        q.Require("[MathJax]/extensions/AssistiveMML.js", [
          "AssistiveMML",
          g,
          w,
          true
        ]);
      }
      return;
    }
    MathJax.Hub.Queue([
      (s.settings.assistiveMML ? "Add" : "Remove") + "AssistiveMathML",
      v
    ]);
  };
  g.Font = function() {
    var u = r["HTML-CSS"];
    if (!u) {
      return;
    }
    document.location.reload();
  };
  g.Locale = function() {
    MathJax.Localization.setLocale(s.settings.locale);
    MathJax.Hub.Queue(["Reprocess", MathJax.Hub]);
  };
  g.LoadLocale = function() {
    var u = prompt(t("LoadURL", "Load translation data from this URL:"));
    if (u) {
      if (!u.match(/\.js$/)) {
        alert(
          t(
            "BadURL",
            "The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'"
          )
        );
      }
      q.Require(u, function(v) {
        if (v != q.STATUS.OK) {
          alert(t("BadData", "Failed to load translation data from %1", u));
        }
      });
    }
  };
  g.MPEvents = function(w) {
    var v = s.settings.discoverable,
      u = g.MPEvents.Messages;
    if (!m) {
      if (s.settings.mpMouse && !confirm(t.apply(t, u.IE8warning))) {
        delete g.cookie.mpContext;
        delete s.settings.mpContext;
        delete g.cookie.mpMouse;
        delete s.settings.mpMouse;
        g.saveCookie();
        return;
      }
      s.settings.mpContext = s.settings.mpMouse;
      g.cookie.mpContext = g.cookie.mpMouse = s.settings.mpMouse;
      g.saveCookie();
      MathJax.Hub.Queue(["Rerender", MathJax.Hub]);
    } else {
      if (!v && w.name[1] === "Menu Events" && s.settings.mpContext) {
        alert(t.apply(t, u.IE9warning));
      }
    }
  };
  g.MPEvents.Messages = {
    IE8warning: [
      "IE8warning",
      "This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?"
    ],
    IE9warning: [
      "IE9warning",
      "The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead."
    ]
  };
  f.Browser.Select({
    MSIE: function(u) {
      var v = document.compatMode === "BackCompat";
      var w = u.versionAtLeast("8.0") && document.documentMode > 7;
      g.Augment({
        margin: 20,
        msieBackgroundBug: (document.documentMode || 0) < 9,
        msieFixedPositionBug: v || !w,
        msieAboutBug: v,
        msieHeightBug: (document.documentMode || 0) < 9
      });
      if (m) {
        delete s.styles["#MathJax_About"].filter;
        delete s.styles[".MathJax_Menu"].filter;
      }
    },
    Firefox: function(u) {
      g.skipMouseover = u.isMobile && u.versionAtLeast("6.0");
      g.skipMousedown = u.isMobile;
    }
  });
  g.isMobile = f.Browser.isMobile;
  g.noContextMenu = f.Browser.noContextMenu;
  g.CreateLocaleMenu = function() {
    if (!g.menu) {
      return;
    }
    var z = g.menu.Find("Language").submenu,
      w = z.items;
    var v = [],
      B = MathJax.Localization.strings;
    for (var A in B) {
      if (B.hasOwnProperty(A)) {
        v.push(A);
      }
    }
    v = v.sort();
    z.items = [];
    for (var x = 0, u = v.length; x < u; x++) {
      var y = B[v[x]].menuTitle;
      if (y) {
        y += " (" + v[x] + ")";
      } else {
        y = v[x];
      }
      z.items.push(c.RADIO([v[x], y], "locale", { action: g.Locale }));
    }
    z.items.push(w[w.length - 2], w[w.length - 1]);
  };
  g.CreateAnnotationMenu = function() {
    if (!g.menu) {
      return;
    }
    var w = g.menu.Find("Show Math As", "Annotation").submenu;
    var v = s.semanticsAnnotations;
    for (var u in v) {
      if (v.hasOwnProperty(u)) {
        w.items.push(
          c.COMMAND([u, u], g.ShowSource, {
            hidden: true,
            nativeTouch: true,
            format: u
          })
        );
      }
    }
  };
  f.Register.StartupHook("End Config", function() {
    s.settings = f.config.menuSettings;
    if (typeof s.settings.showRenderer !== "undefined") {
      s.showRenderer = s.settings.showRenderer;
    }
    if (typeof s.settings.showFontMenu !== "undefined") {
      s.showFontMenu = s.settings.showFontMenu;
    }
    if (typeof s.settings.showContext !== "undefined") {
      s.showContext = s.settings.showContext;
    }
    g.getCookie();
    g.menu = g(
      c.SUBMENU(
        ["Show", "Show Math As"],
        c.COMMAND(["MathMLcode", "MathML Code"], g.ShowSource, {
          nativeTouch: true,
          format: "MathML"
        }),
        c.COMMAND(["Original", "Original Form"], g.ShowSource, {
          nativeTouch: true
        }),
        c.SUBMENU(["Annotation", "Annotation"], { disabled: true }),
        c.RULE(),
        c.CHECKBOX(["texHints", "Show TeX hints in MathML"], "texHints"),
        c.CHECKBOX(
          ["semantics", "Add original form as annotation"],
          "semantics"
        )
      ),
      c.RULE(),
      c.SUBMENU(
        ["Settings", "Math Settings"],
        c.SUBMENU(
          ["ZoomTrigger", "Zoom Trigger"],
          c.RADIO(["Hover", "Hover"], "zoom", { action: g.Zoom }),
          c.RADIO(["Click", "Click"], "zoom", { action: g.Zoom }),
          c.RADIO(["DoubleClick", "Double-Click"], "zoom", { action: g.Zoom }),
          c.RADIO(["NoZoom", "No Zoom"], "zoom", { value: "None" }),
          c.RULE(),
          c.LABEL(["TriggerRequires", "Trigger Requires:"]),
          c.CHECKBOX(
            f.Browser.isMac ? ["Option", "Option"] : ["Alt", "Alt"],
            "ALT"
          ),
          c.CHECKBOX(["Command", "Command"], "CMD", {
            hidden: !f.Browser.isMac
          }),
          c.CHECKBOX(["Control", "Control"], "CTRL", {
            hidden: f.Browser.isMac
          }),
          c.CHECKBOX(["Shift", "Shift"], "Shift")
        ),
        c.SUBMENU(
          ["ZoomFactor", "Zoom Factor"],
          c.RADIO("125%", "zscale"),
          c.RADIO("133%", "zscale"),
          c.RADIO("150%", "zscale"),
          c.RADIO("175%", "zscale"),
          c.RADIO("200%", "zscale"),
          c.RADIO("250%", "zscale"),
          c.RADIO("300%", "zscale"),
          c.RADIO("400%", "zscale")
        ),
        c.RULE(),
        c.SUBMENU(
          ["Renderer", "Math Renderer"],
          { hidden: !s.showRenderer },
          c.RADIO(["HTML-CSS", "HTML-CSS"], "renderer", { action: g.Renderer }),
          c.RADIO(["CommonHTML", "Common HTML"], "renderer", {
            action: g.Renderer,
            value: "CommonHTML"
          }),
          c.RADIO(["PreviewHTML", "Preview HTML"], "renderer", {
            action: g.Renderer,
            value: "PreviewHTML"
          }),
          c.RADIO(["MathML", "MathML"], "renderer", {
            action: g.Renderer,
            value: "NativeMML"
          }),
          c.RADIO(["SVG", "SVG"], "renderer", { action: g.Renderer }),
          c.RADIO(["PlainSource", "Plain Source"], "renderer", {
            action: g.Renderer,
            value: "PlainSource"
          }),
          c.RULE(),
          c.CHECKBOX(["FastPreview", "Fast Preview"], "FastPreview")
        ),
        c.SUBMENU(
          "MathPlayer",
          {
            hidden: !f.Browser.isMSIE || !s.showMathPlayer,
            disabled: !f.Browser.hasMathPlayer
          },
          c.LABEL(["MPHandles", "Let MathPlayer Handle:"]),
          c.CHECKBOX(["MenuEvents", "Menu Events"], "mpContext", {
            action: g.MPEvents,
            hidden: !m
          }),
          c.CHECKBOX(["MouseEvents", "Mouse Events"], "mpMouse", {
            action: g.MPEvents,
            hidden: !m
          }),
          c.CHECKBOX(["MenuAndMouse", "Mouse and Menu Events"], "mpMouse", {
            action: g.MPEvents,
            hidden: m
          })
        ),
        c.SUBMENU(
          ["FontPrefs", "Font Preference"],
          { hidden: !s.showFontMenu },
          c.LABEL(["ForHTMLCSS", "For HTML-CSS:"]),
          c.RADIO(["Auto", "Auto"], "font", { action: g.Font }),
          c.RULE(),
          c.RADIO(["TeXLocal", "TeX (local)"], "font", { action: g.Font }),
          c.RADIO(["TeXWeb", "TeX (web)"], "font", { action: g.Font }),
          c.RADIO(["TeXImage", "TeX (image)"], "font", { action: g.Font }),
          c.RULE(),
          c.RADIO(["STIXLocal", "STIX (local)"], "font", { action: g.Font }),
          c.RADIO(["STIXWeb", "STIX (web)"], "font", { action: g.Font }),
          c.RULE(),
          c.RADIO(["AsanaMathWeb", "Asana Math (web)"], "font", {
            action: g.Font
          }),
          c.RADIO(["GyrePagellaWeb", "Gyre Pagella (web)"], "font", {
            action: g.Font
          }),
          c.RADIO(["GyreTermesWeb", "Gyre Termes (web)"], "font", {
            action: g.Font
          }),
          c.RADIO(["LatinModernWeb", "Latin Modern (web)"], "font", {
            action: g.Font
          }),
          c.RADIO(["NeoEulerWeb", "Neo Euler (web)"], "font", {
            action: g.Font
          })
        ),
        c.SUBMENU(
          ["ContextMenu", "Contextual Menu"],
          { hidden: !s.showContext },
          c.RADIO(["MathJax", "MathJax"], "context"),
          c.RADIO(["Browser", "Browser"], "context")
        ),
        c.COMMAND(["Scale", "Scale All Math ..."], g.Scale),
        c
          .RULE()
          .With({ hidden: !s.showDiscoverable, name: ["", "discover_rule"] }),
        c.CHECKBOX(["Discoverable", "Highlight on Hover"], "discoverable", {
          hidden: !s.showDiscoverable
        })
      ),
      c.SUBMENU(
        ["Accessibility", "Accessibility"],
        c.CHECKBOX(["AssistiveMML", "Assistive MathML"], "assistiveMML", {
          action: g.AssistiveMML
        }),
        c.CHECKBOX(["InTabOrder", "Include in Tab Order"], "inTabOrder")
      ),
      c.SUBMENU(
        ["Locale", "Language"],
        { hidden: !s.showLocale, ltr: true },
        c.RADIO("en", "locale", { action: g.Locale }),
        c
          .RULE()
          .With({ hidden: !s.showLocaleURL, name: ["", "localURL_rule"] }),
        c.COMMAND(["LoadLocale", "Load from URL ..."], g.LoadLocale, {
          hidden: !s.showLocaleURL
        })
      ),
      c.RULE(),
      c.COMMAND(["About", "About MathJax"], g.About),
      c.COMMAND(["Help", "MathJax Help"], g.Help)
    );
    if (g.isMobile) {
      (function() {
        var v = s.settings;
        var u = g.menu.Find("Math Settings", "Zoom Trigger").submenu;
        u.items[0].disabled = u.items[1].disabled = true;
        if (v.zoom === "Hover" || v.zoom == "Click") {
          v.zoom = "None";
        }
        u.items = u.items.slice(0, 4);
        if (navigator.appVersion.match(/[ (]Android[) ]/)) {
          g.ITEM.SUBMENU.Augment({ marker: "\u00BB" });
        }
      })();
    }
    g.CreateLocaleMenu();
    g.CreateAnnotationMenu();
  });
  g.showRenderer = function(u) {
    g.cookie.showRenderer = s.showRenderer = u;
    g.saveCookie();
    g.menu.Find("Math Settings", "Math Renderer").hidden = !u;
  };
  g.showMathPlayer = function(u) {
    g.cookie.showMathPlayer = s.showMathPlayer = u;
    g.saveCookie();
    g.menu.Find("Math Settings", "MathPlayer").hidden = !u;
  };
  g.showFontMenu = function(u) {
    g.cookie.showFontMenu = s.showFontMenu = u;
    g.saveCookie();
    g.menu.Find("Math Settings", "Font Preference").hidden = !u;
  };
  g.showContext = function(u) {
    g.cookie.showContext = s.showContext = u;
    g.saveCookie();
    g.menu.Find("Math Settings", "Contextual Menu").hidden = !u;
  };
  g.showDiscoverable = function(u) {
    g.cookie.showDiscoverable = s.showDiscoverable = u;
    g.saveCookie();
    g.menu.Find("Math Settings", "Highlight on Hover").hidden = !u;
    g.menu.Find("Math Settings", "discover_rule").hidden = !u;
  };
  g.showLocale = function(u) {
    g.cookie.showLocale = s.showLocale = u;
    g.saveCookie();
    g.menu.Find("Language").hidden = !u;
  };
  MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready", function() {
    if (!MathJax.OutputJax["HTML-CSS"].config.imageFont) {
      g.menu.Find(
        "Math Settings",
        "Font Preference",
        "TeX (image)"
      ).disabled = true;
    }
  });
  e.Queue(
    f.Register.StartupHook("End Config", {}),
    ["Styles", q, s.styles],
    ["Post", f.Startup.signal, "MathMenu Ready"],
    ["loadComplete", q, "[MathJax]/extensions/MathMenu.js"]
  );
})(
  MathJax.Hub,
  MathJax.HTML,
  MathJax.Ajax,
  MathJax.CallBack,
  MathJax.OutputJax
);
MathJax.ElementJax.mml = MathJax.ElementJax(
  { mimeType: "jax/mml" },
  {
    id: "mml",
    version: "2.7.5",
    directory: MathJax.ElementJax.directory + "/mml",
    extensionDir: MathJax.ElementJax.extensionDir + "/mml",
    optableDir: MathJax.ElementJax.directory + "/mml/optable"
  }
);
MathJax.ElementJax.mml.Augment(
  {
    Init: function() {
      if (arguments.length === 1 && arguments[0].type === "math") {
        this.root = arguments[0];
      } else {
        this.root = MathJax.ElementJax.mml.math.apply(this, arguments);
      }
      if (this.root.attr && this.root.attr.mode) {
        if (!this.root.display && this.root.attr.mode === "display") {
          this.root.display = "block";
          this.root.attrNames.push("display");
        }
        delete this.root.attr.mode;
        for (var b = 0, a = this.root.attrNames.length; b < a; b++) {
          if (this.root.attrNames[b] === "mode") {
            this.root.attrNames.splice(b, 1);
            break;
          }
        }
      }
    }
  },
  {
    INHERIT: "_inherit_",
    AUTO: "_auto_",
    SIZE: {
      INFINITY: "infinity",
      SMALL: "small",
      NORMAL: "normal",
      BIG: "big"
    },
    COLOR: { TRANSPARENT: "transparent" },
    VARIANT: {
      NORMAL: "normal",
      BOLD: "bold",
      ITALIC: "italic",
      BOLDITALIC: "bold-italic",
      DOUBLESTRUCK: "double-struck",
      FRAKTUR: "fraktur",
      BOLDFRAKTUR: "bold-fraktur",
      SCRIPT: "script",
      BOLDSCRIPT: "bold-script",
      SANSSERIF: "sans-serif",
      BOLDSANSSERIF: "bold-sans-serif",
      SANSSERIFITALIC: "sans-serif-italic",
      SANSSERIFBOLDITALIC: "sans-serif-bold-italic",
      MONOSPACE: "monospace",
      INITIAL: "initial",
      TAILED: "tailed",
      LOOPED: "looped",
      STRETCHED: "stretched",
      CALIGRAPHIC: "-tex-caligraphic",
      OLDSTYLE: "-tex-oldstyle"
    },
    FORM: { PREFIX: "prefix", INFIX: "infix", POSTFIX: "postfix" },
    LINEBREAK: {
      AUTO: "auto",
      NEWLINE: "newline",
      NOBREAK: "nobreak",
      GOODBREAK: "goodbreak",
      BADBREAK: "badbreak"
    },
    LINEBREAKSTYLE: {
      BEFORE: "before",
      AFTER: "after",
      DUPLICATE: "duplicate",
      INFIXLINBREAKSTYLE: "infixlinebreakstyle"
    },
    INDENTALIGN: {
      LEFT: "left",
      CENTER: "center",
      RIGHT: "right",
      AUTO: "auto",
      ID: "id",
      INDENTALIGN: "indentalign"
    },
    INDENTSHIFT: { INDENTSHIFT: "indentshift" },
    LINETHICKNESS: { THIN: "thin", MEDIUM: "medium", THICK: "thick" },
    NOTATION: {
      LONGDIV: "longdiv",
      ACTUARIAL: "actuarial",
      RADICAL: "radical",
      BOX: "box",
      ROUNDEDBOX: "roundedbox",
      CIRCLE: "circle",
      LEFT: "left",
      RIGHT: "right",
      TOP: "top",
      BOTTOM: "bottom",
      UPDIAGONALSTRIKE: "updiagonalstrike",
      DOWNDIAGONALSTRIKE: "downdiagonalstrike",
      UPDIAGONALARROW: "updiagonalarrow",
      VERTICALSTRIKE: "verticalstrike",
      HORIZONTALSTRIKE: "horizontalstrike",
      PHASORANGLE: "phasorangle",
      MADRUWB: "madruwb"
    },
    ALIGN: {
      TOP: "top",
      BOTTOM: "bottom",
      CENTER: "center",
      BASELINE: "baseline",
      AXIS: "axis",
      LEFT: "left",
      RIGHT: "right"
    },
    LINES: { NONE: "none", SOLID: "solid", DASHED: "dashed" },
    SIDE: {
      LEFT: "left",
      RIGHT: "right",
      LEFTOVERLAP: "leftoverlap",
      RIGHTOVERLAP: "rightoverlap"
    },
    WIDTH: { AUTO: "auto", FIT: "fit" },
    ACTIONTYPE: {
      TOGGLE: "toggle",
      STATUSLINE: "statusline",
      TOOLTIP: "tooltip",
      INPUT: "input"
    },
    LENGTH: {
      VERYVERYTHINMATHSPACE: "veryverythinmathspace",
      VERYTHINMATHSPACE: "verythinmathspace",
      THINMATHSPACE: "thinmathspace",
      MEDIUMMATHSPACE: "mediummathspace",
      THICKMATHSPACE: "thickmathspace",
      VERYTHICKMATHSPACE: "verythickmathspace",
      VERYVERYTHICKMATHSPACE: "veryverythickmathspace",
      NEGATIVEVERYVERYTHINMATHSPACE: "negativeveryverythinmathspace",
      NEGATIVEVERYTHINMATHSPACE: "negativeverythinmathspace",
      NEGATIVETHINMATHSPACE: "negativethinmathspace",
      NEGATIVEMEDIUMMATHSPACE: "negativemediummathspace",
      NEGATIVETHICKMATHSPACE: "negativethickmathspace",
      NEGATIVEVERYTHICKMATHSPACE: "negativeverythickmathspace",
      NEGATIVEVERYVERYTHICKMATHSPACE: "negativeveryverythickmathspace"
    },
    OVERFLOW: {
      LINBREAK: "linebreak",
      SCROLL: "scroll",
      ELIDE: "elide",
      TRUNCATE: "truncate",
      SCALE: "scale"
    },
    UNIT: {
      EM: "em",
      EX: "ex",
      PX: "px",
      IN: "in",
      CM: "cm",
      MM: "mm",
      PT: "pt",
      PC: "pc"
    },
    TEXCLASS: {
      ORD: 0,
      OP: 1,
      BIN: 2,
      REL: 3,
      OPEN: 4,
      CLOSE: 5,
      PUNCT: 6,
      INNER: 7,
      VCENTER: 8,
      NONE: -1
    },
    TEXCLASSNAMES: [
      "ORD",
      "OP",
      "BIN",
      "REL",
      "OPEN",
      "CLOSE",
      "PUNCT",
      "INNER",
      "VCENTER"
    ],
    skipAttributes: { texClass: true, useHeight: true, texprimestyle: true },
    copyAttributes: {
      displaystyle: 1,
      scriptlevel: 1,
      open: 1,
      close: 1,
      form: 1,
      actiontype: 1,
      fontfamily: true,
      fontsize: true,
      fontweight: true,
      fontstyle: true,
      color: true,
      background: true,
      id: true,
      class: 1,
      href: true,
      style: true
    },
    copyAttributeNames: [
      "displaystyle",
      "scriptlevel",
      "open",
      "close",
      "form",
      "actiontype",
      "fontfamily",
      "fontsize",
      "fontweight",
      "fontstyle",
      "color",
      "background",
      "id",
      "class",
      "href",
      "style"
    ],
    nocopyAttributes: {
      fontfamily: true,
      fontsize: true,
      fontweight: true,
      fontstyle: true,
      color: true,
      background: true,
      id: true,
      class: true,
      href: true,
      style: true,
      xmlns: true
    },
    Error: function(d, e) {
      var c = this.merror(d),
        b = MathJax.Localization.fontDirection(),
        a = MathJax.Localization.fontFamily();
      if (e) {
        c = c.With(e);
      }
      if (b || a) {
        c = this.mstyle(c);
        if (b) {
          c.dir = b;
        }
        if (a) {
          c.style.fontFamily = "font-family: " + a;
        }
      }
      return c;
    }
  }
);
(function(a) {
  a.mbase = MathJax.Object.Subclass(
    {
      type: "base",
      isToken: false,
      defaults: {
        mathbackground: a.INHERIT,
        mathcolor: a.INHERIT,
        dir: a.INHERIT
      },
      noInherit: {},
      noInheritAttribute: { texClass: true },
      getRemoved: {},
      linebreakContainer: false,
      Init: function() {
        this.data = [];
        if (
          this.inferRow &&
          !(arguments.length === 1 && arguments[0].inferred)
        ) {
          this.Append(a.mrow().With({ inferred: true, notParent: true }));
        }
        this.Append.apply(this, arguments);
      },
      With: function(e) {
        for (var f in e) {
          if (e.hasOwnProperty(f)) {
            this[f] = e[f];
          }
        }
        return this;
      },
      Append: function() {
        if (this.inferRow && this.data.length) {
          this.data[0].Append.apply(this.data[0], arguments);
        } else {
          for (var f = 0, e = arguments.length; f < e; f++) {
            this.SetData(this.data.length, arguments[f]);
          }
        }
      },
      SetData: function(e, f) {
        if (f != null) {
          if (!(f instanceof a.mbase)) {
            f = this.isToken || this.isChars ? a.chars(f) : a.mtext(f);
          }
          f.parent = this;
          f.setInherit(this.inheritFromMe ? this : this.inherit);
        }
        this.data[e] = f;
      },
      Parent: function() {
        var e = this.parent;
        while (e && e.notParent) {
          e = e.parent;
        }
        return e;
      },
      Get: function(f, k, l) {
        if (!l) {
          if (this[f] != null) {
            return this[f];
          }
          if (this.attr && this.attr[f] != null) {
            return this.attr[f];
          }
        }
        var g = this.Parent();
        if (g && g["adjustChild_" + f] != null) {
          return g["adjustChild_" + f](this.childPosition(), k);
        }
        var j = this.inherit;
        var e = j;
        while (j) {
          var i = j[f];
          if (i == null && j.attr) {
            i = j.attr[f];
          }
          if (j.removedStyles && j.getRemoved[f] && i == null) {
            i = j.removedStyles[j.getRemoved[f]];
          }
          if (i != null && j.noInheritAttribute && !j.noInheritAttribute[f]) {
            var h = j.noInherit[this.type];
            if (!(h && h[f])) {
              return i;
            }
          }
          e = j;
          j = j.inherit;
        }
        if (!k) {
          if (this.defaults[f] === a.AUTO) {
            return this.autoDefault(f);
          }
          if (this.defaults[f] !== a.INHERIT && this.defaults[f] != null) {
            return this.defaults[f];
          }
          if (e) {
            return e.defaults[f];
          }
        }
        return null;
      },
      hasValue: function(e) {
        return this.Get(e, true) != null;
      },
      getValues: function() {
        var f = {};
        for (var g = 0, e = arguments.length; g < e; g++) {
          f[arguments[g]] = this.Get(arguments[g]);
        }
        return f;
      },
      adjustChild_scriptlevel: function(f, e) {
        return this.Get("scriptlevel", e);
      },
      adjustChild_displaystyle: function(f, e) {
        return this.Get("displaystyle", e);
      },
      adjustChild_texprimestyle: function(f, e) {
        return this.Get("texprimestyle", e);
      },
      hasMMLspacing: function() {
        return false;
      },
      childPosition: function() {
        var h = this,
          g = h.parent;
        while (g.notParent) {
          h = g;
          g = h.parent;
        }
        for (var f = 0, e = g.data.length; f < e; f++) {
          if (g.data[f] === h) {
            return f;
          }
        }
        return null;
      },
      setInherit: function(g) {
        if (g !== this.inherit && this.inherit == null) {
          this.inherit = g;
          for (var f = 0, e = this.data.length; f < e; f++) {
            if (this.data[f] && this.data[f].setInherit) {
              this.data[f].setInherit(g);
            }
          }
        }
      },
      setTeXclass: function(e) {
        this.getPrevClass(e);
        return typeof this.texClass !== "undefined" ? this : e;
      },
      getPrevClass: function(e) {
        if (e) {
          this.prevClass = e.Get("texClass");
          this.prevLevel = e.Get("scriptlevel");
        }
      },
      updateTeXclass: function(e) {
        if (e) {
          this.prevClass = e.prevClass;
          delete e.prevClass;
          this.prevLevel = e.prevLevel;
          delete e.prevLevel;
          this.texClass = e.Get("texClass");
        }
      },
      texSpacing: function() {
        var f = this.prevClass != null ? this.prevClass : a.TEXCLASS.NONE;
        var e = this.Get("texClass") || a.TEXCLASS.ORD;
        if (f === a.TEXCLASS.NONE || e === a.TEXCLASS.NONE) {
          return "";
        }
        if (f === a.TEXCLASS.VCENTER) {
          f = a.TEXCLASS.ORD;
        }
        if (e === a.TEXCLASS.VCENTER) {
          e = a.TEXCLASS.ORD;
        }
        var g = this.TEXSPACE[f][e];
        if ((this.prevLevel > 0 || this.Get("scriptlevel") > 0) && g >= 0) {
          return "";
        }
        return this.TEXSPACELENGTH[Math.abs(g)];
      },
      TEXSPACELENGTH: [
        "",
        a.LENGTH.THINMATHSPACE,
        a.LENGTH.MEDIUMMATHSPACE,
        a.LENGTH.THICKMATHSPACE
      ],
      TEXSPACE: [
        [0, -1, 2, 3, 0, 0, 0, 1],
        [-1, -1, 0, 3, 0, 0, 0, 1],
        [2, 2, 0, 0, 2, 0, 0, 2],
        [3, 3, 0, 0, 3, 0, 0, 3],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, -1, 2, 3, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1],
        [1, -1, 2, 3, 1, 0, 1, 1]
      ],
      autoDefault: function(e) {
        return "";
      },
      isSpacelike: function() {
        return false;
      },
      isEmbellished: function() {
        return false;
      },
      Core: function() {
        return this;
      },
      CoreMO: function() {
        return this;
      },
      childIndex: function(g) {
        if (g == null) {
          return;
        }
        for (var f = 0, e = this.data.length; f < e; f++) {
          if (g === this.data[f]) {
            return f;
          }
        }
      },
      CoreIndex: function() {
        return (this.inferRow ? this.data[0] || this : this).childIndex(
          this.Core()
        );
      },
      hasNewline: function() {
        if (this.isEmbellished()) {
          return this.CoreMO().hasNewline();
        }
        if (this.isToken || this.linebreakContainer) {
          return false;
        }
        for (var f = 0, e = this.data.length; f < e; f++) {
          if (this.data[f] && this.data[f].hasNewline()) {
            return true;
          }
        }
        return false;
      },
      array: function() {
        if (this.inferred) {
          return this.data;
        } else {
          return [this];
        }
      },
      toString: function() {
        return this.type + "(" + this.data.join(",") + ")";
      },
      getAnnotation: function() {
        return null;
      }
    },
    {
      childrenSpacelike: function() {
        for (var f = 0, e = this.data.length; f < e; f++) {
          if (!this.data[f].isSpacelike()) {
            return false;
          }
        }
        return true;
      },
      childEmbellished: function() {
        return this.data[0] && this.data[0].isEmbellished();
      },
      childCore: function() {
        return this.inferRow && this.data[0]
          ? this.data[0].Core()
          : this.data[0];
      },
      childCoreMO: function() {
        return this.data[0] ? this.data[0].CoreMO() : null;
      },
      setChildTeXclass: function(e) {
        if (this.data[0]) {
          e = this.data[0].setTeXclass(e);
          this.updateTeXclass(this.data[0]);
        }
        return e;
      },
      setBaseTeXclasses: function(g) {
        this.getPrevClass(g);
        this.texClass = null;
        if (this.data[0]) {
          if (this.isEmbellished() || this.data[0].isa(a.mi)) {
            g = this.data[0].setTeXclass(g);
            this.updateTeXclass(this.Core());
          } else {
            this.data[0].setTeXclass();
            g = this;
          }
        } else {
          g = this;
        }
        for (var f = 1, e = this.data.length; f < e; f++) {
          if (this.data[f]) {
            this.data[f].setTeXclass();
          }
        }
        return g;
      },
      setSeparateTeXclasses: function(g) {
        this.getPrevClass(g);
        for (var f = 0, e = this.data.length; f < e; f++) {
          if (this.data[f]) {
            this.data[f].setTeXclass();
          }
        }
        if (this.isEmbellished()) {
          this.updateTeXclass(this.Core());
        }
        return this;
      }
    }
  );
  a.mi = a.mbase.Subclass({
    type: "mi",
    isToken: true,
    texClass: a.TEXCLASS.ORD,
    defaults: {
      mathvariant: a.AUTO,
      mathsize: a.INHERIT,
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      dir: a.INHERIT
    },
    autoDefault: function(f) {
      if (f === "mathvariant") {
        var e = (this.data[0] || "").toString();
        return e.length === 1 ||
          (e.length === 2 &&
            e.charCodeAt(0) >= 55296 &&
            e.charCodeAt(0) < 56320)
          ? a.VARIANT.ITALIC
          : a.VARIANT.NORMAL;
      }
      return "";
    },
    setTeXclass: function(f) {
      this.getPrevClass(f);
      var e = this.data.join("");
      if (
        e.length > 1 &&
        e.match(/^[a-z][a-z0-9]*$/i) &&
        this.texClass === a.TEXCLASS.ORD
      ) {
        this.texClass = a.TEXCLASS.OP;
        this.autoOP = true;
      }
      return this;
    }
  });
  a.mn = a.mbase.Subclass({
    type: "mn",
    isToken: true,
    texClass: a.TEXCLASS.ORD,
    defaults: {
      mathvariant: a.INHERIT,
      mathsize: a.INHERIT,
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      dir: a.INHERIT
    }
  });
  a.mo = a.mbase.Subclass({
    type: "mo",
    isToken: true,
    defaults: {
      mathvariant: a.INHERIT,
      mathsize: a.INHERIT,
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      dir: a.INHERIT,
      form: a.AUTO,
      fence: a.AUTO,
      separator: a.AUTO,
      lspace: a.AUTO,
      rspace: a.AUTO,
      stretchy: a.AUTO,
      symmetric: a.AUTO,
      maxsize: a.AUTO,
      minsize: a.AUTO,
      largeop: a.AUTO,
      movablelimits: a.AUTO,
      accent: a.AUTO,
      linebreak: a.LINEBREAK.AUTO,
      lineleading: a.INHERIT,
      linebreakstyle: a.AUTO,
      linebreakmultchar: a.INHERIT,
      indentalign: a.INHERIT,
      indentshift: a.INHERIT,
      indenttarget: a.INHERIT,
      indentalignfirst: a.INHERIT,
      indentshiftfirst: a.INHERIT,
      indentalignlast: a.INHERIT,
      indentshiftlast: a.INHERIT,
      texClass: a.AUTO
    },
    defaultDef: {
      form: a.FORM.INFIX,
      fence: false,
      separator: false,
      lspace: a.LENGTH.THICKMATHSPACE,
      rspace: a.LENGTH.THICKMATHSPACE,
      stretchy: false,
      symmetric: false,
      maxsize: a.SIZE.INFINITY,
      minsize: "0em",
      largeop: false,
      movablelimits: false,
      accent: false,
      linebreak: a.LINEBREAK.AUTO,
      lineleading: "1ex",
      linebreakstyle: "before",
      indentalign: a.INDENTALIGN.AUTO,
      indentshift: "0",
      indenttarget: "",
      indentalignfirst: a.INDENTALIGN.INDENTALIGN,
      indentshiftfirst: a.INDENTSHIFT.INDENTSHIFT,
      indentalignlast: a.INDENTALIGN.INDENTALIGN,
      indentshiftlast: a.INDENTSHIFT.INDENTSHIFT,
      texClass: a.TEXCLASS.REL
    },
    SPACE_ATTR: { lspace: 1, rspace: 2 },
    useMMLspacing: 3,
    hasMMLspacing: function() {
      if (this.useMMLspacing) {
        return true;
      }
      return this.form && (this.OPTABLE[this.form] || {})[this.data.join("")];
    },
    autoDefault: function(g, n) {
      var l = this.def;
      if (!l) {
        if (g === "form") {
          return this.getForm();
        }
        var k = this.data.join("");
        var f = [this.Get("form"), a.FORM.INFIX, a.FORM.POSTFIX, a.FORM.PREFIX];
        for (var h = 0, e = f.length; h < e; h++) {
          var j = this.OPTABLE[f[h]][k];
          if (j) {
            l = this.makeDef(j);
            break;
          }
        }
        if (!l) {
          l = this.CheckRange(k);
        }
        if (!l && n) {
          l = {};
        } else {
          if (!l) {
            l = MathJax.Hub.Insert({}, this.defaultDef);
          }
          if (this.parent) {
            this.def = l;
          } else {
            l = MathJax.Hub.Insert({}, l);
          }
          l.form = f[0];
        }
      }
      this.useMMLspacing &= ~(this.SPACE_ATTR[g] || 0);
      if (l[g] != null) {
        return l[g];
      } else {
        if (!n) {
          return this.defaultDef[g];
        }
      }
      return "";
    },
    CheckRange: function(j) {
      var k = j.charCodeAt(0);
      if (k >= 55296 && k < 56320) {
        k = ((k - 55296) << 10) + (j.charCodeAt(1) - 56320) + 65536;
      }
      for (
        var g = 0, e = this.RANGES.length;
        g < e && this.RANGES[g][0] <= k;
        g++
      ) {
        if (k <= this.RANGES[g][1]) {
          if (this.RANGES[g][3]) {
            var f = a.optableDir + "/" + this.RANGES[g][3] + ".js";
            this.RANGES[g][3] = null;
            MathJax.Hub.RestartAfter(MathJax.Ajax.Require(f));
          }
          var h = a.TEXCLASSNAMES[this.RANGES[g][2]];
          h = this.OPTABLE.infix[j] = a.mo.OPTYPES[h === "BIN" ? "BIN3" : h];
          return this.makeDef(h);
        }
      }
      return null;
    },
    makeDef: function(f) {
      if (f[2] == null) {
        f[2] = this.defaultDef.texClass;
      }
      if (!f[3]) {
        f[3] = {};
      }
      var e = MathJax.Hub.Insert({}, f[3]);
      e.lspace = this.SPACE[f[0]];
      e.rspace = this.SPACE[f[1]];
      e.texClass = f[2];
      if (
        e.texClass === a.TEXCLASS.REL &&
        (this.movablelimits || this.data.join("").match(/^[a-z]+$/i))
      ) {
        e.texClass = a.TEXCLASS.OP;
      }
      return e;
    },
    getForm: function() {
      var e = this,
        g = this.parent,
        f = this.Parent();
      while (f && f.isEmbellished()) {
        e = g;
        g = f.parent;
        f = f.Parent();
      }
      if (g && g.type === "mrow" && g.NonSpaceLength() !== 1) {
        if (g.FirstNonSpace() === e) {
          return a.FORM.PREFIX;
        }
        if (g.LastNonSpace() === e) {
          return a.FORM.POSTFIX;
        }
      }
      return a.FORM.INFIX;
    },
    isEmbellished: function() {
      return true;
    },
    hasNewline: function() {
      return this.Get("linebreak") === a.LINEBREAK.NEWLINE;
    },
    CoreParent: function() {
      var e = this;
      while (e && e.isEmbellished() && e.CoreMO() === this && !e.isa(a.math)) {
        e = e.Parent();
      }
      return e;
    },
    CoreText: function(e) {
      if (!e) {
        return "";
      }
      if (e.isEmbellished()) {
        return e.CoreMO().data.join("");
      }
      while (
        (((e.isa(a.mrow) ||
          e.isa(a.TeXAtom) ||
          e.isa(a.mstyle) ||
          e.isa(a.mphantom)) &&
          e.data.length === 1) ||
          e.isa(a.munderover)) &&
        e.data[0]
      ) {
        e = e.data[0];
      }
      if (!e.isToken) {
        return "";
      } else {
        return e.data.join("");
      }
    },
    remapChars: {
      "*": "\u2217",
      '"': "\u2033",
      "\u00B0": "\u2218",
      "\u00B2": "2",
      "\u00B3": "3",
      "\u00B4": "\u2032",
      "\u00B9": "1"
    },
    remap: function(f, e) {
      f = f.replace(/-/g, "\u2212");
      if (e) {
        f = f.replace(/'/g, "\u2032").replace(/`/g, "\u2035");
        if (f.length === 1) {
          f = e[f] || f;
        }
      }
      return f;
    },
    setTeXclass: function(f) {
      var e = this.getValues("form", "lspace", "rspace", "fence");
      if (this.hasMMLspacing()) {
        this.texClass = a.TEXCLASS.NONE;
        return this;
      }
      if (e.fence && !this.texClass) {
        if (e.form === a.FORM.PREFIX) {
          this.texClass = a.TEXCLASS.OPEN;
        }
        if (e.form === a.FORM.POSTFIX) {
          this.texClass = a.TEXCLASS.CLOSE;
        }
      }
      this.texClass = this.Get("texClass");
      if (this.data.join("") === "\u2061") {
        if (f) {
          f.texClass = a.TEXCLASS.OP;
          f.fnOP = true;
        }
        this.texClass = this.prevClass = a.TEXCLASS.NONE;
        return f;
      }
      return this.adjustTeXclass(f);
    },
    adjustTeXclass: function(f) {
      if (this.texClass === a.TEXCLASS.NONE) {
        return f;
      }
      if (f) {
        if (
          f.autoOP &&
          (this.texClass === a.TEXCLASS.BIN || this.texClass === a.TEXCLASS.REL)
        ) {
          f.texClass = a.TEXCLASS.ORD;
        }
        this.prevClass = f.texClass || a.TEXCLASS.ORD;
        this.prevLevel = f.Get("scriptlevel");
      } else {
        this.prevClass = a.TEXCLASS.NONE;
      }
      if (
        this.texClass === a.TEXCLASS.BIN &&
        (this.prevClass === a.TEXCLASS.NONE ||
          this.prevClass === a.TEXCLASS.BIN ||
          this.prevClass === a.TEXCLASS.OP ||
          this.prevClass === a.TEXCLASS.REL ||
          this.prevClass === a.TEXCLASS.OPEN ||
          this.prevClass === a.TEXCLASS.PUNCT)
      ) {
        this.texClass = a.TEXCLASS.ORD;
      } else {
        if (
          this.prevClass === a.TEXCLASS.BIN &&
          (this.texClass === a.TEXCLASS.REL ||
            this.texClass === a.TEXCLASS.CLOSE ||
            this.texClass === a.TEXCLASS.PUNCT)
        ) {
          f.texClass = this.prevClass = a.TEXCLASS.ORD;
        } else {
          if (this.texClass === a.TEXCLASS.BIN) {
            var g = this,
              e = this.parent;
            while (
              e &&
              e.parent &&
              e.isEmbellished() &&
              (e.data.length === 1 || (e.type !== "mrow" && e.Core() === g))
            ) {
              g = e;
              e = e.parent;
            }
            if (e.data[e.data.length - 1] === g) {
              this.texClass = a.TEXCLASS.ORD;
            }
          }
        }
      }
      return this;
    }
  });
  a.mtext = a.mbase.Subclass({
    type: "mtext",
    isToken: true,
    isSpacelike: function() {
      return true;
    },
    texClass: a.TEXCLASS.ORD,
    defaults: {
      mathvariant: a.INHERIT,
      mathsize: a.INHERIT,
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      dir: a.INHERIT
    }
  });
  a.mspace = a.mbase.Subclass({
    type: "mspace",
    isToken: true,
    isSpacelike: function() {
      return true;
    },
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      width: "0em",
      height: "0ex",
      depth: "0ex",
      linebreak: a.LINEBREAK.AUTO
    },
    hasDimAttr: function() {
      return (
        this.hasValue("width") ||
        this.hasValue("height") ||
        this.hasValue("depth")
      );
    },
    hasNewline: function() {
      return (
        !this.hasDimAttr() && this.Get("linebreak") === a.LINEBREAK.NEWLINE
      );
    }
  });
  a.ms = a.mbase.Subclass({
    type: "ms",
    isToken: true,
    texClass: a.TEXCLASS.ORD,
    defaults: {
      mathvariant: a.INHERIT,
      mathsize: a.INHERIT,
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      dir: a.INHERIT,
      lquote: '"',
      rquote: '"'
    }
  });
  a.mglyph = a.mbase.Subclass({
    type: "mglyph",
    isToken: true,
    texClass: a.TEXCLASS.ORD,
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      alt: "",
      src: "",
      width: a.AUTO,
      height: a.AUTO,
      valign: "0em"
    }
  });
  a.mrow = a.mbase.Subclass({
    type: "mrow",
    isSpacelike: a.mbase.childrenSpacelike,
    inferred: false,
    notParent: false,
    isEmbellished: function() {
      var f = false;
      for (var g = 0, e = this.data.length; g < e; g++) {
        if (this.data[g] == null) {
          continue;
        }
        if (this.data[g].isEmbellished()) {
          if (f) {
            return false;
          }
          f = true;
          this.core = g;
        } else {
          if (!this.data[g].isSpacelike()) {
            return false;
          }
        }
      }
      return f;
    },
    NonSpaceLength: function() {
      var g = 0;
      for (var f = 0, e = this.data.length; f < e; f++) {
        if (this.data[f] && !this.data[f].isSpacelike()) {
          g++;
        }
      }
      return g;
    },
    FirstNonSpace: function() {
      for (var f = 0, e = this.data.length; f < e; f++) {
        if (this.data[f] && !this.data[f].isSpacelike()) {
          return this.data[f];
        }
      }
      return null;
    },
    LastNonSpace: function() {
      for (var e = this.data.length - 1; e >= 0; e--) {
        if (this.data[0] && !this.data[e].isSpacelike()) {
          return this.data[e];
        }
      }
      return null;
    },
    Core: function() {
      if (!this.isEmbellished() || typeof this.core === "undefined") {
        return this;
      }
      return this.data[this.core];
    },
    CoreMO: function() {
      if (!this.isEmbellished() || typeof this.core === "undefined") {
        return this;
      }
      return this.data[this.core].CoreMO();
    },
    toString: function() {
      if (this.inferred) {
        return "[" + this.data.join(",") + "]";
      }
      return this.SUPER(arguments).toString.call(this);
    },
    setTeXclass: function(g) {
      var f,
        e = this.data.length;
      if ((this.open || this.close) && (!g || !g.fnOP)) {
        this.getPrevClass(g);
        g = null;
        for (f = 0; f < e; f++) {
          if (this.data[f]) {
            g = this.data[f].setTeXclass(g);
          }
        }
        if (!this.hasOwnProperty("texClass")) {
          this.texClass = a.TEXCLASS.INNER;
        }
        return this;
      } else {
        for (f = 0; f < e; f++) {
          if (this.data[f]) {
            g = this.data[f].setTeXclass(g);
          }
        }
        if (this.data[0]) {
          this.updateTeXclass(this.data[0]);
        }
        return g;
      }
    },
    getAnnotation: function(e) {
      if (this.data.length != 1) {
        return null;
      }
      return this.data[0].getAnnotation(e);
    }
  });
  a.mfrac = a.mbase.Subclass({
    type: "mfrac",
    num: 0,
    den: 1,
    linebreakContainer: true,
    isEmbellished: a.mbase.childEmbellished,
    Core: a.mbase.childCore,
    CoreMO: a.mbase.childCoreMO,
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      linethickness: a.LINETHICKNESS.MEDIUM,
      numalign: a.ALIGN.CENTER,
      denomalign: a.ALIGN.CENTER,
      bevelled: false
    },
    adjustChild_displaystyle: function(e) {
      return false;
    },
    adjustChild_scriptlevel: function(f) {
      var e = this.Get("scriptlevel");
      if (!this.Get("displaystyle") || e > 0) {
        e++;
      }
      return e;
    },
    adjustChild_texprimestyle: function(e) {
      if (e == this.den) {
        return true;
      }
      return this.Get("texprimestyle");
    },
    setTeXclass: a.mbase.setSeparateTeXclasses
  });
  a.msqrt = a.mbase.Subclass({
    type: "msqrt",
    inferRow: true,
    linebreakContainer: true,
    texClass: a.TEXCLASS.ORD,
    setTeXclass: a.mbase.setSeparateTeXclasses,
    adjustChild_texprimestyle: function(e) {
      return true;
    }
  });
  a.mroot = a.mbase.Subclass({
    type: "mroot",
    linebreakContainer: true,
    texClass: a.TEXCLASS.ORD,
    adjustChild_displaystyle: function(e) {
      if (e === 1) {
        return false;
      }
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function(f) {
      var e = this.Get("scriptlevel");
      if (f === 1) {
        e += 2;
      }
      return e;
    },
    adjustChild_texprimestyle: function(e) {
      if (e === 0) {
        return true;
      }
      return this.Get("texprimestyle");
    },
    setTeXclass: a.mbase.setSeparateTeXclasses
  });
  a.mstyle = a.mbase.Subclass({
    type: "mstyle",
    isSpacelike: a.mbase.childrenSpacelike,
    isEmbellished: a.mbase.childEmbellished,
    Core: a.mbase.childCore,
    CoreMO: a.mbase.childCoreMO,
    inferRow: true,
    defaults: {
      scriptlevel: a.INHERIT,
      displaystyle: a.INHERIT,
      scriptsizemultiplier: Math.sqrt(1 / 2),
      scriptminsize: "8pt",
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      dir: a.INHERIT,
      infixlinebreakstyle: a.LINEBREAKSTYLE.BEFORE,
      decimalseparator: "."
    },
    adjustChild_scriptlevel: function(g) {
      var f = this.scriptlevel;
      if (f == null) {
        f = this.Get("scriptlevel");
      } else {
        if (String(f).match(/^ *[-+]/)) {
          var e = this.Get("scriptlevel", null, true);
          f = e + parseInt(f);
        }
      }
      return f;
    },
    inheritFromMe: true,
    noInherit: {
      mpadded: {
        width: true,
        height: true,
        depth: true,
        lspace: true,
        voffset: true
      },
      mtable: { width: true, height: true, depth: true, align: true }
    },
    getRemoved: {
      fontfamily: "fontFamily",
      fontweight: "fontWeight",
      fontstyle: "fontStyle",
      fontsize: "fontSize"
    },
    setTeXclass: a.mbase.setChildTeXclass
  });
  a.merror = a.mbase.Subclass({
    type: "merror",
    inferRow: true,
    linebreakContainer: true,
    texClass: a.TEXCLASS.ORD
  });
  a.mpadded = a.mbase.Subclass({
    type: "mpadded",
    inferRow: true,
    isSpacelike: a.mbase.childrenSpacelike,
    isEmbellished: a.mbase.childEmbellished,
    Core: a.mbase.childCore,
    CoreMO: a.mbase.childCoreMO,
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      width: "",
      height: "",
      depth: "",
      lspace: 0,
      voffset: 0
    },
    setTeXclass: a.mbase.setChildTeXclass
  });
  a.mphantom = a.mbase.Subclass({
    type: "mphantom",
    texClass: a.TEXCLASS.ORD,
    inferRow: true,
    isSpacelike: a.mbase.childrenSpacelike,
    isEmbellished: a.mbase.childEmbellished,
    Core: a.mbase.childCore,
    CoreMO: a.mbase.childCoreMO,
    setTeXclass: a.mbase.setChildTeXclass
  });
  a.mfenced = a.mbase.Subclass({
    type: "mfenced",
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      open: "(",
      close: ")",
      separators: ","
    },
    addFakeNodes: function() {
      var f = this.getValues("open", "close", "separators");
      f.open = f.open.replace(/[ \t\n\r]/g, "");
      f.close = f.close.replace(/[ \t\n\r]/g, "");
      f.separators = f.separators.replace(/[ \t\n\r]/g, "");
      if (f.open !== "") {
        this.SetData(
          "open",
          a
            .mo(f.open)
            .With({
              fence: true,
              form: a.FORM.PREFIX,
              texClass: a.TEXCLASS.OPEN
            })
        );
      }
      if (f.separators !== "") {
        while (f.separators.length < this.data.length) {
          f.separators += f.separators.charAt(f.separators.length - 1);
        }
        for (var g = 1, e = this.data.length; g < e; g++) {
          if (this.data[g]) {
            this.SetData(
              "sep" + g,
              a.mo(f.separators.charAt(g - 1)).With({ separator: true })
            );
          }
        }
      }
      if (f.close !== "") {
        this.SetData(
          "close",
          a
            .mo(f.close)
            .With({
              fence: true,
              form: a.FORM.POSTFIX,
              texClass: a.TEXCLASS.CLOSE
            })
        );
      }
    },
    texClass: a.TEXCLASS.OPEN,
    setTeXclass: function(g) {
      this.addFakeNodes();
      this.getPrevClass(g);
      if (this.data.open) {
        g = this.data.open.setTeXclass(g);
      }
      if (this.data[0]) {
        g = this.data[0].setTeXclass(g);
      }
      for (var f = 1, e = this.data.length; f < e; f++) {
        if (this.data["sep" + f]) {
          g = this.data["sep" + f].setTeXclass(g);
        }
        if (this.data[f]) {
          g = this.data[f].setTeXclass(g);
        }
      }
      if (this.data.close) {
        g = this.data.close.setTeXclass(g);
      }
      this.updateTeXclass(this.data.open);
      this.texClass = a.TEXCLASS.INNER;
      return g;
    }
  });
  a.menclose = a.mbase.Subclass({
    type: "menclose",
    inferRow: true,
    linebreakContainer: true,
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      notation: a.NOTATION.LONGDIV,
      texClass: a.TEXCLASS.ORD
    },
    setTeXclass: a.mbase.setSeparateTeXclasses
  });
  a.msubsup = a.mbase.Subclass({
    type: "msubsup",
    base: 0,
    sub: 1,
    sup: 2,
    isEmbellished: a.mbase.childEmbellished,
    Core: a.mbase.childCore,
    CoreMO: a.mbase.childCoreMO,
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      subscriptshift: "",
      superscriptshift: "",
      texClass: a.AUTO
    },
    autoDefault: function(e) {
      if (e === "texClass") {
        return this.isEmbellished() ? this.CoreMO().Get(e) : a.TEXCLASS.ORD;
      }
      return 0;
    },
    adjustChild_displaystyle: function(e) {
      if (e > 0) {
        return false;
      }
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function(f) {
      var e = this.Get("scriptlevel");
      if (f > 0) {
        e++;
      }
      return e;
    },
    adjustChild_texprimestyle: function(e) {
      if (e === this.sub) {
        return true;
      }
      return this.Get("texprimestyle");
    },
    setTeXclass: a.mbase.setBaseTeXclasses
  });
  a.msub = a.msubsup.Subclass({ type: "msub" });
  a.msup = a.msubsup.Subclass({ type: "msup", sub: 2, sup: 1 });
  a.mmultiscripts = a.msubsup.Subclass({
    type: "mmultiscripts",
    adjustChild_texprimestyle: function(e) {
      if (e % 2 === 1) {
        return true;
      }
      return this.Get("texprimestyle");
    }
  });
  a.mprescripts = a.mbase.Subclass({ type: "mprescripts" });
  a.none = a.mbase.Subclass({ type: "none" });
  a.munderover = a.mbase.Subclass({
    type: "munderover",
    base: 0,
    under: 1,
    over: 2,
    sub: 1,
    sup: 2,
    ACCENTS: ["", "accentunder", "accent"],
    linebreakContainer: true,
    isEmbellished: a.mbase.childEmbellished,
    Core: a.mbase.childCore,
    CoreMO: a.mbase.childCoreMO,
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      accent: a.AUTO,
      accentunder: a.AUTO,
      align: a.ALIGN.CENTER,
      texClass: a.AUTO,
      subscriptshift: "",
      superscriptshift: ""
    },
    autoDefault: function(e) {
      if (e === "texClass") {
        return this.isEmbellished() ? this.CoreMO().Get(e) : a.TEXCLASS.ORD;
      }
      if (e === "accent" && this.data[this.over]) {
        return this.data[this.over].CoreMO().Get("accent");
      }
      if (e === "accentunder" && this.data[this.under]) {
        return this.data[this.under].CoreMO().Get("accent");
      }
      return false;
    },
    adjustChild_displaystyle: function(e) {
      if (e > 0) {
        return false;
      }
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function(g) {
      var f = this.Get("scriptlevel");
      var e =
        this.data[this.base] &&
        !this.Get("displaystyle") &&
        this.data[this.base].CoreMO().Get("movablelimits");
      if (g == this.under && (e || !this.Get("accentunder"))) {
        f++;
      }
      if (g == this.over && (e || !this.Get("accent"))) {
        f++;
      }
      return f;
    },
    adjustChild_texprimestyle: function(e) {
      if (e === this.base && this.data[this.over]) {
        return true;
      }
      return this.Get("texprimestyle");
    },
    setTeXclass: a.mbase.setBaseTeXclasses
  });
  a.munder = a.munderover.Subclass({ type: "munder" });
  a.mover = a.munderover.Subclass({
    type: "mover",
    over: 1,
    under: 2,
    sup: 1,
    sub: 2,
    ACCENTS: ["", "accent", "accentunder"]
  });
  a.mtable = a.mbase.Subclass({
    type: "mtable",
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      align: a.ALIGN.AXIS,
      rowalign: a.ALIGN.BASELINE,
      columnalign: a.ALIGN.CENTER,
      groupalign: "{left}",
      alignmentscope: true,
      columnwidth: a.WIDTH.AUTO,
      width: a.WIDTH.AUTO,
      rowspacing: "1ex",
      columnspacing: ".8em",
      rowlines: a.LINES.NONE,
      columnlines: a.LINES.NONE,
      frame: a.LINES.NONE,
      framespacing: "0.4em 0.5ex",
      equalrows: false,
      equalcolumns: false,
      displaystyle: false,
      side: a.SIDE.RIGHT,
      minlabelspacing: "0.8em",
      texClass: a.TEXCLASS.ORD,
      useHeight: 1
    },
    adjustChild_displaystyle: function() {
      return this.displaystyle != null
        ? this.displaystyle
        : this.defaults.displaystyle;
    },
    inheritFromMe: true,
    noInherit: {
      mover: { align: true },
      munder: { align: true },
      munderover: { align: true },
      mtable: {
        align: true,
        rowalign: true,
        columnalign: true,
        groupalign: true,
        alignmentscope: true,
        columnwidth: true,
        width: true,
        rowspacing: true,
        columnspacing: true,
        rowlines: true,
        columnlines: true,
        frame: true,
        framespacing: true,
        equalrows: true,
        equalcolumns: true,
        displaystyle: true,
        side: true,
        minlabelspacing: true,
        texClass: true,
        useHeight: 1
      }
    },
    linebreakContainer: true,
    Append: function() {
      for (var f = 0, e = arguments.length; f < e; f++) {
        if (
          !(
            arguments[f] instanceof a.mtr ||
            arguments[f] instanceof a.mlabeledtr
          )
        ) {
          arguments[f] = a.mtr(arguments[f]);
        }
      }
      this.SUPER(arguments).Append.apply(this, arguments);
    },
    setTeXclass: a.mbase.setSeparateTeXclasses
  });
  a.mtr = a.mbase.Subclass({
    type: "mtr",
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      rowalign: a.INHERIT,
      columnalign: a.INHERIT,
      groupalign: a.INHERIT
    },
    inheritFromMe: true,
    noInherit: {
      mrow: { rowalign: true, columnalign: true, groupalign: true },
      mtable: { rowalign: true, columnalign: true, groupalign: true }
    },
    linebreakContainer: true,
    Append: function() {
      for (var f = 0, e = arguments.length; f < e; f++) {
        if (!(arguments[f] instanceof a.mtd)) {
          arguments[f] = a.mtd(arguments[f]);
        }
      }
      this.SUPER(arguments).Append.apply(this, arguments);
    },
    setTeXclass: a.mbase.setSeparateTeXclasses
  });
  a.mtd = a.mbase.Subclass({
    type: "mtd",
    inferRow: true,
    linebreakContainer: true,
    isEmbellished: a.mbase.childEmbellished,
    Core: a.mbase.childCore,
    CoreMO: a.mbase.childCoreMO,
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      rowspan: 1,
      columnspan: 1,
      rowalign: a.INHERIT,
      columnalign: a.INHERIT,
      groupalign: a.INHERIT
    },
    setTeXclass: a.mbase.setSeparateTeXclasses
  });
  a.maligngroup = a.mbase.Subclass({
    type: "maligngroup",
    isSpacelike: function() {
      return true;
    },
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      groupalign: a.INHERIT
    },
    inheritFromMe: true,
    noInherit: { mrow: { groupalign: true }, mtable: { groupalign: true } }
  });
  a.malignmark = a.mbase.Subclass({
    type: "malignmark",
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      edge: a.SIDE.LEFT
    },
    isSpacelike: function() {
      return true;
    }
  });
  a.mlabeledtr = a.mtr.Subclass({ type: "mlabeledtr" });
  a.maction = a.mbase.Subclass({
    type: "maction",
    defaults: {
      mathbackground: a.INHERIT,
      mathcolor: a.INHERIT,
      actiontype: a.ACTIONTYPE.TOGGLE,
      selection: 1
    },
    selected: function() {
      return this.data[this.Get("selection") - 1] || a.NULL;
    },
    isEmbellished: function() {
      return this.selected().isEmbellished();
    },
    isSpacelike: function() {
      return this.selected().isSpacelike();
    },
    Core: function() {
      return this.selected().Core();
    },
    CoreMO: function() {
      return this.selected().CoreMO();
    },
    setTeXclass: function(f) {
      if (this.Get("actiontype") === a.ACTIONTYPE.TOOLTIP && this.data[1]) {
        this.data[1].setTeXclass();
      }
      var e = this.selected();
      f = e.setTeXclass(f);
      this.updateTeXclass(e);
      return f;
    }
  });
  a.semantics = a.mbase.Subclass({
    type: "semantics",
    notParent: true,
    isEmbellished: a.mbase.childEmbellished,
    Core: a.mbase.childCore,
    CoreMO: a.mbase.childCoreMO,
    defaults: { definitionURL: null, encoding: null },
    setTeXclass: a.mbase.setChildTeXclass,
    getAnnotation: function(g) {
      var l = MathJax.Hub.config.MathMenu.semanticsAnnotations[g];
      if (l) {
        for (var h = 0, e = this.data.length; h < e; h++) {
          var k = this.data[h].Get("encoding");
          if (k) {
            for (var f = 0, o = l.length; f < o; f++) {
              if (l[f] === k) {
                return this.data[h];
              }
            }
          }
        }
      }
      return null;
    }
  });
  a.annotation = a.mbase.Subclass({
    type: "annotation",
    isChars: true,
    linebreakContainer: true,
    defaults: {
      definitionURL: null,
      encoding: null,
      cd: "mathmlkeys",
      name: "",
      src: null
    }
  });
  a["annotation-xml"] = a.mbase.Subclass({
    type: "annotation-xml",
    linebreakContainer: true,
    defaults: {
      definitionURL: null,
      encoding: null,
      cd: "mathmlkeys",
      name: "",
      src: null
    }
  });
  a.math = a.mstyle.Subclass({
    type: "math",
    defaults: {
      mathvariant: a.VARIANT.NORMAL,
      mathsize: a.SIZE.NORMAL,
      mathcolor: "",
      mathbackground: a.COLOR.TRANSPARENT,
      dir: "ltr",
      scriptlevel: 0,
      displaystyle: a.AUTO,
      display: "inline",
      maxwidth: "",
      overflow: a.OVERFLOW.LINEBREAK,
      altimg: "",
      "altimg-width": "",
      "altimg-height": "",
      "altimg-valign": "",
      alttext: "",
      cdgroup: "",
      scriptsizemultiplier: Math.sqrt(1 / 2),
      scriptminsize: "8px",
      infixlinebreakstyle: a.LINEBREAKSTYLE.BEFORE,
      lineleading: "1ex",
      indentshift: "auto",
      indentalign: a.INDENTALIGN.AUTO,
      indentalignfirst: a.INDENTALIGN.INDENTALIGN,
      indentshiftfirst: a.INDENTSHIFT.INDENTSHIFT,
      indentalignlast: a.INDENTALIGN.INDENTALIGN,
      indentshiftlast: a.INDENTSHIFT.INDENTSHIFT,
      decimalseparator: ".",
      texprimestyle: false
    },
    autoDefault: function(e) {
      if (e === "displaystyle") {
        return this.Get("display") === "block";
      }
      return "";
    },
    linebreakContainer: true,
    setTeXclass: a.mbase.setChildTeXclass,
    getAnnotation: function(e) {
      if (this.data.length != 1) {
        return null;
      }
      return this.data[0].getAnnotation(e);
    }
  });
  a.chars = a.mbase.Subclass({
    type: "chars",
    Append: function() {
      this.data.push.apply(this.data, arguments);
    },
    value: function() {
      return this.data.join("");
    },
    toString: function() {
      return this.data.join("");
    }
  });
  a.entity = a.mbase.Subclass({
    type: "entity",
    Append: function() {
      this.data.push.apply(this.data, arguments);
    },
    value: function() {
      if (this.data[0].substr(0, 2) === "#x") {
        return parseInt(this.data[0].substr(2), 16);
      } else {
        if (this.data[0].substr(0, 1) === "#") {
          return parseInt(this.data[0].substr(1));
        } else {
          return 0;
        }
      }
    },
    toString: function() {
      var e = this.value();
      if (e <= 65535) {
        return String.fromCharCode(e);
      }
      e -= 65536;
      return (
        String.fromCharCode((e >> 10) + 55296) +
        String.fromCharCode((e & 1023) + 56320)
      );
    }
  });
  a.xml = a.mbase.Subclass({
    type: "xml",
    Init: function() {
      this.div = document.createElement("div");
      return this.SUPER(arguments).Init.apply(this, arguments);
    },
    Append: function() {
      for (var f = 0, e = arguments.length; f < e; f++) {
        var g = this.Import(arguments[f]);
        this.data.push(g);
        this.div.appendChild(g);
      }
    },
    Import: function(j) {
      if (document.importNode) {
        return document.importNode(j, true);
      }
      var f, g, e;
      if (j.nodeType === 1) {
        f = document.createElement(j.nodeName);
        for (g = 0, e = j.attributes.length; g < e; g++) {
          var h = j.attributes[g];
          if (h.specified && h.nodeValue != null && h.nodeValue != "") {
            f.setAttribute(h.nodeName, h.nodeValue);
          }
          if (h.nodeName === "style") {
            f.style.cssText = h.nodeValue;
          }
        }
        if (j.className) {
          f.className = j.className;
        }
      } else {
        if (j.nodeType === 3 || j.nodeType === 4) {
          f = document.createTextNode(j.nodeValue);
        } else {
          if (j.nodeType === 8) {
            f = document.createComment(j.nodeValue);
          } else {
            return document.createTextNode("");
          }
        }
      }
      for (g = 0, e = j.childNodes.length; g < e; g++) {
        f.appendChild(this.Import(j.childNodes[g]));
      }
      return f;
    },
    value: function() {
      return this.div;
    },
    toString: function() {
      return this.div.innerHTML;
    }
  });
  a.TeXAtom = a.mbase.Subclass({
    type: "texatom",
    linebreakContainer: true,
    inferRow: true,
    notParent: true,
    texClass: a.TEXCLASS.ORD,
    Core: a.mbase.childCore,
    CoreMO: a.mbase.childCoreMO,
    isEmbellished: a.mbase.childEmbellished,
    setTeXclass: function(e) {
      this.data[0].setTeXclass();
      return this.adjustTeXclass(e);
    },
    adjustTeXclass: a.mo.prototype.adjustTeXclass
  });
  a.NULL = a.mbase().With({ type: "null" });
  var b = a.TEXCLASS;
  var d = {
    ORD: [0, 0, b.ORD],
    ORD11: [1, 1, b.ORD],
    ORD21: [2, 1, b.ORD],
    ORD02: [0, 2, b.ORD],
    ORD55: [5, 5, b.ORD],
    OP: [1, 2, b.OP, { largeop: true, movablelimits: true, symmetric: true }],
    OPFIXED: [1, 2, b.OP, { largeop: true, movablelimits: true }],
    INTEGRAL: [0, 1, b.OP, { largeop: true, symmetric: true }],
    INTEGRAL2: [1, 2, b.OP, { largeop: true, symmetric: true }],
    BIN3: [3, 3, b.BIN],
    BIN4: [4, 4, b.BIN],
    BIN01: [0, 1, b.BIN],
    BIN5: [5, 5, b.BIN],
    TALLBIN: [4, 4, b.BIN, { stretchy: true }],
    BINOP: [4, 4, b.BIN, { largeop: true, movablelimits: true }],
    REL: [5, 5, b.REL],
    REL1: [1, 1, b.REL, { stretchy: true }],
    REL4: [4, 4, b.REL],
    RELSTRETCH: [5, 5, b.REL, { stretchy: true }],
    RELACCENT: [5, 5, b.REL, { accent: true }],
    WIDEREL: [5, 5, b.REL, { accent: true, stretchy: true }],
    OPEN: [0, 0, b.OPEN, { fence: true, stretchy: true, symmetric: true }],
    CLOSE: [0, 0, b.CLOSE, { fence: true, stretchy: true, symmetric: true }],
    INNER: [0, 0, b.INNER],
    PUNCT: [0, 3, b.PUNCT],
    ACCENT: [0, 0, b.ORD, { accent: true }],
    WIDEACCENT: [0, 0, b.ORD, { accent: true, stretchy: true }]
  };
  a.mo.Augment(
    {
      SPACE: [
        "0em",
        "0.1111em",
        "0.1667em",
        "0.2222em",
        "0.2667em",
        "0.3333em"
      ],
      RANGES: [
        [32, 127, b.REL, "BasicLatin"],
        [160, 255, b.ORD, "Latin1Supplement"],
        [256, 383, b.ORD],
        [384, 591, b.ORD],
        [688, 767, b.ORD, "SpacingModLetters"],
        [768, 879, b.ORD, "CombDiacritMarks"],
        [880, 1023, b.ORD, "GreekAndCoptic"],
        [7680, 7935, b.ORD],
        [8192, 8303, b.PUNCT, "GeneralPunctuation"],
        [8304, 8351, b.ORD],
        [8352, 8399, b.ORD],
        [8400, 8447, b.ORD, "CombDiactForSymbols"],
        [8448, 8527, b.ORD, "LetterlikeSymbols"],
        [8528, 8591, b.ORD],
        [8592, 8703, b.REL, "Arrows"],
        [8704, 8959, b.BIN, "MathOperators"],
        [8960, 9215, b.ORD, "MiscTechnical"],
        [9312, 9471, b.ORD],
        [9472, 9631, b.ORD],
        [9632, 9727, b.ORD, "GeometricShapes"],
        [9984, 10175, b.ORD, "Dingbats"],
        [10176, 10223, b.ORD, "MiscMathSymbolsA"],
        [10224, 10239, b.REL, "SupplementalArrowsA"],
        [10496, 10623, b.REL, "SupplementalArrowsB"],
        [10624, 10751, b.ORD, "MiscMathSymbolsB"],
        [10752, 11007, b.BIN, "SuppMathOperators"],
        [11008, 11263, b.ORD, "MiscSymbolsAndArrows"],
        [119808, 120831, b.ORD]
      ],
      OPTABLE: {
        prefix: {
          "\u2200": d.ORD21,
          "\u2202": d.ORD21,
          "\u2203": d.ORD21,
          "\u2207": d.ORD21,
          "\u220F": d.OP,
          "\u2210": d.OP,
          "\u2211": d.OP,
          "\u2212": d.BIN01,
          "\u2213": d.BIN01,
          "\u221A": [1, 1, b.ORD, { stretchy: true }],
          "\u2220": d.ORD,
          "\u222B": d.INTEGRAL,
          "\u222E": d.INTEGRAL,
          "\u22C0": d.OP,
          "\u22C1": d.OP,
          "\u22C2": d.OP,
          "\u22C3": d.OP,
          "\u2308": d.OPEN,
          "\u230A": d.OPEN,
          "\u27E8": d.OPEN,
          "\u27EE": d.OPEN,
          "\u2A00": d.OP,
          "\u2A01": d.OP,
          "\u2A02": d.OP,
          "\u2A04": d.OP,
          "\u2A06": d.OP,
          "\u00AC": d.ORD21,
          "\u00B1": d.BIN01,
          "(": d.OPEN,
          "+": d.BIN01,
          "-": d.BIN01,
          "[": d.OPEN,
          "{": d.OPEN,
          "|": d.OPEN
        },
        postfix: {
          "!": [1, 0, b.CLOSE],
          "&": d.ORD,
          "\u2032": d.ORD02,
          "\u203E": d.WIDEACCENT,
          "\u2309": d.CLOSE,
          "\u230B": d.CLOSE,
          "\u23DE": d.WIDEACCENT,
          "\u23DF": d.WIDEACCENT,
          "\u266D": d.ORD02,
          "\u266E": d.ORD02,
          "\u266F": d.ORD02,
          "\u27E9": d.CLOSE,
          "\u27EF": d.CLOSE,
          ˆ: d.WIDEACCENT,
          ˇ: d.WIDEACCENT,
          ˉ: d.WIDEACCENT,
          ˊ: d.ACCENT,
          ˋ: d.ACCENT,
          "\u02D8": d.ACCENT,
          "\u02D9": d.ACCENT,
          "\u02DC": d.WIDEACCENT,
          "\u0302": d.WIDEACCENT,
          "\u00A8": d.ACCENT,
          "\u00AF": d.WIDEACCENT,
          ")": d.CLOSE,
          "]": d.CLOSE,
          "^": d.WIDEACCENT,
          _: d.WIDEACCENT,
          "`": d.ACCENT,
          "|": d.CLOSE,
          "}": d.CLOSE,
          "~": d.WIDEACCENT
        },
        infix: {
          "": d.ORD,
          "%": [3, 3, b.ORD],
          "\u2022": d.BIN4,
          "\u2026": d.INNER,
          "\u2044": d.TALLBIN,
          "\u2061": d.ORD,
          "\u2062": d.ORD,
          "\u2063": [0, 0, b.ORD, { linebreakstyle: "after", separator: true }],
          "\u2064": d.ORD,
          "\u2190": d.WIDEREL,
          "\u2191": d.RELSTRETCH,
          "\u2192": d.WIDEREL,
          "\u2193": d.RELSTRETCH,
          "\u2194": d.WIDEREL,
          "\u2195": d.RELSTRETCH,
          "\u2196": d.RELSTRETCH,
          "\u2197": d.RELSTRETCH,
          "\u2198": d.RELSTRETCH,
          "\u2199": d.RELSTRETCH,
          "\u21A6": d.WIDEREL,
          "\u21A9": d.WIDEREL,
          "\u21AA": d.WIDEREL,
          "\u21BC": d.WIDEREL,
          "\u21BD": d.WIDEREL,
          "\u21C0": d.WIDEREL,
          "\u21C1": d.WIDEREL,
          "\u21CC": d.WIDEREL,
          "\u21D0": d.WIDEREL,
          "\u21D1": d.RELSTRETCH,
          "\u21D2": d.WIDEREL,
          "\u21D3": d.RELSTRETCH,
          "\u21D4": d.WIDEREL,
          "\u21D5": d.RELSTRETCH,
          "\u2208": d.REL,
          "\u2209": d.REL,
          "\u220B": d.REL,
          "\u2212": d.BIN4,
          "\u2213": d.BIN4,
          "\u2215": d.TALLBIN,
          "\u2216": d.BIN4,
          "\u2217": d.BIN4,
          "\u2218": d.BIN4,
          "\u2219": d.BIN4,
          "\u221D": d.REL,
          "\u2223": d.REL,
          "\u2225": d.REL,
          "\u2227": d.BIN4,
          "\u2228": d.BIN4,
          "\u2229": d.BIN4,
          "\u222A": d.BIN4,
          "\u223C": d.REL,
          "\u2240": d.BIN4,
          "\u2243": d.REL,
          "\u2245": d.REL,
          "\u2248": d.REL,
          "\u224D": d.REL,
          "\u2250": d.REL,
          "\u2260": d.REL,
          "\u2261": d.REL,
          "\u2264": d.REL,
          "\u2265": d.REL,
          "\u226A": d.REL,
          "\u226B": d.REL,
          "\u227A": d.REL,
          "\u227B": d.REL,
          "\u2282": d.REL,
          "\u2283": d.REL,
          "\u2286": d.REL,
          "\u2287": d.REL,
          "\u228E": d.BIN4,
          "\u2291": d.REL,
          "\u2292": d.REL,
          "\u2293": d.BIN4,
          "\u2294": d.BIN4,
          "\u2295": d.BIN4,
          "\u2296": d.BIN4,
          "\u2297": d.BIN4,
          "\u2298": d.BIN4,
          "\u2299": d.BIN4,
          "\u22A2": d.REL,
          "\u22A3": d.REL,
          "\u22A4": d.ORD55,
          "\u22A5": d.REL,
          "\u22A8": d.REL,
          "\u22C4": d.BIN4,
          "\u22C5": d.BIN4,
          "\u22C6": d.BIN4,
          "\u22C8": d.REL,
          "\u22EE": d.ORD55,
          "\u22EF": d.INNER,
          "\u22F1": [5, 5, b.INNER],
          "\u25B3": d.BIN4,
          "\u25B5": d.BIN4,
          "\u25B9": d.BIN4,
          "\u25BD": d.BIN4,
          "\u25BF": d.BIN4,
          "\u25C3": d.BIN4,
          "\u2758": d.REL,
          "\u27F5": d.WIDEREL,
          "\u27F6": d.WIDEREL,
          "\u27F7": d.WIDEREL,
          "\u27F8": d.WIDEREL,
          "\u27F9": d.WIDEREL,
          "\u27FA": d.WIDEREL,
          "\u27FC": d.WIDEREL,
          "\u2A2F": d.BIN4,
          "\u2A3F": d.BIN4,
          "\u2AAF": d.REL,
          "\u2AB0": d.REL,
          "\u00B1": d.BIN4,
          "\u00B7": d.BIN4,
          "\u00D7": d.BIN4,
          "\u00F7": d.BIN4,
          "*": d.BIN3,
          "+": d.BIN4,
          ",": [0, 3, b.PUNCT, { linebreakstyle: "after", separator: true }],
          "-": d.BIN4,
          ".": [3, 3, b.ORD],
          "/": d.ORD11,
          ":": [1, 2, b.REL],
          ";": [0, 3, b.PUNCT, { linebreakstyle: "after", separator: true }],
          "<": d.REL,
          "=": d.REL,
          ">": d.REL,
          "?": [1, 1, b.CLOSE],
          "\\": d.ORD,
          "^": d.ORD11,
          _: d.ORD11,
          "|": [2, 2, b.ORD, { fence: true, stretchy: true, symmetric: true }],
          "#": d.ORD,
          $: d.ORD,
          "\u002E": [0, 3, b.PUNCT, { separator: true }],
          ʹ: d.ORD,
          "\u0300": d.ACCENT,
          "\u0301": d.ACCENT,
          "\u0303": d.WIDEACCENT,
          "\u0304": d.ACCENT,
          "\u0306": d.ACCENT,
          "\u0307": d.ACCENT,
          "\u0308": d.ACCENT,
          "\u030C": d.ACCENT,
          "\u0332": d.WIDEACCENT,
          "\u0338": d.REL4,
          "\u2015": [0, 0, b.ORD, { stretchy: true }],
          "\u2017": [0, 0, b.ORD, { stretchy: true }],
          "\u2020": d.BIN3,
          "\u2021": d.BIN3,
          "\u20D7": d.ACCENT,
          ℑ: d.ORD,
          ℓ: d.ORD,
          "\u2118": d.ORD,
          ℜ: d.ORD,
          "\u2205": d.ORD,
          "\u221E": d.ORD,
          "\u2305": d.BIN3,
          "\u2306": d.BIN3,
          "\u2322": d.REL4,
          "\u2323": d.REL4,
          "\u2329": d.OPEN,
          "\u232A": d.CLOSE,
          "\u23AA": d.ORD,
          "\u23AF": [0, 0, b.ORD, { stretchy: true }],
          "\u23B0": d.OPEN,
          "\u23B1": d.CLOSE,
          "\u2500": d.ORD,
          "\u25EF": d.BIN3,
          "\u2660": d.ORD,
          "\u2661": d.ORD,
          "\u2662": d.ORD,
          "\u2663": d.ORD,
          "\u3008": d.OPEN,
          "\u3009": d.CLOSE,
          "\uFE37": d.WIDEACCENT,
          "\uFE38": d.WIDEACCENT
        }
      }
    },
    { OPTYPES: d }
  );
  var c = a.mo.prototype.OPTABLE;
  c.infix["^"] = d.WIDEREL;
  c.infix._ = d.WIDEREL;
  c.prefix["\u2223"] = d.OPEN;
  c.prefix["\u2225"] = d.OPEN;
  c.postfix["\u2223"] = d.CLOSE;
  c.postfix["\u2225"] = d.CLOSE;
})(MathJax.ElementJax.mml);
MathJax.ElementJax.mml.loadComplete("jax.js");
MathJax.Hub.Register.LoadHook("[MathJax]/jax/element/mml/jax.js", function() {
  var c = "2.7.5";
  var a = MathJax.ElementJax.mml,
    b = MathJax.Hub.config.menuSettings;
  a.mbase.Augment({
    toMathML: function(l) {
      var h = this.inferred && this.parent.inferRow;
      if (l == null) {
        l = "";
      }
      var f = this.type,
        e = this.toMathMLattributes();
      if (f === "mspace") {
        return l + "<" + f + e + " />";
      }
      var k = [],
        j = this.isToken ? "" : l + (h ? "" : "  ");
      for (var g = 0, d = this.data.length; g < d; g++) {
        if (this.data[g]) {
          k.push(this.data[g].toMathML(j));
        } else {
          if (!this.isToken && !this.isChars) {
            k.push(j + "<mrow />");
          }
        }
      }
      if (this.isToken || this.isChars) {
        return l + "<" + f + e + ">" + k.join("") + "</" + f + ">";
      }
      if (h) {
        return k.join("\n");
      }
      if (k.length === 0 || (k.length === 1 && k[0] === "")) {
        return l + "<" + f + e + " />";
      }
      return l + "<" + f + e + ">\n" + k.join("\n") + "\n" + l + "</" + f + ">";
    },
    toMathMLattributes: function() {
      var j =
        this.type === "mstyle" ? a.math.prototype.defaults : this.defaults;
      var h = this.attrNames || a.copyAttributeNames,
        g = a.skipAttributes,
        l = a.copyAttributes;
      var e = [];
      if (this.type === "math" && (!this.attr || !("xmlns" in this.attr))) {
        e.push('xmlns="http://www.w3.org/1998/Math/MathML"');
      }
      if (!this.attrNames) {
        for (var k in j) {
          if (!g[k] && !l[k] && j.hasOwnProperty(k)) {
            if (this[k] != null && this[k] !== j[k]) {
              if (this.Get(k, null, 1) !== this[k]) {
                e.push(k + '="' + this.toMathMLattribute(this[k]) + '"');
              }
            }
          }
        }
      }
      for (var f = 0, d = h.length; f < d; f++) {
        if (l[h[f]] === 1 && !j.hasOwnProperty(h[f])) {
          continue;
        }
        value = (this.attr || {})[h[f]];
        if (value == null) {
          value = this[h[f]];
        }
        if (value != null) {
          e.push(h[f] + '="' + this.toMathMLquote(value) + '"');
        }
      }
      this.toMathMLclass(e);
      if (e.length) {
        return " " + e.join(" ");
      } else {
        return "";
      }
    },
    toMathMLclass: function(d) {
      var f = [];
      if (this["class"]) {
        f.push(this["class"]);
      }
      if (this.isa(a.TeXAtom) && b.texHints) {
        var e = [
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
        if (e) {
          f.push("MJX-TeXAtom-" + e);
          if (e === "OP" && !this.movablelimits) {
            f.push("MJX-fixedlimits");
          }
        }
      }
      if (this.mathvariant && this.toMathMLvariants[this.mathvariant]) {
        f.push("MJX" + this.mathvariant);
      }
      if (this.variantForm) {
        f.push("MJX-variant");
      }
      if (f.length) {
        d.unshift('class="' + this.toMathMLquote(f.join(" ")) + '"');
      }
    },
    toMathMLattribute: function(d) {
      if (
        typeof d === "string" &&
        d.replace(/ /g, "").match(/^(([-+])?(\d+(\.\d*)?|\.\d+))mu$/)
      ) {
        return (
          (RegExp.$2 || "") +
          ((1 / 18) * RegExp.$3).toFixed(3).replace(/\.?0+$/, "") +
          "em"
        );
      } else {
        if (this.toMathMLvariants[d]) {
          return this.toMathMLvariants[d];
        }
      }
      return this.toMathMLquote(d);
    },
    toMathMLvariants: {
      "-tex-caligraphic": a.VARIANT.SCRIPT,
      "-tex-caligraphic-bold": a.VARIANT.BOLDSCRIPT,
      "-tex-oldstyle": a.VARIANT.NORMAL,
      "-tex-oldstyle-bold": a.VARIANT.BOLD,
      "-tex-mathit": a.VARIANT.ITALIC
    },
    toMathMLquote: function(f) {
      f = String(f).split("");
      for (var g = 0, d = f.length; g < d; g++) {
        var k = f[g].charCodeAt(0);
        if (k <= 55295 || 57344 <= k) {
          if (k > 126 || (k < 32 && k !== 10 && k !== 13 && k !== 9)) {
            f[g] = "&#x" + k.toString(16).toUpperCase() + ";";
          } else {
            var j = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[
              f[g]
            ];
            if (j) {
              f[g] = j;
            }
          }
        } else {
          if (g + 1 < d) {
            var h = f[g + 1].charCodeAt(0);
            var e = ((k - 55296) << 10) + (h - 56320) + 65536;
            f[g] = "&#x" + e.toString(16).toUpperCase() + ";";
            f[g + 1] = "";
            g++;
          } else {
            f[g] = "";
          }
        }
      }
      return f.join("");
    }
  });
  a.math.Augment({
    toMathML: function(d, e) {
      var g;
      if (d == null) {
        d = "";
      }
      if (e && e.originalText && b.semantics) {
        g = MathJax.InputJax[e.inputJax].annotationEncoding;
      }
      var n = this.data[0] && this.data[0].data.length > 1;
      var p = this.type,
        k = this.toMathMLattributes();
      var j = [],
        o = d + (g ? "  " + (n ? "  " : "") : "") + "  ";
      for (var h = 0, f = this.data.length; h < f; h++) {
        if (this.data[h]) {
          j.push(this.data[h].toMathML(o));
        } else {
          j.push(o + "<mrow />");
        }
      }
      if (j.length === 0 || (j.length === 1 && j[0] === "")) {
        if (!g) {
          return "<" + p + k + " />";
        }
        j.push(o + "<mrow />");
      }
      if (g) {
        if (n) {
          j.unshift(d + "    <mrow>");
          j.push(d + "    </mrow>");
        }
        j.unshift(d + "  <semantics>");
        var l = e.originalText.replace(/[&<>]/g, function(i) {
          return { ">": "&gt;", "<": "&lt;", "&": "&amp;" }[i];
        });
        j.push(
          d +
            '    <annotation encoding="' +
            this.toMathMLquote(g) +
            '">' +
            l +
            "</annotation>"
        );
        j.push(d + "  </semantics>");
      }
      return d + "<" + p + k + ">\n" + j.join("\n") + "\n" + d + "</" + p + ">";
    }
  });
  a.msubsup.Augment({
    toMathML: function(j) {
      var f = this.type;
      if (this.data[this.sup] == null) {
        f = "msub";
      }
      if (this.data[this.sub] == null) {
        f = "msup";
      }
      var e = this.toMathMLattributes();
      delete this.data[0].inferred;
      var h = [];
      for (var g = 0, d = this.data.length; g < d; g++) {
        if (this.data[g]) {
          h.push(this.data[g].toMathML(j + "  "));
        }
      }
      return j + "<" + f + e + ">\n" + h.join("\n") + "\n" + j + "</" + f + ">";
    }
  });
  a.munderover.Augment({
    toMathML: function(k) {
      var f = this.type;
      var j = this.data[this.base];
      if (j && j.isa(a.TeXAtom) && j.movablelimits && !j.Get("displaystyle")) {
        type = "msubsup";
        if (this.data[this.under] == null) {
          f = "msup";
        }
        if (this.data[this.over] == null) {
          f = "msub";
        }
      } else {
        if (this.data[this.under] == null) {
          f = "mover";
        }
        if (this.data[this.over] == null) {
          f = "munder";
        }
      }
      var e = this.toMathMLattributes();
      delete this.data[0].inferred;
      var h = [];
      for (var g = 0, d = this.data.length; g < d; g++) {
        if (this.data[g]) {
          h.push(this.data[g].toMathML(k + "  "));
        }
      }
      return k + "<" + f + e + ">\n" + h.join("\n") + "\n" + k + "</" + f + ">";
    }
  });
  a.TeXAtom.Augment({
    toMathML: function(e) {
      var d = this.toMathMLattributes();
      if (!d && this.data[0].data.length === 1) {
        return e.substr(2) + this.data[0].toMathML(e);
      }
      return (
        e +
        "<mrow" +
        d +
        ">\n" +
        this.data[0].toMathML(e + "  ") +
        "\n" +
        e +
        "</mrow>"
      );
    }
  });
  a.chars.Augment({
    toMathML: function(d) {
      return (d || "") + this.toMathMLquote(this.toString());
    }
  });
  a.entity.Augment({
    toMathML: function(d) {
      return (
        (d || "") +
        "&" +
        this.toMathMLquote(this.data[0]) +
        ";<!-- " +
        this.toString() +
        " -->"
      );
    }
  });
  a.xml.Augment({
    toMathML: function(d) {
      return (d || "") + this.toString();
    }
  });
  MathJax.Hub.Register.StartupHook("TeX mathchoice Ready", function() {
    a.TeXmathchoice.Augment({
      toMathML: function(d) {
        return this.Core().toMathML(d);
      }
    });
  });
  MathJax.Hub.Startup.signal.Post("toMathML Ready");
});
MathJax.Ajax.loadComplete("[MathJax]/extensions/toMathML.js");
(function(b, e) {
  var d = "2.7.5";
  var a = b.CombineConfig("TeX.noErrors", {
    disabled: false,
    multiLine: true,
    inlineDelimiters: ["", ""],
    style: {
      "font-size": "90%",
      "text-align": "left",
      color: "black",
      padding: "1px 3px",
      border: "1px solid"
    }
  });
  var c = "\u00A0";
  MathJax.Extension["TeX/noErrors"] = { version: d, config: a };
  b.Register.StartupHook("TeX Jax Ready", function() {
    var f = MathJax.InputJax.TeX.formatError;
    MathJax.InputJax.TeX.Augment({
      formatError: function(j, i, k, g) {
        if (a.disabled) {
          return f.apply(this, arguments);
        }
        var h = j.message.replace(/\n.*/, "");
        b.signal.Post(["TeX Jax - parse error", h, i, k, g]);
        var m = a.inlineDelimiters;
        var l = k || a.multiLine;
        if (!k) {
          i = m[0] + i + m[1];
        }
        if (l) {
          i = i.replace(/ /g, c);
        } else {
          i = i.replace(/\n/g, " ");
        }
        return MathJax.ElementJax.mml
          .merror(i)
          .With({ isError: true, multiLine: l });
      }
    });
  });
  b.Register.StartupHook("HTML-CSS Jax Config", function() {
    b.Config({
      "HTML-CSS": {
        styles: {
          ".MathJax .noError": b.Insert(
            { "vertical-align": b.Browser.isMSIE && a.multiLine ? "-2px" : "" },
            a.style
          )
        }
      }
    });
  });
  b.Register.StartupHook("HTML-CSS Jax Ready", function() {
    var g = MathJax.ElementJax.mml;
    var h = MathJax.OutputJax["HTML-CSS"];
    var f = g.math.prototype.toHTML,
      i = g.merror.prototype.toHTML;
    g.math.Augment({
      toHTML: function(j, k) {
        var l = this.data[0];
        if (l && l.data[0] && l.data[0].isError) {
          j.style.fontSize = "";
          j = this.HTMLcreateSpan(j);
          j.bbox = l.data[0].toHTML(j).bbox;
        } else {
          j = f.apply(this, arguments);
        }
        return j;
      }
    });
    g.merror.Augment({
      toHTML: function(p) {
        if (!this.isError) {
          return i.apply(this, arguments);
        }
        p = this.HTMLcreateSpan(p);
        p.className = "noError";
        if (this.multiLine) {
          p.style.display = "inline-block";
        }
        var r = this.data[0].data[0].data.join("").split(/\n/);
        for (var o = 0, l = r.length; o < l; o++) {
          h.addText(p, r[o]);
          if (o !== l - 1) {
            h.addElement(p, "br", { isMathJax: true });
          }
        }
        var q = h.getHD(p.parentNode),
          k = h.getW(p.parentNode);
        if (l > 1) {
          var n = (q.h + q.d) / 2,
            j = h.TeX.x_height / 2;
          p.parentNode.style.verticalAlign = h.Em(q.d + (j - n));
          q.h = j + n;
          q.d = n - j;
        }
        p.bbox = { h: q.h, d: q.d, w: k, lw: 0, rw: k };
        return p;
      }
    });
  });
  b.Register.StartupHook("SVG Jax Config", function() {
    b.Config({
      SVG: {
        styles: {
          ".MathJax_SVG .noError": b.Insert(
            { "vertical-align": b.Browser.isMSIE && a.multiLine ? "-2px" : "" },
            a.style
          )
        }
      }
    });
  });
  b.Register.StartupHook("SVG Jax Ready", function() {
    var g = MathJax.ElementJax.mml;
    var f = g.math.prototype.toSVG,
      h = g.merror.prototype.toSVG;
    g.math.Augment({
      toSVG: function(i, j) {
        var k = this.data[0];
        if (k && k.data[0] && k.data[0].isError) {
          i = k.data[0].toSVG(i);
        } else {
          i = f.apply(this, arguments);
        }
        return i;
      }
    });
    g.merror.Augment({
      toSVG: function(n) {
        if (!this.isError || this.Parent().type !== "math") {
          return h.apply(this, arguments);
        }
        n = e.addElement(n, "span", { className: "noError", isMathJax: true });
        if (this.multiLine) {
          n.style.display = "inline-block";
        }
        var o = this.data[0].data[0].data.join("").split(/\n/);
        for (var l = 0, j = o.length; l < j; l++) {
          e.addText(n, o[l]);
          if (l !== j - 1) {
            e.addElement(n, "br", { isMathJax: true });
          }
        }
        if (j > 1) {
          var k = n.offsetHeight / 2;
          n.style.verticalAlign = -k + k / j + "px";
        }
        return n;
      }
    });
  });
  b.Register.StartupHook("NativeMML Jax Ready", function() {
    var h = MathJax.ElementJax.mml;
    var g = MathJax.Extension["TeX/noErrors"].config;
    var f = h.math.prototype.toNativeMML,
      i = h.merror.prototype.toNativeMML;
    h.math.Augment({
      toNativeMML: function(j) {
        var k = this.data[0];
        if (k && k.data[0] && k.data[0].isError) {
          j = k.data[0].toNativeMML(j);
        } else {
          j = f.apply(this, arguments);
        }
        return j;
      }
    });
    h.merror.Augment({
      toNativeMML: function(n) {
        if (!this.isError) {
          return i.apply(this, arguments);
        }
        n = n.appendChild(document.createElement("span"));
        var o = this.data[0].data[0].data.join("").split(/\n/);
        for (var l = 0, k = o.length; l < k; l++) {
          n.appendChild(document.createTextNode(o[l]));
          if (l !== k - 1) {
            n.appendChild(document.createElement("br"));
          }
        }
        if (this.multiLine) {
          n.style.display = "inline-block";
          if (k > 1) {
            n.style.verticalAlign = "middle";
          }
        }
        for (var p in g.style) {
          if (g.style.hasOwnProperty(p)) {
            var j = p.replace(/-./g, function(m) {
              return m.charAt(1).toUpperCase();
            });
            n.style[j] = g.style[p];
          }
        }
        return n;
      }
    });
  });
  b.Register.StartupHook("PreviewHTML Jax Config", function() {
    b.Config({
      PreviewHTML: {
        styles: {
          ".MathJax_PHTML .noError": b.Insert(
            { "vertical-align": b.Browser.isMSIE && a.multiLine ? "-2px" : "" },
            a.style
          )
        }
      }
    });
  });
  b.Register.StartupHook("PreviewHTML Jax Ready", function() {
    var f = MathJax.ElementJax.mml;
    var h = MathJax.HTML;
    var g = f.merror.prototype.toPreviewHTML;
    f.merror.Augment({
      toPreviewHTML: function(l) {
        if (!this.isError) {
          return g.apply(this, arguments);
        }
        l = this.PHTMLcreateSpan(l);
        l.className = "noError";
        if (this.multiLine) {
          l.style.display = "inline-block";
        }
        var n = this.data[0].data[0].data.join("").split(/\n/);
        for (var k = 0, j = n.length; k < j; k++) {
          h.addText(l, n[k]);
          if (k !== j - 1) {
            h.addElement(l, "br", { isMathJax: true });
          }
        }
        return l;
      }
    });
  });
  b.Register.StartupHook("CommonHTML Jax Config", function() {
    b.Config({
      CommonHTML: {
        styles: {
          ".mjx-chtml .mjx-noError": b.Insert(
            {
              "line-height": 1.2,
              "vertical-align": b.Browser.isMSIE && a.multiLine ? "-2px" : ""
            },
            a.style
          )
        }
      }
    });
  });
  b.Register.StartupHook("CommonHTML Jax Ready", function() {
    var f = MathJax.ElementJax.mml;
    var g = MathJax.OutputJax.CommonHTML;
    var i = MathJax.HTML;
    var h = f.merror.prototype.toCommonHTML;
    f.merror.Augment({
      toCommonHTML: function(n) {
        if (!this.isError) {
          return h.apply(this, arguments);
        }
        n = g.addElement(n, "mjx-noError");
        var p = this.data[0].data[0].data.join("").split(/\n/);
        for (var k = 0, j = p.length; k < j; k++) {
          i.addText(n, p[k]);
          if (k !== j - 1) {
            g.addElement(n, "br", { isMathJax: true });
          }
        }
        var o = (this.CHTML = g.BBOX.zero());
        o.w = n.offsetWidth / g.em;
        if (j > 1) {
          var l = (1.2 * j) / 2;
          o.h = l + 0.25;
          o.d = l - 0.25;
          n.style.verticalAlign = g.Em(0.45 - l);
        } else {
          o.h = 1;
          o.d = 0.2 + 2 / g.em;
        }
        return n;
      }
    });
  });
  b.Startup.signal.Post("TeX noErrors Ready");
})(MathJax.Hub, MathJax.HTML);
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noErrors.js");
MathJax.Extension["TeX/noUndefined"] = {
  version: "2.7.5",
  config: MathJax.Hub.CombineConfig("TeX.noUndefined", {
    disabled: false,
    attributes: { mathcolor: "red" }
  })
};
MathJax.Hub.Register.StartupHook("TeX Jax Ready", function() {
  var b = MathJax.Extension["TeX/noUndefined"].config;
  var a = MathJax.ElementJax.mml;
  var c = MathJax.InputJax.TeX.Parse.prototype.csUndefined;
  MathJax.InputJax.TeX.Parse.Augment({
    csUndefined: function(d) {
      if (b.disabled) {
        return c.apply(this, arguments);
      }
      MathJax.Hub.signal.Post(["TeX Jax - undefined control sequence", d]);
      this.Push(a.mtext(d).With(b.attributes));
    }
  });
  MathJax.Hub.Startup.signal.Post("TeX noUndefined Ready");
});
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noUndefined.js");
(function(d, c, j) {
  var i,
    h = "\u00A0";
  var k = function(m) {
    return MathJax.Localization._.apply(
      MathJax.Localization,
      [["TeX", m]].concat([].slice.call(arguments, 1))
    );
  };
  var f = MathJax.Object.isArray;
  var e = MathJax.Object.Subclass({
    Init: function(n, m) {
      this.global = { isInner: m };
      this.data = [b.start(this.global)];
      if (n) {
        this.data[0].env = n;
      }
      this.env = this.data[0].env;
    },
    Push: function() {
      var o, n, p, q;
      for (o = 0, n = arguments.length; o < n; o++) {
        p = arguments[o];
        if (!p) {
          continue;
        }
        if (p instanceof i.mbase) {
          p = b.mml(p);
        }
        p.global = this.global;
        q = this.data.length ? this.Top().checkItem(p) : true;
        if (q instanceof Array) {
          this.Pop();
          this.Push.apply(this, q);
        } else {
          if (q instanceof b) {
            this.Pop();
            this.Push(q);
          } else {
            if (q) {
              this.data.push(p);
              if (p.env) {
                if (p.copyEnv !== false) {
                  for (var r in this.env) {
                    if (this.env.hasOwnProperty(r)) {
                      p.env[r] = this.env[r];
                    }
                  }
                }
                this.env = p.env;
              } else {
                p.env = this.env;
              }
            }
          }
        }
      }
    },
    Pop: function() {
      var m = this.data.pop();
      if (!m.isOpen) {
        delete m.env;
      }
      this.env = this.data.length ? this.Top().env : {};
      return m;
    },
    Top: function(m) {
      if (m == null) {
        m = 1;
      }
      if (this.data.length < m) {
        return null;
      }
      return this.data[this.data.length - m];
    },
    Prev: function(m) {
      var n = this.Top();
      if (m) {
        return n.data[n.data.length - 1];
      } else {
        return n.Pop();
      }
    },
    toString: function() {
      return "stack[\n  " + this.data.join("\n  ") + "\n]";
    }
  });
  var b = (e.Item = MathJax.Object.Subclass({
    type: "base",
    endError: [
      "ExtraOpenMissingClose",
      "Extra open brace or missing close brace"
    ],
    closeError: [
      "ExtraCloseMissingOpen",
      "Extra close brace or missing open brace"
    ],
    rightError: ["MissingLeftExtraRight", "Missing \\left or extra \\right"],
    Init: function() {
      if (this.isOpen) {
        this.env = {};
      }
      this.data = [];
      this.Push.apply(this, arguments);
    },
    Push: function() {
      this.data.push.apply(this.data, arguments);
    },
    Pop: function() {
      return this.data.pop();
    },
    mmlData: function(m, n) {
      if (m == null) {
        m = true;
      }
      if (this.data.length === 1 && !n) {
        return this.data[0];
      }
      return i.mrow.apply(i, this.data).With(m ? { inferred: true } : {});
    },
    checkItem: function(m) {
      if (m.type === "over" && this.isOpen) {
        m.num = this.mmlData(false);
        this.data = [];
      }
      if (m.type === "cell" && this.isOpen) {
        if (m.linebreak) {
          return false;
        }
        d.Error(["Misplaced", "Misplaced %1", m.name]);
      }
      if (m.isClose && this[m.type + "Error"]) {
        d.Error(this[m.type + "Error"]);
      }
      if (!m.isNotStack) {
        return true;
      }
      this.Push(m.data[0]);
      return false;
    },
    With: function(m) {
      for (var n in m) {
        if (m.hasOwnProperty(n)) {
          this[n] = m[n];
        }
      }
      return this;
    },
    toString: function() {
      return this.type + "[" + this.data.join("; ") + "]";
    }
  }));
  b.start = b.Subclass({
    type: "start",
    isOpen: true,
    Init: function(m) {
      this.SUPER(arguments).Init.call(this);
      this.global = m;
    },
    checkItem: function(m) {
      if (m.type === "stop") {
        return b.mml(this.mmlData());
      }
      return this.SUPER(arguments).checkItem.call(this, m);
    }
  });
  b.stop = b.Subclass({ type: "stop", isClose: true });
  b.open = b.Subclass({
    type: "open",
    isOpen: true,
    stopError: [
      "ExtraOpenMissingClose",
      "Extra open brace or missing close brace"
    ],
    checkItem: function(n) {
      if (n.type === "close") {
        var m = this.mmlData();
        return b.mml(i.TeXAtom(m));
      }
      return this.SUPER(arguments).checkItem.call(this, n);
    }
  });
  b.close = b.Subclass({ type: "close", isClose: true });
  b.prime = b.Subclass({
    type: "prime",
    checkItem: function(m) {
      if (this.data[0].type !== "msubsup") {
        return [i.msup(this.data[0], this.data[1]), m];
      }
      this.data[0].SetData(this.data[0].sup, this.data[1]);
      return [this.data[0], m];
    }
  });
  b.subsup = b.Subclass({
    type: "subsup",
    stopError: ["MissingScript", "Missing superscript or subscript argument"],
    supError: ["MissingOpenForSup", "Missing open brace for superscript"],
    subError: ["MissingOpenForSub", "Missing open brace for subscript"],
    checkItem: function(m) {
      if (m.type === "open" || m.type === "left") {
        return true;
      }
      if (m.type === "mml") {
        if (this.primes) {
          if (this.position !== 2) {
            this.data[0].SetData(2, this.primes);
          } else {
            m.data[0] = i.mrow(
              this.primes.With({ variantForm: true }),
              m.data[0]
            );
          }
        }
        this.data[0].SetData(this.position, m.data[0]);
        if (this.movesupsub != null) {
          this.data[0].movesupsub = this.movesupsub;
        }
        return b.mml(this.data[0]);
      }
      if (this.SUPER(arguments).checkItem.call(this, m)) {
        d.Error(this[["", "subError", "supError"][this.position]]);
      }
    },
    Pop: function() {}
  });
  b.over = b.Subclass({
    type: "over",
    isClose: true,
    name: "\\over",
    checkItem: function(o, m) {
      if (o.type === "over") {
        d.Error(["AmbiguousUseOf", "Ambiguous use of %1", o.name]);
      }
      if (o.isClose) {
        var n = i.mfrac(this.num, this.mmlData(false));
        if (this.thickness != null) {
          n.linethickness = this.thickness;
        }
        if (this.open || this.close) {
          n.texWithDelims = true;
          n = d.fixedFence(this.open, n, this.close);
        }
        return [b.mml(n), o];
      }
      return this.SUPER(arguments).checkItem.call(this, o);
    },
    toString: function() {
      return "over[" + this.num + " / " + this.data.join("; ") + "]";
    }
  });
  b.left = b.Subclass({
    type: "left",
    isOpen: true,
    delim: "(",
    stopError: ["ExtraLeftMissingRight", "Extra \\left or missing \\right"],
    checkItem: function(m) {
      if (m.type === "right") {
        return b.mml(d.fenced(this.delim, this.mmlData(), m.delim));
      }
      return this.SUPER(arguments).checkItem.call(this, m);
    }
  });
  b.right = b.Subclass({ type: "right", isClose: true, delim: ")" });
  b.begin = b.Subclass({
    type: "begin",
    isOpen: true,
    checkItem: function(m) {
      if (m.type === "end") {
        if (m.name !== this.name) {
          d.Error([
            "EnvBadEnd",
            "\\begin{%1} ended with \\end{%2}",
            this.name,
            m.name
          ]);
        }
        if (!this.end) {
          return b.mml(this.mmlData());
        }
        return this.parse[this.end].call(this.parse, this, this.data);
      }
      if (m.type === "stop") {
        d.Error(["EnvMissingEnd", "Missing \\end{%1}", this.name]);
      }
      return this.SUPER(arguments).checkItem.call(this, m);
    }
  });
  b.end = b.Subclass({ type: "end", isClose: true });
  b.style = b.Subclass({
    type: "style",
    checkItem: function(n) {
      if (!n.isClose) {
        return this.SUPER(arguments).checkItem.call(this, n);
      }
      var m = i.mstyle.apply(i, this.data).With(this.styles);
      return [b.mml(m), n];
    }
  });
  b.position = b.Subclass({
    type: "position",
    checkItem: function(n) {
      if (n.isClose) {
        d.Error(["MissingBoxFor", "Missing box for %1", this.name]);
      }
      if (n.isNotStack) {
        var m = n.mmlData();
        switch (this.move) {
          case "vertical":
            m = i
              .mpadded(m)
              .With({ height: this.dh, depth: this.dd, voffset: this.dh });
            return [b.mml(m)];
          case "horizontal":
            return [b.mml(this.left), n, b.mml(this.right)];
        }
      }
      return this.SUPER(arguments).checkItem.call(this, n);
    }
  });
  b.array = b.Subclass({
    type: "array",
    isOpen: true,
    copyEnv: false,
    arraydef: {},
    Init: function() {
      this.table = [];
      this.row = [];
      this.frame = [];
      this.hfill = [];
      this.SUPER(arguments).Init.apply(this, arguments);
    },
    checkItem: function(n) {
      if (n.isClose && n.type !== "over") {
        if (n.isEntry) {
          this.EndEntry();
          this.clearEnv();
          return false;
        }
        if (n.isCR) {
          this.EndEntry();
          this.EndRow();
          this.clearEnv();
          return false;
        }
        this.EndTable();
        this.clearEnv();
        var o = this.arraydef.scriptlevel;
        delete this.arraydef.scriptlevel;
        var m = i.mtable.apply(i, this.table).With(this.arraydef);
        if (this.frame.length === 4) {
          m.frame = this.frame.dashed ? "dashed" : "solid";
        } else {
          if (this.frame.length) {
            m.hasFrame = true;
            if (this.arraydef.rowlines) {
              this.arraydef.rowlines = this.arraydef.rowlines.replace(
                /none( none)+$/,
                "none"
              );
            }
            m = i
              .menclose(m)
              .With({ notation: this.frame.join(" "), isFrame: true });
            if (
              (this.arraydef.columnlines || "none") != "none" ||
              (this.arraydef.rowlines || "none") != "none"
            ) {
              m.padding = 0;
            }
          }
        }
        if (o) {
          m = i.mstyle(m).With({ scriptlevel: o });
        }
        if (this.open || this.close) {
          m = d.fenced(this.open, m, this.close);
        }
        m = b.mml(m);
        if (this.requireClose) {
          if (n.type === "close") {
            return m;
          }
          d.Error(["MissingCloseBrace", "Missing close brace"]);
        }
        return [m, n];
      }
      return this.SUPER(arguments).checkItem.call(this, n);
    },
    EndEntry: function() {
      var m = i.mtd.apply(i, this.data);
      if (this.hfill.length) {
        if (this.hfill[0] === 0) {
          m.columnalign = "right";
        }
        if (this.hfill[this.hfill.length - 1] === this.data.length) {
          m.columnalign = m.columnalign ? "center" : "left";
        }
      }
      this.row.push(m);
      this.data = [];
      this.hfill = [];
    },
    EndRow: function() {
      var m = i.mtr;
      if (this.isNumbered && this.row.length === 3) {
        this.row.unshift(this.row.pop());
        m = i.mlabeledtr;
      }
      this.table.push(m.apply(i, this.row));
      this.row = [];
    },
    EndTable: function() {
      if (this.data.length || this.row.length) {
        this.EndEntry();
        this.EndRow();
      }
      this.checkLines();
    },
    checkLines: function() {
      if (this.arraydef.rowlines) {
        var m = this.arraydef.rowlines.split(/ /);
        if (m.length === this.table.length) {
          this.frame.push("bottom");
          m.pop();
          this.arraydef.rowlines = m.join(" ");
        } else {
          if (m.length < this.table.length - 1) {
            this.arraydef.rowlines += " none";
          }
        }
      }
      if (this.rowspacing) {
        var n = this.arraydef.rowspacing.split(/ /);
        while (n.length < this.table.length) {
          n.push(this.rowspacing + "em");
        }
        this.arraydef.rowspacing = n.join(" ");
      }
    },
    clearEnv: function() {
      for (var m in this.env) {
        if (this.env.hasOwnProperty(m)) {
          delete this.env[m];
        }
      }
    }
  });
  b.cell = b.Subclass({ type: "cell", isClose: true });
  b.mml = b.Subclass({
    type: "mml",
    isNotStack: true,
    Add: function() {
      this.data.push.apply(this.data, arguments);
      return this;
    }
  });
  b.fn = b.Subclass({
    type: "fn",
    checkItem: function(n) {
      if (this.data[0]) {
        if (n.isOpen) {
          return true;
        }
        if (n.type !== "fn") {
          if (n.type !== "mml" || !n.data[0]) {
            return [this.data[0], n];
          }
          if (n.data[0].isa(i.mspace)) {
            return [this.data[0], n];
          }
          var m = n.data[0];
          if (m.isEmbellished()) {
            m = m.CoreMO();
          }
          if ([0, 0, 1, 1, 0, 1, 1, 0, 0, 0][m.Get("texClass")]) {
            return [this.data[0], n];
          }
        }
        return [
          this.data[0],
          i.mo(i.entity("#x2061")).With({ texClass: i.TEXCLASS.NONE }),
          n
        ];
      }
      return this.SUPER(arguments).checkItem.apply(this, arguments);
    }
  });
  b.not = b.Subclass({
    type: "not",
    checkItem: function(n) {
      var m, o;
      if (n.type === "open" || n.type === "left") {
        return true;
      }
      if (n.type === "mml" && n.data[0].type.match(/^(mo|mi|mtext)$/)) {
        (m = n.data[0]), (o = m.data.join(""));
        if (o.length === 1 && !m.movesupsub && m.data.length === 1) {
          o = b.not.remap[o.charCodeAt(0)];
          if (o) {
            m.SetData(0, i.chars(String.fromCharCode(o)));
          } else {
            m.Append(i.chars("\u0338"));
          }
          return n;
        }
      }
      m = i.mpadded(i.mtext("\u29F8")).With({ width: 0 });
      m = i.TeXAtom(m).With({ texClass: i.TEXCLASS.REL });
      return [m, n];
    }
  });
  b.not.remap = {
    8592: 8602,
    8594: 8603,
    8596: 8622,
    8656: 8653,
    8658: 8655,
    8660: 8654,
    8712: 8713,
    8715: 8716,
    8739: 8740,
    8741: 8742,
    8764: 8769,
    126: 8769,
    8771: 8772,
    8773: 8775,
    8776: 8777,
    8781: 8813,
    61: 8800,
    8801: 8802,
    60: 8814,
    62: 8815,
    8804: 8816,
    8805: 8817,
    8818: 8820,
    8819: 8821,
    8822: 8824,
    8823: 8825,
    8826: 8832,
    8827: 8833,
    8834: 8836,
    8835: 8837,
    8838: 8840,
    8839: 8841,
    8866: 8876,
    8872: 8877,
    8873: 8878,
    8875: 8879,
    8828: 8928,
    8829: 8929,
    8849: 8930,
    8850: 8931,
    8882: 8938,
    8883: 8939,
    8884: 8940,
    8885: 8941,
    8707: 8708
  };
  b.dots = b.Subclass({
    type: "dots",
    checkItem: function(n) {
      if (n.type === "open" || n.type === "left") {
        return true;
      }
      var o = this.ldots;
      if (n.type === "mml" && n.data[0].isEmbellished()) {
        var m = n.data[0].CoreMO().Get("texClass");
        if (m === i.TEXCLASS.BIN || m === i.TEXCLASS.REL) {
          o = this.cdots;
        }
      }
      return [o, n];
    }
  });
  var g = {
    Add: function(m, p, o) {
      if (!p) {
        p = this;
      }
      for (var n in m) {
        if (m.hasOwnProperty(n)) {
          if (
            typeof m[n] === "object" &&
            !f(m[n]) &&
            (typeof p[n] === "object" || typeof p[n] === "function")
          ) {
            this.Add(m[n], p[n], m[n], o);
          } else {
            if (!p[n] || !p[n].isUser || !o) {
              p[n] = m[n];
            }
          }
        }
      }
      return p;
    }
  };
  var l = function() {
    i = MathJax.ElementJax.mml;
    c.Insert(g, {
      letter: /[a-z]/i,
      digit: /[0-9.]/,
      number: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)*|\.[0-9]+)/,
      special: {
        "\\": "ControlSequence",
        "{": "Open",
        "}": "Close",
        "~": "Tilde",
        "^": "Superscript",
        _: "Subscript",
        " ": "Space",
        "\t": "Space",
        "\r": "Space",
        "\n": "Space",
        "'": "Prime",
        "%": "Comment",
        "&": "Entry",
        "#": "Hash",
        "\u00A0": "Space",
        "\u2019": "Prime"
      },
      remap: { "-": "2212", "*": "2217", "`": "2018" },
      mathchar0mi: {
        alpha: "03B1",
        beta: "03B2",
        gamma: "03B3",
        delta: "03B4",
        epsilon: "03F5",
        zeta: "03B6",
        eta: "03B7",
        theta: "03B8",
        iota: "03B9",
        kappa: "03BA",
        lambda: "03BB",
        mu: "03BC",
        nu: "03BD",
        xi: "03BE",
        omicron: "03BF",
        pi: "03C0",
        rho: "03C1",
        sigma: "03C3",
        tau: "03C4",
        upsilon: "03C5",
        phi: "03D5",
        chi: "03C7",
        psi: "03C8",
        omega: "03C9",
        varepsilon: "03B5",
        vartheta: "03D1",
        varpi: "03D6",
        varrho: "03F1",
        varsigma: "03C2",
        varphi: "03C6",
        S: ["00A7", { mathvariant: i.VARIANT.NORMAL }],
        aleph: ["2135", { mathvariant: i.VARIANT.NORMAL }],
        hbar: ["210F", { variantForm: true }],
        imath: "0131",
        jmath: "0237",
        ell: "2113",
        wp: ["2118", { mathvariant: i.VARIANT.NORMAL }],
        Re: ["211C", { mathvariant: i.VARIANT.NORMAL }],
        Im: ["2111", { mathvariant: i.VARIANT.NORMAL }],
        partial: ["2202", { mathvariant: i.VARIANT.NORMAL }],
        infty: ["221E", { mathvariant: i.VARIANT.NORMAL }],
        prime: ["2032", { mathvariant: i.VARIANT.NORMAL, variantForm: true }],
        emptyset: ["2205", { mathvariant: i.VARIANT.NORMAL }],
        nabla: ["2207", { mathvariant: i.VARIANT.NORMAL }],
        top: ["22A4", { mathvariant: i.VARIANT.NORMAL }],
        bot: ["22A5", { mathvariant: i.VARIANT.NORMAL }],
        angle: ["2220", { mathvariant: i.VARIANT.NORMAL }],
        triangle: ["25B3", { mathvariant: i.VARIANT.NORMAL }],
        backslash: [
          "2216",
          { mathvariant: i.VARIANT.NORMAL, variantForm: true }
        ],
        forall: ["2200", { mathvariant: i.VARIANT.NORMAL }],
        exists: ["2203", { mathvariant: i.VARIANT.NORMAL }],
        neg: ["00AC", { mathvariant: i.VARIANT.NORMAL }],
        lnot: ["00AC", { mathvariant: i.VARIANT.NORMAL }],
        flat: ["266D", { mathvariant: i.VARIANT.NORMAL }],
        natural: ["266E", { mathvariant: i.VARIANT.NORMAL }],
        sharp: ["266F", { mathvariant: i.VARIANT.NORMAL }],
        clubsuit: ["2663", { mathvariant: i.VARIANT.NORMAL }],
        diamondsuit: ["2662", { mathvariant: i.VARIANT.NORMAL }],
        heartsuit: ["2661", { mathvariant: i.VARIANT.NORMAL }],
        spadesuit: ["2660", { mathvariant: i.VARIANT.NORMAL }]
      },
      mathchar0mo: {
        surd: "221A",
        coprod: ["2210", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        bigvee: ["22C1", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        bigwedge: ["22C0", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        biguplus: ["2A04", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        bigcap: ["22C2", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        bigcup: ["22C3", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        int: ["222B", { texClass: i.TEXCLASS.OP }],
        intop: [
          "222B",
          { texClass: i.TEXCLASS.OP, movesupsub: true, movablelimits: true }
        ],
        iint: ["222C", { texClass: i.TEXCLASS.OP }],
        iiint: ["222D", { texClass: i.TEXCLASS.OP }],
        prod: ["220F", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        sum: ["2211", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        bigotimes: ["2A02", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        bigoplus: ["2A01", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        bigodot: ["2A00", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        oint: ["222E", { texClass: i.TEXCLASS.OP }],
        bigsqcup: ["2A06", { texClass: i.TEXCLASS.OP, movesupsub: true }],
        smallint: ["222B", { largeop: false }],
        triangleleft: "25C3",
        triangleright: "25B9",
        bigtriangleup: "25B3",
        bigtriangledown: "25BD",
        wedge: "2227",
        land: "2227",
        vee: "2228",
        lor: "2228",
        cap: "2229",
        cup: "222A",
        ddagger: "2021",
        dagger: "2020",
        sqcap: "2293",
        sqcup: "2294",
        uplus: "228E",
        amalg: "2A3F",
        diamond: "22C4",
        bullet: "2219",
        wr: "2240",
        div: "00F7",
        odot: ["2299", { largeop: false }],
        oslash: ["2298", { largeop: false }],
        otimes: ["2297", { largeop: false }],
        ominus: ["2296", { largeop: false }],
        oplus: ["2295", { largeop: false }],
        mp: "2213",
        pm: "00B1",
        circ: "2218",
        bigcirc: "25EF",
        setminus: ["2216", { variantForm: true }],
        cdot: "22C5",
        ast: "2217",
        times: "00D7",
        star: "22C6",
        propto: "221D",
        sqsubseteq: "2291",
        sqsupseteq: "2292",
        parallel: "2225",
        mid: "2223",
        dashv: "22A3",
        vdash: "22A2",
        leq: "2264",
        le: "2264",
        geq: "2265",
        ge: "2265",
        lt: "003C",
        gt: "003E",
        succ: "227B",
        prec: "227A",
        approx: "2248",
        succeq: "2AB0",
        preceq: "2AAF",
        supset: "2283",
        subset: "2282",
        supseteq: "2287",
        subseteq: "2286",
        in: "2208",
        ni: "220B",
        notin: "2209",
        owns: "220B",
        gg: "226B",
        ll: "226A",
        sim: "223C",
        simeq: "2243",
        perp: "22A5",
        equiv: "2261",
        asymp: "224D",
        smile: "2323",
        frown: "2322",
        ne: "2260",
        neq: "2260",
        cong: "2245",
        doteq: "2250",
        bowtie: "22C8",
        models: "22A8",
        notChar: "29F8",
        Leftrightarrow: "21D4",
        Leftarrow: "21D0",
        Rightarrow: "21D2",
        leftrightarrow: "2194",
        leftarrow: "2190",
        gets: "2190",
        rightarrow: "2192",
        to: "2192",
        mapsto: "21A6",
        leftharpoonup: "21BC",
        leftharpoondown: "21BD",
        rightharpoonup: "21C0",
        rightharpoondown: "21C1",
        nearrow: "2197",
        searrow: "2198",
        nwarrow: "2196",
        swarrow: "2199",
        rightleftharpoons: "21CC",
        hookrightarrow: "21AA",
        hookleftarrow: "21A9",
        longleftarrow: "27F5",
        Longleftarrow: "27F8",
        longrightarrow: "27F6",
        Longrightarrow: "27F9",
        Longleftrightarrow: "27FA",
        longleftrightarrow: "27F7",
        longmapsto: "27FC",
        ldots: "2026",
        cdots: "22EF",
        vdots: "22EE",
        ddots: "22F1",
        dotsc: "2026",
        dotsb: "22EF",
        dotsm: "22EF",
        dotsi: "22EF",
        dotso: "2026",
        ldotp: ["002E", { texClass: i.TEXCLASS.PUNCT }],
        cdotp: ["22C5", { texClass: i.TEXCLASS.PUNCT }],
        colon: ["003A", { texClass: i.TEXCLASS.PUNCT }]
      },
      mathchar7: {
        Gamma: "0393",
        Delta: "0394",
        Theta: "0398",
        Lambda: "039B",
        Xi: "039E",
        Pi: "03A0",
        Sigma: "03A3",
        Upsilon: "03A5",
        Phi: "03A6",
        Psi: "03A8",
        Omega: "03A9",
        _: "005F",
        "#": "0023",
        $: "0024",
        "%": "0025",
        "&": "0026",
        And: "0026"
      },
      delimiter: {
        "(": "(",
        ")": ")",
        "[": "[",
        "]": "]",
        "<": "27E8",
        ">": "27E9",
        "\\lt": "27E8",
        "\\gt": "27E9",
        "/": "/",
        "|": ["|", { texClass: i.TEXCLASS.ORD }],
        ".": "",
        "\\\\": "\\",
        "\\lmoustache": "23B0",
        "\\rmoustache": "23B1",
        "\\lgroup": "27EE",
        "\\rgroup": "27EF",
        "\\arrowvert": "23D0",
        "\\Arrowvert": "2016",
        "\\bracevert": "23AA",
        "\\Vert": ["2016", { texClass: i.TEXCLASS.ORD }],
        "\\|": ["2016", { texClass: i.TEXCLASS.ORD }],
        "\\vert": ["|", { texClass: i.TEXCLASS.ORD }],
        "\\uparrow": "2191",
        "\\downarrow": "2193",
        "\\updownarrow": "2195",
        "\\Uparrow": "21D1",
        "\\Downarrow": "21D3",
        "\\Updownarrow": "21D5",
        "\\backslash": "\\",
        "\\rangle": "27E9",
        "\\langle": "27E8",
        "\\rbrace": "}",
        "\\lbrace": "{",
        "\\}": "}",
        "\\{": "{",
        "\\rceil": "2309",
        "\\lceil": "2308",
        "\\rfloor": "230B",
        "\\lfloor": "230A",
        "\\lbrack": "[",
        "\\rbrack": "]"
      },
      macros: {
        displaystyle: ["SetStyle", "D", true, 0],
        textstyle: ["SetStyle", "T", false, 0],
        scriptstyle: ["SetStyle", "S", false, 1],
        scriptscriptstyle: ["SetStyle", "SS", false, 2],
        rm: ["SetFont", i.VARIANT.NORMAL],
        mit: ["SetFont", i.VARIANT.ITALIC],
        oldstyle: ["SetFont", i.VARIANT.OLDSTYLE],
        cal: ["SetFont", i.VARIANT.CALIGRAPHIC],
        it: ["SetFont", "-tex-mathit"],
        bf: ["SetFont", i.VARIANT.BOLD],
        bbFont: ["SetFont", i.VARIANT.DOUBLESTRUCK],
        scr: ["SetFont", i.VARIANT.SCRIPT],
        frak: ["SetFont", i.VARIANT.FRAKTUR],
        sf: ["SetFont", i.VARIANT.SANSSERIF],
        tt: ["SetFont", i.VARIANT.MONOSPACE],
        tiny: ["SetSize", 0.5],
        Tiny: ["SetSize", 0.6],
        scriptsize: ["SetSize", 0.7],
        small: ["SetSize", 0.85],
        normalsize: ["SetSize", 1],
        large: ["SetSize", 1.2],
        Large: ["SetSize", 1.44],
        LARGE: ["SetSize", 1.73],
        huge: ["SetSize", 2.07],
        Huge: ["SetSize", 2.49],
        arcsin: ["NamedFn"],
        arccos: ["NamedFn"],
        arctan: ["NamedFn"],
        arg: ["NamedFn"],
        cos: ["NamedFn"],
        cosh: ["NamedFn"],
        cot: ["NamedFn"],
        coth: ["NamedFn"],
        csc: ["NamedFn"],
        deg: ["NamedFn"],
        det: "NamedOp",
        dim: ["NamedFn"],
        exp: ["NamedFn"],
        gcd: "NamedOp",
        hom: ["NamedFn"],
        inf: "NamedOp",
        ker: ["NamedFn"],
        lg: ["NamedFn"],
        lim: "NamedOp",
        liminf: ["NamedOp", "lim&thinsp;inf"],
        limsup: ["NamedOp", "lim&thinsp;sup"],
        ln: ["NamedFn"],
        log: ["NamedFn"],
        max: "NamedOp",
        min: "NamedOp",
        Pr: "NamedOp",
        sec: ["NamedFn"],
        sin: ["NamedFn"],
        sinh: ["NamedFn"],
        sup: "NamedOp",
        tan: ["NamedFn"],
        tanh: ["NamedFn"],
        limits: ["Limits", 1],
        nolimits: ["Limits", 0],
        overline: ["UnderOver", "00AF", null, 1],
        underline: ["UnderOver", "005F"],
        overbrace: ["UnderOver", "23DE", 1],
        underbrace: ["UnderOver", "23DF", 1],
        overparen: ["UnderOver", "23DC"],
        underparen: ["UnderOver", "23DD"],
        overrightarrow: ["UnderOver", "2192"],
        underrightarrow: ["UnderOver", "2192"],
        overleftarrow: ["UnderOver", "2190"],
        underleftarrow: ["UnderOver", "2190"],
        overleftrightarrow: ["UnderOver", "2194"],
        underleftrightarrow: ["UnderOver", "2194"],
        overset: "Overset",
        underset: "Underset",
        stackrel: ["Macro", "\\mathrel{\\mathop{#2}\\limits^{#1}}", 2],
        over: "Over",
        overwithdelims: "Over",
        atop: "Over",
        atopwithdelims: "Over",
        above: "Over",
        abovewithdelims: "Over",
        brace: ["Over", "{", "}"],
        brack: ["Over", "[", "]"],
        choose: ["Over", "(", ")"],
        frac: "Frac",
        sqrt: "Sqrt",
        root: "Root",
        uproot: ["MoveRoot", "upRoot"],
        leftroot: ["MoveRoot", "leftRoot"],
        left: "LeftRight",
        right: "LeftRight",
        middle: "Middle",
        llap: "Lap",
        rlap: "Lap",
        raise: "RaiseLower",
        lower: "RaiseLower",
        moveleft: "MoveLeftRight",
        moveright: "MoveLeftRight",
        ",": ["Spacer", i.LENGTH.THINMATHSPACE],
        ":": ["Spacer", i.LENGTH.MEDIUMMATHSPACE],
        ">": ["Spacer", i.LENGTH.MEDIUMMATHSPACE],
        ";": ["Spacer", i.LENGTH.THICKMATHSPACE],
        "!": ["Spacer", i.LENGTH.NEGATIVETHINMATHSPACE],
        enspace: ["Spacer", ".5em"],
        quad: ["Spacer", "1em"],
        qquad: ["Spacer", "2em"],
        thinspace: ["Spacer", i.LENGTH.THINMATHSPACE],
        negthinspace: ["Spacer", i.LENGTH.NEGATIVETHINMATHSPACE],
        hskip: "Hskip",
        hspace: "Hskip",
        kern: "Hskip",
        mskip: "Hskip",
        mspace: "Hskip",
        mkern: "Hskip",
        rule: "rule",
        Rule: ["Rule"],
        Space: ["Rule", "blank"],
        big: ["MakeBig", i.TEXCLASS.ORD, 0.85],
        Big: ["MakeBig", i.TEXCLASS.ORD, 1.15],
        bigg: ["MakeBig", i.TEXCLASS.ORD, 1.45],
        Bigg: ["MakeBig", i.TEXCLASS.ORD, 1.75],
        bigl: ["MakeBig", i.TEXCLASS.OPEN, 0.85],
        Bigl: ["MakeBig", i.TEXCLASS.OPEN, 1.15],
        biggl: ["MakeBig", i.TEXCLASS.OPEN, 1.45],
        Biggl: ["MakeBig", i.TEXCLASS.OPEN, 1.75],
        bigr: ["MakeBig", i.TEXCLASS.CLOSE, 0.85],
        Bigr: ["MakeBig", i.TEXCLASS.CLOSE, 1.15],
        biggr: ["MakeBig", i.TEXCLASS.CLOSE, 1.45],
        Biggr: ["MakeBig", i.TEXCLASS.CLOSE, 1.75],
        bigm: ["MakeBig", i.TEXCLASS.REL, 0.85],
        Bigm: ["MakeBig", i.TEXCLASS.REL, 1.15],
        biggm: ["MakeBig", i.TEXCLASS.REL, 1.45],
        Biggm: ["MakeBig", i.TEXCLASS.REL, 1.75],
        mathord: ["TeXAtom", i.TEXCLASS.ORD],
        mathop: ["TeXAtom", i.TEXCLASS.OP],
        mathopen: ["TeXAtom", i.TEXCLASS.OPEN],
        mathclose: ["TeXAtom", i.TEXCLASS.CLOSE],
        mathbin: ["TeXAtom", i.TEXCLASS.BIN],
        mathrel: ["TeXAtom", i.TEXCLASS.REL],
        mathpunct: ["TeXAtom", i.TEXCLASS.PUNCT],
        mathinner: ["TeXAtom", i.TEXCLASS.INNER],
        vcenter: ["TeXAtom", i.TEXCLASS.VCENTER],
        mathchoice: ["Extension", "mathchoice"],
        buildrel: "BuildRel",
        hbox: ["HBox", 0],
        text: "HBox",
        mbox: ["HBox", 0],
        fbox: "FBox",
        strut: "Strut",
        mathstrut: ["Macro", "\\vphantom{(}"],
        phantom: "Phantom",
        vphantom: ["Phantom", 1, 0],
        hphantom: ["Phantom", 0, 1],
        smash: "Smash",
        acute: ["Accent", "00B4"],
        grave: ["Accent", "0060"],
        ddot: ["Accent", "00A8"],
        tilde: ["Accent", "007E"],
        bar: ["Accent", "00AF"],
        breve: ["Accent", "02D8"],
        check: ["Accent", "02C7"],
        hat: ["Accent", "005E"],
        vec: ["Accent", "2192"],
        dot: ["Accent", "02D9"],
        widetilde: ["Accent", "007E", 1],
        widehat: ["Accent", "005E", 1],
        matrix: "Matrix",
        array: "Matrix",
        pmatrix: ["Matrix", "(", ")"],
        cases: ["Matrix", "{", "", "left left", null, ".1em", null, true],
        eqalign: [
          "Matrix",
          null,
          null,
          "right left",
          i.LENGTH.THICKMATHSPACE,
          ".5em",
          "D"
        ],
        displaylines: ["Matrix", null, null, "center", null, ".5em", "D"],
        cr: "Cr",
        "\\": "CrLaTeX",
        newline: "Cr",
        hline: ["HLine", "solid"],
        hdashline: ["HLine", "dashed"],
        eqalignno: [
          "Matrix",
          null,
          null,
          "right left",
          i.LENGTH.THICKMATHSPACE,
          ".5em",
          "D",
          null,
          "right"
        ],
        leqalignno: [
          "Matrix",
          null,
          null,
          "right left",
          i.LENGTH.THICKMATHSPACE,
          ".5em",
          "D",
          null,
          "left"
        ],
        hfill: "HFill",
        hfil: "HFill",
        hfilll: "HFill",
        bmod: [
          "Macro",
          '\\mmlToken{mo}[lspace="thickmathspace" rspace="thickmathspace"]{mod}'
        ],
        pmod: ["Macro", "\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}", 1],
        mod: [
          "Macro",
          "\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1",
          1
        ],
        pod: [
          "Macro",
          "\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)",
          1
        ],
        iff: ["Macro", "\\;\\Longleftrightarrow\\;"],
        skew: ["Macro", "{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}", 3],
        mathcal: ["Macro", "{\\cal #1}", 1],
        mathscr: ["Macro", "{\\scr #1}", 1],
        mathrm: ["Macro", "{\\rm #1}", 1],
        mathbf: ["Macro", "{\\bf #1}", 1],
        mathbb: ["Macro", "{\\bbFont #1}", 1],
        Bbb: ["Macro", "{\\bbFont #1}", 1],
        mathit: ["Macro", "{\\it #1}", 1],
        mathfrak: ["Macro", "{\\frak #1}", 1],
        mathsf: ["Macro", "{\\sf #1}", 1],
        mathtt: ["Macro", "{\\tt #1}", 1],
        textrm: ["Macro", "\\mathord{\\rm\\text{#1}}", 1],
        textit: ["Macro", "\\mathord{\\it\\text{#1}}", 1],
        textbf: ["Macro", "\\mathord{\\bf\\text{#1}}", 1],
        textsf: ["Macro", "\\mathord{\\sf\\text{#1}}", 1],
        texttt: ["Macro", "\\mathord{\\tt\\text{#1}}", 1],
        pmb: ["Macro", "\\rlap{#1}\\kern1px{#1}", 1],
        TeX: ["Macro", "T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"],
        LaTeX: [
          "Macro",
          "L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX"
        ],
        " ": ["Macro", "\\text{ }"],
        not: "Not",
        dots: "Dots",
        space: "Tilde",
        "\u00A0": "Tilde",
        begin: "BeginEnd",
        end: "BeginEnd",
        newcommand: ["Extension", "newcommand"],
        renewcommand: ["Extension", "newcommand"],
        newenvironment: ["Extension", "newcommand"],
        renewenvironment: ["Extension", "newcommand"],
        def: ["Extension", "newcommand"],
        let: ["Extension", "newcommand"],
        verb: ["Extension", "verb"],
        boldsymbol: ["Extension", "boldsymbol"],
        tag: ["Extension", "AMSmath"],
        notag: ["Extension", "AMSmath"],
        label: ["Extension", "AMSmath"],
        ref: ["Extension", "AMSmath"],
        eqref: ["Extension", "AMSmath"],
        nonumber: ["Macro", "\\notag"],
        unicode: ["Extension", "unicode"],
        color: "Color",
        href: ["Extension", "HTML"],
        class: ["Extension", "HTML"],
        style: ["Extension", "HTML"],
        cssId: ["Extension", "HTML"],
        bbox: ["Extension", "bbox"],
        mmlToken: "MmlToken",
        require: "Require"
      },
      environment: {
        array: ["AlignedArray"],
        matrix: ["Array", null, null, null, "c"],
        pmatrix: ["Array", null, "(", ")", "c"],
        bmatrix: ["Array", null, "[", "]", "c"],
        Bmatrix: ["Array", null, "\\{", "\\}", "c"],
        vmatrix: ["Array", null, "\\vert", "\\vert", "c"],
        Vmatrix: ["Array", null, "\\Vert", "\\Vert", "c"],
        cases: ["Array", null, "\\{", ".", "ll", null, ".2em", "T"],
        equation: [null, "Equation"],
        "equation*": [null, "Equation"],
        eqnarray: ["ExtensionEnv", null, "AMSmath"],
        "eqnarray*": ["ExtensionEnv", null, "AMSmath"],
        align: ["ExtensionEnv", null, "AMSmath"],
        "align*": ["ExtensionEnv", null, "AMSmath"],
        aligned: ["ExtensionEnv", null, "AMSmath"],
        multline: ["ExtensionEnv", null, "AMSmath"],
        "multline*": ["ExtensionEnv", null, "AMSmath"],
        split: ["ExtensionEnv", null, "AMSmath"],
        gather: ["ExtensionEnv", null, "AMSmath"],
        "gather*": ["ExtensionEnv", null, "AMSmath"],
        gathered: ["ExtensionEnv", null, "AMSmath"],
        alignat: ["ExtensionEnv", null, "AMSmath"],
        "alignat*": ["ExtensionEnv", null, "AMSmath"],
        alignedat: ["ExtensionEnv", null, "AMSmath"]
      },
      p_height: 1.2 / 0.85
    });
    if (this.config.Macros) {
      var m = this.config.Macros;
      for (var n in m) {
        if (m.hasOwnProperty(n)) {
          if (typeof m[n] === "string") {
            g.macros[n] = ["Macro", m[n]];
          } else {
            g.macros[n] = ["Macro"].concat(m[n]);
          }
          g.macros[n].isUser = true;
        }
      }
    }
  };
  var a = MathJax.Object.Subclass({
    Init: function(n, o) {
      this.string = n;
      this.i = 0;
      this.macroCount = 0;
      var m;
      if (o) {
        m = {};
        for (var p in o) {
          if (o.hasOwnProperty(p)) {
            m[p] = o[p];
          }
        }
      }
      this.stack = d.Stack(m, !!o);
      this.Parse();
      this.Push(b.stop());
    },
    Parse: function() {
      var o, m;
      while (this.i < this.string.length) {
        o = this.string.charAt(this.i++);
        m = o.charCodeAt(0);
        if (m >= 55296 && m < 56320) {
          o += this.string.charAt(this.i++);
        }
        if (g.special.hasOwnProperty(o)) {
          this[g.special[o]](o);
        } else {
          if (g.letter.test(o)) {
            this.Variable(o);
          } else {
            if (g.digit.test(o)) {
              this.Number(o);
            } else {
              this.Other(o);
            }
          }
        }
      }
    },
    Push: function() {
      this.stack.Push.apply(this.stack, arguments);
    },
    mml: function() {
      if (this.stack.Top().type !== "mml") {
        return null;
      }
      return this.stack.Top().data[0];
    },
    mmlToken: function(m) {
      return m;
    },
    ControlSequence: function(p) {
      var m = this.GetCS(),
        o = this.csFindMacro(m);
      if (o) {
        if (!f(o)) {
          o = [o];
        }
        var n = o[0];
        if (!(n instanceof Function)) {
          n = this[n];
        }
        n.apply(this, [p + m].concat(o.slice(1)));
      } else {
        if (g.mathchar0mi.hasOwnProperty(m)) {
          this.csMathchar0mi(m, g.mathchar0mi[m]);
        } else {
          if (g.mathchar0mo.hasOwnProperty(m)) {
            this.csMathchar0mo(m, g.mathchar0mo[m]);
          } else {
            if (g.mathchar7.hasOwnProperty(m)) {
              this.csMathchar7(m, g.mathchar7[m]);
            } else {
              if (g.delimiter.hasOwnProperty("\\" + m)) {
                this.csDelimiter(m, g.delimiter["\\" + m]);
              } else {
                this.csUndefined(p + m);
              }
            }
          }
        }
      }
    },
    csFindMacro: function(m) {
      return g.macros.hasOwnProperty(m) ? g.macros[m] : null;
    },
    csMathchar0mi: function(m, o) {
      var n = { mathvariant: i.VARIANT.ITALIC };
      if (f(o)) {
        n = o[1];
        o = o[0];
      }
      this.Push(this.mmlToken(i.mi(i.entity("#x" + o)).With(n)));
    },
    csMathchar0mo: function(m, o) {
      var n = { stretchy: false };
      if (f(o)) {
        n = o[1];
        n.stretchy = false;
        o = o[0];
      }
      this.Push(this.mmlToken(i.mo(i.entity("#x" + o)).With(n)));
    },
    csMathchar7: function(m, o) {
      var n = { mathvariant: i.VARIANT.NORMAL };
      if (f(o)) {
        n = o[1];
        o = o[0];
      }
      if (this.stack.env.font) {
        n.mathvariant = this.stack.env.font;
      }
      this.Push(this.mmlToken(i.mi(i.entity("#x" + o)).With(n)));
    },
    csDelimiter: function(m, o) {
      var n = {};
      if (f(o)) {
        n = o[1];
        o = o[0];
      }
      if (o.length === 4) {
        o = i.entity("#x" + o);
      } else {
        o = i.chars(o);
      }
      this.Push(
        this.mmlToken(
          i
            .mo(o)
            .With({ fence: false, stretchy: false })
            .With(n)
        )
      );
    },
    csUndefined: function(m) {
      d.Error(["UndefinedControlSequence", "Undefined control sequence %1", m]);
    },
    Variable: function(n) {
      var m = {};
      if (this.stack.env.font) {
        m.mathvariant = this.stack.env.font;
      }
      this.Push(this.mmlToken(i.mi(i.chars(n)).With(m)));
    },
    Number: function(p) {
      var m,
        o = this.string.slice(this.i - 1).match(g.number);
      if (o) {
        m = i.mn(o[0].replace(/[{}]/g, ""));
        this.i += o[0].length - 1;
      } else {
        m = i.mo(i.chars(p));
      }
      if (this.stack.env.font) {
        m.mathvariant = this.stack.env.font;
      }
      this.Push(this.mmlToken(m));
    },
    Open: function(m) {
      this.Push(b.open());
    },
    Close: function(m) {
      this.Push(b.close());
    },
    Tilde: function(m) {
      this.Push(i.mtext(i.chars(h)));
    },
    Space: function(m) {},
    Superscript: function(r) {
      if (this.GetNext().match(/\d/)) {
        this.string =
          this.string.substr(0, this.i + 1) +
          " " +
          this.string.substr(this.i + 1);
      }
      var q,
        o,
        p = this.stack.Top();
      if (p.type === "prime") {
        o = p.data[0];
        q = p.data[1];
        this.stack.Pop();
      } else {
        o = this.stack.Prev();
        if (!o) {
          o = i.mi("");
        }
      }
      if (o.isEmbellishedWrapper) {
        o = o.data[0].data[0];
      }
      var n = o.movesupsub,
        m = o.sup;
      if (
        (o.type === "msubsup" && o.data[o.sup]) ||
        (o.type === "munderover" && o.data[o.over] && !o.subsupOK)
      ) {
        d.Error(["DoubleExponent", "Double exponent: use braces to clarify"]);
      }
      if (o.type !== "msubsup") {
        if (n) {
          if (o.type !== "munderover" || o.data[o.over]) {
            if (o.movablelimits && o.isa(i.mi)) {
              o = this.mi2mo(o);
            }
            o = i.munderover(o, null, null).With({ movesupsub: true });
          }
          m = o.over;
        } else {
          o = i.msubsup(o, null, null);
          m = o.sup;
        }
      }
      this.Push(b.subsup(o).With({ position: m, primes: q, movesupsub: n }));
    },
    Subscript: function(r) {
      if (this.GetNext().match(/\d/)) {
        this.string =
          this.string.substr(0, this.i + 1) +
          " " +
          this.string.substr(this.i + 1);
      }
      var q,
        o,
        p = this.stack.Top();
      if (p.type === "prime") {
        o = p.data[0];
        q = p.data[1];
        this.stack.Pop();
      } else {
        o = this.stack.Prev();
        if (!o) {
          o = i.mi("");
        }
      }
      if (o.isEmbellishedWrapper) {
        o = o.data[0].data[0];
      }
      var n = o.movesupsub,
        m = o.sub;
      if (
        (o.type === "msubsup" && o.data[o.sub]) ||
        (o.type === "munderover" && o.data[o.under] && !o.subsupOK)
      ) {
        d.Error([
          "DoubleSubscripts",
          "Double subscripts: use braces to clarify"
        ]);
      }
      if (o.type !== "msubsup") {
        if (n) {
          if (o.type !== "munderover" || o.data[o.under]) {
            if (o.movablelimits && o.isa(i.mi)) {
              o = this.mi2mo(o);
            }
            o = i.munderover(o, null, null).With({ movesupsub: true });
          }
          m = o.under;
        } else {
          o = i.msubsup(o, null, null);
          m = o.sub;
        }
      }
      this.Push(b.subsup(o).With({ position: m, primes: q, movesupsub: n }));
    },
    PRIME: "\u2032",
    SMARTQUOTE: "\u2019",
    Prime: function(o) {
      var n = this.stack.Prev();
      if (!n) {
        n = i.mi();
      }
      if (n.type === "msubsup" && n.data[n.sup]) {
        d.Error([
          "DoubleExponentPrime",
          "Prime causes double exponent: use braces to clarify"
        ]);
      }
      var m = "";
      this.i--;
      do {
        m += this.PRIME;
        this.i++, (o = this.GetNext());
      } while (o === "'" || o === this.SMARTQUOTE);
      m = ["", "\u2032", "\u2033", "\u2034", "\u2057"][m.length] || m;
      this.Push(b.prime(n, this.mmlToken(i.mo(m))));
    },
    mi2mo: function(m) {
      var n = i.mo();
      n.Append.apply(n, m.data);
      var o;
      for (o in n.defaults) {
        if (n.defaults.hasOwnProperty(o) && m[o] != null) {
          n[o] = m[o];
        }
      }
      for (o in i.copyAttributes) {
        if (i.copyAttributes.hasOwnProperty(o) && m[o] != null) {
          n[o] = m[o];
        }
      }
      n.lspace = n.rspace = "0";
      n.useMMLspacing &= ~(n.SPACE_ATTR.lspace | n.SPACE_ATTR.rspace);
      return n;
    },
    Comment: function(m) {
      while (
        this.i < this.string.length &&
        this.string.charAt(this.i) != "\n"
      ) {
        this.i++;
      }
    },
    Hash: function(m) {
      d.Error([
        "CantUseHash1",
        "You can't use 'macro parameter character #' in math mode"
      ]);
    },
    Other: function(o) {
      var n, m;
      if (this.stack.env.font) {
        n = { mathvariant: this.stack.env.font };
      }
      if (g.remap.hasOwnProperty(o)) {
        o = g.remap[o];
        if (f(o)) {
          n = o[1];
          o = o[0];
        }
        m = i.mo(i.entity("#x" + o)).With(n);
      } else {
        m = i.mo(o).With(n);
      }
      if (m.autoDefault("stretchy", true)) {
        m.stretchy = false;
      }
      if (m.autoDefault("texClass", true) == "") {
        m = i.TeXAtom(m);
      }
      this.Push(this.mmlToken(m));
    },
    SetFont: function(n, m) {
      this.stack.env.font = m;
    },
    SetStyle: function(n, m, o, p) {
      this.stack.env.style = m;
      this.stack.env.level = p;
      this.Push(
        b.style().With({ styles: { displaystyle: o, scriptlevel: p } })
      );
    },
    SetSize: function(m, n) {
      this.stack.env.size = n;
      this.Push(b.style().With({ styles: { mathsize: n + "em" } }));
    },
    Color: function(o) {
      var n = this.GetArgument(o);
      var m = this.stack.env.color;
      this.stack.env.color = n;
      var p = this.ParseArg(o);
      if (m) {
        this.stack.env.color;
      } else {
        delete this.stack.env.color;
      }
      this.Push(i.mstyle(p).With({ mathcolor: n }));
    },
    Spacer: function(m, n) {
      this.Push(
        i.mspace().With({ width: n, mathsize: i.SIZE.NORMAL, scriptlevel: 0 })
      );
    },
    LeftRight: function(m) {
      this.Push(b[m.substr(1)]().With({ delim: this.GetDelimiter(m) }));
    },
    Middle: function(m) {
      var n = this.GetDelimiter(m);
      this.Push(i.TeXAtom().With({ texClass: i.TEXCLASS.CLOSE }));
      if (this.stack.Top().type !== "left") {
        d.Error(["MisplacedMiddle", "%1 must be within \\left and \\right", m]);
      }
      this.Push(i.mo(n).With({ stretchy: true }));
      this.Push(i.TeXAtom().With({ texClass: i.TEXCLASS.OPEN }));
    },
    NamedFn: function(n, o) {
      if (!o) {
        o = n.substr(1);
      }
      var m = i.mi(o).With({ texClass: i.TEXCLASS.OP });
      this.Push(b.fn(this.mmlToken(m)));
    },
    NamedOp: function(n, o) {
      if (!o) {
        o = n.substr(1);
      }
      o = o.replace(/&thinsp;/, "\u2006");
      var m = i
        .mo(o)
        .With({
          movablelimits: true,
          movesupsub: true,
          form: i.FORM.PREFIX,
          texClass: i.TEXCLASS.OP
        });
      this.Push(this.mmlToken(m));
    },
    Limits: function(n, m) {
      var p = this.stack.Prev("nopop");
      if (!p || (p.Get("texClass") !== i.TEXCLASS.OP && p.movesupsub == null)) {
        d.Error(["MisplacedLimits", "%1 is allowed only on operators", n]);
      }
      var o = this.stack.Top();
      if (p.type === "munderover" && !m) {
        p = o.data[o.data.length - 1] = i.msubsup.apply(i.subsup, p.data);
      } else {
        if (p.type === "msubsup" && m) {
          p = o.data[o.data.length - 1] = i.munderover.apply(
            i.underover,
            p.data
          );
        }
      }
      p.movesupsub = m ? true : false;
      p.Core().movablelimits = false;
      if (p.movablelimits) {
        p.movablelimits = false;
      }
    },
    Over: function(o, n, p) {
      var m = b.over().With({ name: o });
      if (n || p) {
        m.open = n;
        m.close = p;
      } else {
        if (o.match(/withdelims$/)) {
          m.open = this.GetDelimiter(o);
          m.close = this.GetDelimiter(o);
        }
      }
      if (o.match(/^\\above/)) {
        m.thickness = this.GetDimen(o);
      } else {
        if (o.match(/^\\atop/) || n || p) {
          m.thickness = 0;
        }
      }
      this.Push(m);
    },
    Frac: function(n) {
      var m = this.ParseArg(n);
      var o = this.ParseArg(n);
      this.Push(i.mfrac(m, o));
    },
    Sqrt: function(p) {
      var q = this.GetBrackets(p),
        m = this.GetArgument(p);
      if (m === "\\frac") {
        m += "{" + this.GetArgument(m) + "}{" + this.GetArgument(m) + "}";
      }
      var o = d.Parse(m, this.stack.env).mml();
      if (!q) {
        o = i.msqrt.apply(i, o.array());
      } else {
        o = i.mroot(o, this.parseRoot(q));
      }
      this.Push(o);
    },
    Root: function(o) {
      var p = this.GetUpTo(o, "\\of");
      var m = this.ParseArg(o);
      this.Push(i.mroot(m, this.parseRoot(p)));
    },
    parseRoot: function(r) {
      var o = this.stack.env,
        m = o.inRoot;
      o.inRoot = true;
      var q = d.Parse(r, o);
      r = q.mml();
      var p = q.stack.global;
      if (p.leftRoot || p.upRoot) {
        r = i.mpadded(r);
        if (p.leftRoot) {
          r.width = p.leftRoot;
        }
        if (p.upRoot) {
          r.voffset = p.upRoot;
          r.height = p.upRoot;
        }
      }
      o.inRoot = m;
      return r;
    },
    MoveRoot: function(m, p) {
      if (!this.stack.env.inRoot) {
        d.Error(["MisplacedMoveRoot", "%1 can appear only within a root", m]);
      }
      if (this.stack.global[p]) {
        d.Error(["MultipleMoveRoot", "Multiple use of %1", m]);
      }
      var o = this.GetArgument(m);
      if (!o.match(/-?[0-9]+/)) {
        d.Error(["IntegerArg", "The argument to %1 must be an integer", m]);
      }
      o = o / 15 + "em";
      if (o.substr(0, 1) !== "-") {
        o = "+" + o;
      }
      this.stack.global[p] = o;
    },
    Accent: function(o, m, s) {
      var r = this.ParseArg(o);
      var q = { accent: true };
      if (this.stack.env.font) {
        q.mathvariant = this.stack.env.font;
      }
      var n = this.mmlToken(i.mo(i.entity("#x" + m)).With(q));
      n.stretchy = s ? true : false;
      var p = r.isEmbellished() ? r.CoreMO() : r;
      if (p.isa(i.mo)) {
        p.movablelimits = false;
      }
      this.Push(i.TeXAtom(i.munderover(r, null, n).With({ accent: true })));
    },
    UnderOver: function(o, s, m, q) {
      var r = { o: "over", u: "under" }[o.charAt(1)];
      var p = this.ParseArg(o);
      if (p.Get("movablelimits")) {
        p.movablelimits = false;
      }
      if (p.isa(i.munderover) && p.isEmbellished()) {
        p.Core().With({ lspace: 0, rspace: 0 });
        p = i.mrow(i.mo().With({ rspace: 0 }), p);
      }
      var n = i.munderover(p, null, null);
      n.SetData(
        n[r],
        this.mmlToken(
          i.mo(i.entity("#x" + s)).With({ stretchy: true, accent: !q })
        )
      );
      if (m) {
        n = i.TeXAtom(n).With({ texClass: i.TEXCLASS.OP, movesupsub: true });
      }
      this.Push(n.With({ subsupOK: true }));
    },
    Overset: function(m) {
      var o = this.ParseArg(m),
        n = this.ParseArg(m);
      n.movablelimits = false;
      this.Push(i.mover(n, o));
    },
    Underset: function(m) {
      var o = this.ParseArg(m),
        n = this.ParseArg(m);
      n.movablelimits = false;
      this.Push(i.munder(n, o));
    },
    TeXAtom: function(p, r) {
      var q = { texClass: r },
        o;
      if (r == i.TEXCLASS.OP) {
        q.movesupsub = q.movablelimits = true;
        var m = this.GetArgument(p);
        var n = m.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
        if (n) {
          q.mathvariant = i.VARIANT.NORMAL;
          o = b.fn(this.mmlToken(i.mi(n[1]).With(q)));
        } else {
          o = b.fn(i.TeXAtom(d.Parse(m, this.stack.env).mml()).With(q));
        }
      } else {
        o = i.TeXAtom(this.ParseArg(p)).With(q);
      }
      this.Push(o);
    },
    MmlToken: function(o) {
      var p = this.GetArgument(o),
        m = this.GetBrackets(o, "").replace(/^\s+/, ""),
        s = this.GetArgument(o),
        r = { attrNames: [] },
        n;
      if (!i[p] || !i[p].prototype.isToken) {
        d.Error(["NotMathMLToken", "%1 is not a token element", p]);
      }
      while (m !== "") {
        n = m.match(/^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i);
        if (!n) {
          d.Error(["InvalidMathMLAttr", "Invalid MathML attribute: %1", m]);
        }
        if (
          i[p].prototype.defaults[n[1]] == null &&
          !this.MmlTokenAllow[n[1]]
        ) {
          d.Error([
            "UnknownAttrForElement",
            "%1 is not a recognized attribute for %2",
            n[1],
            p
          ]);
        }
        var q = this.MmlFilterAttribute(
          n[1],
          n[2].replace(/^(['"])(.*)\1$/, "$2")
        );
        if (q) {
          if (q.toLowerCase() === "true") {
            q = true;
          } else {
            if (q.toLowerCase() === "false") {
              q = false;
            }
          }
          r[n[1]] = q;
          r.attrNames.push(n[1]);
        }
        m = m.substr(n[0].length);
      }
      this.Push(this.mmlToken(i[p](s).With(r)));
    },
    MmlFilterAttribute: function(m, n) {
      return n;
    },
    MmlTokenAllow: {
      fontfamily: 1,
      fontsize: 1,
      fontweight: 1,
      fontstyle: 1,
      color: 1,
      background: 1,
      id: 1,
      class: 1,
      href: 1,
      style: 1
    },
    Strut: function(m) {
      this.Push(
        i.mpadded(i.mrow()).With({ height: "8.6pt", depth: "3pt", width: 0 })
      );
    },
    Phantom: function(n, m, o) {
      var p = i.mphantom(this.ParseArg(n));
      if (m || o) {
        p = i.mpadded(p);
        if (o) {
          p.height = p.depth = 0;
        }
        if (m) {
          p.width = 0;
        }
      }
      this.Push(i.TeXAtom(p));
    },
    Smash: function(o) {
      var n = this.trimSpaces(this.GetBrackets(o, ""));
      var m = i.mpadded(this.ParseArg(o));
      switch (n) {
        case "b":
          m.depth = 0;
          break;
        case "t":
          m.height = 0;
          break;
        default:
          m.height = m.depth = 0;
      }
      this.Push(i.TeXAtom(m));
    },
    Lap: function(n) {
      var m = i.mpadded(this.ParseArg(n)).With({ width: 0 });
      if (n === "\\llap") {
        m.lspace = "-1width";
      }
      this.Push(i.TeXAtom(m));
    },
    RaiseLower: function(m) {
      var n = this.GetDimen(m);
      var o = b.position().With({ name: m, move: "vertical" });
      if (n.charAt(0) === "-") {
        n = n.slice(1);
        m = { raise: "\\lower", lower: "\\raise" }[m.substr(1)];
      }
      if (m === "\\lower") {
        o.dh = "-" + n;
        o.dd = "+" + n;
      } else {
        o.dh = "+" + n;
        o.dd = "-" + n;
      }
      this.Push(o);
    },
    MoveLeftRight: function(m) {
      var p = this.GetDimen(m);
      var o = p.charAt(0) === "-" ? p.slice(1) : "-" + p;
      if (m === "\\moveleft") {
        var n = p;
        p = o;
        o = n;
      }
      this.Push(
        b
          .position()
          .With({
            name: m,
            move: "horizontal",
            left: i.mspace().With({ width: p, mathsize: i.SIZE.NORMAL }),
            right: i.mspace().With({ width: o, mathsize: i.SIZE.NORMAL })
          })
      );
    },
    Hskip: function(m) {
      this.Push(
        i.mspace().With({ width: this.GetDimen(m), mathsize: i.SIZE.NORMAL })
      );
    },
    Rule: function(n, p) {
      var m = this.GetDimen(n),
        o = this.GetDimen(n),
        r = this.GetDimen(n);
      var q = { width: m, height: o, depth: r };
      if (p !== "blank") {
        q.mathbackground = this.stack.env.color || "black";
      }
      this.Push(i.mspace().With(q));
    },
    rule: function(p) {
      var n = this.GetBrackets(p),
        m = this.GetDimen(p),
        q = this.GetDimen(p);
      var o = i
        .mspace()
        .With({
          width: m,
          height: q,
          mathbackground: this.stack.env.color || "black"
        });
      if (n) {
        o = i.mpadded(o).With({ voffset: n });
        if (n.match(/^\-/)) {
          o.height = n;
          o.depth = "+" + n.substr(1);
        } else {
          o.height = "+" + n;
        }
      }
      this.Push(o);
    },
    MakeBig: function(m, p, n) {
      n *= g.p_height;
      n = String(n).replace(/(\.\d\d\d).+/, "$1") + "em";
      var o = this.GetDelimiter(m, true);
      this.Push(
        i
          .mstyle(
            i
              .TeXAtom(
                i
                  .mo(o)
                  .With({
                    minsize: n,
                    maxsize: n,
                    fence: true,
                    stretchy: true,
                    symmetric: true
                  })
              )
              .With({ texClass: p })
          )
          .With({ scriptlevel: 0 })
      );
    },
    BuildRel: function(m) {
      var n = this.ParseUpTo(m, "\\over");
      var o = this.ParseArg(m);
      this.Push(
        i.TeXAtom(i.munderover(o, null, n)).With({ texClass: i.TEXCLASS.REL })
      );
    },
    HBox: function(m, n) {
      this.Push.apply(this, this.InternalMath(this.GetArgument(m), n));
    },
    FBox: function(m) {
      this.Push(
        i.menclose
          .apply(i, this.InternalMath(this.GetArgument(m)))
          .With({ notation: "box" })
      );
    },
    Not: function(m) {
      this.Push(b.not());
    },
    Dots: function(m) {
      this.Push(
        b
          .dots()
          .With({
            ldots: this.mmlToken(
              i.mo(i.entity("#x2026")).With({ stretchy: false })
            ),
            cdots: this.mmlToken(
              i.mo(i.entity("#x22EF")).With({ stretchy: false })
            )
          })
      );
    },
    Require: function(m) {
      var n = this.GetArgument(m)
        .replace(/.*\//, "")
        .replace(/[^a-z0-9_.-]/gi, "");
      this.Extension(null, n);
    },
    Extension: function(m, n, o) {
      if (m && !typeof m === "string") {
        m = m.name;
      }
      n = d.extensionDir + "/" + n;
      if (!n.match(/\.js$/)) {
        n += ".js";
      }
      if (!j.loaded[j.fileURL(n)]) {
        if (m != null) {
          delete g[o || "macros"][m.replace(/^\\/, "")];
        }
        c.RestartAfter(j.Require(n));
      }
    },
    Macro: function(o, r, q, s) {
      if (q) {
        var n = [];
        if (s != null) {
          var m = this.GetBrackets(o);
          n.push(m == null ? s : m);
        }
        for (var p = n.length; p < q; p++) {
          n.push(this.GetArgument(o));
        }
        r = this.SubstituteArgs(n, r);
      }
      this.string = this.AddArgs(r, this.string.slice(this.i));
      this.i = 0;
      if (++this.macroCount > d.config.MAXMACROS) {
        d.Error([
          "MaxMacroSub1",
          "MathJax maximum macro substitution count exceeded; is there a recursive macro call?"
        ]);
      }
    },
    Matrix: function(n, p, v, r, u, o, m, w, t) {
      var s = this.GetNext();
      if (s === "") {
        d.Error(["MissingArgFor", "Missing argument for %1", n]);
      }
      if (s === "{") {
        this.i++;
      } else {
        this.string = s + "}" + this.string.slice(this.i + 1);
        this.i = 0;
      }
      var q = b
        .array()
        .With({
          requireClose: true,
          arraydef: { rowspacing: o || "4pt", columnspacing: u || "1em" }
        });
      if (w) {
        q.isCases = true;
      }
      if (t) {
        q.isNumbered = true;
        q.arraydef.side = t;
      }
      if (p || v) {
        q.open = p;
        q.close = v;
      }
      if (m === "D") {
        q.arraydef.displaystyle = true;
      }
      if (r != null) {
        q.arraydef.columnalign = r;
      }
      this.Push(q);
    },
    Entry: function(p) {
      this.Push(b.cell().With({ isEntry: true, name: p }));
      if (this.stack.Top().isCases) {
        var o = this.string;
        var t = 0,
          s = -1,
          q = this.i,
          n = o.length;
        while (q < n) {
          var u = o.charAt(q);
          if (u === "{") {
            t++;
            q++;
          } else {
            if (u === "}") {
              if (t === 0) {
                n = 0;
              } else {
                t--;
                if (t === 0 && s < 0) {
                  s = q - this.i;
                }
                q++;
              }
            } else {
              if (u === "&" && t === 0) {
                d.Error([
                  "ExtraAlignTab",
                  "Extra alignment tab in \\cases text"
                ]);
              } else {
                if (u === "\\") {
                  if (o.substr(q).match(/^((\\cr)[^a-zA-Z]|\\\\)/)) {
                    n = 0;
                  } else {
                    q += 2;
                  }
                } else {
                  q++;
                }
              }
            }
          }
        }
        var r = o.substr(this.i, q - this.i);
        if (
          !r.match(/^\s*\\text[^a-zA-Z]/) ||
          s !== r.replace(/\s+$/, "").length - 1
        ) {
          this.Push.apply(this, this.InternalMath(r, 0));
          this.i = q;
        }
      }
    },
    Cr: function(m) {
      this.Push(b.cell().With({ isCR: true, name: m }));
    },
    CrLaTeX: function(m) {
      var q;
      if (this.string.charAt(this.i) === "[") {
        q = this.GetBrackets(m, "")
          .replace(/ /g, "")
          .replace(/,/, ".");
        if (q && !this.matchDimen(q)) {
          d.Error([
            "BracketMustBeDimension",
            "Bracket argument to %1 must be a dimension",
            m
          ]);
        }
      }
      this.Push(b.cell().With({ isCR: true, name: m, linebreak: true }));
      var p = this.stack.Top();
      if (p.isa(b.array)) {
        if (q && p.arraydef.rowspacing) {
          var o = p.arraydef.rowspacing.split(/ /);
          if (!p.rowspacing) {
            p.rowspacing = this.dimen2em(o[0]);
          }
          while (o.length < p.table.length) {
            o.push(this.Em(p.rowspacing));
          }
          o[p.table.length - 1] = this.Em(
            Math.max(0, p.rowspacing + this.dimen2em(q))
          );
          p.arraydef.rowspacing = o.join(" ");
        }
      } else {
        if (q) {
          this.Push(i.mspace().With({ depth: q }));
        }
        this.Push(i.mspace().With({ linebreak: i.LINEBREAK.NEWLINE }));
      }
    },
    emPerInch: 7.2,
    pxPerInch: 72,
    matchDimen: function(m) {
      return m.match(
        /^(-?(?:\.\d+|\d+(?:\.\d*)?))(px|pt|em|ex|mu|pc|in|mm|cm)$/
      );
    },
    dimen2em: function(q) {
      var o = this.matchDimen(q);
      var n = parseFloat(o[1] || "1"),
        p = o[2];
      if (p === "em") {
        return n;
      }
      if (p === "ex") {
        return n * 0.43;
      }
      if (p === "pt") {
        return n / 10;
      }
      if (p === "pc") {
        return n * 1.2;
      }
      if (p === "px") {
        return (n * this.emPerInch) / this.pxPerInch;
      }
      if (p === "in") {
        return n * this.emPerInch;
      }
      if (p === "cm") {
        return (n * this.emPerInch) / 2.54;
      }
      if (p === "mm") {
        return (n * this.emPerInch) / 25.4;
      }
      if (p === "mu") {
        return n / 18;
      }
      return 0;
    },
    Em: function(n) {
      if (Math.abs(n) < 0.0006) {
        return "0em";
      }
      return n.toFixed(3).replace(/\.?0+$/, "") + "em";
    },
    HLine: function(n, o) {
      if (o == null) {
        o = "solid";
      }
      var p = this.stack.Top();
      if (!p.isa(b.array) || p.data.length) {
        d.Error(["Misplaced", "Misplaced %1", n]);
      }
      if (p.table.length == 0) {
        p.frame.push("top");
      } else {
        var m = p.arraydef.rowlines ? p.arraydef.rowlines.split(/ /) : [];
        while (m.length < p.table.length) {
          m.push("none");
        }
        m[p.table.length - 1] = o;
        p.arraydef.rowlines = m.join(" ");
      }
    },
    HFill: function(m) {
      var n = this.stack.Top();
      if (n.isa(b.array)) {
        n.hfill.push(n.data.length);
      } else {
        d.Error(["UnsupportedHFill", "Unsupported use of %1", m]);
      }
    },
    BeginEnd: function(o) {
      var p = this.GetArgument(o),
        r = false;
      if (p.match(/^\\end\\/)) {
        r = true;
        p = p.substr(5);
      }
      if (p.match(/\\/i)) {
        d.Error(["InvalidEnv", "Invalid environment name '%1'", p]);
      }
      var q = this.envFindName(p);
      if (!q) {
        d.Error(["UnknownEnv", "Unknown environment '%1'", p]);
      }
      if (!f(q)) {
        q = [q];
      }
      var m = f(q[1]) ? q[1][0] : q[1];
      var n = b.begin().With({ name: p, end: m, parse: this });
      if (o === "\\end") {
        if (!r && f(q[1]) && this[q[1][1]]) {
          n = this[q[1][1]].apply(this, [n].concat(q.slice(2)));
        } else {
          n = b.end().With({ name: p });
        }
      } else {
        if (++this.macroCount > d.config.MAXMACROS) {
          d.Error([
            "MaxMacroSub2",
            "MathJax maximum substitution count exceeded; is there a recursive latex environment?"
          ]);
        }
        if (q[0] && this[q[0]]) {
          n = this[q[0]].apply(this, [n].concat(q.slice(2)));
        }
      }
      this.Push(n);
    },
    envFindName: function(m) {
      return g.environment.hasOwnProperty(m) ? g.environment[m] : null;
    },
    Equation: function(m, n) {
      return n;
    },
    ExtensionEnv: function(n, m) {
      this.Extension(n.name, m, "environment");
    },
    Array: function(n, p, u, s, t, o, m, q) {
      if (!s) {
        s = this.GetArgument("\\begin{" + n.name + "}");
      }
      var v = ("c" + s).replace(/[^clr|:]/g, "").replace(/[^|:]([|:])+/g, "$1");
      s = s
        .replace(/[^clr]/g, "")
        .split("")
        .join(" ");
      s = s
        .replace(/l/g, "left")
        .replace(/r/g, "right")
        .replace(/c/g, "center");
      var r = b
        .array()
        .With({
          arraydef: {
            columnalign: s,
            columnspacing: t || "1em",
            rowspacing: o || "4pt"
          }
        });
      if (v.match(/[|:]/)) {
        if (v.charAt(0).match(/[|:]/)) {
          r.frame.push("left");
          r.frame.dashed = v.charAt(0) === ":";
        }
        if (v.charAt(v.length - 1).match(/[|:]/)) {
          r.frame.push("right");
        }
        v = v.substr(1, v.length - 2);
        r.arraydef.columnlines = v
          .split("")
          .join(" ")
          .replace(/[^|: ]/g, "none")
          .replace(/\|/g, "solid")
          .replace(/:/g, "dashed");
      }
      if (p) {
        r.open = this.convertDelimiter(p);
      }
      if (u) {
        r.close = this.convertDelimiter(u);
      }
      if (m === "D") {
        r.arraydef.displaystyle = true;
      } else {
        if (m) {
          r.arraydef.displaystyle = false;
        }
      }
      if (m === "S") {
        r.arraydef.scriptlevel = 1;
      }
      if (q) {
        r.arraydef.useHeight = false;
      }
      this.Push(n);
      return r;
    },
    AlignedArray: function(m) {
      var n = this.GetBrackets("\\begin{" + m.name + "}");
      return this.setArrayAlign(this.Array.apply(this, arguments), n);
    },
    setArrayAlign: function(n, m) {
      m = this.trimSpaces(m || "");
      if (m === "t") {
        n.arraydef.align = "baseline 1";
      } else {
        if (m === "b") {
          n.arraydef.align = "baseline -1";
        } else {
          if (m === "c") {
            n.arraydef.align = "center";
          } else {
            if (m) {
              n.arraydef.align = m;
            }
          }
        }
      }
      return n;
    },
    convertDelimiter: function(m) {
      if (m) {
        m = g.delimiter.hasOwnProperty(m) ? g.delimiter[m] : null;
      }
      if (m == null) {
        return null;
      }
      if (f(m)) {
        m = m[0];
      }
      if (m.length === 4) {
        m = String.fromCharCode(parseInt(m, 16));
      }
      return m;
    },
    trimSpaces: function(n) {
      if (typeof n != "string") {
        return n;
      }
      var m = n.replace(/^\s+|\s+$/g, "");
      if (m.match(/\\$/) && n.match(/ $/)) {
        m += " ";
      }
      return m;
    },
    nextIsSpace: function() {
      return this.string.charAt(this.i).match(/\s/);
    },
    GetNext: function() {
      while (this.nextIsSpace()) {
        this.i++;
      }
      return this.string.charAt(this.i);
    },
    GetCS: function() {
      var m = this.string.slice(this.i).match(/^([a-z]+|.) ?/i);
      if (m) {
        this.i += m[1].length;
        return m[1];
      } else {
        this.i++;
        return " ";
      }
    },
    GetArgument: function(n, o) {
      switch (this.GetNext()) {
        case "":
          if (!o) {
            d.Error(["MissingArgFor", "Missing argument for %1", n]);
          }
          return null;
        case "}":
          if (!o) {
            d.Error([
              "ExtraCloseMissingOpen",
              "Extra close brace or missing open brace"
            ]);
          }
          return null;
        case "\\":
          this.i++;
          return "\\" + this.GetCS();
        case "{":
          var m = ++this.i,
            p = 1;
          while (this.i < this.string.length) {
            switch (this.string.charAt(this.i++)) {
              case "\\":
                this.i++;
                break;
              case "{":
                p++;
                break;
              case "}":
                if (--p == 0) {
                  return this.string.slice(m, this.i - 1);
                }
                break;
            }
          }
          d.Error(["MissingCloseBrace", "Missing close brace"]);
          break;
      }
      return this.string.charAt(this.i++);
    },
    GetBrackets: function(n, p) {
      if (this.GetNext() != "[") {
        return p;
      }
      var m = ++this.i,
        o = 0;
      while (this.i < this.string.length) {
        switch (this.string.charAt(this.i++)) {
          case "{":
            o++;
            break;
          case "\\":
            this.i++;
            break;
          case "}":
            if (o-- <= 0) {
              d.Error([
                "ExtraCloseLooking",
                "Extra close brace while looking for %1",
                "']'"
              ]);
            }
            break;
          case "]":
            if (o == 0) {
              return this.string.slice(m, this.i - 1);
            }
            break;
        }
      }
      d.Error([
        "MissingCloseBracket",
        "Couldn't find closing ']' for argument to %1",
        n
      ]);
    },
    GetDelimiter: function(m, n) {
      while (this.nextIsSpace()) {
        this.i++;
      }
      var o = this.string.charAt(this.i);
      this.i++;
      if (this.i <= this.string.length) {
        if (o == "\\") {
          o += this.GetCS(m);
        } else {
          if (o === "{" && n) {
            this.i--;
            o = this.GetArgument(m)
              .replace(/^\s+/, "")
              .replace(/\s+$/, "");
          }
        }
        if (g.delimiter.hasOwnProperty(o)) {
          return this.convertDelimiter(o);
        }
      }
      d.Error([
        "MissingOrUnrecognizedDelim",
        "Missing or unrecognized delimiter for %1",
        m
      ]);
    },
    GetDimen: function(n) {
      var o;
      if (this.nextIsSpace()) {
        this.i++;
      }
      if (this.string.charAt(this.i) == "{") {
        o = this.GetArgument(n);
        if (
          o.match(
            /^\s*([-+]?([.,]\d+|\d+([.,]\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)\s*$/
          )
        ) {
          return o.replace(/ /g, "").replace(/,/, ".");
        }
      } else {
        o = this.string.slice(this.i);
        var m = o.match(
          /^\s*(([-+]?([.,]\d+|\d+([.,]\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)) ?/
        );
        if (m) {
          this.i += m[0].length;
          return m[1].replace(/ /g, "").replace(/,/, ".");
        }
      }
      d.Error([
        "MissingDimOrUnits",
        "Missing dimension or its units for %1",
        n
      ]);
    },
    GetUpTo: function(o, p) {
      while (this.nextIsSpace()) {
        this.i++;
      }
      var n = this.i,
        m,
        r,
        q = 0;
      while (this.i < this.string.length) {
        m = this.i;
        r = this.string.charAt(this.i++);
        switch (r) {
          case "\\":
            r += this.GetCS();
            break;
          case "{":
            q++;
            break;
          case "}":
            if (q == 0) {
              d.Error([
                "ExtraCloseLooking",
                "Extra close brace while looking for %1",
                p
              ]);
            }
            q--;
            break;
        }
        if (q == 0 && r == p) {
          return this.string.slice(n, m);
        }
      }
      d.Error(["TokenNotFoundForCommand", "Couldn't find %1 for %2", p, o]);
    },
    ParseArg: function(m) {
      return d.Parse(this.GetArgument(m), this.stack.env).mml();
    },
    ParseUpTo: function(m, n) {
      return d.Parse(this.GetUpTo(m, n), this.stack.env).mml();
    },
    InternalMath: function(v, m) {
      var o = this.stack.env.font ? { mathvariant: this.stack.env.font } : {};
      var n = [],
        r = 0,
        q = 0,
        u,
        s = "",
        p = 0;
      if (v.match(/\\?[${}\\]|\\\(|\\(eq)?ref\s*\{/)) {
        while (r < v.length) {
          u = v.charAt(r++);
          if (u === "$") {
            if (s === "$" && p === 0) {
              n.push(i.TeXAtom(d.Parse(v.slice(q, r - 1), {}).mml()));
              s = "";
              q = r;
            } else {
              if (s === "") {
                if (q < r - 1) {
                  n.push(this.InternalText(v.slice(q, r - 1), o));
                }
                s = "$";
                q = r;
              }
            }
          } else {
            if (u === "{" && s !== "") {
              p++;
            } else {
              if (u === "}") {
                if (s === "}" && p === 0) {
                  n.push(
                    i.TeXAtom(
                      d
                        .Parse(v.slice(q, r), {})
                        .mml()
                        .With(o)
                    )
                  );
                  s = "";
                  q = r;
                } else {
                  if (s !== "") {
                    if (p) {
                      p--;
                    }
                  }
                }
              } else {
                if (u === "\\") {
                  if (s === "" && v.substr(r).match(/^(eq)?ref\s*\{/)) {
                    var t = RegExp["$&"].length;
                    if (q < r - 1) {
                      n.push(this.InternalText(v.slice(q, r - 1), o));
                    }
                    s = "}";
                    q = r - 1;
                    r += t;
                  } else {
                    u = v.charAt(r++);
                    if (u === "(" && s === "") {
                      if (q < r - 2) {
                        n.push(this.InternalText(v.slice(q, r - 2), o));
                      }
                      s = ")";
                      q = r;
                    } else {
                      if (u === ")" && s === ")" && p === 0) {
                        n.push(i.TeXAtom(d.Parse(v.slice(q, r - 2), {}).mml()));
                        s = "";
                        q = r;
                      } else {
                        if (u.match(/[${}\\]/) && s === "") {
                          r--;
                          v = v.substr(0, r - 1) + v.substr(r);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (s !== "") {
          d.Error(["MathNotTerminated", "Math not terminated in text box"]);
        }
      }
      if (q < v.length) {
        n.push(this.InternalText(v.slice(q), o));
      }
      if (m != null) {
        n = [
          i.mstyle.apply(i, n).With({ displaystyle: false, scriptlevel: m })
        ];
      } else {
        if (n.length > 1) {
          n = [i.mrow.apply(i, n)];
        }
      }
      return n;
    },
    InternalText: function(n, m) {
      n = n.replace(/^\s+/, h).replace(/\s+$/, h);
      return i.mtext(i.chars(n)).With(m);
    },
    setDef: function(m, n) {
      n.isUser = true;
      g.macros[m] = n;
    },
    setEnv: function(m, n) {
      n.isUser = true;
      g.environment[m] = n;
    },
    SubstituteArgs: function(n, m) {
      var q = "";
      var p = "";
      var r;
      var o = 0;
      while (o < m.length) {
        r = m.charAt(o++);
        if (r === "\\") {
          q += r + m.charAt(o++);
        } else {
          if (r === "#") {
            r = m.charAt(o++);
            if (r === "#") {
              q += r;
            } else {
              if (!r.match(/[1-9]/) || r > n.length) {
                d.Error([
                  "IllegalMacroParam",
                  "Illegal macro parameter reference"
                ]);
              }
              p = this.AddArgs(this.AddArgs(p, q), n[r - 1]);
              q = "";
            }
          } else {
            q += r;
          }
        }
      }
      return this.AddArgs(p, q);
    },
    AddArgs: function(n, m) {
      if (m.match(/^[a-z]/i) && n.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i)) {
        n += " ";
      }
      if (n.length + m.length > d.config.MAXBUFFER) {
        d.Error([
          "MaxBufferSize",
          "MathJax internal buffer size exceeded; is there a recursive macro call?"
        ]);
      }
      return n + m;
    }
  });
  d.Augment({
    Stack: e,
    Parse: a,
    Definitions: g,
    Startup: l,
    config: { MAXMACROS: 10000, MAXBUFFER: 5 * 1024 },
    sourceMenuTitle: ["TeXCommands", "TeX Commands"],
    annotationEncoding: "application/x-tex",
    prefilterHooks: MathJax.Callback.Hooks(true),
    postfilterHooks: MathJax.Callback.Hooks(true),
    Config: function() {
      this.SUPER(arguments).Config.apply(this, arguments);
      if (this.config.equationNumbers.autoNumber !== "none") {
        if (!this.config.extensions) {
          this.config.extensions = [];
        }
        this.config.extensions.push("AMSmath.js");
      }
    },
    Translate: function(m) {
      var n,
        o = false,
        q = MathJax.HTML.getScript(m);
      var s =
        m.type
          .replace(/\n/g, " ")
          .match(/(;|\s|\n)mode\s*=\s*display(;|\s|\n|$)/) != null;
      var r = { math: q, display: s, script: m };
      var t = this.prefilterHooks.Execute(r);
      if (t) {
        return t;
      }
      q = r.math;
      try {
        n = d.Parse(q).mml();
      } catch (p) {
        if (!p.texError) {
          throw p;
        }
        n = this.formatError(p, q, s, m);
        o = true;
      }
      if (n.isa(i.mtable) && n.displaystyle === "inherit") {
        n.displaystyle = s;
      }
      if (n.inferred) {
        n = i.apply(MathJax.ElementJax, n.data);
      } else {
        n = i(n);
      }
      if (s) {
        n.root.display = "block";
      }
      if (o) {
        n.texError = true;
      }
      r.math = n;
      return this.postfilterHooks.Execute(r) || r.math;
    },
    prefilterMath: function(n, o, m) {
      return n;
    },
    postfilterMath: function(n, o, m) {
      this.combineRelations(n.root);
      return n;
    },
    formatError: function(p, o, q, m) {
      var n = p.message.replace(/\n.*/, "");
      c.signal.Post(["TeX Jax - parse error", n, o, q, m]);
      return i.Error(n);
    },
    Error: function(m) {
      if (f(m)) {
        m = k.apply(k, m);
      }
      throw c.Insert(Error(m), { texError: true });
    },
    Macro: function(m, n, o) {
      g.macros[m] = ["Macro"].concat([].slice.call(arguments, 1));
      g.macros[m].isUser = true;
    },
    fenced: function(o, n, p) {
      var m = i.mrow().With({ open: o, close: p, texClass: i.TEXCLASS.INNER });
      m.Append(
        i
          .mo(o)
          .With({
            fence: true,
            stretchy: true,
            symmetric: true,
            texClass: i.TEXCLASS.OPEN
          })
      );
      if (n.type === "mrow" && n.inferred) {
        m.Append.apply(m, n.data);
      } else {
        m.Append(n);
      }
      m.Append(
        i
          .mo(p)
          .With({
            fence: true,
            stretchy: true,
            symmetric: true,
            texClass: i.TEXCLASS.CLOSE
          })
      );
      return m;
    },
    fixedFence: function(o, n, p) {
      var m = i.mrow().With({ open: o, close: p, texClass: i.TEXCLASS.ORD });
      if (o) {
        m.Append(this.mathPalette(o, "l"));
      }
      if (n.type === "mrow") {
        m.Append.apply(m, n.data);
      } else {
        m.Append(n);
      }
      if (p) {
        m.Append(this.mathPalette(p, "r"));
      }
      return m;
    },
    mathPalette: function(p, n) {
      if (p === "{" || p === "}") {
        p = "\\" + p;
      }
      var o = "{\\bigg" + n + " " + p + "}",
        m = "{\\big" + n + " " + p + "}";
      return d.Parse("\\mathchoice" + o + m + m + m, {}).mml();
    },
    combineRelations: function(q) {
      var r, n, p, o;
      for (r = 0, n = q.data.length; r < n; r++) {
        if (q.data[r]) {
          if (q.isa(i.mrow)) {
            while (
              r + 1 < n &&
              (p = q.data[r]) &&
              (o = q.data[r + 1]) &&
              p.isa(i.mo) &&
              o.isa(i.mo) &&
              p.Get("texClass") === i.TEXCLASS.REL &&
              o.Get("texClass") === i.TEXCLASS.REL
            ) {
              if (
                p.variantForm == o.variantForm &&
                p.Get("mathvariant") == o.Get("mathvariant") &&
                p.style == o.style &&
                p["class"] == o["class"] &&
                !p.id &&
                !o.id
              ) {
                p.Append.apply(p, o.data);
                q.data.splice(r + 1, 1);
                n--;
              } else {
                p.rspace = o.lspace = "0pt";
                r++;
              }
            }
          }
          if (!q.data[r].isToken) {
            this.combineRelations(q.data[r]);
          }
        }
      }
    }
  });
  d.prefilterHooks.Add(function(m) {
    m.math = d.prefilterMath(m.math, m.display, m.script);
  });
  d.postfilterHooks.Add(function(m) {
    m.math = d.postfilterMath(m.math, m.display, m.script);
  });
  d.loadComplete("jax.js");
})(MathJax.InputJax.TeX, MathJax.Hub, MathJax.Ajax);
MathJax.Extension["TeX/AMSmath"] = {
  version: "2.7.5",
  number: 0,
  startNumber: 0,
  IDs: {},
  eqIDs: {},
  labels: {},
  eqlabels: {},
  refs: []
};
MathJax.Hub.Register.StartupHook("TeX Jax Ready", function() {
  var b = MathJax.ElementJax.mml,
    h = MathJax.InputJax.TeX,
    g = MathJax.Extension["TeX/AMSmath"];
  var d = h.Definitions,
    f = h.Stack.Item,
    a = h.config.equationNumbers;
  var c = function(k) {
    var n = [];
    for (var l = 0, j = k.length; l < j; l++) {
      n[l] = h.Parse.prototype.Em(k[l]);
    }
    return n.join(" ");
  };
  var e =
    document.getElementsByTagName("base").length === 0
      ? ""
      : String(document.location).replace(/#.*$/, "");
  d.Add(
    {
      mathchar0mo: { iiiint: ["2A0C", { texClass: b.TEXCLASS.OP }] },
      macros: {
        mathring: ["Accent", "2DA"],
        nobreakspace: "Tilde",
        negmedspace: ["Spacer", b.LENGTH.NEGATIVEMEDIUMMATHSPACE],
        negthickspace: ["Spacer", b.LENGTH.NEGATIVETHICKMATHSPACE],
        idotsint: ["MultiIntegral", "\\int\\cdots\\int"],
        dddot: ["Accent", "20DB"],
        ddddot: ["Accent", "20DC"],
        sideset: [
          "Macro",
          "\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}",
          3
        ],
        boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1],
        tag: "HandleTag",
        notag: "HandleNoTag",
        label: "HandleLabel",
        ref: "HandleRef",
        eqref: ["HandleRef", true],
        substack: ["Macro", "\\begin{subarray}{c}#1\\end{subarray}", 1],
        injlim: ["NamedOp", "inj&thinsp;lim"],
        projlim: ["NamedOp", "proj&thinsp;lim"],
        varliminf: ["Macro", "\\mathop{\\underline{\\mmlToken{mi}{lim}}}"],
        varlimsup: ["Macro", "\\mathop{\\overline{\\mmlToken{mi}{lim}}}"],
        varinjlim: [
          "Macro",
          "\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}"
        ],
        varprojlim: [
          "Macro",
          "\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}"
        ],
        DeclareMathOperator: "HandleDeclareOp",
        operatorname: "HandleOperatorName",
        SkipLimits: "SkipLimits",
        genfrac: "Genfrac",
        frac: ["Genfrac", "", "", "", ""],
        tfrac: ["Genfrac", "", "", "", 1],
        dfrac: ["Genfrac", "", "", "", 0],
        binom: ["Genfrac", "(", ")", "0", ""],
        tbinom: ["Genfrac", "(", ")", "0", 1],
        dbinom: ["Genfrac", "(", ")", "0", 0],
        cfrac: "CFrac",
        shoveleft: ["HandleShove", b.ALIGN.LEFT],
        shoveright: ["HandleShove", b.ALIGN.RIGHT],
        xrightarrow: ["xArrow", 8594, 5, 6],
        xleftarrow: ["xArrow", 8592, 7, 3]
      },
      environment: {
        align: [
          "AMSarray",
          null,
          true,
          true,
          "rlrlrlrlrlrl",
          c([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0])
        ],
        "align*": [
          "AMSarray",
          null,
          false,
          true,
          "rlrlrlrlrlrl",
          c([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0])
        ],
        multline: ["Multline", null, true],
        "multline*": ["Multline", null, false],
        split: ["AMSarray", null, false, false, "rl", c([0])],
        gather: ["AMSarray", null, true, true, "c"],
        "gather*": ["AMSarray", null, false, true, "c"],
        alignat: ["AlignAt", null, true, true],
        "alignat*": ["AlignAt", null, false, true],
        alignedat: ["AlignAt", null, false, false],
        aligned: [
          "AlignedAMSArray",
          null,
          null,
          null,
          "rlrlrlrlrlrl",
          c([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]),
          ".5em",
          "D"
        ],
        gathered: ["AlignedAMSArray", null, null, null, "c", null, ".5em", "D"],
        subarray: ["Array", null, null, null, null, c([0]), "0.1em", "S", 1],
        smallmatrix: [
          "Array",
          null,
          null,
          null,
          "c",
          c([1 / 3]),
          ".2em",
          "S",
          1
        ],
        equation: ["EquationBegin", "Equation", true],
        "equation*": ["EquationBegin", "EquationStar", false],
        eqnarray: [
          "AMSarray",
          null,
          true,
          true,
          "rcl",
          "0 " + b.LENGTH.THICKMATHSPACE,
          ".5em"
        ],
        "eqnarray*": [
          "AMSarray",
          null,
          false,
          true,
          "rcl",
          "0 " + b.LENGTH.THICKMATHSPACE,
          ".5em"
        ]
      },
      delimiter: {
        "\\lvert": ["007C", { texClass: b.TEXCLASS.OPEN }],
        "\\rvert": ["007C", { texClass: b.TEXCLASS.CLOSE }],
        "\\lVert": ["2016", { texClass: b.TEXCLASS.OPEN }],
        "\\rVert": ["2016", { texClass: b.TEXCLASS.CLOSE }]
      }
    },
    null,
    true
  );
  h.Parse.Augment({
    HandleTag: function(k) {
      var m = this.GetStar();
      var j = this.trimSpaces(this.GetArgument(k)),
        i = j;
      if (!m) {
        j = a.formatTag(j);
      }
      var l = this.stack.global;
      l.tagID = i;
      if (l.notags) {
        h.Error([
          "CommandNotAllowedInEnv",
          "%1 not allowed in %2 environment",
          k,
          l.notags
        ]);
      }
      if (l.tag) {
        h.Error(["MultipleCommand", "Multiple %1", k]);
      }
      l.tag = b.mtd.apply(b, this.InternalMath(j)).With({ id: a.formatID(i) });
    },
    HandleNoTag: function(i) {
      if (this.stack.global.tag) {
        delete this.stack.global.tag;
      }
      this.stack.global.notag = true;
    },
    HandleLabel: function(j) {
      var k = this.stack.global,
        i = this.GetArgument(j);
      if (i === "") {
        return;
      }
      if (!g.refUpdate) {
        if (k.label) {
          h.Error(["MultipleCommand", "Multiple %1", j]);
        }
        k.label = i;
        if (g.labels[i] || g.eqlabels[i]) {
          h.Error(["MultipleLabel", "Label '%1' multiply defined", i]);
        }
        g.eqlabels[i] = { tag: "???", id: "" };
      }
    },
    HandleRef: function(k, m) {
      var j = this.GetArgument(k);
      var l = g.labels[j] || g.eqlabels[j];
      if (!l) {
        l = { tag: "???", id: "" };
        g.badref = !g.refUpdate;
      }
      var i = l.tag;
      if (m) {
        i = a.formatTag(i);
      }
      this.Push(
        b.mrow
          .apply(b, this.InternalMath(i))
          .With({ href: a.formatURL(l.id, e), class: "MathJax_ref" })
      );
    },
    HandleDeclareOp: function(j) {
      var i = this.GetStar() ? "" : "\\nolimits\\SkipLimits";
      var k = this.trimSpaces(this.GetArgument(j));
      if (k.charAt(0) == "\\") {
        k = k.substr(1);
      }
      var l = this.GetArgument(j);
      l = l.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}");
      this.setDef(k, ["Macro", "\\mathop{\\rm " + l + "}" + i]);
    },
    HandleOperatorName: function(j) {
      var i = this.GetStar() ? "" : "\\nolimits\\SkipLimits";
      var k = this.trimSpaces(this.GetArgument(j));
      k = k.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}");
      this.string =
        "\\mathop{\\rm " + k + "}" + i + " " + this.string.slice(this.i);
      this.i = 0;
    },
    SkipLimits: function(j) {
      var l = this.GetNext(),
        k = this.i;
      if (l === "\\" && ++this.i && this.GetCS() !== "limits") {
        this.i = k;
      }
    },
    HandleShove: function(j, i) {
      var k = this.stack.Top();
      if (k.type !== "multline") {
        h.Error([
          "CommandInMultline",
          "%1 can only appear within the multline environment",
          j
        ]);
      }
      if (k.data.length) {
        h.Error([
          "CommandAtTheBeginingOfLine",
          "%1 must come at the beginning of the line",
          j
        ]);
      }
      k.data.shove = i;
    },
    CFrac: function(l) {
      var i = this.trimSpaces(this.GetBrackets(l, "")),
        k = this.GetArgument(l),
        m = this.GetArgument(l);
      var j = b.mfrac(
        h.Parse("\\strut\\textstyle{" + k + "}", this.stack.env).mml(),
        h.Parse("\\strut\\textstyle{" + m + "}", this.stack.env).mml()
      );
      i = { l: b.ALIGN.LEFT, r: b.ALIGN.RIGHT, "": "" }[i];
      if (i == null) {
        h.Error(["IllegalAlign", "Illegal alignment specified in %1", l]);
      }
      if (i) {
        j.numalign = j.denomalign = i;
      }
      this.Push(j);
    },
    Genfrac: function(j, l, q, n, i) {
      if (l == null) {
        l = this.GetDelimiterArg(j);
      }
      if (q == null) {
        q = this.GetDelimiterArg(j);
      }
      if (n == null) {
        n = this.GetArgument(j);
      }
      if (i == null) {
        i = this.trimSpaces(this.GetArgument(j));
      }
      var m = this.ParseArg(j);
      var p = this.ParseArg(j);
      var k = b.mfrac(m, p);
      if (n !== "") {
        k.linethickness = n;
      }
      if (l || q) {
        k = h.fixedFence(l, k.With({ texWithDelims: true }), q);
      }
      if (i !== "") {
        var o = ["D", "T", "S", "SS"][i];
        if (o == null) {
          h.Error(["BadMathStyleFor", "Bad math style for %1", j]);
        }
        k = b.mstyle(k);
        if (o === "D") {
          k.displaystyle = true;
          k.scriptlevel = 0;
        } else {
          k.displaystyle = false;
          k.scriptlevel = i - 1;
        }
      }
      this.Push(k);
    },
    Multline: function(j, i) {
      this.Push(j);
      this.checkEqnEnv();
      return f
        .multline(i, this.stack)
        .With({
          arraydef: {
            displaystyle: true,
            rowspacing: ".5em",
            width: h.config.MultLineWidth,
            columnwidth: "100%",
            side: h.config.TagSide,
            minlabelspacing: h.config.TagIndent
          }
        });
    },
    AMSarray: function(k, j, i, m, l) {
      this.Push(k);
      if (i) {
        this.checkEqnEnv();
      }
      m = m
        .replace(/[^clr]/g, "")
        .split("")
        .join(" ");
      m = m
        .replace(/l/g, "left")
        .replace(/r/g, "right")
        .replace(/c/g, "center");
      return f
        .AMSarray(k.name, j, i, this.stack)
        .With({
          arraydef: {
            displaystyle: true,
            rowspacing: ".5em",
            columnalign: m,
            columnspacing: l || "1em",
            rowspacing: "3pt",
            side: h.config.TagSide,
            minlabelspacing: h.config.TagIndent
          }
        });
    },
    AlignedAMSArray: function(i) {
      var j = this.GetBrackets("\\begin{" + i.name + "}");
      return this.setArrayAlign(this.AMSarray.apply(this, arguments), j);
    },
    AlignAt: function(l, j, i) {
      var q,
        k,
        p = "",
        o = [];
      if (!i) {
        k = this.GetBrackets("\\begin{" + l.name + "}");
      }
      q = this.GetArgument("\\begin{" + l.name + "}");
      if (q.match(/[^0-9]/)) {
        h.Error([
          "PositiveIntegerArg",
          "Argument to %1 must me a positive integer",
          "\\begin{" + l.name + "}"
        ]);
      }
      while (q > 0) {
        p += "rl";
        o.push("0em 0em");
        q--;
      }
      o = o.join(" ");
      if (i) {
        return this.AMSarray(l, j, i, p, o);
      }
      var m = this.AMSarray(l, j, i, p, o);
      return this.setArrayAlign(m, k);
    },
    EquationBegin: function(i, j) {
      this.checkEqnEnv();
      this.stack.global.forcetag = j && a.autoNumber !== "none";
      return i;
    },
    EquationStar: function(i, j) {
      this.stack.global.tagged = true;
      return j;
    },
    checkEqnEnv: function() {
      if (this.stack.global.eqnenv) {
        h.Error([
          "ErroneousNestingEq",
          "Erroneous nesting of equation structures"
        ]);
      }
      this.stack.global.eqnenv = true;
    },
    MultiIntegral: function(j, m) {
      var l = this.GetNext();
      if (l === "\\") {
        var k = this.i;
        l = this.GetArgument(j);
        this.i = k;
        if (l === "\\limits") {
          if (j === "\\idotsint") {
            m = "\\!\\!\\mathop{\\,\\," + m + "}";
          } else {
            m = "\\!\\!\\!\\mathop{\\,\\,\\," + m + "}";
          }
        }
      }
      this.string = m + " " + this.string.slice(this.i);
      this.i = 0;
    },
    xArrow: function(k, o, n, i) {
      var m = { width: "+" + (n + i) + "mu", lspace: n + "mu" };
      var p = this.GetBrackets(k),
        q = this.ParseArg(k);
      var s = b
        .mo(b.chars(String.fromCharCode(o)))
        .With({ stretchy: true, texClass: b.TEXCLASS.REL });
      var j = b.munderover(s);
      j.SetData(
        j.over,
        b
          .mpadded(q)
          .With(m)
          .With({ voffset: ".15em" })
      );
      if (p) {
        p = h.Parse(p, this.stack.env).mml();
        j.SetData(
          j.under,
          b
            .mpadded(p)
            .With(m)
            .With({ voffset: "-.24em" })
        );
      }
      this.Push(j.With({ subsupOK: true }));
    },
    GetDelimiterArg: function(i) {
      var j = this.trimSpaces(this.GetArgument(i));
      if (j == "") {
        return null;
      }
      if (j in d.delimiter) {
        return j;
      }
      h.Error([
        "MissingOrUnrecognizedDelim",
        "Missing or unrecognized delimiter for %1",
        i
      ]);
    },
    GetStar: function() {
      var i = this.GetNext() === "*";
      if (i) {
        this.i++;
      }
      return i;
    }
  });
  f.Augment({
    autoTag: function() {
      var j = this.global;
      if (!j.notag) {
        g.number++;
        j.tagID = a.formatNumber(g.number.toString());
        var i = h.Parse("\\text{" + a.formatTag(j.tagID) + "}", {}).mml();
        j.tag = b.mtd(i).With({ id: a.formatID(j.tagID) });
      }
    },
    getTag: function() {
      var m = this.global,
        k = m.tag;
      m.tagged = true;
      if (m.label) {
        if (a.useLabelIds) {
          k.id = a.formatID(m.label);
        }
        g.eqlabels[m.label] = { tag: m.tagID, id: k.id };
      }
      if (document.getElementById(k.id) || g.IDs[k.id] || g.eqIDs[k.id]) {
        var l = 0,
          j;
        do {
          l++;
          j = k.id + "_" + l;
        } while (document.getElementById(j) || g.IDs[j] || g.eqIDs[j]);
        k.id = j;
        if (m.label) {
          g.eqlabels[m.label].id = j;
        }
      }
      g.eqIDs[k.id] = 1;
      this.clearTag();
      return k;
    },
    clearTag: function() {
      var i = this.global;
      delete i.tag;
      delete i.tagID;
      delete i.label;
    },
    fixInitialMO: function(l) {
      for (var k = 0, j = l.length; k < j; k++) {
        if (
          l[k] &&
          (l[k].type !== "mspace" &&
            (l[k].type !== "texatom" ||
              (l[k].data[0] && l[k].data[0].data.length)))
        ) {
          if (l[k].isEmbellished()) {
            l.unshift(b.mi());
          }
          break;
        }
      }
    }
  });
  f.multline = f.array.Subclass({
    type: "multline",
    Init: function(j, i) {
      this.SUPER(arguments).Init.apply(this);
      this.numbered = j && a.autoNumber !== "none";
      this.save = { notag: i.global.notag };
      i.global.tagged = !j && !i.global.forcetag;
    },
    EndEntry: function() {
      if (this.table.length) {
        this.fixInitialMO(this.data);
      }
      var i = b.mtd.apply(b, this.data);
      if (this.data.shove) {
        i.columnalign = this.data.shove;
      }
      this.row.push(i);
      this.data = [];
    },
    EndRow: function() {
      if (this.row.length != 1) {
        h.Error([
          "MultlineRowsOneCol",
          "The rows within the %1 environment must have exactly one column",
          "multline"
        ]);
      }
      this.table.push(this.row);
      this.row = [];
    },
    EndTable: function() {
      this.SUPER(arguments).EndTable.call(this);
      if (this.table.length) {
        var k = this.table.length - 1,
          n,
          l = -1;
        if (!this.table[0][0].columnalign) {
          this.table[0][0].columnalign = b.ALIGN.LEFT;
        }
        if (!this.table[k][0].columnalign) {
          this.table[k][0].columnalign = b.ALIGN.RIGHT;
        }
        if (!this.global.tag && this.numbered) {
          this.autoTag();
        }
        if (this.global.tag && !this.global.notags) {
          l = this.arraydef.side === "left" ? 0 : this.table.length - 1;
          this.table[l] = [this.getTag()].concat(this.table[l]);
        }
        for (n = 0, k = this.table.length; n < k; n++) {
          var j = n === l ? b.mlabeledtr : b.mtr;
          this.table[n] = j.apply(b, this.table[n]);
        }
      }
      this.global.notag = this.save.notag;
    }
  });
  f.AMSarray = f.array.Subclass({
    type: "AMSarray",
    Init: function(l, k, j, i) {
      this.SUPER(arguments).Init.apply(this);
      this.numbered = k && a.autoNumber !== "none";
      this.save = { notags: i.global.notags, notag: i.global.notag };
      i.global.notags = j ? null : l;
      i.global.tagged = !k && !i.global.forcetag;
    },
    EndEntry: function() {
      if (this.row.length % 2 === 1) {
        this.fixInitialMO(this.data);
      }
      this.row.push(b.mtd.apply(b, this.data));
      this.data = [];
    },
    EndRow: function() {
      var i = b.mtr;
      if (!this.global.tag && this.numbered) {
        this.autoTag();
      }
      if (this.global.tag && !this.global.notags) {
        this.row = [this.getTag()].concat(this.row);
        i = b.mlabeledtr;
      } else {
        this.clearTag();
      }
      if (this.numbered) {
        delete this.global.notag;
      }
      this.table.push(i.apply(b, this.row));
      this.row = [];
    },
    EndTable: function() {
      this.SUPER(arguments).EndTable.call(this);
      this.global.notags = this.save.notags;
      this.global.notag = this.save.notag;
    }
  });
  f.start.Augment({
    oldCheckItem: f.start.prototype.checkItem,
    checkItem: function(k) {
      if (k.type === "stop") {
        var i = this.mmlData(),
          j = this.global;
        if (
          g.display &&
          !j.tag &&
          !j.tagged &&
          !j.isInner &&
          (a.autoNumber === "all" || j.forcetag)
        ) {
          this.autoTag();
        }
        if (j.tag) {
          var m = [this.getTag(), b.mtd(i)];
          var l = {
            side: h.config.TagSide,
            minlabelspacing: h.config.TagIndent,
            displaystyle: "inherit"
          };
          i = b.mtable(b.mlabeledtr.apply(b, m)).With(l);
        }
        return f.mml(i);
      }
      return this.oldCheckItem.call(this, k);
    }
  });
  h.prefilterHooks.Add(function(i) {
    g.display = i.display;
    g.number = g.startNumber;
    g.eqlabels = {};
    g.eqIDs = {};
    g.badref = false;
    if (g.refUpdate) {
      g.number = i.script.MathJax.startNumber;
    }
  });
  h.postfilterHooks.Add(function(i) {
    i.script.MathJax.startNumber = g.startNumber;
    g.startNumber = g.number;
    MathJax.Hub.Insert(g.IDs, g.eqIDs);
    MathJax.Hub.Insert(g.labels, g.eqlabels);
    if (g.badref && !i.math.texError) {
      g.refs.push(i.script);
    }
  }, 100);
  MathJax.Hub.Register.MessageHook("Begin Math Input", function() {
    g.refs = [];
    g.refUpdate = false;
  });
  MathJax.Hub.Register.MessageHook("End Math Input", function(l) {
    if (g.refs.length) {
      g.refUpdate = true;
      for (var k = 0, j = g.refs.length; k < j; k++) {
        g.refs[k].MathJax.state = MathJax.ElementJax.STATE.UPDATE;
      }
      return MathJax.Hub.processInput({
        scripts: g.refs,
        start: new Date().getTime(),
        i: 0,
        j: 0,
        jax: {},
        jaxIDs: []
      });
    }
    return null;
  });
  h.resetEquationNumbers = function(j, i) {
    g.startNumber = j || 0;
    if (!i) {
      g.labels = {};
      g.IDs = {};
    }
  };
  MathJax.Hub.Startup.signal.Post("TeX AMSmath Ready");
});
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSmath.js");
MathJax.Extension["TeX/AMSsymbols"] = { version: "2.7.5" };
MathJax.Hub.Register.StartupHook("TeX Jax Ready", function() {
  var a = MathJax.ElementJax.mml,
    b = MathJax.InputJax.TeX.Definitions;
  b.Add(
    {
      mathchar0mi: {
        digamma: "03DD",
        varkappa: "03F0",
        varGamma: ["0393", { mathvariant: a.VARIANT.ITALIC }],
        varDelta: ["0394", { mathvariant: a.VARIANT.ITALIC }],
        varTheta: ["0398", { mathvariant: a.VARIANT.ITALIC }],
        varLambda: ["039B", { mathvariant: a.VARIANT.ITALIC }],
        varXi: ["039E", { mathvariant: a.VARIANT.ITALIC }],
        varPi: ["03A0", { mathvariant: a.VARIANT.ITALIC }],
        varSigma: ["03A3", { mathvariant: a.VARIANT.ITALIC }],
        varUpsilon: ["03A5", { mathvariant: a.VARIANT.ITALIC }],
        varPhi: ["03A6", { mathvariant: a.VARIANT.ITALIC }],
        varPsi: ["03A8", { mathvariant: a.VARIANT.ITALIC }],
        varOmega: ["03A9", { mathvariant: a.VARIANT.ITALIC }],
        beth: "2136",
        gimel: "2137",
        daleth: "2138",
        backprime: ["2035", { variantForm: true }],
        hslash: "210F",
        varnothing: ["2205", { variantForm: true }],
        blacktriangle: "25B4",
        triangledown: ["25BD", { variantForm: true }],
        blacktriangledown: "25BE",
        square: "25FB",
        Box: "25FB",
        blacksquare: "25FC",
        lozenge: "25CA",
        Diamond: "25CA",
        blacklozenge: "29EB",
        circledS: ["24C8", { mathvariant: a.VARIANT.NORMAL }],
        bigstar: "2605",
        sphericalangle: "2222",
        measuredangle: "2221",
        nexists: "2204",
        complement: "2201",
        mho: "2127",
        eth: ["00F0", { mathvariant: a.VARIANT.NORMAL }],
        Finv: "2132",
        diagup: "2571",
        Game: "2141",
        diagdown: "2572",
        Bbbk: ["006B", { mathvariant: a.VARIANT.DOUBLESTRUCK }],
        yen: "00A5",
        circledR: "00AE",
        checkmark: "2713",
        maltese: "2720"
      },
      mathchar0mo: {
        dotplus: "2214",
        ltimes: "22C9",
        smallsetminus: "2216",
        rtimes: "22CA",
        Cap: "22D2",
        doublecap: "22D2",
        leftthreetimes: "22CB",
        Cup: "22D3",
        doublecup: "22D3",
        rightthreetimes: "22CC",
        barwedge: "22BC",
        curlywedge: "22CF",
        veebar: "22BB",
        curlyvee: "22CE",
        doublebarwedge: "2A5E",
        boxminus: "229F",
        circleddash: "229D",
        boxtimes: "22A0",
        circledast: "229B",
        boxdot: "22A1",
        circledcirc: "229A",
        boxplus: "229E",
        centerdot: ["22C5", { variantForm: true }],
        divideontimes: "22C7",
        intercal: "22BA",
        leqq: "2266",
        geqq: "2267",
        leqslant: "2A7D",
        geqslant: "2A7E",
        eqslantless: "2A95",
        eqslantgtr: "2A96",
        lesssim: "2272",
        gtrsim: "2273",
        lessapprox: "2A85",
        gtrapprox: "2A86",
        approxeq: "224A",
        lessdot: "22D6",
        gtrdot: "22D7",
        lll: "22D8",
        llless: "22D8",
        ggg: "22D9",
        gggtr: "22D9",
        lessgtr: "2276",
        gtrless: "2277",
        lesseqgtr: "22DA",
        gtreqless: "22DB",
        lesseqqgtr: "2A8B",
        gtreqqless: "2A8C",
        doteqdot: "2251",
        Doteq: "2251",
        eqcirc: "2256",
        risingdotseq: "2253",
        circeq: "2257",
        fallingdotseq: "2252",
        triangleq: "225C",
        backsim: "223D",
        thicksim: ["223C", { variantForm: true }],
        backsimeq: "22CD",
        thickapprox: ["2248", { variantForm: true }],
        subseteqq: "2AC5",
        supseteqq: "2AC6",
        Subset: "22D0",
        Supset: "22D1",
        sqsubset: "228F",
        sqsupset: "2290",
        preccurlyeq: "227C",
        succcurlyeq: "227D",
        curlyeqprec: "22DE",
        curlyeqsucc: "22DF",
        precsim: "227E",
        succsim: "227F",
        precapprox: "2AB7",
        succapprox: "2AB8",
        vartriangleleft: "22B2",
        lhd: "22B2",
        vartriangleright: "22B3",
        rhd: "22B3",
        trianglelefteq: "22B4",
        unlhd: "22B4",
        trianglerighteq: "22B5",
        unrhd: "22B5",
        vDash: "22A8",
        Vdash: "22A9",
        Vvdash: "22AA",
        smallsmile: ["2323", { variantForm: true }],
        shortmid: ["2223", { variantForm: true }],
        smallfrown: ["2322", { variantForm: true }],
        shortparallel: ["2225", { variantForm: true }],
        bumpeq: "224F",
        between: "226C",
        Bumpeq: "224E",
        pitchfork: "22D4",
        varpropto: "221D",
        backepsilon: "220D",
        blacktriangleleft: "25C2",
        blacktriangleright: "25B8",
        therefore: "2234",
        because: "2235",
        eqsim: "2242",
        vartriangle: ["25B3", { variantForm: true }],
        Join: "22C8",
        nless: "226E",
        ngtr: "226F",
        nleq: "2270",
        ngeq: "2271",
        nleqslant: ["2A87", { variantForm: true }],
        ngeqslant: ["2A88", { variantForm: true }],
        nleqq: ["2270", { variantForm: true }],
        ngeqq: ["2271", { variantForm: true }],
        lneq: "2A87",
        gneq: "2A88",
        lneqq: "2268",
        gneqq: "2269",
        lvertneqq: ["2268", { variantForm: true }],
        gvertneqq: ["2269", { variantForm: true }],
        lnsim: "22E6",
        gnsim: "22E7",
        lnapprox: "2A89",
        gnapprox: "2A8A",
        nprec: "2280",
        nsucc: "2281",
        npreceq: ["22E0", { variantForm: true }],
        nsucceq: ["22E1", { variantForm: true }],
        precneqq: "2AB5",
        succneqq: "2AB6",
        precnsim: "22E8",
        succnsim: "22E9",
        precnapprox: "2AB9",
        succnapprox: "2ABA",
        nsim: "2241",
        ncong: "2246",
        nshortmid: ["2224", { variantForm: true }],
        nshortparallel: ["2226", { variantForm: true }],
        nmid: "2224",
        nparallel: "2226",
        nvdash: "22AC",
        nvDash: "22AD",
        nVdash: "22AE",
        nVDash: "22AF",
        ntriangleleft: "22EA",
        ntriangleright: "22EB",
        ntrianglelefteq: "22EC",
        ntrianglerighteq: "22ED",
        nsubseteq: "2288",
        nsupseteq: "2289",
        nsubseteqq: ["2288", { variantForm: true }],
        nsupseteqq: ["2289", { variantForm: true }],
        subsetneq: "228A",
        supsetneq: "228B",
        varsubsetneq: ["228A", { variantForm: true }],
        varsupsetneq: ["228B", { variantForm: true }],
        subsetneqq: "2ACB",
        supsetneqq: "2ACC",
        varsubsetneqq: ["2ACB", { variantForm: true }],
        varsupsetneqq: ["2ACC", { variantForm: true }],
        leftleftarrows: "21C7",
        rightrightarrows: "21C9",
        leftrightarrows: "21C6",
        rightleftarrows: "21C4",
        Lleftarrow: "21DA",
        Rrightarrow: "21DB",
        twoheadleftarrow: "219E",
        twoheadrightarrow: "21A0",
        leftarrowtail: "21A2",
        rightarrowtail: "21A3",
        looparrowleft: "21AB",
        looparrowright: "21AC",
        leftrightharpoons: "21CB",
        rightleftharpoons: ["21CC", { variantForm: true }],
        curvearrowleft: "21B6",
        curvearrowright: "21B7",
        circlearrowleft: "21BA",
        circlearrowright: "21BB",
        Lsh: "21B0",
        Rsh: "21B1",
        upuparrows: "21C8",
        downdownarrows: "21CA",
        upharpoonleft: "21BF",
        upharpoonright: "21BE",
        downharpoonleft: "21C3",
        restriction: "21BE",
        multimap: "22B8",
        downharpoonright: "21C2",
        leftrightsquigarrow: "21AD",
        rightsquigarrow: "21DD",
        leadsto: "21DD",
        dashrightarrow: "21E2",
        dashleftarrow: "21E0",
        nleftarrow: "219A",
        nrightarrow: "219B",
        nLeftarrow: "21CD",
        nRightarrow: "21CF",
        nleftrightarrow: "21AE",
        nLeftrightarrow: "21CE"
      },
      delimiter: {
        "\\ulcorner": "231C",
        "\\urcorner": "231D",
        "\\llcorner": "231E",
        "\\lrcorner": "231F"
      },
      macros: {
        implies: ["Macro", "\\;\\Longrightarrow\\;"],
        impliedby: ["Macro", "\\;\\Longleftarrow\\;"]
      }
    },
    null,
    true
  );
  var c = a.mo.OPTYPES.REL;
  MathJax.Hub.Insert(a.mo.prototype, {
    OPTABLE: {
      infix: {
        "\u2322": c,
        "\u2323": c,
        "\u25B3": c,
        "\uE006": c,
        "\uE007": c,
        "\uE00C": c,
        "\uE00D": c,
        "\uE00E": c,
        "\uE00F": c,
        "\uE010": c,
        "\uE011": c,
        "\uE016": c,
        "\uE017": c,
        "\uE018": c,
        "\uE019": c,
        "\uE01A": c,
        "\uE01B": c,
        "\uE04B": c,
        "\uE04F": c
      }
    }
  });
  MathJax.Hub.Startup.signal.Post("TeX AMSsymbols Ready");
});
MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSsymbols.js");
(function(c, d) {
  var a;
  var b = function(e) {
    return MathJax.Localization._.apply(
      MathJax.Localization,
      [["MathML", e]].concat([].slice.call(arguments, 1))
    );
  };
  c.Parse = MathJax.Object.Subclass(
    {
      Init: function(f, e) {
        this.Parse(f, e);
      },
      Parse: function(h, e) {
        var j;
        if (typeof h !== "string") {
          j = h.parentNode;
        } else {
          j = c.ParseXML(this.preProcessMath.call(this, h));
          if (j == null) {
            c.Error(["ErrorParsingMathML", "Error parsing MathML"]);
          }
        }
        var g = j.getElementsByTagName("parsererror")[0];
        if (g) {
          c.Error([
            "ParsingError",
            "Error parsing MathML: %1",
            g.textContent.replace(
              /This page.*?errors:|XML Parsing Error: |Below is a rendering of the page.*/g,
              ""
            )
          ]);
        }
        if (j.childNodes.length !== 1) {
          c.Error([
            "MathMLSingleElement",
            "MathML must be formed by a single element"
          ]);
        }
        if (j.firstChild.nodeName.toLowerCase() === "html") {
          var f = j.getElementsByTagName("h1")[0];
          if (f && f.textContent === "XML parsing error" && f.nextSibling) {
            c.Error([
              "ParsingError",
              "Error parsing MathML: %1",
              String(f.nextSibling.nodeValue).replace(
                /fatal parsing error: /,
                ""
              )
            ]);
          }
        }
        if (
          j.firstChild.nodeName.toLowerCase().replace(/^[a-z]+:/, "") !== "math"
        ) {
          c.Error([
            "MathMLRootElement",
            "MathML must be formed by a <math> element, not %1",
            "<" + j.firstChild.nodeName + ">"
          ]);
        }
        var i = { math: j.firstChild, script: e };
        c.DOMfilterHooks.Execute(i);
        this.mml = this.MakeMML(i.math);
      },
      MakeMML: function(h) {
        var i = String(h.getAttribute("class") || "");
        var f,
          g = h.nodeName.toLowerCase().replace(/^[a-z]+:/, "");
        var e = i.match(/(^| )MJX-TeXAtom-([^ ]*)/);
        if (e) {
          f = this.TeXAtom(e[2], e[2] === "OP" && !i.match(/MJX-fixedlimits/));
        } else {
          if (!(a[g] && a[g].isa && a[g].isa(a.mbase))) {
            MathJax.Hub.signal.Post(["MathML Jax - unknown node type", g]);
            return a.Error(b("UnknownNodeType", "Unknown node type: %1", g));
          } else {
            f = a[g]();
          }
        }
        this.AddAttributes(f, h);
        this.CheckClass(f, f["class"]);
        this.AddChildren(f, h);
        if (c.config.useMathMLspacing) {
          f.useMMLspacing = 8;
        }
        return f;
      },
      TeXAtom: function(g, f) {
        var e = a.TeXAtom().With({ texClass: a.TEXCLASS[g] });
        if (f) {
          e.movesupsub = e.movablelimits = true;
        }
        return e;
      },
      CheckClass: function(f, h) {
        h = (h || "").split(/ /);
        var j = [];
        for (var g = 0, e = h.length; g < e; g++) {
          if (h[g].substr(0, 4) === "MJX-") {
            if (h[g] === "MJX-arrow") {
              if (!f.notation.match("/" + a.NOTATION.UPDIAGONALARROW + "/")) {
                f.notation += " " + a.NOTATION.UPDIAGONALARROW;
              }
            } else {
              if (h[g] === "MJX-variant") {
                f.variantForm = true;
                if (!MathJax.Extension["TeX/AMSsymbols"]) {
                  MathJax.Hub.RestartAfter(
                    MathJax.Ajax.Require(
                      "[MathJax]/extensions/TeX/AMSsymbols.js"
                    )
                  );
                }
              } else {
                if (h[g].substr(0, 11) !== "MJX-TeXAtom") {
                  f.mathvariant = h[g].substr(3);
                  if (
                    f.mathvariant === "-tex-caligraphic-bold" ||
                    f.mathvariant === "-tex-oldstyle-bold"
                  ) {
                    if (!MathJax.Extension["TeX/boldsymbol"]) {
                      MathJax.Hub.RestartAfter(
                        MathJax.Ajax.Require(
                          "[MathJax]/extensions/TeX/boldsymbol.js"
                        )
                      );
                    }
                  }
                }
              }
            }
          } else {
            j.push(h[g]);
          }
        }
        if (j.length) {
          f["class"] = j.join(" ");
        } else {
          delete f["class"];
        }
      },
      AddAttributes: function(g, j) {
        g.attr = {};
        g.attrNames = [];
        for (var h = 0, e = j.attributes.length; h < e; h++) {
          var f = j.attributes[h].name;
          if (f == "xlink:href") {
            f = "href";
          }
          if (f.match(/:/)) {
            continue;
          }
          if (f.match(/^_moz-math-((column|row)(align|line)|font-style)$/)) {
            continue;
          }
          var k = j.attributes[h].value;
          k = this.filterAttribute(f, k);
          var l = g.type === "mstyle" ? a.math.prototype.defaults : g.defaults;
          if (k != null) {
            var n = k.toLowerCase();
            if (n === "true" || n === "false") {
              if (
                typeof l[f] === "boolean" ||
                l[f] === a.INHERIT ||
                g.type === "math" ||
                g.type === "mstyle" ||
                (l[f] === a.AUTO &&
                  (g.defaultDef == null ||
                    typeof g.defaultDef[f] === "boolean"))
              ) {
                k = n === "true";
              }
            }
            if (l[f] != null || a.copyAttributes[f]) {
              g[f] = k;
            } else {
              g.attr[f] = k;
            }
            g.attrNames.push(f);
          }
        }
      },
      filterAttribute: function(e, f) {
        return f;
      },
      AddChildren: function(e, g) {
        for (var k = 0, j = g.childNodes.length; k < j; k++) {
          var f = g.childNodes[k];
          if (f.nodeName === "#comment") {
            continue;
          }
          if (f.nodeName === "#text") {
            if ((e.isToken || e.isChars) && !e.mmlSelfClosing) {
              var o = f.nodeValue;
              if (e.isToken) {
                o = o.replace(/&([a-z][a-z0-9]*);/gi, this.replaceEntity);
                o = this.trimSpace(o);
              }
              e.Append(a.chars(o));
            } else {
              if (f.nodeValue.match(/\S/)) {
                c.Error([
                  "UnexpectedTextNode",
                  "Unexpected text node: %1",
                  "'" + f.nodeValue + "'"
                ]);
              }
            }
          } else {
            if (e.type === "annotation-xml") {
              e.Append(a.xml(f));
            } else {
              var h = this.MakeMML(f);
              e.Append(h);
              if (h.mmlSelfClosing && h.data.length) {
                e.Append.apply(e, h.data);
                h.data = [];
              }
            }
          }
        }
        if (e.type === "mrow" && e.data.length >= 2) {
          var l = e.data[0],
            n = e.data[e.data.length - 1];
          if (
            l.type === "mo" &&
            l.Get("fence") &&
            n.type === "mo" &&
            n.Get("fence")
          ) {
            if (l.data[0]) {
              e.open = l.data.join("");
            }
            if (n.data[0]) {
              e.close = n.data.join("");
            }
          }
        }
      },
      preProcessMath: function(f) {
        if (f.match(/^<[a-z]+:/i) && !f.match(/^<[^<>]* xmlns:/)) {
          f = f.replace(
            /^<([a-z]+)(:math)/i,
            '<$1$2 xmlns:$1="http://www.w3.org/1998/Math/MathML"'
          );
        }
        var e = f.match(/^(<math( ('.*?'|".*?"|[^>])+)>)/i);
        if (e && e[2].match(/ (?!xmlns=)[a-z]+=\"http:/i)) {
          f =
            e[1].replace(
              / (?!xmlns=)([a-z]+=(['"])http:.*?\2)/gi,
              " xmlns:$1 $1"
            ) + f.substr(e[0].length);
        }
        if (f.match(/^<math[ >]/i) && !f.match(/^<[^<>]* xmlns=/)) {
          f = f.replace(
            /^<(math)/i,
            '<math xmlns="http://www.w3.org/1998/Math/MathML"'
          );
        }
        f = f.replace(
          /^\s*(?:\/\/)?<!(--)?\[CDATA\[((.|\n)*)(\/\/)?\]\]\1>\s*$/,
          "$2"
        );
        return f.replace(/&([a-z][a-z0-9]*);/gi, this.replaceEntity);
      },
      trimSpace: function(e) {
        return e
          .replace(/[\t\n\r]/g, " ")
          .replace(/^ +/, "")
          .replace(/ +$/, "")
          .replace(/  +/g, " ");
      },
      replaceEntity: function(g, f) {
        if (f.match(/^(lt|amp|quot)$/)) {
          return g;
        }
        if (c.Parse.Entity[f]) {
          return c.Parse.Entity[f];
        }
        var h = f.charAt(0).toLowerCase();
        var e = f.match(/^[a-zA-Z](fr|scr|opf)$/);
        if (e) {
          h = e[1];
        }
        if (!c.Parse.loaded[h]) {
          c.Parse.loaded[h] = true;
          MathJax.Hub.RestartAfter(
            MathJax.Ajax.Require(c.entityDir + "/" + h + ".js")
          );
        }
        return g;
      }
    },
    { loaded: [] }
  );
  c.Augment({
    sourceMenuTitle: ["OriginalMathML", "Original MathML"],
    prefilterHooks: MathJax.Callback.Hooks(true),
    DOMfilterHooks: MathJax.Callback.Hooks(true),
    postfilterHooks: MathJax.Callback.Hooks(true),
    Translate: function(e) {
      if (!this.ParseXML) {
        this.ParseXML = this.createParser();
      }
      var f,
        h,
        i = { script: e };
      if (
        e.firstChild &&
        e.firstChild.nodeName.toLowerCase().replace(/^[a-z]+:/, "") === "math"
      ) {
        i.math = e.firstChild;
      } else {
        h = MathJax.HTML.getScript(e);
        if (d.isMSIE) {
          h = h.replace(/(&nbsp;)+$/, "");
        }
        i.math = h;
      }
      var j = this.prefilterHooks.Execute(i);
      if (j) {
        return j;
      }
      h = i.math;
      try {
        f = c.Parse(h, e).mml;
      } catch (g) {
        if (!g.mathmlError) {
          throw g;
        }
        f = this.formatError(g, h, e);
      }
      i.math = a(f);
      return this.postfilterHooks.Execute(i) || i.math;
    },
    prefilterMath: function(f, e) {
      return f;
    },
    prefilterMathML: function(f, e) {
      return f;
    },
    formatError: function(h, g, e) {
      var f = h.message.replace(/\n.*/, "");
      MathJax.Hub.signal.Post(["MathML Jax - parse error", f, g, e]);
      return a.Error(f);
    },
    Error: function(e) {
      if (MathJax.Object.isArray(e)) {
        e = b.apply(b, e);
      }
      throw MathJax.Hub.Insert(Error(e), { mathmlError: true });
    },
    parseDOM: function(e) {
      return this.parser.parseFromString(e, "text/xml");
    },
    parseMS: function(e) {
      return this.parser.loadXML(e) ? this.parser : null;
    },
    parseDIV: function(e) {
      this.div.innerHTML =
        "<div>" + e.replace(/<([a-z]+)([^>]*)\/>/g, "<$1$2></$1>") + "</div>";
      var f = this.div.firstChild;
      this.div.innerHTML = "";
      return f;
    },
    parseError: function(e) {
      return null;
    },
    createMSParser: function() {
      var j = null;
      var f = [
        "MSXML2.DOMDocument.6.0",
        "MSXML2.DOMDocument.5.0",
        "MSXML2.DOMDocument.4.0",
        "MSXML2.DOMDocument.3.0",
        "MSXML2.DOMDocument.2.0",
        "Microsoft.XMLDOM"
      ];
      for (var g = 0, e = f.length; g < e && !j; g++) {
        try {
          j = new ActiveXObject(f[g]);
        } catch (h) {}
      }
      return j;
    },
    createParser: function() {
      if (window.DOMParser) {
        this.parser = new DOMParser();
        return this.parseDOM;
      } else {
        if (window.ActiveXObject) {
          this.parser = this.createMSParser();
          if (!this.parser) {
            MathJax.Localization.Try(this.parserCreationError);
            return this.parseError;
          }
          this.parser.async = false;
          return this.parseMS;
        }
      }
      this.div = MathJax.Hub.Insert(document.createElement("div"), {
        style: {
          visibility: "hidden",
          overflow: "hidden",
          height: "1px",
          position: "absolute",
          top: 0
        }
      });
      if (!document.body.firstChild) {
        document.body.appendChild(this.div);
      } else {
        document.body.insertBefore(this.div, document.body.firstChild);
      }
      return this.parseDIV;
    },
    parserCreationError: function() {
      alert(
        b(
          "CantCreateXMLParser",
          "MathJax can't create an XML parser for MathML.  Check that\nthe 'Script ActiveX controls marked safe for scripting' security\nsetting is enabled (use the Internet Options item in the Tools\nmenu, and select the Security panel, then press the Custom Level\nbutton to check this).\n\nMathML equations will not be able to be processed by MathJax."
        )
      );
    },
    Startup: function() {
      a = MathJax.ElementJax.mml;
      a.mspace.Augment({ mmlSelfClosing: true });
      a.none.Augment({ mmlSelfClosing: true });
      a.mprescripts.Augment({ mmlSelfClosing: true });
      a.maligngroup.Augment({ mmlSelfClosing: true });
      a.malignmark.Augment({ mmlSelfClosing: true });
    }
  });
  c.prefilterHooks.Add(function(e) {
    e.math =
      typeof e.math === "string"
        ? c.prefilterMath(e.math, e.script)
        : c.prefilterMathML(e.math, e.script);
  });
  c.Parse.Entity = {
    ApplyFunction: "\u2061",
    Backslash: "\u2216",
    Because: "\u2235",
    Breve: "\u02D8",
    Cap: "\u22D2",
    CenterDot: "\u00B7",
    CircleDot: "\u2299",
    CircleMinus: "\u2296",
    CirclePlus: "\u2295",
    CircleTimes: "\u2297",
    Congruent: "\u2261",
    ContourIntegral: "\u222E",
    Coproduct: "\u2210",
    Cross: "\u2A2F",
    Cup: "\u22D3",
    CupCap: "\u224D",
    Dagger: "\u2021",
    Del: "\u2207",
    Delta: "\u0394",
    Diamond: "\u22C4",
    DifferentialD: "\u2146",
    DotEqual: "\u2250",
    DoubleDot: "\u00A8",
    DoubleRightTee: "\u22A8",
    DoubleVerticalBar: "\u2225",
    DownArrow: "\u2193",
    DownLeftVector: "\u21BD",
    DownRightVector: "\u21C1",
    DownTee: "\u22A4",
    Downarrow: "\u21D3",
    Element: "\u2208",
    EqualTilde: "\u2242",
    Equilibrium: "\u21CC",
    Exists: "\u2203",
    ExponentialE: "\u2147",
    FilledVerySmallSquare: "\u25AA",
    ForAll: "\u2200",
    Gamma: "\u0393",
    Gg: "\u22D9",
    GreaterEqual: "\u2265",
    GreaterEqualLess: "\u22DB",
    GreaterFullEqual: "\u2267",
    GreaterLess: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    GreaterTilde: "\u2273",
    Hacek: "\u02C7",
    Hat: "\u005E",
    HumpDownHump: "\u224E",
    HumpEqual: "\u224F",
    Im: "\u2111",
    ImaginaryI: "\u2148",
    Integral: "\u222B",
    Intersection: "\u22C2",
    InvisibleComma: "\u2063",
    InvisibleTimes: "\u2062",
    Lambda: "\u039B",
    Larr: "\u219E",
    LeftAngleBracket: "\u27E8",
    LeftArrow: "\u2190",
    LeftArrowRightArrow: "\u21C6",
    LeftCeiling: "\u2308",
    LeftDownVector: "\u21C3",
    LeftFloor: "\u230A",
    LeftRightArrow: "\u2194",
    LeftTee: "\u22A3",
    LeftTriangle: "\u22B2",
    LeftTriangleEqual: "\u22B4",
    LeftUpVector: "\u21BF",
    LeftVector: "\u21BC",
    Leftarrow: "\u21D0",
    Leftrightarrow: "\u21D4",
    LessEqualGreater: "\u22DA",
    LessFullEqual: "\u2266",
    LessGreater: "\u2276",
    LessSlantEqual: "\u2A7D",
    LessTilde: "\u2272",
    Ll: "\u22D8",
    Lleftarrow: "\u21DA",
    LongLeftArrow: "\u27F5",
    LongLeftRightArrow: "\u27F7",
    LongRightArrow: "\u27F6",
    Longleftarrow: "\u27F8",
    Longleftrightarrow: "\u27FA",
    Longrightarrow: "\u27F9",
    Lsh: "\u21B0",
    MinusPlus: "\u2213",
    NestedGreaterGreater: "\u226B",
    NestedLessLess: "\u226A",
    NotDoubleVerticalBar: "\u2226",
    NotElement: "\u2209",
    NotEqual: "\u2260",
    NotExists: "\u2204",
    NotGreater: "\u226F",
    NotGreaterEqual: "\u2271",
    NotLeftTriangle: "\u22EA",
    NotLeftTriangleEqual: "\u22EC",
    NotLess: "\u226E",
    NotLessEqual: "\u2270",
    NotPrecedes: "\u2280",
    NotPrecedesSlantEqual: "\u22E0",
    NotRightTriangle: "\u22EB",
    NotRightTriangleEqual: "\u22ED",
    NotSubsetEqual: "\u2288",
    NotSucceeds: "\u2281",
    NotSucceedsSlantEqual: "\u22E1",
    NotSupersetEqual: "\u2289",
    NotTilde: "\u2241",
    NotVerticalBar: "\u2224",
    Omega: "\u03A9",
    OverBar: "\u203E",
    OverBrace: "\u23DE",
    PartialD: "\u2202",
    Phi: "\u03A6",
    Pi: "\u03A0",
    PlusMinus: "\u00B1",
    Precedes: "\u227A",
    PrecedesEqual: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    PrecedesTilde: "\u227E",
    Product: "\u220F",
    Proportional: "\u221D",
    Psi: "\u03A8",
    Rarr: "\u21A0",
    Re: "\u211C",
    ReverseEquilibrium: "\u21CB",
    RightAngleBracket: "\u27E9",
    RightArrow: "\u2192",
    RightArrowLeftArrow: "\u21C4",
    RightCeiling: "\u2309",
    RightDownVector: "\u21C2",
    RightFloor: "\u230B",
    RightTee: "\u22A2",
    RightTeeArrow: "\u21A6",
    RightTriangle: "\u22B3",
    RightTriangleEqual: "\u22B5",
    RightUpVector: "\u21BE",
    RightVector: "\u21C0",
    Rightarrow: "\u21D2",
    Rrightarrow: "\u21DB",
    Rsh: "\u21B1",
    Sigma: "\u03A3",
    SmallCircle: "\u2218",
    Sqrt: "\u221A",
    Square: "\u25A1",
    SquareIntersection: "\u2293",
    SquareSubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    SquareSuperset: "\u2290",
    SquareSupersetEqual: "\u2292",
    SquareUnion: "\u2294",
    Star: "\u22C6",
    Subset: "\u22D0",
    SubsetEqual: "\u2286",
    Succeeds: "\u227B",
    SucceedsEqual: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    SucceedsTilde: "\u227F",
    SuchThat: "\u220B",
    Sum: "\u2211",
    Superset: "\u2283",
    SupersetEqual: "\u2287",
    Supset: "\u22D1",
    Therefore: "\u2234",
    Theta: "\u0398",
    Tilde: "\u223C",
    TildeEqual: "\u2243",
    TildeFullEqual: "\u2245",
    TildeTilde: "\u2248",
    UnderBar: "\u005F",
    UnderBrace: "\u23DF",
    Union: "\u22C3",
    UnionPlus: "\u228E",
    UpArrow: "\u2191",
    UpDownArrow: "\u2195",
    UpTee: "\u22A5",
    Uparrow: "\u21D1",
    Updownarrow: "\u21D5",
    Upsilon: "\u03A5",
    Vdash: "\u22A9",
    Vee: "\u22C1",
    VerticalBar: "\u2223",
    VerticalTilde: "\u2240",
    Vvdash: "\u22AA",
    Wedge: "\u22C0",
    Xi: "\u039E",
    acute: "\u00B4",
    aleph: "\u2135",
    alpha: "\u03B1",
    amalg: "\u2A3F",
    and: "\u2227",
    ang: "\u2220",
    angmsd: "\u2221",
    angsph: "\u2222",
    ape: "\u224A",
    backprime: "\u2035",
    backsim: "\u223D",
    backsimeq: "\u22CD",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    bigcirc: "\u25EF",
    bigodot: "\u2A00",
    bigoplus: "\u2A01",
    bigotimes: "\u2A02",
    bigsqcup: "\u2A06",
    bigstar: "\u2605",
    bigtriangledown: "\u25BD",
    bigtriangleup: "\u25B3",
    biguplus: "\u2A04",
    blacklozenge: "\u29EB",
    blacktriangle: "\u25B4",
    blacktriangledown: "\u25BE",
    blacktriangleleft: "\u25C2",
    bowtie: "\u22C8",
    boxdl: "\u2510",
    boxdr: "\u250C",
    boxminus: "\u229F",
    boxplus: "\u229E",
    boxtimes: "\u22A0",
    boxul: "\u2518",
    boxur: "\u2514",
    bsol: "\u005C",
    bull: "\u2022",
    cap: "\u2229",
    check: "\u2713",
    chi: "\u03C7",
    circ: "\u02C6",
    circeq: "\u2257",
    circlearrowleft: "\u21BA",
    circlearrowright: "\u21BB",
    circledR: "\u00AE",
    circledS: "\u24C8",
    circledast: "\u229B",
    circledcirc: "\u229A",
    circleddash: "\u229D",
    clubs: "\u2663",
    colon: "\u003A",
    comp: "\u2201",
    ctdot: "\u22EF",
    cuepr: "\u22DE",
    cuesc: "\u22DF",
    cularr: "\u21B6",
    cup: "\u222A",
    curarr: "\u21B7",
    curlyvee: "\u22CE",
    curlywedge: "\u22CF",
    dagger: "\u2020",
    daleth: "\u2138",
    ddarr: "\u21CA",
    deg: "\u00B0",
    delta: "\u03B4",
    digamma: "\u03DD",
    div: "\u00F7",
    divideontimes: "\u22C7",
    dot: "\u02D9",
    doteqdot: "\u2251",
    dotplus: "\u2214",
    dotsquare: "\u22A1",
    dtdot: "\u22F1",
    ecir: "\u2256",
    efDot: "\u2252",
    egs: "\u2A96",
    ell: "\u2113",
    els: "\u2A95",
    empty: "\u2205",
    epsi: "\u03B5",
    epsiv: "\u03F5",
    erDot: "\u2253",
    eta: "\u03B7",
    eth: "\u00F0",
    flat: "\u266D",
    fork: "\u22D4",
    frown: "\u2322",
    gEl: "\u2A8C",
    gamma: "\u03B3",
    gap: "\u2A86",
    gimel: "\u2137",
    gnE: "\u2269",
    gnap: "\u2A8A",
    gne: "\u2A88",
    gnsim: "\u22E7",
    gt: "\u003E",
    gtdot: "\u22D7",
    harrw: "\u21AD",
    hbar: "\u210F",
    hellip: "\u2026",
    hookleftarrow: "\u21A9",
    hookrightarrow: "\u21AA",
    imath: "\u0131",
    infin: "\u221E",
    intcal: "\u22BA",
    iota: "\u03B9",
    jmath: "\u0237",
    kappa: "\u03BA",
    kappav: "\u03F0",
    lEg: "\u2A8B",
    lambda: "\u03BB",
    lap: "\u2A85",
    larrlp: "\u21AB",
    larrtl: "\u21A2",
    lbrace: "\u007B",
    lbrack: "\u005B",
    le: "\u2264",
    leftleftarrows: "\u21C7",
    leftthreetimes: "\u22CB",
    lessdot: "\u22D6",
    lmoust: "\u23B0",
    lnE: "\u2268",
    lnap: "\u2A89",
    lne: "\u2A87",
    lnsim: "\u22E6",
    longmapsto: "\u27FC",
    looparrowright: "\u21AC",
    lowast: "\u2217",
    loz: "\u25CA",
    lt: "\u003C",
    ltimes: "\u22C9",
    ltri: "\u25C3",
    macr: "\u00AF",
    malt: "\u2720",
    mho: "\u2127",
    mu: "\u03BC",
    multimap: "\u22B8",
    nLeftarrow: "\u21CD",
    nLeftrightarrow: "\u21CE",
    nRightarrow: "\u21CF",
    nVDash: "\u22AF",
    nVdash: "\u22AE",
    natur: "\u266E",
    nearr: "\u2197",
    nharr: "\u21AE",
    nlarr: "\u219A",
    not: "\u00AC",
    nrarr: "\u219B",
    nu: "\u03BD",
    nvDash: "\u22AD",
    nvdash: "\u22AC",
    nwarr: "\u2196",
    omega: "\u03C9",
    omicron: "\u03BF",
    or: "\u2228",
    osol: "\u2298",
    period: "\u002E",
    phi: "\u03C6",
    phiv: "\u03D5",
    pi: "\u03C0",
    piv: "\u03D6",
    prap: "\u2AB7",
    precnapprox: "\u2AB9",
    precneqq: "\u2AB5",
    precnsim: "\u22E8",
    prime: "\u2032",
    psi: "\u03C8",
    rarrtl: "\u21A3",
    rbrace: "\u007D",
    rbrack: "\u005D",
    rho: "\u03C1",
    rhov: "\u03F1",
    rightrightarrows: "\u21C9",
    rightthreetimes: "\u22CC",
    ring: "\u02DA",
    rmoust: "\u23B1",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    scap: "\u2AB8",
    scnE: "\u2AB6",
    scnap: "\u2ABA",
    scnsim: "\u22E9",
    sdot: "\u22C5",
    searr: "\u2198",
    sect: "\u00A7",
    sharp: "\u266F",
    sigma: "\u03C3",
    sigmav: "\u03C2",
    simne: "\u2246",
    smile: "\u2323",
    spades: "\u2660",
    sub: "\u2282",
    subE: "\u2AC5",
    subnE: "\u2ACB",
    subne: "\u228A",
    supE: "\u2AC6",
    supnE: "\u2ACC",
    supne: "\u228B",
    swarr: "\u2199",
    tau: "\u03C4",
    theta: "\u03B8",
    thetav: "\u03D1",
    tilde: "\u02DC",
    times: "\u00D7",
    triangle: "\u25B5",
    triangleq: "\u225C",
    upsi: "\u03C5",
    upuparrows: "\u21C8",
    veebar: "\u22BB",
    vellip: "\u22EE",
    weierp: "\u2118",
    xi: "\u03BE",
    yen: "\u00A5",
    zeta: "\u03B6",
    zigrarr: "\u21DD"
  };
  c.loadComplete("jax.js");
})(MathJax.InputJax.MathML, MathJax.Hub.Browser);
(function(aa) {
  var g;
  var X = MathJax.Object.Subclass({
    firstChild: null,
    lastChild: null,
    Init: function() {
      this.childNodes = [];
    },
    appendChild: function(ab) {
      if (ab.parent) {
        ab.parent.removeChild(ab);
      }
      if (this.lastChild) {
        this.lastChild.nextSibling = ab;
      }
      if (!this.firstChild) {
        this.firstChild = ab;
      }
      this.childNodes.push(ab);
      ab.parent = this;
      this.lastChild = ab;
      return ab;
    },
    removeChild: function(ad) {
      for (var ac = 0, ab = this.childNodes.length; ac < ab; ac++) {
        if (this.childNodes[ac] === ad) {
          break;
        }
      }
      if (ac === ab) {
        return;
      }
      this.childNodes.splice(ac, 1);
      if (ad === this.firstChild) {
        this.firstChild = ad.nextSibling;
      }
      if (ad === this.lastChild) {
        if (!this.childNodes.length) {
          this.lastChild = null;
        } else {
          this.lastChild = this.childNodes[this.childNodes.length - 1];
        }
      }
      if (ac) {
        this.childNodes[ac - 1].nextSibling = ad.nextSibling;
      }
      ad.nextSibling = ad.parent = null;
      return ad;
    },
    replaceChild: function(ae, ac) {
      for (var ad = 0, ab = this.childNodes.length; ad < ab; ad++) {
        if (this.childNodes[ad] === ac) {
          break;
        }
      }
      if (ad) {
        this.childNodes[ad - 1].nextSibling = ae;
      } else {
        this.firstChild = ae;
      }
      if (ad >= ab - 1) {
        this.lastChild = ae;
      }
      this.childNodes[ad] = ae;
      ae.nextSibling = ac.nextSibling;
      ac.nextSibling = ac.parent = null;
      return ac;
    },
    hasChildNodes: function(ab) {
      return this.childNodes.length > 0;
    },
    toString: function() {
      return "{" + this.childNodes.join("") + "}";
    }
  });
  var x = function() {
    g = MathJax.ElementJax.mml;
    var ab = g.mbase.prototype.Init;
    g.mbase.Augment({
      firstChild: null,
      lastChild: null,
      nodeValue: null,
      nextSibling: null,
      Init: function() {
        var ac = ab.apply(this, arguments) || this;
        ac.childNodes = ac.data;
        ac.nodeName = ac.type;
        return ac;
      },
      appendChild: function(af) {
        if (af.parent) {
          af.parent.removeChild(af);
        }
        var ad = arguments;
        if (af.isa(X)) {
          ad = af.childNodes;
          af.data = af.childNodes = [];
          af.firstChild = af.lastChild = null;
        }
        for (var ae = 0, ac = ad.length; ae < ac; ae++) {
          af = ad[ae];
          if (this.lastChild) {
            this.lastChild.nextSibling = af;
          }
          if (!this.firstChild) {
            this.firstChild = af;
          }
          this.Append(af);
          this.lastChild = af;
        }
        return af;
      },
      removeChild: function(ae) {
        for (var ad = 0, ac = this.childNodes.length; ad < ac; ad++) {
          if (this.childNodes[ad] === ae) {
            break;
          }
        }
        if (ad === ac) {
          return;
        }
        this.childNodes.splice(ad, 1);
        if (ae === this.firstChild) {
          this.firstChild = ae.nextSibling;
        }
        if (ae === this.lastChild) {
          if (!this.childNodes.length) {
            this.lastChild = null;
          } else {
            this.lastChild = this.childNodes[this.childNodes.length - 1];
          }
        }
        if (ad) {
          this.childNodes[ad - 1].nextSibling = ae.nextSibling;
        }
        ae.nextSibling = ae.parent = null;
        return ae;
      },
      replaceChild: function(af, ad) {
        for (var ae = 0, ac = this.childNodes.length; ae < ac; ae++) {
          if (this.childNodes[ae] === ad) {
            break;
          }
        }
        if (ae) {
          this.childNodes[ae - 1].nextSibling = af;
        } else {
          this.firstChild = af;
        }
        if (ae >= ac - 1) {
          this.lastChild = af;
        }
        this.SetData(ae, af);
        af.nextSibling = ad.nextSibling;
        ad.nextSibling = ad.parent = null;
        return ad;
      },
      hasChildNodes: function(ac) {
        return this.childNodes.length > 0;
      },
      setAttribute: function(ac, ad) {
        this[ac] = ad;
      }
    });
  };
  var Q = {};
  var e = {
    getElementById: true,
    createElementNS: function(ac, ab) {
      var ad = g[ab]();
      if (ab === "mo" && aa.config.useMathMLspacing) {
        ad.useMMLspacing = 128;
      }
      return ad;
    },
    createTextNode: function(ab) {
      return g.chars(ab).With({ nodeValue: ab });
    },
    createDocumentFragment: function() {
      return X();
    }
  };
  var J = { appName: "MathJax" };
  var C = "blue";
  var o = true;
  var v = true;
  var d = ".";
  var f = true;
  var l = J.appName.slice(0, 9) == "Microsoft";
  function E(ab) {
    if (l) {
      return e.createElement(ab);
    } else {
      return e.createElementNS("http://www.w3.org/1999/xhtml", ab);
    }
  }
  var W = "http://www.w3.org/1998/Math/MathML";
  function P(ab) {
    if (l) {
      return e.createElement("m:" + ab);
    } else {
      return e.createElementNS(W, ab);
    }
  }
  function O(ab, ad) {
    var ac;
    if (l) {
      ac = e.createElement("m:" + ab);
    } else {
      ac = e.createElementNS(W, ab);
    }
    if (ad) {
      ac.appendChild(ad);
    }
    return ac;
  }
  function u(ab, ac) {
    z.push({ input: ab, tag: "mo", output: ac, tex: null, ttype: V });
    B();
  }
  function r(ab) {
    z.push(ab);
    B();
  }
  var D = [
    "\uD835\uDC9C",
    "\u212C",
    "\uD835\uDC9E",
    "\uD835\uDC9F",
    "\u2130",
    "\u2131",
    "\uD835\uDCA2",
    "\u210B",
    "\u2110",
    "\uD835\uDCA5",
    "\uD835\uDCA6",
    "\u2112",
    "\u2133",
    "\uD835\uDCA9",
    "\uD835\uDCAA",
    "\uD835\uDCAB",
    "\uD835\uDCAC",
    "\u211B",
    "\uD835\uDCAE",
    "\uD835\uDCAF",
    "\uD835\uDCB0",
    "\uD835\uDCB1",
    "\uD835\uDCB2",
    "\uD835\uDCB3",
    "\uD835\uDCB4",
    "\uD835\uDCB5",
    "\uD835\uDCB6",
    "\uD835\uDCB7",
    "\uD835\uDCB8",
    "\uD835\uDCB9",
    "\u212F",
    "\uD835\uDCBB",
    "\u210A",
    "\uD835\uDCBD",
    "\uD835\uDCBE",
    "\uD835\uDCBF",
    "\uD835\uDCC0",
    "\uD835\uDCC1",
    "\uD835\uDCC2",
    "\uD835\uDCC3",
    "\u2134",
    "\uD835\uDCC5",
    "\uD835\uDCC6",
    "\uD835\uDCC7",
    "\uD835\uDCC8",
    "\uD835\uDCC9",
    "\uD835\uDCCA",
    "\uD835\uDCCB",
    "\uD835\uDCCC",
    "\uD835\uDCCD",
    "\uD835\uDCCE",
    "\uD835\uDCCF"
  ];
  var H = [
    "\uD835\uDD04",
    "\uD835\uDD05",
    "\u212D",
    "\uD835\uDD07",
    "\uD835\uDD08",
    "\uD835\uDD09",
    "\uD835\uDD0A",
    "\u210C",
    "\u2111",
    "\uD835\uDD0D",
    "\uD835\uDD0E",
    "\uD835\uDD0F",
    "\uD835\uDD10",
    "\uD835\uDD11",
    "\uD835\uDD12",
    "\uD835\uDD13",
    "\uD835\uDD14",
    "\u211C",
    "\uD835\uDD16",
    "\uD835\uDD17",
    "\uD835\uDD18",
    "\uD835\uDD19",
    "\uD835\uDD1A",
    "\uD835\uDD1B",
    "\uD835\uDD1C",
    "\u2128",
    "\uD835\uDD1E",
    "\uD835\uDD1F",
    "\uD835\uDD20",
    "\uD835\uDD21",
    "\uD835\uDD22",
    "\uD835\uDD23",
    "\uD835\uDD24",
    "\uD835\uDD25",
    "\uD835\uDD26",
    "\uD835\uDD27",
    "\uD835\uDD28",
    "\uD835\uDD29",
    "\uD835\uDD2A",
    "\uD835\uDD2B",
    "\uD835\uDD2C",
    "\uD835\uDD2D",
    "\uD835\uDD2E",
    "\uD835\uDD2F",
    "\uD835\uDD30",
    "\uD835\uDD31",
    "\uD835\uDD32",
    "\uD835\uDD33",
    "\uD835\uDD34",
    "\uD835\uDD35",
    "\uD835\uDD36",
    "\uD835\uDD37"
  ];
  var w = [
    "\uD835\uDD38",
    "\uD835\uDD39",
    "\u2102",
    "\uD835\uDD3B",
    "\uD835\uDD3C",
    "\uD835\uDD3D",
    "\uD835\uDD3E",
    "\u210D",
    "\uD835\uDD40",
    "\uD835\uDD41",
    "\uD835\uDD42",
    "\uD835\uDD43",
    "\uD835\uDD44",
    "\u2115",
    "\uD835\uDD46",
    "\u2119",
    "\u211A",
    "\u211D",
    "\uD835\uDD4A",
    "\uD835\uDD4B",
    "\uD835\uDD4C",
    "\uD835\uDD4D",
    "\uD835\uDD4E",
    "\uD835\uDD4F",
    "\uD835\uDD50",
    "\u2124",
    "\uD835\uDD52",
    "\uD835\uDD53",
    "\uD835\uDD54",
    "\uD835\uDD55",
    "\uD835\uDD56",
    "\uD835\uDD57",
    "\uD835\uDD58",
    "\uD835\uDD59",
    "\uD835\uDD5A",
    "\uD835\uDD5B",
    "\uD835\uDD5C",
    "\uD835\uDD5D",
    "\uD835\uDD5E",
    "\uD835\uDD5F",
    "\uD835\uDD60",
    "\uD835\uDD61",
    "\uD835\uDD62",
    "\uD835\uDD63",
    "\uD835\uDD64",
    "\uD835\uDD65",
    "\uD835\uDD66",
    "\uD835\uDD67",
    "\uD835\uDD68",
    "\uD835\uDD69",
    "\uD835\uDD6A",
    "\uD835\uDD6B"
  ];
  var c = 0,
    A = 1,
    U = 2,
    i = 3,
    b = 4,
    h = 5,
    a = 6,
    L = 7,
    V = 8,
    m = 9,
    Y = 10,
    K = 15;
  var k = { input: '"', tag: "mtext", output: "mbox", tex: null, ttype: Y };
  var z = [
    { input: "alpha", tag: "mi", output: "\u03B1", tex: null, ttype: c },
    { input: "beta", tag: "mi", output: "\u03B2", tex: null, ttype: c },
    { input: "chi", tag: "mi", output: "\u03C7", tex: null, ttype: c },
    { input: "delta", tag: "mi", output: "\u03B4", tex: null, ttype: c },
    { input: "Delta", tag: "mo", output: "\u0394", tex: null, ttype: c },
    { input: "epsi", tag: "mi", output: "\u03B5", tex: "epsilon", ttype: c },
    { input: "varepsilon", tag: "mi", output: "\u025B", tex: null, ttype: c },
    { input: "eta", tag: "mi", output: "\u03B7", tex: null, ttype: c },
    { input: "gamma", tag: "mi", output: "\u03B3", tex: null, ttype: c },
    { input: "Gamma", tag: "mo", output: "\u0393", tex: null, ttype: c },
    { input: "iota", tag: "mi", output: "\u03B9", tex: null, ttype: c },
    { input: "kappa", tag: "mi", output: "\u03BA", tex: null, ttype: c },
    { input: "lambda", tag: "mi", output: "\u03BB", tex: null, ttype: c },
    { input: "Lambda", tag: "mo", output: "\u039B", tex: null, ttype: c },
    { input: "lamda", tag: "mi", output: "\u03BB", tex: null, ttype: c },
    { input: "Lamda", tag: "mo", output: "\u039B", tex: null, ttype: c },
    { input: "mu", tag: "mi", output: "\u03BC", tex: null, ttype: c },
    { input: "nu", tag: "mi", output: "\u03BD", tex: null, ttype: c },
    { input: "omega", tag: "mi", output: "\u03C9", tex: null, ttype: c },
    { input: "Omega", tag: "mo", output: "\u03A9", tex: null, ttype: c },
    {
      input: "phi",
      tag: "mi",
      output: f ? "\u03D5" : "\u03C6",
      tex: null,
      ttype: c
    },
    {
      input: "varphi",
      tag: "mi",
      output: f ? "\u03C6" : "\u03D5",
      tex: null,
      ttype: c
    },
    { input: "Phi", tag: "mo", output: "\u03A6", tex: null, ttype: c },
    { input: "pi", tag: "mi", output: "\u03C0", tex: null, ttype: c },
    { input: "Pi", tag: "mo", output: "\u03A0", tex: null, ttype: c },
    { input: "psi", tag: "mi", output: "\u03C8", tex: null, ttype: c },
    { input: "Psi", tag: "mi", output: "\u03A8", tex: null, ttype: c },
    { input: "rho", tag: "mi", output: "\u03C1", tex: null, ttype: c },
    { input: "sigma", tag: "mi", output: "\u03C3", tex: null, ttype: c },
    { input: "Sigma", tag: "mo", output: "\u03A3", tex: null, ttype: c },
    { input: "tau", tag: "mi", output: "\u03C4", tex: null, ttype: c },
    { input: "theta", tag: "mi", output: "\u03B8", tex: null, ttype: c },
    { input: "vartheta", tag: "mi", output: "\u03D1", tex: null, ttype: c },
    { input: "Theta", tag: "mo", output: "\u0398", tex: null, ttype: c },
    { input: "upsilon", tag: "mi", output: "\u03C5", tex: null, ttype: c },
    { input: "xi", tag: "mi", output: "\u03BE", tex: null, ttype: c },
    { input: "Xi", tag: "mo", output: "\u039E", tex: null, ttype: c },
    { input: "zeta", tag: "mi", output: "\u03B6", tex: null, ttype: c },
    { input: "*", tag: "mo", output: "\u22C5", tex: "cdot", ttype: c },
    { input: "**", tag: "mo", output: "\u2217", tex: "ast", ttype: c },
    { input: "***", tag: "mo", output: "\u22C6", tex: "star", ttype: c },
    { input: "//", tag: "mo", output: "/", tex: null, ttype: c },
    { input: "\\\\", tag: "mo", output: "\\", tex: "backslash", ttype: c },
    { input: "setminus", tag: "mo", output: "\\", tex: null, ttype: c },
    { input: "xx", tag: "mo", output: "\u00D7", tex: "times", ttype: c },
    { input: "|><", tag: "mo", output: "\u22C9", tex: "ltimes", ttype: c },
    { input: "><|", tag: "mo", output: "\u22CA", tex: "rtimes", ttype: c },
    { input: "|><|", tag: "mo", output: "\u22C8", tex: "bowtie", ttype: c },
    { input: "-:", tag: "mo", output: "\u00F7", tex: "div", ttype: c },
    { input: "divide", tag: "mo", output: "-:", tex: null, ttype: V },
    { input: "@", tag: "mo", output: "\u2218", tex: "circ", ttype: c },
    { input: "o+", tag: "mo", output: "\u2295", tex: "oplus", ttype: c },
    { input: "ox", tag: "mo", output: "\u2297", tex: "otimes", ttype: c },
    { input: "o.", tag: "mo", output: "\u2299", tex: "odot", ttype: c },
    { input: "sum", tag: "mo", output: "\u2211", tex: null, ttype: L },
    { input: "prod", tag: "mo", output: "\u220F", tex: null, ttype: L },
    { input: "^^", tag: "mo", output: "\u2227", tex: "wedge", ttype: c },
    { input: "^^^", tag: "mo", output: "\u22C0", tex: "bigwedge", ttype: L },
    { input: "vv", tag: "mo", output: "\u2228", tex: "vee", ttype: c },
    { input: "vvv", tag: "mo", output: "\u22C1", tex: "bigvee", ttype: L },
    { input: "nn", tag: "mo", output: "\u2229", tex: "cap", ttype: c },
    { input: "nnn", tag: "mo", output: "\u22C2", tex: "bigcap", ttype: L },
    { input: "uu", tag: "mo", output: "\u222A", tex: "cup", ttype: c },
    { input: "uuu", tag: "mo", output: "\u22C3", tex: "bigcup", ttype: L },
    { input: "!=", tag: "mo", output: "\u2260", tex: "ne", ttype: c },
    { input: ":=", tag: "mo", output: ":=", tex: null, ttype: c },
    { input: "lt", tag: "mo", output: "<", tex: null, ttype: c },
    { input: "<=", tag: "mo", output: "\u2264", tex: "le", ttype: c },
    { input: "lt=", tag: "mo", output: "\u2264", tex: "leq", ttype: c },
    { input: "gt", tag: "mo", output: ">", tex: null, ttype: c },
    { input: ">=", tag: "mo", output: "\u2265", tex: "ge", ttype: c },
    { input: "gt=", tag: "mo", output: "\u2265", tex: "geq", ttype: c },
    { input: "-<", tag: "mo", output: "\u227A", tex: "prec", ttype: c },
    { input: "-lt", tag: "mo", output: "\u227A", tex: null, ttype: c },
    { input: ">-", tag: "mo", output: "\u227B", tex: "succ", ttype: c },
    { input: "-<=", tag: "mo", output: "\u2AAF", tex: "preceq", ttype: c },
    { input: ">-=", tag: "mo", output: "\u2AB0", tex: "succeq", ttype: c },
    { input: "in", tag: "mo", output: "\u2208", tex: null, ttype: c },
    { input: "!in", tag: "mo", output: "\u2209", tex: "notin", ttype: c },
    { input: "sub", tag: "mo", output: "\u2282", tex: "subset", ttype: c },
    { input: "sup", tag: "mo", output: "\u2283", tex: "supset", ttype: c },
    { input: "sube", tag: "mo", output: "\u2286", tex: "subseteq", ttype: c },
    { input: "supe", tag: "mo", output: "\u2287", tex: "supseteq", ttype: c },
    { input: "-=", tag: "mo", output: "\u2261", tex: "equiv", ttype: c },
    { input: "~=", tag: "mo", output: "\u2245", tex: "cong", ttype: c },
    { input: "~~", tag: "mo", output: "\u2248", tex: "approx", ttype: c },
    { input: "prop", tag: "mo", output: "\u221D", tex: "propto", ttype: c },
    { input: "and", tag: "mtext", output: "and", tex: null, ttype: a },
    { input: "or", tag: "mtext", output: "or", tex: null, ttype: a },
    { input: "not", tag: "mo", output: "\u00AC", tex: "neg", ttype: c },
    { input: "=>", tag: "mo", output: "\u21D2", tex: "implies", ttype: c },
    { input: "if", tag: "mo", output: "if", tex: null, ttype: a },
    { input: "<=>", tag: "mo", output: "\u21D4", tex: "iff", ttype: c },
    { input: "AA", tag: "mo", output: "\u2200", tex: "forall", ttype: c },
    { input: "EE", tag: "mo", output: "\u2203", tex: "exists", ttype: c },
    { input: "_|_", tag: "mo", output: "\u22A5", tex: "bot", ttype: c },
    { input: "TT", tag: "mo", output: "\u22A4", tex: "top", ttype: c },
    { input: "|--", tag: "mo", output: "\u22A2", tex: "vdash", ttype: c },
    { input: "|==", tag: "mo", output: "\u22A8", tex: "models", ttype: c },
    { input: "(", tag: "mo", output: "(", tex: "left(", ttype: b },
    { input: ")", tag: "mo", output: ")", tex: "right)", ttype: h },
    { input: "[", tag: "mo", output: "[", tex: "left[", ttype: b },
    { input: "]", tag: "mo", output: "]", tex: "right]", ttype: h },
    { input: "{", tag: "mo", output: "{", tex: null, ttype: b },
    { input: "}", tag: "mo", output: "}", tex: null, ttype: h },
    { input: "|", tag: "mo", output: "|", tex: null, ttype: m },
    { input: ":|:", tag: "mo", output: "|", tex: null, ttype: c },
    { input: "|:", tag: "mo", output: "|", tex: null, ttype: b },
    { input: ":|", tag: "mo", output: "|", tex: null, ttype: h },
    { input: "(:", tag: "mo", output: "\u2329", tex: "langle", ttype: b },
    { input: ":)", tag: "mo", output: "\u232A", tex: "rangle", ttype: h },
    { input: "<<", tag: "mo", output: "\u2329", tex: null, ttype: b },
    { input: ">>", tag: "mo", output: "\u232A", tex: null, ttype: h },
    {
      input: "{:",
      tag: "mo",
      output: "{:",
      tex: null,
      ttype: b,
      invisible: true
    },
    {
      input: ":}",
      tag: "mo",
      output: ":}",
      tex: null,
      ttype: h,
      invisible: true
    },
    { input: "int", tag: "mo", output: "\u222B", tex: null, ttype: c },
    { input: "dx", tag: "mi", output: "{:d x:}", tex: null, ttype: V },
    { input: "dy", tag: "mi", output: "{:d y:}", tex: null, ttype: V },
    { input: "dz", tag: "mi", output: "{:d z:}", tex: null, ttype: V },
    { input: "dt", tag: "mi", output: "{:d t:}", tex: null, ttype: V },
    { input: "oint", tag: "mo", output: "\u222E", tex: null, ttype: c },
    { input: "del", tag: "mo", output: "\u2202", tex: "partial", ttype: c },
    { input: "grad", tag: "mo", output: "\u2207", tex: "nabla", ttype: c },
    { input: "+-", tag: "mo", output: "\u00B1", tex: "pm", ttype: c },
    { input: "O/", tag: "mo", output: "\u2205", tex: "emptyset", ttype: c },
    { input: "oo", tag: "mo", output: "\u221E", tex: "infty", ttype: c },
    { input: "aleph", tag: "mo", output: "\u2135", tex: null, ttype: c },
    { input: "...", tag: "mo", output: "...", tex: "ldots", ttype: c },
    { input: ":.", tag: "mo", output: "\u2234", tex: "therefore", ttype: c },
    { input: ":'", tag: "mo", output: "\u2235", tex: "because", ttype: c },
    { input: "/_", tag: "mo", output: "\u2220", tex: "angle", ttype: c },
    { input: "/_\\", tag: "mo", output: "\u25B3", tex: "triangle", ttype: c },
    { input: "'", tag: "mo", output: "\u2032", tex: "prime", ttype: c },
    {
      input: "tilde",
      tag: "mover",
      output: "~",
      tex: null,
      ttype: A,
      acc: true
    },
    { input: "\\ ", tag: "mo", output: "\u00A0", tex: null, ttype: c },
    { input: "frown", tag: "mo", output: "\u2322", tex: null, ttype: c },
    { input: "quad", tag: "mo", output: "\u00A0\u00A0", tex: null, ttype: c },
    {
      input: "qquad",
      tag: "mo",
      output: "\u00A0\u00A0\u00A0\u00A0",
      tex: null,
      ttype: c
    },
    { input: "cdots", tag: "mo", output: "\u22EF", tex: null, ttype: c },
    { input: "vdots", tag: "mo", output: "\u22EE", tex: null, ttype: c },
    { input: "ddots", tag: "mo", output: "\u22F1", tex: null, ttype: c },
    { input: "diamond", tag: "mo", output: "\u22C4", tex: null, ttype: c },
    { input: "square", tag: "mo", output: "\u25A1", tex: null, ttype: c },
    { input: "|__", tag: "mo", output: "\u230A", tex: "lfloor", ttype: c },
    { input: "__|", tag: "mo", output: "\u230B", tex: "rfloor", ttype: c },
    { input: "|~", tag: "mo", output: "\u2308", tex: "lceiling", ttype: c },
    { input: "~|", tag: "mo", output: "\u2309", tex: "rceiling", ttype: c },
    { input: "CC", tag: "mo", output: "\u2102", tex: null, ttype: c },
    { input: "NN", tag: "mo", output: "\u2115", tex: null, ttype: c },
    { input: "QQ", tag: "mo", output: "\u211A", tex: null, ttype: c },
    { input: "RR", tag: "mo", output: "\u211D", tex: null, ttype: c },
    { input: "ZZ", tag: "mo", output: "\u2124", tex: null, ttype: c },
    { input: "f", tag: "mi", output: "f", tex: null, ttype: A, func: true },
    { input: "g", tag: "mi", output: "g", tex: null, ttype: A, func: true },
    { input: "lim", tag: "mo", output: "lim", tex: null, ttype: L },
    { input: "Lim", tag: "mo", output: "Lim", tex: null, ttype: L },
    { input: "sin", tag: "mo", output: "sin", tex: null, ttype: A, func: true },
    { input: "cos", tag: "mo", output: "cos", tex: null, ttype: A, func: true },
    { input: "tan", tag: "mo", output: "tan", tex: null, ttype: A, func: true },
    {
      input: "sinh",
      tag: "mo",
      output: "sinh",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "cosh",
      tag: "mo",
      output: "cosh",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "tanh",
      tag: "mo",
      output: "tanh",
      tex: null,
      ttype: A,
      func: true
    },
    { input: "cot", tag: "mo", output: "cot", tex: null, ttype: A, func: true },
    { input: "sec", tag: "mo", output: "sec", tex: null, ttype: A, func: true },
    { input: "csc", tag: "mo", output: "csc", tex: null, ttype: A, func: true },
    {
      input: "arcsin",
      tag: "mo",
      output: "arcsin",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "arccos",
      tag: "mo",
      output: "arccos",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "arctan",
      tag: "mo",
      output: "arctan",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "coth",
      tag: "mo",
      output: "coth",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "sech",
      tag: "mo",
      output: "sech",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "csch",
      tag: "mo",
      output: "csch",
      tex: null,
      ttype: A,
      func: true
    },
    { input: "exp", tag: "mo", output: "exp", tex: null, ttype: A, func: true },
    {
      input: "abs",
      tag: "mo",
      output: "abs",
      tex: null,
      ttype: A,
      rewriteleftright: ["|", "|"]
    },
    {
      input: "norm",
      tag: "mo",
      output: "norm",
      tex: null,
      ttype: A,
      rewriteleftright: ["\u2225", "\u2225"]
    },
    {
      input: "floor",
      tag: "mo",
      output: "floor",
      tex: null,
      ttype: A,
      rewriteleftright: ["\u230A", "\u230B"]
    },
    {
      input: "ceil",
      tag: "mo",
      output: "ceil",
      tex: null,
      ttype: A,
      rewriteleftright: ["\u2308", "\u2309"]
    },
    { input: "log", tag: "mo", output: "log", tex: null, ttype: A, func: true },
    { input: "ln", tag: "mo", output: "ln", tex: null, ttype: A, func: true },
    { input: "det", tag: "mo", output: "det", tex: null, ttype: A, func: true },
    { input: "dim", tag: "mo", output: "dim", tex: null, ttype: c },
    { input: "mod", tag: "mo", output: "mod", tex: null, ttype: c },
    { input: "gcd", tag: "mo", output: "gcd", tex: null, ttype: A, func: true },
    { input: "lcm", tag: "mo", output: "lcm", tex: null, ttype: A, func: true },
    { input: "lub", tag: "mo", output: "lub", tex: null, ttype: c },
    { input: "glb", tag: "mo", output: "glb", tex: null, ttype: c },
    { input: "min", tag: "mo", output: "min", tex: null, ttype: L },
    { input: "max", tag: "mo", output: "max", tex: null, ttype: L },
    { input: "Sin", tag: "mo", output: "Sin", tex: null, ttype: A, func: true },
    { input: "Cos", tag: "mo", output: "Cos", tex: null, ttype: A, func: true },
    { input: "Tan", tag: "mo", output: "Tan", tex: null, ttype: A, func: true },
    {
      input: "Arcsin",
      tag: "mo",
      output: "Arcsin",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "Arccos",
      tag: "mo",
      output: "Arccos",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "Arctan",
      tag: "mo",
      output: "Arctan",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "Sinh",
      tag: "mo",
      output: "Sinh",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "Cosh",
      tag: "mo",
      output: "Cosh",
      tex: null,
      ttype: A,
      func: true
    },
    {
      input: "Tanh",
      tag: "mo",
      output: "Tanh",
      tex: null,
      ttype: A,
      func: true
    },
    { input: "Cot", tag: "mo", output: "Cot", tex: null, ttype: A, func: true },
    { input: "Sec", tag: "mo", output: "Sec", tex: null, ttype: A, func: true },
    { input: "Csc", tag: "mo", output: "Csc", tex: null, ttype: A, func: true },
    { input: "Log", tag: "mo", output: "Log", tex: null, ttype: A, func: true },
    { input: "Ln", tag: "mo", output: "Ln", tex: null, ttype: A, func: true },
    {
      input: "Abs",
      tag: "mo",
      output: "abs",
      tex: null,
      ttype: A,
      notexcopy: true,
      rewriteleftright: ["|", "|"]
    },
    { input: "uarr", tag: "mo", output: "\u2191", tex: "uparrow", ttype: c },
    { input: "darr", tag: "mo", output: "\u2193", tex: "downarrow", ttype: c },
    { input: "rarr", tag: "mo", output: "\u2192", tex: "rightarrow", ttype: c },
    { input: "->", tag: "mo", output: "\u2192", tex: "to", ttype: c },
    {
      input: ">->",
      tag: "mo",
      output: "\u21A3",
      tex: "rightarrowtail",
      ttype: c
    },
    {
      input: "->>",
      tag: "mo",
      output: "\u21A0",
      tex: "twoheadrightarrow",
      ttype: c
    },
    {
      input: ">->>",
      tag: "mo",
      output: "\u2916",
      tex: "twoheadrightarrowtail",
      ttype: c
    },
    { input: "|->", tag: "mo", output: "\u21A6", tex: "mapsto", ttype: c },
    { input: "larr", tag: "mo", output: "\u2190", tex: "leftarrow", ttype: c },
    {
      input: "harr",
      tag: "mo",
      output: "\u2194",
      tex: "leftrightarrow",
      ttype: c
    },
    { input: "rArr", tag: "mo", output: "\u21D2", tex: "Rightarrow", ttype: c },
    { input: "lArr", tag: "mo", output: "\u21D0", tex: "Leftarrow", ttype: c },
    {
      input: "hArr",
      tag: "mo",
      output: "\u21D4",
      tex: "Leftrightarrow",
      ttype: c
    },
    { input: "sqrt", tag: "msqrt", output: "sqrt", tex: null, ttype: A },
    { input: "root", tag: "mroot", output: "root", tex: null, ttype: U },
    { input: "frac", tag: "mfrac", output: "/", tex: null, ttype: U },
    { input: "/", tag: "mfrac", output: "/", tex: null, ttype: i },
    {
      input: "stackrel",
      tag: "mover",
      output: "stackrel",
      tex: null,
      ttype: U
    },
    { input: "overset", tag: "mover", output: "stackrel", tex: null, ttype: U },
    {
      input: "underset",
      tag: "munder",
      output: "stackrel",
      tex: null,
      ttype: U
    },
    { input: "_", tag: "msub", output: "_", tex: null, ttype: i },
    { input: "^", tag: "msup", output: "^", tex: null, ttype: i },
    {
      input: "hat",
      tag: "mover",
      output: "\u005E",
      tex: null,
      ttype: A,
      acc: true
    },
    {
      input: "bar",
      tag: "mover",
      output: "\u00AF",
      tex: "overline",
      ttype: A,
      acc: true
    },
    {
      input: "vec",
      tag: "mover",
      output: "\u2192",
      tex: null,
      ttype: A,
      acc: true
    },
    { input: "dot", tag: "mover", output: ".", tex: null, ttype: A, acc: true },
    {
      input: "ddot",
      tag: "mover",
      output: "..",
      tex: null,
      ttype: A,
      acc: true
    },
    {
      input: "overarc",
      tag: "mover",
      output: "\u23DC",
      tex: "overparen",
      ttype: A,
      acc: true
    },
    {
      input: "ul",
      tag: "munder",
      output: "\u0332",
      tex: "underline",
      ttype: A,
      acc: true
    },
    {
      input: "ubrace",
      tag: "munder",
      output: "\u23DF",
      tex: "underbrace",
      ttype: K,
      acc: true
    },
    {
      input: "obrace",
      tag: "mover",
      output: "\u23DE",
      tex: "overbrace",
      ttype: K,
      acc: true
    },
    { input: "text", tag: "mtext", output: "text", tex: null, ttype: Y },
    { input: "mbox", tag: "mtext", output: "mbox", tex: null, ttype: Y },
    { input: "color", tag: "mstyle", ttype: U },
    { input: "id", tag: "mrow", ttype: U },
    { input: "class", tag: "mrow", ttype: U },
    { input: "cancel", tag: "menclose", output: "cancel", tex: null, ttype: A },
    k,
    {
      input: "bb",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "bold",
      output: "bb",
      tex: null,
      ttype: A
    },
    {
      input: "mathbf",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "bold",
      output: "mathbf",
      tex: null,
      ttype: A
    },
    {
      input: "sf",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "sans-serif",
      output: "sf",
      tex: null,
      ttype: A
    },
    {
      input: "mathsf",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "sans-serif",
      output: "mathsf",
      tex: null,
      ttype: A
    },
    {
      input: "bbb",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "double-struck",
      output: "bbb",
      tex: null,
      ttype: A,
      codes: w
    },
    {
      input: "mathbb",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "double-struck",
      output: "mathbb",
      tex: null,
      ttype: A,
      codes: w
    },
    {
      input: "cc",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "script",
      output: "cc",
      tex: null,
      ttype: A,
      codes: D
    },
    {
      input: "mathcal",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "script",
      output: "mathcal",
      tex: null,
      ttype: A,
      codes: D
    },
    {
      input: "tt",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "monospace",
      output: "tt",
      tex: null,
      ttype: A
    },
    {
      input: "mathtt",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "monospace",
      output: "mathtt",
      tex: null,
      ttype: A
    },
    {
      input: "fr",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "fraktur",
      output: "fr",
      tex: null,
      ttype: A,
      codes: H
    },
    {
      input: "mathfrak",
      tag: "mstyle",
      atname: "mathvariant",
      atval: "fraktur",
      output: "mathfrak",
      tex: null,
      ttype: A,
      codes: H
    }
  ];
  function T(ac, ab) {
    if (ac.input > ab.input) {
      return 1;
    } else {
      return -1;
    }
  }
  var S = [];
  function n() {
    var ac;
    var ab = z.length;
    for (ac = 0; ac < ab; ac++) {
      if (z[ac].tex) {
        z.push({
          input: z[ac].tex,
          tag: z[ac].tag,
          output: z[ac].output,
          ttype: z[ac].ttype,
          acc: z[ac].acc || false
        });
      }
    }
    B();
  }
  function B() {
    var ab;
    z.sort(T);
    for (ab = 0; ab < z.length; ab++) {
      S[ab] = z[ab].input;
    }
  }
  function I(ab, ac) {
    z.push({ input: ab, tag: "mo", output: ac, tex: null, ttype: V });
    B();
  }
  function p(ad, ae) {
    var ab;
    if (
      ad.charAt(ae) == "\\" &&
      ad.charAt(ae + 1) != "\\" &&
      ad.charAt(ae + 1) != " "
    ) {
      ab = ad.slice(ae + 1);
    } else {
      ab = ad.slice(ae);
    }
    for (var ac = 0; ac < ab.length && ab.charCodeAt(ac) <= 32; ac = ac + 1) {}
    return ab.slice(ac);
  }
  function N(ac, af, ag) {
    if (ag == 0) {
      var ae, ab;
      ag = -1;
      ae = ac.length;
      while (ag + 1 < ae) {
        ab = (ag + ae) >> 1;
        if (ac[ab] < af) {
          ag = ab;
        } else {
          ae = ab;
        }
      }
      return ae;
    } else {
      for (var ad = ag; ad < ac.length && ac[ad] < af; ad++) {}
    }
    return ad;
  }
  function j(ah) {
    var ab = 0;
    var ac = 0;
    var ae;
    var ak;
    var aj;
    var af = "";
    var ag = true;
    for (var ad = 1; ad <= ah.length && ag; ad++) {
      ak = ah.slice(0, ad);
      ac = ab;
      ab = N(S, ak, ac);
      if (ab < S.length && ah.slice(0, S[ab].length) == S[ab]) {
        af = S[ab];
        ae = ab;
        ad = af.length;
      }
      ag = ab < S.length && ah.slice(0, S[ab].length) >= S[ab];
    }
    s = y;
    if (af != "") {
      y = z[ae].ttype;
      return z[ae];
    }
    y = c;
    ab = 1;
    ak = ah.slice(0, 1);
    var ai = true;
    while ("0" <= ak && ak <= "9" && ab <= ah.length) {
      ak = ah.slice(ab, ab + 1);
      ab++;
    }
    if (ak == d) {
      ak = ah.slice(ab, ab + 1);
      if ("0" <= ak && ak <= "9") {
        ai = false;
        ab++;
        while ("0" <= ak && ak <= "9" && ab <= ah.length) {
          ak = ah.slice(ab, ab + 1);
          ab++;
        }
      }
    }
    if ((ai && ab > 1) || ab > 2) {
      ak = ah.slice(0, ab - 1);
      aj = "mn";
    } else {
      ab = 2;
      ak = ah.slice(0, 1);
      aj = ("A" > ak || ak > "Z") && ("a" > ak || ak > "z") ? "mo" : "mi";
    }
    if (ak == "-" && s == i) {
      y = i;
      return { input: ak, tag: aj, output: ak, ttype: A, func: true };
    }
    return { input: ak, tag: aj, output: ak, ttype: c };
  }
  function R(ac) {
    var ab;
    if (!ac.hasChildNodes()) {
      return;
    }
    if (
      ac.firstChild.hasChildNodes() &&
      (ac.nodeName == "mrow" || ac.nodeName == "M:MROW")
    ) {
      ab = ac.firstChild.firstChild.nodeValue;
      if (ab == "(" || ab == "[" || ab == "{") {
        ac.removeChild(ac.firstChild);
      }
    }
    if (
      ac.lastChild.hasChildNodes() &&
      (ac.nodeName == "mrow" || ac.nodeName == "M:MROW")
    ) {
      ab = ac.lastChild.firstChild.nodeValue;
      if (ab == ")" || ab == "]" || ab == "}") {
        ac.removeChild(ac.lastChild);
      }
    }
  }
  var F, s, y;
  function G(ai) {
    var ad,
      ac,
      al,
      af,
      ak,
      ag = e.createDocumentFragment();
    ai = p(ai, 0);
    ad = j(ai);
    if (ad == null || (ad.ttype == h && F > 0)) {
      return [null, ai];
    }
    if (ad.ttype == V) {
      ai = ad.output + p(ai, ad.input.length);
      ad = j(ai);
    }
    switch (ad.ttype) {
      case L:
      case c:
        ai = p(ai, ad.input.length);
        return [O(ad.tag, e.createTextNode(ad.output)), ai];
      case b:
        F++;
        ai = p(ai, ad.input.length);
        al = q(ai, true);
        F--;
        if (typeof ad.invisible == "boolean" && ad.invisible) {
          ac = O("mrow", al[0]);
        } else {
          ac = O("mo", e.createTextNode(ad.output));
          ac = O("mrow", ac);
          ac.appendChild(al[0]);
        }
        return [ac, al[1]];
      case Y:
        if (ad != k) {
          ai = p(ai, ad.input.length);
        }
        if (ai.charAt(0) == "{") {
          af = ai.indexOf("}");
        } else {
          if (ai.charAt(0) == "(") {
            af = ai.indexOf(")");
          } else {
            if (ai.charAt(0) == "[") {
              af = ai.indexOf("]");
            } else {
              if (ad == k) {
                af = ai.slice(1).indexOf('"') + 1;
              } else {
                af = 0;
              }
            }
          }
        }
        if (af == -1) {
          af = ai.length;
        }
        ak = ai.slice(1, af);
        if (ak.charAt(0) == " ") {
          ac = O("mspace");
          ac.setAttribute("width", "1ex");
          ag.appendChild(ac);
        }
        ag.appendChild(O(ad.tag, e.createTextNode(ak)));
        if (ak.charAt(ak.length - 1) == " ") {
          ac = O("mspace");
          ac.setAttribute("width", "1ex");
          ag.appendChild(ac);
        }
        ai = p(ai, af + 1);
        return [O("mrow", ag), ai];
      case K:
      case A:
        ai = p(ai, ad.input.length);
        al = G(ai);
        if (al[0] == null) {
          return [O(ad.tag, e.createTextNode(ad.output)), ai];
        }
        if (typeof ad.func == "boolean" && ad.func) {
          ak = ai.charAt(0);
          if (
            ak == "^" ||
            ak == "_" ||
            ak == "/" ||
            ak == "|" ||
            ak == "," ||
            (ad.input.length == 1 && ad.input.match(/\w/) && ak != "(")
          ) {
            return [O(ad.tag, e.createTextNode(ad.output)), ai];
          } else {
            ac = O("mrow", O(ad.tag, e.createTextNode(ad.output)));
            ac.appendChild(al[0]);
            return [ac, al[1]];
          }
        }
        R(al[0]);
        if (ad.input == "sqrt") {
          return [O(ad.tag, al[0]), al[1]];
        } else {
          if (typeof ad.rewriteleftright != "undefined") {
            ac = O("mrow", O("mo", e.createTextNode(ad.rewriteleftright[0])));
            ac.appendChild(al[0]);
            ac.appendChild(O("mo", e.createTextNode(ad.rewriteleftright[1])));
            return [ac, al[1]];
          } else {
            if (ad.input == "cancel") {
              ac = O(ad.tag, al[0]);
              ac.setAttribute("notation", "updiagonalstrike");
              return [ac, al[1]];
            } else {
              if (typeof ad.acc == "boolean" && ad.acc) {
                ac = O(ad.tag, al[0]);
                var ah = O("mo", e.createTextNode(ad.output));
                if (
                  ad.input == "vec" &&
                  ((al[0].nodeName == "mrow" &&
                    al[0].childNodes.length == 1 &&
                    al[0].firstChild.firstChild.nodeValue !== null &&
                    al[0].firstChild.firstChild.nodeValue.length == 1) ||
                    (al[0].firstChild.nodeValue !== null &&
                      al[0].firstChild.nodeValue.length == 1))
                ) {
                  ah.setAttribute("stretchy", false);
                }
                ac.appendChild(ah);
                return [ac, al[1]];
              } else {
                if (!l && typeof ad.codes != "undefined") {
                  for (af = 0; af < al[0].childNodes.length; af++) {
                    if (
                      al[0].childNodes[af].nodeName == "mi" ||
                      al[0].nodeName == "mi"
                    ) {
                      ak =
                        al[0].nodeName == "mi"
                          ? al[0].firstChild.nodeValue
                          : al[0].childNodes[af].firstChild.nodeValue;
                      var aj = [];
                      for (var ae = 0; ae < ak.length; ae++) {
                        if (ak.charCodeAt(ae) > 64 && ak.charCodeAt(ae) < 91) {
                          aj = aj + ad.codes[ak.charCodeAt(ae) - 65];
                        } else {
                          if (
                            ak.charCodeAt(ae) > 96 &&
                            ak.charCodeAt(ae) < 123
                          ) {
                            aj = aj + ad.codes[ak.charCodeAt(ae) - 71];
                          } else {
                            aj = aj + ak.charAt(ae);
                          }
                        }
                      }
                      if (al[0].nodeName == "mi") {
                        al[0] = O("mo").appendChild(e.createTextNode(aj));
                      } else {
                        al[0].replaceChild(
                          O("mo").appendChild(e.createTextNode(aj)),
                          al[0].childNodes[af]
                        );
                      }
                    }
                  }
                }
                ac = O(ad.tag, al[0]);
                ac.setAttribute(ad.atname, ad.atval);
                return [ac, al[1]];
              }
            }
          }
        }
      case U:
        ai = p(ai, ad.input.length);
        al = G(ai);
        if (al[0] == null) {
          return [O("mo", e.createTextNode(ad.input)), ai];
        }
        R(al[0]);
        var ab = G(al[1]);
        if (ab[0] == null) {
          return [O("mo", e.createTextNode(ad.input)), ai];
        }
        R(ab[0]);
        if (["color", "class", "id"].indexOf(ad.input) >= 0) {
          if (ai.charAt(0) == "{") {
            af = ai.indexOf("}");
          } else {
            if (ai.charAt(0) == "(") {
              af = ai.indexOf(")");
            } else {
              if (ai.charAt(0) == "[") {
                af = ai.indexOf("]");
              }
            }
          }
          ak = ai.slice(1, af);
          ac = O(ad.tag, ab[0]);
          if (ad.input === "color") {
            ac.setAttribute("mathcolor", ak);
          } else {
            if (ad.input === "class") {
              ac.setAttribute("class", ak);
            } else {
              if (ad.input === "id") {
                ac.setAttribute("id", ak);
              }
            }
          }
          return [ac, ab[1]];
        }
        if (ad.input == "root" || ad.output == "stackrel") {
          ag.appendChild(ab[0]);
        }
        ag.appendChild(al[0]);
        if (ad.input == "frac") {
          ag.appendChild(ab[0]);
        }
        return [O(ad.tag, ag), ab[1]];
      case i:
        ai = p(ai, ad.input.length);
        return [O("mo", e.createTextNode(ad.output)), ai];
      case a:
        ai = p(ai, ad.input.length);
        ac = O("mspace");
        ac.setAttribute("width", "1ex");
        ag.appendChild(ac);
        ag.appendChild(O(ad.tag, e.createTextNode(ad.output)));
        ac = O("mspace");
        ac.setAttribute("width", "1ex");
        ag.appendChild(ac);
        return [O("mrow", ag), ai];
      case m:
        F++;
        ai = p(ai, ad.input.length);
        al = q(ai, false);
        F--;
        ak = "";
        if (al[0].lastChild != null) {
          ak = al[0].lastChild.firstChild.nodeValue;
        }
        if (ak == "|" && ai.charAt(0) !== ",") {
          ac = O("mo", e.createTextNode(ad.output));
          ac = O("mrow", ac);
          ac.appendChild(al[0]);
          return [ac, al[1]];
        } else {
          ac = O("mo", e.createTextNode("\u2223"));
          ac = O("mrow", ac);
          return [ac, ai];
        }
      default:
        ai = p(ai, ad.input.length);
        return [O(ad.tag, e.createTextNode(ad.output)), ai];
    }
  }
  function t(ah) {
    var af, ai, ag, ae, ab, ad;
    ah = p(ah, 0);
    ai = j(ah);
    ab = G(ah);
    ae = ab[0];
    ah = ab[1];
    af = j(ah);
    if (af.ttype == i && af.input != "/") {
      ah = p(ah, af.input.length);
      ab = G(ah);
      if (ab[0] == null) {
        ab[0] = O("mo", e.createTextNode("\u25A1"));
      } else {
        R(ab[0]);
      }
      ah = ab[1];
      ad = ai.ttype == L || ai.ttype == K;
      if (af.input == "_") {
        ag = j(ah);
        if (ag.input == "^") {
          ah = p(ah, ag.input.length);
          var ac = G(ah);
          R(ac[0]);
          ah = ac[1];
          ae = O(ad ? "munderover" : "msubsup", ae);
          ae.appendChild(ab[0]);
          ae.appendChild(ac[0]);
          ae = O("mrow", ae);
        } else {
          ae = O(ad ? "munder" : "msub", ae);
          ae.appendChild(ab[0]);
        }
      } else {
        if (af.input == "^" && ad) {
          ae = O("mover", ae);
          ae.appendChild(ab[0]);
        } else {
          ae = O(af.tag, ae);
          ae.appendChild(ab[0]);
        }
      }
      if (typeof ai.func != "undefined" && ai.func) {
        ag = j(ah);
        if (ag.ttype != i && ag.ttype != h) {
          ab = t(ah);
          ae = O("mrow", ae);
          ae.appendChild(ab[0]);
          ah = ab[1];
        }
      }
    }
    return [ae, ah];
  }
  function q(ak, aj) {
    var ao,
      al,
      ag,
      ar,
      ah = e.createDocumentFragment();
    do {
      ak = p(ak, 0);
      ag = t(ak);
      al = ag[0];
      ak = ag[1];
      ao = j(ak);
      if (ao.ttype == i && ao.input == "/") {
        ak = p(ak, ao.input.length);
        ag = t(ak);
        if (ag[0] == null) {
          ag[0] = O("mo", e.createTextNode("\u25A1"));
        } else {
          R(ag[0]);
        }
        ak = ag[1];
        R(al);
        al = O(ao.tag, al);
        al.appendChild(ag[0]);
        ah.appendChild(al);
        ao = j(ak);
      } else {
        if (al != undefined) {
          ah.appendChild(al);
        }
      }
    } while (
      ((ao.ttype != h && (ao.ttype != m || aj)) || F == 0) &&
      ao != null &&
      ao.output != ""
    );
    if (ao.ttype == h || ao.ttype == m) {
      var at = ah.childNodes.length;
      if (
        at > 0 &&
        ah.childNodes[at - 1].nodeName == "mrow" &&
        ah.childNodes[at - 1].lastChild &&
        ah.childNodes[at - 1].lastChild.firstChild
      ) {
        var av = ah.childNodes[at - 1].lastChild.firstChild.nodeValue;
        if (av == ")" || av == "]") {
          var ac = ah.childNodes[at - 1].firstChild.firstChild.nodeValue;
          if (
            (ac == "(" && av == ")" && ao.output != "}") ||
            (ac == "[" && av == "]")
          ) {
            var ad = [];
            var ap = true;
            var am = ah.childNodes.length;
            for (ar = 0; ap && ar < am; ar = ar + 2) {
              ad[ar] = [];
              al = ah.childNodes[ar];
              if (ap) {
                ap =
                  al.nodeName == "mrow" &&
                  (ar == am - 1 ||
                    (al.nextSibling.nodeName == "mo" &&
                      al.nextSibling.firstChild.nodeValue == ",")) &&
                  al.firstChild.firstChild.nodeValue == ac &&
                  al.lastChild.firstChild.nodeValue == av;
              }
              if (ap) {
                for (var aq = 0; aq < al.childNodes.length; aq++) {
                  if (al.childNodes[aq].firstChild.nodeValue == ",") {
                    ad[ar][ad[ar].length] = aq;
                  }
                }
              }
              if (ap && ar > 1) {
                ap = ad[ar].length == ad[ar - 2].length;
              }
            }
            ap = ap && (ad.length > 1 || ad[0].length > 0);
            var af = [];
            if (ap) {
              var ae,
                ab,
                ai,
                an,
                au = e.createDocumentFragment();
              for (ar = 0; ar < am; ar = ar + 2) {
                ae = e.createDocumentFragment();
                ab = e.createDocumentFragment();
                al = ah.firstChild;
                ai = al.childNodes.length;
                an = 0;
                al.removeChild(al.firstChild);
                for (aq = 1; aq < ai - 1; aq++) {
                  if (typeof ad[ar][an] != "undefined" && aq == ad[ar][an]) {
                    al.removeChild(al.firstChild);
                    if (
                      al.firstChild.nodeName == "mrow" &&
                      al.firstChild.childNodes.length == 1 &&
                      al.firstChild.firstChild.firstChild.nodeValue == "\u2223"
                    ) {
                      if (ar == 0) {
                        af.push("solid");
                      }
                      al.removeChild(al.firstChild);
                      al.removeChild(al.firstChild);
                      aq += 2;
                      an++;
                    } else {
                      if (ar == 0) {
                        af.push("none");
                      }
                    }
                    ae.appendChild(O("mtd", ab));
                    an++;
                  } else {
                    ab.appendChild(al.firstChild);
                  }
                }
                ae.appendChild(O("mtd", ab));
                if (ar == 0) {
                  af.push("none");
                }
                if (ah.childNodes.length > 2) {
                  ah.removeChild(ah.firstChild);
                  ah.removeChild(ah.firstChild);
                }
                au.appendChild(O("mtr", ae));
              }
              al = O("mtable", au);
              al.setAttribute("columnlines", af.join(" "));
              if (typeof ao.invisible == "boolean" && ao.invisible) {
                al.setAttribute("columnalign", "left");
              }
              ah.replaceChild(al, ah.firstChild);
            }
          }
        }
      }
      ak = p(ak, ao.input.length);
      if (typeof ao.invisible != "boolean" || !ao.invisible) {
        al = O("mo", e.createTextNode(ao.output));
        ah.appendChild(al);
      }
    }
    return [ah, ak];
  }
  function M(ad, ac) {
    var ae, ab;
    F = 0;
    ad = ad.replace(/&nbsp;/g, "");
    ad = ad.replace(/&gt;/g, ">");
    ad = ad.replace(/&lt;/g, "<");
    ae = q(ad.replace(/^\s+/g, ""), false)[0];
    ab = O("mstyle", ae);
    if (C != "") {
      ab.setAttribute("mathcolor", C);
    }
    if (mathfontsize != "") {
      ab.setAttribute("fontsize", mathfontsize);
      ab.setAttribute("mathsize", mathfontsize);
    }
    if (mathfontfamily != "") {
      ab.setAttribute("fontfamily", mathfontfamily);
      ab.setAttribute("mathvariant", mathfontfamily);
    }
    if (o) {
      ab.setAttribute("displaystyle", "true");
    }
    ab = O("math", ab);
    if (v) {
      ab.setAttribute("title", ad.replace(/\s+/g, " "));
    }
    return ab;
  }
  v = false;
  mathfontfamily = "";
  C = "";
  mathfontsize = "";
  (function() {
    for (var ac = 0, ab = z.length; ac < ab; ac++) {
      if (z[ac].codes) {
        delete z[ac].codes;
      }
      if (z[ac].func) {
        z[ac].tag = "mi";
      }
    }
  })();
  aa.Augment({
    AM: {
      Init: function() {
        o = aa.config.displaystyle;
        d = aa.config.decimal || aa.config.decimalsign;
        if (!aa.config.fixphi) {
          for (var ac = 0, ab = z.length; ac < ab; ac++) {
            if (z[ac].input === "phi") {
              z[ac].output = "\u03C6";
            }
            if (z[ac].input === "varphi") {
              z[ac].output = "\u03D5";
              ac = ab;
            }
          }
        }
        x();
        n();
      },
      Augment: function(ab) {
        for (var ac in ab) {
          if (ab.hasOwnProperty(ac)) {
            switch (ac) {
              case "displaystyle":
                o = ab[ac];
                break;
              case "decimal":
                decimal = ab[ac];
                break;
              case "parseMath":
                M = ab[ac];
                break;
              case "parseExpr":
                q = ab[ac];
                break;
              case "parseIexpr":
                t = ab[ac];
                break;
              case "parseSexpr":
                G = ab[ac];
                break;
              case "removeBrackets":
                R = ab[ac];
                break;
              case "getSymbol":
                j = ab[ac];
                break;
              case "position":
                N = ab[ac];
                break;
              case "removeCharsAndBlanks":
                p = ab[ac];
                break;
              case "createMmlNode":
                O = ab[ac];
                break;
              case "createElementMathML":
                P = ab[ac];
                break;
              case "createElementXHTML":
                E = ab[ac];
                break;
              case "initSymbols":
                n = ab[ac];
                break;
              case "refreshSymbols":
                B = ab[ac];
                break;
              case "compareNames":
                T = ab[ac];
                break;
            }
            this[ac] = ab[ac];
          }
        }
      },
      parseMath: M,
      parseExpr: q,
      parseIexpr: t,
      parseSexr: G,
      removeBrackets: R,
      getSymbol: j,
      position: N,
      removeCharsAndBlanks: p,
      createMmlNode: O,
      createElementMathML: P,
      createElementXHTML: E,
      initSymbols: n,
      refreshSymbols: B,
      compareNames: T,
      createDocumentFragment: X,
      document: e,
      define: I,
      newcommand: u,
      newsymbol: r,
      symbols: z,
      names: S,
      TOKEN: {
        CONST: c,
        UNARY: A,
        BINARY: U,
        INFIX: i,
        LEFTBRACKET: b,
        RIGHTBRACKET: h,
        SPACE: a,
        UNDEROVER: L,
        DEFINITION: V,
        LEFTRIGHT: m,
        TEXT: Y,
        UNARYUNDEROVER: K
      }
    }
  });
  var Z = [Q, J];
  Z = null;
})(MathJax.InputJax.AsciiMath);
(function(b) {
  var a;
  b.Augment({
    sourceMenuTitle: ["AsciiMathInput", "AsciiMath Input"],
    annotationEncoding: "text/x-asciimath",
    prefilterHooks: MathJax.Callback.Hooks(true),
    postfilterHooks: MathJax.Callback.Hooks(true),
    Translate: function(c) {
      var d,
        f = MathJax.HTML.getScript(c);
      var g = { math: f, script: c };
      var h = this.prefilterHooks.Execute(g);
      if (h) {
        return h;
      }
      f = g.math;
      try {
        d = this.AM.parseMath(f);
      } catch (e) {
        if (!e.asciimathError) {
          throw e;
        }
        d = this.formatError(e, f);
      }
      g.math = a(d);
      this.postfilterHooks.Execute(g);
      return this.postfilterHooks.Execute(g) || g.math;
    },
    formatError: function(f, e, c) {
      var d = f.message.replace(/\n.*/, "");
      MathJax.Hub.signal.Post(["AsciiMath Jax - parse error", d, e, c]);
      return a.Error(d);
    },
    Error: function(c) {
      throw MathJax.Hub.Insert(Error(c), { asciimathError: true });
    },
    Startup: function() {
      a = MathJax.ElementJax.mml;
      this.AM.Init();
    }
  });
  b.loadComplete("jax.js");
})(MathJax.InputJax.AsciiMath);
(function(i, b, e, g) {
  var h;
  var j, a, d;
  var f = "'Times New Roman',Times,STIXGeneral,serif";
  var m = {
    ".MJXp-script": { "font-size": ".8em" },
    ".MJXp-right": {
      "-webkit-transform-origin": "right",
      "-moz-transform-origin": "right",
      "-ms-transform-origin": "right",
      "-o-transform-origin": "right",
      "transform-origin": "right"
    },
    ".MJXp-bold": { "font-weight": "bold" },
    ".MJXp-italic": { "font-style": "italic" },
    ".MJXp-scr": { "font-family": "MathJax_Script," + f },
    ".MJXp-frak": { "font-family": "MathJax_Fraktur," + f },
    ".MJXp-sf": { "font-family": "MathJax_SansSerif," + f },
    ".MJXp-cal": { "font-family": "MathJax_Caligraphic," + f },
    ".MJXp-mono": { "font-family": "MathJax_Typewriter," + f },
    ".MJXp-largeop": { "font-size": "150%" },
    ".MJXp-largeop.MJXp-int": { "vertical-align": "-.2em" },
    ".MJXp-math": {
      display: "inline-block",
      "line-height": "1.2",
      "text-indent": "0",
      "font-family": f,
      "white-space": "nowrap",
      "border-collapse": "collapse"
    },
    ".MJXp-display": {
      display: "block",
      "text-align": "center",
      margin: "1em 0"
    },
    ".MJXp-math span": { display: "inline-block" },
    ".MJXp-box": { display: "block!important", "text-align": "center" },
    ".MJXp-box:after": { content: '" "' },
    ".MJXp-rule": { display: "block!important", "margin-top": ".1em" },
    ".MJXp-char": { display: "block!important" },
    ".MJXp-mo": { margin: "0 .15em" },
    ".MJXp-mfrac": { margin: "0 .125em", "vertical-align": ".25em" },
    ".MJXp-denom": { display: "inline-table!important", width: "100%" },
    ".MJXp-denom > *": { display: "table-row!important" },
    ".MJXp-surd": { "vertical-align": "top" },
    ".MJXp-surd > *": { display: "block!important" },
    ".MJXp-script-box > * ": { display: "table!important", height: "50%" },
    ".MJXp-script-box > * > *": {
      display: "table-cell!important",
      "vertical-align": "top"
    },
    ".MJXp-script-box > *:last-child > *": { "vertical-align": "bottom" },
    ".MJXp-script-box > * > * > *": { display: "block!important" },
    ".MJXp-mphantom": { visibility: "hidden" },
    ".MJXp-munderover, .MJXp-munder": { display: "inline-table!important" },
    ".MJXp-over": { display: "inline-block!important", "text-align": "center" },
    ".MJXp-over > *": { display: "block!important" },
    ".MJXp-munderover > *, .MJXp-munder > *": {
      display: "table-row!important"
    },
    ".MJXp-mtable": { "vertical-align": ".25em", margin: "0 .125em" },
    ".MJXp-mtable > *": {
      display: "inline-table!important",
      "vertical-align": "middle"
    },
    ".MJXp-mtr": { display: "table-row!important" },
    ".MJXp-mtd": {
      display: "table-cell!important",
      "text-align": "center",
      padding: ".5em 0 0 .5em"
    },
    ".MJXp-mtr > .MJXp-mtd:first-child": { "padding-left": 0 },
    ".MJXp-mtr:first-child > .MJXp-mtd": { "padding-top": 0 },
    ".MJXp-mlabeledtr": { display: "table-row!important" },
    ".MJXp-mlabeledtr > .MJXp-mtd:first-child": { "padding-left": 0 },
    ".MJXp-mlabeledtr:first-child > .MJXp-mtd": { "padding-top": 0 },
    ".MJXp-merror": {
      "background-color": "#FFFF88",
      color: "#CC0000",
      border: "1px solid #CC0000",
      padding: "1px 3px",
      "font-style": "normal",
      "font-size": "90%"
    }
  };
  (function() {
    for (var n = 0; n < 10; n++) {
      var o = "scaleX(." + n + ")";
      m[".MJXp-scale" + n] = {
        "-webkit-transform": o,
        "-moz-transform": o,
        "-ms-transform": o,
        "-o-transform": o,
        transform: o
      };
    }
  })();
  var k = 1000000;
  var c = "V",
    l = "H";
  g.Augment({
    settings: b.config.menuSettings,
    config: { styles: m },
    hideProcessedMath: false,
    maxStretchyParts: 1000,
    Config: function() {
      if (!this.require) {
        this.require = [];
      }
      this.SUPER(arguments).Config.call(this);
      var n = this.settings;
      if (n.scale) {
        this.config.scale = n.scale;
      }
      this.require.push(MathJax.OutputJax.extensionDir + "/MathEvents.js");
    },
    Startup: function() {
      j = MathJax.Extension.MathEvents.Event;
      a = MathJax.Extension.MathEvents.Touch;
      d = MathJax.Extension.MathEvents.Hover;
      this.ContextMenu = j.ContextMenu;
      this.Mousedown = j.AltContextMenu;
      this.Mouseover = d.Mouseover;
      this.Mouseout = d.Mouseout;
      this.Mousemove = d.Mousemove;
      var n = e.addElement(document.body, "div", { style: { width: "5in" } });
      this.pxPerInch = n.offsetWidth / 5;
      n.parentNode.removeChild(n);
      return i.Styles(this.config.styles, ["InitializePHTML", this]);
    },
    InitializePHTML: function() {},
    preTranslate: function(p) {
      var s = p.jax[this.id],
        t,
        q = s.length,
        u,
        r,
        v,
        o,
        n;
      for (t = 0; t < q; t++) {
        u = s[t];
        if (!u.parentNode) {
          continue;
        }
        r = u.previousSibling;
        if (
          r &&
          String(r.className).match(
            /^MathJax(_PHTML)?(_Display)?( MathJax_Process(ing|ed))?$/
          )
        ) {
          r.parentNode.removeChild(r);
        }
        n = u.MathJax.elementJax;
        if (!n) {
          continue;
        }
        n.PHTML = { display: n.root.Get("display") === "block" };
        v = o = e.Element("span", {
          className: "MathJax_PHTML",
          id: n.inputID + "-Frame",
          isMathJax: true,
          jaxID: this.id,
          oncontextmenu: j.Menu,
          onmousedown: j.Mousedown,
          onmouseover: j.Mouseover,
          onmouseout: j.Mouseout,
          onmousemove: j.Mousemove,
          onclick: j.Click,
          ondblclick: j.DblClick,
          onkeydown: j.Keydown,
          tabIndex: b.getTabOrder(n)
        });
        if (b.Browser.noContextMenu) {
          v.ontouchstart = a.start;
          v.ontouchend = a.end;
        }
        if (n.PHTML.display) {
          o = e.Element("div", { className: "MathJax_PHTML_Display" });
          o.appendChild(v);
        }
        o.className += " MathJax_Processing";
        u.parentNode.insertBefore(o, u);
      }
    },
    Translate: function(o, s) {
      if (!o.parentNode) {
        return;
      }
      var n = o.MathJax.elementJax,
        r = n.root,
        p = document.getElementById(n.inputID + "-Frame"),
        t = n.PHTML.display ? p.parentNode : p;
      this.initPHTML(r, p);
      try {
        r.toPreviewHTML(p);
      } catch (q) {
        if (q.restart) {
          while (p.firstChild) {
            p.removeChild(p.firstChild);
          }
        }
        throw q;
      }
      t.className = t.className.split(/ /)[0];
      if (this.hideProcessedMath) {
        t.className += " MathJax_Processed";
        if (o.MathJax.preview) {
          n.PHTML.preview = o.MathJax.preview;
          delete o.MathJax.preview;
        }
      }
    },
    postTranslate: function(s) {
      var o = s.jax[this.id];
      if (!this.hideProcessedMath) {
        return;
      }
      for (var q = 0, n = o.length; q < n; q++) {
        var p = o[q];
        if (p && p.MathJax.elementJax) {
          p.previousSibling.className = p.previousSibling.className.split(
            / /
          )[0];
          var r = p.MathJax.elementJax.PHTML;
          if (r.preview) {
            r.preview.innerHTML = "";
            p.MathJax.preview = r.preview;
            delete r.preview;
          }
        }
      }
    },
    getJaxFromMath: function(n) {
      if (n.parentNode.className.match(/MathJax_PHTML_Display/)) {
        n = n.parentNode;
      }
      do {
        n = n.nextSibling;
      } while (n && n.nodeName.toLowerCase() !== "script");
      return b.getJaxFor(n);
    },
    getHoverSpan: function(n, o) {
      return n.root.PHTMLspanElement();
    },
    getHoverBBox: function(n, q, r) {
      var s = n.root.PHTML,
        p = n.PHTML.outerEm;
      var o = { w: s.w * p, h: s.h * p, d: s.d * p };
      if (s.width) {
        o.width = s.width;
      }
      return o;
    },
    Zoom: function(o, u, s, n, r) {
      u.className = "MathJax";
      this.idPostfix = "-zoom";
      o.root.toPHTML(u, u);
      this.idPostfix = "";
      u.style.position = "absolute";
      if (!width) {
        s.style.position = "absolute";
      }
      var t = u.offsetWidth,
        q = u.offsetHeight,
        v = s.offsetHeight,
        p = s.offsetWidth;
      if (p === 0) {
        p = s.parentNode.offsetWidth;
      }
      u.style.position = s.style.position = "";
      return { Y: -j.getBBox(u).h, mW: p, mH: v, zW: t, zH: q };
    },
    initPHTML: function(o, n) {},
    Remove: function(n) {
      var o = document.getElementById(n.inputID + "-Frame");
      if (o) {
        if (n.PHTML.display) {
          o = o.parentNode;
        }
        o.parentNode.removeChild(o);
      }
      delete n.PHTML;
    },
    ID: 0,
    idPostfix: "",
    GetID: function() {
      this.ID++;
      return this.ID;
    },
    VARIANT: {
      bold: "MJXp-bold",
      italic: "MJXp-italic",
      "bold-italic": "MJXp-bold MJXp-italic",
      script: "MJXp-scr",
      "bold-script": "MJXp-scr MJXp-bold",
      fraktur: "MJXp-frak",
      "bold-fraktur": "MJXp-frak MJXp-bold",
      monospace: "MJXp-mono",
      "sans-serif": "MJXp-sf",
      "-tex-caligraphic": "MJXp-cal"
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
      negativeveryverythickmathspace: -7 / 18,
      thin: 0.08,
      medium: 0.1,
      thick: 0.15,
      infinity: k
    },
    TeX: { x_height: 0.430554 },
    pxPerInch: 72,
    em: 16,
    DELIMITERS: {
      "(": { dir: c },
      "{": { dir: c, w: 0.58 },
      "[": { dir: c },
      "|": { dir: c, w: 0.275 },
      ")": { dir: c },
      "}": { dir: c, w: 0.58 },
      "]": { dir: c },
      "/": { dir: c },
      "\\": { dir: c },
      "\u2223": { dir: c, w: 0.275 },
      "\u2225": { dir: c, w: 0.55 },
      "\u230A": { dir: c, w: 0.5 },
      "\u230B": { dir: c, w: 0.5 },
      "\u2308": { dir: c, w: 0.5 },
      "\u2309": { dir: c, w: 0.5 },
      "\u27E8": { dir: c, w: 0.5 },
      "\u27E9": { dir: c, w: 0.5 },
      "\u2191": { dir: c, w: 0.65 },
      "\u2193": { dir: c, w: 0.65 },
      "\u21D1": { dir: c, w: 0.75 },
      "\u21D3": { dir: c, w: 0.75 },
      "\u2195": { dir: c, w: 0.65 },
      "\u21D5": { dir: c, w: 0.75 },
      "\u27EE": { dir: c, w: 0.275 },
      "\u27EF": { dir: c, w: 0.275 },
      "\u23B0": { dir: c, w: 0.6 },
      "\u23B1": { dir: c, w: 0.6 }
    },
    REMAPACCENT: {
      "\u20D7": "\u2192",
      "'": "\u02CB",
      "`": "\u02CA",
      ".": "\u02D9",
      "^": "\u02C6",
      "-": "\u02C9",
      "~": "\u02DC",
      "\u00AF": "\u02C9",
      "\u00B0": "\u02DA",
      "\u00B4": "\u02CA",
      "\u0300": "\u02CB",
      "\u0301": "\u02CA",
      "\u0302": "\u02C6",
      "\u0303": "\u02DC",
      "\u0304": "\u02C9",
      "\u0305": "\u02C9",
      "\u0306": "\u02D8",
      "\u0307": "\u02D9",
      "\u0308": "\u00A8",
      "\u030C": "\u02C7"
    },
    REMAPACCENTUNDER: {},
    length2em: function(r, p) {
      if (typeof r !== "string") {
        r = r.toString();
      }
      if (r === "") {
        return "";
      }
      if (r === h.SIZE.NORMAL) {
        return 1;
      }
      if (r === h.SIZE.BIG) {
        return 2;
      }
      if (r === h.SIZE.SMALL) {
        return 0.71;
      }
      if (this.MATHSPACE[r]) {
        return this.MATHSPACE[r];
      }
      var o = r.match(
        /^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/
      );
      var n = parseFloat(o[1] || "1"),
        q = o[2];
      if (p == null) {
        p = 1;
      }
      if (q === "em") {
        return n;
      }
      if (q === "ex") {
        return n * this.TeX.x_height;
      }
      if (q === "%") {
        return (n / 100) * p;
      }
      if (q === "px") {
        return n / this.em;
      }
      if (q === "pt") {
        return n / 10;
      }
      if (q === "pc") {
        return n * 1.2;
      }
      if (q === "in") {
        return (n * this.pxPerInch) / this.em;
      }
      if (q === "cm") {
        return (n * this.pxPerInch) / this.em / 2.54;
      }
      if (q === "mm") {
        return (n * this.pxPerInch) / this.em / 25.4;
      }
      if (q === "mu") {
        return n / 18;
      }
      return n * p;
    },
    Em: function(n) {
      if (Math.abs(n) < 0.001) {
        return "0em";
      }
      return n.toFixed(3).replace(/\.?0+$/, "") + "em";
    },
    arrayEntry: function(n, o) {
      return n[Math.max(0, Math.min(o, n.length - 1))];
    }
  });
  MathJax.Hub.Register.StartupHook("mml Jax Ready", function() {
    h = MathJax.ElementJax.mml;
    h.mbase.Augment({
      toPreviewHTML: function(o, n) {
        return this.PHTMLdefaultSpan(o, n);
      },
      PHTMLdefaultSpan: function(q, o) {
        if (!o) {
          o = {};
        }
        q = this.PHTMLcreateSpan(q);
        this.PHTMLhandleStyle(q);
        this.PHTMLhandleColor(q);
        if (this.isToken) {
          this.PHTMLhandleToken(q);
        }
        for (var p = 0, n = this.data.length; p < n; p++) {
          this.PHTMLaddChild(q, p, o);
        }
        return q;
      },
      PHTMLaddChild: function(p, o, n) {
        var q = this.data[o];
        if (q) {
          if (n.childSpans) {
            p = e.addElement(p, "span", { className: n.className });
          }
          q.toPreviewHTML(p);
          if (!n.noBBox) {
            this.PHTML.w += q.PHTML.w + q.PHTML.l + q.PHTML.r;
            if (q.PHTML.h > this.PHTML.h) {
              this.PHTML.h = q.PHTML.h;
            }
            if (q.PHTML.d > this.PHTML.d) {
              this.PHTML.d = q.PHTML.d;
            }
            if (q.PHTML.t > this.PHTML.t) {
              this.PHTML.t = q.PHTML.t;
            }
            if (q.PHTML.b > this.PHTML.b) {
              this.PHTML.b = q.PHTML.b;
            }
          }
        } else {
          if (n.forceChild) {
            e.addElement(p, "span");
          }
        }
      },
      PHTMLstretchChild: function(q, p, s) {
        var r = this.data[q];
        if (r && r.PHTMLcanStretch("Vertical", p, s)) {
          var t = this.PHTML,
            o = r.PHTML,
            n = o.w;
          r.PHTMLstretchV(p, s);
          t.w += o.w - n;
          if (o.h > t.h) {
            t.h = o.h;
          }
          if (o.d > t.d) {
            t.d = o.d;
          }
        }
      },
      PHTMLcreateSpan: function(n) {
        if (!this.PHTML) {
          this.PHTML = {};
        }
        this.PHTML = { w: 0, h: 0, d: 0, l: 0, r: 0, t: 0, b: 0 };
        if (this.inferred) {
          return n;
        }
        if (this.type === "mo" && this.data.join("") === "\u222B") {
          g.lastIsInt = true;
        } else {
          if (
            this.type !== "mspace" ||
            this.width !== "negativethinmathspace"
          ) {
            g.lastIsInt = false;
          }
        }
        if (!this.PHTMLspanID) {
          this.PHTMLspanID = g.GetID();
        }
        var o = this.id || "MJXp-Span-" + this.PHTMLspanID;
        return e.addElement(n, "span", {
          className: "MJXp-" + this.type,
          id: o
        });
      },
      PHTMLspanElement: function() {
        if (!this.PHTMLspanID) {
          return null;
        }
        return document.getElementById(
          this.id || "MJXp-Span-" + this.PHTMLspanID
        );
      },
      PHTMLhandleToken: function(o) {
        var n = this.getValues("mathvariant");
        if (n.mathvariant !== h.VARIANT.NORMAL) {
          o.className += " " + g.VARIANT[n.mathvariant];
        }
      },
      PHTMLhandleStyle: function(n) {
        if (this.style) {
          n.style.cssText = this.style;
        }
      },
      PHTMLhandleColor: function(n) {
        if (this.mathcolor) {
          n.style.color = this.mathcolor;
        }
        if (this.mathbackground) {
          n.style.backgroundColor = this.mathbackground;
        }
      },
      PHTMLhandleScriptlevel: function(n) {
        var o = this.Get("scriptlevel");
        if (o) {
          n.className += " MJXp-script";
        }
      },
      PHTMLhandleText: function(y, A) {
        var v, p;
        var z = 0,
          o = 0,
          q = 0;
        for (var s = 0, r = A.length; s < r; s++) {
          p = A.charCodeAt(s);
          v = A.charAt(s);
          if (p >= 55296 && p < 56319) {
            s++;
            p = ((p - 55296) << 10) + (A.charCodeAt(s) - 56320) + 65536;
          }
          var t = 0.7,
            u = 0.22,
            x = 0.5;
          if (p < 127) {
            if (v.match(/[A-Za-ehik-or-xz0-9]/)) {
              u = 0;
            }
            if (v.match(/[A-HK-Z]/)) {
              x = 0.67;
            } else {
              if (v.match(/[IJ]/)) {
                x = 0.36;
              }
            }
            if (v.match(/[acegm-su-z]/)) {
              t = 0.45;
            } else {
              if (v.match(/[ij]/)) {
                t = 0.75;
              }
            }
            if (v.match(/[ijlt]/)) {
              x = 0.28;
            }
          }
          if (g.DELIMITERS[v]) {
            x = g.DELIMITERS[v].w || 0.4;
          }
          if (t > z) {
            z = t;
          }
          if (u > o) {
            o = u;
          }
          q += x;
        }
        if (!this.CHML) {
          this.PHTML = {};
        }
        this.PHTML = { h: 0.9, d: 0.3, w: q, l: 0, r: 0, t: z, b: o };
        e.addText(y, A);
      },
      PHTMLbboxFor: function(o) {
        if (this.data[o] && this.data[o].PHTML) {
          return this.data[o].PHTML;
        }
        return { w: 0, h: 0, d: 0, l: 0, r: 0, t: 0, b: 0 };
      },
      PHTMLcanStretch: function(q, o, p) {
        if (this.isEmbellished()) {
          var n = this.Core();
          if (n && n !== this) {
            return n.PHTMLcanStretch(q, o, p);
          }
        }
        return false;
      },
      PHTMLstretchV: function(n, o) {},
      PHTMLstretchH: function(n) {},
      CoreParent: function() {
        var n = this;
        while (
          n &&
          n.isEmbellished() &&
          n.CoreMO() === this &&
          !n.isa(h.math)
        ) {
          n = n.Parent();
        }
        return n;
      },
      CoreText: function(n) {
        if (!n) {
          return "";
        }
        if (n.isEmbellished()) {
          return n.CoreMO().data.join("");
        }
        while (
          (n.isa(h.mrow) ||
            n.isa(h.TeXAtom) ||
            n.isa(h.mstyle) ||
            n.isa(h.mphantom)) &&
          n.data.length === 1 &&
          n.data[0]
        ) {
          n = n.data[0];
        }
        if (!n.isToken) {
          return "";
        } else {
          return n.data.join("");
        }
      }
    });
    h.chars.Augment({
      toPreviewHTML: function(n) {
        var o = this.toString().replace(/[\u2061-\u2064]/g, "");
        this.PHTMLhandleText(n, o);
      }
    });
    h.entity.Augment({
      toPreviewHTML: function(n) {
        var o = this.toString().replace(/[\u2061-\u2064]/g, "");
        this.PHTMLhandleText(n, o);
      }
    });
    h.math.Augment({
      toPreviewHTML: function(n) {
        n = this.PHTMLdefaultSpan(n);
        if (this.Get("display") === "block") {
          n.className += " MJXp-display";
        }
        return n;
      }
    });
    h.mo.Augment({
      toPreviewHTML: function(o) {
        o = this.PHTMLdefaultSpan(o);
        this.PHTMLadjustAccent(o);
        var n = this.getValues(
          "lspace",
          "rspace",
          "scriptlevel",
          "displaystyle",
          "largeop"
        );
        if (n.scriptlevel === 0) {
          this.PHTML.l = g.length2em(n.lspace);
          this.PHTML.r = g.length2em(n.rspace);
          o.style.marginLeft = g.Em(this.PHTML.l);
          o.style.marginRight = g.Em(this.PHTML.r);
        } else {
          this.PHTML.l = 0.15;
          this.PHTML.r = 0.1;
        }
        if (n.displaystyle && n.largeop) {
          var p = e.Element("span", { className: "MJXp-largeop" });
          p.appendChild(o.firstChild);
          o.appendChild(p);
          this.PHTML.h *= 1.2;
          this.PHTML.d *= 1.2;
          if (this.data.join("") === "\u222B") {
            p.className += " MJXp-int";
          }
        }
        return o;
      },
      PHTMLadjustAccent: function(p) {
        var o = this.CoreParent();
        if (
          o &&
          o.isa(h.munderover) &&
          this.CoreText(o.data[o.base]).length === 1
        ) {
          var q = o.data[o.over],
            n = o.data[o.under];
          var s = this.data.join(""),
            r;
          if (q && this === q.CoreMO() && o.Get("accent")) {
            r = g.REMAPACCENT[s];
          } else {
            if (n && this === n.CoreMO() && o.Get("accentunder")) {
              r = g.REMAPACCENTUNDER[s];
            }
          }
          if (r) {
            s = p.innerHTML = r;
          }
          if (s.match(/[\u02C6-\u02DC\u00A8]/)) {
            this.PHTML.acc = -0.52;
          } else {
            if (s === "\u2192") {
              this.PHTML.acc = -0.15;
              this.PHTML.vec = true;
            }
          }
        }
      },
      PHTMLcanStretch: function(q, o, p) {
        if (!this.Get("stretchy")) {
          return false;
        }
        var r = this.data.join("");
        if (r.length > 1) {
          return false;
        }
        r = g.DELIMITERS[r];
        var n = r && r.dir === q.substr(0, 1);
        if (n) {
          n =
            this.PHTML.h !== o ||
            this.PHTML.d !== p ||
            (this.Get("minsize", true) || this.Get("maxsize", true));
        }
        return n;
      },
      PHTMLstretchV: function(p, u) {
        var o = this.PHTMLspanElement(),
          t = this.PHTML;
        var n = this.getValues("symmetric", "maxsize", "minsize");
        if (n.symmetric) {
          l = 2 * Math.max(p - 0.25, u + 0.25);
        } else {
          l = p + u;
        }
        n.maxsize = g.length2em(n.maxsize, t.h + t.d);
        n.minsize = g.length2em(n.minsize, t.h + t.d);
        l = Math.max(n.minsize, Math.min(n.maxsize, l));
        var s = l / (t.h + t.d - 0.3);
        var q = e.Element("span", { style: { "font-size": g.Em(s) } });
        if (s > 1.25) {
          var r = Math.ceil((1.25 / s) * 10);
          q.className = "MJXp-right MJXp-scale" + r;
          q.style.marginLeft = g.Em(t.w * (r / 10 - 1) + 0.07);
          t.w *= (s * r) / 10;
        }
        q.appendChild(o.firstChild);
        o.appendChild(q);
        if (n.symmetric) {
          o.style.verticalAlign = g.Em(0.25 * (1 - s));
        }
      }
    });
    h.mspace.Augment({
      toPreviewHTML: function(q) {
        q = this.PHTMLdefaultSpan(q);
        var o = this.getValues("height", "depth", "width");
        var n = g.length2em(o.width),
          p = g.length2em(o.height),
          s = g.length2em(o.depth);
        var r = this.PHTML;
        r.w = n;
        r.h = p;
        r.d = s;
        if (n < 0) {
          if (!g.lastIsInt) {
            q.style.marginLeft = g.Em(n);
          }
          n = 0;
        }
        q.style.width = g.Em(n);
        q.style.height = g.Em(p + s);
        if (s) {
          q.style.verticalAlign = g.Em(-s);
        }
        return q;
      }
    });
    h.mpadded.Augment({
      toPreviewHTML: function(u) {
        u = this.PHTMLdefaultSpan(u, {
          childSpans: true,
          className: "MJXp-box",
          forceChild: true
        });
        var o = u.firstChild;
        var v = this.getValues("width", "height", "depth", "lspace", "voffset");
        var s = this.PHTMLdimen(v.lspace);
        var q = 0,
          n = 0,
          t = s.len,
          r = -s.len,
          p = 0;
        if (v.width !== "") {
          s = this.PHTMLdimen(v.width, "w", 0);
          if (s.pm) {
            r += s.len;
          } else {
            u.style.width = g.Em(s.len);
          }
        }
        if (v.height !== "") {
          s = this.PHTMLdimen(v.height, "h", 0);
          if (!s.pm) {
            q += -this.PHTMLbboxFor(0).h;
          }
          q += s.len;
        }
        if (v.depth !== "") {
          s = this.PHTMLdimen(v.depth, "d", 0);
          if (!s.pm) {
            n += -this.PHTMLbboxFor(0).d;
            p += -s.len;
          }
          n += s.len;
        }
        if (v.voffset !== "") {
          s = this.PHTMLdimen(v.voffset);
          q -= s.len;
          n += s.len;
          p += s.len;
        }
        if (q) {
          o.style.marginTop = g.Em(q);
        }
        if (n) {
          o.style.marginBottom = g.Em(n);
        }
        if (t) {
          o.style.marginLeft = g.Em(t);
        }
        if (r) {
          o.style.marginRight = g.Em(r);
        }
        if (p) {
          u.style.verticalAlign = g.Em(p);
        }
        return u;
      },
      PHTMLdimen: function(q, r, n) {
        if (n == null) {
          n = -k;
        }
        q = String(q);
        var o = q.match(/width|height|depth/);
        var p = o ? this.PHTML[o[0].charAt(0)] : r ? this.PHTML[r] : 0;
        return { len: g.length2em(q, p) || 0, pm: !!q.match(/^[-+]/) };
      }
    });
    h.munderover.Augment({
      toPreviewHTML: function(r) {
        var t = this.getValues(
          "displaystyle",
          "accent",
          "accentunder",
          "align"
        );
        var n = this.data[this.base];
        if (
          !t.displaystyle &&
          n != null &&
          (n.movablelimits || n.CoreMO().Get("movablelimits"))
        ) {
          r = h.msubsup.prototype.toPreviewHTML.call(this, r);
          r.className = r.className.replace(/munderover/, "msubsup");
          return r;
        }
        r = this.PHTMLdefaultSpan(r, {
          childSpans: true,
          className: "",
          noBBox: true
        });
        var p = this.PHTMLbboxFor(this.over),
          v = this.PHTMLbboxFor(this.under),
          u = this.PHTMLbboxFor(this.base),
          s = this.PHTML,
          o = p.acc;
        if (this.data[this.over]) {
          if (r.lastChild.firstChild) {
            r.lastChild.firstChild.style.marginLeft = p.l = r.lastChild.firstChild.style.marginRight = p.r = 0;
          }
          var q = e.Element("span", {}, [["span", { className: "MJXp-over" }]]);
          q.firstChild.appendChild(r.lastChild);
          if (r.childNodes.length > (this.data[this.under] ? 1 : 0)) {
            q.firstChild.appendChild(r.firstChild);
          }
          this.data[this.over].PHTMLhandleScriptlevel(q.firstChild.firstChild);
          if (o != null) {
            if (p.vec) {
              q.firstChild.firstChild.firstChild.style.fontSize = "60%";
              p.h *= 0.6;
              p.d *= 0.6;
              p.w *= 0.6;
            }
            o = o - p.d + 0.1;
            if (u.t != null) {
              o += u.t - u.h;
            }
            q.firstChild.firstChild.style.marginBottom = g.Em(o);
          }
          if (r.firstChild) {
            r.insertBefore(q, r.firstChild);
          } else {
            r.appendChild(q);
          }
        }
        if (this.data[this.under]) {
          if (r.lastChild.firstChild) {
            r.lastChild.firstChild.style.marginLeft = v.l = r.lastChild.firstChild.marginRight = v.r = 0;
          }
          this.data[this.under].PHTMLhandleScriptlevel(r.lastChild);
        }
        s.w = Math.max(0.8 * p.w, 0.8 * v.w, u.w);
        s.h = 0.8 * (p.h + p.d + (o || 0)) + u.h;
        s.d = u.d + 0.8 * (v.h + v.d);
        return r;
      }
    });
    h.msubsup.Augment({
      toPreviewHTML: function(q) {
        q = this.PHTMLdefaultSpan(q, { noBBox: true });
        if (!this.data[this.base]) {
          if (q.firstChild) {
            q.insertBefore(e.Element("span"), q.firstChild);
          } else {
            q.appendChild(e.Element("span"));
          }
        }
        var s = this.data[this.base],
          p = this.data[this.sub],
          n = this.data[this.sup];
        if (!s) {
          s = { bbox: { h: 0.8, d: 0.2 } };
        }
        q.firstChild.style.marginRight = ".05em";
        var o = Math.max(0.4, s.PHTML.h - 0.4),
          u = Math.max(0.2, s.PHTML.d + 0.1);
        var t = this.PHTML;
        if (n && p) {
          var r = e.Element(
            "span",
            {
              className: "MJXp-script-box",
              style: {
                height: g.Em(o + n.PHTML.h * 0.8 + u + p.PHTML.d * 0.8),
                "vertical-align": g.Em(-u - p.PHTML.d * 0.8)
              }
            },
            [
              [
                "span",
                {},
                [
                  [
                    "span",
                    {},
                    [
                      [
                        "span",
                        {
                          style: { "margin-bottom": g.Em(-(n.PHTML.d - 0.05)) }
                        }
                      ]
                    ]
                  ]
                ]
              ],
              [
                "span",
                {},
                [
                  [
                    "span",
                    {},
                    [
                      [
                        "span",
                        { style: { "margin-top": g.Em(-(n.PHTML.h - 0.05)) } }
                      ]
                    ]
                  ]
                ]
              ]
            ]
          );
          p.PHTMLhandleScriptlevel(r.firstChild);
          n.PHTMLhandleScriptlevel(r.lastChild);
          r.firstChild.firstChild.firstChild.appendChild(q.lastChild);
          r.lastChild.firstChild.firstChild.appendChild(q.lastChild);
          q.appendChild(r);
          t.h = Math.max(s.PHTML.h, n.PHTML.h * 0.8 + o);
          t.d = Math.max(s.PHTML.d, p.PHTML.d * 0.8 + u);
          t.w = s.PHTML.w + Math.max(n.PHTML.w, p.PHTML.w) + 0.07;
        } else {
          if (n) {
            q.lastChild.style.verticalAlign = g.Em(o);
            n.PHTMLhandleScriptlevel(q.lastChild);
            t.h = Math.max(s.PHTML.h, n.PHTML.h * 0.8 + o);
            t.d = Math.max(s.PHTML.d, n.PHTML.d * 0.8 - o);
            t.w = s.PHTML.w + n.PHTML.w + 0.07;
          } else {
            if (p) {
              q.lastChild.style.verticalAlign = g.Em(-u);
              p.PHTMLhandleScriptlevel(q.lastChild);
              t.h = Math.max(s.PHTML.h, p.PHTML.h * 0.8 - u);
              t.d = Math.max(s.PHTML.d, p.PHTML.d * 0.8 + u);
              t.w = s.PHTML.w + p.PHTML.w + 0.07;
            }
          }
        }
        return q;
      }
    });
    h.mfrac.Augment({
      toPreviewHTML: function(r) {
        r = this.PHTMLdefaultSpan(r, {
          childSpans: true,
          className: "MJXp-box",
          forceChild: true,
          noBBox: true
        });
        var o = this.getValues("linethickness", "displaystyle");
        if (!o.displaystyle) {
          if (this.data[0]) {
            this.data[0].PHTMLhandleScriptlevel(r.firstChild);
          }
          if (this.data[1]) {
            this.data[1].PHTMLhandleScriptlevel(r.lastChild);
          }
        }
        var n = e.Element("span", { className: "MJXp-box" }, [
          [
            "span",
            { className: "MJXp-denom" },
            [
              [
                "span",
                {},
                [["span", { className: "MJXp-rule", style: { height: "1em" } }]]
              ],
              ["span"]
            ]
          ]
        ]);
        n.firstChild.lastChild.appendChild(r.lastChild);
        r.appendChild(n);
        var s = this.PHTMLbboxFor(0),
          p = this.PHTMLbboxFor(1),
          v = this.PHTML;
        v.w = Math.max(s.w, p.w) * 0.8;
        v.h = s.h + s.d + 0.1 + 0.25;
        v.d = p.h + p.d - 0.25;
        v.l = v.r = 0.125;
        o.linethickness = Math.max(0, g.length2em(o.linethickness || "0", 0));
        if (o.linethickness) {
          var u = n.firstChild.firstChild.firstChild;
          var q = g.Em(o.linethickness);
          u.style.borderTop = "none";
          u.style.borderBottom =
            (o.linethickness < 0.15 ? "1px" : q) + " solid";
          u.style.margin = q + " 0";
          q = o.linethickness;
          n.style.marginTop = g.Em(3 * q - 1.2);
          r.style.verticalAlign = g.Em(1.5 * q + 0.1);
          v.h += 1.5 * q - 0.1;
          v.d += 1.5 * q;
        } else {
          n.style.marginTop = "-.7em";
        }
        return r;
      }
    });
    h.msqrt.Augment({
      toPreviewHTML: function(n) {
        n = this.PHTMLdefaultSpan(n, {
          childSpans: true,
          className: "MJXp-box",
          forceChild: true,
          noBBox: true
        });
        this.PHTMLlayoutRoot(n, n.firstChild);
        return n;
      },
      PHTMLlayoutRoot: function(u, n) {
        var v = this.PHTMLbboxFor(0);
        var q = Math.ceil((v.h + v.d + 0.14) * 100),
          w = g.Em(14 / q);
        var r = e.Element("span", { className: "MJXp-surd" }, [
          [
            "span",
            { style: { "font-size": q + "%", "margin-top": w } },
            ["\u221A"]
          ]
        ]);
        var s = e.Element("span", { className: "MJXp-root" }, [
          [
            "span",
            { className: "MJXp-rule", style: { "border-top": ".08em solid" } }
          ]
        ]);
        var p = ((1.2 / 2.2) * q) / 100;
        if (q > 150) {
          var o = Math.ceil((150 / q) * 10);
          r.firstChild.className = "MJXp-right MJXp-scale" + o;
          r.firstChild.style.marginLeft = g.Em(((p * (o / 10 - 1)) / q) * 100);
          p = (p * o) / 10;
          s.firstChild.style.borderTopWidth = g.Em(0.08 / Math.sqrt(o / 10));
        }
        s.appendChild(n);
        u.appendChild(r);
        u.appendChild(s);
        this.PHTML.h = v.h + 0.18;
        this.PHTML.d = v.d;
        this.PHTML.w = v.w + p;
        return u;
      }
    });
    h.mroot.Augment({
      toPreviewHTML: function(q) {
        q = this.PHTMLdefaultSpan(q, {
          childSpans: true,
          className: "MJXp-box",
          forceChild: true,
          noBBox: true
        });
        var p = this.PHTMLbboxFor(1),
          n = q.removeChild(q.lastChild);
        var t = this.PHTMLlayoutRoot(e.Element("span"), q.firstChild);
        n.className = "MJXp-script";
        var u = parseInt(t.firstChild.firstChild.style.fontSize);
        var o = 0.55 * (u / 120) + p.d * 0.8,
          s = -0.6 * (u / 120);
        if (u > 150) {
          s *= (0.95 * Math.ceil((150 / u) * 10)) / 10;
        }
        n.style.marginRight = g.Em(s);
        n.style.verticalAlign = g.Em(o);
        if (-s > p.w * 0.8) {
          n.style.marginLeft = g.Em(-s - p.w * 0.8);
        }
        q.appendChild(n);
        q.appendChild(t);
        this.PHTML.w += Math.max(0, p.w * 0.8 + s);
        this.PHTML.h = Math.max(this.PHTML.h, p.h * 0.8 + o);
        return q;
      },
      PHTMLlayoutRoot: h.msqrt.prototype.PHTMLlayoutRoot
    });
    h.mfenced.Augment({
      toPreviewHTML: function(q) {
        q = this.PHTMLcreateSpan(q);
        this.PHTMLhandleStyle(q);
        this.PHTMLhandleColor(q);
        this.addFakeNodes();
        this.PHTMLaddChild(q, "open", {});
        for (var p = 0, n = this.data.length; p < n; p++) {
          this.PHTMLaddChild(q, "sep" + p, {});
          this.PHTMLaddChild(q, p, {});
        }
        this.PHTMLaddChild(q, "close", {});
        var o = this.PHTML.h,
          r = this.PHTML.d;
        this.PHTMLstretchChild("open", o, r);
        for (p = 0, n = this.data.length; p < n; p++) {
          this.PHTMLstretchChild("sep" + p, o, r);
          this.PHTMLstretchChild(p, o, r);
        }
        this.PHTMLstretchChild("close", o, r);
        return q;
      }
    });
    h.mrow.Augment({
      toPreviewHTML: function(q) {
        q = this.PHTMLdefaultSpan(q);
        var p = this.PHTML.h,
          r = this.PHTML.d;
        for (var o = 0, n = this.data.length; o < n; o++) {
          this.PHTMLstretchChild(o, p, r);
        }
        return q;
      }
    });
    h.mstyle.Augment({
      toPreviewHTML: function(n) {
        n = this.PHTMLdefaultSpan(n);
        this.PHTMLhandleScriptlevel(n);
        return n;
      }
    });
    h.TeXAtom.Augment({
      toPreviewHTML: function(n) {
        n = this.PHTMLdefaultSpan(n);
        n.className = "MJXp-mrow";
        return n;
      }
    });
    h.mtable.Augment({
      toPreviewHTML: function(E) {
        E = this.PHTMLdefaultSpan(E, { noBBox: true });
        var r = this.getValues(
          "columnalign",
          "rowalign",
          "columnspacing",
          "rowspacing",
          "columnwidth",
          "equalcolumns",
          "equalrows",
          "columnlines",
          "rowlines",
          "frame",
          "framespacing",
          "align",
          "width"
        );
        var u = MathJax.Hub.SplitList,
          F,
          A,
          D,
          z;
        var N = u(r.columnspacing),
          w = u(r.rowspacing),
          L = u(r.columnalign),
          t = u(r.rowalign);
        for (F = 0, A = N.length; F < A; F++) {
          N[F] = g.length2em(N[F]);
        }
        for (F = 0, A = w.length; F < A; F++) {
          w[F] = g.length2em(w[F]);
        }
        var K = e.Element("span");
        while (E.firstChild) {
          K.appendChild(E.firstChild);
        }
        E.appendChild(K);
        var y = 0,
          s = 0;
        for (F = 0, A = this.data.length; F < A; F++) {
          var v = this.data[F];
          if (v) {
            var J = g.arrayEntry(w, F - 1),
              C = g.arrayEntry(t, F);
            var x = v.PHTML,
              q = v.PHTMLspanElement();
            q.style.verticalAlign = C;
            var B = v.type === "mlabeledtr" ? 1 : 0;
            for (D = 0, z = v.data.length; D < z - B; D++) {
              var p = v.data[D + B];
              if (p) {
                var M = g.arrayEntry(N, D - 1),
                  G = g.arrayEntry(L, D);
                var I = p.PHTMLspanElement();
                if (D) {
                  x.w += M;
                  I.style.paddingLeft = g.Em(M);
                }
                if (F) {
                  I.style.paddingTop = g.Em(J);
                }
                I.style.textAlign = G;
              }
            }
            y += x.h + x.d;
            if (F) {
              y += J;
            }
            if (x.w > s) {
              s = x.w;
            }
          }
        }
        var o = this.PHTML;
        o.w = s;
        o.h = y / 2 + 0.25;
        o.d = y / 2 - 0.25;
        o.l = o.r = 0.125;
        return E;
      }
    });
    h.mlabeledtr.Augment({
      PHTMLdefaultSpan: function(q, o) {
        if (!o) {
          o = {};
        }
        q = this.PHTMLcreateSpan(q);
        this.PHTMLhandleStyle(q);
        this.PHTMLhandleColor(q);
        if (this.isToken) {
          this.PHTMLhandleToken(q);
        }
        for (var p = 1, n = this.data.length; p < n; p++) {
          this.PHTMLaddChild(q, p, o);
        }
        return q;
      }
    });
    h.semantics.Augment({
      toPreviewHTML: function(n) {
        n = this.PHTMLcreateSpan(n);
        if (this.data[0]) {
          this.data[0].toPreviewHTML(n);
          MathJax.Hub.Insert(this.data[0].PHTML || {}, this.PHTML);
        }
        return n;
      }
    });
    h.annotation.Augment({ toPreviewHTML: function(n) {} });
    h["annotation-xml"].Augment({ toPreviewHTML: function(n) {} });
    MathJax.Hub.Register.StartupHook("onLoad", function() {
      setTimeout(MathJax.Callback(["loadComplete", g, "jax.js"]), 0);
    });
  });
  MathJax.Hub.Register.StartupHook("End Cookie", function() {
    if (b.config.menuSettings.zoom !== "None") {
      i.Require("[MathJax]/extensions/MathZoom.js");
    }
  });
})(MathJax.Ajax, MathJax.Hub, MathJax.HTML, MathJax.OutputJax.PreviewHTML);
(function(b, g, f) {
  var c = b.config.menuSettings;
  var e = MathJax.OutputJax;
  var a = f.isMSIE && (document.documentMode || 0) < 8;
  var d = (MathJax.Extension["fast-preview"] = {
    version: "2.7.5",
    enabled: true,
    config: b.CombineConfig("fast-preview", {
      Chunks: { EqnChunk: 10000, EqnChunkFactor: 1, EqnChunkDelay: 0 },
      color: "inherit!important",
      updateTime: 30,
      updateDelay: 6,
      messageStyle: "none",
      disabled: f.isMSIE && !f.versionAtLeast("8.0")
    }),
    Config: function() {
      if (b.config["CHTML-preview"]) {
        MathJax.Hub.Config({ "fast-preview": b.config["CHTML-preview"] });
      }
      var m, j, k, h, l;
      var i = this.config;
      if (!i.disabled && c.FastPreview == null) {
        b.Config({ menuSettings: { FastPreview: true } });
      }
      if (c.FastPreview) {
        MathJax.Ajax.Styles({
          ".MathJax_Preview .MJXf-math": { color: i.color }
        });
        b.Config({ "HTML-CSS": i.Chunks, CommonHTML: i.Chunks, SVG: i.Chunks });
      }
      b.Register.MessageHook("Begin Math Output", function() {
        if (!h && d.Active()) {
          m = b.processUpdateTime;
          j = b.processUpdateDelay;
          k = b.config.messageStyle;
          b.processUpdateTime = i.updateTime;
          b.processUpdateDelay = i.updateDelay;
          b.Config({ messageStyle: i.messageStyle });
          MathJax.Message.Clear(0, 0);
          l = true;
        }
      });
      b.Register.MessageHook("End Math Output", function() {
        if (!h && l) {
          b.processUpdateTime = m;
          b.processUpdateDelay = j;
          b.Config({ messageStyle: k });
          h = true;
        }
      });
    },
    Disable: function() {
      this.enabled = false;
    },
    Enable: function() {
      this.enabled = true;
    },
    Active: function() {
      return (
        c.FastPreview && this.enabled && !(e[c.renderer] || {}).noFastPreview
      );
    },
    Preview: function(h) {
      if (!this.Active() || !h.script.parentNode) {
        return;
      }
      var i = h.script.MathJax.preview || h.script.previousSibling;
      if (!i || i.className !== MathJax.Hub.config.preRemoveClass) {
        i = g.Element("span", { className: MathJax.Hub.config.preRemoveClass });
        h.script.parentNode.insertBefore(i, h.script);
        h.script.MathJax.preview = i;
      }
      i.innerHTML = "";
      i.style.color = a ? "black" : "inherit";
      return this.postFilter(i, h);
    },
    postFilter: function(j, i) {
      if (!i.math.root.toPreviewHTML) {
        var h = MathJax.Callback.Queue();
        h.Push(
          [
            "Require",
            MathJax.Ajax,
            "[MathJax]/jax/output/PreviewHTML/config.js"
          ],
          ["Require", MathJax.Ajax, "[MathJax]/jax/output/PreviewHTML/jax.js"]
        );
        b.RestartAfter(h.Push({}));
      }
      i.math.root.toPreviewHTML(j);
    },
    Register: function(h) {
      b.Register.StartupHook(h + " Jax Require", function() {
        var i = MathJax.InputJax[h];
        i.postfilterHooks.Add(
          ["Preview", MathJax.Extension["fast-preview"]],
          50
        );
      });
    }
  });
  d.Register("TeX");
  d.Register("MathML");
  d.Register("AsciiMath");
  b.Register.StartupHook("End Config", ["Config", d]);
  b.Startup.signal.Post("fast-preview Ready");
})(MathJax.Hub, MathJax.HTML, MathJax.Hub.Browser);
MathJax.Ajax.loadComplete("[MathJax]/extensions/fast-preview.js");
(function(a, e, b, f) {
  var c = b.config.menuSettings;
  var d = (MathJax.Extension.AssistiveMML = {
    version: "2.7.5",
    config: b.CombineConfig("AssistiveMML", {
      disabled: false,
      styles: {
        ".MJX_Assistive_MathML": {
          position: "absolute!important",
          top: 0,
          left: 0,
          clip:
            b.Browser.isMSIE && (document.documentMode || 0) < 8
              ? "rect(1px 1px 1px 1px)"
              : "rect(1px, 1px, 1px, 1px)",
          padding: "1px 0 0 0!important",
          border: "0!important",
          height: "1px!important",
          width: "1px!important",
          overflow: "hidden!important",
          display: "block!important",
          "-webkit-touch-callout": "none",
          "-webkit-user-select": "none",
          "-khtml-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none"
        },
        ".MJX_Assistive_MathML.MJX_Assistive_MathML_Block": {
          width: "100%!important"
        }
      }
    }),
    Config: function() {
      if (!this.config.disabled && c.assistiveMML == null) {
        b.Config({ menuSettings: { assistiveMML: true } });
      }
      a.Styles(this.config.styles);
      b.Register.MessageHook("End Math", function(g) {
        if (c.assistiveMML) {
          return d.AddAssistiveMathML(g[1]);
        }
      });
    },
    AddAssistiveMathML: function(g) {
      var h = { jax: b.getAllJax(g), i: 0, callback: MathJax.Callback({}) };
      this.HandleMML(h);
      return h.callback;
    },
    RemoveAssistiveMathML: function(k) {
      var h = b.getAllJax(k),
        l;
      for (var j = 0, g = h.length; j < g; j++) {
        l = document.getElementById(h[j].inputID + "-Frame");
        if (l && l.getAttribute("data-mathml")) {
          l.removeAttribute("data-mathml");
          if (
            l.lastChild &&
            l.lastChild.className.match(/MJX_Assistive_MathML/)
          ) {
            l.removeChild(l.lastChild);
          }
        }
      }
    },
    HandleMML: function(l) {
      var g = l.jax.length,
        h,
        i,
        n,
        j;
      while (l.i < g) {
        h = l.jax[l.i];
        n = document.getElementById(h.inputID + "-Frame");
        if (
          h.outputJax !== "NativeMML" &&
          h.outputJax !== "PlainSource" &&
          n &&
          !n.getAttribute("data-mathml")
        ) {
          try {
            i = h.root
              .toMathML("")
              .replace(/\n */g, "")
              .replace(/<!--.*?-->/g, "");
          } catch (k) {
            if (!k.restart) {
              throw k;
            }
            return MathJax.Callback.After(["HandleMML", this, l], k.restart);
          }
          n.setAttribute("data-mathml", i);
          j = f.addElement(n, "span", {
            isMathJax: true,
            unselectable: "on",
            className:
              "MJX_Assistive_MathML" +
              (h.root.Get("display") === "block"
                ? " MJX_Assistive_MathML_Block"
                : "")
          });
          try {
            j.innerHTML = i;
          } catch (k) {}
          n.style.position = "relative";
          n.setAttribute("role", "presentation");
          n.firstChild.setAttribute("aria-hidden", "true");
          j.setAttribute("role", "presentation");
        }
        l.i++;
      }
      l.callback();
    }
  });
  b.Startup.signal.Post("AssistiveMML Ready");
})(MathJax.Ajax, MathJax.Callback, MathJax.Hub, MathJax.HTML);
MathJax.Callback.Queue(
  ["Require", MathJax.Ajax, "[MathJax]/extensions/toMathML.js"],
  ["loadComplete", MathJax.Ajax, "[MathJax]/extensions/AssistiveMML.js"],
  function() {
    MathJax.Hub.Register.StartupHook("End Config", [
      "Config",
      MathJax.Extension.AssistiveMML
    ]);
  }
);
!(function(a, b) {
  var c,
    d,
    e = a.config.menuSettings,
    f = Function.prototype.bind
      ? function(a, b) {
          return a.bind(b);
        }
      : function(a, b) {
          return function() {
            a.apply(b, arguments);
          };
        },
    g =
      Object.keys ||
      function(a) {
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && b.push(c);
        return b;
      },
    h = MathJax.Ajax.config.path;
  h.a11y || (h.a11y = a.config.root + "/extensions/a11y");
  var i = (b["accessibility-menu"] = {
      version: "1.5.0",
      prefix: "",
      defaults: {},
      modules: [],
      MakeOption: function(a) {
        return i.prefix + a;
      },
      GetOption: function(a) {
        return e[i.MakeOption(a)];
      },
      AddDefaults: function() {
        for (var a, b = g(i.defaults), c = 0; (a = b[c]); c++) {
          var d = i.MakeOption(a);
          void 0 === e[d] && (e[d] = i.defaults[a]);
        }
      },
      AddMenu: function() {
        for (
          var a, b = Array(this.modules.length), e = 0;
          (a = this.modules[e]);
          e++
        )
          b[e] = a.placeHolder;
        var f = d.FindId("Accessibility");
        if (f)
          b.unshift(c.RULE()), f.submenu.items.push.apply(f.submenu.items, b);
        else {
          var g = (d.FindId("Settings", "Renderer") || {}).submenu;
          g &&
            (b.unshift(c.RULE()),
            b.unshift(g.items.pop()),
            b.unshift(g.items.pop())),
            b.unshift("Accessibility");
          var f = c.SUBMENU.apply(c.SUBMENU, b),
            h = d.IndexOfId("Locale");
          h ? d.items.splice(h, 0, f) : d.items.push(c.RULE(), f);
        }
      },
      Register: function(a) {
        (i.defaults[a.option] = !1), i.modules.push(a);
      },
      Startup: function() {
        (c = MathJax.Menu.ITEM), (d = MathJax.Menu.menu);
        for (var a, b = 0; (a = this.modules[b]); b++) a.CreateMenu();
        this.AddMenu();
      },
      LoadExtensions: function() {
        for (var b, c = [], d = 0; (b = this.modules[d]); d++)
          e[b.option] && c.push(b.module);
        return c.length ? a.Startup.loadArray(c) : null;
      }
    }),
    j = (MathJax.Extension.ModuleLoader = MathJax.Object.Subclass({
      option: "",
      name: ["", ""],
      module: "",
      placeHolder: null,
      submenu: !1,
      extension: null,
      Init: function(a, b, c, d, e) {
        (this.option = a),
          (this.name = [b.replace(/ /g, ""), b]),
          (this.module = c),
          (this.extension = d),
          (this.submenu = e || !1);
      },
      CreateMenu: function() {
        var a = f(this.Load, this);
        this.submenu
          ? (this.placeHolder = c.SUBMENU(
              this.name,
              c.CHECKBOX(["Activate", "Activate"], i.MakeOption(this.option), {
                action: a
              }),
              c.RULE(),
              c.COMMAND(["OptionsWhenActive", "(Options when Active)"], null, {
                disabled: !0
              })
            ))
          : (this.placeHolder = c.CHECKBOX(
              this.name,
              i.MakeOption(this.option),
              { action: a }
            ));
      },
      Load: function() {
        a.Queue(["Require", MathJax.Ajax, this.module, ["Enable", this]]);
      },
      Enable: function(a) {
        var b = MathJax.Extension[this.extension];
        b && (b.Enable(!0, !0), MathJax.Menu.saveCookie());
      }
    }));
  i.Register(
    j("collapsible", "Collapsible Math", "[a11y]/collapsible.js", "collapsible")
  ),
    i.Register(
      j(
        "autocollapse",
        "Auto Collapse",
        "[a11y]/auto-collapse.js",
        "auto-collapse"
      )
    ),
    i.Register(j("explorer", "Explorer", "[a11y]/explorer.js", "explorer", !0)),
    i.AddDefaults(),
    a.Register.StartupHook(
      "End Extensions",
      function() {
        a.Register.StartupHook(
          "MathMenu Ready",
          function() {
            i.Startup(), a.Startup.signal.Post("Accessibility Menu Ready");
          },
          5
        );
      },
      5
    ),
    MathJax.Hub.Register.StartupHook("End Cookie", function() {
      MathJax.Callback.Queue(
        ["LoadExtensions", i],
        ["loadComplete", MathJax.Ajax, "[a11y]/accessibility-menu.js"]
      );
    });
})(MathJax.Hub, MathJax.Extension);
MathJax.Ajax.loadComplete("[MathJax]/config/TeX-MML-AM_HTMLorMML.js");
