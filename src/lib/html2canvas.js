;!function(t) {
  if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = t();
  else if ("function" == typeof define && define.amd)
      define([], t);
  else {
      var e;
      "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self),
      e.html2canvas = t()
  }
}(function() {
  var t;
  return function e(t, n, o) {
      function r(a, s) {
          if (!n[a]) {
              if (!t[a]) {
                  var c = "function" == typeof require && require;
                  if (!s && c)
                      return c(a, !0);
                  if (i)
                      return i(a, !0);
                  var h = new Error("Cannot find module '" + a + "'");
                  throw h.code = "MODULE_NOT_FOUND",
                  h
              }
              var l = n[a] = {
                  exports: {}
              };
              t[a][0].call(l.exports, function(e) {
                  var n = t[a][1][e];
                  return r(n ? n : e)
              }, l, l.exports, e, t, n, o)
          }
          return n[a].exports
      }
      for (var i = "function" == typeof require && require, a = 0; a < o.length; a++)
          r(o[a]);
      return r
  }({
      1: [function(e, n, o) {
          (function(e) {
              !function(r) {
                  function i(t) {
                      throw RangeError(N[t])
                  }
                  function a(t, e) {
                      for (var n = t.length; n--; )
                          t[n] = e(t[n]);
                      return t
                  }
                  function s(t, e) {
                      return a(t.split(M), e).join(".")
                  }
                  function c(t) {
                      for (var e, n, o = [], r = 0, i = t.length; i > r; )
                          e = t.charCodeAt(r++),
                          e >= 55296 && 56319 >= e && i > r ? (n = t.charCodeAt(r++),
                          56320 == (64512 & n) ? o.push(((1023 & e) << 10) + (1023 & n) + 65536) : (o.push(e),
                          r--)) : o.push(e);
                      return o
                  }
                  function h(t) {
                      return a(t, function(t) {
                          var e = "";
                          return t > 65535 && (t -= 65536,
                          e += _(t >>> 10 & 1023 | 55296),
                          t = 56320 | 1023 & t),
                          e += _(t)
                      }).join("")
                  }
                  function l(t) {
                      return 10 > t - 48 ? t - 22 : 26 > t - 65 ? t - 65 : 26 > t - 97 ? t - 97 : T
                  }
                  function d(t, e) {
                      return t + 22 + 75 * (26 > t) - ((0 != e) << 5)
                  }
                  function u(t, e, n) {
                      var o = 0;
                      for (t = n ? D(t / I) : t >> 1,
                      t += D(t / e); t > B * C >> 1; o += T)
                          t = D(t / B);
                      return D(o + (B + 1) * t / (t + S))
                  }
                  function p(t) {
                      var e, n, o, r, a, s, c, d, p, f, g = [], m = t.length, y = 0, w = O, v = R;
                      for (n = t.lastIndexOf(A),
                      0 > n && (n = 0),
                      o = 0; n > o; ++o)
                          t.charCodeAt(o) >= 128 && i("not-basic"),
                          g.push(t.charCodeAt(o));
                      for (r = n > 0 ? n + 1 : 0; m > r; ) {
                          for (a = y,
                          s = 1,
                          c = T; r >= m && i("invalid-input"),
                          d = l(t.charCodeAt(r++)),
                          (d >= T || d > D((E - y) / s)) && i("overflow"),
                          y += d * s,
                          p = v >= c ? k : c >= v + C ? C : c - v,
                          !(p > d); c += T)
                              f = T - p,
                              s > D(E / f) && i("overflow"),
                              s *= f;
                          e = g.length + 1,
                          v = u(y - a, e, 0 == a),
                          D(y / e) > E - w && i("overflow"),
                          w += D(y / e),
                          y %= e,
                          g.splice(y++, 0, w)
                      }
                      return h(g)
                  }
                  function f(t) {
                      var e, n, o, r, a, s, h, l, p, f, g, m, y, w, v, b = [];
                      for (t = c(t),
                      m = t.length,
                      e = O,
                      n = 0,
                      a = R,
                      s = 0; m > s; ++s)
                          g = t[s],
                          128 > g && b.push(_(g));
                      for (o = r = b.length,
                      r && b.push(A); m > o; ) {
                          for (h = E,
                          s = 0; m > s; ++s)
                              g = t[s],
                              g >= e && h > g && (h = g);
                          for (y = o + 1,
                          h - e > D((E - n) / y) && i("overflow"),
                          n += (h - e) * y,
                          e = h,
                          s = 0; m > s; ++s)
                              if (g = t[s],
                              e > g && ++n > E && i("overflow"),
                              g == e) {
                                  for (l = n,
                                  p = T; f = a >= p ? k : p >= a + C ? C : p - a,
                                  !(f > l); p += T)
                                      v = l - f,
                                      w = T - f,
                                      b.push(_(d(f + v % w, 0))),
                                      l = D(v / w);
                                  b.push(_(d(l, 0))),
                                  a = u(n, y, o == r),
                                  n = 0,
                                  ++o
                              }
                          ++n,
                          ++e
                      }
                      return b.join("")
                  }
                  function g(t) {
                      return s(t, function(t) {
                          return P.test(t) ? p(t.slice(4).toLowerCase()) : t
                      })
                  }
                  function m(t) {
                      return s(t, function(t) {
                          return L.test(t) ? "xn--" + f(t) : t
                      })
                  }
                  var y = "object" == typeof o && o
                    , w = "object" == typeof n && n && n.exports == y && n
                    , v = "object" == typeof e && e;
                  (v.global === v || v.window === v) && (r = v);
                  var b, x, E = 2147483647, T = 36, k = 1, C = 26, S = 38, I = 700, R = 72, O = 128, A = "-", P = /^xn--/, L = /[^ -~]/, M = /\x2E|\u3002|\uFF0E|\uFF61/g, N = {
                      overflow: "Overflow: input needs wider integers to process",
                      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                      "invalid-input": "Invalid input"
                  }, B = T - k, D = Math.floor, _ = String.fromCharCode;
                  if (b = {
                      version: "1.2.4",
                      ucs2: {
                          decode: c,
                          encode: h
                      },
                      decode: p,
                      encode: f,
                      toASCII: m,
                      toUnicode: g
                  },
                  "function" == typeof t && "object" == typeof t.amd && t.amd)
                      t("punycode", function() {
                          return b
                      });
                  else if (y && !y.nodeType)
                      if (w)
                          w.exports = b;
                      else
                          for (x in b)
                              b.hasOwnProperty(x) && (y[x] = b[x]);
                  else
                      r.punycode = b
              }(this)
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {}],
      2: [function(t, e, n) {
          function o(t, e, n) {
              !t.defaultView || e === t.defaultView.pageXOffset && n === t.defaultView.pageYOffset || t.defaultView.scrollTo(e, n)
          }
          function r(t, e) {
              try {
                  e && (e.width = t.width,
                  e.height = t.height,
                  e.getContext("2d").putImageData(t.getContext("2d").getImageData(0, 0, t.width, t.height), 0, 0))
              } catch (n) {
                  s("Unable to copy canvas content from", t, n)
              }
          }
          function i(t, e) {
              for (var n = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), o = t.firstChild; o; )
                  (e === !0 || 1 !== o.nodeType || "SCRIPT" !== o.nodeName) && n.appendChild(i(o, e)),
                  o = o.nextSibling;
              return 1 === t.nodeType && (n._scrollTop = t.scrollTop,
              n._scrollLeft = t.scrollLeft,
              "CANVAS" === t.nodeName ? r(t, n) : ("TEXTAREA" === t.nodeName || "SELECT" === t.nodeName) && (n.value = t.value)),
              n
          }
          function a(t) {
              if (1 === t.nodeType) {
                  t.scrollTop = t._scrollTop,
                  t.scrollLeft = t._scrollLeft;
                  for (var e = t.firstChild; e; )
                      a(e),
                      e = e.nextSibling
              }
          }
          var s = t("./log");
          e.exports = function(t, e, n, r, s, c, h) {
              var l = i(t.documentElement, s.javascriptEnabled)
                , d = e.createElement("iframe");
              return d.className = "html2canvas-container",
              d.style.visibility = "hidden",
              d.style.position = "fixed",
              d.style.left = "-10000px",
              d.style.top = "0px",
              d.style.border = "0",
              d.width = n,
              d.height = r,
              d.scrolling = "no",
              e.body.appendChild(d),
              new Promise(function(e) {
                  var n = d.contentWindow.document;
                  d.contentWindow.onload = d.onload = function() {
                      var t = setInterval(function() {
                          n.body.childNodes.length > 0 && (a(n.documentElement),
                          clearInterval(t),
                          "view" === s.type && (d.contentWindow.scrollTo(c, h),
                          !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || d.contentWindow.scrollY === h && d.contentWindow.scrollX === c || (n.documentElement.style.top = -h + "px",
                          n.documentElement.style.left = -c + "px",
                          n.documentElement.style.position = "absolute")),
                          e(d))
                      }, 50)
                  }
                  ,
                  n.open(),
                  n.write("<!DOCTYPE html><html></html>"),
                  o(t, c, h),
                  n.replaceChild(n.adoptNode(l), n.documentElement),
                  n.close()
              }
              )
          }
      }
      , {
          "./log": 13
      }],
      3: [function(t, e, n) {
          function o(t) {
              this.r = 0,
              this.g = 0,
              this.b = 0,
              this.a = null;
              this.fromArray(t) || this.namedColor(t) || this.rgb(t) || this.rgba(t) || this.hex6(t) || this.hex3(t)
          }
          o.prototype.darken = function(t) {
              var e = 1 - t;
              return new o([Math.round(this.r * e), Math.round(this.g * e), Math.round(this.b * e), this.a])
          }
          ,
          o.prototype.isTransparent = function() {
              return 0 === this.a
          }
          ,
          o.prototype.isBlack = function() {
              return 0 === this.r && 0 === this.g && 0 === this.b
          }
          ,
          o.prototype.fromArray = function(t) {
              return Array.isArray(t) && (this.r = Math.min(t[0], 255),
              this.g = Math.min(t[1], 255),
              this.b = Math.min(t[2], 255),
              t.length > 3 && (this.a = t[3])),
              Array.isArray(t)
          }
          ;
          var r = /^#([a-f0-9]{3})$/i;
          o.prototype.hex3 = function(t) {
              var e = null;
              return null !== (e = t.match(r)) && (this.r = parseInt(e[1][0] + e[1][0], 16),
              this.g = parseInt(e[1][1] + e[1][1], 16),
              this.b = parseInt(e[1][2] + e[1][2], 16)),
              null !== e
          }
          ;
          var i = /^#([a-f0-9]{6})$/i;
          o.prototype.hex6 = function(t) {
              var e = null;
              return null !== (e = t.match(i)) && (this.r = parseInt(e[1].substring(0, 2), 16),
              this.g = parseInt(e[1].substring(2, 4), 16),
              this.b = parseInt(e[1].substring(4, 6), 16)),
              null !== e
          }
          ;
          var a = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
          o.prototype.rgb = function(t) {
              var e = null;
              return null !== (e = t.match(a)) && (this.r = Number(e[1]),
              this.g = Number(e[2]),
              this.b = Number(e[3])),
              null !== e
          }
          ;
          var s = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
          o.prototype.rgba = function(t) {
              var e = null;
              return null !== (e = t.match(s)) && (this.r = Number(e[1]),
              this.g = Number(e[2]),
              this.b = Number(e[3]),
              this.a = Number(e[4])),
              null !== e
          }
          ,
          o.prototype.toString = function() {
              return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")"
          }
          ,
          o.prototype.namedColor = function(t) {
              t = t.toLowerCase();
              var e = c[t];
              if (e)
                  this.r = e[0],
                  this.g = e[1],
                  this.b = e[2];
              else if ("transparent" === t)
                  return this.r = this.g = this.b = this.a = 0,
                  !0;
              return !!e
          }
          ,
          o.prototype.isColor = !0;
          var c = {
              aliceblue: [240, 248, 255],
              antiquewhite: [250, 235, 215],
              aqua: [0, 255, 255],
              aquamarine: [127, 255, 212],
              azure: [240, 255, 255],
              beige: [245, 245, 220],
              bisque: [255, 228, 196],
              black: [0, 0, 0],
              blanchedalmond: [255, 235, 205],
              blue: [0, 0, 255],
              blueviolet: [138, 43, 226],
              brown: [165, 42, 42],
              burlywood: [222, 184, 135],
              cadetblue: [95, 158, 160],
              chartreuse: [127, 255, 0],
              chocolate: [210, 105, 30],
              coral: [255, 127, 80],
              cornflowerblue: [100, 149, 237],
              cornsilk: [255, 248, 220],
              crimson: [220, 20, 60],
              cyan: [0, 255, 255],
              darkblue: [0, 0, 139],
              darkcyan: [0, 139, 139],
              darkgoldenrod: [184, 134, 11],
              darkgray: [169, 169, 169],
              darkgreen: [0, 100, 0],
              darkgrey: [169, 169, 169],
              darkkhaki: [189, 183, 107],
              darkmagenta: [139, 0, 139],
              darkolivegreen: [85, 107, 47],
              darkorange: [255, 140, 0],
              darkorchid: [153, 50, 204],
              darkred: [139, 0, 0],
              darksalmon: [233, 150, 122],
              darkseagreen: [143, 188, 143],
              darkslateblue: [72, 61, 139],
              darkslategray: [47, 79, 79],
              darkslategrey: [47, 79, 79],
              darkturquoise: [0, 206, 209],
              darkviolet: [148, 0, 211],
              deeppink: [255, 20, 147],
              deepskyblue: [0, 191, 255],
              dimgray: [105, 105, 105],
              dimgrey: [105, 105, 105],
              dodgerblue: [30, 144, 255],
              firebrick: [178, 34, 34],
              floralwhite: [255, 250, 240],
              forestgreen: [34, 139, 34],
              fuchsia: [255, 0, 255],
              gainsboro: [220, 220, 220],
              ghostwhite: [248, 248, 255],
              gold: [255, 215, 0],
              goldenrod: [218, 165, 32],
              gray: [128, 128, 128],
              green: [0, 128, 0],
              greenyellow: [173, 255, 47],
              grey: [128, 128, 128],
              honeydew: [240, 255, 240],
              hotpink: [255, 105, 180],
              indianred: [205, 92, 92],
              indigo: [75, 0, 130],
              ivory: [255, 255, 240],
              khaki: [240, 230, 140],
              lavender: [230, 230, 250],
              lavenderblush: [255, 240, 245],
              lawngreen: [124, 252, 0],
              lemonchiffon: [255, 250, 205],
              lightblue: [173, 216, 230],
              lightcoral: [240, 128, 128],
              lightcyan: [224, 255, 255],
              lightgoldenrodyellow: [250, 250, 210],
              lightgray: [211, 211, 211],
              lightgreen: [144, 238, 144],
              lightgrey: [211, 211, 211],
              lightpink: [255, 182, 193],
              lightsalmon: [255, 160, 122],
              lightseagreen: [32, 178, 170],
              lightskyblue: [135, 206, 250],
              lightslategray: [119, 136, 153],
              lightslategrey: [119, 136, 153],
              lightsteelblue: [176, 196, 222],
              lightyellow: [255, 255, 224],
              lime: [0, 255, 0],
              limegreen: [50, 205, 50],
              linen: [250, 240, 230],
              magenta: [255, 0, 255],
              maroon: [128, 0, 0],
              mediumaquamarine: [102, 205, 170],
              mediumblue: [0, 0, 205],
              mediumorchid: [186, 85, 211],
              mediumpurple: [147, 112, 219],
              mediumseagreen: [60, 179, 113],
              mediumslateblue: [123, 104, 238],
              mediumspringgreen: [0, 250, 154],
              mediumturquoise: [72, 209, 204],
              mediumvioletred: [199, 21, 133],
              midnightblue: [25, 25, 112],
              mintcream: [245, 255, 250],
              mistyrose: [255, 228, 225],
              moccasin: [255, 228, 181],
              navajowhite: [255, 222, 173],
              navy: [0, 0, 128],
              oldlace: [253, 245, 230],
              olive: [128, 128, 0],
              olivedrab: [107, 142, 35],
              orange: [255, 165, 0],
              orangered: [255, 69, 0],
              orchid: [218, 112, 214],
              palegoldenrod: [238, 232, 170],
              palegreen: [152, 251, 152],
              paleturquoise: [175, 238, 238],
              palevioletred: [219, 112, 147],
              papayawhip: [255, 239, 213],
              peachpuff: [255, 218, 185],
              peru: [205, 133, 63],
              pink: [255, 192, 203],
              plum: [221, 160, 221],
              powderblue: [176, 224, 230],
              purple: [128, 0, 128],
              rebeccapurple: [102, 51, 153],
              red: [255, 0, 0],
              rosybrown: [188, 143, 143],
              royalblue: [65, 105, 225],
              saddlebrown: [139, 69, 19],
              salmon: [250, 128, 114],
              sandybrown: [244, 164, 96],
              seagreen: [46, 139, 87],
              seashell: [255, 245, 238],
              sienna: [160, 82, 45],
              silver: [192, 192, 192],
              skyblue: [135, 206, 235],
              slateblue: [106, 90, 205],
              slategray: [112, 128, 144],
              slategrey: [112, 128, 144],
              snow: [255, 250, 250],
              springgreen: [0, 255, 127],
              steelblue: [70, 130, 180],
              tan: [210, 180, 140],
              teal: [0, 128, 128],
              thistle: [216, 191, 216],
              tomato: [255, 99, 71],
              turquoise: [64, 224, 208],
              violet: [238, 130, 238],
              wheat: [245, 222, 179],
              white: [255, 255, 255],
              whitesmoke: [245, 245, 245],
              yellow: [255, 255, 0],
              yellowgreen: [154, 205, 50]
          };
          e.exports = o
      }
      , {}],
      4: [function(e, n, o) {
          function r(t, e) {
              var n = T++;
              if (e = e || {},
              e.logging && (y.options.logging = !0,
              y.options.start = Date.now()),
              e.async = "undefined" == typeof e.async ? !0 : e.async,
              e.allowTaint = "undefined" == typeof e.allowTaint ? !1 : e.allowTaint,
              e.removeContainer = "undefined" == typeof e.removeContainer ? !0 : e.removeContainer,
              e.javascriptEnabled = "undefined" == typeof e.javascriptEnabled ? !1 : e.javascriptEnabled,
              e.imageTimeout = "undefined" == typeof e.imageTimeout ? 1e4 : e.imageTimeout,
              e.renderer = "function" == typeof e.renderer ? e.renderer : p,
              e.strict = !!e.strict,
              "string" == typeof t) {
                  if ("string" != typeof e.proxy)
                      return Promise.reject("Proxy must be used when rendering url");
                  var o = null != e.width ? e.width : window.innerWidth
                    , r = null != e.height ? e.height : window.innerHeight;
                  return b(d(t), e.proxy, document, o, r, e).then(function(t) {
                      return a(t.contentWindow.document.documentElement, t, e, o, r)
                  })
              }
              var s = (void 0 === t ? [document.documentElement] : t.length ? t : [t])[0];
              return s.setAttribute(E + n, n),
              i(s.ownerDocument, e, s.ownerDocument.defaultView.innerWidth, s.ownerDocument.defaultView.innerHeight, n).then(function(t) {
                  return "function" == typeof e.onrendered && (y("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"),
                  e.onrendered(t)),
                  t
              })
          }
          function i(t, e, n, o, r) {
              return v(t, t, n, o, e, t.defaultView.pageXOffset, t.defaultView.pageYOffset).then(function(i) {
                  y("Document cloned");
                  var s = E + r
                    , c = "[" + s + "='" + r + "']";
                  t.querySelector(c).removeAttribute(s);
                  var h = i.contentWindow
                    , l = h.document.querySelector(c)
                    , d = Promise.resolve("function" == typeof e.onclone ? e.onclone(h.document) : !0);
                  return d.then(function() {
                      return a(l, i, e, n, o)
                  })
              })
          }
          function a(t, e, n, o, r) {
              var i = e.contentWindow
                , a = new u(i.document)
                , d = new f(n,a)
                , p = x(t)
                , m = "view" === n.type ? o : h(i.document)
                , w = "view" === n.type ? r : l(i.document)
                , v = new n.renderer(m,w,d,n,document)
                , b = new g(t,v,a,d,n);
              return b.ready.then(function() {
                  y("Finished rendering");
                  var o;
                  return o = "view" === n.type ? c(v.canvas, {
                      width: v.canvas.width,
                      height: v.canvas.height,
                      top: 0,
                      left: 0,
                      x: 0,
                      y: 0
                  }) : t === i.document.body || t === i.document.documentElement || null != n.canvas ? v.canvas : c(v.canvas, {
                      width: null != n.width ? n.width : p.width,
                      height: null != n.height ? n.height : p.height,
                      top: p.top,
                      left: p.left,
                      x: 0,
                      y: 0
                  }),
                  s(e, n),
                  o
              })
          }
          function s(t, e) {
              e.removeContainer && (t.parentNode.removeChild(t),
              y("Cleaned up container"))
          }
          function c(t, e) {
              var n = document.createElement("canvas")
                , o = Math.min(t.width - 1, Math.max(0, e.left))
                , r = Math.min(t.width, Math.max(1, e.left + e.width))
                , i = Math.min(t.height - 1, Math.max(0, e.top))
                , a = Math.min(t.height, Math.max(1, e.top + e.height));
              n.width = e.width,
              n.height = e.height;
              var s = r - o
                , c = a - i;
              return y("Cropping canvas at:", "left:", e.left, "top:", e.top, "width:", s, "height:", c),
              y("Resulting crop with width", e.width, "and height", e.height, "with x", o, "and y", i),
              n.getContext("2d").drawImage(t, o, i, s, c, e.x, e.y, s, c),
              n
          }
          function h(t) {
              return Math.max(Math.max(t.body.scrollWidth, t.documentElement.scrollWidth), Math.max(t.body.offsetWidth, t.documentElement.offsetWidth), Math.max(t.body.clientWidth, t.documentElement.clientWidth))
          }
          function l(t) {
              return Math.max(Math.max(t.body.scrollHeight, t.documentElement.scrollHeight), Math.max(t.body.offsetHeight, t.documentElement.offsetHeight), Math.max(t.body.clientHeight, t.documentElement.clientHeight))
          }
          function d(t) {
              var e = document.createElement("a");
              return e.href = t,
              e.href = e.href,
              e
          }
          var u = e("./support")
            , p = e("./renderers/canvas")
            , f = e("./imageloader")
            , g = e("./nodeparser")
            , m = e("./nodecontainer")
            , y = e("./log")
            , w = e("./utils")
            , v = e("./clone")
            , b = e("./proxy").loadUrlDocument
            , x = w.getBounds
            , E = "data-html2canvas-node"
            , T = 0;
          r.CanvasRenderer = p,
          r.NodeContainer = m,
          r.log = y,
          r.utils = w;
          var k = "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext ? function() {
              return Promise.reject("No canvas support")
          }
          : r;
          n.exports = k,
          "function" == typeof t && t.amd && t("html2canvas", [], function() {
              return k
          })
      }
      , {
          "./clone": 2,
          "./imageloader": 11,
          "./log": 13,
          "./nodecontainer": 14,
          "./nodeparser": 15,
          "./proxy": 16,
          "./renderers/canvas": 20,
          "./support": 22,
          "./utils": 26
      }],
      5: [function(t, e, n) {
          function o(t) {
              if (this.src = t,
              r("DummyImageContainer for", t),
              !this.promise || !this.image) {
                  r("Initiating DummyImageContainer"),
                  o.prototype.image = new Image;
                  var e = this.image;
                  o.prototype.promise = new Promise(function(t, n) {
                      e.onload = t,
                      e.onerror = n,
                      e.src = i(),
                      e.complete === !0 && t(e)
                  }
                  )
              }
          }
          var r = t("./log")
            , i = t("./utils").smallImage;
          e.exports = o
      }
      , {
          "./log": 13,
          "./utils": 26
      }],
      6: [function(t, e, n) {
          function o(t, e) {
              var n, o, i = document.createElement("div"), a = document.createElement("img"), s = document.createElement("span"), c = "Hidden Text";
              i.style.visibility = "hidden",
              i.style.fontFamily = t,
              i.style.fontSize = e,
              i.style.margin = 0,
              i.style.padding = 0,
              document.body.appendChild(i),
              a.src = r(),
              a.width = 1,
              a.height = 1,
              a.style.margin = 0,
              a.style.padding = 0,
              a.style.verticalAlign = "baseline",
              s.style.fontFamily = t,
              s.style.fontSize = e,
              s.style.margin = 0,
              s.style.padding = 0,
              s.appendChild(document.createTextNode(c)),
              i.appendChild(s),
              i.appendChild(a),
              n = a.offsetTop - s.offsetTop + 1,
              i.removeChild(s),
              i.appendChild(document.createTextNode(c)),
              i.style.lineHeight = "normal",
              a.style.verticalAlign = "super",
              o = a.offsetTop - i.offsetTop + 1,
              document.body.removeChild(i),
              this.baseline = n,
              this.lineWidth = 1,
              this.middle = o
          }
          var r = t("./utils").smallImage;
          e.exports = o
      }
      , {
          "./utils": 26
      }],
      7: [function(t, e, n) {
          function o() {
              this.data = {}
          }
          var r = t("./font");
          o.prototype.getMetrics = function(t, e) {
              return void 0 === this.data[t + "-" + e] && (this.data[t + "-" + e] = new r(t,e)),
              this.data[t + "-" + e]
          }
          ,
          e.exports = o
      }
      , {
          "./font": 6
      }],
      8: [function(t, e, n) {
          function o(e, n, o) {
              this.image = null,
              this.src = e;
              var r = this
                , a = i(e);
              this.promise = (n ? new Promise(function(t) {
                  "about:blank" === e.contentWindow.document.URL || null == e.contentWindow.document.documentElement ? e.contentWindow.onload = e.onload = function() {
                      t(e)
                  }
                  : t(e)
              }
              ) : this.proxyLoad(o.proxy, a, o)).then(function(e) {
                  var n = t("./core");
                  return n(e.contentWindow.document.documentElement, {
                      type: "view",
                      width: e.width,
                      height: e.height,
                      proxy: o.proxy,
                      javascriptEnabled: o.javascriptEnabled,
                      removeContainer: o.removeContainer,
                      allowTaint: o.allowTaint,
                      imageTimeout: o.imageTimeout / 2
                  })
              }).then(function(t) {
                  return r.image = t
              })
          }
          var r = t("./utils")
            , i = r.getBounds
            , a = t("./proxy").loadUrlDocument;
          o.prototype.proxyLoad = function(t, e, n) {
              var o = this.src;
              return a(o.src, t, o.ownerDocument, e.width, e.height, n)
          }
          ,
          e.exports = o
      }
      , {
          "./core": 4,
          "./proxy": 16,
          "./utils": 26
      }],
      9: [function(t, e, n) {
          function o(t) {
              this.src = t.value,
              this.colorStops = [],
              this.type = null,
              this.x0 = .5,
              this.y0 = .5,
              this.x1 = .5,
              this.y1 = .5,
              this.promise = Promise.resolve(!0)
          }
          o.TYPES = {
              LINEAR: 1,
              RADIAL: 2
          },
          o.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i,
          e.exports = o
      }
      , {}],
      10: [function(t, e, n) {
          function o(t, e) {
              this.src = t,
              this.image = new Image;
              var n = this;
              this.tainted = null,
              this.promise = new Promise(function(o, r) {
                  n.image.onload = o,
                  n.image.onerror = r,
                  e && (n.image.crossOrigin = "anonymous"),
                  n.image.src = t,
                  n.image.complete === !0 && o(n.image)
              }
              )
          }
          e.exports = o
      }
      , {}],
      11: [function(t, e, n) {
          function o(t, e) {
              this.link = null,
              this.options = t,
              this.support = e,
              this.origin = this.getOrigin(window.location.href)
          }
          var r = t("./log")
            , i = t("./imagecontainer")
            , a = t("./dummyimagecontainer")
            , s = t("./proxyimagecontainer")
            , c = t("./framecontainer")
            , h = t("./svgcontainer")
            , l = t("./svgnodecontainer")
            , d = t("./lineargradientcontainer")
            , u = t("./webkitgradientcontainer")
            , p = t("./utils").bind;
          o.prototype.findImages = function(t) {
              var e = [];
              return t.reduce(function(t, e) {
                  switch (e.node.nodeName) {
                  case "IMG":
                      return t.concat([{
                          args: [e.node.src],
                          method: "url"
                      }]);
                  case "svg":
                  case "IFRAME":
                      return t.concat([{
                          args: [e.node],
                          method: e.node.nodeName
                      }])
                  }
                  return t
              }, []).forEach(this.addImage(e, this.loadImage), this),
              e
          }
          ,
          o.prototype.findBackgroundImage = function(t, e) {
              return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t, this.loadImage), this),
              t
          }
          ,
          o.prototype.addImage = function(t, e) {
              return function(n) {
                  n.args.forEach(function(o) {
                      this.imageExists(t, o) || (t.splice(0, 0, e.call(this, n)),
                      r("Added image #" + t.length, "string" == typeof o ? o.substring(0, 100) : o))
                  }, this)
              }
          }
          ,
          o.prototype.hasImageBackground = function(t) {
              return "none" !== t.method
          }
          ,
          o.prototype.loadImage = function(t) {
              if ("url" === t.method) {
                  var e = t.args[0];
                  return !this.isSVG(e) || this.support.svg || this.options.allowTaint ? e.match(/data:image\/.*;base64,/i) ? new i(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""),!1) : this.isSameOrigin(e) || this.options.allowTaint === !0 || this.isSVG(e) ? new i(e,!1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new i(e,!0) : this.options.proxy ? new s(e,this.options.proxy) : new a(e) : new h(e)
              }
              return "linear-gradient" === t.method ? new d(t) : "gradient" === t.method ? new u(t) : "svg" === t.method ? new l(t.args[0],this.support.svg) : "IFRAME" === t.method ? new c(t.args[0],this.isSameOrigin(t.args[0].src),this.options) : new a(t)
          }
          ,
          o.prototype.isSVG = function(t) {
              return "svg" === t.substring(t.length - 3).toLowerCase() || h.prototype.isInline(t)
          }
          ,
          o.prototype.imageExists = function(t, e) {
              return t.some(function(t) {
                  return t.src === e
              })
          }
          ,
          o.prototype.isSameOrigin = function(t) {
              return this.getOrigin(t) === this.origin
          }
          ,
          o.prototype.getOrigin = function(t) {
              var e = this.link || (this.link = document.createElement("a"));
              return e.href = t,
              e.href = e.href,
              e.protocol + e.hostname + e.port
          }
          ,
          o.prototype.getPromise = function(t) {
              return this.timeout(t, this.options.imageTimeout)["catch"](function() {
                  var e = new a(t.src);
                  return e.promise.then(function(e) {
                      t.image = e
                  })
              })
          }
          ,
          o.prototype.get = function(t) {
              var e = null;
              return this.images.some(function(n) {
                  return (e = n).src === t
              }) ? e : null
          }
          ,
          o.prototype.fetch = function(t) {
              return this.images = t.reduce(p(this.findBackgroundImage, this), this.findImages(t)),
              this.images.forEach(function(t, e) {
                  t.promise.then(function() {
                      r("Succesfully loaded image #" + (e + 1), t)
                  }, function(n) {
                      r("Failed loading image #" + (e + 1), t, n)
                  })
              }),
              this.ready = Promise.all(this.images.map(this.getPromise, this)),
              r("Finished searching images"),
              this
          }
          ,
          o.prototype.timeout = function(t, e) {
              var n, o = Promise.race([t.promise, new Promise(function(o, i) {
                  n = setTimeout(function() {
                      r("Timed out loading image", t),
                      i(t)
                  }, e)
              }
              )]).then(function(t) {
                  return clearTimeout(n),
                  t
              });
              return o["catch"](function() {
                  clearTimeout(n)
              }),
              o
          }
          ,
          e.exports = o
      }
      , {
          "./dummyimagecontainer": 5,
          "./framecontainer": 8,
          "./imagecontainer": 10,
          "./lineargradientcontainer": 12,
          "./log": 13,
          "./proxyimagecontainer": 17,
          "./svgcontainer": 23,
          "./svgnodecontainer": 24,
          "./utils": 26,
          "./webkitgradientcontainer": 27
      }],
      12: [function(t, e, n) {
          function o(t) {
              r.apply(this, arguments),
              this.type = r.TYPES.LINEAR;
              var e = o.REGEXP_DIRECTION.test(t.args[0]) || !r.REGEXP_COLORSTOP.test(t.args[0]);
              e ? t.args[0].split(/\s+/).reverse().forEach(function(t, e) {
                  switch (t) {
                  case "left":
                      this.x0 = 0,
                      this.x1 = 1;
                      break;
                  case "top":
                      this.y0 = 0,
                      this.y1 = 1;
                      break;
                  case "right":
                      this.x0 = 1,
                      this.x1 = 0;
                      break;
                  case "bottom":
                      this.y0 = 1,
                      this.y1 = 0;
                      break;
                  case "to":
                      var n = this.y0
                        , o = this.x0;
                      this.y0 = this.y1,
                      this.x0 = this.x1,
                      this.x1 = o,
                      this.y1 = n;
                      break;
                  case "center":
                      break;
                  default:
                      var r = .01 * parseFloat(t, 10);
                      if (isNaN(r))
                          break;
                      0 === e ? (this.y0 = r,
                      this.y1 = 1 - this.y0) : (this.x0 = r,
                      this.x1 = 1 - this.x0)
                  }
              }, this) : (this.y0 = 0,
              this.y1 = 1),
              this.colorStops = t.args.slice(e ? 1 : 0).map(function(t) {
                  var e = t.match(r.REGEXP_COLORSTOP)
                    , n = +e[2]
                    , o = 0 === n ? "%" : e[3];
                  return {
                      color: new i(e[1]),
                      stop: "%" === o ? n / 100 : null
                  }
              }),
              null === this.colorStops[0].stop && (this.colorStops[0].stop = 0),
              null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1),
              this.colorStops.forEach(function(t, e) {
                  null === t.stop && this.colorStops.slice(e).some(function(n, o) {
                      return null !== n.stop ? (t.stop = (n.stop - this.colorStops[e - 1].stop) / (o + 1) + this.colorStops[e - 1].stop,
                      !0) : !1
                  }, this)
              }, this)
          }
          var r = t("./gradientcontainer")
            , i = t("./color");
          o.prototype = Object.create(r.prototype),
          o.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i,
          e.exports = o
      }
      , {
          "./color": 3,
          "./gradientcontainer": 9
      }],
      13: [function(t, e, n) {
          var o = function() {
              o.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - o.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
          };
          o.options = {
              logging: !1
          },
          e.exports = o
      }
      , {}],
      14: [function(t, e, n) {
          function o(t, e) {
              this.node = t,
              this.parent = e,
              this.stack = null,
              this.bounds = null,
              this.borders = null,
              this.clip = [],
              this.backgroundClip = [],
              this.offsetBounds = null,
              this.visible = null,
              this.computedStyles = null,
              this.colors = {},
              this.styles = {},
              this.backgroundImages = null,
              this.transformData = null,
              this.transformMatrix = null,
              this.isPseudoElement = !1,
              this.opacity = null
          }
          function r(t) {
              var e = t.options[t.selectedIndex || 0];
              return e ? e.text || "" : ""
          }
          function i(t) {
              if (t && "matrix" === t[1])
                  return t[2].split(",").map(function(t) {
                      return parseFloat(t.trim())
                  });
              if (t && "matrix3d" === t[1]) {
                  var e = t[2].split(",").map(function(t) {
                      return parseFloat(t.trim())
                  });
                  return [e[0], e[1], e[4], e[5], e[12], e[13]]
              }
          }
          function a(t) {
              return -1 !== t.toString().indexOf("%")
          }
          function s(t) {
              return t.replace("px", "")
          }
          function c(t) {
              return parseFloat(t)
          }
          var h = t("./color")
            , l = t("./utils")
            , d = l.getBounds
            , u = l.parseBackgrounds
            , p = l.offsetBounds;
          o.prototype.cloneTo = function(t) {
              t.visible = this.visible,
              t.borders = this.borders,
              t.bounds = this.bounds,
              t.clip = this.clip,
              t.backgroundClip = this.backgroundClip,
              t.computedStyles = this.computedStyles,
              t.styles = this.styles,
              t.backgroundImages = this.backgroundImages,
              t.opacity = this.opacity
          }
          ,
          o.prototype.getOpacity = function() {
              return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity
          }
          ,
          o.prototype.assignStack = function(t) {
              this.stack = t,
              t.children.push(this)
          }
          ,
          o.prototype.isElementVisible = function() {
              return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"))
          }
          ,
          o.prototype.css = function(t) {
              return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)),
              this.styles[t] || (this.styles[t] = this.computedStyles[t])
          }
          ,
          o.prototype.prefixedCss = function(t) {
              var e = ["webkit", "moz", "ms", "o"]
                , n = this.css(t);
              return void 0 === n && e.some(function(e) {
                  return n = this.css(e + t.substr(0, 1).toUpperCase() + t.substr(1)),
                  void 0 !== n
              }, this),
              void 0 === n ? null : n
          }
          ,
          o.prototype.computedStyle = function(t) {
              return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t)
          }
          ,
          o.prototype.cssInt = function(t) {
              var e = parseInt(this.css(t), 10);
              return isNaN(e) ? 0 : e
          }
          ,
          o.prototype.color = function(t) {
              return this.colors[t] || (this.colors[t] = new h(this.css(t)))
          }
          ,
          o.prototype.cssFloat = function(t) {
              var e = parseFloat(this.css(t));
              return isNaN(e) ? 0 : e
          }
          ,
          o.prototype.fontWeight = function() {
              var t = this.css("fontWeight");
              switch (parseInt(t, 10)) {
              case 401:
                  t = "bold";
                  break;
              case 400:
                  t = "normal"
              }
              return t
          }
          ,
          o.prototype.parseClip = function() {
              var t = this.css("clip").match(this.CLIP);
              return t ? {
                  top: parseInt(t[1], 10),
                  right: parseInt(t[2], 10),
                  bottom: parseInt(t[3], 10),
                  left: parseInt(t[4], 10)
              } : null
          }
          ,
          o.prototype.parseBackgroundImages = function() {
              return this.backgroundImages || (this.backgroundImages = u(this.css("backgroundImage")))
          }
          ,
          o.prototype.cssList = function(t, e) {
              var n = (this.css(t) || "").split(",");
              return n = n[e || 0] || n[0] || "auto",
              n = n.trim().split(" "),
              1 === n.length && (n = [n[0], a(n[0]) ? "auto" : n[0]]),
              n
          }
          ,
          o.prototype.parseBackgroundSize = function(t, e, n) {
              var o, r, i = this.cssList("backgroundSize", n);
              if (a(i[0]))
                  o = t.width * parseFloat(i[0]) / 100;
              else {
                  if (/contain|cover/.test(i[0])) {
                      var s = t.width / t.height
                        , c = e.width / e.height;
                      return c > s ^ "contain" === i[0] ? {
                          width: t.height * c,
                          height: t.height
                      } : {
                          width: t.width,
                          height: t.width / c
                      }
                  }
                  o = parseInt(i[0], 10)
              }
              return r = "auto" === i[0] && "auto" === i[1] ? e.height : "auto" === i[1] ? o / e.width * e.height : a(i[1]) ? t.height * parseFloat(i[1]) / 100 : parseInt(i[1], 10),
              "auto" === i[0] && (o = r / e.height * e.width),
              {
                  width: o,
                  height: r
              }
          }
          ,
          o.prototype.parseBackgroundPosition = function(t, e, n, o) {
              var r, i, s = this.cssList("backgroundPosition", n);
              return r = a(s[0]) ? (t.width - (o || e).width) * (parseFloat(s[0]) / 100) : parseInt(s[0], 10),
              i = "auto" === s[1] ? r / e.width * e.height : a(s[1]) ? (t.height - (o || e).height) * parseFloat(s[1]) / 100 : parseInt(s[1], 10),
              "auto" === s[0] && (r = i / e.height * e.width),
              {
                  left: r,
                  top: i
              }
          }
          ,
          o.prototype.parseBackgroundRepeat = function(t) {
              return this.cssList("backgroundRepeat", t)[0]
          }
          ,
          o.prototype.parseTextShadows = function() {
              var t = this.css("textShadow")
                , e = [];
              if (t && "none" !== t)
                  for (var n = t.match(this.TEXT_SHADOW_PROPERTY), o = 0; n && o < n.length; o++) {
                      var r = n[o].match(this.TEXT_SHADOW_VALUES);
                      e.push({
                          color: new h(r[0]),
                          offsetX: r[1] ? parseFloat(r[1].replace("px", "")) : 0,
                          offsetY: r[2] ? parseFloat(r[2].replace("px", "")) : 0,
                          blur: r[3] ? r[3].replace("px", "") : 0
                      })
                  }
              return e
          }
          ,
          o.prototype.parseTransform = function() {
              if (!this.transformData)
                  if (this.hasTransform()) {
                      var t = this.parseBounds()
                        , e = this.prefixedCss("transformOrigin").split(" ").map(s).map(c);
                      e[0] += t.left,
                      e[1] += t.top,
                      this.transformData = {
                          origin: e,
                          matrix: this.parseTransformMatrix()
                      }
                  } else
                      this.transformData = {
                          origin: [0, 0],
                          matrix: [1, 0, 0, 1, 0, 0]
                      };
              return this.transformData
          }
          ,
          o.prototype.parseTransformMatrix = function() {
              if (!this.transformMatrix) {
                  var t = this.prefixedCss("transform")
                    , e = t ? i(t.match(this.MATRIX_PROPERTY)) : null;
                  this.transformMatrix = e ? e : [1, 0, 0, 1, 0, 0]
              }
              return this.transformMatrix
          }
          ,
          o.prototype.parseBounds = function() {
              return this.bounds || (this.bounds = this.hasTransform() ? p(this.node) : d(this.node))
          }
          ,
          o.prototype.hasTransform = function() {
              return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform()
          }
          ,
          o.prototype.getValue = function() {
              var t = this.node.value || "";
              return "SELECT" === this.node.tagName ? t = r(this.node) : "password" === this.node.type && (t = Array(t.length + 1).join("•")),
              0 === t.length ? this.node.placeholder || "" : t
          }
          ,
          o.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/,
          o.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,
          o.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,
          o.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/,
          e.exports = o
      }
      , {
          "./color": 3,
          "./utils": 26
      }],
      15: [function(t, e, n) {
          function o(t, e, n, o, r) {
              H("Starting NodeParser"),
              this.renderer = e,
              this.options = r,
              this.range = null,
              this.support = n,
              this.renderQueue = [],
              this.stack = new G(!0,1,t.ownerDocument,null);
              var i = new j(t,null);
              if (r.background && e.rectangle(0, 0, e.width, e.height, new q(r.background)),
              t === t.ownerDocument.documentElement) {
                  var a = new j(i.color("backgroundColor").isTransparent() ? t.ownerDocument.body : t.ownerDocument.documentElement,null);
                  e.rectangle(0, 0, e.width, e.height, a.color("backgroundColor"))
              }
              i.visibile = i.isElementVisible(),
              this.createPseudoHideStyles(t.ownerDocument),
              this.disableAnimations(t.ownerDocument),
              this.nodes = B([i].concat(this.getChildren(i)).filter(function(t) {
                  return t.visible = t.isElementVisible()
              }).map(this.getPseudoElements, this)),
              this.fontMetrics = new X,
              H("Fetched nodes, total:", this.nodes.length),
              H("Calculate overflow clips"),
              this.calculateOverflowClips(),
              H("Start fetching images"),
              this.images = o.fetch(this.nodes.filter(I)),
              this.ready = this.images.ready.then(Q(function() {
                  return H("Images loaded, starting parsing"),
                  H("Creating stacking contexts"),
                  this.createStackingContexts(),
                  H("Sorting stacking contexts"),
                  this.sortStackingContexts(this.stack),
                  this.parse(this.stack),
                  H("Render queue created with " + this.renderQueue.length + " items"),
                  new Promise(Q(function(t) {
                      r.async ? "function" == typeof r.async ? r.async.call(this, this.renderQueue, t) : this.renderQueue.length > 0 ? (this.renderIndex = 0,
                      this.asyncRenderer(this.renderQueue, t)) : t() : (this.renderQueue.forEach(this.paint, this),
                      t())
                  }, this))
              }, this))
          }
          function r(t) {
              return t.parent && t.parent.clip.length
          }
          function i(t) {
              return t.replace(/(\-[a-z])/g, function(t) {
                  return t.toUpperCase().replace("-", "")
              })
          }
          function a() {}
          function s(t, e, n, o) {
              return t.map(function(r, i) {
                  if (r.width > 0) {
                      var a = e.left
                        , s = e.top
                        , c = e.width
                        , h = e.height - t[2].width;
                      switch (i) {
                      case 0:
                          h = t[0].width,
                          r.args = d({
                              c1: [a, s],
                              c2: [a + c, s],
                              c3: [a + c - t[1].width, s + h],
                              c4: [a + t[3].width, s + h]
                          }, o[0], o[1], n.topLeftOuter, n.topLeftInner, n.topRightOuter, n.topRightInner);
                          break;
                      case 1:
                          a = e.left + e.width - t[1].width,
                          c = t[1].width,
                          r.args = d({
                              c1: [a + c, s],
                              c2: [a + c, s + h + t[2].width],
                              c3: [a, s + h],
                              c4: [a, s + t[0].width]
                          }, o[1], o[2], n.topRightOuter, n.topRightInner, n.bottomRightOuter, n.bottomRightInner);
                          break;
                      case 2:
                          s = s + e.height - t[2].width,
                          h = t[2].width,
                          r.args = d({
                              c1: [a + c, s + h],
                              c2: [a, s + h],
                              c3: [a + t[3].width, s],
                              c4: [a + c - t[3].width, s]
                          }, o[2], o[3], n.bottomRightOuter, n.bottomRightInner, n.bottomLeftOuter, n.bottomLeftInner);
                          break;
                      case 3:
                          c = t[3].width,
                          r.args = d({
                              c1: [a, s + h + t[2].width],
                              c2: [a, s],
                              c3: [a + c, s + t[0].width],
                              c4: [a + c, s + h]
                          }, o[3], o[0], n.bottomLeftOuter, n.bottomLeftInner, n.topLeftOuter, n.topLeftInner)
                      }
                  }
                  return r
              })
          }
          function c(t, e, n, o) {
              var r = 4 * ((Math.sqrt(2) - 1) / 3)
                , i = n * r
                , a = o * r
                , s = t + n
                , c = e + o;
              return {
                  topLeft: l({
                      x: t,
                      y: c
                  }, {
                      x: t,
                      y: c - a
                  }, {
                      x: s - i,
                      y: e
                  }, {
                      x: s,
                      y: e
                  }),
                  topRight: l({
                      x: t,
                      y: e
                  }, {
                      x: t + i,
                      y: e
                  }, {
                      x: s,
                      y: c - a
                  }, {
                      x: s,
                      y: c
                  }),
                  bottomRight: l({
                      x: s,
                      y: e
                  }, {
                      x: s,
                      y: e + a
                  }, {
                      x: t + i,
                      y: c
                  }, {
                      x: t,
                      y: c
                  }),
                  bottomLeft: l({
                      x: s,
                      y: c
                  }, {
                      x: s - i,
                      y: c
                  }, {
                      x: t,
                      y: e + a
                  }, {
                      x: t,
                      y: e
                  })
              }
          }
          function h(t, e, n) {
              var o = t.left
                , r = t.top
                , i = t.width
                , a = t.height
                , s = e[0][0] < i / 2 ? e[0][0] : i / 2
                , h = e[0][1] < a / 2 ? e[0][1] : a / 2
                , l = e[1][0] < i / 2 ? e[1][0] : i / 2
                , d = e[1][1] < a / 2 ? e[1][1] : a / 2
                , u = e[2][0] < i / 2 ? e[2][0] : i / 2
                , p = e[2][1] < a / 2 ? e[2][1] : a / 2
                , f = e[3][0] < i / 2 ? e[3][0] : i / 2
                , g = e[3][1] < a / 2 ? e[3][1] : a / 2
                , m = i - l
                , y = a - p
                , w = i - u
                , v = a - g;
              return {
                  topLeftOuter: c(o, r, s, h).topLeft.subdivide(.5),
                  topLeftInner: c(o + n[3].width, r + n[0].width, Math.max(0, s - n[3].width), Math.max(0, h - n[0].width)).topLeft.subdivide(.5),
                  topRightOuter: c(o + m, r, l, d).topRight.subdivide(.5),
                  topRightInner: c(o + Math.min(m, i + n[3].width), r + n[0].width, m > i + n[3].width ? 0 : l - n[3].width, d - n[0].width).topRight.subdivide(.5),
                  bottomRightOuter: c(o + w, r + y, u, p).bottomRight.subdivide(.5),
                  bottomRightInner: c(o + Math.min(w, i - n[3].width), r + Math.min(y, a + n[0].width), Math.max(0, u - n[1].width), p - n[2].width).bottomRight.subdivide(.5),
                  bottomLeftOuter: c(o, r + v, f, g).bottomLeft.subdivide(.5),
                  bottomLeftInner: c(o + n[3].width, r + v, Math.max(0, f - n[3].width), g - n[2].width).bottomLeft.subdivide(.5)
              }
          }
          function l(t, e, n, o) {
              var r = function(t, e, n) {
                  return {
                      x: t.x + (e.x - t.x) * n,
                      y: t.y + (e.y - t.y) * n
                  }
              };
              return {
                  start: t,
                  startControl: e,
                  endControl: n,
                  end: o,
                  subdivide: function(i) {
                      var a = r(t, e, i)
                        , s = r(e, n, i)
                        , c = r(n, o, i)
                        , h = r(a, s, i)
                        , d = r(s, c, i)
                        , u = r(h, d, i);
                      return [l(t, a, h, u), l(u, d, c, o)]
                  },
                  curveTo: function(t) {
                      t.push(["bezierCurve", e.x, e.y, n.x, n.y, o.x, o.y])
                  },
                  curveToReversed: function(o) {
                      o.push(["bezierCurve", n.x, n.y, e.x, e.y, t.x, t.y])
                  }
              }
          }
          function d(t, e, n, o, r, i, a) {
              var s = [];
              return e[0] > 0 || e[1] > 0 ? (s.push(["line", o[1].start.x, o[1].start.y]),
              o[1].curveTo(s)) : s.push(["line", t.c1[0], t.c1[1]]),
              n[0] > 0 || n[1] > 0 ? (s.push(["line", i[0].start.x, i[0].start.y]),
              i[0].curveTo(s),
              s.push(["line", a[0].end.x, a[0].end.y]),
              a[0].curveToReversed(s)) : (s.push(["line", t.c2[0], t.c2[1]]),
              s.push(["line", t.c3[0], t.c3[1]])),
              e[0] > 0 || e[1] > 0 ? (s.push(["line", r[1].end.x, r[1].end.y]),
              r[1].curveToReversed(s)) : s.push(["line", t.c4[0], t.c4[1]]),
              s
          }
          function u(t, e, n, o, r, i, a) {
              e[0] > 0 || e[1] > 0 ? (t.push(["line", o[0].start.x, o[0].start.y]),
              o[0].curveTo(t),
              o[1].curveTo(t)) : t.push(["line", i, a]),
              (n[0] > 0 || n[1] > 0) && t.push(["line", r[0].start.x, r[0].start.y])
          }
          function p(t) {
              return t.cssInt("zIndex") < 0
          }
          function f(t) {
              return t.cssInt("zIndex") > 0
          }
          function g(t) {
              return 0 === t.cssInt("zIndex")
          }
          function m(t) {
              return -1 !== ["inline", "inline-block", "inline-table"].indexOf(t.css("display"))
          }
          function y(t) {
              return t instanceof G
          }
          function w(t) {
              return t.node.data.trim().length > 0
          }
          function v(t) {
              return /^(normal|none|0px)$/.test(t.parent.css("letterSpacing"))
          }
          function b(t) {
              return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(e) {
                  var n = t.css("border" + e + "Radius")
                    , o = n.split(" ");
                  return o.length <= 1 && (o[1] = o[0]),
                  o.map(L)
              })
          }
          function x(t) {
              return t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE
          }
          function E(t) {
              var e = t.css("position")
                , n = -1 !== ["absolute", "relative", "fixed"].indexOf(e) ? t.css("zIndex") : "auto";
              return "auto" !== n
          }
          function T(t) {
              return "static" !== t.css("position")
          }
          function k(t) {
              return "none" !== t.css("float")
          }
          function C(t) {
              return -1 !== ["inline-block", "inline-table"].indexOf(t.css("display"))
          }
          function S(t) {
              var e = this;
              return function() {
                  return !t.apply(e, arguments)
              }
          }
          function I(t) {
              return t.node.nodeType === Node.ELEMENT_NODE
          }
          function R(t) {
              return t.isPseudoElement === !0
          }
          function O(t) {
              return t.node.nodeType === Node.TEXT_NODE
          }
          function A(t) {
              return function(e, n) {
                  return e.cssInt("zIndex") + t.indexOf(e) / t.length - (n.cssInt("zIndex") + t.indexOf(n) / t.length)
              }
          }
          function P(t) {
              return t.getOpacity() < 1
          }
          function L(t) {
              return parseInt(t, 10)
          }
          function M(t) {
              return t.width
          }
          function N(t) {
              return t.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t.node.nodeName)
          }
          function B(t) {
              return [].concat.apply([], t)
          }
          function D(t) {
              var e = t.substr(0, 1);
              return e === t.substr(t.length - 1) && e.match(/'|"/) ? t.substr(1, t.length - 2) : t
          }
          function _(t) {
              for (var e, n = [], o = 0, r = !1; t.length; )
                  F(t[o]) === r ? (e = t.splice(0, o),
                  e.length && n.push(V.ucs2.encode(e)),
                  r = !r,
                  o = 0) : o++,
                  o >= t.length && (e = t.splice(0, o),
                  e.length && n.push(V.ucs2.encode(e)));
              return n
          }
          function F(t) {
              return -1 !== [32, 13, 10, 9, 45].indexOf(t)
          }
          function W(t) {
              return /[^\u0000-\u00ff]/.test(t)
          }
          var H = t("./log")
            , V = t("punycode")
            , j = t("./nodecontainer")
            , z = t("./textcontainer")
            , U = t("./pseudoelementcontainer")
            , X = t("./fontmetrics")
            , q = t("./color")
            , G = t("./stackingcontext")
            , Y = t("./utils")
            , Q = Y.bind
            , $ = Y.getBounds
            , J = Y.parseBackgrounds
            , K = Y.offsetBounds;
          o.prototype.calculateOverflowClips = function() {
              this.nodes.forEach(function(t) {
                  if (I(t)) {
                      R(t) && t.appendToDOM(),
                      t.borders = this.parseBorders(t);
                      var e = "hidden" === t.css("overflow") ? [t.borders.clip] : []
                        , n = t.parseClip();
                      n && -1 !== ["absolute", "fixed"].indexOf(t.css("position")) && e.push([["rect", t.bounds.left + n.left, t.bounds.top + n.top, n.right - n.left, n.bottom - n.top]]),
                      t.clip = r(t) ? t.parent.clip.concat(e) : e,
                      t.backgroundClip = "hidden" !== t.css("overflow") ? t.clip.concat([t.borders.clip]) : t.clip,
                      R(t) && t.cleanDOM()
                  } else
                      O(t) && (t.clip = r(t) ? t.parent.clip : []);
                  R(t) || (t.bounds = null)
              }, this)
          }
          ,
          o.prototype.asyncRenderer = function(t, e, n) {
              n = n || Date.now(),
              this.paint(t[this.renderIndex++]),
              t.length === this.renderIndex ? e() : n + 20 > Date.now() ? this.asyncRenderer(t, e, n) : setTimeout(Q(function() {
                  this.asyncRenderer(t, e)
              }, this), 0)
          }
          ,
          o.prototype.createPseudoHideStyles = function(t) {
              this.createStyles(t, "." + U.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + U.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
          }
          ,
          o.prototype.disableAnimations = function(t) {
              this.createStyles(t, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
          }
          ,
          o.prototype.createStyles = function(t, e) {
              var n = t.createElement("style");
              n.innerHTML = e,
              t.body.appendChild(n)
          }
          ,
          o.prototype.getPseudoElements = function(t) {
              var e = [[t]];
              if (t.node.nodeType === Node.ELEMENT_NODE) {
                  var n = this.getPseudoElement(t, ":before")
                    , o = this.getPseudoElement(t, ":after");
                  n && e.push(n),
                  o && e.push(o)
              }
              return B(e)
          }
          ,
          o.prototype.getPseudoElement = function(t, e) {
              var n = t.computedStyle(e);
              if (!n || !n.content || "none" === n.content || "-moz-alt-content" === n.content || "none" === n.display)
                  return null;
              for (var o = D(n.content), r = "url" === o.substr(0, 3), a = document.createElement(r ? "img" : "html2canvaspseudoelement"), s = new U(a,t,e), c = n.length - 1; c >= 0; c--) {
                  var h = i(n.item(c));
                  a.style[h] = n[h]
              }
              if (a.className = U.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + U.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER,
              r)
                  return a.src = J(o)[0].args[0],
                  [s];
              var l = document.createTextNode(o);
              return a.appendChild(l),
              [s, new z(l,s)]
          }
          ,
          o.prototype.getChildren = function(t) {
              return B([].filter.call(t.node.childNodes, x).map(function(e) {
                  var n = [e.nodeType === Node.TEXT_NODE ? new z(e,t) : new j(e,t)].filter(N);
                  return e.nodeType === Node.ELEMENT_NODE && n.length && "TEXTAREA" !== e.tagName ? n[0].isElementVisible() ? n.concat(this.getChildren(n[0])) : [] : n
              }, this))
          }
          ,
          o.prototype.newStackingContext = function(t, e) {
              var n = new G(e,t.getOpacity(),t.node,t.parent);
              t.cloneTo(n);
              var o = e ? n.getParentStack(this) : n.parent.stack;
              o.contexts.push(n),
              t.stack = n
          }
          ,
          o.prototype.createStackingContexts = function() {
              this.nodes.forEach(function(t) {
                  I(t) && (this.isRootElement(t) || P(t) || E(t) || this.isBodyWithTransparentRoot(t) || t.hasTransform()) ? this.newStackingContext(t, !0) : I(t) && (T(t) && g(t) || C(t) || k(t)) ? this.newStackingContext(t, !1) : t.assignStack(t.parent.stack)
              }, this)
          }
          ,
          o.prototype.isBodyWithTransparentRoot = function(t) {
              return "BODY" === t.node.nodeName && t.parent.color("backgroundColor").isTransparent()
          }
          ,
          o.prototype.isRootElement = function(t) {
              return null === t.parent
          }
          ,
          o.prototype.sortStackingContexts = function(t) {
              t.contexts.sort(A(t.contexts.slice(0))),
              t.contexts.forEach(this.sortStackingContexts, this)
          }
          ,
          o.prototype.parseTextBounds = function(t) {
              return function(e, n, o) {
                  if ("none" !== t.parent.css("textDecoration").substr(0, 4) || 0 !== e.trim().length) {
                      if (this.support.rangeBounds && !t.parent.hasTransform()) {
                          var r = o.slice(0, n).join("").length;
                          return this.getRangeBounds(t.node, r, e.length)
                      }
                      if (t.node && "string" == typeof t.node.data) {
                          var i = t.node.splitText(e.length)
                            , a = this.getWrapperBounds(t.node, t.parent.hasTransform());
                          return t.node = i,
                          a
                      }
                  } else
                      (!this.support.rangeBounds || t.parent.hasTransform()) && (t.node = t.node.splitText(e.length));
                  return {}
              }
          }
          ,
          o.prototype.getWrapperBounds = function(t, e) {
              var n = t.ownerDocument.createElement("html2canvaswrapper")
                , o = t.parentNode
                , r = t.cloneNode(!0);
              n.appendChild(t.cloneNode(!0)),
              o.replaceChild(n, t);
              var i = e ? K(n) : $(n);
              return o.replaceChild(r, n),
              i
          }
          ,
          o.prototype.getRangeBounds = function(t, e, n) {
              var o = this.range || (this.range = t.ownerDocument.createRange());
              return o.setStart(t, e),
              o.setEnd(t, e + n),
              o.getBoundingClientRect()
          }
          ,
          o.prototype.parse = function(t) {
              var e = t.contexts.filter(p)
                , n = t.children.filter(I)
                , o = n.filter(S(k))
                , r = o.filter(S(T)).filter(S(m))
                , i = n.filter(S(T)).filter(k)
                , s = o.filter(S(T)).filter(m)
                , c = t.contexts.concat(o.filter(T)).filter(g)
                , h = t.children.filter(O).filter(w)
                , l = t.contexts.filter(f);
              e.concat(r).concat(i).concat(s).concat(c).concat(h).concat(l).forEach(function(t) {
                  this.renderQueue.push(t),
                  y(t) && (this.parse(t),
                  this.renderQueue.push(new a))
              }, this)
          }
          ,
          o.prototype.paint = function(t) {
              try {
                  t instanceof a ? this.renderer.ctx.restore() : O(t) ? (R(t.parent) && t.parent.appendToDOM(),
                  this.paintText(t),
                  R(t.parent) && t.parent.cleanDOM()) : this.paintNode(t)
              } catch (e) {
                  if (H(e),
                  this.options.strict)
                      throw e
              }
          }
          ,
          o.prototype.paintNode = function(t) {
              y(t) && (this.renderer.setOpacity(t.opacity),
              this.renderer.ctx.save(),
              t.hasTransform() && this.renderer.setTransform(t.parseTransform())),
              "INPUT" === t.node.nodeName && "checkbox" === t.node.type ? this.paintCheckbox(t) : "INPUT" === t.node.nodeName && "radio" === t.node.type ? this.paintRadio(t) : this.paintElement(t)
          }
          ,
          o.prototype.paintElement = function(t) {
              var e = t.parseBounds();
              this.renderer.clip(t.backgroundClip, function() {
                  this.renderer.renderBackground(t, e, t.borders.borders.map(M))
              }, this),
              this.renderer.clip(t.clip, function() {
                  this.renderer.renderBorders(t.borders.borders)
              }, this),
              this.renderer.clip(t.backgroundClip, function() {
                  switch (t.node.nodeName) {
                  case "svg":
                  case "IFRAME":
                      var n = this.images.get(t.node);
                      n ? this.renderer.renderImage(t, e, t.borders, n) : H("Error loading <" + t.node.nodeName + ">", t.node);
                      break;
                  case "IMG":
                      var o = this.images.get(t.node.src);
                      o ? this.renderer.renderImage(t, e, t.borders, o) : H("Error loading <img>", t.node.src);
                      break;
                  case "CANVAS":
                      this.renderer.renderImage(t, e, t.borders, {
                          image: t.node
                      });
                      break;
                  case "SELECT":
                  case "INPUT":
                  case "TEXTAREA":
                      this.paintFormValue(t)
                  }
              }, this)
          }
          ,
          o.prototype.paintCheckbox = function(t) {
              var e = t.parseBounds()
                , n = Math.min(e.width, e.height)
                , o = {
                  width: n - 1,
                  height: n - 1,
                  top: e.top,
                  left: e.left
              }
                , r = [3, 3]
                , i = [r, r, r, r]
                , a = [1, 1, 1, 1].map(function(t) {
                  return {
                      color: new q("#A5A5A5"),
                      width: t
                  }
              })
                , c = h(o, i, a);
              this.renderer.clip(t.backgroundClip, function() {
                  this.renderer.rectangle(o.left + 1, o.top + 1, o.width - 2, o.height - 2, new q("#DEDEDE")),
                  this.renderer.renderBorders(s(a, o, c, i)),
                  t.node.checked && (this.renderer.font(new q("#424242"), "normal", "normal", "bold", n - 3 + "px", "arial"),
                  this.renderer.text("✔", o.left + n / 6, o.top + n - 1))
              }, this)
          }
          ,
          o.prototype.paintRadio = function(t) {
              var e = t.parseBounds()
                , n = Math.min(e.width, e.height) - 2;
              this.renderer.clip(t.backgroundClip, function() {
                  this.renderer.circleStroke(e.left + 1, e.top + 1, n, new q("#DEDEDE"), 1, new q("#A5A5A5")),
                  t.node.checked && this.renderer.circle(Math.ceil(e.left + n / 4) + 1, Math.ceil(e.top + n / 4) + 1, Math.floor(n / 2), new q("#424242"))
              }, this)
          }
          ,
          o.prototype.paintFormValue = function(t) {
              var e = t.getValue();
              if (e.length > 0) {
                  var n = t.node.ownerDocument
                    , o = n.createElement("html2canvaswrapper")
                    , r = ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"];
                  r.forEach(function(e) {
                      try {
                          o.style[e] = t.css(e)
                      } catch (n) {
                          H("html2canvas: Parse: Exception caught in renderFormValue: " + n.message)
                      }
                  });
                  var i = t.parseBounds();
                  o.style.position = "fixed",
                  o.style.left = i.left + "px",
                  o.style.top = i.top + "px",
                  o.textContent = e,
                  n.body.appendChild(o),
                  this.paintText(new z(o.firstChild,t)),
                  n.body.removeChild(o)
              }
          }
          ,
          o.prototype.paintText = function(t) {
              t.applyTextTransform();
              var e = V.ucs2.decode(t.node.data)
                , n = this.options.letterRendering && !v(t) || W(t.node.data) ? e.map(function(t) {
                  return V.ucs2.encode([t])
              }) : _(e)
                , o = t.parent.fontWeight()
                , r = t.parent.css("fontSize")
                , i = t.parent.css("fontFamily")
                , a = t.parent.parseTextShadows();
              this.renderer.font(t.parent.color("color"), t.parent.css("fontStyle"), t.parent.css("fontVariant"), o, r, i),
              a.length ? this.renderer.fontShadow(a[0].color, a[0].offsetX, a[0].offsetY, a[0].blur) : this.renderer.clearShadow(),
              this.renderer.clip(t.parent.clip, function() {
                  n.map(this.parseTextBounds(t), this).forEach(function(e, o) {
                      e && (this.renderer.text(n[o], e.left, e.bottom),
                      this.renderTextDecoration(t.parent, e, this.fontMetrics.getMetrics(i, r)))
                  }, this)
              }, this)
          }
          ,
          o.prototype.renderTextDecoration = function(t, e, n) {
              switch (t.css("textDecoration").split(" ")[0]) {
              case "underline":
                  this.renderer.rectangle(e.left, Math.round(e.top + n.baseline + n.lineWidth), e.width, 1, t.color("color"));
                  break;
              case "overline":
                  this.renderer.rectangle(e.left, Math.round(e.top), e.width, 1, t.color("color"));
                  break;
              case "line-through":
                  this.renderer.rectangle(e.left, Math.ceil(e.top + n.middle + n.lineWidth), e.width, 1, t.color("color"))
              }
          }
          ;
          var Z = {
              inset: [["darken", .6], ["darken", .1], ["darken", .1], ["darken", .6]]
          };
          o.prototype.parseBorders = function(t) {
              var e = t.parseBounds()
                , n = b(t)
                , o = ["Top", "Right", "Bottom", "Left"].map(function(e, n) {
                  var o = t.css("border" + e + "Style")
                    , r = t.color("border" + e + "Color");
                  "inset" === o && r.isBlack() && (r = new q([255, 255, 255, r.a]));
                  var i = Z[o] ? Z[o][n] : null;
                  return {
                      width: t.cssInt("border" + e + "Width"),
                      color: i ? r[i[0]](i[1]) : r,
                      args: null
                  }
              })
                , r = h(e, n, o);
              return {
                  clip: this.parseBackgroundClip(t, r, o, n, e),
                  borders: s(o, e, r, n)
              }
          }
          ,
          o.prototype.parseBackgroundClip = function(t, e, n, o, r) {
              var i = t.css("backgroundClip")
                , a = [];
              switch (i) {
              case "content-box":
              case "padding-box":
                  u(a, o[0], o[1], e.topLeftInner, e.topRightInner, r.left + n[3].width, r.top + n[0].width),
                  u(a, o[1], o[2], e.topRightInner, e.bottomRightInner, r.left + r.width - n[1].width, r.top + n[0].width),
                  u(a, o[2], o[3], e.bottomRightInner, e.bottomLeftInner, r.left + r.width - n[1].width, r.top + r.height - n[2].width),
                  u(a, o[3], o[0], e.bottomLeftInner, e.topLeftInner, r.left + n[3].width, r.top + r.height - n[2].width);
                  break;
              default:
                  u(a, o[0], o[1], e.topLeftOuter, e.topRightOuter, r.left, r.top),
                  u(a, o[1], o[2], e.topRightOuter, e.bottomRightOuter, r.left + r.width, r.top),
                  u(a, o[2], o[3], e.bottomRightOuter, e.bottomLeftOuter, r.left + r.width, r.top + r.height),
                  u(a, o[3], o[0], e.bottomLeftOuter, e.topLeftOuter, r.left, r.top + r.height)
              }
              return a
          }
          ,
          e.exports = o
      }
      , {
          "./color": 3,
          "./fontmetrics": 7,
          "./log": 13,
          "./nodecontainer": 14,
          "./pseudoelementcontainer": 18,
          "./stackingcontext": 21,
          "./textcontainer": 25,
          "./utils": 26,
          punycode: 1
      }],
      16: [function(t, e, n) {
          function o(t, e, n) {
              var o = "withCredentials"in new XMLHttpRequest;
              if (!e)
                  return Promise.reject("No proxy configured");
              var r = a(o)
                , c = s(e, t, r);
              return o ? l(c) : i(n, c, r).then(function(t) {
                  return f(t.content)
              })
          }
          function r(t, e, n) {
              var o = "crossOrigin"in new Image
                , r = a(o)
                , c = s(e, t, r);
              return o ? Promise.resolve(c) : i(n, c, r).then(function(t) {
                  return "data:" + t.type + ";base64," + t.content
              })
          }
          function i(t, e, n) {
              return new Promise(function(o, r) {
                  var i = t.createElement("script")
                    , a = function() {
                      delete window.html2canvas.proxy[n],
                      t.body.removeChild(i)
                  };
                  window.html2canvas.proxy[n] = function(t) {
                      a(),
                      o(t)
                  }
                  ,
                  i.src = e,
                  i.onerror = function(t) {
                      a(),
                      r(t)
                  }
                  ,
                  t.body.appendChild(i)
              }
              )
          }
          function a(t) {
              return t ? "" : "html2canvas_" + Date.now() + "_" + ++g + "_" + Math.round(1e5 * Math.random())
          }
          function s(t, e, n) {
              return t + "?url=" + encodeURIComponent(e) + (n.length ? "&callback=html2canvas.proxy." + n : "")
          }
          function c(t) {
              return function(e) {
                  var n, o = new DOMParser;
                  try {
                      n = o.parseFromString(e, "text/html")
                  } catch (r) {
                      u("DOMParser not supported, falling back to createHTMLDocument"),
                      n = document.implementation.createHTMLDocument("");
                      try {
                          n.open(),
                          n.write(e),
                          n.close()
                      } catch (i) {
                          u("createHTMLDocument write not supported, falling back to document.body.innerHTML"),
                          n.body.innerHTML = e
                      }
                  }
                  var a = n.querySelector("base");
                  if (!a || !a.href.host) {
                      var s = n.createElement("base");
                      s.href = t,
                      n.head.insertBefore(s, n.head.firstChild)
                  }
                  return n
              }
          }
          function h(t, e, n, r, i, a) {
              return new o(t,e,window.document).then(c(t)).then(function(t) {
                  return p(t, n, r, i, a, 0, 0)
              })
          }
          var l = t("./xhr")
            , d = t("./utils")
            , u = t("./log")
            , p = t("./clone")
            , f = d.decode64
            , g = 0;
          n.Proxy = o,
          n.ProxyURL = r,
          n.loadUrlDocument = h
      }
      , {
          "./clone": 2,
          "./log": 13,
          "./utils": 26,
          "./xhr": 28
      }],
      17: [function(t, e, n) {
          function o(t, e) {
              var n = document.createElement("a");
              n.href = t,
              t = n.href,
              this.src = t,
              this.image = new Image;
              var o = this;
              this.promise = new Promise(function(n, i) {
                  o.image.crossOrigin = "Anonymous",
                  o.image.onload = n,
                  o.image.onerror = i,
                  new r(t,e,document).then(function(t) {
                      o.image.src = t
                  })["catch"](i)
              }
              )
          }
          var r = t("./proxy").ProxyURL;
          e.exports = o
      }
      , {
          "./proxy": 16
      }],
      18: [function(t, e, n) {
          function o(t, e, n) {
              r.call(this, t, e),
              this.isPseudoElement = !0,
              this.before = ":before" === n
          }
          var r = t("./nodecontainer");
          o.prototype.cloneTo = function(t) {
              o.prototype.cloneTo.call(this, t),
              t.isPseudoElement = !0,
              t.before = this.before
          }
          ,
          o.prototype = Object.create(r.prototype),
          o.prototype.appendToDOM = function() {
              this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node),
              this.parent.node.className += " " + this.getHideClass()
          }
          ,
          o.prototype.cleanDOM = function() {
              this.node.parentNode.removeChild(this.node),
              this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
          }
          ,
          o.prototype.getHideClass = function() {
              return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")]
          }
          ,
          o.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before",
          o.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after",
          e.exports = o
      }
      , {
          "./nodecontainer": 14
      }],
      19: [function(t, e, n) {
          function o(t, e, n, o, r) {
              this.width = t,
              this.height = e,
              this.images = n,
              this.options = o,
              this.document = r
          }
          var r = t("./log");
          o.prototype.renderImage = function(t, e, n, o) {
              var r = t.cssInt("paddingLeft")
                , i = t.cssInt("paddingTop")
                , a = t.cssInt("paddingRight")
                , s = t.cssInt("paddingBottom")
                , c = n.borders
                , h = e.width - (c[1].width + c[3].width + r + a)
                , l = e.height - (c[0].width + c[2].width + i + s);
              this.drawImage(o, 0, 0, o.image.width || h, o.image.height || l, e.left + r + c[3].width, e.top + i + c[0].width, h, l)
          }
          ,
          o.prototype.renderBackground = function(t, e, n) {
              e.height > 0 && e.width > 0 && (this.renderBackgroundColor(t, e),
              this.renderBackgroundImage(t, e, n))
          }
          ,
          o.prototype.renderBackgroundColor = function(t, e) {
              var n = t.color("backgroundColor");
              n.isTransparent() || this.rectangle(e.left, e.top, e.width, e.height, n)
          }
          ,
          o.prototype.renderBorders = function(t) {
              t.forEach(this.renderBorder, this)
          }
          ,
          o.prototype.renderBorder = function(t) {
              t.color.isTransparent() || null === t.args || this.drawShape(t.args, t.color)
          }
          ,
          o.prototype.renderBackgroundImage = function(t, e, n) {
              var o = t.parseBackgroundImages();
              o.reverse().forEach(function(o, i, a) {
                  switch (o.method) {
                  case "url":
                      var s = this.images.get(o.args[0]);
                      s ? this.renderBackgroundRepeating(t, e, s, a.length - (i + 1), n) : r("Error loading background-image", o.args[0]);
                      break;
                  case "linear-gradient":
                  case "gradient":
                      var c = this.images.get(o.value);
                      c ? this.renderBackgroundGradient(c, e, n) : r("Error loading background-image", o.args[0]);
                      break;
                  case "none":
                      break;
                  default:
                      r("Unknown background-image type", o.args[0])
                  }
              }, this)
          }
          ,
          o.prototype.renderBackgroundRepeating = function(t, e, n, o, r) {
              var i = t.parseBackgroundSize(e, n.image, o)
                , a = t.parseBackgroundPosition(e, n.image, o, i)
                , s = t.parseBackgroundRepeat(o);
              switch (s) {
              case "repeat-x":
              case "repeat no-repeat":
                  this.backgroundRepeatShape(n, a, i, e, e.left + r[3], e.top + a.top + r[0], 99999, i.height, r);
                  break;
              case "repeat-y":
              case "no-repeat repeat":
                  this.backgroundRepeatShape(n, a, i, e, e.left + a.left + r[3], e.top + r[0], i.width, 99999, r);
                  break;
              case "no-repeat":
                  this.backgroundRepeatShape(n, a, i, e, e.left + a.left + r[3], e.top + a.top + r[0], i.width, i.height, r);
                  break;
              default:
                  this.renderBackgroundRepeat(n, a, i, {
                      top: e.top,
                      left: e.left
                  }, r[3], r[0])
              }
          }
          ,
          e.exports = o
      }
      , {
          "./log": 13
      }],
      20: [function(t, e, n) {
          function o(t, e) {
              i.apply(this, arguments),
              this.canvas = this.options.canvas || this.document.createElement("canvas"),
              this.options.canvas || (this.canvas.width = t,
              this.canvas.height = e),
              this.ctx = this.canvas.getContext("2d"),
              this.taintCtx = this.document.createElement("canvas").getContext("2d"),
              this.ctx.textBaseline = "bottom",
              this.variables = {},
              s("Initialized CanvasRenderer with size", t, "x", e)
          }
          function r(t) {
              return t.length > 0
          }
          var i = t("../renderer")
            , a = t("../lineargradientcontainer")
            , s = t("../log");
          o.prototype = Object.create(i.prototype),
          o.prototype.setFillStyle = function(t) {
              return this.ctx.fillStyle = "object" == typeof t && t.isColor ? t.toString() : t,
              this.ctx
          }
          ,
          o.prototype.rectangle = function(t, e, n, o, r) {
              this.setFillStyle(r).fillRect(t, e, n, o)
          }
          ,
          o.prototype.circle = function(t, e, n, o) {
              this.setFillStyle(o),
              this.ctx.beginPath(),
              this.ctx.arc(t + n / 2, e + n / 2, n / 2, 0, 2 * Math.PI, !0),
              this.ctx.closePath(),
              this.ctx.fill()
          }
          ,
          o.prototype.circleStroke = function(t, e, n, o, r, i) {
              this.circle(t, e, n, o),
              this.ctx.strokeStyle = i.toString(),
              this.ctx.stroke()
          }
          ,
          o.prototype.drawShape = function(t, e) {
              this.shape(t),
              this.setFillStyle(e).fill()
          }
          ,
          o.prototype.taints = function(t) {
              if (null === t.tainted) {
                  this.taintCtx.drawImage(t.image, 0, 0);
                  try {
                      this.taintCtx.getImageData(0, 0, 1, 1),
                      t.tainted = !1
                  } catch (e) {
                      this.taintCtx = document.createElement("canvas").getContext("2d"),
                      t.tainted = !0
                  }
              }
              return t.tainted
          }
          ,
          o.prototype.drawImage = function(t, e, n, o, r, i, a, s, c) {
              (!this.taints(t) || this.options.allowTaint) && this.ctx.drawImage(t.image, e, n, o, r, i, a, s, c)
          }
          ,
          o.prototype.clip = function(t, e, n) {
              this.ctx.save(),
              t.filter(r).forEach(function(t) {
                  this.shape(t).clip()
              }, this),
              e.call(n),
              this.ctx.restore()
          }
          ,
          o.prototype.shape = function(t) {
              return this.ctx.beginPath(),
              t.forEach(function(t, e) {
                  "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo" : t[0] + "To"].apply(this.ctx, t.slice(1))
              }, this),
              this.ctx.closePath(),
              this.ctx
          }
          ,
          o.prototype.font = function(t, e, n, o, r, i) {
              this.setFillStyle(t).font = [e, n, o, r, i].join(" ").split(",")[0]
          }
          ,
          o.prototype.fontShadow = function(t, e, n, o) {
              this.setVariable("shadowColor", t.toString()).setVariable("shadowOffsetY", e).setVariable("shadowOffsetX", n).setVariable("shadowBlur", o)
          }
          ,
          o.prototype.clearShadow = function() {
              this.setVariable("shadowColor", "rgba(0,0,0,0)")
          }
          ,
          o.prototype.setOpacity = function(t) {
              this.ctx.globalAlpha = t
          }
          ,
          o.prototype.setTransform = function(t) {
              this.ctx.translate(t.origin[0], t.origin[1]),
              this.ctx.transform.apply(this.ctx, t.matrix),
              this.ctx.translate(-t.origin[0], -t.origin[1])
          }
          ,
          o.prototype.setVariable = function(t, e) {
              return this.variables[t] !== e && (this.variables[t] = this.ctx[t] = e),
              this
          }
          ,
          o.prototype.text = function(t, e, n) {
              this.ctx.fillText(t, e, n)
          }
          ,
          o.prototype.backgroundRepeatShape = function(t, e, n, o, r, i, a, s, c) {
              var h = [["line", Math.round(r), Math.round(i)], ["line", Math.round(r + a), Math.round(i)], ["line", Math.round(r + a), Math.round(s + i)], ["line", Math.round(r), Math.round(s + i)]];
              this.clip([h], function() {
                  this.renderBackgroundRepeat(t, e, n, o, c[3], c[0])
              }, this)
          }
          ,
          o.prototype.renderBackgroundRepeat = function(t, e, n, o, r, i) {
              var a = Math.round(o.left + e.left + r)
                , s = Math.round(o.top + e.top + i);
              this.setFillStyle(this.ctx.createPattern(this.resizeImage(t, n), "repeat")),
              this.ctx.translate(a, s),
              this.ctx.fill(),
              this.ctx.translate(-a, -s)
          }
          ,
          o.prototype.renderBackgroundGradient = function(t, e) {
              if (t instanceof a) {
                  var n = this.ctx.createLinearGradient(e.left + e.width * t.x0, e.top + e.height * t.y0, e.left + e.width * t.x1, e.top + e.height * t.y1);
                  t.colorStops.forEach(function(t) {
                      n.addColorStop(t.stop, t.color.toString())
                  }),
                  this.rectangle(e.left, e.top, e.width, e.height, n)
              }
          }
          ,
          o.prototype.resizeImage = function(t, e) {
              var n = t.image;
              if (n.width === e.width && n.height === e.height)
                  return n;
              var o, r = document.createElement("canvas");
              return r.width = e.width,
              r.height = e.height,
              o = r.getContext("2d"),
              o.drawImage(n, 0, 0, n.width, n.height, 0, 0, e.width, e.height),
              r
          }
          ,
          e.exports = o
      }
      , {
          "../lineargradientcontainer": 12,
          "../log": 13,
          "../renderer": 19
      }],
      21: [function(t, e, n) {
          function o(t, e, n, o) {
              r.call(this, n, o),
              this.ownStacking = t,
              this.contexts = [],
              this.children = [],
              this.opacity = (this.parent ? this.parent.stack.opacity : 1) * e
          }
          var r = t("./nodecontainer");
          o.prototype = Object.create(r.prototype),
          o.prototype.getParentStack = function(t) {
              var e = this.parent ? this.parent.stack : null;
              return e ? e.ownStacking ? e : e.getParentStack(t) : t.stack
          }
          ,
          e.exports = o
      }
      , {
          "./nodecontainer": 14
      }],
      22: [function(t, e, n) {
          function o(t) {
              this.rangeBounds = this.testRangeBounds(t),
              this.cors = this.testCORS(),
              this.svg = this.testSVG()
          }
          o.prototype.testRangeBounds = function(t) {
              var e, n, o, r, i = !1;
              return t.createRange && (e = t.createRange(),
              e.getBoundingClientRect && (n = t.createElement("boundtest"),
              n.style.height = "123px",
              n.style.display = "block",
              t.body.appendChild(n),
              e.selectNode(n),
              o = e.getBoundingClientRect(),
              r = o.height,
              123 === r && (i = !0),
              t.body.removeChild(n))),
              i
          }
          ,
          o.prototype.testCORS = function() {
              return "undefined" != typeof (new Image).crossOrigin
          }
          ,
          o.prototype.testSVG = function() {
              var t = new Image
                , e = document.createElement("canvas")
                , n = e.getContext("2d");
              t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
              try {
                  n.drawImage(t, 0, 0),
                  e.toDataURL()
              } catch (o) {
                  return !1
              }
              return !0
          }
          ,
          e.exports = o
      }
      , {}],
      23: [function(t, e, n) {
          function o(t) {
              this.src = t,
              this.image = null;
              var e = this;
              this.promise = this.hasFabric().then(function() {
                  return e.isInline(t) ? Promise.resolve(e.inlineFormatting(t)) : r(t)
              }).then(function(t) {
                  return new Promise(function(n) {
                      window.html2canvas.svg.fabric.loadSVGFromString(t, e.createCanvas.call(e, n))
                  }
                  )
              })
          }
          var r = t("./xhr")
            , i = t("./utils").decode64;
          o.prototype.hasFabric = function() {
              return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))
          }
          ,
          o.prototype.inlineFormatting = function(t) {
              return /^data:image\/svg\+xml;base64,/.test(t) ? this.decode64(this.removeContentType(t)) : this.removeContentType(t)
          }
          ,
          o.prototype.removeContentType = function(t) {
              return t.replace(/^data:image\/svg\+xml(;base64)?,/, "")
          }
          ,
          o.prototype.isInline = function(t) {
              return /^data:image\/svg\+xml/i.test(t)
          }
          ,
          o.prototype.createCanvas = function(t) {
              var e = this;
              return function(n, o) {
                  var r = new window.html2canvas.svg.fabric.StaticCanvas("c");
                  e.image = r.lowerCanvasEl,
                  r.setWidth(o.width).setHeight(o.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(n, o)).renderAll(),
                  t(r.lowerCanvasEl)
              }
          }
          ,
          o.prototype.decode64 = function(t) {
              return "function" == typeof window.atob ? window.atob(t) : i(t)
          }
          ,
          e.exports = o
      }
      , {
          "./utils": 26,
          "./xhr": 28
      }],
      24: [function(t, e, n) {
          function o(t, e) {
              this.src = t,
              this.image = null;
              var n = this;
              this.promise = e ? new Promise(function(e, o) {
                  n.image = new Image,
                  n.image.onload = e,
                  n.image.onerror = o,
                  n.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(t),
                  n.image.complete === !0 && e(n.image)
              }
              ) : this.hasFabric().then(function() {
                  return new Promise(function(e) {
                      window.html2canvas.svg.fabric.parseSVGDocument(t, n.createCanvas.call(n, e))
                  }
                  )
              })
          }
          var r = t("./svgcontainer");
          o.prototype = Object.create(r.prototype),
          e.exports = o
      }
      , {
          "./svgcontainer": 23
      }],
      25: [function(t, e, n) {
          function o(t, e) {
              i.call(this, t, e)
          }
          function r(t, e, n) {
              return t.length > 0 ? e + n.toUpperCase() : void 0
          }
          var i = t("./nodecontainer");
          o.prototype = Object.create(i.prototype),
          o.prototype.applyTextTransform = function() {
              this.node.data = this.transform(this.parent.css("textTransform"))
          }
          ,
          o.prototype.transform = function(t) {
              var e = this.node.data;
              switch (t) {
              case "lowercase":
                  return e.toLowerCase();
              case "capitalize":
                  return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, r);
              case "uppercase":
                  return e.toUpperCase();
              default:
                  return e
              }
          }
          ,
          e.exports = o
      }
      , {
          "./nodecontainer": 14
      }],
      26: [function(t, e, n) {
          n.smallImage = function() {
              return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          }
          ,
          n.bind = function(t, e) {
              return function() {
                  return t.apply(e, arguments)
              }
          }
          ,
          n.decode64 = function(t) {
              var e, n, o, r, i, a, s, c, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = t.length, d = "";
              for (e = 0; l > e; e += 4)
                  n = h.indexOf(t[e]),
                  o = h.indexOf(t[e + 1]),
                  r = h.indexOf(t[e + 2]),
                  i = h.indexOf(t[e + 3]),
                  a = n << 2 | o >> 4,
                  s = (15 & o) << 4 | r >> 2,
                  c = (3 & r) << 6 | i,
                  d += 64 === r ? String.fromCharCode(a) : 64 === i || -1 === i ? String.fromCharCode(a, s) : String.fromCharCode(a, s, c);
              return d
          }
          ,
          n.getBounds = function(t) {
              if (t.getBoundingClientRect) {
                  var e = t.getBoundingClientRect()
                    , n = null == t.offsetWidth ? e.width : t.offsetWidth;
                  return {
                      top: e.top,
                      bottom: e.bottom || e.top + e.height,
                      right: e.left + n,
                      left: e.left,
                      width: n,
                      height: null == t.offsetHeight ? e.height : t.offsetHeight
                  }
              }
              return {}
          }
          ,
          n.offsetBounds = function(t) {
              var e = t.offsetParent ? n.offsetBounds(t.offsetParent) : {
                  top: 0,
                  left: 0
              };
              return {
                  top: t.offsetTop + e.top,
                  bottom: t.offsetTop + t.offsetHeight + e.top,
                  right: t.offsetLeft + e.left + t.offsetWidth,
                  left: t.offsetLeft + e.left,
                  width: t.offsetWidth,
                  height: t.offsetHeight
              }
          }
          ,
          n.parseBackgrounds = function(t) {
              var e, n, o, r, i, a, s, c = " \r\n	", h = [], l = 0, d = 0, u = function() {
                  e && ('"' === n.substr(0, 1) && (n = n.substr(1, n.length - 2)),
                  n && s.push(n),
                  "-" === e.substr(0, 1) && (r = e.indexOf("-", 1) + 1) > 0 && (o = e.substr(0, r),
                  e = e.substr(r)),
                  h.push({
                      prefix: o,
                      method: e.toLowerCase(),
                      value: i,
                      args: s,
                      image: null
                  })),
                  s = [],
                  e = o = n = i = ""
              };
              return s = [],
              e = o = n = i = "",
              t.split("").forEach(function(t) {
                  if (!(0 === l && c.indexOf(t) > -1)) {
                      switch (t) {
                      case '"':
                          a ? a === t && (a = null) : a = t;
                          break;
                      case "(":
                          if (a)
                              break;
                          if (0 === l)
                              return l = 1,
                              void (i += t);
                          d++;
                          break;
                      case ")":
                          if (a)
                              break;
                          if (1 === l) {
                              if (0 === d)
                                  return l = 0,
                                  i += t,
                                  void u();
                              d--
                          }
                          break;
                      case ",":
                          if (a)
                              break;
                          if (0 === l)
                              return void u();
                          if (1 === l && 0 === d && !e.match(/^url$/i))
                              return s.push(n),
                              n = "",
                              void (i += t)
                      }
                      i += t,
                      0 === l ? e += t : n += t
                  }
              }),
              u(),
              h
          }
      }
      , {}],
      27: [function(t, e, n) {
          function o(t) {
              r.apply(this, arguments),
              this.type = "linear" === t.args[0] ? r.TYPES.LINEAR : r.TYPES.RADIAL
          }
          var r = t("./gradientcontainer");
          o.prototype = Object.create(r.prototype),
          e.exports = o
      }
      , {
          "./gradientcontainer": 9
      }],
      28: [function(t, e, n) {
          function o(t) {
              return new Promise(function(e, n) {
                  var o = new XMLHttpRequest;
                  o.open("GET", t),
                  o.onload = function() {
                      200 === o.status ? e(o.responseText) : n(new Error(o.statusText))
                  }
                  ,
                  o.onerror = function() {
                      n(new Error("Network Error"))
                  }
                  ,
                  o.send()
              }
              )
          }
          e.exports = o
      }
      , {}]
  }, {}, [4])(4)
});
