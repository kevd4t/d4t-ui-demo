import * as C from "react";
import E, { useCallback as ve, forwardRef as F, Children as Vt, isValidElement as ur, createElement as w, cloneElement as Mo, Fragment as qt, createContext as bt, useContext as Qe, useState as J, useEffect as ee, useRef as G, useMemo as _t, useLayoutEffect as Ra, useReducer as yi, useDebugValue as S0, useImperativeHandle as E0 } from "react";
import * as N0 from "react-dom";
import ou, { flushSync as wi, createPortal as Jp } from "react-dom";
var gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var f = { exports: {} }, qo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yd;
function T0() {
  if (Yd)
    return qo;
  Yd = 1;
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
  return qo.Fragment = n, qo.jsx = s, qo.jsxs = s, qo;
}
var Zo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd;
function O0() {
  return Kd || (Kd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = E, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function g(D) {
      if (D === null || typeof D != "object")
        return null;
      var ce = v && D[v] || D[h];
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
    function W(D, ce, xe) {
      var Me = D.displayName;
      if (Me)
        return Me;
      var Ye = ce.displayName || ce.name || "";
      return Ye !== "" ? xe + "(" + Ye + ")" : xe;
    }
    function z(D) {
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
            return z(ce) + ".Consumer";
          case s:
            var xe = D;
            return z(xe._context) + ".Provider";
          case c:
            return W(D, D.render, "ForwardRef");
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
    var q = Object.assign, j = 0, L, I, K, R, T, B, X;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function ne() {
      {
        if (j === 0) {
          L = console.log, I = console.info, K = console.warn, R = console.error, T = console.group, B = console.groupCollapsed, X = console.groupEnd;
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
        j++;
      }
    }
    function ge() {
      {
        if (j--, j === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, D, {
              value: L
            }),
            info: q({}, D, {
              value: I
            }),
            warn: q({}, D, {
              value: K
            }),
            error: q({}, D, {
              value: R
            }),
            group: q({}, D, {
              value: T
            }),
            groupCollapsed: q({}, D, {
              value: B
            }),
            groupEnd: q({}, D, {
              value: X
            })
          });
        }
        j < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
            } catch (Mn) {
              Me = Mn;
            }
            Reflect.construct(D, [], ze);
          } else {
            try {
              ze.call();
            } catch (Mn) {
              Me = Mn;
            }
            D.call(ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Mn) {
            Me = Mn;
          }
          D();
        }
      } catch (Mn) {
        if (Mn && Me && typeof Mn.stack == "string") {
          for (var Ve = Mn.stack.split(`
`), kt = Me.stack.split(`
`), pt = Ve.length - 1, vt = kt.length - 1; pt >= 1 && vt >= 0 && Ve[pt] !== kt[vt]; )
            vt--;
          for (; pt >= 1 && vt >= 0; pt--, vt--)
            if (Ve[pt] !== kt[vt]) {
              if (pt !== 1 || vt !== 1)
                do
                  if (pt--, vt--, vt < 0 || Ve[pt] !== kt[vt]) {
                    var Yt = `
` + Ve[pt].replace(" at new ", " at ");
                    return D.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", D.displayName)), typeof D == "function" && H.set(D, Yt), Yt;
                  }
                while (pt >= 1 && vt >= 0);
              break;
            }
        }
      } finally {
        pe = !1, be.current = Je, ge(), Error.prepareStackTrace = Ye;
      }
      var to = D ? D.displayName || D.name : "", Hd = to ? ie(to) : "";
      return typeof D == "function" && H.set(D, Hd), Hd;
    }
    function de(D, ce, xe) {
      return V(D, !1);
    }
    function he(D) {
      var ce = D.prototype;
      return !!(ce && ce.isReactComponent);
    }
    function ye(D, ce, xe) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return V(D, he(D));
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
    var O = Object.prototype.hasOwnProperty, U = {}, Q = x.ReactDebugCurrentFrame;
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
            Ve && !(Ve instanceof Error) && (fe(Ye), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", xe, ze, typeof Ve), fe(null)), Ve instanceof Error && !(Ve.message in U) && (U[Ve.message] = !0, fe(Ye), b("Failed %s type: %s", xe, Ve.message), fe(null));
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
    var Et = x.ReactCurrentOwner, Ne = {
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
      if (typeof D.ref == "string" && Et.current && ce && Et.current.stateNode !== ce) {
        var xe = Z(Et.current.type);
        He[xe] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Et.current.type), D.ref), He[xe] = !0);
      }
    }
    function Nr(D, ce) {
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
    var er = function(D, ce, xe, Me, Ye, Je, ze) {
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
    function Jr(D, ce, xe, Me, Ye) {
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
          var vt = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Ve && Nr(ze, vt), kt && zt(ze, vt);
        }
        return er(D, Ve, kt, Ye, Me, Et.current, ze);
      }
    }
    var Go = x.ReactCurrentOwner, ns = x.ReactDebugCurrentFrame;
    function kn(D) {
      if (D) {
        var ce = D._owner, xe = ye(D.type, D._source, ce ? ce.type : null);
        ns.setExtraStackFrame(xe);
      } else
        ns.setExtraStackFrame(null);
    }
    var eo;
    eo = !1;
    function mc(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function Vd() {
      {
        if (Go.current) {
          var D = Z(Go.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function g0(D) {
      {
        if (D !== void 0) {
          var ce = D.fileName.replace(/^.*[\\\/]/, ""), xe = D.lineNumber;
          return `

Check your code at ` + ce + ":" + xe + ".";
        }
        return "";
      }
    }
    var Wd = {};
    function b0(D) {
      {
        var ce = Vd();
        if (!ce) {
          var xe = typeof D == "string" ? D : D.displayName || D.name;
          xe && (ce = `

Check the top-level render call using <` + xe + ">.");
        }
        return ce;
      }
    }
    function Ud(D, ce) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var xe = b0(ce);
        if (Wd[xe])
          return;
        Wd[xe] = !0;
        var Me = "";
        D && D._owner && D._owner !== Go.current && (Me = " It was passed a child from " + Z(D._owner.type) + "."), kn(D), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, Me), kn(null);
      }
    }
    function zd(D, ce) {
      {
        if (typeof D != "object")
          return;
        if (we(D))
          for (var xe = 0; xe < D.length; xe++) {
            var Me = D[xe];
            mc(Me) && Ud(Me, ce);
          }
        else if (mc(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var Ye = g(D);
          if (typeof Ye == "function" && Ye !== D.entries)
            for (var Je = Ye.call(D), ze; !(ze = Je.next()).done; )
              mc(ze.value) && Ud(ze.value, ce);
        }
      }
    }
    function x0(D) {
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
        } else if (ce.PropTypes !== void 0 && !eo) {
          eo = !0;
          var Ye = Z(ce);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ye || "Unknown");
        }
        typeof ce.getDefaultProps == "function" && !ce.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function y0(D) {
      {
        for (var ce = Object.keys(D.props), xe = 0; xe < ce.length; xe++) {
          var Me = ce[xe];
          if (Me !== "children" && Me !== "key") {
            kn(D), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), kn(null);
            break;
          }
        }
        D.ref !== null && (kn(D), b("Invalid attribute `ref` supplied to `React.Fragment`."), kn(null));
      }
    }
    function Bd(D, ce, xe, Me, Ye, Je) {
      {
        var ze = Y(D);
        if (!ze) {
          var Ve = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kt = g0(Ye);
          kt ? Ve += kt : Ve += Vd();
          var pt;
          D === null ? pt = "null" : we(D) ? pt = "array" : D !== void 0 && D.$$typeof === t ? (pt = "<" + (Z(D.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof D, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Ve);
        }
        var vt = Jr(D, ce, xe, Ye, Je);
        if (vt == null)
          return vt;
        if (ze) {
          var Yt = ce.children;
          if (Yt !== void 0)
            if (Me)
              if (we(Yt)) {
                for (var to = 0; to < Yt.length; to++)
                  zd(Yt[to], D);
                Object.freeze && Object.freeze(Yt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zd(Yt, D);
        }
        return D === r ? y0(vt) : x0(vt), vt;
      }
    }
    function w0(D, ce, xe) {
      return Bd(D, ce, xe, !0);
    }
    function $0(D, ce, xe) {
      return Bd(D, ce, xe, !1);
    }
    var _0 = $0, C0 = w0;
    Zo.Fragment = r, Zo.jsx = _0, Zo.jsxs = C0;
  }()), Zo;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = T0() : e.exports = O0();
})(f);
function M() {
  return M = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, M.apply(this, arguments);
}
function k0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ja(...e) {
  return (t) => e.forEach(
    (n) => k0(n, t)
  );
}
function Ee(...e) {
  return ve(ja(...e), e);
}
const cn = /* @__PURE__ */ F((e, t) => {
  const { children: n, ...r } = e, o = Vt.toArray(n), a = o.find(M0);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Vt.count(s) > 1 ? Vt.only(null) : /* @__PURE__ */ ur(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(pl, M({}, r, {
      ref: t
    }), /* @__PURE__ */ ur(s) ? /* @__PURE__ */ Mo(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(pl, M({}, r, {
    ref: t
  }), n);
});
cn.displayName = "Slot";
const pl = /* @__PURE__ */ F((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ ur(n) ? /* @__PURE__ */ Mo(n, {
    ...D0(r, n.props),
    ref: t ? ja(t, n.ref) : n.ref
  }) : Vt.count(n) > 1 ? Vt.only(null) : null;
});
pl.displayName = "SlotClone";
const au = ({ children: e }) => /* @__PURE__ */ w(qt, null, e);
function M0(e) {
  return /* @__PURE__ */ ur(e) && e.type === au;
}
function D0(e, t) {
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
function em(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = em(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function tm() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = em(e)) && (r && (r += " "), r += t);
  return r;
}
const Gd = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, qd = tm, Do = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return qd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const p = Gd(u) || Gd(d);
    return o[l][p];
  }), i = n && Object.entries(n).reduce((l, u) => {
    let [d, p] = u;
    return p === void 0 || (l[d] = p), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: p, ...m } = u;
    return Object.entries(m).every((v) => {
      let [h, g] = v;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...i
      }[h]) : {
        ...a,
        ...i
      }[h] === g;
    }) ? [
      ...l,
      d,
      p
    ] : l;
  }, []);
  return qd(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function b8(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const x8 = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, vc = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, y8 = (e) => {
  const t = vc(e), n = vc(e, 0.1), r = vc(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, hc = {
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
}, w8 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), $8 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), _8 = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), C8 = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, Is = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, S8 = () => [...hc.DIGITAL, ...hc.MOVILNET, ...hc.MOVISTAR], Xo = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function R0() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = nm(t)) && (r && (r += " "), r += n);
  return r;
}
function nm(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = nm(e[r])) && (n && (n += " "), n += t);
  return n;
}
var su = "-";
function j0(e) {
  var t = I0(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(su);
    return c[0] === "" && c.length !== 1 && c.shift(), rm(c, t) || A0(i);
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
function rm(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? rm(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(su);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Zd = /^\[(.+)\]$/;
function A0(e) {
  if (Zd.test(e)) {
    var t = Zd.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function I0(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = F0(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    ml(i, r, s, t);
  }), r;
}
function ml(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : Xd(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (L0(o)) {
        ml(o(r), t, n, r);
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
      ml(c, Xd(t, i), n, r);
    });
  });
}
function Xd(e, t) {
  var n = e;
  return t.split(su).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function L0(e) {
  return e.isThemeGetter;
}
function F0(e, t) {
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
function V0(e) {
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
var om = "!";
function W0(e) {
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
    var m = i.length === 0 ? s : s.substring(l), v = m.startsWith(om), h = v ? m.substring(1) : m, g = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: v,
      baseClassName: h,
      maybePostfixModifierPosition: g
    };
  };
}
function U0(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function z0(e) {
  return {
    cache: V0(e.cacheSize),
    splitModifiers: W0(e),
    ...j0(e)
  };
}
var B0 = /\s+/;
function H0(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(B0).map(function(s) {
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
    var v = U0(c).join(":"), h = l ? v + om : v;
    return {
      isTailwindClass: !0,
      modifierId: h,
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
function Y0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var u = t[0], d = t.slice(1), p = d.reduce(function(m, v) {
      return v(m);
    }, u());
    return r = z0(p), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = H0(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(R0.apply(null, arguments));
  };
}
function rt(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var am = /^\[(?:([a-z-]+):)?(.+)\]$/i, K0 = /^\d+\/\d+$/, G0 = /* @__PURE__ */ new Set(["px", "full", "screen"]), q0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Z0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, X0 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Qt(e) {
  return kr(e) || G0.has(e) || K0.test(e) || vl(e);
}
function vl(e) {
  return zr(e, "length", ry);
}
function Q0(e) {
  return zr(e, "size", sm);
}
function J0(e) {
  return zr(e, "position", sm);
}
function ey(e) {
  return zr(e, "url", oy);
}
function rs(e) {
  return zr(e, "number", kr);
}
function kr(e) {
  return !Number.isNaN(Number(e));
}
function ty(e) {
  return e.endsWith("%") && kr(e.slice(0, -1));
}
function Qo(e) {
  return Qd(e) || zr(e, "number", Qd);
}
function We(e) {
  return am.test(e);
}
function Jo() {
  return !0;
}
function tr(e) {
  return q0.test(e);
}
function ny(e) {
  return zr(e, "", ay);
}
function zr(e, t, n) {
  var r = am.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function ry(e) {
  return Z0.test(e);
}
function sm() {
  return !1;
}
function oy(e) {
  return e.startsWith("url(");
}
function Qd(e) {
  return Number.isInteger(Number(e));
}
function ay(e) {
  return X0.test(e);
}
function sy() {
  var e = rt("colors"), t = rt("spacing"), n = rt("blur"), r = rt("brightness"), o = rt("borderColor"), a = rt("borderRadius"), s = rt("borderSpacing"), i = rt("borderWidth"), c = rt("contrast"), l = rt("grayscale"), u = rt("hueRotate"), d = rt("invert"), p = rt("gap"), m = rt("gradientColorStops"), v = rt("gradientColorStopPositions"), h = rt("inset"), g = rt("margin"), x = rt("opacity"), b = rt("padding"), y = rt("saturate"), _ = rt("scale"), $ = rt("sepia"), N = rt("skew"), k = rt("space"), S = rt("translate"), P = function() {
    return ["auto", "contain", "none"];
  }, Y = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, W = function() {
    return ["auto", We, t];
  }, z = function() {
    return [We, t];
  }, Z = function() {
    return ["", Qt];
  }, q = function() {
    return ["auto", kr, We];
  }, j = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, L = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, I = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, K = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R = function() {
    return ["", "0", We];
  }, T = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, B = function() {
    return [kr, rs];
  }, X = function() {
    return [kr, We];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Jo],
      spacing: [Qt],
      blur: ["none", "", tr, We],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", tr, We],
      borderSpacing: z(),
      borderWidth: Z(),
      contrast: B(),
      grayscale: R(),
      hueRotate: X(),
      invert: R(),
      gap: z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ty, vl],
      inset: W(),
      margin: W(),
      opacity: B(),
      padding: z(),
      saturate: B(),
      scale: B(),
      sepia: R(),
      skew: X(),
      space: z(),
      translate: z()
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
        columns: [tr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": T()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": T()
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
        object: [].concat(j(), [We])
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        z: ["auto", Qo]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: W()
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
        order: ["first", "last", "none", Qo]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Jo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Qo]
        }, We]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Jo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Qo]
        }, We]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": q()
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
        justify: ["normal"].concat(K())
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
        content: ["normal"].concat(K(), ["baseline"])
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
        "place-content": [].concat(K(), ["baseline"])
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
          screen: [tr]
        }, tr, We]
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
        text: ["base", tr, vl]
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
        font: [Jo]
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
        "line-clamp": ["none", kr, rs]
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
        decoration: [].concat(L(), ["wavy"])
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
        indent: z()
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
        bg: [].concat(j(), [J0])
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
        bg: ["auto", "cover", "contain", Q0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ey]
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
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
        border: [].concat(L(), ["hidden"])
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
        divide: L()
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
        outline: [""].concat(L())
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
        shadow: ["", "inner", "none", tr, ny]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Jo]
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
        "mix-blend": I()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": I()
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
        "drop-shadow": ["", "none", tr, We]
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
        rotate: [Qo, We]
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
        "scroll-m": z()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": z()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": z()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": z()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": z()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": z()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": z()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": z()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": z()
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
var iy = /* @__PURE__ */ Y0(sy);
function A(...e) {
  return iy(tm(e));
}
const iu = ({ className: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: A(`spinner h-4 w-4 ${e}`) }), wo = Do(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
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
  ({ className: e, isLoading: t, children: n, variant: r, size: o, asChild: a = !1, ...s }, i) => {
    const c = a ? cn : "button";
    return /* @__PURE__ */ f.exports.jsx(
      c,
      {
        className: A(wo({ variant: r, size: o, className: e })),
        ref: i,
        ...s,
        children: t ? /* @__PURE__ */ f.exports.jsx(iu, {}) : n
      }
    );
  }
);
Fe.displayName = "Button";
var cy = {
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
const ly = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uy = (e, t) => {
  const n = F(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => w(
      "svg",
      {
        ref: l,
        ...cy,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${ly(e)}`,
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
var ot = uy;
const dy = ot("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]), fy = ot("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]), ln = ot("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), ia = ot("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), $i = ot("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), xr = ot("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Jd = ot("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), hl = ot("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), _i = ot("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), py = ot("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]), Ls = ot("Download", [
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
]), gc = ot("ImageOff", [
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
]), cu = ot("ImagePlus", [
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
]), im = ot("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), cm = ot("MoreHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]), my = ot("PanelLeftClose", [
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
]), vy = ot("PanelLeftOpen", [
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
]), lm = ot("PanelLeft", [
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
]), um = ot("PenSquare", [
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
]), Fs = ot("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), dm = ot("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), hy = ot("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), Ci = ot("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function bc(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function ea(e) {
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
function ta(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? by(i, function(d) {
      return d.test(s);
    }) : gy(i, function(d) {
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
function gy(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function by(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function xy(e) {
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
function $o(e) {
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e);
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
  return e instanceof Date || $o(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Gt(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = xt(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function wn(e, t) {
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
function yy(e, t) {
  Te(2, arguments);
  var n = Ie(e).getTime(), r = xt(t);
  return new Date(n + r);
}
var wy = {};
function yr() {
  return wy;
}
function $n(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = yr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ie(e), m = p.getDay(), v = (m < d ? 7 : 0) + m - d;
  return p.setDate(p.getDate() - v), p.setHours(0, 0, 0, 0), p;
}
function Ar(e) {
  return Te(1, arguments), $n(e, {
    weekStartsOn: 1
  });
}
function $y(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Ar(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Ar(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function _y(e) {
  Te(1, arguments);
  var t = $y(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Ar(n);
  return r;
}
function ca(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function _o(e) {
  Te(1, arguments);
  var t = Ie(e);
  return t.setHours(0, 0, 0, 0), t;
}
var Cy = 864e5;
function In(e, t) {
  Te(2, arguments);
  var n = _o(e), r = _o(t), o = n.getTime() - ca(n), a = r.getTime() - ca(r);
  return Math.round((o - a) / Cy);
}
function gl(e, t) {
  Te(2, arguments);
  var n = xt(t), r = n * 7;
  return Gt(e, r);
}
function Sy(e, t) {
  Te(2, arguments);
  var n = xt(t);
  return wn(e, n * 12);
}
function Ey(e) {
  Te(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if ($o(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Ie(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function Ny(e) {
  Te(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if ($o(e) === "object" && e !== null)
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
  var n = _o(e), r = _o(t);
  return n.getTime() === r.getTime();
}
function lu(e) {
  return Te(1, arguments), e instanceof Date || $o(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Py(e) {
  if (Te(1, arguments), !lu(e) && typeof e != "number")
    return !1;
  var t = Ie(e);
  return !isNaN(Number(t));
}
function la(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var Ty = 6048e5;
function Oy(e, t, n) {
  Te(2, arguments);
  var r = $n(e, n), o = $n(t, n), a = r.getTime() - ca(r), s = o.getTime() - ca(o);
  return Math.round((a - s) / Ty);
}
function uu(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Wt(e) {
  Te(1, arguments);
  var t = Ie(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function ky(e) {
  Te(1, arguments);
  var t = Ie(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function du(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = yr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ie(e), m = p.getDay(), v = (m < d ? -7 : 0) + 6 - (m - d);
  return p.setDate(p.getDate() + v), p.setHours(23, 59, 59, 999), p;
}
function fm(e) {
  return Te(1, arguments), du(e, {
    weekStartsOn: 1
  });
}
function My(e, t) {
  Te(2, arguments);
  var n = xt(t);
  return yy(e, -n);
}
var Dy = 864e5;
function Ry(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / Dy) + 1;
}
function Vs(e) {
  Te(1, arguments);
  var t = 1, n = Ie(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function pm(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = Vs(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = Vs(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function jy(e) {
  Te(1, arguments);
  var t = pm(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Vs(n);
  return r;
}
var Ay = 6048e5;
function Iy(e) {
  Te(1, arguments);
  var t = Ie(e), n = Vs(t).getTime() - jy(t).getTime();
  return Math.round(n / Ay) + 1;
}
function Ws(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = yr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ie(e), m = p.getUTCDay(), v = (m < d ? 7 : 0) + m - d;
  return p.setUTCDate(p.getUTCDate() - v), p.setUTCHours(0, 0, 0, 0), p;
}
function mm(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = Ie(e), d = u.getUTCFullYear(), p = yr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setUTCFullYear(d + 1, 0, m), v.setUTCHours(0, 0, 0, 0);
  var h = Ws(v, t), g = new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var x = Ws(g, t);
  return u.getTime() >= h.getTime() ? d + 1 : u.getTime() >= x.getTime() ? d : d - 1;
}
function Ly(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = yr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = mm(e, t), m = new Date(0);
  m.setUTCFullYear(p, 0, d), m.setUTCHours(0, 0, 0, 0);
  var v = Ws(m, t);
  return v;
}
var Fy = 6048e5;
function Vy(e, t) {
  Te(1, arguments);
  var n = Ie(e), r = Ws(n, t).getTime() - Ly(n, t).getTime();
  return Math.round(r / Fy) + 1;
}
function qe(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Wy = {
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
const nr = Wy;
var no = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Uy = {
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
    return nr.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = mm(t, o), s = a > 0 ? a : 1 - a;
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
    var r = pm(t);
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
        return nr.M(t, n);
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
    var a = Vy(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : qe(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = Iy(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : qe(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : nr.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = Ry(t);
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
    switch (o === 12 ? a = no.noon : o === 0 ? a = no.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = no.evening : o >= 12 ? a = no.afternoon : o >= 4 ? a = no.morning : a = no.night, n) {
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
    return nr.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : nr.H(t, n);
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
    }) : nr.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : nr.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return nr.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return tf(s);
      case "XXXX":
      case "XX":
        return Tr(s);
      case "XXXXX":
      case "XXX":
      default:
        return Tr(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return tf(s);
      case "xxxx":
      case "xx":
        return Tr(s);
      case "xxxxx":
      case "xxx":
      default:
        return Tr(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ef(s, ":");
      case "OOOO":
      default:
        return "GMT" + Tr(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ef(s, ":");
      case "zzzz":
      default:
        return "GMT" + Tr(s, ":");
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
function ef(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + qe(a, 2);
}
function tf(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + qe(Math.abs(e) / 60, 2);
  }
  return Tr(e, t);
}
function Tr(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = qe(Math.floor(o / 60), 2), s = qe(o % 60, 2);
  return r + a + n + s;
}
const zy = Uy;
var nf = function(t, n) {
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
}, vm = function(t, n) {
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
}, By = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return nf(t, n);
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
  return s.replace("{{date}}", nf(o, n)).replace("{{time}}", vm(a, n));
}, Hy = {
  p: vm,
  P: By
};
const Yy = Hy;
var Ky = ["D", "DD"], Gy = ["YY", "YYYY"];
function qy(e) {
  return Ky.indexOf(e) !== -1;
}
function Zy(e) {
  return Gy.indexOf(e) !== -1;
}
function rf(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Xy = {
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
}, Qy = function(t, n, r) {
  var o, a = Xy[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Jy = Qy;
var e1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, t1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, n1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, r1 = {
  date: bc({
    formats: e1,
    defaultWidth: "full"
  }),
  time: bc({
    formats: t1,
    defaultWidth: "full"
  }),
  dateTime: bc({
    formats: n1,
    defaultWidth: "full"
  })
};
const o1 = r1;
var a1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, s1 = function(t, n, r, o) {
  return a1[t];
};
const i1 = s1;
var c1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, l1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, u1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, d1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, f1 = {
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
}, p1 = {
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
}, m1 = function(t, n) {
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
}, v1 = {
  ordinalNumber: m1,
  era: ea({
    values: c1,
    defaultWidth: "wide"
  }),
  quarter: ea({
    values: l1,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: ea({
    values: u1,
    defaultWidth: "wide"
  }),
  day: ea({
    values: d1,
    defaultWidth: "wide"
  }),
  dayPeriod: ea({
    values: f1,
    defaultWidth: "wide",
    formattingValues: p1,
    defaultFormattingWidth: "wide"
  })
};
const h1 = v1;
var g1 = /^(\d+)(th|st|nd|rd)?/i, b1 = /\d+/i, x1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, y1 = {
  any: [/^b/i, /^(a|c)/i]
}, w1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, $1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, _1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, C1 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, S1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, E1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, N1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, P1 = {
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
}, T1 = {
  ordinalNumber: xy({
    matchPattern: g1,
    parsePattern: b1,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: ta({
    matchPatterns: x1,
    defaultMatchWidth: "wide",
    parsePatterns: y1,
    defaultParseWidth: "any"
  }),
  quarter: ta({
    matchPatterns: w1,
    defaultMatchWidth: "wide",
    parsePatterns: $1,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: ta({
    matchPatterns: _1,
    defaultMatchWidth: "wide",
    parsePatterns: C1,
    defaultParseWidth: "any"
  }),
  day: ta({
    matchPatterns: S1,
    defaultMatchWidth: "wide",
    parsePatterns: E1,
    defaultParseWidth: "any"
  }),
  dayPeriod: ta({
    matchPatterns: N1,
    defaultMatchWidth: "any",
    parsePatterns: P1,
    defaultParseWidth: "any"
  })
};
const O1 = T1;
var k1 = {
  code: "en-US",
  formatDistance: Jy,
  formatLong: o1,
  formatRelative: i1,
  localize: h1,
  match: O1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const hm = k1;
var M1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, D1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, R1 = /^'([^]*?)'?$/, j1 = /''/g, A1 = /[a-zA-Z]/;
function Br(e, t, n) {
  var r, o, a, s, i, c, l, u, d, p, m, v, h, g, x, b, y, _;
  Te(2, arguments);
  var $ = String(t), N = yr(), k = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : N.locale) !== null && r !== void 0 ? r : hm, S = xt((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : N.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = N.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(S >= 1 && S <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var P = xt((m = (v = (h = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (x = n.locale) === null || x === void 0 || (b = x.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && h !== void 0 ? h : N.weekStartsOn) !== null && v !== void 0 ? v : (y = N.locale) === null || y === void 0 || (_ = y.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(P >= 0 && P <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!k.localize)
    throw new RangeError("locale must contain localize property");
  if (!k.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Y = Ie(e);
  if (!Py(Y))
    throw new RangeError("Invalid time value");
  var W = ca(Y), z = My(Y, W), Z = {
    firstWeekContainsDate: S,
    weekStartsOn: P,
    locale: k,
    _originalDate: Y
  }, q = $.match(D1).map(function(j) {
    var L = j[0];
    if (L === "p" || L === "P") {
      var I = Yy[L];
      return I(j, k.formatLong);
    }
    return j;
  }).join("").match(M1).map(function(j) {
    if (j === "''")
      return "'";
    var L = j[0];
    if (L === "'")
      return I1(j);
    var I = zy[L];
    if (I)
      return !(n != null && n.useAdditionalWeekYearTokens) && Zy(j) && rf(j, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && qy(j) && rf(j, t, String(e)), I(z, j, k.localize, Z);
    if (L.match(A1))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + L + "`");
    return j;
  }).join("");
  return q;
}
function I1(e) {
  var t = e.match(R1);
  return t ? t[1].replace(j1, "'") : e;
}
function L1(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var F1 = 6048e5;
function V1(e) {
  Te(1, arguments);
  var t = Ie(e), n = Ar(t).getTime() - _y(t).getTime();
  return Math.round(n / F1) + 1;
}
function W1(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getTime();
  return n;
}
function U1(e) {
  return Te(1, arguments), Math.floor(W1(e) / 1e3);
}
function z1(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = Ie(e), d = u.getFullYear(), p = yr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setFullYear(d + 1, 0, m), v.setHours(0, 0, 0, 0);
  var h = $n(v, t), g = new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var x = $n(g, t);
  return u.getTime() >= h.getTime() ? d + 1 : u.getTime() >= x.getTime() ? d : d - 1;
}
function B1(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = yr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = z1(e, t), m = new Date(0);
  m.setFullYear(p, 0, d), m.setHours(0, 0, 0, 0);
  var v = $n(m, t);
  return v;
}
var H1 = 6048e5;
function Y1(e, t) {
  Te(1, arguments);
  var n = Ie(e), r = $n(n, t).getTime() - B1(n, t).getTime();
  return Math.round(r / H1) + 1;
}
function K1(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function G1(e, t) {
  return Te(1, arguments), Oy(K1(e), Wt(e), t) + 1;
}
function gm(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getTime() > r.getTime();
}
function bm(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getTime() < r.getTime();
}
function fu(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function q1(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getFullYear() === r.getFullYear();
}
function of(e, t) {
  Te(2, arguments);
  var n = xt(t);
  return Gt(e, -n);
}
function xc(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = xt(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = L1(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function af(e, t) {
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
function Z1(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function xm(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Aa(e) {
  return e.mode === "multiple";
}
function Ia(e) {
  return e.mode === "range";
}
function Si(e) {
  return e.mode === "single";
}
var X1 = {
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
function Q1(e, t) {
  return Br(e, "LLLL y", t);
}
function J1(e, t) {
  return Br(e, "d", t);
}
function ew(e, t) {
  return Br(e, "LLLL", t);
}
function tw(e) {
  return "".concat(e);
}
function nw(e, t) {
  return Br(e, "cccccc", t);
}
function rw(e, t) {
  return Br(e, "yyyy", t);
}
var ow = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Q1,
  formatDay: J1,
  formatMonthCaption: ew,
  formatWeekNumber: tw,
  formatWeekdayName: nw,
  formatYearCaption: rw
}), aw = function(e, t, n) {
  return Br(e, "do MMMM (EEEE)", n);
}, sw = function() {
  return "Month: ";
}, iw = function() {
  return "Go to next month";
}, cw = function() {
  return "Go to previous month";
}, lw = function(e, t) {
  return Br(e, "cccc", t);
}, uw = function(e) {
  return "Week n. ".concat(e);
}, dw = function() {
  return "Year: ";
}, fw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: aw,
  labelMonthDropdown: sw,
  labelNext: iw,
  labelPrevious: cw,
  labelWeekNumber: uw,
  labelWeekday: lw,
  labelYearDropdown: dw
});
function pw() {
  var e = "buttons", t = X1, n = hm, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: ow,
    labels: fw,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function mw(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Wt(r) : t && (a = new Date(t, 0, 1)), o ? s = uu(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? _o(a) : void 0,
    toDate: s ? _o(s) : void 0
  };
}
var ym = bt(void 0);
function vw(e) {
  var t, n = e.initialProps, r = pw(), o = mw(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (Si(n) || Aa(n) || Ia(n)) && (c = n.onSelect);
  var l = Oe(Oe(Oe({}, r), n), { captionLayout: i, classNames: Oe(Oe({}, r.classNames), n.classNames), components: Oe({}, n.components), formatters: Oe(Oe({}, r.formatters), n.formatters), fromDate: a, labels: Oe(Oe({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Oe(Oe({}, r.modifiers), n.modifiers), modifiersClassNames: Oe(Oe({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Oe(Oe({}, r.styles), n.styles), toDate: s });
  return E.createElement(ym.Provider, { value: l }, e.children);
}
function at() {
  var e = Qe(ym);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function wm(e) {
  var t = at(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return E.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function hw(e) {
  return E.createElement(
    "svg",
    Oe({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    E.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function $m(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = at(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : hw;
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
function gw(e) {
  var t, n = at(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return E.createElement(E.Fragment, null);
  if (!o)
    return E.createElement(E.Fragment, null);
  var d = [];
  if (q1(r, o))
    for (var p = Wt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      d.push(xc(p, m));
  else
    for (var p = Wt(new Date()), m = 0; m <= 11; m++)
      d.push(xc(p, m));
  var v = function(g) {
    var x = Number(g.target.value), b = xc(Wt(e.displayMonth), x);
    e.onChange(b);
  }, h = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : $m;
  return E.createElement(h, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: v, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return E.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function bw(e) {
  var t, n = e.displayMonth, r = at(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, p = [];
  if (!o)
    return E.createElement(E.Fragment, null);
  if (!a)
    return E.createElement(E.Fragment, null);
  for (var m = o.getFullYear(), v = a.getFullYear(), h = m; h <= v; h++)
    p.push(af(ky(new Date()), h));
  var g = function(b) {
    var y = af(Wt(n), Number(b.target.value));
    e.onChange(y);
  }, x = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : $m;
  return E.createElement(x, { name: "years", "aria-label": d(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, p.map(function(b) {
    return E.createElement("option", { key: b.getFullYear(), value: b.getFullYear() }, u(b, { locale: s }));
  }));
}
function xw(e, t) {
  var n = J(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function yw(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && la(a, o) < 0) {
    var l = -1 * (c - 1);
    o = wn(a, l);
  }
  return s && la(o, s) < 0 && (o = s), Wt(o);
}
function ww() {
  var e = at(), t = yw(e), n = xw(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Wt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function $w(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Wt(e), a = Wt(wn(o, r)), s = la(a, o), i = [], c = 0; c < s; c++) {
    var l = wn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function _w(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Wt(e);
    if (!n)
      return wn(i, s);
    var c = la(n, e);
    if (!(c < a))
      return wn(i, s);
  }
}
function Cw(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Wt(e);
    if (!n)
      return wn(i, -s);
    var c = la(i, n);
    if (!(c <= 0))
      return wn(i, -s);
  }
}
var _m = bt(void 0);
function Sw(e) {
  var t = at(), n = ww(), r = n[0], o = n[1], a = $w(r, t), s = _w(r, t), i = Cw(r, t), c = function(d) {
    return a.some(function(p) {
      return fu(d, p);
    });
  }, l = function(d, p) {
    c(d) || (p && bm(d, p) ? o(wn(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return E.createElement(_m.Provider, { value: u }, e.children);
}
function La() {
  var e = Qe(_m);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function sf(e) {
  var t, n = at(), r = n.classNames, o = n.styles, a = n.components, s = La().goToMonth, i = function(u) {
    s(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : wm, l = E.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return E.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    E.createElement("div", { className: r.vhidden }, l),
    E.createElement(gw, { onChange: i, displayMonth: e.displayMonth }),
    E.createElement(bw, { onChange: i, displayMonth: e.displayMonth })
  );
}
function Ew(e) {
  return E.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    E.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function Nw(e) {
  return E.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    E.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var Us = F(function(e, t) {
  var n = at(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Oe(Oe({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), E.createElement("button", Oe({}, e, { ref: t, type: "button", className: s, style: i }));
});
function Pw(e) {
  var t, n, r = at(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return E.createElement(E.Fragment, null);
  var p = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), v = u(e.nextMonth, { locale: a }), h = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : Nw, x = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : Ew;
  return E.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && E.createElement(Us, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? E.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : E.createElement(x, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && E.createElement(Us, { name: "next-month", "aria-label": v, className: h, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? E.createElement(x, { className: s.nav_icon, style: i.nav_icon }) : E.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function cf(e) {
  var t = at().numberOfMonths, n = La(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(v) {
    return fu(e.displayMonth, v);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return E.createElement(Pw, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function Tw(e) {
  var t, n = at(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : wm, l;
  return o ? l = E.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = E.createElement(sf, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = E.createElement(
    E.Fragment,
    null,
    E.createElement(sf, { displayMonth: e.displayMonth, id: e.id }),
    E.createElement(cf, { displayMonth: e.displayMonth, id: e.id })
  ) : l = E.createElement(
    E.Fragment,
    null,
    E.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    E.createElement(cf, { displayMonth: e.displayMonth, id: e.id })
  ), E.createElement("div", { className: r.caption, style: a.caption }, l);
}
function Ow(e) {
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
function kw(e, t, n) {
  for (var r = n ? Ar(new Date()) : $n(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Gt(r, a);
    o.push(s);
  }
  return o;
}
function Mw() {
  var e = at(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = kw(o, a, s);
  return E.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && E.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return E.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, i(u, { locale: o }));
    })
  );
}
function Dw() {
  var e, t = at(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : Mw;
  return E.createElement(
    "thead",
    { style: r.head, className: n.head },
    E.createElement(a, null)
  );
}
function Rw(e) {
  var t = at(), n = t.locale, r = t.formatters.formatDay;
  return E.createElement(E.Fragment, null, r(e.date, { locale: n }));
}
var pu = bt(void 0);
function jw(e) {
  if (!Aa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return E.createElement(pu.Provider, { value: t }, e.children);
  }
  return E.createElement(Aw, { initialProps: e.initialProps, children: e.children });
}
function Aw(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, d);
    var v = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!v) {
      var h = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!h) {
        var g = r ? xm([], r, !0) : [];
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
  return E.createElement(pu.Provider, { value: c }, n);
}
function mu() {
  var e = Qe(pu);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function Iw(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Ft(r, e))
    return { from: r, to: e };
  if (!o && bm(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Ft(o, e) && Ft(r, e))) {
    if (Ft(o, e))
      return { from: o, to: void 0 };
    if (!Ft(r, e))
      return gm(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var vu = bt(void 0);
function Lw(e) {
  if (!Ia(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return E.createElement(vu.Provider, { value: t }, e.children);
  }
  return E.createElement(Fw, { initialProps: e.initialProps, children: e.children });
}
function Fw(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, v, h) {
    var g, x;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, v, h);
    var b = Iw(m, r);
    (x = t.onSelect) === null || x === void 0 || x.call(t, b, m, v, h);
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
    after: of(a, i - 1),
    before: Gt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: Gt(a, i - 1)
  })), c && (a && !s && (u.disabled.push({
    before: Gt(a, -c + 1)
  }), u.disabled.push({
    after: Gt(a, c - 1)
  })), a && s)) {
    var d = In(s, a) + 1, p = c - d;
    u.disabled.push({
      before: of(a, p)
    }), u.disabled.push({
      after: Gt(s, p)
    });
  }
  return E.createElement(vu.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function hu() {
  var e = Qe(vu);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Ss(e) {
  return Array.isArray(e) ? xm([], e, !0) : e !== void 0 ? [e] : [];
}
function Vw(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Ss(o);
  }), t;
}
var un;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(un || (un = {}));
var Ww = un.Selected, Dn = un.Disabled, Uw = un.Hidden, zw = un.Today, yc = un.RangeEnd, wc = un.RangeMiddle, $c = un.RangeStart, Bw = un.Outside;
function Hw(e, t, n) {
  var r, o = (r = {}, r[Ww] = Ss(e.selected), r[Dn] = Ss(e.disabled), r[Uw] = Ss(e.hidden), r[zw] = [e.today], r[yc] = [], r[wc] = [], r[$c] = [], r[Bw] = [], r);
  return e.fromDate && o[Dn].push({ before: e.fromDate }), e.toDate && o[Dn].push({ after: e.toDate }), Aa(e) ? o[Dn] = o[Dn].concat(t.modifiers[Dn]) : Ia(e) && (o[Dn] = o[Dn].concat(n.modifiers[Dn]), o[$c] = n.modifiers[$c], o[wc] = n.modifiers[wc], o[yc] = n.modifiers[yc]), o;
}
var Cm = bt(void 0);
function Yw(e) {
  var t = at(), n = mu(), r = hu(), o = Hw(t, n, r), a = Vw(t.modifiers), s = Oe(Oe({}, o), a);
  return E.createElement(Cm.Provider, { value: s }, e.children);
}
function Sm() {
  var e = Qe(Cm);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Kw(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function Gw(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function qw(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function Zw(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function Xw(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function Qw(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Ft(r, e))
    return !0;
  if (!o)
    return !1;
  var a = In(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = In(e, r) >= 0 && In(o, e) >= 0;
  return s;
}
function Jw(e) {
  return lu(e);
}
function e$(e) {
  return Array.isArray(e) && e.every(lu);
}
function t$(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Jw(n))
      return Ft(e, n);
    if (e$(n))
      return n.includes(e);
    if (Gw(n))
      return Qw(e, n);
    if (Xw(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Kw(n)) {
      var r = In(n.before, e), o = In(n.after, e), a = r > 0, s = o < 0, i = gm(n.before, n.after);
      return i ? s && a : a || s;
    }
    return qw(n) ? In(e, n.after) > 0 : Zw(n) ? In(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function gu(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return t$(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !fu(e, n) && (o.outside = !0), o;
}
function n$(e, t) {
  for (var n = Wt(e[0]), r = uu(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = gu(s, t), c = !i.disabled && !i.hidden;
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
var r$ = 365;
function Em(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, p = {
    day: Gt,
    week: gl,
    month: wn,
    year: Sy,
    startOfWeek: function(g) {
      return o.ISOWeek ? Ar(g) : $n(g, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? fm(g) : du(g, { locale: d, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = Ey([l, m]) : r === "after" && u && (m = Ny([u, m]));
  var v = !0;
  if (a) {
    var h = gu(m, a);
    v = !h.disabled && !h.hidden;
  }
  return v ? m : i.count > r$ ? i.lastFocused : Em(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Oe(Oe({}, i), { count: i.count + 1 })
  });
}
var Nm = bt(void 0);
function o$(e) {
  var t = La(), n = Sm(), r = J(), o = r[0], a = r[1], s = J(), i = s[0], c = s[1], l = n$(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, d = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = at(), v = function(g, x) {
    if (o) {
      var b = Em(o, {
        moveBy: g,
        direction: x,
        context: m,
        modifiers: n
      });
      Ft(o, b) || (t.goToDate(b, o), p(b));
    }
  }, h = {
    focusedDay: o,
    focusTarget: u,
    blur: d,
    focus: p,
    focusDayAfter: function() {
      return v("day", "after");
    },
    focusDayBefore: function() {
      return v("day", "before");
    },
    focusWeekAfter: function() {
      return v("week", "after");
    },
    focusWeekBefore: function() {
      return v("week", "before");
    },
    focusMonthBefore: function() {
      return v("month", "before");
    },
    focusMonthAfter: function() {
      return v("month", "after");
    },
    focusYearBefore: function() {
      return v("year", "before");
    },
    focusYearAfter: function() {
      return v("year", "after");
    },
    focusStartOfWeek: function() {
      return v("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return v("endOfWeek", "after");
    }
  };
  return E.createElement(Nm.Provider, { value: h }, e.children);
}
function bu() {
  var e = Qe(Nm);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function a$(e, t) {
  var n = Sm(), r = gu(e, n, t);
  return r;
}
var xu = bt(void 0);
function s$(e) {
  if (!Si(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return E.createElement(xu.Provider, { value: t }, e.children);
  }
  return E.createElement(i$, { initialProps: e.initialProps, children: e.children });
}
function i$(e) {
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
  return E.createElement(xu.Provider, { value: o }, n);
}
function Pm() {
  var e = Qe(xu);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function c$(e, t) {
  var n = at(), r = Pm(), o = mu(), a = hu(), s = bu(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, p = s.focus, m = s.focusMonthBefore, v = s.focusMonthAfter, h = s.focusYearBefore, g = s.focusYearAfter, x = s.focusStartOfWeek, b = s.focusEndOfWeek, y = function(I) {
    var K, R, T, B;
    Si(n) ? (K = r.onDayClick) === null || K === void 0 || K.call(r, e, t, I) : Aa(n) ? (R = o.onDayClick) === null || R === void 0 || R.call(o, e, t, I) : Ia(n) ? (T = a.onDayClick) === null || T === void 0 || T.call(a, e, t, I) : (B = n.onDayClick) === null || B === void 0 || B.call(n, e, t, I);
  }, _ = function(I) {
    var K;
    p(e), (K = n.onDayFocus) === null || K === void 0 || K.call(n, e, t, I);
  }, $ = function(I) {
    var K;
    d(), (K = n.onDayBlur) === null || K === void 0 || K.call(n, e, t, I);
  }, N = function(I) {
    var K;
    (K = n.onDayMouseEnter) === null || K === void 0 || K.call(n, e, t, I);
  }, k = function(I) {
    var K;
    (K = n.onDayMouseLeave) === null || K === void 0 || K.call(n, e, t, I);
  }, S = function(I) {
    var K;
    (K = n.onDayPointerEnter) === null || K === void 0 || K.call(n, e, t, I);
  }, P = function(I) {
    var K;
    (K = n.onDayPointerLeave) === null || K === void 0 || K.call(n, e, t, I);
  }, Y = function(I) {
    var K;
    (K = n.onDayTouchCancel) === null || K === void 0 || K.call(n, e, t, I);
  }, W = function(I) {
    var K;
    (K = n.onDayTouchEnd) === null || K === void 0 || K.call(n, e, t, I);
  }, z = function(I) {
    var K;
    (K = n.onDayTouchMove) === null || K === void 0 || K.call(n, e, t, I);
  }, Z = function(I) {
    var K;
    (K = n.onDayTouchStart) === null || K === void 0 || K.call(n, e, t, I);
  }, q = function(I) {
    var K;
    (K = n.onDayKeyUp) === null || K === void 0 || K.call(n, e, t, I);
  }, j = function(I) {
    var K;
    switch (I.key) {
      case "ArrowLeft":
        I.preventDefault(), I.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        I.preventDefault(), I.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        I.preventDefault(), I.stopPropagation(), l();
        break;
      case "ArrowUp":
        I.preventDefault(), I.stopPropagation(), u();
        break;
      case "PageUp":
        I.preventDefault(), I.stopPropagation(), I.shiftKey ? h() : m();
        break;
      case "PageDown":
        I.preventDefault(), I.stopPropagation(), I.shiftKey ? g() : v();
        break;
      case "Home":
        I.preventDefault(), I.stopPropagation(), x();
        break;
      case "End":
        I.preventDefault(), I.stopPropagation(), b();
        break;
    }
    (K = n.onDayKeyDown) === null || K === void 0 || K.call(n, e, t, I);
  }, L = {
    onClick: y,
    onFocus: _,
    onBlur: $,
    onKeyDown: j,
    onKeyUp: q,
    onMouseEnter: N,
    onMouseLeave: k,
    onPointerEnter: S,
    onPointerLeave: P,
    onTouchCancel: Y,
    onTouchEnd: W,
    onTouchMove: z,
    onTouchStart: Z
  };
  return L;
}
function l$() {
  var e = at(), t = Pm(), n = mu(), r = hu(), o = Si(e) ? t.selected : Aa(e) ? n.selected : Ia(e) ? r.selected : void 0;
  return o;
}
function u$(e) {
  return Object.values(un).includes(e);
}
function d$(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (u$(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function f$(e, t) {
  var n = Oe({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Oe(Oe({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function p$(e, t, n) {
  var r, o, a, s = at(), i = bu(), c = a$(e, t), l = c$(e, c), u = l$(), d = Boolean(s.onDayClick || s.mode !== "default");
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
  var p = d$(s, c).join(" "), m = f$(s, c), v = Boolean(c.outside && !s.showOutsideDays || c.hidden), h = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : Rw, g = E.createElement(h, { date: e, displayMonth: t, activeModifiers: c }), x = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, b = i.focusTarget && Ft(i.focusTarget, e) && !c.outside, y = i.focusedDay && Ft(i.focusedDay, e), _ = Oe(Oe(Oe({}, x), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = y || b ? 0 : -1, r)), l), $ = {
    isButton: d,
    isHidden: v,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: x
  };
  return $;
}
function m$(e) {
  var t = G(null), n = p$(e.date, e.displayMonth, t);
  return n.isHidden ? E.createElement("div", { role: "gridcell" }) : n.isButton ? E.createElement(Us, Oe({ name: "day", ref: t }, n.buttonProps)) : E.createElement("div", Oe({}, n.divProps));
}
function v$(e) {
  var t = e.number, n = e.dates, r = at(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return E.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return E.createElement(Us, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: p }, u);
}
function h$(e) {
  var t, n, r = at(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : m$, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : v$, u;
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
        { className: a.cell, style: o.cell, key: U1(d), role: "presentation" },
        E.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function lf(e, t, n) {
  for (var r = n != null && n.ISOWeek ? fm(t) : du(t, n), o = n != null && n.ISOWeek ? Ar(e) : $n(e, n), a = In(r, o), s = [], i = 0; i <= a; i++)
    s.push(Gt(o, i));
  var c = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? V1(u) : Y1(u, n), p = l.find(function(m) {
      return m.weekNumber === d;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function g$(e, t) {
  var n = lf(Wt(e), uu(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = G1(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = gl(a, 6 - r), i = lf(gl(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function b$(e) {
  var t, n, r, o = at(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, v = g$(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: p
  }), h = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : Dw, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : h$, x = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : Ow;
  return E.createElement(
    "table",
    { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && E.createElement(h, null),
    E.createElement("tbody", { className: s.tbody, style: i.tbody, role: "rowgroup" }, v.map(function(b) {
      return E.createElement(g, { displayMonth: e.displayMonth, key: b.weekNumber, dates: b.dates, weekNumber: b.weekNumber });
    })),
    E.createElement(x, { displayMonth: e.displayMonth })
  );
}
function x$() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var y$ = x$() ? C.useLayoutEffect : C.useEffect, _c = !1, w$ = 0;
function uf() {
  return "react-day-picker-".concat(++w$);
}
function $$(e) {
  var t, n = e ?? (_c ? uf() : null), r = C.useState(n), o = r[0], a = r[1];
  return y$(function() {
    o === null && a(uf());
  }, []), C.useEffect(function() {
    _c === !1 && (_c = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function _$(e) {
  var t, n, r = at(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = La().displayMonths, l = $$(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], p = s.month, m = e.displayIndex === 0, v = e.displayIndex === c.length - 1, h = !m && !v;
  o === "rtl" && (t = [m, v], v = t[0], m = t[1]), m && (d.push(a.caption_start), p = Oe(Oe({}, p), s.caption_start)), v && (d.push(a.caption_end), p = Oe(Oe({}, p), s.caption_end)), h && (d.push(a.caption_between), p = Oe(Oe({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : Tw;
  return E.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: p },
    E.createElement(g, { id: l, displayMonth: e.displayMonth }),
    E.createElement(b$, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function C$(e) {
  var t = e.initialProps, n = at(), r = bu(), o = La(), a = J(!1), s = a[0], i = a[1];
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
      return E.createElement(_$, { key: p, displayIndex: p, displayMonth: d });
    }))
  );
}
function S$(e) {
  var t = e.children, n = Z1(e, ["children"]);
  return E.createElement(
    vw,
    { initialProps: n },
    E.createElement(
      Sw,
      null,
      E.createElement(
        s$,
        { initialProps: n },
        E.createElement(
          jw,
          { initialProps: n },
          E.createElement(
            Lw,
            { initialProps: n },
            E.createElement(
              Yw,
              null,
              E.createElement(o$, null, t)
            )
          )
        )
      )
    )
  );
}
function E$(e) {
  return E.createElement(
    S$,
    Oe({}, e),
    E.createElement(C$, { initialProps: e })
  );
}
function N$({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f.exports.jsx(
    E$,
    {
      showOutsideDays: n,
      className: A("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: A(
          wo({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: A(
          wo({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ f.exports.jsx($i, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(xr, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
N$.displayName = "Calendar";
function P$(e, t) {
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
      const { scope: p, children: m, ...v } = d, h = (p == null ? void 0 : p[e][c]) || i, g = _t(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ w(h.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, v = Qe(m);
      if (v)
        return v;
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
    T$(o, ...t)
  ];
}
function T$(...e) {
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
  const t = G(e);
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
const Ct = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ra : () => {
};
function St() {
  return St = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, St.apply(this, arguments);
}
const O$ = [
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
], me = O$.reduce((e, t) => {
  const n = /* @__PURE__ */ F((r, o) => {
    const { asChild: a, ...s } = r, i = a ? cn : t;
    return ee(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, St({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function zs(e, t) {
  e && wi(
    () => e.dispatchEvent(t)
  );
}
const Tm = "Avatar", [k$, E8] = st(Tm), [M$, Om] = k$(Tm), D$ = /* @__PURE__ */ F((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = J("idle");
  return /* @__PURE__ */ w(M$, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ w(me.span, M({}, r, {
    ref: t
  })));
}), R$ = "AvatarImage", j$ = /* @__PURE__ */ F((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = Om(R$, n), i = L$(r), c = Ze((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return Ct(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ w(me.img, M({}, a, {
    ref: t,
    src: r
  })) : null;
}), A$ = "AvatarFallback", I$ = /* @__PURE__ */ F((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Om(A$, n), [s, i] = J(r === void 0);
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
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ w(me.span, M({}, o, {
    ref: t
  })) : null;
});
function L$(e) {
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
const km = D$, Mm = j$, Dm = I$, mo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  km,
  {
    ref: n,
    className: A(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
mo.displayName = km.displayName;
const Dr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Mm,
  {
    ref: n,
    className: A("aspect-square h-full w-full", e),
    ...t
  }
));
Dr.displayName = Mm.displayName;
const vo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Dm,
  {
    ref: n,
    className: A(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
vo.displayName = Dm.displayName;
const F$ = Do(
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
  return /* @__PURE__ */ f.exports.jsx("div", { className: A(F$({ variant: t }), e), ...n });
}
function te(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function wr(e) {
  const t = e + "CollectionProvider", [n, r] = st(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: v, children: h } = m, g = E.useRef(null), x = E.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ E.createElement(o, {
      scope: v,
      itemMap: x,
      collectionRef: g
    }, h);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ E.forwardRef((m, v) => {
    const { scope: h, children: g } = m, x = a(i, h), b = Ee(v, x.collectionRef);
    return /* @__PURE__ */ E.createElement(cn, {
      ref: b
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ E.forwardRef((m, v) => {
    const { scope: h, children: g, ...x } = m, b = E.useRef(null), y = Ee(v, b), _ = a(l, h);
    return E.useEffect(() => (_.itemMap.set(b, {
      ref: b,
      ...x
    }), () => void _.itemMap.delete(b))), /* @__PURE__ */ E.createElement(cn, {
      [u]: "",
      ref: y
    }, g);
  });
  function p(m) {
    const v = a(e + "CollectionConsumer", m);
    return E.useCallback(() => {
      const g = v.collectionRef.current;
      if (!g)
        return [];
      const x = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (_, $) => x.indexOf(_.ref.current) - x.indexOf($.ref.current)
      );
    }, [
      v.collectionRef,
      v.itemMap
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
const V$ = /* @__PURE__ */ bt(void 0);
function Pn(e) {
  const t = Qe(V$);
  return e || t || "ltr";
}
function W$(e, t = globalThis == null ? void 0 : globalThis.document) {
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
const bl = "dismissableLayer.update", U$ = "dismissableLayer.pointerDownOutside", z$ = "dismissableLayer.focusOutside";
let df;
const B$ = /* @__PURE__ */ bt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Hr = /* @__PURE__ */ F((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = Qe(B$), [d, p] = J(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = J({}), h = Ee(
    t,
    (S) => p(S)
  ), g = Array.from(u.layers), [x] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), b = g.indexOf(x), y = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, $ = y >= b, N = H$((S) => {
    const P = S.target, Y = [
      ...u.branches
    ].some(
      (W) => W.contains(P)
    );
    !$ || Y || (a == null || a(S), i == null || i(S), S.defaultPrevented || c == null || c());
  }, m), k = Y$((S) => {
    const P = S.target;
    [
      ...u.branches
    ].some(
      (W) => W.contains(P)
    ) || (s == null || s(S), i == null || i(S), S.defaultPrevented || c == null || c());
  }, m);
  return W$((S) => {
    y === u.layers.size - 1 && (o == null || o(S), !S.defaultPrevented && c && (S.preventDefault(), c()));
  }, m), ee(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (df = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), ff(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = df);
      };
  }, [
    d,
    m,
    r,
    u
  ]), ee(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), ff());
  }, [
    d,
    u
  ]), ee(() => {
    const S = () => v({});
    return document.addEventListener(bl, S), () => document.removeEventListener(bl, S);
  }, []), /* @__PURE__ */ w(me.div, St({}, l, {
    ref: h,
    style: {
      pointerEvents: _ ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: te(e.onFocusCapture, k.onFocusCapture),
    onBlurCapture: te(e.onBlurCapture, k.onBlurCapture),
    onPointerDownCapture: te(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
});
function H$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ze(e), r = G(!1), o = G(() => {
  });
  return ee(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Rm(U$, n, c, {
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
function Y$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ze(e), r = G(!1);
  return ee(() => {
    const o = (a) => {
      a.target && !r.current && Rm(z$, n, {
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
function ff() {
  const e = new CustomEvent(bl);
  document.dispatchEvent(e);
}
function Rm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? zs(o, a) : o.dispatchEvent(a);
}
let Cc = 0;
function Ei() {
  ee(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : pf()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : pf()), Cc++, () => {
      Cc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Cc--;
    };
  }, []);
}
function pf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Sc = "focusScope.autoFocusOnMount", Ec = "focusScope.autoFocusOnUnmount", mf = {
  bubbles: !1,
  cancelable: !0
}, Ni = /* @__PURE__ */ F((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = J(null), l = Ze(o), u = Ze(a), d = G(null), p = Ee(
    t,
    (h) => c(h)
  ), m = G({
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
      let h = function(y) {
        if (m.paused || !i)
          return;
        const _ = y.target;
        i.contains(_) ? d.current = _ : ar(d.current, {
          select: !0
        });
      }, g = function(y) {
        if (m.paused || !i)
          return;
        const _ = y.relatedTarget;
        _ !== null && (i.contains(_) || ar(d.current, {
          select: !0
        }));
      }, x = function(y) {
        const _ = document.activeElement;
        for (const $ of y)
          $.removedNodes.length > 0 && (i != null && i.contains(_) || ar(i));
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(x);
      return i && b.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), ee(() => {
    if (i) {
      hf.add(m);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const x = new CustomEvent(Sc, mf);
        i.addEventListener(Sc, l), i.dispatchEvent(x), x.defaultPrevented || (K$(Q$(jm(i)), {
          select: !0
        }), document.activeElement === h && ar(i));
      }
      return () => {
        i.removeEventListener(Sc, l), setTimeout(() => {
          const x = new CustomEvent(Ec, mf);
          i.addEventListener(Ec, u), i.dispatchEvent(x), x.defaultPrevented || ar(h ?? document.body, {
            select: !0
          }), i.removeEventListener(Ec, u), hf.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const v = ve((h) => {
    if (!n && !r || m.paused)
      return;
    const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, x = document.activeElement;
    if (g && x) {
      const b = h.currentTarget, [y, _] = G$(b);
      y && _ ? !h.shiftKey && x === _ ? (h.preventDefault(), n && ar(y, {
        select: !0
      })) : h.shiftKey && x === y && (h.preventDefault(), n && ar(_, {
        select: !0
      })) : x === b && h.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ w(me.div, St({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: v
  }));
});
function K$(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ar(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function G$(e) {
  const t = jm(e), n = vf(t, e), r = vf(t.reverse(), e);
  return [
    n,
    r
  ];
}
function jm(e) {
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
function vf(e, t) {
  for (const n of e)
    if (!q$(n, {
      upTo: t
    }))
      return n;
}
function q$(e, { upTo: t }) {
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
function Z$(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ar(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Z$(e) && t && e.select();
  }
}
const hf = X$();
function X$() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = gf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = gf(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function gf(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Q$(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const J$ = C["useId".toString()] || (() => {
});
let e_ = 0;
function mt(e) {
  const [t, n] = C.useState(J$());
  return Ct(() => {
    e || n(
      (r) => r ?? String(e_++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const t_ = ["top", "right", "bottom", "left"], dr = Math.min, Bt = Math.max, Bs = Math.round, ss = Math.floor, fr = (e) => ({
  x: e,
  y: e
}), n_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, r_ = {
  start: "end",
  end: "start"
};
function xl(e, t, n) {
  return Bt(e, dr(t, n));
}
function Vn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wn(e) {
  return e.split("-")[0];
}
function Ro(e) {
  return e.split("-")[1];
}
function yu(e) {
  return e === "x" ? "y" : "x";
}
function wu(e) {
  return e === "y" ? "height" : "width";
}
function jo(e) {
  return ["top", "bottom"].includes(Wn(e)) ? "y" : "x";
}
function $u(e) {
  return yu(jo(e));
}
function o_(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ro(e), o = $u(e), a = wu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Hs(s)), [s, Hs(s)];
}
function a_(e) {
  const t = Hs(e);
  return [yl(e), t, yl(t)];
}
function yl(e) {
  return e.replace(/start|end/g, (t) => r_[t]);
}
function s_(e, t, n) {
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
function i_(e, t, n, r) {
  const o = Ro(e);
  let a = s_(Wn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(yl)))), a;
}
function Hs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => n_[t]);
}
function c_(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Am(e) {
  return typeof e != "number" ? c_(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ys(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function bf(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = jo(t), s = $u(t), i = wu(s), c = Wn(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (Ro(t)) {
    case "start":
      m[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const l_ = async (e, t, n) => {
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
  } = bf(l, r, c), p = r, m = {}, v = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: g,
      fn: x
    } = i[h], {
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
    }, $ && v <= 50) {
      v++, typeof $ == "object" && ($.placement && (p = $.placement), $.rects && (l = $.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : $.rects), {
        x: u,
        y: d
      } = bf(l, p, c)), h = -1;
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
async function ua(e, t) {
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
  } = Vn(t, e), v = Am(m), g = i[p ? d === "floating" ? "reference" : "floating" : d], x = Ys(await a.getClippingRect({
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
  }, $ = Ys(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: y,
    strategy: c
  }) : b);
  return {
    top: (x.top - $.top + v.top) / _.y,
    bottom: ($.bottom - x.bottom + v.bottom) / _.y,
    left: (x.left - $.left + v.left) / _.x,
    right: ($.right - x.right + v.right) / _.x
  };
}
const xf = (e) => ({
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
    } = Vn(e, t) || {};
    if (c == null)
      return {};
    const u = Am(l), d = {
      x: n,
      y: r
    }, p = $u(o), m = wu(p), v = await s.getDimensions(c), h = p === "y", g = h ? "top" : "left", x = h ? "bottom" : "right", b = h ? "clientHeight" : "clientWidth", y = a.reference[m] + a.reference[p] - d[p] - a.floating[m], _ = d[p] - a.reference[p], $ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let N = $ ? $[b] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement($))) && (N = i.floating[b] || a.floating[m]);
    const k = y / 2 - _ / 2, S = N / 2 - v[m] / 2 - 1, P = dr(u[g], S), Y = dr(u[x], S), W = P, z = N - v[m] - Y, Z = N / 2 - v[m] / 2 + k, q = xl(W, Z, z), L = Ro(o) != null && Z != q && a.reference[m] / 2 - (Z < W ? P : Y) - v[m] / 2 < 0 ? Z < W ? W - Z : z - Z : 0;
    return {
      [p]: d[p] - L,
      data: {
        [p]: q,
        centerOffset: Z - q + L
      }
    };
  }
}), u_ = function(e) {
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
        flipAlignment: v = !0,
        ...h
      } = Vn(e, t), g = Wn(r), x = Wn(s) === s, b = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), y = d || (x || !v ? [Hs(s)] : a_(s));
      !d && m !== "none" && y.push(...i_(s, v, m, b));
      const _ = [s, ...y], $ = await ua(t, h), N = [];
      let k = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && N.push($[g]), u) {
        const W = o_(r, a, b);
        N.push($[W[0]], $[W[1]]);
      }
      if (k = [...k, {
        placement: r,
        overflows: N
      }], !N.every((W) => W <= 0)) {
        var S, P;
        const W = (((S = o.flip) == null ? void 0 : S.index) || 0) + 1, z = _[W];
        if (z)
          return {
            data: {
              index: W,
              overflows: k
            },
            reset: {
              placement: z
            }
          };
        let Z = (P = k.filter((q) => q.overflows[0] <= 0).sort((q, j) => q.overflows[1] - j.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!Z)
          switch (p) {
            case "bestFit": {
              var Y;
              const q = (Y = k.map((j) => [j.placement, j.overflows.filter((L) => L > 0).reduce((L, I) => L + I, 0)]).sort((j, L) => j[1] - L[1])[0]) == null ? void 0 : Y[0];
              q && (Z = q);
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
function yf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function wf(e) {
  return t_.some((t) => e[t] >= 0);
}
const d_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Vn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await ua(t, {
            ...o,
            elementContext: "reference"
          }), s = yf(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: wf(s)
            }
          };
        }
        case "escaped": {
          const a = await ua(t, {
            ...o,
            altBoundary: !0
          }), s = yf(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: wf(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function f_(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Wn(n), i = Ro(n), c = jo(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = Vn(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: v
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
  return i && typeof v == "number" && (m = i === "end" ? v * -1 : v), c ? {
    x: m * u,
    y: p * l
  } : {
    x: p * l,
    y: m * u
  };
}
const p_ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await f_(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, m_ = function(e) {
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
      } = Vn(e, t), l = {
        x: n,
        y: r
      }, u = await ua(t, c), d = jo(Wn(o)), p = yu(d);
      let m = l[p], v = l[d];
      if (a) {
        const g = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", b = m + u[g], y = m - u[x];
        m = xl(b, m, y);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", x = d === "y" ? "bottom" : "right", b = v + u[g], y = v - u[x];
        v = xl(b, v, y);
      }
      const h = i.fn({
        ...t,
        [p]: m,
        [d]: v
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r
        }
      };
    }
  };
}, v_ = function(e) {
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
      } = Vn(e, t), u = {
        x: n,
        y: r
      }, d = jo(o), p = yu(d);
      let m = u[p], v = u[d];
      const h = Vn(i, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const y = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[y] + g.mainAxis, $ = a.reference[p] + a.reference[y] - g.mainAxis;
        m < _ ? m = _ : m > $ && (m = $);
      }
      if (l) {
        var x, b;
        const y = p === "y" ? "width" : "height", _ = ["top", "left"].includes(Wn(o)), $ = a.reference[d] - a.floating[y] + (_ && ((x = s.offset) == null ? void 0 : x[d]) || 0) + (_ ? 0 : g.crossAxis), N = a.reference[d] + a.reference[y] + (_ ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (_ ? g.crossAxis : 0);
        v < $ ? v = $ : v > N && (v = N);
      }
      return {
        [p]: m,
        [d]: v
      };
    }
  };
}, h_ = function(e) {
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
      } = Vn(e, t), c = await ua(t, i), l = Wn(n), u = Ro(n), d = jo(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let v, h;
      l === "top" || l === "bottom" ? (v = l, h = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, v = u === "end" ? "top" : "bottom");
      const g = m - c[v], x = p - c[h], b = !t.middlewareData.shift;
      let y = g, _ = x;
      if (d) {
        const N = p - c.left - c.right;
        _ = u || b ? dr(x, N) : N;
      } else {
        const N = m - c.top - c.bottom;
        y = u || b ? dr(g, N) : N;
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
function pr(e) {
  return Im(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ht(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Zn(e) {
  var t;
  return (t = (Im(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Im(e) {
  return e instanceof Node || e instanceof Ht(e).Node;
}
function Un(e) {
  return e instanceof Element || e instanceof Ht(e).Element;
}
function _n(e) {
  return e instanceof HTMLElement || e instanceof Ht(e).HTMLElement;
}
function $f(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ht(e).ShadowRoot;
}
function Fa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Zt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function g_(e) {
  return ["table", "td", "th"].includes(pr(e));
}
function _u(e) {
  const t = Cu(), n = Zt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function b_(e) {
  let t = Co(e);
  for (; _n(t) && !Pi(t); ) {
    if (_u(t))
      return t;
    t = Co(t);
  }
  return null;
}
function Cu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Pi(e) {
  return ["html", "body", "#document"].includes(pr(e));
}
function Zt(e) {
  return Ht(e).getComputedStyle(e);
}
function Ti(e) {
  return Un(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Co(e) {
  if (pr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    $f(e) && e.host || // Fallback.
    Zn(e)
  );
  return $f(t) ? t.host : t;
}
function Lm(e) {
  const t = Co(e);
  return Pi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _n(t) && Fa(t) ? t : Lm(t);
}
function Ks(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Lm(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ht(r);
  return o ? t.concat(a, a.visualViewport || [], Fa(r) ? r : []) : t.concat(r, Ks(r));
}
function Fm(e) {
  const t = Zt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _n(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Bs(n) !== a || Bs(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Su(e) {
  return Un(e) ? e : e.contextElement;
}
function ho(e) {
  const t = Su(e);
  if (!_n(t))
    return fr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Fm(t);
  let s = (a ? Bs(n.width) : n.width) / r, i = (a ? Bs(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const x_ = /* @__PURE__ */ fr(0);
function Vm(e) {
  const t = Ht(e);
  return !Cu() || !t.visualViewport ? x_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function y_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ht(e) ? !1 : t;
}
function Ir(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Su(e);
  let s = fr(1);
  t && (r ? Un(r) && (s = ho(r)) : s = ho(e));
  const i = y_(a, n, r) ? Vm(a) : fr(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const p = Ht(a), m = r && Un(r) ? Ht(r) : r;
    let v = p.frameElement;
    for (; v && r && m !== p; ) {
      const h = ho(v), g = v.getBoundingClientRect(), x = Zt(v), b = g.left + (v.clientLeft + parseFloat(x.paddingLeft)) * h.x, y = g.top + (v.clientTop + parseFloat(x.paddingTop)) * h.y;
      c *= h.x, l *= h.y, u *= h.x, d *= h.y, c += b, l += y, v = Ht(v).frameElement;
    }
  }
  return Ys({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function w_(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = _n(n), a = Zn(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = fr(1);
  const c = fr(0);
  if ((o || !o && r !== "fixed") && ((pr(n) !== "body" || Fa(a)) && (s = Ti(n)), _n(n))) {
    const l = Ir(n);
    i = ho(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function $_(e) {
  return Array.from(e.getClientRects());
}
function Wm(e) {
  return Ir(Zn(e)).left + Ti(e).scrollLeft;
}
function __(e) {
  const t = Zn(e), n = Ti(e), r = e.ownerDocument.body, o = Bt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Bt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Wm(e);
  const i = -n.scrollTop;
  return Zt(r).direction === "rtl" && (s += Bt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function C_(e, t) {
  const n = Ht(e), r = Zn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Cu();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function S_(e, t) {
  const n = Ir(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = _n(e) ? ho(e) : fr(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function _f(e, t, n) {
  let r;
  if (t === "viewport")
    r = C_(e, n);
  else if (t === "document")
    r = __(Zn(e));
  else if (Un(t))
    r = S_(t, n);
  else {
    const o = Vm(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Ys(r);
}
function Um(e, t) {
  const n = Co(e);
  return n === t || !Un(n) || Pi(n) ? !1 : Zt(n).position === "fixed" || Um(n, t);
}
function E_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ks(e).filter((i) => Un(i) && pr(i) !== "body"), o = null;
  const a = Zt(e).position === "fixed";
  let s = a ? Co(e) : e;
  for (; Un(s) && !Pi(s); ) {
    const i = Zt(s), c = _u(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Fa(s) && !c && Um(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = Co(s);
  }
  return t.set(e, r), r;
}
function N_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? E_(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = _f(t, u, o);
    return l.top = Bt(d.top, l.top), l.right = dr(d.right, l.right), l.bottom = dr(d.bottom, l.bottom), l.left = Bt(d.left, l.left), l;
  }, _f(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function P_(e) {
  return Fm(e);
}
function T_(e, t, n) {
  const r = _n(t), o = Zn(t), a = n === "fixed", s = Ir(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = fr(0);
  if (r || !r && !a)
    if ((pr(t) !== "body" || Fa(o)) && (i = Ti(t)), r) {
      const l = Ir(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Wm(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Cf(e, t) {
  return !_n(e) || Zt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function zm(e, t) {
  const n = Ht(e);
  if (!_n(e))
    return n;
  let r = Cf(e, t);
  for (; r && g_(r) && Zt(r).position === "static"; )
    r = Cf(r, t);
  return r && (pr(r) === "html" || pr(r) === "body" && Zt(r).position === "static" && !_u(r)) ? n : r || b_(e) || n;
}
const O_ = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || zm, a = this.getDimensions;
  return {
    reference: T_(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function k_(e) {
  return Zt(e).direction === "rtl";
}
const M_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: w_,
  getDocumentElement: Zn,
  getClippingRect: N_,
  getOffsetParent: zm,
  getElementRects: O_,
  getClientRects: $_,
  getDimensions: P_,
  getScale: ho,
  isElement: Un,
  isRTL: k_
};
function D_(e, t) {
  let n = null, r;
  const o = Zn(e);
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
    const m = ss(u), v = ss(o.clientWidth - (l + d)), h = ss(o.clientHeight - (u + p)), g = ss(l), b = {
      rootMargin: -m + "px " + -v + "px " + -h + "px " + -g + "px",
      threshold: Bt(0, dr(1, c)) || 1
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
function R_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Su(e), u = o || a ? [...l ? Ks(l) : [], ...Ks(t)] : [];
  u.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), a && x.addEventListener("resize", n);
  });
  const d = l && i ? D_(l, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((x) => {
    let [b] = x;
    b && b.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let v, h = c ? Ir(e) : null;
  c && g();
  function g() {
    const x = Ir(e);
    h && (x.x !== h.x || x.y !== h.y || x.width !== h.width || x.height !== h.height) && n(), h = x, v = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(v);
  };
}
const j_ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: M_,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return l_(e, t, {
    ...o,
    platform: a
  });
}, A_ = (e) => {
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
      return r && t(r) ? r.current != null ? xf({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? xf({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Es = typeof document < "u" ? Ra : ee;
function Gs(e, t) {
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
        if (!Gs(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Gs(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Bm(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Sf(e, t) {
  const n = Bm(e);
  return Math.round(t * n) / n;
}
function Ef(e) {
  const t = C.useRef(e);
  return Es(() => {
    t.current = e;
  }), t;
}
function I_(e) {
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
  Gs(p, r) || m(r);
  const [v, h] = C.useState(null), [g, x] = C.useState(null), b = C.useCallback((L) => {
    L != N.current && (N.current = L, h(L));
  }, [h]), y = C.useCallback((L) => {
    L !== k.current && (k.current = L, x(L));
  }, [x]), _ = a || v, $ = s || g, N = C.useRef(null), k = C.useRef(null), S = C.useRef(u), P = Ef(c), Y = Ef(o), W = C.useCallback(() => {
    if (!N.current || !k.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: p
    };
    Y.current && (L.platform = Y.current), j_(N.current, k.current, L).then((I) => {
      const K = {
        ...I,
        isPositioned: !0
      };
      z.current && !Gs(S.current, K) && (S.current = K, N0.flushSync(() => {
        d(K);
      }));
    });
  }, [p, t, n, Y]);
  Es(() => {
    l === !1 && S.current.isPositioned && (S.current.isPositioned = !1, d((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [l]);
  const z = C.useRef(!1);
  Es(() => (z.current = !0, () => {
    z.current = !1;
  }), []), Es(() => {
    if (_ && (N.current = _), $ && (k.current = $), _ && $) {
      if (P.current)
        return P.current(_, $, W);
      W();
    }
  }, [_, $, W, P]);
  const Z = C.useMemo(() => ({
    reference: N,
    floating: k,
    setReference: b,
    setFloating: y
  }), [b, y]), q = C.useMemo(() => ({
    reference: _,
    floating: $
  }), [_, $]), j = C.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!q.floating)
      return L;
    const I = Sf(q.floating, u.x), K = Sf(q.floating, u.y);
    return i ? {
      ...L,
      transform: "translate(" + I + "px, " + K + "px)",
      ...Bm(q.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: I,
      top: K
    };
  }, [n, i, q.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: W,
    refs: Z,
    elements: q,
    floatingStyles: j
  }), [u, W, Z, q, j]);
}
function Va(e) {
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
const Hm = "Popper", [Ym, Tn] = st(Hm), [L_, Km] = Ym(Hm), F_ = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = J(null);
  return /* @__PURE__ */ w(L_, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, V_ = "PopperAnchor", W_ = /* @__PURE__ */ F((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Km(V_, n), s = G(null), i = Ee(t, s);
  return ee(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ w(me.div, M({}, o, {
    ref: i
  }));
}), Gm = "PopperContent", [U_, N8] = Ym(Gm), z_ = /* @__PURE__ */ F((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: v = 0, arrowPadding: h = 0, collisionBoundary: g = [], collisionPadding: x = 0, sticky: b = "partial", hideWhenDetached: y = !1, avoidCollisions: _ = !0, onPlaced: $, ...N } = e, k = Km(Gm, u), [S, P] = J(null), Y = Ee(
    t,
    (he) => P(he)
  ), [W, z] = J(null), Z = Va(W), q = (n = Z == null ? void 0 : Z.width) !== null && n !== void 0 ? n : 0, j = (r = Z == null ? void 0 : Z.height) !== null && r !== void 0 ? r : 0, L = d + (m !== "center" ? "-" + m : ""), I = typeof x == "number" ? x : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...x
  }, K = Array.isArray(g) ? g : [
    g
  ], R = K.length > 0, T = {
    padding: I,
    boundary: K.filter(B_),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: R
  }, { refs: B, floatingStyles: X, placement: ae, isPositioned: ne, middlewareData: ge } = I_({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: L,
    whileElementsMounted: R_,
    elements: {
      reference: k.anchor
    },
    middleware: [
      p_({
        mainAxis: p + j,
        alignmentAxis: v
      }),
      _ && m_({
        mainAxis: !0,
        crossAxis: !1,
        limiter: b === "partial" ? v_() : void 0,
        ...T
      }),
      _ && u_({
        ...T
      }),
      h_({
        ...T,
        apply: ({ elements: he, rects: ye, availableWidth: O, availableHeight: U }) => {
          const { width: Q, height: fe } = ye.reference, le = he.floating.style;
          le.setProperty("--radix-popper-available-width", `${O}px`), le.setProperty("--radix-popper-available-height", `${U}px`), le.setProperty("--radix-popper-anchor-width", `${Q}px`), le.setProperty("--radix-popper-anchor-height", `${fe}px`);
        }
      }),
      W && A_({
        element: W,
        padding: h
      }),
      H_({
        arrowWidth: q,
        arrowHeight: j
      }),
      y && d_({
        strategy: "referenceHidden"
      })
    ]
  }), [be, oe] = qm(ae), ie = Ze($);
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
    ref: B.setFloating,
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
  }, /* @__PURE__ */ w(U_, {
    scope: u,
    placedSide: be,
    onArrowChange: z,
    arrowX: pe,
    arrowY: H,
    shouldHideArrow: re
  }, /* @__PURE__ */ w(me.div, M({
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
function B_(e) {
  return e !== null;
}
const H_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [v, h] = qm(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[h], x = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, b = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let y = "", _ = "";
    return v === "bottom" ? (y = d ? g : `${x}px`, _ = `${-m}px`) : v === "top" ? (y = d ? g : `${x}px`, _ = `${c.floating.height + m}px`) : v === "right" ? (y = `${-m}px`, _ = d ? g : `${b}px`) : v === "left" && (y = `${c.floating.width + m}px`, _ = d ? g : `${b}px`), {
      data: {
        x: y,
        y: _
      }
    };
  }
});
function qm(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Ao = F_, Wa = W_, Ua = z_, Oi = /* @__PURE__ */ F((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ ou.createPortal(/* @__PURE__ */ w(me.div, St({}, o, {
    ref: t
  })), r) : null;
});
function Y_(e, t) {
  return yi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ct = (e) => {
  const { present: t, children: n } = e, r = K_(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Vt.only(n), a = Ee(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Mo(o, {
    ref: a
  }) : null;
};
ct.displayName = "Presence";
function K_(e) {
  const [t, n] = J(), r = G({}), o = G(e), a = G("none"), s = e ? "mounted" : "unmounted", [i, c] = Y_(s, {
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
        d.target === t && m && wi(
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
    ref: ve((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function is(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ft({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = G_({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Ze(n), c = ve((l) => {
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
function G_({ defaultProp: e, onChange: t }) {
  const n = J(e), [r] = n, o = G(r), a = Ze(t);
  return ee(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Nc = "rovingFocusGroup.onEntryFocus", q_ = {
  bubbles: !1,
  cancelable: !0
}, Eu = "RovingFocusGroup", [wl, Zm, Z_] = wr(Eu), [X_, $r] = st(Eu, [
  Z_
]), [Q_, J_] = X_(Eu), e2 = /* @__PURE__ */ F((e, t) => /* @__PURE__ */ w(wl.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(wl.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(t2, M({}, e, {
  ref: t
}))))), t2 = /* @__PURE__ */ F((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = G(null), p = Ee(t, d), m = Pn(a), [v = null, h] = ft({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, x] = J(!1), b = Ze(l), y = Zm(n), _ = G(!1), [$, N] = J(0);
  return ee(() => {
    const k = d.current;
    if (k)
      return k.addEventListener(Nc, b), () => k.removeEventListener(Nc, b);
  }, [
    b
  ]), /* @__PURE__ */ w(Q_, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: v,
    onItemFocus: ve(
      (k) => h(k),
      [
        h
      ]
    ),
    onItemShiftTab: ve(
      () => x(!0),
      []
    ),
    onFocusableItemAdd: ve(
      () => N(
        (k) => k + 1
      ),
      []
    ),
    onFocusableItemRemove: ve(
      () => N(
        (k) => k - 1
      ),
      []
    )
  }, /* @__PURE__ */ w(me.div, M({
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
        const P = new CustomEvent(Nc, q_);
        if (k.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
          const Y = y().filter(
            (j) => j.focusable
          ), W = Y.find(
            (j) => j.active
          ), z = Y.find(
            (j) => j.id === v
          ), q = [
            W,
            z,
            ...Y
          ].filter(Boolean).map(
            (j) => j.ref.current
          );
          Xm(q);
        }
      }
      _.current = !1;
    }),
    onBlur: te(
      e.onBlur,
      () => x(!1)
    )
  })));
}), n2 = "RovingFocusGroupItem", r2 = /* @__PURE__ */ F((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = mt(), c = a || i, l = J_(n2, n), u = l.currentTabStopId === c, d = Zm(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = l;
  return ee(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ w(wl.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ w(me.span, M({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: te(e.onMouseDown, (v) => {
      r ? l.onItemFocus(c) : v.preventDefault();
    }),
    onFocus: te(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: te(e.onKeyDown, (v) => {
      if (v.key === "Tab" && v.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (v.target !== v.currentTarget)
        return;
      const h = s2(v, l.orientation, l.dir);
      if (h !== void 0) {
        v.preventDefault();
        let x = d().filter(
          (b) => b.focusable
        ).map(
          (b) => b.ref.current
        );
        if (h === "last")
          x.reverse();
        else if (h === "prev" || h === "next") {
          h === "prev" && x.reverse();
          const b = x.indexOf(v.currentTarget);
          x = l.loop ? i2(x, b + 1) : x.slice(b + 1);
        }
        setTimeout(
          () => Xm(x)
        );
      }
    })
  })));
}), o2 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function a2(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function s2(e, t, n) {
  const r = a2(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return o2[r];
}
function Xm(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function i2(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const ki = e2, Mi = r2;
var c2 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ro = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap(), ls = {}, Pc = 0, Qm = function(e) {
  return e && (e.host || Qm(e.parentNode));
}, l2 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Qm(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, u2 = function(e, t, n, r) {
  var o = l2(t, Array.isArray(e) ? e : [e]);
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
        var m = p.getAttribute(r), v = m !== null && m !== "false", h = (ro.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
        ro.set(p, h), a.set(p, g), s.push(p), h === 1 && v && cs.set(p, !0), g === 1 && p.setAttribute(n, "true"), v || p.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), Pc++, function() {
    s.forEach(function(d) {
      var p = ro.get(d) - 1, m = a.get(d) - 1;
      ro.set(d, p), a.set(d, m), p || (cs.has(d) || d.removeAttribute(r), cs.delete(d)), m || d.removeAttribute(n);
    }), Pc--, Pc || (ro = /* @__PURE__ */ new WeakMap(), ro = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap(), ls = {});
  };
}, Di = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || c2(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), u2(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ir = function() {
  return ir = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ir.apply(this, arguments);
};
function d2(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function f2(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Ns = "right-scroll-bar-position", Ps = "width-before-scroll-bar", p2 = "with-scroll-bars-hidden", m2 = "--removed-body-scroll-bar-size";
function Tc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function v2(e, t) {
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
var h2 = typeof window < "u" ? C.useLayoutEffect : C.useEffect, Nf = /* @__PURE__ */ new WeakMap();
function g2(e, t) {
  var n = v2(t || null, function(r) {
    return e.forEach(function(o) {
      return Tc(o, r);
    });
  });
  return h2(function() {
    var r = Nf.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || Tc(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Tc(i, s);
      });
    }
    Nf.set(n, e);
  }, [e]), n;
}
var xn = function() {
  return xn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, xn.apply(this, arguments);
};
function Jm(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function b2(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function x2(e) {
  return e;
}
function y2(e, t) {
  t === void 0 && (t = x2);
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
function ev(e) {
  e === void 0 && (e = {});
  var t = y2(null);
  return t.options = xn({ async: !0, ssr: !1 }, e), t;
}
var tv = function(e) {
  var t = e.sideCar, n = Jm(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, xn({}, n));
};
tv.isSideCarExport = !0;
function nv(e, t) {
  return e.useMedium(t), tv;
}
var rv = ev(), Oc = function() {
}, Ri = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Oc,
    onWheelCapture: Oc,
    onTouchMoveCapture: Oc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, v = e.inert, h = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, b = d2(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = g2([n, t]), $ = ir(ir({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: rv, removeScrollBar: l, shards: d, noIsolation: m, inert: v, setCallbacks: a, allowPinchZoom: !!h, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), ir(ir({}, $), { ref: _ })) : C.createElement(x, ir({}, $, { className: c, ref: _ }), i)
  );
});
Ri.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ri.classNames = {
  fullWidth: Ps,
  zeroRight: Ns
};
var Pf, w2 = function() {
  if (Pf)
    return Pf;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function $2() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = w2();
  return t && e.setAttribute("nonce", t), e;
}
function _2(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function C2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var S2 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = $2()) && (_2(t, n), C2(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, E2 = function() {
  var e = S2();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ji = function() {
  var e = E2(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, N2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, kc = function(e) {
  return parseInt(e || "", 10) || 0;
}, P2 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [kc(n), kc(r), kc(o)];
}, T2 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return N2;
  var t = P2(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, O2 = ji(), go = "data-scroll-locked", k2 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(p2, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(go, `] {
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
  
  .`).concat(Ns, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Ps, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Ns, " .").concat(Ns, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ps, " .").concat(Ps, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(go, `] {
    `).concat(m2, ": ").concat(i, `px;
  }
`);
}, Tf = function() {
  var e = parseInt(document.body.getAttribute(go) || "0", 10);
  return isFinite(e) ? e : 0;
}, M2 = function() {
  C.useEffect(function() {
    return document.body.setAttribute(go, (Tf() + 1).toString()), function() {
      var e = Tf() - 1;
      e <= 0 ? document.body.removeAttribute(go) : document.body.setAttribute(go, e.toString());
    };
  }, []);
}, D2 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  M2();
  var a = C.useMemo(function() {
    return T2(o);
  }, [o]);
  return C.createElement(O2, { styles: k2(a, !t, o, n ? "" : "!important") });
}, $l = !1;
if (typeof window < "u")
  try {
    var us = Object.defineProperty({}, "passive", {
      get: function() {
        return $l = !0, !0;
      }
    });
    window.addEventListener("test", us, us), window.removeEventListener("test", us, us);
  } catch {
    $l = !1;
  }
var oo = $l ? { passive: !1 } : !1, R2 = function(e) {
  return e.tagName === "TEXTAREA";
}, ov = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !R2(e) && n[t] === "visible")
  );
}, j2 = function(e) {
  return ov(e, "overflowY");
}, A2 = function(e) {
  return ov(e, "overflowX");
}, Of = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = av(e, n);
    if (r) {
      var o = sv(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, I2 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, L2 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, av = function(e, t) {
  return e === "v" ? j2(t) : A2(t);
}, sv = function(e, t) {
  return e === "v" ? I2(t) : L2(t);
}, F2 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, V2 = function(e, t, n, r, o) {
  var a = F2(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = sv(e, i), v = m[0], h = m[1], g = m[2], x = h - g - a * v;
    (v || x) && av(e, i) && (d += x, p += v), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, ds = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, kf = function(e) {
  return [e.deltaX, e.deltaY];
}, Mf = function(e) {
  return e && "current" in e ? e.current : e;
}, W2 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, U2 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, z2 = 0, ao = [];
function B2(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(z2++)[0], a = C.useState(function() {
    return ji();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = f2([e.lockRef.current], (e.shards || []).map(Mf), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = C.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2)
      return !s.current.allowPinchZoom;
    var x = ds(h), b = n.current, y = "deltaX" in h ? h.deltaX : b[0] - x[0], _ = "deltaY" in h ? h.deltaY : b[1] - x[1], $, N = h.target, k = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && k === "h" && N.type === "range")
      return !1;
    var S = Of(k, N);
    if (!S)
      return !0;
    if (S ? $ = k : ($ = k === "v" ? "h" : "v", S = Of(k, N)), !S)
      return !1;
    if (!r.current && "changedTouches" in h && (y || _) && (r.current = $), !$)
      return !0;
    var P = r.current || $;
    return V2(P, g, h, P === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(h) {
    var g = h;
    if (!(!ao.length || ao[ao.length - 1] !== a)) {
      var x = "deltaY" in g ? kf(g) : ds(g), b = t.current.filter(function($) {
        return $.name === g.type && $.target === g.target && W2($.delta, x);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var y = (s.current.shards || []).map(Mf).filter(Boolean).filter(function($) {
          return $.contains(g.target);
        }), _ = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(h, g, x, b) {
    var y = { name: h, delta: g, target: x, should: b };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(h) {
    n.current = ds(h), r.current = void 0;
  }, []), d = C.useCallback(function(h) {
    l(h.type, kf(h), h.target, i(h, e.lockRef.current));
  }, []), p = C.useCallback(function(h) {
    l(h.type, ds(h), h.target, i(h, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return ao.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, oo), document.addEventListener("touchmove", c, oo), document.addEventListener("touchstart", u, oo), function() {
      ao = ao.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, oo), document.removeEventListener("touchmove", c, oo), document.removeEventListener("touchstart", u, oo);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    v ? C.createElement(a, { styles: U2(o) }) : null,
    m ? C.createElement(D2, { gapMode: "margin" }) : null
  );
}
const H2 = nv(rv, B2);
var iv = C.forwardRef(function(e, t) {
  return C.createElement(Ri, ir({}, e, { ref: t, sideCar: H2 }));
});
iv.classNames = Ri.classNames;
const Ai = iv, _l = [
  "Enter",
  " "
], Y2 = [
  "ArrowDown",
  "PageUp",
  "Home"
], cv = [
  "ArrowUp",
  "PageDown",
  "End"
], K2 = [
  ...Y2,
  ...cv
], G2 = {
  ltr: [
    ..._l,
    "ArrowRight"
  ],
  rtl: [
    ..._l,
    "ArrowLeft"
  ]
}, q2 = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Ii = "Menu", [da, Z2, X2] = wr(Ii), [Yr, za] = st(Ii, [
  X2,
  Tn,
  $r
]), Li = Tn(), lv = $r(), [uv, _r] = Yr(Ii), [Q2, Ba] = Yr(Ii), J2 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Li(t), [c, l] = J(null), u = G(!1), d = Ze(a), p = Pn(o);
  return ee(() => {
    const m = () => {
      u.current = !0, document.addEventListener("pointerdown", v, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", v, {
        capture: !0,
        once: !0
      });
    }, v = () => u.current = !1;
    return document.addEventListener("keydown", m, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", m, {
        capture: !0
      }), document.removeEventListener("pointerdown", v, {
        capture: !0
      }), document.removeEventListener("pointermove", v, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ w(Ao, i, /* @__PURE__ */ w(uv, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ w(Q2, {
    scope: t,
    onClose: ve(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: p,
    modal: s
  }, r)));
}, dv = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Li(n);
  return /* @__PURE__ */ w(Wa, M({}, o, r, {
    ref: t
  }));
}), fv = "MenuPortal", [eC, pv] = Yr(fv, {
  forceMount: void 0
}), tC = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = _r(fv, t);
  return /* @__PURE__ */ w(eC, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(ct, {
    present: n || a.open
  }, /* @__PURE__ */ w(Oi, {
    asChild: !0,
    container: o
  }, r)));
}, rn = "MenuContent", [nC, Nu] = Yr(rn), rC = /* @__PURE__ */ F((e, t) => {
  const n = pv(rn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = _r(rn, e.__scopeMenu), s = Ba(rn, e.__scopeMenu);
  return /* @__PURE__ */ w(da.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, /* @__PURE__ */ w(da.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ w(oC, M({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(aC, M({}, o, {
    ref: t
  })))));
}), oC = /* @__PURE__ */ F((e, t) => {
  const n = _r(rn, e.__scopeMenu), r = G(null), o = Ee(t, r);
  return ee(() => {
    const a = r.current;
    if (a)
      return Di(a);
  }, []), /* @__PURE__ */ w(Pu, M({}, e, {
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
}), aC = /* @__PURE__ */ F((e, t) => {
  const n = _r(rn, e.__scopeMenu);
  return /* @__PURE__ */ w(Pu, M({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Pu = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: m, disableOutsideScroll: v, ...h } = e, g = _r(rn, n), x = Ba(rn, n), b = Li(n), y = lv(n), _ = Z2(n), [$, N] = J(null), k = G(null), S = Ee(t, k, g.onContentChange), P = G(0), Y = G(""), W = G(0), z = G(null), Z = G("right"), q = G(0), j = v ? Ai : qt, L = v ? {
    as: cn,
    allowPinchZoom: !0
  } : void 0, I = (R) => {
    var T, B;
    const X = Y.current + R, ae = _().filter(
      (pe) => !pe.disabled
    ), ne = document.activeElement, ge = (T = ae.find(
      (pe) => pe.ref.current === ne
    )) === null || T === void 0 ? void 0 : T.textValue, be = ae.map(
      (pe) => pe.textValue
    ), oe = CC(be, X, ge), ie = (B = ae.find(
      (pe) => pe.textValue === oe
    )) === null || B === void 0 ? void 0 : B.ref.current;
    (function pe(H) {
      Y.current = H, window.clearTimeout(P.current), H !== "" && (P.current = window.setTimeout(
        () => pe(""),
        1e3
      ));
    })(X), ie && setTimeout(
      () => ie.focus()
    );
  };
  ee(() => () => window.clearTimeout(P.current), []), Ei();
  const K = ve((R) => {
    var T, B;
    return Z.current === ((T = z.current) === null || T === void 0 ? void 0 : T.side) && EC(R, (B = z.current) === null || B === void 0 ? void 0 : B.area);
  }, []);
  return /* @__PURE__ */ w(nC, {
    scope: n,
    searchRef: Y,
    onItemEnter: ve((R) => {
      K(R) && R.preventDefault();
    }, [
      K
    ]),
    onItemLeave: ve((R) => {
      var T;
      K(R) || ((T = k.current) === null || T === void 0 || T.focus(), N(null));
    }, [
      K
    ]),
    onTriggerLeave: ve((R) => {
      K(R) && R.preventDefault();
    }, [
      K
    ]),
    pointerGraceTimerRef: W,
    onPointerGraceIntentChange: ve((R) => {
      z.current = R;
    }, [])
  }, /* @__PURE__ */ w(j, L, /* @__PURE__ */ w(Ni, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: te(a, (R) => {
      var T;
      R.preventDefault(), (T = k.current) === null || T === void 0 || T.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ w(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ w(ki, M({
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
  }), /* @__PURE__ */ w(Ua, M({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": yv(g.open),
    "data-radix-menu-content": "",
    dir: x.dir
  }, b, h, {
    ref: S,
    style: {
      outline: "none",
      ...h.style
    },
    onKeyDown: te(h.onKeyDown, (R) => {
      const B = R.target.closest("[data-radix-menu-content]") === R.currentTarget, X = R.ctrlKey || R.altKey || R.metaKey, ae = R.key.length === 1;
      B && (R.key === "Tab" && R.preventDefault(), !X && ae && I(R.key));
      const ne = k.current;
      if (R.target !== ne || !K2.includes(R.key))
        return;
      R.preventDefault();
      const be = _().filter(
        (oe) => !oe.disabled
      ).map(
        (oe) => oe.ref.current
      );
      cv.includes(R.key) && be.reverse(), $C(be);
    }),
    onBlur: te(e.onBlur, (R) => {
      R.currentTarget.contains(R.target) || (window.clearTimeout(P.current), Y.current = "");
    }),
    onPointerMove: te(e.onPointerMove, fa((R) => {
      const T = R.target, B = q.current !== R.clientX;
      if (R.currentTarget.contains(T) && B) {
        const X = R.clientX > q.current ? "right" : "left";
        Z.current = X, q.current = R.clientX;
      }
    }))
  })))))));
}), mv = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(me.div, M({
    role: "group"
  }, r, {
    ref: t
  }));
}), sC = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(me.div, M({}, r, {
    ref: t
  }));
}), Cl = "MenuItem", Df = "menu.itemSelect", Tu = /* @__PURE__ */ F((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = G(null), s = Ba(Cl, e.__scopeMenu), i = Nu(Cl, e.__scopeMenu), c = Ee(t, a), l = G(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const p = new CustomEvent(Df, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        Df,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), zs(d, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ w(vv, M({}, o, {
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
      n || p && d.key === " " || _l.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), vv = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Nu(Cl, n), i = lv(n), c = G(null), l = Ee(t, c), [u, d] = J(!1), [p, m] = J("");
  return ee(() => {
    const v = c.current;
    if (v) {
      var h;
      m(((h = v.textContent) !== null && h !== void 0 ? h : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ w(da.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ w(Mi, M({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ w(me.div, M({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: te(e.onPointerMove, fa((v) => {
      r ? s.onItemLeave(v) : (s.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus());
    })),
    onPointerLeave: te(e.onPointerLeave, fa(
      (v) => s.onItemLeave(v)
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
}), iC = /* @__PURE__ */ F((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ w(gv, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ w(Tu, M({
    role: "menuitemcheckbox",
    "aria-checked": qs(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Ou(n),
    onSelect: te(
      o.onSelect,
      () => r == null ? void 0 : r(qs(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), cC = "MenuRadioGroup", [lC, uC] = Yr(cC, {
  value: void 0,
  onValueChange: () => {
  }
}), dC = /* @__PURE__ */ F((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Ze(r);
  return /* @__PURE__ */ w(lC, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ w(mv, M({}, o, {
    ref: t
  })));
}), fC = "MenuRadioItem", pC = /* @__PURE__ */ F((e, t) => {
  const { value: n, ...r } = e, o = uC(fC, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ w(gv, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ w(Tu, M({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Ou(a),
    onSelect: te(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), hv = "MenuItemIndicator", [gv, mC] = Yr(hv, {
  checked: !1
}), vC = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = mC(hv, n);
  return /* @__PURE__ */ w(ct, {
    present: r || qs(a.checked) || a.checked === !0
  }, /* @__PURE__ */ w(me.span, M({}, o, {
    ref: t,
    "data-state": Ou(a.checked)
  })));
}), hC = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(me.div, M({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), bv = "MenuSub", [gC, xv] = Yr(bv), bC = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = _r(bv, t), s = Li(t), [i, c] = J(null), [l, u] = J(null), d = Ze(o);
  return ee(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ w(Ao, s, /* @__PURE__ */ w(uv, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ w(gC, {
    scope: t,
    contentId: mt(),
    triggerId: mt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, fs = "MenuSubTrigger", xC = /* @__PURE__ */ F((e, t) => {
  const n = _r(fs, e.__scopeMenu), r = Ba(fs, e.__scopeMenu), o = xv(fs, e.__scopeMenu), a = Nu(fs, e.__scopeMenu), s = G(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = ve(() => {
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
  ]), /* @__PURE__ */ w(dv, M({
    asChild: !0
  }, l), /* @__PURE__ */ w(vv, M({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": yv(n.open)
  }, e, {
    ref: ja(t, o.onTriggerChange),
    onClick: (d) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: te(e.onPointerMove, fa((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: te(e.onPointerLeave, fa((d) => {
      var p;
      u();
      const m = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
      if (m) {
        var v;
        const h = (v = n.content) === null || v === void 0 ? void 0 : v.dataset.side, g = h === "right", x = g ? -5 : 5, b = m[g ? "left" : "right"], y = m[g ? "right" : "left"];
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
          side: h
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
      if (!(e.disabled || p && d.key === " ") && G2[r.dir].includes(d.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })));
}), yC = "MenuSubContent", wC = /* @__PURE__ */ F((e, t) => {
  const n = pv(rn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = _r(rn, e.__scopeMenu), s = Ba(rn, e.__scopeMenu), i = xv(yC, e.__scopeMenu), c = G(null), l = Ee(t, c);
  return /* @__PURE__ */ w(da.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, /* @__PURE__ */ w(da.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(Pu, M({
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
      const d = u.currentTarget.contains(u.target), p = q2[s.dir].includes(u.key);
      if (d && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function yv(e) {
  return e ? "open" : "closed";
}
function qs(e) {
  return e === "indeterminate";
}
function Ou(e) {
  return qs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function $C(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function _C(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function CC(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = _C(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function SC(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function EC(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return SC(n, t);
}
function fa(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const ku = J2, Mu = dv, Du = tC, Ru = rC, ju = mv, Au = sC, Iu = Tu, Lu = iC, Fu = dC, Vu = pC, Wu = vC, Uu = hC, zu = bC, Bu = xC, Hu = wC, wv = "ContextMenu", [NC, P8] = st(wv, [
  za
]), At = za(), [PC, $v] = NC(wv), TC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = J(!1), c = At(t), l = Ze(r), u = ve((d) => {
    i(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ w(PC, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ w(ku, M({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, OC = "ContextMenuTrigger", kC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = $v(OC, n), s = At(n), i = G({
    x: 0,
    y: 0
  }), c = G({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = G(0), u = ve(
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
  ), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(Mu, M({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ w(me.span, M({
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
}), MC = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = At(t);
  return /* @__PURE__ */ w(Du, M({}, r, n));
}, DC = "ContextMenuContent", RC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $v(DC, n), a = At(n), s = G(!1);
  return /* @__PURE__ */ w(Ru, M({}, a, r, {
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
}), jC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ju, M({}, o, r, {
    ref: t
  }));
}), AC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Au, M({}, o, r, {
    ref: t
  }));
}), IC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Iu, M({}, o, r, {
    ref: t
  }));
}), LC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Lu, M({}, o, r, {
    ref: t
  }));
}), FC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Fu, M({}, o, r, {
    ref: t
  }));
}), VC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Vu, M({}, o, r, {
    ref: t
  }));
}), WC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Wu, M({}, o, r, {
    ref: t
  }));
}), UC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Uu, M({}, o, r, {
    ref: t
  }));
}), zC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = At(t), [i, c] = ft({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ w(zu, M({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, BC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Bu, M({}, o, r, {
    ref: t
  }));
}), HC = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Hu, M({}, o, r, {
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
const YC = TC, KC = kC, _v = MC, Cv = RC, GC = jC, Sv = AC, Ev = IC, Nv = LC, qC = FC, Pv = VC, Tv = WC, Ov = UC, ZC = zC, kv = BC, Mv = HC, T8 = YC, O8 = KC, k8 = GC, M8 = _v, D8 = ZC, R8 = qC, XC = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  kv,
  {
    ref: o,
    className: A(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(xr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
XC.displayName = kv.displayName;
const QC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Mv,
  {
    ref: n,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
QC.displayName = Mv.displayName;
const JC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(_v, { children: /* @__PURE__ */ f.exports.jsx(
  Cv,
  {
    ref: n,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
JC.displayName = Cv.displayName;
const eS = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ev,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
eS.displayName = Ev.displayName;
const tS = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Nv,
  {
    ref: o,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Tv, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
tS.displayName = Nv.displayName;
const nS = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Pv,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Tv, { children: /* @__PURE__ */ f.exports.jsx(_i, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
nS.displayName = Pv.displayName;
const rS = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Sv,
  {
    ref: r,
    className: A(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
rS.displayName = Sv.displayName;
const oS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ov,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
oS.displayName = Ov.displayName;
const aS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: A(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
aS.displayName = "ContextMenuShortcut";
var Ha = (e) => e.type === "checkbox", po = (e) => e instanceof Date, Mt = (e) => e == null;
const Dv = (e) => typeof e == "object";
var ht = (e) => !Mt(e) && !Array.isArray(e) && Dv(e) && !po(e), Rv = (e) => ht(e) && e.target ? Ha(e.target) ? e.target.checked : e.target.value : e, sS = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, jv = (e, t) => e.has(sS(t)), iS = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ht(t) && t.hasOwnProperty("isPrototypeOf");
}, Yu = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function bn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Yu && (e instanceof Blob || e instanceof FileList)) && (n || ht(e)))
    if (t = n ? [] : {}, !n && !iS(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = bn(e[r]));
  else
    return e;
  return t;
}
var Ya = (e) => Array.isArray(e) ? e.filter(Boolean) : [], dt = (e) => e === void 0, $e = (e, t, n) => {
  if (!t || !ht(e))
    return n;
  const r = Ya(t.split(/[,[\].]+?/)).reduce((o, a) => Mt(o) ? o : o[a], e);
  return dt(r) || r === e ? dt(e[t]) ? n : e[t] : r;
};
const Zs = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, tn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Rn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Av = E.createContext(null), Fi = () => E.useContext(Av), cS = (e) => {
  const { children: t, ...n } = e;
  return E.createElement(Av.Provider, { value: n }, t);
};
var Iv = (e, t, n, r = !0) => {
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
}, Kt = (e) => ht(e) && !Object.keys(e).length, Lv = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Kt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || tn.all));
}, Ts = (e) => Array.isArray(e) ? e : [e], Fv = (e, t, n) => n && t ? e === t : !e || !t || e === t || Ts(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function Ku(e) {
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
function lS(e) {
  const t = Fi(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = E.useState(n._formState), c = E.useRef(!0), l = E.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = E.useRef(o);
  return u.current = o, Ku({
    disabled: r,
    next: (d) => c.current && Fv(u.current, d.name, a) && Lv(d, l.current, n._updateFormState) && i({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), E.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Iv(s, n, l.current, !1);
}
var yn = (e) => typeof e == "string", Vv = (e, t, n, r, o) => yn(e) ? (r && t.watch.add(e), $e(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), $e(n, a))) : (r && (t.watchAll = !0), n);
function uS(e) {
  const t = Fi(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = E.useRef(r);
  i.current = r, Ku({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Fv(i.current, u.name, s) && l(bn(Vv(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = E.useState(n._getWatch(r, o));
  return E.useEffect(() => n._removeUnmounted()), c;
}
var Gu = (e) => /^\w*$/.test(e), Wv = (e) => Ya(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Xe(e, t, n) {
  let r = -1;
  const o = Gu(t) ? [t] : Wv(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const l = e[i];
      c = ht(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
}
function dS(e) {
  const t = Fi(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = jv(r._names.array, n), s = uS({
    control: r,
    name: n,
    defaultValue: $e(r._formValues, n, $e(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = lS({
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
          value: Rv(l),
          name: n
        },
        type: Zs.CHANGE
      }), [n]),
      onBlur: E.useCallback(() => c.current.onBlur({
        target: {
          value: $e(r._formValues, n),
          name: n
        },
        type: Zs.BLUR
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
const fS = (e) => e.render(dS(e));
var Uv = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const Sl = (e, t, n) => {
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
        ht(s) && Sl(s, t);
    }
  }
};
var Rf = (e) => ({
  isOnSubmit: !e || e === tn.onSubmit,
  isOnBlur: e === tn.onBlur,
  isOnChange: e === tn.onChange,
  isOnAll: e === tn.all,
  isOnTouch: e === tn.onTouched
}), jf = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), pS = (e, t, n) => {
  const r = Ya($e(e, n));
  return Xe(r, "root", t[n]), Xe(e, n, r), e;
}, bo = (e) => typeof e == "boolean", qu = (e) => e.type === "file", lr = (e) => typeof e == "function", Xs = (e) => {
  if (!Yu)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Os = (e) => yn(e), Zu = (e) => e.type === "radio", Qs = (e) => e instanceof RegExp;
const Af = {
  value: !1,
  isValid: !1
}, If = { value: !0, isValid: !0 };
var zv = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !dt(e[0].attributes.value) ? dt(e[0].value) || e[0].value === "" ? If : { value: e[0].value, isValid: !0 } : If
    ) : Af;
  }
  return Af;
};
const Lf = {
  isValid: !1,
  value: null
};
var Bv = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Lf) : Lf;
function Ff(e, t, n = "validate") {
  if (Os(e) || Array.isArray(e) && e.every(Os) || bo(e) && !e)
    return {
      type: n,
      message: Os(e) ? e : "",
      ref: t
    };
}
var so = (e) => ht(e) && !Qs(e) ? e : {
  value: e,
  message: ""
}, Vf = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: m, name: v, valueAsNumber: h, mount: g, disabled: x } = e._f, b = $e(t, v);
  if (!g || x)
    return {};
  const y = s ? s[0] : a, _ = (z) => {
    r && y.reportValidity && (y.setCustomValidity(bo(z) ? "" : z || ""), y.reportValidity());
  }, $ = {}, N = Zu(a), k = Ha(a), S = N || k, P = (h || qu(a)) && dt(a.value) && dt(b) || Xs(a) && a.value === "" || b === "" || Array.isArray(b) && !b.length, Y = Uv.bind(null, v, n, $), W = (z, Z, q, j = Rn.maxLength, L = Rn.minLength) => {
    const I = z ? Z : q;
    $[v] = {
      type: z ? j : L,
      message: I,
      ref: a,
      ...Y(z ? j : L, I)
    };
  };
  if (o ? !Array.isArray(b) || !b.length : i && (!S && (P || Mt(b)) || bo(b) && !b || k && !zv(s).isValid || N && !Bv(s).isValid)) {
    const { value: z, message: Z } = Os(i) ? { value: !!i, message: i } : so(i);
    if (z && ($[v] = {
      type: Rn.required,
      message: Z,
      ref: y,
      ...Y(Rn.required, Z)
    }, !n))
      return _(Z), $;
  }
  if (!P && (!Mt(u) || !Mt(d))) {
    let z, Z;
    const q = so(d), j = so(u);
    if (!Mt(b) && !isNaN(b)) {
      const L = a.valueAsNumber || b && +b;
      Mt(q.value) || (z = L > q.value), Mt(j.value) || (Z = L < j.value);
    } else {
      const L = a.valueAsDate || new Date(b), I = (T) => new Date(new Date().toDateString() + " " + T), K = a.type == "time", R = a.type == "week";
      yn(q.value) && b && (z = K ? I(b) > I(q.value) : R ? b > q.value : L > new Date(q.value)), yn(j.value) && b && (Z = K ? I(b) < I(j.value) : R ? b < j.value : L < new Date(j.value));
    }
    if ((z || Z) && (W(!!z, q.message, j.message, Rn.max, Rn.min), !n))
      return _($[v].message), $;
  }
  if ((c || l) && !P && (yn(b) || o && Array.isArray(b))) {
    const z = so(c), Z = so(l), q = !Mt(z.value) && b.length > +z.value, j = !Mt(Z.value) && b.length < +Z.value;
    if ((q || j) && (W(q, z.message, Z.message), !n))
      return _($[v].message), $;
  }
  if (p && !P && yn(b)) {
    const { value: z, message: Z } = so(p);
    if (Qs(z) && !b.match(z) && ($[v] = {
      type: Rn.pattern,
      message: Z,
      ref: a,
      ...Y(Rn.pattern, Z)
    }, !n))
      return _(Z), $;
  }
  if (m) {
    if (lr(m)) {
      const z = await m(b, t), Z = Ff(z, y);
      if (Z && ($[v] = {
        ...Z,
        ...Y(Rn.validate, Z.message)
      }, !n))
        return _(Z.message), $;
    } else if (ht(m)) {
      let z = {};
      for (const Z in m) {
        if (!Kt(z) && !n)
          break;
        const q = Ff(await m[Z](b, t), y, Z);
        q && (z = {
          ...q,
          ...Y(Z, q.message)
        }, _(q.message), n && ($[v] = z));
      }
      if (!Kt(z) && ($[v] = {
        ref: y,
        ...z
      }, !n))
        return $;
    }
  }
  return _(!0), $;
};
function mS(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = dt(e) ? r++ : e[t[r++]];
  return e;
}
function vS(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !dt(e[t]))
      return !1;
  return !0;
}
function wt(e, t) {
  const n = Array.isArray(t) ? t : Gu(t) ? [t] : Wv(t), r = n.length === 1 ? e : mS(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (ht(r) && Kt(r) || Array.isArray(r) && vS(r)) && wt(e, n.slice(0, -1)), e;
}
function Mc() {
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
var Js = (e) => Mt(e) || !Dv(e);
function Mr(e, t) {
  if (Js(e) || Js(t))
    return e === t;
  if (po(e) && po(t))
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
      if (po(a) && po(s) || ht(a) && ht(s) || Array.isArray(a) && Array.isArray(s) ? !Mr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Hv = (e) => e.type === "select-multiple", hS = (e) => Zu(e) || Ha(e), Dc = (e) => Xs(e) && e.isConnected, Yv = (e) => {
  for (const t in e)
    if (lr(e[t]))
      return !0;
  return !1;
};
function ei(e, t = {}) {
  const n = Array.isArray(e);
  if (ht(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || ht(e[r]) && !Yv(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, ei(e[r], t[r])) : Mt(e[r]) || (t[r] = !0);
  return t;
}
function Kv(e, t, n) {
  const r = Array.isArray(e);
  if (ht(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || ht(e[o]) && !Yv(e[o]) ? dt(t) || Js(n[o]) ? n[o] = Array.isArray(e[o]) ? ei(e[o], []) : { ...ei(e[o]) } : Kv(e[o], Mt(t) ? {} : t[o], n[o]) : n[o] = !Mr(e[o], t[o]);
  return n;
}
var Rc = (e, t) => Kv(e, t, ei(t)), Gv = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => dt(e) ? e : t ? e === "" ? NaN : e && +e : n && yn(e) ? new Date(e) : r ? r(e) : e;
function jc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return qu(t) ? t.files : Zu(t) ? Bv(e.refs).value : Hv(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Ha(t) ? zv(e.refs).value : Gv(dt(t.value) ? e.ref.value : t.value, e);
}
var gS = (e, t, n, r) => {
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
}, na = (e) => dt(e) ? e : Qs(e) ? e.source : ht(e) ? Qs(e.value) ? e.value.source : e.value : e, bS = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Wf(e, t, n) {
  const r = $e(e, n);
  if (r || Gu(n))
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
var xS = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, yS = (e, t) => !Ya($e(e, t)).length && wt(e, t);
const wS = {
  mode: tn.onSubmit,
  reValidateMode: tn.onChange,
  shouldFocusError: !0
};
function $S(e = {}, t) {
  let n = {
    ...wS,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: lr(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, o = {}, a = ht(n.defaultValues) || ht(n.values) ? bn(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : bn(a), i = {
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
    values: Mc(),
    array: Mc(),
    state: Mc()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, v = Rf(n.mode), h = Rf(n.reValidateMode), g = n.criteriaMode === tn.all, x = (O) => (U) => {
    clearTimeout(u), u = setTimeout(O, U);
  }, b = async (O) => {
    if (d.isValid || O) {
      const U = n.resolver ? Kt((await P()).errors) : await W(o, !0);
      U !== r.isValid && p.state.next({
        isValid: U
      });
    }
  }, y = (O) => d.isValidating && p.state.next({
    isValidating: O
  }), _ = (O, U = [], Q, fe, le = !0, se = !0) => {
    if (fe && Q) {
      if (i.action = !0, se && Array.isArray($e(o, O))) {
        const we = Q($e(o, O), fe.argA, fe.argB);
        le && Xe(o, O, we);
      }
      if (se && Array.isArray($e(r.errors, O))) {
        const we = Q($e(r.errors, O), fe.argA, fe.argB);
        le && Xe(r.errors, O, we), yS(r.errors, O);
      }
      if (d.touchedFields && se && Array.isArray($e(r.touchedFields, O))) {
        const we = Q($e(r.touchedFields, O), fe.argA, fe.argB);
        le && Xe(r.touchedFields, O, we);
      }
      d.dirtyFields && (r.dirtyFields = Rc(a, s)), p.state.next({
        name: O,
        isDirty: Z(O, U),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Xe(s, O, U);
  }, $ = (O, U) => {
    Xe(r.errors, O, U), p.state.next({
      errors: r.errors
    });
  }, N = (O, U, Q, fe) => {
    const le = $e(o, O);
    if (le) {
      const se = $e(s, O, dt(Q) ? $e(a, O) : Q);
      dt(se) || fe && fe.defaultChecked || U ? Xe(s, O, U ? se : jc(le._f)) : L(O, se), i.mount && b();
    }
  }, k = (O, U, Q, fe, le) => {
    let se = !1, we = !1;
    const Le = {
      name: O
    };
    if (!Q || fe) {
      d.isDirty && (we = r.isDirty, r.isDirty = Le.isDirty = Z(), se = we !== Le.isDirty);
      const Ue = Mr($e(a, O), U);
      we = $e(r.dirtyFields, O), Ue ? wt(r.dirtyFields, O) : Xe(r.dirtyFields, O, !0), Le.dirtyFields = r.dirtyFields, se = se || d.dirtyFields && we !== !Ue;
    }
    if (Q) {
      const Ue = $e(r.touchedFields, O);
      Ue || (Xe(r.touchedFields, O, Q), Le.touchedFields = r.touchedFields, se = se || d.touchedFields && Ue !== Q);
    }
    return se && le && p.state.next(Le), se ? Le : {};
  }, S = (O, U, Q, fe) => {
    const le = $e(r.errors, O), se = d.isValid && bo(U) && r.isValid !== U;
    if (e.delayError && Q ? (l = x(() => $(O, Q)), l(e.delayError)) : (clearTimeout(u), l = null, Q ? Xe(r.errors, O, Q) : wt(r.errors, O)), (Q ? !Mr(le, Q) : le) || !Kt(fe) || se) {
      const we = {
        ...fe,
        ...se && bo(U) ? { isValid: U } : {},
        errors: r.errors,
        name: O
      };
      r = {
        ...r,
        ...we
      }, p.state.next(we);
    }
    y(!1);
  }, P = async (O) => n.resolver(s, n.context, gS(O || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), Y = async (O) => {
    const { errors: U } = await P();
    if (O)
      for (const Q of O) {
        const fe = $e(U, Q);
        fe ? Xe(r.errors, Q, fe) : wt(r.errors, Q);
      }
    else
      r.errors = U;
    return U;
  }, W = async (O, U, Q = {
    valid: !0
  }) => {
    for (const fe in O) {
      const le = O[fe];
      if (le) {
        const { _f: se, ...we } = le;
        if (se) {
          const Le = c.array.has(se.name), Ue = await Vf(le, s, g, n.shouldUseNativeValidation && !U, Le);
          if (Ue[se.name] && (Q.valid = !1, U))
            break;
          !U && ($e(Ue, se.name) ? Le ? pS(r.errors, Ue, se.name) : Xe(r.errors, se.name, Ue[se.name]) : wt(r.errors, se.name));
        }
        we && await W(we, U, Q);
      }
    }
    return Q.valid;
  }, z = () => {
    for (const O of c.unMount) {
      const U = $e(o, O);
      U && (U._f.refs ? U._f.refs.every((Q) => !Dc(Q)) : !Dc(U._f.ref)) && be(O);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, Z = (O, U) => (O && U && Xe(s, O, U), !Mr(B(), a)), q = (O, U, Q) => Vv(O, c, {
    ...i.mount ? s : dt(U) ? a : yn(O) ? { [O]: U } : U
  }, Q, U), j = (O) => Ya($e(i.mount ? s : a, O, e.shouldUnregister ? $e(a, O, []) : [])), L = (O, U, Q = {}) => {
    const fe = $e(o, O);
    let le = U;
    if (fe) {
      const se = fe._f;
      se && (!se.disabled && Xe(s, O, Gv(U, se)), le = Xs(se.ref) && Mt(U) ? "" : U, Hv(se.ref) ? [...se.ref.options].forEach((we) => we.selected = le.includes(we.value)) : se.refs ? Ha(se.ref) ? se.refs.length > 1 ? se.refs.forEach((we) => (!we.defaultChecked || !we.disabled) && (we.checked = Array.isArray(le) ? !!le.find((Le) => Le === we.value) : le === we.value)) : se.refs[0] && (se.refs[0].checked = !!le) : se.refs.forEach((we) => we.checked = we.value === le) : qu(se.ref) ? se.ref.value = "" : (se.ref.value = le, se.ref.type || p.values.next({
        name: O,
        values: { ...s }
      })));
    }
    (Q.shouldDirty || Q.shouldTouch) && k(O, le, Q.shouldTouch, Q.shouldDirty, !0), Q.shouldValidate && T(O);
  }, I = (O, U, Q) => {
    for (const fe in U) {
      const le = U[fe], se = `${O}.${fe}`, we = $e(o, se);
      (c.array.has(O) || !Js(le) || we && !we._f) && !po(le) ? I(se, le, Q) : L(se, le, Q);
    }
  }, K = (O, U, Q = {}) => {
    const fe = $e(o, O), le = c.array.has(O), se = bn(U);
    Xe(s, O, se), le ? (p.array.next({
      name: O,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && Q.shouldDirty && p.state.next({
      name: O,
      dirtyFields: Rc(a, s),
      isDirty: Z(O, se)
    })) : fe && !fe._f && !Mt(se) ? I(O, se, Q) : L(O, se, Q), jf(O, c) && p.state.next({ ...r }), p.values.next({
      name: O,
      values: { ...s }
    }), !i.mount && t();
  }, R = async (O) => {
    const U = O.target;
    let Q = U.name, fe = !0;
    const le = $e(o, Q), se = () => U.type ? jc(le._f) : Rv(O);
    if (le) {
      let we, Le;
      const Ue = se(), yt = O.type === Zs.BLUR || O.type === Zs.FOCUS_OUT, gn = !bS(le._f) && !n.resolver && !$e(r.errors, Q) && !le._f.deps || xS(yt, $e(r.touchedFields, Q), r.isSubmitted, h, v), Et = jf(Q, c, yt);
      Xe(s, Q, Ue), yt ? (le._f.onBlur && le._f.onBlur(O), l && l(0)) : le._f.onChange && le._f.onChange(O);
      const Ne = k(Q, Ue, yt, !1), Se = !Kt(Ne) || Et;
      if (!yt && p.values.next({
        name: Q,
        type: O.type,
        values: { ...s }
      }), gn)
        return d.isValid && b(), Se && p.state.next({ name: Q, ...Et ? {} : Ne });
      if (!yt && Et && p.state.next({ ...r }), y(!0), n.resolver) {
        const { errors: Re } = await P([Q]), He = Wf(r.errors, o, Q), tt = Wf(Re, o, He.name || Q);
        we = tt.error, Q = tt.name, Le = Kt(Re);
      } else
        we = (await Vf(le, s, g, n.shouldUseNativeValidation))[Q], fe = isNaN(Ue) || Ue === $e(s, Q, Ue), fe && (we ? Le = !1 : d.isValid && (Le = await W(o, !0)));
      fe && (le._f.deps && T(le._f.deps), S(Q, Le, we, Ne));
    }
  }, T = async (O, U = {}) => {
    let Q, fe;
    const le = Ts(O);
    if (y(!0), n.resolver) {
      const se = await Y(dt(O) ? O : le);
      Q = Kt(se), fe = O ? !le.some((we) => $e(se, we)) : Q;
    } else
      O ? (fe = (await Promise.all(le.map(async (se) => {
        const we = $e(o, se);
        return await W(we && we._f ? { [se]: we } : we);
      }))).every(Boolean), !(!fe && !r.isValid) && b()) : fe = Q = await W(o);
    return p.state.next({
      ...!yn(O) || d.isValid && Q !== r.isValid ? {} : { name: O },
      ...n.resolver || !O ? { isValid: Q } : {},
      errors: r.errors,
      isValidating: !1
    }), U.shouldFocus && !fe && Sl(o, (se) => se && $e(r.errors, se), O ? le : c.mount), fe;
  }, B = (O) => {
    const U = {
      ...a,
      ...i.mount ? s : {}
    };
    return dt(O) ? U : yn(O) ? $e(U, O) : O.map((Q) => $e(U, Q));
  }, X = (O, U) => ({
    invalid: !!$e((U || r).errors, O),
    isDirty: !!$e((U || r).dirtyFields, O),
    isTouched: !!$e((U || r).touchedFields, O),
    error: $e((U || r).errors, O)
  }), ae = (O) => {
    O && Ts(O).forEach((U) => wt(r.errors, U)), p.state.next({
      errors: O ? r.errors : {}
    });
  }, ne = (O, U, Q) => {
    const fe = ($e(o, O, { _f: {} })._f || {}).ref;
    Xe(r.errors, O, {
      ...U,
      ref: fe
    }), p.state.next({
      name: O,
      errors: r.errors,
      isValid: !1
    }), Q && Q.shouldFocus && fe && fe.focus && fe.focus();
  }, ge = (O, U) => lr(O) ? p.values.subscribe({
    next: (Q) => O(q(void 0, U), Q)
  }) : q(O, U, !0), be = (O, U = {}) => {
    for (const Q of O ? Ts(O) : c.mount)
      c.mount.delete(Q), c.array.delete(Q), U.keepValue || (wt(o, Q), wt(s, Q)), !U.keepError && wt(r.errors, Q), !U.keepDirty && wt(r.dirtyFields, Q), !U.keepTouched && wt(r.touchedFields, Q), !n.shouldUnregister && !U.keepDefaultValue && wt(a, Q);
    p.values.next({
      values: { ...s }
    }), p.state.next({
      ...r,
      ...U.keepDirty ? { isDirty: Z() } : {}
    }), !U.keepIsValid && b();
  }, oe = (O, U = {}) => {
    let Q = $e(o, O);
    const fe = bo(U.disabled);
    return Xe(o, O, {
      ...Q || {},
      _f: {
        ...Q && Q._f ? Q._f : { ref: { name: O } },
        name: O,
        mount: !0,
        ...U
      }
    }), c.mount.add(O), dt(U.value) || Xe(s, O, U.value), Q ? fe && Xe(s, O, U.disabled ? void 0 : $e(s, O, jc(Q._f))) : N(O, !0, U.value), {
      ...fe ? { disabled: U.disabled } : {},
      ...n.progressive ? {
        required: !!U.required,
        min: na(U.min),
        max: na(U.max),
        minLength: na(U.minLength),
        maxLength: na(U.maxLength),
        pattern: na(U.pattern)
      } : {},
      name: O,
      onChange: R,
      onBlur: R,
      ref: (le) => {
        if (le) {
          oe(O, U), Q = $e(o, O);
          const se = dt(le.value) && le.querySelectorAll && le.querySelectorAll("input,select,textarea")[0] || le, we = hS(se), Le = Q._f.refs || [];
          if (we ? Le.find((Ue) => Ue === se) : se === Q._f.ref)
            return;
          Xe(o, O, {
            _f: {
              ...Q._f,
              ...we ? {
                refs: [
                  ...Le.filter(Dc),
                  se,
                  ...Array.isArray($e(a, O)) ? [{}] : []
                ],
                ref: { type: se.type, name: O }
              } : { ref: se }
            }
          }), N(O, !1, void 0, se);
        } else
          Q = $e(o, O, {}), Q._f && (Q._f.mount = !1), (n.shouldUnregister || U.shouldUnregister) && !(jv(c.array, O) && i.action) && c.unMount.add(O);
      }
    };
  }, ie = () => n.shouldFocusError && Sl(o, (O) => O && $e(r.errors, O), c.mount), pe = (O, U) => async (Q) => {
    Q && (Q.preventDefault && Q.preventDefault(), Q.persist && Q.persist());
    let fe = bn(s);
    if (p.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: le, values: se } = await P();
      r.errors = le, fe = se;
    } else
      await W(o);
    wt(r.errors, "root"), Kt(r.errors) ? (p.state.next({
      errors: {}
    }), await O(fe, Q)) : (U && await U({ ...r.errors }, Q), ie(), setTimeout(ie)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Kt(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, H = (O, U = {}) => {
    $e(o, O) && (dt(U.defaultValue) ? K(O, $e(a, O)) : (K(O, U.defaultValue), Xe(a, O, U.defaultValue)), U.keepTouched || wt(r.touchedFields, O), U.keepDirty || (wt(r.dirtyFields, O), r.isDirty = U.defaultValue ? Z(O, $e(a, O)) : Z()), U.keepError || (wt(r.errors, O), d.isValid && b()), p.state.next({ ...r }));
  }, re = (O, U = {}) => {
    const Q = O || a, fe = bn(Q), le = O && !Kt(O) ? fe : a;
    if (U.keepDefaultValues || (a = Q), !U.keepValues) {
      if (U.keepDirtyValues || m)
        for (const se of c.mount)
          $e(r.dirtyFields, se) ? Xe(le, se, $e(s, se)) : K(se, $e(le, se));
      else {
        if (Yu && dt(O))
          for (const se of c.mount) {
            const we = $e(o, se);
            if (we && we._f) {
              const Le = Array.isArray(we._f.refs) ? we._f.refs[0] : we._f.ref;
              if (Xs(Le)) {
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
      s = e.shouldUnregister ? U.keepDefaultValues ? bn(a) : {} : bn(le), p.array.next({
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
    }, !i.mount && t(), i.mount = !d.isValid || !!U.keepIsValid, i.watch = !!e.shouldUnregister, p.state.next({
      submitCount: U.keepSubmitCount ? r.submitCount : 0,
      isDirty: U.keepDirty ? r.isDirty : !!(U.keepDefaultValues && !Mr(O, a)),
      isSubmitted: U.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: U.keepDirtyValues ? r.dirtyFields : U.keepDefaultValues && O ? Rc(a, O) : {},
      touchedFields: U.keepTouched ? r.touchedFields : {},
      errors: U.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, V = (O, U) => re(lr(O) ? O(s) : O, U);
  return {
    control: {
      register: oe,
      unregister: be,
      getFieldState: X,
      handleSubmit: pe,
      setError: ne,
      _executeSchema: P,
      _getWatch: q,
      _getDirty: Z,
      _updateValid: b,
      _removeUnmounted: z,
      _updateFieldArray: _,
      _getFieldArray: j,
      _reset: re,
      _resetDefaultValues: () => lr(n.defaultValues) && n.defaultValues().then((O) => {
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
    trigger: T,
    register: oe,
    handleSubmit: pe,
    watch: ge,
    setValue: K,
    getValues: B,
    reset: V,
    resetField: H,
    clearErrors: ae,
    unregister: be,
    setError: ne,
    setFocus: (O, U = {}) => {
      const Q = $e(o, O), fe = Q && Q._f;
      if (fe) {
        const le = fe.refs ? fe.refs[0] : fe.ref;
        le.focus && (le.focus(), U.shouldSelect && le.select());
      }
    },
    getFieldState: X
  };
}
function qv(e = {}) {
  const t = E.useRef(), n = E.useRef(), [r, o] = E.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: lr(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: lr(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...$S(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, Ku({
    subject: a._subjects.state,
    next: (s) => {
      Lv(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), E.useEffect(() => {
    e.values && !Mr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), E.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = Iv(r, a), t.current;
}
const _S = /* @__PURE__ */ F((e, t) => /* @__PURE__ */ w(me.label, M({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Zv = _S, CS = Do(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), On = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Zv,
  {
    ref: n,
    className: A(CS(), e),
    ...t
  }
));
On.displayName = Zv.displayName;
const Xv = cS, Qv = C.createContext(
  {}
), Kr = ({
  ...e
}) => /* @__PURE__ */ f.exports.jsx(Qv.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.exports.jsx(fS, { ...e }) }), Vi = () => {
  const e = C.useContext(Qv), t = C.useContext(Jv), { getFieldState: n, formState: r } = Fi(), o = n(e.name, r);
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
}, Jv = C.createContext(
  {}
), Cr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ f.exports.jsx(Jv.Provider, { value: { id: r }, children: /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: A("space-y-2", e), ...t }) });
});
Cr.displayName = "FormItem";
const Gr = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Vi();
  return /* @__PURE__ */ f.exports.jsx(
    On,
    {
      ref: n,
      className: A(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Gr.displayName = "FormLabel";
const Ka = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Vi();
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
Ka.displayName = "FormControl";
const Io = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Vi();
  return /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: A("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Io.displayName = "FormDescription";
const SS = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Vi(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: A("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
SS.displayName = "FormMessage";
var ES = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, io = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), vs = {}, Ac = 0, eh = function(e) {
  return e && (e.host || eh(e.parentNode));
}, NS = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = eh(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, PS = function(e, t, n, r) {
  var o = NS(t, Array.isArray(e) ? e : [e]);
  vs[n] || (vs[n] = /* @__PURE__ */ new WeakMap());
  var a = vs[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var m = p.getAttribute(r), v = m !== null && m !== "false", h = (io.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          io.set(p, h), a.set(p, g), s.push(p), h === 1 && v && ms.set(p, !0), g === 1 && p.setAttribute(n, "true"), v || p.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", p, x);
        }
    });
  };
  return u(t), i.clear(), Ac++, function() {
    s.forEach(function(d) {
      var p = io.get(d) - 1, m = a.get(d) - 1;
      io.set(d, p), a.set(d, m), p || (ms.has(d) || d.removeAttribute(r), ms.delete(d)), m || d.removeAttribute(n);
    }), Ac--, Ac || (io = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), vs = {});
  };
}, TS = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || ES(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), PS(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
const th = "Dialog", [nh, rh] = st(th), [OS, mn] = nh(th), kS = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = G(null), c = G(null), [l = !1, u] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(OS, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: mt(),
    titleId: mt(),
    descriptionId: mt(),
    open: l,
    onOpenChange: u,
    onOpenToggle: ve(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, MS = "DialogTrigger", DS = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(MS, n), a = Ee(t, o.triggerRef);
  return /* @__PURE__ */ w(me.button, St({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Xu(o.open)
  }, r, {
    ref: a,
    onClick: te(e.onClick, o.onOpenToggle)
  }));
}), oh = "DialogPortal", [RS, ah] = nh(oh, {
  forceMount: void 0
}), jS = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = mn(oh, t);
  return /* @__PURE__ */ w(RS, {
    scope: t,
    forceMount: n
  }, Vt.map(
    r,
    (s) => /* @__PURE__ */ w(ct, {
      present: n || a.open
    }, /* @__PURE__ */ w(Oi, {
      asChild: !0,
      container: o
    }, s))
  ));
}, El = "DialogOverlay", AS = /* @__PURE__ */ F((e, t) => {
  const n = ah(El, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = mn(El, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, /* @__PURE__ */ w(IS, St({}, o, {
    ref: t
  }))) : null;
}), IS = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(El, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(Ai, {
      as: cn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(me.div, St({
      "data-state": Xu(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), So = "DialogContent", LS = /* @__PURE__ */ F((e, t) => {
  const n = ah(So, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = mn(So, e.__scopeDialog);
  return /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(FS, St({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(VS, St({}, o, {
    ref: t
  })));
}), FS = /* @__PURE__ */ F((e, t) => {
  const n = mn(So, e.__scopeDialog), r = G(null), o = Ee(t, n.contentRef, r);
  return ee(() => {
    const a = r.current;
    if (a)
      return TS(a);
  }, []), /* @__PURE__ */ w(sh, St({}, e, {
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
}), VS = /* @__PURE__ */ F((e, t) => {
  const n = mn(So, e.__scopeDialog), r = G(!1), o = G(!1);
  return /* @__PURE__ */ w(sh, St({}, e, {
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
}), sh = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = mn(So, n), c = G(null), l = Ee(t, c);
  return Ei(), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(Ni, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(Hr, St({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Xu(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), ih = "DialogTitle", WS = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(ih, n);
  return /* @__PURE__ */ w(me.h2, St({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), US = "DialogDescription", zS = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(US, n);
  return /* @__PURE__ */ w(me.p, St({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), BS = "DialogClose", HS = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(BS, n);
  return /* @__PURE__ */ w(me.button, St({
    type: "button"
  }, r, {
    ref: t,
    onClick: te(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Xu(e) {
  return e ? "open" : "closed";
}
const YS = "DialogTitleWarning", [KS, j8] = P$(YS, {
  contentName: So,
  titleName: ih,
  docsSlug: "dialog"
}), Wi = kS, Ui = DS, zi = jS, Lo = AS, Fo = LS, Vo = WS, Wo = zS, qr = HS, ch = Wi, A8 = Ui, GS = zi, I8 = qr, lh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Lo,
  {
    ref: n,
    className: A(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
lh.displayName = Lo.displayName;
const Qu = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(GS, { children: [
  /* @__PURE__ */ f.exports.jsx(lh, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Fo,
    {
      ref: r,
      className: A(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ f.exports.jsxs(qr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ f.exports.jsx(Ci, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Qu.displayName = Fo.displayName;
const qS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
qS.displayName = "DialogHeader";
const ZS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
ZS.displayName = "DialogFooter";
const XS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Vo,
  {
    ref: n,
    className: A(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
XS.displayName = Vo.displayName;
const QS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Wo,
  {
    ref: n,
    className: A("text-sm text-muted-foreground", e),
    ...t
  }
));
QS.displayName = Wo.displayName;
const JS = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
  const [l, u] = C.useState(!1);
  return s ? /* @__PURE__ */ f.exports.jsxs("div", { className: A("w-full", a), children: [
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
  ] }) : c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: A("w-full", a), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsxs(On, { className: "flex", htmlFor: e, children: [
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
        pa,
        {
          ...c,
          className: A(i(), c.className),
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
    Kr,
    {
      control: t.control,
      name: e,
      render: ({ field: d, formState: p }) => {
        var m;
        return /* @__PURE__ */ f.exports.jsxs(Cr, { className: A("w-full", a), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ f.exports.jsxs(Gr, { className: "flex", children: [
              n,
              " "
            ] }),
            ((m = p == null ? void 0 : p.errors[e]) == null ? void 0 : m.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              p.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(Io, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ f.exports.jsx(Ka, { children: /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => u((v) => !v),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                disabled: c == null ? void 0 : c.disabled,
                children: l ? /* @__PURE__ */ f.exports.jsx(as, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(os, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(
              pa,
              {
                ...d,
                ...c,
                disabled: c == null ? void 0 : c.disabled,
                className: A(i(), c.className),
                type: l ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => u((v) => !v),
                children: l ? /* @__PURE__ */ f.exports.jsx(as, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(os, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, eE = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: l }) => c || c && l.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: A("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
    Pt,
    {
      className: A(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : l.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: A("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(On, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ f.exports.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ f.exports.jsx(
      pa,
      {
        ...l,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ f.exports.jsx(
  Kr,
  {
    control: t.control,
    name: e,
    render: ({ field: u, formState: d }) => {
      var p;
      return /* @__PURE__ */ f.exports.jsxs(Cr, { className: A("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ f.exports.jsxs(Gr, { className: "flex", children: [
            r,
            " "
          ] }),
          ((p = d == null ? void 0 : d.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            d.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(Io, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ f.exports.jsx(Ka, { children: /* @__PURE__ */ f.exports.jsx(
            pa,
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
), pa = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
    "input",
    {
      type: t,
      className: A(
        "w-full flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
pa.displayName = "InputUI";
function Ju({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const l = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ f.exports.jsx(
    JS,
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
    eE,
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
const tE = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), nE = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, Uf = (e) => {
  const t = [
    Xo.VENEZUELAN,
    Xo.JURIDICAL,
    Xo.FOREIGN,
    Xo.PASSPORT,
    Xo.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, Nt = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: Uf(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: Uf(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function L8({ form: e, pid: t = Nt, format: n = !0 }) {
  var o, a, s, i, c, l, u, d, p, m, v, h, g, x, b, y, _;
  const r = ($) => {
    var P;
    const { value: N } = $.target, k = n ? tE(N) : N, S = ((P = t == null ? void 0 : t.number) == null ? void 0 : P.id) || Nt.number.id;
    e.setValue(S, k);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      aM,
      {
        id: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.id) || Nt.type.id,
        form: e,
        label: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.label) || Nt.type.label,
        items: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.items) || Nt.type.items,
        tabIndex: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.tabIndex) || Nt.type.tabIndex,
        placeholder: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.placeholder) || Nt.type.placeholder,
        defaultValue: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.defaultValue) || Nt.type.defaultValue,
        notFoundLabel: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.notFoundLabel) || Nt.type.notFoundLabel,
        ctaPlaceholder: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.ctaPlaceholder) || Nt.type.ctaPlaceholder,
        buttonClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.buttonClassName) || Nt.type.buttonClassName,
        popoverClassName: ((m = t == null ? void 0 : t.type) == null ? void 0 : m.popoverClassName) || Nt.type.popoverClassName,
        disabled: (v = t == null ? void 0 : t.type) == null ? void 0 : v.disabled
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      Ju,
      {
        id: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.id) || Nt.number.id,
        form: e,
        type: "text",
        defaultValue: (g = t == null ? void 0 : t.number) == null ? void 0 : g.defaultValue,
        onKeyPress: nE,
        onKeyUp: r,
        tabIndex: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.tabIndex) || Nt.number.tabIndex,
        maxLength: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.maxLength) || Nt.number.maxLength,
        placeholder: ((y = t == null ? void 0 : t.number) == null ? void 0 : y.placeholder) || Nt.number.placeholder,
        disabled: (_ = t == null ? void 0 : t.number) == null ? void 0 : _.disabled
      }
    )
  ] });
}
const uh = "Popover", [dh, F8] = st(uh, [
  Tn
]), ed = Tn(), [rE, Uo] = dh(uh), oE = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = ed(t), c = G(null), [l, u] = J(!1), [d = !1, p] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(Ao, i, /* @__PURE__ */ w(rE, {
    scope: t,
    contentId: mt(),
    triggerRef: c,
    open: d,
    onOpenChange: p,
    onOpenToggle: ve(
      () => p(
        (m) => !m
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ve(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: ve(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, aE = "PopoverTrigger", sE = /* @__PURE__ */ F((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Uo(aE, n), a = ed(n), s = Ee(t, o.triggerRef), i = /* @__PURE__ */ w(me.button, M({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": mh(o.open)
  }, r, {
    ref: s,
    onClick: te(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ w(Wa, M({
    asChild: !0
  }, a), i);
}), fh = "PopoverPortal", [iE, cE] = dh(fh, {
  forceMount: void 0
}), lE = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Uo(fh, t);
  return /* @__PURE__ */ w(iE, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(ct, {
    present: n || a.open
  }, /* @__PURE__ */ w(Oi, {
    asChild: !0,
    container: o
  }, r)));
}, ma = "PopoverContent", uE = /* @__PURE__ */ F((e, t) => {
  const n = cE(ma, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Uo(ma, e.__scopePopover);
  return /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(dE, M({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(fE, M({}, o, {
    ref: t
  })));
}), dE = /* @__PURE__ */ F((e, t) => {
  const n = Uo(ma, e.__scopePopover), r = G(null), o = Ee(t, r), a = G(!1);
  return ee(() => {
    const s = r.current;
    if (s)
      return Di(s);
  }, []), /* @__PURE__ */ w(Ai, {
    as: cn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(ph, M({}, e, {
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
}), fE = /* @__PURE__ */ F((e, t) => {
  const n = Uo(ma, e.__scopePopover), r = G(!1), o = G(!1);
  return /* @__PURE__ */ w(ph, M({}, e, {
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
}), ph = /* @__PURE__ */ F((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, p = Uo(ma, n), m = ed(n);
  return Ei(), /* @__PURE__ */ w(Ni, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ w(Ua, M({
    "data-state": mh(p.open),
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
function mh(e) {
  return e ? "open" : "closed";
}
const pE = oE, mE = sE, vE = lE, vh = uE, zn = pE, Bn = mE, Cn = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(vE, { children: /* @__PURE__ */ f.exports.jsx(
  vh,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: A(
      "z-50 w-72 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Cn.displayName = vh.displayName;
const hh = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
    "textarea",
    {
      className: A(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
hh.displayName = "TextareaUI";
const V8 = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i || i && c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: A("w-full"), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
    Pt,
    {
      className: A("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ f.exports.jsx(
  Kr,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: u }) => {
      var d;
      return /* @__PURE__ */ f.exports.jsxs(Cr, { className: A("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Gr, { className: "flex", children: [
            n,
            " "
          ] }),
          ((d = u == null ? void 0 : u.errors[e]) == null ? void 0 : d.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            u.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(Io, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsx(Ka, { children: /* @__PURE__ */ f.exports.jsx(
          hh,
          {
            placeholder: a,
            className: A("resize-none", r),
            ...l,
            ...c
          }
        ) })
      ] });
    }
  }
);
function va(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function zo(e) {
  const t = G({
    value: e,
    previous: e
  });
  return _t(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const gh = /* @__PURE__ */ F((e, t) => /* @__PURE__ */ w(me.span, M({}, e, {
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
}))), bh = gh, hE = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], gE = [
  " ",
  "Enter"
], Bi = "Select", [Hi, td, bE] = wr(Bi), [Bo, W8] = st(Bi, [
  bE,
  Tn
]), nd = Tn(), [xE, Zr] = Bo(Bi), [yE, wE] = Bo(Bi), $E = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: p, required: m } = e, v = nd(t), [h, g] = J(null), [x, b] = J(null), [y, _] = J(!1), $ = Pn(l), [N = !1, k] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [S, P] = ft({
    prop: s,
    defaultProp: i,
    onChange: c
  }), Y = G(null), W = h ? Boolean(h.closest("form")) : !0, [z, Z] = J(/* @__PURE__ */ new Set()), q = Array.from(z).map(
    (j) => j.props.value
  ).join(";");
  return /* @__PURE__ */ w(Ao, v, /* @__PURE__ */ w(xE, {
    required: m,
    scope: t,
    trigger: h,
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
  }, /* @__PURE__ */ w(Hi.Provider, {
    scope: t
  }, /* @__PURE__ */ w(yE, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ve((j) => {
      Z(
        (L) => new Set(L).add(j)
      );
    }, []),
    onNativeOptionRemove: ve((j) => {
      Z((L) => {
        const I = new Set(L);
        return I.delete(j), I;
      });
    }, [])
  }, n)), W ? /* @__PURE__ */ w(wh, {
    key: q,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: S,
    onChange: (j) => P(j.target.value),
    disabled: p
  }, S === void 0 ? /* @__PURE__ */ w("option", {
    value: ""
  }) : null, Array.from(z)) : null));
}, _E = "SelectTrigger", CE = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = nd(n), s = Zr(_E, n), i = s.disabled || r, c = Ee(t, s.onTriggerChange), l = td(n), [u, d, p] = $h((v) => {
    const h = l().filter(
      (b) => !b.disabled
    ), g = h.find(
      (b) => b.value === s.value
    ), x = _h(h, v, g);
    x !== void 0 && s.onValueChange(x.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ w(Wa, M({
    asChild: !0
  }, a), /* @__PURE__ */ w(me.button, M({
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
    onClick: te(o.onClick, (v) => {
      v.currentTarget.focus();
    }),
    onPointerDown: te(o.onPointerDown, (v) => {
      const h = v.target;
      h.hasPointerCapture(v.pointerId) && h.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      }, v.preventDefault());
    }),
    onKeyDown: te(o.onKeyDown, (v) => {
      const h = u.current !== "";
      !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && d(v.key), !(h && v.key === " ") && hE.includes(v.key) && (m(), v.preventDefault());
    })
  })));
}), SE = "SelectValue", EE = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = Zr(SE, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = Ee(t, c.onValueNodeChange);
  return Ct(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ w(me.span, M({}, i, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && s !== void 0 ? s : a);
}), NE = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ w(me.span, M({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), PE = (e) => /* @__PURE__ */ w(Oi, M({
  asChild: !0
}, e)), Eo = "SelectContent", TE = /* @__PURE__ */ F((e, t) => {
  const n = Zr(Eo, e.__scopeSelect), [r, o] = J();
  if (Ct(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Jp(/* @__PURE__ */ w(xh, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w(Hi.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ w(OE, M({}, e, {
    ref: t
  }));
}), jn = 10, [xh, Yi] = Bo(Eo), OE = /* @__PURE__ */ F((e, t) => {
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
    sticky: v,
    hideWhenDetached: h,
    avoidCollisions: g,
    //
    ...x
  } = e, b = Zr(Eo, n), [y, _] = J(null), [$, N] = J(null), k = Ee(
    t,
    (oe) => _(oe)
  ), [S, P] = J(null), [Y, W] = J(null), z = td(n), [Z, q] = J(!1), j = G(!1);
  ee(() => {
    if (y)
      return Di(y);
  }, [
    y
  ]), Ei();
  const L = ve((oe) => {
    const [ie, ...pe] = z().map(
      (V) => V.ref.current
    ), [H] = pe.slice(-1), re = document.activeElement;
    for (const V of oe)
      if (V === re || (V == null || V.scrollIntoView({
        block: "nearest"
      }), V === ie && $ && ($.scrollTop = 0), V === H && $ && ($.scrollTop = $.scrollHeight), V == null || V.focus(), document.activeElement !== re))
        return;
  }, [
    z,
    $
  ]), I = ve(
    () => L([
      S,
      y
    ]),
    [
      L,
      S,
      y
    ]
  );
  ee(() => {
    Z && I();
  }, [
    Z,
    I
  ]);
  const { onOpenChange: K, triggerPointerDownPosRef: R } = b;
  ee(() => {
    if (y) {
      let oe = {
        x: 0,
        y: 0
      };
      const ie = (H) => {
        var re, V, de, he;
        oe = {
          x: Math.abs(Math.round(H.pageX) - ((re = (V = R.current) === null || V === void 0 ? void 0 : V.x) !== null && re !== void 0 ? re : 0)),
          y: Math.abs(Math.round(H.pageY) - ((de = (he = R.current) === null || he === void 0 ? void 0 : he.y) !== null && de !== void 0 ? de : 0))
        };
      }, pe = (H) => {
        oe.x <= 10 && oe.y <= 10 ? H.preventDefault() : y.contains(H.target) || K(!1), document.removeEventListener("pointermove", ie), R.current = null;
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
    K,
    R
  ]), ee(() => {
    const oe = () => K(!1);
    return window.addEventListener("blur", oe), window.addEventListener("resize", oe), () => {
      window.removeEventListener("blur", oe), window.removeEventListener("resize", oe);
    };
  }, [
    K
  ]);
  const [T, B] = $h((oe) => {
    const ie = z().filter(
      (re) => !re.disabled
    ), pe = ie.find(
      (re) => re.ref.current === document.activeElement
    ), H = _h(ie, oe, pe);
    H && setTimeout(
      () => H.ref.current.focus()
    );
  }), X = ve((oe, ie, pe) => {
    const H = !j.current && !pe;
    (b.value !== void 0 && b.value === ie || H) && (P(oe), H && (j.current = !0));
  }, [
    b.value
  ]), ae = ve(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), ne = ve((oe, ie, pe) => {
    const H = !j.current && !pe;
    (b.value !== void 0 && b.value === ie || H) && W(oe);
  }, [
    b.value
  ]), ge = r === "popper" ? zf : kE, be = ge === zf ? {
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: p,
    collisionPadding: m,
    sticky: v,
    hideWhenDetached: h,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ w(xh, {
    scope: n,
    content: y,
    viewport: $,
    onViewportChange: N,
    itemRefCallback: X,
    selectedItem: S,
    onItemLeave: ae,
    itemTextRefCallback: ne,
    focusSelectedItem: I,
    selectedItemText: Y,
    position: r,
    isPositioned: Z,
    searchRef: T
  }, /* @__PURE__ */ w(Ai, {
    as: cn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(Ni, {
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
  }, /* @__PURE__ */ w(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (oe) => oe.preventDefault(),
    onDismiss: () => b.onOpenChange(!1)
  }, /* @__PURE__ */ w(ge, M({
    role: "listbox",
    id: b.contentId,
    "data-state": b.open ? "open" : "closed",
    dir: b.dir,
    onContextMenu: (oe) => oe.preventDefault()
  }, x, be, {
    onPlaced: () => q(!0),
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
      if (oe.key === "Tab" && oe.preventDefault(), !ie && oe.key.length === 1 && B(oe.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(oe.key)) {
        let H = z().filter(
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
          () => L(H)
        ), oe.preventDefault();
      }
    })
  }))))));
}), kE = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Zr(Eo, n), s = Yi(Eo, n), [i, c] = J(null), [l, u] = J(null), d = Ee(
    t,
    (k) => u(k)
  ), p = td(n), m = G(!1), v = G(!0), { viewport: h, selectedItem: g, selectedItemText: x, focusSelectedItem: b } = s, y = ve(() => {
    if (a.trigger && a.valueNode && i && l && h && g && x) {
      const k = a.trigger.getBoundingClientRect(), S = l.getBoundingClientRect(), P = a.valueNode.getBoundingClientRect(), Y = x.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const re = Y.left - S.left, V = P.left - re, de = k.left - V, he = k.width + de, ye = Math.max(he, S.width), O = window.innerWidth - jn, U = va(V, [
          jn,
          O - ye
        ]);
        i.style.minWidth = he + "px", i.style.left = U + "px";
      } else {
        const re = S.right - Y.right, V = window.innerWidth - P.right - re, de = window.innerWidth - k.right - V, he = k.width + de, ye = Math.max(he, S.width), O = window.innerWidth - jn, U = va(V, [
          jn,
          O - ye
        ]);
        i.style.minWidth = he + "px", i.style.right = U + "px";
      }
      const W = p(), z = window.innerHeight - jn * 2, Z = h.scrollHeight, q = window.getComputedStyle(l), j = parseInt(q.borderTopWidth, 10), L = parseInt(q.paddingTop, 10), I = parseInt(q.borderBottomWidth, 10), K = parseInt(q.paddingBottom, 10), R = j + L + Z + K + I, T = Math.min(g.offsetHeight * 5, R), B = window.getComputedStyle(h), X = parseInt(B.paddingTop, 10), ae = parseInt(B.paddingBottom, 10), ne = k.top + k.height / 2 - jn, ge = z - ne, be = g.offsetHeight / 2, oe = g.offsetTop + be, ie = j + L + oe, pe = R - ie;
      if (ie <= ne) {
        const re = g === W[W.length - 1].ref.current;
        i.style.bottom = "0px";
        const V = l.clientHeight - h.offsetTop - h.offsetHeight, de = Math.max(ge, be + (re ? ae : 0) + V + I), he = ie + de;
        i.style.height = he + "px";
      } else {
        const re = g === W[0].ref.current;
        i.style.top = "0px";
        const de = Math.max(ne, j + h.offsetTop + (re ? X : 0) + be) + pe;
        i.style.height = de + "px", h.scrollTop = ie - ne + h.offsetTop;
      }
      i.style.margin = `${jn}px 0`, i.style.minHeight = T + "px", i.style.maxHeight = z + "px", r == null || r(), requestAnimationFrame(
        () => m.current = !0
      );
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    i,
    l,
    h,
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
  const N = ve((k) => {
    k && v.current === !0 && (y(), b == null || b(), v.current = !1);
  }, [
    y,
    b
  ]);
  return /* @__PURE__ */ w(ME, {
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
  }, /* @__PURE__ */ w(me.div, M({}, o, {
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
}), zf = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = jn, ...a } = e, s = nd(n);
  return /* @__PURE__ */ w(Ua, M({}, s, a, {
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
}), [ME, DE] = Bo(Eo, {}), Bf = "SelectViewport", RE = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Yi(Bf, n), a = DE(Bf, n), s = Ee(t, o.onViewportChange), i = G(0);
  return /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(Hi.Slot, {
    scope: n
  }, /* @__PURE__ */ w(me.div, M({
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
          const m = window.innerHeight - jn * 2, v = parseFloat(u.style.minHeight), h = parseFloat(u.style.height), g = Math.max(v, h);
          if (g < m) {
            const x = g + p, b = Math.min(m, x), y = x - b;
            u.style.height = b + "px", u.style.bottom === "0px" && (l.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), jE = "SelectGroup", [AE, IE] = Bo(jE), LE = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = mt();
  return /* @__PURE__ */ w(AE, {
    scope: n,
    id: o
  }, /* @__PURE__ */ w(me.div, M({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), FE = "SelectLabel", VE = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = IE(FE, n);
  return /* @__PURE__ */ w(me.div, M({
    id: o.id
  }, r, {
    ref: t
  }));
}), Nl = "SelectItem", [WE, yh] = Bo(Nl), UE = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = Zr(Nl, n), c = Yi(Nl, n), l = i.value === r, [u, d] = J(a ?? ""), [p, m] = J(!1), v = Ee(t, (x) => {
    var b;
    return (b = c.itemRefCallback) === null || b === void 0 ? void 0 : b.call(c, x, r, o);
  }), h = mt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ w(WE, {
    scope: n,
    value: r,
    disabled: o,
    textId: h,
    isSelected: l,
    onItemTextChange: ve((x) => {
      d((b) => {
        var y;
        return b || ((y = x == null ? void 0 : x.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ w(Hi.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ w(me.div, M({
    role: "option",
    "aria-labelledby": h,
    "data-highlighted": p ? "" : void 0,
    "aria-selected": l && p,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, s, {
    ref: v,
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
      ((b = c.searchRef) === null || b === void 0 ? void 0 : b.current) !== "" && x.key === " " || (gE.includes(x.key) && g(), x.key === " " && x.preventDefault());
    })
  }))));
}), hs = "SelectItemText", zE = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Zr(hs, n), i = Yi(hs, n), c = yh(hs, n), l = wE(hs, n), [u, d] = J(null), p = Ee(
    t,
    (x) => d(x),
    c.onItemTextChange,
    (x) => {
      var b;
      return (b = i.itemTextRefCallback) === null || b === void 0 ? void 0 : b.call(i, x, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, v = _t(
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
  ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
  return Ct(() => (h(v), () => g(v)), [
    h,
    g,
    v
  ]), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(me.span, M({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Jp(a.children, s.valueNode) : null);
}), BE = "SelectItemIndicator", HE = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return yh(BE, n).isSelected ? /* @__PURE__ */ w(me.span, M({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), YE = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ w(me.div, M({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), wh = /* @__PURE__ */ F((e, t) => {
  const { value: n, ...r } = e, o = G(null), a = Ee(t, o), s = zo(n);
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
  ]), /* @__PURE__ */ w(gh, {
    asChild: !0
  }, /* @__PURE__ */ w("select", M({}, r, {
    ref: a,
    defaultValue: n
  })));
});
wh.displayName = "BubbleSelect";
function $h(e) {
  const t = Ze(e), n = G(""), r = G(0), o = ve((s) => {
    const i = n.current + s;
    t(i), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = ve(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return ee(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function _h(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = KE(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function KE(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const GE = $E, Ch = CE, qE = EE, ZE = NE, XE = PE, Sh = TE, QE = RE, JE = LE, Eh = VE, Nh = UE, eN = zE, tN = HE, Ph = YE, rd = GE, nN = JE, od = qE, Ki = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Ch,
  {
    ref: r,
    className: A(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(ZE, { asChild: !0, children: /* @__PURE__ */ f.exports.jsx(ia, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ki.displayName = Ch.displayName;
const Gi = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.exports.jsx(XE, { children: /* @__PURE__ */ f.exports.jsx(
  Sh,
  {
    ref: o,
    className: A(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ f.exports.jsx(
      QE,
      {
        className: A(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Gi.displayName = Sh.displayName;
const rN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Eh,
  {
    ref: n,
    className: A("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
rN.displayName = Eh.displayName;
const qi = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Nh,
  {
    ref: r,
    className: A(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(tN, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.exports.jsx(eN, { children: t })
    ]
  }
));
qi.displayName = Nh.displayName;
const oN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ph,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
oN.displayName = Ph.displayName;
const Th = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: A(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Th.displayName = "Card";
const aN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: A("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
aN.displayName = "CardHeader";
const sN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "h3",
  {
    ref: n,
    className: A(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
sN.displayName = "CardTitle";
const iN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "p",
  {
    ref: n,
    className: A("text-sm text-muted-foreground", e),
    ...t
  }
));
iN.displayName = "CardDescription";
const cN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: A("p-6 pt-0", e), ...t }));
cN.displayName = "CardContent";
const lN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: A(" flex items-center p-6 pt-0", e),
    ...t
  }
));
lN.displayName = "CardFooter";
const Oh = "Checkbox", [uN, U8] = st(Oh), [dN, fN] = uN(Oh), pN = /* @__PURE__ */ F((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = J(null), m = Ee(
    t,
    (y) => p(y)
  ), v = G(!1), h = d ? Boolean(d.closest("form")) : !0, [g = !1, x] = ft({
    prop: o,
    defaultProp: a,
    onChange: l
  }), b = G(g);
  return ee(() => {
    const y = d == null ? void 0 : d.form;
    if (y) {
      const _ = () => x(b.current);
      return y.addEventListener("reset", _), () => y.removeEventListener("reset", _);
    }
  }, [
    d,
    x
  ]), /* @__PURE__ */ w(dN, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ w(me.button, M({
    type: "button",
    role: "checkbox",
    "aria-checked": Rr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": kh(g),
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
        (_) => Rr(_) ? !0 : !_
      ), h && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
    })
  })), h && /* @__PURE__ */ w(hN, {
    control: d,
    bubbles: !v.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), mN = "CheckboxIndicator", vN = /* @__PURE__ */ F((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = fN(mN, n);
  return /* @__PURE__ */ w(ct, {
    present: r || Rr(a.state) || a.state === !0
  }, /* @__PURE__ */ w(me.span, M({
    "data-state": kh(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), hN = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = G(null), s = zo(n), i = Va(t);
  return ee(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Rr(n), d.call(c, Rr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", M({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Rr(n) ? !1 : n
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
function Rr(e) {
  return e === "indeterminate";
}
function kh(e) {
  return Rr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Mh = pN, gN = vN, Dh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Mh,
  {
    ref: n,
    className: A(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx(
      gN,
      {
        className: A("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" })
      }
    )
  }
));
Dh.displayName = Mh.displayName;
const Rh = "DropdownMenu", [bN, z8] = st(Rh, [
  za
]), It = za(), [xN, jh] = bN(Rh), yN = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = It(t), l = G(null), [u = !1, d] = ft({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ w(xN, {
    scope: t,
    triggerId: mt(),
    triggerRef: l,
    contentId: mt(),
    open: u,
    onOpenChange: d,
    onOpenToggle: ve(
      () => d(
        (p) => !p
      ),
      [
        d
      ]
    ),
    modal: i
  }, /* @__PURE__ */ w(ku, M({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: i
  }), n));
}, wN = "DropdownMenuTrigger", $N = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = jh(wN, n), s = It(n);
  return /* @__PURE__ */ w(Mu, M({
    asChild: !0
  }, s), /* @__PURE__ */ w(me.button, M({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: ja(t, a.triggerRef),
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
}), _N = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = It(t);
  return /* @__PURE__ */ w(Du, M({}, r, n));
}, CN = "DropdownMenuContent", SN = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jh(CN, n), a = It(n), s = G(!1);
  return /* @__PURE__ */ w(Ru, M({
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
}), EN = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(ju, M({}, o, r, {
    ref: t
  }));
}), NN = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Au, M({}, o, r, {
    ref: t
  }));
}), PN = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Iu, M({}, o, r, {
    ref: t
  }));
}), TN = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Lu, M({}, o, r, {
    ref: t
  }));
}), ON = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Fu, M({}, o, r, {
    ref: t
  }));
}), kN = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Vu, M({}, o, r, {
    ref: t
  }));
}), MN = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Wu, M({}, o, r, {
    ref: t
  }));
}), DN = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Uu, M({}, o, r, {
    ref: t
  }));
}), RN = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = It(t), [i = !1, c] = ft({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(zu, M({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, jN = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Bu, M({}, o, r, {
    ref: t
  }));
}), AN = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Hu, M({}, o, r, {
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
}), IN = yN, LN = $N, Ah = _N, Ih = SN, FN = EN, Lh = NN, Fh = PN, Vh = TN, VN = ON, Wh = kN, Uh = MN, zh = DN, WN = RN, Bh = jN, Hh = AN, B8 = IN, H8 = LN, Y8 = FN, K8 = Ah, G8 = WN, q8 = VN, UN = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Bh,
  {
    ref: o,
    className: A(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(xr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
UN.displayName = Bh.displayName;
const zN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Hh,
  {
    ref: n,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
zN.displayName = Hh.displayName;
const BN = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(Ah, { children: /* @__PURE__ */ f.exports.jsx(
  Ih,
  {
    ref: r,
    sideOffset: t,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
BN.displayName = Ih.displayName;
const HN = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Fh,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
HN.displayName = Fh.displayName;
const YN = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Vh,
  {
    ref: o,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Uh, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
YN.displayName = Vh.displayName;
const KN = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Wh,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Uh, { children: /* @__PURE__ */ f.exports.jsx(_i, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
KN.displayName = Wh.displayName;
const GN = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Lh,
  {
    ref: r,
    className: A(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
GN.displayName = Lh.displayName;
const qN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  zh,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
qN.displayName = zh.displayName;
const ZN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: A("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
ZN.displayName = "DropdownMenuShortcut";
const Pl = "horizontal", XN = [
  "horizontal",
  "vertical"
], Yh = /* @__PURE__ */ F((e, t) => {
  const { decorative: n, orientation: r = Pl, ...o } = e, a = Kh(r) ? r : Pl, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ w(me.div, M({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
Yh.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Kh(r) ? new Error(QN(o, n)) : null;
  }
};
function QN(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Pl}\`.`;
}
function Kh(e) {
  return XN.includes(e);
}
const Gh = Yh, Ga = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
    Gh,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: A(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
Ga.displayName = Gh.displayName;
function xo(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function JN(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function qh(...e) {
  return (t) => e.forEach(
    (n) => JN(n, t)
  );
}
function qa(...e) {
  return ve(qh(...e), e);
}
function eP(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ bt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...v } = d, h = (p == null ? void 0 : p[e][c]) || i, g = _t(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ w(h.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, v = Qe(m);
      if (v)
        return v;
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
    tP(o, ...t)
  ];
}
function tP(...e) {
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
const Tl = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ra : () => {
}, nP = C["useId".toString()] || (() => {
});
let rP = 0;
function Ic(e) {
  const [t, n] = C.useState(nP());
  return Tl(() => {
    e || n(
      (r) => r ?? String(rP++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Lr(e) {
  const t = G(e);
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
function oP({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = aP({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Lr(n), c = ve((l) => {
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
function aP({ defaultProp: e, onChange: t }) {
  const n = J(e), [r] = n, o = G(r), a = Lr(t);
  return ee(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const ad = /* @__PURE__ */ F((e, t) => {
  const { children: n, ...r } = e, o = Vt.toArray(n), a = o.find(iP);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Vt.count(s) > 1 ? Vt.only(null) : /* @__PURE__ */ ur(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(Ol, M({}, r, {
      ref: t
    }), /* @__PURE__ */ ur(s) ? /* @__PURE__ */ Mo(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(Ol, M({}, r, {
    ref: t
  }), n);
});
ad.displayName = "Slot";
const Ol = /* @__PURE__ */ F((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ ur(n) ? /* @__PURE__ */ Mo(n, {
    ...cP(r, n.props),
    ref: qh(t, n.ref)
  }) : Vt.count(n) > 1 ? Vt.only(null) : null;
});
Ol.displayName = "SlotClone";
const sP = ({ children: e }) => /* @__PURE__ */ w(qt, null, e);
function iP(e) {
  return /* @__PURE__ */ ur(e) && e.type === sP;
}
function cP(e, t) {
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
const lP = [
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
], Zi = lP.reduce((e, t) => {
  const n = /* @__PURE__ */ F((r, o) => {
    const { asChild: a, ...s } = r, i = a ? ad : t;
    return ee(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, M({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function uP(e, t) {
  e && wi(
    () => e.dispatchEvent(t)
  );
}
function dP(e) {
  const t = Lr(e);
  ee(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const kl = "dismissableLayer.update", fP = "dismissableLayer.pointerDownOutside", pP = "dismissableLayer.focusOutside";
let Hf;
const mP = /* @__PURE__ */ bt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), vP = /* @__PURE__ */ F((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = Qe(mP), [u, d] = J(null), [, p] = J({}), m = qa(
    t,
    (N) => d(N)
  ), v = Array.from(l.layers), [h] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = v.indexOf(h), x = u ? v.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, y = x >= g, _ = hP((N) => {
    const k = N.target, S = [
      ...l.branches
    ].some(
      (P) => P.contains(k)
    );
    !y || S || (o == null || o(N), s == null || s(N), N.defaultPrevented || i == null || i());
  }), $ = gP((N) => {
    const k = N.target;
    [
      ...l.branches
    ].some(
      (P) => P.contains(k)
    ) || (a == null || a(N), s == null || s(N), N.defaultPrevented || i == null || i());
  });
  return dP((N) => {
    x === l.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && i && (N.preventDefault(), i()));
  }), ee(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Hf = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Yf(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Hf);
      };
  }, [
    u,
    n,
    l
  ]), ee(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Yf());
  }, [
    u,
    l
  ]), ee(() => {
    const N = () => p({});
    return document.addEventListener(kl, N), () => document.removeEventListener(kl, N);
  }, []), /* @__PURE__ */ w(Zi.div, M({}, c, {
    ref: m,
    style: {
      pointerEvents: b ? y ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: xo(e.onFocusCapture, $.onFocusCapture),
    onBlurCapture: xo(e.onBlurCapture, $.onBlurCapture),
    onPointerDownCapture: xo(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function hP(e) {
  const t = Lr(e), n = G(!1), r = G(() => {
  });
  return ee(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Zh(fP, t, i, {
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
function gP(e) {
  const t = Lr(e), n = G(!1);
  return ee(() => {
    const r = (o) => {
      o.target && !n.current && Zh(pP, t, {
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
function Yf() {
  const e = new CustomEvent(kl);
  document.dispatchEvent(e);
}
function Zh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? uP(o, a) : o.dispatchEvent(a);
}
const Lc = "focusScope.autoFocusOnMount", Fc = "focusScope.autoFocusOnUnmount", Kf = {
  bubbles: !1,
  cancelable: !0
}, bP = /* @__PURE__ */ F((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = J(null), l = Lr(o), u = Lr(a), d = G(null), p = qa(
    t,
    (h) => c(h)
  ), m = G({
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
      let h = function(x) {
        if (m.paused || !i)
          return;
        const b = x.target;
        i.contains(b) ? d.current = b : Or(d.current, {
          select: !0
        });
      }, g = function(x) {
        m.paused || !i || i.contains(x.relatedTarget) || Or(d.current, {
          select: !0
        });
      };
      return document.addEventListener("focusin", h), document.addEventListener("focusout", g), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g);
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), ee(() => {
    if (i) {
      qf.add(m);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const x = new CustomEvent(Lc, Kf);
        i.addEventListener(Lc, l), i.dispatchEvent(x), x.defaultPrevented || (xP(CP(Xh(i)), {
          select: !0
        }), document.activeElement === h && Or(i));
      }
      return () => {
        i.removeEventListener(Lc, l), setTimeout(() => {
          const x = new CustomEvent(Fc, Kf);
          i.addEventListener(Fc, u), i.dispatchEvent(x), x.defaultPrevented || Or(h ?? document.body, {
            select: !0
          }), i.removeEventListener(Fc, u), qf.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const v = ve((h) => {
    if (!n && !r || m.paused)
      return;
    const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, x = document.activeElement;
    if (g && x) {
      const b = h.currentTarget, [y, _] = yP(b);
      y && _ ? !h.shiftKey && x === _ ? (h.preventDefault(), n && Or(y, {
        select: !0
      })) : h.shiftKey && x === y && (h.preventDefault(), n && Or(_, {
        select: !0
      })) : x === b && h.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ w(Zi.div, M({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: v
  }));
});
function xP(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Or(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function yP(e) {
  const t = Xh(e), n = Gf(t, e), r = Gf(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Xh(e) {
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
function Gf(e, t) {
  for (const n of e)
    if (!wP(n, {
      upTo: t
    }))
      return n;
}
function wP(e, { upTo: t }) {
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
function $P(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Or(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && $P(e) && t && e.select();
  }
}
const qf = _P();
function _P() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Zf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Zf(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Zf(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function CP(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const SP = /* @__PURE__ */ F((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ ou.createPortal(/* @__PURE__ */ w(Zi.div, M({}, o, {
    ref: t
  })), r) : null;
});
function EP(e, t) {
  return yi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Xi = (e) => {
  const { present: t, children: n } = e, r = NP(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Vt.only(n), a = qa(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Mo(o, {
    ref: a
  }) : null;
};
Xi.displayName = "Presence";
function NP(e) {
  const [t, n] = J(), r = G({}), o = G(e), a = G("none"), s = e ? "mounted" : "unmounted", [i, c] = EP(s, {
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
    const l = gs(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), Tl(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = gs(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), Tl(() => {
    if (t) {
      const l = (d) => {
        const m = gs(r.current).includes(d.animationName);
        d.target === t && m && wi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = gs(r.current));
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
    ref: ve((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function gs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Vc = 0;
function PP() {
  ee(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Xf()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Xf()), Vc++, () => {
      Vc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Vc--;
    };
  }, []);
}
function Xf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var ks = "right-scroll-bar-position", Ms = "width-before-scroll-bar", TP = "with-scroll-bars-hidden", OP = "--removed-body-scroll-bar-size";
function kP(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function MP(e, t) {
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
function DP(e, t) {
  return MP(t || null, function(n) {
    return e.forEach(function(r) {
      return kP(r, n);
    });
  });
}
var Qh = ev(), Wc = function() {
}, Qi = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Wc,
    onWheelCapture: Wc,
    onTouchMoveCapture: Wc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, v = e.inert, h = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, b = Jm(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = DP([n, t]), $ = xn(xn({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: Qh, removeScrollBar: l, shards: d, noIsolation: m, inert: v, setCallbacks: a, allowPinchZoom: !!h, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), xn(xn({}, $), { ref: _ })) : C.createElement(x, xn({}, $, { className: c, ref: _ }), i)
  );
});
Qi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Qi.classNames = {
  fullWidth: Ms,
  zeroRight: ks
};
var RP = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Uc = function(e) {
  return parseInt(e || "", 10) || 0;
}, jP = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Uc(n), Uc(r), Uc(o)];
}, AP = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return RP;
  var t = jP(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, IP = ji(), LP = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(TP, ` {
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
  
  .`).concat(ks, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Ms, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ks, " .").concat(ks, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ms, " .").concat(Ms, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(OP, ": ").concat(i, `px;
  }
`);
}, FP = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return AP(o);
  }, [o]);
  return C.createElement(IP, { styles: LP(a, !t, o, n ? "" : "!important") });
}, Ml = !1;
if (typeof window < "u")
  try {
    var bs = Object.defineProperty({}, "passive", {
      get: function() {
        return Ml = !0, !0;
      }
    });
    window.addEventListener("test", bs, bs), window.removeEventListener("test", bs, bs);
  } catch {
    Ml = !1;
  }
var co = Ml ? { passive: !1 } : !1, VP = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, WP = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, Qf = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Jh(e, n);
    if (r) {
      var o = eg(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, UP = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, zP = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Jh = function(e, t) {
  return e === "v" ? VP(t) : WP(t);
}, eg = function(e, t) {
  return e === "v" ? UP(t) : zP(t);
}, BP = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, HP = function(e, t, n, r, o) {
  var a = BP(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = eg(e, i), v = m[0], h = m[1], g = m[2], x = h - g - a * v;
    (v || x) && Jh(e, i) && (d += x, p += v), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, xs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Jf = function(e) {
  return [e.deltaX, e.deltaY];
}, ep = function(e) {
  return e && "current" in e ? e.current : e;
}, YP = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, KP = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, GP = 0, lo = [];
function qP(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(GP++)[0], a = C.useState(function() {
    return ji();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = b2([e.lockRef.current], (e.shards || []).map(ep), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = C.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2)
      return !s.current.allowPinchZoom;
    var x = xs(h), b = n.current, y = "deltaX" in h ? h.deltaX : b[0] - x[0], _ = "deltaY" in h ? h.deltaY : b[1] - x[1], $, N = h.target, k = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && k === "h" && N.type === "range")
      return !1;
    var S = Qf(k, N);
    if (!S)
      return !0;
    if (S ? $ = k : ($ = k === "v" ? "h" : "v", S = Qf(k, N)), !S)
      return !1;
    if (!r.current && "changedTouches" in h && (y || _) && (r.current = $), !$)
      return !0;
    var P = r.current || $;
    return HP(P, g, h, P === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(h) {
    var g = h;
    if (!(!lo.length || lo[lo.length - 1] !== a)) {
      var x = "deltaY" in g ? Jf(g) : xs(g), b = t.current.filter(function($) {
        return $.name === g.type && $.target === g.target && YP($.delta, x);
      })[0];
      if (b && b.should) {
        g.preventDefault();
        return;
      }
      if (!b) {
        var y = (s.current.shards || []).map(ep).filter(Boolean).filter(function($) {
          return $.contains(g.target);
        }), _ = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        _ && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(h, g, x, b) {
    var y = { name: h, delta: g, target: x, should: b };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(h) {
    n.current = xs(h), r.current = void 0;
  }, []), d = C.useCallback(function(h) {
    l(h.type, Jf(h), h.target, i(h, e.lockRef.current));
  }, []), p = C.useCallback(function(h) {
    l(h.type, xs(h), h.target, i(h, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return lo.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, co), document.addEventListener("touchmove", c, co), document.addEventListener("touchstart", u, co), function() {
      lo = lo.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, co), document.removeEventListener("touchmove", c, co), document.removeEventListener("touchstart", u, co);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    v ? C.createElement(a, { styles: KP(o) }) : null,
    m ? C.createElement(FP, { gapMode: "margin" }) : null
  );
}
const ZP = nv(Qh, qP);
var tg = C.forwardRef(function(e, t) {
  return C.createElement(Qi, xn({}, e, { ref: t, sideCar: ZP }));
});
tg.classNames = Qi.classNames;
const XP = tg, ng = "Dialog", [rg, Z8] = eP(ng), [QP, Xr] = rg(ng), JP = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = G(null), c = G(null), [l = !1, u] = oP({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(QP, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: Ic(),
    titleId: Ic(),
    descriptionId: Ic(),
    open: l,
    onOpenChange: u,
    onOpenToggle: ve(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, og = "DialogPortal", [e5, ag] = rg(og, {
  forceMount: void 0
}), t5 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Xr(og, t);
  return /* @__PURE__ */ w(e5, {
    scope: t,
    forceMount: n
  }, Vt.map(
    r,
    (s) => /* @__PURE__ */ w(Xi, {
      present: n || a.open
    }, /* @__PURE__ */ w(SP, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Dl = "DialogOverlay", n5 = /* @__PURE__ */ F((e, t) => {
  const n = ag(Dl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Xr(Dl, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(Xi, {
    present: r || a.open
  }, /* @__PURE__ */ w(r5, M({}, o, {
    ref: t
  }))) : null;
}), r5 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Xr(Dl, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(XP, {
      as: ad,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(Zi.div, M({
      "data-state": ig(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), ha = "DialogContent", o5 = /* @__PURE__ */ F((e, t) => {
  const n = ag(ha, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Xr(ha, e.__scopeDialog);
  return /* @__PURE__ */ w(Xi, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(a5, M({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(s5, M({}, o, {
    ref: t
  })));
}), a5 = /* @__PURE__ */ F((e, t) => {
  const n = Xr(ha, e.__scopeDialog), r = G(null), o = qa(t, n.contentRef, r);
  return ee(() => {
    const a = r.current;
    if (a)
      return Di(a);
  }, []), /* @__PURE__ */ w(sg, M({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: xo(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: xo(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: xo(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), s5 = /* @__PURE__ */ F((e, t) => {
  const n = Xr(ha, e.__scopeDialog), r = G(!1);
  return /* @__PURE__ */ w(sg, M({}, e, {
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
}), sg = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Xr(ha, n), c = G(null), l = qa(t, c);
  return PP(), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(bP, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(vP, M({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": ig(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function ig(e) {
  return e ? "open" : "closed";
}
const i5 = JP, c5 = t5, l5 = n5, u5 = o5;
var tp = 1, d5 = 0.9, f5 = 0.3, zc = 0.1, p5 = 0, Bc = 0.999, m5 = 0.9999, v5 = 0.99, np = /[\\\/\-_+.# \t"@\[\(\{&]/, h5 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Rl(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? tp : v5;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, u, d; i >= 0; )
    l = Rl(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= tp : np.test(e.charAt(i - 1)) ? (l *= d5, d = e.slice(o, i - 1).match(h5), d && o > 0 && (l *= Math.pow(Bc, d.length))) : np.test(e.slice(o, i - 1)) ? (l *= p5, o > 0 && (l *= Math.pow(Bc, i - o))) : (l *= f5, o > 0 && (l *= Math.pow(Bc, i - o))), e.charAt(i) !== t.charAt(a) && (l *= m5)), l < zc && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (u = Rl(e, t, n, r, i + 1, a + 2), u * zc > l && (l = u * zc)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function g5(e, t) {
  return Rl(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var b5 = g5, x5 = '[cmdk-list-sizer=""]', ra = '[cmdk-group=""]', Hc = '[cmdk-group-items=""]', y5 = '[cmdk-group-heading=""]', cg = '[cmdk-item=""]', rp = `${cg}:not([aria-disabled="true"])`, jl = "cmdk-item-select", sr = "data-value", w5 = (e, t) => b5(e, t), lg = C.createContext(void 0), Za = () => C.useContext(lg), ug = C.createContext(void 0), sd = () => C.useContext(ug), dg = C.createContext(void 0), fg = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = uo(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = uo(() => /* @__PURE__ */ new Set()), a = uo(() => /* @__PURE__ */ new Map()), s = uo(() => /* @__PURE__ */ new Map()), i = uo(() => /* @__PURE__ */ new Set()), c = mg(e), { label: l, children: u, value: d, onValueChange: p, filter: m, shouldFilter: v, ...h } = e, g = C.useId(), x = C.useId(), b = C.useId(), y = k5();
  Ho(() => {
    if (d !== void 0) {
      let R = d.trim().toLowerCase();
      r.current.value = R, y(6, Y), _.emit();
    }
  }, [d]);
  let _ = C.useMemo(() => ({ subscribe: (R) => (i.current.add(R), () => i.current.delete(R)), snapshot: () => r.current, setState: (R, T, B) => {
    var X, ae, ne;
    if (!Object.is(r.current[R], T)) {
      if (r.current[R] = T, R === "search")
        P(), k(), y(1, S);
      else if (R === "value")
        if (((X = c.current) == null ? void 0 : X.value) !== void 0) {
          (ne = (ae = c.current).onValueChange) == null || ne.call(ae, T);
          return;
        } else
          B || y(5, Y);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((R) => R());
  } }), []), $ = C.useMemo(() => ({ value: (R, T) => {
    T !== s.current.get(R) && (s.current.set(R, T), r.current.filtered.items.set(R, N(T)), y(2, () => {
      k(), _.emit();
    }));
  }, item: (R, T) => (o.current.add(R), T && (a.current.has(T) ? a.current.get(T).add(R) : a.current.set(T, /* @__PURE__ */ new Set([R]))), y(3, () => {
    P(), k(), r.current.value || S(), _.emit();
  }), () => {
    s.current.delete(R), o.current.delete(R), r.current.filtered.items.delete(R), y(4, () => {
      P(), S(), _.emit();
    });
  }), group: (R) => (a.current.has(R) || a.current.set(R, /* @__PURE__ */ new Set()), () => {
    s.current.delete(R), a.current.delete(R);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: b, labelId: x }), []);
  function N(R) {
    var T;
    let B = ((T = c.current) == null ? void 0 : T.filter) ?? w5;
    return R ? B(R, r.current.search) : 0;
  }
  function k() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let R = r.current.filtered.items, T = [];
    r.current.filtered.groups.forEach((X) => {
      let ae = a.current.get(X), ne = 0;
      ae.forEach((ge) => {
        let be = R.get(ge);
        ne = Math.max(be, ne);
      }), T.push([X, ne]);
    });
    let B = n.current.querySelector(x5);
    z().sort((X, ae) => {
      let ne = X.getAttribute(sr), ge = ae.getAttribute(sr);
      return (R.get(ge) ?? 0) - (R.get(ne) ?? 0);
    }).forEach((X) => {
      let ae = X.closest(Hc);
      ae ? ae.appendChild(X.parentElement === ae ? X : X.closest(`${Hc} > *`)) : B.appendChild(X.parentElement === B ? X : X.closest(`${Hc} > *`));
    }), T.sort((X, ae) => ae[1] - X[1]).forEach((X) => {
      let ae = n.current.querySelector(`${ra}[${sr}="${X[0]}"]`);
      ae == null || ae.parentElement.appendChild(ae);
    });
  }
  function S() {
    let R = z().find((B) => !B.ariaDisabled), T = R == null ? void 0 : R.getAttribute(sr);
    _.setState("value", T || void 0);
  }
  function P() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let R = 0;
    for (let T of o.current) {
      let B = s.current.get(T), X = N(B);
      r.current.filtered.items.set(T, X), X > 0 && R++;
    }
    for (let [T, B] of a.current)
      for (let X of B)
        if (r.current.filtered.items.get(X) > 0) {
          r.current.filtered.groups.add(T);
          break;
        }
    r.current.filtered.count = R;
  }
  function Y() {
    var R, T, B;
    let X = W();
    X && (((R = X.parentElement) == null ? void 0 : R.firstChild) === X && ((B = (T = X.closest(ra)) == null ? void 0 : T.querySelector(y5)) == null || B.scrollIntoView({ block: "nearest" })), X.scrollIntoView({ block: "nearest" }));
  }
  function W() {
    return n.current.querySelector(`${cg}[aria-selected="true"]`);
  }
  function z() {
    return Array.from(n.current.querySelectorAll(rp));
  }
  function Z(R) {
    let T = z()[R];
    T && _.setState("value", T.getAttribute(sr));
  }
  function q(R) {
    var T;
    let B = W(), X = z(), ae = X.findIndex((ge) => ge === B), ne = X[ae + R];
    (T = c.current) != null && T.loop && (ne = ae + R < 0 ? X[X.length - 1] : ae + R === X.length ? X[0] : X[ae + R]), ne && _.setState("value", ne.getAttribute(sr));
  }
  function j(R) {
    let T = W(), B = T == null ? void 0 : T.closest(ra), X;
    for (; B && !X; )
      B = R > 0 ? T5(B, ra) : O5(B, ra), X = B == null ? void 0 : B.querySelector(rp);
    X ? _.setState("value", X.getAttribute(sr)) : q(R);
  }
  let L = () => Z(z().length - 1), I = (R) => {
    R.preventDefault(), R.metaKey ? L() : R.altKey ? j(1) : q(1);
  }, K = (R) => {
    R.preventDefault(), R.metaKey ? Z(0) : R.altKey ? j(-1) : q(-1);
  };
  return C.createElement("div", { ref: Xa([n, t]), ...h, "cmdk-root": "", onKeyDown: (R) => {
    var T;
    if ((T = h.onKeyDown) == null || T.call(h, R), !R.defaultPrevented)
      switch (R.key) {
        case "n":
        case "j": {
          R.ctrlKey && I(R);
          break;
        }
        case "ArrowDown": {
          I(R);
          break;
        }
        case "p":
        case "k": {
          R.ctrlKey && K(R);
          break;
        }
        case "ArrowUp": {
          K(R);
          break;
        }
        case "Home": {
          R.preventDefault(), Z(0);
          break;
        }
        case "End": {
          R.preventDefault(), L();
          break;
        }
        case "Enter": {
          R.preventDefault();
          let B = W();
          if (B) {
            let X = new Event(jl);
            B.dispatchEvent(X);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: $.inputId, id: $.labelId, style: M5 }, l), C.createElement(ug.Provider, { value: _ }, C.createElement(lg.Provider, { value: $ }, u)));
}), $5 = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(dg), a = Za(), s = mg(e);
  Ho(() => a.item(n, o), []);
  let i = vg(n, r, [e.value, e.children, r]), c = sd(), l = No((x) => x.value && x.value === i.current), u = No((x) => a.filter() === !1 ? !0 : x.search ? x.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let x = r.current;
    if (!(!x || e.disabled))
      return x.addEventListener(jl, d), () => x.removeEventListener(jl, d);
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
  let { disabled: m, value: v, onSelect: h, ...g } = e;
  return C.createElement("div", { ref: Xa([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : p, onClick: m ? void 0 : d }, e.children);
}), _5 = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = Za(), u = No((p) => l.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Ho(() => l.group(a), []), vg(a, s, [e.value, e.heading, i]);
  let d = C.createElement(dg.Provider, { value: a }, r);
  return C.createElement("div", { ref: Xa([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, d));
}), C5 = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = No((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: Xa([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), S5 = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = sd(), s = No((c) => c.search), i = Za();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), pg = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = Za();
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
  }, []), C.createElement("div", { ref: Xa([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), E5 = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(i5, { open: n, onOpenChange: r }, C.createElement(c5, { container: o }, C.createElement(l5, { "cmdk-overlay": "" }), C.createElement(u5, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(fg, { ref: t, ...a }))));
}), N5 = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = No((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), P5 = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), Ut = Object.assign(fg, { List: pg, Item: $5, Input: S5, Group: _5, Separator: C5, Dialog: E5, Empty: N5, Loading: P5 });
function T5(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function O5(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function mg(e) {
  let t = C.useRef(e);
  return Ho(() => {
    t.current = e;
  }), t;
}
var Ho = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function uo(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Xa(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function No(e) {
  let t = sd(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function vg(e, t, n) {
  let r = C.useRef(), o = Za();
  return Ho(() => {
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
    o.value(e, s), (a = t.current) == null || a.setAttribute(sr, s), r.current = s;
  }), r;
}
var k5 = () => {
  let [e, t] = C.useState(), n = uo(() => /* @__PURE__ */ new Map());
  return Ho(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, M5 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Hn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut,
  {
    ref: n,
    className: A(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Hn.displayName = Ut.displayName;
const X8 = ({ children: e, ...t }) => /* @__PURE__ */ f.exports.jsx(ch, { ...t, children: /* @__PURE__ */ f.exports.jsx(Qu, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ f.exports.jsx(Hn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), mr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.exports.jsx(Fs, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.exports.jsx(
    Ut.Input,
    {
      ref: n,
      className: A(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
mr.displayName = Ut.Input.displayName;
const Yo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.List,
  {
    ref: n,
    className: A("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Yo.displayName = Ut.List.displayName;
const vr = C.forwardRef((e, t) => /* @__PURE__ */ f.exports.jsx(
  Ut.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
vr.displayName = Ut.Empty.displayName;
const dn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.Group,
  {
    ref: n,
    className: A(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
dn.displayName = Ut.Group.displayName;
const Ji = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.Separator,
  {
    ref: n,
    className: A("-mx-1 h-px bg-border", e),
    ...t
  }
));
Ji.displayName = Ut.Separator.displayName;
const fn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.Item,
  {
    ref: n,
    className: A("cmdk-item relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer", e),
    ...t
  }
));
fn.displayName = Ut.Item.displayName;
const D5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: A(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
D5.displayName = "CommandShortcut";
const R5 = /* @__PURE__ */ F((e, t) => {
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
  }, /* @__PURE__ */ w(me.div, M({}, o, {
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
}), j5 = R5, Q8 = j5;
function A5(e, t) {
  return yi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const hg = "ScrollArea", [gg, J8] = st(hg), [I5, Xt] = gg(hg), L5 = /* @__PURE__ */ F((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = J(null), [l, u] = J(null), [d, p] = J(null), [m, v] = J(null), [h, g] = J(null), [x, b] = J(0), [y, _] = J(0), [$, N] = J(!1), [k, S] = J(!1), P = Ee(
    t,
    (W) => c(W)
  ), Y = Pn(o);
  return /* @__PURE__ */ w(I5, {
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
    onScrollbarXChange: v,
    scrollbarXEnabled: $,
    onScrollbarXEnabledChange: N,
    scrollbarY: h,
    onScrollbarYChange: g,
    scrollbarYEnabled: k,
    onScrollbarYEnabledChange: S,
    onCornerWidthChange: b,
    onCornerHeightChange: _
  }, /* @__PURE__ */ w(me.div, M({
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
}), F5 = "ScrollAreaViewport", V5 = /* @__PURE__ */ F((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = Xt(F5, n), s = G(null), i = Ee(t, s, a.onViewportChange);
  return /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(me.div, M({
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
}), Xn = "ScrollAreaScrollbar", bg = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(Xn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return ee(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ w(W5, M({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ w(U5, M({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ w(xg, M({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ w(id, M({}, r, {
    ref: t
  })) : null;
}), W5 = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(Xn, e.__scopeScrollArea), [a, s] = J(!1);
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
  }, /* @__PURE__ */ w(xg, M({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), U5 = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(Xn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = tc(
    () => c("SCROLL_END"),
    100
  ), [i, c] = A5("hidden", {
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
  }, /* @__PURE__ */ w(id, M({
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
}), xg = /* @__PURE__ */ F((e, t) => {
  const n = Xt(Xn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = J(!1), i = e.orientation === "horizontal", c = tc(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return Po(n.viewport, c), Po(n.content, c), /* @__PURE__ */ w(ct, {
    present: r || a
  }, /* @__PURE__ */ w(id, M({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), id = /* @__PURE__ */ F((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Xt(Xn, e.__scopeScrollArea), a = G(null), s = G(0), [i, c] = J({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = _g(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function d(p, m) {
    return Z5(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ w(z5, M({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = op(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = d(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ w(B5, M({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = op(p, i);
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
}), z5 = /* @__PURE__ */ F((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Xt(Xn, e.__scopeScrollArea), [s, i] = J(), c = G(null), l = Ee(t, c, a.onScrollbarXChange);
  return ee(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(wg, M({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: ec(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), Sg(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: ti(s.paddingLeft),
          paddingEnd: ti(s.paddingRight)
        }
      });
    }
  }));
}), B5 = /* @__PURE__ */ F((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Xt(Xn, e.__scopeScrollArea), [s, i] = J(), c = G(null), l = Ee(t, c, a.onScrollbarYChange);
  return ee(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(wg, M({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: ec(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), Sg(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: ti(s.paddingTop),
          paddingEnd: ti(s.paddingBottom)
        }
      });
    }
  }));
}), [H5, yg] = gg(Xn), wg = /* @__PURE__ */ F((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...p } = e, m = Xt(Xn, n), [v, h] = J(null), g = Ee(
    t,
    (P) => h(P)
  ), x = G(null), b = G(""), y = m.viewport, _ = r.content - r.viewport, $ = Ze(u), N = Ze(c), k = tc(d, 10);
  function S(P) {
    if (x.current) {
      const Y = P.clientX - x.current.left, W = P.clientY - x.current.top;
      l({
        x: Y,
        y: W
      });
    }
  }
  return ee(() => {
    const P = (Y) => {
      const W = Y.target;
      (v == null ? void 0 : v.contains(W)) && $(Y, _);
    };
    return document.addEventListener("wheel", P, {
      passive: !1
    }), () => document.removeEventListener("wheel", P, {
      passive: !1
    });
  }, [
    y,
    v,
    _,
    $
  ]), ee(N, [
    r,
    N
  ]), Po(v, k), Po(m.content, k), /* @__PURE__ */ w(H5, {
    scope: n,
    scrollbar: v,
    hasThumb: o,
    onThumbChange: Ze(a),
    onThumbPointerUp: Ze(s),
    onThumbPositionChange: N,
    onThumbPointerDown: Ze(i)
  }, /* @__PURE__ */ w(me.div, M({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: te(e.onPointerDown, (P) => {
      P.button === 0 && (P.target.setPointerCapture(P.pointerId), x.current = v.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", S(P));
    }),
    onPointerMove: te(e.onPointerMove, S),
    onPointerUp: te(e.onPointerUp, (P) => {
      const Y = P.target;
      Y.hasPointerCapture(P.pointerId) && Y.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = b.current, x.current = null;
    })
  })));
}), Al = "ScrollAreaThumb", Y5 = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = yg(Al, e.__scopeScrollArea);
  return /* @__PURE__ */ w(ct, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ w(K5, M({
    ref: t
  }, r)));
}), K5 = /* @__PURE__ */ F((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = Xt(Al, n), s = yg(Al, n), { onThumbPositionChange: i } = s, c = Ee(
    t,
    (d) => s.onThumbChange(d)
  ), l = G(), u = tc(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return ee(() => {
    const d = a.viewport;
    if (d) {
      const p = () => {
        if (u(), !l.current) {
          const m = X5(d, i);
          l.current = m, i();
        }
      };
      return i(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ w(me.div, M({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: te(e.onPointerDownCapture, (d) => {
      const m = d.target.getBoundingClientRect(), v = d.clientX - m.left, h = d.clientY - m.top;
      s.onThumbPointerDown({
        x: v,
        y: h
      });
    }),
    onPointerUp: te(e.onPointerUp, s.onThumbPointerUp)
  }));
}), $g = "ScrollAreaCorner", G5 = /* @__PURE__ */ F((e, t) => {
  const n = Xt($g, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ w(q5, M({}, e, {
    ref: t
  })) : null;
}), q5 = /* @__PURE__ */ F((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Xt($g, n), [a, s] = J(0), [i, c] = J(0), l = Boolean(a && i);
  return Po(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), Po(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), l ? /* @__PURE__ */ w(me.div, M({}, r, {
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
function ti(e) {
  return e ? parseInt(e, 10) : 0;
}
function _g(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ec(e) {
  const t = _g(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Z5(e, t, n, r = "ltr") {
  const o = ec(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return Cg([
    c,
    l
  ], d)(e);
}
function op(e, t, n = "ltr") {
  const r = ec(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = va(e, c);
  return Cg([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function Cg(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Sg(e, t) {
  return e > 0 && e < t;
}
const X5 = (e, t = () => {
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
function tc(e, t) {
  const n = Ze(e), r = G(0);
  return ee(
    () => () => window.clearTimeout(r.current),
    []
  ), ve(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Po(e, t) {
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
const Eg = L5, Q5 = V5, J5 = G5, eT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Eg,
  {
    ref: r,
    className: A("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx(Q5, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.exports.jsx(Ng, {}),
      /* @__PURE__ */ f.exports.jsx(J5, {})
    ]
  }
));
eT.displayName = Eg.displayName;
const Ng = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  bg,
  {
    ref: r,
    orientation: t,
    className: A(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(Y5, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Ng.displayName = bg.displayName;
const eR = Wi, tR = Ui, nR = qr, tT = zi, Pg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Lo,
  {
    className: A(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Pg.displayName = Lo.displayName;
const nT = Do(
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
), rT = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(tT, { children: [
  /* @__PURE__ */ f.exports.jsx(Pg, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Fo,
    {
      ref: o,
      className: A(nT({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f.exports.jsxs(qr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ f.exports.jsx(Ci, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
rT.displayName = Fo.displayName;
const oT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
oT.displayName = "SheetHeader";
const aT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
aT.displayName = "SheetFooter";
const sT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Vo,
  {
    ref: n,
    className: A("text-lg font-semibold text-foreground", e),
    ...t
  }
));
sT.displayName = Vo.displayName;
const iT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Wo,
  {
    ref: n,
    className: A("text-sm text-muted-foreground", e),
    ...t
  }
));
iT.displayName = Wo.displayName;
const cd = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f.exports.jsx(
  "table",
  {
    ref: n,
    className: A("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
cd.displayName = "TableUI";
const Tg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("thead", { ref: n, className: A("[&_tr]:border-b", e), ...t }));
Tg.displayName = "TableHeader";
const Og = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tbody",
  {
    ref: n,
    className: A("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Og.displayName = "TableBody";
const cT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: A("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
cT.displayName = "TableFooter";
const nc = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tr",
  {
    ref: n,
    className: A(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
nc.displayName = "TableRow";
const kg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "th",
  {
    ref: n,
    className: A(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
kg.displayName = "TableHead";
const ld = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "td",
  {
    ref: n,
    className: A("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
ld.displayName = "TableCell";
const lT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "caption",
  {
    ref: n,
    className: A("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
lT.displayName = "TableCaption";
const uT = "AlertDialog", [dT, rR] = st(uT, [
  rh
]), Qn = rh(), fT = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Qn(t);
  return /* @__PURE__ */ w(Wi, M({}, r, n, {
    modal: !0
  }));
}, pT = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Qn(n);
  return /* @__PURE__ */ w(Ui, M({}, o, r, {
    ref: t
  }));
}), mT = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Qn(t);
  return /* @__PURE__ */ w(zi, M({}, r, n));
}, vT = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Qn(n);
  return /* @__PURE__ */ w(Lo, M({}, o, r, {
    ref: t
  }));
}), Mg = "AlertDialogContent", [hT, gT] = dT(Mg), bT = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Qn(n), s = G(null), i = Ee(t, s), c = G(null);
  return /* @__PURE__ */ w(KS, {
    contentName: Mg,
    titleName: xT,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ w(hT, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ w(Fo, M({
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
  }), /* @__PURE__ */ w(au, null, r), !1)));
}), xT = "AlertDialogTitle", yT = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Qn(n);
  return /* @__PURE__ */ w(Vo, M({}, o, r, {
    ref: t
  }));
}), wT = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Qn(n);
  return /* @__PURE__ */ w(Wo, M({}, o, r, {
    ref: t
  }));
}), $T = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Qn(n);
  return /* @__PURE__ */ w(qr, M({}, o, r, {
    ref: t
  }));
}), _T = "AlertDialogCancel", CT = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = gT(_T, n), a = Qn(n), s = Ee(t, o);
  return /* @__PURE__ */ w(qr, M({}, a, r, {
    ref: s
  }));
}), ST = fT, ET = pT, NT = mT, Dg = vT, Rg = bT, jg = $T, Ag = CT, Ig = yT, Lg = wT, oR = ST, aR = ET, PT = NT, Fg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Dg,
  {
    className: A(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Fg.displayName = Dg.displayName;
const TT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(PT, { children: [
  /* @__PURE__ */ f.exports.jsx(Fg, {}),
  /* @__PURE__ */ f.exports.jsx(
    Rg,
    {
      ref: n,
      className: A(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
TT.displayName = Rg.displayName;
const OT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
OT.displayName = "AlertDialogHeader";
const kT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
kT.displayName = "AlertDialogFooter";
const MT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ig,
  {
    ref: n,
    className: A("text-lg font-semibold", e),
    ...t
  }
));
MT.displayName = Ig.displayName;
const DT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Lg,
  {
    ref: n,
    className: A("text-sm text-muted-foreground", e),
    ...t
  }
));
DT.displayName = Lg.displayName;
const RT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jg,
  {
    ref: n,
    className: A(wo(), e),
    ...t
  }
));
RT.displayName = jg.displayName;
const jT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ag,
  {
    ref: n,
    className: A(
      wo({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
jT.displayName = Ag.displayName;
function Pt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      className: A("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Vg = "Collapsible", [AT, Wg] = st(Vg), [IT, ud] = AT(Vg), LT = /* @__PURE__ */ F((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = ft({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ w(IT, {
    scope: n,
    disabled: a,
    contentId: mt(),
    open: c,
    onOpenToggle: ve(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ w(me.div, M({
    "data-state": dd(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), FT = "CollapsibleTrigger", Ug = /* @__PURE__ */ F((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = ud(FT, n);
  return /* @__PURE__ */ w(me.button, M({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": dd(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: te(e.onClick, o.onOpenToggle)
  }));
}), zg = "CollapsibleContent", Bg = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = ud(zg, e.__scopeCollapsible);
  return /* @__PURE__ */ w(
    ct,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ w(VT, M({}, r, {
      ref: t,
      present: a
    }))
  );
}), VT = /* @__PURE__ */ F((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = ud(zg, n), [i, c] = J(r), l = G(null), u = Ee(t, l), d = G(0), p = d.current, m = G(0), v = m.current, h = s.open || i, g = G(h), x = G();
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
  ]), /* @__PURE__ */ w(me.div, M({
    "data-state": dd(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !h
  }, a, {
    ref: u,
    style: {
      ["--radix-collapsible-content-height"]: p ? `${p}px` : void 0,
      ["--radix-collapsible-content-width"]: v ? `${v}px` : void 0,
      ...e.style
    }
  }), h && o);
});
function dd(e) {
  return e ? "open" : "closed";
}
const Hg = LT, WT = Ug, UT = Bg, Sr = "Accordion", zT = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [fd, BT, HT] = wr(Sr), [rc, sR] = st(Sr, [
  HT,
  Wg
]), pd = Wg(), Yg = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ E.createElement(fd.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ E.createElement(qT, M({}, a, {
    ref: t
  })) : /* @__PURE__ */ E.createElement(GT, M({}, o, {
    ref: t
  })));
});
Yg.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Kg, YT] = rc(Sr), [Gg, KT] = rc(Sr, {
  collapsible: !1
}), GT = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = ft({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ E.createElement(Kg, {
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
  }, /* @__PURE__ */ E.createElement(Gg, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ E.createElement(qg, M({}, s, {
    ref: t
  }))));
}), qT = /* @__PURE__ */ E.forwardRef((e, t) => {
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
  return /* @__PURE__ */ E.createElement(Kg, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ E.createElement(Gg, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ E.createElement(qg, M({}, a, {
    ref: t
  }))));
}), [ZT, oc] = rc(Sr), qg = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = E.useRef(null), c = Ee(i, t), l = BT(n), d = Pn(o) === "ltr", p = te(e.onKeyDown, (m) => {
    var v;
    if (!zT.includes(m.key))
      return;
    const h = m.target, g = l().filter((P) => {
      var Y;
      return !((Y = P.ref.current) !== null && Y !== void 0 && Y.disabled);
    }), x = g.findIndex(
      (P) => P.ref.current === h
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
    (v = g[S].ref.current) === null || v === void 0 || v.focus();
  });
  return /* @__PURE__ */ E.createElement(ZT, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ E.createElement(fd.Slot, {
    scope: n
  }, /* @__PURE__ */ E.createElement(me.div, M({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Il = "AccordionItem", [XT, md] = rc(Il), QT = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = oc(Il, n), s = YT(Il, n), i = pd(n), c = mt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ E.createElement(XT, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ E.createElement(Hg, M({
    "data-orientation": a.orientation,
    "data-state": Zg(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), JT = "AccordionHeader", e6 = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = oc(Sr, n), a = md(JT, n);
  return /* @__PURE__ */ E.createElement(me.h3, M({
    "data-orientation": o.orientation,
    "data-state": Zg(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), ap = "AccordionTrigger", t6 = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = oc(Sr, n), a = md(ap, n), s = KT(ap, n), i = pd(n);
  return /* @__PURE__ */ E.createElement(fd.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ E.createElement(WT, M({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), n6 = "AccordionContent", r6 = /* @__PURE__ */ E.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = oc(Sr, n), a = md(n6, n), s = pd(n);
  return /* @__PURE__ */ E.createElement(UT, M({
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
function Zg(e) {
  return e ? "open" : "closed";
}
const o6 = Yg, a6 = QT, s6 = e6, Xg = t6, Qg = r6, iR = o6, i6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  a6,
  {
    ref: n,
    className: A("border-b", e),
    ...t
  }
));
i6.displayName = "AccordionItem";
const c6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(s6, { className: "flex", children: /* @__PURE__ */ f.exports.jsxs(
  Xg,
  {
    ref: r,
    className: A(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(ia, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
c6.displayName = Xg.displayName;
const l6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Qg,
  {
    ref: r,
    className: A(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
l6.displayName = Qg.displayName;
const cR = Hg, lR = Ug, uR = Bg;
let Yc;
const Jg = "HoverCard", [eb, dR] = st(Jg, [
  Tn
]), vd = Tn(), [u6, hd] = eb(Jg), d6 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = vd(t), l = G(0), u = G(0), d = G(!1), p = G(!1), [m = !1, v] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  }), h = ve(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => v(!0),
      s
    );
  }, [
    s,
    v
  ]), g = ve(() => {
    clearTimeout(l.current), !d.current && !p.current && (u.current = window.setTimeout(
      () => v(!1),
      i
    ));
  }, [
    i,
    v
  ]), x = ve(
    () => v(!1),
    [
      v
    ]
  );
  return ee(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ w(u6, {
    scope: t,
    open: m,
    onOpenChange: v,
    onOpen: h,
    onClose: g,
    onDismiss: x,
    hasSelectionRef: d,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ w(Ao, c, n));
}, f6 = "HoverCardTrigger", p6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = hd(f6, n), a = vd(n);
  return /* @__PURE__ */ w(Wa, M({
    asChild: !0
  }, a), /* @__PURE__ */ w(me.a, M({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: te(e.onPointerEnter, ni(o.onOpen)),
    onPointerLeave: te(e.onPointerLeave, ni(o.onClose)),
    onFocus: te(e.onFocus, o.onOpen),
    onBlur: te(e.onBlur, o.onClose),
    onTouchStart: te(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), m6 = "HoverCardPortal", [fR, v6] = eb(m6, {
  forceMount: void 0
}), Ll = "HoverCardContent", h6 = /* @__PURE__ */ F((e, t) => {
  const n = v6(Ll, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = hd(Ll, e.__scopeHoverCard);
  return /* @__PURE__ */ w(ct, {
    present: r || a.open
  }, /* @__PURE__ */ w(g6, M({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: te(e.onPointerEnter, ni(a.onOpen)),
    onPointerLeave: te(e.onPointerLeave, ni(a.onClose)),
    ref: t
  })));
}), g6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = hd(Ll, n), l = vd(n), u = G(null), d = Ee(t, u), [p, m] = J(!1);
  return ee(() => {
    if (p) {
      const v = document.body;
      return Yc = v.style.userSelect || v.style.webkitUserSelect, v.style.userSelect = "none", v.style.webkitUserSelect = "none", () => {
        v.style.userSelect = Yc, v.style.webkitUserSelect = Yc;
      };
    }
  }, [
    p
  ]), ee(() => {
    if (u.current) {
      const v = () => {
        m(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var h;
          ((h = document.getSelection()) === null || h === void 0 ? void 0 : h.toString()) !== "" && (c.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", v), () => {
        document.removeEventListener("pointerup", v), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [
    c.isPointerDownOnContentRef,
    c.hasSelectionRef
  ]), ee(() => {
    u.current && b6(u.current).forEach(
      (h) => h.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ w(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: te(a, (v) => {
      v.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ w(Ua, M({}, l, i, {
    onPointerDown: te(i.onPointerDown, (v) => {
      v.currentTarget.contains(v.target) && m(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
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
function ni(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function b6(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const x6 = d6, y6 = p6, tb = h6, pR = x6, mR = y6, w6 = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  tb,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: A(
      "z-50 w-64 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
w6.displayName = tb.displayName;
const vR = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), gd = "Menubar", [Fl, $6, _6] = wr(gd), [nb, hR] = st(gd, [
  _6,
  $r
]), Lt = za(), rb = $r(), [C6, bd] = nb(gd), S6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = Pn(i), u = rb(n), [d = "", p] = ft({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, v] = J(null);
  return /* @__PURE__ */ w(C6, {
    scope: n,
    value: d,
    onMenuOpen: ve((h) => {
      p(h), v(h);
    }, [
      p
    ]),
    onMenuClose: ve(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: ve((h) => {
      p(
        (g) => Boolean(g) ? "" : h
      ), v(h);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ w(Fl.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Fl.Slot, {
    scope: n
  }, /* @__PURE__ */ w(ki, M({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: m,
    onCurrentTabStopIdChange: v
  }), /* @__PURE__ */ w(me.div, M({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), ob = "MenubarMenu", [E6, ab] = nb(ob), N6 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = mt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = bd(ob, t), i = Lt(t), c = G(null), l = G(!1), u = s.value === a;
  return ee(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ w(E6, {
    scope: t,
    value: a,
    triggerId: mt(),
    triggerRef: c,
    contentId: mt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ w(ku, M({}, i, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, sp = "MenubarTrigger", P6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = rb(n), s = Lt(n), i = bd(sp, n), c = ab(sp, n), l = G(null), u = Ee(t, l, c.triggerRef), [d, p] = J(!1), m = i.value === c.value;
  return /* @__PURE__ */ w(Fl.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ w(Mi, M({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ w(Mu, M({
    asChild: !0
  }, s), /* @__PURE__ */ w(me.button, M({
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
    onPointerDown: te(e.onPointerDown, (v) => {
      !r && v.button === 0 && v.ctrlKey === !1 && (i.onMenuOpen(c.value), m || v.preventDefault());
    }),
    onPointerEnter: te(e.onPointerEnter, () => {
      if (Boolean(i.value) && !m) {
        var h;
        i.onMenuOpen(c.value), (h = l.current) === null || h === void 0 || h.focus();
      }
    }),
    onKeyDown: te(e.onKeyDown, (v) => {
      r || ([
        "Enter",
        " "
      ].includes(v.key) && i.onMenuToggle(c.value), v.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(v.key) && (c.wasKeyboardTriggerOpenRef.current = !0, v.preventDefault()));
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
}), T6 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Lt(t);
  return /* @__PURE__ */ w(Du, M({}, r, n));
}, ip = "MenubarContent", O6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Lt(n), s = bd(ip, n), i = ab(ip, n), c = $6(n), l = G(!1);
  return /* @__PURE__ */ w(Ru, M({
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
        var v;
        return (v = m.ref.current) === null || v === void 0 ? void 0 : v.contains(d);
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
        const d = u.target, p = d.hasAttribute("data-radix-menubar-subtrigger"), m = d.closest("[data-radix-menubar-content]") !== u.currentTarget, h = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!h && p || m && h)
          return;
        let b = c().filter(
          ($) => !$.disabled
        ).map(
          ($) => $.value
        );
        h && b.reverse();
        const y = b.indexOf(i.value);
        b = s.loop ? U6(b, y + 1) : b.slice(y + 1);
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
}), k6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(ju, M({}, o, r, {
    ref: t
  }));
}), M6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Au, M({}, o, r, {
    ref: t
  }));
}), D6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Iu, M({}, o, r, {
    ref: t
  }));
}), R6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Lu, M({}, o, r, {
    ref: t
  }));
}), j6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Fu, M({}, o, r, {
    ref: t
  }));
}), A6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Vu, M({}, o, r, {
    ref: t
  }));
}), I6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Wu, M({}, o, r, {
    ref: t
  }));
}), L6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Uu, M({}, o, r, {
    ref: t
  }));
}), F6 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Lt(t), [i = !1, c] = ft({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(zu, M({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, V6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Bu, M({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), W6 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(Hu, M({}, o, {
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
function U6(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const sb = S6, z6 = N6, ib = P6, cb = T6, lb = O6, B6 = k6, ub = M6, db = D6, fb = R6, H6 = j6, pb = A6, mb = I6, vb = L6, Y6 = F6, hb = V6, gb = W6, gR = z6, bR = B6, xR = cb, yR = Y6, wR = H6, K6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  sb,
  {
    ref: n,
    className: A(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
K6.displayName = sb.displayName;
const G6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ib,
  {
    ref: n,
    className: A(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
G6.displayName = ib.displayName;
const q6 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  hb,
  {
    ref: o,
    className: A(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(xr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
q6.displayName = hb.displayName;
const Z6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  gb,
  {
    ref: n,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Z6.displayName = gb.displayName;
const X6 = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.exports.jsx(cb, { children: /* @__PURE__ */ f.exports.jsx(
    lb,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: A(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
X6.displayName = lb.displayName;
const Q6 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  db,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Q6.displayName = db.displayName;
const J6 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  fb,
  {
    ref: o,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(mb, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
J6.displayName = fb.displayName;
const eO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  pb,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(mb, { children: /* @__PURE__ */ f.exports.jsx(_i, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
eO.displayName = pb.displayName;
const tO = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ub,
  {
    ref: r,
    className: A(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
tO.displayName = ub.displayName;
const nO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vb,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
nO.displayName = vb.displayName;
const rO = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: A(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
rO.displayname = "MenubarShortcut";
const Qa = "NavigationMenu", [xd, bb, oO] = wr(Qa), [Vl, aO, sO] = wr(Qa), [yd, $R] = st(Qa, [
  oO,
  sO
]), [iO, vn] = yd(Qa), [cO, lO] = yd(Qa), uO = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, p] = J(null), m = Ee(
    t,
    (P) => p(P)
  ), v = Pn(l), h = G(0), g = G(0), x = G(0), [b, y] = J(!0), [_ = "", $] = ft({
    prop: r,
    onChange: (P) => {
      const Y = P !== "", W = i > 0;
      Y ? (window.clearTimeout(x.current), W && y(!1)) : (window.clearTimeout(x.current), x.current = window.setTimeout(
        () => y(!0),
        i
      )), o == null || o(P);
    },
    defaultProp: a
  }), N = ve(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => $(""),
      150
    );
  }, [
    $
  ]), k = ve((P) => {
    window.clearTimeout(g.current), $(P);
  }, [
    $
  ]), S = ve((P) => {
    _ === P ? window.clearTimeout(g.current) : h.current = window.setTimeout(() => {
      window.clearTimeout(g.current), $(P);
    }, s);
  }, [
    _,
    $,
    s
  ]);
  return ee(() => () => {
    window.clearTimeout(h.current), window.clearTimeout(g.current), window.clearTimeout(x.current);
  }, []), /* @__PURE__ */ w(dO, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: v,
    orientation: c,
    rootNavigationMenu: d,
    onTriggerEnter: (P) => {
      window.clearTimeout(h.current), b ? S(P) : k(P);
    },
    onTriggerLeave: () => {
      window.clearTimeout(h.current), N();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: N,
    onItemSelect: (P) => {
      $(
        (Y) => Y === P ? "" : P
      );
    },
    onItemDismiss: () => $("")
  }, /* @__PURE__ */ w(me.nav, M({
    "aria-label": "Main",
    "data-orientation": c,
    dir: v
  }, u, {
    ref: m
  })));
}), dO = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: p, onContentLeave: m } = e, [v, h] = J(null), [g, x] = J(/* @__PURE__ */ new Map()), [b, y] = J(null);
  return /* @__PURE__ */ w(iO, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: zo(i),
    baseId: mt(),
    dir: o,
    orientation: a,
    viewport: v,
    onViewportChange: h,
    indicatorTrack: b,
    onIndicatorTrackChange: y,
    onTriggerEnter: Ze(u),
    onTriggerLeave: Ze(d),
    onContentEnter: Ze(p),
    onContentLeave: Ze(m),
    onItemSelect: Ze(c),
    onItemDismiss: Ze(l),
    onViewportContentChange: ve((_, $) => {
      x((N) => (N.set(_, $), new Map(N)));
    }, []),
    onViewportContentRemove: ve((_) => {
      x(($) => $.has(_) ? ($.delete(_), new Map($)) : $);
    }, [])
  }, /* @__PURE__ */ w(xd.Provider, {
    scope: t
  }, /* @__PURE__ */ w(cO, {
    scope: t,
    items: g
  }, s)));
}, fO = "NavigationMenuList", pO = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = vn(fO, n), a = /* @__PURE__ */ w(me.ul, M({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ w(me.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ w(xd.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ w(_b, {
    asChild: !0
  }, a) : a));
}), mO = "NavigationMenuItem", [vO, xb] = yd(mO), hO = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = mt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = G(null), c = G(null), l = G(null), u = G(() => {
  }), d = G(!1), p = ve((v = "start") => {
    if (i.current) {
      u.current();
      const h = Wl(i.current);
      h.length && wd(v === "start" ? h : h.reverse());
    }
  }, []), m = ve(() => {
    if (i.current) {
      const v = Wl(i.current);
      v.length && (u.current = NO(v));
    }
  }, []);
  return /* @__PURE__ */ w(vO, {
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
  }, /* @__PURE__ */ w(me.li, M({}, o, {
    ref: t
  })));
}), cp = "NavigationMenuTrigger", gO = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = vn(cp, e.__scopeNavigationMenu), s = xb(cp, e.__scopeNavigationMenu), i = G(null), c = Ee(i, s.triggerRef, t), l = Sb(a.baseId, s.value), u = Eb(a.baseId, s.value), d = G(!1), p = G(!1), m = s.value === a.value;
  return /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(xd.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ w(Cb, {
    asChild: !0
  }, /* @__PURE__ */ w(me.button, M({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": $d(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: te(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: te(e.onPointerMove, ri(() => {
      r || p.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: te(e.onPointerLeave, ri(() => {
      r || (a.onTriggerLeave(), d.current = !1);
    })),
    onClick: te(e.onClick, () => {
      a.onItemSelect(s.value), p.current = m;
    }),
    onKeyDown: te(e.onKeyDown, (v) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && v.key === g && (s.onEntryKeyDown(), v.preventDefault());
    })
  })))), m && /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(bh, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (v) => {
      const h = s.contentRef.current, g = v.relatedTarget, x = g === i.current, b = h == null ? void 0 : h.contains(g);
      (x || !b) && s.onFocusProxyEnter(x ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ w("span", {
    "aria-owns": u
  })));
}), lp = "navigationMenu.linkSelect", bO = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ w(Cb, {
    asChild: !0
  }, /* @__PURE__ */ w(me.a, M({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: te(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(lp, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        lp,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), zs(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(Ds, {
          bubbles: !0,
          cancelable: !0
        });
        zs(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), yb = "NavigationMenuIndicator", xO = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = vn(yb, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ ou.createPortal(/* @__PURE__ */ w(ct, {
    present: n || a
  }, /* @__PURE__ */ w(yO, M({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), yO = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = vn(yb, n), a = bb(n), [s, i] = J(null), [c, l] = J(null), u = o.orientation === "horizontal", d = Boolean(o.value);
  ee(() => {
    var m;
    const h = (m = a().find(
      (g) => g.value === o.value
    )) === null || m === void 0 ? void 0 : m.ref.current;
    h && i(h);
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
  return Ul(s, p), Ul(o.indicatorTrack, p), c ? /* @__PURE__ */ w(me.div, M({
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
}), ga = "NavigationMenuContent", wO = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = vn(ga, e.__scopeNavigationMenu), a = xb(ga, e.__scopeNavigationMenu), s = Ee(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ w($O, M({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ w(ct, {
    present: n || i
  }, /* @__PURE__ */ w(wb, M({
    "data-state": $d(i)
  }, c, {
    ref: s,
    onPointerEnter: te(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: te(e.onPointerLeave, ri(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), $O = /* @__PURE__ */ F((e, t) => {
  const n = vn(ga, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
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
}), Ds = "navigationMenu.rootContentDismiss", wb = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = vn(ga, n), d = G(null), p = Ee(d, t), m = Sb(u.baseId, r), v = Eb(u.baseId, r), h = bb(n), g = G(null), { onItemDismiss: x } = u;
  ee(() => {
    const y = d.current;
    if (u.isRootMenu && y) {
      const _ = () => {
        var $;
        x(), i(), y.contains(document.activeElement) && (($ = o.current) === null || $ === void 0 || $.focus());
      };
      return y.addEventListener(Ds, _), () => y.removeEventListener(Ds, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    x,
    i
  ]);
  const b = _t(() => {
    const _ = h().map(
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
    h,
    r
  ]);
  return /* @__PURE__ */ w(_b, {
    asChild: !0
  }, /* @__PURE__ */ w(Hr, M({
    id: v,
    "aria-labelledby": m,
    "data-motion": b,
    "data-orientation": u.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var y;
      const _ = new Event(Ds, {
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
      const $ = y.target, N = h().some((S) => {
        var P;
        return (P = S.ref.current) === null || P === void 0 ? void 0 : P.contains($);
      }), k = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains($));
      (N || k || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: te(e.onKeyDown, (y) => {
      const _ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !_) {
        const k = Wl(y.currentTarget), S = document.activeElement, P = k.findIndex(
          (z) => z === S
        ), W = y.shiftKey ? k.slice(0, P).reverse() : k.slice(P + 1, k.length);
        if (wd(W))
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
}), $b = "NavigationMenuViewport", _O = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = vn($b, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ w(ct, {
    present: n || a
  }, /* @__PURE__ */ w(CO, M({}, r, {
    ref: t
  })));
}), CO = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = vn($b, n), s = Ee(t, a.onViewportChange), i = lO(ga, e.__scopeNavigationMenu), [c, l] = J(null), [u, d] = J(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, v = Boolean(a.value), h = v ? a.value : a.previousValue;
  return Ul(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ w(me.div, M({
    "data-state": $d(v),
    "data-orientation": a.orientation
  }, o, {
    ref: s,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !v && a.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: p,
      ["--radix-navigation-menu-viewport-height"]: m,
      ...o.style
    },
    onPointerEnter: te(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: te(e.onPointerLeave, ri(a.onContentLeave))
  }), Array.from(i.items).map(([x, { ref: b, forceMount: y, ..._ }]) => {
    const $ = h === x;
    return /* @__PURE__ */ w(ct, {
      key: x,
      present: y || $
    }, /* @__PURE__ */ w(wb, M({}, _, {
      ref: ja(b, (N) => {
        $ && N && d(N);
      })
    })));
  }));
}), SO = "FocusGroup", _b = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = vn(SO, n);
  return /* @__PURE__ */ w(Vl.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Vl.Slot, {
    scope: n
  }, /* @__PURE__ */ w(me.div, M({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), up = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], EO = "FocusGroupItem", Cb = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = aO(n), a = vn(EO, n);
  return /* @__PURE__ */ w(Vl.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ w(me.button, M({}, r, {
    ref: t,
    onKeyDown: te(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...up
      ].includes(s.key)) {
        let c = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), up.includes(s.key)) {
          const d = c.indexOf(s.currentTarget);
          c = c.slice(d + 1);
        }
        setTimeout(
          () => wd(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Wl(e) {
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
function wd(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function NO(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Ul(e, t) {
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
function $d(e) {
  return e ? "open" : "closed";
}
function Sb(e, t) {
  return `${e}-trigger-${t}`;
}
function Eb(e, t) {
  return `${e}-content-${t}`;
}
function ri(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Nb = uO, Pb = pO, PO = hO, Tb = gO, TO = bO, Ob = xO, kb = wO, Mb = _O, OO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Nb,
  {
    ref: r,
    className: A(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(Db, {})
    ]
  }
));
OO.displayName = Nb.displayName;
const kO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Pb,
  {
    ref: n,
    className: A(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
kO.displayName = Pb.displayName;
const _R = PO, MO = Do(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), DO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Tb,
  {
    ref: r,
    className: A(MO(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.exports.jsx(
        ia,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
DO.displayName = Tb.displayName;
const RO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  kb,
  {
    ref: n,
    className: A(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
RO.displayName = kb.displayName;
const CR = TO, Db = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: A("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.exports.jsx(
  Mb,
  {
    className: A(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Db.displayName = Mb.displayName;
const jO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ob,
  {
    ref: n,
    className: A(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
jO.displayName = Ob.displayName;
const Rb = "Progress", ac = 100, [AO, SR] = st(Rb), [IO, LO] = AO(Rb), jb = /* @__PURE__ */ F((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = WO, ...s } = e, i = zl(o) ? o : ac, c = Ib(r, i) ? r : null, l = oi(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ w(IO, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ w(me.div, M({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": oi(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Ab(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
jb.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !zl(r) ? new Error(UO(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = zl(e.max) ? e.max : ac;
    return r != null && !Ib(r, a) ? new Error(zO(o, n)) : null;
  }
};
const FO = "ProgressIndicator", VO = /* @__PURE__ */ F((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = LO(FO, r);
  return /* @__PURE__ */ w(me.div, M({
    "data-state": Ab(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function WO(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ab(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function oi(e) {
  return typeof e == "number";
}
function zl(e) {
  return oi(e) && !isNaN(e) && e > 0;
}
function Ib(e, t) {
  return oi(e) && !isNaN(e) && e <= t && e >= 0;
}
function UO(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ac}\`.`;
}
function zO(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ac} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Lb = jb, BO = VO, HO = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Lb,
  {
    ref: r,
    className: A(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(
      BO,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
HO.displayName = Lb.displayName;
const Fb = "Radio", [YO, Vb] = st(Fb), [KO, GO] = YO(Fb), qO = /* @__PURE__ */ F((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, d] = J(null), p = Ee(
    t,
    (h) => d(h)
  ), m = G(!1), v = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ w(KO, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ w(me.button, M({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Wb(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: te(e.onClick, (h) => {
      o || c == null || c(), v && (m.current = h.isPropagationStopped(), m.current || h.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(QO, {
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
}), ZO = "RadioIndicator", XO = /* @__PURE__ */ F((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = GO(ZO, n);
  return /* @__PURE__ */ w(ct, {
    present: r || a.checked
  }, /* @__PURE__ */ w(me.span, M({
    "data-state": Wb(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), QO = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = G(null), s = zo(n), i = Va(t);
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
  ]), /* @__PURE__ */ w("input", M({
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
function Wb(e) {
  return e ? "checked" : "unchecked";
}
const JO = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Ub = "RadioGroup", [ek, ER] = st(Ub, [
  $r,
  Vb
]), zb = $r(), Bb = Vb(), [tk, nk] = ek(Ub), rk = /* @__PURE__ */ F((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...p } = e, m = zb(n), v = Pn(l), [h, g] = ft({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ w(tk, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: h,
    onValueChange: g
  }, /* @__PURE__ */ w(ki, M({
    asChild: !0
  }, m, {
    orientation: c,
    dir: v,
    loop: u
  }), /* @__PURE__ */ w(me.div, M({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: v
  }, p, {
    ref: t
  }))));
}), ok = "RadioGroupItem", ak = /* @__PURE__ */ F((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = nk(ok, n), s = a.disabled || r, i = zb(n), c = Bb(n), l = G(null), u = Ee(t, l), d = a.value === o.value, p = G(!1);
  return ee(() => {
    const m = (h) => {
      JO.includes(h.key) && (p.current = !0);
    }, v = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ w(Mi, M({
    asChild: !0
  }, i, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ w(qO, M({
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
}), sk = /* @__PURE__ */ F((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Bb(n);
  return /* @__PURE__ */ w(XO, M({}, o, r, {
    ref: t
  }));
}), Hb = rk, Yb = ak, ik = sk, ck = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Hb,
  {
    className: A("grid gap-2", e),
    ...t,
    ref: n
  }
));
ck.displayName = Hb.displayName;
const lk = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Yb,
  {
    ref: r,
    className: A(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(ik, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(_i, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
lk.displayName = Yb.displayName;
const Kb = [
  "PageUp",
  "PageDown"
], Gb = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], qb = {
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
}, Ja = "Slider", [Bl, uk, dk] = wr(Ja), [Zb, NR] = st(Ja, [
  dk
]), [fk, sc] = Zb(Ja), pk = /* @__PURE__ */ F((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...v } = e, [h, g] = J(null), x = Ee(
    t,
    (q) => g(q)
  ), b = G(/* @__PURE__ */ new Set()), y = G(0), _ = s === "horizontal", $ = h ? Boolean(h.closest("form")) : !0, N = _ ? mk : vk, [k = [], S] = ft({
    prop: u,
    defaultProp: l,
    onChange: (q) => {
      var j;
      (j = [
        ...b.current
      ][y.current]) === null || j === void 0 || j.focus(), d(q);
    }
  }), P = G(k);
  function Y(q) {
    const j = Ck(k, q);
    Z(q, j);
  }
  function W(q) {
    Z(q, y.current);
  }
  function z() {
    const q = P.current[y.current];
    k[y.current] !== q && p(k);
  }
  function Z(q, j, { commit: L } = {
    commit: !1
  }) {
    const I = Pk(a), K = Tk(Math.round((q - r) / a) * a + r, I), R = va(K, [
      r,
      o
    ]);
    S((T = []) => {
      const B = $k(T, R, j);
      if (Nk(B, c * a)) {
        y.current = B.indexOf(R);
        const X = String(B) !== String(T);
        return X && L && p(B), X ? B : T;
      } else
        return T;
    });
  }
  return /* @__PURE__ */ w(fk, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: y,
    thumbs: b.current,
    values: k,
    orientation: s
  }, /* @__PURE__ */ w(Bl.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(Bl.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(N, M({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, v, {
    ref: x,
    onPointerDown: te(v.onPointerDown, () => {
      i || (P.current = k);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : Y,
    onSlideMove: i ? void 0 : W,
    onSlideEnd: i ? void 0 : z,
    onHomeKeyDown: () => !i && Z(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && Z(o, k.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: q, direction: j }) => {
      if (!i) {
        const K = Kb.includes(q.key) || q.shiftKey && Gb.includes(q.key) ? 10 : 1, R = y.current, T = k[R], B = a * K * j;
        Z(T + B, R, {
          commit: !0
        });
      }
    }
  })))), $ && k.map(
    (q, j) => /* @__PURE__ */ w(wk, {
      key: j,
      name: n ? n + (k.length > 1 ? "[]" : "") : void 0,
      value: q
    })
  ));
}), [Xb, Qb] = Zb(Ja, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), mk = /* @__PURE__ */ F((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, p] = J(null), m = Ee(
    t,
    (y) => p(y)
  ), v = G(), h = Pn(o), g = h === "ltr", x = g && !a || !g && a;
  function b(y) {
    const _ = v.current || d.getBoundingClientRect(), $ = [
      0,
      _.width
    ], k = _d($, x ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return v.current = _, k(y - _.left);
  }
  return /* @__PURE__ */ w(Xb, {
    scope: e.__scopeSlider,
    startEdge: x ? "left" : "right",
    endEdge: x ? "right" : "left",
    direction: x ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ w(Jb, M({
    dir: h,
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
      v.current = void 0, c == null || c();
    },
    onStepKeyDown: (y) => {
      const $ = qb[x ? "from-left" : "from-right"].includes(y.key);
      l == null || l({
        event: y,
        direction: $ ? -1 : 1
      });
    }
  })));
}), vk = /* @__PURE__ */ F((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = G(null), d = Ee(t, u), p = G(), m = !o;
  function v(h) {
    const g = p.current || u.current.getBoundingClientRect(), x = [
      0,
      g.height
    ], y = _d(x, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, y(h - g.top);
  }
  return /* @__PURE__ */ w(Xb, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ w(Jb, M({
    "data-orientation": "vertical"
  }, l, {
    ref: d,
    style: {
      ...l.style,
      ["--radix-slider-thumb-transform"]: "translateY(50%)"
    },
    onSlideStart: (h) => {
      const g = v(h.clientY);
      a == null || a(g);
    },
    onSlideMove: (h) => {
      const g = v(h.clientY);
      s == null || s(g);
    },
    onSlideEnd: () => {
      p.current = void 0, i == null || i();
    },
    onStepKeyDown: (h) => {
      const x = qb[m ? "from-bottom" : "from-top"].includes(h.key);
      c == null || c({
        event: h,
        direction: x ? -1 : 1
      });
    }
  })));
}), Jb = /* @__PURE__ */ F((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = sc(Ja, n);
  return /* @__PURE__ */ w(me.span, M({}, l, {
    ref: t,
    onKeyDown: te(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (i(d), d.preventDefault()) : Kb.concat(Gb).includes(d.key) && (c(d), d.preventDefault());
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
}), hk = "SliderTrack", gk = /* @__PURE__ */ F((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = sc(hk, n);
  return /* @__PURE__ */ w(me.span, M({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), dp = "SliderRange", bk = /* @__PURE__ */ F((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = sc(dp, n), a = Qb(dp, n), s = G(null), i = Ee(t, s), c = o.values.length, l = o.values.map(
    (p) => ex(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ w(me.span, M({
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
}), fp = "SliderThumb", xk = /* @__PURE__ */ F((e, t) => {
  const n = uk(e.__scopeSlider), [r, o] = J(null), a = Ee(
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
  return /* @__PURE__ */ w(yk, M({}, e, {
    ref: a,
    index: s
  }));
}), yk = /* @__PURE__ */ F((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = sc(fp, n), s = Qb(fp, n), [i, c] = J(null), l = Ee(
    t,
    (g) => c(g)
  ), u = Va(i), d = a.values[r], p = d === void 0 ? 0 : ex(d, a.min, a.max), m = _k(r, a.values.length), v = u == null ? void 0 : u[s.size], h = v ? Sk(v, p, s.direction) : 0;
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
      [s.startEdge]: `calc(${p}% + ${h}px)`
    }
  }, /* @__PURE__ */ w(Bl.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(me.span, M({
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
}), wk = (e) => {
  const { value: t, ...n } = e, r = G(null), o = zo(t);
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
  ]), /* @__PURE__ */ w("input", M({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function $k(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function ex(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return va(a, [
    0,
    100
  ]);
}
function _k(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function Ck(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function Sk(e, t, n) {
  const r = e / 2, a = _d([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function Ek(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function Nk(e, t) {
  if (t > 0) {
    const n = Ek(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function _d(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Pk(e) {
  return (String(e).split(".")[1] || "").length;
}
function Tk(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const tx = pk, Ok = gk, kk = bk, Mk = xk, Dk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(
  tx,
  {
    ref: n,
    className: A(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(Ok, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.exports.jsx(kk, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.exports.jsx(Mk, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Dk.displayName = tx.displayName;
const nx = "Tabs", [Rk, PR] = st(nx, [
  $r
]), rx = $r(), [jk, Cd] = Rk(nx), Ak = /* @__PURE__ */ F((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = Pn(i), [d, p] = ft({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ w(jk, {
    scope: n,
    baseId: mt(),
    value: d,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ w(me.div, M({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), Ik = "TabsList", Lk = /* @__PURE__ */ F((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Cd(Ik, n), s = rx(n);
  return /* @__PURE__ */ w(ki, M({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ w(me.div, M({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), Fk = "TabsTrigger", Vk = /* @__PURE__ */ F((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Cd(Fk, n), i = rx(n), c = ox(s.baseId, r), l = ax(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ w(Mi, M({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ w(me.button, M({
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
}), Wk = "TabsContent", Uk = /* @__PURE__ */ F((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Cd(Wk, n), c = ox(i.baseId, r), l = ax(i.baseId, r), u = r === i.value, d = G(u);
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
    ({ present: p }) => /* @__PURE__ */ w(me.div, M({
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
function ox(e, t) {
  return `${e}-trigger-${t}`;
}
function ax(e, t) {
  return `${e}-content-${t}`;
}
const zk = Ak, sx = Lk, ix = Vk, cx = Uk, TR = zk, Bk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  sx,
  {
    ref: n,
    className: A(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Bk.displayName = sx.displayName;
const Hk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ix,
  {
    ref: n,
    className: A(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Hk.displayName = ix.displayName;
const Yk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  cx,
  {
    ref: n,
    className: A(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Yk.displayName = cx.displayName;
const Kk = /* @__PURE__ */ F((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = ft({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ w(me.button, M({
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
}), lx = Kk, Gk = Do(
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
), qk = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  lx,
  {
    ref: o,
    className: A(Gk({ variant: t, size: n, className: e })),
    ...r
  }
));
qk.displayName = lx.displayName;
const [ic, OR] = st("Tooltip", [
  Tn
]), Sd = Tn(), Zk = "TooltipProvider", Xk = 700, Hl = "tooltip.open", [Qk, Ed] = ic(Zk), Jk = (e) => {
  const { __scopeTooltip: t, delayDuration: n = Xk, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = J(!0), c = G(!1), l = G(0);
  return ee(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ w(Qk, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: ve(() => {
      window.clearTimeout(l.current), i(!1);
    }, []),
    onClose: ve(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: ve((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, Nd = "Tooltip", [e4, cc] = ic(Nd), t4 = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Ed(Nd, e.__scopeTooltip), l = Sd(t), [u, d] = J(null), p = mt(), m = G(0), v = s ?? c.disableHoverableContent, h = i ?? c.delayDuration, g = G(!1), [x = !1, b] = ft({
    prop: r,
    defaultProp: o,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Hl))) : c.onClose(), a == null || a(k);
    }
  }), y = _t(() => x ? g.current ? "delayed-open" : "instant-open" : "closed", [
    x
  ]), _ = ve(() => {
    window.clearTimeout(m.current), g.current = !1, b(!0);
  }, [
    b
  ]), $ = ve(() => {
    window.clearTimeout(m.current), b(!1);
  }, [
    b
  ]), N = ve(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, b(!0);
    }, h);
  }, [
    h,
    b
  ]);
  return ee(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ w(Ao, l, /* @__PURE__ */ w(e4, {
    scope: t,
    contentId: p,
    open: x,
    stateAttribute: y,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: ve(() => {
      c.isOpenDelayed ? N() : _();
    }, [
      c.isOpenDelayed,
      N,
      _
    ]),
    onTriggerLeave: ve(() => {
      v ? $() : window.clearTimeout(m.current);
    }, [
      $,
      v
    ]),
    onOpen: _,
    onClose: $,
    disableHoverableContent: v
  }, n));
}, pp = "TooltipTrigger", n4 = /* @__PURE__ */ F((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = cc(pp, n), a = Ed(pp, n), s = Sd(n), i = G(null), c = Ee(t, i, o.onTriggerChange), l = G(!1), u = G(!1), d = ve(
    () => l.current = !1,
    []
  );
  return ee(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ w(Wa, M({
    asChild: !0
  }, s), /* @__PURE__ */ w(me.button, M({
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
}), r4 = "TooltipPortal", [kR, o4] = ic(r4, {
  forceMount: void 0
}), ba = "TooltipContent", a4 = /* @__PURE__ */ F((e, t) => {
  const n = o4(ba, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = cc(ba, e.__scopeTooltip);
  return /* @__PURE__ */ w(ct, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ w(ux, M({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ w(s4, M({
    side: o
  }, a, {
    ref: t
  })));
}), s4 = /* @__PURE__ */ F((e, t) => {
  const n = cc(ba, e.__scopeTooltip), r = Ed(ba, e.__scopeTooltip), o = G(null), a = Ee(t, o), [s, i] = J(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, p = ve(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = ve((v, h) => {
    const g = v.currentTarget, x = {
      x: v.clientX,
      y: v.clientY
    }, b = c4(x, g.getBoundingClientRect()), y = l4(x, b), _ = u4(h.getBoundingClientRect()), $ = f4([
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
      const v = (g) => m(g, u), h = (g) => m(g, c);
      return c.addEventListener("pointerleave", v), u.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", v), u.removeEventListener("pointerleave", h);
      };
    }
  }, [
    c,
    u,
    m,
    p
  ]), ee(() => {
    if (s) {
      const v = (h) => {
        const g = h.target, x = {
          x: h.clientX,
          y: h.clientY
        }, b = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !d4(x, s);
        b ? p() : y && (p(), l());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [
    c,
    u,
    s,
    l,
    p
  ]), /* @__PURE__ */ w(ux, M({}, e, {
    ref: a
  }));
}), [i4, MR] = ic(Nd, {
  isInside: !1
}), ux = /* @__PURE__ */ F((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = cc(ba, n), l = Sd(n), { onClose: u } = c;
  return ee(() => (document.addEventListener(Hl, u), () => document.removeEventListener(Hl, u)), [
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
  ]), /* @__PURE__ */ w(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ w(Ua, M({
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
  }), /* @__PURE__ */ w(au, null, r), /* @__PURE__ */ w(i4, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ w(bh, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function c4(e, t) {
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
function l4(e, t, n = 5) {
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
function u4(e) {
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
function d4(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function f4(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), p4(t);
}
function p4(e) {
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
const m4 = Jk, v4 = t4, h4 = n4, dx = a4, Yn = m4, Kn = v4, Gn = h4, Sn = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  dx,
  {
    ref: r,
    sideOffset: t,
    className: A(
      "z-50 overflow-hidden rounded-md border bg-card px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Sn.displayName = dx.displayName;
const fx = "Switch", [g4, DR] = st(fx), [b4, x4] = g4(fx), y4 = /* @__PURE__ */ F((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = J(null), m = Ee(
    t,
    (b) => p(b)
  ), v = G(!1), h = d ? Boolean(d.closest("form")) : !0, [g = !1, x] = ft({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ w(b4, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ w(me.button, M({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": px(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onClick: te(e.onClick, (b) => {
      x(
        (y) => !y
      ), h && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
    })
  })), h && /* @__PURE__ */ w(_4, {
    control: d,
    bubbles: !v.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), w4 = "SwitchThumb", $4 = /* @__PURE__ */ F((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = x4(w4, n);
  return /* @__PURE__ */ w(me.span, M({
    "data-state": px(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), _4 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = G(null), s = zo(n), i = Va(t);
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
  ]), /* @__PURE__ */ w("input", M({
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
function px(e) {
  return e ? "checked" : "unchecked";
}
const mx = y4, C4 = $4, S4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  mx,
  {
    className: A(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.exports.jsx(
      C4,
      {
        className: A(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
S4.displayName = mx.displayName;
const mp = (e) => {
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
}, E4 = (e) => e ? mp(e) : mp;
var vx = { exports: {} }, Kc = {}, Gc = { exports: {} }, qc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function N4() {
  if (vp)
    return qc;
  vp = 1;
  var e = E;
  function t(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(d, p) {
    var m = p(), v = r({ inst: { value: m, getSnapshot: p } }), h = v[0].inst, g = v[1];
    return a(function() {
      h.value = m, h.getSnapshot = p, c(h) && g({ inst: h });
    }, [d, m, p]), o(function() {
      return c(h) && g({ inst: h }), d(function() {
        c(h) && g({ inst: h });
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
  return qc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, qc;
}
var Zc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hp;
function P4() {
  return hp || (hp = 1, process.env.NODE_ENV !== "production" && function() {
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
        var W = function() {
          m(P) && Y({
            inst: P
          });
        };
        return y(W);
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
    function v(y, _, $) {
      return _();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !h, x = g ? v : p, b = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x;
    Zc.useSyncExternalStore = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Zc;
}
var gp;
function hx() {
  return gp || (gp = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = N4() : e.exports = P4();
  }(Gc)), Gc.exports;
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
var bp;
function T4() {
  if (bp)
    return Kc;
  bp = 1;
  var e = E, t = hx();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Kc.useSyncExternalStoreWithSelector = function(l, u, d, p, m) {
    var v = a(null);
    if (v.current === null) {
      var h = { hasValue: !1, value: null };
      v.current = h;
    } else
      h = v.current;
    v = i(function() {
      function x(N) {
        if (!b) {
          if (b = !0, y = N, N = p(N), m !== void 0 && h.hasValue) {
            var k = h.value;
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
    var g = o(l, v[0], v[1]);
    return s(function() {
      h.hasValue = !0, h.value = g;
    }, [g]), c(g), g;
  }, Kc;
}
var Xc = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xp;
function O4() {
  return xp || (xp = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = E, t = hx();
    function n(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
    function l(u, d, p, m, v) {
      var h = a(null), g;
      h.current === null ? (g = {
        hasValue: !1,
        value: null
      }, h.current = g) : g = h.current;
      var x = i(function() {
        var $ = !1, N, k, S = function(z) {
          if (!$) {
            $ = !0, N = z;
            var Z = m(z);
            if (v !== void 0 && g.hasValue) {
              var q = g.value;
              if (v(q, Z))
                return k = q, q;
            }
            return k = Z, Z;
          }
          var j = N, L = k;
          if (r(j, z))
            return L;
          var I = m(z);
          return v !== void 0 && v(L, I) ? L : (N = z, k = I, I);
        }, P = p === void 0 ? null : p, Y = function() {
          return S(d());
        }, W = P === null ? void 0 : function() {
          return S(P());
        };
        return [Y, W];
      }, [d, p, m, v]), b = x[0], y = x[1], _ = o(u, b, y);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Xc.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xc;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = T4() : e.exports = O4();
})(vx);
const k4 = /* @__PURE__ */ P0(vx.exports), { useSyncExternalStoreWithSelector: M4 } = k4;
function D4(e, t = e.getState, n) {
  const r = M4(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return S0(r), r;
}
const yp = (e) => {
  const t = typeof e == "function" ? E4(e) : e, n = (r, o) => D4(t, r, o);
  return Object.assign(n, t), n;
}, R4 = (e) => e ? yp(e) : yp, j4 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ f.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ f.exports.jsxs(mo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ f.exports.jsx(
      Dr,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ f.exports.jsx(vo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(hy, { className: "text-black dark:text-white h-full" }) })
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
var An = { exports: {} }, Qc = { exports: {} }, Ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wp;
function A4() {
  if (wp)
    return Ke;
  wp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
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
                case v:
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
  return Ke.AsyncMode = c, Ke.ConcurrentMode = l, Ke.ContextConsumer = i, Ke.ContextProvider = s, Ke.Element = t, Ke.ForwardRef = u, Ke.Fragment = r, Ke.Lazy = v, Ke.Memo = m, Ke.Portal = n, Ke.Profiler = a, Ke.StrictMode = o, Ke.Suspense = d, Ke.isAsyncMode = function($) {
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
    return y($) === v;
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
    return typeof $ == "string" || typeof $ == "function" || $ === r || $ === l || $ === a || $ === o || $ === d || $ === p || typeof $ == "object" && $ !== null && ($.$$typeof === v || $.$$typeof === m || $.$$typeof === s || $.$$typeof === i || $.$$typeof === u || $.$$typeof === g || $.$$typeof === x || $.$$typeof === b || $.$$typeof === h);
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
var $p;
function I4() {
  return $p || ($p = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function y(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === r || V === l || V === a || V === o || V === d || V === p || typeof V == "object" && V !== null && (V.$$typeof === v || V.$$typeof === m || V.$$typeof === s || V.$$typeof === i || V.$$typeof === u || V.$$typeof === g || V.$$typeof === x || V.$$typeof === b || V.$$typeof === h);
    }
    function _(V) {
      if (typeof V == "object" && V !== null) {
        var de = V.$$typeof;
        switch (de) {
          case t:
            var he = V.type;
            switch (he) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case d:
                return he;
              default:
                var ye = he && he.$$typeof;
                switch (ye) {
                  case i:
                  case u:
                  case v:
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
    var $ = c, N = l, k = i, S = s, P = t, Y = u, W = r, z = v, Z = m, q = n, j = a, L = o, I = d, K = !1;
    function R(V) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(V) || _(V) === c;
    }
    function T(V) {
      return _(V) === l;
    }
    function B(V) {
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
      return _(V) === v;
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
    Ge.AsyncMode = $, Ge.ConcurrentMode = N, Ge.ContextConsumer = k, Ge.ContextProvider = S, Ge.Element = P, Ge.ForwardRef = Y, Ge.Fragment = W, Ge.Lazy = z, Ge.Memo = Z, Ge.Portal = q, Ge.Profiler = j, Ge.StrictMode = L, Ge.Suspense = I, Ge.isAsyncMode = R, Ge.isConcurrentMode = T, Ge.isContextConsumer = B, Ge.isContextProvider = X, Ge.isElement = ae, Ge.isForwardRef = ne, Ge.isFragment = ge, Ge.isLazy = be, Ge.isMemo = oe, Ge.isPortal = ie, Ge.isProfiler = pe, Ge.isStrictMode = H, Ge.isSuspense = re, Ge.isValidElementType = y, Ge.typeOf = _;
  }()), Ge;
}
var _p;
function gx() {
  return _p || (_p = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = A4() : e.exports = I4();
  }(Qc)), Qc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Jc, Cp;
function L4() {
  if (Cp)
    return Jc;
  Cp = 1;
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
  return Jc = o() ? Object.assign : function(a, s) {
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
  }, Jc;
}
var el, Sp;
function Pd() {
  if (Sp)
    return el;
  Sp = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return el = e, el;
}
var tl, Ep;
function bx() {
  return Ep || (Ep = 1, tl = Function.call.bind(Object.prototype.hasOwnProperty)), tl;
}
var nl, Np;
function F4() {
  if (Np)
    return nl;
  Np = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Pd(), n = {}, r = bx();
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
          } catch (v) {
            d = v;
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
  }, nl = o, nl;
}
var rl, Pp;
function V4() {
  if (Pp)
    return rl;
  Pp = 1;
  var e = gx(), t = L4(), n = Pd(), r = bx(), o = F4(), a = function() {
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
  return rl = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(T) {
      var B = T && (l && T[l] || T[u]);
      if (typeof B == "function")
        return B;
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
      shape: z,
      exact: Z
    };
    function v(T, B) {
      return T === B ? T !== 0 || 1 / T === 1 / B : T !== T && B !== B;
    }
    function h(T, B) {
      this.message = T, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function g(T) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, X = 0;
      function ae(ge, be, oe, ie, pe, H, re) {
        if (ie = ie || p, H = H || oe, re !== n) {
          if (c) {
            var V = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw V.name = "Invariant Violation", V;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = ie + ":" + oe;
            !B[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            X < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[de] = !0, X++);
          }
        }
        return be[oe] == null ? ge ? be[oe] === null ? new h("The " + pe + " `" + H + "` is marked as required " + ("in `" + ie + "`, but its value is `null`.")) : new h("The " + pe + " `" + H + "` is marked as required in " + ("`" + ie + "`, but its value is `undefined`.")) : null : T(be, oe, ie, pe, H);
      }
      var ne = ae.bind(null, !1);
      return ne.isRequired = ae.bind(null, !0), ne;
    }
    function x(T) {
      function B(X, ae, ne, ge, be, oe) {
        var ie = X[ae], pe = L(ie);
        if (pe !== T) {
          var H = I(ie);
          return new h(
            "Invalid " + ge + " `" + be + "` of type " + ("`" + H + "` supplied to `" + ne + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return g(B);
    }
    function b() {
      return g(s);
    }
    function y(T) {
      function B(X, ae, ne, ge, be) {
        if (typeof T != "function")
          return new h("Property `" + be + "` of component `" + ne + "` has invalid PropType notation inside arrayOf.");
        var oe = X[ae];
        if (!Array.isArray(oe)) {
          var ie = L(oe);
          return new h("Invalid " + ge + " `" + be + "` of type " + ("`" + ie + "` supplied to `" + ne + "`, expected an array."));
        }
        for (var pe = 0; pe < oe.length; pe++) {
          var H = T(oe, pe, ne, ge, be + "[" + pe + "]", n);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return g(B);
    }
    function _() {
      function T(B, X, ae, ne, ge) {
        var be = B[X];
        if (!i(be)) {
          var oe = L(be);
          return new h("Invalid " + ne + " `" + ge + "` of type " + ("`" + oe + "` supplied to `" + ae + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(T);
    }
    function $() {
      function T(B, X, ae, ne, ge) {
        var be = B[X];
        if (!e.isValidElementType(be)) {
          var oe = L(be);
          return new h("Invalid " + ne + " `" + ge + "` of type " + ("`" + oe + "` supplied to `" + ae + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(T);
    }
    function N(T) {
      function B(X, ae, ne, ge, be) {
        if (!(X[ae] instanceof T)) {
          var oe = T.name || p, ie = R(X[ae]);
          return new h("Invalid " + ge + " `" + be + "` of type " + ("`" + ie + "` supplied to `" + ne + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return g(B);
    }
    function k(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function B(X, ae, ne, ge, be) {
        for (var oe = X[ae], ie = 0; ie < T.length; ie++)
          if (v(oe, T[ie]))
            return null;
        var pe = JSON.stringify(T, function(re, V) {
          var de = I(V);
          return de === "symbol" ? String(V) : V;
        });
        return new h("Invalid " + ge + " `" + be + "` of value `" + String(oe) + "` " + ("supplied to `" + ne + "`, expected one of " + pe + "."));
      }
      return g(B);
    }
    function S(T) {
      function B(X, ae, ne, ge, be) {
        if (typeof T != "function")
          return new h("Property `" + be + "` of component `" + ne + "` has invalid PropType notation inside objectOf.");
        var oe = X[ae], ie = L(oe);
        if (ie !== "object")
          return new h("Invalid " + ge + " `" + be + "` of type " + ("`" + ie + "` supplied to `" + ne + "`, expected an object."));
        for (var pe in oe)
          if (r(oe, pe)) {
            var H = T(oe, pe, ne, ge, be + "." + pe, n);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return g(B);
    }
    function P(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var B = 0; B < T.length; B++) {
        var X = T[B];
        if (typeof X != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(X) + " at index " + B + "."
          ), s;
      }
      function ae(ne, ge, be, oe, ie) {
        for (var pe = [], H = 0; H < T.length; H++) {
          var re = T[H], V = re(ne, ge, be, oe, ie, n);
          if (V == null)
            return null;
          V.data && r(V.data, "expectedType") && pe.push(V.data.expectedType);
        }
        var de = pe.length > 0 ? ", expected one of type [" + pe.join(", ") + "]" : "";
        return new h("Invalid " + oe + " `" + ie + "` supplied to " + ("`" + be + "`" + de + "."));
      }
      return g(ae);
    }
    function Y() {
      function T(B, X, ae, ne, ge) {
        return q(B[X]) ? null : new h("Invalid " + ne + " `" + ge + "` supplied to " + ("`" + ae + "`, expected a ReactNode."));
      }
      return g(T);
    }
    function W(T, B, X, ae, ne) {
      return new h(
        (T || "React class") + ": " + B + " type `" + X + "." + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ne + "`."
      );
    }
    function z(T) {
      function B(X, ae, ne, ge, be) {
        var oe = X[ae], ie = L(oe);
        if (ie !== "object")
          return new h("Invalid " + ge + " `" + be + "` of type `" + ie + "` " + ("supplied to `" + ne + "`, expected `object`."));
        for (var pe in T) {
          var H = T[pe];
          if (typeof H != "function")
            return W(ne, ge, be, pe, I(H));
          var re = H(oe, pe, ne, ge, be + "." + pe, n);
          if (re)
            return re;
        }
        return null;
      }
      return g(B);
    }
    function Z(T) {
      function B(X, ae, ne, ge, be) {
        var oe = X[ae], ie = L(oe);
        if (ie !== "object")
          return new h("Invalid " + ge + " `" + be + "` of type `" + ie + "` " + ("supplied to `" + ne + "`, expected `object`."));
        var pe = t({}, X[ae], T);
        for (var H in pe) {
          var re = T[H];
          if (r(T, H) && typeof re != "function")
            return W(ne, ge, be, H, I(re));
          if (!re)
            return new h(
              "Invalid " + ge + " `" + be + "` key `" + H + "` supplied to `" + ne + "`.\nBad object: " + JSON.stringify(X[ae], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var V = re(oe, H, ne, ge, be + "." + H, n);
          if (V)
            return V;
        }
        return null;
      }
      return g(B);
    }
    function q(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(q);
          if (T === null || i(T))
            return !0;
          var B = d(T);
          if (B) {
            var X = B.call(T), ae;
            if (B !== T.entries) {
              for (; !(ae = X.next()).done; )
                if (!q(ae.value))
                  return !1;
            } else
              for (; !(ae = X.next()).done; ) {
                var ne = ae.value;
                if (ne && !q(ne[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(T, B) {
      return T === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function L(T) {
      var B = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : j(B, T) ? "symbol" : B;
    }
    function I(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var B = L(T);
      if (B === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function K(T) {
      var B = I(T);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function R(T) {
      return !T.constructor || !T.constructor.name ? p : T.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, rl;
}
var ol, Tp;
function W4() {
  if (Tp)
    return ol;
  Tp = 1;
  var e = Pd();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ol = function() {
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
  }, ol;
}
if (process.env.NODE_ENV !== "production") {
  var U4 = gx(), z4 = !0;
  An.exports = V4()(U4.isElement, z4);
} else
  An.exports = W4()();
var B4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, H4 = Object.defineProperty, Y4 = Object.defineProperties, K4 = Object.getOwnPropertyDescriptors, ai = Object.getOwnPropertySymbols, xx = Object.prototype.hasOwnProperty, yx = Object.prototype.propertyIsEnumerable, Op = (e, t, n) => t in e ? H4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kp = (e, t) => {
  for (var n in t || (t = {}))
    xx.call(t, n) && Op(e, n, t[n]);
  if (ai)
    for (var n of ai(t))
      yx.call(t, n) && Op(e, n, t[n]);
  return e;
}, G4 = (e, t) => Y4(e, K4(t)), q4 = (e, t) => {
  var n = {};
  for (var r in e)
    xx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ai)
    for (var r of ai(e))
      t.indexOf(r) < 0 && yx.call(e, r) && (n[r] = e[r]);
  return n;
}, Er = (e, t, n) => {
  const r = F(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = q4(s, ["color", "size", "stroke", "children"]);
      return w(
        "svg",
        kp(G4(kp({
          ref: a
        }, B4), {
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
    color: An.exports.string,
    size: An.exports.oneOfType([An.exports.string, An.exports.number]),
    stroke: An.exports.oneOfType([An.exports.string, An.exports.number])
  }, r.displayName = `${t}`, r;
}, wx = Er(
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
), $x = Er("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), Z4 = Er("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), X4 = Er("click", "IconClick", [
  ["path", { d: "M3 12l3 0", key: "svg-0" }],
  ["path", { d: "M12 3l0 3", key: "svg-1" }],
  ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }],
  ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }],
  ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }],
  ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]
]), _x = Er("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), Cx = Er("photo-star", "IconPhotoStar", [
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
]), Sx = Er("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), Ex = Er("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]);
const Q4 = /* @__PURE__ */ bt(void 0), J4 = { setTheme: (e) => {
}, themes: [] }, e3 = () => {
  var e;
  return (e = Qe(Q4)) !== null && e !== void 0 ? e : J4;
}, t3 = ({ isExpanded: e }) => {
  const [t, n] = J(!1), { theme: r, setTheme: o } = e3();
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
        /* @__PURE__ */ f.exports.jsx(_x, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Ex, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, n3 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(t3, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ f.exports.jsx(my, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(vy, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ f.exports.jsx(im, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), lc = R4((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), RR = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = lc();
  return /* @__PURE__ */ f.exports.jsx(
    "aside",
    {
      tabIndex: -1,
      className: A(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ f.exports.jsx(j4, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ f.exports.jsx(
          n3,
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
}, jR = ({ children: e }) => {
  const { isExpanded: t } = lc();
  return /* @__PURE__ */ f.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ f.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, Nx = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = J(!1), c = G(null), { isExpanded: l } = lc();
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
  }, [e]), o ? /* @__PURE__ */ f.exports.jsx(Yn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && l && /* @__PURE__ */ f.exports.jsxs(Kn, { children: [
          /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Sn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Yn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && l && /* @__PURE__ */ f.exports.jsxs(Kn, { children: [
          /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Sn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Mp = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = J(!1), c = G(null);
  return ee(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        i(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ f.exports.jsx(Yn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(Kn, { children: [
          /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Sn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Yn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(Kn, { children: [
          /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Sn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, r3 = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = J(!1), [i, c] = J(!1), { isExpanded: l } = lc(), u = G(null), d = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return ee(() => {
    const m = () => {
      const v = u.current.querySelector(`#${p}`);
      if (v) {
        const h = v.offsetWidth < v.scrollWidth;
        s(h);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsxs(Yn, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(Kn, { children: [
              /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(Sn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Jd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(ia, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      Mp,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ f.exports.jsxs(Yn, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(Kn, { children: [
              /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(Sn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Jd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(ia, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      Mp,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
}, Jn = bt({
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
function o3() {
  var a;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r, resetPage: o } = Qe(Jn);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((a = e == null ? void 0 : e.labels) == null ? void 0 : a.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        rd,
        {
          value: `${e.limit}`,
          onValueChange: (s) => {
            t(Number(s)), o();
          },
          children: [
            /* @__PURE__ */ f.exports.jsx(Ki, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(od, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Gi, { side: "top", children: [5, 10, 15, 20].map((s) => /* @__PURE__ */ f.exports.jsx(qi, { value: `${s}`, children: s }, s)) })
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
            /* @__PURE__ */ f.exports.jsx($i, { className: "h-4 w-4" })
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
            /* @__PURE__ */ f.exports.jsx(xr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const Px = () => {
  const { columns: e } = Qe(Jn);
  return /* @__PURE__ */ f.exports.jsx(Tg, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ f.exports.jsx(nc, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ f.exports.jsx(kg, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, AR = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, Ko = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), IR = { limit: 10, page: 1 }, Dp = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), LR = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], a3 = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(nc, { children: /* @__PURE__ */ f.exports.jsx(ld, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), s3 = ({
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
          (v) => v.id !== u.id
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
        children: /* @__PURE__ */ f.exports.jsx(X4, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ f.exports.jsx(
      Dh,
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
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((l) => /* @__PURE__ */ f.exports.jsx(nc, { children: t.map((u) => /* @__PURE__ */ f.exports.jsx(ld, { children: c(u, l) }, Dp())) }, Dp())) });
}, Tx = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Qe(Jn), [s, i] = J(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(Og, { className: "bg-card", children: e.length ? /* @__PURE__ */ f.exports.jsx(
    s3,
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
  ) : /* @__PURE__ */ f.exports.jsx(a3, { colSpan: t.length }) });
}, i3 = () => /* @__PURE__ */ f.exports.jsxs(cd, { children: [
  /* @__PURE__ */ f.exports.jsx(Px, {}),
  /* @__PURE__ */ f.exports.jsx(Tx, {})
] }), c3 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), l3 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(c3, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var Rp = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = $e(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, Ox = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? Rp(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return Rp(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, u3 = function(e, t) {
  t.shouldUseNativeValidation && Ox(e, t);
  var n = {};
  for (var r in e) {
    var o = $e(t.fields, r);
    Xe(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, d3 = function(e, t) {
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
      n[s] = Uv(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, kx = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && Ox({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: u3(d3(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
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
var Yl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Yl || (Yl = {}));
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
]), cr = (e) => {
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
]), f3 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
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
const xa = (e, t) => {
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
let Mx = xa;
function p3(e) {
  Mx = e;
}
function si() {
  return Mx;
}
const ii = (e) => {
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
}, m3 = [];
function Ce(e, t) {
  const n = ii({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      si(),
      xa
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
}), Dx = (e) => ({ status: "dirty", value: e }), jt = (e) => ({ status: "valid", value: e }), Kl = (e) => e.status === "aborted", Gl = (e) => e.status === "dirty", ci = (e) => e.status === "valid", li = (e) => typeof Promise < "u" && e instanceof Promise;
var Pe;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Pe || (Pe = {}));
class En {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const jp = (e, t) => {
  if (ci(t))
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
    return cr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: cr(t.data),
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
        parsedType: cr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (li(n))
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
      parsedType: cr(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return jp(o, a);
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
      parsedType: cr(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (li(o) ? o : Promise.resolve(o));
    return jp(r, a);
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
    return Ln.create(this, this._def);
  }
  nullable() {
    return Wr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return an.create(this, this._def);
  }
  promise() {
    return Oo.create(this, this._def);
  }
  or(t) {
    return _a.create([this, t], this._def);
  }
  and(t) {
    return Ca.create(this, t, this._def);
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
    return new Ta({
      ...je(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ke.ZodDefault
    });
  }
  brand() {
    return new jx({
      typeName: ke.ZodBranded,
      type: this,
      ...je(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new pi({
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
const v3 = /^c[^\s-]{8,}$/i, h3 = /^[a-z][a-z0-9]*$/, g3 = /[0-9A-HJKMNP-TV-Z]{26}/, b3 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, x3 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, y3 = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, w3 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, $3 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, _3 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function C3(e, t) {
  return !!((t === "v4" || !t) && w3.test(e) || (t === "v6" || !t) && $3.test(e));
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
        x3.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "email",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        y3.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "emoji",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        b3.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "uuid",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        v3.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "cuid",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        h3.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "cuid2",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        g3.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
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
        }), r.dirty()) : a.kind === "datetime" ? _3(a).test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: ue.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? C3(t.data, a.version) || (o = this._getOrReturnCtx(t, o), Ce(o, {
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
function S3(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class hr extends Ae {
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
      }), o.dirty()) : a.kind === "multipleOf" ? S3(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), Ce(r, {
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
hr.create = (e) => new hr({
  checks: [],
  typeName: ke.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...je(e)
});
class gr extends Ae {
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
    return new gr({
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
    return new gr({
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
gr.create = (e) => {
  var t;
  return new gr({
    checks: [],
    typeName: ke.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...je(e)
  });
};
class ya extends Ae {
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
ya.create = (e) => new ya({
  typeName: ke.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...je(e)
});
class Fr extends Ae {
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
    return new Fr({
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
Fr.create = (e) => new Fr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: ke.ZodDate,
  ...je(e)
});
class ui extends Ae {
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
ui.create = (e) => new ui({
  typeName: ke.ZodSymbol,
  ...je(e)
});
class wa extends Ae {
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
wa.create = (e) => new wa({
  typeName: ke.ZodUndefined,
  ...je(e)
});
class $a extends Ae {
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
$a.create = (e) => new $a({
  typeName: ke.ZodNull,
  ...je(e)
});
class To extends Ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return jt(t.data);
  }
}
To.create = (e) => new To({
  typeName: ke.ZodAny,
  ...je(e)
});
class jr extends Ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return jt(t.data);
  }
}
jr.create = (e) => new jr({
  typeName: ke.ZodUnknown,
  ...je(e)
});
class qn extends Ae {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return Ce(n, {
      code: ue.invalid_type,
      expected: _e.never,
      received: n.parsedType
    }), De;
  }
}
qn.create = (e) => new qn({
  typeName: ke.ZodNever,
  ...je(e)
});
class di extends Ae {
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
di.create = (e) => new di({
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
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new En(n, s, n.path, i)))).then((s) => Tt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new En(n, s, n.path, i)));
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
function fo(e) {
  if (e instanceof ut) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Ln.create(fo(r));
    }
    return new ut({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof an ? new an({
      ...e._def,
      type: fo(e.element)
    }) : e instanceof Ln ? Ln.create(fo(e.unwrap())) : e instanceof Wr ? Wr.create(fo(e.unwrap())) : e instanceof Nn ? Nn.create(e.items.map((t) => fo(t))) : e;
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
    if (!(this._def.catchall instanceof qn && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const u = a[l], d = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new En(o, d, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof qn) {
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
            new En(o, d, o.path, u)
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
    return fo(this);
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
        for (; a instanceof Ln; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Rx(Be.objectKeys(this.shape));
  }
}
ut.create = (e, t) => new ut({
  shape: () => e,
  unknownKeys: "strip",
  catchall: qn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
ut.strictCreate = (e, t) => new ut({
  shape: () => e,
  unknownKeys: "strict",
  catchall: qn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
ut.lazycreate = (e, t) => new ut({
  shape: e,
  unknownKeys: "strip",
  catchall: qn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
class _a extends Ae {
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
_a.create = (e, t) => new _a({
  options: e,
  typeName: ke.ZodUnion,
  ...je(t)
});
const Rs = (e) => e instanceof Ea ? Rs(e.schema) : e instanceof pn ? Rs(e.innerType()) : e instanceof Na ? [e.value] : e instanceof br ? e.options : e instanceof Pa ? Object.keys(e.enum) : e instanceof Ta ? Rs(e._def.innerType) : e instanceof wa ? [void 0] : e instanceof $a ? [null] : null;
class uc extends Ae {
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
      const s = Rs(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new uc({
      typeName: ke.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...je(r)
    });
  }
}
function ql(e, t) {
  const n = cr(e), r = cr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === _e.object && r === _e.object) {
    const o = Be.objectKeys(t), a = Be.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = ql(e[i], t[i]);
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
      const s = e[a], i = t[a], c = ql(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === _e.date && r === _e.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Ca extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (Kl(a) || Kl(s))
        return De;
      const i = ql(a.value, s.value);
      return i.valid ? ((Gl(a) || Gl(s)) && n.dirty(), { status: n.value, value: i.data }) : (Ce(r, {
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
Ca.create = (e, t, n) => new Ca({
  left: e,
  right: t,
  typeName: ke.ZodIntersection,
  ...je(n)
});
class Nn extends Ae {
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
      return c ? c._parse(new En(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => Tt.mergeArray(n, s)) : Tt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Nn({
      ...this._def,
      rest: t
    });
  }
}
Nn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Nn({
    items: e,
    typeName: ke.ZodTuple,
    rest: null,
    ...je(t)
  });
};
class Sa extends Ae {
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
        key: a._parse(new En(r, i, r.path, i)),
        value: s._parse(new En(r, r.data[i], r.path, i))
      });
    return r.common.async ? Tt.mergeObjectAsync(n, o) : Tt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Ae ? new Sa({
      keyType: t,
      valueType: n,
      typeName: ke.ZodRecord,
      ...je(r)
    }) : new Sa({
      keyType: nn.create(),
      valueType: t,
      typeName: ke.ZodRecord,
      ...je(n)
    });
  }
}
class fi extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== _e.map)
      return Ce(r, {
        code: ue.invalid_type,
        expected: _e.map,
        received: r.parsedType
      }), De;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new En(r, i, r.path, [l, "key"])),
      value: a._parse(new En(r, c, r.path, [l, "value"]))
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
fi.create = (e, t, n) => new fi({
  valueType: t,
  keyType: e,
  typeName: ke.ZodMap,
  ...je(n)
});
class Vr extends Ae {
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
    const i = [...r.data.values()].map((c, l) => a._parse(new En(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new Vr({
      ...this._def,
      minSize: { value: t, message: Pe.toString(n) }
    });
  }
  max(t, n) {
    return new Vr({
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
Vr.create = (e, t) => new Vr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ke.ZodSet,
  ...je(t)
});
class yo extends Ae {
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
      return ii({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          si(),
          xa
        ].filter((l) => !!l),
        issueData: {
          code: ue.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return ii({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          si(),
          xa
        ].filter((l) => !!l),
        issueData: {
          code: ue.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof Oo ? jt(async (...i) => {
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
    return new yo({
      ...this._def,
      args: Nn.create(t).rest(jr.create())
    });
  }
  returns(t) {
    return new yo({
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
    return new yo({
      args: t || Nn.create([]).rest(jr.create()),
      returns: n || jr.create(),
      typeName: ke.ZodFunction,
      ...je(r)
    });
  }
}
class Ea extends Ae {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ea.create = (e, t) => new Ea({
  getter: e,
  typeName: ke.ZodLazy,
  ...je(t)
});
class Na extends Ae {
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
Na.create = (e, t) => new Na({
  value: e,
  typeName: ke.ZodLiteral,
  ...je(t)
});
function Rx(e, t) {
  return new br({
    values: e,
    typeName: ke.ZodEnum,
    ...je(t)
  });
}
class br extends Ae {
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
    return br.create(t);
  }
  exclude(t) {
    return br.create(this.options.filter((n) => !t.includes(n)));
  }
}
br.create = Rx;
class Pa extends Ae {
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
Pa.create = (e, t) => new Pa({
  values: e,
  typeName: ke.ZodNativeEnum,
  ...je(t)
});
class Oo extends Ae {
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
Oo.create = (e, t) => new Oo({
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
        if (!ci(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => ci(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
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
class Ln extends Ae {
  _parse(t) {
    return this._getType(t) === _e.undefined ? jt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ln.create = (e, t) => new Ln({
  innerType: e,
  typeName: ke.ZodOptional,
  ...je(t)
});
class Wr extends Ae {
  _parse(t) {
    return this._getType(t) === _e.null ? jt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Wr.create = (e, t) => new Wr({
  innerType: e,
  typeName: ke.ZodNullable,
  ...je(t)
});
class Ta extends Ae {
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
Ta.create = (e, t) => new Ta({
  innerType: e,
  typeName: ke.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...je(t)
});
class pi extends Ae {
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
    return li(o) ? o.then((a) => ({
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
pi.create = (e, t) => new pi({
  innerType: e,
  typeName: ke.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...je(t)
});
class mi extends Ae {
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
mi.create = (e) => new mi({
  typeName: ke.ZodNaN,
  ...je(e)
});
const E3 = Symbol("zod_brand");
class jx extends Ae {
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
        return a.status === "aborted" ? De : a.status === "dirty" ? (n.dirty(), Dx(a.value)) : this._def.out._parseAsync({
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
const Ax = (e, t = {}, n) => e ? To.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : To.create(), N3 = {
  object: ut.lazycreate
};
var ke;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(ke || (ke = {}));
const P3 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Ax((n) => n instanceof e, t), Ix = nn.create, Lx = hr.create, T3 = mi.create, O3 = gr.create, Fx = ya.create, k3 = Fr.create, M3 = ui.create, D3 = wa.create, R3 = $a.create, j3 = To.create, A3 = jr.create, I3 = qn.create, L3 = di.create, F3 = an.create, V3 = ut.create, W3 = ut.strictCreate, U3 = _a.create, z3 = uc.create, B3 = Ca.create, H3 = Nn.create, Y3 = Sa.create, K3 = fi.create, G3 = Vr.create, q3 = yo.create, Z3 = Ea.create, X3 = Na.create, Q3 = br.create, J3 = Pa.create, e7 = Oo.create, Ap = pn.create, t7 = Ln.create, n7 = Wr.create, r7 = pn.createWithPreprocess, o7 = es.create, a7 = () => Ix().optional(), s7 = () => Lx().optional(), i7 = () => Fx().optional(), c7 = {
  string: (e) => nn.create({ ...e, coerce: !0 }),
  number: (e) => hr.create({ ...e, coerce: !0 }),
  boolean: (e) => ya.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => gr.create({ ...e, coerce: !0 }),
  date: (e) => Fr.create({ ...e, coerce: !0 })
}, l7 = De;
var vi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: xa,
  setErrorMap: p3,
  getErrorMap: si,
  makeIssue: ii,
  EMPTY_PATH: m3,
  addIssueToContext: Ce,
  ParseStatus: Tt,
  INVALID: De,
  DIRTY: Dx,
  OK: jt,
  isAborted: Kl,
  isDirty: Gl,
  isValid: ci,
  isAsync: li,
  get util() {
    return Be;
  },
  get objectUtil() {
    return Yl;
  },
  ZodParsedType: _e,
  getParsedType: cr,
  ZodType: Ae,
  ZodString: nn,
  ZodNumber: hr,
  ZodBigInt: gr,
  ZodBoolean: ya,
  ZodDate: Fr,
  ZodSymbol: ui,
  ZodUndefined: wa,
  ZodNull: $a,
  ZodAny: To,
  ZodUnknown: jr,
  ZodNever: qn,
  ZodVoid: di,
  ZodArray: an,
  ZodObject: ut,
  ZodUnion: _a,
  ZodDiscriminatedUnion: uc,
  ZodIntersection: Ca,
  ZodTuple: Nn,
  ZodRecord: Sa,
  ZodMap: fi,
  ZodSet: Vr,
  ZodFunction: yo,
  ZodLazy: Ea,
  ZodLiteral: Na,
  ZodEnum: br,
  ZodNativeEnum: Pa,
  ZodPromise: Oo,
  ZodEffects: pn,
  ZodTransformer: pn,
  ZodOptional: Ln,
  ZodNullable: Wr,
  ZodDefault: Ta,
  ZodCatch: pi,
  ZodNaN: mi,
  BRAND: E3,
  ZodBranded: jx,
  ZodPipeline: es,
  custom: Ax,
  Schema: Ae,
  ZodSchema: Ae,
  late: N3,
  get ZodFirstPartyTypeKind() {
    return ke;
  },
  coerce: c7,
  any: j3,
  array: F3,
  bigint: O3,
  boolean: Fx,
  date: k3,
  discriminatedUnion: z3,
  effect: Ap,
  enum: Q3,
  function: q3,
  instanceof: P3,
  intersection: B3,
  lazy: Z3,
  literal: X3,
  map: K3,
  nan: T3,
  nativeEnum: J3,
  never: I3,
  null: R3,
  nullable: n7,
  number: Lx,
  object: V3,
  oboolean: i7,
  onumber: s7,
  optional: t7,
  ostring: a7,
  pipeline: o7,
  preprocess: r7,
  promise: e7,
  record: Y3,
  set: G3,
  strictObject: W3,
  string: Ix,
  symbol: M3,
  transformer: Ap,
  tuple: H3,
  undefined: D3,
  union: U3,
  unknown: A3,
  void: L3,
  NEVER: l7,
  ZodIssueCode: ue,
  quotelessJson: f3,
  ZodError: on
});
const u7 = () => {
  const { showFilters: e, setShowFilters: t } = Qe(Jn);
  return /* @__PURE__ */ f.exports.jsxs(
    Fe,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(wx, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, d7 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Qe(Jn), [l, u] = J(null), d = G(null), p = (m) => {
    c(m);
  };
  return ee(() => {
    const m = d.current;
    if (!m)
      return;
    const v = new ResizeObserver((h) => {
      const g = h[0].contentRect.width;
      u(g);
    });
    return v.observe(m), () => {
      v.unobserve(m), v.disconnect();
    };
  }, []), /* @__PURE__ */ f.exports.jsxs(zn, { children: [
    /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Fe,
      {
        size: "sm",
        type: "button",
        ref: d,
        variant: "outline",
        className: "py-5 border-dashed border-muted-foreground",
        children: [
          n || /* @__PURE__ */ f.exports.jsx($x, { size: 16, className: "mr-2" }),
          r,
          i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
            /* @__PURE__ */ f.exports.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
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
    /* @__PURE__ */ f.exports.jsx(Cn, { className: "p-0 combox-checkbox-content", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
      /* @__PURE__ */ f.exports.jsx(mr, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Yo, { children: [
        /* @__PURE__ */ f.exports.jsx(vr, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(dn, { children: o.map((m) => /* @__PURE__ */ f.exports.jsx(Yn, { children: /* @__PURE__ */ f.exports.jsxs(Kn, { delayDuration: 150, children: [
          /* @__PURE__ */ f.exports.jsx(Gn, { className: "w-full", children: /* @__PURE__ */ f.exports.jsxs(
            fn,
            {
              onSelect: () => {
                m.selected ? s(e, m.id, !1) : s(e, m.id, !0);
              },
              children: [
                /* @__PURE__ */ f.exports.jsx(
                  "div",
                  {
                    className: A(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      m.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                    ),
                    children: /* @__PURE__ */ f.exports.jsx(ln, { className: A("h-4 w-4") })
                  }
                ),
                m.icon,
                /* @__PURE__ */ f.exports.jsx("span", { className: "truncate", children: m.label })
              ]
            },
            m.value.toString()
          ) }),
          /* @__PURE__ */ f.exports.jsx(Sn, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ f.exports.jsx("p", { children: m.label }) })
        ] }) })) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Ji, {}),
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
}, f7 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = Qe(Jn), l = () => {
    var d;
    const u = [];
    (d = Object.entries(t == null ? void 0 : t.getValues())) == null || d.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : Ko(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ f.exports.jsxs(zn, { children: [
    /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Fe, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ f.exports.jsx(Fs, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
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
    /* @__PURE__ */ f.exports.jsxs(Cn, { className: "w-fit p-4", align: "start", children: [
      /* @__PURE__ */ f.exports.jsxs(On, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ f.exports.jsx(
          Ju,
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
            children: /* @__PURE__ */ f.exports.jsx(Fs, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, p7 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = Qe(Jn), u = e.watch(n.map((p) => p.id)), d = () => {
    var m;
    a();
    const p = [];
    (m = Object.entries(e == null ? void 0 : e.getValues())) == null || m.forEach((v) => {
      v[1] && p.push({
        field: l ? v[0] : Ko(v[0]),
        text: v[1]
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
          f7,
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
      /* @__PURE__ */ f.exports.jsx(u7, {}),
      o && r && r.map((p) => /* @__PURE__ */ f.exports.jsx(
        d7,
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
            /* @__PURE__ */ f.exports.jsx(Ci, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, m7 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = Qe(Jn), l = qv({
    defaultValues: n.reduce((d, p) => (d[p.id] = "", d), {}),
    resolver: kx(
      vi.object(
        n.reduce((d, p) => (d[p.id] = vi.string().optional(), d), {})
      )
    )
  }), u = async (d) => {
    var v;
    console.log({ data: d });
    const p = r(), m = [];
    (v = Object.entries(d)) == null || v.forEach((h) => {
      h[1] && m.push({
        field: c ? h[0] : Ko(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", m), e({ queries: m, filters: p, limit: s, page: a });
  };
  return ee(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Xv, { ...l, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(p7, { form: l, onSubmit: u }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "submit",
        onClick: l.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(iu, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Sx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, v7 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), h7 = () => /* @__PURE__ */ f.exports.jsxs(cd, { children: [
  /* @__PURE__ */ f.exports.jsx(Px, {}),
  /* @__PURE__ */ f.exports.jsx(Tx, {})
] }), g7 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function FR(e) {
  const [t, n] = J([]), [r, o] = J([]), [a, s] = J([]), [i, c] = J(!1), [l, u] = J(e == null ? void 0 : e.error), [d, p] = J(e == null ? void 0 : e.loading), [m, v] = J(), [h, g] = J(
    (e == null ? void 0 : e.pagination) ?? g7
  ), [x, b] = J(
    (e == null ? void 0 : e.columns) || []
  ), y = ve(
    (j) => e.onSubmitTable({ ...j }),
    [e]
  ), _ = ve(
    (j) => {
      var R;
      g(j);
      const L = m.getValues(), I = [];
      (R = Object.entries(L)) == null || R.forEach((T) => {
        T[1] && I.push({
          field: e.isFormatedUpperQueries ? T[0] : Ko(T[0]),
          text: T[1]
        });
      });
      const K = r.map((T) => ({
        id: T.id,
        label: T.label,
        options: T.options.filter((B) => B.selected).map((B) => B.value)
      })).filter((T) => T.options.length > 0);
      y({
        filters: K,
        queries: I,
        limit: j.limit,
        page: j.page
      });
    },
    [r, y, m]
  ), $ = ve(() => {
    _({ ...h, page: h.page + 1 });
  }, [h, _]), N = ve(() => {
    h.page > 1 && _({ ...h, page: h.page - 1 });
  }, [h, _]), k = ve(() => {
    _({ ...h, page: 1 });
  }, [h, _]), S = () => r.map((j) => ({
    id: j.id,
    label: j.label,
    options: j.options.filter((L) => L.selected).map((L) => L.value)
  })).filter((j) => j.options.length > 0), P = (j) => {
    const L = r.find((I) => I.id === j);
    return L ? L.options.filter((K) => K.selected).map((K) => K.value) : [];
  }, Y = (j, L, I) => {
    const K = r.map((R) => R.id === j ? {
      ...R,
      options: R.options.map((T) => T.id === L ? { ...T, selected: I } : T)
    } : R);
    o(K);
  }, W = () => r, z = (j) => {
    const L = r.map((I) => I.id === j ? {
      ...I,
      options: I.options.map((K) => ({
        ...K,
        selected: !1
      }))
    } : I);
    o(L);
  }, Z = (j) => _({ ...h, limit: j }), q = () => {
    const j = r.map((L) => ({
      ...L,
      options: L.options.map((I) => ({ ...I, selected: !1 }))
    }));
    o(j);
  };
  return ee(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), ee(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), ee(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), ee(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), ee(() => b((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), ee(() => {
    const j = x.filter((L) => L.isQuery).map((L) => ({
      id: L.id,
      label: L.label
    }));
    s(j);
  }, [x]), ee(() => {
    const j = (I) => (I == null ? void 0 : I.filters) && (I == null ? void 0 : I.filters.length), L = x.filter(j).map((I) => {
      const K = I.filters.map((T) => ({
        ...T,
        selected: !1
      }));
      return {
        ...I,
        id: I.id,
        options: K
      };
    });
    o(L);
  }, [x]), ee(() => {
    e != null && e.filters && (e == null || e.filters.forEach((j) => {
      j != null && j.filters && x.forEach((L) => {
        j.id === L.id && o((I) => I.some((R) => R.id === j.id) ? I : [
          ...I,
          {
            id: L.id,
            label: L.label,
            options: j.filters
          }
        ]);
      });
    }));
  }, [x, e == null ? void 0 : e.filters]), ee(() => {
    g((j) => {
      var L, I;
      return {
        ...j,
        hasNextPage: (L = e == null ? void 0 : e.pagination) == null ? void 0 : L.hasNextPage,
        hasPrevPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Jn.Provider,
    {
      value: {
        data: t,
        columns: x,
        pagination: h,
        nextPage: $,
        prevPage: N,
        resetPage: k,
        searchForm: m,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: Z,
        showFilters: i,
        resetFilters: q,
        getGlobalFilters: W,
        selectOptionFilter: Y,
        resetOptionsByFilter: z,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: y,
        getFilterOptionsSelectedById: P,
        getFiltersWithOptionsSelected: S,
        setSelectItem: e.setSelectItem,
        setShowFilters: (j) => c(j),
        setSearchForm: (j) => v(j)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(m7, { onSubmitTable: y, loading: d }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          d && /* @__PURE__ */ f.exports.jsx(l3, {}),
          !d && l && /* @__PURE__ */ f.exports.jsx(v7, {}),
          !d && !l && !t && /* @__PURE__ */ f.exports.jsx(h7, {}),
          !d && !l && t && /* @__PURE__ */ f.exports.jsx(i3, {})
        ] }),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(o3, {})
      ] })
    }
  );
}
const VR = ({
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
}) => p ? /* @__PURE__ */ f.exports.jsxs("div", { className: A("w-full", c), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: t && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(Pt, { className: "w-full h-9 mt-2" }) })
] }) : /* @__PURE__ */ f.exports.jsx(
  Kr,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: m, formState: v }) => {
      var h;
      return /* @__PURE__ */ f.exports.jsxs(Cr, { className: A("w-full", c), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ f.exports.jsxs(Gr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((h = v == null ? void 0 : v.errors[e]) == null ? void 0 : h.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            v.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(Io, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs(
          rd,
          {
            onValueChange: (g) => g && m.onChange(g),
            defaultValue: m.value,
            disabled: d,
            value: m == null ? void 0 : m.value,
            children: [
              /* @__PURE__ */ f.exports.jsx(Ka, { children: /* @__PURE__ */ f.exports.jsx(Ki, { disabled: d, tabIndex: i, className: A("w-full", l), children: /* @__PURE__ */ f.exports.jsx(od, { placeholder: r }) }) }),
              /* @__PURE__ */ f.exports.jsx(Gi, { children: /* @__PURE__ */ f.exports.jsxs(nN, { className: A("overflow-auto", u), children: [
                a.length ? null : /* @__PURE__ */ f.exports.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
                a.map((g) => {
                  var x, b;
                  return /* @__PURE__ */ f.exports.jsx(qi, { value: (x = g.value) == null ? void 0 : x.toString(), children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-center items-center", children: [
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
function dc() {
  return (dc = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function Vx(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Zl(e) {
  var t = G(e), n = G(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var Oa = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, sa = function(e) {
  return "touches" in e;
}, Xl = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Ip = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = sa(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: Oa((o.pageX - (r.left + Xl(e).pageXOffset)) / r.width), top: Oa((o.pageY - (r.top + Xl(e).pageYOffset)) / r.height) };
}, Lp = function(e) {
  !sa(e) && e.preventDefault();
}, Wx = E.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = Vx(e, ["onMove", "onKey"]), o = G(null), a = Zl(t), s = Zl(n), i = G(null), c = G(!1), l = _t(function() {
    var m = function(g) {
      Lp(g), (sa(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Ip(o.current, g, i.current)) : h(!1);
    }, v = function() {
      return h(!1);
    };
    function h(g) {
      var x = c.current, b = Xl(o.current), y = g ? b.addEventListener : b.removeEventListener;
      y(x ? "touchmove" : "mousemove", m), y(x ? "touchend" : "mouseup", v);
    }
    return [function(g) {
      var x = g.nativeEvent, b = o.current;
      if (b && (Lp(x), !function(_, $) {
        return $ && !sa(_);
      }(x, c.current) && b)) {
        if (sa(x)) {
          c.current = !0;
          var y = x.changedTouches || [];
          y.length && (i.current = y[0].identifier);
        }
        b.focus(), a(Ip(b, x, i.current)), h(!0);
      }
    }, function(g) {
      var x = g.which || g.keyCode;
      x < 37 || x > 40 || (g.preventDefault(), s({ left: x === 39 ? 0.05 : x === 37 ? -0.05 : 0, top: x === 40 ? 0.05 : x === 38 ? -0.05 : 0 }));
    }, h];
  }, [s, a]), u = l[0], d = l[1], p = l[2];
  return ee(function() {
    return p;
  }, [p]), E.createElement("div", dc({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), Td = function(e) {
  return e.filter(Boolean).join(" ");
}, Ux = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Td(["react-colorful__pointer", e.className]);
  return E.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, E.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, $t = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, b7 = function(e) {
  return _7(Ql(e));
}, Ql = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? $t(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? $t(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, x7 = function(e) {
  return $7(w7(e));
}, y7 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: $t(e.h), s: $t(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: $t(o / 2), a: $t(r, 2) };
}, Jl = function(e) {
  var t = y7(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, w7 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: $t(255 * [r, i, s, s, c, r][l]), g: $t(255 * [c, r, r, i, s, s][l]), b: $t(255 * [s, s, c, r, r, i][l]), a: $t(o, 2) };
}, ys = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, $7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? ys($t(255 * o)) : "";
  return "#" + ys(t) + ys(n) + ys(r) + a;
}, _7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: $t(60 * (i < 0 ? i + 6 : i)), s: $t(a ? s / a * 100 : 0), v: $t(a / 255 * 100), a: o };
}, C7 = E.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Td(["react-colorful__hue", e.className]);
  return E.createElement("div", { className: r }, E.createElement(Wx, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: Oa(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": $t(t), "aria-valuemax": "360", "aria-valuemin": "0" }, E.createElement(Ux, { className: "react-colorful__hue-pointer", left: t / 360, color: Jl({ h: t, s: 100, v: 100, a: 1 }) })));
}), S7 = E.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: Jl({ h: t.h, s: 100, v: 100, a: 1 }) };
  return E.createElement("div", { className: "react-colorful__saturation", style: r }, E.createElement(Wx, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: Oa(t.s + 100 * o.left, 0, 100), v: Oa(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + $t(t.s) + "%, Brightness " + $t(t.v) + "%" }, E.createElement(Ux, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Jl(t) })));
}), zx = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, E7 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || zx(Ql(e), Ql(t));
};
function N7(e, t, n) {
  var r = Zl(n), o = J(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = G({ color: t, hsva: a });
  ee(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), ee(function() {
    var l;
    zx(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = ve(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var P7 = typeof window < "u" ? Ra : ee, T7 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Fp = /* @__PURE__ */ new Map(), O7 = function(e) {
  P7(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Fp.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Fp.set(t, n);
      var r = T7();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, k7 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = Vx(e, ["className", "colorModel", "color", "onChange"]), i = G(null);
  O7(i);
  var c = N7(n, o, a), l = c[0], u = c[1], d = Td(["react-colorful", t]);
  return E.createElement("div", dc({}, s, { ref: i, className: d }), E.createElement(S7, { hsva: l, onChange: u }), E.createElement(C7, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, M7 = { defaultColor: "000", toHsva: b7, fromHsva: function(e) {
  return x7({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: E7 }, D7 = function(e) {
  return E.createElement(k7, dc({}, e, { colorModel: M7 }));
};
const WR = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ f.exports.jsx(D7, { color: e, onChange: t }),
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
function R7(e, t, n) {
  var r = J([]), o = r[0], a = r[1], s = G([]), i = ve(function(d, p) {
    var m = e(d, p), v = m[0], h = m[1];
    return a(function(g) {
      return [].concat(h.reverse(), g);
    }), v;
  }, [e]), c = yi(i, n), l = c[0], u = c[1];
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
function j7(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var fc = {
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
  fc[111 + Dt] = "F" + Dt;
for (Dt = 65; Dt < 91; Dt += 1) {
  var Vp = /* @__PURE__ */ String.fromCharCode(Dt);
  fc[Dt] = [/* @__PURE__ */ Vp.toLowerCase(), /* @__PURE__ */ Vp.toUpperCase()];
}
for (Dt = 96; Dt < 106; Dt += 1)
  fc[Dt] = /* @__PURE__ */ String.fromCharCode(Dt - 48);
function A7(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = fc[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var I7 = {
  getKey: A7
};
function ws() {
}
function Bx(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function L7(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var F7 = ["refs"], al = [], V7 = ["autoFocus", "length", "validate", "format", "debug"], W7 = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], U7 = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], z7 = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: ws,
  onRejectKey: ws,
  onChange: ws,
  onComplete: ws,
  debug: !1
};
function B7(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: H7(e.validate),
    fallback: null
  };
}
function Hx(e) {
  return Math.max(0, e - 1);
}
function eu(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function H7(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Wp(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = eu(o + e.focusIdx - 1, e.codeLength), s = Bx(0, o).flatMap(function(i) {
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
var Y7 = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [en({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), al];
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
          var r = Hx(t.focusIdx);
          return [en({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = eu(t.focusIdx, t.codeLength);
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
          var a = eu(t.focusIdx, t.codeLength);
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
        return [t, al];
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
        return Wp(s, l, d);
      return [s, i];
    }
    case "handle-paste":
      return Wp(t, n.idx, n.val);
    case "focus-input":
      return [en({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, al];
  }
};
function K7(e) {
  var t = e.refs, n = j7(e, F7);
  return ve(function(r) {
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
          var s = Hx(r.idx);
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
var G7 = /* @__PURE__ */ F(function(e, t) {
  var n = en({}, z7, e), r = n.autoFocus, o = n.length, a = L7([].concat(V7, W7), n), s = G([]), i = K7(en({
    refs: s
  }, n)), c = R7(Y7, i, B7(n))[1];
  E0(t, function() {
    return s.current;
  }, [s]);
  function l(h) {
    return function() {
      c({
        type: "focus-input",
        idx: h
      });
    };
  }
  function u(h) {
    return function(g) {
      var x = I7.getKey(g.nativeEvent);
      !U7.includes(x) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
        type: "handle-key-down",
        idx: h,
        key: x,
        val: g.nativeEvent.target.value
      }));
    };
  }
  function d(h) {
    return function(g) {
      g.nativeEvent.target instanceof HTMLInputElement && c({
        type: "handle-key-up",
        idx: h,
        val: g.nativeEvent.target.value
      });
    };
  }
  function p(h) {
    return function(g) {
      g.preventDefault();
      var x = g.clipboardData.getData("Text");
      c({
        type: "handle-paste",
        idx: h,
        val: x
      });
    };
  }
  function m(h) {
    return function(g) {
      g && (s.current[h] = g);
    };
  }
  function v(h) {
    return Boolean(h === 0 && r);
  }
  return E.createElement(E.Fragment, null, Bx(0, o).map(function(h) {
    return E.createElement("input", Object.assign({
      type: "text",
      autoCapitalize: "off",
      autoCorrect: "off",
      autoComplete: "off",
      inputMode: "text"
    }, a, {
      key: h,
      ref: m(h),
      autoFocus: v(h),
      onFocus: l(h),
      onKeyDown: u(h),
      onKeyUp: d(h),
      onPaste: p(h)
    }));
  }));
});
const UR = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = E.useState(!1);
  return /* @__PURE__ */ f.exports.jsx("div", { className: A("pin-field-container", s), children: /* @__PURE__ */ f.exports.jsx(
    G7,
    {
      className: A("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var Yx = {}, Od = {};
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
})(Od);
var Kx = {}, Fn = {};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.DEFAULT_DATA_URL_KEY = Fn.INIT_MAX_NUMBER = Fn.DEFAULT_NULL_INDEX = void 0;
Fn.DEFAULT_NULL_INDEX = -1;
Fn.INIT_MAX_NUMBER = 1e3;
Fn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = gt && gt.__awaiter || function(a, s, i, c) {
    function l(u) {
      return u instanceof i ? u : new i(function(d) {
        d(u);
      });
    }
    return new (i || (i = Promise))(function(u, d) {
      function p(h) {
        try {
          v(c.next(h));
        } catch (g) {
          d(g);
        }
      }
      function m(h) {
        try {
          v(c.throw(h));
        } catch (g) {
          d(g);
        }
      }
      function v(h) {
        h.done ? u(h.value) : l(h.value).then(p, m);
      }
      v((c = c.apply(a, s || [])).next());
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
    function p(v) {
      return function(h) {
        return m([v, h]);
      };
    }
    function m(v) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (c = 1, l && (u = v[0] & 2 ? l.return : v[0] ? l.throw || ((u = l.return) && u.call(l), 0) : l.next) && !(u = u.call(l, v[1])).done)
            return u;
          switch (l = 0, u && (v = [v[0] & 2, u.value]), v[0]) {
            case 0:
            case 1:
              u = v;
              break;
            case 4:
              return i.label++, { value: v[1], done: !1 };
            case 5:
              i.label++, l = v[1], v = [0];
              continue;
            case 7:
              v = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (u = i.trys, !(u = u.length > 0 && u[u.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                i = 0;
                continue;
              }
              if (v[0] === 3 && (!u || v[1] > u[0] && v[1] < u[3])) {
                i.label = v[1];
                break;
              }
              if (v[0] === 6 && i.label < u[1]) {
                i.label = u[1], u = v;
                break;
              }
              if (u && i.label < u[2]) {
                i.label = u[2], i.ops.push(v);
                break;
              }
              u[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          v = s.call(a, i);
        } catch (h) {
          v = [6, h], l = 0;
        } finally {
          c = u = 0;
        }
      if (v[0] & 5)
        throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getErrorValidation = e.isMaxNumberValid = e.isAcceptTypeValid = e.isMaxFileSizeValid = e.isImageValid = e.isResolutionValid = void 0;
  var r = Fn, o = Od;
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
    var s = a.fileList, i = a.value, c = a.maxNumber, l = a.keyUpdate, u = a.acceptType, d = a.maxFileSize, p = a.resolutionType, m = a.resolutionWidth, v = a.resolutionHeight, h = a.allowNonImageType;
    return t(void 0, void 0, void 0, function() {
      var g, x, b, y, _;
      return n(this, function($) {
        switch ($.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            x = 0, $.label = 2;
          case 2:
            return x < s.length ? (b = s[x].file, b ? !h && !e.isImageValid(b.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, b.name) ? e.isMaxFileSizeValid(b.size, d) ? p ? [4, o.getImage(b)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (y = $.sent(), _ = e.isResolutionValid(y, p, m, v), !_)
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
})(Kx);
var tu = gt && gt.__assign || function() {
  return tu = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, tu.apply(this, arguments);
}, q7 = gt && gt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), Z7 = gt && gt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), X7 = gt && gt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && q7(t, e, n);
  return Z7(t, e), t;
}, sl = gt && gt.__awaiter || function(e, t, n, r) {
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
}, il = gt && gt.__generator || function(e, t) {
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
}, cl = gt && gt.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(Yx, "__esModule", { value: !0 });
var Jt = X7(E), ll = Od, Q7 = Kx, rr = Fn, J7 = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? rr.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, d = u === void 0 ? rr.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, v = e.resolutionWidth, h = e.resolutionHeight, g = e.resolutionType, x = e.inputProps, b = x === void 0 ? {} : x, y = e.allowNonImageType, _ = y === void 0 ? !1 : y, $ = n || [], N = Jt.useRef(null), k = Jt.useState(rr.DEFAULT_NULL_INDEX), S = k[0], P = k[1], Y = Jt.useState(null), W = Y[0], z = Y[1], Z = Jt.useState(!1), q = Z[0], j = Z[1], L = Jt.useCallback(function() {
    return ll.openFileDialog(N);
  }, [
    N
  ]), I = Jt.useCallback(function() {
    P(rr.DEFAULT_NULL_INDEX), L();
  }, [L]), K = Jt.useCallback(function() {
    r == null || r([]);
  }, [r]), R = function(H) {
    var re = cl($);
    Array.isArray(H) ? H.forEach(function(V) {
      re.splice(V, 1);
    }) : re.splice(H, 1), r == null || r(re);
  }, T = function(H) {
    P(H), L();
  }, B = function(H) {
    return sl(void 0, void 0, void 0, function() {
      var re;
      return il(this, function(V) {
        switch (V.label) {
          case 0:
            return [4, Q7.getErrorValidation({
              fileList: H,
              maxFileSize: m,
              maxNumber: d,
              acceptType: p,
              keyUpdate: S,
              resolutionType: g,
              resolutionWidth: v,
              resolutionHeight: h,
              value: $,
              allowNonImageType: _
            })];
          case 1:
            return re = V.sent(), re ? (z(re), o == null || o(re, H), [2, !1]) : (W && z(null), [2, !0]);
        }
      });
    });
  }, X = function(H) {
    return sl(void 0, void 0, void 0, function() {
      var re, V, de, he, ye, O;
      return il(this, function(U) {
        switch (U.label) {
          case 0:
            return H ? [4, ll.getListFiles(H, i)] : [
              2
              /*return*/
            ];
          case 1:
            return re = U.sent(), re.length ? [4, B(re)] : [
              2
              /*return*/
            ];
          case 2:
            if (V = U.sent(), !V)
              return [
                2
                /*return*/
              ];
            if (he = [], S > rr.DEFAULT_NULL_INDEX)
              ye = re[0], de = cl($), de[S] = ye, he.push(S);
            else if (l)
              for (de = cl($, re), O = $.length; O < de.length; O += 1)
                he.push(O);
            else
              de = [re[0]], he.push(0);
            return r == null || r(de, he), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ae = function(H) {
    return sl(void 0, void 0, void 0, function() {
      return il(this, function(re) {
        switch (re.label) {
          case 0:
            return [4, X(H.target.files)];
          case 1:
            return re.sent(), S > rr.DEFAULT_NULL_INDEX && P(rr.DEFAULT_NULL_INDEX), N.current && (N.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ne = Jt.useMemo(function() {
    return ll.getAcceptTypeString(p, _);
  }, [p, _]), ge = function(H) {
    H.preventDefault(), H.stopPropagation();
  }, be = function(H) {
    H.preventDefault(), H.stopPropagation(), H.dataTransfer.items && H.dataTransfer.items.length > 0 && j(!0);
  }, oe = function(H) {
    H.preventDefault(), H.stopPropagation(), j(!1);
  }, ie = function(H) {
    H.preventDefault(), H.stopPropagation(), j(!1), H.dataTransfer.files && H.dataTransfer.files.length > 0 && X(H.dataTransfer.files);
  }, pe = function(H) {
    H.preventDefault(), H.stopPropagation(), H.dataTransfer.clearData();
  };
  return Jt.default.createElement(
    Jt.default.Fragment,
    null,
    Jt.default.createElement("input", tu({ type: "file", accept: ne, ref: N, multiple: l && S === rr.DEFAULT_NULL_INDEX, onChange: ae, style: { display: "none" } }, b)),
    a == null ? void 0 : a({
      imageList: $,
      onImageUpload: I,
      onImageRemoveAll: K,
      onImageUpdate: T,
      onImageRemove: R,
      errors: W,
      dragProps: {
        onDrop: ie,
        onDragEnter: be,
        onDragLeave: oe,
        onDragOver: ge,
        onDragStart: pe
      },
      isDragging: q
    })
  );
}, Gx = Yx.default = J7;
const eM = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, qx = ({
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
      const u = eM(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
});
function hi(e, t) {
  fetch(e).then((n) => n.blob()).then((n) => {
    const r = window.URL.createObjectURL(new Blob([n])), o = document.createElement("a");
    o.href = r, o.setAttribute("download", t || "imagen.jpg"), document.body.appendChild(o), o.click();
  });
}
const tM = (e) => {
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
        children: /* @__PURE__ */ f.exports.jsx(Cx, { size: 16 })
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
        children: /* @__PURE__ */ f.exports.jsx(um, { size: 16 })
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
        children: /* @__PURE__ */ f.exports.jsx(dm, { size: 16 })
      }
    ),
    l && p && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => hi(p, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Ls, { size: 16 })
      }
    )
  ] });
}, nM = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: A(
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
          className: A("mt-2", t && "text-indigo-600", a && "cursor-not-allowed"),
          onClick: s,
          children: /* @__PURE__ */ f.exports.jsx(cu, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), Zx = ({ src: e, containerClassName: t, imageClassName: n, zoom: r, fallback: o, download: a, filename: s }) => {
  const [i, c] = J(!1);
  return r ? /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit relative", children: [
    a && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "button",
        onClick: () => hi(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Ls, { size: 18 })
      }
    ),
    /* @__PURE__ */ f.exports.jsxs(ch, { open: i, onOpenChange: c, children: [
      /* @__PURE__ */ f.exports.jsxs(mo, { className: A("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
        /* @__PURE__ */ f.exports.jsx(
          Dr,
          {
            src: e,
            className: A("aspect-video w-auto rounded-md object-contain m-auto h-full cursor-zoom-in", n),
            onClick: () => c(!0)
          }
        ),
        /* @__PURE__ */ f.exports.jsx(vo, { className: A("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(gc, {}) })
      ] }),
      /* @__PURE__ */ f.exports.jsx(Qu, { className: "p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none", style: { background: "transparent !important" }, onClick: () => c(!1), children: /* @__PURE__ */ f.exports.jsxs(mo, { className: A("w-full h-full rounded-md"), children: [
        /* @__PURE__ */ f.exports.jsx(Dr, { src: e, className: A("aspect-video rounded-md object-contain m-auto h-full"), style: { width: "-webkit-fill-available" } }),
        /* @__PURE__ */ f.exports.jsx(vo, { className: A("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(gc, {}) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx("div", { className: "w-full", children: /* @__PURE__ */ f.exports.jsxs(mo, { className: A("relative w-full h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
    a && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "button",
        onClick: () => hi(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Ls, { size: 18 })
      }
    ),
    /* @__PURE__ */ f.exports.jsx(Dr, { src: e, className: A("aspect-video w-auto rounded-md object-contain m-auto h-full", n), style: { width: "-webkit-fill-available" } }),
    /* @__PURE__ */ f.exports.jsx(vo, { className: A("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(gc, {}) })
  ] }) });
}, zR = (e) => {
  const { edit: t = !0, initialPreview: n = null, setUploadImage: r, format: o, label: a, uploadLabel: s, tabIndexs: i, disabled: c, emptyClassName: l, imageContainerClassName: u, zoom: d, compress: p, download: m, onRemove: v, onEdit: h } = e, [g, x] = J(n ? [{ data_url: n, file: null }] : []), b = async (_, $) => {
    var P, Y, W, z, Z, q, j, L, I, K;
    const N = (P = _[0]) == null ? void 0 : P.file, k = (Y = _[0]) == null ? void 0 : Y.data_url;
    N || (x([]), r({ original: null, compressed: null })), x(_);
    const S = Is((W = _[0]) == null ? void 0 : W.file.size);
    if (p != null && p.resizer && N) {
      const { data_url: R, file: T } = await qx({
        resizer: p == null ? void 0 : p.resizer,
        imageFile: N,
        quality: (o == null ? void 0 : o.quality) || 10,
        maxWidth: (o == null ? void 0 : o.width) || 500,
        maxHeight: (o == null ? void 0 : o.width) || 500,
        compressFormat: (o == null ? void 0 : o.extension) || "png",
        rotation: (o == null ? void 0 : o.rotation) || 0
      }), B = Is(T.size);
      r({
        original: {
          preview: k,
          file: N,
          size: {
            formated: S,
            bytes: (z = _[0]) == null ? void 0 : z.file.size
          }
        },
        compressed: {
          preview: R == null ? void 0 : R.toString(),
          file: T,
          size: {
            formated: B,
            bytes: T.size
          }
        }
      });
      return;
    }
    h && (Z = _[0]) != null && Z.data_url && h({
      data_url: ((q = _[0]) == null ? void 0 : q.data_url) || null,
      file: ((j = _[0]) == null ? void 0 : j.file) || null
    }), r({
      original: {
        preview: (L = _[0]) == null ? void 0 : L.data_url,
        file: (I = _[0]) == null ? void 0 : I.file,
        size: { formated: S, bytes: (K = _[0]) == null ? void 0 : K.file.size }
      },
      compressed: null
    });
  }, y = (_) => {
    _ == null || !g || !g.length || v && v(g[_]);
  };
  return ee(() => {
    n && x([{ data_url: n, file: null }]);
  }, [n]), /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full", children: [
    a && /* @__PURE__ */ f.exports.jsx(On, { children: a }),
    a && /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Gx,
      {
        value: g,
        onChange: b,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: _, onImageUpload: $, onImageUpdate: N, onImageRemove: k, isDragging: S, dragProps: P }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: _.length >= 1 ? /* @__PURE__ */ f.exports.jsx("div", { children: _.map((Y, W) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          /* @__PURE__ */ f.exports.jsx(
            Zx,
            {
              zoom: d,
              src: Y == null ? void 0 : Y.data_url,
              containerClassName: u
            }
          ),
          /* @__PURE__ */ f.exports.jsx(
            tM,
            {
              edit: t,
              imageIndex: W,
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
        ] }, W)) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
          nM,
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
}, rM = (e) => {
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
        children: /* @__PURE__ */ f.exports.jsx(Cx, { size: 16 })
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
        children: /* @__PURE__ */ f.exports.jsx(um, { size: 16 })
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
        children: /* @__PURE__ */ f.exports.jsx(dm, { size: 16 })
      }
    ),
    i && l && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => hi(l, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Ls, { size: 16 })
      }
    )
  ] });
}, oM = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: A(
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
          children: /* @__PURE__ */ f.exports.jsx(cu, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), BR = (e) => {
  const { edit: t = !0, label: n, setUploadImages: r, format: o, uploadLabel: a, tabIndexs: s, emptyClassName: i, imageContainerClassName: c, zoom: l, compress: u, limit: d, initialPreview: p, disabled: m, download: v, onRemove: h, onEdit: g } = e, [x, b] = J([]);
  ee(() => {
    p && p.length && b([...p]);
  }, [p]);
  const y = async ($, N) => {
    b($);
    const k = $.map(async (S) => {
      var P, Y, W, z;
      if (u != null && u.resizer && (S != null && S.file) && !((P = S == null ? void 0 : S.file) != null && P.compressed)) {
        const { data_url: Z, file: q } = await qx({
          imageFile: S == null ? void 0 : S.file,
          resizer: u == null ? void 0 : u.resizer,
          quality: (o == null ? void 0 : o.quality) || 10,
          maxWidth: (o == null ? void 0 : o.width) || 500,
          maxHeight: (o == null ? void 0 : o.width) || 500,
          rotation: (o == null ? void 0 : o.rotation) || 0,
          compressFormat: (o == null ? void 0 : o.extension) || "png"
        }), j = Is(q == null ? void 0 : q.size), L = {
          original: {
            preview: S == null ? void 0 : S.data_url,
            file: S == null ? void 0 : S.file,
            size: {
              formated: (Y = S == null ? void 0 : S.file) != null && Y.size ? Is((W = S == null ? void 0 : S.file) == null ? void 0 : W.size) : null,
              bytes: ((z = S == null ? void 0 : S.file) == null ? void 0 : z.size) || null
            }
          },
          compressed: {
            preview: Z == null ? void 0 : Z.toString(),
            file: q,
            size: {
              formated: j,
              bytes: q == null ? void 0 : q.size
            }
          }
        };
        return {
          ...S,
          file: L,
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
    $ == null || !x || !x.length || h && h(x[$]);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { children: [
    n && /* @__PURE__ */ f.exports.jsx(On, { children: n }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Gx,
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
              $.map((W, z) => /* @__PURE__ */ f.exports.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    /* @__PURE__ */ f.exports.jsx(
                      Zx,
                      {
                        zoom: l,
                        src: W == null ? void 0 : W.data_url,
                        containerClassName: c
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx(
                      rM,
                      {
                        edit: t,
                        imageIndex: z,
                        download: v,
                        compress: u,
                        disabled: m,
                        tabIndexs: s,
                        src: W == null ? void 0 : W.data_url,
                        onImageRemove: S,
                        onImageUpdate: k,
                        handleOnRemoveImage: _
                      }
                    )
                  ]
                },
                z
              )),
              x.length < d && /* @__PURE__ */ f.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  ...Y,
                  className: A(
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
                      children: /* @__PURE__ */ f.exports.jsx(cu, { size: 24 })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ f.exports.jsx(
          oM,
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
function HR({
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
  classNameGroup: u,
  ctaPlaceholder: d,
  buttonClassName: p,
  popoverClassName: m
}) {
  const [v, h] = J(!1);
  return s ? /* @__PURE__ */ f.exports.jsxs("div", { className: A("w-full"), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
      Pt,
      {
        className: A("w-full h-9 mt-2")
      }
    ) })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Kr,
    {
      control: t.control,
      name: e,
      defaultValue: c,
      render: ({ field: g }) => {
        var x;
        return /* @__PURE__ */ f.exports.jsxs(Cr, { className: "flex flex-col", children: [
          /* @__PURE__ */ f.exports.jsx(On, { children: n }),
          /* @__PURE__ */ f.exports.jsxs(zn, { open: v, onOpenChange: h, children: [
            /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Fe,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: A("w-min justify-between", !g.value && "text-muted-foreground", `${p}`),
                children: [
                  g.value ? (x = r.find((b) => {
                    var y, _;
                    return ((y = b == null ? void 0 : b.value) == null ? void 0 : y.toUpperCase()) === ((_ = g == null ? void 0 : g.value) == null ? void 0 : _.toUpperCase());
                  })) == null ? void 0 : x.label : d,
                  /* @__PURE__ */ f.exports.jsx(hl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(Cn, { className: A("w-[200px] p-0", m), children: /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
              /* @__PURE__ */ f.exports.jsx(mr, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsxs(Yo, { children: [
                /* @__PURE__ */ f.exports.jsx(vr, { children: l }),
                /* @__PURE__ */ f.exports.jsx(dn, { className: A("overflow-auto", u), children: r.map((b) => /* @__PURE__ */ f.exports.jsxs(
                  fn,
                  {
                    disabled: b == null ? void 0 : b.disabled,
                    value: b.value,
                    className: A("w-full flex justify-start items-center", (b == null ? void 0 : b.disabled) && "pointer-events-none opacity-50 cursor-default"),
                    onSelect: (y) => {
                      t.setValue(e, y, { shouldDirty: !0 }), h(!1);
                    },
                    children: [
                      (b == null ? void 0 : b.image) && /* @__PURE__ */ f.exports.jsx("img", { src: b.image, alt: b.label, width: 40, className: "mr-2" }),
                      (b == null ? void 0 : b.icon) && b.icon,
                      b.label,
                      /* @__PURE__ */ f.exports.jsx(
                        Z4,
                        {
                          className: A(
                            "ml-auto h-4 w-4",
                            b.value === g.value ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  b.value
                )) })
              ] })
            ] }) })
          ] })
        ] });
      }
    }
  );
}
function aM({
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
  popoverClassName: v
}) {
  var x;
  const [h, g] = J(!1);
  return t ? /* @__PURE__ */ f.exports.jsx(
    Kr,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: b, formState: y }) => {
        var _, $, N;
        return /* @__PURE__ */ f.exports.jsxs(Cr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Gr, { className: "flex", children: [
            n,
            " ",
            (($ = (_ = y.errors) == null ? void 0 : _.pidType) == null ? void 0 : $.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              y.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsxs(zn, { open: h, onOpenChange: g, children: [
            /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, disabled: s, children: /* @__PURE__ */ f.exports.jsxs(
              Fe,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: A("w-min justify-between", !b.value && "text-muted-foreground", `${m}`),
                children: [
                  b.value ? (N = r.find((k) => k.value === b.value)) == null ? void 0 : N.label : p,
                  /* @__PURE__ */ f.exports.jsx(hl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(Cn, { className: A("w-[200px] p-0", v), children: /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
              /* @__PURE__ */ f.exports.jsx(mr, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsxs(pg, { children: [
                /* @__PURE__ */ f.exports.jsx(vr, { children: d }),
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
                          className: A(
                            "ml-auto h-4 w-4",
                            k.value === b.value ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  k.value
                )) })
              ] })
            ] }) })
          ] })
        ] });
      }
    }
  ) : /* @__PURE__ */ f.exports.jsxs(zn, { open: h, onOpenChange: g, children: [
    /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Fe,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": h,
        className: "w-full justify-between",
        children: [
          a ? (x = r.find((b) => b.value === a)) == null ? void 0 : x.label : p,
          /* @__PURE__ */ f.exports.jsx(hl, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(Cn, { className: "w-full p-0", children: /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
      /* @__PURE__ */ f.exports.jsx(mr, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ f.exports.jsx(vr, { children: d }),
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
                className: A(
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
const sM = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i, disabled: c }) => {
  const l = G(null), [u, d] = J(null);
  return ee(() => {
    const p = l.current;
    if (!p)
      return;
    const m = new ResizeObserver((v) => {
      const h = v[0].contentRect.width;
      d(h);
    });
    return m.observe(p), () => {
      m.unobserve(p), m.disconnect();
    };
  }, []), /* @__PURE__ */ f.exports.jsxs("div", { className: A("w-full space-y-2", s), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(On, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ f.exports.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ f.exports.jsxs(zn, { children: [
      /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, disabled: c, children: /* @__PURE__ */ f.exports.jsxs(
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
      /* @__PURE__ */ f.exports.jsx(Cn, { style: { width: u + 24 }, className: A("w-full p-0", i), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
        /* @__PURE__ */ f.exports.jsx(mr, { placeholder: r }),
        /* @__PURE__ */ f.exports.jsxs(Yo, { children: [
          /* @__PURE__ */ f.exports.jsx(vr, { children: "Sin Resultados" }),
          /* @__PURE__ */ f.exports.jsx(dn, { children: a.map((p) => /* @__PURE__ */ f.exports.jsxs(
            fn,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ f.exports.jsx(
                  "div",
                  {
                    className: A(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ f.exports.jsx(ln, { className: A("h-4 w-4") })
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
}, iM = (e) => {
  var k;
  const { form: t, id: n, description: r, icon: o, placeholder: a, label: s, tabIndex: i, items: c, classNameContainer: l, classNamePopover: u, disabled: d } = e, [p, m] = J([]), [v, h] = J(null), g = G(null), x = (k = t == null ? void 0 : t.formState) == null ? void 0 : k.defaultValues[n], b = (S) => ({
    ...S,
    selected: x ? x.includes(S.value) : !1
  }), y = _t(() => c.map(b), [x]), _ = _t(() => p.filter((P) => P.selected).map((P) => P.value), [p]), $ = () => m(
    (S) => S.map((P) => ({ ...P, selected: !1 }))
  ), N = (S, P) => {
    const Y = p.map((W) => W.id === S ? { ...W, selected: P } : W);
    m(Y), t.setValue(
      n,
      Y.filter((W) => W.selected).map((W) => W.value),
      { shouldDirty: !0 }
    );
  };
  return ee(() => {
    const S = g.current;
    if (!S)
      return;
    const P = new ResizeObserver((Y) => {
      const W = Y[0].contentRect.width;
      h(W);
    });
    return P.observe(S), () => {
      P.unobserve(S), P.disconnect();
    };
  }, []), ee(() => {
    m(y);
  }, [y]), /* @__PURE__ */ f.exports.jsx(
    Kr,
    {
      control: t.control,
      name: n,
      render: ({ field: S, formState: P }) => {
        var Y;
        return /* @__PURE__ */ f.exports.jsxs(Cr, { className: A("w-full space-y-2", l), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            s && /* @__PURE__ */ f.exports.jsxs(Gr, { className: "flex", children: [
              s,
              " "
            ] }),
            ((Y = P == null ? void 0 : P.errors[n]) == null ? void 0 : Y.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              P.errors[n].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(Io, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsxs(zn, { children: [
            /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, disabled: d, children: /* @__PURE__ */ f.exports.jsxs(
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
                    ) : p.filter((W) => W.selected).map((W) => /* @__PURE__ */ f.exports.jsx(
                      Rt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: W.label
                      },
                      W.value.toString()
                    )) })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx("style", { children: `
                .combox-checkbox-content {
                    min-width: 150px !important;
                    width: ${v + 24}px !important;
                  }

                  .checkbox-tooltip-content {
                    min-width: 150px !important;
                    width: ${v + 10}px !important;
                  }
                ` }),
            /* @__PURE__ */ f.exports.jsx(
              Cn,
              {
                className: A("w-full p-0 combox-checkbox-content", u),
                align: "start",
                children: /* @__PURE__ */ f.exports.jsxs(Hn, { style: { width: "50px !important" }, children: [
                  /* @__PURE__ */ f.exports.jsx(mr, { placeholder: s }),
                  /* @__PURE__ */ f.exports.jsxs(Yo, { children: [
                    /* @__PURE__ */ f.exports.jsx(vr, { children: "Sin Resultados" }),
                    /* @__PURE__ */ f.exports.jsx(dn, { children: p.map((W) => /* @__PURE__ */ f.exports.jsx(Yn, { children: /* @__PURE__ */ f.exports.jsxs(Kn, { delayDuration: 150, children: [
                      /* @__PURE__ */ f.exports.jsx(Gn, { className: "w-full", children: /* @__PURE__ */ f.exports.jsxs(
                        fn,
                        {
                          onSelect: () => {
                            W.selected ? N(W.id, !1) : N(W.id, !0);
                          },
                          children: [
                            /* @__PURE__ */ f.exports.jsx(
                              "div",
                              {
                                className: A(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  W.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ f.exports.jsx(ln, { className: A("h-4 w-4") })
                              }
                            ),
                            W.icon,
                            /* @__PURE__ */ f.exports.jsx("span", { className: "truncate", children: W.label })
                          ]
                        },
                        W.value.toString()
                      ) }),
                      /* @__PURE__ */ f.exports.jsx(Sn, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ f.exports.jsx("p", { children: W.label }) })
                    ] }) })) }),
                    _.length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                      /* @__PURE__ */ f.exports.jsx(Ji, {}),
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
}, YR = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, disabled: l, ...u }) => i ? /* @__PURE__ */ f.exports.jsx(
  sM,
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
  iM,
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
function cM({
  isOpen: e,
  onClose: t,
  children: n
}) {
  return /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      className: `fixed z-30 inset-0 bg-opacity-50  transition-opacity ${e ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { className: "fixed z-50 inset-y-0  right-0  flex", "data-testId": "bottom-drawer", children: /* @__PURE__ */ f.exports.jsx(
          "div",
          {
            className: "max-w-[250px] h-full overflow-y-scroll rounded-l-xl border-l-[1.5px] bg-brand-sidebar-background text-brand-sidebar-text",
            children: n
          }
        ) }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "h-full", "data-testId": "bottom-outside-drawer", onClick: t })
      ]
    }
  );
}
function Up({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ f.exports.jsx(Yn, { children: /* @__PURE__ */ f.exports.jsxs(Kn, { children: [
    /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        "data-testId": `bottom-sidebar-${t}`,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ f.exports.jsx(
          Nx,
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
    /* @__PURE__ */ f.exports.jsx(Sn, { children: t })
  ] }) });
}
function lM({
  profile: e
}) {
  return /* @__PURE__ */ f.exports.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ f.exports.jsxs(mo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ f.exports.jsx(Dr, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ f.exports.jsx(vo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(Dr, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
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
const uM = ({ isExpanded: e, theme: t }) => {
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
        /* @__PURE__ */ f.exports.jsx(_x, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Ex, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function dM({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(uM, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
        "button",
        {
          onClick: t,
          "data-testId": "toggle-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(lm, { className: "dark:text-white", size: 20 }),
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
            /* @__PURE__ */ f.exports.jsx(im, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function fM({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx(lM, { profile: a }),
    /* @__PURE__ */ f.exports.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ f.exports.jsx(
        Nx,
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
        r3,
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
        dM,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function KR({
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
        Up,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ f.exports.jsx(
        Up,
        {
          icon: /* @__PURE__ */ f.exports.jsx(lm, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      cM,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ f.exports.jsx(
          fM,
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
const Qr = bt({
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
function pM() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Qe(Qr);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        rd,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(Ki, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(od, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Gi, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(qi, { value: `${a}`, children: a }, a)) })
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
            /* @__PURE__ */ f.exports.jsx($i, { className: "h-4 w-4" })
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
            /* @__PURE__ */ f.exports.jsx(xr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const GR = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, mM = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), qR = {
  limit: 10,
  page: 1
}, ul = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), ZR = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], vM = () => /* @__PURE__ */ f.exports.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), hM = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ f.exports.jsx("div", { children: r.render(o) }, ul()) : /* @__PURE__ */ f.exports.jsx(qt, { children: o[r.id] }, ul());
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((r) => /* @__PURE__ */ f.exports.jsx(Th, { children: t.map((o) => n(o, r)) }, ul())) });
}, Xx = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Qe(Qr), [s, i] = J(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    hM,
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
  ) : /* @__PURE__ */ f.exports.jsx(vM, {}) });
}, gM = () => /* @__PURE__ */ f.exports.jsx(Xx, {}), bM = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), xM = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(bM, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), yM = () => {
  const { showFilters: e, setShowFilters: t } = Qe(Qr);
  return /* @__PURE__ */ f.exports.jsxs(
    Fe,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(wx, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, wM = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Qe(Qr), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(zn, { children: [
    /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Fe, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ f.exports.jsx($x, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
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
    /* @__PURE__ */ f.exports.jsx(Cn, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
      /* @__PURE__ */ f.exports.jsx(mr, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Yo, { children: [
        /* @__PURE__ */ f.exports.jsx(vr, { children: "Sin Resultados" }),
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
                  className: A(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(ln, { className: A("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Ji, {}),
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
}, $M = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(zn, { children: [
  /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Fe, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(Fs, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
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
  /* @__PURE__ */ f.exports.jsxs(Cn, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(On, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      Ju,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), _M = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = Qe(Qr), l = e.watch(n.map((d) => d.id)), u = () => {
    var p;
    a();
    const d = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((m) => {
      m[1] && d.push({
        field: Ko(m[0]),
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
          $M,
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
      /* @__PURE__ */ f.exports.jsx(yM, {}),
      o && r && r.map((d) => /* @__PURE__ */ f.exports.jsx(
        wM,
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
            /* @__PURE__ */ f.exports.jsx(Ci, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, CM = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = Qe(Qr), c = qv({
    defaultValues: n.reduce((u, d) => (u[d.id] = "", u), {}),
    resolver: kx(
      vi.object(
        n.reduce((u, d) => (u[d.id] = vi.string().optional(), u), {})
      )
    )
  }), l = async (u) => {
    var m;
    console.log({ data: u });
    const d = r(), p = [];
    (m = Object.entries(u)) == null || m.forEach((v) => {
      v[1] && p.push({
        field: Ko(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: d, limit: s, page: a });
  };
  return ee(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Xv, { ...c, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(_M, { form: c, onSubmit: l }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(iu, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Sx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, SM = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), EM = () => /* @__PURE__ */ f.exports.jsx(Xx, {}), NM = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function XR(e) {
  const [t, n] = J([]), [r, o] = J([]), [a, s] = J([]), [i, c] = J(!1), [l, u] = J(e == null ? void 0 : e.error), [d, p] = J(e == null ? void 0 : e.loading), [m, v] = J(), [h, g] = J(
    (e == null ? void 0 : e.pagination) ?? NM
  ), [x, b] = J(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: y } = e, _ = ve(
    (j) => e.onSubmitTable({ ...j }),
    [e]
  ), $ = ve(
    (j) => {
      var R;
      g(j);
      const L = m.getValues(), I = [];
      (R = Object.entries(L)) == null || R.forEach((T) => {
        T[1] && I.push({
          field: mM(T[0]),
          text: T[1]
        });
      });
      const K = r.map((T) => ({
        id: T.id,
        label: T.label,
        options: T.options.filter((B) => B.selected).map((B) => B.value)
      })).filter((T) => T.options.length > 0);
      _({
        filters: K,
        queries: I,
        limit: j.limit,
        page: j.page
      });
    },
    [r, _, m]
  ), N = ve(() => {
    $({ ...h, page: h.page + 1 });
  }, [h, $]), k = ve(() => {
    h.page > 1 && $({ ...h, page: h.page - 1 });
  }, [h, $]), S = () => r.map((j) => ({
    id: j.id,
    label: j.label,
    options: j.options.filter((L) => L.selected).map((L) => L.value)
  })).filter((j) => j.options.length > 0), P = (j) => {
    const L = r.find((I) => I.id === j);
    return L ? L.options.filter((K) => K.selected).map((K) => K.value) : [];
  }, Y = (j, L, I) => {
    const K = r.map((R) => R.id === j ? {
      ...R,
      options: R.options.map((T) => T.id === L ? { ...T, selected: I } : T)
    } : R);
    o(K);
  }, W = () => r, z = (j) => {
    const L = r.map((I) => I.id === j ? {
      ...I,
      options: I.options.map((K) => ({
        ...K,
        selected: !1
      }))
    } : I);
    o(L);
  }, Z = (j) => $({ ...h, limit: j }), q = () => {
    const j = r.map((L) => ({
      ...L,
      options: L.options.map((I) => ({ ...I, selected: !1 }))
    }));
    o(j);
  };
  return ee(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), ee(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), ee(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), ee(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), ee(() => b((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), ee(() => {
    const j = x.filter((L) => L.isQuery).map((L) => ({
      id: L.id,
      label: L.label
    }));
    s(j);
  }, [x]), ee(() => {
    const j = (I) => (I == null ? void 0 : I.filters) && (I == null ? void 0 : I.filters.length), L = x.filter(j).map((I) => {
      const K = I.filters.map((T) => ({
        ...T,
        selected: !1
      }));
      return {
        ...I,
        id: I.id,
        options: K
      };
    });
    o(L);
  }, [x]), ee(() => {
    e != null && e.filters && (e == null || e.filters.forEach((j) => {
      j != null && j.filters && x.forEach((L) => {
        j.id === L.id && o((I) => I.some((R) => R.id === j.id) ? I : [
          ...I,
          {
            id: L.id,
            label: L.label,
            options: j.filters
          }
        ]);
      });
    }));
  }, [x, e == null ? void 0 : e.filters]), ee(() => {
    g((j) => {
      var L, I;
      return {
        ...j,
        hasNextPage: (L = e == null ? void 0 : e.pagination) == null ? void 0 : L.hasNextPage,
        hasPrevPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Qr.Provider,
    {
      value: {
        data: t,
        columns: x,
        pagination: h,
        nextPage: N,
        prevPage: k,
        searchForm: m,
        updateLimit: Z,
        showFilters: i,
        resetFilters: q,
        getGlobalFilters: W,
        selectOptionFilter: Y,
        resetOptionsByFilter: z,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: _,
        getFilterOptionsSelectedById: P,
        getFiltersWithOptionsSelected: S,
        setSelectItem: e.setSelectItem,
        setShowFilters: (j) => c(j),
        setSearchForm: (j) => v(j)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(CM, { onSubmitTable: _, loading: d }),
        /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${y ? `${y === 2 ? "sm" : "lg"}:grid-cols-${y}` : "grid-cols-3"}  gap-6`,
            children: [
              d && /* @__PURE__ */ f.exports.jsx(xM, {}),
              !d && l && /* @__PURE__ */ f.exports.jsx(SM, {}),
              !d && !l && !t && /* @__PURE__ */ f.exports.jsx(EM, {}),
              !d && !l && t && /* @__PURE__ */ f.exports.jsx(gM, {})
            ]
          }
        ),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(pM, {})
      ] })
    }
  );
}
function PM(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function zp(e) {
  return PM(e) || Array.isArray(e);
}
function TM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function kd(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !zp(i) || !zp(c) ? i === c : kd(i, c);
  });
}
function Bp(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function OM(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Bp(e), r = Bp(t);
  return n.every((o, a) => {
    const s = r[a];
    return kd(o, s);
  });
}
function Md(e) {
  return typeof e == "number";
}
function nu(e) {
  return typeof e == "string";
}
function Dd(e) {
  return typeof e == "boolean";
}
function Hp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function it(e) {
  return Math.abs(e);
}
function Rd(e) {
  return Math.sign(e);
}
function js(e, t) {
  return it(e - t);
}
function kM(e, t) {
  if (e === 0 || t === 0 || it(e) <= it(t))
    return 0;
  const n = js(it(e), it(t));
  return it(n / e);
}
function ka(e) {
  return Ma(e).map(Number);
}
function sn(e) {
  return e[ts(e)];
}
function ts(e) {
  return Math.max(0, e.length - 1);
}
function jd(e, t) {
  return t === ts(e);
}
function Yp(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Ma(e) {
  return Object.keys(e);
}
function Qx(e, t) {
  return [e, t].reduce((n, r) => (Ma(r).forEach((o) => {
    const a = n[o], s = r[o], i = Hp(a) && Hp(s);
    n[o] = i ? Qx(a, s) : s;
  }), n), {});
}
function Jx(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function MM(e, t) {
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
    return nu(e) ? n[e](c) : e(t, c, l);
  }
  return {
    measure: s
  };
}
function DM(e, t) {
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
function Ur(e = 0, t = 0) {
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
function e0(e, t, n) {
  const {
    constrain: r
  } = Ur(0, e), o = e + 1;
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
    return e0(e, i(), n);
  }
  const d = {
    get: i,
    set: c,
    add: l,
    clone: u
  };
  return d;
}
function RM(e) {
  const t = e === "rtl" ? -1 : 1;
  function n(o) {
    return o * t;
  }
  return {
    apply: n
  };
}
function Da() {
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
function jM(e, t, n, r, o, a, s, i, c, l, u, d, p, m, v, h, g, x, b, y) {
  const {
    cross: _
  } = e, $ = ["INPUT", "SELECT", "TEXTAREA"], N = {
    passive: !1
  }, k = Da(), S = Da(), P = Ur(50, 225).constrain(v.measure(20)), Y = {
    mouse: 300,
    touch: 400
  }, W = {
    mouse: 500,
    touch: 600
  }, z = h ? 43 : 25;
  let Z = !1, q = 0, j = 0, L = !1, I = !1, K = !1, R = !1;
  function T(V) {
    if (!y)
      return;
    function de(ye) {
      (Dd(y) || y(V, ye)) && be(ye);
    }
    const he = n;
    k.add(he, "dragstart", (ye) => ye.preventDefault(), N).add(he, "touchmove", () => {
    }, N).add(he, "touchend", () => {
    }).add(he, "touchstart", de).add(he, "mousedown", de).add(he, "touchcancel", ie).add(he, "contextmenu", ie).add(he, "click", pe, !0);
  }
  function B() {
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
    return (h ? W : Y)[R ? "mouse" : "touch"];
  }
  function ge(V, de) {
    const he = p.add(Rd(V) * -1), ye = d.byDistance(V, !h).distance;
    return h || it(V) < P ? ye : x && de ? ye * 0.5 : d.byIndex(he.get(), 0).distance;
  }
  function be(V) {
    const de = Jx(V, o);
    R = de, !(de && V.button !== 0) && (ae(V.target) || (K = h && de && !V.buttons && Z, Z = js(a.get(), i.get()) >= 2, L = !0, s.pointerDown(V), u.useFriction(0).useDuration(0), a.set(i), X(), q = s.readPoint(V), j = s.readPoint(V, _), m.emit("pointerDown")));
  }
  function oe(V) {
    const de = s.readPoint(V), he = s.readPoint(V, _), ye = js(de, q), O = js(he, j);
    if (!I && !R && (!V.cancelable || (I = ye > O, !I)))
      return ie(V);
    const U = s.pointerMove(V);
    ye > g && (K = !0), u.useFriction(0.3).useDuration(1), c.start(), a.add(t.apply(U)), V.preventDefault();
  }
  function ie(V) {
    const he = d.byDistance(0, !1).index !== p.get(), ye = s.pointerUp(V) * ne(), O = ge(t.apply(ye), he), U = kM(ye, O), Q = z - 10 * U, fe = b + U / 50;
    I = !1, L = !1, S.clear(), u.useDuration(Q).useFriction(fe), l.distance(O, !h), R = !1, m.emit("pointerUp");
  }
  function pe(V) {
    K && (V.stopPropagation(), V.preventDefault());
  }
  function H() {
    return L;
  }
  return {
    init: T,
    pointerDown: H,
    destroy: B
  };
}
function AM(e, t) {
  let r, o;
  function a(d) {
    return d.timeStamp;
  }
  function s(d, p) {
    const v = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (Jx(d, t) ? d : d.touches[0])[v];
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
    const p = s(o) - s(r), m = a(d) - a(r), v = a(d) - a(o) > 170, h = p / m;
    return m && !v && it(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function IM() {
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
function LM(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function FM(e, t, n, r, o, a, s) {
  let i, c, l = [], u = !1;
  function d(h) {
    return o.measureSize(s.measure(h));
  }
  function p(h) {
    if (!a)
      return;
    c = d(e), l = r.map(d);
    function g(b) {
      for (const y of b) {
        const _ = y.target === e, $ = r.indexOf(y.target), N = _ ? c : l[$], k = d(_ ? e : r[$]);
        if (it(k - N) >= 0.5) {
          n.requestAnimationFrame(() => {
            h.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((b) => {
      u || (Dd(a) || a(h, b)) && g(b);
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
function VM(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, l = e.get(), u = 0;
  function d() {
    const $ = n.get() - e.get(), N = !i;
    let k = 0;
    return N ? (a = 0, e.set(n), k = $) : (a += $ / i, a *= c, l += a, e.add(a), k = l - u), s = Rd(k), u = l, _;
  }
  function p() {
    const $ = n.get() - t.get();
    return it($) < 1e-3;
  }
  function m() {
    return i;
  }
  function v() {
    return s;
  }
  function h() {
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
    direction: v,
    duration: m,
    velocity: h,
    seek: d,
    settled: p,
    useBaseFriction: x,
    useBaseDuration: g,
    useFriction: y,
    useDuration: b
  };
  return _;
}
function WM(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = Ur(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!l())
      return;
    const v = e.reachedMin(t.get()) ? "min" : "max", h = it(e[v] - t.get()), g = n.get() - t.get(), x = i.constrain(h / s);
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
function UM(e, t, n, r, o) {
  const a = Ur(-t + e, 0), s = u(), i = l(), c = d();
  function l() {
    const m = s[0], v = sn(s), h = s.lastIndexOf(m), g = s.indexOf(v) + 1;
    return Ur(h, g);
  }
  function u() {
    return n.map((m, v) => {
      const h = !v, g = jd(n, v);
      return h ? a.max : g ? a.min : a.constrain(m);
    }).map((m) => parseFloat(m.toFixed(3)));
  }
  function d() {
    if (t <= e + o)
      return [a.max];
    if (r === "keepSnaps")
      return s;
    const {
      min: m,
      max: v
    } = i;
    return s.slice(m, v);
  }
  return {
    snapsContained: c,
    scrollContainLimit: i
  };
}
function zM(e, t, n) {
  const r = t[0], o = n ? r - e : sn(t);
  return {
    limit: Ur(o, r)
  };
}
function BM(e, t, n, r) {
  const a = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = Ur(a, s);
  function l(p) {
    return p === 1 ? c(n.get()) : p === -1 ? i(n.get()) : !1;
  }
  function u(p) {
    if (!l(p))
      return;
    const m = e * (p * -1);
    r.forEach((v) => v.add(m));
  }
  return {
    loop: u
  };
}
function HM(e) {
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
function YM(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = d().map(t.measure), l = p(), u = m();
  function d() {
    return i(r).map((h) => sn(h)[s] - h[0][a]).map(it);
  }
  function p() {
    return r.map((h) => n[a] - h[a]).map((h) => -it(h));
  }
  function m() {
    return i(l).map((h) => h[0]).map((h, g) => h + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function KM(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, l = u();
  function u() {
    const p = s(a), m = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : m ? p : p.slice(i, c).map((v, h, g) => {
      const x = !h, b = jd(g, h);
      if (x) {
        const y = sn(g[0]) + 1;
        return Yp(y);
      }
      if (b) {
        const y = ts(a) - sn(g)[0] + 1;
        return Yp(y, sn(g)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: l
  };
}
function GM(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(v) {
    return v.concat().sort((h, g) => it(h) - it(g))[0];
  }
  function l(v) {
    const h = e ? s(v) : i(v), g = t.map((b) => b - h).map((b) => u(b, 0)).map((b, y) => ({
      diff: b,
      index: y
    })).sort((b, y) => it(b.diff) - it(y.diff)), {
      index: x
    } = g[0];
    return {
      index: x,
      distance: h
    };
  }
  function u(v, h) {
    const g = [v, v + n, v - n];
    if (!e)
      return g[0];
    if (!h)
      return c(g);
    const x = g.filter((b) => Rd(b) === h);
    return x.length ? c(x) : sn(g) - n;
  }
  function d(v, h) {
    const g = t[v] - o.get(), x = u(g, h);
    return {
      index: v,
      distance: x
    };
  }
  function p(v, h) {
    const g = o.get() + v, {
      index: x,
      distance: b
    } = l(g), y = !e && a(g);
    if (!h || y)
      return {
        index: x,
        distance: v
      };
    const _ = t[x] - b, $ = v + u(_, 0);
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
function qM(e, t, n, r, o, a) {
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
function ZM(e, t, n, r, o, a) {
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
      const h = t.indexOf(d), g = n.findIndex((x) => x.includes(h));
      Md(g) && (o.useDuration(0), r.index(g, 0));
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
function As(e) {
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
    return Md(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function t0(e, t, n) {
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
function XM(e, t, n, r, o, a, s, i, c, l) {
  const d = ka(a), p = ka(a).reverse(), m = b().concat(y());
  function v(S, P) {
    return S.reduce((Y, W) => Y - a[W], P);
  }
  function h(S, P) {
    return S.reduce((Y, W) => v(Y, P) > 0 ? Y.concat([W]) : Y, []);
  }
  function g(S) {
    return s.map((P, Y) => ({
      start: P - o[Y] + 0.5 + S,
      end: P + n - 0.5 + S
    }));
  }
  function x(S, P, Y) {
    const W = g(P);
    return S.map((z) => {
      const Z = Y ? 0 : -r, q = Y ? r : 0, j = Y ? "end" : "start", L = W[z][j];
      return {
        index: z,
        loopPoint: L,
        slideLocation: As(-1),
        translate: t0(e, t, l[z]),
        target: () => c.get() > L ? Z : q
      };
    });
  }
  function b() {
    const S = i[0], P = h(p, S);
    return x(P, r, !1);
  }
  function y() {
    const S = n - i[0] - 1, P = h(d, S);
    return x(P, -r, !0);
  }
  function _() {
    return m.every(({
      index: S
    }) => {
      const P = d.filter((Y) => Y !== S);
      return v(P, n) <= 0.1;
    });
  }
  function $() {
    m.forEach((S) => {
      const {
        target: P,
        translate: Y,
        slideLocation: W
      } = S, z = P();
      z !== W.get() && (Y.to(z), W.set(z));
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
function QM(e, t, n) {
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
      o || (Dd(n) || n(c, u)) && l(u);
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
function JM(e, t, n, r) {
  const o = {};
  let a = null, s = null, i, c = !1;
  function l() {
    i = new IntersectionObserver((v) => {
      c || (v.forEach((h) => {
        const g = t.indexOf(h.target);
        o[g] = h;
      }), a = null, s = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((v) => i.observe(v));
  }
  function u() {
    i && i.disconnect(), c = !0;
  }
  function d(v) {
    return Ma(o).reduce((h, g) => {
      const x = parseInt(g), {
        isIntersecting: b
      } = o[x];
      return (v && b || !v && !b) && h.push(x), h;
    }, []);
  }
  function p(v = !0) {
    if (v && a)
      return a;
    if (!v && s)
      return s;
    const h = d(v);
    return v && (a = h), v || (s = h), h;
  }
  return {
    init: l,
    destroy: u,
    get: p
  };
}
function eD(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, l = n[0] && o, u = v(), d = h(), p = n.map(s), m = g();
  function v() {
    if (!l)
      return 0;
    const b = n[0];
    return it(t[i] - b[i]);
  }
  function h() {
    if (!l)
      return 0;
    const b = a.getComputedStyle(sn(r));
    return parseFloat(b.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((b, y, _) => {
      const $ = !y, N = jd(_, y);
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
function tD(e, t, n, r, o, a, s, i, c, l) {
  const {
    startEdge: u,
    endEdge: d
  } = e, p = Md(r);
  function m(x, b) {
    return ka(x).filter((y) => y % b === 0).map((y) => x.slice(y, y + b));
  }
  function v(x) {
    return x.length ? ka(x).reduce((b, y) => {
      const _ = sn(b) || 0, $ = _ === 0, N = y === ts(x), k = a[u] - s[_][u], S = a[u] - s[y][d], P = !o && $ ? t.apply(i) : 0, Y = !o && N ? t.apply(c) : 0;
      return it(S - Y - (k + P)) > n + l && b.push(y), N && b.push(x.length), b;
    }, []).map((b, y, _) => {
      const $ = Math.max(_[y - 1] || 0);
      return x.slice($, b);
    }) : [];
  }
  function h(x) {
    return p ? m(x, r) : v(x);
  }
  return {
    groupSlides: h
  };
}
function nD(e, t, n, r, o, a, s, i) {
  const {
    align: c,
    axis: l,
    direction: u,
    startIndex: d,
    loop: p,
    duration: m,
    dragFree: v,
    dragThreshold: h,
    inViewThreshold: g,
    slidesToScroll: x,
    skipSnaps: b,
    containScroll: y,
    watchResize: _,
    watchSlides: $,
    watchDrag: N
  } = a, k = 2, S = IM(), P = S.measure(t), Y = n.map(S.measure), W = RM(u), z = DM(l, u), Z = z.measureSize(P), q = LM(Z), j = MM(c, Z), L = !p && !!y, I = p || !!y, {
    slideSizes: K,
    slideSizesWithGaps: R,
    startGap: T,
    endGap: B
  } = eD(z, P, Y, n, I, o), X = tD(z, W, Z, x, p, P, Y, T, B, k), {
    snaps: ae,
    snapsAligned: ne
  } = YM(z, j, P, Y, X), ge = -sn(ae) + sn(R), {
    snapsContained: be,
    scrollContainLimit: oe
  } = UM(Z, ge, ne, y, k), ie = L ? be : ne, {
    limit: pe
  } = zM(ge, ie, p), H = e0(ts(ie), d, p), re = H.clone(), V = ka(n), de = ({
    dragHandler: Re,
    scrollBody: He,
    scrollBounds: tt,
    options: {
      loop: nt
    }
  }) => {
    nt || tt.constrain(Re.pointerDown()), He.seek();
  }, he = ({
    scrollBody: Re,
    translate: He,
    location: tt,
    offsetLocation: nt,
    scrollLooper: Ot,
    slideLooper: Nr,
    dragHandler: zt,
    animation: er,
    eventHandler: Jr,
    options: {
      loop: Go
    }
  }, ns) => {
    const kn = Re.velocity(), eo = Re.settled();
    eo && !zt.pointerDown() && (er.stop(), Jr.emit("settle")), eo || Jr.emit("scroll"), nt.set(tt.get() - kn + kn * ns), Go && (Ot.loop(Re.direction()), Nr.loop()), He.to(nt.get());
  }, ye = {
    start: () => i.start(Se),
    stop: () => i.stop(Se),
    update: () => de(Se),
    render: (Re) => he(Se, Re)
  }, O = 0.68, U = ie[H.get()], Q = As(U), fe = As(U), le = As(U), se = VM(Q, fe, le, m, O), we = GM(p, ie, ge, pe, le), Le = qM(ye, H, re, we, le, s), Ue = HM(pe), yt = Da(), gn = JM(t, n, s, g), {
    slideRegistry: Et
  } = KM(L, y, ie, oe, X, V), Ne = ZM(e, n, Et, Le, se, yt), Se = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: P,
    slideRects: Y,
    animation: ye,
    axis: z,
    direction: W,
    dragHandler: jM(z, W, e, r, o, le, AM(z, o), Q, ye, Le, se, we, H, s, q, v, h, b, O, N),
    eventStore: yt,
    percentOfView: q,
    index: H,
    indexPrevious: re,
    limit: pe,
    location: Q,
    offsetLocation: fe,
    options: a,
    resizeHandler: FM(t, s, o, n, z, _, S),
    scrollBody: se,
    scrollBounds: WM(pe, Q, le, se, q),
    scrollLooper: BM(ge, pe, fe, [Q, fe, le]),
    scrollProgress: Ue,
    scrollSnapList: ie.map(Ue.get),
    scrollSnaps: ie,
    scrollTarget: we,
    scrollTo: Le,
    slideLooper: XM(z, W, Z, ge, K, R, ae, ie, fe, n),
    slideFocus: Ne,
    slidesHandler: QM(t, s, $),
    slidesInView: gn,
    slideIndexes: V,
    slideRegistry: Et,
    slidesToScroll: X,
    target: le,
    translate: t0(z, W, t)
  };
  return Se;
}
function rD(e) {
  const t = 16.666666666666668;
  let n = [], r = null, o = 0, a = 0;
  function s(d) {
    r || (r = d);
    const p = d - r;
    for (r = d, o += p; o >= t; )
      n.forEach(({
        animation: v
      }) => v.update()), o -= t;
    const m = it(o / t);
    n.forEach(({
      animation: v
    }) => v.render(m)), a && e.requestAnimationFrame(s);
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
function oD() {
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
const aD = {
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
function sD(e) {
  function t(a, s) {
    return Qx(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = Ma(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, l) => t(c, l), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => Ma(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function iD(e) {
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
function ko(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = sD(o), s = iD(a), i = Da(), c = Da(), l = oD(), {
    animationRealms: u
  } = ko, {
    mergeOptions: d,
    optionsAtMedia: p,
    optionsMediaQueries: m
  } = a, {
    on: v,
    off: h,
    emit: g
  } = l, x = Z;
  let b = !1, y, _ = d(aD, ko.globalOptions), $ = d(_), N = [], k, S, P;
  function Y() {
    const {
      container: de,
      slides: he
    } = $;
    S = (nu(de) ? e.querySelector(de) : de) || e.children[0];
    const O = nu(he) ? S.querySelectorAll(he) : he;
    P = [].slice.call(O || S.children);
  }
  function W(de, he) {
    const ye = nD(e, S, P, r, o, de, l, he);
    if (de.loop && !ye.slideLooper.canLoop()) {
      const O = Object.assign({}, de, {
        loop: !1
      });
      return W(O, he);
    }
    return ye;
  }
  function z(de, he) {
    if (b)
      return;
    const ye = u.find((U) => U.window === o), O = ye || rD(o);
    ye || u.push(O), _ = d(_, de), $ = p(_), N = he || N, Y(), y = W($, O), m([_, ...N.map(({
      options: U
    }) => U)]).forEach((U) => i.add(U, "change", Z)), $.active && (y.translate.to(y.location.get()), y.slidesInView.init(), y.slideFocus.init(), y.eventHandler.init(V), y.resizeHandler.init(V), y.slidesHandler.init(V), c.add(r, "visibilitychange", () => {
      r.hidden && O.reset();
    }), y.options.loop && y.slideLooper.loop(), S.offsetParent && P.length && y.dragHandler.init(V), k = s.init(V, N));
  }
  function Z(de, he) {
    const ye = ae();
    q(), z(d({
      startIndex: ye
    }, de), he), l.emit("reInit");
  }
  function q() {
    y.dragHandler.destroy(), y.animation.stop(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), s.destroy(), i.clear(), c.clear();
  }
  function j() {
    b || (b = !0, i.clear(), q(), l.emit("destroy"));
  }
  function L(de, he, ye) {
    !$.active || b || (y.scrollBody.useBaseFriction().useDuration(he === !0 ? 0 : $.duration), y.scrollTo.index(de, ye || 0));
  }
  function I(de) {
    const he = y.index.add(1).get();
    L(he, de, -1);
  }
  function K(de) {
    const he = y.index.add(-1).get();
    L(he, de, 1);
  }
  function R() {
    return y.index.add(1).get() !== ae();
  }
  function T() {
    return y.index.add(-1).get() !== ae();
  }
  function B() {
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
    canScrollPrev: T,
    containerNode: H,
    internalEngine: ie,
    destroy: j,
    off: h,
    on: v,
    emit: g,
    plugins: oe,
    previousScrollSnap: ne,
    reInit: x,
    rootNode: pe,
    scrollNext: I,
    scrollPrev: K,
    scrollProgress: X,
    scrollSnapList: B,
    scrollTo: L,
    selectedScrollSnap: ae,
    slideNodes: re,
    slidesInView: ge,
    slidesNotInView: be
  };
  return z(t, n), setTimeout(() => l.emit("init"), 0), V;
}
ko.animationRealms = [];
ko.globalOptions = void 0;
function Ad(e = {}, t = []) {
  const n = G(e), r = G(t), [o, a] = J(), [s, i] = J(), c = ve(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return ee(() => {
    if (TM() && s) {
      ko.globalOptions = Ad.globalOptions;
      const l = ko(s, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [s, a]), ee(() => {
    kd(n.current, e) || (n.current = e, c());
  }, [e, c]), ee(() => {
    OM(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
Ad.globalOptions = void 0;
const n0 = C.createContext(null);
function pc() {
  const e = C.useContext(n0);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const cD = C.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, l] = Ad(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [u, d] = C.useState(!1), [p, m] = C.useState(!1), v = C.useCallback((b) => {
      b && (d(b.canScrollPrev()), m(b.canScrollNext()));
    }, []), h = C.useCallback(() => {
      l == null || l.scrollPrev();
    }, [l]), g = C.useCallback(() => {
      l == null || l.scrollNext();
    }, [l]), x = C.useCallback(
      (b) => {
        b.key === "ArrowLeft" ? (b.preventDefault(), h()) : b.key === "ArrowRight" && (b.preventDefault(), g());
      },
      [h, g]
    );
    return C.useEffect(() => {
      !l || !n || n(l);
    }, [l, n]), C.useEffect(() => {
      if (l)
        return v(l), l.on("reInit", v), l.on("select", v), () => {
          l == null || l.off("select", v);
        };
    }, [l, v]), /* @__PURE__ */ f.exports.jsx(
      n0.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: h,
          scrollNext: g,
          canScrollPrev: u,
          canScrollNext: p
        },
        children: /* @__PURE__ */ f.exports.jsx(
          "div",
          {
            ref: i,
            onKeyDownCapture: x,
            className: A("relative", o),
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
cD.displayName = "Carousel";
const lD = C.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = pc();
  return /* @__PURE__ */ f.exports.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      ref: n,
      className: A(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
lD.displayName = "CarouselContent";
const uD = C.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = pc();
  return /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: A(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
uD.displayName = "CarouselItem";
const dD = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = pc();
  return /* @__PURE__ */ f.exports.jsxs(
    Fe,
    {
      ref: o,
      variant: t,
      size: n,
      className: A(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ f.exports.jsx(dy, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
dD.displayName = "CarouselPrevious";
const fD = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = pc();
  return /* @__PURE__ */ f.exports.jsxs(
    Fe,
    {
      ref: o,
      variant: t,
      size: n,
      className: A(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ f.exports.jsx(fy, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
fD.displayName = "CarouselNext";
var r0 = E.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
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
} }), Id = () => E.useContext(r0);
function pD(e, { insertAt: t } = {}) {
  if (!e || typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
pD(`[vaul-drawer]{touch-action:none;transform:translate3d(0,100%,0);transition:transform .5s cubic-bezier(.32,.72,0,1)}.vaul-dragging .vaul-scrollable{overflow-y:hidden!important}[vaul-drawer][vaul-drawer-visible=true]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;top:100%;background:inherit;background-color:inherit;left:0;right:0;height:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var mD = typeof window < "u" ? Ra : ee;
function ru(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function vD() {
  return Ld(/^Mac/);
}
function hD() {
  return Ld(/^iPhone/);
}
function gD() {
  return Ld(/^iPad/) || vD() && navigator.maxTouchPoints > 1;
}
function o0() {
  return hD() || gD();
}
function Ld(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var dl = typeof document < "u" && window.visualViewport;
function Kp(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function a0(e) {
  for (Kp(e) && (e = e.parentElement); e && !Kp(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var bD = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), $s = 0, fl;
function xD(e = {}) {
  let { isDisabled: t } = e;
  mD(() => {
    if (!t)
      return $s++, $s === 1 && (o0() ? fl = wD() : fl = yD()), () => {
        $s--, $s === 0 && fl();
      };
  }, [t]);
}
function yD() {
  return ru(gi(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), gi(document.documentElement, "overflow", "hidden"));
}
function wD() {
  let e, t = 0, n = (d) => {
    e = a0(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY);
  }, r = (d) => {
    if (!e || e === document.documentElement || e === document.body) {
      d.preventDefault();
      return;
    }
    let p = d.changedTouches[0].pageY, m = e.scrollTop, v = e.scrollHeight - e.clientHeight;
    v !== 0 && ((m <= 0 && p > t || m >= v && p < t) && d.preventDefault(), t = p);
  }, o = (d) => {
    let p = d.target;
    bi(p) && p !== document.activeElement && (d.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (d) => {
    let p = d.target;
    bi(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", dl && (dl.height < window.innerHeight ? requestAnimationFrame(() => {
        Gp(p);
      }) : dl.addEventListener("resize", () => Gp(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, l = ru(gi(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), gi(document.documentElement, "overflow", "hidden"));
  window.scrollTo(0, 0);
  let u = ru(oa(document, "touchstart", n, { passive: !1, capture: !0 }), oa(document, "touchmove", r, { passive: !1, capture: !0 }), oa(document, "touchend", o, { passive: !1, capture: !0 }), oa(document, "focus", a, !0), oa(window, "scroll", s));
  return () => {
    l(), u(), window.scrollTo(i, c);
  };
}
function gi(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function oa(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Gp(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = a0(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function bi(e) {
  return e instanceof HTMLInputElement && !bD.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function $D(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function _D(...e) {
  return (t) => e.forEach((n) => $D(n, t));
}
function s0(...e) {
  return C.useCallback(_D(...e), e);
}
var or = null;
function CD({ isOpen: e, modal: t, nested: n, hasBeenOpened: r }) {
  let [o, a] = E.useState(typeof window < "u" ? window.location.href : ""), s = E.useRef(0);
  function i() {
    if (or === null && e) {
      or = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: l, innerHeight: u } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-s.current}px`, document.body.style.left = `${-l}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let d = u - window.innerHeight;
        d && s.current >= u && (document.body.style.top = `${-(s.current + d)}px`);
      }), 300);
    }
  }
  function c() {
    if (or !== null) {
      let l = -parseInt(document.body.style.top, 10), u = -parseInt(document.body.style.left, 10);
      document.body.style.position = or.position, document.body.style.top = or.top, document.body.style.left = or.left, document.body.style.height = or.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (o !== window.location.href) {
          a(window.location.href);
          return;
        }
        window.scrollTo(u, l);
      }), or = null;
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
var i0 = /* @__PURE__ */ new WeakMap();
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
  }), !n && i0.set(e, r);
}
function _s(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = i0.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
function Cs(e) {
  let t = window.getComputedStyle(e), n = t.transform || t.webkitTransform || t.mozTransform, r = n.match(/^matrix3d\((.+)\)$/);
  return r ? parseFloat(r[1].split(", ")[13]) : (r = n.match(/^matrix\((.+)\)$/), r ? parseFloat(r[1].split(", ")[5]) : null);
}
function SD(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var et = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, c0 = 0.4;
function l0(e) {
  let t = E.useRef(e);
  return E.useEffect(() => {
    t.current = e;
  }), E.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function ED({ defaultProp: e, onChange: t }) {
  let n = E.useState(e), [r] = n, o = E.useRef(r), a = l0(t);
  return E.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function ND({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = ED({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = l0(n), c = E.useCallback((l) => {
    if (a) {
      let u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
    } else
      o(l);
  }, [a, e, o, i]);
  return [s, c];
}
function PD({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s }) {
  let [i, c] = ND({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), l = E.useMemo(() => i === (n == null ? void 0 : n[n.length - 1]), [n, i]), u = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === i || !n, d = E.useMemo(() => {
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
  }, [n]), m = E.useMemo(() => d !== null ? p == null ? void 0 : p[d] : null, [p, d]), v = E.useCallback((b) => {
    var y;
    let _ = (y = p == null ? void 0 : p.findIndex(($) => $ === b)) != null ? y : null;
    s(_), lt(r.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `translate3d(0, ${b}px, 0)` }), p && _ !== p.length - 1 && _ !== a ? lt(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "0" }) : lt(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), c(_ !== null ? n == null ? void 0 : n[_] : null);
  }, [r.current, n, p, a, o, c]);
  E.useEffect(() => {
    var b;
    if (e) {
      let y = (b = n == null ? void 0 : n.findIndex((_) => _ === e)) != null ? b : null;
      p && y && typeof p[y] == "number" && v(p[y]);
    }
  }, [e, n, p, v]);
  function h({ draggedDistance: b, closeDrawer: y, velocity: _, dismissible: $ }) {
    if (a === void 0)
      return;
    let N = m - b, k = d === a - 1, S = d === 0, P = b > 0;
    if (k && lt(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), _ > 2 && !P) {
      $ ? y() : v(p[0]);
      return;
    }
    if (_ > 2 && P && p && n) {
      v(p[n.length - 1]);
      return;
    }
    let Y = p == null ? void 0 : p.reduce((W, z) => typeof W != "number" || typeof z != "number" ? W : Math.abs(z - N) < Math.abs(W - N) ? z : W);
    if (_ > c0 && Math.abs(b) < window.innerHeight * 0.4) {
      let W = P ? 1 : -1;
      if (W > 0 && l) {
        v(p[n.length - 1]);
        return;
      }
      if (S && W < 0 && $ && y(), d === null)
        return;
      v(p[d + W]);
      return;
    }
    v(Y);
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
  return { isLastSnapPoint: l, activeSnapPoint: i, shouldFade: u, getPercentageDragged: x, setActiveSnapPoint: c, activeSnapPointIndex: d, onRelease: h, onDrag: g, snapPointsOffset: p };
}
var TD = 0.25, OD = 100, qp = 8, Pr = 16, Zp = 26, Xp = "vaul-dragging";
function u0({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i, closeThreshold: c = TD, scrollLockTimeout: l = OD, dismissible: u = !0, fadeFromIndex: d = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: v, modal: h = !0, onClose: g }) {
  var x;
  let [b = !1, y] = E.useState(!1), [_, $] = E.useState(!1), [N, k] = E.useState(!1), [S, P] = E.useState(!1), [Y, W] = E.useState(!1), [z, Z] = E.useState(!1), q = E.useRef(null), j = E.useRef(null), L = E.useRef(null), I = E.useRef(null), K = E.useRef(null), R = E.useRef(!1), T = E.useRef(null), B = E.useRef(0), X = E.useRef(!1), ae = E.useRef(0), ne = E.useRef(null), ge = E.useRef(((x = ne.current) == null ? void 0 : x.getBoundingClientRect().height) || 0), be = E.useRef(0), oe = E.useCallback((Ne) => {
    s && Ne === V.length - 1 && (j.current = new Date());
  }, []), { activeSnapPoint: ie, activeSnapPointIndex: pe, setActiveSnapPoint: H, onRelease: re, snapPointsOffset: V, onDrag: de, shouldFade: he, getPercentageDragged: ye } = PD({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: m, drawerRef: ne, fadeFromIndex: d, overlayRef: q, onSnapPointChange: oe });
  xD({ isDisabled: !b || Y || !h || z || !_ });
  let { restorePositionSetting: O } = CD({ isOpen: b, modal: h, nested: i, hasBeenOpened: _ });
  function U() {
    return (window.innerWidth - Zp) / window.innerWidth;
  }
  function Q(Ne) {
    var Se;
    !u && !s || ne.current && !ne.current.contains(Ne.target) || (ge.current = ((Se = ne.current) == null ? void 0 : Se.getBoundingClientRect().height) || 0, W(!0), L.current = new Date(), o0() && window.addEventListener("touchend", () => R.current = !1, { once: !0 }), Ne.target.setPointerCapture(Ne.pointerId), B.current = Ne.screenY);
  }
  function fe(Ne, Se) {
    var Re;
    let He = Ne, tt = (Re = window.getSelection()) == null ? void 0 : Re.toString(), nt = ne.current ? Cs(ne.current) : null, Ot = new Date();
    if (j.current && Ot.getTime() - j.current.getTime() < 500)
      return !1;
    if (nt > 0)
      return !0;
    if (tt && tt.length > 0)
      return !1;
    if (K.current && Ot.getTime() - K.current.getTime() < l && nt === 0 || Se)
      return K.current = Ot, !1;
    for (; He; ) {
      if (He.scrollHeight > He.clientHeight) {
        if (He.scrollTop !== 0)
          return K.current = new Date(), !1;
        if (He.getAttribute("role") === "dialog")
          return !0;
      }
      He = He.parentNode;
    }
    return !0;
  }
  function le(Ne) {
    if (Y) {
      let Se = B.current - Ne.screenY, Re = Se > 0;
      if (s && pe === 0 && !u || !R.current && !fe(Ne.target, Re))
        return;
      if (ne.current.classList.add(Xp), R.current = !0, lt(ne.current, { transition: "none" }), lt(q.current, { transition: "none" }), s && de({ draggedDistance: Se }), Re && !s) {
        let zt = SD(Se);
        lt(ne.current, { transform: `translate3d(0, ${Math.min(zt * -1, 0)}px, 0)` });
        return;
      }
      let He = Math.abs(Se), tt = document.querySelector("[vaul-drawer-wrapper]"), nt = He / ge.current, Ot = ye(He, Re);
      Ot !== null && (nt = Ot);
      let Nr = 1 - nt;
      if ((he || d && pe === d - 1) && (o == null || o(Ne, nt), lt(q.current, { opacity: `${Nr}`, transition: "none" }, !0)), tt && q.current && r) {
        let zt = Math.min(U() + nt * (1 - U()), 1), er = 8 - nt * 8, Jr = Math.max(0, 14 - nt * 14);
        lt(tt, { borderRadius: `${er}px`, transform: `scale(${zt}) translate3d(0, ${Jr}px, 0)`, transition: "none" }, !0);
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
      if (bi(He) || X.current) {
        let tt = ((Re = window.visualViewport) == null ? void 0 : Re.height) || 0, nt = window.innerHeight - tt, Ot = ne.current.getBoundingClientRect().height || 0;
        be.current || (be.current = Ot);
        let Nr = ne.current.getBoundingClientRect().top;
        if (Math.abs(ae.current - nt) > 60 && (X.current = !X.current), s && s.length > 0 && V && pe) {
          let zt = V[pe] || 0;
          nt += zt;
        }
        if (ae.current = nt, Ot > tt || X.current) {
          let zt = ne.current.getBoundingClientRect().height, er = zt;
          zt > tt && (er = tt - Zp), v ? ne.current.style.height = `${zt - Math.max(nt, 0)}px` : ne.current.style.height = `${Math.max(er, tt - Nr)}px`;
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
    ne.current && (g == null || g(), lt(ne.current, { transform: "translate3d(0, 100%, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), lt(q.current, { opacity: "0", transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), Ue(!1), setTimeout(() => {
      k(!1), y(!1);
    }, 300), setTimeout(() => {
      s && H(s[0]);
    }, et.DURATION * 1e3));
  }
  E.useEffect(() => {
    if (!b && r) {
      let Ne = setTimeout(() => {
        _s(document.body);
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
    let Ne = document.querySelector("[vaul-drawer-wrapper]"), Se = Cs(ne.current);
    lt(ne.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), lt(q.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), r && Se && Se > 0 && b && lt(Ne, { borderRadius: `${qp}px`, overflow: "hidden", transform: `scale(${U()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` }, !0);
  }
  function Le(Ne) {
    var Se;
    if (!Y || !ne.current)
      return;
    R.current && bi(Ne.target) && Ne.target.blur(), ne.current.classList.remove(Xp), R.current = !1, W(!1), I.current = new Date();
    let Re = Cs(ne.current);
    if (!fe(Ne.target, !1) || !Re || Number.isNaN(Re) || L.current === null)
      return;
    let He = I.current.getTime() - L.current.getTime(), tt = B.current - Ne.screenY, nt = Math.abs(tt) / He;
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
    if (nt > c0) {
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
    b && (j.current = new Date(), Ue(!0));
  }, [b]), E.useEffect(() => {
    N && ne.current.querySelectorAll("*").forEach((Ne) => {
      let Se = Ne;
      (Se.scrollHeight > Se.clientHeight || Se.scrollWidth > Se.clientWidth) && Se.classList.add("vaul-scrollable");
    });
  }, [N]);
  function Ue(Ne) {
    let Se = document.querySelector("[vaul-drawer-wrapper]");
    !Se || !r || (Ne ? (lt(document.body, { background: "black" }, !0), lt(Se, { borderRadius: `${qp}px`, overflow: "hidden", transform: `scale(${U()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })) : (_s(Se, "overflow"), _s(Se, "transform"), _s(Se, "borderRadius"), lt(Se, { transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })));
  }
  function yt(Ne) {
    let Se = Ne ? (window.innerWidth - Pr) / window.innerWidth : 1, Re = Ne ? -Pr : 0;
    T.current && window.clearTimeout(T.current), lt(ne.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Se}) translate3d(0, ${Re}px, 0)` }), !Ne && ne.current && (T.current = setTimeout(() => {
      lt(ne.current, { transition: "none", transform: `translate3d(0, ${Cs(ne.current)}px, 0)` });
    }, 500));
  }
  function gn(Ne, Se) {
    if (Se < 0)
      return;
    let Re = (window.innerWidth - Pr) / window.innerWidth, He = Re + Se * (1 - Re), tt = -Pr + Se * Pr;
    lt(ne.current, { transform: `scale(${He}) translate3d(0, ${tt}px, 0)`, transition: "none" });
  }
  function Et(Ne, Se) {
    let Re = Se ? (window.innerWidth - Pr) / window.innerWidth : 1, He = Se ? -Pr : 0;
    Se && lt(ne.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Re}) translate3d(0, ${He}px, 0)` });
  }
  return E.createElement(Wi, { modal: h, onOpenChange: (Ne) => {
    if (e !== void 0) {
      t == null || t(Ne);
      return;
    }
    Ne ? ($(!0), y(Ne)) : se();
  }, open: b }, E.createElement(r0.Provider, { value: { visible: N, activeSnapPoint: ie, snapPoints: s, setActiveSnapPoint: H, drawerRef: ne, overlayRef: q, scaleBackground: Ue, onOpenChange: t, onPress: Q, setVisible: k, onRelease: Le, onDrag: le, dismissible: u, isOpen: b, shouldFade: he, closeDrawer: se, onNestedDrag: gn, onNestedOpenChange: yt, onNestedRelease: Et, keyboardIsOpen: X, openProp: e, modal: h, snapPointsOffset: V } }, n));
}
var d0 = E.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = Id(), l = s0(n, r), u = o && o.length > 0;
  return E.createElement(Lo, { onMouseUp: a, ref: l, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
d0.displayName = "Drawer.Overlay";
var f0 = E.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: l, dismissible: u, keyboardIsOpen: d, snapPointsOffset: p, visible: m, closeDrawer: v, modal: h, openProp: g, onOpenChange: x, setVisible: b } = Id(), y = s0(a, s);
  return E.useEffect(() => {
    b(!0);
  }, []), E.createElement(Fo, { onOpenAutoFocus: (_) => {
    e ? e(_) : (_.preventDefault(), s.current.focus());
  }, onPointerDown: i, onPointerDownOutside: (_) => {
    if (t == null || t(_), !h) {
      _.preventDefault();
      return;
    }
    d.current && (d.current = !1), _.preventDefault(), x == null || x(!1), !(!u || g !== void 0) && v();
  }, onPointerMove: l, onPointerUp: c, ref: y, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-visible": m ? "true" : "false" });
});
f0.displayName = "Drawer.Content";
function kD({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = Id();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return E.createElement(u0, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var hn = { Root: u0, NestedRoot: kD, Content: f0, Overlay: d0, Trigger: Ui, Portal: zi, Close: qr, Title: Vo, Description: Wo };
const MD = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  hn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
MD.displayName = "Drawer";
const QR = hn.Trigger, DD = hn.Portal, JR = hn.Close, p0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hn.Overlay,
  {
    ref: n,
    className: A("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
p0.displayName = hn.Overlay.displayName;
const RD = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(DD, { children: [
  /* @__PURE__ */ f.exports.jsx(p0, {}),
  /* @__PURE__ */ f.exports.jsxs(
    hn.Content,
    {
      ref: r,
      className: A(
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
RD.displayName = "DrawerContent";
const jD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: A("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
jD.displayName = "DrawerHeader";
const AD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: A("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
AD.displayName = "DrawerFooter";
const ID = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hn.Title,
  {
    ref: n,
    className: A(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ID.displayName = hn.Title.displayName;
const LD = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hn.Description,
  {
    ref: n,
    className: A("text-sm text-muted-foreground", e),
    ...t
  }
));
LD.displayName = hn.Description.displayName;
var FD = Object.defineProperty, VD = Object.defineProperties, WD = Object.getOwnPropertyDescriptors, xi = Object.getOwnPropertySymbols, m0 = Object.prototype.hasOwnProperty, v0 = Object.prototype.propertyIsEnumerable, Qp = (e, t, n) => t in e ? FD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, UD = (e, t) => {
  for (var n in t || (t = {}))
    m0.call(t, n) && Qp(e, n, t[n]);
  if (xi)
    for (var n of xi(t))
      v0.call(t, n) && Qp(e, n, t[n]);
  return e;
}, zD = (e, t) => VD(e, WD(t)), BD = (e, t) => {
  var n = {};
  for (var r in e)
    m0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && xi)
    for (var r of xi(e))
      t.indexOf(r) < 0 && v0.call(e, r) && (n[r] = e[r]);
  return n;
}, HD = "^\\d+$";
function YD(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
var KD = 18, GD = "40px", qD = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function ZD({ inputRef: e, pwmAreaRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let o = C.useRef({ done: !1, refocused: !1 }), [a, s] = C.useState(!1), [i, c] = C.useState(!1), [l, u] = C.useState(!1), d = C.useMemo(() => n === "none" ? !1 : n === "increase-width" && a && i || n === "experimental-no-flickering" && (!l || l && i && a), [l, a, i, n]), p = C.useCallback(() => {
    let m = e.current, v = t.current;
    if (!m || !v || l || n === "none")
      return;
    let h = n === "increase-width" ? m : v, g = h.getBoundingClientRect().left + h.offsetWidth, x = h.getBoundingClientRect().top + h.offsetHeight / 2, b = g - KD, y = x, _ = document.elementFromPoint(b, y);
    if ((document.querySelectorAll(qD).length > 0 || _ !== m) && (s(!0), u(!0), !o.current.refocused && document.activeElement === m)) {
      let $ = [m.selectionStart, m.selectionEnd];
      m.blur(), m.focus(), m.setSelectionRange($[0], $[1]), o.current.refocused = !0;
    }
  }, [l, e, n, t]);
  return C.useEffect(() => {
    let m = new IntersectionObserver((v) => {
      let h = v[0];
      c(h.intersectionRatio > 0.99);
    }, { threshold: 1, root: null, rootMargin: "0px" });
    return t.current && m.observe(t.current), () => {
      m.disconnect();
    };
  }, [t]), C.useEffect(() => {
    let m = r || document.activeElement === e.current;
    if (n === "none" || !m)
      return;
    let v = setTimeout(p, 0), h = setTimeout(p, 2e3), g = setTimeout(p, 5e3), x = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(v), clearTimeout(h), clearTimeout(g), clearTimeout(x);
    };
  }, [e, r, n, p]), { willPushPWMBadge: d, PWM_BADGE_SPACE_WIDTH: GD };
}
function XD(e) {
  let t = C.useRef();
  return C.useEffect(() => {
    t.current = e;
  }), t.current;
}
var h0 = C.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: s = "left", pattern: i = HD, inputMode: c = "numeric", onComplete: l, pushPasswordManagerStrategy: u = "increase-width", render: d, containerClassName: p, noScriptCSSFallback: m = QD } = n, v = BD(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "render", "containerClassName", "noScriptCSSFallback"]), h, g, x, b;
  let [y, _] = C.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), $ = r ?? y, N = XD($), k = C.useCallback((H) => {
    o == null || o(H), _(H);
  }, [o]), S = C.useMemo(() => i ? typeof i == "string" ? new RegExp(i) : i : null, [i]), P = C.useRef(null), Y = C.useRef(null), W = C.useRef(null), z = C.useRef({ value: $, onChange: k, isIOS: typeof window < "u" && ((h = window == null ? void 0 : window.CSS) == null ? void 0 : h.supports("-webkit-touch-callout", "none")) }), Z = C.useRef({ prev: [(g = P.current) == null ? void 0 : g.selectionStart, (x = P.current) == null ? void 0 : x.selectionEnd, (b = P.current) == null ? void 0 : b.selectionDirection] });
  C.useImperativeHandle(t, () => P.current, []), C.useEffect(() => {
    let H = P.current, re = Y.current;
    if (!H || !re)
      return;
    z.current.value !== H.value && z.current.onChange(H.value), Z.current.prev = [H.selectionStart, H.selectionEnd, H.selectionDirection];
    function V() {
      if (document.activeElement !== H) {
        R(null), B(null);
        return;
      }
      let ye = H.selectionStart, O = H.selectionEnd, U = H.selectionDirection, Q = H.maxLength, fe = H.value, le = Z.current.prev, se = -1, we = -1, Le;
      if (fe.length !== 0 && ye !== null && O !== null) {
        let Et = ye === O, Ne = ye === fe.length && fe.length < Q;
        if (Et && !Ne) {
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
      let Ue = se !== -1 ? se : ye, yt = we !== -1 ? we : O, gn = Le ?? U;
      R(Ue), B(yt), Z.current.prev = [Ue, yt, gn];
    }
    if (document.addEventListener("selectionchange", V, { capture: !0 }), V(), document.activeElement === H && I(!0), !document.getElementById("input-otp-style")) {
      let ye = document.createElement("style");
      if (ye.id = "input-otp-style", document.head.appendChild(ye), ye.sheet) {
        let O = "background: transparent !important; text: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        aa(ye.sheet, "[data-input-otp]::selection { background: transparent !important; }"), aa(ye.sheet, `[data-input-otp]:autofill { ${O} }`), aa(ye.sheet, `[data-input-otp]:-webkit-autofill { ${O} }`), aa(ye.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), aa(ye.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let de = () => {
      re && re.style.setProperty("--root-height", `${H.clientHeight}px`);
    };
    de();
    let he = new ResizeObserver(de);
    return he.observe(H), () => {
      document.removeEventListener("selectionchange", V, { capture: !0 }), he.disconnect();
    };
  }, []);
  let [q, j] = C.useState(!1), [L, I] = C.useState(!1), [K, R] = C.useState(null), [T, B] = C.useState(null);
  C.useEffect(() => {
    YD(() => {
      var H, re, V, de;
      (H = P.current) == null || H.dispatchEvent(new Event("input"));
      let he = (re = P.current) == null ? void 0 : re.selectionStart, ye = (V = P.current) == null ? void 0 : V.selectionEnd, O = (de = P.current) == null ? void 0 : de.selectionDirection;
      he !== null && ye !== null && (R(he), B(ye), Z.current.prev = [he, ye, O]);
    });
  }, [$, L]), C.useEffect(() => {
    N !== void 0 && $ !== N && N.length < a && $.length === a && (l == null || l($));
  }, [a, l, N, $]);
  let X = ZD({ inputRef: P, pwmAreaRef: W, pushPasswordManagerStrategy: u, isFocused: L }), ae = C.useCallback((H) => {
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
      (H = P.current) == null || H.setSelectionRange(re, V), R(re), B(V);
    }
    I(!0);
  }, [a]), ge = C.useCallback((H) => {
    var re, V;
    let de = P.current;
    if (!z.current.isIOS || !H.clipboardData || !de)
      return;
    let he = H.clipboardData.getData("text/plain");
    H.preventDefault();
    let ye = (re = P.current) == null ? void 0 : re.selectionStart, O = (V = P.current) == null ? void 0 : V.selectionEnd, U = (ye !== O ? $.slice(0, ye) + he + $.slice(O) : $.slice(0, ye) + he + $.slice(ye)).slice(0, a);
    if (U.length > 0 && S && !S.test(U))
      return;
    de.value = U, k(U);
    let Q = Math.min(U.length, a - 1), fe = U.length;
    de.setSelectionRange(Q, fe), R(Q), B(fe);
  }, [a, k, S, $]), be = C.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), oe = C.useMemo(() => ({ position: "absolute", inset: 0, width: X.willPushPWMBadge ? `calc(100% + ${X.PWM_BADGE_SPACE_WIDTH})` : "100%", height: "100%", display: "flex", textAlign: s, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [X.PWM_BADGE_SPACE_WIDTH, X.willPushPWMBadge, s]), ie = C.useMemo(() => C.createElement("input", zD(UD({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-mss": K, "data-input-otp-mse": T, inputMode: c, pattern: S == null ? void 0 : S.source, style: oe, maxLength: a, value: $, ref: P, onPaste: (H) => {
    var re;
    ge(H), (re = v.onPaste) == null || re.call(v, H);
  }, onChange: ae, onMouseOver: (H) => {
    var re;
    j(!0), (re = v.onMouseOver) == null || re.call(v, H);
  }, onMouseLeave: (H) => {
    var re;
    j(!1), (re = v.onMouseLeave) == null || re.call(v, H);
  }, onFocus: (H) => {
    var re;
    ne(), (re = v.onFocus) == null || re.call(v, H);
  }, onBlur: (H) => {
    var re;
    I(!1), (re = v.onBlur) == null || re.call(v, H);
  } })), [ae, ne, ge, c, oe, a, T, K, v, S == null ? void 0 : S.source, $]), pe = C.useMemo(() => d({ slots: Array.from({ length: a }).map((H, re) => {
    let V = L && K !== null && T !== null && (K === T && re === K || re >= K && re < T), de = $[re] !== void 0 ? $[re] : null;
    return { char: de, isActive: V, hasFakeCaret: V && de === null };
  }), isFocused: L, isHovering: !v.disabled && q }), [L, q, a, T, K, v.disabled, d, $]);
  return C.createElement(C.Fragment, null, m !== null && C.createElement("noscript", null, C.createElement("style", null, m)), C.createElement("div", { ref: Y, "data-input-otp-container": !0, style: be, className: p }, C.createElement("div", { ref: W, style: { position: "absolute", top: 0, right: `calc(-1 * ${X.PWM_BADGE_SPACE_WIDTH})`, bottom: 0, left: "100%", pointerEvents: "none", userSelect: "none", background: "transparent" } }), pe, C.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, ie)));
});
h0.displayName = "Input";
function aa(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var QD = `
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
const JD = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  h0,
  {
    ref: n,
    containerClassName: A("flex items-center gap-2", e),
    ...t
  }
));
JD.displayName = "InputOTP";
const e8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: A("flex items-center", e), ...t }));
e8.displayName = "InputOTPGroup";
const t8 = C.forwardRef(({ char: e, hasFakeCaret: t, isActive: n, className: r, ...o }, a) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ref: a,
    className: A(
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
t8.displayName = "InputOTPSlot";
const n8 = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ f.exports.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ f.exports.jsx(py, {}) }));
n8.displayName = "InputOTPSeparator";
const r8 = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ f.exports.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
r8.displayName = "Breadcrumb";
const o8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "ol",
  {
    ref: n,
    className: A(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
o8.displayName = "BreadcrumbList";
const a8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "li",
  {
    ref: n,
    className: A("inline-flex items-center gap-1.5", e),
    ...t
  }
));
a8.displayName = "BreadcrumbItem";
const s8 = C.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? cn : "a";
  return /* @__PURE__ */ f.exports.jsx(
    o,
    {
      ref: r,
      className: A("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
s8.displayName = "BreadcrumbLink";
const i8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: A("font-normal text-foreground", e),
    ...t
  }
));
i8.displayName = "BreadcrumbPage";
const c8 = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ f.exports.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: A("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ f.exports.jsx(xr, {})
  }
);
c8.displayName = "BreadcrumbSeparator";
const l8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: A("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(cm, { className: "h-4 w-4" }),
      /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
l8.displayName = "BreadcrumbElipssis";
const u8 = ({ className: e, ...t }) => /* @__PURE__ */ f.exports.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: A("mx-auto flex w-full justify-center", e),
    ...t
  }
);
u8.displayName = "Pagination";
const d8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "ul",
  {
    ref: n,
    className: A("flex flex-row items-center gap-1", e),
    ...t
  }
));
d8.displayName = "PaginationContent";
const f8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("li", { ref: n, className: A("", e), ...t }));
f8.displayName = "PaginationItem";
const Fd = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ f.exports.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: A(
      wo({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
Fd.displayName = "PaginationLink";
const p8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsxs(
  Fd,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: A("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx($i, { className: "h-4 w-4" }),
      /* @__PURE__ */ f.exports.jsx("span", { children: "Previous" })
    ]
  }
);
p8.displayName = "PaginationPrevious";
const m8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsxs(
  Fd,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: A("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { children: "Next" }),
      /* @__PURE__ */ f.exports.jsx(xr, { className: "h-4 w-4" })
    ]
  }
);
m8.displayName = "PaginationNext";
const v8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: A("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(cm, { className: "h-4 w-4" }),
      /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
v8.displayName = "PaginationEllipsis";
const ej = ({ children: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: "app-layout", children: e });
export {
  iR as Accordion,
  l6 as AccordionContent,
  i6 as AccordionItem,
  c6 as AccordionTrigger,
  oR as AlertDialog,
  RT as AlertDialogAction,
  jT as AlertDialogCancel,
  TT as AlertDialogContent,
  DT as AlertDialogDescription,
  kT as AlertDialogFooter,
  OT as AlertDialogHeader,
  Fg as AlertDialogOverlay,
  PT as AlertDialogPortal,
  MT as AlertDialogTitle,
  aR as AlertDialogTrigger,
  ej as AppLayout,
  Q8 as AspectRatio,
  mo as Avatar,
  vo as AvatarFallback,
  Dr as AvatarImage,
  Rt as Badge,
  KR as BottomNavigation,
  r8 as Breadcrumb,
  l8 as BreadcrumbEllipsis,
  a8 as BreadcrumbItem,
  s8 as BreadcrumbLink,
  o8 as BreadcrumbList,
  i8 as BreadcrumbPage,
  c8 as BreadcrumbSeparator,
  Fe as Button,
  Xo as CI_TYPES,
  N$ as Calendar,
  Th as Card,
  cN as CardContent,
  iN as CardDescription,
  lN as CardFooter,
  aN as CardHeader,
  sN as CardTitle,
  cD as Carousel,
  lD as CarouselContent,
  uD as CarouselItem,
  fD as CarouselNext,
  dD as CarouselPrevious,
  Dh as Checkbox,
  UR as CodeVerification,
  cR as Collapsible,
  uR as CollapsibleContent,
  lR as CollapsibleTrigger,
  aM as ComboBox,
  YR as ComboxCheckbox,
  Hn as Command,
  X8 as CommandDialog,
  vr as CommandEmpty,
  dn as CommandGroup,
  mr as CommandInput,
  fn as CommandItem,
  Yo as CommandList,
  Ji as CommandSeparator,
  D5 as CommandShortcut,
  T8 as ContextMenu,
  tS as ContextMenuCheckboxItem,
  JC as ContextMenuContent,
  k8 as ContextMenuGroup,
  eS as ContextMenuItem,
  rS as ContextMenuLabel,
  M8 as ContextMenuPortal,
  R8 as ContextMenuRadioGroup,
  nS as ContextMenuRadioItem,
  oS as ContextMenuSeparator,
  aS as ContextMenuShortcut,
  D8 as ContextMenuSub,
  QC as ContextMenuSubContent,
  XC as ContextMenuSubTrigger,
  O8 as ContextMenuTrigger,
  XR as D4TCardsList,
  Zx as D4TImage,
  FR as D4TTable,
  ch as Dialog,
  I8 as DialogClose,
  Qu as DialogContent,
  QS as DialogDescription,
  ZS as DialogFooter,
  qS as DialogHeader,
  lh as DialogOverlay,
  GS as DialogPortal,
  XS as DialogTitle,
  A8 as DialogTrigger,
  MD as Drawer,
  JR as DrawerClose,
  RD as DrawerContent,
  LD as DrawerDescription,
  AD as DrawerFooter,
  jD as DrawerHeader,
  p0 as DrawerOverlay,
  DD as DrawerPortal,
  ID as DrawerTitle,
  QR as DrawerTrigger,
  B8 as DropdownMenu,
  YN as DropdownMenuCheckboxItem,
  BN as DropdownMenuContent,
  Y8 as DropdownMenuGroup,
  HN as DropdownMenuItem,
  GN as DropdownMenuLabel,
  K8 as DropdownMenuPortal,
  q8 as DropdownMenuRadioGroup,
  KN as DropdownMenuRadioItem,
  qN as DropdownMenuSeparator,
  ZN as DropdownMenuShortcut,
  G8 as DropdownMenuSub,
  zN as DropdownMenuSubContent,
  UN as DropdownMenuSubTrigger,
  H8 as DropdownMenuTrigger,
  Xv as Form,
  Ka as FormControl,
  Io as FormDescription,
  Kr as FormField,
  Cr as FormItem,
  Gr as FormLabel,
  SS as FormMessage,
  HR as GenericCombobox,
  VR as GenericSelect,
  pR as HoverCard,
  w6 as HoverCardContent,
  mR as HoverCardTrigger,
  Ju as Input,
  JD as InputOTP,
  e8 as InputOTPGroup,
  n8 as InputOTPSeparator,
  t8 as InputOTPSlot,
  L8 as InputPID,
  pa as InputUI,
  On as Label,
  vR as LoaderDots,
  K6 as Menubar,
  J6 as MenubarCheckboxItem,
  X6 as MenubarContent,
  bR as MenubarGroup,
  Q6 as MenubarItem,
  tO as MenubarLabel,
  gR as MenubarMenu,
  xR as MenubarPortal,
  wR as MenubarRadioGroup,
  eO as MenubarRadioItem,
  nO as MenubarSeparator,
  rO as MenubarShortcut,
  yR as MenubarSub,
  Z6 as MenubarSubContent,
  q6 as MenubarSubTrigger,
  G6 as MenubarTrigger,
  BR as MultipleImages,
  Nx as NavLink,
  r3 as NavLinkNested,
  OO as NavigationMenu,
  RO as NavigationMenuContent,
  jO as NavigationMenuIndicator,
  _R as NavigationMenuItem,
  CR as NavigationMenuLink,
  kO as NavigationMenuList,
  DO as NavigationMenuTrigger,
  Db as NavigationMenuViewport,
  hc as PHONE_LINE_CODES,
  u8 as Pagination,
  d8 as PaginationContent,
  v8 as PaginationEllipsis,
  f8 as PaginationItem,
  Fd as PaginationLink,
  m8 as PaginationNext,
  p8 as PaginationPrevious,
  zn as Popover,
  Cn as PopoverContent,
  Bn as PopoverTrigger,
  HO as Progress,
  ck as RadioGroup,
  lk as RadioGroupItem,
  eT as ScrollArea,
  Ng as ScrollBar,
  rd as Select,
  Gi as SelectContent,
  nN as SelectGroup,
  qi as SelectItem,
  rN as SelectLabel,
  oN as SelectSeparator,
  Ki as SelectTrigger,
  od as SelectValue,
  Ga as Separator,
  eR as Sheet,
  nR as SheetClose,
  rT as SheetContent,
  iT as SheetDescription,
  aT as SheetFooter,
  oT as SheetHeader,
  Pg as SheetOverlay,
  tT as SheetPortal,
  sT as SheetTitle,
  tR as SheetTrigger,
  RR as Sidebar,
  jR as SidebarContent,
  n3 as SidebarFooter,
  j4 as SidebarHeader,
  Pt as Skeleton,
  Dk as Slider,
  iu as Spinner,
  WR as SwatchesPicker,
  S4 as Switch,
  Og as TableBody,
  lT as TableCaption,
  ld as TableCell,
  cT as TableFooter,
  kg as TableHead,
  Tg as TableHeader,
  nc as TableRow,
  cd as TableUI,
  TR as Tabs,
  Yk as TabsContent,
  Bk as TabsList,
  Hk as TabsTrigger,
  V8 as TextArea,
  hh as TextareaUI,
  qk as Toggle,
  t3 as ToggleTheme,
  Kn as Tooltip,
  Sn as TooltipContent,
  Yn as TooltipProvider,
  Gn as TooltipTrigger,
  zR as UploadImage,
  F$ as badgeVariants,
  wo as buttonVariants,
  Ko as camelToSnake,
  A as cn,
  Is as convertBytes,
  vc as convertHexToRGBA,
  b8 as fetcher,
  w8 as formatCI,
  Uf as formatCITypes,
  S8 as formatCodePhoneLines,
  GR as formatListPagination,
  AR as formatPagination,
  C8 as formatPhone,
  _8 as formatPhoneNumber,
  $8 as formatRIF,
  Dp as generateUUID,
  ul as generateUUIDToList,
  y8 as getMultiOpacityColor,
  qR as initialListPagination,
  IR as initialPagination,
  LR as insertColumn,
  ZR as insertColumnList,
  mM as listCamelToSnake,
  MO as navigationMenuTriggerStyle,
  x8 as simulateFetch,
  Gk as toggleVariants,
  Vi as useFormField,
  lc as useSidebar
};
//# sourceMappingURL=index.es.js.map
