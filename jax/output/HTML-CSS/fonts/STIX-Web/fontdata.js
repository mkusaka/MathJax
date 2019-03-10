/*
 *  /MathJax/jax/output/HTML-CSS/fonts/STIX-Web/fontdata.js
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

(function(aj, l, am) {
  var B = "2.7.5";
  var t = "STIXMathJax_Alphabets-bold-italic",
    G = "STIXMathJax_Alphabets-bold",
    z = "STIXMathJax_Alphabets-italic",
    e = "STIXMathJax_Alphabets",
    S = "STIXMathJax_Arrows-bold",
    w = "STIXMathJax_Arrows",
    g = "STIXMathJax_DoubleStruck-bold-italic",
    i = "STIXMathJax_DoubleStruck-bold",
    c = "STIXMathJax_DoubleStruck-italic",
    b = "STIXMathJax_DoubleStruck",
    q = "STIXMathJax_Fraktur-bold",
    p = "STIXMathJax_Fraktur",
    U = "STIXMathJax_Latin-bold-italic",
    C = "STIXMathJax_Latin-bold",
    D = "STIXMathJax_Latin-italic",
    K = "STIXMathJax_Latin",
    R = "STIXMathJax_Main-bold-italic",
    ak = "STIXMathJax_Main-bold",
    P = "STIXMathJax_Main-italic",
    E = "STIXMathJax_Main",
    k = "STIXMathJax_Marks-bold-italic",
    I = "STIXMathJax_Marks-bold",
    n = "STIXMathJax_Marks-italic",
    Z = "STIXMathJax_Marks",
    ah = "STIXMathJax_Misc-bold-italic",
    h = "STIXMathJax_Misc-bold",
    ad = "STIXMathJax_Misc-italic",
    x = "STIXMathJax_Misc",
    al = "STIXMathJax_Monospace",
    ab = "STIXMathJax_Normal-bold-italic",
    Q = "STIXMathJax_Normal-bold",
    T = "STIXMathJax_Normal-italic",
    j = "STIXMathJax_Operators-bold",
    v = "STIXMathJax_Operators",
    N = "STIXMathJax_SansSerif-bold-italic",
    A = "STIXMathJax_SansSerif-bold",
    an = "STIXMathJax_SansSerif-italic",
    d = "STIXMathJax_SansSerif",
    a = "STIXMathJax_Script-bold-italic",
    O = "STIXMathJax_Script-italic",
    W = "STIXMathJax_Script",
    r = "STIXMathJax_Shapes-bold-italic",
    J = "STIXMathJax_Shapes-bold",
    m = "STIXMathJax_Shapes",
    ae = "STIXMathJax_Size1",
    ac = "STIXMathJax_Size2",
    aa = "STIXMathJax_Size3",
    Y = "STIXMathJax_Size4",
    X = "STIXMathJax_Size5",
    af = "STIXMathJax_Symbols-bold",
    u = "STIXMathJax_Symbols",
    F = "STIXMathJax_Variants-bold-italic",
    o = "STIXMathJax_Variants-bold",
    ai = "STIXMathJax_Variants-italic",
    M = "STIXMathJax_Variants";
  var s = "H",
    f = "V",
    L = { load: "extra", dir: s },
    y = { load: "extra", dir: f };
  var ag = [8722, E, 0, 0, 0, -0.26, -0.26];
  aj.Augment({
    FONTDATA: {
      version: B,
      TeX_factor: 1.125,
      baselineskip: 1.2,
      lineH: 0.8,
      lineD: 0.2,
      hasStyleChar: true,
      FONTS: {
        "STIXMathJax_Alphabets-bold-italic": "Alphabets/BoldItalic/Main.js",
        "STIXMathJax_Alphabets-bold": "Alphabets/Bold/Main.js",
        "STIXMathJax_Alphabets-italic": "Alphabets/Italic/Main.js",
        STIXMathJax_Alphabets: "Alphabets/Regular/Main.js",
        "STIXMathJax_Arrows-bold": "Arrows/Bold/Main.js",
        STIXMathJax_Arrows: "Arrows/Regular/Main.js",
        "STIXMathJax_DoubleStruck-bold-italic":
          "DoubleStruck/BoldItalic/Main.js",
        "STIXMathJax_DoubleStruck-bold": "DoubleStruck/Bold/Main.js",
        "STIXMathJax_DoubleStruck-italic": "DoubleStruck/Italic/Main.js",
        STIXMathJax_DoubleStruck: "DoubleStruck/Regular/Main.js",
        "STIXMathJax_Fraktur-bold": "Fraktur/Bold/Main.js",
        STIXMathJax_Fraktur: "Fraktur/Regular/Main.js",
        "STIXMathJax_Latin-bold-italic": "Latin/BoldItalic/Main.js",
        "STIXMathJax_Latin-bold": "Latin/Bold/Main.js",
        "STIXMathJax_Latin-italic": "Latin/Italic/Main.js",
        STIXMathJax_Latin: "Latin/Regular/Main.js",
        "STIXMathJax_Main-bold-italic": "Main/BoldItalic/Main.js",
        "STIXMathJax_Main-bold": "Main/Bold/Main.js",
        "STIXMathJax_Main-italic": "Main/Italic/Main.js",
        STIXMathJax_Main: "Main/Regular/Main.js",
        "STIXMathJax_Marks-bold-italic": "Marks/BoldItalic/Main.js",
        "STIXMathJax_Marks-bold": "Marks/Bold/Main.js",
        "STIXMathJax_Marks-italic": "Marks/Italic/Main.js",
        STIXMathJax_Marks: "Marks/Regular/Main.js",
        "STIXMathJax_Misc-bold-italic": "Misc/BoldItalic/Main.js",
        "STIXMathJax_Misc-bold": "Misc/Bold/Main.js",
        "STIXMathJax_Misc-italic": "Misc/Italic/Main.js",
        STIXMathJax_Misc: "Misc/Regular/Main.js",
        STIXMathJax_Monospace: "Monospace/Regular/Main.js",
        "STIXMathJax_Normal-bold-italic": "Normal/BoldItalic/Main.js",
        "STIXMathJax_Normal-bold": "Normal/Bold/Main.js",
        "STIXMathJax_Normal-italic": "Normal/Italic/Main.js",
        "STIXMathJax_Operators-bold": "Operators/Bold/Main.js",
        STIXMathJax_Operators: "Operators/Regular/Main.js",
        "STIXMathJax_SansSerif-bold-italic": "SansSerif/BoldItalic/Main.js",
        "STIXMathJax_SansSerif-bold": "SansSerif/Bold/Main.js",
        "STIXMathJax_SansSerif-italic": "SansSerif/Italic/Main.js",
        STIXMathJax_SansSerif: "SansSerif/Regular/Main.js",
        "STIXMathJax_Script-bold-italic": "Script/BoldItalic/Main.js",
        "STIXMathJax_Script-italic": "Script/Italic/Main.js",
        STIXMathJax_Script: "Script/Regular/Main.js",
        "STIXMathJax_Shapes-bold-italic": "Shapes/BoldItalic/Main.js",
        "STIXMathJax_Shapes-bold": "Shapes/Bold/Main.js",
        STIXMathJax_Shapes: "Shapes/Regular/Main.js",
        STIXMathJax_Size1: "Size1/Regular/Main.js",
        STIXMathJax_Size2: "Size2/Regular/Main.js",
        STIXMathJax_Size3: "Size3/Regular/Main.js",
        STIXMathJax_Size4: "Size4/Regular/Main.js",
        STIXMathJax_Size5: "Size5/Regular/Main.js",
        "STIXMathJax_Symbols-bold": "Symbols/Bold/Main.js",
        STIXMathJax_Symbols: "Symbols/Regular/Main.js",
        "STIXMathJax_Variants-bold-italic": "Variants/BoldItalic/Main.js",
        "STIXMathJax_Variants-bold": "Variants/Bold/Main.js",
        "STIXMathJax_Variants-italic": "Variants/Italic/Main.js",
        STIXMathJax_Variants: "Variants/Regular/Main.js"
      },
      VARIANT: {
        normal: {
          fonts: [E, al, K, e, Z, w, v, u, m, x, M, ae],
          remap: { 124: [124, "-STIX-Web-variant"] }
        },
        bold: {
          fonts: [ak, Q, q, i, A, C, G, I, S, j, af, J, h, o, ae],
          offsetA: 119808,
          offsetG: 120488,
          bold: true,
          remap: { 8706: 120539, 8711: 120513 }
        },
        italic: {
          fonts: [P, T, O, c, an, D, z, n, ad, ai, ae],
          offsetA: 119860,
          offsetG: 120546,
          remap: { 119893: 8462, 8706: 120597, 8711: 120571 },
          italic: true
        },
        "bold-italic": {
          fonts: [R, ab, a, g, N, U, t, k, r, ah, F, ae],
          offsetA: 119860,
          offsetG: 120604,
          remap: { 119893: 8462, 8706: 120655, 8711: 120629 },
          bold: true,
          italic: true
        },
        "double-struck": {
          fonts: [b],
          offsetA: 120120,
          offsetN: 120792,
          remap: {
            120122: 8450,
            120127: 8461,
            120133: 8469,
            120135: 8473,
            120136: 8474,
            120137: 8477,
            120145: 8484
          }
        },
        fraktur: {
          fonts: [p],
          offsetA: 120068,
          remap: {
            120070: 8493,
            120075: 8460,
            120076: 8465,
            120085: 8476,
            120093: 8488
          }
        },
        "bold-fraktur": { fonts: [q], offsetA: 120172, bold: true },
        script: {
          fonts: [O],
          offsetA: 119964,
          italic: true,
          remap: {
            119965: 8492,
            119968: 8496,
            119969: 8497,
            119971: 8459,
            119972: 8464,
            119975: 8466,
            119976: 8499,
            119981: 8475,
            119994: 8495,
            119996: 8458,
            120004: 8500
          }
        },
        "bold-script": {
          fonts: [a],
          offsetA: 120016,
          bold: true,
          italic: true
        },
        "sans-serif": {
          fonts: [d],
          offsetA: 120224,
          offsetN: 120802,
          offsetP: 57725,
          remap: { 8706: 57724 }
        },
        "bold-sans-serif": {
          fonts: [A],
          offsetA: 120276,
          offsetN: 120812,
          offsetG: 120662,
          remap: { 8706: 120713, 8711: 120687 }
        },
        "sans-serif-italic": {
          fonts: [an],
          italic: true,
          offsetA: 120328,
          offsetN: 57780,
          offsetP: 57791,
          remap: { 8706: 57790 },
          bold: true
        },
        "sans-serif-bold-italic": {
          fonts: [N],
          offsetA: 120380,
          offsetN: 57846,
          offsetG: 120720,
          remap: { 8706: 120771, 8711: 120745 },
          bold: true,
          italic: true
        },
        monospace: { fonts: [al], offsetA: 120432, offsetN: 120822 },
        "-STIX-Web-variant": {
          remap: {
            10887: 57360,
            10888: 57359,
            9651: 9653,
            9661: 9663,
            124: [124, l.VARIANT.NORMAL]
          },
          fonts: [M, m, v, E, al, K, e, Z, w, u, x, ae]
        },
        "-tex-caligraphic": {
          offsetA: 57901,
          noLowerCase: 1,
          fonts: [ai, P, T, O, c, an, D, z, n, ad, ae],
          italic: true
        },
        "-tex-oldstyle": {
          offsetN: 57953,
          remap: {
            57954: 57957,
            57955: 57961,
            57956: 57965,
            57957: 57969,
            57958: 57973,
            57959: 57977,
            57960: 57981,
            57961: 57985,
            57962: 57989
          },
          fonts: [M, E, al, K, e, Z, w, v, u, m, x, ae]
        },
        "-tex-caligraphic-bold": {
          offsetA: 57927,
          noLowerCase: 1,
          fonts: [F, R, ab, a, g, N, U, t, k, r, ah, ae],
          italic: true,
          bold: true
        },
        "-tex-oldstyle-bold": {
          offsetN: 57953,
          remap: {
            57956: 57959,
            57957: 57963,
            57958: 57967,
            57959: 57971,
            57960: 57975,
            57961: 57979,
            57962: 57983,
            57963: 57987,
            57964: 57991
          },
          fonts: [o, ak, Q, q, i, A, C, G, I, S, j, af, J, h, ae],
          bold: true
        },
        "-tex-mathit": {
          fonts: [P, T, O, c, an, D, z, n, ad, ai, ae],
          italic: true,
          noIC: true
        },
        "-largeOp": { fonts: [ae, E] },
        "-smallOp": {}
      },
      RANGES: [
        { name: "alpha", low: 97, high: 122, offset: "A", add: 26 },
        { name: "Alpha", low: 65, high: 90, offset: "A" },
        { name: "number", low: 48, high: 57, offset: "N" },
        { name: "greek", low: 945, high: 969, offset: "G", add: 26 },
        { name: "Greek", low: 913, high: 937, offset: "G" },
        {
          name: "vargreek",
          low: 977,
          high: 1014,
          offset: "G",
          remapOnly: true,
          remap: {
            1013: 52,
            977: 53,
            1008: 54,
            981: 55,
            1009: 56,
            982: 57,
            1012: 17
          }
        },
        { name: "PUAgreek", low: 945, high: 969, offset: "P", add: 25 },
        { name: "PUAGreek", low: 913, high: 937, offset: "P" },
        {
          name: "varPUAgreek",
          low: 977,
          high: 1014,
          offset: "P",
          remapOnly: true,
          remap: { 1013: 50, 977: 51, 981: 52, 1009: 53, 982: 54, 1012: 17 }
        }
      ],
      RULECHAR: 9135,
      REMAP: {
        10: 32,
        12296: 10216,
        12297: 10217,
        10072: 8739,
        755: 730,
        756: 714,
        65079: 9182,
        65080: 9183
      },
      REMAPACCENT: {
        "\u007E": "\u0303",
        "\u2192": "\u20D7",
        "\u2190": "\u20D6",
        "\u0060": "\u0300",
        "\u005E": "\u0302",
        "\u00B4": "\u0301",
        "\u2032": "\u0301",
        "\u2035": "\u0300"
      },
      REMAPACCENTUNDER: {},
      DELIMITERS: {
        40: {
          dir: f,
          HW: [
            [0.853, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ],
          stretch: { bot: [57344, X], ext: [57345, X], top: [57346, X] }
        },
        41: {
          dir: f,
          HW: [
            [0.853, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ],
          stretch: { bot: [57347, X], ext: [57348, X], top: [57349, X] }
        },
        45: { alias: 9135, dir: s },
        47: {
          dir: f,
          HW: [
            [0.69, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ]
        },
        61: L,
        91: {
          dir: f,
          HW: [
            [0.818, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ],
          stretch: { bot: [57350, X], ext: [57351, X], top: [57352, X] }
        },
        92: {
          dir: f,
          HW: [
            [0.69, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ]
        },
        93: {
          dir: f,
          HW: [
            [0.818, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ],
          stretch: { bot: [57353, X], ext: [57354, X], top: [57355, X] }
        },
        94: { alias: 710, dir: s },
        95: { alias: 9135, dir: s },
        123: {
          dir: f,
          HW: [
            [0.861, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ],
          stretch: {
            bot: [57356, X],
            ext: [57357, X],
            mid: [57358, X],
            top: [57359, X]
          }
        },
        124: {
          dir: f,
          HW: [[0.69, E]],
          stretch: { bot: [124, E], ext: [124, E] }
        },
        125: {
          dir: f,
          HW: [
            [0.861, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ],
          stretch: {
            bot: [57360, X],
            ext: [57357, X],
            mid: [57361, X],
            top: [57362, X]
          }
        },
        126: { alias: 732, dir: s },
        175: { alias: 9135, dir: s },
        710: {
          dir: s,
          HW: [
            [0.311, E],
            [0.56, ae],
            [0.979, ac],
            [1.46, aa],
            [1.886, Y],
            [2.328, X]
          ]
        },
        711: L,
        713: { alias: 9135, dir: s },
        717: L,
        732: {
          dir: s,
          HW: [
            [0.33, E],
            [0.56, ae],
            [0.979, ac],
            [1.46, aa],
            [1.886, Y],
            [2.328, X]
          ]
        },
        759: L,
        770: {
          dir: s,
          HW: [
            [0.311, E],
            [0.56, ae],
            [0.979, ac],
            [1.46, aa],
            [1.886, Y],
            [2.328, X]
          ]
        },
        771: {
          dir: s,
          HW: [
            [0.33, E],
            [0.56, ae],
            [0.979, ac],
            [1.46, aa],
            [1.886, Y],
            [2.328, X]
          ]
        },
        773: {
          dir: s,
          HW: [[0.5, Z], [1, ae], [1.5, ac], [2, aa], [2.5, Y], [3, X]],
          stretch: { left: [57363, X], rep: [57363, X] }
        },
        780: {
          dir: s,
          HW: [
            [0.311, E],
            [0.56, ae],
            [0.979, ac],
            [1.46, aa],
            [1.886, Y],
            [2.328, X]
          ]
        },
        816: {
          dir: s,
          HW: [
            [0.33, Z],
            [0.56, ae],
            [0.979, ac],
            [1.46, aa],
            [1.886, Y],
            [2.328, X]
          ]
        },
        818: {
          dir: s,
          HW: [[0.5, Z], [1, ae], [1.5, ac], [2, aa], [2.5, Y], [3, X]],
          stretch: { left: [57364, X], rep: [57364, X] }
        },
        824: {
          dir: f,
          HW: [
            [0.818, E],
            [0.553, ae],
            [0.662, ac],
            [0.818, aa],
            [0.959, Y],
            [1.414, X]
          ]
        },
        8213: { alias: 9135, dir: s },
        8214: {
          dir: f,
          HW: [[0.879, E]],
          stretch: { bot: [8214, E], ext: [8214, E] }
        },
        8215: { alias: 9135, dir: s },
        8254: {
          dir: s,
          HW: [[0.5, E], [1, ae], [1.5, ac], [2, aa], [2.5, Y], [3, X]],
          stretch: { left: [8254, E], rep: [8254, E] }
        },
        8400: L,
        8401: L,
        8406: L,
        8407: {
          dir: s,
          HW: [
            [0.436, E],
            [0.872, ae],
            [1.308, ac],
            [1.744, aa],
            [2.18, Y],
            [3, X]
          ],
          stretch: { rep: [57366, X], right: [57369, X] }
        },
        8417: L,
        8428: L,
        8429: L,
        8430: L,
        8431: L,
        8512: y,
        8592: {
          dir: s,
          HW: [[0.786, E]],
          stretch: { left: [8592, E], rep: ag }
        },
        8593: {
          dir: f,
          HW: [[0.818, E]],
          stretch: { ext: [9168, E], top: [8593, E] }
        },
        8594: {
          dir: s,
          HW: [[0.786, E]],
          stretch: { rep: ag, right: [8594, E] }
        },
        8595: {
          dir: f,
          HW: [[0.818, E]],
          stretch: { bot: [8595, E], ext: [9168, E] }
        },
        8596: {
          dir: s,
          HW: [[0.85, E]],
          stretch: { left: [8592, E], rep: ag, right: [8594, E] }
        },
        8597: {
          dir: f,
          HW: [[0.954, E]],
          stretch: { bot: [8595, E], ext: [9168, E], top: [8593, E] }
        },
        8606: L,
        8607: y,
        8608: L,
        8609: y,
        8612: L,
        8613: y,
        8614: L,
        8615: y,
        8616: y,
        8617: L,
        8618: L,
        8624: y,
        8625: y,
        8626: y,
        8627: y,
        8628: L,
        8629: y,
        8636: L,
        8637: L,
        8638: y,
        8639: y,
        8640: L,
        8641: L,
        8642: y,
        8643: y,
        8651: L,
        8652: L,
        8656: {
          dir: s,
          HW: [[0.806, E]],
          stretch: { left: [8656, E], rep: [57375, X] }
        },
        8657: {
          dir: f,
          HW: [[0.818, E]],
          stretch: { ext: [57376, X], top: [8657, E] }
        },
        8658: {
          dir: s,
          HW: [[0.806, E]],
          stretch: { rep: [57375, X], right: [8658, E] }
        },
        8659: {
          dir: f,
          HW: [[0.818, E]],
          stretch: { bot: [8659, E], ext: [57376, X] }
        },
        8660: {
          dir: s,
          HW: [[0.886, E]],
          stretch: { left: [8656, E], rep: [57375, X], right: [8658, E] }
        },
        8661: {
          dir: f,
          HW: [[0.954, E]],
          stretch: { bot: [8659, E], ext: [57376, X], top: [8657, E] }
        },
        8666: L,
        8667: L,
        8672: L,
        8673: y,
        8674: L,
        8675: y,
        8676: L,
        8677: L,
        8701: L,
        8702: L,
        8703: L,
        8719: y,
        8720: y,
        8721: y,
        8722: { alias: 9135, dir: s },
        8725: { alias: 47, dir: f },
        8730: {
          dir: f,
          HW: [[1.232, E], [1.847, ae], [2.46, ac], [3.075, aa]],
          stretch: { bot: [57378, X], ext: [57379, X], top: [57380, X] }
        },
        8731: y,
        8732: y,
        8739: { dir: f, HW: [[0.879, E]], stretch: { ext: [8739, E] } },
        8741: { dir: f, HW: [[0.879, E]], stretch: { ext: [8741, E] } },
        8747: y,
        8748: y,
        8749: y,
        8750: y,
        8751: y,
        8752: y,
        8753: y,
        8754: y,
        8755: y,
        8896: y,
        8897: y,
        8898: y,
        8899: y,
        8968: {
          dir: f,
          HW: [
            [0.926, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ],
          stretch: { ext: [57351, X], top: [57352, X] }
        },
        8969: {
          dir: f,
          HW: [
            [0.926, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ],
          stretch: { ext: [57354, X], top: [57355, X] }
        },
        8970: {
          dir: f,
          HW: [
            [0.926, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ],
          stretch: { bot: [57350, X], ext: [57351, X] }
        },
        8971: {
          dir: f,
          HW: [
            [0.926, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ],
          stretch: { bot: [57353, X], ext: [57354, X] }
        },
        8978: { alias: 9180, dir: s },
        8994: { alias: 9180, dir: s },
        8995: { alias: 9181, dir: s },
        9001: { alias: 10216, dir: f },
        9002: { alias: 10217, dir: f },
        9130: y,
        9135: { dir: s, HW: [[0.315, u]], stretch: { rep: [9135, u] } },
        9136: {
          dir: f,
          HW: [[1.001, X, null, 57402]],
          stretch: { top: [57359, X], ext: [57357, X], bot: [57360, X] }
        },
        9137: {
          dir: f,
          HW: [[1.001, X, null, 57403]],
          stretch: { top: [57362, X], ext: [57357, X], bot: [57356, X] }
        },
        9140: L,
        9141: L,
        9168: y,
        9180: L,
        9181: L,
        9182: {
          dir: s,
          HW: [
            [1, E],
            [0.925, ae],
            [1.46, ac],
            [1.886, aa],
            [2.328, Y],
            [3.238, X]
          ],
          stretch: {
            left: [57393, X],
            rep: [57384, X],
            mid: [57394, X],
            right: [57395, X]
          }
        },
        9183: {
          dir: s,
          HW: [
            [1, E],
            [0.925, ae],
            [1.46, ac],
            [1.886, aa],
            [2.328, Y],
            [3.238, X]
          ],
          stretch: {
            left: [57396, X],
            rep: [57387, X],
            mid: [57397, X],
            right: [57398, X]
          }
        },
        9184: L,
        9185: L,
        9472: { alias: 8722, dir: s },
        10072: { alias: 8739, dir: f },
        10098: y,
        10099: y,
        10214: y,
        10215: y,
        10216: {
          dir: f,
          HW: [
            [0.926, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ]
        },
        10217: {
          dir: f,
          HW: [
            [0.926, E],
            [1.23, ae],
            [1.35, ae, 1.098],
            [1.845, ac],
            [2.46, aa],
            [3.075, Y]
          ]
        },
        10218: y,
        10219: y,
        10222: {
          dir: f,
          HW: [[0.853, E]],
          stretch: { bot: [57344, X], ext: [57345, X], top: [57346, X] }
        },
        10223: {
          dir: f,
          HW: [[0.853, E]],
          stretch: { bot: [57347, X], ext: [57348, X], top: [57349, X] }
        },
        10224: y,
        10225: y,
        10229: { alias: 8592, dir: s },
        10230: { alias: 8594, dir: s },
        10231: { alias: 8596, dir: s },
        10232: { alias: 8656, dir: s },
        10233: { alias: 8658, dir: s },
        10234: { alias: 8660, dir: s },
        10235: { alias: 8612, dir: s },
        10236: { alias: 8614, dir: s },
        10237: { alias: 10502, dir: s },
        10238: { alias: 10503, dir: s },
        10502: L,
        10503: L,
        10506: y,
        10507: y,
        10514: y,
        10515: y,
        10574: L,
        10575: y,
        10576: L,
        10577: y,
        10578: L,
        10579: L,
        10580: y,
        10581: y,
        10582: L,
        10583: L,
        10584: y,
        10585: y,
        10586: L,
        10587: L,
        10588: y,
        10589: y,
        10590: L,
        10591: L,
        10592: y,
        10593: y,
        10624: y,
        10627: y,
        10628: y,
        10629: y,
        10630: y,
        10647: y,
        10648: y,
        10744: { dir: f, HW: [[1.02, E], [1.845, ae]] },
        10745: { dir: f, HW: [[1.02, E], [1.845, ae]] },
        10752: y,
        10753: y,
        10754: y,
        10755: y,
        10756: y,
        10757: y,
        10758: y,
        10759: y,
        10760: y,
        10761: y,
        10762: y,
        10763: y,
        10764: y,
        10765: y,
        10766: y,
        10767: y,
        10768: y,
        10769: y,
        10770: y,
        10771: y,
        10772: y,
        10773: y,
        10774: y,
        10775: y,
        10776: y,
        10777: y,
        10778: y,
        10779: y,
        10780: y,
        11004: y,
        11007: y,
        11077: L,
        11078: {
          dir: s,
          HW: [[0.818, m]],
          stretch: { rep: [57401, X], right: [11078, m] }
        },
        12296: { alias: 10216, dir: f },
        12297: { alias: 10217, dir: f },
        65079: { alias: 9182, dir: s },
        65080: { alias: 9183, dir: s }
      }
    }
  });
  MathJax.Hub.Register.LoadHook(
    aj.fontDir + "/Main/Regular/Main.js",
    function() {
      aj.FONTDATA.FONTS[E][8942][0] += 400;
      aj.FONTDATA.FONTS[E][8945][0] += 500;
      aj.FONTDATA.FONTS[E][8722][0] = aj.FONTDATA.FONTS[E][43][0];
      aj.FONTDATA.FONTS[E][8722][1] = aj.FONTDATA.FONTS[E][43][1];
      aj.FONTDATA.FONTS[E][61][1] += 100;
    }
  );
  MathJax.Hub.Register.LoadHook(
    aj.fontDir + "/Size5/Regular/Main.js",
    function() {
      var H;
      H = aj.FONTDATA.DELIMITERS[9182].stretch.rep[0];
      aj.FONTDATA.FONTS[X][H][0] += 200;
      aj.FONTDATA.FONTS[X][H][1] += 200;
      H = aj.FONTDATA.DELIMITERS[9183].stretch.rep[0];
      aj.FONTDATA.FONTS[X][H][0] += 200;
      aj.FONTDATA.FONTS[X][H][1] += 200;
    }
  );
  am.loadComplete(aj.fontDir + "/fontdata.js");
})(MathJax.OutputJax["HTML-CSS"], MathJax.ElementJax.mml, MathJax.Ajax);
