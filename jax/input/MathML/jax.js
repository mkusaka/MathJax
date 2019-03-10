/*
 *  /MathJax/jax/input/MathML/jax.js
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
