/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/fonts/STIX/IntegralsUpSm/Bold/All.js
 *
 *  Copyright (c) 2009-2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.Hub.Insert(
  MathJax.OutputJax["HTML-CSS"].FONTDATA.FONTS["STIXIntegralsUpSm-bold"],
  {
    0x20: [0, 0, 250, 0, 0], // SPACE
    0xa0: [0, 0, 250, 0, 0], // NO-BREAK SPACE
    0x222b: [732, 193, 396, 52, 414], // INTEGRAL
    0x222c: [732, 193, 666, 52, 684], // DOUBLE INTEGRAL
    0x222d: [732, 193, 936, 52, 954], // TRIPLE INTEGRAL
    0x222e: [732, 193, 466, 52, 426], // CONTOUR INTEGRAL
    0x222f: [732, 193, 736, 52, 696], // SURFACE INTEGRAL
    0x2230: [732, 193, 998, 52, 965], // VOLUME INTEGRAL
    0x2231: [732, 193, 501, 52, 468], // CLOCKWISE INTEGRAL
    0x2232: [732, 193, 501, 52, 469], // CLOCKWISE CONTOUR INTEGRAL
    0x2233: [732, 193, 496, 52, 486], // ANTICLOCKWISE CONTOUR INTEGRAL
    0x2a0c: [732, 193, 1206, 52, 1224], // QUADRUPLE INTEGRAL OPERATOR
    0x2a0d: [732, 193, 450, 52, 420], // FINITE PART INTEGRAL
    0x2a0e: [732, 193, 450, 52, 420], // INTEGRAL WITH DOUBLE STROKE
    0x2a0f: [732, 193, 550, 40, 518], // INTEGRAL AVERAGE WITH SLASH
    0x2a10: [732, 193, 479, 52, 447], // CIRCULATION FUNCTION
    0x2a11: [732, 193, 511, 52, 478], // ANTICLOCKWISE INTEGRATION
    0x2a12: [732, 193, 489, 52, 449], // LINE INTEGRATION WITH RECTANGULAR PATH AROUND POLE
    0x2a13: [732, 193, 487, 52, 447], // LINE INTEGRATION WITH SEMICIRCULAR PATH AROUND POLE
    0x2a14: [732, 193, 572, 52, 534], // LINE INTEGRATION NOT INCLUDING THE POLE
    0x2a15: [732, 193, 520, 52, 480], // INTEGRAL AROUND A POINT OPERATOR
    0x2a16: [732, 193, 523, 52, 483], // QUATERNION INTEGRAL OPERATOR
    0x2a17: [732, 193, 600, 8, 646], // INTEGRAL WITH LEFTWARDS ARROW WITH HOOK
    0x2a18: [733, 192, 505, 31, 467], // INTEGRAL WITH TIMES SIGN
    0x2a19: [732, 193, 516, 52, 476], // INTEGRAL WITH INTERSECTION
    0x2a1a: [732, 193, 516, 52, 476], // INTEGRAL WITH UNION
    0x2a1b: [802, 193, 403, 40, 428], // INTEGRAL WITH OVERBAR
    0x2a1c: [732, 268, 411, 52, 440] // INTEGRAL WITH UNDERBAR
  }
);

MathJax.Ajax.loadComplete(
  MathJax.OutputJax["HTML-CSS"].fontDir + "/IntegralsUpSm/Bold/All.js"
);
