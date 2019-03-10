/*
 *  /MathJax/jax/output/SVG/autoload/mtable.js
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

MathJax.Hub.Register.StartupHook("SVG Jax Ready", function() {
  var c = "2.7.5";
  var a = MathJax.ElementJax.mml,
    d = MathJax.OutputJax.SVG,
    b = d.BBOX;
  a.mtable.Augment({
    toSVG: function(aa) {
      this.SVGgetStyles();
      var o = this.SVG(),
        ap = this.SVGgetScale(o);
      if (this.data.length === 0) {
        this.SVGsaveData(o);
        return o;
      }
      var aN = this.getValues(
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
        "useHeight",
        "width",
        "side",
        "minlabelspacing"
      );
      if (aN.width.match(/%$/)) {
        o.width = aN.width = d.Em(
          (d.cwidth / 1000) * (parseFloat(aN.width) / 100)
        );
      }
      var v = this.SVGgetMu(o);
      var aK = -1;
      var z = [],
        I = [],
        k = [],
        O = [],
        K = [],
        aI,
        aG,
        w = -1,
        aE,
        u,
        az,
        S,
        an,
        E,
        aA;
      var ac = d.FONTDATA.lineH * ap * aN.useHeight,
        ag = d.FONTDATA.lineD * ap * aN.useHeight;
      for (aI = 0, aE = this.data.length; aI < aE; aI++) {
        S = this.data[aI];
        az = S.type === "mlabeledtr" ? aK : 0;
        O[aI] = [];
        z[aI] = ac;
        I[aI] = ag;
        for (aG = az, u = S.data.length + az; aG < u; aG++) {
          if (k[aG] == null) {
            if (aG > w) {
              w = aG;
            }
            K[aG] = b.G();
            k[aG] = -d.BIGDIMEN;
          }
          an = S.data[aG - az];
          O[aI][aG] = an.toSVG();
          if (an.isEmbellished()) {
            E = an.CoreMO();
            var aM = E.Get("minsize", true);
            if (aM) {
              if (E.SVGcanStretch("Vertical")) {
                aA = E.SVGdata.h + E.SVGdata.d;
                if (aA) {
                  aM = d.length2em(aM, v, aA);
                  if ((aM * E.SVGdata.h) / aA > z[aI]) {
                    z[aI] = (aM * E.SVGdata.h) / aA;
                  }
                  if ((aM * E.SVGdata.d) / aA > I[aI]) {
                    I[aI] = (aM * E.SVGdata.d) / aA;
                  }
                }
              } else {
                if (E.SVGcanStretch("Horizontal")) {
                  aM = d.length2em(aM, v, E.SVGdata.w);
                  if (aM > k[aG]) {
                    k[aG] = aM;
                  }
                }
              }
            }
          }
          if (O[aI][aG].h > z[aI]) {
            z[aI] = O[aI][aG].h;
          }
          if (O[aI][aG].d > I[aI]) {
            I[aI] = O[aI][aG].d;
          }
          if (O[aI][aG].w > k[aG]) {
            k[aG] = O[aI][aG].w;
          }
        }
      }
      var ao = MathJax.Hub.SplitList;
      var am = ao(aN.columnspacing),
        T = ao(aN.rowspacing),
        ai = ao(aN.columnalign),
        L = ao(aN.rowalign),
        N = ao(aN.columnlines),
        h = ao(aN.rowlines),
        ar = ao(aN.columnwidth),
        aw = [];
      for (aI = 0, aE = am.length; aI < aE; aI++) {
        am[aI] = d.length2em(am[aI], v);
      }
      for (aI = 0, aE = T.length; aI < aE; aI++) {
        T[aI] = d.length2em(T[aI], v);
      }
      while (am.length < w) {
        am.push(am[am.length - 1]);
      }
      while (ai.length <= w) {
        ai.push(ai[ai.length - 1]);
      }
      while (N.length < w) {
        N.push(N[N.length - 1]);
      }
      while (ar.length <= w) {
        ar.push(ar[ar.length - 1]);
      }
      while (T.length < O.length) {
        T.push(T[T.length - 1]);
      }
      while (L.length <= O.length) {
        L.push(L[L.length - 1]);
      }
      while (h.length < O.length) {
        h.push(h[h.length - 1]);
      }
      if (K[aK]) {
        ai[aK] = aN.side.substr(0, 1) === "l" ? "left" : "right";
        am[aK] = -k[aK];
      }
      for (aI = 0, aE = O.length; aI < aE; aI++) {
        S = this.data[aI];
        aw[aI] = [];
        if (S.rowalign) {
          L[aI] = S.rowalign;
        }
        if (S.columnalign) {
          aw[aI] = ao(S.columnalign);
          while (aw[aI].length <= w) {
            aw[aI].push(aw[aI][aw[aI].length - 1]);
          }
        }
      }
      if (aN.equalrows) {
        var U = Math.max.apply(Math, z),
          aq = Math.max.apply(Math, I);
        for (aI = 0, aE = O.length; aI < aE; aI++) {
          az = (U + aq - (z[aI] + I[aI])) / 2;
          z[aI] += az;
          I[aI] += az;
        }
      }
      aA = z[0] + I[O.length - 1];
      for (aI = 0, aE = O.length - 1; aI < aE; aI++) {
        aA += Math.max(0, I[aI] + z[aI + 1] + T[aI]);
      }
      var ae = 0,
        ab = 0,
        aB,
        aL = aA;
      if (
        aN.frame !== "none" ||
        (aN.columnlines + aN.rowlines).match(/solid|dashed/)
      ) {
        var t = ao(aN.framespacing);
        if (t.length != 2) {
          t = ao(this.defaults.framespacing);
        }
        ae = d.length2em(t[0], v);
        ab = d.length2em(t[1], v);
        aL = aA + 2 * ab;
      }
      var g,
        ay,
        aD = "";
      if (typeof aN.align !== "string") {
        aN.align = String(aN.align);
      }
      if (aN.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/)) {
        aD = RegExp.$3 || "";
        aN.align = RegExp.$1;
      } else {
        aN.align = this.defaults.align;
      }
      if (aD !== "") {
        aD = parseInt(aD);
        if (aD < 0) {
          aD = O.length + 1 + aD;
        }
        if (aD < 1) {
          aD = 1;
        } else {
          if (aD > O.length) {
            aD = O.length;
          }
        }
        g = 0;
        ay = -(aA + ab) + z[0];
        for (aI = 0, aE = aD - 1; aI < aE; aI++) {
          var Z = Math.max(0, I[aI] + z[aI + 1] + T[aI]);
          g += Z;
          ay += Z;
        }
      } else {
        g = {
          top: -(z[0] + ab),
          bottom: aA + ab - z[0],
          center: aA / 2 - z[0],
          baseline: aA / 2 - z[0],
          axis: aA / 2 + d.TeX.axis_height * ap - z[0]
        }[aN.align];
        ay = {
          top: -(aA + 2 * ab),
          bottom: 0,
          center: -(aA / 2 + ab),
          baseline: -(aA / 2 + ab),
          axis: d.TeX.axis_height * ap - aA / 2 - ab
        }[aN.align];
      }
      var at,
        ax = 0,
        V = 0,
        X = 0,
        aC = 0,
        aJ = 0,
        r = [],
        B = [],
        aj = 1;
      if (aN.equalcolumns && aN.width !== "auto") {
        at = d.length2em(aN.width, v);
        for (aI = 0, aE = Math.min(w, am.length); aI < aE; aI++) {
          at -= am[aI];
        }
        at /= w;
        for (aI = 0, aE = Math.min(w + 1, ar.length); aI < aE; aI++) {
          k[aI] = at;
        }
      } else {
        for (aI = 0, aE = Math.min(w + 1, ar.length); aI < aE; aI++) {
          if (ar[aI] === "auto") {
            V += k[aI];
          } else {
            if (ar[aI] === "fit") {
              B[aJ] = aI;
              aJ++;
              V += k[aI];
            } else {
              if (ar[aI].match(/%$/)) {
                r[aC] = aI;
                aC++;
                X += k[aI];
                ax += d.length2em(ar[aI], v, 1);
              } else {
                k[aI] = d.length2em(ar[aI], v);
                V += k[aI];
              }
            }
          }
        }
        if (aN.width === "auto") {
          if (ax > 0.98) {
            aj = X / (V + X);
            at = V + X;
          } else {
            at = V / (1 - ax);
          }
        } else {
          at = Math.max(V + X, d.length2em(aN.width, v));
          for (aI = 0, aE = Math.min(w, am.length); aI < aE; aI++) {
            at -= am[aI];
          }
        }
        for (aI = 0, aE = r.length; aI < aE; aI++) {
          k[r[aI]] = d.length2em(ar[r[aI]], v, at * aj);
          V += k[r[aI]];
        }
        if (Math.abs(at - V) > 0.01) {
          if (aJ && at > V) {
            at = (at - V) / aJ;
            for (aI = 0, aE = B.length; aI < aE; aI++) {
              k[B[aI]] += at;
            }
          } else {
            at = at / V;
            for (aG = 0; aG <= w; aG++) {
              k[aG] *= at;
            }
          }
        }
        if (aN.equalcolumns) {
          var af = Math.max.apply(Math, k);
          for (aG = 0; aG <= w; aG++) {
            k[aG] = af;
          }
        }
      }
      var au = g,
        l,
        aF;
      az = K[aK] ? aK : 0;
      for (aG = az; aG <= w; aG++) {
        K[aG].w = k[aG];
        for (aI = 0, aE = O.length; aI < aE; aI++) {
          if (O[aI][aG]) {
            az = this.data[aI].type === "mlabeledtr" ? aK : 0;
            an = this.data[aI].data[aG - az];
            if (an.SVGcanStretch("Horizontal")) {
              O[aI][aG] = an.SVGstretchH(k[aG]);
            } else {
              if (an.SVGcanStretch("Vertical")) {
                E = an.CoreMO();
                var ad = E.symmetric;
                E.symmetric = false;
                O[aI][aG] = an.SVGstretchV(z[aI], I[aI]);
                E.symmetric = ad;
              }
            }
            aF = an.rowalign || this.data[aI].rowalign || L[aI];
            l =
              {
                top: z[aI] - O[aI][aG].h,
                bottom: O[aI][aG].d - I[aI],
                center: (z[aI] - I[aI] - (O[aI][aG].h - O[aI][aG].d)) / 2,
                baseline: 0,
                axis: 0
              }[aF] || 0;
            aF = an.columnalign || aw[aI][aG] || ai[aG];
            K[aG].Align(O[aI][aG], aF, 0, au + l);
          }
          if (aI < O.length - 1) {
            au -= Math.max(0, I[aI] + z[aI + 1] + T[aI]);
          }
        }
        au = g;
      }
      var ah = 1.5 * d.em;
      var av = ae - ah / 2;
      for (aG = 0; aG <= w; aG++) {
        o.Add(K[aG], av, 0);
        av += k[aG] + am[aG];
        if (N[aG] !== "none" && aG < w && aG !== aK) {
          o.Add(b.VLINE(aL, ah, N[aG]), av - am[aG] / 2, ay);
        }
      }
      o.w += ae;
      o.d = -ay;
      o.h = aL + ay;
      aB = o.w;
      if (aN.frame !== "none") {
        o.Add(b.HLINE(aB, ah, aN.frame), 0, ay + aL - ah);
        o.Add(b.HLINE(aB, ah, aN.frame), 0, ay);
        o.Add(b.VLINE(aL, ah, aN.frame), 0, ay);
        o.Add(b.VLINE(aL, ah, aN.frame), aB - ah, ay);
      }
      au = g - ah / 2;
      for (aI = 0, aE = O.length - 1; aI < aE; aI++) {
        l = Math.max(0, I[aI] + z[aI + 1] + T[aI]);
        if (h[aI] !== a.LINES.NONE && h[aI] !== "") {
          o.Add(
            b.HLINE(aB, ah, h[aI]),
            0,
            au - I[aI] - (l - I[aI] - z[aI + 1]) / 2
          );
        }
        au -= l;
      }
      o.Clean();
      this.SVGhandleSpace(o);
      this.SVGhandleColor(o);
      if (K[aK]) {
        o.tw = Math.max(o.w, o.r) - Math.min(0, o.l);
        var R = this.getValues(
          "indentalignfirst",
          "indentshiftfirst",
          "indentalign",
          "indentshift"
        );
        if (R.indentalignfirst !== a.INDENTALIGN.INDENTALIGN) {
          R.indentalign = R.indentalignfirst;
        }
        if (R.indentalign === a.INDENTALIGN.AUTO) {
          R.indentalign = this.displayAlign;
        }
        if (R.indentshiftfirst !== a.INDENTSHIFT.INDENTSHIFT) {
          R.indentshift = R.indentshiftfirst;
        }
        if (R.indentshift === "auto" || R.indentshift === "") {
          R.indentshift = "0";
        }
        var ak = d.length2em(R.indentshift, v, d.cwidth);
        var Q = d.length2em(aN.minlabelspacing, v, d.cwidth);
        var al = Q + K[aK].w,
          aO = 0,
          aH = o.w;
        var e = d.length2em(this.displayIndent, v, d.cwidth);
        az = ai[aK] === a.INDENTALIGN.RIGHT ? -1 : 1;
        if (R.indentalign === a.INDENTALIGN.CENTER) {
          var q = (d.cwidth - aH) / 2;
          ak += e;
          if (al + az * aO > q + az * ak) {
            R.indentalign = ai[aK];
            ak = az * (al + az * aO);
            aH += al + Math.max(0, ak);
          }
        } else {
          if (ai[aK] === R.indentalign) {
            if (e < 0) {
              aO = az * e;
              e = 0;
            }
            ak += az * e;
            if (al > az * ak) {
              ak = az * al;
            }
            ak += aO;
            aH += az * ak;
          } else {
            ak -= az * e;
            if (aH - az * ak + al > d.cwidth) {
              ak = az * (aH + al - d.cwidth);
              if (az * ak > 0) {
                aH = d.cwidth + az * ak;
                ak = 0;
              }
            }
          }
        }
        var G = o;
        o = this.SVG();
        o.hasIndent = true;
        o.w = o.r = Math.max(aH, d.cwidth);
        o.Align(K[aK], ai[aK], 0, 0, aO);
        o.Align(G, R.indentalign, 0, 0, ak);
        o.tw = aH;
      }
      this.SVGsaveData(o);
      return o;
    },
    SVGhandleSpace: function(e) {
      if (!this.hasFrame && !e.width) {
        e.x = e.X = 167;
      }
      this.SUPER(arguments).SVGhandleSpace.call(this, e);
    }
  });
  a.mtd.Augment({
    toSVG: function(e, g) {
      var f = (this.svg = this.SVG());
      if (this.data[0]) {
        f.Add(this.SVGdataStretched(0, e, g));
        f.Clean();
      }
      this.SVGhandleColor(f);
      this.SVGsaveData(f);
      return f;
    }
  });
  MathJax.Hub.Startup.signal.Post("SVG mtable Ready");
  MathJax.Ajax.loadComplete(d.autoloadDir + "/mtable.js");
});
