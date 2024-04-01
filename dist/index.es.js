import * as C from "react";
import E, { useCallback as he, forwardRef as L, Children as Vt, isValidElement as cr, createElement as w, cloneElement as Eo, Fragment as qt, createContext as bt, useContext as Qe, useState as J, useEffect as ee, useRef as q, useMemo as _t, useLayoutEffect as Ma, useReducer as mi, useDebugValue as h0, useImperativeHandle as v0 } from "react";
import * as g0 from "react-dom";
import Hl, { flushSync as hi, createPortal as Vp } from "react-dom";
var gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function b0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var f = { exports: {} }, Bo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function x0() {
  if (jd)
    return Bo;
  jd = 1;
  var e = E, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, l) {
    var u, d = {}, p = null, m = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c)
      r.call(c, u) && !a.hasOwnProperty(u) && (d[u] = c[u]);
    if (i && i.defaultProps)
      for (u in c = i.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: i, key: p, ref: m, props: d, _owner: o.current };
  }
  return Bo.Fragment = n, Bo.jsx = s, Bo.jsxs = s, Bo;
}
var Ho = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad;
function y0() {
  return Ad || (Ad = 1, process.env.NODE_ENV !== "production" && function() {
    var e = E, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(D) {
      if (D === null || typeof D != "object")
        return null;
      var ce = h && D[h] || D[v];
      return typeof ce == "function" ? ce : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(D) {
      {
        for (var ce = arguments.length, xe = new Array(ce > 1 ? ce - 1 : 0), Me = 1; Me < ce; Me++)
          xe[Me - 1] = arguments[Me];
        y("error", D, xe);
      }
    }
    function y(D, ce, xe) {
      {
        var Me = x.ReactDebugCurrentFrame, Ye = Me.getStackAddendum();
        Ye !== "" && (ce += "%s", xe = xe.concat([Ye]));
        var Je = xe.map(function(ze) {
          return String(ze);
        });
        Je.unshift("Warning: " + ce), Function.prototype.apply.call(console[D], console, Je);
      }
    }
    var _ = !1, $ = !1, N = !1, k = !1, S = !1, P;
    P = Symbol.for("react.module.reference");
    function Y(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === a || S || D === o || D === l || D === u || k || D === m || _ || $ || N || typeof D == "object" && D !== null && (D.$$typeof === p || D.$$typeof === d || D.$$typeof === s || D.$$typeof === i || D.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === P || D.getModuleId !== void 0));
    }
    function U(D, ce, xe) {
      var Me = D.displayName;
      if (Me)
        return Me;
      var Ye = ce.displayName || ce.name || "";
      return Ye !== "" ? xe + "(" + Ye + ")" : xe;
    }
    function B(D) {
      return D.displayName || "Context";
    }
    function Z(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case i:
            var ce = D;
            return B(ce) + ".Consumer";
          case s:
            var xe = D;
            return B(xe._context) + ".Provider";
          case c:
            return U(D, D.render, "ForwardRef");
          case d:
            var Me = D.displayName || null;
            return Me !== null ? Me : Z(D.type) || "Memo";
          case p: {
            var Ye = D, Je = Ye._payload, ze = Ye._init;
            try {
              return Z(ze(Je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, A = 0, I, W, G, R, M, K, X;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function ne() {
      {
        if (A === 0) {
          I = console.log, W = console.info, G = console.warn, R = console.error, M = console.group, K = console.groupCollapsed, X = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        A++;
      }
    }
    function ge() {
      {
        if (A--, A === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, D, {
              value: I
            }),
            info: F({}, D, {
              value: W
            }),
            warn: F({}, D, {
              value: G
            }),
            error: F({}, D, {
              value: R
            }),
            group: F({}, D, {
              value: M
            }),
            groupCollapsed: F({}, D, {
              value: K
            }),
            groupEnd: F({}, D, {
              value: X
            })
          });
        }
        A < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = x.ReactCurrentDispatcher, oe;
    function ie(D, ce, xe) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (Ye) {
            var Me = Ye.stack.trim().match(/\n( *(at )?)/);
            oe = Me && Me[1] || "";
          }
        return `
` + oe + D;
      }
    }
    var pe = !1, H;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      H = new re();
    }
    function V(D, ce) {
      if (!D || pe)
        return "";
      {
        var xe = H.get(D);
        if (xe !== void 0)
          return xe;
      }
      var Me;
      pe = !0;
      var Ye = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Je;
      Je = be.current, be.current = null, ne();
      try {
        if (ce) {
          var ze = function() {
            throw Error();
          };
          if (Object.defineProperty(ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ze, []);
            } catch (kn) {
              Me = kn;
            }
            Reflect.construct(D, [], ze);
          } else {
            try {
              ze.call();
            } catch (kn) {
              Me = kn;
            }
            D.call(ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kn) {
            Me = kn;
          }
          D();
        }
      } catch (kn) {
        if (kn && Me && typeof kn.stack == "string") {
          for (var Ve = kn.stack.split(`
`), kt = Me.stack.split(`
`), pt = Ve.length - 1, ht = kt.length - 1; pt >= 1 && ht >= 0 && Ve[pt] !== kt[ht]; )
            ht--;
          for (; pt >= 1 && ht >= 0; pt--, ht--)
            if (Ve[pt] !== kt[ht]) {
              if (pt !== 1 || ht !== 1)
                do
                  if (pt--, ht--, ht < 0 || Ve[pt] !== kt[ht]) {
                    var Yt = `
` + Ve[pt].replace(" at new ", " at ");
                    return D.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", D.displayName)), typeof D == "function" && H.set(D, Yt), Yt;
                  }
                while (pt >= 1 && ht >= 0);
              break;
            }
        }
      } finally {
        pe = !1, be.current = Je, ge(), Error.prepareStackTrace = Ye;
      }
      var Qr = D ? D.displayName || D.name : "", Rd = Qr ? ie(Qr) : "";
      return typeof D == "function" && H.set(D, Rd), Rd;
    }
    function de(D, ce, xe) {
      return V(D, !1);
    }
    function ve(D) {
      var ce = D.prototype;
      return !!(ce && ce.isReactComponent);
    }
    function ye(D, ce, xe) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return V(D, ve(D));
      if (typeof D == "string")
        return ie(D);
      switch (D) {
        case l:
          return ie("Suspense");
        case u:
          return ie("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case c:
            return de(D.render);
          case d:
            return ye(D.type, ce, xe);
          case p: {
            var Me = D, Ye = Me._payload, Je = Me._init;
            try {
              return ye(Je(Ye), ce, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var O = Object.prototype.hasOwnProperty, z = {}, Q = x.ReactDebugCurrentFrame;
    function fe(D) {
      if (D) {
        var ce = D._owner, xe = ye(D.type, D._source, ce ? ce.type : null);
        Q.setExtraStackFrame(xe);
      } else
        Q.setExtraStackFrame(null);
    }
    function le(D, ce, xe, Me, Ye) {
      {
        var Je = Function.call.bind(O);
        for (var ze in D)
          if (Je(D, ze)) {
            var Ve = void 0;
            try {
              if (typeof D[ze] != "function") {
                var kt = Error((Me || "React class") + ": " + xe + " type `" + ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kt.name = "Invariant Violation", kt;
              }
              Ve = D[ze](ce, ze, Me, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              Ve = pt;
            }
            Ve && !(Ve instanceof Error) && (fe(Ye), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", xe, ze, typeof Ve), fe(null)), Ve instanceof Error && !(Ve.message in z) && (z[Ve.message] = !0, fe(Ye), b("Failed %s type: %s", xe, Ve.message), fe(null));
          }
      }
    }
    var se = Array.isArray;
    function we(D) {
      return se(D);
    }
    function Le(D) {
      {
        var ce = typeof Symbol == "function" && Symbol.toStringTag, xe = ce && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return xe;
      }
    }
    function Ue(D) {
      try {
        return yt(D), !1;
      } catch {
        return !0;
      }
    }
    function yt(D) {
      return "" + D;
    }
    function gn(D) {
      if (Ue(D))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Le(D)), yt(D);
    }
    var St = x.ReactCurrentOwner, Ne = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Re, He;
    He = {};
    function tt(D) {
      if (O.call(D, "ref")) {
        var ce = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function nt(D) {
      if (O.call(D, "key")) {
        var ce = Object.getOwnPropertyDescriptor(D, "key").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function Ot(D, ce) {
      if (typeof D.ref == "string" && St.current && ce && St.current.stateNode !== ce) {
        var xe = Z(St.current.type);
        He[xe] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(St.current.type), D.ref), He[xe] = !0);
      }
    }
    function Cr(D, ce) {
      {
        var xe = function() {
          Se || (Se = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        xe.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function zt(D, ce) {
      {
        var xe = function() {
          Re || (Re = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        xe.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var Jn = function(D, ce, xe, Me, Ye, Je, ze) {
      var Ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: D,
        key: ce,
        ref: xe,
        props: ze,
        // Record the component responsible for creating this element.
        _owner: Je
      };
      return Ve._store = {}, Object.defineProperty(Ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(Ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ye
      }), Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)), Ve;
    };
    function Zr(D, ce, xe, Me, Ye) {
      {
        var Je, ze = {}, Ve = null, kt = null;
        xe !== void 0 && (gn(xe), Ve = "" + xe), nt(ce) && (gn(ce.key), Ve = "" + ce.key), tt(ce) && (kt = ce.ref, Ot(ce, Ye));
        for (Je in ce)
          O.call(ce, Je) && !Ne.hasOwnProperty(Je) && (ze[Je] = ce[Je]);
        if (D && D.defaultProps) {
          var pt = D.defaultProps;
          for (Je in pt)
            ze[Je] === void 0 && (ze[Je] = pt[Je]);
        }
        if (Ve || kt) {
          var ht = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Ve && Cr(ze, ht), kt && zt(ze, ht);
        }
        return Jn(D, Ve, kt, Ye, Me, St.current, ze);
      }
    }
    var zo = x.ReactCurrentOwner, ns = x.ReactDebugCurrentFrame;
    function On(D) {
      if (D) {
        var ce = D._owner, xe = ye(D.type, D._source, ce ? ce.type : null);
        ns.setExtraStackFrame(xe);
      } else
        ns.setExtraStackFrame(null);
    }
    var Xr;
    Xr = !1;
    function oc(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function Td() {
      {
        if (zo.current) {
          var D = Z(zo.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function i0(D) {
      {
        if (D !== void 0) {
          var ce = D.fileName.replace(/^.*[\\\/]/, ""), xe = D.lineNumber;
          return `

Check your code at ` + ce + ":" + xe + ".";
        }
        return "";
      }
    }
    var Od = {};
    function c0(D) {
      {
        var ce = Td();
        if (!ce) {
          var xe = typeof D == "string" ? D : D.displayName || D.name;
          xe && (ce = `

Check the top-level render call using <` + xe + ">.");
        }
        return ce;
      }
    }
    function kd(D, ce) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var xe = c0(ce);
        if (Od[xe])
          return;
        Od[xe] = !0;
        var Me = "";
        D && D._owner && D._owner !== zo.current && (Me = " It was passed a child from " + Z(D._owner.type) + "."), On(D), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, Me), On(null);
      }
    }
    function Md(D, ce) {
      {
        if (typeof D != "object")
          return;
        if (we(D))
          for (var xe = 0; xe < D.length; xe++) {
            var Me = D[xe];
            oc(Me) && kd(Me, ce);
          }
        else if (oc(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var Ye = g(D);
          if (typeof Ye == "function" && Ye !== D.entries)
            for (var Je = Ye.call(D), ze; !(ze = Je.next()).done; )
              oc(ze.value) && kd(ze.value, ce);
        }
      }
    }
    function l0(D) {
      {
        var ce = D.type;
        if (ce == null || typeof ce == "string")
          return;
        var xe;
        if (typeof ce == "function")
          xe = ce.propTypes;
        else if (typeof ce == "object" && (ce.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ce.$$typeof === d))
          xe = ce.propTypes;
        else
          return;
        if (xe) {
          var Me = Z(ce);
          le(xe, D.props, "prop", Me, D);
        } else if (ce.PropTypes !== void 0 && !Xr) {
          Xr = !0;
          var Ye = Z(ce);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ye || "Unknown");
        }
        typeof ce.getDefaultProps == "function" && !ce.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function u0(D) {
      {
        for (var ce = Object.keys(D.props), xe = 0; xe < ce.length; xe++) {
          var Me = ce[xe];
          if (Me !== "children" && Me !== "key") {
            On(D), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), On(null);
            break;
          }
        }
        D.ref !== null && (On(D), b("Invalid attribute `ref` supplied to `React.Fragment`."), On(null));
      }
    }
    function Dd(D, ce, xe, Me, Ye, Je) {
      {
        var ze = Y(D);
        if (!ze) {
          var Ve = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kt = i0(Ye);
          kt ? Ve += kt : Ve += Td();
          var pt;
          D === null ? pt = "null" : we(D) ? pt = "array" : D !== void 0 && D.$$typeof === t ? (pt = "<" + (Z(D.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof D, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Ve);
        }
        var ht = Zr(D, ce, xe, Ye, Je);
        if (ht == null)
          return ht;
        if (ze) {
          var Yt = ce.children;
          if (Yt !== void 0)
            if (Me)
              if (we(Yt)) {
                for (var Qr = 0; Qr < Yt.length; Qr++)
                  Md(Yt[Qr], D);
                Object.freeze && Object.freeze(Yt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Md(Yt, D);
        }
        return D === r ? u0(ht) : l0(ht), ht;
      }
    }
    function d0(D, ce, xe) {
      return Dd(D, ce, xe, !0);
    }
    function f0(D, ce, xe) {
      return Dd(D, ce, xe, !1);
    }
    var p0 = f0, m0 = d0;
    Ho.Fragment = r, Ho.jsx = p0, Ho.jsxs = m0;
  }()), Ho;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = x0() : e.exports = y0();
})(f);
function T() {
  return T = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, T.apply(this, arguments);
}
function w0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Da(...e) {
  return (t) => e.forEach(
    (n) => w0(n, t)
  );
}
function Ee(...e) {
  return he(Da(...e), e);
}
const cn = /* @__PURE__ */ L((e, t) => {
  const { children: n, ...r } = e, o = Vt.toArray(n), a = o.find($0);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Vt.count(s) > 1 ? Vt.only(null) : /* @__PURE__ */ cr(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(el, T({}, r, {
      ref: t
    }), /* @__PURE__ */ cr(s) ? /* @__PURE__ */ Eo(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(el, T({}, r, {
    ref: t
  }), n);
});
cn.displayName = "Slot";
const el = /* @__PURE__ */ L((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ cr(n) ? /* @__PURE__ */ Eo(n, {
    ..._0(r, n.props),
    ref: t ? Da(t, n.ref) : n.ref
  }) : Vt.count(n) > 1 ? Vt.only(null) : null;
});
el.displayName = "SlotClone";
const Yl = ({ children: e }) => /* @__PURE__ */ w(qt, null, e);
function $0(e) {
  return /* @__PURE__ */ cr(e) && e.type === Yl;
}
function _0(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      a(...i), o(...i);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function Wp(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Wp(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Up() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Wp(e)) && (r && (r += " "), r += t);
  return r;
}
const Id = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Ld = Up, No = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return Ld(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const p = Id(u) || Id(d);
    return o[l][p];
  }), i = n && Object.entries(n).reduce((l, u) => {
    let [d, p] = u;
    return p === void 0 || (l[d] = p), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: p, ...m } = u;
    return Object.entries(m).every((h) => {
      let [v, g] = h;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...i
      }[v]) : {
        ...a,
        ...i
      }[v] === g;
    }) ? [
      ...l,
      d,
      p
    ] : l;
  }, []);
  return Ld(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function DD(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const RD = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, ac = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, jD = (e) => {
  const t = ac(e), n = ac(e, 0.1), r = ac(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, sc = {
  DIGITAL: [
    { label: "0412", value: "0412", image: "/images/marks/digitel.png" }
  ],
  MOVISTAR: [
    { label: "0414", value: "0414", image: "/images/marks/movistar.png" },
    { label: "0424", value: "0424", image: "/images/marks/movistar.png" }
  ],
  MOVILNET: [
    { label: "0416", value: "0416", image: "/images/marks/movilnet.png" },
    { label: "0426", value: "0426", image: "/images/marks/movilnet.png" }
  ]
}, AD = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), ID = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), LD = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), FD = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, ks = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, VD = () => [...sc.DIGITAL, ...sc.MOVILNET, ...sc.MOVISTAR], Yo = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function C0() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = zp(t)) && (r && (r += " "), r += n);
  return r;
}
function zp(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = zp(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Kl = "-";
function S0(e) {
  var t = N0(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(Kl);
    return c[0] === "" && c.length !== 1 && c.shift(), Bp(c, t) || E0(i);
  }
  function s(i, c) {
    var l = n[i] || [];
    return c && o[i] ? [].concat(l, o[i]) : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: s
  };
}
function Bp(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Bp(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(Kl);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Fd = /^\[(.+)\]$/;
function E0(e) {
  if (Fd.test(e)) {
    var t = Fd.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function N0(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = T0(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    tl(i, r, s, t);
  }), r;
}
function tl(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : Vd(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (P0(o)) {
        tl(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(s) {
      var i = s[0], c = s[1];
      tl(c, Vd(t, i), n, r);
    });
  });
}
function Vd(e, t) {
  var n = e;
  return t.split(Kl).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function P0(e) {
  return e.isThemeGetter;
}
function T0(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], a = o.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(i) {
        var c = i[0], l = i[1];
        return [t + c, l];
      })) : s;
    });
    return [r, a];
  }) : e;
}
function O0(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(a, s) {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(s) {
      var i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = r.get(s)) !== void 0)
        return o(s, i), i;
    },
    set: function(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    }
  };
}
var Hp = "!";
function k0(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    for (var i = [], c = 0, l = 0, u, d = 0; d < s.length; d++) {
      var p = s[d];
      if (c === 0) {
        if (p === r && (n || s.slice(d, d + o) === t)) {
          i.push(s.slice(l, d)), l = d + o;
          continue;
        }
        if (p === "/") {
          u = d;
          continue;
        }
      }
      p === "[" ? c++ : p === "]" && c--;
    }
    var m = i.length === 0 ? s : s.substring(l), h = m.startsWith(Hp), v = h ? m.substring(1) : m, g = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function M0(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function D0(e) {
  return {
    cache: O0(e.cacheSize),
    splitModifiers: k0(e),
    ...S0(e)
  };
}
var R0 = /\s+/;
function j0(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(R0).map(function(s) {
    var i = n(s), c = i.modifiers, l = i.hasImportantModifier, u = i.baseClassName, d = i.maybePostfixModifierPosition, p = r(d ? u.substring(0, d) : u), m = Boolean(d);
    if (!p) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (p = r(u), !p)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      m = !1;
    }
    var h = M0(c).join(":"), v = l ? h + Hp : h;
    return {
      isTailwindClass: !0,
      modifierId: v,
      classGroupId: p,
      originalClassName: s,
      hasPostfixModifier: m
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var i = s.modifierId, c = s.classGroupId, l = s.hasPostfixModifier, u = i + c;
    return a.has(u) ? !1 : (a.add(u), o(c, l).forEach(function(d) {
      return a.add(i + d);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function A0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var u = t[0], d = t.slice(1), p = d.reduce(function(m, h) {
      return h(m);
    }, u());
    return r = D0(p), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = j0(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(C0.apply(null, arguments));
  };
}
function rt(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Yp = /^\[(?:([a-z-]+):)?(.+)\]$/i, I0 = /^\d+\/\d+$/, L0 = /* @__PURE__ */ new Set(["px", "full", "screen"]), F0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, V0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, W0 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Qt(e) {
  return Pr(e) || L0.has(e) || I0.test(e) || nl(e);
}
function nl(e) {
  return Vr(e, "length", K0);
}
function U0(e) {
  return Vr(e, "size", Kp);
}
function z0(e) {
  return Vr(e, "position", Kp);
}
function B0(e) {
  return Vr(e, "url", G0);
}
function rs(e) {
  return Vr(e, "number", Pr);
}
function Pr(e) {
  return !Number.isNaN(Number(e));
}
function H0(e) {
  return e.endsWith("%") && Pr(e.slice(0, -1));
}
function Ko(e) {
  return Wd(e) || Vr(e, "number", Wd);
}
function We(e) {
  return Yp.test(e);
}
function Go() {
  return !0;
}
function er(e) {
  return F0.test(e);
}
function Y0(e) {
  return Vr(e, "", q0);
}
function Vr(e, t, n) {
  var r = Yp.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function K0(e) {
  return V0.test(e);
}
function Kp() {
  return !1;
}
function G0(e) {
  return e.startsWith("url(");
}
function Wd(e) {
  return Number.isInteger(Number(e));
}
function q0(e) {
  return W0.test(e);
}
function Z0() {
  var e = rt("colors"), t = rt("spacing"), n = rt("blur"), r = rt("brightness"), o = rt("borderColor"), a = rt("borderRadius"), s = rt("borderSpacing"), i = rt("borderWidth"), c = rt("contrast"), l = rt("grayscale"), u = rt("hueRotate"), d = rt("invert"), p = rt("gap"), m = rt("gradientColorStops"), h = rt("gradientColorStopPositions"), v = rt("inset"), g = rt("margin"), x = rt("opacity"), b = rt("padding"), y = rt("saturate"), _ = rt("scale"), $ = rt("sepia"), N = rt("skew"), k = rt("space"), S = rt("translate"), P = function() {
    return ["auto", "contain", "none"];
  }, Y = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, U = function() {
    return ["auto", We, t];
  }, B = function() {
    return [We, t];
  }, Z = function() {
    return ["", Qt];
  }, F = function() {
    return ["auto", Pr, We];
  }, A = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, I = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, W = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, G = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R = function() {
    return ["", "0", We];
  }, M = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, K = function() {
    return [Pr, rs];
  }, X = function() {
    return [Pr, We];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Go],
      spacing: [Qt],
      blur: ["none", "", er, We],
      brightness: K(),
      borderColor: [e],
      borderRadius: ["none", "", "full", er, We],
      borderSpacing: B(),
      borderWidth: Z(),
      contrast: K(),
      grayscale: R(),
      hueRotate: X(),
      invert: R(),
      gap: B(),
      gradientColorStops: [e],
      gradientColorStopPositions: [H0, nl],
      inset: U(),
      margin: U(),
      opacity: K(),
      padding: B(),
      saturate: K(),
      scale: K(),
      sepia: R(),
      skew: X(),
      space: B(),
      translate: B()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", We]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [er]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": M()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": M()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(A(), [We])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Y()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Y()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Y()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ko]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: U()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", We]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: R()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: R()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ko]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Go]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ko]
        }, We]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Go]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ko]
        }, We]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", We]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", We]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(G())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(G(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(G(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [k]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [k]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", We, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", We, Qt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [er]
        }, er, We]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [We, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", We, Qt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [We, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", er, nl]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", rs]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Go]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", We]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Pr, rs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", We, Qt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", We]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", We]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(I(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Qt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", We, Qt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: B()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", We]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", We]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(A(), [z0])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", U0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, B0]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(I(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: I()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(I())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [We, Qt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Qt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Z()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Qt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", er, Y0]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Go]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": W()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", er, We]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [$]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [$]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", We]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: X()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", We]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: X()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", We]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ko, We]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [S]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [S]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", We]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", We]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": B()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": B()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": B()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": B()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": B()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": B()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": B()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": B()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": B()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": B()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": B()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": B()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": B()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": B()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": B()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": B()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": B()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": B()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", We]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Qt, rs]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var X0 = /* @__PURE__ */ A0(Z0);
function j(...e) {
  return X0(Up(e));
}
const Gl = ({ className: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: j(`spinner h-4 w-4 ${e}`) }), oa = No(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Fe = C.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, isLoading: o, children: a, ...s }, i) => {
    const c = r ? cn : "button";
    return /* @__PURE__ */ f.exports.jsx(
      c,
      {
        className: j(oa({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
        children: o ? /* @__PURE__ */ f.exports.jsx(Gl, {}) : a
      }
    );
  }
);
Fe.displayName = "Button";
var Q0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const J0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ey = (e, t) => {
  const n = L(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => w(
      "svg",
      {
        ref: l,
        ...Q0,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${J0(e)}`,
        ...c
      },
      [
        ...t.map(([u, d]) => w(u, d)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
var ot = ey;
const ty = ot("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]), ny = ot("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]), ln = ot("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), aa = ot("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), ql = ot("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), Wr = ot("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Ud = ot("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), rl = ot("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), vi = ot("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), ry = ot("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]), Ms = ot("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]), os = ot("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]), as = ot("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), ic = ot("ImageOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
]), Zl = ot("ImagePlus", [
  [
    "path",
    {
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
      key: "31hg93"
    }
  ],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]), Gp = ot("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), oy = ot("MoreHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]), ay = ot("PanelLeftClose", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]), sy = ot("PanelLeftOpen", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]), qp = ot("PanelLeft", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }
  ],
  ["line", { x1: "9", x2: "9", y1: "3", y2: "21", key: "13tij5" }]
]), Zp = ot("PenSquare", [
  [
    "path",
    {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1qinfi"
    }
  ],
  [
    "path",
    { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }
  ]
]), Ds = ot("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Xp = ot("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), iy = ot("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), gi = ot("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function cc(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function qo(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      var i = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[c] || e.values[i];
    }
    var l = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[l];
  };
}
function Zo(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? ly(i, function(d) {
      return d.test(s);
    }) : cy(i, function(d) {
      return d.test(s);
    }), l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
    var u = t.slice(s.length);
    return {
      value: l,
      rest: u
    };
  };
}
function cy(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function ly(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function uy(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var o = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    var i = t.slice(o.length);
    return {
      value: s,
      rest: i
    };
  };
}
function vo(e) {
  return vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vo(e);
}
function xt(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Te(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Ie(e) {
  Te(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || vo(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Gt(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = xt(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function yn(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = xt(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function dy(e, t) {
  Te(2, arguments);
  var n = Ie(e).getTime(), r = xt(t);
  return new Date(n + r);
}
var fy = {};
function gr() {
  return fy;
}
function wn(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = gr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ie(e), m = p.getDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setDate(p.getDate() - h), p.setHours(0, 0, 0, 0), p;
}
function Dr(e) {
  return Te(1, arguments), wn(e, {
    weekStartsOn: 1
  });
}
function py(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Dr(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Dr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function my(e) {
  Te(1, arguments);
  var t = py(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Dr(n);
  return r;
}
function sa(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function go(e) {
  Te(1, arguments);
  var t = Ie(e);
  return t.setHours(0, 0, 0, 0), t;
}
var hy = 864e5;
function An(e, t) {
  Te(2, arguments);
  var n = go(e), r = go(t), o = n.getTime() - sa(n), a = r.getTime() - sa(r);
  return Math.round((o - a) / hy);
}
function ol(e, t) {
  Te(2, arguments);
  var n = xt(t), r = n * 7;
  return Gt(e, r);
}
function vy(e, t) {
  Te(2, arguments);
  var n = xt(t);
  return yn(e, n * 12);
}
function gy(e) {
  Te(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (vo(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Ie(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function by(e) {
  Te(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (vo(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Ie(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
function Ft(e, t) {
  Te(2, arguments);
  var n = go(e), r = go(t);
  return n.getTime() === r.getTime();
}
function Xl(e) {
  return Te(1, arguments), e instanceof Date || vo(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function xy(e) {
  if (Te(1, arguments), !Xl(e) && typeof e != "number")
    return !1;
  var t = Ie(e);
  return !isNaN(Number(t));
}
function ia(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var yy = 6048e5;
function wy(e, t, n) {
  Te(2, arguments);
  var r = wn(e, n), o = wn(t, n), a = r.getTime() - sa(r), s = o.getTime() - sa(o);
  return Math.round((a - s) / yy);
}
function Ql(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Wt(e) {
  Te(1, arguments);
  var t = Ie(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function $y(e) {
  Te(1, arguments);
  var t = Ie(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Jl(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = gr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ie(e), m = p.getDay(), h = (m < d ? -7 : 0) + 6 - (m - d);
  return p.setDate(p.getDate() + h), p.setHours(23, 59, 59, 999), p;
}
function Qp(e) {
  return Te(1, arguments), Jl(e, {
    weekStartsOn: 1
  });
}
function _y(e, t) {
  Te(2, arguments);
  var n = xt(t);
  return dy(e, -n);
}
var Cy = 864e5;
function Sy(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / Cy) + 1;
}
function Rs(e) {
  Te(1, arguments);
  var t = 1, n = Ie(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Jp(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = Rs(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = Rs(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Ey(e) {
  Te(1, arguments);
  var t = Jp(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Rs(n);
  return r;
}
var Ny = 6048e5;
function Py(e) {
  Te(1, arguments);
  var t = Ie(e), n = Rs(t).getTime() - Ey(t).getTime();
  return Math.round(n / Ny) + 1;
}
function js(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = gr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ie(e), m = p.getUTCDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setUTCDate(p.getUTCDate() - h), p.setUTCHours(0, 0, 0, 0), p;
}
function em(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = Ie(e), d = u.getUTCFullYear(), p = gr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(d + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var v = js(h, t), g = new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var x = js(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= x.getTime() ? d : d - 1;
}
function Ty(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = gr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = em(e, t), m = new Date(0);
  m.setUTCFullYear(p, 0, d), m.setUTCHours(0, 0, 0, 0);
  var h = js(m, t);
  return h;
}
var Oy = 6048e5;
function ky(e, t) {
  Te(1, arguments);
  var n = Ie(e), r = js(n, t).getTime() - Ty(n, t).getTime();
  return Math.round(r / Oy) + 1;
}
function qe(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var My = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return qe(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : qe(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return qe(t.getUTCDate(), n.length);
  },
  // AM or PM
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, n) {
    return qe(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return qe(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return qe(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return qe(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return qe(a, n.length);
  }
};
const tr = My;
var Jr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Dy = {
  // Era
  G: function(t, n, r) {
    var o = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(o, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, r) {
    if (n === "yo") {
      var o = t.getUTCFullYear(), a = o > 0 ? o : 1 - o;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return tr.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = em(t, o), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var i = s % 100;
      return qe(i, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : qe(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = Jp(t);
    return qe(r, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return qe(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return qe(o, 2);
      case "Qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(o);
      case "qq":
        return qe(o, 2);
      case "qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return tr.M(t, n);
      case "Mo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(o + 1);
      case "LL":
        return qe(o + 1, 2);
      case "Lo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, r, o) {
    var a = ky(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : qe(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = Py(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : qe(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : tr.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = Sy(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : qe(o, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var o = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, r, o) {
    var a = t.getUTCDay(), s = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(s);
      case "ee":
        return qe(s, 2);
      case "eo":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, r, o) {
    var a = t.getUTCDay(), s = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(s);
      case "cc":
        return qe(s, n.length);
      case "co":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, r) {
    var o = t.getUTCDay(), a = o === 0 ? 7 : o;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return qe(a, n.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, r) {
    var o = t.getUTCHours(), a = o / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, r) {
    var o = t.getUTCHours(), a;
    switch (o === 12 ? a = Jr.noon : o === 0 ? a = Jr.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, r) {
    var o = t.getUTCHours(), a;
    switch (o >= 17 ? a = Jr.evening : o >= 12 ? a = Jr.afternoon : o >= 4 ? a = Jr.morning : a = Jr.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, r) {
    if (n === "ho") {
      var o = t.getUTCHours() % 12;
      return o === 0 && (o = 12), r.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return tr.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : tr.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : qe(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : qe(o, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : tr.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : tr.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return tr.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return Bd(s);
      case "XXXX":
      case "XX":
        return Er(s);
      case "XXXXX":
      case "XXX":
      default:
        return Er(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return Bd(s);
      case "xxxx":
      case "xx":
        return Er(s);
      case "xxxxx":
      case "xxx":
      default:
        return Er(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + zd(s, ":");
      case "OOOO":
      default:
        return "GMT" + Er(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + zd(s, ":");
      case "zzzz":
      default:
        return "GMT" + Er(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, s = Math.floor(a.getTime() / 1e3);
    return qe(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTime();
    return qe(s, n.length);
  }
};
function zd(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + qe(a, 2);
}
function Bd(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + qe(Math.abs(e) / 60, 2);
  }
  return Er(e, t);
}
function Er(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = qe(Math.floor(o / 60), 2), s = qe(o % 60, 2);
  return r + a + n + s;
}
const Ry = Dy;
var Hd = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, tm = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, jy = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return Hd(t, n);
  var s;
  switch (o) {
    case "P":
      s = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      s = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      s = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      s = n.dateTime({
        width: "full"
      });
      break;
  }
  return s.replace("{{date}}", Hd(o, n)).replace("{{time}}", tm(a, n));
}, Ay = {
  p: tm,
  P: jy
};
const Iy = Ay;
var Ly = ["D", "DD"], Fy = ["YY", "YYYY"];
function Vy(e) {
  return Ly.indexOf(e) !== -1;
}
function Wy(e) {
  return Fy.indexOf(e) !== -1;
}
function Yd(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Uy = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, zy = function(t, n, r) {
  var o, a = Uy[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const By = zy;
var Hy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Yy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ky = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Gy = {
  date: cc({
    formats: Hy,
    defaultWidth: "full"
  }),
  time: cc({
    formats: Yy,
    defaultWidth: "full"
  }),
  dateTime: cc({
    formats: Ky,
    defaultWidth: "full"
  })
};
const qy = Gy;
var Zy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Xy = function(t, n, r, o) {
  return Zy[t];
};
const Qy = Xy;
var Jy = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, e1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, t1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, n1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, r1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, o1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, a1 = function(t, n) {
  var r = Number(t), o = r % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, s1 = {
  ordinalNumber: a1,
  era: qo({
    values: Jy,
    defaultWidth: "wide"
  }),
  quarter: qo({
    values: e1,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: qo({
    values: t1,
    defaultWidth: "wide"
  }),
  day: qo({
    values: n1,
    defaultWidth: "wide"
  }),
  dayPeriod: qo({
    values: r1,
    defaultWidth: "wide",
    formattingValues: o1,
    defaultFormattingWidth: "wide"
  })
};
const i1 = s1;
var c1 = /^(\d+)(th|st|nd|rd)?/i, l1 = /\d+/i, u1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, d1 = {
  any: [/^b/i, /^(a|c)/i]
}, f1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, p1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, m1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, h1 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, v1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, g1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, b1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, x1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, y1 = {
  ordinalNumber: uy({
    matchPattern: c1,
    parsePattern: l1,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Zo({
    matchPatterns: u1,
    defaultMatchWidth: "wide",
    parsePatterns: d1,
    defaultParseWidth: "any"
  }),
  quarter: Zo({
    matchPatterns: f1,
    defaultMatchWidth: "wide",
    parsePatterns: p1,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Zo({
    matchPatterns: m1,
    defaultMatchWidth: "wide",
    parsePatterns: h1,
    defaultParseWidth: "any"
  }),
  day: Zo({
    matchPatterns: v1,
    defaultMatchWidth: "wide",
    parsePatterns: g1,
    defaultParseWidth: "any"
  }),
  dayPeriod: Zo({
    matchPatterns: b1,
    defaultMatchWidth: "any",
    parsePatterns: x1,
    defaultParseWidth: "any"
  })
};
const w1 = y1;
var $1 = {
  code: "en-US",
  formatDistance: By,
  formatLong: qy,
  formatRelative: Qy,
  localize: i1,
  match: w1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const nm = $1;
var _1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, C1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, S1 = /^'([^]*?)'?$/, E1 = /''/g, N1 = /[a-zA-Z]/;
function Ur(e, t, n) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g, x, b, y, _;
  Te(2, arguments);
  var $ = String(t), N = gr(), k = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : N.locale) !== null && r !== void 0 ? r : nm, S = xt((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : N.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = N.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(S >= 1 && S <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var P = xt((m = (h = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (x = n.locale) === null || x === void 0 || (b = x.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && v !== void 0 ? v : N.weekStartsOn) !== null && h !== void 0 ? h : (y = N.locale) === null || y === void 0 || (_ = y.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(P >= 0 && P <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!k.localize)
    throw new RangeError("locale must contain localize property");
  if (!k.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Y = Ie(e);
  if (!xy(Y))
    throw new RangeError("Invalid time value");
  var U = sa(Y), B = _y(Y, U), Z = {
    firstWeekContainsDate: S,
    weekStartsOn: P,
    locale: k,
    _originalDate: Y
  }, F = $.match(C1).map(function(A) {
    var I = A[0];
    if (I === "p" || I === "P") {
      var W = Iy[I];
      return W(A, k.formatLong);
    }
    return A;
  }).join("").match(_1).map(function(A) {
    if (A === "''")
      return "'";
    var I = A[0];
    if (I === "'")
      return P1(A);
    var W = Ry[I];
    if (W)
      return !(n != null && n.useAdditionalWeekYearTokens) && Wy(A) && Yd(A, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Vy(A) && Yd(A, t, String(e)), W(B, A, k.localize, Z);
    if (I.match(N1))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + I + "`");
    return A;
  }).join("");
  return F;
}
function P1(e) {
  var t = e.match(S1);
  return t ? t[1].replace(E1, "'") : e;
}
function T1(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var O1 = 6048e5;
function k1(e) {
  Te(1, arguments);
  var t = Ie(e), n = Dr(t).getTime() - my(t).getTime();
  return Math.round(n / O1) + 1;
}
function M1(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getTime();
  return n;
}
function D1(e) {
  return Te(1, arguments), Math.floor(M1(e) / 1e3);
}
function R1(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = Ie(e), d = u.getFullYear(), p = gr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setFullYear(d + 1, 0, m), h.setHours(0, 0, 0, 0);
  var v = wn(h, t), g = new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var x = wn(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= x.getTime() ? d : d - 1;
}
function j1(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = gr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = R1(e, t), m = new Date(0);
  m.setFullYear(p, 0, d), m.setHours(0, 0, 0, 0);
  var h = wn(m, t);
  return h;
}
var A1 = 6048e5;
function I1(e, t) {
  Te(1, arguments);
  var n = Ie(e), r = wn(n, t).getTime() - j1(n, t).getTime();
  return Math.round(r / A1) + 1;
}
function L1(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function F1(e, t) {
  return Te(1, arguments), wy(L1(e), Wt(e), t) + 1;
}
function rm(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getTime() > r.getTime();
}
function om(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getTime() < r.getTime();
}
function eu(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function V1(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getFullYear() === r.getFullYear();
}
function Kd(e, t) {
  Te(2, arguments);
  var n = xt(t);
  return Gt(e, -n);
}
function lc(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = xt(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = T1(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function Gd(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = xt(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
var Oe = function() {
  return Oe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Oe.apply(this, arguments);
};
function W1(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function am(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Ra(e) {
  return e.mode === "multiple";
}
function ja(e) {
  return e.mode === "range";
}
function bi(e) {
  return e.mode === "single";
}
var U1 = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function z1(e, t) {
  return Ur(e, "LLLL y", t);
}
function B1(e, t) {
  return Ur(e, "d", t);
}
function H1(e, t) {
  return Ur(e, "LLLL", t);
}
function Y1(e) {
  return "".concat(e);
}
function K1(e, t) {
  return Ur(e, "cccccc", t);
}
function G1(e, t) {
  return Ur(e, "yyyy", t);
}
var q1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: z1,
  formatDay: B1,
  formatMonthCaption: H1,
  formatWeekNumber: Y1,
  formatWeekdayName: K1,
  formatYearCaption: G1
}), Z1 = function(e, t, n) {
  return Ur(e, "do MMMM (EEEE)", n);
}, X1 = function() {
  return "Month: ";
}, Q1 = function() {
  return "Go to next month";
}, J1 = function() {
  return "Go to previous month";
}, ew = function(e, t) {
  return Ur(e, "cccc", t);
}, tw = function(e) {
  return "Week n. ".concat(e);
}, nw = function() {
  return "Year: ";
}, rw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Z1,
  labelMonthDropdown: X1,
  labelNext: Q1,
  labelPrevious: J1,
  labelWeekNumber: tw,
  labelWeekday: ew,
  labelYearDropdown: nw
});
function ow() {
  var e = "buttons", t = U1, n = nm, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: q1,
    labels: rw,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function aw(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Wt(r) : t && (a = new Date(t, 0, 1)), o ? s = Ql(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? go(a) : void 0,
    toDate: s ? go(s) : void 0
  };
}
var sm = bt(void 0);
function sw(e) {
  var t, n = e.initialProps, r = ow(), o = aw(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (bi(n) || Ra(n) || ja(n)) && (c = n.onSelect);
  var l = Oe(Oe(Oe({}, r), n), { captionLayout: i, classNames: Oe(Oe({}, r.classNames), n.classNames), components: Oe({}, n.components), formatters: Oe(Oe({}, r.formatters), n.formatters), fromDate: a, labels: Oe(Oe({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Oe(Oe({}, r.modifiers), n.modifiers), modifiersClassNames: Oe(Oe({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Oe(Oe({}, r.styles), n.styles), toDate: s });
  return E.createElement(sm.Provider, { value: l }, e.children);
}
function at() {
  var e = Qe(sm);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function im(e) {
  var t = at(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return E.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function iw(e) {
  return E.createElement(
    "svg",
    Oe({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    E.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function cm(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = at(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : iw;
  return E.createElement(
    "div",
    { className: i, style: c },
    E.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    E.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    E.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      s,
      E.createElement(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function cw(e) {
  var t, n = at(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return E.createElement(E.Fragment, null);
  if (!o)
    return E.createElement(E.Fragment, null);
  var d = [];
  if (V1(r, o))
    for (var p = Wt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      d.push(lc(p, m));
  else
    for (var p = Wt(new Date()), m = 0; m <= 11; m++)
      d.push(lc(p, m));
  var h = function(g) {
    var x = Number(g.target.value), b = lc(Wt(e.displayMonth), x);
    e.onChange(b);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : cm;
  return E.createElement(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return E.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function lw(e) {
  var t, n = e.displayMonth, r = at(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, p = [];
  if (!o)
    return E.createElement(E.Fragment, null);
  if (!a)
    return E.createElement(E.Fragment, null);
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    p.push(Gd($y(new Date()), v));
  var g = function(b) {
    var y = Gd(Wt(n), Number(b.target.value));
    e.onChange(y);
  }, x = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : cm;
  return E.createElement(x, { name: "years", "aria-label": d(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, p.map(function(b) {
    return E.createElement("option", { key: b.getFullYear(), value: b.getFullYear() }, u(b, { locale: s }));
  }));
}
function uw(e, t) {
  var n = J(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function dw(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && ia(a, o) < 0) {
    var l = -1 * (c - 1);
    o = yn(a, l);
  }
  return s && ia(o, s) < 0 && (o = s), Wt(o);
}
function fw() {
  var e = at(), t = dw(e), n = uw(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Wt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function pw(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Wt(e), a = Wt(yn(o, r)), s = ia(a, o), i = [], c = 0; c < s; c++) {
    var l = yn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function mw(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Wt(e);
    if (!n)
      return yn(i, s);
    var c = ia(n, e);
    if (!(c < a))
      return yn(i, s);
  }
}
function hw(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Wt(e);
    if (!n)
      return yn(i, -s);
    var c = ia(i, n);
    if (!(c <= 0))
      return yn(i, -s);
  }
}
var lm = bt(void 0);
function vw(e) {
  var t = at(), n = fw(), r = n[0], o = n[1], a = pw(r, t), s = mw(r, t), i = hw(r, t), c = function(d) {
    return a.some(function(p) {
      return eu(d, p);
    });
  }, l = function(d, p) {
    c(d) || (p && om(d, p) ? o(yn(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return E.createElement(lm.Provider, { value: u }, e.children);
}
function Aa() {
  var e = Qe(lm);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function qd(e) {
  var t, n = at(), r = n.classNames, o = n.styles, a = n.components, s = Aa().goToMonth, i = function(u) {
    s(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : im, l = E.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return E.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    E.createElement("div", { className: r.vhidden }, l),
    E.createElement(cw, { onChange: i, displayMonth: e.displayMonth }),
    E.createElement(lw, { onChange: i, displayMonth: e.displayMonth })
  );
}
function gw(e) {
  return E.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    E.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function bw(e) {
  return E.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    E.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var As = L(function(e, t) {
  var n = at(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Oe(Oe({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), E.createElement("button", Oe({}, e, { ref: t, type: "button", className: s, style: i }));
});
function xw(e) {
  var t, n, r = at(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return E.createElement(E.Fragment, null);
  var p = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : bw, x = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : gw;
  return E.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && E.createElement(As, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? E.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : E.createElement(x, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && E.createElement(As, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? E.createElement(x, { className: s.nav_icon, style: i.nav_icon }) : E.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function Zd(e) {
  var t = at().numberOfMonths, n = Aa(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return eu(e.displayMonth, h);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return E.createElement(xw, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function yw(e) {
  var t, n = at(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : im, l;
  return o ? l = E.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = E.createElement(qd, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = E.createElement(
    E.Fragment,
    null,
    E.createElement(qd, { displayMonth: e.displayMonth, id: e.id }),
    E.createElement(Zd, { displayMonth: e.displayMonth, id: e.id })
  ) : l = E.createElement(
    E.Fragment,
    null,
    E.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    E.createElement(Zd, { displayMonth: e.displayMonth, id: e.id })
  ), E.createElement("div", { className: r.caption, style: a.caption }, l);
}
function ww(e) {
  var t = at(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? E.createElement(
    "tfoot",
    { className: o, style: r.tfoot },
    E.createElement(
      "tr",
      null,
      E.createElement("td", { colSpan: 8 }, n)
    )
  ) : E.createElement(E.Fragment, null);
}
function $w(e, t, n) {
  for (var r = n ? Dr(new Date()) : wn(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Gt(r, a);
    o.push(s);
  }
  return o;
}
function _w() {
  var e = at(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = $w(o, a, s);
  return E.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && E.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return E.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, i(u, { locale: o }));
    })
  );
}
function Cw() {
  var e, t = at(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : _w;
  return E.createElement(
    "thead",
    { style: r.head, className: n.head },
    E.createElement(a, null)
  );
}
function Sw(e) {
  var t = at(), n = t.locale, r = t.formatters.formatDay;
  return E.createElement(E.Fragment, null, r(e.date, { locale: n }));
}
var tu = bt(void 0);
function Ew(e) {
  if (!Ra(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return E.createElement(tu.Provider, { value: t }, e.children);
  }
  return E.createElement(Nw, { initialProps: e.initialProps, children: e.children });
}
function Nw(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, d);
    var h = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? am([], r, !0) : [];
        if (u.selected) {
          var x = g.findIndex(function(b) {
            return Ft(l, b);
          });
          g.splice(x, 1);
        } else
          g.push(l);
        (m = t.onSelect) === null || m === void 0 || m.call(t, g, l, u, d);
      }
    }
  }, i = {
    disabled: []
  };
  r && i.disabled.push(function(l) {
    var u = a && r.length > a - 1, d = r.some(function(p) {
      return Ft(p, l);
    });
    return Boolean(u && !d);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return E.createElement(tu.Provider, { value: c }, n);
}
function nu() {
  var e = Qe(tu);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function Pw(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Ft(r, e))
    return { from: r, to: e };
  if (!o && om(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Ft(o, e) && Ft(r, e))) {
    if (Ft(o, e))
      return { from: o, to: void 0 };
    if (!Ft(r, e))
      return rm(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var ru = bt(void 0);
function Tw(e) {
  if (!ja(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return E.createElement(ru.Provider, { value: t }, e.children);
  }
  return E.createElement(Ow, { initialProps: e.initialProps, children: e.children });
}
function Ow(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, h, v) {
    var g, x;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var b = Pw(m, r);
    (x = t.onSelect) === null || x === void 0 || x.call(t, b, m, h, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (u.range_start = [a], s ? (u.range_end = [s], Ft(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]), i && (a && !s && u.disabled.push({
    after: Kd(a, i - 1),
    before: Gt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: Gt(a, i - 1)
  })), c && (a && !s && (u.disabled.push({
    before: Gt(a, -c + 1)
  }), u.disabled.push({
    after: Gt(a, c - 1)
  })), a && s)) {
    var d = An(s, a) + 1, p = c - d;
    u.disabled.push({
      before: Kd(a, p)
    }), u.disabled.push({
      after: Gt(s, p)
    });
  }
  return E.createElement(ru.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function ou() {
  var e = Qe(ru);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function _s(e) {
  return Array.isArray(e) ? am([], e, !0) : e !== void 0 ? [e] : [];
}
function kw(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = _s(o);
  }), t;
}
var un;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(un || (un = {}));
var Mw = un.Selected, Mn = un.Disabled, Dw = un.Hidden, Rw = un.Today, uc = un.RangeEnd, dc = un.RangeMiddle, fc = un.RangeStart, jw = un.Outside;
function Aw(e, t, n) {
  var r, o = (r = {}, r[Mw] = _s(e.selected), r[Mn] = _s(e.disabled), r[Dw] = _s(e.hidden), r[Rw] = [e.today], r[uc] = [], r[dc] = [], r[fc] = [], r[jw] = [], r);
  return e.fromDate && o[Mn].push({ before: e.fromDate }), e.toDate && o[Mn].push({ after: e.toDate }), Ra(e) ? o[Mn] = o[Mn].concat(t.modifiers[Mn]) : ja(e) && (o[Mn] = o[Mn].concat(n.modifiers[Mn]), o[fc] = n.modifiers[fc], o[dc] = n.modifiers[dc], o[uc] = n.modifiers[uc]), o;
}
var um = bt(void 0);
function Iw(e) {
  var t = at(), n = nu(), r = ou(), o = Aw(t, n, r), a = kw(t.modifiers), s = Oe(Oe({}, o), a);
  return E.createElement(um.Provider, { value: s }, e.children);
}
function dm() {
  var e = Qe(um);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Lw(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function Fw(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function Vw(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function Ww(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function Uw(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function zw(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Ft(r, e))
    return !0;
  if (!o)
    return !1;
  var a = An(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = An(e, r) >= 0 && An(o, e) >= 0;
  return s;
}
function Bw(e) {
  return Xl(e);
}
function Hw(e) {
  return Array.isArray(e) && e.every(Xl);
}
function Yw(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Bw(n))
      return Ft(e, n);
    if (Hw(n))
      return n.includes(e);
    if (Fw(n))
      return zw(e, n);
    if (Uw(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Lw(n)) {
      var r = An(n.before, e), o = An(n.after, e), a = r > 0, s = o < 0, i = rm(n.before, n.after);
      return i ? s && a : a || s;
    }
    return Vw(n) ? An(e, n.after) > 0 : Ww(n) ? An(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function au(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return Yw(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !eu(e, n) && (o.outside = !0), o;
}
function Kw(e, t) {
  for (var n = Wt(e[0]), r = Ql(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = au(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = Gt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = Gt(s, 1);
  }
  return a || o;
}
var Gw = 365;
function fm(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, p = {
    day: Gt,
    week: ol,
    month: yn,
    year: vy,
    startOfWeek: function(g) {
      return o.ISOWeek ? Dr(g) : wn(g, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Qp(g) : Jl(g, { locale: d, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = gy([l, m]) : r === "after" && u && (m = by([u, m]));
  var h = !0;
  if (a) {
    var v = au(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > Gw ? i.lastFocused : fm(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Oe(Oe({}, i), { count: i.count + 1 })
  });
}
var pm = bt(void 0);
function qw(e) {
  var t = Aa(), n = dm(), r = J(), o = r[0], a = r[1], s = J(), i = s[0], c = s[1], l = Kw(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, d = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = at(), h = function(g, x) {
    if (o) {
      var b = fm(o, {
        moveBy: g,
        direction: x,
        context: m,
        modifiers: n
      });
      Ft(o, b) || (t.goToDate(b, o), p(b));
    }
  }, v = {
    focusedDay: o,
    focusTarget: u,
    blur: d,
    focus: p,
    focusDayAfter: function() {
      return h("day", "after");
    },
    focusDayBefore: function() {
      return h("day", "before");
    },
    focusWeekAfter: function() {
      return h("week", "after");
    },
    focusWeekBefore: function() {
      return h("week", "before");
    },
    focusMonthBefore: function() {
      return h("month", "before");
    },
    focusMonthAfter: function() {
      return h("month", "after");
    },
    focusYearBefore: function() {
      return h("year", "before");
    },
    focusYearAfter: function() {
      return h("year", "after");
    },
    focusStartOfWeek: function() {
      return h("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return h("endOfWeek", "after");
    }
  };
  return E.createElement(pm.Provider, { value: v }, e.children);
}
function su() {
  var e = Qe(pm);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Zw(e, t) {
  var n = dm(), r = au(e, n, t);
  return r;
}
var iu = bt(void 0);
function Xw(e) {
  if (!bi(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return E.createElement(iu.Provider, { value: t }, e.children);
  }
  return E.createElement(Qw, { initialProps: e.initialProps, children: e.children });
}
function Qw(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, i) {
    var c, l, u;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, s, i), s.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, s, i);
      return;
    }
    (u = t.onSelect) === null || u === void 0 || u.call(t, a, a, s, i);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return E.createElement(iu.Provider, { value: o }, n);
}
function mm() {
  var e = Qe(iu);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Jw(e, t) {
  var n = at(), r = mm(), o = nu(), a = ou(), s = su(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, p = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, x = s.focusStartOfWeek, b = s.focusEndOfWeek, y = function(W) {
    var G, R, M, K;
    bi(n) ? (G = r.onDayClick) === null || G === void 0 || G.call(r, e, t, W) : Ra(n) ? (R = o.onDayClick) === null || R === void 0 || R.call(o, e, t, W) : ja(n) ? (M = a.onDayClick) === null || M === void 0 || M.call(a, e, t, W) : (K = n.onDayClick) === null || K === void 0 || K.call(n, e, t, W);
  }, _ = function(W) {
    var G;
    p(e), (G = n.onDayFocus) === null || G === void 0 || G.call(n, e, t, W);
  }, $ = function(W) {
    var G;
    d(), (G = n.onDayBlur) === null || G === void 0 || G.call(n, e, t, W);
  }, N = function(W) {
    var G;
    (G = n.onDayMouseEnter) === null || G === void 0 || G.call(n, e, t, W);
  }, k = function(W) {
    var G;
    (G = n.onDayMouseLeave) === null || G === void 0 || G.call(n, e, t, W);
  }, S = function(W) {
    var G;
    (G = n.onDayPointerEnter) === null || G === void 0 || G.call(n, e, t, W);
  }, P = function(W) {
    var G;
    (G = n.onDayPointerLeave) === null || G === void 0 || G.call(n, e, t, W);
  }, Y = function(W) {
    var G;
    (G = n.onDayTouchCancel) === null || G === void 0 || G.call(n, e, t, W);
  }, U = function(W) {
    var G;
    (G = n.onDayTouchEnd) === null || G === void 0 || G.call(n, e, t, W);
  }, B = function(W) {
    var G;
    (G = n.onDayTouchMove) === null || G === void 0 || G.call(n, e, t, W);
  }, Z = function(W) {
    var G;
    (G = n.onDayTouchStart) === null || G === void 0 || G.call(n, e, t, W);
  }, F = function(W) {
    var G;
    (G = n.onDayKeyUp) === null || G === void 0 || G.call(n, e, t, W);
  }, A = function(W) {
    var G;
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), W.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        W.preventDefault(), W.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        W.preventDefault(), W.stopPropagation(), l();
        break;
      case "ArrowUp":
        W.preventDefault(), W.stopPropagation(), u();
        break;
      case "PageUp":
        W.preventDefault(), W.stopPropagation(), W.shiftKey ? v() : m();
        break;
      case "PageDown":
        W.preventDefault(), W.stopPropagation(), W.shiftKey ? g() : h();
        break;
      case "Home":
        W.preventDefault(), W.stopPropagation(), x();
        break;
      case "End":
        W.preventDefault(), W.stopPropagation(), b();
        break;
    }
    (G = n.onDayKeyDown) === null || G === void 0 || G.call(n, e, t, W);
  }, I = {
    onClick: y,
    onFocus: _,
    onBlur: $,
    onKeyDown: A,
    onKeyUp: F,
    onMouseEnter: N,
    onMouseLeave: k,
    onPointerEnter: S,
    onPointerLeave: P,
    onTouchCancel: Y,
    onTouchEnd: U,
    onTouchMove: B,
    onTouchStart: Z
  };
  return I;
}
function e$() {
  var e = at(), t = mm(), n = nu(), r = ou(), o = bi(e) ? t.selected : Ra(e) ? n.selected : ja(e) ? r.selected : void 0;
  return o;
}
function t$(e) {
  return Object.values(un).includes(e);
}
function n$(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (t$(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function r$(e, t) {
  var n = Oe({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Oe(Oe({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function o$(e, t, n) {
  var r, o, a, s = at(), i = su(), c = Zw(e, t), l = Jw(e, c), u = e$(), d = Boolean(s.onDayClick || s.mode !== "default");
  ee(function() {
    var N;
    c.outside || i.focusedDay && d && Ft(i.focusedDay, e) && ((N = n.current) === null || N === void 0 || N.focus());
  }, [
    i.focusedDay,
    e,
    n,
    d,
    c.outside
  ]);
  var p = n$(s, c).join(" "), m = r$(s, c), h = Boolean(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : Sw, g = E.createElement(v, { date: e, displayMonth: t, activeModifiers: c }), x = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, b = i.focusTarget && Ft(i.focusTarget, e) && !c.outside, y = i.focusedDay && Ft(i.focusedDay, e), _ = Oe(Oe(Oe({}, x), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = y || b ? 0 : -1, r)), l), $ = {
    isButton: d,
    isHidden: h,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: x
  };
  return $;
}
function a$(e) {
  var t = q(null), n = o$(e.date, e.displayMonth, t);
  return n.isHidden ? E.createElement("div", { role: "gridcell" }) : n.isButton ? E.createElement(As, Oe({ name: "day", ref: t }, n.buttonProps)) : E.createElement("div", Oe({}, n.divProps));
}
function s$(e) {
  var t = e.number, n = e.dates, r = at(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return E.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return E.createElement(As, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: p }, u);
}
function i$(e) {
  var t, n, r = at(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : a$, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : s$, u;
  return s && (u = E.createElement(
    "td",
    { className: a.cell, style: o.cell },
    E.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), E.createElement(
    "tr",
    { className: a.row, style: o.row },
    u,
    e.dates.map(function(d) {
      return E.createElement(
        "td",
        { className: a.cell, style: o.cell, key: D1(d), role: "presentation" },
        E.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function Xd(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Qp(t) : Jl(t, n), o = n != null && n.ISOWeek ? Dr(e) : wn(e, n), a = An(r, o), s = [], i = 0; i <= a; i++)
    s.push(Gt(o, i));
  var c = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? k1(u) : I1(u, n), p = l.find(function(m) {
      return m.weekNumber === d;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function c$(e, t) {
  var n = Xd(Wt(e), Ql(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = F1(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = ol(a, 6 - r), i = Xd(ol(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function l$(e) {
  var t, n, r, o = at(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, h = c$(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : Cw, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : i$, x = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : ww;
  return E.createElement(
    "table",
    { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && E.createElement(v, null),
    E.createElement("tbody", { className: s.tbody, style: i.tbody, role: "rowgroup" }, h.map(function(b) {
      return E.createElement(g, { displayMonth: e.displayMonth, key: b.weekNumber, dates: b.dates, weekNumber: b.weekNumber });
    })),
    E.createElement(x, { displayMonth: e.displayMonth })
  );
}
function u$() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var d$ = u$() ? C.useLayoutEffect : C.useEffect, pc = !1, f$ = 0;
function Qd() {
  return "react-day-picker-".concat(++f$);
}
function p$(e) {
  var t, n = e ?? (pc ? Qd() : null), r = C.useState(n), o = r[0], a = r[1];
  return d$(function() {
    o === null && a(Qd());
  }, []), C.useEffect(function() {
    pc === !1 && (pc = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function m$(e) {
  var t, n, r = at(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = Aa().displayMonths, l = p$(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], p = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (d.push(a.caption_start), p = Oe(Oe({}, p), s.caption_start)), h && (d.push(a.caption_end), p = Oe(Oe({}, p), s.caption_end)), v && (d.push(a.caption_between), p = Oe(Oe({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : yw;
  return E.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: p },
    E.createElement(g, { id: l, displayMonth: e.displayMonth }),
    E.createElement(l$, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function h$(e) {
  var t = e.initialProps, n = at(), r = su(), o = Aa(), a = J(!1), s = a[0], i = a[1];
  ee(function() {
    n.initialFocus && r.focusTarget && (s || (r.focus(r.focusTarget), i(!0)));
  }, [
    n.initialFocus,
    s,
    r.focus,
    r.focusTarget,
    r
  ]);
  var c = [n.classNames.root, n.className];
  n.numberOfMonths > 1 && c.push(n.classNames.multiple_months), n.showWeekNumber && c.push(n.classNames.with_weeknumber);
  var l = Oe(Oe({}, n.styles.root), n.style), u = Object.keys(t).filter(function(d) {
    return d.startsWith("data-");
  }).reduce(function(d, p) {
    var m;
    return Oe(Oe({}, d), (m = {}, m[p] = t[p], m));
  }, {});
  return E.createElement(
    "div",
    Oe({ className: c.join(" "), style: l, dir: n.dir, id: n.id }, u),
    E.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(d, p) {
      return E.createElement(m$, { key: p, displayIndex: p, displayMonth: d });
    }))
  );
}
function v$(e) {
  var t = e.children, n = W1(e, ["children"]);
  return E.createElement(
    sw,
    { initialProps: n },
    E.createElement(
      vw,
      null,
      E.createElement(
        Xw,
        { initialProps: n },
        E.createElement(
          Ew,
          { initialProps: n },
          E.createElement(
            Tw,
            { initialProps: n },
            E.createElement(
              Iw,
              null,
              E.createElement(qw, null, t)
            )
          )
        )
      )
    )
  );
}
function g$(e) {
  return E.createElement(
    v$,
    Oe({}, e),
    E.createElement(h$, { initialProps: e })
  );
}
function b$({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f.exports.jsx(
    g$,
    {
      showOutsideDays: n,
      className: j("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: j(
          oa({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: j(
          oa({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(ql, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(Wr, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
b$.displayName = "Calendar";
function x$(e, t) {
  const n = /* @__PURE__ */ bt(t);
  function r(a) {
    const { children: s, ...i } = a, c = _t(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ w(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = Qe(n);
    if (s)
      return s;
    if (t !== void 0)
      return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [
    r,
    o
  ];
}
function st(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ bt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = _t(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ w(v.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = Qe(m);
      if (h)
        return h;
      if (s !== void 0)
        return s;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      u
    ];
  }
  const o = () => {
    const a = n.map((s) => /* @__PURE__ */ bt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return _t(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: c
          }
        }),
        [
          i,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    y$(o, ...t)
  ];
}
function y$(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const d = c(a)[`__scope${l}`];
        return {
          ...i,
          ...d
        };
      }, {});
      return _t(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Ze(e) {
  const t = q(e);
  return ee(() => {
    t.current = e;
  }), _t(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const Ct = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ma : () => {
}, w$ = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], me = w$.reduce((e, t) => {
  const n = /* @__PURE__ */ L((r, o) => {
    const { asChild: a, ...s } = r, i = a ? cn : t;
    return ee(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, T({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Is(e, t) {
  e && hi(
    () => e.dispatchEvent(t)
  );
}
const hm = "Avatar", [$$, WD] = st(hm), [_$, vm] = $$(hm), C$ = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = J("idle");
  return /* @__PURE__ */ w(_$, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ w(me.span, T({}, r, {
    ref: t
  })));
}), S$ = "AvatarImage", E$ = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = vm(S$, n), i = T$(r), c = Ze((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return Ct(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ w(me.img, T({}, a, {
    ref: t,
    src: r
  })) : null;
}), N$ = "AvatarFallback", P$ = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = vm(N$, n), [s, i] = J(r === void 0);
  return ee(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ w(me.span, T({}, o, {
    ref: t
  })) : null;
});
function T$(e) {
  const [t, n] = J("idle");
  return ee(() => {
    if (!e) {
      n("error");
      return;
    }
    let r = !0;
    const o = new window.Image(), a = (s) => () => {
      r && n(s);
    };
    return n("loading"), o.onload = a("loaded"), o.onerror = a("error"), o.src = e, () => {
      r = !1;
    };
  }, [
    e
  ]), t;
}
const gm = C$, bm = E$, xm = P$, lo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  gm,
  {
    ref: n,
    className: j(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
lo.displayName = gm.displayName;
const Or = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  bm,
  {
    ref: n,
    className: j("aspect-square h-full w-full", e),
    ...t
  }
));
Or.displayName = bm.displayName;
const uo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  xm,
  {
    ref: n,
    className: j(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
uo.displayName = xm.displayName;
const O$ = No(
  "inline-flex select-none justify-center items-center border rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: (
          // 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
          "bg-primary border-transparent text-primary-foreground"
        ),
        secondary: "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive: "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
        red: "bg-red-200 border-2 border-red-600 text-red-600",
        success: "bg-green-100 border-2 border-green-500 text-green-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Rt({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f.exports.jsx("div", { className: j(O$({ variant: t }), e), ...n });
}
function te(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function br(e) {
  const t = e + "CollectionProvider", [n, r] = st(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: h, children: v } = m, g = E.useRef(null), x = E.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ E.createElement(o, {
      scope: h,
      itemMap: x,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ E.forwardRef((m, h) => {
    const { scope: v, children: g } = m, x = a(i, v), b = Ee(h, x.collectionRef);
    return /* @__PURE__ */ E.createElement(cn, {
      ref: b
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ E.forwardRef((m, h) => {
    const { scope: v, children: g, ...x } = m, b = E.useRef(null), y = Ee(h, b), _ = a(l, v);
    return E.useEffect(() => (_.itemMap.set(b, {
      ref: b,
      ...x
    }), () => void _.itemMap.delete(b))), /* @__PURE__ */ E.createElement(cn, {
      [u]: "",
      ref: y
    }, g);
  });
  function p(m) {
    const h = a(e + "CollectionConsumer", m);
    return E.useCallback(() => {
      const g = h.collectionRef.current;
      if (!g)
        return [];
      const x = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(h.itemMap.values()).sort(
        (_, $) => x.indexOf(_.ref.current) - x.indexOf($.ref.current)
      );
    }, [
      h.collectionRef,
      h.itemMap
    ]);
  }
  return [
    {
      Provider: s,
      Slot: c,
      ItemSlot: d
    },
    p,
    r
  ];
}
const k$ = /* @__PURE__ */ bt(void 0);
function Nn(e) {
  const t = Qe(k$);
  return e || t || "ltr";
}
function M$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ze(e);
  ee(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const al = "dismissableLayer.update", D$ = "dismissableLayer.pointerDownOutside", R$ = "dismissableLayer.focusOutside";
let Jd;
const j$ = /* @__PURE__ */ bt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), zr = /* @__PURE__ */ L((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = Qe(j$), [d, p] = J(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = J({}), v = Ee(
    t,
    (S) => p(S)
  ), g = Array.from(u.layers), [x] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), b = g.indexOf(x), y = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, $ = y >= b, N = A$((S) => {
    const P = S.target, Y = [
      ...u.branches
    ].some(
      (U) => U.contains(P)
    );
    !$ || Y || (a == null || a(S), i == null || i(S), S.defaultPrevented || c == null || c());
  }, m), k = I$((S) => {
    const P = S.target;
    [
      ...u.branches
    ].some(
      (U) => U.contains(P)
    ) || (s == null || s(S), i == null || i(S), S.defaultPrevented || c == null || c());
  }, m);
  return M$((S) => {
    y === u.layers.size - 1 && (o == null || o(S), !S.defaultPrevented && c && (S.preventDefault(), c()));
  }, m), ee(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Jd = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), ef(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Jd);
      };
  }, [
    d,
    m,
    r,
    u
  ]), ee(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), ef());
  }, [
    d,
    u
  ]), ee(() => {
    const S = () => h({});
    return document.addEventListener(al, S), () => document.removeEventListener(al, S);
  }, []), /* @__PURE__ */ w(me.div, T({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: te(e.onFocusCapture, k.onFocusCapture),
    onBlurCapture: te(e.onBlurCapture, k.onBlurCapture),
    onPointerDownCapture: te(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
});
function A$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ze(e), r = q(!1), o = q(() => {
  });
  return ee(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          ym(D$, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: i
        };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
          once: !0
        })) : l();
      }
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function I$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ze(e), r = q(!1);
  return ee(() => {
    const o = (a) => {
      a.target && !r.current && ym(R$, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ef() {
  const e = new CustomEvent(al);
  document.dispatchEvent(e);
}
function ym(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Is(o, a) : o.dispatchEvent(a);
}
let mc = 0;
function xi() {
  ee(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : tf()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : tf()), mc++, () => {
      mc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), mc--;
    };
  }, []);
}
function tf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const hc = "focusScope.autoFocusOnMount", vc = "focusScope.autoFocusOnUnmount", nf = {
  bubbles: !1,
  cancelable: !0
}, yi = /* @__PURE__ */ L((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = J(null), l = Ze(o), u = Ze(a), d = q(null), p = Ee(
    t,
    (v) => c(v)
  ), m = q({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  ee(() => {
    if (r) {
      let v = function(y) {
        if (m.paused || !i)
          return;
        const _ = y.target;
        i.contains(_) ? d.current = _ : or(d.current, {
          select: !0
        });
      }, g = function(y) {
        if (m.paused || !i)
          return;
        const _ = y.relatedTarget;
        _ !== null && (i.contains(_) || or(d.current, {
          select: !0
        }));
      }, x = function(y) {
        const _ = document.activeElement;
        for (const $ of y)
          $.removedNodes.length > 0 && (i != null && i.contains(_) || or(i));
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const b = new MutationObserver(x);
      return i && b.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), ee(() => {
    if (i) {
      of.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const x = new CustomEvent(hc, nf);
        i.addEventListener(hc, l), i.dispatchEvent(x), x.defaultPrevented || (L$(z$(wm(i)), {
          select: !0
        }), document.activeElement === v && or(i));
      }
      return () => {
        i.removeEventListener(hc, l), setTimeout(() => {
          const x = new CustomEvent(vc, nf);
          i.addEventListener(vc, u), i.dispatchEvent(x), x.defaultPrevented || or(v ?? document.body, {
            select: !0
          }), i.removeEventListener(vc, u), of.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const h = he((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
    if (g && x) {
      const b = v.currentTarget, [y, _] = F$(b);
      y && _ ? !v.shiftKey && x === _ ? (v.preventDefault(), n && or(y, {
        select: !0
      })) : v.shiftKey && x === y && (v.preventDefault(), n && or(_, {
        select: !0
      })) : x === b && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ w(me.div, T({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function L$(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (or(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function F$(e) {
  const t = wm(e), n = rf(t, e), r = rf(t.reverse(), e);
  return [
    n,
    r
  ];
}
function wm(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function rf(e, t) {
  for (const n of e)
    if (!V$(n, {
      upTo: t
    }))
      return n;
}
function V$(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function W$(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function or(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && W$(e) && t && e.select();
  }
}
const of = U$();
function U$() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = af(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = af(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function af(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function z$(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const B$ = C["useId".toString()] || (() => {
});
let H$ = 0;
function mt(e) {
  const [t, n] = C.useState(B$());
  return Ct(() => {
    e || n(
      (r) => r ?? String(H$++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Y$ = ["top", "right", "bottom", "left"], lr = Math.min, Bt = Math.max, Ls = Math.round, ss = Math.floor, ur = (e) => ({
  x: e,
  y: e
}), K$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, G$ = {
  start: "end",
  end: "start"
};
function sl(e, t, n) {
  return Bt(e, lr(t, n));
}
function Fn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vn(e) {
  return e.split("-")[0];
}
function Po(e) {
  return e.split("-")[1];
}
function cu(e) {
  return e === "x" ? "y" : "x";
}
function lu(e) {
  return e === "y" ? "height" : "width";
}
function To(e) {
  return ["top", "bottom"].includes(Vn(e)) ? "y" : "x";
}
function uu(e) {
  return cu(To(e));
}
function q$(e, t, n) {
  n === void 0 && (n = !1);
  const r = Po(e), o = uu(e), a = lu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Fs(s)), [s, Fs(s)];
}
function Z$(e) {
  const t = Fs(e);
  return [il(e), t, il(t)];
}
function il(e) {
  return e.replace(/start|end/g, (t) => G$[t]);
}
function X$(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function Q$(e, t, n, r) {
  const o = Po(e);
  let a = X$(Vn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(il)))), a;
}
function Fs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => K$[t]);
}
function J$(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $m(e) {
  return typeof e != "number" ? J$(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Vs(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function sf(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = To(t), s = uu(t), i = lu(s), c = Vn(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (Po(t)) {
    case "start":
      m[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const e_ = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = sf(l, r, c), p = r, m = {}, h = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: x
    } = i[v], {
      x: b,
      y,
      data: _,
      reset: $
    } = await x({
      x: u,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: m,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (u = b ?? u, d = y ?? d, m = {
      ...m,
      [g]: {
        ...m[g],
        ..._
      }
    }, $ && h <= 50) {
      h++, typeof $ == "object" && ($.placement && (p = $.placement), $.rects && (l = $.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : $.rects), {
        x: u,
        y: d
      } = sf(l, p, c)), v = -1;
      continue;
    }
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: m
  };
};
async function ca(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = Fn(t, e), h = $m(m), g = i[p ? d === "floating" ? "reference" : "floating" : d], x = Vs(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Vs(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: y,
    strategy: c
  }) : b);
  return {
    top: (x.top - $.top + h.top) / _.y,
    bottom: ($.bottom - x.bottom + h.bottom) / _.y,
    left: (x.left - $.left + h.left) / _.x,
    right: ($.right - x.right + h.right) / _.x
  };
}
const cf = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i
    } = t, {
      element: c,
      padding: l = 0
    } = Fn(e, t) || {};
    if (c == null)
      return {};
    const u = $m(l), d = {
      x: n,
      y: r
    }, p = uu(o), m = lu(p), h = await s.getDimensions(c), v = p === "y", g = v ? "top" : "left", x = v ? "bottom" : "right", b = v ? "clientHeight" : "clientWidth", y = a.reference[m] + a.reference[p] - d[p] - a.floating[m], _ = d[p] - a.reference[p], $ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let N = $ ? $[b] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement($))) && (N = i.floating[b] || a.floating[m]);
    const k = y / 2 - _ / 2, S = N / 2 - h[m] / 2 - 1, P = lr(u[g], S), Y = lr(u[x], S), U = P, B = N - h[m] - Y, Z = N / 2 - h[m] / 2 + k, F = sl(U, Z, B), I = Po(o) != null && Z != F && a.reference[m] / 2 - (Z < U ? P : Y) - h[m] / 2 < 0 ? Z < U ? U - Z : B - Z : 0;
    return {
      [p]: d[p] - I,
      data: {
        [p]: F,
        centerOffset: Z - F + I
      }
    };
  }
}), t_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        middlewareData: o,
        rects: a,
        initialPlacement: s,
        platform: i,
        elements: c
      } = t, {
        mainAxis: l = !0,
        crossAxis: u = !0,
        fallbackPlacements: d,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...v
      } = Fn(e, t), g = Vn(r), x = Vn(s) === s, b = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), y = d || (x || !h ? [Fs(s)] : Z$(s));
      !d && m !== "none" && y.push(...Q$(s, h, m, b));
      const _ = [s, ...y], $ = await ca(t, v), N = [];
      let k = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && N.push($[g]), u) {
        const U = q$(r, a, b);
        N.push($[U[0]], $[U[1]]);
      }
      if (k = [...k, {
        placement: r,
        overflows: N
      }], !N.every((U) => U <= 0)) {
        var S, P;
        const U = (((S = o.flip) == null ? void 0 : S.index) || 0) + 1, B = _[U];
        if (B)
          return {
            data: {
              index: U,
              overflows: k
            },
            reset: {
              placement: B
            }
          };
        let Z = (P = k.filter((F) => F.overflows[0] <= 0).sort((F, A) => F.overflows[1] - A.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!Z)
          switch (p) {
            case "bestFit": {
              var Y;
              const F = (Y = k.map((A) => [A.placement, A.overflows.filter((I) => I > 0).reduce((I, W) => I + W, 0)]).sort((A, I) => A[1] - I[1])[0]) == null ? void 0 : Y[0];
              F && (Z = F);
              break;
            }
            case "initialPlacement":
              Z = s;
              break;
          }
        if (r !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
};
function lf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function uf(e) {
  return Y$.some((t) => e[t] >= 0);
}
const n_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Fn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await ca(t, {
            ...o,
            elementContext: "reference"
          }), s = lf(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: uf(s)
            }
          };
        }
        case "escaped": {
          const a = await ca(t, {
            ...o,
            altBoundary: !0
          }), s = lf(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: uf(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function r_(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Vn(n), i = Po(n), c = To(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = Fn(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return i && typeof h == "number" && (m = i === "end" ? h * -1 : h), c ? {
    x: m * u,
    y: p * l
  } : {
    x: p * l,
    y: m * u
  };
}
const o_ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await r_(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, a_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (g) => {
            let {
              x,
              y: b
            } = g;
            return {
              x,
              y: b
            };
          }
        },
        ...c
      } = Fn(e, t), l = {
        x: n,
        y: r
      }, u = await ca(t, c), d = To(Vn(o)), p = cu(d);
      let m = l[p], h = l[d];
      if (a) {
        const g = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", b = m + u[g], y = m - u[x];
        m = sl(b, m, y);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", x = d === "y" ? "bottom" : "right", b = h + u[g], y = h - u[x];
        h = sl(b, h, y);
      }
      const v = i.fn({
        ...t,
        [p]: m,
        [d]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r
        }
      };
    }
  };
}, s_ = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Fn(e, t), u = {
        x: n,
        y: r
      }, d = To(o), p = cu(d);
      let m = u[p], h = u[d];
      const v = Fn(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const y = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[y] + g.mainAxis, $ = a.reference[p] + a.reference[y] - g.mainAxis;
        m < _ ? m = _ : m > $ && (m = $);
      }
      if (l) {
        var x, b;
        const y = p === "y" ? "width" : "height", _ = ["top", "left"].includes(Vn(o)), $ = a.reference[d] - a.floating[y] + (_ && ((x = s.offset) == null ? void 0 : x[d]) || 0) + (_ ? 0 : g.crossAxis), N = a.reference[d] + a.reference[y] + (_ ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (_ ? g.crossAxis : 0);
        h < $ ? h = $ : h > N && (h = N);
      }
      return {
        [p]: m,
        [d]: h
      };
    }
  };
}, i_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: a
      } = t, {
        apply: s = () => {
        },
        ...i
      } = Fn(e, t), c = await ca(t, i), l = Vn(n), u = Po(n), d = To(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let h, v;
      l === "top" || l === "bottom" ? (h = l, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, h = u === "end" ? "top" : "bottom");
      const g = m - c[h], x = p - c[v], b = !t.middlewareData.shift;
      let y = g, _ = x;
      if (d) {
        const N = p - c.left - c.right;
        _ = u || b ? lr(x, N) : N;
      } else {
        const N = m - c.top - c.bottom;
        y = u || b ? lr(g, N) : N;
      }
      if (b && !u) {
        const N = Bt(c.left, 0), k = Bt(c.right, 0), S = Bt(c.top, 0), P = Bt(c.bottom, 0);
        d ? _ = p - 2 * (N !== 0 || k !== 0 ? N + k : Bt(c.left, c.right)) : y = m - 2 * (S !== 0 || P !== 0 ? S + P : Bt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: y
      });
      const $ = await o.getDimensions(a.floating);
      return p !== $.width || m !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function dr(e) {
  return _m(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ht(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qn(e) {
  var t;
  return (t = (_m(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _m(e) {
  return e instanceof Node || e instanceof Ht(e).Node;
}
function Wn(e) {
  return e instanceof Element || e instanceof Ht(e).Element;
}
function $n(e) {
  return e instanceof HTMLElement || e instanceof Ht(e).HTMLElement;
}
function df(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ht(e).ShadowRoot;
}
function Ia(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Zt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function c_(e) {
  return ["table", "td", "th"].includes(dr(e));
}
function du(e) {
  const t = fu(), n = Zt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function l_(e) {
  let t = bo(e);
  for (; $n(t) && !wi(t); ) {
    if (du(t))
      return t;
    t = bo(t);
  }
  return null;
}
function fu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function wi(e) {
  return ["html", "body", "#document"].includes(dr(e));
}
function Zt(e) {
  return Ht(e).getComputedStyle(e);
}
function $i(e) {
  return Wn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function bo(e) {
  if (dr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    df(e) && e.host || // Fallback.
    qn(e)
  );
  return df(t) ? t.host : t;
}
function Cm(e) {
  const t = bo(e);
  return wi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $n(t) && Ia(t) ? t : Cm(t);
}
function Ws(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Cm(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ht(r);
  return o ? t.concat(a, a.visualViewport || [], Ia(r) ? r : []) : t.concat(r, Ws(r));
}
function Sm(e) {
  const t = Zt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = $n(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Ls(n) !== a || Ls(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function pu(e) {
  return Wn(e) ? e : e.contextElement;
}
function fo(e) {
  const t = pu(e);
  if (!$n(t))
    return ur(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Sm(t);
  let s = (a ? Ls(n.width) : n.width) / r, i = (a ? Ls(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const u_ = /* @__PURE__ */ ur(0);
function Em(e) {
  const t = Ht(e);
  return !fu() || !t.visualViewport ? u_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function d_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ht(e) ? !1 : t;
}
function Rr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = pu(e);
  let s = ur(1);
  t && (r ? Wn(r) && (s = fo(r)) : s = fo(e));
  const i = d_(a, n, r) ? Em(a) : ur(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const p = Ht(a), m = r && Wn(r) ? Ht(r) : r;
    let h = p.frameElement;
    for (; h && r && m !== p; ) {
      const v = fo(h), g = h.getBoundingClientRect(), x = Zt(h), b = g.left + (h.clientLeft + parseFloat(x.paddingLeft)) * v.x, y = g.top + (h.clientTop + parseFloat(x.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += b, l += y, h = Ht(h).frameElement;
    }
  }
  return Vs({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function f_(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = $n(n), a = qn(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = ur(1);
  const c = ur(0);
  if ((o || !o && r !== "fixed") && ((dr(n) !== "body" || Ia(a)) && (s = $i(n)), $n(n))) {
    const l = Rr(n);
    i = fo(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function p_(e) {
  return Array.from(e.getClientRects());
}
function Nm(e) {
  return Rr(qn(e)).left + $i(e).scrollLeft;
}
function m_(e) {
  const t = qn(e), n = $i(e), r = e.ownerDocument.body, o = Bt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Bt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Nm(e);
  const i = -n.scrollTop;
  return Zt(r).direction === "rtl" && (s += Bt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function h_(e, t) {
  const n = Ht(e), r = qn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = fu();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function v_(e, t) {
  const n = Rr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = $n(e) ? fo(e) : ur(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function ff(e, t, n) {
  let r;
  if (t === "viewport")
    r = h_(e, n);
  else if (t === "document")
    r = m_(qn(e));
  else if (Wn(t))
    r = v_(t, n);
  else {
    const o = Em(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Vs(r);
}
function Pm(e, t) {
  const n = bo(e);
  return n === t || !Wn(n) || wi(n) ? !1 : Zt(n).position === "fixed" || Pm(n, t);
}
function g_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ws(e).filter((i) => Wn(i) && dr(i) !== "body"), o = null;
  const a = Zt(e).position === "fixed";
  let s = a ? bo(e) : e;
  for (; Wn(s) && !wi(s); ) {
    const i = Zt(s), c = du(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ia(s) && !c && Pm(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = bo(s);
  }
  return t.set(e, r), r;
}
function b_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? g_(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = ff(t, u, o);
    return l.top = Bt(d.top, l.top), l.right = lr(d.right, l.right), l.bottom = lr(d.bottom, l.bottom), l.left = Bt(d.left, l.left), l;
  }, ff(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function x_(e) {
  return Sm(e);
}
function y_(e, t, n) {
  const r = $n(t), o = qn(t), a = n === "fixed", s = Rr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ur(0);
  if (r || !r && !a)
    if ((dr(t) !== "body" || Ia(o)) && (i = $i(t)), r) {
      const l = Rr(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Nm(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function pf(e, t) {
  return !$n(e) || Zt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Tm(e, t) {
  const n = Ht(e);
  if (!$n(e))
    return n;
  let r = pf(e, t);
  for (; r && c_(r) && Zt(r).position === "static"; )
    r = pf(r, t);
  return r && (dr(r) === "html" || dr(r) === "body" && Zt(r).position === "static" && !du(r)) ? n : r || l_(e) || n;
}
const w_ = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Tm, a = this.getDimensions;
  return {
    reference: y_(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function $_(e) {
  return Zt(e).direction === "rtl";
}
const __ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: f_,
  getDocumentElement: qn,
  getClippingRect: b_,
  getOffsetParent: Tm,
  getElementRects: w_,
  getClientRects: p_,
  getDimensions: x_,
  getScale: fo,
  isElement: Wn,
  isRTL: $_
};
function C_(e, t) {
  let n = null, r;
  const o = qn(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const {
      left: l,
      top: u,
      width: d,
      height: p
    } = e.getBoundingClientRect();
    if (i || t(), !d || !p)
      return;
    const m = ss(u), h = ss(o.clientWidth - (l + d)), v = ss(o.clientHeight - (u + p)), g = ss(l), b = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: Bt(0, lr(1, c)) || 1
    };
    let y = !0;
    function _($) {
      const N = $[0].intersectionRatio;
      if (N !== c) {
        if (!y)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, b);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function S_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = pu(e), u = o || a ? [...l ? Ws(l) : [], ...Ws(t)] : [];
  u.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), a && x.addEventListener("resize", n);
  });
  const d = l && i ? C_(l, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((x) => {
    let [b] = x;
    b && b.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let h, v = c ? Rr(e) : null;
  c && g();
  function g() {
    const x = Rr(e);
    v && (x.x !== v.x || x.y !== v.y || x.width !== v.width || x.height !== v.height) && n(), v = x, h = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const E_ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: __,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return e_(e, t, {
    ...o,
    platform: a
  });
}, N_ = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? cf({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? cf({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Cs = typeof document < "u" ? Ma : ee;
function Us(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Us(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Us(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Om(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function mf(e, t) {
  const n = Om(e);
  return Math.round(t * n) / n;
}
function hf(e) {
  const t = C.useRef(e);
  return Cs(() => {
    t.current = e;
  }), t;
}
function P_(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, m] = C.useState(r);
  Us(p, r) || m(r);
  const [h, v] = C.useState(null), [g, x] = C.useState(null), b = C.useCallback((I) => {
    I != N.current && (N.current = I, v(I));
  }, [v]), y = C.useCallback((I) => {
    I !== k.current && (k.current = I, x(I));
  }, [x]), _ = a || h, $ = s || g, N = C.useRef(null), k = C.useRef(null), S = C.useRef(u), P = hf(c), Y = hf(o), U = C.useCallback(() => {
    if (!N.current || !k.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: p
    };
    Y.current && (I.platform = Y.current), E_(N.current, k.current, I).then((W) => {
      const G = {
        ...W,
        isPositioned: !0
      };
      B.current && !Us(S.current, G) && (S.current = G, g0.flushSync(() => {
        d(G);
      }));
    });
  }, [p, t, n, Y]);
  Cs(() => {
    l === !1 && S.current.isPositioned && (S.current.isPositioned = !1, d((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [l]);
  const B = C.useRef(!1);
  Cs(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Cs(() => {
    if (_ && (N.current = _), $ && (k.current = $), _ && $) {
      if (P.current)
        return P.current(_, $, U);
      U();
    }
  }, [_, $, U, P]);
  const Z = C.useMemo(() => ({
    reference: N,
    floating: k,
    setReference: b,
    setFloating: y
  }), [b, y]), F = C.useMemo(() => ({
    reference: _,
    floating: $
  }), [_, $]), A = C.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return I;
    const W = mf(F.floating, u.x), G = mf(F.floating, u.y);
    return i ? {
      ...I,
      transform: "translate(" + W + "px, " + G + "px)",
      ...Om(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: G
    };
  }, [n, i, F.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: U,
    refs: Z,
    elements: F,
    floatingStyles: A
  }), [u, U, Z, F, A]);
}
function La(e) {
  const [t, n] = J(void 0);
  return Ct(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, i = l.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({
          width: s,
          height: i
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const km = "Popper", [Mm, Pn] = st(km), [T_, Dm] = Mm(km), O_ = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = J(null);
  return /* @__PURE__ */ w(T_, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, k_ = "PopperAnchor", M_ = /* @__PURE__ */ L((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Dm(k_, n), s = q(null), i = Ee(t, s);
  return ee(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ w(me.div, T({}, o, {
    ref: i
  }));
}), Rm = "PopperContent", [D_, UD] = Mm(Rm), R_ = /* @__PURE__ */ L((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: x = 0, sticky: b = "partial", hideWhenDetached: y = !1, avoidCollisions: _ = !0, onPlaced: $, ...N } = e, k = Dm(Rm, u), [S, P] = J(null), Y = Ee(
    t,
    (ve) => P(ve)
  ), [U, B] = J(null), Z = La(U), F = (n = Z == null ? void 0 : Z.width) !== null && n !== void 0 ? n : 0, A = (r = Z == null ? void 0 : Z.height) !== null && r !== void 0 ? r : 0, I = d + (m !== "center" ? "-" + m : ""), W = typeof x == "number" ? x : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...x
  }, G = Array.isArray(g) ? g : [
    g
  ], R = G.length > 0, M = {
    padding: W,
    boundary: G.filter(j_),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: R
  }, { refs: K, floatingStyles: X, placement: ae, isPositioned: ne, middlewareData: ge } = P_({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: I,
    whileElementsMounted: S_,
    elements: {
      reference: k.anchor
    },
    middleware: [
      o_({
        mainAxis: p + A,
        alignmentAxis: h
      }),
      _ && a_({
        mainAxis: !0,
        crossAxis: !1,
        limiter: b === "partial" ? s_() : void 0,
        ...M
      }),
      _ && t_({
        ...M
      }),
      i_({
        ...M,
        apply: ({ elements: ve, rects: ye, availableWidth: O, availableHeight: z }) => {
          const { width: Q, height: fe } = ye.reference, le = ve.floating.style;
          le.setProperty("--radix-popper-available-width", `${O}px`), le.setProperty("--radix-popper-available-height", `${z}px`), le.setProperty("--radix-popper-anchor-width", `${Q}px`), le.setProperty("--radix-popper-anchor-height", `${fe}px`);
        }
      }),
      U && N_({
        element: U,
        padding: v
      }),
      A_({
        arrowWidth: F,
        arrowHeight: A
      }),
      y && n_({
        strategy: "referenceHidden"
      })
    ]
  }), [be, oe] = jm(ae), ie = Ze($);
  Ct(() => {
    ne && (ie == null || ie());
  }, [
    ne,
    ie
  ]);
  const pe = (o = ge.arrow) === null || o === void 0 ? void 0 : o.x, H = (a = ge.arrow) === null || a === void 0 ? void 0 : a.y, re = ((s = ge.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [V, de] = J();
  return Ct(() => {
    S && de(window.getComputedStyle(S).zIndex);
  }, [
    S
  ]), /* @__PURE__ */ w("div", {
    ref: K.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...X,
      transform: ne ? X.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: V,
      ["--radix-popper-transform-origin"]: [
        (i = ge.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ge.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ w(D_, {
    scope: u,
    placedSide: be,
    onArrowChange: B,
    arrowX: pe,
    arrowY: H,
    shouldHideArrow: re
  }, /* @__PURE__ */ w(me.div, T({
    "data-side": be,
    "data-align": oe
  }, N, {
    ref: Y,
    style: {
      ...N.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ne ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ge.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function j_(e) {
  return e !== null;
}
const A_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [h, v] = jm(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], x = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, b = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let y = "", _ = "";
    return h === "bottom" ? (y = d ? g : `${x}px`, _ = `${-m}px`) : h === "top" ? (y = d ? g : `${x}px`, _ = `${c.floating.height + m}px`) : h === "right" ? (y = `${-m}px`, _ = d ? g : `${b}px`) : h === "left" && (y = `${c.floating.width + m}px`, _ = d ? g : `${b}px`), {
      data: {
        x: y,
        y: _
      }
    };
  }
});
function jm(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Oo = O_, Fa = M_, Va = R_, _i = /* @__PURE__ */ L((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Hl.createPortal(/* @__PURE__ */ w(me.div, T({}, o, {
    ref: t
  })), r) : null;
});
function I_(e, t) {
  return mi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ct = (e) => {
  const { present: t, children: n } = e, r = L_(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Vt.only(n), a = Ee(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Eo(o, {
    ref: a
  }) : null;
};
ct.displayName = "Presence";
function L_(e) {
  const [t, n] = J(), r = q({}), o = q(e), a = q("none"), s = e ? "mounted" : "unmounted", [i, c] = I_(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return ee(() => {
    const l = is(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), Ct(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = is(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), Ct(() => {
    if (t) {
      const l = (d) => {
        const m = is(r.current).includes(d.animationName);
        d.target === t && m && hi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = is(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(i),
    ref: he((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function is(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ft({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = F_({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Ze(n), c = he((l) => {
    if (a) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && i(d);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    c
  ];
}
function F_({ defaultProp: e, onChange: t }) {
  const n = J(e), [r] = n, o = q(r), a = Ze(t);
  return ee(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const gc = "rovingFocusGroup.onEntryFocus", V_ = {
  bubbles: !1,
  cancelable: !0
}, mu = "RovingFocusGroup", [cl, Am, W_] = br(mu), [U_, xr] = st(mu, [
  W_
]), [z_, B_] = U_(mu), H_ = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ w(cl.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(cl.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(Y_, T({}, e, {
  ref: t
}))))), Y_ = /* @__PURE__ */ L((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = q(null), p = Ee(t, d), m = Nn(a), [h = null, v] = ft({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, x] = J(!1), b = Ze(l), y = Am(n), _ = q(!1), [$, N] = J(0);
  return ee(() => {
    const k = d.current;
    if (k)
      return k.addEventListener(gc, b), () => k.removeEventListener(gc, b);
  }, [
    b
  ]), /* @__PURE__ */ w(z_, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: h,
    onItemFocus: he(
      (k) => v(k),
      [
        v
      ]
    ),
    onItemShiftTab: he(
      () => x(!0),
      []
    ),
    onFocusableItemAdd: he(
      () => N(
        (k) => k + 1
      ),
      []
    ),
    onFocusableItemRemove: he(
      () => N(
        (k) => k - 1
      ),
      []
    )
  }, /* @__PURE__ */ w(me.div, T({
    tabIndex: g || $ === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: te(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: te(e.onFocus, (k) => {
      const S = !_.current;
      if (k.target === k.currentTarget && S && !g) {
        const P = new CustomEvent(gc, V_);
        if (k.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
          const Y = y().filter(
            (A) => A.focusable
          ), U = Y.find(
            (A) => A.active
          ), B = Y.find(
            (A) => A.id === h
          ), F = [
            U,
            B,
            ...Y
          ].filter(Boolean).map(
            (A) => A.ref.current
          );
          Im(F);
        }
      }
      _.current = !1;
    }),
    onBlur: te(
      e.onBlur,
      () => x(!1)
    )
  })));
}), K_ = "RovingFocusGroupItem", G_ = /* @__PURE__ */ L((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = mt(), c = a || i, l = B_(K_, n), u = l.currentTabStopId === c, d = Am(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = l;
  return ee(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ w(cl.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ w(me.span, T({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: te(e.onMouseDown, (h) => {
      r ? l.onItemFocus(c) : h.preventDefault();
    }),
    onFocus: te(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: te(e.onKeyDown, (h) => {
      if (h.key === "Tab" && h.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (h.target !== h.currentTarget)
        return;
      const v = X_(h, l.orientation, l.dir);
      if (v !== void 0) {
        h.preventDefault();
        let x = d().filter(
          (b) => b.focusable
        ).map(
          (b) => b.ref.current
        );
        if (v === "last")
          x.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && x.reverse();
          const b = x.indexOf(h.currentTarget);
          x = l.loop ? Q_(x, b + 1) : x.slice(b + 1);
        }
        setTimeout(
          () => Im(x)
        );
      }
    })
  })));
}), q_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Z_(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function X_(e, t, n) {
  const r = Z_(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return q_[r];
}
function Im(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Q_(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Ci = H_, Si = G_;
var J_ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, eo = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap(), ls = {}, bc = 0, Lm = function(e) {
  return e && (e.host || Lm(e.parentNode));
}, e2 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Lm(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, t2 = function(e, t, n, r) {
  var o = e2(t, Array.isArray(e) ? e : [e]);
  ls[n] || (ls[n] = /* @__PURE__ */ new WeakMap());
  var a = ls[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        u(p);
      else {
        var m = p.getAttribute(r), h = m !== null && m !== "false", v = (eo.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
        eo.set(p, v), a.set(p, g), s.push(p), v === 1 && h && cs.set(p, !0), g === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), bc++, function() {
    s.forEach(function(d) {
      var p = eo.get(d) - 1, m = a.get(d) - 1;
      eo.set(d, p), a.set(d, m), p || (cs.has(d) || d.removeAttribute(r), cs.delete(d)), m || d.removeAttribute(n);
    }), bc--, bc || (eo = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap(), ls = {});
  };
}, Wa = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || J_(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), t2(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Nt = function() {
  return Nt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Nt.apply(this, arguments);
};
function hu(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Fm(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ta = "right-scroll-bar-position", na = "width-before-scroll-bar", n2 = "with-scroll-bars-hidden", r2 = "--removed-body-scroll-bar-size";
function o2(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function a2(e, t) {
  var n = J(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function Vm(e, t) {
  return a2(t || null, function(n) {
    return e.forEach(function(r) {
      return o2(r, n);
    });
  });
}
function s2(e) {
  return e;
}
function i2(e, t) {
  t === void 0 && (t = s2);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var c = function() {
        var u = s;
        s = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          s.push(u), l();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function Wm(e) {
  e === void 0 && (e = {});
  var t = i2(null);
  return t.options = Nt({ async: !0, ssr: !1 }, e), t;
}
var Um = function(e) {
  var t = e.sideCar, n = hu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, Nt({}, n));
};
Um.isSideCarExport = !0;
function zm(e, t) {
  return e.useMedium(t), Um;
}
var Bm = Wm(), xc = function() {
}, Ei = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: xc,
    onWheelCapture: xc,
    onTouchMoveCapture: xc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, b = hu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = Vm([n, t]), $ = Nt(Nt({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: Bm, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), Nt(Nt({}, $), { ref: _ })) : C.createElement(x, Nt({}, $, { className: c, ref: _ }), i)
  );
});
Ei.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ei.classNames = {
  fullWidth: na,
  zeroRight: ta
};
var vf, c2 = function() {
  if (vf)
    return vf;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function l2() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = c2();
  return t && e.setAttribute("nonce", t), e;
}
function u2(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function d2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var f2 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = l2()) && (u2(t, n), d2(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, p2 = function() {
  var e = f2();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, vu = function() {
  var e = p2(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, m2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, yc = function(e) {
  return parseInt(e || "", 10) || 0;
}, h2 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [yc(n), yc(r), yc(o)];
}, v2 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return m2;
  var t = h2(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, g2 = vu(), b2 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(n2, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ta, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(na, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ta, " .").concat(ta, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(na, " .").concat(na, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(r2, ": ").concat(i, `px;
  }
`);
}, Hm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return v2(o);
  }, [o]);
  return C.createElement(g2, { styles: b2(a, !t, o, n ? "" : "!important") });
}, ll = !1;
if (typeof window < "u")
  try {
    var us = Object.defineProperty({}, "passive", {
      get: function() {
        return ll = !0, !0;
      }
    });
    window.addEventListener("test", us, us), window.removeEventListener("test", us, us);
  } catch {
    ll = !1;
  }
var to = ll ? { passive: !1 } : !1, x2 = function(e) {
  return e.tagName === "TEXTAREA";
}, Ym = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !x2(e) && n[t] === "visible")
  );
}, y2 = function(e) {
  return Ym(e, "overflowY");
}, w2 = function(e) {
  return Ym(e, "overflowX");
}, gf = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Km(e, n);
    if (r) {
      var o = Gm(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, $2 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, _2 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Km = function(e, t) {
  return e === "v" ? y2(t) : w2(t);
}, Gm = function(e, t) {
  return e === "v" ? $2(t) : _2(t);
}, C2 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, S2 = function(e, t, n, r, o) {
  var a = C2(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Gm(e, i), h = m[0], v = m[1], g = m[2], x = v - g - a * h;
    (h || x) && Km(e, i) && (d += x, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, ds = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, bf = function(e) {
  return [e.deltaX, e.deltaY];
}, xf = function(e) {
  return e && "current" in e ? e.current : e;
}, E2 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, N2 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, P2 = 0, no = [];
function T2(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(P2++)[0], a = C.useState(function() {
    return vu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Fm([e.lockRef.current], (e.shards || []).map(xf), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = C.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2)
      return !s.current.allowPinchZoom;
    var x = ds(v), b = n.current, y = "deltaX" in v ? v.deltaX : b[0] - x[0], _ = "deltaY" in v ? v.deltaY : b[1] - x[1], $, N = v.target, k = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && N.type === "range")
      return !1;
    var S = gf(k, N);
    if (!S)
      return !0;
    if (S ? $ = k : ($ = k === "v" ? "h" : "v", S = gf(k, N)), !S)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = $), !$)
      return !0;
    var P = r.current || $;
    return S2(P, g, v, P === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!no.length || no[no.length - 1] !== a)) {
      var x = "deltaY" in g ? bf(g) : ds(g), b = t.current.filter(function($) {
        return $.name === g.type && $.target === g.target && E2($.delta, x);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var y = (s.current.shards || []).map(xf).filter(Boolean).filter(function($) {
          return $.contains(g.target);
        }), _ = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, x, b) {
    var y = { name: v, delta: g, target: x, should: b };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = ds(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, bf(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, ds(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return no.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, to), document.addEventListener("touchmove", c, to), document.addEventListener("touchstart", u, to), function() {
      no = no.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, to), document.removeEventListener("touchmove", c, to), document.removeEventListener("touchstart", u, to);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: N2(o) }) : null,
    m ? C.createElement(Hm, { gapMode: "margin" }) : null
  );
}
const O2 = zm(Bm, T2);
var qm = C.forwardRef(function(e, t) {
  return C.createElement(Ei, Nt({}, e, { ref: t, sideCar: O2 }));
});
qm.classNames = Ei.classNames;
const Ni = qm, ul = [
  "Enter",
  " "
], k2 = [
  "ArrowDown",
  "PageUp",
  "Home"
], Zm = [
  "ArrowUp",
  "PageDown",
  "End"
], M2 = [
  ...k2,
  ...Zm
], D2 = {
  ltr: [
    ...ul,
    "ArrowRight"
  ],
  rtl: [
    ...ul,
    "ArrowLeft"
  ]
}, R2 = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Pi = "Menu", [la, j2, A2] = br(Pi), [Br, Ua] = st(Pi, [
  A2,
  Pn,
  xr
]), Ti = Pn(), Xm = xr(), [Qm, yr] = Br(Pi), [I2, za] = Br(Pi), L2 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Ti(t), [c, l] = J(null), u = q(!1), d = Ze(a), p = Nn(o);
  return ee(() => {
    const m = () => {
      u.current = !0, document.addEventListener("pointerdown", h, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", h, {
        capture: !0,
        once: !0
      });
    }, h = () => u.current = !1;
    return document.addEventListener("keydown", m, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", m, {
        capture: !0
      }), document.removeEventListener("pointerdown", h, {
        capture: !0
      }), document.removeEventListener("pointermove", h, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ w(Oo, i, /* @__PURE__ */ w(Qm, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ w(I2, {
    scope: t,
    onClose: he(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: p,
    modal: s
  }, r)));
}, Jm = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Ti(n);
  return /* @__PURE__ */ w(Fa, T({}, o, r, {
    ref: t
  }));
}), eh = "MenuPortal", [F2, th] = Br(eh, {
  forceMount: void 0
}), V2 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = yr(eh, t);
  return /* @__PURE__ */ w(F2, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(ct, {
    present: n || a.open
  }, /* @__PURE__ */ w(_i, {
    asChild: !0,
    container: o
  }, r)));
}, rn = "MenuContent", [W2, gu] = Br(rn), U2 = /* @__PURE__ */ L((e, t) => {
  const n = th(rn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = yr(rn, e.__scopeMenu), s = za(rn, e.__scopeMenu);
  return /* @__PURE__ */ w(la.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, /* @__PURE__ */ w(la.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ w(z2, T({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(B2, T({}, o, {
    ref: t
  })))));
}), z2 = /* @__PURE__ */ L((e, t) => {
  const n = yr(rn, e.__scopeMenu), r = q(null), o = Ee(t, r);
  return ee(() => {
    const a = r.current;
    if (a)
      return Wa(a);
  }, []), /* @__PURE__ */ w(bu, T({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: te(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), B2 = /* @__PURE__ */ L((e, t) => {
  const n = yr(rn, e.__scopeMenu);
  return /* @__PURE__ */ w(bu, T({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), bu = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = yr(rn, n), x = za(rn, n), b = Ti(n), y = Xm(n), _ = j2(n), [$, N] = J(null), k = q(null), S = Ee(t, k, g.onContentChange), P = q(0), Y = q(""), U = q(0), B = q(null), Z = q("right"), F = q(0), A = h ? Ni : qt, I = h ? {
    as: cn,
    allowPinchZoom: !0
  } : void 0, W = (R) => {
    var M, K;
    const X = Y.current + R, ae = _().filter(
      (pe) => !pe.disabled
    ), ne = document.activeElement, ge = (M = ae.find(
      (pe) => pe.ref.current === ne
    )) === null || M === void 0 ? void 0 : M.textValue, be = ae.map(
      (pe) => pe.textValue
    ), oe = lC(be, X, ge), ie = (K = ae.find(
      (pe) => pe.textValue === oe
    )) === null || K === void 0 ? void 0 : K.ref.current;
    (function pe(H) {
      Y.current = H, window.clearTimeout(P.current), H !== "" && (P.current = window.setTimeout(
        () => pe(""),
        1e3
      ));
    })(X), ie && setTimeout(
      () => ie.focus()
    );
  };
  ee(() => () => window.clearTimeout(P.current), []), xi();
  const G = he((R) => {
    var M, K;
    return Z.current === ((M = B.current) === null || M === void 0 ? void 0 : M.side) && dC(R, (K = B.current) === null || K === void 0 ? void 0 : K.area);
  }, []);
  return /* @__PURE__ */ w(W2, {
    scope: n,
    searchRef: Y,
    onItemEnter: he((R) => {
      G(R) && R.preventDefault();
    }, [
      G
    ]),
    onItemLeave: he((R) => {
      var M;
      G(R) || ((M = k.current) === null || M === void 0 || M.focus(), N(null));
    }, [
      G
    ]),
    onTriggerLeave: he((R) => {
      G(R) && R.preventDefault();
    }, [
      G
    ]),
    pointerGraceTimerRef: U,
    onPointerGraceIntentChange: he((R) => {
      B.current = R;
    }, [])
  }, /* @__PURE__ */ w(A, I, /* @__PURE__ */ w(yi, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: te(a, (R) => {
      var M;
      R.preventDefault(), (M = k.current) === null || M === void 0 || M.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ w(zr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ w(Ci, T({
    asChild: !0
  }, y, {
    dir: x.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: $,
    onCurrentTabStopIdChange: N,
    onEntryFocus: te(c, (R) => {
      x.isUsingKeyboardRef.current || R.preventDefault();
    })
  }), /* @__PURE__ */ w(Va, T({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": ch(g.open),
    "data-radix-menu-content": "",
    dir: x.dir
  }, b, v, {
    ref: S,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: te(v.onKeyDown, (R) => {
      const K = R.target.closest("[data-radix-menu-content]") === R.currentTarget, X = R.ctrlKey || R.altKey || R.metaKey, ae = R.key.length === 1;
      K && (R.key === "Tab" && R.preventDefault(), !X && ae && W(R.key));
      const ne = k.current;
      if (R.target !== ne || !M2.includes(R.key))
        return;
      R.preventDefault();
      const be = _().filter(
        (oe) => !oe.disabled
      ).map(
        (oe) => oe.ref.current
      );
      Zm.includes(R.key) && be.reverse(), iC(be);
    }),
    onBlur: te(e.onBlur, (R) => {
      R.currentTarget.contains(R.target) || (window.clearTimeout(P.current), Y.current = "");
    }),
    onPointerMove: te(e.onPointerMove, ua((R) => {
      const M = R.target, K = F.current !== R.clientX;
      if (R.currentTarget.contains(M) && K) {
        const X = R.clientX > F.current ? "right" : "left";
        Z.current = X, F.current = R.clientX;
      }
    }))
  })))))));
}), nh = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(me.div, T({
    role: "group"
  }, r, {
    ref: t
  }));
}), H2 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(me.div, T({}, r, {
    ref: t
  }));
}), dl = "MenuItem", yf = "menu.itemSelect", xu = /* @__PURE__ */ L((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = q(null), s = za(dl, e.__scopeMenu), i = gu(dl, e.__scopeMenu), c = Ee(t, a), l = q(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const p = new CustomEvent(yf, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        yf,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), Is(d, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ w(rh, T({}, o, {
    ref: c,
    disabled: n,
    onClick: te(e.onClick, u),
    onPointerDown: (d) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, d), l.current = !0;
    },
    onPointerUp: te(e.onPointerUp, (d) => {
      var p;
      l.current || (p = d.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: te(e.onKeyDown, (d) => {
      const p = i.searchRef.current !== "";
      n || p && d.key === " " || ul.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), rh = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = gu(dl, n), i = Xm(n), c = q(null), l = Ee(t, c), [u, d] = J(!1), [p, m] = J("");
  return ee(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ w(la.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ w(Si, T({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ w(me.div, T({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: te(e.onPointerMove, ua((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: te(e.onPointerLeave, ua(
      (h) => s.onItemLeave(h)
    )),
    onFocus: te(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: te(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), Y2 = /* @__PURE__ */ L((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ w(ah, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ w(xu, T({
    role: "menuitemcheckbox",
    "aria-checked": zs(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": yu(n),
    onSelect: te(
      o.onSelect,
      () => r == null ? void 0 : r(zs(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), K2 = "MenuRadioGroup", [G2, q2] = Br(K2, {
  value: void 0,
  onValueChange: () => {
  }
}), Z2 = /* @__PURE__ */ L((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Ze(r);
  return /* @__PURE__ */ w(G2, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ w(nh, T({}, o, {
    ref: t
  })));
}), X2 = "MenuRadioItem", Q2 = /* @__PURE__ */ L((e, t) => {
  const { value: n, ...r } = e, o = q2(X2, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ w(ah, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ w(xu, T({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": yu(a),
    onSelect: te(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), oh = "MenuItemIndicator", [ah, J2] = Br(oh, {
  checked: !1
}), eC = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = J2(oh, n);
  return /* @__PURE__ */ w(ct, {
    present: r || zs(a.checked) || a.checked === !0
  }, /* @__PURE__ */ w(me.span, T({}, o, {
    ref: t,
    "data-state": yu(a.checked)
  })));
}), tC = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(me.div, T({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), sh = "MenuSub", [nC, ih] = Br(sh), rC = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = yr(sh, t), s = Ti(t), [i, c] = J(null), [l, u] = J(null), d = Ze(o);
  return ee(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ w(Oo, s, /* @__PURE__ */ w(Qm, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ w(nC, {
    scope: t,
    contentId: mt(),
    triggerId: mt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, fs = "MenuSubTrigger", oC = /* @__PURE__ */ L((e, t) => {
  const n = yr(fs, e.__scopeMenu), r = za(fs, e.__scopeMenu), o = ih(fs, e.__scopeMenu), a = gu(fs, e.__scopeMenu), s = q(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = he(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return ee(
    () => u,
    [
      u
    ]
  ), ee(() => {
    const d = i.current;
    return () => {
      window.clearTimeout(d), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ w(Jm, T({
    asChild: !0
  }, l), /* @__PURE__ */ w(rh, T({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": ch(n.open)
  }, e, {
    ref: Da(t, o.onTriggerChange),
    onClick: (d) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: te(e.onPointerMove, ua((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: te(e.onPointerLeave, ua((d) => {
      var p;
      u();
      const m = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
      if (m) {
        var h;
        const v = (h = n.content) === null || h === void 0 ? void 0 : h.dataset.side, g = v === "right", x = g ? -5 : 5, b = m[g ? "left" : "right"], y = m[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + x,
              y: d.clientY
            },
            {
              x: b,
              y: m.top
            },
            {
              x: y,
              y: m.top
            },
            {
              x: y,
              y: m.bottom
            },
            {
              x: b,
              y: m.bottom
            }
          ],
          side: v
        }), window.clearTimeout(i.current), i.current = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(d), d.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: te(e.onKeyDown, (d) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && d.key === " ") && D2[r.dir].includes(d.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })));
}), aC = "MenuSubContent", sC = /* @__PURE__ */ L((e, t) => {
  const n = th(rn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = yr(rn, e.__scopeMenu), s = za(rn, e.__scopeMenu), i = ih(aC, e.__scopeMenu), c = q(null), l = Ee(t, c);
  return /* @__PURE__ */ w(la.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, /* @__PURE__ */ w(la.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(bu, T({
    id: i.contentId,
    "aria-labelledby": i.triggerId
  }, o, {
    ref: l,
    align: "start",
    side: s.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (u) => {
      var d;
      s.isUsingKeyboardRef.current && ((d = c.current) === null || d === void 0 || d.focus()), u.preventDefault();
    },
    onCloseAutoFocus: (u) => u.preventDefault(),
    onFocusOutside: te(e.onFocusOutside, (u) => {
      u.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: te(e.onEscapeKeyDown, (u) => {
      s.onClose(), u.preventDefault();
    }),
    onKeyDown: te(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), p = R2[s.dir].includes(u.key);
      if (d && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function ch(e) {
  return e ? "open" : "closed";
}
function zs(e) {
  return e === "indeterminate";
}
function yu(e) {
  return zs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function iC(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function cC(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function lC(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = cC(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function uC(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function dC(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return uC(n, t);
}
function ua(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const wu = L2, $u = Jm, _u = V2, Cu = U2, Su = nh, Eu = H2, Nu = xu, Pu = Y2, Tu = Z2, Ou = Q2, ku = eC, Mu = tC, Du = rC, Ru = oC, ju = sC, lh = "ContextMenu", [fC, zD] = st(lh, [
  Ua
]), At = Ua(), [pC, uh] = fC(lh), mC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = J(!1), c = At(t), l = Ze(r), u = he((d) => {
    i(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ w(pC, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ w(wu, T({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, hC = "ContextMenuTrigger", vC = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = uh(hC, n), s = At(n), i = q({
    x: 0,
    y: 0
  }), c = q({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = q(0), u = he(
    () => window.clearTimeout(l.current),
    []
  ), d = (p) => {
    i.current = {
      x: p.clientX,
      y: p.clientY
    }, a.onOpenChange(!0);
  };
  return ee(
    () => u,
    [
      u
    ]
  ), ee(
    () => void (r && u()),
    [
      r,
      u
    ]
  ), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w($u, T({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ w(me.span, T({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : te(e.onContextMenu, (p) => {
      u(), d(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : te(e.onPointerDown, ps((p) => {
      u(), l.current = window.setTimeout(
        () => d(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : te(e.onPointerMove, ps(u)),
    onPointerCancel: r ? e.onPointerCancel : te(e.onPointerCancel, ps(u)),
    onPointerUp: r ? e.onPointerUp : te(e.onPointerUp, ps(u))
  })));
}), gC = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = At(t);
  return /* @__PURE__ */ w(_u, T({}, r, n));
}, bC = "ContextMenuContent", xC = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = uh(bC, n), a = At(n), s = q(!1);
  return /* @__PURE__ */ w(Cu, T({}, a, r, {
    ref: t,
    side: "right",
    sideOffset: 2,
    align: "start",
    onCloseAutoFocus: (i) => {
      var c;
      (c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, i), !i.defaultPrevented && s.current && i.preventDefault(), s.current = !1;
    },
    onInteractOutside: (i) => {
      var c;
      (c = e.onInteractOutside) === null || c === void 0 || c.call(e, i), !i.defaultPrevented && !o.modal && (s.current = !0);
    },
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), yC = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Su, T({}, o, r, {
    ref: t
  }));
}), wC = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Eu, T({}, o, r, {
    ref: t
  }));
}), $C = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Nu, T({}, o, r, {
    ref: t
  }));
}), _C = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Pu, T({}, o, r, {
    ref: t
  }));
}), CC = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Tu, T({}, o, r, {
    ref: t
  }));
}), SC = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Ou, T({}, o, r, {
    ref: t
  }));
}), EC = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ku, T({}, o, r, {
    ref: t
  }));
}), NC = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Mu, T({}, o, r, {
    ref: t
  }));
}), PC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = At(t), [i, c] = ft({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ w(Du, T({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, TC = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Ru, T({}, o, r, {
    ref: t
  }));
}), OC = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ju, T({}, o, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
function ps(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const kC = mC, MC = vC, dh = gC, fh = xC, DC = yC, ph = wC, mh = $C, hh = _C, RC = CC, vh = SC, gh = EC, bh = NC, jC = PC, xh = TC, yh = OC, BD = kC, HD = MC, YD = DC, KD = dh, GD = jC, qD = RC, AC = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  xh,
  {
    ref: o,
    className: j(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(Wr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
AC.displayName = xh.displayName;
const IC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  yh,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
IC.displayName = yh.displayName;
const LC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(dh, { children: /* @__PURE__ */ f.exports.jsx(
  fh,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
LC.displayName = fh.displayName;
const FC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  mh,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
FC.displayName = mh.displayName;
const VC = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  hh,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(gh, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
VC.displayName = hh.displayName;
const WC = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  vh,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(gh, { children: /* @__PURE__ */ f.exports.jsx(vi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
WC.displayName = vh.displayName;
const UC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ph,
  {
    ref: r,
    className: j(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
UC.displayName = ph.displayName;
const zC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  bh,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
zC.displayName = bh.displayName;
const BC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: j(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
BC.displayName = "ContextMenuShortcut";
var Ba = (e) => e.type === "checkbox", co = (e) => e instanceof Date, Mt = (e) => e == null;
const wh = (e) => typeof e == "object";
var vt = (e) => !Mt(e) && !Array.isArray(e) && wh(e) && !co(e), $h = (e) => vt(e) && e.target ? Ba(e.target) ? e.target.checked : e.target.value : e, HC = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, _h = (e, t) => e.has(HC(t)), YC = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return vt(t) && t.hasOwnProperty("isPrototypeOf");
}, Au = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function bn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Au && (e instanceof Blob || e instanceof FileList)) && (n || vt(e)))
    if (t = n ? [] : {}, !n && !YC(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = bn(e[r]));
  else
    return e;
  return t;
}
var Ha = (e) => Array.isArray(e) ? e.filter(Boolean) : [], dt = (e) => e === void 0, $e = (e, t, n) => {
  if (!t || !vt(e))
    return n;
  const r = Ha(t.split(/[,[\].]+?/)).reduce((o, a) => Mt(o) ? o : o[a], e);
  return dt(r) || r === e ? dt(e[t]) ? n : e[t] : r;
};
const Bs = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, tn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Dn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Ch = E.createContext(null), Oi = () => E.useContext(Ch), KC = (e) => {
  const { children: t, ...n } = e;
  return E.createElement(Ch.Provider, { value: n }, t);
};
var Sh = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== tn.all && (t._proxyFormState[s] = !r || tn.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Kt = (e) => vt(e) && !Object.keys(e).length, Eh = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Kt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || tn.all));
}, Ss = (e) => Array.isArray(e) ? e : [e], Nh = (e, t, n) => n && t ? e === t : !e || !t || e === t || Ss(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function Iu(e) {
  const t = E.useRef(e);
  t.current = e, E.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function GC(e) {
  const t = Oi(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = E.useState(n._formState), c = E.useRef(!0), l = E.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = E.useRef(o);
  return u.current = o, Iu({
    disabled: r,
    next: (d) => c.current && Nh(u.current, d.name, a) && Eh(d, l.current, n._updateFormState) && i({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), E.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Sh(s, n, l.current, !1);
}
var xn = (e) => typeof e == "string", Ph = (e, t, n, r, o) => xn(e) ? (r && t.watch.add(e), $e(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), $e(n, a))) : (r && (t.watchAll = !0), n);
function qC(e) {
  const t = Oi(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = E.useRef(r);
  i.current = r, Iu({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Nh(i.current, u.name, s) && l(bn(Ph(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = E.useState(n._getWatch(r, o));
  return E.useEffect(() => n._removeUnmounted()), c;
}
var Lu = (e) => /^\w*$/.test(e), Th = (e) => Ha(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Xe(e, t, n) {
  let r = -1;
  const o = Lu(t) ? [t] : Th(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const l = e[i];
      c = vt(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
}
function ZC(e) {
  const t = Oi(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = _h(r._names.array, n), s = qC({
    control: r,
    name: n,
    defaultValue: $e(r._formValues, n, $e(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = GC({
    control: r,
    name: n
  }), c = E.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), E.useEffect(() => {
    const l = r._options.shouldUnregister || o, u = (d, p) => {
      const m = $e(r._fields, d);
      m && (m._f.mount = p);
    };
    if (u(n, !0), l) {
      const d = bn($e(r._options.defaultValues, n));
      Xe(r._defaultValues, n, d), dt($e(r._formValues, n)) && Xe(r._formValues, n, d);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : u(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: E.useCallback((l) => c.current.onChange({
        target: {
          value: $h(l),
          name: n
        },
        type: Bs.CHANGE
      }), [n]),
      onBlur: E.useCallback(() => c.current.onBlur({
        target: {
          value: $e(r._formValues, n),
          name: n
        },
        type: Bs.BLUR
      }), [n, r]),
      ref: (l) => {
        const u = $e(r._fields, n);
        u && l && (u._f.ref = {
          focus: () => l.focus(),
          select: () => l.select(),
          setCustomValidity: (d) => l.setCustomValidity(d),
          reportValidity: () => l.reportValidity()
        });
      }
    },
    formState: i,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!$e(i.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!$e(i.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!$e(i.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => $e(i.errors, n)
      }
    })
  };
}
const XC = (e) => e.render(ZC(e));
var Oh = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const fl = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const o = $e(e, r);
    if (o) {
      const { _f: a, ...s } = o;
      if (a && t(a.name)) {
        if (a.ref.focus) {
          a.ref.focus();
          break;
        } else if (a.refs && a.refs[0].focus) {
          a.refs[0].focus();
          break;
        }
      } else
        vt(s) && fl(s, t);
    }
  }
};
var wf = (e) => ({
  isOnSubmit: !e || e === tn.onSubmit,
  isOnBlur: e === tn.onBlur,
  isOnChange: e === tn.onChange,
  isOnAll: e === tn.all,
  isOnTouch: e === tn.onTouched
}), $f = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), QC = (e, t, n) => {
  const r = Ha($e(e, n));
  return Xe(r, "root", t[n]), Xe(e, n, r), e;
}, po = (e) => typeof e == "boolean", Fu = (e) => e.type === "file", ir = (e) => typeof e == "function", Hs = (e) => {
  if (!Au)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Es = (e) => xn(e), Vu = (e) => e.type === "radio", Ys = (e) => e instanceof RegExp;
const _f = {
  value: !1,
  isValid: !1
}, Cf = { value: !0, isValid: !0 };
var kh = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !dt(e[0].attributes.value) ? dt(e[0].value) || e[0].value === "" ? Cf : { value: e[0].value, isValid: !0 } : Cf
    ) : _f;
  }
  return _f;
};
const Sf = {
  isValid: !1,
  value: null
};
var Mh = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Sf) : Sf;
function Ef(e, t, n = "validate") {
  if (Es(e) || Array.isArray(e) && e.every(Es) || po(e) && !e)
    return {
      type: n,
      message: Es(e) ? e : "",
      ref: t
    };
}
var ro = (e) => vt(e) && !Ys(e) ? e : {
  value: e,
  message: ""
}, Nf = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: m, name: h, valueAsNumber: v, mount: g, disabled: x } = e._f, b = $e(t, h);
  if (!g || x)
    return {};
  const y = s ? s[0] : a, _ = (B) => {
    r && y.reportValidity && (y.setCustomValidity(po(B) ? "" : B || ""), y.reportValidity());
  }, $ = {}, N = Vu(a), k = Ba(a), S = N || k, P = (v || Fu(a)) && dt(a.value) && dt(b) || Hs(a) && a.value === "" || b === "" || Array.isArray(b) && !b.length, Y = Oh.bind(null, h, n, $), U = (B, Z, F, A = Dn.maxLength, I = Dn.minLength) => {
    const W = B ? Z : F;
    $[h] = {
      type: B ? A : I,
      message: W,
      ref: a,
      ...Y(B ? A : I, W)
    };
  };
  if (o ? !Array.isArray(b) || !b.length : i && (!S && (P || Mt(b)) || po(b) && !b || k && !kh(s).isValid || N && !Mh(s).isValid)) {
    const { value: B, message: Z } = Es(i) ? { value: !!i, message: i } : ro(i);
    if (B && ($[h] = {
      type: Dn.required,
      message: Z,
      ref: y,
      ...Y(Dn.required, Z)
    }, !n))
      return _(Z), $;
  }
  if (!P && (!Mt(u) || !Mt(d))) {
    let B, Z;
    const F = ro(d), A = ro(u);
    if (!Mt(b) && !isNaN(b)) {
      const I = a.valueAsNumber || b && +b;
      Mt(F.value) || (B = I > F.value), Mt(A.value) || (Z = I < A.value);
    } else {
      const I = a.valueAsDate || new Date(b), W = (M) => new Date(new Date().toDateString() + " " + M), G = a.type == "time", R = a.type == "week";
      xn(F.value) && b && (B = G ? W(b) > W(F.value) : R ? b > F.value : I > new Date(F.value)), xn(A.value) && b && (Z = G ? W(b) < W(A.value) : R ? b < A.value : I < new Date(A.value));
    }
    if ((B || Z) && (U(!!B, F.message, A.message, Dn.max, Dn.min), !n))
      return _($[h].message), $;
  }
  if ((c || l) && !P && (xn(b) || o && Array.isArray(b))) {
    const B = ro(c), Z = ro(l), F = !Mt(B.value) && b.length > +B.value, A = !Mt(Z.value) && b.length < +Z.value;
    if ((F || A) && (U(F, B.message, Z.message), !n))
      return _($[h].message), $;
  }
  if (p && !P && xn(b)) {
    const { value: B, message: Z } = ro(p);
    if (Ys(B) && !b.match(B) && ($[h] = {
      type: Dn.pattern,
      message: Z,
      ref: a,
      ...Y(Dn.pattern, Z)
    }, !n))
      return _(Z), $;
  }
  if (m) {
    if (ir(m)) {
      const B = await m(b, t), Z = Ef(B, y);
      if (Z && ($[h] = {
        ...Z,
        ...Y(Dn.validate, Z.message)
      }, !n))
        return _(Z.message), $;
    } else if (vt(m)) {
      let B = {};
      for (const Z in m) {
        if (!Kt(B) && !n)
          break;
        const F = Ef(await m[Z](b, t), y, Z);
        F && (B = {
          ...F,
          ...Y(Z, F.message)
        }, _(F.message), n && ($[h] = B));
      }
      if (!Kt(B) && ($[h] = {
        ref: y,
        ...B
      }, !n))
        return $;
    }
  }
  return _(!0), $;
};
function JC(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = dt(e) ? r++ : e[t[r++]];
  return e;
}
function eS(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !dt(e[t]))
      return !1;
  return !0;
}
function wt(e, t) {
  const n = Array.isArray(t) ? t : Lu(t) ? [t] : Th(t), r = n.length === 1 ? e : JC(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (vt(r) && Kt(r) || Array.isArray(r) && eS(r)) && wt(e, n.slice(0, -1)), e;
}
function wc() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const a of e)
        a.next && a.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((a) => a !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}
var Ks = (e) => Mt(e) || !wh(e);
function Tr(e, t) {
  if (Ks(e) || Ks(t))
    return e === t;
  if (co(e) && co(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const o of n) {
    const a = e[o];
    if (!r.includes(o))
      return !1;
    if (o !== "ref") {
      const s = t[o];
      if (co(a) && co(s) || vt(a) && vt(s) || Array.isArray(a) && Array.isArray(s) ? !Tr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Dh = (e) => e.type === "select-multiple", tS = (e) => Vu(e) || Ba(e), $c = (e) => Hs(e) && e.isConnected, Rh = (e) => {
  for (const t in e)
    if (ir(e[t]))
      return !0;
  return !1;
};
function Gs(e, t = {}) {
  const n = Array.isArray(e);
  if (vt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || vt(e[r]) && !Rh(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Gs(e[r], t[r])) : Mt(e[r]) || (t[r] = !0);
  return t;
}
function jh(e, t, n) {
  const r = Array.isArray(e);
  if (vt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || vt(e[o]) && !Rh(e[o]) ? dt(t) || Ks(n[o]) ? n[o] = Array.isArray(e[o]) ? Gs(e[o], []) : { ...Gs(e[o]) } : jh(e[o], Mt(t) ? {} : t[o], n[o]) : n[o] = !Tr(e[o], t[o]);
  return n;
}
var _c = (e, t) => jh(e, t, Gs(t)), Ah = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => dt(e) ? e : t ? e === "" ? NaN : e && +e : n && xn(e) ? new Date(e) : r ? r(e) : e;
function Cc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Fu(t) ? t.files : Vu(t) ? Mh(e.refs).value : Dh(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Ba(t) ? kh(e.refs).value : Ah(dt(t.value) ? e.ref.value : t.value, e);
}
var nS = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = $e(t, a);
    s && Xe(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Xo = (e) => dt(e) ? e : Ys(e) ? e.source : vt(e) ? Ys(e.value) ? e.value.source : e.value : e, rS = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Pf(e, t, n) {
  const r = $e(e, n);
  if (r || Lu(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = $e(t, a), i = $e(e, a);
    if (s && !Array.isArray(s) && n !== a)
      return { name: n };
    if (i && i.type)
      return {
        name: a,
        error: i
      };
    o.pop();
  }
  return {
    name: n
  };
}
var oS = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, aS = (e, t) => !Ha($e(e, t)).length && wt(e, t);
const sS = {
  mode: tn.onSubmit,
  reValidateMode: tn.onChange,
  shouldFocusError: !0
};
function iS(e = {}, t) {
  let n = {
    ...sS,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: ir(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, o = {}, a = vt(n.defaultValues) || vt(n.values) ? bn(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : bn(a), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, c = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, u = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, p = {
    values: wc(),
    array: wc(),
    state: wc()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, h = wf(n.mode), v = wf(n.reValidateMode), g = n.criteriaMode === tn.all, x = (O) => (z) => {
    clearTimeout(u), u = setTimeout(O, z);
  }, b = async (O) => {
    if (d.isValid || O) {
      const z = n.resolver ? Kt((await P()).errors) : await U(o, !0);
      z !== r.isValid && p.state.next({
        isValid: z
      });
    }
  }, y = (O) => d.isValidating && p.state.next({
    isValidating: O
  }), _ = (O, z = [], Q, fe, le = !0, se = !0) => {
    if (fe && Q) {
      if (i.action = !0, se && Array.isArray($e(o, O))) {
        const we = Q($e(o, O), fe.argA, fe.argB);
        le && Xe(o, O, we);
      }
      if (se && Array.isArray($e(r.errors, O))) {
        const we = Q($e(r.errors, O), fe.argA, fe.argB);
        le && Xe(r.errors, O, we), aS(r.errors, O);
      }
      if (d.touchedFields && se && Array.isArray($e(r.touchedFields, O))) {
        const we = Q($e(r.touchedFields, O), fe.argA, fe.argB);
        le && Xe(r.touchedFields, O, we);
      }
      d.dirtyFields && (r.dirtyFields = _c(a, s)), p.state.next({
        name: O,
        isDirty: Z(O, z),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Xe(s, O, z);
  }, $ = (O, z) => {
    Xe(r.errors, O, z), p.state.next({
      errors: r.errors
    });
  }, N = (O, z, Q, fe) => {
    const le = $e(o, O);
    if (le) {
      const se = $e(s, O, dt(Q) ? $e(a, O) : Q);
      dt(se) || fe && fe.defaultChecked || z ? Xe(s, O, z ? se : Cc(le._f)) : I(O, se), i.mount && b();
    }
  }, k = (O, z, Q, fe, le) => {
    let se = !1, we = !1;
    const Le = {
      name: O
    };
    if (!Q || fe) {
      d.isDirty && (we = r.isDirty, r.isDirty = Le.isDirty = Z(), se = we !== Le.isDirty);
      const Ue = Tr($e(a, O), z);
      we = $e(r.dirtyFields, O), Ue ? wt(r.dirtyFields, O) : Xe(r.dirtyFields, O, !0), Le.dirtyFields = r.dirtyFields, se = se || d.dirtyFields && we !== !Ue;
    }
    if (Q) {
      const Ue = $e(r.touchedFields, O);
      Ue || (Xe(r.touchedFields, O, Q), Le.touchedFields = r.touchedFields, se = se || d.touchedFields && Ue !== Q);
    }
    return se && le && p.state.next(Le), se ? Le : {};
  }, S = (O, z, Q, fe) => {
    const le = $e(r.errors, O), se = d.isValid && po(z) && r.isValid !== z;
    if (e.delayError && Q ? (l = x(() => $(O, Q)), l(e.delayError)) : (clearTimeout(u), l = null, Q ? Xe(r.errors, O, Q) : wt(r.errors, O)), (Q ? !Tr(le, Q) : le) || !Kt(fe) || se) {
      const we = {
        ...fe,
        ...se && po(z) ? { isValid: z } : {},
        errors: r.errors,
        name: O
      };
      r = {
        ...r,
        ...we
      }, p.state.next(we);
    }
    y(!1);
  }, P = async (O) => n.resolver(s, n.context, nS(O || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), Y = async (O) => {
    const { errors: z } = await P();
    if (O)
      for (const Q of O) {
        const fe = $e(z, Q);
        fe ? Xe(r.errors, Q, fe) : wt(r.errors, Q);
      }
    else
      r.errors = z;
    return z;
  }, U = async (O, z, Q = {
    valid: !0
  }) => {
    for (const fe in O) {
      const le = O[fe];
      if (le) {
        const { _f: se, ...we } = le;
        if (se) {
          const Le = c.array.has(se.name), Ue = await Nf(le, s, g, n.shouldUseNativeValidation && !z, Le);
          if (Ue[se.name] && (Q.valid = !1, z))
            break;
          !z && ($e(Ue, se.name) ? Le ? QC(r.errors, Ue, se.name) : Xe(r.errors, se.name, Ue[se.name]) : wt(r.errors, se.name));
        }
        we && await U(we, z, Q);
      }
    }
    return Q.valid;
  }, B = () => {
    for (const O of c.unMount) {
      const z = $e(o, O);
      z && (z._f.refs ? z._f.refs.every((Q) => !$c(Q)) : !$c(z._f.ref)) && be(O);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, Z = (O, z) => (O && z && Xe(s, O, z), !Tr(K(), a)), F = (O, z, Q) => Ph(O, c, {
    ...i.mount ? s : dt(z) ? a : xn(O) ? { [O]: z } : z
  }, Q, z), A = (O) => Ha($e(i.mount ? s : a, O, e.shouldUnregister ? $e(a, O, []) : [])), I = (O, z, Q = {}) => {
    const fe = $e(o, O);
    let le = z;
    if (fe) {
      const se = fe._f;
      se && (!se.disabled && Xe(s, O, Ah(z, se)), le = Hs(se.ref) && Mt(z) ? "" : z, Dh(se.ref) ? [...se.ref.options].forEach((we) => we.selected = le.includes(we.value)) : se.refs ? Ba(se.ref) ? se.refs.length > 1 ? se.refs.forEach((we) => (!we.defaultChecked || !we.disabled) && (we.checked = Array.isArray(le) ? !!le.find((Le) => Le === we.value) : le === we.value)) : se.refs[0] && (se.refs[0].checked = !!le) : se.refs.forEach((we) => we.checked = we.value === le) : Fu(se.ref) ? se.ref.value = "" : (se.ref.value = le, se.ref.type || p.values.next({
        name: O,
        values: { ...s }
      })));
    }
    (Q.shouldDirty || Q.shouldTouch) && k(O, le, Q.shouldTouch, Q.shouldDirty, !0), Q.shouldValidate && M(O);
  }, W = (O, z, Q) => {
    for (const fe in z) {
      const le = z[fe], se = `${O}.${fe}`, we = $e(o, se);
      (c.array.has(O) || !Ks(le) || we && !we._f) && !co(le) ? W(se, le, Q) : I(se, le, Q);
    }
  }, G = (O, z, Q = {}) => {
    const fe = $e(o, O), le = c.array.has(O), se = bn(z);
    Xe(s, O, se), le ? (p.array.next({
      name: O,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && Q.shouldDirty && p.state.next({
      name: O,
      dirtyFields: _c(a, s),
      isDirty: Z(O, se)
    })) : fe && !fe._f && !Mt(se) ? W(O, se, Q) : I(O, se, Q), $f(O, c) && p.state.next({ ...r }), p.values.next({
      name: O,
      values: { ...s }
    }), !i.mount && t();
  }, R = async (O) => {
    const z = O.target;
    let Q = z.name, fe = !0;
    const le = $e(o, Q), se = () => z.type ? Cc(le._f) : $h(O);
    if (le) {
      let we, Le;
      const Ue = se(), yt = O.type === Bs.BLUR || O.type === Bs.FOCUS_OUT, gn = !rS(le._f) && !n.resolver && !$e(r.errors, Q) && !le._f.deps || oS(yt, $e(r.touchedFields, Q), r.isSubmitted, v, h), St = $f(Q, c, yt);
      Xe(s, Q, Ue), yt ? (le._f.onBlur && le._f.onBlur(O), l && l(0)) : le._f.onChange && le._f.onChange(O);
      const Ne = k(Q, Ue, yt, !1), Se = !Kt(Ne) || St;
      if (!yt && p.values.next({
        name: Q,
        type: O.type,
        values: { ...s }
      }), gn)
        return d.isValid && b(), Se && p.state.next({ name: Q, ...St ? {} : Ne });
      if (!yt && St && p.state.next({ ...r }), y(!0), n.resolver) {
        const { errors: Re } = await P([Q]), He = Pf(r.errors, o, Q), tt = Pf(Re, o, He.name || Q);
        we = tt.error, Q = tt.name, Le = Kt(Re);
      } else
        we = (await Nf(le, s, g, n.shouldUseNativeValidation))[Q], fe = isNaN(Ue) || Ue === $e(s, Q, Ue), fe && (we ? Le = !1 : d.isValid && (Le = await U(o, !0)));
      fe && (le._f.deps && M(le._f.deps), S(Q, Le, we, Ne));
    }
  }, M = async (O, z = {}) => {
    let Q, fe;
    const le = Ss(O);
    if (y(!0), n.resolver) {
      const se = await Y(dt(O) ? O : le);
      Q = Kt(se), fe = O ? !le.some((we) => $e(se, we)) : Q;
    } else
      O ? (fe = (await Promise.all(le.map(async (se) => {
        const we = $e(o, se);
        return await U(we && we._f ? { [se]: we } : we);
      }))).every(Boolean), !(!fe && !r.isValid) && b()) : fe = Q = await U(o);
    return p.state.next({
      ...!xn(O) || d.isValid && Q !== r.isValid ? {} : { name: O },
      ...n.resolver || !O ? { isValid: Q } : {},
      errors: r.errors,
      isValidating: !1
    }), z.shouldFocus && !fe && fl(o, (se) => se && $e(r.errors, se), O ? le : c.mount), fe;
  }, K = (O) => {
    const z = {
      ...a,
      ...i.mount ? s : {}
    };
    return dt(O) ? z : xn(O) ? $e(z, O) : O.map((Q) => $e(z, Q));
  }, X = (O, z) => ({
    invalid: !!$e((z || r).errors, O),
    isDirty: !!$e((z || r).dirtyFields, O),
    isTouched: !!$e((z || r).touchedFields, O),
    error: $e((z || r).errors, O)
  }), ae = (O) => {
    O && Ss(O).forEach((z) => wt(r.errors, z)), p.state.next({
      errors: O ? r.errors : {}
    });
  }, ne = (O, z, Q) => {
    const fe = ($e(o, O, { _f: {} })._f || {}).ref;
    Xe(r.errors, O, {
      ...z,
      ref: fe
    }), p.state.next({
      name: O,
      errors: r.errors,
      isValid: !1
    }), Q && Q.shouldFocus && fe && fe.focus && fe.focus();
  }, ge = (O, z) => ir(O) ? p.values.subscribe({
    next: (Q) => O(F(void 0, z), Q)
  }) : F(O, z, !0), be = (O, z = {}) => {
    for (const Q of O ? Ss(O) : c.mount)
      c.mount.delete(Q), c.array.delete(Q), z.keepValue || (wt(o, Q), wt(s, Q)), !z.keepError && wt(r.errors, Q), !z.keepDirty && wt(r.dirtyFields, Q), !z.keepTouched && wt(r.touchedFields, Q), !n.shouldUnregister && !z.keepDefaultValue && wt(a, Q);
    p.values.next({
      values: { ...s }
    }), p.state.next({
      ...r,
      ...z.keepDirty ? { isDirty: Z() } : {}
    }), !z.keepIsValid && b();
  }, oe = (O, z = {}) => {
    let Q = $e(o, O);
    const fe = po(z.disabled);
    return Xe(o, O, {
      ...Q || {},
      _f: {
        ...Q && Q._f ? Q._f : { ref: { name: O } },
        name: O,
        mount: !0,
        ...z
      }
    }), c.mount.add(O), dt(z.value) || Xe(s, O, z.value), Q ? fe && Xe(s, O, z.disabled ? void 0 : $e(s, O, Cc(Q._f))) : N(O, !0, z.value), {
      ...fe ? { disabled: z.disabled } : {},
      ...n.progressive ? {
        required: !!z.required,
        min: Xo(z.min),
        max: Xo(z.max),
        minLength: Xo(z.minLength),
        maxLength: Xo(z.maxLength),
        pattern: Xo(z.pattern)
      } : {},
      name: O,
      onChange: R,
      onBlur: R,
      ref: (le) => {
        if (le) {
          oe(O, z), Q = $e(o, O);
          const se = dt(le.value) && le.querySelectorAll && le.querySelectorAll("input,select,textarea")[0] || le, we = tS(se), Le = Q._f.refs || [];
          if (we ? Le.find((Ue) => Ue === se) : se === Q._f.ref)
            return;
          Xe(o, O, {
            _f: {
              ...Q._f,
              ...we ? {
                refs: [
                  ...Le.filter($c),
                  se,
                  ...Array.isArray($e(a, O)) ? [{}] : []
                ],
                ref: { type: se.type, name: O }
              } : { ref: se }
            }
          }), N(O, !1, void 0, se);
        } else
          Q = $e(o, O, {}), Q._f && (Q._f.mount = !1), (n.shouldUnregister || z.shouldUnregister) && !(_h(c.array, O) && i.action) && c.unMount.add(O);
      }
    };
  }, ie = () => n.shouldFocusError && fl(o, (O) => O && $e(r.errors, O), c.mount), pe = (O, z) => async (Q) => {
    Q && (Q.preventDefault && Q.preventDefault(), Q.persist && Q.persist());
    let fe = bn(s);
    if (p.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: le, values: se } = await P();
      r.errors = le, fe = se;
    } else
      await U(o);
    wt(r.errors, "root"), Kt(r.errors) ? (p.state.next({
      errors: {}
    }), await O(fe, Q)) : (z && await z({ ...r.errors }, Q), ie(), setTimeout(ie)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Kt(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, H = (O, z = {}) => {
    $e(o, O) && (dt(z.defaultValue) ? G(O, $e(a, O)) : (G(O, z.defaultValue), Xe(a, O, z.defaultValue)), z.keepTouched || wt(r.touchedFields, O), z.keepDirty || (wt(r.dirtyFields, O), r.isDirty = z.defaultValue ? Z(O, $e(a, O)) : Z()), z.keepError || (wt(r.errors, O), d.isValid && b()), p.state.next({ ...r }));
  }, re = (O, z = {}) => {
    const Q = O || a, fe = bn(Q), le = O && !Kt(O) ? fe : a;
    if (z.keepDefaultValues || (a = Q), !z.keepValues) {
      if (z.keepDirtyValues || m)
        for (const se of c.mount)
          $e(r.dirtyFields, se) ? Xe(le, se, $e(s, se)) : G(se, $e(le, se));
      else {
        if (Au && dt(O))
          for (const se of c.mount) {
            const we = $e(o, se);
            if (we && we._f) {
              const Le = Array.isArray(we._f.refs) ? we._f.refs[0] : we._f.ref;
              if (Hs(Le)) {
                const Ue = Le.closest("form");
                if (Ue) {
                  Ue.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      s = e.shouldUnregister ? z.keepDefaultValues ? bn(a) : {} : bn(le), p.array.next({
        values: { ...le }
      }), p.values.next({
        values: { ...le }
      });
    }
    c = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !i.mount && t(), i.mount = !d.isValid || !!z.keepIsValid, i.watch = !!e.shouldUnregister, p.state.next({
      submitCount: z.keepSubmitCount ? r.submitCount : 0,
      isDirty: z.keepDirty ? r.isDirty : !!(z.keepDefaultValues && !Tr(O, a)),
      isSubmitted: z.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: z.keepDirtyValues ? r.dirtyFields : z.keepDefaultValues && O ? _c(a, O) : {},
      touchedFields: z.keepTouched ? r.touchedFields : {},
      errors: z.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, V = (O, z) => re(ir(O) ? O(s) : O, z);
  return {
    control: {
      register: oe,
      unregister: be,
      getFieldState: X,
      handleSubmit: pe,
      setError: ne,
      _executeSchema: P,
      _getWatch: F,
      _getDirty: Z,
      _updateValid: b,
      _removeUnmounted: B,
      _updateFieldArray: _,
      _getFieldArray: A,
      _reset: re,
      _resetDefaultValues: () => ir(n.defaultValues) && n.defaultValues().then((O) => {
        V(O, n.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (O) => {
        r = {
          ...r,
          ...O
        };
      },
      _subjects: p,
      _proxyFormState: d,
      get _fields() {
        return o;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return i;
      },
      set _state(O) {
        i = O;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return c;
      },
      set _names(O) {
        c = O;
      },
      get _formState() {
        return r;
      },
      set _formState(O) {
        r = O;
      },
      get _options() {
        return n;
      },
      set _options(O) {
        n = {
          ...n,
          ...O
        };
      }
    },
    trigger: M,
    register: oe,
    handleSubmit: pe,
    watch: ge,
    setValue: G,
    getValues: K,
    reset: V,
    resetField: H,
    clearErrors: ae,
    unregister: be,
    setError: ne,
    setFocus: (O, z = {}) => {
      const Q = $e(o, O), fe = Q && Q._f;
      if (fe) {
        const le = fe.refs ? fe.refs[0] : fe.ref;
        le.focus && (le.focus(), z.shouldSelect && le.select());
      }
    },
    getFieldState: X
  };
}
function Ih(e = {}) {
  const t = E.useRef(), n = E.useRef(), [r, o] = E.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ir(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: ir(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...iS(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, Iu({
    subject: a._subjects.state,
    next: (s) => {
      Eh(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), E.useEffect(() => {
    e.values && !Tr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), E.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = Sh(r, a), t.current;
}
const cS = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ w(me.label, T({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Lh = cS, lS = No(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Tn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Lh,
  {
    ref: n,
    className: j(lS(), e),
    ...t
  }
));
Tn.displayName = Lh.displayName;
const Fh = KC, Vh = C.createContext(
  {}
), Hr = ({
  ...e
}) => /* @__PURE__ */ f.exports.jsx(Vh.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.exports.jsx(XC, { ...e }) }), ki = () => {
  const e = C.useContext(Vh), t = C.useContext(Wh), { getFieldState: n, formState: r } = Oi(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, Wh = C.createContext(
  {}
), wr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ f.exports.jsx(Wh.Provider, { value: { id: r }, children: /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: j("space-y-2", e), ...t }) });
});
wr.displayName = "FormItem";
const Yr = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = ki();
  return /* @__PURE__ */ f.exports.jsx(
    Tn,
    {
      ref: n,
      className: j(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Yr.displayName = "FormLabel";
const Ya = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = ki();
  return /* @__PURE__ */ f.exports.jsx(
    cn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Ya.displayName = "FormControl";
const ko = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = ki();
  return /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: j("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
ko.displayName = "FormDescription";
const uS = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = ki(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: j("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
uS.displayName = "FormMessage";
const Uh = "Dialog", [zh, Bh] = st(Uh), [dS, mn] = zh(Uh), fS = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = q(null), c = q(null), [l = !1, u] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(dS, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: mt(),
    titleId: mt(),
    descriptionId: mt(),
    open: l,
    onOpenChange: u,
    onOpenToggle: he(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, pS = "DialogTrigger", mS = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(pS, n), a = Ee(t, o.triggerRef);
  return /* @__PURE__ */ w(me.button, T({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Wu(o.open)
  }, r, {
    ref: a,
    onClick: te(e.onClick, o.onOpenToggle)
  }));
}), Hh = "DialogPortal", [hS, Yh] = zh(Hh, {
  forceMount: void 0
}), vS = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = mn(Hh, t);
  return /* @__PURE__ */ w(hS, {
    scope: t,
    forceMount: n
  }, Vt.map(
    r,
    (s) => /* @__PURE__ */ w(ct, {
      present: n || a.open
    }, /* @__PURE__ */ w(_i, {
      asChild: !0,
      container: o
    }, s))
  ));
}, pl = "DialogOverlay", gS = /* @__PURE__ */ L((e, t) => {
  const n = Yh(pl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = mn(pl, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, /* @__PURE__ */ w(bS, T({}, o, {
    ref: t
  }))) : null;
}), bS = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(pl, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(Ni, {
      as: cn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(me.div, T({
      "data-state": Wu(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), xo = "DialogContent", xS = /* @__PURE__ */ L((e, t) => {
  const n = Yh(xo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = mn(xo, e.__scopeDialog);
  return /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(yS, T({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(wS, T({}, o, {
    ref: t
  })));
}), yS = /* @__PURE__ */ L((e, t) => {
  const n = mn(xo, e.__scopeDialog), r = q(null), o = Ee(t, n.contentRef, r);
  return ee(() => {
    const a = r.current;
    if (a)
      return Wa(a);
  }, []), /* @__PURE__ */ w(Kh, T({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: te(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: te(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: te(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), wS = /* @__PURE__ */ L((e, t) => {
  const n = mn(xo, e.__scopeDialog), r = q(!1), o = q(!1);
  return /* @__PURE__ */ w(Kh, T({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var i;
        r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var s, i;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), Kh = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = mn(xo, n), c = q(null), l = Ee(t, c);
  return xi(), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(yi, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(zr, T({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Wu(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), Gh = "DialogTitle", $S = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(Gh, n);
  return /* @__PURE__ */ w(me.h2, T({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), _S = "DialogDescription", CS = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(_S, n);
  return /* @__PURE__ */ w(me.p, T({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), SS = "DialogClose", ES = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(SS, n);
  return /* @__PURE__ */ w(me.button, T({
    type: "button"
  }, r, {
    ref: t,
    onClick: te(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Wu(e) {
  return e ? "open" : "closed";
}
const NS = "DialogTitleWarning", [PS, ZD] = x$(NS, {
  contentName: xo,
  titleName: Gh,
  docsSlug: "dialog"
}), Mi = fS, Di = mS, Mo = vS, Do = gS, Ro = xS, jo = $S, Ao = CS, Io = ES, qh = Mi, XD = Di, Zh = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ f.exports.jsx(Mo, { className: j(e), ...n, children: /* @__PURE__ */ f.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
Zh.displayName = Mo.displayName;
const Xh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Do,
  {
    ref: n,
    className: j(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
Xh.displayName = Do.displayName;
const Uu = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(Zh, { children: [
  /* @__PURE__ */ f.exports.jsx(Xh, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Ro,
    {
      ref: r,
      className: j(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ f.exports.jsxs(Io, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ f.exports.jsx(gi, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Uu.displayName = Ro.displayName;
const TS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
TS.displayName = "DialogHeader";
const OS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
OS.displayName = "DialogFooter";
const kS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jo,
  {
    ref: n,
    className: j(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
kS.displayName = jo.displayName;
const MS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ao,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
MS.displayName = Ao.displayName;
const DS = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
  const [l, u] = C.useState(!1);
  return s ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full", a), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full" }) }),
    r && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full" }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-4 w-4 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }),
      /* @__PURE__ */ f.exports.jsx(
        Pt,
        {
          className: i()
        }
      ),
      o === "right" && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-4 w-4 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" })
    ] })
  ] }) : c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full", a), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsxs(Tn, { className: "flex", htmlFor: e, children: [
      n,
      " "
    ] }) }),
    r && /* @__PURE__ */ f.exports.jsx("p", { className: "text-muted-foreground text-xs", children: r }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
        "button",
        {
          type: "button",
          onClick: () => u((d) => !d),
          className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
          tabIndex: -1,
          children: l ? /* @__PURE__ */ f.exports.jsx(as, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(os, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(
        da,
        {
          ...c,
          className: j(i(), c.className),
          type: l ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => u((d) => !d),
          children: l ? /* @__PURE__ */ f.exports.jsx(as, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(os, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Hr,
    {
      control: t.control,
      name: e,
      render: ({ field: d, formState: p }) => {
        var m;
        return /* @__PURE__ */ f.exports.jsxs(wr, { className: j("w-full", a), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
              n,
              " "
            ] }),
            ((m = p == null ? void 0 : p.errors[e]) == null ? void 0 : m.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              p.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(ko, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ f.exports.jsx(Ya, { children: /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => u((h) => !h),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                disabled: c == null ? void 0 : c.disabled,
                children: l ? /* @__PURE__ */ f.exports.jsx(as, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(os, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(
              da,
              {
                ...d,
                ...c,
                disabled: c == null ? void 0 : c.disabled,
                className: j(i(), c.className),
                type: l ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => u((h) => !h),
                children: l ? /* @__PURE__ */ f.exports.jsx(as, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(os, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, RS = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: l }) => c || c && l.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
    Pt,
    {
      className: j(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : l.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(Tn, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ f.exports.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ f.exports.jsx(
      da,
      {
        ...l,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ f.exports.jsx(
  Hr,
  {
    control: t.control,
    name: e,
    render: ({ field: u, formState: d }) => {
      var p;
      return /* @__PURE__ */ f.exports.jsxs(wr, { className: j("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
            r,
            " "
          ] }),
          ((p = d == null ? void 0 : d.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            d.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(ko, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ f.exports.jsx(Ya, { children: /* @__PURE__ */ f.exports.jsx(
            da,
            {
              ...u,
              ...l,
              disabled: l == null ? void 0 : l.disabled,
              className: i()
            }
          ) }),
          a === "right" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
        ] })
      ] });
    }
  }
), da = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
    "input",
    {
      type: t,
      className: j(
        "w-full flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
da.displayName = "InputUI";
function zu({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const l = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ f.exports.jsx(
    DS,
    {
      id: t,
      validateInputIconClassNames: l,
      classNameContainer: r,
      iconDirection: i,
      description: o,
      isLoading: s,
      label: n,
      form: (c == null ? void 0 : c.form) || null,
      rest: c
    }
  ) : /* @__PURE__ */ f.exports.jsx(
    RS,
    {
      id: t,
      validateInputIconClassNames: l,
      classNameContainer: r,
      iconDirection: i,
      description: o,
      isLoading: s,
      label: n,
      form: (c == null ? void 0 : c.form) || null,
      rest: c,
      icon: a
    }
  );
}
const jS = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), AS = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, Tf = (e) => {
  const t = [
    Yo.VENEZUELAN,
    Yo.JURIDICAL,
    Yo.FOREIGN,
    Yo.PASSPORT,
    Yo.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, Et = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: Tf(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: Tf(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function QD({ form: e, pid: t = Et }) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g, x, b, y;
  const n = (_) => {
    var S;
    const { value: $ } = _.target, N = jS($), k = ((S = t == null ? void 0 : t.number) == null ? void 0 : S.id) || Et.number.id;
    e.setValue(k, N);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      E7,
      {
        id: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.id) || Et.type.id,
        form: e,
        label: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.label) || Et.type.label,
        items: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.items) || Et.type.items,
        tabIndex: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.tabIndex) || Et.type.tabIndex,
        placeholder: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.placeholder) || Et.type.placeholder,
        defaultValue: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.defaultValue) || Et.type.defaultValue,
        notFoundLabel: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.notFoundLabel) || Et.type.notFoundLabel,
        ctaPlaceholder: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.ctaPlaceholder) || Et.type.ctaPlaceholder,
        buttonClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.buttonClassName) || Et.type.buttonClassName,
        popoverClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.popoverClassName) || Et.type.popoverClassName,
        disabled: (m = t == null ? void 0 : t.type) == null ? void 0 : m.disabled
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      zu,
      {
        id: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.id) || Et.number.id,
        form: e,
        type: "text",
        defaultValue: (v = t == null ? void 0 : t.number) == null ? void 0 : v.defaultValue,
        onKeyPress: AS,
        onKeyUp: n,
        tabIndex: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.tabIndex) || Et.number.tabIndex,
        maxLength: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.maxLength) || Et.number.maxLength,
        placeholder: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.placeholder) || Et.number.placeholder,
        disabled: (y = t == null ? void 0 : t.number) == null ? void 0 : y.disabled
      }
    )
  ] });
}
const Qh = "Popover", [Jh, JD] = st(Qh, [
  Pn
]), Bu = Pn(), [IS, Lo] = Jh(Qh), LS = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Bu(t), c = q(null), [l, u] = J(!1), [d = !1, p] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(Oo, i, /* @__PURE__ */ w(IS, {
    scope: t,
    contentId: mt(),
    triggerRef: c,
    open: d,
    onOpenChange: p,
    onOpenToggle: he(
      () => p(
        (m) => !m
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: he(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: he(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, FS = "PopoverTrigger", VS = /* @__PURE__ */ L((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Lo(FS, n), a = Bu(n), s = Ee(t, o.triggerRef), i = /* @__PURE__ */ w(me.button, T({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": nv(o.open)
  }, r, {
    ref: s,
    onClick: te(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ w(Fa, T({
    asChild: !0
  }, a), i);
}), ev = "PopoverPortal", [WS, US] = Jh(ev, {
  forceMount: void 0
}), zS = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Lo(ev, t);
  return /* @__PURE__ */ w(WS, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(ct, {
    present: n || a.open
  }, /* @__PURE__ */ w(_i, {
    asChild: !0,
    container: o
  }, r)));
}, fa = "PopoverContent", BS = /* @__PURE__ */ L((e, t) => {
  const n = US(fa, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Lo(fa, e.__scopePopover);
  return /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(HS, T({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(YS, T({}, o, {
    ref: t
  })));
}), HS = /* @__PURE__ */ L((e, t) => {
  const n = Lo(fa, e.__scopePopover), r = q(null), o = Ee(t, r), a = q(!1);
  return ee(() => {
    const s = r.current;
    if (s)
      return Wa(s);
  }, []), /* @__PURE__ */ w(Ni, {
    as: cn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(tv, T({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: te(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: te(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: te(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), YS = /* @__PURE__ */ L((e, t) => {
  const n = Lo(fa, e.__scopePopover), r = q(!1), o = q(!1);
  return /* @__PURE__ */ w(tv, T({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var i;
        r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var s, i;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), tv = /* @__PURE__ */ L((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, p = Lo(fa, n), m = Bu(n);
  return xi(), /* @__PURE__ */ w(yi, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(zr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ w(Va, T({
    "data-state": nv(p.open),
    role: "dialog",
    id: p.contentId
  }, m, d, {
    ref: t,
    style: {
      ...d.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function nv(e) {
  return e ? "open" : "closed";
}
const KS = LS, GS = VS, qS = zS, rv = BS, Un = KS, zn = GS, _n = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(qS, { children: /* @__PURE__ */ f.exports.jsx(
  rv,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: j(
      "z-50 w-72 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
_n.displayName = rv.displayName;
const ov = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
    "textarea",
    {
      className: j(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
ov.displayName = "TextareaUI";
const e8 = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i || i && c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full"), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
    Pt,
    {
      className: j("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ f.exports.jsx(
  Hr,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: u }) => {
      var d;
      return /* @__PURE__ */ f.exports.jsxs(wr, { className: j("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
            n,
            " "
          ] }),
          ((d = u == null ? void 0 : u.errors[e]) == null ? void 0 : d.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            u.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(ko, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsx(Ya, { children: /* @__PURE__ */ f.exports.jsx(
          ov,
          {
            placeholder: a,
            className: j("resize-none", r),
            ...l,
            ...c
          }
        ) })
      ] });
    }
  }
);
function pa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Fo(e) {
  const t = q({
    value: e,
    previous: e
  });
  return _t(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const av = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ w(me.span, T({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), sv = av, ZS = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], XS = [
  " ",
  "Enter"
], Ri = "Select", [ji, Hu, QS] = br(Ri), [Vo, t8] = st(Ri, [
  QS,
  Pn
]), Yu = Pn(), [JS, Kr] = Vo(Ri), [eE, tE] = Vo(Ri), nE = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: p, required: m } = e, h = Yu(t), [v, g] = J(null), [x, b] = J(null), [y, _] = J(!1), $ = Nn(l), [N = !1, k] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [S, P] = ft({
    prop: s,
    defaultProp: i,
    onChange: c
  }), Y = q(null), U = v ? Boolean(v.closest("form")) : !0, [B, Z] = J(/* @__PURE__ */ new Set()), F = Array.from(B).map(
    (A) => A.props.value
  ).join(";");
  return /* @__PURE__ */ w(Oo, h, /* @__PURE__ */ w(JS, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: x,
    onValueNodeChange: b,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: _,
    contentId: mt(),
    value: S,
    onValueChange: P,
    open: N,
    onOpenChange: k,
    dir: $,
    triggerPointerDownPosRef: Y,
    disabled: p
  }, /* @__PURE__ */ w(ji.Provider, {
    scope: t
  }, /* @__PURE__ */ w(eE, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: he((A) => {
      Z(
        (I) => new Set(I).add(A)
      );
    }, []),
    onNativeOptionRemove: he((A) => {
      Z((I) => {
        const W = new Set(I);
        return W.delete(A), W;
      });
    }, [])
  }, n)), U ? /* @__PURE__ */ w(lv, {
    key: F,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: S,
    onChange: (A) => P(A.target.value),
    disabled: p
  }, S === void 0 ? /* @__PURE__ */ w("option", {
    value: ""
  }) : null, Array.from(B)) : null));
}, rE = "SelectTrigger", oE = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Yu(n), s = Kr(rE, n), i = s.disabled || r, c = Ee(t, s.onTriggerChange), l = Hu(n), [u, d, p] = uv((h) => {
    const v = l().filter(
      (b) => !b.disabled
    ), g = v.find(
      (b) => b.value === s.value
    ), x = dv(v, h, g);
    x !== void 0 && s.onValueChange(x.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ w(Fa, T({
    asChild: !0
  }, a), /* @__PURE__ */ w(me.button, T({
    type: "button",
    role: "combobox",
    "aria-controls": s.contentId,
    "aria-expanded": s.open,
    "aria-required": s.required,
    "aria-autocomplete": "none",
    dir: s.dir,
    "data-state": s.open ? "open" : "closed",
    disabled: i,
    "data-disabled": i ? "" : void 0,
    "data-placeholder": s.value === void 0 ? "" : void 0
  }, o, {
    ref: c,
    onClick: te(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: te(o.onPointerDown, (h) => {
      const v = h.target;
      v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: te(o.onKeyDown, (h) => {
      const v = u.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && d(h.key), !(v && h.key === " ") && ZS.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), aE = "SelectValue", sE = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = Kr(aE, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = Ee(t, c.onValueNodeChange);
  return Ct(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ w(me.span, T({}, i, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && s !== void 0 ? s : a);
}), iE = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ w(me.span, T({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), cE = (e) => /* @__PURE__ */ w(_i, T({
  asChild: !0
}, e)), yo = "SelectContent", lE = /* @__PURE__ */ L((e, t) => {
  const n = Kr(yo, e.__scopeSelect), [r, o] = J();
  if (Ct(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Vp(/* @__PURE__ */ w(iv, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w(ji.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ w(uE, T({}, e, {
    ref: t
  }));
}), Rn = 10, [iv, Ai] = Vo(yo), uE = /* @__PURE__ */ L((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: p,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: g,
    //
    ...x
  } = e, b = Kr(yo, n), [y, _] = J(null), [$, N] = J(null), k = Ee(
    t,
    (oe) => _(oe)
  ), [S, P] = J(null), [Y, U] = J(null), B = Hu(n), [Z, F] = J(!1), A = q(!1);
  ee(() => {
    if (y)
      return Wa(y);
  }, [
    y
  ]), xi();
  const I = he((oe) => {
    const [ie, ...pe] = B().map(
      (V) => V.ref.current
    ), [H] = pe.slice(-1), re = document.activeElement;
    for (const V of oe)
      if (V === re || (V == null || V.scrollIntoView({
        block: "nearest"
      }), V === ie && $ && ($.scrollTop = 0), V === H && $ && ($.scrollTop = $.scrollHeight), V == null || V.focus(), document.activeElement !== re))
        return;
  }, [
    B,
    $
  ]), W = he(
    () => I([
      S,
      y
    ]),
    [
      I,
      S,
      y
    ]
  );
  ee(() => {
    Z && W();
  }, [
    Z,
    W
  ]);
  const { onOpenChange: G, triggerPointerDownPosRef: R } = b;
  ee(() => {
    if (y) {
      let oe = {
        x: 0,
        y: 0
      };
      const ie = (H) => {
        var re, V, de, ve;
        oe = {
          x: Math.abs(Math.round(H.pageX) - ((re = (V = R.current) === null || V === void 0 ? void 0 : V.x) !== null && re !== void 0 ? re : 0)),
          y: Math.abs(Math.round(H.pageY) - ((de = (ve = R.current) === null || ve === void 0 ? void 0 : ve.y) !== null && de !== void 0 ? de : 0))
        };
      }, pe = (H) => {
        oe.x <= 10 && oe.y <= 10 ? H.preventDefault() : y.contains(H.target) || G(!1), document.removeEventListener("pointermove", ie), R.current = null;
      };
      return R.current !== null && (document.addEventListener("pointermove", ie), document.addEventListener("pointerup", pe, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ie), document.removeEventListener("pointerup", pe, {
          capture: !0
        });
      };
    }
  }, [
    y,
    G,
    R
  ]), ee(() => {
    const oe = () => G(!1);
    return window.addEventListener("blur", oe), window.addEventListener("resize", oe), () => {
      window.removeEventListener("blur", oe), window.removeEventListener("resize", oe);
    };
  }, [
    G
  ]);
  const [M, K] = uv((oe) => {
    const ie = B().filter(
      (re) => !re.disabled
    ), pe = ie.find(
      (re) => re.ref.current === document.activeElement
    ), H = dv(ie, oe, pe);
    H && setTimeout(
      () => H.ref.current.focus()
    );
  }), X = he((oe, ie, pe) => {
    const H = !A.current && !pe;
    (b.value !== void 0 && b.value === ie || H) && (P(oe), H && (A.current = !0));
  }, [
    b.value
  ]), ae = he(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), ne = he((oe, ie, pe) => {
    const H = !A.current && !pe;
    (b.value !== void 0 && b.value === ie || H) && U(oe);
  }, [
    b.value
  ]), ge = r === "popper" ? Of : dE, be = ge === Of ? {
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: p,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ w(iv, {
    scope: n,
    content: y,
    viewport: $,
    onViewportChange: N,
    itemRefCallback: X,
    selectedItem: S,
    onItemLeave: ae,
    itemTextRefCallback: ne,
    focusSelectedItem: W,
    selectedItemText: Y,
    position: r,
    isPositioned: Z,
    searchRef: M
  }, /* @__PURE__ */ w(Ni, {
    as: cn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(yi, {
    asChild: !0,
    trapped: b.open,
    onMountAutoFocus: (oe) => {
      oe.preventDefault();
    },
    onUnmountAutoFocus: te(o, (oe) => {
      var ie;
      (ie = b.trigger) === null || ie === void 0 || ie.focus({
        preventScroll: !0
      }), oe.preventDefault();
    })
  }, /* @__PURE__ */ w(zr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (oe) => oe.preventDefault(),
    onDismiss: () => b.onOpenChange(!1)
  }, /* @__PURE__ */ w(ge, T({
    role: "listbox",
    id: b.contentId,
    "data-state": b.open ? "open" : "closed",
    dir: b.dir,
    onContextMenu: (oe) => oe.preventDefault()
  }, x, be, {
    onPlaced: () => F(!0),
    ref: k,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...x.style
    },
    onKeyDown: te(x.onKeyDown, (oe) => {
      const ie = oe.ctrlKey || oe.altKey || oe.metaKey;
      if (oe.key === "Tab" && oe.preventDefault(), !ie && oe.key.length === 1 && K(oe.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(oe.key)) {
        let H = B().filter(
          (re) => !re.disabled
        ).map(
          (re) => re.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(oe.key) && (H = H.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(oe.key)) {
          const re = oe.target, V = H.indexOf(re);
          H = H.slice(V + 1);
        }
        setTimeout(
          () => I(H)
        ), oe.preventDefault();
      }
    })
  }))))));
}), dE = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Kr(yo, n), s = Ai(yo, n), [i, c] = J(null), [l, u] = J(null), d = Ee(
    t,
    (k) => u(k)
  ), p = Hu(n), m = q(!1), h = q(!0), { viewport: v, selectedItem: g, selectedItemText: x, focusSelectedItem: b } = s, y = he(() => {
    if (a.trigger && a.valueNode && i && l && v && g && x) {
      const k = a.trigger.getBoundingClientRect(), S = l.getBoundingClientRect(), P = a.valueNode.getBoundingClientRect(), Y = x.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const re = Y.left - S.left, V = P.left - re, de = k.left - V, ve = k.width + de, ye = Math.max(ve, S.width), O = window.innerWidth - Rn, z = pa(V, [
          Rn,
          O - ye
        ]);
        i.style.minWidth = ve + "px", i.style.left = z + "px";
      } else {
        const re = S.right - Y.right, V = window.innerWidth - P.right - re, de = window.innerWidth - k.right - V, ve = k.width + de, ye = Math.max(ve, S.width), O = window.innerWidth - Rn, z = pa(V, [
          Rn,
          O - ye
        ]);
        i.style.minWidth = ve + "px", i.style.right = z + "px";
      }
      const U = p(), B = window.innerHeight - Rn * 2, Z = v.scrollHeight, F = window.getComputedStyle(l), A = parseInt(F.borderTopWidth, 10), I = parseInt(F.paddingTop, 10), W = parseInt(F.borderBottomWidth, 10), G = parseInt(F.paddingBottom, 10), R = A + I + Z + G + W, M = Math.min(g.offsetHeight * 5, R), K = window.getComputedStyle(v), X = parseInt(K.paddingTop, 10), ae = parseInt(K.paddingBottom, 10), ne = k.top + k.height / 2 - Rn, ge = B - ne, be = g.offsetHeight / 2, oe = g.offsetTop + be, ie = A + I + oe, pe = R - ie;
      if (ie <= ne) {
        const re = g === U[U.length - 1].ref.current;
        i.style.bottom = "0px";
        const V = l.clientHeight - v.offsetTop - v.offsetHeight, de = Math.max(ge, be + (re ? ae : 0) + V + W), ve = ie + de;
        i.style.height = ve + "px";
      } else {
        const re = g === U[0].ref.current;
        i.style.top = "0px";
        const de = Math.max(ne, A + v.offsetTop + (re ? X : 0) + be) + pe;
        i.style.height = de + "px", v.scrollTop = ie - ne + v.offsetTop;
      }
      i.style.margin = `${Rn}px 0`, i.style.minHeight = M + "px", i.style.maxHeight = B + "px", r == null || r(), requestAnimationFrame(
        () => m.current = !0
      );
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    i,
    l,
    v,
    g,
    x,
    a.dir,
    r
  ]);
  Ct(
    () => y(),
    [
      y
    ]
  );
  const [_, $] = J();
  Ct(() => {
    l && $(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const N = he((k) => {
    k && h.current === !0 && (y(), b == null || b(), h.current = !1);
  }, [
    y,
    b
  ]);
  return /* @__PURE__ */ w(fE, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: N
  }, /* @__PURE__ */ w("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ w(me.div, T({}, o, {
    ref: d,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), Of = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Rn, ...a } = e, s = Yu(n);
  return /* @__PURE__ */ w(Va, T({}, s, a, {
    ref: t,
    align: r,
    collisionPadding: o,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...a.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [fE, pE] = Vo(yo, {}), kf = "SelectViewport", mE = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Ai(kf, n), a = pE(kf, n), s = Ee(t, o.onViewportChange), i = q(0);
  return /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(ji.Slot, {
    scope: n
  }, /* @__PURE__ */ w(me.div, T({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, r, {
    ref: s,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...r.style
    },
    onScroll: te(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = a;
      if (d != null && d.current && u) {
        const p = Math.abs(i.current - l.scrollTop);
        if (p > 0) {
          const m = window.innerHeight - Rn * 2, h = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(h, v);
          if (g < m) {
            const x = g + p, b = Math.min(m, x), y = x - b;
            u.style.height = b + "px", u.style.bottom === "0px" && (l.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), hE = "SelectGroup", [vE, gE] = Vo(hE), bE = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = mt();
  return /* @__PURE__ */ w(vE, {
    scope: n,
    id: o
  }, /* @__PURE__ */ w(me.div, T({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), xE = "SelectLabel", yE = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = gE(xE, n);
  return /* @__PURE__ */ w(me.div, T({
    id: o.id
  }, r, {
    ref: t
  }));
}), ml = "SelectItem", [wE, cv] = Vo(ml), $E = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = Kr(ml, n), c = Ai(ml, n), l = i.value === r, [u, d] = J(a ?? ""), [p, m] = J(!1), h = Ee(t, (x) => {
    var b;
    return (b = c.itemRefCallback) === null || b === void 0 ? void 0 : b.call(c, x, r, o);
  }), v = mt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ w(wE, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: he((x) => {
      d((b) => {
        var y;
        return b || ((y = x == null ? void 0 : x.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ w(ji.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ w(me.div, T({
    role: "option",
    "aria-labelledby": v,
    "data-highlighted": p ? "" : void 0,
    "aria-selected": l && p,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, s, {
    ref: h,
    onFocus: te(
      s.onFocus,
      () => m(!0)
    ),
    onBlur: te(
      s.onBlur,
      () => m(!1)
    ),
    onPointerUp: te(s.onPointerUp, g),
    onPointerMove: te(s.onPointerMove, (x) => {
      if (o) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      } else
        x.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: te(s.onPointerLeave, (x) => {
      if (x.currentTarget === document.activeElement) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      }
    }),
    onKeyDown: te(s.onKeyDown, (x) => {
      var b;
      ((b = c.searchRef) === null || b === void 0 ? void 0 : b.current) !== "" && x.key === " " || (XS.includes(x.key) && g(), x.key === " " && x.preventDefault());
    })
  }))));
}), ms = "SelectItemText", _E = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Kr(ms, n), i = Ai(ms, n), c = cv(ms, n), l = tE(ms, n), [u, d] = J(null), p = Ee(
    t,
    (x) => d(x),
    c.onItemTextChange,
    (x) => {
      var b;
      return (b = i.itemTextRefCallback) === null || b === void 0 ? void 0 : b.call(i, x, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, h = _t(
    () => /* @__PURE__ */ w("option", {
      key: c.value,
      value: c.value,
      disabled: c.disabled
    }, m),
    [
      c.disabled,
      c.value,
      m
    ]
  ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = l;
  return Ct(() => (v(h), () => g(h)), [
    v,
    g,
    h
  ]), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(me.span, T({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Vp(a.children, s.valueNode) : null);
}), CE = "SelectItemIndicator", SE = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return cv(CE, n).isSelected ? /* @__PURE__ */ w(me.span, T({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), EE = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ w(me.div, T({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), lv = /* @__PURE__ */ L((e, t) => {
  const { value: n, ...r } = e, o = q(null), a = Ee(t, o), s = Fo(n);
  return ee(() => {
    const i = o.current, c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(c, "value").set;
    if (s !== n && u) {
      const d = new Event("change", {
        bubbles: !0
      });
      u.call(i, n), i.dispatchEvent(d);
    }
  }, [
    s,
    n
  ]), /* @__PURE__ */ w(av, {
    asChild: !0
  }, /* @__PURE__ */ w("select", T({}, r, {
    ref: a,
    defaultValue: n
  })));
});
lv.displayName = "BubbleSelect";
function uv(e) {
  const t = Ze(e), n = q(""), r = q(0), o = he((s) => {
    const i = n.current + s;
    t(i), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = he(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return ee(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function dv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = NE(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function NE(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const PE = nE, fv = oE, TE = sE, OE = iE, kE = cE, pv = lE, ME = mE, DE = bE, mv = yE, hv = $E, RE = _E, jE = SE, vv = EE, Ku = PE, AE = DE, Gu = TE, Ii = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  fv,
  {
    ref: r,
    className: j(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(OE, { asChild: !0, children: /* @__PURE__ */ f.exports.jsx(aa, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ii.displayName = fv.displayName;
const Li = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.exports.jsx(kE, { children: /* @__PURE__ */ f.exports.jsx(
  pv,
  {
    ref: o,
    className: j(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ f.exports.jsx(
      ME,
      {
        className: j(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Li.displayName = pv.displayName;
const IE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  mv,
  {
    ref: n,
    className: j("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
IE.displayName = mv.displayName;
const Fi = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  hv,
  {
    ref: r,
    className: j(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(jE, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.exports.jsx(RE, { children: t })
    ]
  }
));
Fi.displayName = hv.displayName;
const LE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vv,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
LE.displayName = vv.displayName;
const gv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: j(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
gv.displayName = "Card";
const FE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: j("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
FE.displayName = "CardHeader";
const VE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "h3",
  {
    ref: n,
    className: j(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
VE.displayName = "CardTitle";
const WE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "p",
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
WE.displayName = "CardDescription";
const UE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: j("p-6 pt-0", e), ...t }));
UE.displayName = "CardContent";
const zE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: j(" flex items-center p-6 pt-0", e),
    ...t
  }
));
zE.displayName = "CardFooter";
const bv = "Checkbox", [BE, n8] = st(bv), [HE, YE] = BE(bv), KE = /* @__PURE__ */ L((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = J(null), m = Ee(
    t,
    (y) => p(y)
  ), h = q(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, x] = ft({
    prop: o,
    defaultProp: a,
    onChange: l
  }), b = q(g);
  return ee(() => {
    const y = d == null ? void 0 : d.form;
    if (y) {
      const _ = () => x(b.current);
      return y.addEventListener("reset", _), () => y.removeEventListener("reset", _);
    }
  }, [
    d,
    x
  ]), /* @__PURE__ */ w(HE, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ w(me.button, T({
    type: "button",
    role: "checkbox",
    "aria-checked": kr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": xv(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onKeyDown: te(e.onKeyDown, (y) => {
      y.key === "Enter" && y.preventDefault();
    }),
    onClick: te(e.onClick, (y) => {
      x(
        (_) => kr(_) ? !0 : !_
      ), v && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(ZE, {
    control: d,
    bubbles: !h.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), GE = "CheckboxIndicator", qE = /* @__PURE__ */ L((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = YE(GE, n);
  return /* @__PURE__ */ w(ct, {
    present: r || kr(a.state) || a.state === !0
  }, /* @__PURE__ */ w(me.span, T({
    "data-state": xv(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), ZE = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = Fo(n), i = La(t);
  return ee(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = kr(n), d.call(c, kr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", T({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: kr(n) ? !1 : n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function kr(e) {
  return e === "indeterminate";
}
function xv(e) {
  return kr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const yv = KE, XE = qE, wv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  yv,
  {
    ref: n,
    className: j(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx(
      XE,
      {
        className: j("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" })
      }
    )
  }
));
wv.displayName = yv.displayName;
const $v = "DropdownMenu", [QE, r8] = st($v, [
  Ua
]), It = Ua(), [JE, _v] = QE($v), eN = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = It(t), l = q(null), [u = !1, d] = ft({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ w(JE, {
    scope: t,
    triggerId: mt(),
    triggerRef: l,
    contentId: mt(),
    open: u,
    onOpenChange: d,
    onOpenToggle: he(
      () => d(
        (p) => !p
      ),
      [
        d
      ]
    ),
    modal: i
  }, /* @__PURE__ */ w(wu, T({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: i
  }), n));
}, tN = "DropdownMenuTrigger", nN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = _v(tN, n), s = It(n);
  return /* @__PURE__ */ w($u, T({
    asChild: !0
  }, s), /* @__PURE__ */ w(me.button, T({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: Da(t, a.triggerRef),
    onPointerDown: te(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: te(e.onKeyDown, (i) => {
      r || ([
        "Enter",
        " "
      ].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(i.key) && i.preventDefault());
    })
  })));
}), rN = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = It(t);
  return /* @__PURE__ */ w(_u, T({}, r, n));
}, oN = "DropdownMenuContent", aN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _v(oN, n), a = It(n), s = q(!1);
  return /* @__PURE__ */ w(Cu, T({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: te(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: te(e.onInteractOutside, (i) => {
      const c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
      (!o.modal || u) && (s.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), sN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Su, T({}, o, r, {
    ref: t
  }));
}), iN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Eu, T({}, o, r, {
    ref: t
  }));
}), cN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Nu, T({}, o, r, {
    ref: t
  }));
}), lN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Pu, T({}, o, r, {
    ref: t
  }));
}), uN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Tu, T({}, o, r, {
    ref: t
  }));
}), dN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Ou, T({}, o, r, {
    ref: t
  }));
}), fN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(ku, T({}, o, r, {
    ref: t
  }));
}), pN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Mu, T({}, o, r, {
    ref: t
  }));
}), mN = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = It(t), [i = !1, c] = ft({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(Du, T({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, hN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Ru, T({}, o, r, {
    ref: t
  }));
}), vN = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(ju, T({}, o, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), gN = eN, bN = nN, Cv = rN, Sv = aN, xN = sN, Ev = iN, Nv = cN, Pv = lN, yN = uN, Tv = dN, Ov = fN, kv = pN, wN = mN, Mv = hN, Dv = vN, o8 = gN, a8 = bN, s8 = xN, i8 = Cv, c8 = wN, l8 = yN, $N = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Mv,
  {
    ref: o,
    className: j(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(Wr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
$N.displayName = Mv.displayName;
const _N = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Dv,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
_N.displayName = Dv.displayName;
const CN = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(Cv, { children: /* @__PURE__ */ f.exports.jsx(
  Sv,
  {
    ref: r,
    sideOffset: t,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
CN.displayName = Sv.displayName;
const SN = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Nv,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
SN.displayName = Nv.displayName;
const EN = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Pv,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Ov, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
EN.displayName = Pv.displayName;
const NN = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Tv,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Ov, { children: /* @__PURE__ */ f.exports.jsx(vi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
NN.displayName = Tv.displayName;
const PN = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ev,
  {
    ref: r,
    className: j(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
PN.displayName = Ev.displayName;
const TN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  kv,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
TN.displayName = kv.displayName;
const ON = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: j("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
ON.displayName = "DropdownMenuShortcut";
const hl = "horizontal", kN = [
  "horizontal",
  "vertical"
], Rv = /* @__PURE__ */ L((e, t) => {
  const { decorative: n, orientation: r = hl, ...o } = e, a = jv(r) ? r : hl, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ w(me.div, T({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
Rv.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !jv(r) ? new Error(MN(o, n)) : null;
  }
};
function MN(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${hl}\`.`;
}
function jv(e) {
  return kN.includes(e);
}
const Av = Rv, Ka = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
    Av,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: j(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
Ka.displayName = Av.displayName;
function mo(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function DN(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Iv(...e) {
  return (t) => e.forEach(
    (n) => DN(n, t)
  );
}
function Ga(...e) {
  return he(Iv(...e), e);
}
function RN(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ bt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = _t(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ w(v.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = Qe(m);
      if (h)
        return h;
      if (s !== void 0)
        return s;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      u
    ];
  }
  const o = () => {
    const a = n.map((s) => /* @__PURE__ */ bt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return _t(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: c
          }
        }),
        [
          i,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    jN(o, ...t)
  ];
}
function jN(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const d = c(a)[`__scope${l}`];
        return {
          ...i,
          ...d
        };
      }, {});
      return _t(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const vl = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ma : () => {
}, AN = C["useId".toString()] || (() => {
});
let IN = 0;
function Sc(e) {
  const [t, n] = C.useState(AN());
  return vl(() => {
    e || n(
      (r) => r ?? String(IN++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function jr(e) {
  const t = q(e);
  return ee(() => {
    t.current = e;
  }), _t(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function LN({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = FN({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = jr(n), c = he((l) => {
    if (a) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && i(d);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    c
  ];
}
function FN({ defaultProp: e, onChange: t }) {
  const n = J(e), [r] = n, o = q(r), a = jr(t);
  return ee(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const qu = /* @__PURE__ */ L((e, t) => {
  const { children: n, ...r } = e, o = Vt.toArray(n), a = o.find(WN);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Vt.count(s) > 1 ? Vt.only(null) : /* @__PURE__ */ cr(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(gl, T({}, r, {
      ref: t
    }), /* @__PURE__ */ cr(s) ? /* @__PURE__ */ Eo(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(gl, T({}, r, {
    ref: t
  }), n);
});
qu.displayName = "Slot";
const gl = /* @__PURE__ */ L((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ cr(n) ? /* @__PURE__ */ Eo(n, {
    ...UN(r, n.props),
    ref: Iv(t, n.ref)
  }) : Vt.count(n) > 1 ? Vt.only(null) : null;
});
gl.displayName = "SlotClone";
const VN = ({ children: e }) => /* @__PURE__ */ w(qt, null, e);
function WN(e) {
  return /* @__PURE__ */ cr(e) && e.type === VN;
}
function UN(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? n[r] = (...i) => {
      a == null || a(...i), o == null || o(...i);
    } : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const zN = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Vi = zN.reduce((e, t) => {
  const n = /* @__PURE__ */ L((r, o) => {
    const { asChild: a, ...s } = r, i = a ? qu : t;
    return ee(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, T({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function BN(e, t) {
  e && hi(
    () => e.dispatchEvent(t)
  );
}
function HN(e) {
  const t = jr(e);
  ee(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const bl = "dismissableLayer.update", YN = "dismissableLayer.pointerDownOutside", KN = "dismissableLayer.focusOutside";
let Mf;
const GN = /* @__PURE__ */ bt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), qN = /* @__PURE__ */ L((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = Qe(GN), [u, d] = J(null), [, p] = J({}), m = Ga(
    t,
    (N) => d(N)
  ), h = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = h.indexOf(v), x = u ? h.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, y = x >= g, _ = ZN((N) => {
    const k = N.target, S = [
      ...l.branches
    ].some(
      (P) => P.contains(k)
    );
    !y || S || (o == null || o(N), s == null || s(N), N.defaultPrevented || i == null || i());
  }), $ = XN((N) => {
    const k = N.target;
    [
      ...l.branches
    ].some(
      (P) => P.contains(k)
    ) || (a == null || a(N), s == null || s(N), N.defaultPrevented || i == null || i());
  });
  return HN((N) => {
    x === l.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && i && (N.preventDefault(), i()));
  }), ee(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Mf = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Df(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Mf);
      };
  }, [
    u,
    n,
    l
  ]), ee(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Df());
  }, [
    u,
    l
  ]), ee(() => {
    const N = () => p({});
    return document.addEventListener(bl, N), () => document.removeEventListener(bl, N);
  }, []), /* @__PURE__ */ w(Vi.div, T({}, c, {
    ref: m,
    style: {
      pointerEvents: b ? y ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: mo(e.onFocusCapture, $.onFocusCapture),
    onBlurCapture: mo(e.onBlurCapture, $.onBlurCapture),
    onPointerDownCapture: mo(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function ZN(e) {
  const t = jr(e), n = q(!1), r = q(() => {
  });
  return ee(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Lv(YN, t, i, {
            discrete: !0
          });
        };
        const i = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (document.removeEventListener("click", r.current), r.current = c, document.addEventListener("click", r.current, {
          once: !0
        })) : c();
      }
      n.current = !1;
    }, a = window.setTimeout(() => {
      document.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(a), document.removeEventListener("pointerdown", o), document.removeEventListener("click", r.current);
    };
  }, [
    t
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function XN(e) {
  const t = jr(e), n = q(!1);
  return ee(() => {
    const r = (o) => {
      o.target && !n.current && Lv(KN, t, {
        originalEvent: o
      }, {
        discrete: !1
      });
    };
    return document.addEventListener("focusin", r), () => document.removeEventListener("focusin", r);
  }, [
    t
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Df() {
  const e = new CustomEvent(bl);
  document.dispatchEvent(e);
}
function Lv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? BN(o, a) : o.dispatchEvent(a);
}
const Ec = "focusScope.autoFocusOnMount", Nc = "focusScope.autoFocusOnUnmount", Rf = {
  bubbles: !1,
  cancelable: !0
}, QN = /* @__PURE__ */ L((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = J(null), l = jr(o), u = jr(a), d = q(null), p = Ga(
    t,
    (v) => c(v)
  ), m = q({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  ee(() => {
    if (r) {
      let v = function(x) {
        if (m.paused || !i)
          return;
        const b = x.target;
        i.contains(b) ? d.current = b : Nr(d.current, {
          select: !0
        });
      }, g = function(x) {
        m.paused || !i || i.contains(x.relatedTarget) || Nr(d.current, {
          select: !0
        });
      };
      return document.addEventListener("focusin", v), document.addEventListener("focusout", g), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g);
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), ee(() => {
    if (i) {
      Af.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const x = new CustomEvent(Ec, Rf);
        i.addEventListener(Ec, l), i.dispatchEvent(x), x.defaultPrevented || (JN(o5(Fv(i)), {
          select: !0
        }), document.activeElement === v && Nr(i));
      }
      return () => {
        i.removeEventListener(Ec, l), setTimeout(() => {
          const x = new CustomEvent(Nc, Rf);
          i.addEventListener(Nc, u), i.dispatchEvent(x), x.defaultPrevented || Nr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Nc, u), Af.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const h = he((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
    if (g && x) {
      const b = v.currentTarget, [y, _] = e5(b);
      y && _ ? !v.shiftKey && x === _ ? (v.preventDefault(), n && Nr(y, {
        select: !0
      })) : v.shiftKey && x === y && (v.preventDefault(), n && Nr(_, {
        select: !0
      })) : x === b && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ w(Vi.div, T({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function JN(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Nr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function e5(e) {
  const t = Fv(e), n = jf(t, e), r = jf(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Fv(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function jf(e, t) {
  for (const n of e)
    if (!t5(n, {
      upTo: t
    }))
      return n;
}
function t5(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function n5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Nr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && n5(e) && t && e.select();
  }
}
const Af = r5();
function r5() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = If(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = If(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function If(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function o5(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const a5 = /* @__PURE__ */ L((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Hl.createPortal(/* @__PURE__ */ w(Vi.div, T({}, o, {
    ref: t
  })), r) : null;
});
function s5(e, t) {
  return mi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Wi = (e) => {
  const { present: t, children: n } = e, r = i5(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Vt.only(n), a = Ga(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Eo(o, {
    ref: a
  }) : null;
};
Wi.displayName = "Presence";
function i5(e) {
  const [t, n] = J(), r = q({}), o = q(e), a = q("none"), s = e ? "mounted" : "unmounted", [i, c] = s5(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return ee(() => {
    const l = hs(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), vl(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = hs(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), vl(() => {
    if (t) {
      const l = (d) => {
        const m = hs(r.current).includes(d.animationName);
        d.target === t && m && hi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = hs(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(i),
    ref: he((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function hs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Pc = 0;
function c5() {
  ee(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Lf()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Lf()), Pc++, () => {
      Pc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Pc--;
    };
  }, []);
}
function Lf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Vv = Wm(), Tc = function() {
}, Ui = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Tc,
    onWheelCapture: Tc,
    onTouchMoveCapture: Tc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, b = hu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = Vm([n, t]), $ = Nt(Nt({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: Vv, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), Nt(Nt({}, $), { ref: _ })) : C.createElement(x, Nt({}, $, { className: c, ref: _ }), i)
  );
});
Ui.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ui.classNames = {
  fullWidth: na,
  zeroRight: ta
};
var xl = !1;
if (typeof window < "u")
  try {
    var vs = Object.defineProperty({}, "passive", {
      get: function() {
        return xl = !0, !0;
      }
    });
    window.addEventListener("test", vs, vs), window.removeEventListener("test", vs, vs);
  } catch {
    xl = !1;
  }
var oo = xl ? { passive: !1 } : !1, l5 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, u5 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, Ff = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Wv(e, n);
    if (r) {
      var o = Uv(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, d5 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, f5 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Wv = function(e, t) {
  return e === "v" ? l5(t) : u5(t);
}, Uv = function(e, t) {
  return e === "v" ? d5(t) : f5(t);
}, p5 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, m5 = function(e, t, n, r, o) {
  var a = p5(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Uv(e, i), h = m[0], v = m[1], g = m[2], x = v - g - a * h;
    (h || x) && Wv(e, i) && (d += x, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, gs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Vf = function(e) {
  return [e.deltaX, e.deltaY];
}, Wf = function(e) {
  return e && "current" in e ? e.current : e;
}, h5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, v5 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, g5 = 0, ao = [];
function b5(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(g5++)[0], a = C.useState(function() {
    return vu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Fm([e.lockRef.current], (e.shards || []).map(Wf), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = C.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2)
      return !s.current.allowPinchZoom;
    var x = gs(v), b = n.current, y = "deltaX" in v ? v.deltaX : b[0] - x[0], _ = "deltaY" in v ? v.deltaY : b[1] - x[1], $, N = v.target, k = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && N.type === "range")
      return !1;
    var S = Ff(k, N);
    if (!S)
      return !0;
    if (S ? $ = k : ($ = k === "v" ? "h" : "v", S = Ff(k, N)), !S)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = $), !$)
      return !0;
    var P = r.current || $;
    return m5(P, g, v, P === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!ao.length || ao[ao.length - 1] !== a)) {
      var x = "deltaY" in g ? Vf(g) : gs(g), b = t.current.filter(function($) {
        return $.name === g.type && $.target === g.target && h5($.delta, x);
      })[0];
      if (b && b.should) {
        g.preventDefault();
        return;
      }
      if (!b) {
        var y = (s.current.shards || []).map(Wf).filter(Boolean).filter(function($) {
          return $.contains(g.target);
        }), _ = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        _ && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, x, b) {
    var y = { name: v, delta: g, target: x, should: b };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = gs(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, Vf(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, gs(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return ao.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, oo), document.addEventListener("touchmove", c, oo), document.addEventListener("touchstart", u, oo), function() {
      ao = ao.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, oo), document.removeEventListener("touchmove", c, oo), document.removeEventListener("touchstart", u, oo);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: v5(o) }) : null,
    m ? C.createElement(Hm, { gapMode: "margin" }) : null
  );
}
const x5 = zm(Vv, b5);
var zv = C.forwardRef(function(e, t) {
  return C.createElement(Ui, Nt({}, e, { ref: t, sideCar: x5 }));
});
zv.classNames = Ui.classNames;
const y5 = zv, Bv = "Dialog", [Hv, u8] = RN(Bv), [w5, Gr] = Hv(Bv), $5 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = q(null), c = q(null), [l = !1, u] = LN({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(w5, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: Sc(),
    titleId: Sc(),
    descriptionId: Sc(),
    open: l,
    onOpenChange: u,
    onOpenToggle: he(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, Yv = "DialogPortal", [_5, Kv] = Hv(Yv, {
  forceMount: void 0
}), C5 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Gr(Yv, t);
  return /* @__PURE__ */ w(_5, {
    scope: t,
    forceMount: n
  }, Vt.map(
    r,
    (s) => /* @__PURE__ */ w(Wi, {
      present: n || a.open
    }, /* @__PURE__ */ w(a5, {
      asChild: !0,
      container: o
    }, s))
  ));
}, yl = "DialogOverlay", S5 = /* @__PURE__ */ L((e, t) => {
  const n = Kv(yl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Gr(yl, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(Wi, {
    present: r || a.open
  }, /* @__PURE__ */ w(E5, T({}, o, {
    ref: t
  }))) : null;
}), E5 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gr(yl, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(y5, {
      as: qu,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(Vi.div, T({
      "data-state": qv(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), ma = "DialogContent", N5 = /* @__PURE__ */ L((e, t) => {
  const n = Kv(ma, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Gr(ma, e.__scopeDialog);
  return /* @__PURE__ */ w(Wi, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(P5, T({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(T5, T({}, o, {
    ref: t
  })));
}), P5 = /* @__PURE__ */ L((e, t) => {
  const n = Gr(ma, e.__scopeDialog), r = q(null), o = Ga(t, n.contentRef, r);
  return ee(() => {
    const a = r.current;
    if (a)
      return Wa(a);
  }, []), /* @__PURE__ */ w(Gv, T({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: mo(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: mo(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: mo(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), T5 = /* @__PURE__ */ L((e, t) => {
  const n = Gr(ma, e.__scopeDialog), r = q(!1);
  return /* @__PURE__ */ w(Gv, T({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (o) => {
      var a;
      if ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, o), !o.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), o.preventDefault();
      }
      r.current = !1;
    },
    onInteractOutside: (o) => {
      var a, s;
      (a = e.onInteractOutside) === null || a === void 0 || a.call(e, o), o.defaultPrevented || (r.current = !0);
      const i = o.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(i)) && o.preventDefault();
    }
  }));
}), Gv = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Gr(ma, n), c = q(null), l = Ga(t, c);
  return c5(), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(QN, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(qN, T({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": qv(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function qv(e) {
  return e ? "open" : "closed";
}
const O5 = $5, k5 = C5, M5 = S5, D5 = N5;
var Uf = 1, R5 = 0.9, j5 = 0.3, Oc = 0.1, A5 = 0, kc = 0.999, I5 = 0.9999, L5 = 0.99, zf = /[\\\/\-_+.# \t"@\[\(\{&]/, F5 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function wl(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? Uf : L5;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, u, d; i >= 0; )
    l = wl(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= Uf : zf.test(e.charAt(i - 1)) ? (l *= R5, d = e.slice(o, i - 1).match(F5), d && o > 0 && (l *= Math.pow(kc, d.length))) : zf.test(e.slice(o, i - 1)) ? (l *= A5, o > 0 && (l *= Math.pow(kc, i - o))) : (l *= j5, o > 0 && (l *= Math.pow(kc, i - o))), e.charAt(i) !== t.charAt(a) && (l *= I5)), l < Oc && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (u = wl(e, t, n, r, i + 1, a + 2), u * Oc > l && (l = u * Oc)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function V5(e, t) {
  return wl(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var W5 = V5, U5 = '[cmdk-list-sizer=""]', Qo = '[cmdk-group=""]', Mc = '[cmdk-group-items=""]', z5 = '[cmdk-group-heading=""]', Zv = '[cmdk-item=""]', Bf = `${Zv}:not([aria-disabled="true"])`, $l = "cmdk-item-select", ar = "data-value", B5 = (e, t) => W5(e, t), Xv = C.createContext(void 0), qa = () => C.useContext(Xv), Qv = C.createContext(void 0), Zu = () => C.useContext(Qv), Jv = C.createContext(void 0), eg = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = so(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = so(() => /* @__PURE__ */ new Set()), a = so(() => /* @__PURE__ */ new Map()), s = so(() => /* @__PURE__ */ new Map()), i = so(() => /* @__PURE__ */ new Set()), c = tg(e), { label: l, children: u, value: d, onValueChange: p, filter: m, shouldFilter: h, ...v } = e, g = C.useId(), x = C.useId(), b = C.useId(), y = tP();
  Wo(() => {
    if (d !== void 0) {
      let R = d.trim().toLowerCase();
      r.current.value = R, y(6, Y), _.emit();
    }
  }, [d]);
  let _ = C.useMemo(() => ({ subscribe: (R) => (i.current.add(R), () => i.current.delete(R)), snapshot: () => r.current, setState: (R, M, K) => {
    var X, ae, ne;
    if (!Object.is(r.current[R], M)) {
      if (r.current[R] = M, R === "search")
        P(), k(), y(1, S);
      else if (R === "value")
        if (((X = c.current) == null ? void 0 : X.value) !== void 0) {
          (ne = (ae = c.current).onValueChange) == null || ne.call(ae, M);
          return;
        } else
          K || y(5, Y);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((R) => R());
  } }), []), $ = C.useMemo(() => ({ value: (R, M) => {
    M !== s.current.get(R) && (s.current.set(R, M), r.current.filtered.items.set(R, N(M)), y(2, () => {
      k(), _.emit();
    }));
  }, item: (R, M) => (o.current.add(R), M && (a.current.has(M) ? a.current.get(M).add(R) : a.current.set(M, /* @__PURE__ */ new Set([R]))), y(3, () => {
    P(), k(), r.current.value || S(), _.emit();
  }), () => {
    s.current.delete(R), o.current.delete(R), r.current.filtered.items.delete(R), y(4, () => {
      P(), S(), _.emit();
    });
  }), group: (R) => (a.current.has(R) || a.current.set(R, /* @__PURE__ */ new Set()), () => {
    s.current.delete(R), a.current.delete(R);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: b, labelId: x }), []);
  function N(R) {
    var M;
    let K = ((M = c.current) == null ? void 0 : M.filter) ?? B5;
    return R ? K(R, r.current.search) : 0;
  }
  function k() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let R = r.current.filtered.items, M = [];
    r.current.filtered.groups.forEach((X) => {
      let ae = a.current.get(X), ne = 0;
      ae.forEach((ge) => {
        let be = R.get(ge);
        ne = Math.max(be, ne);
      }), M.push([X, ne]);
    });
    let K = n.current.querySelector(U5);
    B().sort((X, ae) => {
      let ne = X.getAttribute(ar), ge = ae.getAttribute(ar);
      return (R.get(ge) ?? 0) - (R.get(ne) ?? 0);
    }).forEach((X) => {
      let ae = X.closest(Mc);
      ae ? ae.appendChild(X.parentElement === ae ? X : X.closest(`${Mc} > *`)) : K.appendChild(X.parentElement === K ? X : X.closest(`${Mc} > *`));
    }), M.sort((X, ae) => ae[1] - X[1]).forEach((X) => {
      let ae = n.current.querySelector(`${Qo}[${ar}="${X[0]}"]`);
      ae == null || ae.parentElement.appendChild(ae);
    });
  }
  function S() {
    let R = B().find((K) => !K.ariaDisabled), M = R == null ? void 0 : R.getAttribute(ar);
    _.setState("value", M || void 0);
  }
  function P() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let R = 0;
    for (let M of o.current) {
      let K = s.current.get(M), X = N(K);
      r.current.filtered.items.set(M, X), X > 0 && R++;
    }
    for (let [M, K] of a.current)
      for (let X of K)
        if (r.current.filtered.items.get(X) > 0) {
          r.current.filtered.groups.add(M);
          break;
        }
    r.current.filtered.count = R;
  }
  function Y() {
    var R, M, K;
    let X = U();
    X && (((R = X.parentElement) == null ? void 0 : R.firstChild) === X && ((K = (M = X.closest(Qo)) == null ? void 0 : M.querySelector(z5)) == null || K.scrollIntoView({ block: "nearest" })), X.scrollIntoView({ block: "nearest" }));
  }
  function U() {
    return n.current.querySelector(`${Zv}[aria-selected="true"]`);
  }
  function B() {
    return Array.from(n.current.querySelectorAll(Bf));
  }
  function Z(R) {
    let M = B()[R];
    M && _.setState("value", M.getAttribute(ar));
  }
  function F(R) {
    var M;
    let K = U(), X = B(), ae = X.findIndex((ge) => ge === K), ne = X[ae + R];
    (M = c.current) != null && M.loop && (ne = ae + R < 0 ? X[X.length - 1] : ae + R === X.length ? X[0] : X[ae + R]), ne && _.setState("value", ne.getAttribute(ar));
  }
  function A(R) {
    let M = U(), K = M == null ? void 0 : M.closest(Qo), X;
    for (; K && !X; )
      K = R > 0 ? J5(K, Qo) : eP(K, Qo), X = K == null ? void 0 : K.querySelector(Bf);
    X ? _.setState("value", X.getAttribute(ar)) : F(R);
  }
  let I = () => Z(B().length - 1), W = (R) => {
    R.preventDefault(), R.metaKey ? I() : R.altKey ? A(1) : F(1);
  }, G = (R) => {
    R.preventDefault(), R.metaKey ? Z(0) : R.altKey ? A(-1) : F(-1);
  };
  return C.createElement("div", { ref: Za([n, t]), ...v, "cmdk-root": "", onKeyDown: (R) => {
    var M;
    if ((M = v.onKeyDown) == null || M.call(v, R), !R.defaultPrevented)
      switch (R.key) {
        case "n":
        case "j": {
          R.ctrlKey && W(R);
          break;
        }
        case "ArrowDown": {
          W(R);
          break;
        }
        case "p":
        case "k": {
          R.ctrlKey && G(R);
          break;
        }
        case "ArrowUp": {
          G(R);
          break;
        }
        case "Home": {
          R.preventDefault(), Z(0);
          break;
        }
        case "End": {
          R.preventDefault(), I();
          break;
        }
        case "Enter": {
          R.preventDefault();
          let K = U();
          if (K) {
            let X = new Event($l);
            K.dispatchEvent(X);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: $.inputId, id: $.labelId, style: nP }, l), C.createElement(Qv.Provider, { value: _ }, C.createElement(Xv.Provider, { value: $ }, u)));
}), H5 = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(Jv), a = qa(), s = tg(e);
  Wo(() => a.item(n, o), []);
  let i = ng(n, r, [e.value, e.children, r]), c = Zu(), l = wo((x) => x.value && x.value === i.current), u = wo((x) => a.filter() === !1 ? !0 : x.search ? x.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let x = r.current;
    if (!(!x || e.disabled))
      return x.addEventListener($l, d), () => x.removeEventListener($l, d);
  }, [u, e.onSelect, e.disabled]);
  function d() {
    var x, b;
    (b = (x = s.current).onSelect) == null || b.call(x, i.current);
  }
  function p() {
    c.setState("value", i.current, !0);
  }
  if (!u)
    return null;
  let { disabled: m, value: h, onSelect: v, ...g } = e;
  return C.createElement("div", { ref: Za([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : p, onClick: m ? void 0 : d }, e.children);
}), Y5 = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = qa(), u = wo((p) => l.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Wo(() => l.group(a), []), ng(a, s, [e.value, e.heading, i]);
  let d = C.createElement(Jv.Provider, { value: a }, r);
  return C.createElement("div", { ref: Za([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, d));
}), K5 = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = wo((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: Za([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), G5 = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Zu(), s = wo((c) => c.search), i = qa();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), q5 = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = qa();
  return C.useEffect(() => {
    if (a.current && o.current) {
      let i = a.current, c = o.current, l, u = new ResizeObserver(() => {
        l = requestAnimationFrame(() => {
          let d = i.getBoundingClientRect().height;
          c.style.setProperty("--cmdk-list-height", d.toFixed(1) + "px");
        });
      });
      return u.observe(i), () => {
        cancelAnimationFrame(l), u.unobserve(i);
      };
    }
  }, []), C.createElement("div", { ref: Za([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), Z5 = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(O5, { open: n, onOpenChange: r }, C.createElement(k5, { container: o }, C.createElement(M5, { "cmdk-overlay": "" }), C.createElement(D5, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(eg, { ref: t, ...a }))));
}), X5 = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = wo((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), Q5 = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), Ut = Object.assign(eg, { List: q5, Item: H5, Input: G5, Group: Y5, Separator: K5, Dialog: Z5, Empty: X5, Loading: Q5 });
function J5(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function eP(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function tg(e) {
  let t = C.useRef(e);
  return Wo(() => {
    t.current = e;
  }), t;
}
var Wo = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function so(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Za(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function wo(e) {
  let t = Zu(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function ng(e, t, n) {
  let r = C.useRef(), o = qa();
  return Wo(() => {
    var a;
    let s = (() => {
      var i;
      for (let c of n) {
        if (typeof c == "string")
          return c.trim().toLowerCase();
        if (typeof c == "object" && "current" in c && c.current)
          return (i = c.current.textContent) == null ? void 0 : i.trim().toLowerCase();
      }
    })();
    o.value(e, s), (a = t.current) == null || a.setAttribute(ar, s), r.current = s;
  }), r;
}
var tP = () => {
  let [e, t] = C.useState(), n = so(() => /* @__PURE__ */ new Map());
  return Wo(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, nP = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Bn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut,
  {
    ref: n,
    className: j(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Bn.displayName = Ut.displayName;
const d8 = ({ children: e, ...t }) => /* @__PURE__ */ f.exports.jsx(qh, { ...t, children: /* @__PURE__ */ f.exports.jsx(Uu, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ f.exports.jsx(Bn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), fr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.exports.jsx(Ds, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.exports.jsx(
    Ut.Input,
    {
      ref: n,
      className: j(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
fr.displayName = Ut.Input.displayName;
const Xa = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.List,
  {
    ref: n,
    className: j("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Xa.displayName = Ut.List.displayName;
const pr = C.forwardRef((e, t) => /* @__PURE__ */ f.exports.jsx(
  Ut.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
pr.displayName = Ut.Empty.displayName;
const dn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.Group,
  {
    ref: n,
    className: j(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
dn.displayName = Ut.Group.displayName;
const zi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.Separator,
  {
    ref: n,
    className: j("-mx-1 h-px bg-border", e),
    ...t
  }
));
zi.displayName = Ut.Separator.displayName;
const fn = C.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ut.Item,
  {
    ref: r,
    onClick: t,
    className: j(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n
  }
));
fn.displayName = Ut.Item.displayName;
const rP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: j(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
rP.displayName = "CommandShortcut";
const oP = /* @__PURE__ */ L((e, t) => {
  const { ratio: n = 1, style: r, ...o } = e;
  return /* @__PURE__ */ w("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ w(me.div, T({}, o, {
    ref: t,
    style: {
      ...r,
      // ensures children expand in ratio
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  })));
}), aP = oP, f8 = aP;
function sP(e, t) {
  return mi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const rg = "ScrollArea", [og, p8] = st(rg), [iP, Xt] = og(rg), cP = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = J(null), [l, u] = J(null), [d, p] = J(null), [m, h] = J(null), [v, g] = J(null), [x, b] = J(0), [y, _] = J(0), [$, N] = J(!1), [k, S] = J(!1), P = Ee(
    t,
    (U) => c(U)
  ), Y = Nn(o);
  return /* @__PURE__ */ w(iP, {
    scope: n,
    type: r,
    dir: Y,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: l,
    onViewportChange: u,
    content: d,
    onContentChange: p,
    scrollbarX: m,
    onScrollbarXChange: h,
    scrollbarXEnabled: $,
    onScrollbarXEnabledChange: N,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: k,
    onScrollbarYEnabledChange: S,
    onCornerWidthChange: b,
    onCornerHeightChange: _
  }, /* @__PURE__ */ w(me.div, T({
    dir: Y
  }, s, {
    ref: P,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: x + "px",
      ["--radix-scroll-area-corner-height"]: y + "px",
      ...e.style
    }
  })));
}), lP = "ScrollAreaViewport", uP = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = Xt(lP, n), s = q(null), i = Ee(t, s, a.onViewportChange);
  return /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(me.div, T({
    "data-radix-scroll-area-viewport": ""
  }, o, {
    ref: i,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ w("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), Zn = "ScrollAreaScrollbar", ag = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(Zn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return ee(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ w(dP, T({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ w(fP, T({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ w(sg, T({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ w(Xu, T({}, r, {
    ref: t
  })) : null;
}), dP = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(Zn, e.__scopeScrollArea), [a, s] = J(!1);
  return ee(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const l = () => {
        window.clearTimeout(c), s(!0);
      }, u = () => {
        c = window.setTimeout(
          () => s(!1),
          o.scrollHideDelay
        );
      };
      return i.addEventListener("pointerenter", l), i.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", l), i.removeEventListener("pointerleave", u);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ w(ct, {
    present: n || a
  }, /* @__PURE__ */ w(sg, T({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), fP = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(Zn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Hi(
    () => c("SCROLL_END"),
    100
  ), [i, c] = sP("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return ee(() => {
    if (i === "idle") {
      const l = window.setTimeout(
        () => c("HIDE"),
        o.scrollHideDelay
      );
      return () => window.clearTimeout(l);
    }
  }, [
    i,
    o.scrollHideDelay,
    c
  ]), ee(() => {
    const l = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let d = l[u];
      const p = () => {
        const m = l[u];
        d !== m && (c("SCROLL"), s()), d = m;
      };
      return l.addEventListener("scroll", p), () => l.removeEventListener("scroll", p);
    }
  }, [
    o.viewport,
    a,
    c,
    s
  ]), /* @__PURE__ */ w(ct, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ w(Xu, T({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: te(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: te(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), sg = /* @__PURE__ */ L((e, t) => {
  const n = Xt(Zn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = J(!1), i = e.orientation === "horizontal", c = Hi(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return $o(n.viewport, c), $o(n.content, c), /* @__PURE__ */ w(ct, {
    present: r || a
  }, /* @__PURE__ */ w(Xu, T({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), Xu = /* @__PURE__ */ L((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Xt(Zn, e.__scopeScrollArea), a = q(null), s = q(0), [i, c] = J({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = ug(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function d(p, m) {
    return yP(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ w(pP, T({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = Hf(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = d(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ w(mP, T({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = Hf(p, i);
        a.current.style.transform = `translate3d(0, ${m}px, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = d(p));
    }
  })) : null;
}), pP = /* @__PURE__ */ L((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Xt(Zn, e.__scopeScrollArea), [s, i] = J(), c = q(null), l = Ee(t, c, a.onScrollbarXChange);
  return ee(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(cg, T({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Bi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), fg(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: qs(s.paddingLeft),
          paddingEnd: qs(s.paddingRight)
        }
      });
    }
  }));
}), mP = /* @__PURE__ */ L((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Xt(Zn, e.__scopeScrollArea), [s, i] = J(), c = q(null), l = Ee(t, c, a.onScrollbarYChange);
  return ee(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(cg, T({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Bi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), fg(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: qs(s.paddingTop),
          paddingEnd: qs(s.paddingBottom)
        }
      });
    }
  }));
}), [hP, ig] = og(Zn), cg = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...p } = e, m = Xt(Zn, n), [h, v] = J(null), g = Ee(
    t,
    (P) => v(P)
  ), x = q(null), b = q(""), y = m.viewport, _ = r.content - r.viewport, $ = Ze(u), N = Ze(c), k = Hi(d, 10);
  function S(P) {
    if (x.current) {
      const Y = P.clientX - x.current.left, U = P.clientY - x.current.top;
      l({
        x: Y,
        y: U
      });
    }
  }
  return ee(() => {
    const P = (Y) => {
      const U = Y.target;
      (h == null ? void 0 : h.contains(U)) && $(Y, _);
    };
    return document.addEventListener("wheel", P, {
      passive: !1
    }), () => document.removeEventListener("wheel", P, {
      passive: !1
    });
  }, [
    y,
    h,
    _,
    $
  ]), ee(N, [
    r,
    N
  ]), $o(h, k), $o(m.content, k), /* @__PURE__ */ w(hP, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: Ze(a),
    onThumbPointerUp: Ze(s),
    onThumbPositionChange: N,
    onThumbPointerDown: Ze(i)
  }, /* @__PURE__ */ w(me.div, T({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: te(e.onPointerDown, (P) => {
      P.button === 0 && (P.target.setPointerCapture(P.pointerId), x.current = h.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", S(P));
    }),
    onPointerMove: te(e.onPointerMove, S),
    onPointerUp: te(e.onPointerUp, (P) => {
      const Y = P.target;
      Y.hasPointerCapture(P.pointerId) && Y.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = b.current, x.current = null;
    })
  })));
}), _l = "ScrollAreaThumb", vP = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = ig(_l, e.__scopeScrollArea);
  return /* @__PURE__ */ w(ct, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ w(gP, T({
    ref: t
  }, r)));
}), gP = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = Xt(_l, n), s = ig(_l, n), { onThumbPositionChange: i } = s, c = Ee(
    t,
    (d) => s.onThumbChange(d)
  ), l = q(), u = Hi(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return ee(() => {
    const d = a.viewport;
    if (d) {
      const p = () => {
        if (u(), !l.current) {
          const m = wP(d, i);
          l.current = m, i();
        }
      };
      return i(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ w(me.div, T({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: te(e.onPointerDownCapture, (d) => {
      const m = d.target.getBoundingClientRect(), h = d.clientX - m.left, v = d.clientY - m.top;
      s.onThumbPointerDown({
        x: h,
        y: v
      });
    }),
    onPointerUp: te(e.onPointerUp, s.onThumbPointerUp)
  }));
}), lg = "ScrollAreaCorner", bP = /* @__PURE__ */ L((e, t) => {
  const n = Xt(lg, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ w(xP, T({}, e, {
    ref: t
  })) : null;
}), xP = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Xt(lg, n), [a, s] = J(0), [i, c] = J(0), l = Boolean(a && i);
  return $o(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), $o(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), l ? /* @__PURE__ */ w(me.div, T({}, r, {
    ref: t,
    style: {
      width: a,
      height: i,
      position: "absolute",
      right: o.dir === "ltr" ? 0 : void 0,
      left: o.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...e.style
    }
  })) : null;
});
function qs(e) {
  return e ? parseInt(e, 10) : 0;
}
function ug(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Bi(e) {
  const t = ug(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function yP(e, t, n, r = "ltr") {
  const o = Bi(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return dg([
    c,
    l
  ], d)(e);
}
function Hf(e, t, n = "ltr") {
  const r = Bi(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = pa(e, c);
  return dg([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function dg(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function fg(e, t) {
  return e > 0 && e < t;
}
const wP = (e, t = () => {
}) => {
  let n = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, r = 0;
  return function o() {
    const a = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, s = n.left !== a.left, i = n.top !== a.top;
    (s || i) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Hi(e, t) {
  const n = Ze(e), r = q(0);
  return ee(
    () => () => window.clearTimeout(r.current),
    []
  ), he(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function $o(e, t) {
  const n = Ze(t);
  Ct(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
const pg = cP, $P = uP, _P = bP, CP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  pg,
  {
    ref: r,
    className: j("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx($P, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.exports.jsx(mg, {}),
      /* @__PURE__ */ f.exports.jsx(_P, {})
    ]
  }
));
CP.displayName = pg.displayName;
const mg = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ag,
  {
    ref: r,
    orientation: t,
    className: j(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(vP, { className: "relative flex-1 rounded-full bg-border" })
  }
));
mg.displayName = ag.displayName;
const m8 = Mi, h8 = Di, v8 = Io, hg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(Mo, { className: j(e), ...t });
hg.displayName = Mo.displayName;
const vg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Do,
  {
    className: j(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
vg.displayName = Do.displayName;
const SP = No(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), EP = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(hg, { children: [
  /* @__PURE__ */ f.exports.jsx(vg, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Ro,
    {
      ref: o,
      className: j(SP({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f.exports.jsxs(Io, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ f.exports.jsx(gi, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
EP.displayName = Ro.displayName;
const NP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
NP.displayName = "SheetHeader";
const PP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
PP.displayName = "SheetFooter";
const TP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jo,
  {
    ref: n,
    className: j("text-lg font-semibold text-foreground", e),
    ...t
  }
));
TP.displayName = jo.displayName;
const OP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ao,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
OP.displayName = Ao.displayName;
const Qu = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f.exports.jsx(
  "table",
  {
    ref: n,
    className: j("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Qu.displayName = "TableUI";
const gg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("thead", { ref: n, className: j("[&_tr]:border-b", e), ...t }));
gg.displayName = "TableHeader";
const bg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tbody",
  {
    ref: n,
    className: j("[&_tr:last-child]:border-0", e),
    ...t
  }
));
bg.displayName = "TableBody";
const kP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: j("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
kP.displayName = "TableFooter";
const Yi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tr",
  {
    ref: n,
    className: j(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Yi.displayName = "TableRow";
const xg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "th",
  {
    ref: n,
    className: j(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
xg.displayName = "TableHead";
const Ju = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "td",
  {
    ref: n,
    className: j("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Ju.displayName = "TableCell";
const MP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "caption",
  {
    ref: n,
    className: j("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
MP.displayName = "TableCaption";
const DP = "AlertDialog", [RP, g8] = st(DP, [
  Bh
]), Xn = Bh(), jP = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Xn(t);
  return /* @__PURE__ */ w(Mi, T({}, r, n, {
    modal: !0
  }));
}, AP = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Xn(n);
  return /* @__PURE__ */ w(Di, T({}, o, r, {
    ref: t
  }));
}), IP = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Xn(t);
  return /* @__PURE__ */ w(Mo, T({}, r, n));
}, LP = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Xn(n);
  return /* @__PURE__ */ w(Do, T({}, o, r, {
    ref: t
  }));
}), yg = "AlertDialogContent", [FP, VP] = RP(yg), WP = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Xn(n), s = q(null), i = Ee(t, s), c = q(null);
  return /* @__PURE__ */ w(PS, {
    contentName: yg,
    titleName: UP,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ w(FP, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ w(Ro, T({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: te(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ w(Yl, null, r), !1)));
}), UP = "AlertDialogTitle", zP = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Xn(n);
  return /* @__PURE__ */ w(jo, T({}, o, r, {
    ref: t
  }));
}), BP = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Xn(n);
  return /* @__PURE__ */ w(Ao, T({}, o, r, {
    ref: t
  }));
}), HP = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Xn(n);
  return /* @__PURE__ */ w(Io, T({}, o, r, {
    ref: t
  }));
}), YP = "AlertDialogCancel", KP = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = VP(YP, n), a = Xn(n), s = Ee(t, o);
  return /* @__PURE__ */ w(Io, T({}, a, r, {
    ref: s
  }));
}), GP = jP, qP = AP, wg = IP, $g = LP, _g = WP, Cg = HP, Sg = KP, Eg = zP, Ng = BP, b8 = GP, x8 = qP, Pg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(wg, { className: j(e), ...t });
Pg.displayName = wg.displayName;
const Tg = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  $g,
  {
    className: j(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Tg.displayName = $g.displayName;
const ZP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(Pg, { children: [
  /* @__PURE__ */ f.exports.jsx(Tg, {}),
  /* @__PURE__ */ f.exports.jsx(
    _g,
    {
      ref: n,
      className: j(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...t
    }
  )
] }));
ZP.displayName = _g.displayName;
const XP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
XP.displayName = "AlertDialogHeader";
const QP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
QP.displayName = "AlertDialogFooter";
const JP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Eg,
  {
    ref: n,
    className: j("text-lg font-semibold", e),
    ...t
  }
));
JP.displayName = Eg.displayName;
const eT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ng,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
eT.displayName = Ng.displayName;
const tT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Cg,
  {
    ref: n,
    className: j(oa(), e),
    ...t
  }
));
tT.displayName = Cg.displayName;
const nT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Sg,
  {
    ref: n,
    className: j(
      oa({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
nT.displayName = Sg.displayName;
function Pt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      className: j("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Og = "Collapsible", [rT, kg] = st(Og), [oT, ed] = rT(Og), aT = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = ft({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ w(oT, {
    scope: n,
    disabled: a,
    contentId: mt(),
    open: c,
    onOpenToggle: he(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ w(me.div, T({
    "data-state": td(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), sT = "CollapsibleTrigger", Mg = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = ed(sT, n);
  return /* @__PURE__ */ w(me.button, T({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": td(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: te(e.onClick, o.onOpenToggle)
  }));
}), Dg = "CollapsibleContent", Rg = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = ed(Dg, e.__scopeCollapsible);
  return /* @__PURE__ */ w(
    ct,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ w(iT, T({}, r, {
      ref: t,
      present: a
    }))
  );
}), iT = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = ed(Dg, n), [i, c] = J(r), l = q(null), u = Ee(t, l), d = q(0), p = d.current, m = q(0), h = m.current, v = s.open || i, g = q(v), x = q();
  return ee(() => {
    const b = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(b);
  }, []), Ct(() => {
    const b = l.current;
    if (b) {
      x.current = x.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const y = b.getBoundingClientRect();
      d.current = y.height, m.current = y.width, g.current || (b.style.transitionDuration = x.current.transitionDuration, b.style.animationName = x.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ w(me.div, T({
    "data-state": td(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !v
  }, a, {
    ref: u,
    style: {
      ["--radix-collapsible-content-height"]: p ? `${p}px` : void 0,
      ["--radix-collapsible-content-width"]: h ? `${h}px` : void 0,
      ...e.style
    }
  }), v && o);
});
function td(e) {
  return e ? "open" : "closed";
}
const jg = aT, cT = Mg, lT = Rg, $r = "Accordion", uT = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [nd, dT, fT] = br($r), [Ki, y8] = st($r, [
  fT,
  kg
]), rd = kg(), Ag = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ E.createElement(nd.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ E.createElement(vT, T({}, a, {
    ref: t
  })) : /* @__PURE__ */ E.createElement(hT, T({}, o, {
    ref: t
  })));
});
Ag.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Ig, pT] = Ki($r), [Lg, mT] = Ki($r, {
  collapsible: !1
}), hT = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = ft({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ E.createElement(Ig, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: E.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ E.createElement(Lg, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ E.createElement(Fg, T({}, s, {
    ref: t
  }))));
}), vT = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = ft({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = E.useCallback(
    (u) => i(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      i
    ]
  ), l = E.useCallback(
    (u) => i(
      (d = []) => d.filter(
        (p) => p !== u
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ E.createElement(Ig, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ E.createElement(Lg, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ E.createElement(Fg, T({}, a, {
    ref: t
  }))));
}), [gT, Gi] = Ki($r), Fg = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = E.useRef(null), c = Ee(i, t), l = dT(n), d = Nn(o) === "ltr", p = te(e.onKeyDown, (m) => {
    var h;
    if (!uT.includes(m.key))
      return;
    const v = m.target, g = l().filter((P) => {
      var Y;
      return !((Y = P.ref.current) !== null && Y !== void 0 && Y.disabled);
    }), x = g.findIndex(
      (P) => P.ref.current === v
    ), b = g.length;
    if (x === -1)
      return;
    m.preventDefault();
    let y = x;
    const _ = 0, $ = b - 1, N = () => {
      y = x + 1, y > $ && (y = _);
    }, k = () => {
      y = x - 1, y < _ && (y = $);
    };
    switch (m.key) {
      case "Home":
        y = _;
        break;
      case "End":
        y = $;
        break;
      case "ArrowRight":
        a === "horizontal" && (d ? N() : k());
        break;
      case "ArrowDown":
        a === "vertical" && N();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? k() : N());
        break;
      case "ArrowUp":
        a === "vertical" && k();
        break;
    }
    const S = y % b;
    (h = g[S].ref.current) === null || h === void 0 || h.focus();
  });
  return /* @__PURE__ */ E.createElement(gT, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ E.createElement(nd.Slot, {
    scope: n
  }, /* @__PURE__ */ E.createElement(me.div, T({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Cl = "AccordionItem", [bT, od] = Ki(Cl), xT = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Gi(Cl, n), s = pT(Cl, n), i = rd(n), c = mt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ E.createElement(bT, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ E.createElement(jg, T({
    "data-orientation": a.orientation,
    "data-state": Vg(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), yT = "AccordionHeader", wT = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Gi($r, n), a = od(yT, n);
  return /* @__PURE__ */ E.createElement(me.h3, T({
    "data-orientation": o.orientation,
    "data-state": Vg(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Yf = "AccordionTrigger", $T = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Gi($r, n), a = od(Yf, n), s = mT(Yf, n), i = rd(n);
  return /* @__PURE__ */ E.createElement(nd.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ E.createElement(cT, T({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), _T = "AccordionContent", CT = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Gi($r, n), a = od(_T, n), s = rd(n);
  return /* @__PURE__ */ E.createElement(lT, T({
    role: "region",
    "aria-labelledby": a.triggerId,
    "data-orientation": o.orientation
  }, s, r, {
    ref: t,
    style: {
      ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
      ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function Vg(e) {
  return e ? "open" : "closed";
}
const ST = Ag, ET = xT, NT = wT, Wg = $T, Ug = CT, w8 = ST, PT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ET,
  {
    ref: n,
    className: j("border-b", e),
    ...t
  }
));
PT.displayName = "AccordionItem";
const TT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(NT, { className: "flex", children: /* @__PURE__ */ f.exports.jsxs(
  Wg,
  {
    ref: r,
    className: j(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(aa, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
TT.displayName = Wg.displayName;
const OT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ug,
  {
    ref: r,
    className: j(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
OT.displayName = Ug.displayName;
const $8 = jg, _8 = Mg, C8 = Rg;
let Dc;
const zg = "HoverCard", [Bg, S8] = st(zg, [
  Pn
]), ad = Pn(), [kT, sd] = Bg(zg), MT = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = ad(t), l = q(0), u = q(0), d = q(!1), p = q(!1), [m = !1, h] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = he(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => h(!0),
      s
    );
  }, [
    s,
    h
  ]), g = he(() => {
    clearTimeout(l.current), !d.current && !p.current && (u.current = window.setTimeout(
      () => h(!1),
      i
    ));
  }, [
    i,
    h
  ]), x = he(
    () => h(!1),
    [
      h
    ]
  );
  return ee(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ w(kT, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: x,
    hasSelectionRef: d,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ w(Oo, c, n));
}, DT = "HoverCardTrigger", RT = /* @__PURE__ */ L((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = sd(DT, n), a = ad(n);
  return /* @__PURE__ */ w(Fa, T({
    asChild: !0
  }, a), /* @__PURE__ */ w(me.a, T({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: te(e.onPointerEnter, Zs(o.onOpen)),
    onPointerLeave: te(e.onPointerLeave, Zs(o.onClose)),
    onFocus: te(e.onFocus, o.onOpen),
    onBlur: te(e.onBlur, o.onClose),
    onTouchStart: te(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), jT = "HoverCardPortal", [E8, AT] = Bg(jT, {
  forceMount: void 0
}), Sl = "HoverCardContent", IT = /* @__PURE__ */ L((e, t) => {
  const n = AT(Sl, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = sd(Sl, e.__scopeHoverCard);
  return /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, /* @__PURE__ */ w(LT, T({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: te(e.onPointerEnter, Zs(a.onOpen)),
    onPointerLeave: te(e.onPointerLeave, Zs(a.onClose)),
    ref: t
  })));
}), LT = /* @__PURE__ */ L((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = sd(Sl, n), l = ad(n), u = q(null), d = Ee(t, u), [p, m] = J(!1);
  return ee(() => {
    if (p) {
      const h = document.body;
      return Dc = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = Dc, h.style.webkitUserSelect = Dc;
      };
    }
  }, [
    p
  ]), ee(() => {
    if (u.current) {
      const h = () => {
        m(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var v;
          ((v = document.getSelection()) === null || v === void 0 ? void 0 : v.toString()) !== "" && (c.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", h), () => {
        document.removeEventListener("pointerup", h), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [
    c.isPointerDownOnContentRef,
    c.hasSelectionRef
  ]), ee(() => {
    u.current && FT(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ w(zr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: te(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ w(Va, T({}, l, i, {
    onPointerDown: te(i.onPointerDown, (h) => {
      h.currentTarget.contains(h.target) && m(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
    }),
    ref: d,
    style: {
      ...i.style,
      userSelect: p ? "text" : void 0,
      // Safari requires prefix
      WebkitUserSelect: p ? "text" : void 0,
      "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
      "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
      "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
    }
  })));
});
function Zs(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function FT(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const VT = MT, WT = RT, Hg = IT, N8 = VT, P8 = WT, UT = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  Hg,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: j(
      "z-50 w-64 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
UT.displayName = Hg.displayName;
const T8 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), id = "Menubar", [El, zT, BT] = br(id), [Yg, O8] = st(id, [
  BT,
  xr
]), Lt = Ua(), Kg = xr(), [HT, cd] = Yg(id), YT = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = Nn(i), u = Kg(n), [d = "", p] = ft({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = J(null);
  return /* @__PURE__ */ w(HT, {
    scope: n,
    value: d,
    onMenuOpen: he((v) => {
      p(v), h(v);
    }, [
      p
    ]),
    onMenuClose: he(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: he((v) => {
      p(
        (g) => Boolean(g) ? "" : v
      ), h(v);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ w(El.Provider, {
    scope: n
  }, /* @__PURE__ */ w(El.Slot, {
    scope: n
  }, /* @__PURE__ */ w(Ci, T({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: m,
    onCurrentTabStopIdChange: h
  }), /* @__PURE__ */ w(me.div, T({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), Gg = "MenubarMenu", [KT, qg] = Yg(Gg), GT = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = mt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = cd(Gg, t), i = Lt(t), c = q(null), l = q(!1), u = s.value === a;
  return ee(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ w(KT, {
    scope: t,
    value: a,
    triggerId: mt(),
    triggerRef: c,
    contentId: mt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ w(wu, T({}, i, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, Kf = "MenubarTrigger", qT = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = Kg(n), s = Lt(n), i = cd(Kf, n), c = qg(Kf, n), l = q(null), u = Ee(t, l, c.triggerRef), [d, p] = J(!1), m = i.value === c.value;
  return /* @__PURE__ */ w(El.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ w(Si, T({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ w($u, T({
    asChild: !0
  }, s), /* @__PURE__ */ w(me.button, T({
    type: "button",
    role: "menuitem",
    id: c.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": m,
    "aria-controls": m ? c.contentId : void 0,
    "data-highlighted": d ? "" : void 0,
    "data-state": m ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: u,
    onPointerDown: te(e.onPointerDown, (h) => {
      !r && h.button === 0 && h.ctrlKey === !1 && (i.onMenuOpen(c.value), m || h.preventDefault());
    }),
    onPointerEnter: te(e.onPointerEnter, () => {
      if (Boolean(i.value) && !m) {
        var v;
        i.onMenuOpen(c.value), (v = l.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: te(e.onKeyDown, (h) => {
      r || ([
        "Enter",
        " "
      ].includes(h.key) && i.onMenuToggle(c.value), h.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(h.key) && (c.wasKeyboardTriggerOpenRef.current = !0, h.preventDefault()));
    }),
    onFocus: te(
      e.onFocus,
      () => p(!0)
    ),
    onBlur: te(
      e.onBlur,
      () => p(!1)
    )
  })))));
}), ZT = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Lt(t);
  return /* @__PURE__ */ w(_u, T({}, r, n));
}, Gf = "MenubarContent", XT = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Lt(n), s = cd(Gf, n), i = qg(Gf, n), c = zT(n), l = q(!1);
  return /* @__PURE__ */ w(Cu, T({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: te(e.onCloseAutoFocus, (u) => {
      if (!Boolean(s.value) && !l.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
      }
      l.current = !1, u.preventDefault();
    }),
    onFocusOutside: te(e.onFocusOutside, (u) => {
      const d = u.target;
      c().some((m) => {
        var h;
        return (h = m.ref.current) === null || h === void 0 ? void 0 : h.contains(d);
      }) && u.preventDefault();
    }),
    onInteractOutside: te(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (u) => {
      i.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: te(e.onKeyDown, (u) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(u.key)) {
        const d = u.target, p = d.hasAttribute("data-radix-menubar-subtrigger"), m = d.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!v && p || m && v)
          return;
        let b = c().filter(
          ($) => !$.disabled
        ).map(
          ($) => $.value
        );
        v && b.reverse();
        const y = b.indexOf(i.value);
        b = s.loop ? l6(b, y + 1) : b.slice(y + 1);
        const [_] = b;
        _ && s.onMenuOpen(_);
      }
    }, {
      checkForDefaultPrevented: !1
    }),
    style: {
      ...e.style,
      "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
      "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
      "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), QT = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Su, T({}, o, r, {
    ref: t
  }));
}), JT = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Eu, T({}, o, r, {
    ref: t
  }));
}), e6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Nu, T({}, o, r, {
    ref: t
  }));
}), t6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Pu, T({}, o, r, {
    ref: t
  }));
}), n6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Tu, T({}, o, r, {
    ref: t
  }));
}), r6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Ou, T({}, o, r, {
    ref: t
  }));
}), o6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(ku, T({}, o, r, {
    ref: t
  }));
}), a6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Mu, T({}, o, r, {
    ref: t
  }));
}), s6 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Lt(t), [i = !1, c] = ft({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(Du, T({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, i6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Ru, T({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), c6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(ju, T({}, o, {
    "data-radix-menubar-content": ""
  }, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
      "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
      "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
function l6(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Zg = YT, u6 = GT, Xg = qT, Qg = ZT, Jg = XT, d6 = QT, eb = JT, tb = e6, nb = t6, f6 = n6, rb = r6, ob = o6, ab = a6, p6 = s6, sb = i6, ib = c6, k8 = u6, M8 = d6, D8 = Qg, R8 = p6, j8 = f6, m6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Zg,
  {
    ref: n,
    className: j(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
m6.displayName = Zg.displayName;
const h6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Xg,
  {
    ref: n,
    className: j(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
h6.displayName = Xg.displayName;
const v6 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  sb,
  {
    ref: o,
    className: j(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(Wr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
v6.displayName = sb.displayName;
const g6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ib,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
g6.displayName = ib.displayName;
const b6 = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.exports.jsx(Qg, { children: /* @__PURE__ */ f.exports.jsx(
    Jg,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: j(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
b6.displayName = Jg.displayName;
const x6 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  tb,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
x6.displayName = tb.displayName;
const y6 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  nb,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(ob, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
y6.displayName = nb.displayName;
const w6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  rb,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(ob, { children: /* @__PURE__ */ f.exports.jsx(vi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
w6.displayName = rb.displayName;
const $6 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  eb,
  {
    ref: r,
    className: j(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
$6.displayName = eb.displayName;
const _6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ab,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
_6.displayName = ab.displayName;
const C6 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: j(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
C6.displayname = "MenubarShortcut";
const Qa = "NavigationMenu", [ld, cb, S6] = br(Qa), [Nl, E6, N6] = br(Qa), [ud, A8] = st(Qa, [
  S6,
  N6
]), [P6, hn] = ud(Qa), [T6, O6] = ud(Qa), k6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, p] = J(null), m = Ee(
    t,
    (P) => p(P)
  ), h = Nn(l), v = q(0), g = q(0), x = q(0), [b, y] = J(!0), [_ = "", $] = ft({
    prop: r,
    onChange: (P) => {
      const Y = P !== "", U = i > 0;
      Y ? (window.clearTimeout(x.current), U && y(!1)) : (window.clearTimeout(x.current), x.current = window.setTimeout(
        () => y(!0),
        i
      )), o == null || o(P);
    },
    defaultProp: a
  }), N = he(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => $(""),
      150
    );
  }, [
    $
  ]), k = he((P) => {
    window.clearTimeout(g.current), $(P);
  }, [
    $
  ]), S = he((P) => {
    _ === P ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), $(P);
    }, s);
  }, [
    _,
    $,
    s
  ]);
  return ee(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(x.current);
  }, []), /* @__PURE__ */ w(M6, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: h,
    orientation: c,
    rootNavigationMenu: d,
    onTriggerEnter: (P) => {
      window.clearTimeout(v.current), b ? S(P) : k(P);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), N();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: N,
    onItemSelect: (P) => {
      $(
        (Y) => Y === P ? "" : P
      );
    },
    onItemDismiss: () => $("")
  }, /* @__PURE__ */ w(me.nav, T({
    "aria-label": "Main",
    "data-orientation": c,
    dir: h
  }, u, {
    ref: m
  })));
}), M6 = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: p, onContentLeave: m } = e, [h, v] = J(null), [g, x] = J(/* @__PURE__ */ new Map()), [b, y] = J(null);
  return /* @__PURE__ */ w(P6, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: Fo(i),
    baseId: mt(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: b,
    onIndicatorTrackChange: y,
    onTriggerEnter: Ze(u),
    onTriggerLeave: Ze(d),
    onContentEnter: Ze(p),
    onContentLeave: Ze(m),
    onItemSelect: Ze(c),
    onItemDismiss: Ze(l),
    onViewportContentChange: he((_, $) => {
      x((N) => (N.set(_, $), new Map(N)));
    }, []),
    onViewportContentRemove: he((_) => {
      x(($) => $.has(_) ? ($.delete(_), new Map($)) : $);
    }, [])
  }, /* @__PURE__ */ w(ld.Provider, {
    scope: t
  }, /* @__PURE__ */ w(T6, {
    scope: t,
    items: g
  }, s)));
}, D6 = "NavigationMenuList", R6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = hn(D6, n), a = /* @__PURE__ */ w(me.ul, T({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ w(me.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ w(ld.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ w(pb, {
    asChild: !0
  }, a) : a));
}), j6 = "NavigationMenuItem", [A6, lb] = ud(j6), I6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = mt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = q(null), c = q(null), l = q(null), u = q(() => {
  }), d = q(!1), p = he((h = "start") => {
    if (i.current) {
      u.current();
      const v = Pl(i.current);
      v.length && dd(h === "start" ? v : v.reverse());
    }
  }, []), m = he(() => {
    if (i.current) {
      const h = Pl(i.current);
      h.length && (u.current = G6(h));
    }
  }, []);
  return /* @__PURE__ */ w(A6, {
    scope: n,
    value: s,
    triggerRef: c,
    contentRef: i,
    focusProxyRef: l,
    wasEscapeCloseRef: d,
    onEntryKeyDown: p,
    onFocusProxyEnter: p,
    onRootContentClose: m,
    onContentFocusOutside: m
  }, /* @__PURE__ */ w(me.li, T({}, o, {
    ref: t
  })));
}), qf = "NavigationMenuTrigger", L6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = hn(qf, e.__scopeNavigationMenu), s = lb(qf, e.__scopeNavigationMenu), i = q(null), c = Ee(i, s.triggerRef, t), l = hb(a.baseId, s.value), u = vb(a.baseId, s.value), d = q(!1), p = q(!1), m = s.value === a.value;
  return /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(ld.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ w(mb, {
    asChild: !0
  }, /* @__PURE__ */ w(me.button, T({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": fd(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: te(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: te(e.onPointerMove, Xs(() => {
      r || p.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: te(e.onPointerLeave, Xs(() => {
      r || (a.onTriggerLeave(), d.current = !1);
    })),
    onClick: te(e.onClick, () => {
      a.onItemSelect(s.value), p.current = m;
    }),
    onKeyDown: te(e.onKeyDown, (h) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && h.key === g && (s.onEntryKeyDown(), h.preventDefault());
    })
  })))), m && /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(sv, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (h) => {
      const v = s.contentRef.current, g = h.relatedTarget, x = g === i.current, b = v == null ? void 0 : v.contains(g);
      (x || !b) && s.onFocusProxyEnter(x ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ w("span", {
    "aria-owns": u
  })));
}), Zf = "navigationMenu.linkSelect", F6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ w(mb, {
    asChild: !0
  }, /* @__PURE__ */ w(me.a, T({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: te(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(Zf, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        Zf,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), Is(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(Ns, {
          bubbles: !0,
          cancelable: !0
        });
        Is(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), ub = "NavigationMenuIndicator", V6 = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = hn(ub, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ Hl.createPortal(/* @__PURE__ */ w(ct, {
    present: n || a
  }, /* @__PURE__ */ w(W6, T({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), W6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = hn(ub, n), a = cb(n), [s, i] = J(null), [c, l] = J(null), u = o.orientation === "horizontal", d = Boolean(o.value);
  ee(() => {
    var m;
    const v = (m = a().find(
      (g) => g.value === o.value
    )) === null || m === void 0 ? void 0 : m.ref.current;
    v && i(v);
  }, [
    a,
    o.value
  ]);
  const p = () => {
    s && l({
      size: u ? s.offsetWidth : s.offsetHeight,
      offset: u ? s.offsetLeft : s.offsetTop
    });
  };
  return Tl(s, p), Tl(o.indicatorTrack, p), c ? /* @__PURE__ */ w(me.div, T({
    "aria-hidden": !0,
    "data-state": d ? "visible" : "hidden",
    "data-orientation": o.orientation
  }, r, {
    ref: t,
    style: {
      position: "absolute",
      ...u ? {
        left: 0,
        width: c.size + "px",
        transform: `translateX(${c.offset}px)`
      } : {
        top: 0,
        height: c.size + "px",
        transform: `translateY(${c.offset}px)`
      },
      ...r.style
    }
  })) : null;
}), ha = "NavigationMenuContent", U6 = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = hn(ha, e.__scopeNavigationMenu), a = lb(ha, e.__scopeNavigationMenu), s = Ee(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ w(z6, T({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ w(ct, {
    present: n || i
  }, /* @__PURE__ */ w(db, T({
    "data-state": fd(i)
  }, c, {
    ref: s,
    onPointerEnter: te(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: te(e.onPointerLeave, Xs(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), z6 = /* @__PURE__ */ L((e, t) => {
  const n = hn(ha, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return Ct(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), Ct(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), Ns = "navigationMenu.rootContentDismiss", db = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = hn(ha, n), d = q(null), p = Ee(d, t), m = hb(u.baseId, r), h = vb(u.baseId, r), v = cb(n), g = q(null), { onItemDismiss: x } = u;
  ee(() => {
    const y = d.current;
    if (u.isRootMenu && y) {
      const _ = () => {
        var $;
        x(), i(), y.contains(document.activeElement) && (($ = o.current) === null || $ === void 0 || $.focus());
      };
      return y.addEventListener(Ns, _), () => y.removeEventListener(Ns, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    x,
    i
  ]);
  const b = _t(() => {
    const _ = v().map(
      (Y) => Y.value
    );
    u.dir === "rtl" && _.reverse();
    const $ = _.indexOf(u.value), N = _.indexOf(u.previousValue), k = r === u.value, S = N === _.indexOf(r);
    if (!k && !S)
      return g.current;
    const P = (() => {
      if ($ !== N) {
        if (k && N !== -1)
          return $ > N ? "from-end" : "from-start";
        if (S && $ !== -1)
          return $ > N ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = P, P;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ w(pb, {
    asChild: !0
  }, /* @__PURE__ */ w(zr, T({
    id: h,
    "aria-labelledby": m,
    "data-motion": b,
    "data-orientation": u.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var y;
      const _ = new Event(Ns, {
        bubbles: !0,
        cancelable: !0
      });
      (y = d.current) === null || y === void 0 || y.dispatchEvent(_);
    },
    onFocusOutside: te(e.onFocusOutside, (y) => {
      var _;
      c();
      const $ = y.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains($) && y.preventDefault();
    }),
    onPointerDownOutside: te(e.onPointerDownOutside, (y) => {
      var _;
      const $ = y.target, N = v().some((S) => {
        var P;
        return (P = S.ref.current) === null || P === void 0 ? void 0 : P.contains($);
      }), k = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains($));
      (N || k || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: te(e.onKeyDown, (y) => {
      const _ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !_) {
        const k = Pl(y.currentTarget), S = document.activeElement, P = k.findIndex(
          (B) => B === S
        ), U = y.shiftKey ? k.slice(0, P).reverse() : k.slice(P + 1, k.length);
        if (dd(U))
          y.preventDefault();
        else {
          var N;
          (N = a.current) === null || N === void 0 || N.focus();
        }
      }
    }),
    onEscapeKeyDown: te(e.onEscapeKeyDown, (y) => {
      s.current = !0;
    })
  })));
}), fb = "NavigationMenuViewport", B6 = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = hn(fb, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ w(ct, {
    present: n || a
  }, /* @__PURE__ */ w(H6, T({}, r, {
    ref: t
  })));
}), H6 = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = hn(fb, n), s = Ee(t, a.onViewportChange), i = O6(ha, e.__scopeNavigationMenu), [c, l] = J(null), [u, d] = J(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = Boolean(a.value), v = h ? a.value : a.previousValue;
  return Tl(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ w(me.div, T({
    "data-state": fd(h),
    "data-orientation": a.orientation
  }, o, {
    ref: s,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !h && a.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: p,
      ["--radix-navigation-menu-viewport-height"]: m,
      ...o.style
    },
    onPointerEnter: te(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: te(e.onPointerLeave, Xs(a.onContentLeave))
  }), Array.from(i.items).map(([x, { ref: b, forceMount: y, ..._ }]) => {
    const $ = v === x;
    return /* @__PURE__ */ w(ct, {
      key: x,
      present: y || $
    }, /* @__PURE__ */ w(db, T({}, _, {
      ref: Da(b, (N) => {
        $ && N && d(N);
      })
    })));
  }));
}), Y6 = "FocusGroup", pb = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = hn(Y6, n);
  return /* @__PURE__ */ w(Nl.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Nl.Slot, {
    scope: n
  }, /* @__PURE__ */ w(me.div, T({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), Xf = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], K6 = "FocusGroupItem", mb = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = E6(n), a = hn(K6, n);
  return /* @__PURE__ */ w(Nl.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ w(me.button, T({}, r, {
    ref: t,
    onKeyDown: te(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...Xf
      ].includes(s.key)) {
        let c = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), Xf.includes(s.key)) {
          const d = c.indexOf(s.currentTarget);
          c = c.slice(d + 1);
        }
        setTimeout(
          () => dd(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Pl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function dd(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function G6(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Tl(e, t) {
  const n = Ze(t);
  Ct(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
function fd(e) {
  return e ? "open" : "closed";
}
function hb(e, t) {
  return `${e}-trigger-${t}`;
}
function vb(e, t) {
  return `${e}-content-${t}`;
}
function Xs(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const gb = k6, bb = R6, q6 = I6, xb = L6, Z6 = F6, yb = V6, wb = U6, $b = B6, X6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  gb,
  {
    ref: r,
    className: j(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(_b, {})
    ]
  }
));
X6.displayName = gb.displayName;
const Q6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  bb,
  {
    ref: n,
    className: j(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
Q6.displayName = bb.displayName;
const I8 = q6, J6 = No(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), eO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  xb,
  {
    ref: r,
    className: j(J6(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.exports.jsx(
        aa,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
eO.displayName = xb.displayName;
const tO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  wb,
  {
    ref: n,
    className: j(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
tO.displayName = wb.displayName;
const L8 = Z6, _b = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: j("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.exports.jsx(
  $b,
  {
    className: j(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
_b.displayName = $b.displayName;
const nO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  yb,
  {
    ref: n,
    className: j(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
nO.displayName = yb.displayName;
const Cb = "Progress", qi = 100, [rO, F8] = st(Cb), [oO, aO] = rO(Cb), Sb = /* @__PURE__ */ L((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = cO, ...s } = e, i = Ol(o) ? o : qi, c = Nb(r, i) ? r : null, l = Qs(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ w(oO, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ w(me.div, T({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Qs(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Eb(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
Sb.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Ol(r) ? new Error(lO(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Ol(e.max) ? e.max : qi;
    return r != null && !Nb(r, a) ? new Error(uO(o, n)) : null;
  }
};
const sO = "ProgressIndicator", iO = /* @__PURE__ */ L((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = aO(sO, r);
  return /* @__PURE__ */ w(me.div, T({
    "data-state": Eb(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function cO(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Eb(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Qs(e) {
  return typeof e == "number";
}
function Ol(e) {
  return Qs(e) && !isNaN(e) && e > 0;
}
function Nb(e, t) {
  return Qs(e) && !isNaN(e) && e <= t && e >= 0;
}
function lO(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${qi}\`.`;
}
function uO(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${qi} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Pb = Sb, dO = iO, fO = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Pb,
  {
    ref: r,
    className: j(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(
      dO,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
fO.displayName = Pb.displayName;
const Tb = "Radio", [pO, Ob] = st(Tb), [mO, hO] = pO(Tb), vO = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, d] = J(null), p = Ee(
    t,
    (v) => d(v)
  ), m = q(!1), h = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ w(mO, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ w(me.button, T({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": kb(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: te(e.onClick, (v) => {
      o || c == null || c(), h && (m.current = v.isPropagationStopped(), m.current || v.stopPropagation());
    })
  })), h && /* @__PURE__ */ w(xO, {
    control: u,
    bubbles: !m.current,
    name: r,
    value: i,
    checked: o,
    required: a,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), gO = "RadioIndicator", bO = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = hO(gO, n);
  return /* @__PURE__ */ w(ct, {
    present: r || a.checked
  }, /* @__PURE__ */ w(me.span, T({
    "data-state": kb(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), xO = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = Fo(n), i = La(t);
  return ee(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const p = new Event("click", {
        bubbles: r
      });
      d.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", T({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function kb(e) {
  return e ? "checked" : "unchecked";
}
const yO = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Mb = "RadioGroup", [wO, V8] = st(Mb, [
  xr,
  Ob
]), Db = xr(), Rb = Ob(), [$O, _O] = wO(Mb), CO = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...p } = e, m = Db(n), h = Nn(l), [v, g] = ft({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ w($O, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ w(Ci, T({
    asChild: !0
  }, m, {
    orientation: c,
    dir: h,
    loop: u
  }), /* @__PURE__ */ w(me.div, T({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: h
  }, p, {
    ref: t
  }))));
}), SO = "RadioGroupItem", EO = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = _O(SO, n), s = a.disabled || r, i = Db(n), c = Rb(n), l = q(null), u = Ee(t, l), d = a.value === o.value, p = q(!1);
  return ee(() => {
    const m = (v) => {
      yO.includes(v.key) && (p.current = !0);
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ w(Si, T({
    asChild: !0
  }, i, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ w(vO, T({
    disabled: s,
    required: a.required,
    checked: d
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: te((m) => {
      m.key === "Enter" && m.preventDefault();
    }),
    onFocus: te(o.onFocus, () => {
      var m;
      p.current && ((m = l.current) === null || m === void 0 || m.click());
    })
  })));
}), NO = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Rb(n);
  return /* @__PURE__ */ w(bO, T({}, o, r, {
    ref: t
  }));
}), jb = CO, Ab = EO, PO = NO, TO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jb,
  {
    className: j("grid gap-2", e),
    ...t,
    ref: n
  }
));
TO.displayName = jb.displayName;
const OO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ab,
  {
    ref: r,
    className: j(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(PO, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(vi, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
OO.displayName = Ab.displayName;
const Ib = [
  "PageUp",
  "PageDown"
], Lb = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Fb = {
  "from-left": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-right": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowRight"
  ],
  "from-bottom": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-top": [
    "Home",
    "PageDown",
    "ArrowUp",
    "ArrowLeft"
  ]
}, Ja = "Slider", [kl, kO, MO] = br(Ja), [Vb, W8] = st(Ja, [
  MO
]), [DO, Zi] = Vb(Ja), RO = /* @__PURE__ */ L((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = J(null), x = Ee(
    t,
    (F) => g(F)
  ), b = q(/* @__PURE__ */ new Set()), y = q(0), _ = s === "horizontal", $ = v ? Boolean(v.closest("form")) : !0, N = _ ? jO : AO, [k = [], S] = ft({
    prop: u,
    defaultProp: l,
    onChange: (F) => {
      var A;
      (A = [
        ...b.current
      ][y.current]) === null || A === void 0 || A.focus(), d(F);
    }
  }), P = q(k);
  function Y(F) {
    const A = HO(k, F);
    Z(F, A);
  }
  function U(F) {
    Z(F, y.current);
  }
  function B() {
    const F = P.current[y.current];
    k[y.current] !== F && p(k);
  }
  function Z(F, A, { commit: I } = {
    commit: !1
  }) {
    const W = qO(a), G = ZO(Math.round((F - r) / a) * a + r, W), R = pa(G, [
      r,
      o
    ]);
    S((M = []) => {
      const K = zO(M, R, A);
      if (GO(K, c * a)) {
        y.current = K.indexOf(R);
        const X = String(K) !== String(M);
        return X && I && p(K), X ? K : M;
      } else
        return M;
    });
  }
  return /* @__PURE__ */ w(DO, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: y,
    thumbs: b.current,
    values: k,
    orientation: s
  }, /* @__PURE__ */ w(kl.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(kl.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(N, T({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: x,
    onPointerDown: te(h.onPointerDown, () => {
      i || (P.current = k);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : Y,
    onSlideMove: i ? void 0 : U,
    onSlideEnd: i ? void 0 : B,
    onHomeKeyDown: () => !i && Z(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && Z(o, k.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: F, direction: A }) => {
      if (!i) {
        const G = Ib.includes(F.key) || F.shiftKey && Lb.includes(F.key) ? 10 : 1, R = y.current, M = k[R], K = a * G * A;
        Z(M + K, R, {
          commit: !0
        });
      }
    }
  })))), $ && k.map(
    (F, A) => /* @__PURE__ */ w(UO, {
      key: A,
      name: n ? n + (k.length > 1 ? "[]" : "") : void 0,
      value: F
    })
  ));
}), [Wb, Ub] = Vb(Ja, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), jO = /* @__PURE__ */ L((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, p] = J(null), m = Ee(
    t,
    (y) => p(y)
  ), h = q(), v = Nn(o), g = v === "ltr", x = g && !a || !g && a;
  function b(y) {
    const _ = h.current || d.getBoundingClientRect(), $ = [
      0,
      _.width
    ], k = pd($, x ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = _, k(y - _.left);
  }
  return /* @__PURE__ */ w(Wb, {
    scope: e.__scopeSlider,
    startEdge: x ? "left" : "right",
    endEdge: x ? "right" : "left",
    direction: x ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ w(zb, T({
    dir: v,
    "data-orientation": "horizontal"
  }, u, {
    ref: m,
    style: {
      ...u.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: (y) => {
      const _ = b(y.clientX);
      s == null || s(_);
    },
    onSlideMove: (y) => {
      const _ = b(y.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      h.current = void 0, c == null || c();
    },
    onStepKeyDown: (y) => {
      const $ = Fb[x ? "from-left" : "from-right"].includes(y.key);
      l == null || l({
        event: y,
        direction: $ ? -1 : 1
      });
    }
  })));
}), AO = /* @__PURE__ */ L((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = q(null), d = Ee(t, u), p = q(), m = !o;
  function h(v) {
    const g = p.current || u.current.getBoundingClientRect(), x = [
      0,
      g.height
    ], y = pd(x, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, y(v - g.top);
  }
  return /* @__PURE__ */ w(Wb, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ w(zb, T({
    "data-orientation": "vertical"
  }, l, {
    ref: d,
    style: {
      ...l.style,
      ["--radix-slider-thumb-transform"]: "translateY(50%)"
    },
    onSlideStart: (v) => {
      const g = h(v.clientY);
      a == null || a(g);
    },
    onSlideMove: (v) => {
      const g = h(v.clientY);
      s == null || s(g);
    },
    onSlideEnd: () => {
      p.current = void 0, i == null || i();
    },
    onStepKeyDown: (v) => {
      const x = Fb[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: x ? -1 : 1
      });
    }
  })));
}), zb = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = Zi(Ja, n);
  return /* @__PURE__ */ w(me.span, T({}, l, {
    ref: t,
    onKeyDown: te(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (i(d), d.preventDefault()) : Ib.concat(Lb).includes(d.key) && (c(d), d.preventDefault());
    }),
    onPointerDown: te(e.onPointerDown, (d) => {
      const p = d.target;
      p.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(p) ? p.focus() : r(d);
    }),
    onPointerMove: te(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && o(d);
    }),
    onPointerUp: te(e.onPointerUp, (d) => {
      const p = d.target;
      p.hasPointerCapture(d.pointerId) && (p.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), IO = "SliderTrack", LO = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Zi(IO, n);
  return /* @__PURE__ */ w(me.span, T({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), Qf = "SliderRange", FO = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Zi(Qf, n), a = Ub(Qf, n), s = q(null), i = Ee(t, s), c = o.values.length, l = o.values.map(
    (p) => Bb(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ w(me.span, T({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: i,
    style: {
      ...e.style,
      [a.startEdge]: u + "%",
      [a.endEdge]: d + "%"
    }
  }));
}), Jf = "SliderThumb", VO = /* @__PURE__ */ L((e, t) => {
  const n = kO(e.__scopeSlider), [r, o] = J(null), a = Ee(
    t,
    (i) => o(i)
  ), s = _t(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ w(WO, T({}, e, {
    ref: a,
    index: s
  }));
}), WO = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Zi(Jf, n), s = Ub(Jf, n), [i, c] = J(null), l = Ee(
    t,
    (g) => c(g)
  ), u = La(i), d = a.values[r], p = d === void 0 ? 0 : Bb(d, a.min, a.max), m = BO(r, a.values.length), h = u == null ? void 0 : u[s.size], v = h ? YO(h, p, s.direction) : 0;
  return ee(() => {
    if (i)
      return a.thumbs.add(i), () => {
        a.thumbs.delete(i);
      };
  }, [
    i,
    a.thumbs
  ]), /* @__PURE__ */ w("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [s.startEdge]: `calc(${p}% + ${v}px)`
    }
  }, /* @__PURE__ */ w(kl.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(me.span, T({
    role: "slider",
    "aria-label": e["aria-label"] || m,
    "aria-valuemin": a.min,
    "aria-valuenow": d,
    "aria-valuemax": a.max,
    "aria-orientation": a.orientation,
    "data-orientation": a.orientation,
    "data-disabled": a.disabled ? "" : void 0,
    tabIndex: a.disabled ? void 0 : 0
  }, o, {
    ref: l,
    style: d === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: te(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), UO = (e) => {
  const { value: t, ...n } = e, r = q(null), o = Fo(t);
  return ee(() => {
    const a = r.current, s = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(s, "value").set;
    if (o !== t && c) {
      const l = new Event("input", {
        bubbles: !0
      });
      c.call(a, t), a.dispatchEvent(l);
    }
  }, [
    o,
    t
  ]), /* @__PURE__ */ w("input", T({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function zO(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Bb(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return pa(a, [
    0,
    100
  ]);
}
function BO(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function HO(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function YO(e, t, n) {
  const r = e / 2, a = pd([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function KO(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function GO(e, t) {
  if (t > 0) {
    const n = KO(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function pd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function qO(e) {
  return (String(e).split(".")[1] || "").length;
}
function ZO(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Hb = RO, XO = LO, QO = FO, JO = VO, ek = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(
  Hb,
  {
    ref: n,
    className: j(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(XO, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.exports.jsx(QO, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.exports.jsx(JO, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
ek.displayName = Hb.displayName;
const Yb = "Tabs", [tk, U8] = st(Yb, [
  xr
]), Kb = xr(), [nk, md] = tk(Yb), rk = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = Nn(i), [d, p] = ft({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ w(nk, {
    scope: n,
    baseId: mt(),
    value: d,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ w(me.div, T({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), ok = "TabsList", ak = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = md(ok, n), s = Kb(n);
  return /* @__PURE__ */ w(Ci, T({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ w(me.div, T({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), sk = "TabsTrigger", ik = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = md(sk, n), i = Kb(n), c = Gb(s.baseId, r), l = qb(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ w(Si, T({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ w(me.button, T({
    type: "button",
    role: "tab",
    "aria-selected": u,
    "aria-controls": l,
    "data-state": u ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: c
  }, a, {
    ref: t,
    onMouseDown: te(e.onMouseDown, (d) => {
      !o && d.button === 0 && d.ctrlKey === !1 ? s.onValueChange(r) : d.preventDefault();
    }),
    onKeyDown: te(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && s.onValueChange(r);
    }),
    onFocus: te(e.onFocus, () => {
      const d = s.activationMode !== "manual";
      !u && !o && d && s.onValueChange(r);
    })
  })));
}), ck = "TabsContent", lk = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = md(ck, n), c = Gb(i.baseId, r), l = qb(i.baseId, r), u = r === i.value, d = q(u);
  return ee(() => {
    const p = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ w(
    ct,
    {
      present: o || u
    },
    ({ present: p }) => /* @__PURE__ */ w(me.div, T({
      "data-state": u ? "active" : "inactive",
      "data-orientation": i.orientation,
      role: "tabpanel",
      "aria-labelledby": c,
      hidden: !p,
      id: l,
      tabIndex: 0
    }, s, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: d.current ? "0s" : void 0
      }
    }), p && a)
  );
});
function Gb(e, t) {
  return `${e}-trigger-${t}`;
}
function qb(e, t) {
  return `${e}-content-${t}`;
}
const uk = rk, Zb = ak, Xb = ik, Qb = lk, z8 = uk, dk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Zb,
  {
    ref: n,
    className: j(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
dk.displayName = Zb.displayName;
const fk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Xb,
  {
    ref: n,
    className: j(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
fk.displayName = Xb.displayName;
const pk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Qb,
  {
    ref: n,
    className: j(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
pk.displayName = Qb.displayName;
const mk = /* @__PURE__ */ L((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = ft({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ w(me.button, T({
    type: "button",
    "aria-pressed": s,
    "data-state": s ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: te(e.onClick, () => {
      e.disabled || i(!s);
    })
  }));
}), Jb = mk, hk = No(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), vk = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  Jb,
  {
    ref: o,
    className: j(hk({ variant: t, size: n, className: e })),
    ...r
  }
));
vk.displayName = Jb.displayName;
const [Xi, B8] = st("Tooltip", [
  Pn
]), hd = Pn(), gk = "TooltipProvider", bk = 700, Ml = "tooltip.open", [xk, vd] = Xi(gk), yk = (e) => {
  const { __scopeTooltip: t, delayDuration: n = bk, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = J(!0), c = q(!1), l = q(0);
  return ee(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ w(xk, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: he(() => {
      window.clearTimeout(l.current), i(!1);
    }, []),
    onClose: he(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: he((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, gd = "Tooltip", [wk, Qi] = Xi(gd), $k = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = vd(gd, e.__scopeTooltip), l = hd(t), [u, d] = J(null), p = mt(), m = q(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = q(!1), [x = !1, b] = ft({
    prop: r,
    defaultProp: o,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ml))) : c.onClose(), a == null || a(k);
    }
  }), y = _t(() => x ? g.current ? "delayed-open" : "instant-open" : "closed", [
    x
  ]), _ = he(() => {
    window.clearTimeout(m.current), g.current = !1, b(!0);
  }, [
    b
  ]), $ = he(() => {
    window.clearTimeout(m.current), b(!1);
  }, [
    b
  ]), N = he(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, b(!0);
    }, v);
  }, [
    v,
    b
  ]);
  return ee(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ w(Oo, l, /* @__PURE__ */ w(wk, {
    scope: t,
    contentId: p,
    open: x,
    stateAttribute: y,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: he(() => {
      c.isOpenDelayed ? N() : _();
    }, [
      c.isOpenDelayed,
      N,
      _
    ]),
    onTriggerLeave: he(() => {
      h ? $() : window.clearTimeout(m.current);
    }, [
      $,
      h
    ]),
    onOpen: _,
    onClose: $,
    disableHoverableContent: h
  }, n));
}, ep = "TooltipTrigger", _k = /* @__PURE__ */ L((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = Qi(ep, n), a = vd(ep, n), s = hd(n), i = q(null), c = Ee(t, i, o.onTriggerChange), l = q(!1), u = q(!1), d = he(
    () => l.current = !1,
    []
  );
  return ee(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ w(Fa, T({
    asChild: !0
  }, s), /* @__PURE__ */ w(me.button, T({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: te(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: te(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: te(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: te(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: te(e.onBlur, o.onClose),
    onClick: te(e.onClick, o.onClose)
  })));
}), Ck = "TooltipPortal", [H8, Sk] = Xi(Ck, {
  forceMount: void 0
}), va = "TooltipContent", Ek = /* @__PURE__ */ L((e, t) => {
  const n = Sk(va, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = Qi(va, e.__scopeTooltip);
  return /* @__PURE__ */ w(ct, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ w(ex, T({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ w(Nk, T({
    side: o
  }, a, {
    ref: t
  })));
}), Nk = /* @__PURE__ */ L((e, t) => {
  const n = Qi(va, e.__scopeTooltip), r = vd(va, e.__scopeTooltip), o = q(null), a = Ee(t, o), [s, i] = J(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, p = he(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = he((h, v) => {
    const g = h.currentTarget, x = {
      x: h.clientX,
      y: h.clientY
    }, b = Tk(x, g.getBoundingClientRect()), y = Ok(x, b), _ = kk(v.getBoundingClientRect()), $ = Dk([
      ...y,
      ..._
    ]);
    i($), d(!0);
  }, [
    d
  ]);
  return ee(() => () => p(), [
    p
  ]), ee(() => {
    if (c && u) {
      const h = (g) => m(g, u), v = (g) => m(g, c);
      return c.addEventListener("pointerleave", h), u.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", h), u.removeEventListener("pointerleave", v);
      };
    }
  }, [
    c,
    u,
    m,
    p
  ]), ee(() => {
    if (s) {
      const h = (v) => {
        const g = v.target, x = {
          x: v.clientX,
          y: v.clientY
        }, b = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !Mk(x, s);
        b ? p() : y && (p(), l());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    c,
    u,
    s,
    l,
    p
  ]), /* @__PURE__ */ w(ex, T({}, e, {
    ref: a
  }));
}), [Pk, Y8] = Xi(gd, {
  isInside: !1
}), ex = /* @__PURE__ */ L((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = Qi(va, n), l = hd(n), { onClose: u } = c;
  return ee(() => (document.addEventListener(Ml, u), () => document.removeEventListener(Ml, u)), [
    u
  ]), ee(() => {
    if (c.trigger) {
      const d = (p) => {
        const m = p.target;
        m != null && m.contains(c.trigger) && u();
      };
      return window.addEventListener("scroll", d, {
        capture: !0
      }), () => window.removeEventListener("scroll", d, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    u
  ]), /* @__PURE__ */ w(zr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ w(Va, T({
    "data-state": c.stateAttribute
  }, l, i, {
    ref: t,
    style: {
      ...i.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ w(Yl, null, r), /* @__PURE__ */ w(Pk, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ w(sv, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function Tk(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Ok(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      r.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break;
  }
  return r;
}
function kk(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    {
      x: o,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: r
    },
    {
      x: o,
      y: r
    }
  ];
}
function Mk(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function Dk(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Rk(t);
}
function Rk(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], s = t[t.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
        t.pop();
      else
        break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], s = n[n.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
        n.pop();
      else
        break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const jk = yk, Ak = $k, Ik = _k, tx = Ek, Hn = jk, Yn = Ak, Kn = Ik, Cn = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  tx,
  {
    ref: r,
    sideOffset: t,
    className: j(
      "z-50 overflow-hidden rounded-md border bg-card px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Cn.displayName = tx.displayName;
const nx = "Switch", [Lk, K8] = st(nx), [Fk, Vk] = Lk(nx), Wk = /* @__PURE__ */ L((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = J(null), m = Ee(
    t,
    (b) => p(b)
  ), h = q(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, x] = ft({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ w(Fk, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ w(me.button, T({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": rx(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onClick: te(e.onClick, (b) => {
      x(
        (y) => !y
      ), v && (h.current = b.isPropagationStopped(), h.current || b.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(Bk, {
    control: d,
    bubbles: !h.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), Uk = "SwitchThumb", zk = /* @__PURE__ */ L((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = Vk(Uk, n);
  return /* @__PURE__ */ w(me.span, T({
    "data-state": rx(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Bk = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = Fo(n), i = La(t);
  return ee(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const p = new Event("click", {
        bubbles: r
      });
      d.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", T({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function rx(e) {
  return e ? "checked" : "unchecked";
}
const ox = Wk, Hk = zk, Yk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ox,
  {
    className: j(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.exports.jsx(
      Hk,
      {
        className: j(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Yk.displayName = ox.displayName;
const tp = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (c, l) => {
    const u = typeof c == "function" ? c(t) : c;
    if (!Object.is(u, t)) {
      const d = t;
      t = l ?? typeof u != "object" ? u : Object.assign({}, t, u), n.forEach((p) => p(t, d));
    }
  }, o = () => t, i = { setState: r, getState: o, subscribe: (c) => (n.add(c), () => n.delete(c)), destroy: () => {
    n.clear();
  } };
  return t = e(r, o, i), i;
}, Kk = (e) => e ? tp(e) : tp;
var ax = { exports: {} }, Rc = {}, jc = { exports: {} }, Ac = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var np;
function Gk() {
  if (np)
    return Ac;
  np = 1;
  var e = E;
  function t(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(d, p) {
    var m = p(), h = r({ inst: { value: m, getSnapshot: p } }), v = h[0].inst, g = h[1];
    return a(function() {
      v.value = m, v.getSnapshot = p, c(v) && g({ inst: v });
    }, [d, m, p]), o(function() {
      return c(v) && g({ inst: v }), d(function() {
        c(v) && g({ inst: v });
      });
    }, [d]), s(m), m;
  }
  function c(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var m = p();
      return !n(d, m);
    } catch {
      return !0;
    }
  }
  function l(d, p) {
    return p();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : i;
  return Ac.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Ac;
}
var Ic = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rp;
function qk() {
  return rp || (rp = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = E, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var _ = arguments.length, $ = new Array(_ > 1 ? _ - 1 : 0), N = 1; N < _; N++)
          $[N - 1] = arguments[N];
        r("error", y, $);
      }
    }
    function r(y, _, $) {
      {
        var N = t.ReactDebugCurrentFrame, k = N.getStackAddendum();
        k !== "" && (_ += "%s", $ = $.concat([k]));
        var S = $.map(function(P) {
          return String(P);
        });
        S.unshift("Warning: " + _), Function.prototype.apply.call(console[y], console, S);
      }
    }
    function o(y, _) {
      return y === _ && (y !== 0 || 1 / y === 1 / _) || y !== y && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function p(y, _, $) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var N = _();
      if (!d) {
        var k = _();
        a(N, k) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var S = s({
        inst: {
          value: N,
          getSnapshot: _
        }
      }), P = S[0].inst, Y = S[1];
      return c(function() {
        P.value = N, P.getSnapshot = _, m(P) && Y({
          inst: P
        });
      }, [y, N, _]), i(function() {
        m(P) && Y({
          inst: P
        });
        var U = function() {
          m(P) && Y({
            inst: P
          });
        };
        return y(U);
      }, [y]), l(N), N;
    }
    function m(y) {
      var _ = y.getSnapshot, $ = y.value;
      try {
        var N = _();
        return !a($, N);
      } catch {
        return !0;
      }
    }
    function h(y, _, $) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, x = g ? h : p, b = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x;
    Ic.useSyncExternalStore = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ic;
}
var op;
function sx() {
  return op || (op = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Gk() : e.exports = qk();
  }(jc)), jc.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap;
function Zk() {
  if (ap)
    return Rc;
  ap = 1;
  var e = E, t = sx();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Rc.useSyncExternalStoreWithSelector = function(l, u, d, p, m) {
    var h = a(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else
      v = h.current;
    h = i(function() {
      function x(N) {
        if (!b) {
          if (b = !0, y = N, N = p(N), m !== void 0 && v.hasValue) {
            var k = v.value;
            if (m(k, N))
              return _ = k;
          }
          return _ = N;
        }
        if (k = _, r(y, N))
          return k;
        var S = p(N);
        return m !== void 0 && m(k, S) ? k : (y = N, _ = S);
      }
      var b = !1, y, _, $ = d === void 0 ? null : d;
      return [function() {
        return x(u());
      }, $ === null ? void 0 : function() {
        return x($());
      }];
    }, [u, d, p, m]);
    var g = o(l, h[0], h[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, Rc;
}
var Lc = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp;
function Xk() {
  return sp || (sp = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = E, t = sx();
    function n(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
    function l(u, d, p, m, h) {
      var v = a(null), g;
      v.current === null ? (g = {
        hasValue: !1,
        value: null
      }, v.current = g) : g = v.current;
      var x = i(function() {
        var $ = !1, N, k, S = function(B) {
          if (!$) {
            $ = !0, N = B;
            var Z = m(B);
            if (h !== void 0 && g.hasValue) {
              var F = g.value;
              if (h(F, Z))
                return k = F, F;
            }
            return k = Z, Z;
          }
          var A = N, I = k;
          if (r(A, B))
            return I;
          var W = m(B);
          return h !== void 0 && h(I, W) ? I : (N = B, k = W, W);
        }, P = p === void 0 ? null : p, Y = function() {
          return S(d());
        }, U = P === null ? void 0 : function() {
          return S(P());
        };
        return [Y, U];
      }, [d, p, m, h]), b = x[0], y = x[1], _ = o(u, b, y);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Lc.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Lc;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Zk() : e.exports = Xk();
})(ax);
const Qk = /* @__PURE__ */ b0(ax.exports), { useSyncExternalStoreWithSelector: Jk } = Qk;
function e4(e, t = e.getState, n) {
  const r = Jk(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return h0(r), r;
}
const ip = (e) => {
  const t = typeof e == "function" ? Kk(e) : e, n = (r, o) => e4(t, r, o);
  return Object.assign(n, t), n;
}, t4 = (e) => e ? ip(e) : ip, n4 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ f.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ f.exports.jsxs(lo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ f.exports.jsx(
      Or,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ f.exports.jsx(uo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(iy, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(Rt, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
var jn = { exports: {} }, Fc = { exports: {} }, Ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cp;
function r4() {
  if (cp)
    return Ke;
  cp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function y($) {
    if (typeof $ == "object" && $ !== null) {
      var N = $.$$typeof;
      switch (N) {
        case t:
          switch ($ = $.type, $) {
            case c:
            case l:
            case r:
            case a:
            case o:
            case d:
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
                case i:
                case u:
                case h:
                case m:
                case s:
                  return $;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  function _($) {
    return y($) === l;
  }
  return Ke.AsyncMode = c, Ke.ConcurrentMode = l, Ke.ContextConsumer = i, Ke.ContextProvider = s, Ke.Element = t, Ke.ForwardRef = u, Ke.Fragment = r, Ke.Lazy = h, Ke.Memo = m, Ke.Portal = n, Ke.Profiler = a, Ke.StrictMode = o, Ke.Suspense = d, Ke.isAsyncMode = function($) {
    return _($) || y($) === c;
  }, Ke.isConcurrentMode = _, Ke.isContextConsumer = function($) {
    return y($) === i;
  }, Ke.isContextProvider = function($) {
    return y($) === s;
  }, Ke.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === t;
  }, Ke.isForwardRef = function($) {
    return y($) === u;
  }, Ke.isFragment = function($) {
    return y($) === r;
  }, Ke.isLazy = function($) {
    return y($) === h;
  }, Ke.isMemo = function($) {
    return y($) === m;
  }, Ke.isPortal = function($) {
    return y($) === n;
  }, Ke.isProfiler = function($) {
    return y($) === a;
  }, Ke.isStrictMode = function($) {
    return y($) === o;
  }, Ke.isSuspense = function($) {
    return y($) === d;
  }, Ke.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === r || $ === l || $ === a || $ === o || $ === d || $ === p || typeof $ == "object" && $ !== null && ($.$$typeof === h || $.$$typeof === m || $.$$typeof === s || $.$$typeof === i || $.$$typeof === u || $.$$typeof === g || $.$$typeof === x || $.$$typeof === b || $.$$typeof === v);
  }, Ke.typeOf = y, Ke;
}
var Ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp;
function o4() {
  return lp || (lp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function y(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === r || V === l || V === a || V === o || V === d || V === p || typeof V == "object" && V !== null && (V.$$typeof === h || V.$$typeof === m || V.$$typeof === s || V.$$typeof === i || V.$$typeof === u || V.$$typeof === g || V.$$typeof === x || V.$$typeof === b || V.$$typeof === v);
    }
    function _(V) {
      if (typeof V == "object" && V !== null) {
        var de = V.$$typeof;
        switch (de) {
          case t:
            var ve = V.type;
            switch (ve) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case d:
                return ve;
              default:
                var ye = ve && ve.$$typeof;
                switch (ye) {
                  case i:
                  case u:
                  case h:
                  case m:
                  case s:
                    return ye;
                  default:
                    return de;
                }
            }
          case n:
            return de;
        }
      }
    }
    var $ = c, N = l, k = i, S = s, P = t, Y = u, U = r, B = h, Z = m, F = n, A = a, I = o, W = d, G = !1;
    function R(V) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(V) || _(V) === c;
    }
    function M(V) {
      return _(V) === l;
    }
    function K(V) {
      return _(V) === i;
    }
    function X(V) {
      return _(V) === s;
    }
    function ae(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function ne(V) {
      return _(V) === u;
    }
    function ge(V) {
      return _(V) === r;
    }
    function be(V) {
      return _(V) === h;
    }
    function oe(V) {
      return _(V) === m;
    }
    function ie(V) {
      return _(V) === n;
    }
    function pe(V) {
      return _(V) === a;
    }
    function H(V) {
      return _(V) === o;
    }
    function re(V) {
      return _(V) === d;
    }
    Ge.AsyncMode = $, Ge.ConcurrentMode = N, Ge.ContextConsumer = k, Ge.ContextProvider = S, Ge.Element = P, Ge.ForwardRef = Y, Ge.Fragment = U, Ge.Lazy = B, Ge.Memo = Z, Ge.Portal = F, Ge.Profiler = A, Ge.StrictMode = I, Ge.Suspense = W, Ge.isAsyncMode = R, Ge.isConcurrentMode = M, Ge.isContextConsumer = K, Ge.isContextProvider = X, Ge.isElement = ae, Ge.isForwardRef = ne, Ge.isFragment = ge, Ge.isLazy = be, Ge.isMemo = oe, Ge.isPortal = ie, Ge.isProfiler = pe, Ge.isStrictMode = H, Ge.isSuspense = re, Ge.isValidElementType = y, Ge.typeOf = _;
  }()), Ge;
}
var up;
function ix() {
  return up || (up = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = r4() : e.exports = o4();
  }(Fc)), Fc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Vc, dp;
function a4() {
  if (dp)
    return Vc;
  dp = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, i = 0; i < 10; i++)
        s["_" + String.fromCharCode(i)] = i;
      var c = Object.getOwnPropertyNames(s).map(function(u) {
        return s[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        l[u] = u;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Vc = o() ? Object.assign : function(a, s) {
    for (var i, c = r(a), l, u = 1; u < arguments.length; u++) {
      i = Object(arguments[u]);
      for (var d in i)
        t.call(i, d) && (c[d] = i[d]);
      if (e) {
        l = e(i);
        for (var p = 0; p < l.length; p++)
          n.call(i, l[p]) && (c[l[p]] = i[l[p]]);
      }
    }
    return c;
  }, Vc;
}
var Wc, fp;
function bd() {
  if (fp)
    return Wc;
  fp = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wc = e, Wc;
}
var Uc, pp;
function cx() {
  return pp || (pp = 1, Uc = Function.call.bind(Object.prototype.hasOwnProperty)), Uc;
}
var zc, mp;
function s4() {
  if (mp)
    return zc;
  mp = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = bd(), n = {}, r = cx();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, i, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (r(a, u)) {
          var d;
          try {
            if (typeof a[u] != "function") {
              var p = Error(
                (c || "React class") + ": " + i + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = a[u](s, u, c, i, null, t);
          } catch (h) {
            d = h;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + i + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var m = l ? l() : "";
            e(
              "Failed " + i + " type: " + d.message + (m ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, zc = o, zc;
}
var Bc, hp;
function i4() {
  if (hp)
    return Bc;
  hp = 1;
  var e = ix(), t = a4(), n = bd(), r = cx(), o = s4(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var c = "Warning: " + i;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Bc = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(M) {
      var K = M && (l && M[l] || M[u]);
      if (typeof K == "function")
        return K;
    }
    var p = "<<anonymous>>", m = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: b(),
      arrayOf: y,
      element: _(),
      elementType: $(),
      instanceOf: N,
      node: Y(),
      objectOf: S,
      oneOf: k,
      oneOfType: P,
      shape: B,
      exact: Z
    };
    function h(M, K) {
      return M === K ? M !== 0 || 1 / M === 1 / K : M !== M && K !== K;
    }
    function v(M, K) {
      this.message = M, this.data = K && typeof K == "object" ? K : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function g(M) {
      if (process.env.NODE_ENV !== "production")
        var K = {}, X = 0;
      function ae(ge, be, oe, ie, pe, H, re) {
        if (ie = ie || p, H = H || oe, re !== n) {
          if (c) {
            var V = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw V.name = "Invariant Violation", V;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = ie + ":" + oe;
            !K[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            X < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), K[de] = !0, X++);
          }
        }
        return be[oe] == null ? ge ? be[oe] === null ? new v("The " + pe + " `" + H + "` is marked as required " + ("in `" + ie + "`, but its value is `null`.")) : new v("The " + pe + " `" + H + "` is marked as required in " + ("`" + ie + "`, but its value is `undefined`.")) : null : M(be, oe, ie, pe, H);
      }
      var ne = ae.bind(null, !1);
      return ne.isRequired = ae.bind(null, !0), ne;
    }
    function x(M) {
      function K(X, ae, ne, ge, be, oe) {
        var ie = X[ae], pe = I(ie);
        if (pe !== M) {
          var H = W(ie);
          return new v(
            "Invalid " + ge + " `" + be + "` of type " + ("`" + H + "` supplied to `" + ne + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return g(K);
    }
    function b() {
      return g(s);
    }
    function y(M) {
      function K(X, ae, ne, ge, be) {
        if (typeof M != "function")
          return new v("Property `" + be + "` of component `" + ne + "` has invalid PropType notation inside arrayOf.");
        var oe = X[ae];
        if (!Array.isArray(oe)) {
          var ie = I(oe);
          return new v("Invalid " + ge + " `" + be + "` of type " + ("`" + ie + "` supplied to `" + ne + "`, expected an array."));
        }
        for (var pe = 0; pe < oe.length; pe++) {
          var H = M(oe, pe, ne, ge, be + "[" + pe + "]", n);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return g(K);
    }
    function _() {
      function M(K, X, ae, ne, ge) {
        var be = K[X];
        if (!i(be)) {
          var oe = I(be);
          return new v("Invalid " + ne + " `" + ge + "` of type " + ("`" + oe + "` supplied to `" + ae + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(M);
    }
    function $() {
      function M(K, X, ae, ne, ge) {
        var be = K[X];
        if (!e.isValidElementType(be)) {
          var oe = I(be);
          return new v("Invalid " + ne + " `" + ge + "` of type " + ("`" + oe + "` supplied to `" + ae + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(M);
    }
    function N(M) {
      function K(X, ae, ne, ge, be) {
        if (!(X[ae] instanceof M)) {
          var oe = M.name || p, ie = R(X[ae]);
          return new v("Invalid " + ge + " `" + be + "` of type " + ("`" + ie + "` supplied to `" + ne + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return g(K);
    }
    function k(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function K(X, ae, ne, ge, be) {
        for (var oe = X[ae], ie = 0; ie < M.length; ie++)
          if (h(oe, M[ie]))
            return null;
        var pe = JSON.stringify(M, function(re, V) {
          var de = W(V);
          return de === "symbol" ? String(V) : V;
        });
        return new v("Invalid " + ge + " `" + be + "` of value `" + String(oe) + "` " + ("supplied to `" + ne + "`, expected one of " + pe + "."));
      }
      return g(K);
    }
    function S(M) {
      function K(X, ae, ne, ge, be) {
        if (typeof M != "function")
          return new v("Property `" + be + "` of component `" + ne + "` has invalid PropType notation inside objectOf.");
        var oe = X[ae], ie = I(oe);
        if (ie !== "object")
          return new v("Invalid " + ge + " `" + be + "` of type " + ("`" + ie + "` supplied to `" + ne + "`, expected an object."));
        for (var pe in oe)
          if (r(oe, pe)) {
            var H = M(oe, pe, ne, ge, be + "." + pe, n);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return g(K);
    }
    function P(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var K = 0; K < M.length; K++) {
        var X = M[K];
        if (typeof X != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(X) + " at index " + K + "."
          ), s;
      }
      function ae(ne, ge, be, oe, ie) {
        for (var pe = [], H = 0; H < M.length; H++) {
          var re = M[H], V = re(ne, ge, be, oe, ie, n);
          if (V == null)
            return null;
          V.data && r(V.data, "expectedType") && pe.push(V.data.expectedType);
        }
        var de = pe.length > 0 ? ", expected one of type [" + pe.join(", ") + "]" : "";
        return new v("Invalid " + oe + " `" + ie + "` supplied to " + ("`" + be + "`" + de + "."));
      }
      return g(ae);
    }
    function Y() {
      function M(K, X, ae, ne, ge) {
        return F(K[X]) ? null : new v("Invalid " + ne + " `" + ge + "` supplied to " + ("`" + ae + "`, expected a ReactNode."));
      }
      return g(M);
    }
    function U(M, K, X, ae, ne) {
      return new v(
        (M || "React class") + ": " + K + " type `" + X + "." + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ne + "`."
      );
    }
    function B(M) {
      function K(X, ae, ne, ge, be) {
        var oe = X[ae], ie = I(oe);
        if (ie !== "object")
          return new v("Invalid " + ge + " `" + be + "` of type `" + ie + "` " + ("supplied to `" + ne + "`, expected `object`."));
        for (var pe in M) {
          var H = M[pe];
          if (typeof H != "function")
            return U(ne, ge, be, pe, W(H));
          var re = H(oe, pe, ne, ge, be + "." + pe, n);
          if (re)
            return re;
        }
        return null;
      }
      return g(K);
    }
    function Z(M) {
      function K(X, ae, ne, ge, be) {
        var oe = X[ae], ie = I(oe);
        if (ie !== "object")
          return new v("Invalid " + ge + " `" + be + "` of type `" + ie + "` " + ("supplied to `" + ne + "`, expected `object`."));
        var pe = t({}, X[ae], M);
        for (var H in pe) {
          var re = M[H];
          if (r(M, H) && typeof re != "function")
            return U(ne, ge, be, H, W(re));
          if (!re)
            return new v(
              "Invalid " + ge + " `" + be + "` key `" + H + "` supplied to `" + ne + "`.\nBad object: " + JSON.stringify(X[ae], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var V = re(oe, H, ne, ge, be + "." + H, n);
          if (V)
            return V;
        }
        return null;
      }
      return g(K);
    }
    function F(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(F);
          if (M === null || i(M))
            return !0;
          var K = d(M);
          if (K) {
            var X = K.call(M), ae;
            if (K !== M.entries) {
              for (; !(ae = X.next()).done; )
                if (!F(ae.value))
                  return !1;
            } else
              for (; !(ae = X.next()).done; ) {
                var ne = ae.value;
                if (ne && !F(ne[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(M, K) {
      return M === "symbol" ? !0 : K ? K["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && K instanceof Symbol : !1;
    }
    function I(M) {
      var K = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : A(K, M) ? "symbol" : K;
    }
    function W(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var K = I(M);
      if (K === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return K;
    }
    function G(M) {
      var K = W(M);
      switch (K) {
        case "array":
        case "object":
          return "an " + K;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + K;
        default:
          return K;
      }
    }
    function R(M) {
      return !M.constructor || !M.constructor.name ? p : M.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, Bc;
}
var Hc, vp;
function c4() {
  if (vp)
    return Hc;
  vp = 1;
  var e = bd();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Hc = function() {
    function r(s, i, c, l, u, d) {
      if (d !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Hc;
}
if (process.env.NODE_ENV !== "production") {
  var l4 = ix(), u4 = !0;
  jn.exports = i4()(l4.isElement, u4);
} else
  jn.exports = c4()();
var d4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, f4 = Object.defineProperty, p4 = Object.defineProperties, m4 = Object.getOwnPropertyDescriptors, Js = Object.getOwnPropertySymbols, lx = Object.prototype.hasOwnProperty, ux = Object.prototype.propertyIsEnumerable, gp = (e, t, n) => t in e ? f4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, bp = (e, t) => {
  for (var n in t || (t = {}))
    lx.call(t, n) && gp(e, n, t[n]);
  if (Js)
    for (var n of Js(t))
      ux.call(t, n) && gp(e, n, t[n]);
  return e;
}, h4 = (e, t) => p4(e, m4(t)), v4 = (e, t) => {
  var n = {};
  for (var r in e)
    lx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Js)
    for (var r of Js(e))
      t.indexOf(r) < 0 && ux.call(e, r) && (n[r] = e[r]);
  return n;
}, _r = (e, t, n) => {
  const r = L(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = v4(s, ["color", "size", "stroke", "children"]);
      return w(
        "svg",
        bp(h4(bp({
          ref: a
        }, d4), {
          width: c,
          height: c,
          stroke: i,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([p, m]) => w(p, m)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: jn.exports.string,
    size: jn.exports.oneOfType([jn.exports.string, jn.exports.number]),
    stroke: jn.exports.oneOfType([jn.exports.string, jn.exports.number])
  }, r.displayName = `${t}`, r;
}, dx = _r(
  "adjustments-horizontal",
  "IconAdjustmentsHorizontal",
  [
    ["path", { d: "M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }],
    ["path", { d: "M4 6l8 0", key: "svg-1" }],
    ["path", { d: "M16 6l4 0", key: "svg-2" }],
    ["path", { d: "M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }],
    ["path", { d: "M4 12l2 0", key: "svg-4" }],
    ["path", { d: "M10 12l10 0", key: "svg-5" }],
    ["path", { d: "M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }],
    ["path", { d: "M4 18l11 0", key: "svg-7" }],
    ["path", { d: "M19 18l1 0", key: "svg-8" }]
  ]
), fx = _r("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), g4 = _r("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), b4 = _r("click", "IconClick", [
  ["path", { d: "M3 12l3 0", key: "svg-0" }],
  ["path", { d: "M12 3l0 3", key: "svg-1" }],
  ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }],
  ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }],
  ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }],
  ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]
]), px = _r("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), mx = _r("photo-star", "IconPhotoStar", [
  ["path", { d: "M15 8h.01", key: "svg-0" }],
  [
    "path",
    {
      d: "M11 21h-5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5",
      key: "svg-1"
    }
  ],
  ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2", key: "svg-2" }],
  [
    "path",
    {
      d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z",
      key: "svg-3"
    }
  ]
]), hx = _r("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), vx = _r("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]);
const x4 = /* @__PURE__ */ bt(void 0), y4 = { setTheme: (e) => {
}, themes: [] }, w4 = () => {
  var e;
  return (e = Qe(x4)) !== null && e !== void 0 ? e : y4;
}, $4 = ({ isExpanded: e }) => {
  const [t, n] = J(!1), { theme: r, setTheme: o } = w4();
  if (ee(() => {
    n(!0);
  }, []), !t)
    return null;
  const a = () => {
    o(r === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ f.exports.jsx(
    "button",
    {
      onClick: a,
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
      children: r === "light" ? /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(px, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(vx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, _4 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx($4, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ f.exports.jsx(ay, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(sy, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
        ]
      }
    ) }),
    e && /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: e,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ f.exports.jsx(Gp, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Ji = t4((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), G8 = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = Ji();
  return /* @__PURE__ */ f.exports.jsx(
    "aside",
    {
      tabIndex: -1,
      className: j(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ f.exports.jsx(n4, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ f.exports.jsx(
          _4,
          {
            theme: o,
            logout: r,
            isExpanded: s,
            toggleExpandSidebar: i
          }
        )
      ] })
    }
  );
}, q8 = ({ children: e }) => {
  const { isExpanded: t } = Ji();
  return /* @__PURE__ */ f.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ f.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, gx = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = J(!1), c = q(null), { isExpanded: l } = Ji();
  return ee(() => {
    const u = () => {
      const d = c.current.querySelector(
        `#${e.replaceAll("/", "_")}`
      );
      if (d) {
        const p = d.offsetWidth < d.scrollWidth;
        i(p);
      }
    };
    return window.addEventListener("resize", u), u(), () => window.removeEventListener("resize", u);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsx(Hn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    o,
    {
      href: e,
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { children: n }),
        !s && l && /* @__PURE__ */ f.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && l && /* @__PURE__ */ f.exports.jsxs(Yn, { children: [
          /* @__PURE__ */ f.exports.jsx(Kn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Cn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Hn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10
          ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20  hover:dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { children: n }),
        !s && l && /* @__PURE__ */ f.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && l && /* @__PURE__ */ f.exports.jsxs(Yn, { children: [
          /* @__PURE__ */ f.exports.jsx(Kn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Cn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, xp = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = J(!1), c = q(null);
  return ee(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        i(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ f.exports.jsx(Hn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    a,
    {
      href: n,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg  hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ f.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ f.exports.jsxs(Yn, { children: [
          /* @__PURE__ */ f.exports.jsx(Kn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Cn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Hn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
          ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ f.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ f.exports.jsxs(Yn, { children: [
          /* @__PURE__ */ f.exports.jsx(Kn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Cn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, C4 = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = J(!1), [i, c] = J(!1), { isExpanded: l } = Ji(), u = q(null), d = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return ee(() => {
    const m = () => {
      const h = u.current.querySelector(`#${p}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsxs(Hn, { delayDuration: 180, children: [
    /* @__PURE__ */ f.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
        children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ f.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ f.exports.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ f.exports.jsxs(Yn, { children: [
              /* @__PURE__ */ f.exports.jsx(Kn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(Cn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Ud, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(aa, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      xp,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ f.exports.jsxs(Hn, { delayDuration: 180, children: [
    /* @__PURE__ */ f.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
        children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ f.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ f.exports.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ f.exports.jsxs(Yn, { children: [
              /* @__PURE__ */ f.exports.jsx(Kn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(Cn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Ud, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(aa, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      xp,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
}, Qn = bt({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  isFormatedUpperQueries: !0,
  showFilters: !0,
  searchForm: null,
  multiSelectedItems: [],
  limitOfMultiSelect: 0,
  setMultiItemsSelected: () => {
  },
  onSubmitTable: null,
  setSearchForm: () => {
  },
  setSelectItem: () => {
  },
  getGlobalFilters: () => {
  },
  resetOptionsByFilter: () => {
  },
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: !1,
    hasNextPage: !1
  }
});
function S4() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Qe(Qn);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        Ku,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(Ii, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(Gu, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Li, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(Fi, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Fe,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(ql, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Fe,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ f.exports.jsx(Wr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const bx = () => {
  const { columns: e } = Qe(Qn);
  return /* @__PURE__ */ f.exports.jsx(gg, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ f.exports.jsx(Yi, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ f.exports.jsx(xg, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, Z8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, Uo = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), X8 = { limit: 10, page: 1 }, yp = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), Q8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], E4 = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(Yi, { children: /* @__PURE__ */ f.exports.jsx(Ju, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), N4 = ({
  data: e,
  columns: t,
  setSelectItem: n,
  setMultiItemsSelected: r,
  multiItemsSelected: o,
  limitOfMultiSelect: a,
  itemsSelectedCount: s,
  setItemsSelectedCount: i
}) => {
  const c = (l, u) => {
    const d = () => {
      const p = o ? o.some(
        (m) => m.id === u.id
      ) : !1;
      if (o.length === a && !p) {
        console.log("NO puedes seleccionar más elementos.");
        return;
      }
      if (p) {
        const m = o.filter(
          (h) => h.id !== u.id
        );
        r(m), i(s - 1);
      } else {
        const m = [
          ...o,
          { ...u, isSelected: !0 }
        ];
        r(m), i(s + 1);
      }
    };
    return l != null && l.render ? /* @__PURE__ */ f.exports.jsx("div", { children: l.render(u) }) : l.id === "select" ? /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        onClick: () => n(u),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ f.exports.jsx(b4, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ f.exports.jsx(
      wv,
      {
        className: "border-slate-500 data-[state=checked]:bg-brand-primary-lighter",
        onClick: () => {
          o && d();
        },
        checked: o ? o.some(
          (p) => p.id === u.id
        ) : !1,
        disabled: s === a && !s
      }
    ) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: u[l.id] });
  };
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((l) => /* @__PURE__ */ f.exports.jsx(Yi, { children: t.map((u) => /* @__PURE__ */ f.exports.jsx(Ju, { children: c(u, l) }, yp())) }, yp())) });
}, xx = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Qe(Qn), [s, i] = J(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(bg, { className: "bg-card", children: e.length ? /* @__PURE__ */ f.exports.jsx(
    N4,
    {
      setMultiItemsSelected: r,
      setSelectItem: n,
      setItemsSelectedCount: i,
      itemsSelectedCount: s,
      data: e,
      multiItemsSelected: o,
      columns: t,
      limitOfMultiSelect: a
    }
  ) : /* @__PURE__ */ f.exports.jsx(E4, { colSpan: t.length }) });
}, P4 = () => /* @__PURE__ */ f.exports.jsxs(Qu, { children: [
  /* @__PURE__ */ f.exports.jsx(bx, {}),
  /* @__PURE__ */ f.exports.jsx(xx, {})
] }), T4 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), O4 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(T4, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var wp = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = $e(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, yx = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? wp(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return wp(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, k4 = function(e, t) {
  t.shouldUseNativeValidation && yx(e, t);
  var n = {};
  for (var r in e) {
    var o = $e(t.fields, r);
    Xe(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, M4 = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, a = r.message, s = r.path.join(".");
    if (!n[s])
      if ("unionErrors" in r) {
        var i = r.unionErrors[0].errors[0];
        n[s] = { message: i.message, type: i.code };
      } else
        n[s] = { message: a, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(d) {
        return e.push(d);
      });
    }), t) {
      var c = n[s].types, l = c && c[r.code];
      n[s] = Oh(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, wx = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && yx({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: k4(M4(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, Be;
(function(e) {
  e.assertEqual = (o) => o;
  function t(o) {
  }
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (o) => {
    const a = {};
    for (const s of o)
      a[s] = s;
    return a;
  }, e.getValidEnumValues = (o) => {
    const a = e.objectKeys(o).filter((i) => typeof o[o[i]] != "number"), s = {};
    for (const i of a)
      s[i] = o[i];
    return e.objectValues(s);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(a) {
    return o[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const a = [];
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && a.push(s);
    return a;
  }, e.find = (o, a) => {
    for (const s of o)
      if (a(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  function r(o, a = " | ") {
    return o.map((s) => typeof s == "string" ? `'${s}'` : s).join(a);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, a) => typeof a == "bigint" ? a.toString() : a;
})(Be || (Be = {}));
var Dl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Dl || (Dl = {}));
const _e = Be.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), sr = (e) => {
  switch (typeof e) {
    case "undefined":
      return _e.undefined;
    case "string":
      return _e.string;
    case "number":
      return isNaN(e) ? _e.nan : _e.number;
    case "boolean":
      return _e.boolean;
    case "function":
      return _e.function;
    case "bigint":
      return _e.bigint;
    case "symbol":
      return _e.symbol;
    case "object":
      return Array.isArray(e) ? _e.array : e === null ? _e.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? _e.promise : typeof Map < "u" && e instanceof Map ? _e.map : typeof Set < "u" && e instanceof Set ? _e.set : typeof Date < "u" && e instanceof Date ? _e.date : _e.object;
    default:
      return _e.unknown;
  }
}, ue = Be.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), D4 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class on extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n = t || function(a) {
      return a.message;
    }, r = { _errors: [] }, o = (a) => {
      for (const s of a.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(o);
        else if (s.code === "invalid_return_type")
          o(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          o(s.argumentsError);
        else if (s.path.length === 0)
          r._errors.push(n(s));
        else {
          let i = r, c = 0;
          for (; c < s.path.length; ) {
            const l = s.path[c];
            c === s.path.length - 1 ? (i[l] = i[l] || { _errors: [] }, i[l]._errors.push(n(s))) : i[l] = i[l] || { _errors: [] }, i = i[l], c++;
          }
        }
    };
    return o(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Be.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const o of this.issues)
      o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
on.create = (e) => new on(e);
const ga = (e, t) => {
  let n;
  switch (e.code) {
    case ue.invalid_type:
      e.received === _e.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ue.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Be.jsonStringifyReplacer)}`;
      break;
    case ue.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Be.joinValues(e.keys, ", ")}`;
      break;
    case ue.invalid_union:
      n = "Invalid input";
      break;
    case ue.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Be.joinValues(e.options)}`;
      break;
    case ue.invalid_enum_value:
      n = `Invalid enum value. Expected ${Be.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ue.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ue.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ue.invalid_date:
      n = "Invalid date";
      break;
    case ue.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Be.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case ue.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case ue.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case ue.custom:
      n = "Invalid input";
      break;
    case ue.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ue.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ue.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Be.assertNever(e);
  }
  return { message: n };
};
let $x = ga;
function R4(e) {
  $x = e;
}
function ei() {
  return $x;
}
const ti = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, a = [...n, ...o.path || []], s = {
    ...o,
    path: a
  };
  let i = "";
  const c = r.filter((l) => !!l).slice().reverse();
  for (const l of c)
    i = l(s, { data: t, defaultError: i }).message;
  return {
    ...o,
    path: a,
    message: o.message || i
  };
}, j4 = [];
function Ce(e, t) {
  const n = ti({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      ei(),
      ga
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class Tt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const o of n) {
      if (o.status === "aborted")
        return De;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n)
      r.push({
        key: await o.key,
        value: await o.value
      });
    return Tt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: a, value: s } = o;
      if (a.status === "aborted" || s.status === "aborted")
        return De;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const De = Object.freeze({
  status: "aborted"
}), _x = (e) => ({ status: "dirty", value: e }), jt = (e) => ({ status: "valid", value: e }), Rl = (e) => e.status === "aborted", jl = (e) => e.status === "dirty", ni = (e) => e.status === "valid", ri = (e) => typeof Promise < "u" && e instanceof Promise;
var Pe;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Pe || (Pe = {}));
class Sn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const $p = (e, t) => {
  if (ni(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new on(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function je(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (s, i) => s.code !== "invalid_type" ? { message: i.defaultError } : typeof i.data > "u" ? { message: r ?? i.defaultError } : { message: n ?? i.defaultError }, description: o };
}
class Ae {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return sr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: sr(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Tt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: sr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (ri(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const o = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: sr(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return $p(o, a);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: sr(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (ri(o) ? o : Promise.resolve(o));
    return $p(r, a);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, a) => {
      const s = t(o), i = () => a.addIssue({
        code: ue.custom,
        ...r(o)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((c) => c ? !0 : (i(), !1)) : s ? !0 : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new pn({
      schema: this,
      typeName: ke.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return In.create(this, this._def);
  }
  nullable() {
    return Lr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return an.create(this, this._def);
  }
  promise() {
    return Co.create(this, this._def);
  }
  or(t) {
    return wa.create([this, t], this._def);
  }
  and(t) {
    return $a.create(this, t, this._def);
  }
  transform(t) {
    return new pn({
      ...je(this._def),
      schema: this,
      typeName: ke.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Na({
      ...je(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ke.ZodDefault
    });
  }
  brand() {
    return new Sx({
      typeName: ke.ZodBranded,
      type: this,
      ...je(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ii({
      ...je(this._def),
      innerType: this,
      catchValue: n,
      typeName: ke.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return es.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const A4 = /^c[^\s-]{8,}$/i, I4 = /^[a-z][a-z0-9]*$/, L4 = /[0-9A-HJKMNP-TV-Z]{26}/, F4 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, V4 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, W4 = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, U4 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, z4 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, B4 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function H4(e, t) {
  return !!((t === "v4" || !t) && U4.test(e) || (t === "v6" || !t) && z4.test(e));
}
class nn extends Ae {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((o) => t.test(o), {
      validation: n,
      code: ue.invalid_string,
      ...Pe.errToObj(r)
    }), this.nonempty = (t) => this.min(1, Pe.errToObj(t)), this.trim = () => new nn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new nn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new nn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== _e.string) {
      const a = this._getOrReturnCtx(t);
      return Ce(
        a,
        {
          code: ue.invalid_type,
          expected: _e.string,
          received: a.parsedType
        }
        //
      ), De;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: ue.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: ue.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? Ce(o, {
          code: ue.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && Ce(o, {
          code: ue.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        V4.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "email",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        W4.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "emoji",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        F4.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "uuid",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        A4.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "cuid",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        I4.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "cuid2",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        L4.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "ulid",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), Ce(o, {
            validation: "url",
            code: ue.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "regex",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: ue.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: ue.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: ue.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? B4(a).test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: ue.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? H4(t.data, a.version) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "ip",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty()) : Be.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _addCheck(t) {
    return new nn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Pe.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Pe.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Pe.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Pe.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Pe.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Pe.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Pe.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Pe.errToObj(t) });
  }
  datetime(t) {
    var n;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      ...Pe.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Pe.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...Pe.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Pe.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Pe.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Pe.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Pe.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Pe.errToObj(n)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
nn.create = (e) => {
  var t;
  return new nn({
    checks: [],
    typeName: ke.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...je(e)
  });
};
function Y4(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class mr extends Ae {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== _e.number) {
      const a = this._getOrReturnCtx(t);
      return Ce(a, {
        code: ue.invalid_type,
        expected: _e.number,
        received: a.parsedType
      }), De;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "int" ? Be.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: ue.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: ue.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: ue.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? Y4(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: ue.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: ue.not_finite,
        message: a.message
      }), o.dirty()) : Be.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Pe.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Pe.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Pe.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Pe.toString(n));
  }
  setLimit(t, n, r, o) {
    return new mr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Pe.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new mr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Pe.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Pe.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Pe.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Pe.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Pe.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Pe.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Pe.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Pe.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Pe.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Be.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
mr.create = (e) => new mr({
  checks: [],
  typeName: ke.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...je(e)
});
class hr extends Ae {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== _e.bigint) {
      const a = this._getOrReturnCtx(t);
      return Ce(a, {
        code: ue.invalid_type,
        expected: _e.bigint,
        received: a.parsedType
      }), De;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: ue.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: ue.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: ue.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : Be.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Pe.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Pe.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Pe.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Pe.toString(n));
  }
  setLimit(t, n, r, o) {
    return new hr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Pe.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new hr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Pe.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Pe.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Pe.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Pe.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Pe.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
hr.create = (e) => {
  var t;
  return new hr({
    checks: [],
    typeName: ke.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...je(e)
  });
};
class ba extends Ae {
  _parse(t) {
    if (this._def.coerce && (t.data = Boolean(t.data)), this._getType(t) !== _e.boolean) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: ue.invalid_type,
        expected: _e.boolean,
        received: r.parsedType
      }), De;
    }
    return jt(t.data);
  }
}
ba.create = (e) => new ba({
  typeName: ke.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...je(e)
});
class Ar extends Ae {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== _e.date) {
      const a = this._getOrReturnCtx(t);
      return Ce(a, {
        code: ue.invalid_type,
        expected: _e.date,
        received: a.parsedType
      }), De;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return Ce(a, {
        code: ue.invalid_date
      }), De;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), Ce(o, {
        code: ue.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), Ce(o, {
        code: ue.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : Be.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Ar({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Pe.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Pe.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
Ar.create = (e) => new Ar({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: ke.ZodDate,
  ...je(e)
});
class oi extends Ae {
  _parse(t) {
    if (this._getType(t) !== _e.symbol) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: ue.invalid_type,
        expected: _e.symbol,
        received: r.parsedType
      }), De;
    }
    return jt(t.data);
  }
}
oi.create = (e) => new oi({
  typeName: ke.ZodSymbol,
  ...je(e)
});
class xa extends Ae {
  _parse(t) {
    if (this._getType(t) !== _e.undefined) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: ue.invalid_type,
        expected: _e.undefined,
        received: r.parsedType
      }), De;
    }
    return jt(t.data);
  }
}
xa.create = (e) => new xa({
  typeName: ke.ZodUndefined,
  ...je(e)
});
class ya extends Ae {
  _parse(t) {
    if (this._getType(t) !== _e.null) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: ue.invalid_type,
        expected: _e.null,
        received: r.parsedType
      }), De;
    }
    return jt(t.data);
  }
}
ya.create = (e) => new ya({
  typeName: ke.ZodNull,
  ...je(e)
});
class _o extends Ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return jt(t.data);
  }
}
_o.create = (e) => new _o({
  typeName: ke.ZodAny,
  ...je(e)
});
class Mr extends Ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return jt(t.data);
  }
}
Mr.create = (e) => new Mr({
  typeName: ke.ZodUnknown,
  ...je(e)
});
class Gn extends Ae {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return Ce(n, {
      code: ue.invalid_type,
      expected: _e.never,
      received: n.parsedType
    }), De;
  }
}
Gn.create = (e) => new Gn({
  typeName: ke.ZodNever,
  ...je(e)
});
class ai extends Ae {
  _parse(t) {
    if (this._getType(t) !== _e.undefined) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: ue.invalid_type,
        expected: _e.void,
        received: r.parsedType
      }), De;
    }
    return jt(t.data);
  }
}
ai.create = (e) => new ai({
  typeName: ke.ZodVoid,
  ...je(e)
});
class an extends Ae {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== _e.array)
      return Ce(n, {
        code: ue.invalid_type,
        expected: _e.array,
        received: n.parsedType
      }), De;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && (Ce(n, {
        code: s ? ue.too_big : ue.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (Ce(n, {
      code: ue.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (Ce(n, {
      code: ue.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new Sn(n, s, n.path, i)))).then((s) => Tt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new Sn(n, s, n.path, i)));
    return Tt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new an({
      ...this._def,
      minLength: { value: t, message: Pe.toString(n) }
    });
  }
  max(t, n) {
    return new an({
      ...this._def,
      maxLength: { value: t, message: Pe.toString(n) }
    });
  }
  length(t, n) {
    return new an({
      ...this._def,
      exactLength: { value: t, message: Pe.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
an.create = (e, t) => new an({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ke.ZodArray,
  ...je(t)
});
function io(e) {
  if (e instanceof ut) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = In.create(io(r));
    }
    return new ut({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof an ? new an({
      ...e._def,
      type: io(e.element)
    }) : e instanceof In ? In.create(io(e.unwrap())) : e instanceof Lr ? Lr.create(io(e.unwrap())) : e instanceof En ? En.create(e.items.map((t) => io(t))) : e;
}
class ut extends Ae {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Be.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== _e.object) {
      const l = this._getOrReturnCtx(t);
      return Ce(l, {
        code: ue.invalid_type,
        expected: _e.object,
        received: l.parsedType
      }), De;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Gn && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const u = a[l], d = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new Sn(o, d, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof Gn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (l === "strict")
        i.length > 0 && (Ce(o, {
          code: ue.unrecognized_keys,
          keys: i
        }), r.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of i) {
        const d = o.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new Sn(o, d, o.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of c) {
        const d = await u.key;
        l.push({
          key: d,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => Tt.mergeObjectSync(r, l)) : Tt.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Pe.errToObj, new ut({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, a, s, i;
          const c = (s = (a = (o = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(o, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (i = Pe.errToObj(t).message) !== null && i !== void 0 ? i : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new ut({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ut({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new ut({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new ut({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: ke.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new ut({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Be.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Be.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return io(this);
  }
  partial(t) {
    const n = {};
    return Be.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Be.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof In; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Cx(Be.objectKeys(this.shape));
  }
}
ut.create = (e, t) => new ut({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Gn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
ut.strictCreate = (e, t) => new ut({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Gn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
ut.lazycreate = (e, t) => new ut({
  shape: e,
  unknownKeys: "strip",
  catchall: Gn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
class wa extends Ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new on(i.ctx.common.issues));
      return Ce(n, {
        code: ue.invalid_union,
        unionErrors: s
      }), De;
    }
    if (n.common.async)
      return Promise.all(r.map(async (a) => {
        const s = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: n.data,
            path: n.path,
            parent: s
          }),
          ctx: s
        };
      })).then(o);
    {
      let a;
      const s = [];
      for (const c of r) {
        const l = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
          data: n.data,
          path: n.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !a && (a = { result: u, ctx: l }), l.common.issues.length && s.push(l.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = s.map((c) => new on(c));
      return Ce(n, {
        code: ue.invalid_union,
        unionErrors: i
      }), De;
    }
  }
  get options() {
    return this._def.options;
  }
}
wa.create = (e, t) => new wa({
  options: e,
  typeName: ke.ZodUnion,
  ...je(t)
});
const Ps = (e) => e instanceof Ca ? Ps(e.schema) : e instanceof pn ? Ps(e.innerType()) : e instanceof Sa ? [e.value] : e instanceof vr ? e.options : e instanceof Ea ? Object.keys(e.enum) : e instanceof Na ? Ps(e._def.innerType) : e instanceof xa ? [void 0] : e instanceof ya ? [null] : null;
class ec extends Ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== _e.object)
      return Ce(n, {
        code: ue.invalid_type,
        expected: _e.object,
        received: n.parsedType
      }), De;
    const r = this.discriminator, o = n.data[r], a = this.optionsMap.get(o);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (Ce(n, {
      code: ue.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), De);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const o = /* @__PURE__ */ new Map();
    for (const a of n) {
      const s = Ps(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new ec({
      typeName: ke.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...je(r)
    });
  }
}
function Al(e, t) {
  const n = sr(e), r = sr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === _e.object && r === _e.object) {
    const o = Be.objectKeys(t), a = Be.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = Al(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      s[i] = c.data;
    }
    return { valid: !0, data: s };
  } else if (n === _e.array && r === _e.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a], i = t[a], c = Al(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === _e.date && r === _e.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class $a extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (Rl(a) || Rl(s))
        return De;
      const i = Al(a.value, s.value);
      return i.valid ? ((jl(a) || jl(s)) && n.dirty(), { status: n.value, value: i.data }) : (Ce(r, {
        code: ue.invalid_intersection_types
      }), De);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([a, s]) => o(a, s)) : o(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
$a.create = (e, t, n) => new $a({
  left: e,
  right: t,
  typeName: ke.ZodIntersection,
  ...je(n)
});
class En extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== _e.array)
      return Ce(r, {
        code: ue.invalid_type,
        expected: _e.array,
        received: r.parsedType
      }), De;
    if (r.data.length < this._def.items.length)
      return Ce(r, {
        code: ue.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), De;
    !this._def.rest && r.data.length > this._def.items.length && (Ce(r, {
      code: ue.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new Sn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => Tt.mergeArray(n, s)) : Tt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new En({
      ...this._def,
      rest: t
    });
  }
}
En.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new En({
    items: e,
    typeName: ke.ZodTuple,
    rest: null,
    ...je(t)
  });
};
class _a extends Ae {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== _e.object)
      return Ce(r, {
        code: ue.invalid_type,
        expected: _e.object,
        received: r.parsedType
      }), De;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new Sn(r, i, r.path, i)),
        value: s._parse(new Sn(r, r.data[i], r.path, i))
      });
    return r.common.async ? Tt.mergeObjectAsync(n, o) : Tt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Ae ? new _a({
      keyType: t,
      valueType: n,
      typeName: ke.ZodRecord,
      ...je(r)
    }) : new _a({
      keyType: nn.create(),
      valueType: t,
      typeName: ke.ZodRecord,
      ...je(n)
    });
  }
}
class si extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== _e.map)
      return Ce(r, {
        code: ue.invalid_type,
        expected: _e.map,
        received: r.parsedType
      }), De;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new Sn(r, i, r.path, [l, "key"])),
      value: a._parse(new Sn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of s) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return De;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return De;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
      }
      return { status: n.value, value: i };
    }
  }
}
si.create = (e, t, n) => new si({
  valueType: t,
  keyType: e,
  typeName: ke.ZodMap,
  ...je(n)
});
class Ir extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== _e.set)
      return Ce(r, {
        code: ue.invalid_type,
        expected: _e.set,
        received: r.parsedType
      }), De;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (Ce(r, {
      code: ue.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (Ce(r, {
      code: ue.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function s(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return De;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const i = [...r.data.values()].map((c, l) => a._parse(new Sn(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new Ir({
      ...this._def,
      minSize: { value: t, message: Pe.toString(n) }
    });
  }
  max(t, n) {
    return new Ir({
      ...this._def,
      maxSize: { value: t, message: Pe.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ir.create = (e, t) => new Ir({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ke.ZodSet,
  ...je(t)
});
class ho extends Ae {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== _e.function)
      return Ce(n, {
        code: ue.invalid_type,
        expected: _e.function,
        received: n.parsedType
      }), De;
    function r(i, c) {
      return ti({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ei(),
          ga
        ].filter((l) => !!l),
        issueData: {
          code: ue.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return ti({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ei(),
          ga
        ].filter((l) => !!l),
        issueData: {
          code: ue.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof Co ? jt(async (...i) => {
      const c = new on([]), l = await this._def.args.parseAsync(i, a).catch((p) => {
        throw c.addIssue(r(i, p)), c;
      }), u = await s(...l);
      return await this._def.returns._def.type.parseAsync(u, a).catch((p) => {
        throw c.addIssue(o(u, p)), c;
      });
    }) : jt((...i) => {
      const c = this._def.args.safeParse(i, a);
      if (!c.success)
        throw new on([r(i, c.error)]);
      const l = s(...c.data), u = this._def.returns.safeParse(l, a);
      if (!u.success)
        throw new on([o(l, u.error)]);
      return u.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new ho({
      ...this._def,
      args: En.create(t).rest(Mr.create())
    });
  }
  returns(t) {
    return new ho({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new ho({
      args: t || En.create([]).rest(Mr.create()),
      returns: n || Mr.create(),
      typeName: ke.ZodFunction,
      ...je(r)
    });
  }
}
class Ca extends Ae {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ca.create = (e, t) => new Ca({
  getter: e,
  typeName: ke.ZodLazy,
  ...je(t)
});
class Sa extends Ae {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return Ce(n, {
        received: n.data,
        code: ue.invalid_literal,
        expected: this._def.value
      }), De;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Sa.create = (e, t) => new Sa({
  value: e,
  typeName: ke.ZodLiteral,
  ...je(t)
});
function Cx(e, t) {
  return new vr({
    values: e,
    typeName: ke.ZodEnum,
    ...je(t)
  });
}
class vr extends Ae {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return Ce(n, {
        expected: Be.joinValues(r),
        received: n.parsedType,
        code: ue.invalid_type
      }), De;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return Ce(n, {
        received: n.data,
        code: ue.invalid_enum_value,
        options: r
      }), De;
    }
    return jt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t) {
    return vr.create(t);
  }
  exclude(t) {
    return vr.create(this.options.filter((n) => !t.includes(n)));
  }
}
vr.create = Cx;
class Ea extends Ae {
  _parse(t) {
    const n = Be.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== _e.string && r.parsedType !== _e.number) {
      const o = Be.objectValues(n);
      return Ce(r, {
        expected: Be.joinValues(o),
        received: r.parsedType,
        code: ue.invalid_type
      }), De;
    }
    if (n.indexOf(t.data) === -1) {
      const o = Be.objectValues(n);
      return Ce(r, {
        received: r.data,
        code: ue.invalid_enum_value,
        options: o
      }), De;
    }
    return jt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ea.create = (e, t) => new Ea({
  values: e,
  typeName: ke.ZodNativeEnum,
  ...je(t)
});
class Co extends Ae {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== _e.promise && n.common.async === !1)
      return Ce(n, {
        code: ue.invalid_type,
        expected: _e.promise,
        received: n.parsedType
      }), De;
    const r = n.parsedType === _e.promise ? n.data : Promise.resolve(n.data);
    return jt(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Co.create = (e, t) => new Co({
  type: e,
  typeName: ke.ZodPromise,
  ...je(t)
});
class pn extends Ae {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ke.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null;
    if (o.type === "preprocess") {
      const s = o.transform(r.data);
      return r.common.async ? Promise.resolve(s).then((i) => this._def.schema._parseAsync({
        data: i,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: s,
        path: r.path,
        parent: r
      });
    }
    const a = {
      addIssue: (s) => {
        Ce(r, s), s.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), o.type === "refinement") {
      const s = (i) => {
        const c = o.refinement(i, a);
        if (r.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? De : (i.status === "dirty" && n.dirty(), s(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? De : (i.status === "dirty" && n.dirty(), s(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!ni(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => ni(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    Be.assertNever(o);
  }
}
pn.create = (e, t, n) => new pn({
  schema: e,
  typeName: ke.ZodEffects,
  effect: t,
  ...je(n)
});
pn.createWithPreprocess = (e, t, n) => new pn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: ke.ZodEffects,
  ...je(n)
});
class In extends Ae {
  _parse(t) {
    return this._getType(t) === _e.undefined ? jt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
In.create = (e, t) => new In({
  innerType: e,
  typeName: ke.ZodOptional,
  ...je(t)
});
class Lr extends Ae {
  _parse(t) {
    return this._getType(t) === _e.null ? jt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Lr.create = (e, t) => new Lr({
  innerType: e,
  typeName: ke.ZodNullable,
  ...je(t)
});
class Na extends Ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === _e.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Na.create = (e, t) => new Na({
  innerType: e,
  typeName: ke.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...je(t)
});
class ii extends Ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, o = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return ri(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new on(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new on(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ii.create = (e, t) => new ii({
  innerType: e,
  typeName: ke.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...je(t)
});
class ci extends Ae {
  _parse(t) {
    if (this._getType(t) !== _e.nan) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: ue.invalid_type,
        expected: _e.nan,
        received: r.parsedType
      }), De;
    }
    return { status: "valid", value: t.data };
  }
}
ci.create = (e) => new ci({
  typeName: ke.ZodNaN,
  ...je(e)
});
const K4 = Symbol("zod_brand");
class Sx extends Ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class es extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? De : a.status === "dirty" ? (n.dirty(), _x(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const o = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return o.status === "aborted" ? De : o.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: o.value
      }) : this._def.out._parseSync({
        data: o.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new es({
      in: t,
      out: n,
      typeName: ke.ZodPipeline
    });
  }
}
const Ex = (e, t = {}, n) => e ? _o.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : _o.create(), G4 = {
  object: ut.lazycreate
};
var ke;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(ke || (ke = {}));
const q4 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Ex((n) => n instanceof e, t), Nx = nn.create, Px = mr.create, Z4 = ci.create, X4 = hr.create, Tx = ba.create, Q4 = Ar.create, J4 = oi.create, e3 = xa.create, t3 = ya.create, n3 = _o.create, r3 = Mr.create, o3 = Gn.create, a3 = ai.create, s3 = an.create, i3 = ut.create, c3 = ut.strictCreate, l3 = wa.create, u3 = ec.create, d3 = $a.create, f3 = En.create, p3 = _a.create, m3 = si.create, h3 = Ir.create, v3 = ho.create, g3 = Ca.create, b3 = Sa.create, x3 = vr.create, y3 = Ea.create, w3 = Co.create, _p = pn.create, $3 = In.create, _3 = Lr.create, C3 = pn.createWithPreprocess, S3 = es.create, E3 = () => Nx().optional(), N3 = () => Px().optional(), P3 = () => Tx().optional(), T3 = {
  string: (e) => nn.create({ ...e, coerce: !0 }),
  number: (e) => mr.create({ ...e, coerce: !0 }),
  boolean: (e) => ba.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => hr.create({ ...e, coerce: !0 }),
  date: (e) => Ar.create({ ...e, coerce: !0 })
}, O3 = De;
var li = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ga,
  setErrorMap: R4,
  getErrorMap: ei,
  makeIssue: ti,
  EMPTY_PATH: j4,
  addIssueToContext: Ce,
  ParseStatus: Tt,
  INVALID: De,
  DIRTY: _x,
  OK: jt,
  isAborted: Rl,
  isDirty: jl,
  isValid: ni,
  isAsync: ri,
  get util() {
    return Be;
  },
  get objectUtil() {
    return Dl;
  },
  ZodParsedType: _e,
  getParsedType: sr,
  ZodType: Ae,
  ZodString: nn,
  ZodNumber: mr,
  ZodBigInt: hr,
  ZodBoolean: ba,
  ZodDate: Ar,
  ZodSymbol: oi,
  ZodUndefined: xa,
  ZodNull: ya,
  ZodAny: _o,
  ZodUnknown: Mr,
  ZodNever: Gn,
  ZodVoid: ai,
  ZodArray: an,
  ZodObject: ut,
  ZodUnion: wa,
  ZodDiscriminatedUnion: ec,
  ZodIntersection: $a,
  ZodTuple: En,
  ZodRecord: _a,
  ZodMap: si,
  ZodSet: Ir,
  ZodFunction: ho,
  ZodLazy: Ca,
  ZodLiteral: Sa,
  ZodEnum: vr,
  ZodNativeEnum: Ea,
  ZodPromise: Co,
  ZodEffects: pn,
  ZodTransformer: pn,
  ZodOptional: In,
  ZodNullable: Lr,
  ZodDefault: Na,
  ZodCatch: ii,
  ZodNaN: ci,
  BRAND: K4,
  ZodBranded: Sx,
  ZodPipeline: es,
  custom: Ex,
  Schema: Ae,
  ZodSchema: Ae,
  late: G4,
  get ZodFirstPartyTypeKind() {
    return ke;
  },
  coerce: T3,
  any: n3,
  array: s3,
  bigint: X4,
  boolean: Tx,
  date: Q4,
  discriminatedUnion: u3,
  effect: _p,
  enum: x3,
  function: v3,
  instanceof: q4,
  intersection: d3,
  lazy: g3,
  literal: b3,
  map: m3,
  nan: Z4,
  nativeEnum: y3,
  never: o3,
  null: t3,
  nullable: _3,
  number: Px,
  object: i3,
  oboolean: P3,
  onumber: N3,
  optional: $3,
  ostring: E3,
  pipeline: S3,
  preprocess: C3,
  promise: w3,
  record: p3,
  set: h3,
  strictObject: c3,
  string: Nx,
  symbol: J4,
  transformer: _p,
  tuple: f3,
  undefined: e3,
  union: l3,
  unknown: r3,
  void: a3,
  NEVER: O3,
  ZodIssueCode: ue,
  quotelessJson: D4,
  ZodError: on
});
const k3 = () => {
  const { showFilters: e, setShowFilters: t } = Qe(Qn);
  return /* @__PURE__ */ f.exports.jsxs(
    Fe,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(dx, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, M3 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Qe(Qn), [l, u] = J(null), d = q(null), p = (m) => {
    c(m);
  };
  return ee(() => {
    const m = d.current;
    if (!m)
      return;
    const h = new ResizeObserver((v) => {
      const g = v[0].contentRect.width;
      u(g);
    });
    return h.observe(m), () => {
      h.unobserve(m), h.disconnect();
    };
  }, []), /* @__PURE__ */ f.exports.jsxs(Un, { children: [
    /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Fe,
      {
        size: "sm",
        type: "button",
        ref: d,
        variant: "outline",
        className: "py-5 border-dashed border-muted-foreground",
        children: [
          n || /* @__PURE__ */ f.exports.jsx(fx, { size: 16, className: "mr-2" }),
          r,
          i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
            /* @__PURE__ */ f.exports.jsx(Ka, { orientation: "vertical", className: "mx-2 h-4" }),
            /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length >= 1 ? /* @__PURE__ */ f.exports.jsx(
              Rt,
              {
                variant: "secondary",
                className: "rounded-sm px-1 font-normal",
                children: i(e).length === 1 ? /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                  i(e).length,
                  " seleccionado"
                ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                  i(e).length,
                  " seleccionados"
                ] })
              }
            ) : o.filter((m) => m.selected).map((m) => /* @__PURE__ */ f.exports.jsx(
              Rt,
              {
                variant: "secondary",
                className: "rounded-sm px-1 font-normal",
                children: m.label.length >= 20 ? null : m.label
              },
              m.value.toString()
            )) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx("style", { children: `
          .combox-checkbox-content {
            min-width: 150px !important;
            width: ${l + 24}px !important;
          }

          .checkbox-tooltip-content {
            min-width: 150px !important;
            width: ${l + 10}px !important;
          }
        ` }),
    /* @__PURE__ */ f.exports.jsx(_n, { className: "p-0 combox-checkbox-content", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Bn, { children: [
      /* @__PURE__ */ f.exports.jsx(fr, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Xa, { children: [
        /* @__PURE__ */ f.exports.jsx(pr, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(dn, { children: o.map((m) => /* @__PURE__ */ f.exports.jsx(Hn, { children: /* @__PURE__ */ f.exports.jsxs(Yn, { delayDuration: 150, children: [
          /* @__PURE__ */ f.exports.jsx(Kn, { className: "w-full", children: /* @__PURE__ */ f.exports.jsxs(
            fn,
            {
              onSelect: () => {
                m.selected ? s(e, m.id, !1) : s(e, m.id, !0);
              },
              children: [
                /* @__PURE__ */ f.exports.jsx(
                  "div",
                  {
                    className: j(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      m.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                    ),
                    children: /* @__PURE__ */ f.exports.jsx(ln, { className: j("h-4 w-4") })
                  }
                ),
                m.icon,
                /* @__PURE__ */ f.exports.jsx("span", { className: "truncate", children: m.label })
              ]
            },
            m.value.toString()
          ) }),
          /* @__PURE__ */ f.exports.jsx(Cn, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ f.exports.jsx("p", { children: m.label }) })
        ] }) })) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(zi, {}),
          /* @__PURE__ */ f.exports.jsx(dn, { children: /* @__PURE__ */ f.exports.jsx(
            fn,
            {
              onSelect: () => p(e),
              className: "justify-center text-center",
              children: "Limpiar Filtros"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}, D3 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = Qe(Qn), l = () => {
    var d;
    const u = [];
    (d = Object.entries(t == null ? void 0 : t.getValues())) == null || d.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : Uo(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ f.exports.jsxs(Un, { children: [
    /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Fe, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ f.exports.jsx(Ds, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Ka, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          Rt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: o
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsxs(_n, { className: "w-fit p-4", align: "start", children: [
      /* @__PURE__ */ f.exports.jsxs(Tn, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ f.exports.jsx(
          zu,
          {
            id: e,
            form: t,
            type: "text",
            placeholder: `Ingrese ${n}`
          }
        ),
        /* @__PURE__ */ f.exports.jsx(
          Fe,
          {
            type: "button",
            onClick: l,
            className: "h-10 w-fit",
            children: /* @__PURE__ */ f.exports.jsx(Ds, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, R3 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = Qe(Qn), u = e.watch(n.map((p) => p.id)), d = () => {
    var m;
    a();
    const p = [];
    (m = Object.entries(e == null ? void 0 : e.getValues())) == null || m.forEach((h) => {
      h[1] && p.push({
        field: l ? h[0] : Uo(h[0]),
        text: h[1]
      });
    }), s({ queries: p, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ f.exports.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-col-reverse items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ f.exports.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((p, m) => /* @__PURE__ */ f.exports.jsx(
          D3,
          {
            queryText: u[m],
            label: p.label,
            id: p.id,
            form: e
          },
          p.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ f.exports.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ f.exports.jsx(k3, {}),
      o && r && r.map((p) => /* @__PURE__ */ f.exports.jsx(
        M3,
        {
          onSubmit: t,
          form: e,
          id: p.id,
          icon: p.icon,
          label: p.label,
          options: p.options
        },
        p.id
      )),
      o && (r != null && r.filter(
        (p) => p.options.some((m) => m.selected)
      ).length) ? /* @__PURE__ */ f.exports.jsxs(
        Fe,
        {
          type: "button",
          variant: "ghost",
          onClick: d,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(gi, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, j3 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = Qe(Qn), l = Ih({
    defaultValues: n.reduce((d, p) => (d[p.id] = "", d), {}),
    resolver: wx(
      li.object(
        n.reduce((d, p) => (d[p.id] = li.string().optional(), d), {})
      )
    )
  }), u = async (d) => {
    var h;
    console.log({ data: d });
    const p = r(), m = [];
    (h = Object.entries(d)) == null || h.forEach((v) => {
      v[1] && m.push({
        field: c ? v[0] : Uo(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", m), e({ queries: m, filters: p, limit: s, page: a });
  };
  return ee(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Fh, { ...l, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(R3, { form: l, onSubmit: u }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "submit",
        onClick: l.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Gl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(hx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, A3 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), I3 = () => /* @__PURE__ */ f.exports.jsxs(Qu, { children: [
  /* @__PURE__ */ f.exports.jsx(bx, {}),
  /* @__PURE__ */ f.exports.jsx(xx, {})
] }), L3 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function J8(e) {
  const [t, n] = J([]), [r, o] = J([]), [a, s] = J([]), [i, c] = J(!1), [l, u] = J(e == null ? void 0 : e.error), [d, p] = J(e == null ? void 0 : e.loading), [m, h] = J(), [v, g] = J(
    (e == null ? void 0 : e.pagination) ?? L3
  ), [x, b] = J(
    (e == null ? void 0 : e.columns) || []
  ), y = he(
    (F) => e.onSubmitTable({ ...F }),
    [e]
  ), _ = he(
    (F) => {
      var G;
      g(F);
      const A = m.getValues(), I = [];
      (G = Object.entries(A)) == null || G.forEach((R) => {
        R[1] && I.push({
          field: e.isFormatedUpperQueries ? R[0] : Uo(R[0]),
          text: R[1]
        });
      });
      const W = r.map((R) => ({
        id: R.id,
        label: R.label,
        options: R.options.filter((M) => M.selected).map((M) => M.value)
      })).filter((R) => R.options.length > 0);
      y({
        filters: W,
        queries: I,
        limit: F.limit,
        page: F.page
      });
    },
    [r, y, m]
  ), $ = he(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), N = he(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), k = () => r.map((F) => ({
    id: F.id,
    label: F.label,
    options: F.options.filter((A) => A.selected).map((A) => A.value)
  })).filter((F) => F.options.length > 0), S = (F) => {
    const A = r.find((I) => I.id === F);
    return A ? A.options.filter((W) => W.selected).map((W) => W.value) : [];
  }, P = (F, A, I) => {
    const W = r.map((G) => G.id === F ? {
      ...G,
      options: G.options.map((R) => R.id === A ? { ...R, selected: I } : R)
    } : G);
    o(W);
  }, Y = () => r, U = (F) => {
    const A = r.map((I) => I.id === F ? {
      ...I,
      options: I.options.map((W) => ({
        ...W,
        selected: !1
      }))
    } : I);
    o(A);
  }, B = (F) => _({ ...v, limit: F }), Z = () => {
    const F = r.map((A) => ({
      ...A,
      options: A.options.map((I) => ({ ...I, selected: !1 }))
    }));
    o(F);
  };
  return ee(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), ee(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), ee(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), ee(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), ee(() => b((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), ee(() => {
    const F = x.filter((A) => A.isQuery).map((A) => ({
      id: A.id,
      label: A.label
    }));
    s(F);
  }, [x]), ee(() => {
    const F = (I) => (I == null ? void 0 : I.filters) && (I == null ? void 0 : I.filters.length), A = x.filter(F).map((I) => {
      const W = I.filters.map((R) => ({
        ...R,
        selected: !1
      }));
      return {
        ...I,
        id: I.id,
        options: W
      };
    });
    o(A);
  }, [x]), ee(() => {
    e != null && e.filters && (e == null || e.filters.forEach((F) => {
      F != null && F.filters && x.forEach((A) => {
        F.id === A.id && o((I) => I.some((G) => G.id === F.id) ? I : [
          ...I,
          {
            id: A.id,
            label: A.label,
            options: F.filters
          }
        ]);
      });
    }));
  }, [x, e == null ? void 0 : e.filters]), ee(() => {
    g((F) => {
      var A, I;
      return {
        ...F,
        hasNextPage: (A = e == null ? void 0 : e.pagination) == null ? void 0 : A.hasNextPage,
        hasPrevPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Qn.Provider,
    {
      value: {
        data: t,
        columns: x,
        pagination: v,
        nextPage: $,
        prevPage: N,
        searchForm: m,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: B,
        showFilters: i,
        resetFilters: Z,
        getGlobalFilters: Y,
        selectOptionFilter: P,
        resetOptionsByFilter: U,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: y,
        getFilterOptionsSelectedById: S,
        getFiltersWithOptionsSelected: k,
        setSelectItem: e.setSelectItem,
        setShowFilters: (F) => c(F),
        setSearchForm: (F) => h(F)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(j3, { onSubmitTable: y, loading: d }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          d && /* @__PURE__ */ f.exports.jsx(O4, {}),
          !d && l && /* @__PURE__ */ f.exports.jsx(A3, {}),
          !d && !l && !t && /* @__PURE__ */ f.exports.jsx(I3, {}),
          !d && !l && t && /* @__PURE__ */ f.exports.jsx(P4, {})
        ] }),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(S4, {})
      ] })
    }
  );
}
const eR = ({
  id: e,
  label: t,
  defaultValue: n,
  placeholder: r,
  description: o,
  items: a,
  form: s,
  tabIndex: i,
  classNameContainer: c,
  classNameSelect: l,
  classNameGroup: u,
  disabled: d,
  isLoading: p
}) => p ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full", c), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: t && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(Pt, { className: "w-full h-9 mt-2" }) })
] }) : /* @__PURE__ */ f.exports.jsx(
  Hr,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: m, formState: h }) => {
      var v;
      return /* @__PURE__ */ f.exports.jsxs(wr, { className: j("w-full", c), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((v = h == null ? void 0 : h.errors[e]) == null ? void 0 : v.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            h.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(ko, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs(
          Ku,
          {
            onValueChange: (g) => g && m.onChange(g),
            defaultValue: m.value,
            disabled: d,
            value: m == null ? void 0 : m.value,
            children: [
              /* @__PURE__ */ f.exports.jsx(Ya, { placeholder: r, children: /* @__PURE__ */ f.exports.jsx(Ii, { disabled: d, tabIndex: i, className: j("w-full", l), placeholder: r, children: /* @__PURE__ */ f.exports.jsx(Gu, { placeholder: r }) }) }),
              /* @__PURE__ */ f.exports.jsx(Li, { children: /* @__PURE__ */ f.exports.jsxs(AE, { className: j("overflow-auto", u), children: [
                a.length ? null : /* @__PURE__ */ f.exports.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
                a.map((g) => {
                  var x, b;
                  return /* @__PURE__ */ f.exports.jsx(Fi, { value: (x = g.value) == null ? void 0 : x.toString(), children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-center items-center", children: [
                    (g == null ? void 0 : g.icon) && /* @__PURE__ */ f.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: g.icon }),
                    g.label
                  ] }) }, (b = g.value) == null ? void 0 : b.toString());
                })
              ] }) })
            ]
          }
        )
      ] });
    }
  }
);
function tc() {
  return (tc = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function Ox(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Il(e) {
  var t = q(e), n = q(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var Pa = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, ra = function(e) {
  return "touches" in e;
}, Ll = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Cp = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = ra(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: Pa((o.pageX - (r.left + Ll(e).pageXOffset)) / r.width), top: Pa((o.pageY - (r.top + Ll(e).pageYOffset)) / r.height) };
}, Sp = function(e) {
  !ra(e) && e.preventDefault();
}, kx = E.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = Ox(e, ["onMove", "onKey"]), o = q(null), a = Il(t), s = Il(n), i = q(null), c = q(!1), l = _t(function() {
    var m = function(g) {
      Sp(g), (ra(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Cp(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var x = c.current, b = Ll(o.current), y = g ? b.addEventListener : b.removeEventListener;
      y(x ? "touchmove" : "mousemove", m), y(x ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var x = g.nativeEvent, b = o.current;
      if (b && (Sp(x), !function(_, $) {
        return $ && !ra(_);
      }(x, c.current) && b)) {
        if (ra(x)) {
          c.current = !0;
          var y = x.changedTouches || [];
          y.length && (i.current = y[0].identifier);
        }
        b.focus(), a(Cp(b, x, i.current)), v(!0);
      }
    }, function(g) {
      var x = g.which || g.keyCode;
      x < 37 || x > 40 || (g.preventDefault(), s({ left: x === 39 ? 0.05 : x === 37 ? -0.05 : 0, top: x === 40 ? 0.05 : x === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], d = l[1], p = l[2];
  return ee(function() {
    return p;
  }, [p]), E.createElement("div", tc({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), xd = function(e) {
  return e.filter(Boolean).join(" ");
}, Mx = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = xd(["react-colorful__pointer", e.className]);
  return E.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, E.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, $t = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, F3 = function(e) {
  return B3(Fl(e));
}, Fl = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? $t(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? $t(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, V3 = function(e) {
  return z3(U3(e));
}, W3 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: $t(e.h), s: $t(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: $t(o / 2), a: $t(r, 2) };
}, Vl = function(e) {
  var t = W3(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, U3 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: $t(255 * [r, i, s, s, c, r][l]), g: $t(255 * [c, r, r, i, s, s][l]), b: $t(255 * [s, s, c, r, r, i][l]), a: $t(o, 2) };
}, bs = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, z3 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? bs($t(255 * o)) : "";
  return "#" + bs(t) + bs(n) + bs(r) + a;
}, B3 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: $t(60 * (i < 0 ? i + 6 : i)), s: $t(a ? s / a * 100 : 0), v: $t(a / 255 * 100), a: o };
}, H3 = E.memo(function(e) {
  var t = e.hue, n = e.onChange, r = xd(["react-colorful__hue", e.className]);
  return E.createElement("div", { className: r }, E.createElement(kx, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: Pa(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": $t(t), "aria-valuemax": "360", "aria-valuemin": "0" }, E.createElement(Mx, { className: "react-colorful__hue-pointer", left: t / 360, color: Vl({ h: t, s: 100, v: 100, a: 1 }) })));
}), Y3 = E.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: Vl({ h: t.h, s: 100, v: 100, a: 1 }) };
  return E.createElement("div", { className: "react-colorful__saturation", style: r }, E.createElement(kx, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: Pa(t.s + 100 * o.left, 0, 100), v: Pa(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + $t(t.s) + "%, Brightness " + $t(t.v) + "%" }, E.createElement(Mx, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Vl(t) })));
}), Dx = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, K3 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Dx(Fl(e), Fl(t));
};
function G3(e, t, n) {
  var r = Il(n), o = J(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = q({ color: t, hsva: a });
  ee(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), ee(function() {
    var l;
    Dx(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = he(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var q3 = typeof window < "u" ? Ma : ee, Z3 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Ep = /* @__PURE__ */ new Map(), X3 = function(e) {
  q3(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Ep.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Ep.set(t, n);
      var r = Z3();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, Q3 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = Ox(e, ["className", "colorModel", "color", "onChange"]), i = q(null);
  X3(i);
  var c = G3(n, o, a), l = c[0], u = c[1], d = xd(["react-colorful", t]);
  return E.createElement("div", tc({}, s, { ref: i, className: d }), E.createElement(Y3, { hsva: l, onChange: u }), E.createElement(H3, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, J3 = { defaultColor: "000", toHsva: F3, fromHsva: function(e) {
  return V3({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: K3 }, e7 = function(e) {
  return E.createElement(Q3, tc({}, e, { colorModel: J3 }));
};
const tR = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ f.exports.jsx(e7, { color: e, onChange: t }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "picker__swatches", children: n.map((r) => /* @__PURE__ */ f.exports.jsx(
    "button",
    {
      className: "picker__swatch",
      style: { background: r },
      onClick: () => t(r)
    },
    r
  )) })
] });
function t7(e, t, n) {
  var r = J([]), o = r[0], a = r[1], s = q([]), i = he(function(d, p) {
    var m = e(d, p), h = m[0], v = m[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), h;
  }, [e]), c = mi(i, n), l = c[0], u = c[1];
  return ee(function() {
    var d = o.pop();
    if (d) {
      var p = t(d, u);
      p && s.current.push(p), a([].concat(o));
    }
  }, [o, t]), ee(function() {
    return function() {
      s.current.forEach(function(d) {
        d();
      });
    };
  }, []), [l, u];
}
function en() {
  return en = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, en.apply(this, arguments);
}
function n7(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var nc = {
  3: "Cancel",
  6: "Help",
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  28: "Convert",
  29: "NonConvert",
  30: "Accept",
  31: "ModeChange",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  41: "Select",
  42: "Print",
  43: "Execute",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  48: ["0", ")"],
  49: ["1", "!"],
  50: ["2", "@"],
  51: ["3", "#"],
  52: ["4", "$"],
  53: ["5", "%"],
  54: ["6", "^"],
  55: ["7", "&"],
  56: ["8", "*"],
  57: ["9", "("],
  91: "OS",
  93: "ContextMenu",
  106: "*",
  107: "+",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  181: "VolumeMute",
  182: "VolumeDown",
  183: "VolumeUp",
  186: [";", ":"],
  187: ["=", "+"],
  188: [",", "<"],
  189: ["-", "_"],
  190: [".", ">"],
  191: ["/", "?"],
  192: ["`", "~"],
  219: ["[", "{"],
  220: ["\\", "|"],
  221: ["]", "}"],
  222: ["'", '"'],
  224: "Meta",
  225: "AltGraph",
  246: "Attn",
  247: "CrSel",
  248: "ExSel",
  249: "EraseEof",
  250: "Play",
  251: "ZoomOut"
}, Dt;
for (Dt = 1; Dt < 25; Dt += 1)
  nc[111 + Dt] = "F" + Dt;
for (Dt = 65; Dt < 91; Dt += 1) {
  var Np = /* @__PURE__ */ String.fromCharCode(Dt);
  nc[Dt] = [/* @__PURE__ */ Np.toLowerCase(), /* @__PURE__ */ Np.toUpperCase()];
}
for (Dt = 96; Dt < 106; Dt += 1)
  nc[Dt] = /* @__PURE__ */ String.fromCharCode(Dt - 48);
function r7(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = nc[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var o7 = {
  getKey: r7
};
function xs() {
}
function Rx(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function a7(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var s7 = ["refs"], Yc = [], i7 = ["autoFocus", "length", "validate", "format", "debug"], c7 = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], l7 = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], u7 = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: xs,
  onRejectKey: xs,
  onChange: xs,
  onComplete: xs,
  debug: !1
};
function d7(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: f7(e.validate),
    fallback: null
  };
}
function jx(e) {
  return Math.max(0, e - 1);
}
function Wl(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function f7(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Pp(e, t, n) {
  var r = n.split("").slice(0, e.codeLength).every(e.isKeyAllowed);
  if (!r)
    return [e, [{
      type: "set-input-val",
      idx: e.focusIdx,
      val: ""
    }, {
      type: "reject-key",
      idx: t,
      key: n
    }, {
      type: "handle-code-change"
    }]];
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = Wl(o + e.focusIdx - 1, e.codeLength), s = Rx(0, o).flatMap(function(i) {
    return [{
      type: "set-input-val",
      idx: i + e.focusIdx,
      val: n[i]
    }, {
      type: "resolve-key",
      idx: i + e.focusIdx,
      key: n[i]
    }];
  });
  return e.focusIdx !== a && s.push({
    type: "focus-input",
    idx: a
  }), s.push({
    type: "handle-code-change"
  }), [en({}, e, {
    focusIdx: a
  }), s];
}
var p7 = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [en({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), Yc];
        case "Dead":
          return [t, [{
            type: "set-input-val",
            idx: t.focusIdx,
            val: ""
          }, {
            type: "reject-key",
            idx: t.focusIdx,
            key: n.key
          }, {
            type: "handle-code-change"
          }]];
        case "ArrowLeft": {
          var r = jx(t.focusIdx);
          return [en({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = Wl(t.focusIdx, t.codeLength);
          return [en({}, t, {
            focusIdx: o
          }), [{
            type: "focus-input",
            idx: o
          }]];
        }
        case "Delete":
        case "Backspace":
          return [t, [{
            type: "handle-delete",
            idx: t.focusIdx
          }, {
            type: "handle-code-change"
          }]];
        default: {
          if (!t.isKeyAllowed(n.key))
            return [t, [{
              type: "reject-key",
              idx: t.focusIdx,
              key: n.key
            }]];
          var a = Wl(t.focusIdx, t.codeLength);
          return [en({}, t, {
            focusIdx: a
          }), [{
            type: "set-input-val",
            idx: t.focusIdx,
            val: n.key
          }, {
            type: "resolve-key",
            idx: t.focusIdx,
            key: n.key
          }, {
            type: "focus-input",
            idx: a
          }, {
            type: "handle-code-change"
          }]];
        }
      }
    case "handle-key-up": {
      if (!t.fallback)
        return [t, Yc];
      var s = en({}, t, {
        fallback: null
      }), i = [], c = t.fallback, l = c.idx, u = c.val, d = n.val;
      if (u === "" && d === "")
        i.push({
          type: "handle-delete",
          idx: l
        }, {
          type: "handle-code-change"
        });
      else if (u === "" && d !== "")
        return Pp(s, l, d);
      return [s, i];
    }
    case "handle-paste":
      return Pp(t, n.idx, n.val);
    case "focus-input":
      return [en({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, Yc];
  }
};
function m7(e) {
  var t = e.refs, n = n7(e, s7);
  return he(function(r) {
    switch (r.type) {
      case "focus-input": {
        t.current[r.idx].focus();
        break;
      }
      case "set-input-val": {
        var o = n.format(r.val);
        t.current[r.idx].value = o;
        break;
      }
      case "resolve-key": {
        t.current[r.idx].setCustomValidity(""), n.onResolveKey(r.key, t.current[r.idx]);
        break;
      }
      case "reject-key": {
        t.current[r.idx].setCustomValidity("Invalid key"), n.onRejectKey(r.key, t.current[r.idx]);
        break;
      }
      case "handle-delete": {
        var a = t.current[r.idx].value;
        if (t.current[r.idx].setCustomValidity(""), t.current[r.idx].value = "", !a) {
          var s = jx(r.idx);
          t.current[s].focus(), t.current[s].setCustomValidity(""), t.current[s].value = "";
        }
        break;
      }
      case "handle-code-change": {
        var i = (n.dir || document.documentElement.getAttribute("dir") || "ltr").toLowerCase(), c = t.current.map(function(u) {
          return u.value.trim();
        }), l = (i === "rtl" ? c.reverse() : c).join("");
        n.onChange(l), l.length === n.length && n.onComplete(l);
        break;
      }
    }
  }, [n, t]);
}
var h7 = /* @__PURE__ */ L(function(e, t) {
  var n = en({}, u7, e), r = n.autoFocus, o = n.length, a = a7([].concat(i7, c7), n), s = q([]), i = m7(en({
    refs: s
  }, n)), c = t7(p7, i, d7(n))[1];
  v0(t, function() {
    return s.current;
  }, [s]);
  function l(v) {
    return function() {
      c({
        type: "focus-input",
        idx: v
      });
    };
  }
  function u(v) {
    return function(g) {
      var x = o7.getKey(g.nativeEvent);
      !l7.includes(x) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
        type: "handle-key-down",
        idx: v,
        key: x,
        val: g.nativeEvent.target.value
      }));
    };
  }
  function d(v) {
    return function(g) {
      g.nativeEvent.target instanceof HTMLInputElement && c({
        type: "handle-key-up",
        idx: v,
        val: g.nativeEvent.target.value
      });
    };
  }
  function p(v) {
    return function(g) {
      g.preventDefault();
      var x = g.clipboardData.getData("Text");
      c({
        type: "handle-paste",
        idx: v,
        val: x
      });
    };
  }
  function m(v) {
    return function(g) {
      g && (s.current[v] = g);
    };
  }
  function h(v) {
    return Boolean(v === 0 && r);
  }
  return E.createElement(E.Fragment, null, Rx(0, o).map(function(v) {
    return E.createElement("input", Object.assign({
      type: "text",
      autoCapitalize: "off",
      autoCorrect: "off",
      autoComplete: "off",
      inputMode: "text"
    }, a, {
      key: v,
      ref: m(v),
      autoFocus: h(v),
      onFocus: l(v),
      onKeyDown: u(v),
      onKeyUp: d(v),
      onPaste: p(v)
    }));
  }));
});
const nR = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = E.useState(!1);
  return /* @__PURE__ */ f.exports.jsx("div", { className: j("pin-field-container", s), children: /* @__PURE__ */ f.exports.jsx(
    h7,
    {
      className: j("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var Ax = {}, yd = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getListFiles = e.getImage = e.getBase64 = e.getAcceptTypeString = e.openFileDialog = void 0, e.openFileDialog = function(t) {
    t.current && t.current.click();
  }, e.getAcceptTypeString = function(t, n) {
    return t != null && t.length ? t.map(function(r) {
      return "." + r;
    }).join(", ") : n ? "" : "image/*";
  }, e.getBase64 = function(t) {
    var n = new FileReader();
    return new Promise(function(r) {
      n.addEventListener("load", function() {
        return r(String(n.result));
      }), n.readAsDataURL(t);
    });
  }, e.getImage = function(t) {
    var n = new Image();
    return new Promise(function(r) {
      n.addEventListener("load", function() {
        return r(n);
      }), n.src = URL.createObjectURL(t);
    });
  }, e.getListFiles = function(t, n) {
    for (var r = [], o = 0; o < t.length; o += 1)
      r.push(e.getBase64(t[o]));
    return Promise.all(r).then(function(a) {
      var s = a.map(function(i, c) {
        var l;
        return l = {}, l[n] = i, l.file = t[c], l;
      });
      return s;
    });
  };
})(yd);
var Ix = {}, Ln = {};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.DEFAULT_DATA_URL_KEY = Ln.INIT_MAX_NUMBER = Ln.DEFAULT_NULL_INDEX = void 0;
Ln.DEFAULT_NULL_INDEX = -1;
Ln.INIT_MAX_NUMBER = 1e3;
Ln.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = gt && gt.__awaiter || function(a, s, i, c) {
    function l(u) {
      return u instanceof i ? u : new i(function(d) {
        d(u);
      });
    }
    return new (i || (i = Promise))(function(u, d) {
      function p(v) {
        try {
          h(c.next(v));
        } catch (g) {
          d(g);
        }
      }
      function m(v) {
        try {
          h(c.throw(v));
        } catch (g) {
          d(g);
        }
      }
      function h(v) {
        v.done ? u(v.value) : l(v.value).then(p, m);
      }
      h((c = c.apply(a, s || [])).next());
    });
  }, n = gt && gt.__generator || function(a, s) {
    var i = { label: 0, sent: function() {
      if (u[0] & 1)
        throw u[1];
      return u[1];
    }, trys: [], ops: [] }, c, l, u, d;
    return d = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function p(h) {
      return function(v) {
        return m([h, v]);
      };
    }
    function m(h) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (c = 1, l && (u = h[0] & 2 ? l.return : h[0] ? l.throw || ((u = l.return) && u.call(l), 0) : l.next) && !(u = u.call(l, h[1])).done)
            return u;
          switch (l = 0, u && (h = [h[0] & 2, u.value]), h[0]) {
            case 0:
            case 1:
              u = h;
              break;
            case 4:
              return i.label++, { value: h[1], done: !1 };
            case 5:
              i.label++, l = h[1], h = [0];
              continue;
            case 7:
              h = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (u = i.trys, !(u = u.length > 0 && u[u.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                i = 0;
                continue;
              }
              if (h[0] === 3 && (!u || h[1] > u[0] && h[1] < u[3])) {
                i.label = h[1];
                break;
              }
              if (h[0] === 6 && i.label < u[1]) {
                i.label = u[1], u = h;
                break;
              }
              if (u && i.label < u[2]) {
                i.label = u[2], i.ops.push(h);
                break;
              }
              u[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          h = s.call(a, i);
        } catch (v) {
          h = [6, v], l = 0;
        } finally {
          c = u = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getErrorValidation = e.isMaxNumberValid = e.isAcceptTypeValid = e.isMaxFileSizeValid = e.isImageValid = e.isResolutionValid = void 0;
  var r = Ln, o = yd;
  e.isResolutionValid = function(a, s, i, c) {
    if (i === void 0 && (i = 0), c === void 0 && (c = 1), !i || !c || !a.width || !a.height)
      return !0;
    switch (s) {
      case "absolute": {
        if (a.width === i && a.height === c)
          return !0;
        break;
      }
      case "ratio": {
        var l = i / c;
        if (a.width / a.height === l)
          return !0;
        break;
      }
      case "less": {
        if (a.width <= i && a.height <= c)
          return !0;
        break;
      }
      case "more": {
        if (a.width >= i && a.height >= c)
          return !0;
        break;
      }
    }
    return !1;
  }, e.isImageValid = function(a) {
    return !!a.includes("image");
  }, e.isMaxFileSizeValid = function(a, s) {
    return s ? a <= s : !0;
  }, e.isAcceptTypeValid = function(a, s) {
    if (a && a.length > 0) {
      var i = s.split(".").pop() || "";
      if (a.findIndex(function(c) {
        return c.toLowerCase() === i.toLowerCase();
      }) < 0)
        return !1;
    }
    return !0;
  }, e.isMaxNumberValid = function(a, s, i) {
    if (s !== 0 && !s)
      return !0;
    if (i === r.DEFAULT_NULL_INDEX) {
      if (a <= s)
        return !0;
    } else if (a <= s + 1)
      return !0;
    return !1;
  }, e.getErrorValidation = function(a) {
    var s = a.fileList, i = a.value, c = a.maxNumber, l = a.keyUpdate, u = a.acceptType, d = a.maxFileSize, p = a.resolutionType, m = a.resolutionWidth, h = a.resolutionHeight, v = a.allowNonImageType;
    return t(void 0, void 0, void 0, function() {
      var g, x, b, y, _;
      return n(this, function($) {
        switch ($.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            x = 0, $.label = 2;
          case 2:
            return x < s.length ? (b = s[x].file, b ? !v && !e.isImageValid(b.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, b.name) ? e.isMaxFileSizeValid(b.size, d) ? p ? [4, o.getImage(b)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (y = $.sent(), _ = e.isResolutionValid(y, p, m, h), !_)
              return g.resolution = !0, [3, 5];
            $.label = 4;
          case 4:
            return x += 1, [3, 2];
          case 5:
            return Object.values(g).find(Boolean) ? [2, g] : [2, null];
        }
      });
    });
  };
})(Ix);
var Ul = gt && gt.__assign || function() {
  return Ul = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ul.apply(this, arguments);
}, v7 = gt && gt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), g7 = gt && gt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), b7 = gt && gt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && v7(t, e, n);
  return g7(t, e), t;
}, Kc = gt && gt.__awaiter || function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(u) {
      try {
        l(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      u.done ? a(u.value) : o(u.value).then(i, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}, Gc = gt && gt.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, s;
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, o && (a = l[0] & 2 ? o.return : l[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, l[1])).done)
          return a;
        switch (o = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
          case 0:
          case 1:
            a = l;
            break;
          case 4:
            return n.label++, { value: l[1], done: !1 };
          case 5:
            n.label++, o = l[1], l = [0];
            continue;
          case 7:
            l = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              n = 0;
              continue;
            }
            if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
              n.label = l[1];
              break;
            }
            if (l[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = l;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(l);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        l = t.call(e, n);
      } catch (u) {
        l = [6, u], o = 0;
      } finally {
        r = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, qc = gt && gt.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(Ax, "__esModule", { value: !0 });
var Jt = b7(E), Zc = yd, x7 = Ix, nr = Ln, y7 = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? nr.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, d = u === void 0 ? nr.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, x = e.inputProps, b = x === void 0 ? {} : x, y = e.allowNonImageType, _ = y === void 0 ? !1 : y, $ = n || [], N = Jt.useRef(null), k = Jt.useState(nr.DEFAULT_NULL_INDEX), S = k[0], P = k[1], Y = Jt.useState(null), U = Y[0], B = Y[1], Z = Jt.useState(!1), F = Z[0], A = Z[1], I = Jt.useCallback(function() {
    return Zc.openFileDialog(N);
  }, [
    N
  ]), W = Jt.useCallback(function() {
    P(nr.DEFAULT_NULL_INDEX), I();
  }, [I]), G = Jt.useCallback(function() {
    r == null || r([]);
  }, [r]), R = function(H) {
    var re = qc($);
    Array.isArray(H) ? H.forEach(function(V) {
      re.splice(V, 1);
    }) : re.splice(H, 1), r == null || r(re);
  }, M = function(H) {
    P(H), I();
  }, K = function(H) {
    return Kc(void 0, void 0, void 0, function() {
      var re;
      return Gc(this, function(V) {
        switch (V.label) {
          case 0:
            return [4, x7.getErrorValidation({
              fileList: H,
              maxFileSize: m,
              maxNumber: d,
              acceptType: p,
              keyUpdate: S,
              resolutionType: g,
              resolutionWidth: h,
              resolutionHeight: v,
              value: $,
              allowNonImageType: _
            })];
          case 1:
            return re = V.sent(), re ? (B(re), o == null || o(re, H), [2, !1]) : (U && B(null), [2, !0]);
        }
      });
    });
  }, X = function(H) {
    return Kc(void 0, void 0, void 0, function() {
      var re, V, de, ve, ye, O;
      return Gc(this, function(z) {
        switch (z.label) {
          case 0:
            return H ? [4, Zc.getListFiles(H, i)] : [
              2
              /*return*/
            ];
          case 1:
            return re = z.sent(), re.length ? [4, K(re)] : [
              2
              /*return*/
            ];
          case 2:
            if (V = z.sent(), !V)
              return [
                2
                /*return*/
              ];
            if (ve = [], S > nr.DEFAULT_NULL_INDEX)
              ye = re[0], de = qc($), de[S] = ye, ve.push(S);
            else if (l)
              for (de = qc($, re), O = $.length; O < de.length; O += 1)
                ve.push(O);
            else
              de = [re[0]], ve.push(0);
            return r == null || r(de, ve), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ae = function(H) {
    return Kc(void 0, void 0, void 0, function() {
      return Gc(this, function(re) {
        switch (re.label) {
          case 0:
            return [4, X(H.target.files)];
          case 1:
            return re.sent(), S > nr.DEFAULT_NULL_INDEX && P(nr.DEFAULT_NULL_INDEX), N.current && (N.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ne = Jt.useMemo(function() {
    return Zc.getAcceptTypeString(p, _);
  }, [p, _]), ge = function(H) {
    H.preventDefault(), H.stopPropagation();
  }, be = function(H) {
    H.preventDefault(), H.stopPropagation(), H.dataTransfer.items && H.dataTransfer.items.length > 0 && A(!0);
  }, oe = function(H) {
    H.preventDefault(), H.stopPropagation(), A(!1);
  }, ie = function(H) {
    H.preventDefault(), H.stopPropagation(), A(!1), H.dataTransfer.files && H.dataTransfer.files.length > 0 && X(H.dataTransfer.files);
  }, pe = function(H) {
    H.preventDefault(), H.stopPropagation(), H.dataTransfer.clearData();
  };
  return Jt.default.createElement(
    Jt.default.Fragment,
    null,
    Jt.default.createElement("input", Ul({ type: "file", accept: ne, ref: N, multiple: l && S === nr.DEFAULT_NULL_INDEX, onChange: ae, style: { display: "none" } }, b)),
    a == null ? void 0 : a({
      imageList: $,
      onImageUpload: W,
      onImageRemoveAll: G,
      onImageUpdate: M,
      onImageRemove: R,
      errors: U,
      dragProps: {
        onDrop: ie,
        onDragEnter: be,
        onDragLeave: oe,
        onDragOver: ge,
        onDragStart: pe
      },
      isDragging: F
    })
  );
}, Lx = Ax.default = y7;
const w7 = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Fx = ({
  resizer: e,
  imageFile: t,
  maxWidth: n = 1080,
  // Nueva resolución horizontal
  maxHeight: r = 720,
  // Nueva resolución vertical
  compressFormat: o = "png",
  // Formato de salida (JPEG, PNG, WEBP)
  quality: a = 80,
  // Calidad de compresión (0-100)
  rotation: s = 0,
  // Rotación en grados (0, 90, 180, 270)
  outputType: i = "base64"
}) => new Promise((c) => {
  e == null || e.imageFileResizer(
    t,
    n,
    r,
    o,
    a,
    s,
    async (l) => {
      const u = w7(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
});
function ui(e, t) {
  fetch(e).then((n) => n.blob()).then((n) => {
    const r = window.URL.createObjectURL(new Blob([n])), o = document.createElement("a");
    o.href = r, o.setAttribute("download", t || "imagen.jpg"), document.body.appendChild(o), o.click();
  });
}
const $7 = (e) => {
  const { imageIndex: t, compress: n, disabled: r, tabIndexs: o, onImageUpdate: a, setUploadImage: s, onImageRemove: i, setLocalImage: c, download: l, handleOnRemove: u, edit: d, src: p } = e;
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !r && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(mx, { size: 16 })
      }
    ),
    !r && d && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.change,
        onClick: () => a(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Zp, { size: 16 })
      }
    ),
    !r && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        tabIndex: o == null ? void 0 : o.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          u(t), i(t), c([]), s({ original: null, compressed: null });
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Xp, { size: 16 })
      }
    ),
    l && p && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => ui(p, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Ms, { size: 16 })
      }
    )
  ] });
}, _7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: j(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ f.exports.jsx(
        Fe,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: j("mt-2", t && "text-indigo-600", a && "cursor-not-allowed"),
          onClick: s,
          children: /* @__PURE__ */ f.exports.jsx(Zl, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), Vx = ({ src: e, containerClassName: t, imageClassName: n, zoom: r, fallback: o, download: a, filename: s }) => {
  const [i, c] = J(!1);
  return r ? /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit relative", children: [
    a && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "button",
        onClick: () => ui(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Ms, { size: 18 })
      }
    ),
    /* @__PURE__ */ f.exports.jsxs(qh, { open: i, onOpenChange: c, children: [
      /* @__PURE__ */ f.exports.jsxs(lo, { className: j("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
        /* @__PURE__ */ f.exports.jsx(
          Or,
          {
            src: e,
            className: j("aspect-video w-auto rounded-md object-contain m-auto h-full cursor-zoom-in", n),
            onClick: () => c(!0)
          }
        ),
        /* @__PURE__ */ f.exports.jsx(uo, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(ic, {}) })
      ] }),
      /* @__PURE__ */ f.exports.jsx(Uu, { className: "p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none", style: { background: "transparent !important" }, onClick: () => c(!1), children: /* @__PURE__ */ f.exports.jsxs(lo, { className: j("w-full h-full rounded-md"), children: [
        /* @__PURE__ */ f.exports.jsx(Or, { src: e, className: j("aspect-video rounded-md object-contain m-auto h-full"), style: { width: "-webkit-fill-available" } }),
        /* @__PURE__ */ f.exports.jsx(uo, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(ic, {}) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx("div", { className: "w-full", children: /* @__PURE__ */ f.exports.jsxs(lo, { className: j("relative w-full h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
    a && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "button",
        onClick: () => ui(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Ms, { size: 18 })
      }
    ),
    /* @__PURE__ */ f.exports.jsx(Or, { src: e, className: j("aspect-video w-auto rounded-md object-contain m-auto h-full", n), style: { width: "-webkit-fill-available" } }),
    /* @__PURE__ */ f.exports.jsx(uo, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(ic, {}) })
  ] }) });
}, rR = (e) => {
  const { edit: t = !0, initialPreview: n = null, setUploadImage: r, format: o, label: a, uploadLabel: s, tabIndexs: i, disabled: c, emptyClassName: l, imageContainerClassName: u, zoom: d, compress: p, download: m, onRemove: h, onEdit: v } = e, [g, x] = J(n ? [{ data_url: n, file: null }] : []), b = async (_, $) => {
    var P, Y, U, B, Z, F, A, I, W, G;
    const N = (P = _[0]) == null ? void 0 : P.file, k = (Y = _[0]) == null ? void 0 : Y.data_url;
    N || (x([]), r({ original: null, compressed: null })), x(_);
    const S = ks((U = _[0]) == null ? void 0 : U.file.size);
    if (p != null && p.resizer && N) {
      const { data_url: R, file: M } = await Fx({
        resizer: p == null ? void 0 : p.resizer,
        imageFile: N,
        quality: (o == null ? void 0 : o.quality) || 10,
        maxWidth: (o == null ? void 0 : o.width) || 500,
        maxHeight: (o == null ? void 0 : o.width) || 500,
        compressFormat: (o == null ? void 0 : o.extension) || "png",
        rotation: (o == null ? void 0 : o.rotation) || 0
      }), K = ks(M.size);
      r({
        original: {
          preview: k,
          file: N,
          size: {
            formated: S,
            bytes: (B = _[0]) == null ? void 0 : B.file.size
          }
        },
        compressed: {
          preview: R == null ? void 0 : R.toString(),
          file: M,
          size: {
            formated: K,
            bytes: M.size
          }
        }
      });
      return;
    }
    v && (Z = _[0]) != null && Z.data_url && v({
      data_url: ((F = _[0]) == null ? void 0 : F.data_url) || null,
      file: ((A = _[0]) == null ? void 0 : A.file) || null
    }), r({
      original: {
        preview: (I = _[0]) == null ? void 0 : I.data_url,
        file: (W = _[0]) == null ? void 0 : W.file,
        size: { formated: S, bytes: (G = _[0]) == null ? void 0 : G.file.size }
      },
      compressed: null
    });
  }, y = (_) => {
    _ == null || !g || !g.length || h && h(g[_]);
  };
  return ee(() => {
    n && x([{ data_url: n, file: null }]);
  }, [n]), /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full", children: [
    a && /* @__PURE__ */ f.exports.jsx(Tn, { children: a }),
    a && /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Lx,
      {
        value: g,
        onChange: b,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: _, onImageUpload: $, onImageUpdate: N, onImageRemove: k, isDragging: S, dragProps: P }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: _.length >= 1 ? /* @__PURE__ */ f.exports.jsx("div", { children: _.map((Y, U) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          /* @__PURE__ */ f.exports.jsx(
            Vx,
            {
              zoom: d,
              src: Y == null ? void 0 : Y.data_url,
              containerClassName: u
            }
          ),
          /* @__PURE__ */ f.exports.jsx(
            $7,
            {
              edit: t,
              imageIndex: U,
              compress: p,
              disabled: c,
              download: m,
              tabIndexs: i,
              src: Y == null ? void 0 : Y.data_url,
              onImageRemove: k,
              onImageUpdate: N,
              setLocalImage: x,
              setUploadImage: r,
              handleOnRemove: y
            }
          )
        ] }, U)) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
          _7,
          {
            dragProps: P,
            emptyClassName: l,
            isDragging: S,
            onImageUpload: $,
            tabIndexs: i,
            uploadLabel: s,
            disabled: c
          }
        ) }) })
      }
    )
  ] });
}, C7 = (e) => {
  const { imageIndex: t, compress: n, tabIndexs: r, onImageUpdate: o, onImageRemove: a, disabled: s, download: i, handleOnRemoveImage: c, src: l, edit: u } = e;
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !s && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(mx, { size: 16 })
      }
    ),
    !s && u && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.change,
        onClick: () => o(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Zp, { size: 16 })
      }
    ),
    !s && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        tabIndex: r == null ? void 0 : r.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          c(t), a(t);
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Xp, { size: 16 })
      }
    ),
    i && l && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => ui(l, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Ms, { size: 16 })
      }
    )
  ] });
}, S7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: j(
      `${t ? "border-indigo-600" : "border-muted-foreground"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ f.exports.jsx(
        Fe,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: s,
          children: /* @__PURE__ */ f.exports.jsx(Zl, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), oR = (e) => {
  const { edit: t = !0, label: n, setUploadImages: r, format: o, uploadLabel: a, tabIndexs: s, emptyClassName: i, imageContainerClassName: c, zoom: l, compress: u, limit: d, initialPreview: p, disabled: m, download: h, onRemove: v, onEdit: g } = e, [x, b] = J([]);
  ee(() => {
    p && p.length && b([...p]);
  }, [p]);
  const y = async ($, N) => {
    b($);
    const k = $.map(async (S) => {
      var P, Y, U, B;
      if (u != null && u.resizer && (S != null && S.file) && !((P = S == null ? void 0 : S.file) != null && P.compressed)) {
        const { data_url: Z, file: F } = await Fx({
          imageFile: S == null ? void 0 : S.file,
          resizer: u == null ? void 0 : u.resizer,
          quality: (o == null ? void 0 : o.quality) || 10,
          maxWidth: (o == null ? void 0 : o.width) || 500,
          maxHeight: (o == null ? void 0 : o.width) || 500,
          rotation: (o == null ? void 0 : o.rotation) || 0,
          compressFormat: (o == null ? void 0 : o.extension) || "png"
        }), A = ks(F == null ? void 0 : F.size), I = {
          original: {
            preview: S == null ? void 0 : S.data_url,
            file: S == null ? void 0 : S.file,
            size: {
              formated: (Y = S == null ? void 0 : S.file) != null && Y.size ? ks((U = S == null ? void 0 : S.file) == null ? void 0 : U.size) : null,
              bytes: ((B = S == null ? void 0 : S.file) == null ? void 0 : B.size) || null
            }
          },
          compressed: {
            preview: Z == null ? void 0 : Z.toString(),
            file: F,
            size: {
              formated: A,
              bytes: F == null ? void 0 : F.size
            }
          }
        };
        return {
          ...S,
          file: I,
          data_url: S == null ? void 0 : S.data_url
        };
      } else
        return {
          ...S,
          file: (S == null ? void 0 : S.file) || null
        };
    });
    if (g && N) {
      const S = $[N[0]];
      S != null && S.data_url && g({
        data_url: (S == null ? void 0 : S.data_url) || null,
        file: (S == null ? void 0 : S.file) || null
      });
    }
    Promise.all(k).then((S) => {
      r(S);
    });
  }, _ = ($) => {
    $ == null || !x || !x.length || v && v(x[$]);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { children: [
    n && /* @__PURE__ */ f.exports.jsx(Tn, { children: n }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Lx,
      {
        multiple: !0,
        value: x,
        dataURLKey: "data_url",
        onChange: y,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: d,
        children: ({ imageList: $, onImageUpload: N, onImageUpdate: k, onImageRemove: S, isDragging: P, dragProps: Y }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: $.length >= 1 ? /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `grid ${d === 1 || !d ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              $.map((U, B) => /* @__PURE__ */ f.exports.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    /* @__PURE__ */ f.exports.jsx(
                      Vx,
                      {
                        zoom: l,
                        src: U == null ? void 0 : U.data_url,
                        containerClassName: c
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx(
                      C7,
                      {
                        edit: t,
                        imageIndex: B,
                        download: h,
                        compress: u,
                        disabled: m,
                        tabIndexs: s,
                        src: U == null ? void 0 : U.data_url,
                        onImageRemove: S,
                        onImageUpdate: k,
                        handleOnRemoveImage: _
                      }
                    )
                  ]
                },
                B
              )),
              x.length < d && /* @__PURE__ */ f.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  ...Y,
                  className: j(
                    `w-full h-[237px] ${P ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    c
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(
                    Fe,
                    {
                      size: "icon",
                      type: "button",
                      variant: "outline",
                      tabIndex: s == null ? void 0 : s.upload,
                      disabled: m,
                      className: `mt-2 ${P && "text-indigo-600"}`,
                      onClick: N,
                      children: /* @__PURE__ */ f.exports.jsx(Zl, { size: 24 })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ f.exports.jsx(
          S7,
          {
            dragProps: Y,
            emptyClassName: i,
            isDragging: P,
            onImageUpload: N,
            tabIndexs: s,
            uploadLabel: a,
            disabled: m
          }
        ) })
      }
    )
  ] });
};
function aR({
  id: e,
  form: t,
  label: n,
  items: r,
  disabled: o,
  tabIndex: a,
  isLoading: s,
  placeholder: i,
  defaultValue: c,
  notFoundLabel: l,
  ctaPlaceholder: u,
  buttonClassName: d,
  popoverClassName: p
}) {
  const [m, h] = J(!1);
  return s ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full"), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
      Pt,
      {
        className: j("w-full h-9 mt-2")
      }
    ) })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Hr,
    {
      control: t.control,
      name: e,
      defaultValue: c,
      render: ({ field: v }) => {
        var g;
        return /* @__PURE__ */ f.exports.jsxs(wr, { className: "flex flex-col", children: [
          /* @__PURE__ */ f.exports.jsx(Tn, { children: n }),
          /* @__PURE__ */ f.exports.jsxs(Un, { open: m, onOpenChange: h, children: [
            /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Fe,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: j("w-min justify-between", !v.value && "text-muted-foreground", `${d}`),
                children: [
                  v.value ? (g = r.find((x) => {
                    var b, y;
                    return ((b = x == null ? void 0 : x.value) == null ? void 0 : b.toUpperCase()) === ((y = v == null ? void 0 : v.value) == null ? void 0 : y.toUpperCase());
                  })) == null ? void 0 : g.label : u,
                  /* @__PURE__ */ f.exports.jsx(rl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(_n, { className: j("w-[200px] p-0", p), children: /* @__PURE__ */ f.exports.jsxs(Bn, { children: [
              /* @__PURE__ */ f.exports.jsx(fr, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(pr, { children: l }),
              /* @__PURE__ */ f.exports.jsx(dn, { children: r.map((x) => /* @__PURE__ */ f.exports.jsxs(
                fn,
                {
                  value: x.value,
                  onSelect: (b) => {
                    t.setValue(e, b, { shouldDirty: !0 }), h(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (x == null ? void 0 : x.image) && /* @__PURE__ */ f.exports.jsx("img", { src: x.image, alt: x.label, width: 40, className: "mr-2" }),
                    (x == null ? void 0 : x.icon) && x.icon,
                    x.label,
                    /* @__PURE__ */ f.exports.jsx(
                      g4,
                      {
                        className: j(
                          "ml-auto h-4 w-4",
                          x.value === v.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                x.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  );
}
function E7({
  id: e,
  form: t,
  label: n,
  items: r,
  rules: o,
  value: a,
  disabled: s,
  setValue: i,
  tabIndex: c,
  placeholder: l,
  defaultValue: u,
  notFoundLabel: d,
  ctaPlaceholder: p,
  buttonClassName: m,
  popoverClassName: h
}) {
  var x;
  const [v, g] = J(!1);
  return t ? /* @__PURE__ */ f.exports.jsx(
    Hr,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: b, formState: y }) => {
        var _, $, N;
        return /* @__PURE__ */ f.exports.jsxs(wr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
            n,
            " ",
            (($ = (_ = y.errors) == null ? void 0 : _.pidType) == null ? void 0 : $.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              y.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsxs(Un, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, disabled: s, children: /* @__PURE__ */ f.exports.jsxs(
              Fe,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: j("w-min justify-between", !b.value && "text-muted-foreground", `${m}`),
                children: [
                  b.value ? (N = r.find((k) => k.value === b.value)) == null ? void 0 : N.label : p,
                  /* @__PURE__ */ f.exports.jsx(rl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(_n, { className: j("w-[200px] p-0", h), children: /* @__PURE__ */ f.exports.jsxs(Bn, { children: [
              /* @__PURE__ */ f.exports.jsx(fr, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(pr, { children: d }),
              /* @__PURE__ */ f.exports.jsx(dn, { children: r.map((k) => /* @__PURE__ */ f.exports.jsxs(
                fn,
                {
                  value: k.value,
                  onSelect: (S) => {
                    t.setValue(e, S), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (k == null ? void 0 : k.image) && /* @__PURE__ */ f.exports.jsx("img", { src: k.image, alt: k.label, width: 40, className: "mr-2" }),
                    (k == null ? void 0 : k.icon) && k.icon,
                    k.label,
                    /* @__PURE__ */ f.exports.jsx(
                      ln,
                      {
                        className: j(
                          "ml-auto h-4 w-4",
                          k.value === b.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                k.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  ) : /* @__PURE__ */ f.exports.jsxs(Un, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Fe,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (x = r.find((b) => b.value === a)) == null ? void 0 : x.label : p,
          /* @__PURE__ */ f.exports.jsx(rl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(_n, { className: "w-full p-0", children: /* @__PURE__ */ f.exports.jsxs(Bn, { children: [
      /* @__PURE__ */ f.exports.jsx(fr, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ f.exports.jsx(pr, { children: d }),
      /* @__PURE__ */ f.exports.jsx(dn, { children: r.map((b) => /* @__PURE__ */ f.exports.jsxs(
        fn,
        {
          onSelect: (y) => {
            i(y === a ? "" : y), g(!1);
          },
          children: [
            b.label,
            /* @__PURE__ */ f.exports.jsx(
              ln,
              {
                className: j(
                  "ml-auto h-4 w-4",
                  a === b.value ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        b.value
      )) })
    ] }) })
  ] });
}
const N7 = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i, disabled: c }) => {
  const l = q(null), [u, d] = J(null);
  return ee(() => {
    const p = l.current;
    if (!p)
      return;
    const m = new ResizeObserver((h) => {
      const v = h[0].contentRect.width;
      d(v);
    });
    return m.observe(p), () => {
      m.unobserve(p), m.disconnect();
    };
  }, []), /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full space-y-2", s), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(Tn, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ f.exports.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ f.exports.jsxs(Un, { children: [
      /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, disabled: c, children: /* @__PURE__ */ f.exports.jsxs(
        Fe,
        {
          ref: l,
          type: "button",
          variant: "outline",
          disabled: c,
          size: "sm",
          className: "py-5 border w-full justify-start",
          tabIndex: o,
          children: [
            t && t,
            !a.length && /* @__PURE__ */ f.exports.jsx("span", { className: "text-muted-foreground font-normal", children: n || "Seleccione alguna opción" }),
            a.length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
              /* @__PURE__ */ f.exports.jsxs(
                Rt,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal lg:hidden",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ),
              /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: a.length > 2 ? /* @__PURE__ */ f.exports.jsxs(
                Rt,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((p) => /* @__PURE__ */ f.exports.jsx(
                Rt,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: p.label
                },
                p.id
              )) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(_n, { style: { width: u + 24 }, className: j("w-full p-0", i), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Bn, { children: [
        /* @__PURE__ */ f.exports.jsx(fr, { placeholder: r }),
        /* @__PURE__ */ f.exports.jsxs(Xa, { children: [
          /* @__PURE__ */ f.exports.jsx(pr, { children: "Sin Resultados" }),
          /* @__PURE__ */ f.exports.jsx(dn, { children: a.map((p) => /* @__PURE__ */ f.exports.jsxs(
            fn,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ f.exports.jsx(
                  "div",
                  {
                    className: j(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ f.exports.jsx(ln, { className: j("h-4 w-4") })
                  }
                ),
                /* @__PURE__ */ f.exports.jsx("span", { children: p.label })
              ]
            },
            p.id
          )) })
        ] })
      ] }) })
    ] })
  ] });
}, P7 = (e) => {
  var k;
  const { form: t, id: n, description: r, icon: o, placeholder: a, label: s, tabIndex: i, items: c, classNameContainer: l, classNamePopover: u, disabled: d } = e, [p, m] = J([]), [h, v] = J(null), g = q(null), x = (k = t == null ? void 0 : t.formState) == null ? void 0 : k.defaultValues[n], b = (S) => ({
    ...S,
    selected: x ? x.includes(S.value) : !1
  }), y = _t(() => c.map(b), [x]), _ = _t(() => p.filter((P) => P.selected).map((P) => P.value), [p]), $ = () => m(
    (S) => S.map((P) => ({ ...P, selected: !1 }))
  ), N = (S, P) => {
    const Y = p.map((U) => U.id === S ? { ...U, selected: P } : U);
    m(Y), t.setValue(
      n,
      Y.filter((U) => U.selected).map((U) => U.value),
      { shouldDirty: !0 }
    );
  };
  return ee(() => {
    const S = g.current;
    if (!S)
      return;
    const P = new ResizeObserver((Y) => {
      const U = Y[0].contentRect.width;
      v(U);
    });
    return P.observe(S), () => {
      P.unobserve(S), P.disconnect();
    };
  }, []), ee(() => {
    m(y);
  }, [y]), /* @__PURE__ */ f.exports.jsx(
    Hr,
    {
      control: t.control,
      name: n,
      render: ({ field: S, formState: P }) => {
        var Y;
        return /* @__PURE__ */ f.exports.jsxs(wr, { className: j("w-full space-y-2", l), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            s && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
              s,
              " "
            ] }),
            ((Y = P == null ? void 0 : P.errors[n]) == null ? void 0 : Y.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              P.errors[n].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(ko, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsxs(Un, { children: [
            /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, disabled: d, children: /* @__PURE__ */ f.exports.jsxs(
              Fe,
              {
                ref: g,
                type: "button",
                variant: "outline",
                size: "sm",
                disabled: d,
                className: "py-5 border w-full justify-start",
                tabIndex: i,
                children: [
                  o && o,
                  !_.length && /* @__PURE__ */ f.exports.jsx("span", { className: "text-muted-foreground font-normal", children: a || "Seleccione alguna opción" }),
                  _.length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                    /* @__PURE__ */ f.exports.jsxs(
                      Rt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal lg:hidden",
                        children: [
                          _.length,
                          " seleccionados"
                        ]
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: _.length > 2 ? /* @__PURE__ */ f.exports.jsxs(
                      Rt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          _.length,
                          " seleccionados"
                        ]
                      }
                    ) : p.filter((U) => U.selected).map((U) => /* @__PURE__ */ f.exports.jsx(
                      Rt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: U.label
                      },
                      U.value.toString()
                    )) })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx("style", { children: `
                .combox-checkbox-content {
                    min-width: 150px !important;
                    width: ${h + 24}px !important;
                  }

                  .checkbox-tooltip-content {
                    min-width: 150px !important;
                    width: ${h + 10}px !important;
                  }
                ` }),
            /* @__PURE__ */ f.exports.jsx(
              _n,
              {
                className: j("w-full p-0 combox-checkbox-content", u),
                align: "start",
                children: /* @__PURE__ */ f.exports.jsxs(Bn, { style: { width: "50px !important" }, children: [
                  /* @__PURE__ */ f.exports.jsx(fr, { placeholder: s }),
                  /* @__PURE__ */ f.exports.jsxs(Xa, { children: [
                    /* @__PURE__ */ f.exports.jsx(pr, { children: "Sin Resultados" }),
                    /* @__PURE__ */ f.exports.jsx(dn, { children: p.map((U) => /* @__PURE__ */ f.exports.jsx(Hn, { children: /* @__PURE__ */ f.exports.jsxs(Yn, { delayDuration: 150, children: [
                      /* @__PURE__ */ f.exports.jsx(Kn, { className: "w-full", children: /* @__PURE__ */ f.exports.jsxs(
                        fn,
                        {
                          onSelect: () => {
                            U.selected ? N(U.id, !1) : N(U.id, !0);
                          },
                          children: [
                            /* @__PURE__ */ f.exports.jsx(
                              "div",
                              {
                                className: j(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  U.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ f.exports.jsx(ln, { className: j("h-4 w-4") })
                              }
                            ),
                            U.icon,
                            /* @__PURE__ */ f.exports.jsx("span", { className: "truncate", children: U.label })
                          ]
                        },
                        U.value.toString()
                      ) }),
                      /* @__PURE__ */ f.exports.jsx(Cn, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ f.exports.jsx("p", { children: U.label }) })
                    ] }) })) }),
                    _.length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                      /* @__PURE__ */ f.exports.jsx(zi, {}),
                      /* @__PURE__ */ f.exports.jsx(dn, { children: /* @__PURE__ */ f.exports.jsx(
                        fn,
                        {
                          onSelect: () => {
                            t.setValue(n, []), $();
                          },
                          className: "justify-center text-center",
                          children: "Limpiar"
                        }
                      ) })
                    ] })
                  ] })
                ] })
              }
            )
          ] })
        ] });
      }
    }
  );
}, sR = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, disabled: l, ...u }) => i ? /* @__PURE__ */ f.exports.jsx(
  N7,
  {
    label: o,
    description: t,
    classNameContainer: s,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    disabled: l,
    form: (u == null ? void 0 : u.form) || null,
    items: (u == null ? void 0 : u.items) || []
  }
) : /* @__PURE__ */ f.exports.jsx(
  P7,
  {
    id: e,
    label: o,
    classNameContainer: s,
    description: t,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    disabled: l,
    form: (u == null ? void 0 : u.form) || null,
    items: (u == null ? void 0 : u.items) || []
  }
);
function T7({
  isOpen: e,
  onClose: t,
  children: n
}) {
  return /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      className: `fixed z-30 inset-0 bg-opacity-50  transition-opacity ${e ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { className: "fixed z-50 inset-y-0  right-0  flex", children: /* @__PURE__ */ f.exports.jsx(
          "div",
          {
            className: "max-w-[250px] h-full overflow-y-scroll rounded-l-xl border-l-[1.5px] bg-brand-sidebar-background text-brand-sidebar-text",
            children: n
          }
        ) }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "h-full", onClick: t })
      ]
    }
  );
}
function Tp({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ f.exports.jsx(Hn, { children: /* @__PURE__ */ f.exports.jsxs(Yn, { children: [
    /* @__PURE__ */ f.exports.jsx(Kn, { children: /* @__PURE__ */ f.exports.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        "data-testId": `bottom-sidebar-${t}`,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ f.exports.jsx(
          gx,
          {
            Link: r,
            to: o ? o.path : "/",
            pathname: o ? o.path : "/",
            label: t,
            icon: e,
            isBottomNavLink: !0
          }
        )
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(Cn, { children: t })
  ] }) });
}
function O7({
  profile: e
}) {
  return /* @__PURE__ */ f.exports.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ f.exports.jsxs(lo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ f.exports.jsx(Or, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ f.exports.jsx(uo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(Or, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(Rt, { className: "w-full", children: e.role })
    ] })
  ] });
}
const k7 = ({ isExpanded: e, theme: t }) => {
  const [n, r] = J(!1), { value: o, toggleTheme: a } = t;
  return ee(() => {
    r(!0);
  }, []), n ? /* @__PURE__ */ f.exports.jsx(
    "button",
    {
      onClick: a,
      "data-testId": "theme-sidebar-bottom-btn",
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
      children: o === "light" ? /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(px, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(vx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function M7({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(k7, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
        "button",
        {
          onClick: t,
          "data-testId": "toggle-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(qp, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
          ]
        }
      ) }),
      e.logout && /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
        "button",
        {
          onClick: () => {
            e.logout();
          },
          "data-testId": "logout-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(Gp, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function D7({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx(O7, { profile: a }),
    /* @__PURE__ */ f.exports.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ f.exports.jsx(
        gx,
        {
          to: s.to,
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          Link: o
        },
        i
      )),
      t && t.map((s, i) => /* @__PURE__ */ f.exports.jsx(
        C4,
        {
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          sublinks: s.subLinks,
          Link: o
        },
        i
      )),
      /* @__PURE__ */ f.exports.jsx(
        M7,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function iR({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = J(!1);
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-brand-sidebar-background border-t border-gray-200 dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-between h-full max-w-lg  mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ f.exports.jsx(
        Tp,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ f.exports.jsx(
        Tp,
        {
          icon: /* @__PURE__ */ f.exports.jsx(qp, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      T7,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ f.exports.jsx(
          D7,
          {
            Link: o,
            sidebar: r,
            navLinksItems: t,
            subLinksItems: n,
            onCloseSideBar: () => s(!1)
          }
        )
      }
    )
  ] });
}
const qr = bt({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: !0,
  searchForm: null,
  multiSelectedItems: [],
  limitOfMultiSelect: 0,
  setMultiItemsSelected: () => {
  },
  onSubmitTable: null,
  setSearchForm: () => {
  },
  setSelectItem: () => {
  },
  getGlobalFilters: () => {
  },
  resetOptionsByFilter: () => {
  },
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: !1,
    hasNextPage: !1
  }
});
function R7() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Qe(qr);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        Ku,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(Ii, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(Gu, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Li, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(Fi, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Fe,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(ql, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Fe,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ f.exports.jsx(Wr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const cR = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, j7 = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), lR = {
  limit: 10,
  page: 1
}, Xc = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), uR = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], A7 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), I7 = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ f.exports.jsx("div", { children: r.render(o) }, Xc()) : /* @__PURE__ */ f.exports.jsx(qt, { children: o[r.id] }, Xc());
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((r) => /* @__PURE__ */ f.exports.jsx(gv, { children: t.map((o) => n(o, r)) }, Xc())) });
}, Wx = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Qe(qr), [s, i] = J(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    I7,
    {
      setMultiItemsSelected: r,
      setSelectItem: n,
      setItemsSelectedCount: i,
      itemsSelectedCount: s,
      data: e,
      multiItemsSelected: o,
      columns: t,
      limitOfMultiSelect: a
    }
  ) : /* @__PURE__ */ f.exports.jsx(A7, {}) });
}, L7 = () => /* @__PURE__ */ f.exports.jsx(Wx, {}), F7 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), V7 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(F7, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), W7 = () => {
  const { showFilters: e, setShowFilters: t } = Qe(qr);
  return /* @__PURE__ */ f.exports.jsxs(
    Fe,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(dx, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, U7 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Qe(qr), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(Un, { children: [
    /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Fe, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ f.exports.jsx(fx, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Ka, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          Rt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          Rt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ f.exports.jsx(
          Rt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(_n, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Bn, { children: [
      /* @__PURE__ */ f.exports.jsx(fr, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Xa, { children: [
        /* @__PURE__ */ f.exports.jsx(pr, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(dn, { children: o.map((u) => /* @__PURE__ */ f.exports.jsxs(
          fn,
          {
            onSelect: () => {
              u.selected ? s(e, u.id, !1) : s(e, u.id, !0);
            },
            children: [
              /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  className: j(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(ln, { className: j("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(zi, {}),
          /* @__PURE__ */ f.exports.jsx(dn, { children: /* @__PURE__ */ f.exports.jsx(
            fn,
            {
              onSelect: () => l(e),
              className: "justify-center text-center",
              children: "Limpiar Filtros"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}, z7 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(Un, { children: [
  /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Fe, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(Ds, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(Ka, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ f.exports.jsx(
        Rt,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ f.exports.jsxs(_n, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(Tn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      zu,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), B7 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = Qe(qr), l = e.watch(n.map((d) => d.id)), u = () => {
    var p;
    a();
    const d = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((m) => {
      m[1] && d.push({
        field: Uo(m[0]),
        text: m[1]
      });
    }), s({ queries: d, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ f.exports.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ f.exports.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((d, p) => /* @__PURE__ */ f.exports.jsx(
          z7,
          {
            queryText: l[p],
            label: d.label,
            id: d.id,
            form: e
          },
          d.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ f.exports.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ f.exports.jsx(W7, {}),
      o && r && r.map((d) => /* @__PURE__ */ f.exports.jsx(
        U7,
        {
          onSubmit: t,
          form: e,
          id: d.id,
          icon: d.icon,
          label: d.label,
          options: d.options
        },
        d.id
      )),
      o && (r != null && r.filter(
        (d) => d.options.some((p) => p.selected)
      ).length) ? /* @__PURE__ */ f.exports.jsxs(
        Fe,
        {
          type: "button",
          variant: "ghost",
          onClick: u,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(gi, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, H7 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = Qe(qr), c = Ih({
    defaultValues: n.reduce((u, d) => (u[d.id] = "", u), {}),
    resolver: wx(
      li.object(
        n.reduce((u, d) => (u[d.id] = li.string().optional(), u), {})
      )
    )
  }), l = async (u) => {
    var m;
    console.log({ data: u });
    const d = r(), p = [];
    (m = Object.entries(u)) == null || m.forEach((h) => {
      h[1] && p.push({
        field: Uo(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: d, limit: s, page: a });
  };
  return ee(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Fh, { ...c, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(B7, { form: c, onSubmit: l }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Gl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(hx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, Y7 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), K7 = () => /* @__PURE__ */ f.exports.jsx(Wx, {}), G7 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function dR(e) {
  const [t, n] = J([]), [r, o] = J([]), [a, s] = J([]), [i, c] = J(!1), [l, u] = J(e == null ? void 0 : e.error), [d, p] = J(e == null ? void 0 : e.loading), [m, h] = J(), [v, g] = J(
    (e == null ? void 0 : e.pagination) ?? G7
  ), [x, b] = J(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: y } = e, _ = he(
    (A) => e.onSubmitTable({ ...A }),
    [e]
  ), $ = he(
    (A) => {
      var R;
      g(A);
      const I = m.getValues(), W = [];
      (R = Object.entries(I)) == null || R.forEach((M) => {
        M[1] && W.push({
          field: j7(M[0]),
          text: M[1]
        });
      });
      const G = r.map((M) => ({
        id: M.id,
        label: M.label,
        options: M.options.filter((K) => K.selected).map((K) => K.value)
      })).filter((M) => M.options.length > 0);
      _({
        filters: G,
        queries: W,
        limit: A.limit,
        page: A.page
      });
    },
    [r, _, m]
  ), N = he(() => {
    $({ ...v, page: v.page + 1 });
  }, [v, $]), k = he(() => {
    v.page > 1 && $({ ...v, page: v.page - 1 });
  }, [v, $]), S = () => r.map((A) => ({
    id: A.id,
    label: A.label,
    options: A.options.filter((I) => I.selected).map((I) => I.value)
  })).filter((A) => A.options.length > 0), P = (A) => {
    const I = r.find((W) => W.id === A);
    return I ? I.options.filter((G) => G.selected).map((G) => G.value) : [];
  }, Y = (A, I, W) => {
    const G = r.map((R) => R.id === A ? {
      ...R,
      options: R.options.map((M) => M.id === I ? { ...M, selected: W } : M)
    } : R);
    o(G);
  }, U = () => r, B = (A) => {
    const I = r.map((W) => W.id === A ? {
      ...W,
      options: W.options.map((G) => ({
        ...G,
        selected: !1
      }))
    } : W);
    o(I);
  }, Z = (A) => $({ ...v, limit: A }), F = () => {
    const A = r.map((I) => ({
      ...I,
      options: I.options.map((W) => ({ ...W, selected: !1 }))
    }));
    o(A);
  };
  return ee(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), ee(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), ee(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), ee(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), ee(() => b((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), ee(() => {
    const A = x.filter((I) => I.isQuery).map((I) => ({
      id: I.id,
      label: I.label
    }));
    s(A);
  }, [x]), ee(() => {
    const A = (W) => (W == null ? void 0 : W.filters) && (W == null ? void 0 : W.filters.length), I = x.filter(A).map((W) => {
      const G = W.filters.map((M) => ({
        ...M,
        selected: !1
      }));
      return {
        ...W,
        id: W.id,
        options: G
      };
    });
    o(I);
  }, [x]), ee(() => {
    e != null && e.filters && (e == null || e.filters.forEach((A) => {
      A != null && A.filters && x.forEach((I) => {
        A.id === I.id && o((W) => W.some((R) => R.id === A.id) ? W : [
          ...W,
          {
            id: I.id,
            label: I.label,
            options: A.filters
          }
        ]);
      });
    }));
  }, [x, e == null ? void 0 : e.filters]), ee(() => {
    g((A) => {
      var I, W;
      return {
        ...A,
        hasNextPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasNextPage,
        hasPrevPage: (W = e == null ? void 0 : e.pagination) == null ? void 0 : W.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    qr.Provider,
    {
      value: {
        data: t,
        columns: x,
        pagination: v,
        nextPage: N,
        prevPage: k,
        searchForm: m,
        updateLimit: Z,
        showFilters: i,
        resetFilters: F,
        getGlobalFilters: U,
        selectOptionFilter: Y,
        resetOptionsByFilter: B,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: _,
        getFilterOptionsSelectedById: P,
        getFiltersWithOptionsSelected: S,
        setSelectItem: e.setSelectItem,
        setShowFilters: (A) => c(A),
        setSearchForm: (A) => h(A)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(H7, { onSubmitTable: _, loading: d }),
        /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${y ? `${y === 2 ? "sm" : "lg"}:grid-cols-${y}` : "grid-cols-3"}  gap-6`,
            children: [
              d && /* @__PURE__ */ f.exports.jsx(V7, {}),
              !d && l && /* @__PURE__ */ f.exports.jsx(Y7, {}),
              !d && !l && !t && /* @__PURE__ */ f.exports.jsx(K7, {}),
              !d && !l && t && /* @__PURE__ */ f.exports.jsx(L7, {})
            ]
          }
        ),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(R7, {})
      ] })
    }
  );
}
function q7(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Op(e) {
  return q7(e) || Array.isArray(e);
}
function Z7() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function wd(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !Op(i) || !Op(c) ? i === c : wd(i, c);
  });
}
function kp(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function X7(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = kp(e), r = kp(t);
  return n.every((o, a) => {
    const s = r[a];
    return wd(o, s);
  });
}
function $d(e) {
  return typeof e == "number";
}
function zl(e) {
  return typeof e == "string";
}
function _d(e) {
  return typeof e == "boolean";
}
function Mp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function it(e) {
  return Math.abs(e);
}
function Cd(e) {
  return Math.sign(e);
}
function Ts(e, t) {
  return it(e - t);
}
function Q7(e, t) {
  if (e === 0 || t === 0 || it(e) <= it(t))
    return 0;
  const n = Ts(it(e), it(t));
  return it(n / e);
}
function Ta(e) {
  return Oa(e).map(Number);
}
function sn(e) {
  return e[ts(e)];
}
function ts(e) {
  return Math.max(0, e.length - 1);
}
function Sd(e, t) {
  return t === ts(e);
}
function Dp(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Oa(e) {
  return Object.keys(e);
}
function Ux(e, t) {
  return [e, t].reduce((n, r) => (Oa(r).forEach((o) => {
    const a = n[o], s = r[o], i = Mp(a) && Mp(s);
    n[o] = i ? Ux(a, s) : s;
  }), n), {});
}
function zx(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function J7(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(c) {
    return a(c) / 2;
  }
  function a(c) {
    return t - c;
  }
  function s(c, l) {
    return zl(e) ? n[e](c) : e(t, c, l);
  }
  return {
    measure: s
  };
}
function eM(e, t) {
  const n = e === "y" ? "y" : "x", r = e === "y" ? "x" : "y", o = i(), a = c();
  function s(u) {
    const {
      width: d,
      height: p
    } = u;
    return n === "x" ? d : p;
  }
  function i() {
    return n === "y" ? "top" : t === "rtl" ? "right" : "left";
  }
  function c() {
    return n === "y" ? "bottom" : t === "rtl" ? "left" : "right";
  }
  return {
    scroll: n,
    cross: r,
    startEdge: o,
    endEdge: a,
    measureSize: s
  };
}
function Fr(e = 0, t = 0) {
  const n = it(e - t);
  function r(l) {
    return l < e;
  }
  function o(l) {
    return l > t;
  }
  function a(l) {
    return r(l) || o(l);
  }
  function s(l) {
    return a(l) ? r(l) ? e : t : l;
  }
  function i(l) {
    return n ? l - n * Math.ceil((l - t) / n) : l;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: s,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: i
  };
}
function Bx(e, t, n) {
  const {
    constrain: r
  } = Fr(0, e), o = e + 1;
  let a = s(t);
  function s(p) {
    return n ? it((o + p) % o) : r(p);
  }
  function i() {
    return a;
  }
  function c(p) {
    return a = s(p), d;
  }
  function l(p) {
    return u().set(i() + p);
  }
  function u() {
    return Bx(e, i(), n);
  }
  const d = {
    get: i,
    set: c,
    add: l,
    clone: u
  };
  return d;
}
function tM(e) {
  const t = e === "rtl" ? -1 : 1;
  function n(o) {
    return o * t;
  }
  return {
    apply: n
  };
}
function ka() {
  let e = [];
  function t(o, a, s, i = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(a, s, i), c = () => o.removeEventListener(a, s, i);
    else {
      const l = o;
      l.addListener(s), c = () => l.removeListener(s);
    }
    return e.push(c), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function nM(e, t, n, r, o, a, s, i, c, l, u, d, p, m, h, v, g, x, b, y) {
  const {
    cross: _
  } = e, $ = ["INPUT", "SELECT", "TEXTAREA"], N = {
    passive: !1
  }, k = ka(), S = ka(), P = Fr(50, 225).constrain(h.measure(20)), Y = {
    mouse: 300,
    touch: 400
  }, U = {
    mouse: 500,
    touch: 600
  }, B = v ? 43 : 25;
  let Z = !1, F = 0, A = 0, I = !1, W = !1, G = !1, R = !1;
  function M(V) {
    if (!y)
      return;
    function de(ye) {
      (_d(y) || y(V, ye)) && be(ye);
    }
    const ve = n;
    k.add(ve, "dragstart", (ye) => ye.preventDefault(), N).add(ve, "touchmove", () => {
    }, N).add(ve, "touchend", () => {
    }).add(ve, "touchstart", de).add(ve, "mousedown", de).add(ve, "touchcancel", ie).add(ve, "contextmenu", ie).add(ve, "click", pe, !0);
  }
  function K() {
    k.clear(), S.clear();
  }
  function X() {
    const V = R ? r : n;
    S.add(V, "touchmove", oe, N).add(V, "touchend", ie).add(V, "mousemove", oe, N).add(V, "mouseup", ie);
  }
  function ae(V) {
    const de = V.nodeName || "";
    return $.includes(de);
  }
  function ne() {
    return (v ? U : Y)[R ? "mouse" : "touch"];
  }
  function ge(V, de) {
    const ve = p.add(Cd(V) * -1), ye = d.byDistance(V, !v).distance;
    return v || it(V) < P ? ye : x && de ? ye * 0.5 : d.byIndex(ve.get(), 0).distance;
  }
  function be(V) {
    const de = zx(V, o);
    R = de, !(de && V.button !== 0) && (ae(V.target) || (G = v && de && !V.buttons && Z, Z = Ts(a.get(), i.get()) >= 2, I = !0, s.pointerDown(V), u.useFriction(0).useDuration(0), a.set(i), X(), F = s.readPoint(V), A = s.readPoint(V, _), m.emit("pointerDown")));
  }
  function oe(V) {
    const de = s.readPoint(V), ve = s.readPoint(V, _), ye = Ts(de, F), O = Ts(ve, A);
    if (!W && !R && (!V.cancelable || (W = ye > O, !W)))
      return ie(V);
    const z = s.pointerMove(V);
    ye > g && (G = !0), u.useFriction(0.3).useDuration(1), c.start(), a.add(t.apply(z)), V.preventDefault();
  }
  function ie(V) {
    const ve = d.byDistance(0, !1).index !== p.get(), ye = s.pointerUp(V) * ne(), O = ge(t.apply(ye), ve), z = Q7(ye, O), Q = B - 10 * z, fe = b + z / 50;
    W = !1, I = !1, S.clear(), u.useDuration(Q).useFriction(fe), l.distance(O, !v), R = !1, m.emit("pointerUp");
  }
  function pe(V) {
    G && (V.stopPropagation(), V.preventDefault());
  }
  function H() {
    return I;
  }
  return {
    init: M,
    pointerDown: H,
    destroy: K
  };
}
function rM(e, t) {
  let r, o;
  function a(d) {
    return d.timeStamp;
  }
  function s(d, p) {
    const h = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (zx(d, t) ? d : d.touches[0])[h];
  }
  function i(d) {
    return r = d, o = d, s(d);
  }
  function c(d) {
    const p = s(d) - s(o), m = a(d) - a(r) > 170;
    return o = d, m && (r = d), p;
  }
  function l(d) {
    if (!r || !o)
      return 0;
    const p = s(o) - s(r), m = a(d) - a(r), h = a(d) - a(o) > 170, v = p / m;
    return m && !h && it(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function oM() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: s
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + s,
      left: o,
      width: a,
      height: s
    };
  }
  return {
    measure: e
  };
}
function aM(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function sM(e, t, n, r, o, a, s) {
  let i, c, l = [], u = !1;
  function d(v) {
    return o.measureSize(s.measure(v));
  }
  function p(v) {
    if (!a)
      return;
    c = d(e), l = r.map(d);
    function g(b) {
      for (const y of b) {
        const _ = y.target === e, $ = r.indexOf(y.target), N = _ ? c : l[$], k = d(_ ? e : r[$]);
        if (it(k - N) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((b) => {
      u || (_d(a) || a(v, b)) && g(b);
    }), [e].concat(r).forEach((b) => i.observe(b));
  }
  function m() {
    i && i.disconnect(), u = !0;
  }
  return {
    init: p,
    destroy: m
  };
}
function iM(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, l = e.get(), u = 0;
  function d() {
    const $ = n.get() - e.get(), N = !i;
    let k = 0;
    return N ? (a = 0, e.set(n), k = $) : (a += $ / i, a *= c, l += a, e.add(a), k = l - u), s = Cd(k), u = l, _;
  }
  function p() {
    const $ = n.get() - t.get();
    return it($) < 1e-3;
  }
  function m() {
    return i;
  }
  function h() {
    return s;
  }
  function v() {
    return a;
  }
  function g() {
    return b(r);
  }
  function x() {
    return y(o);
  }
  function b($) {
    return i = $, _;
  }
  function y($) {
    return c = $, _;
  }
  const _ = {
    direction: h,
    duration: m,
    velocity: v,
    seek: d,
    settled: p,
    useBaseFriction: x,
    useBaseDuration: g,
    useFriction: y,
    useDuration: b
  };
  return _;
}
function cM(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = Fr(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!l())
      return;
    const h = e.reachedMin(t.get()) ? "min" : "max", v = it(e[h] - t.get()), g = n.get() - t.get(), x = i.constrain(v / s);
    n.subtract(g * x), !m && it(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(m) {
    c = !m;
  }
  return {
    constrain: u,
    toggleActive: d
  };
}
function lM(e, t, n, r, o) {
  const a = Fr(-t + e, 0), s = u(), i = l(), c = d();
  function l() {
    const m = s[0], h = sn(s), v = s.lastIndexOf(m), g = s.indexOf(h) + 1;
    return Fr(v, g);
  }
  function u() {
    return n.map((m, h) => {
      const v = !h, g = Sd(n, h);
      return v ? a.max : g ? a.min : a.constrain(m);
    }).map((m) => parseFloat(m.toFixed(3)));
  }
  function d() {
    if (t <= e + o)
      return [a.max];
    if (r === "keepSnaps")
      return s;
    const {
      min: m,
      max: h
    } = i;
    return s.slice(m, h);
  }
  return {
    snapsContained: c,
    scrollContainLimit: i
  };
}
function uM(e, t, n) {
  const r = t[0], o = n ? r - e : sn(t);
  return {
    limit: Fr(o, r)
  };
}
function dM(e, t, n, r) {
  const a = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = Fr(a, s);
  function l(p) {
    return p === 1 ? c(n.get()) : p === -1 ? i(n.get()) : !1;
  }
  function u(p) {
    if (!l(p))
      return;
    const m = e * (p * -1);
    r.forEach((h) => h.add(m));
  }
  return {
    loop: u
  };
}
function fM(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const s = a - t;
    return n ? s / -n : 0;
  }
  return {
    get: r
  };
}
function pM(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = d().map(t.measure), l = p(), u = m();
  function d() {
    return i(r).map((v) => sn(v)[s] - v[0][a]).map(it);
  }
  function p() {
    return r.map((v) => n[a] - v[a]).map((v) => -it(v));
  }
  function m() {
    return i(l).map((v) => v[0]).map((v, g) => v + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function mM(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, l = u();
  function u() {
    const p = s(a), m = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : m ? p : p.slice(i, c).map((h, v, g) => {
      const x = !v, b = Sd(g, v);
      if (x) {
        const y = sn(g[0]) + 1;
        return Dp(y);
      }
      if (b) {
        const y = ts(a) - sn(g)[0] + 1;
        return Dp(y, sn(g)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: l
  };
}
function hM(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(h) {
    return h.concat().sort((v, g) => it(v) - it(g))[0];
  }
  function l(h) {
    const v = e ? s(h) : i(h), g = t.map((b) => b - v).map((b) => u(b, 0)).map((b, y) => ({
      diff: b,
      index: y
    })).sort((b, y) => it(b.diff) - it(y.diff)), {
      index: x
    } = g[0];
    return {
      index: x,
      distance: v
    };
  }
  function u(h, v) {
    const g = [h, h + n, h - n];
    if (!e)
      return g[0];
    if (!v)
      return c(g);
    const x = g.filter((b) => Cd(b) === v);
    return x.length ? c(x) : sn(g) - n;
  }
  function d(h, v) {
    const g = t[h] - o.get(), x = u(g, v);
    return {
      index: h,
      distance: x
    };
  }
  function p(h, v) {
    const g = o.get() + h, {
      index: x,
      distance: b
    } = l(g), y = !e && a(g);
    if (!v || y)
      return {
        index: x,
        distance: h
      };
    const _ = t[x] - b, $ = h + u(_, 0);
    return {
      index: x,
      distance: $
    };
  }
  return {
    byDistance: p,
    byIndex: d,
    shortcut: u
  };
}
function vM(e, t, n, r, o, a) {
  function s(u) {
    const d = u.distance, p = u.index !== t.get();
    o.add(d), d && e.start(), p && (n.set(t.get()), t.set(u.index), a.emit("select"));
  }
  function i(u, d) {
    const p = r.byDistance(u, d);
    s(p);
  }
  function c(u, d) {
    const p = t.clone().set(u), m = r.byIndex(p.get(), d);
    s(m);
  }
  return {
    distance: i,
    index: c
  };
}
function gM(e, t, n, r, o, a) {
  let s = 0;
  function i() {
    a.add(document, "keydown", c, !1), t.forEach(l);
  }
  function c(d) {
    d.code === "Tab" && (s = new Date().getTime());
  }
  function l(d) {
    const p = () => {
      if (new Date().getTime() - s > 10)
        return;
      e.scrollLeft = 0;
      const v = t.indexOf(d), g = n.findIndex((x) => x.includes(v));
      $d(g) && (o.useDuration(0), r.index(g, 0));
    };
    a.add(d, "focus", p, {
      passive: !0,
      capture: !0
    });
  }
  return {
    init: i
  };
}
function Os(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = s(c);
  }
  function o(c) {
    t += s(c);
  }
  function a(c) {
    t -= s(c);
  }
  function s(c) {
    return $d(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function Hx(e, t, n) {
  const r = e.scroll === "x" ? s : i, o = n.style;
  let a = !1;
  function s(p) {
    return `translate3d(${p}px,0px,0px)`;
  }
  function i(p) {
    return `translate3d(0px,${p}px,0px)`;
  }
  function c(p) {
    a || (o.transform = r(t.apply(p)));
  }
  function l(p) {
    a = !p;
  }
  function u() {
    a || (o.transform = "", n.getAttribute("style") || n.removeAttribute("style"));
  }
  return {
    clear: u,
    to: c,
    toggleActive: l
  };
}
function bM(e, t, n, r, o, a, s, i, c, l) {
  const d = Ta(a), p = Ta(a).reverse(), m = b().concat(y());
  function h(S, P) {
    return S.reduce((Y, U) => Y - a[U], P);
  }
  function v(S, P) {
    return S.reduce((Y, U) => h(Y, P) > 0 ? Y.concat([U]) : Y, []);
  }
  function g(S) {
    return s.map((P, Y) => ({
      start: P - o[Y] + 0.5 + S,
      end: P + n - 0.5 + S
    }));
  }
  function x(S, P, Y) {
    const U = g(P);
    return S.map((B) => {
      const Z = Y ? 0 : -r, F = Y ? r : 0, A = Y ? "end" : "start", I = U[B][A];
      return {
        index: B,
        loopPoint: I,
        slideLocation: Os(-1),
        translate: Hx(e, t, l[B]),
        target: () => c.get() > I ? Z : F
      };
    });
  }
  function b() {
    const S = i[0], P = v(p, S);
    return x(P, r, !1);
  }
  function y() {
    const S = n - i[0] - 1, P = v(d, S);
    return x(P, -r, !0);
  }
  function _() {
    return m.every(({
      index: S
    }) => {
      const P = d.filter((Y) => Y !== S);
      return h(P, n) <= 0.1;
    });
  }
  function $() {
    m.forEach((S) => {
      const {
        target: P,
        translate: Y,
        slideLocation: U
      } = S, B = P();
      B !== U.get() && (Y.to(B), U.set(B));
    });
  }
  function N() {
    m.forEach((S) => S.translate.clear());
  }
  return {
    canLoop: _,
    clear: N,
    loop: $,
    loopPoints: m
  };
}
function xM(e, t, n) {
  let r, o = !1;
  function a(c) {
    if (!n)
      return;
    function l(u) {
      for (const d of u)
        if (d.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((u) => {
      o || (_d(n) || n(c, u)) && l(u);
    }), r.observe(e, {
      childList: !0
    });
  }
  function s() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: s
  };
}
function yM(e, t, n, r) {
  const o = {};
  let a = null, s = null, i, c = !1;
  function l() {
    i = new IntersectionObserver((h) => {
      c || (h.forEach((v) => {
        const g = t.indexOf(v.target);
        o[g] = v;
      }), a = null, s = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((h) => i.observe(h));
  }
  function u() {
    i && i.disconnect(), c = !0;
  }
  function d(h) {
    return Oa(o).reduce((v, g) => {
      const x = parseInt(g), {
        isIntersecting: b
      } = o[x];
      return (h && b || !h && !b) && v.push(x), v;
    }, []);
  }
  function p(h = !0) {
    if (h && a)
      return a;
    if (!h && s)
      return s;
    const v = d(h);
    return h && (a = v), h || (s = v), v;
  }
  return {
    init: l,
    destroy: u,
    get: p
  };
}
function wM(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, l = n[0] && o, u = h(), d = v(), p = n.map(s), m = g();
  function h() {
    if (!l)
      return 0;
    const b = n[0];
    return it(t[i] - b[i]);
  }
  function v() {
    if (!l)
      return 0;
    const b = a.getComputedStyle(sn(r));
    return parseFloat(b.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((b, y, _) => {
      const $ = !y, N = Sd(_, y);
      return $ ? p[y] + u : N ? p[y] + d : _[y + 1][i] - b[i];
    }).map(it);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: m,
    startGap: u,
    endGap: d
  };
}
function $M(e, t, n, r, o, a, s, i, c, l) {
  const {
    startEdge: u,
    endEdge: d
  } = e, p = $d(r);
  function m(x, b) {
    return Ta(x).filter((y) => y % b === 0).map((y) => x.slice(y, y + b));
  }
  function h(x) {
    return x.length ? Ta(x).reduce((b, y) => {
      const _ = sn(b) || 0, $ = _ === 0, N = y === ts(x), k = a[u] - s[_][u], S = a[u] - s[y][d], P = !o && $ ? t.apply(i) : 0, Y = !o && N ? t.apply(c) : 0;
      return it(S - Y - (k + P)) > n + l && b.push(y), N && b.push(x.length), b;
    }, []).map((b, y, _) => {
      const $ = Math.max(_[y - 1] || 0);
      return x.slice($, b);
    }) : [];
  }
  function v(x) {
    return p ? m(x, r) : h(x);
  }
  return {
    groupSlides: v
  };
}
function _M(e, t, n, r, o, a, s, i) {
  const {
    align: c,
    axis: l,
    direction: u,
    startIndex: d,
    loop: p,
    duration: m,
    dragFree: h,
    dragThreshold: v,
    inViewThreshold: g,
    slidesToScroll: x,
    skipSnaps: b,
    containScroll: y,
    watchResize: _,
    watchSlides: $,
    watchDrag: N
  } = a, k = 2, S = oM(), P = S.measure(t), Y = n.map(S.measure), U = tM(u), B = eM(l, u), Z = B.measureSize(P), F = aM(Z), A = J7(c, Z), I = !p && !!y, W = p || !!y, {
    slideSizes: G,
    slideSizesWithGaps: R,
    startGap: M,
    endGap: K
  } = wM(B, P, Y, n, W, o), X = $M(B, U, Z, x, p, P, Y, M, K, k), {
    snaps: ae,
    snapsAligned: ne
  } = pM(B, A, P, Y, X), ge = -sn(ae) + sn(R), {
    snapsContained: be,
    scrollContainLimit: oe
  } = lM(Z, ge, ne, y, k), ie = I ? be : ne, {
    limit: pe
  } = uM(ge, ie, p), H = Bx(ts(ie), d, p), re = H.clone(), V = Ta(n), de = ({
    dragHandler: Re,
    scrollBody: He,
    scrollBounds: tt,
    options: {
      loop: nt
    }
  }) => {
    nt || tt.constrain(Re.pointerDown()), He.seek();
  }, ve = ({
    scrollBody: Re,
    translate: He,
    location: tt,
    offsetLocation: nt,
    scrollLooper: Ot,
    slideLooper: Cr,
    dragHandler: zt,
    animation: Jn,
    eventHandler: Zr,
    options: {
      loop: zo
    }
  }, ns) => {
    const On = Re.velocity(), Xr = Re.settled();
    Xr && !zt.pointerDown() && (Jn.stop(), Zr.emit("settle")), Xr || Zr.emit("scroll"), nt.set(tt.get() - On + On * ns), zo && (Ot.loop(Re.direction()), Cr.loop()), He.to(nt.get());
  }, ye = {
    start: () => i.start(Se),
    stop: () => i.stop(Se),
    update: () => de(Se),
    render: (Re) => ve(Se, Re)
  }, O = 0.68, z = ie[H.get()], Q = Os(z), fe = Os(z), le = Os(z), se = iM(Q, fe, le, m, O), we = hM(p, ie, ge, pe, le), Le = vM(ye, H, re, we, le, s), Ue = fM(pe), yt = ka(), gn = yM(t, n, s, g), {
    slideRegistry: St
  } = mM(I, y, ie, oe, X, V), Ne = gM(e, n, St, Le, se, yt), Se = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: P,
    slideRects: Y,
    animation: ye,
    axis: B,
    direction: U,
    dragHandler: nM(B, U, e, r, o, le, rM(B, o), Q, ye, Le, se, we, H, s, F, h, v, b, O, N),
    eventStore: yt,
    percentOfView: F,
    index: H,
    indexPrevious: re,
    limit: pe,
    location: Q,
    offsetLocation: fe,
    options: a,
    resizeHandler: sM(t, s, o, n, B, _, S),
    scrollBody: se,
    scrollBounds: cM(pe, Q, le, se, F),
    scrollLooper: dM(ge, pe, fe, [Q, fe, le]),
    scrollProgress: Ue,
    scrollSnapList: ie.map(Ue.get),
    scrollSnaps: ie,
    scrollTarget: we,
    scrollTo: Le,
    slideLooper: bM(B, U, Z, ge, G, R, ae, ie, fe, n),
    slideFocus: Ne,
    slidesHandler: xM(t, s, $),
    slidesInView: gn,
    slideIndexes: V,
    slideRegistry: St,
    slidesToScroll: X,
    target: le,
    translate: Hx(B, U, t)
  };
  return Se;
}
function CM(e) {
  const t = 16.666666666666668;
  let n = [], r = null, o = 0, a = 0;
  function s(d) {
    r || (r = d);
    const p = d - r;
    for (r = d, o += p; o >= t; )
      n.forEach(({
        animation: h
      }) => h.update()), o -= t;
    const m = it(o / t);
    n.forEach(({
      animation: h
    }) => h.render(m)), a && e.requestAnimationFrame(s);
  }
  function i(d) {
    n.includes(d) || n.push(d), !a && (a = e.requestAnimationFrame(s));
  }
  function c(d) {
    n = n.filter((p) => p !== d), !n.length && (e.cancelAnimationFrame(a), r = null, o = 0, a = 0);
  }
  function l() {
    r = null, o = 0;
  }
  return {
    start: i,
    stop: c,
    reset: l,
    window: e
  };
}
function SM() {
  const e = {};
  let t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function o(c) {
    return r(c).forEach((l) => l(t, c)), i;
  }
  function a(c, l) {
    return e[c] = r(c).concat([l]), i;
  }
  function s(c, l) {
    return e[c] = r(c).filter((u) => u !== l), i;
  }
  const i = {
    init: n,
    emit: o,
    off: s,
    on: a
  };
  return i;
}
const EM = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0
};
function NM(e) {
  function t(a, s) {
    return Ux(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = Oa(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, l) => t(c, l), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => Oa(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function PM(e) {
  let t = [];
  function n(a, s) {
    return t = s.filter(({
      options: i
    }) => e.optionsAtMedia(i).active !== !1), t.forEach((i) => i.init(a, e)), s.reduce((i, c) => Object.assign(i, {
      [c.name]: c
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function So(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = NM(o), s = PM(a), i = ka(), c = ka(), l = SM(), {
    animationRealms: u
  } = So, {
    mergeOptions: d,
    optionsAtMedia: p,
    optionsMediaQueries: m
  } = a, {
    on: h,
    off: v,
    emit: g
  } = l, x = Z;
  let b = !1, y, _ = d(EM, So.globalOptions), $ = d(_), N = [], k, S, P;
  function Y() {
    const {
      container: de,
      slides: ve
    } = $;
    S = (zl(de) ? e.querySelector(de) : de) || e.children[0];
    const O = zl(ve) ? S.querySelectorAll(ve) : ve;
    P = [].slice.call(O || S.children);
  }
  function U(de, ve) {
    const ye = _M(e, S, P, r, o, de, l, ve);
    if (de.loop && !ye.slideLooper.canLoop()) {
      const O = Object.assign({}, de, {
        loop: !1
      });
      return U(O, ve);
    }
    return ye;
  }
  function B(de, ve) {
    if (b)
      return;
    const ye = u.find((z) => z.window === o), O = ye || CM(o);
    ye || u.push(O), _ = d(_, de), $ = p(_), N = ve || N, Y(), y = U($, O), m([_, ...N.map(({
      options: z
    }) => z)]).forEach((z) => i.add(z, "change", Z)), $.active && (y.translate.to(y.location.get()), y.slidesInView.init(), y.slideFocus.init(), y.eventHandler.init(V), y.resizeHandler.init(V), y.slidesHandler.init(V), c.add(r, "visibilitychange", () => {
      r.hidden && O.reset();
    }), y.options.loop && y.slideLooper.loop(), S.offsetParent && P.length && y.dragHandler.init(V), k = s.init(V, N));
  }
  function Z(de, ve) {
    const ye = ae();
    F(), B(d({
      startIndex: ye
    }, de), ve), l.emit("reInit");
  }
  function F() {
    y.dragHandler.destroy(), y.animation.stop(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), s.destroy(), i.clear(), c.clear();
  }
  function A() {
    b || (b = !0, i.clear(), F(), l.emit("destroy"));
  }
  function I(de, ve, ye) {
    !$.active || b || (y.scrollBody.useBaseFriction().useDuration(ve === !0 ? 0 : $.duration), y.scrollTo.index(de, ye || 0));
  }
  function W(de) {
    const ve = y.index.add(1).get();
    I(ve, de, -1);
  }
  function G(de) {
    const ve = y.index.add(-1).get();
    I(ve, de, 1);
  }
  function R() {
    return y.index.add(1).get() !== ae();
  }
  function M() {
    return y.index.add(-1).get() !== ae();
  }
  function K() {
    return y.scrollSnapList;
  }
  function X() {
    return y.scrollProgress.get(y.location.get());
  }
  function ae() {
    return y.index.get();
  }
  function ne() {
    return y.indexPrevious.get();
  }
  function ge() {
    return y.slidesInView.get();
  }
  function be() {
    return y.slidesInView.get(!1);
  }
  function oe() {
    return k;
  }
  function ie() {
    return y;
  }
  function pe() {
    return e;
  }
  function H() {
    return S;
  }
  function re() {
    return P;
  }
  const V = {
    canScrollNext: R,
    canScrollPrev: M,
    containerNode: H,
    internalEngine: ie,
    destroy: A,
    off: v,
    on: h,
    emit: g,
    plugins: oe,
    previousScrollSnap: ne,
    reInit: x,
    rootNode: pe,
    scrollNext: W,
    scrollPrev: G,
    scrollProgress: X,
    scrollSnapList: K,
    scrollTo: I,
    selectedScrollSnap: ae,
    slideNodes: re,
    slidesInView: ge,
    slidesNotInView: be
  };
  return B(t, n), setTimeout(() => l.emit("init"), 0), V;
}
So.animationRealms = [];
So.globalOptions = void 0;
function Ed(e = {}, t = []) {
  const n = q(e), r = q(t), [o, a] = J(), [s, i] = J(), c = he(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return ee(() => {
    if (Z7() && s) {
      So.globalOptions = Ed.globalOptions;
      const l = So(s, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [s, a]), ee(() => {
    wd(n.current, e) || (n.current = e, c());
  }, [e, c]), ee(() => {
    X7(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
Ed.globalOptions = void 0;
const Yx = C.createContext(null);
function rc() {
  const e = C.useContext(Yx);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const TM = C.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, l] = Ed(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [u, d] = C.useState(!1), [p, m] = C.useState(!1), h = C.useCallback((b) => {
      b && (d(b.canScrollPrev()), m(b.canScrollNext()));
    }, []), v = C.useCallback(() => {
      l == null || l.scrollPrev();
    }, [l]), g = C.useCallback(() => {
      l == null || l.scrollNext();
    }, [l]), x = C.useCallback(
      (b) => {
        b.key === "ArrowLeft" ? (b.preventDefault(), v()) : b.key === "ArrowRight" && (b.preventDefault(), g());
      },
      [v, g]
    );
    return C.useEffect(() => {
      !l || !n || n(l);
    }, [l, n]), C.useEffect(() => {
      if (l)
        return h(l), l.on("reInit", h), l.on("select", h), () => {
          l == null || l.off("select", h);
        };
    }, [l, h]), /* @__PURE__ */ f.exports.jsx(
      Yx.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: g,
          canScrollPrev: u,
          canScrollNext: p
        },
        children: /* @__PURE__ */ f.exports.jsx(
          "div",
          {
            ref: i,
            onKeyDownCapture: x,
            className: j("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...s,
            children: a
          }
        )
      }
    );
  }
);
TM.displayName = "Carousel";
const OM = C.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = rc();
  return /* @__PURE__ */ f.exports.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      ref: n,
      className: j(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
OM.displayName = "CarouselContent";
const kM = C.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = rc();
  return /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: j(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
kM.displayName = "CarouselItem";
const MM = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = rc();
  return /* @__PURE__ */ f.exports.jsxs(
    Fe,
    {
      ref: o,
      variant: t,
      size: n,
      className: j(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ f.exports.jsx(ty, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
MM.displayName = "CarouselPrevious";
const DM = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = rc();
  return /* @__PURE__ */ f.exports.jsxs(
    Fe,
    {
      ref: o,
      variant: t,
      size: n,
      className: j(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ f.exports.jsx(ny, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
DM.displayName = "CarouselNext";
var Kx = E.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
}, onPress: () => {
}, onRelease: () => {
}, onDrag: () => {
}, onNestedDrag: () => {
}, onNestedOpenChange: () => {
}, onNestedRelease: () => {
}, openProp: void 0, dismissible: !1, isOpen: !1, keyboardIsOpen: { current: !1 }, snapPointsOffset: null, snapPoints: null, modal: !1, shouldFade: !1, activeSnapPoint: null, onOpenChange: () => {
}, setActiveSnapPoint: () => {
}, visible: !1, closeDrawer: () => {
}, setVisible: () => {
} }), Nd = () => E.useContext(Kx);
function RM(e, { insertAt: t } = {}) {
  if (!e || typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
RM(`[vaul-drawer]{touch-action:none;transform:translate3d(0,100%,0);transition:transform .5s cubic-bezier(.32,.72,0,1)}.vaul-dragging .vaul-scrollable{overflow-y:hidden!important}[vaul-drawer][vaul-drawer-visible=true]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;top:100%;background:inherit;background-color:inherit;left:0;right:0;height:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var jM = typeof window < "u" ? Ma : ee;
function Bl(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function AM() {
  return Pd(/^Mac/);
}
function IM() {
  return Pd(/^iPhone/);
}
function LM() {
  return Pd(/^iPad/) || AM() && navigator.maxTouchPoints > 1;
}
function Gx() {
  return IM() || LM();
}
function Pd(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var Qc = typeof document < "u" && window.visualViewport;
function Rp(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function qx(e) {
  for (Rp(e) && (e = e.parentElement); e && !Rp(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var FM = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), ys = 0, Jc;
function VM(e = {}) {
  let { isDisabled: t } = e;
  jM(() => {
    if (!t)
      return ys++, ys === 1 && (Gx() ? Jc = UM() : Jc = WM()), () => {
        ys--, ys === 0 && Jc();
      };
  }, [t]);
}
function WM() {
  return Bl(di(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), di(document.documentElement, "overflow", "hidden"));
}
function UM() {
  let e, t = 0, n = (d) => {
    e = qx(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY);
  }, r = (d) => {
    if (!e || e === document.documentElement || e === document.body) {
      d.preventDefault();
      return;
    }
    let p = d.changedTouches[0].pageY, m = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((m <= 0 && p > t || m >= h && p < t) && d.preventDefault(), t = p);
  }, o = (d) => {
    let p = d.target;
    fi(p) && p !== document.activeElement && (d.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (d) => {
    let p = d.target;
    fi(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", Qc && (Qc.height < window.innerHeight ? requestAnimationFrame(() => {
        jp(p);
      }) : Qc.addEventListener("resize", () => jp(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, l = Bl(di(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), di(document.documentElement, "overflow", "hidden"));
  window.scrollTo(0, 0);
  let u = Bl(Jo(document, "touchstart", n, { passive: !1, capture: !0 }), Jo(document, "touchmove", r, { passive: !1, capture: !0 }), Jo(document, "touchend", o, { passive: !1, capture: !0 }), Jo(document, "focus", a, !0), Jo(window, "scroll", s));
  return () => {
    l(), u(), window.scrollTo(i, c);
  };
}
function di(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Jo(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function jp(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = qx(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function fi(e) {
  return e instanceof HTMLInputElement && !FM.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function zM(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function BM(...e) {
  return (t) => e.forEach((n) => zM(n, t));
}
function Zx(...e) {
  return C.useCallback(BM(...e), e);
}
var rr = null;
function HM({ isOpen: e, modal: t, nested: n, hasBeenOpened: r }) {
  let [o, a] = E.useState(typeof window < "u" ? window.location.href : ""), s = E.useRef(0);
  function i() {
    if (rr === null && e) {
      rr = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: l, innerHeight: u } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-s.current}px`, document.body.style.left = `${-l}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let d = u - window.innerHeight;
        d && s.current >= u && (document.body.style.top = `${-(s.current + d)}px`);
      }), 300);
    }
  }
  function c() {
    if (rr !== null) {
      let l = -parseInt(document.body.style.top, 10), u = -parseInt(document.body.style.left, 10);
      document.body.style.position = rr.position, document.body.style.top = rr.top, document.body.style.left = rr.left, document.body.style.height = rr.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (o !== window.location.href) {
          a(window.location.href);
          return;
        }
        window.scrollTo(u, l);
      }), rr = null;
    }
  }
  return E.useEffect(() => {
    function l() {
      s.current = window.scrollY;
    }
    return l(), window.addEventListener("scroll", l), () => {
      window.removeEventListener("scroll", l);
    };
  }, []), E.useEffect(() => {
    n || !r || (e ? (i(), t || setTimeout(() => {
      c();
    }, 500)) : c());
  }, [e, r, o]), { restorePositionSetting: c };
}
var Xx = /* @__PURE__ */ new WeakMap();
function lt(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && Xx.set(e, r);
}
function ws(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = Xx.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
function $s(e) {
  let t = window.getComputedStyle(e), n = t.transform || t.webkitTransform || t.mozTransform, r = n.match(/^matrix3d\((.+)\)$/);
  return r ? parseFloat(r[1].split(", ")[13]) : (r = n.match(/^matrix\((.+)\)$/), r ? parseFloat(r[1].split(", ")[5]) : null);
}
function YM(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var et = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, Qx = 0.4;
function Jx(e) {
  let t = E.useRef(e);
  return E.useEffect(() => {
    t.current = e;
  }), E.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function KM({ defaultProp: e, onChange: t }) {
  let n = E.useState(e), [r] = n, o = E.useRef(r), a = Jx(t);
  return E.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function GM({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = KM({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = Jx(n), c = E.useCallback((l) => {
    if (a) {
      let u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
    } else
      o(l);
  }, [a, e, o, i]);
  return [s, c];
}
function qM({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s }) {
  let [i, c] = GM({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), l = E.useMemo(() => i === (n == null ? void 0 : n[n.length - 1]), [n, i]), u = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === i || !n, d = E.useMemo(() => {
    var b;
    return (b = n == null ? void 0 : n.findIndex((y) => y === i)) != null ? b : null;
  }, [n, i]), p = E.useMemo(() => {
    var b;
    return (b = n == null ? void 0 : n.map((y) => {
      let _ = typeof window < "u", $ = typeof y == "string", N = 0;
      $ && (N = parseInt(y, 10));
      let k = $ ? N : _ ? y * window.innerHeight : 0;
      return _ ? window.innerHeight - k : k;
    })) != null ? b : [];
  }, [n]), m = E.useMemo(() => d !== null ? p == null ? void 0 : p[d] : null, [p, d]), h = E.useCallback((b) => {
    var y;
    let _ = (y = p == null ? void 0 : p.findIndex(($) => $ === b)) != null ? y : null;
    s(_), lt(r.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `translate3d(0, ${b}px, 0)` }), p && _ !== p.length - 1 && _ !== a ? lt(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "0" }) : lt(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), c(_ !== null ? n == null ? void 0 : n[_] : null);
  }, [r.current, n, p, a, o, c]);
  E.useEffect(() => {
    var b;
    if (e) {
      let y = (b = n == null ? void 0 : n.findIndex((_) => _ === e)) != null ? b : null;
      p && y && typeof p[y] == "number" && h(p[y]);
    }
  }, [e, n, p, h]);
  function v({ draggedDistance: b, closeDrawer: y, velocity: _, dismissible: $ }) {
    if (a === void 0)
      return;
    let N = m - b, k = d === a - 1, S = d === 0, P = b > 0;
    if (k && lt(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), _ > 2 && !P) {
      $ ? y() : h(p[0]);
      return;
    }
    if (_ > 2 && P && p && n) {
      h(p[n.length - 1]);
      return;
    }
    let Y = p == null ? void 0 : p.reduce((U, B) => typeof U != "number" || typeof B != "number" ? U : Math.abs(B - N) < Math.abs(U - N) ? B : U);
    if (_ > Qx && Math.abs(b) < window.innerHeight * 0.4) {
      let U = P ? 1 : -1;
      if (U > 0 && l) {
        h(p[n.length - 1]);
        return;
      }
      if (S && U < 0 && $ && y(), d === null)
        return;
      h(p[d + U]);
      return;
    }
    h(Y);
  }
  function g({ draggedDistance: b }) {
    if (m === null)
      return;
    let y = m - b;
    lt(r.current, { transform: `translate3d(0, ${y}px, 0)` });
  }
  function x(b, y) {
    if (!n || typeof d != "number" || !p || a === void 0)
      return null;
    let _ = d === a - 1;
    if (d >= a && y)
      return 0;
    if (_ && !y)
      return 1;
    if (!u && !_)
      return null;
    let $ = _ ? d + 1 : d - 1, N = _ ? p[$] - p[$ - 1] : p[$ + 1] - p[$], k = b / Math.abs(N);
    return _ ? 1 - k : k;
  }
  return { isLastSnapPoint: l, activeSnapPoint: i, shouldFade: u, getPercentageDragged: x, setActiveSnapPoint: c, activeSnapPointIndex: d, onRelease: v, onDrag: g, snapPointsOffset: p };
}
var ZM = 0.25, XM = 100, Ap = 8, Sr = 16, Ip = 26, Lp = "vaul-dragging";
function e0({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i, closeThreshold: c = ZM, scrollLockTimeout: l = XM, dismissible: u = !0, fadeFromIndex: d = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: h, modal: v = !0, onClose: g }) {
  var x;
  let [b = !1, y] = E.useState(!1), [_, $] = E.useState(!1), [N, k] = E.useState(!1), [S, P] = E.useState(!1), [Y, U] = E.useState(!1), [B, Z] = E.useState(!1), F = E.useRef(null), A = E.useRef(null), I = E.useRef(null), W = E.useRef(null), G = E.useRef(null), R = E.useRef(!1), M = E.useRef(null), K = E.useRef(0), X = E.useRef(!1), ae = E.useRef(0), ne = E.useRef(null), ge = E.useRef(((x = ne.current) == null ? void 0 : x.getBoundingClientRect().height) || 0), be = E.useRef(0), oe = E.useCallback((Ne) => {
    s && Ne === V.length - 1 && (A.current = new Date());
  }, []), { activeSnapPoint: ie, activeSnapPointIndex: pe, setActiveSnapPoint: H, onRelease: re, snapPointsOffset: V, onDrag: de, shouldFade: ve, getPercentageDragged: ye } = qM({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: m, drawerRef: ne, fadeFromIndex: d, overlayRef: F, onSnapPointChange: oe });
  VM({ isDisabled: !b || Y || !v || B || !_ });
  let { restorePositionSetting: O } = HM({ isOpen: b, modal: v, nested: i, hasBeenOpened: _ });
  function z() {
    return (window.innerWidth - Ip) / window.innerWidth;
  }
  function Q(Ne) {
    var Se;
    !u && !s || ne.current && !ne.current.contains(Ne.target) || (ge.current = ((Se = ne.current) == null ? void 0 : Se.getBoundingClientRect().height) || 0, U(!0), I.current = new Date(), Gx() && window.addEventListener("touchend", () => R.current = !1, { once: !0 }), Ne.target.setPointerCapture(Ne.pointerId), K.current = Ne.screenY);
  }
  function fe(Ne, Se) {
    var Re;
    let He = Ne, tt = (Re = window.getSelection()) == null ? void 0 : Re.toString(), nt = ne.current ? $s(ne.current) : null, Ot = new Date();
    if (A.current && Ot.getTime() - A.current.getTime() < 500)
      return !1;
    if (nt > 0)
      return !0;
    if (tt && tt.length > 0)
      return !1;
    if (G.current && Ot.getTime() - G.current.getTime() < l && nt === 0 || Se)
      return G.current = Ot, !1;
    for (; He; ) {
      if (He.scrollHeight > He.clientHeight) {
        if (He.scrollTop !== 0)
          return G.current = new Date(), !1;
        if (He.getAttribute("role") === "dialog")
          return !0;
      }
      He = He.parentNode;
    }
    return !0;
  }
  function le(Ne) {
    if (Y) {
      let Se = K.current - Ne.screenY, Re = Se > 0;
      if (s && pe === 0 && !u || !R.current && !fe(Ne.target, Re))
        return;
      if (ne.current.classList.add(Lp), R.current = !0, lt(ne.current, { transition: "none" }), lt(F.current, { transition: "none" }), s && de({ draggedDistance: Se }), Re && !s) {
        let zt = YM(Se);
        lt(ne.current, { transform: `translate3d(0, ${Math.min(zt * -1, 0)}px, 0)` });
        return;
      }
      let He = Math.abs(Se), tt = document.querySelector("[vaul-drawer-wrapper]"), nt = He / ge.current, Ot = ye(He, Re);
      Ot !== null && (nt = Ot);
      let Cr = 1 - nt;
      if ((ve || d && pe === d - 1) && (o == null || o(Ne, nt), lt(F.current, { opacity: `${Cr}`, transition: "none" }, !0)), tt && F.current && r) {
        let zt = Math.min(z() + nt * (1 - z()), 1), Jn = 8 - nt * 8, Zr = Math.max(0, 14 - nt * 14);
        lt(tt, { borderRadius: `${Jn}px`, transform: `scale(${zt}) translate3d(0, ${Zr}px, 0)`, transition: "none" }, !0);
      }
      s || lt(ne.current, { transform: `translate3d(0, ${He}px, 0)` });
    }
  }
  E.useEffect(() => () => {
    Ue(!1), O();
  }, []), E.useEffect(() => {
    var Ne;
    function Se() {
      var Re;
      if (!ne.current)
        return;
      let He = document.activeElement;
      if (fi(He) || X.current) {
        let tt = ((Re = window.visualViewport) == null ? void 0 : Re.height) || 0, nt = window.innerHeight - tt, Ot = ne.current.getBoundingClientRect().height || 0;
        be.current || (be.current = Ot);
        let Cr = ne.current.getBoundingClientRect().top;
        if (Math.abs(ae.current - nt) > 60 && (X.current = !X.current), s && s.length > 0 && V && pe) {
          let zt = V[pe] || 0;
          nt += zt;
        }
        if (ae.current = nt, Ot > tt || X.current) {
          let zt = ne.current.getBoundingClientRect().height, Jn = zt;
          zt > tt && (Jn = tt - Ip), h ? ne.current.style.height = `${zt - Math.max(nt, 0)}px` : ne.current.style.height = `${Math.max(Jn, tt - Cr)}px`;
        } else
          ne.current.style.height = `${be.current}px`;
        s && s.length > 0 && !X.current ? ne.current.style.bottom = "0px" : ne.current.style.bottom = `${Math.max(nt, 0)}px`;
      }
    }
    return (Ne = window.visualViewport) == null || Ne.addEventListener("resize", Se), () => {
      var Re;
      return (Re = window.visualViewport) == null ? void 0 : Re.removeEventListener("resize", Se);
    };
  }, [pe, s, V]);
  function se() {
    ne.current && (g == null || g(), lt(ne.current, { transform: "translate3d(0, 100%, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), lt(F.current, { opacity: "0", transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), Ue(!1), setTimeout(() => {
      k(!1), y(!1);
    }, 300), setTimeout(() => {
      s && H(s[0]);
    }, et.DURATION * 1e3));
  }
  E.useEffect(() => {
    if (!b && r) {
      let Ne = setTimeout(() => {
        ws(document.body);
      }, 200);
      return () => clearTimeout(Ne);
    }
  }, [b, r]), E.useEffect(() => {
    e ? (y(!0), $(!0)) : se();
  }, [e]), E.useEffect(() => {
    S && (t == null || t(b));
  }, [b]), E.useEffect(() => {
    P(!0);
  }, []);
  function we() {
    if (!ne.current)
      return;
    let Ne = document.querySelector("[vaul-drawer-wrapper]"), Se = $s(ne.current);
    lt(ne.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), lt(F.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), r && Se && Se > 0 && b && lt(Ne, { borderRadius: `${Ap}px`, overflow: "hidden", transform: `scale(${z()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` }, !0);
  }
  function Le(Ne) {
    var Se;
    if (!Y || !ne.current)
      return;
    R.current && fi(Ne.target) && Ne.target.blur(), ne.current.classList.remove(Lp), R.current = !1, U(!1), W.current = new Date();
    let Re = $s(ne.current);
    if (!fe(Ne.target, !1) || !Re || Number.isNaN(Re) || I.current === null)
      return;
    let He = W.current.getTime() - I.current.getTime(), tt = K.current - Ne.screenY, nt = Math.abs(tt) / He;
    if (nt > 0.05 && (Z(!0), setTimeout(() => {
      Z(!1);
    }, 200)), s) {
      re({ draggedDistance: tt, closeDrawer: se, velocity: nt, dismissible: u }), a == null || a(Ne, !0);
      return;
    }
    if (tt > 0) {
      we(), a == null || a(Ne, !0);
      return;
    }
    if (nt > Qx) {
      se(), a == null || a(Ne, !1);
      return;
    }
    let Ot = Math.min((Se = ne.current.getBoundingClientRect().height) != null ? Se : 0, window.innerHeight);
    if (Re >= Ot * c) {
      se(), a == null || a(Ne, !1);
      return;
    }
    a == null || a(Ne, !0), we();
  }
  E.useEffect(() => {
    b && (A.current = new Date(), Ue(!0));
  }, [b]), E.useEffect(() => {
    N && ne.current.querySelectorAll("*").forEach((Ne) => {
      let Se = Ne;
      (Se.scrollHeight > Se.clientHeight || Se.scrollWidth > Se.clientWidth) && Se.classList.add("vaul-scrollable");
    });
  }, [N]);
  function Ue(Ne) {
    let Se = document.querySelector("[vaul-drawer-wrapper]");
    !Se || !r || (Ne ? (lt(document.body, { background: "black" }, !0), lt(Se, { borderRadius: `${Ap}px`, overflow: "hidden", transform: `scale(${z()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })) : (ws(Se, "overflow"), ws(Se, "transform"), ws(Se, "borderRadius"), lt(Se, { transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })));
  }
  function yt(Ne) {
    let Se = Ne ? (window.innerWidth - Sr) / window.innerWidth : 1, Re = Ne ? -Sr : 0;
    M.current && window.clearTimeout(M.current), lt(ne.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Se}) translate3d(0, ${Re}px, 0)` }), !Ne && ne.current && (M.current = setTimeout(() => {
      lt(ne.current, { transition: "none", transform: `translate3d(0, ${$s(ne.current)}px, 0)` });
    }, 500));
  }
  function gn(Ne, Se) {
    if (Se < 0)
      return;
    let Re = (window.innerWidth - Sr) / window.innerWidth, He = Re + Se * (1 - Re), tt = -Sr + Se * Sr;
    lt(ne.current, { transform: `scale(${He}) translate3d(0, ${tt}px, 0)`, transition: "none" });
  }
  function St(Ne, Se) {
    let Re = Se ? (window.innerWidth - Sr) / window.innerWidth : 1, He = Se ? -Sr : 0;
    Se && lt(ne.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Re}) translate3d(0, ${He}px, 0)` });
  }
  return E.createElement(Mi, { modal: v, onOpenChange: (Ne) => {
    if (e !== void 0) {
      t == null || t(Ne);
      return;
    }
    Ne ? ($(!0), y(Ne)) : se();
  }, open: b }, E.createElement(Kx.Provider, { value: { visible: N, activeSnapPoint: ie, snapPoints: s, setActiveSnapPoint: H, drawerRef: ne, overlayRef: F, scaleBackground: Ue, onOpenChange: t, onPress: Q, setVisible: k, onRelease: Le, onDrag: le, dismissible: u, isOpen: b, shouldFade: ve, closeDrawer: se, onNestedDrag: gn, onNestedOpenChange: yt, onNestedRelease: St, keyboardIsOpen: X, openProp: e, modal: v, snapPointsOffset: V } }, n));
}
var t0 = E.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = Nd(), l = Zx(n, r), u = o && o.length > 0;
  return E.createElement(Do, { onMouseUp: a, ref: l, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
t0.displayName = "Drawer.Overlay";
var n0 = E.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: l, dismissible: u, keyboardIsOpen: d, snapPointsOffset: p, visible: m, closeDrawer: h, modal: v, openProp: g, onOpenChange: x, setVisible: b } = Nd(), y = Zx(a, s);
  return E.useEffect(() => {
    b(!0);
  }, []), E.createElement(Ro, { onOpenAutoFocus: (_) => {
    e ? e(_) : (_.preventDefault(), s.current.focus());
  }, onPointerDown: i, onPointerDownOutside: (_) => {
    if (t == null || t(_), !v) {
      _.preventDefault();
      return;
    }
    d.current && (d.current = !1), _.preventDefault(), x == null || x(!1), !(!u || g !== void 0) && h();
  }, onPointerMove: l, onPointerUp: c, ref: y, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-visible": m ? "true" : "false" });
});
n0.displayName = "Drawer.Content";
function QM({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = Nd();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return E.createElement(e0, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var vn = { Root: e0, NestedRoot: QM, Content: n0, Overlay: t0, Trigger: Di, Portal: Mo, Close: Io, Title: jo, Description: Ao };
const JM = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  vn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
JM.displayName = "Drawer";
const fR = vn.Trigger, eD = vn.Portal, pR = vn.Close, r0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vn.Overlay,
  {
    ref: n,
    className: j("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
r0.displayName = vn.Overlay.displayName;
const tD = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(eD, { children: [
  /* @__PURE__ */ f.exports.jsx(r0, {}),
  /* @__PURE__ */ f.exports.jsxs(
    vn.Content,
    {
      ref: r,
      className: j(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
tD.displayName = "DrawerContent";
const nD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
nD.displayName = "DrawerHeader";
const rD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
rD.displayName = "DrawerFooter";
const oD = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vn.Title,
  {
    ref: n,
    className: j(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
oD.displayName = vn.Title.displayName;
const aD = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vn.Description,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
aD.displayName = vn.Description.displayName;
var sD = Object.defineProperty, iD = Object.defineProperties, cD = Object.getOwnPropertyDescriptors, pi = Object.getOwnPropertySymbols, o0 = Object.prototype.hasOwnProperty, a0 = Object.prototype.propertyIsEnumerable, Fp = (e, t, n) => t in e ? sD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lD = (e, t) => {
  for (var n in t || (t = {}))
    o0.call(t, n) && Fp(e, n, t[n]);
  if (pi)
    for (var n of pi(t))
      a0.call(t, n) && Fp(e, n, t[n]);
  return e;
}, uD = (e, t) => iD(e, cD(t)), dD = (e, t) => {
  var n = {};
  for (var r in e)
    o0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && pi)
    for (var r of pi(e))
      t.indexOf(r) < 0 && a0.call(e, r) && (n[r] = e[r]);
  return n;
}, fD = "^\\d+$";
function pD(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
var mD = 18, hD = "40px", vD = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function gD({ inputRef: e, pwmAreaRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let o = C.useRef({ done: !1, refocused: !1 }), [a, s] = C.useState(!1), [i, c] = C.useState(!1), [l, u] = C.useState(!1), d = C.useMemo(() => n === "none" ? !1 : n === "increase-width" && a && i || n === "experimental-no-flickering" && (!l || l && i && a), [l, a, i, n]), p = C.useCallback(() => {
    let m = e.current, h = t.current;
    if (!m || !h || l || n === "none")
      return;
    let v = n === "increase-width" ? m : h, g = v.getBoundingClientRect().left + v.offsetWidth, x = v.getBoundingClientRect().top + v.offsetHeight / 2, b = g - mD, y = x, _ = document.elementFromPoint(b, y);
    if ((document.querySelectorAll(vD).length > 0 || _ !== m) && (s(!0), u(!0), !o.current.refocused && document.activeElement === m)) {
      let $ = [m.selectionStart, m.selectionEnd];
      m.blur(), m.focus(), m.setSelectionRange($[0], $[1]), o.current.refocused = !0;
    }
  }, [l, e, n, t]);
  return C.useEffect(() => {
    let m = new IntersectionObserver((h) => {
      let v = h[0];
      c(v.intersectionRatio > 0.99);
    }, { threshold: 1, root: null, rootMargin: "0px" });
    return t.current && m.observe(t.current), () => {
      m.disconnect();
    };
  }, [t]), C.useEffect(() => {
    let m = r || document.activeElement === e.current;
    if (n === "none" || !m)
      return;
    let h = setTimeout(p, 0), v = setTimeout(p, 2e3), g = setTimeout(p, 5e3), x = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(v), clearTimeout(g), clearTimeout(x);
    };
  }, [e, r, n, p]), { willPushPWMBadge: d, PWM_BADGE_SPACE_WIDTH: hD };
}
function bD(e) {
  let t = C.useRef();
  return C.useEffect(() => {
    t.current = e;
  }), t.current;
}
var s0 = C.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: s = "left", pattern: i = fD, inputMode: c = "numeric", onComplete: l, pushPasswordManagerStrategy: u = "increase-width", render: d, containerClassName: p, noScriptCSSFallback: m = xD } = n, h = dD(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "render", "containerClassName", "noScriptCSSFallback"]), v, g, x, b;
  let [y, _] = C.useState(typeof h.defaultValue == "string" ? h.defaultValue : ""), $ = r ?? y, N = bD($), k = C.useCallback((H) => {
    o == null || o(H), _(H);
  }, [o]), S = C.useMemo(() => i ? typeof i == "string" ? new RegExp(i) : i : null, [i]), P = C.useRef(null), Y = C.useRef(null), U = C.useRef(null), B = C.useRef({ value: $, onChange: k, isIOS: typeof window < "u" && ((v = window == null ? void 0 : window.CSS) == null ? void 0 : v.supports("-webkit-touch-callout", "none")) }), Z = C.useRef({ prev: [(g = P.current) == null ? void 0 : g.selectionStart, (x = P.current) == null ? void 0 : x.selectionEnd, (b = P.current) == null ? void 0 : b.selectionDirection] });
  C.useImperativeHandle(t, () => P.current, []), C.useEffect(() => {
    let H = P.current, re = Y.current;
    if (!H || !re)
      return;
    B.current.value !== H.value && B.current.onChange(H.value), Z.current.prev = [H.selectionStart, H.selectionEnd, H.selectionDirection];
    function V() {
      if (document.activeElement !== H) {
        R(null), K(null);
        return;
      }
      let ye = H.selectionStart, O = H.selectionEnd, z = H.selectionDirection, Q = H.maxLength, fe = H.value, le = Z.current.prev, se = -1, we = -1, Le;
      if (fe.length !== 0 && ye !== null && O !== null) {
        let St = ye === O, Ne = ye === fe.length && fe.length < Q;
        if (St && !Ne) {
          let Se = ye;
          if (Se === 0)
            se = 0, we = 1, Le = "forward";
          else if (Se === Q)
            se = Se - 1, we = Se, Le = "backward";
          else if (Q > 2 && fe.length > 2) {
            let Re = 0;
            if (le[0] !== null && le[1] !== null) {
              Le = Se < le[1] ? "backward" : "forward";
              let He = le[0] === le[1] && le[0] < Q;
              Le === "backward" && !He && (Re = -1);
            }
            se = Re + Se, we = Re + Se + 1;
          }
        }
        se !== -1 && we !== -1 && se !== we && P.current.setSelectionRange(se, we, Le);
      }
      let Ue = se !== -1 ? se : ye, yt = we !== -1 ? we : O, gn = Le ?? z;
      R(Ue), K(yt), Z.current.prev = [Ue, yt, gn];
    }
    if (document.addEventListener("selectionchange", V, { capture: !0 }), V(), document.activeElement === H && W(!0), !document.getElementById("input-otp-style")) {
      let ye = document.createElement("style");
      if (ye.id = "input-otp-style", document.head.appendChild(ye), ye.sheet) {
        let O = "background: transparent !important; text: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        ea(ye.sheet, "[data-input-otp]::selection { background: transparent !important; }"), ea(ye.sheet, `[data-input-otp]:autofill { ${O} }`), ea(ye.sheet, `[data-input-otp]:-webkit-autofill { ${O} }`), ea(ye.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), ea(ye.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let de = () => {
      re && re.style.setProperty("--root-height", `${H.clientHeight}px`);
    };
    de();
    let ve = new ResizeObserver(de);
    return ve.observe(H), () => {
      document.removeEventListener("selectionchange", V, { capture: !0 }), ve.disconnect();
    };
  }, []);
  let [F, A] = C.useState(!1), [I, W] = C.useState(!1), [G, R] = C.useState(null), [M, K] = C.useState(null);
  C.useEffect(() => {
    pD(() => {
      var H, re, V, de;
      (H = P.current) == null || H.dispatchEvent(new Event("input"));
      let ve = (re = P.current) == null ? void 0 : re.selectionStart, ye = (V = P.current) == null ? void 0 : V.selectionEnd, O = (de = P.current) == null ? void 0 : de.selectionDirection;
      ve !== null && ye !== null && (R(ve), K(ye), Z.current.prev = [ve, ye, O]);
    });
  }, [$, I]), C.useEffect(() => {
    N !== void 0 && $ !== N && N.length < a && $.length === a && (l == null || l($));
  }, [a, l, N, $]);
  let X = gD({ inputRef: P, pwmAreaRef: U, pushPasswordManagerStrategy: u, isFocused: I }), ae = C.useCallback((H) => {
    let re = H.currentTarget.value.slice(0, a);
    if (re.length > 0 && S && !S.test(re)) {
      H.preventDefault();
      return;
    }
    k(re);
  }, [a, k, S]), ne = C.useCallback(() => {
    var H;
    if (P.current) {
      let re = Math.min(P.current.value.length, a - 1), V = P.current.value.length;
      (H = P.current) == null || H.setSelectionRange(re, V), R(re), K(V);
    }
    W(!0);
  }, [a]), ge = C.useCallback((H) => {
    var re, V;
    let de = P.current;
    if (!B.current.isIOS || !H.clipboardData || !de)
      return;
    let ve = H.clipboardData.getData("text/plain");
    H.preventDefault();
    let ye = (re = P.current) == null ? void 0 : re.selectionStart, O = (V = P.current) == null ? void 0 : V.selectionEnd, z = (ye !== O ? $.slice(0, ye) + ve + $.slice(O) : $.slice(0, ye) + ve + $.slice(ye)).slice(0, a);
    if (z.length > 0 && S && !S.test(z))
      return;
    de.value = z, k(z);
    let Q = Math.min(z.length, a - 1), fe = z.length;
    de.setSelectionRange(Q, fe), R(Q), K(fe);
  }, [a, k, S, $]), be = C.useMemo(() => ({ position: "relative", cursor: h.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [h.disabled]), oe = C.useMemo(() => ({ position: "absolute", inset: 0, width: X.willPushPWMBadge ? `calc(100% + ${X.PWM_BADGE_SPACE_WIDTH})` : "100%", height: "100%", display: "flex", textAlign: s, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [X.PWM_BADGE_SPACE_WIDTH, X.willPushPWMBadge, s]), ie = C.useMemo(() => C.createElement("input", uD(lD({ autoComplete: h.autoComplete || "one-time-code" }, h), { "data-input-otp": !0, "data-input-otp-mss": G, "data-input-otp-mse": M, inputMode: c, pattern: S == null ? void 0 : S.source, style: oe, maxLength: a, value: $, ref: P, onPaste: (H) => {
    var re;
    ge(H), (re = h.onPaste) == null || re.call(h, H);
  }, onChange: ae, onMouseOver: (H) => {
    var re;
    A(!0), (re = h.onMouseOver) == null || re.call(h, H);
  }, onMouseLeave: (H) => {
    var re;
    A(!1), (re = h.onMouseLeave) == null || re.call(h, H);
  }, onFocus: (H) => {
    var re;
    ne(), (re = h.onFocus) == null || re.call(h, H);
  }, onBlur: (H) => {
    var re;
    W(!1), (re = h.onBlur) == null || re.call(h, H);
  } })), [ae, ne, ge, c, oe, a, M, G, h, S == null ? void 0 : S.source, $]), pe = C.useMemo(() => d({ slots: Array.from({ length: a }).map((H, re) => {
    let V = I && G !== null && M !== null && (G === M && re === G || re >= G && re < M), de = $[re] !== void 0 ? $[re] : null;
    return { char: de, isActive: V, hasFakeCaret: V && de === null };
  }), isFocused: I, isHovering: !h.disabled && F }), [I, F, a, M, G, h.disabled, d, $]);
  return C.createElement(C.Fragment, null, m !== null && C.createElement("noscript", null, C.createElement("style", null, m)), C.createElement("div", { ref: Y, "data-input-otp-container": !0, style: be, className: p }, C.createElement("div", { ref: U, style: { position: "absolute", top: 0, right: `calc(-1 * ${X.PWM_BADGE_SPACE_WIDTH})`, bottom: 0, left: "100%", pointerEvents: "none", userSelect: "none", background: "transparent" } }), pe, C.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, ie)));
});
s0.displayName = "Input";
function ea(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var xD = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
const yD = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  s0,
  {
    ref: n,
    containerClassName: j("flex items-center gap-2", e),
    ...t
  }
));
yD.displayName = "InputOTP";
const wD = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: j("flex items-center", e), ...t }));
wD.displayName = "InputOTPGroup";
const $D = C.forwardRef(({ char: e, hasFakeCaret: t, isActive: n, className: r, ...o }, a) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ref: a,
    className: j(
      "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
      n && "z-10 ring-2 ring-offset-background ring-ring",
      r
    ),
    ...o,
    children: [
      e,
      t && /* @__PURE__ */ f.exports.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
    ]
  }
));
$D.displayName = "InputOTPSlot";
const _D = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ f.exports.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ f.exports.jsx(ry, {}) }));
_D.displayName = "InputOTPSeparator";
const CD = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ f.exports.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
CD.displayName = "Breadcrumb";
const SD = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "ol",
  {
    ref: n,
    className: j(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
SD.displayName = "BreadcrumbList";
const ED = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "li",
  {
    ref: n,
    className: j("inline-flex items-center gap-1.5", e),
    ...t
  }
));
ED.displayName = "BreadcrumbItem";
const ND = C.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? cn : "a";
  return /* @__PURE__ */ f.exports.jsx(
    o,
    {
      ref: r,
      className: j("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
ND.displayName = "BreadcrumbLink";
const PD = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: j("font-normal text-foreground", e),
    ...t
  }
));
PD.displayName = "BreadcrumbPage";
const TD = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ f.exports.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: j("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ f.exports.jsx(Wr, {})
  }
);
TD.displayName = "BreadcrumbSeparator";
const OD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: j("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(oy, { className: "h-4 w-4" }),
      /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
OD.displayName = "BreadcrumbElipssis";
const mR = ({ children: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: "app-layout", children: e });
export {
  w8 as Accordion,
  OT as AccordionContent,
  PT as AccordionItem,
  TT as AccordionTrigger,
  b8 as AlertDialog,
  tT as AlertDialogAction,
  nT as AlertDialogCancel,
  ZP as AlertDialogContent,
  eT as AlertDialogDescription,
  QP as AlertDialogFooter,
  XP as AlertDialogHeader,
  JP as AlertDialogTitle,
  x8 as AlertDialogTrigger,
  mR as AppLayout,
  f8 as AspectRatio,
  lo as Avatar,
  uo as AvatarFallback,
  Or as AvatarImage,
  Rt as Badge,
  iR as BottomNavigation,
  CD as Breadcrumb,
  OD as BreadcrumbEllipsis,
  ED as BreadcrumbItem,
  ND as BreadcrumbLink,
  SD as BreadcrumbList,
  PD as BreadcrumbPage,
  TD as BreadcrumbSeparator,
  Fe as Button,
  Yo as CI_TYPES,
  b$ as Calendar,
  gv as Card,
  UE as CardContent,
  WE as CardDescription,
  zE as CardFooter,
  FE as CardHeader,
  VE as CardTitle,
  TM as Carousel,
  OM as CarouselContent,
  kM as CarouselItem,
  DM as CarouselNext,
  MM as CarouselPrevious,
  wv as Checkbox,
  nR as CodeVerification,
  $8 as Collapsible,
  C8 as CollapsibleContent,
  _8 as CollapsibleTrigger,
  E7 as ComboBox,
  sR as ComboxCheckbox,
  Bn as Command,
  d8 as CommandDialog,
  pr as CommandEmpty,
  dn as CommandGroup,
  fr as CommandInput,
  fn as CommandItem,
  Xa as CommandList,
  zi as CommandSeparator,
  rP as CommandShortcut,
  BD as ContextMenu,
  VC as ContextMenuCheckboxItem,
  LC as ContextMenuContent,
  YD as ContextMenuGroup,
  FC as ContextMenuItem,
  UC as ContextMenuLabel,
  KD as ContextMenuPortal,
  qD as ContextMenuRadioGroup,
  WC as ContextMenuRadioItem,
  zC as ContextMenuSeparator,
  BC as ContextMenuShortcut,
  GD as ContextMenuSub,
  IC as ContextMenuSubContent,
  AC as ContextMenuSubTrigger,
  HD as ContextMenuTrigger,
  dR as D4TCardsList,
  Vx as D4TImage,
  J8 as D4TTable,
  qh as Dialog,
  Uu as DialogContent,
  MS as DialogDescription,
  OS as DialogFooter,
  TS as DialogHeader,
  kS as DialogTitle,
  XD as DialogTrigger,
  JM as Drawer,
  pR as DrawerClose,
  tD as DrawerContent,
  aD as DrawerDescription,
  rD as DrawerFooter,
  nD as DrawerHeader,
  r0 as DrawerOverlay,
  eD as DrawerPortal,
  oD as DrawerTitle,
  fR as DrawerTrigger,
  o8 as DropdownMenu,
  EN as DropdownMenuCheckboxItem,
  CN as DropdownMenuContent,
  s8 as DropdownMenuGroup,
  SN as DropdownMenuItem,
  PN as DropdownMenuLabel,
  i8 as DropdownMenuPortal,
  l8 as DropdownMenuRadioGroup,
  NN as DropdownMenuRadioItem,
  TN as DropdownMenuSeparator,
  ON as DropdownMenuShortcut,
  c8 as DropdownMenuSub,
  _N as DropdownMenuSubContent,
  $N as DropdownMenuSubTrigger,
  a8 as DropdownMenuTrigger,
  Fh as Form,
  Ya as FormControl,
  ko as FormDescription,
  Hr as FormField,
  wr as FormItem,
  Yr as FormLabel,
  uS as FormMessage,
  aR as GenericCombobox,
  eR as GenericSelect,
  N8 as HoverCard,
  UT as HoverCardContent,
  P8 as HoverCardTrigger,
  zu as Input,
  yD as InputOTP,
  wD as InputOTPGroup,
  _D as InputOTPSeparator,
  $D as InputOTPSlot,
  QD as InputPID,
  da as InputUI,
  Tn as Label,
  T8 as LoaderDots,
  m6 as Menubar,
  y6 as MenubarCheckboxItem,
  b6 as MenubarContent,
  M8 as MenubarGroup,
  x6 as MenubarItem,
  $6 as MenubarLabel,
  k8 as MenubarMenu,
  D8 as MenubarPortal,
  j8 as MenubarRadioGroup,
  w6 as MenubarRadioItem,
  _6 as MenubarSeparator,
  C6 as MenubarShortcut,
  R8 as MenubarSub,
  g6 as MenubarSubContent,
  v6 as MenubarSubTrigger,
  h6 as MenubarTrigger,
  oR as MultipleImages,
  gx as NavLink,
  C4 as NavLinkNested,
  X6 as NavigationMenu,
  tO as NavigationMenuContent,
  nO as NavigationMenuIndicator,
  I8 as NavigationMenuItem,
  L8 as NavigationMenuLink,
  Q6 as NavigationMenuList,
  eO as NavigationMenuTrigger,
  _b as NavigationMenuViewport,
  sc as PHONE_LINE_CODES,
  Un as Popover,
  _n as PopoverContent,
  zn as PopoverTrigger,
  fO as Progress,
  TO as RadioGroup,
  OO as RadioGroupItem,
  CP as ScrollArea,
  mg as ScrollBar,
  Ku as Select,
  Li as SelectContent,
  AE as SelectGroup,
  Fi as SelectItem,
  IE as SelectLabel,
  LE as SelectSeparator,
  Ii as SelectTrigger,
  Gu as SelectValue,
  Ka as Separator,
  m8 as Sheet,
  v8 as SheetClose,
  EP as SheetContent,
  OP as SheetDescription,
  PP as SheetFooter,
  NP as SheetHeader,
  TP as SheetTitle,
  h8 as SheetTrigger,
  G8 as Sidebar,
  q8 as SidebarContent,
  _4 as SidebarFooter,
  n4 as SidebarHeader,
  Pt as Skeleton,
  ek as Slider,
  Gl as Spinner,
  tR as SwatchesPicker,
  Yk as Switch,
  bg as TableBody,
  MP as TableCaption,
  Ju as TableCell,
  kP as TableFooter,
  xg as TableHead,
  gg as TableHeader,
  Yi as TableRow,
  Qu as TableUI,
  z8 as Tabs,
  pk as TabsContent,
  dk as TabsList,
  fk as TabsTrigger,
  e8 as TextArea,
  ov as TextareaUI,
  vk as Toggle,
  $4 as ToggleTheme,
  Yn as Tooltip,
  Cn as TooltipContent,
  Hn as TooltipProvider,
  Kn as TooltipTrigger,
  rR as UploadImage,
  O$ as badgeVariants,
  oa as buttonVariants,
  Uo as camelToSnake,
  j as cn,
  ks as convertBytes,
  ac as convertHexToRGBA,
  DD as fetcher,
  AD as formatCI,
  Tf as formatCITypes,
  VD as formatCodePhoneLines,
  cR as formatListPagination,
  Z8 as formatPagination,
  FD as formatPhone,
  LD as formatPhoneNumber,
  ID as formatRIF,
  yp as generateUUID,
  Xc as generateUUIDToList,
  jD as getMultiOpacityColor,
  lR as initialListPagination,
  X8 as initialPagination,
  Q8 as insertColumn,
  uR as insertColumnList,
  j7 as listCamelToSnake,
  J6 as navigationMenuTriggerStyle,
  RD as simulateFetch,
  hk as toggleVariants,
  ki as useFormField,
  Ji as useSidebar
};
//# sourceMappingURL=index.es.js.map
