/*
 *  /MathJax/jax/output/HTML-CSS/autoload/multiline.js
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

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready", function() {
  var d = "2.7.5";
  var a = MathJax.ElementJax.mml,
    b = MathJax.OutputJax["HTML-CSS"];
  var f = a.mo().With({
    HTMLspanElement: function() {
      return { bbox: { w: 0 }, style: {} };
    }
  });
  var e = {
    newline: 0,
    nobreak: 1000000,
    goodbreak: [-200],
    badbreak: [+200],
    auto: [0],
    maxwidth: 1.33,
    toobig: 800,
    nestfactor: 400,
    spacefactor: -100,
    spaceoffset: 2,
    spacelimit: 1,
    fence: 500,
    close: 500
  };
  var c = { linebreakstyle: "after" };
  a.mbase.Augment({
    HTMLlinebreakPenalty: e,
    HTMLmultiline: function(o) {
      var p = this;
      while (
        p.inferred ||
        (p.parent && p.parent.type === "mrow" && p.isEmbellished())
      ) {
        p = p.parent;
      }
      var m =
        (p.type === "math" && p.Get("display") === "block") || p.type === "mtd";
      p.isMultiline = true;
      var q = this.getValues(
        "linebreak",
        "linebreakstyle",
        "lineleading",
        "linebreakmultchar",
        "indentalign",
        "indentshift",
        "indentalignfirst",
        "indentshiftfirst",
        "indentalignlast",
        "indentshiftlast"
      );
      if (q.linebreakstyle === a.LINEBREAKSTYLE.INFIXLINEBREAKSTYLE) {
        q.linebreakstyle = this.Get("infixlinebreakstyle");
      }
      q.lineleading = b.length2em(q.lineleading, 1, 0.5);
      this.HTMLremoveColor(o);
      var n = b.createStack(o);
      this.HTMLgetScale();
      var g = {
          n: 0,
          Y: 0,
          scale: this.scale || 1,
          isTop: m,
          values: {},
          VALUES: q
        },
        l = this.HTMLgetAlign(g, {}),
        i = this.HTMLgetShift(g, {}, l),
        h = [],
        j = {
          index: [],
          penalty: e.nobreak,
          w: 0,
          W: i,
          shift: i,
          scanW: i,
          nest: 0
        },
        k = false;
      while (
        this.HTMLbetterBreak(j, g, true) &&
        (j.scanW >= b.linebreakWidth || j.penalty === e.newline)
      ) {
        this.HTMLaddLine(n, h, j.index, g, j.values, k);
        h = j.index.slice(0);
        k = true;
        l = this.HTMLgetAlign(g, j.values);
        i = this.HTMLgetShift(g, j.values, l);
        if (l === a.INDENTALIGN.CENTER) {
          i = 0;
        }
        j.W = j.shift = j.scanW = i;
        j.penalty = e.nobreak;
      }
      g.isLast = true;
      this.HTMLaddLine(n, h, [], g, c, k);
      if (m) {
        n.style.width = "100%";
        if (p.type === "math") {
          o.bbox.width = "100%";
        }
      }
      this.HTMLhandleSpace(o);
      this.HTMLhandleColor(o);
      o.bbox.isMultiline = true;
      return o;
    },
    HTMLbetterBreak: function(k, g, r) {
      if (this.isToken) {
        return false;
      }
      if (this.isEmbellished()) {
        k.embellished = this;
        return this.CoreMO().HTMLbetterBreak(k, g);
      }
      if (this.linebreakContainer) {
        return false;
      }
      var q = k.index.slice(0),
        o = k.index.shift(),
        n = this.data.length,
        l,
        s,
        j,
        p = k.index.length > 0,
        h = false;
      if (o == null) {
        o = -1;
      }
      if (!p) {
        o++;
        k.W += k.w;
        k.w = 0;
      }
      j = k.scanW = k.W;
      k.nest++;
      while (o < n && (k.scanW < e.maxwidth * b.linebreakWidth || k.w === 0)) {
        if (this.data[o]) {
          if (this.data[o].HTMLbetterBreak(k, g)) {
            h = true;
            q = [o].concat(k.index);
            l = k.W;
            s = k.w;
            if (k.penalty === e.newline) {
              k.index = q;
              if (k.nest) {
                k.nest--;
              }
              return true;
            }
          }
          j = p ? k.scanW : this.HTMLaddWidth(o, k, j);
        }
        k.index = [];
        o++;
        p = false;
      }
      if (r && h) {
        f.parent = this.parent;
        f.inherit = this.inherit;
        if (f.HTMLbetterBreak(k, g)) {
          h = false;
          q = k.index;
        }
      }
      if (k.nest) {
        k.nest--;
      }
      k.index = q;
      if (h) {
        k.W = l;
        k.w = s;
      }
      return h;
    },
    HTMLaddWidth: function(g, k, j) {
      if (this.data[g]) {
        var h = this.data[g].HTMLspanElement();
        j += h.bbox.w;
        if (h.style.paddingLeft) {
          j += b.unEm(h.style.paddingLeft);
        }
        if (h.style.paddingRight) {
          j += b.unEm(h.style.paddingRight);
        }
        k.W = k.scanW = j;
        k.w = 0;
      }
      return j;
    },
    HTMLaddLine: function(o, h, k, g, p, m) {
      line = b.createBox(o);
      line.bbox = this.HTMLemptyBBox({});
      g.first = m;
      g.last = true;
      this.HTMLmoveLine(h, k, line, g, p);
      this.HTMLcleanBBox(line.bbox);
      var n = this.HTMLgetAlign(g, p),
        i = this.HTMLgetShift(g, p, n);
      if (g.n > 0) {
        var l = b.FONTDATA.baselineskip * g.scale;
        var j =
          (g.values.lineleading == null ? g.VALUES : g.values).lineleading *
          g.scale;
        g.Y -= Math.max(l, g.d + line.bbox.h + j);
      }
      b.alignBox(line, n, g.Y, i);
      g.d = line.bbox.d;
      g.values = p;
      g.n++;
    },
    HTMLgetAlign: function(j, g) {
      var k = g,
        h = j.values,
        i = j.VALUES,
        l;
      if (j.n === 0) {
        l = k.indentalignfirst || h.indentalignfirst || i.indentalignfirst;
      } else {
        if (j.isLast) {
          l = h.indentalignlast || i.indentalignlast;
        } else {
          l = h.indentalign || i.indentalign;
        }
      }
      if (l === a.INDENTALIGN.INDENTALIGN) {
        l = h.indentalign || i.indentalign;
      }
      if (l === a.INDENTALIGN.AUTO) {
        l = j.isTop ? this.displayAlign : a.INDENTALIGN.LEFT;
      }
      return l;
    },
    HTMLgetShift: function(l, i, n) {
      var m = i,
        j = l.values,
        k = l.VALUES,
        h;
      if (l.n === 0) {
        h = m.indentshiftfirst || j.indentshiftfirst || k.indentshiftfirst;
      } else {
        if (l.isLast) {
          h = j.indentshiftlast || k.indentshiftlast;
        } else {
          h = j.indentshift || k.indentshift;
        }
      }
      if (h === a.INDENTSHIFT.INDENTSHIFT) {
        h = j.indentshift || k.indentshift;
      }
      if (h === "auto" || h === "") {
        h = "0";
      }
      h = b.length2em(h, 1, b.cwidth);
      if (l.isTop && this.displayIndent !== "0") {
        var g = b.length2em(this.displayIndent, 1, b.cwidth);
        h += n === a.INDENTALIGN.RIGHT ? -g : g;
      }
      return h;
    },
    HTMLmoveLine: function(p, g, m, o, h) {
      var l = p[0],
        k = g[0];
      if (l == null) {
        l = -1;
      }
      if (k == null) {
        k = this.data.length - 1;
      }
      if (l === k && p.length > 1) {
        this.data[l].HTMLmoveSlice(
          p.slice(1),
          g.slice(1),
          m,
          o,
          h,
          "paddingLeft"
        );
      } else {
        var n = o.last;
        o.last = false;
        while (l < k) {
          if (this.data[l]) {
            if (p.length <= 1) {
              this.data[l].HTMLmoveSpan(m, o, h);
            } else {
              this.data[l].HTMLmoveSlice(
                p.slice(1),
                [],
                m,
                o,
                h,
                "paddingLeft"
              );
            }
          }
          l++;
          o.first = false;
          p = [];
        }
        o.last = n;
        if (this.data[l]) {
          if (g.length <= 1) {
            this.data[l].HTMLmoveSpan(m, o, h);
          } else {
            this.data[l].HTMLmoveSlice([], g.slice(1), m, o, h, "paddingRight");
          }
        }
      }
    },
    HTMLmoveSlice: function(h, k, p, g, q, m) {
      this.HTMLremoveColor();
      var o = this.HTMLcreateSliceSpan(p);
      this.HTMLmoveLine(h, k, o, g, q);
      o.style[m] = "";
      this.HTMLcombineBBoxes(o, p.bbox);
      this.HTMLcleanBBox(o.bbox);
      if (k.length === 0) {
        p = this.HTMLspanElement();
        var l = p;
        if (this.href) {
          p = p.parentNode;
        }
        p.parentNode.removeChild(p);
        p.nextMathJaxSpan.id = l.id;
        var i = 0;
        while ((l = l.nextMathJaxSpan)) {
          if (l.nodeName.toLowerCase() === "a") {
            l = l.firstChild;
          }
          var j = this.HTMLhandleColor(l);
          if (j) {
            j.id += "-MathJax-Continue-" + i;
            i++;
          }
        }
      }
      return o;
    },
    HTMLcreateSliceSpan: function(h) {
      var k = this.HTMLspanElement(),
        j = 0;
      if (this.href) {
        k = k.parentNode;
      }
      var g = k;
      while (g.nextMathJaxSpan) {
        g = g.nextMathJaxSpan;
        j++;
      }
      var i = k.cloneNode(false);
      g.nextMathJaxSpan = i;
      i.nextMathJaxSpan = null;
      i.id += "-MathJax-Continue-" + j;
      i.bbox = this.HTMLemptyBBox({});
      return h.appendChild(i);
    },
    HTMLmoveSpan: function(g, k, i) {
      if (
        !(k.first || k.last) ||
        (k.first && k.values.linebreakstyle === a.LINEBREAKSTYLE.BEFORE) ||
        (k.last && i.linebreakstyle === a.LINEBREAKSTYLE.AFTER)
      ) {
        var h = document.getElementById(
          "MathJax-Color-" + this.spanID + b.idPostfix
        );
        if (h) {
          g.appendChild(h);
        }
        var j = this.HTMLspanElement();
        if (this.href) {
          j = j.parentNode;
        }
        g.appendChild(j);
        if (k.last) {
          j.style.paddingRight = "";
        }
        if (k.first || k.nextIsFirst) {
          j.style.paddingLeft = "";
          if (h) {
            this.HTMLremoveColor(j);
            this.HTMLhandleColor(j);
          }
        }
        if (k.first && j.bbox.w === 0) {
          k.nextIsFirst = true;
        } else {
          delete k.nextIsFirst;
        }
        this.HTMLcombineBBoxes(this, g.bbox);
      }
    }
  });
  a.mfenced.Augment({
    HTMLbetterBreak: function(l, g) {
      var u = l.index.slice(0),
        s = l.index.shift(),
        p = this.data.length,
        o,
        v,
        n,
        t = l.index.length > 0,
        h = false;
      if (s == null) {
        s = -1;
      }
      if (!t) {
        s++;
        l.W += l.w;
        l.w = 0;
      }
      n = l.scanW = l.W;
      l.nest++;
      if (!this.dataI) {
        this.dataI = [];
        if (this.data.open) {
          this.dataI.push("open");
        }
        if (p) {
          this.dataI.push(0);
        }
        for (var r = 1; r < p; r++) {
          if (this.data["sep" + r]) {
            this.dataI.push("sep" + r);
          }
          this.dataI.push(r);
        }
        if (this.data.close) {
          this.dataI.push("close");
        }
      }
      p = this.dataI.length;
      while (s < p && (l.scanW < e.maxwidth * b.linebreakWidth || l.w === 0)) {
        var q = this.dataI[s];
        if (this.data[q]) {
          if (this.data[q].HTMLbetterBreak(l, g)) {
            h = true;
            u = [s].concat(l.index);
            o = l.W;
            v = l.w;
            if (l.penalty === e.newline) {
              l.index = u;
              if (l.nest) {
                l.nest--;
              }
              return true;
            }
          }
          n = t ? l.scanW : this.HTMLaddWidth(s, l, n);
        }
        l.index = [];
        s++;
        t = false;
      }
      if (l.nest) {
        l.nest--;
      }
      l.index = u;
      if (h) {
        l.W = o;
        l.w = v;
      }
      return h;
    },
    HTMLmoveLine: function(h, m, p, g, r) {
      var o = h[0],
        n = m[0];
      if (o == null) {
        o = -1;
      }
      if (n == null) {
        n = this.dataI.length - 1;
      }
      if (o === n && h.length > 1) {
        this.data[this.dataI[o]].HTMLmoveSlice(
          h.slice(1),
          m.slice(1),
          p,
          g,
          r,
          "paddingLeft"
        );
      } else {
        var q = g.last;
        g.last = false;
        var l = this.dataI[o];
        while (o < n) {
          if (this.data[l]) {
            if (h.length <= 1) {
              this.data[l].HTMLmoveSpan(p, g, r);
            } else {
              this.data[l].HTMLmoveSlice(
                h.slice(1),
                [],
                p,
                g,
                r,
                "paddingLeft"
              );
            }
          }
          o++;
          l = this.dataI[o];
          g.first = false;
          h = [];
        }
        g.last = q;
        if (this.data[l]) {
          if (m.length <= 1) {
            this.data[l].HTMLmoveSpan(p, g, r);
          } else {
            this.data[l].HTMLmoveSlice([], m.slice(1), p, g, r, "paddingRight");
          }
        }
      }
    }
  });
  a.msubsup.Augment({
    HTMLbetterBreak: function(j, g) {
      if (!this.data[this.base]) {
        return false;
      }
      var o = j.index.slice(0),
        m = j.index.shift(),
        l,
        p,
        k,
        n = j.index.length > 0,
        h = false;
      if (!n) {
        j.W += j.w;
        j.w = 0;
      }
      k = j.scanW = j.W;
      if (m == null) {
        this.HTMLbaseW = this.data[this.base].HTMLspanElement().bbox.w;
        this.HTMLdw = this.HTMLspanElement().bbox.w - this.HTMLbaseW;
      }
      if (this.data[this.base].HTMLbetterBreak(j, g)) {
        h = true;
        o = [this.base].concat(j.index);
        l = j.W;
        p = j.w;
        if (j.penalty === e.newline) {
          h = n = true;
        }
      }
      if (!n) {
        this.HTMLaddWidth(this.base, j, k);
      }
      j.scanW += this.HTMLdw;
      j.W = j.scanW;
      j.index = [];
      if (h) {
        j.W = l;
        j.w = p;
        j.index = o;
      }
      return h;
    },
    HTMLmoveLine: function(n, h, k, m, i) {
      if (this.data[this.base]) {
        if (n.length > 1) {
          this.data[this.base].HTMLmoveSlice(
            n.slice(1),
            h.slice(1),
            k,
            m,
            i,
            "paddingLeft"
          );
        } else {
          if (h.length <= 1) {
            this.data[this.base].HTMLmoveSpan(k, m, i);
          } else {
            this.data[this.base].HTMLmoveSlice(
              [],
              h.slice(1),
              k,
              m,
              i,
              "paddingRight"
            );
          }
        }
      }
      if (h.length === 0) {
        var j = this.data[this.sup] || this.data[this.sub];
        if (j && this.HTMLnotEmpty(j)) {
          var l = j.HTMLspanElement().parentNode;
          if (j.href) {
            l = l.parentNode;
          }
          var g = l.parentNode;
          if (this.data[this.base]) {
            g.removeChild(g.firstChild);
          }
          for (l = g.firstChild; l; l = l.nextSibling) {
            l.style.left = b.Em(b.unEm(l.style.left) - this.HTMLbaseW);
          }
          g.bbox.w -= this.HTMLbaseW;
          g.style.width = b.Em(g.bbox.w);
          this.HTMLcombineBBoxes(g, k.bbox);
          k.appendChild(g);
        }
      }
    }
  });
  a.mmultiscripts.Augment({
    HTMLbetterBreak: function(k, h) {
      if (!this.data[this.base]) {
        return false;
      }
      var o = k.index.slice(0);
      k.index.shift();
      var m,
        p,
        l,
        n = k.index.length > 0,
        j = false;
      if (!n) {
        k.W += k.w;
        k.w = 0;
      }
      k.scanW = k.W;
      var q = this.HTMLspanElement().bbox,
        i = this.data[this.base].HTMLspanElement().bbox;
      var g = q.w - i.w;
      k.scanW += q.dx;
      l = k.scanW;
      if (this.data[this.base].HTMLbetterBreak(k, h)) {
        j = true;
        o = [this.base].concat(k.index);
        m = k.W;
        p = k.w;
        if (k.penalty === e.newline) {
          j = n = true;
        }
      }
      if (!n) {
        this.HTMLaddWidth(this.base, k, l);
      }
      k.scanW += g;
      k.W = k.scanW;
      k.index = [];
      if (j) {
        k.W = m;
        k.w = p;
        k.index = o;
      }
      return j;
    },
    HTMLmoveLine: function(i, j, p, h, q) {
      var n = this.HTMLspanElement(),
        l = n.bbox,
        o = n.firstChild,
        g = {};
      if (b.msiePaddingWidthBug) {
        o = o.nextSibling;
      }
      var m = o.firstChild;
      while (m) {
        if (m.bbox && m.bbox.name) {
          g[m.bbox.name] = m;
        }
        m = m.nextSibling;
      }
      if (i.length < 1) {
        if (g.presub || g.presup) {
          var k = b.createStack(p);
          if (g.presup) {
            b.addBox(k, g.presup);
            b.placeBox(g.presup, l.dx - g.presup.bbox.w, l.u);
          }
          if (g.presub) {
            b.addBox(k, g.presub);
            b.placeBox(g.presub, l.dx + l.delta - g.presub.bbox.w, -l.v);
          }
          this.HTMLcombineBBoxes(k, p.bbox);
          p.appendChild(k);
          k.style.width = b.Em(l.dx);
        }
      }
      if (this.data[this.base]) {
        if (i.length > 1) {
          this.data[this.base].HTMLmoveSlice(
            i.slice(1),
            j.slice(1),
            p,
            h,
            q,
            "paddingLeft"
          );
        } else {
          if (j.length <= 1) {
            this.data[this.base].HTMLmoveSpan(p, h, q);
          } else {
            this.data[this.base].HTMLmoveSlice(
              [],
              j.slice(1),
              p,
              h,
              q,
              "paddingRight"
            );
          }
        }
      }
      if (j.length === 0) {
        if (this.data[this.base]) {
          o.removeChild(o.firstChild);
        }
        for (m = o.firstChild; m; m = m.nextSibling) {
          m.style.left = b.Em(b.unEm(m.style.left) - l.px);
        }
        o.bbox.w -= l.px;
        o.style.width = b.Em(o.bbox.w);
        this.HTMLcombineBBoxes(o, p.bbox);
        p.appendChild(o);
      }
    }
  });
  a.mo.Augment({
    HTMLbetterBreak: function(i, g) {
      if (i.values && i.values.id === this.spanID) {
        return false;
      }
      var q = this.getValues(
        "linebreak",
        "linebreakstyle",
        "lineleading",
        "linebreakmultchar",
        "indentalign",
        "indentshift",
        "indentalignfirst",
        "indentshiftfirst",
        "indentalignlast",
        "indentshiftlast",
        "texClass",
        "fence"
      );
      if (q.linebreakstyle === a.LINEBREAKSTYLE.INFIXLINEBREAKSTYLE) {
        q.linebreakstyle = this.Get("infixlinebreakstyle");
      }
      if (q.texClass === a.TEXCLASS.OPEN) {
        i.nest++;
      }
      if (q.texClass === a.TEXCLASS.CLOSE && i.nest) {
        i.nest--;
      }
      var j = i.scanW,
        k = i.embellished || this;
      delete i.embellished;
      var o = k.HTMLspanElement(),
        p = o.bbox.w;
      if (o.style.paddingLeft) {
        p += b.unEm(o.style.paddingLeft);
      }
      if (q.linebreakstyle === a.LINEBREAKSTYLE.AFTER) {
        j += p;
        p = 0;
      }
      if (j - i.shift === 0 && q.linebreak !== a.LINEBREAK.NEWLINE) {
        return false;
      }
      var l = b.linebreakWidth - j;
      if (
        g.n === 0 &&
        (q.indentshiftfirst !== g.VALUES.indentshiftfirst ||
          q.indentalignfirst !== g.VALUES.indentalignfirst)
      ) {
        var m = this.HTMLgetAlign(g, q),
          h = this.HTMLgetShift(g, q, m);
        l += i.shift - h;
      }
      var n = Math.floor((l / b.linebreakWidth) * 1000);
      if (n < 0) {
        n = e.toobig - 3 * n;
      }
      if (q.fence) {
        n += e.fence;
      }
      if (
        (q.linebreakstyle === a.LINEBREAKSTYLE.AFTER &&
          q.texClass === a.TEXCLASS.OPEN) ||
        q.texClass === a.TEXCLASS.CLOSE
      ) {
        n += e.close;
      }
      n += i.nest * e.nestfactor;
      var r = e[q.linebreak || a.LINEBREAK.AUTO] || 0;
      if (!MathJax.Object.isArray(r)) {
        if (r || l >= 0) {
          n = r * i.nest;
        }
      } else {
        n = Math.max(1, n + r[0] * i.nest);
      }
      if (n >= i.penalty) {
        return false;
      }
      i.penalty = n;
      i.values = q;
      i.W = j;
      i.w = p;
      q.lineleading = b.length2em(q.lineleading, 1, g.VALUES.lineleading);
      q.id = this.spanID;
      return true;
    }
  });
  a.mspace.Augment({
    HTMLbetterBreak: function(h, g) {
      if (h.values && h.values.id === this.spanID) {
        return false;
      }
      var o = this.getValues("linebreak");
      var l = o.linebreak;
      if (!l || this.hasDimAttr()) {
        l = a.LINEBREAK.AUTO;
      }
      var i = h.scanW,
        m = this.HTMLspanElement(),
        n = m.bbox.w;
      if (m.style.paddingLeft) {
        n += b.unEm(m.style.paddingLeft);
      }
      if (i - h.shift === 0) {
        return false;
      }
      var j = b.linebreakWidth - i;
      var k = Math.floor((j / b.linebreakWidth) * 1000);
      if (k < 0) {
        k = e.toobig - 3 * k;
      }
      k += h.nest * e.nestfactor;
      var p = e[l] || 0;
      if (
        l === a.LINEBREAK.AUTO &&
        n >= e.spacelimit &&
        !this.mathbackground &&
        !this.background
      ) {
        p = [(n + e.spaceoffset) * e.spacefactor];
      }
      if (!MathJax.Object.isArray(p)) {
        if (p || j >= 0) {
          k = p * h.nest;
        }
      } else {
        k = Math.max(1, k + p[0] * h.nest);
      }
      if (k >= h.penalty) {
        return false;
      }
      h.penalty = k;
      h.values = o;
      h.W = i;
      h.w = n;
      o.lineleading = g.VALUES.lineleading;
      o.linebreakstyle = "before";
      o.id = this.spanID;
      return true;
    }
  });
  MathJax.Hub.Register.StartupHook("TeX mathchoice Ready", function() {
    a.TeXmathchoice.Augment({
      HTMLbetterBreak: function(h, g) {
        return this.Core().HTMLbetterBreak(h, g);
      },
      HTMLmoveLine: function(k, g, i, j, h) {
        return this.Core().HTMLmoveSlice(k, g, i, j, h);
      }
    });
  });
  a.maction.Augment({
    HTMLbetterBreak: function(h, g) {
      return this.Core().HTMLbetterBreak(h, g);
    },
    HTMLmoveLine: function(k, g, i, j, h) {
      return this.Core().HTMLmoveSlice(k, g, i, j, h);
    },
    HTMLmoveSlice: function(h, j, m, g, o, k) {
      var p = document.getElementById(
        "MathJax-HitBox-" + this.spanID + b.idPostfix
      );
      if (p) {
        p.parentNode.removeChild(p);
      }
      var l = this.SUPER(arguments).HTMLmoveSlice.apply(this, arguments);
      if (j.length === 0) {
        m = this.HTMLspanElement();
        var i = 0;
        while (m) {
          p = this.HTMLhandleHitBox(m, "-Continue-" + i);
          m = m.nextMathJaxSpan;
          i++;
        }
      }
      return l;
    }
  });
  a.semantics.Augment({
    HTMLbetterBreak: function(h, g) {
      return this.data[0] ? this.data[0].HTMLbetterBreak(h, g) : false;
    },
    HTMLmoveLine: function(k, g, i, j, h) {
      return this.data[0] ? this.data[0].HTMLmoveSlice(k, g, i, j, h) : null;
    }
  });
  MathJax.Hub.Startup.signal.Post("HTML-CSS multiline Ready");
  MathJax.Ajax.loadComplete(b.autoloadDir + "/multiline.js");
});
