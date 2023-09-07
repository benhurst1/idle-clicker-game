(() => {
  "use strict";
  var t = {
      426: (t, e, n) => {
        n.d(e, { Z: () => c });
        var o = n(81),
          r = n.n(o),
          a = n(645),
          i = n.n(a)()(r());
        i.push([
          t.id,
          "* {\n  margin: 0px;\n  padding: 0px;\n}\n\nbutton {\n  border: 1px black solid;\n  background: none;\n  height: 50px;\n  width: 100px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\nbutton .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  z-index: 1;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\nbutton:hover .tooltiptext {\n  visibility: visible;\n}\n",
          "",
        ]);
        const c = i;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  o &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  o && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, o, r, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (o)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var p = [].concat(t[u]);
                (o && i[p[0]]) ||
                  (void 0 !== a &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = a)),
                  n &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = n))
                      : (p[2] = n)),
                  r &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = r))
                      : (p[4] = "".concat(r))),
                  e.push(p));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === t) {
              n = o;
              break;
            }
          return n;
        }
        function o(t, o) {
          for (var a = {}, i = [], c = 0; c < t.length; c++) {
            var s = t[c],
              u = o.base ? s[0] + o.base : s[0],
              p = a[u] || 0,
              l = "".concat(u, " ").concat(p);
            a[u] = p + 1;
            var d = n(l),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== d) e[d].references++, e[d].updater(f);
            else {
              var v = r(f, o);
              (o.byIndex = c),
                e.splice(c, 0, { identifier: l, updater: v, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function r(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, r) {
          var a = o((t = t || []), (r = r || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < a.length; i++) {
              var c = n(a[i]);
              e[c].references--;
            }
            for (var s = o(t, r), u = 0; u < a.length; u++) {
              var p = n(a[u]);
              0 === e[p].references && (e[p].updater(), e.splice(p, 1));
            }
            a = s;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var o = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(n);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var o = "";
                n.supports && (o += "@supports (".concat(n.supports, ") {")),
                  n.media && (o += "@media ".concat(n.media, " {"));
                var r = void 0 !== n.layer;
                r &&
                  (o += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (o += n.css),
                  r && (o += "}"),
                  n.media && (o += "}"),
                  n.supports && (o += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(o, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var a = (e[o] = { id: o, exports: {} });
    return t[o](a, a.exports, n), a.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var o in e)
        n.o(e, o) &&
          !n.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      var t = n(379),
        e = n.n(t),
        o = n(795),
        r = n.n(o),
        a = n(569),
        i = n.n(a),
        c = n(565),
        s = n.n(c),
        u = n(216),
        p = n.n(u),
        l = n(589),
        d = n.n(l),
        f = n(426),
        v = {};
      (v.styleTagTransform = d()),
        (v.setAttributes = s()),
        (v.insert = i().bind(null, "head")),
        (v.domAPI = r()),
        (v.insertStyleElement = p()),
        e()(f.Z, v),
        f.Z && f.Z.locals && f.Z.locals;
      const m = document.getElementById("content");
      class h {
        constructor(t) {
          (this.name = t), (this.count = 0);
        }
        createButton() {
          (function (t) {
            const e = document.createElement("button"),
              n = document.createElement("p");
            n.setAttribute("id", `${t.name}-number`), (n.textContent = t.count);
            const o = document.createElement("p");
            o.textContent = t.name;
            const r = document.createElement("span");
            return (
              r.setAttribute("class", "tooltiptext"),
              (r.textContent = "Hello!"),
              e.append(n, o, r),
              m.append(e),
              e
            );
          })(this).addEventListener("click", (t) => this.add());
        }
        add() {
          (this.count += 1),
            console.log(this.count),
            (document.querySelector(`#${this.name}-number`).textContent =
              this.count);
        }
      }
      const b = [];
      [["stone"], ["iron-ore"], ["copper-ore"]].forEach((t) => {
        const e = new h(t[0]);
        b.push(e), e.createButton();
      });
    })();
})();
