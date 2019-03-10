/*
 *  /MathJax/jax/output/SVG/fonts/Gyre-Termes/fontdata.js
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

(function(z, e, E, o) {
  var B = "2.7.5";
  var c = "GyreTermesMathJax_Alphabets",
    w = "GyreTermesMathJax_Arrows",
    y = "GyreTermesMathJax_DoubleStruck",
    C = "GyreTermesMathJax_Fraktur",
    h = "GyreTermesMathJax_Latin",
    v = "GyreTermesMathJax_Main",
    n = "GyreTermesMathJax_Marks",
    x = "GyreTermesMathJax_Misc",
    F = "GyreTermesMathJax_Monospace",
    A = "GyreTermesMathJax_NonUnicode",
    s = "GyreTermesMathJax_Normal",
    D = "GyreTermesMathJax_Operators",
    a = "GyreTermesMathJax_SansSerif",
    q = "GyreTermesMathJax_Script",
    b = "GyreTermesMathJax_Shapes",
    m = "GyreTermesMathJax_Size1",
    l = "GyreTermesMathJax_Size2",
    k = "GyreTermesMathJax_Size3",
    i = "GyreTermesMathJax_Size4",
    g = "GyreTermesMathJax_Size5",
    f = "GyreTermesMathJax_Size6",
    u = "GyreTermesMathJax_Symbols",
    p = "GyreTermesMathJax_Variants";
  var r = "H",
    d = "V",
    t = { load: "extra", dir: r },
    j = { load: "extra", dir: d };
  z.Augment({
    FONTDATA: {
      version: B,
      baselineskip: 1200,
      lineH: 800,
      lineD: 200,
      FONTS: {
        GyreTermesMathJax_Alphabets: "Alphabets/Regular/Main.js",
        GyreTermesMathJax_Arrows: "Arrows/Regular/Main.js",
        GyreTermesMathJax_DoubleStruck: "DoubleStruck/Regular/Main.js",
        GyreTermesMathJax_Fraktur: "Fraktur/Regular/Main.js",
        GyreTermesMathJax_Latin: "Latin/Regular/Main.js",
        GyreTermesMathJax_Main: "Main/Regular/Main.js",
        GyreTermesMathJax_Marks: "Marks/Regular/Main.js",
        GyreTermesMathJax_Misc: "Misc/Regular/Main.js",
        GyreTermesMathJax_Monospace: "Monospace/Regular/Main.js",
        GyreTermesMathJax_NonUnicode: "NonUnicode/Regular/Main.js",
        GyreTermesMathJax_Normal: "Normal/Regular/Main.js",
        GyreTermesMathJax_Operators: "Operators/Regular/Main.js",
        GyreTermesMathJax_SansSerif: "SansSerif/Regular/Main.js",
        GyreTermesMathJax_Script: "Script/Regular/Main.js",
        GyreTermesMathJax_Shapes: "Shapes/Regular/Main.js",
        GyreTermesMathJax_Size1: "Size1/Regular/Main.js",
        GyreTermesMathJax_Size2: "Size2/Regular/Main.js",
        GyreTermesMathJax_Size3: "Size3/Regular/Main.js",
        GyreTermesMathJax_Size4: "Size4/Regular/Main.js",
        GyreTermesMathJax_Size5: "Size5/Regular/Main.js",
        GyreTermesMathJax_Size6: "Size6/Regular/Main.js",
        GyreTermesMathJax_Symbols: "Symbols/Regular/Main.js",
        GyreTermesMathJax_Variants: "Variants/Regular/Main.js"
      },
      VARIANT: {
        normal: { fonts: [v, s, F, h, c, n, w, D, u, b, x, p, A, m] },
        bold: {
          fonts: [v, s, F, h, c, n, w, D, u, b, x, p, A, m],
          bold: true,
          offsetA: 119808,
          offsetG: 120488,
          offsetN: 120782
        },
        italic: {
          fonts: [v, s, F, h, c, n, w, D, u, b, x, p, A, m],
          italic: true,
          offsetA: 119860,
          offsetG: 120546,
          remap: { 119893: 8462 }
        },
        "bold-italic": {
          fonts: [v, s, F, h, c, n, w, D, u, b, x, p, A, m],
          bold: true,
          italic: true,
          offsetA: 119912,
          offsetG: 120604
        },
        "double-struck": {
          fonts: [y],
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
          fonts: [C],
          offsetA: 120068,
          remap: {
            120070: 8493,
            120075: 8460,
            120076: 8465,
            120085: 8476,
            120093: 8488
          }
        },
        "bold-fraktur": { fonts: [C], bold: true, offsetA: 120172 },
        script: {
          fonts: [q],
          italic: true,
          offsetA: 119964,
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
          fonts: [q],
          bold: true,
          italic: true,
          offsetA: 120016
        },
        "sans-serif": { fonts: [a], offsetA: 120224, offsetN: 120802 },
        "bold-sans-serif": {
          fonts: [a],
          bold: true,
          offsetA: 120276,
          offsetN: 120812,
          offsetG: 120662
        },
        "sans-serif-italic": { fonts: [a], italic: true, offsetA: 120328 },
        "sans-serif-bold-italic": {
          fonts: [a],
          bold: true,
          italic: true,
          offsetA: 120380,
          offsetG: 120720
        },
        monospace: { fonts: [F], offsetA: 120432, offsetN: 120822 },
        "-Gyre-Termes-variant": {
          fonts: [p, v, s, F, h, c, n, w, D, u, b, x, A, m]
        },
        "-tex-caligraphic": {
          fonts: [v, s, F, h, c, n, w, D, u, b, x, p, A, m],
          italic: true
        },
        "-tex-oldstyle": { fonts: [v, s, F, h, c, n, w, D, u, b, x, p, A, m] },
        "-tex-caligraphic-bold": {
          fonts: [v, s, F, h, c, n, w, D, u, b, x, p, A, m],
          italic: true,
          bold: true
        },
        "-tex-oldstyle-bold": {
          fonts: [v, s, F, h, c, n, w, D, u, b, x, p, A, m],
          bold: true
        },
        "-tex-mathit": {
          fonts: [v, s, F, h, c, n, w, D, u, b, x, p, A, m],
          italic: true,
          noIC: true
        },
        "-largeOp": { fonts: [m, v] },
        "-smallOp": {}
      },
      RANGES: [
        { name: "alpha", low: 97, high: 122, offset: "A", add: 26 },
        { name: "Alpha", low: 65, high: 90, offset: "A" },
        { name: "number", low: 48, high: 57, offset: "N" },
        { name: "greek", low: 945, high: 969, offset: "G", add: 26 },
        {
          name: "Greek",
          low: 913,
          high: 1014,
          offset: "G",
          remap: {
            1013: 52,
            977: 53,
            1008: 54,
            981: 55,
            1009: 56,
            982: 57,
            1012: 17
          }
        }
      ],
      RULECHAR: 8722,
      REMAP: {
        10: 32,
        9666: 9664,
        12296: 10216,
        12297: 10217,
        10072: 8739,
        9656: 9654,
        978: 933,
        9652: 9650,
        9653: 9651,
        65079: 9182,
        65080: 9183,
        697: 8242,
        9723: 9633,
        9724: 9632,
        9662: 9660,
        8254: 773,
        9663: 9661
      },
      REMAPACCENT: {
        "\u007E": "\u0303",
        "\u2192": "\u20D7",
        "\u0060": "\u0300",
        "\u005E": "\u0302",
        "\u00B4": "\u0301",
        "\u2032": "\u0301",
        "\u2035": "\u0300"
      },
      REMAPACCENTUNDER: {},
      DELIMITERS: {
        40: {
          dir: d,
          HW: [
            [816, v],
            [976, m],
            [1168, l],
            [1398, k],
            [1674, i],
            [2005, g],
            [2404, f],
            [2780, f, 1.157]
          ],
          stretch: { bot: [9117, u], ext: [9116, u], top: [9115, u] }
        },
        41: {
          dir: d,
          HW: [
            [816, v],
            [976, m],
            [1168, l],
            [1398, k],
            [1674, i],
            [2005, g],
            [2404, f],
            [2780, f, 1.157]
          ],
          stretch: { bot: [9120, u], ext: [9119, u], top: [9118, u] }
        },
        45: { alias: 8722, dir: r },
        47: {
          dir: d,
          HW: [
            [800, v],
            [1048, m],
            [1372, l],
            [1798, k],
            [1827, k, 1.016],
            [2356, i],
            [3086, g],
            [4043, f]
          ]
        },
        61: {
          dir: r,
          HW: [[500, v]],
          stretch: { left: [57344, f], rep: [57345, f], right: [57346, f] }
        },
        91: {
          dir: d,
          HW: [
            [836, v],
            [998, m],
            [1190, l],
            [1422, k],
            [1698, i],
            [2032, g],
            [2432, f],
            [2780, f, 1.143]
          ],
          stretch: { bot: [9123, u], ext: [9122, u], top: [9121, u] }
        },
        92: {
          dir: d,
          HW: [
            [800, v],
            [1048, m],
            [1372, l],
            [1798, k],
            [1827, k, 1.016],
            [2356, i],
            [3086, g],
            [4043, f]
          ]
        },
        93: {
          dir: d,
          HW: [
            [836, v],
            [998, m],
            [1190, l],
            [1422, k],
            [1698, i],
            [2032, g],
            [2432, f],
            [2780, f, 1.143]
          ],
          stretch: { bot: [9126, u], ext: [9125, u], top: [9124, u] }
        },
        94: { alias: 770, dir: r },
        95: { alias: 818, dir: r },
        123: {
          dir: d,
          HW: [
            [820, v],
            [980, m],
            [1172, l],
            [1402, k],
            [1678, i],
            [2009, g],
            [2408, f],
            [2780, f, 1.155]
          ],
          stretch: {
            bot: [9129, u],
            ext: [57347, f],
            mid: [9128, u],
            top: [9127, u]
          }
        },
        124: {
          dir: d,
          HW: [
            [800, v],
            [960, m],
            [1152, l],
            [1382, k],
            [1658, i],
            [1990, g],
            [2388, f]
          ],
          stretch: { bot: [57348, f], ext: [57349, f], top: [57350, f] }
        },
        125: {
          dir: d,
          HW: [
            [820, v],
            [980, m],
            [1172, l],
            [1402, k],
            [1678, i],
            [2009, g],
            [2408, f],
            [2780, f, 1.155]
          ],
          stretch: {
            bot: [9133, u],
            ext: [57351, f],
            mid: [9132, u],
            top: [9131, u]
          }
        },
        126: { alias: 771, dir: r },
        175: { alias: 818, dir: r },
        710: { alias: 770, dir: r },
        713: { alias: 8722, dir: r },
        732: { alias: 771, dir: r },
        770: {
          dir: r,
          HW: [
            [342, v],
            [608, m],
            [727, l],
            [870, k],
            [1041, i],
            [1249, g],
            [1496, f]
          ]
        },
        771: {
          dir: r,
          HW: [
            [334, v],
            [601, m],
            [720, l],
            [863, k],
            [1037, i],
            [1241, g],
            [1491, f]
          ]
        },
        773: {
          dir: r,
          HW: [[333, n], [500, m]],
          stretch: { left: [57595, f], rep: [57596, f], right: [57597, f] }
        },
        774: t,
        780: {
          dir: r,
          HW: [
            [342, v],
            [608, m],
            [727, l],
            [870, k],
            [1041, i],
            [1249, g],
            [1496, f]
          ]
        },
        785: t,
        812: t,
        813: t,
        814: t,
        815: t,
        816: t,
        818: {
          dir: r,
          HW: [[333, n], [500, m]],
          stretch: { left: [57589, f], rep: [57590, f], right: [57591, f] }
        },
        819: t,
        831: t,
        8213: { alias: 8722, dir: r },
        8214: {
          dir: d,
          HW: [
            [800, v],
            [960, m],
            [1152, l],
            [1382, k],
            [1658, i],
            [1990, g],
            [2388, f]
          ],
          stretch: { bot: [57642, f], ext: [57643, f], top: [57644, f] }
        },
        8215: { alias: 8722, dir: r },
        8254: { alias: 8722, dir: r },
        8260: {
          dir: d,
          HW: [
            [800, v],
            [1048, m],
            [1372, l],
            [1798, k],
            [2356, i],
            [3086, g],
            [4043, f]
          ]
        },
        8400: t,
        8401: t,
        8406: t,
        8407: t,
        8417: t,
        8425: t,
        8428: t,
        8429: t,
        8430: t,
        8431: t,
        8512: { dir: d, HW: [[956, y], [1360, m]] },
        8592: {
          dir: r,
          HW: [[690, v], [1010, m]],
          stretch: { left: [57379, f], rep: [57380, f], right: [57381, f] }
        },
        8593: {
          dir: d,
          HW: [[690, v], [1010, m]],
          stretch: { bot: [57385, f], ext: [57386, f], top: [57387, f] }
        },
        8594: {
          dir: r,
          HW: [[690, v], [1010, m]],
          stretch: { left: [57382, f], rep: [57383, f], right: [57384, f] }
        },
        8595: {
          dir: d,
          HW: [[690, v], [1010, m]],
          stretch: { bot: [57388, f], ext: [57389, f], top: [57390, f] }
        },
        8596: {
          dir: r,
          HW: [[880, v], [1200, m]],
          stretch: { left: [57399, f], rep: [57400, f], right: [57401, f] }
        },
        8597: {
          dir: d,
          HW: [[880, v], [1200, m]],
          stretch: { bot: [57402, f], ext: [57403, f], top: [57404, f] }
        },
        8598: j,
        8599: j,
        8600: j,
        8601: j,
        8602: t,
        8603: t,
        8606: t,
        8607: j,
        8608: t,
        8609: j,
        8610: t,
        8611: t,
        8612: {
          dir: r,
          HW: [[690, w], [1010, m]],
          stretch: { left: [57427, f], rep: [57428, f], right: [57429, f] }
        },
        8613: j,
        8614: {
          dir: r,
          HW: [[690, v], [1010, m]],
          stretch: { left: [57430, f], rep: [57431, f], right: [57432, f] }
        },
        8615: j,
        8617: t,
        8618: t,
        8619: t,
        8620: t,
        8621: t,
        8622: t,
        8624: j,
        8625: j,
        8626: j,
        8627: j,
        8630: t,
        8631: t,
        8636: t,
        8637: t,
        8638: j,
        8639: j,
        8640: t,
        8641: t,
        8642: j,
        8643: j,
        8644: t,
        8645: j,
        8646: t,
        8647: t,
        8648: j,
        8649: t,
        8650: j,
        8651: t,
        8652: t,
        8653: t,
        8654: t,
        8655: t,
        8656: {
          dir: r,
          HW: [[690, v], [1010, m]],
          stretch: { left: [57511, f], rep: [57512, f], right: [57513, f] }
        },
        8657: {
          dir: d,
          HW: [[690, v], [1010, m]],
          stretch: { bot: [57517, f], ext: [57518, f], top: [57519, f] }
        },
        8658: {
          dir: r,
          HW: [[690, v], [1010, m]],
          stretch: { left: [57514, f], rep: [57515, f], right: [57516, f] }
        },
        8659: {
          dir: d,
          HW: [[690, v], [1010, m]],
          stretch: { bot: [57520, f], ext: [57521, f], top: [57522, f] }
        },
        8660: {
          dir: r,
          HW: [[880, v], [1200, m]],
          stretch: { left: [57523, f], rep: [57524, f], right: [57525, f] }
        },
        8661: {
          dir: d,
          HW: [[880, v], [1200, m]],
          stretch: { bot: [57526, f], ext: [57527, f], top: [57528, f] }
        },
        8662: j,
        8663: j,
        8664: j,
        8665: j,
        8666: t,
        8667: t,
        8668: t,
        8669: t,
        8678: t,
        8679: j,
        8680: t,
        8681: j,
        8691: j,
        8693: j,
        8694: t,
        8719: j,
        8720: j,
        8721: j,
        8722: { HW: [], stretch: { rep: [8722, v, 0, 0, 0, -0.224, -0.224] } },
        8725: { alias: 8260, dir: d },
        8730: {
          dir: d,
          HW: [
            [706, v],
            [1090, m],
            [1474, l],
            [1858, k],
            [2242, i],
            [2626, g],
            [3010, f]
          ],
          stretch: { bot: [9143, u], ext: [57651, f], top: [57652, f] }
        },
        8739: {
          dir: d,
          HW: [
            [800, v],
            [960, m],
            [1152, l],
            [1382, k],
            [1658, i],
            [1990, g],
            [2388, f]
          ],
          stretch: { bot: [57348, f], ext: [57349, f], top: [57350, f] }
        },
        8741: {
          dir: d,
          HW: [
            [800, v],
            [960, m],
            [1152, l],
            [1382, k],
            [1658, i],
            [1990, g],
            [2388, f]
          ],
          stretch: { bot: [57642, f], ext: [57643, f], top: [57644, f] }
        },
        8747: j,
        8748: j,
        8749: j,
        8750: j,
        8751: j,
        8752: j,
        8753: j,
        8754: j,
        8755: j,
        8801: t,
        8803: t,
        8866: j,
        8867: j,
        8868: j,
        8869: j,
        8896: j,
        8897: j,
        8898: j,
        8899: j,
        8968: {
          dir: d,
          HW: [
            [818, v],
            [979, m],
            [1171, l],
            [1402, k],
            [1678, i],
            [2011, g],
            [2410, f],
            [2780, f, 1.154]
          ],
          stretch: { ext: [9122, u], top: [9121, u] }
        },
        8969: {
          dir: d,
          HW: [
            [818, v],
            [979, m],
            [1171, l],
            [1402, k],
            [1678, i],
            [2011, g],
            [2410, f],
            [2780, f, 1.154]
          ],
          stretch: { ext: [9125, u], top: [9124, u] }
        },
        8970: {
          dir: d,
          HW: [
            [818, v],
            [979, m],
            [1171, l],
            [1402, k],
            [1678, i],
            [2011, g],
            [2410, f],
            [2780, f, 1.154]
          ],
          stretch: { bot: [9123, u], ext: [9122, u] }
        },
        8971: {
          dir: d,
          HW: [
            [818, v],
            [979, m],
            [1171, l],
            [1402, k],
            [1678, i],
            [2011, g],
            [2410, f],
            [2780, f, 1.154]
          ],
          stretch: { bot: [9126, u], ext: [9125, u] }
        },
        8978: { alias: 9180, dir: r },
        8994: { alias: 9180, dir: r },
        8995: { alias: 9181, dir: r },
        9001: {
          dir: d,
          HW: [
            [812, u],
            [1060, m],
            [1382, l],
            [1806, k],
            [2364, i],
            [3092, g],
            [4048, f]
          ]
        },
        9002: {
          dir: d,
          HW: [
            [812, u],
            [1060, m],
            [1382, l],
            [1806, k],
            [2364, i],
            [3092, g],
            [4048, f]
          ]
        },
        9130: { dir: d, HW: [[596, u]], stretch: { ext: [9130, u] } },
        9135: { alias: 8722, dir: r },
        9136: {
          dir: d,
          HW: [[607, u, null, 9127]],
          stretch: { top: [9127, u], ext: [9130, u], bot: [9133, u] }
        },
        9137: {
          dir: d,
          HW: [[607, u, null, 9131]],
          stretch: { top: [9131, u], ext: [9130, u], bot: [9129, u] }
        },
        9140: t,
        9141: t,
        9168: {
          dir: d,
          HW: [
            [800, v, null, 124],
            [1350, v, 1.688, 124],
            [1827, v, 2.283, 124],
            [2303, v, 2.879, 124],
            [2780, v, 3.474, 124]
          ],
          stretch: { ext: [124, v] }
        },
        9180: t,
        9181: t,
        9182: {
          dir: r,
          HW: [
            [520, v],
            [1018, m],
            [1519, l],
            [2019, k],
            [2519, i],
            [3019, g],
            [3519, f]
          ],
          stretch: {
            left: [57613, f],
            rep: [57614, f],
            mid: [57615, f],
            right: [57616, f]
          }
        },
        9183: {
          dir: r,
          HW: [
            [520, v],
            [1018, m],
            [1519, l],
            [2019, k],
            [2519, i],
            [3019, g],
            [3519, f]
          ],
          stretch: {
            left: [57617, f],
            rep: [57618, f],
            mid: [57619, f],
            right: [57620, f]
          }
        },
        9184: t,
        9185: t,
        9472: { alias: 8722, dir: r },
        10145: t,
        10214: j,
        10215: j,
        10216: {
          dir: d,
          HW: [
            [812, v],
            [1060, m],
            [1382, l],
            [1806, k],
            [1827, k, 1.012],
            [2364, i],
            [3092, g],
            [4048, f]
          ]
        },
        10217: {
          dir: d,
          HW: [
            [812, v],
            [1060, m],
            [1382, l],
            [1806, k],
            [1827, k, 1.012],
            [2364, i],
            [3092, g],
            [4048, f]
          ]
        },
        10218: j,
        10219: j,
        10222: {
          dir: d,
          HW: [
            [814, v],
            [974, m],
            [1166, l],
            [1396, k],
            [1672, i],
            [2004, g],
            [2402, f]
          ],
          stretch: { bot: [57601, f], ext: [57602, f], top: [57603, f] }
        },
        10223: {
          dir: d,
          HW: [
            [814, v],
            [974, m],
            [1166, l],
            [1396, k],
            [1672, i],
            [2004, g],
            [2402, f]
          ],
          stretch: { bot: [57604, f], ext: [57605, f], top: [57606, f] }
        },
        10229: { alias: 8592, dir: r },
        10230: { alias: 8594, dir: r },
        10231: { alias: 8596, dir: r },
        10232: { alias: 8656, dir: r },
        10233: { alias: 8658, dir: r },
        10234: { alias: 8660, dir: r },
        10235: { alias: 8612, dir: r },
        10236: { alias: 8614, dir: r },
        10237: { alias: 10502, dir: r },
        10238: { alias: 10503, dir: r },
        10502: {
          dir: r,
          HW: [[870, w], [1190, m]],
          stretch: { left: [57541, f], rep: [57542, f], right: [57543, f] }
        },
        10503: {
          dir: r,
          HW: [[870, w], [1190, m]],
          stretch: { left: [57544, f], rep: [57545, f], right: [57546, f] }
        },
        10752: j,
        10753: j,
        10754: j,
        10755: j,
        10756: j,
        10757: j,
        10758: j,
        10761: j,
        10764: j,
        10769: j,
        11012: t,
        11013: t,
        11014: j,
        11015: j,
        11020: t,
        11021: j,
        11057: t,
        12296: { alias: 10216, dir: d },
        12297: { alias: 10217, dir: d },
        65079: { alias: 9182, dir: r },
        65080: { alias: 9183, dir: r }
      }
    }
  });
  MathJax.Hub.Register.LoadHook(
    z.fontDir + "/Main/Regular/Main.js",
    function() {
      z.FONTDATA.FONTS[v][8722][0] = z.FONTDATA.FONTS[v][43][0];
      z.FONTDATA.FONTS[v][8722][1] = z.FONTDATA.FONTS[v][43][1];
    }
  );
  MathJax.Hub.Register.LoadHook(
    z.fontDir + "/Size1/Regular/Main.js",
    function() {
      var G;
      for (G = 8747; G <= 8749; G++) {
        z.FONTDATA.FONTS[m][G][2] -= 200;
      }
      for (G = 8750; G <= 8753; G++) {
        z.FONTDATA.FONTS[m][G][2] -= 150;
      }
    }
  );
  E.loadComplete(z.fontDir + "/fontdata.js");
})(MathJax.OutputJax.SVG, MathJax.ElementJax.mml, MathJax.Ajax, MathJax.Hub);
