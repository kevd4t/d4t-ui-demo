import * as C from "react";
import S, { useCallback as ve, forwardRef as A, Children as Rt, isValidElement as ur, createElement as $, cloneElement as Oo, Fragment as Kt, createContext as ht, useContext as Xe, useState as te, useEffect as X, useRef as H, useMemo as _t, useLayoutEffect as ka, useReducer as bi, useDebugValue as V0, useImperativeHandle as W0 } from "react";
import * as U0 from "react-dom";
import xi, { flushSync as yi, createPortal as tm } from "react-dom";
var bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function z0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var f = { exports: {} }, zo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bd;
function B0() {
  if (Bd)
    return zo;
  Bd = 1;
  var e = S, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return zo.Fragment = n, zo.jsx = s, zo.jsxs = s, zo;
}
var Bo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hd;
function H0() {
  return Hd || (Hd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = S, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(M) {
      if (M === null || typeof M != "object")
        return null;
      var ce = h && M[h] || M[v];
      return typeof ce == "function" ? ce : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(M) {
      {
        for (var ce = arguments.length, xe = new Array(ce > 1 ? ce - 1 : 0), De = 1; De < ce; De++)
          xe[De - 1] = arguments[De];
        y("error", M, xe);
      }
    }
    function y(M, ce, xe) {
      {
        var De = b.ReactDebugCurrentFrame, Ye = De.getStackAddendum();
        Ye !== "" && (ce += "%s", xe = xe.concat([Ye]));
        var Je = xe.map(function(ze) {
          return String(ze);
        });
        Je.unshift("Warning: " + ce), Function.prototype.apply.call(console[M], console, Je);
      }
    }
    var _ = !1, w = !1, N = !1, k = !1, E = !1, T;
    T = Symbol.for("react.module.reference");
    function K(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === a || E || M === o || M === l || M === u || k || M === m || _ || w || N || typeof M == "object" && M !== null && (M.$$typeof === p || M.$$typeof === d || M.$$typeof === s || M.$$typeof === i || M.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === T || M.getModuleId !== void 0));
    }
    function U(M, ce, xe) {
      var De = M.displayName;
      if (De)
        return De;
      var Ye = ce.displayName || ce.name || "";
      return Ye !== "" ? xe + "(" + Ye + ")" : xe;
    }
    function B(M) {
      return M.displayName || "Context";
    }
    function Z(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
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
      if (typeof M == "object")
        switch (M.$$typeof) {
          case i:
            var ce = M;
            return B(ce) + ".Consumer";
          case s:
            var xe = M;
            return B(xe._context) + ".Provider";
          case c:
            return U(M, M.render, "ForwardRef");
          case d:
            var De = M.displayName || null;
            return De !== null ? De : Z(M.type) || "Memo";
          case p: {
            var Ye = M, Je = Ye._payload, ze = Ye._init;
            try {
              return Z(ze(Je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, I = 0, L, W, q, R, D, G, Q;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function ne() {
      {
        if (I === 0) {
          L = console.log, W = console.info, q = console.warn, R = console.error, D = console.group, G = console.groupCollapsed, Q = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        I++;
      }
    }
    function ge() {
      {
        if (I--, I === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, M, {
              value: L
            }),
            info: F({}, M, {
              value: W
            }),
            warn: F({}, M, {
              value: q
            }),
            error: F({}, M, {
              value: R
            }),
            group: F({}, M, {
              value: D
            }),
            groupCollapsed: F({}, M, {
              value: G
            }),
            groupEnd: F({}, M, {
              value: Q
            })
          });
        }
        I < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = b.ReactCurrentDispatcher, oe;
    function ie(M, ce, xe) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (Ye) {
            var De = Ye.stack.trim().match(/\n( *(at )?)/);
            oe = De && De[1] || "";
          }
        return `
` + oe + M;
      }
    }
    var me = !1, Y;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new re();
    }
    function V(M, ce) {
      if (!M || me)
        return "";
      {
        var xe = Y.get(M);
        if (xe !== void 0)
          return xe;
      }
      var De;
      me = !0;
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
            } catch (Dn) {
              De = Dn;
            }
            Reflect.construct(M, [], ze);
          } else {
            try {
              ze.call();
            } catch (Dn) {
              De = Dn;
            }
            M.call(ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Dn) {
            De = Dn;
          }
          M();
        }
      } catch (Dn) {
        if (Dn && De && typeof Dn.stack == "string") {
          for (var Ve = Dn.stack.split(`
`), kt = De.stack.split(`
`), mt = Ve.length - 1, vt = kt.length - 1; mt >= 1 && vt >= 0 && Ve[mt] !== kt[vt]; )
            vt--;
          for (; mt >= 1 && vt >= 0; mt--, vt--)
            if (Ve[mt] !== kt[vt]) {
              if (mt !== 1 || vt !== 1)
                do
                  if (mt--, vt--, vt < 0 || Ve[mt] !== kt[vt]) {
                    var Yt = `
` + Ve[mt].replace(" at new ", " at ");
                    return M.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", M.displayName)), typeof M == "function" && Y.set(M, Yt), Yt;
                  }
                while (mt >= 1 && vt >= 0);
              break;
            }
        }
      } finally {
        me = !1, be.current = Je, ge(), Error.prepareStackTrace = Ye;
      }
      var eo = M ? M.displayName || M.name : "", zd = eo ? ie(eo) : "";
      return typeof M == "function" && Y.set(M, zd), zd;
    }
    function fe(M, ce, xe) {
      return V(M, !1);
    }
    function he(M) {
      var ce = M.prototype;
      return !!(ce && ce.isReactComponent);
    }
    function ye(M, ce, xe) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return V(M, he(M));
      if (typeof M == "string")
        return ie(M);
      switch (M) {
        case l:
          return ie("Suspense");
        case u:
          return ie("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case c:
            return fe(M.render);
          case d:
            return ye(M.type, ce, xe);
          case p: {
            var De = M, Ye = De._payload, Je = De._init;
            try {
              return ye(Je(Ye), ce, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var O = Object.prototype.hasOwnProperty, z = {}, J = b.ReactDebugCurrentFrame;
    function pe(M) {
      if (M) {
        var ce = M._owner, xe = ye(M.type, M._source, ce ? ce.type : null);
        J.setExtraStackFrame(xe);
      } else
        J.setExtraStackFrame(null);
    }
    function le(M, ce, xe, De, Ye) {
      {
        var Je = Function.call.bind(O);
        for (var ze in M)
          if (Je(M, ze)) {
            var Ve = void 0;
            try {
              if (typeof M[ze] != "function") {
                var kt = Error((De || "React class") + ": " + xe + " type `" + ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kt.name = "Invariant Violation", kt;
              }
              Ve = M[ze](ce, ze, De, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (mt) {
              Ve = mt;
            }
            Ve && !(Ve instanceof Error) && (pe(Ye), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", De || "React class", xe, ze, typeof Ve), pe(null)), Ve instanceof Error && !(Ve.message in z) && (z[Ve.message] = !0, pe(Ye), x("Failed %s type: %s", xe, Ve.message), pe(null));
          }
      }
    }
    var se = Array.isArray;
    function $e(M) {
      return se(M);
    }
    function Le(M) {
      {
        var ce = typeof Symbol == "function" && Symbol.toStringTag, xe = ce && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return xe;
      }
    }
    function Ue(M) {
      try {
        return yt(M), !1;
      } catch {
        return !0;
      }
    }
    function yt(M) {
      return "" + M;
    }
    function bn(M) {
      if (Ue(M))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Le(M)), yt(M);
    }
    var Et = b.ReactCurrentOwner, Ne = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, Ke;
    Ke = {};
    function nt(M) {
      if (O.call(M, "ref")) {
        var ce = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function rt(M) {
      if (O.call(M, "key")) {
        var ce = Object.getOwnPropertyDescriptor(M, "key").get;
        if (ce && ce.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function Ot(M, ce) {
      if (typeof M.ref == "string" && Et.current && ce && Et.current.stateNode !== ce) {
        var xe = Z(Et.current.type);
        Ke[xe] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Et.current.type), M.ref), Ke[xe] = !0);
      }
    }
    function Nr(M, ce) {
      {
        var xe = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        xe.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function zt(M, ce) {
      {
        var xe = function() {
          Re || (Re = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ce));
        };
        xe.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var er = function(M, ce, xe, De, Ye, Je, ze) {
      var Ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: M,
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
        value: De
      }), Object.defineProperty(Ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ye
      }), Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)), Ve;
    };
    function Qr(M, ce, xe, De, Ye) {
      {
        var Je, ze = {}, Ve = null, kt = null;
        xe !== void 0 && (bn(xe), Ve = "" + xe), rt(ce) && (bn(ce.key), Ve = "" + ce.key), nt(ce) && (kt = ce.ref, Ot(ce, Ye));
        for (Je in ce)
          O.call(ce, Je) && !Ne.hasOwnProperty(Je) && (ze[Je] = ce[Je]);
        if (M && M.defaultProps) {
          var mt = M.defaultProps;
          for (Je in mt)
            ze[Je] === void 0 && (ze[Je] = mt[Je]);
        }
        if (Ve || kt) {
          var vt = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Ve && Nr(ze, vt), kt && zt(ze, vt);
        }
        return er(M, Ve, kt, Ye, De, Et.current, ze);
      }
    }
    var Uo = b.ReactCurrentOwner, is = b.ReactDebugCurrentFrame;
    function kn(M) {
      if (M) {
        var ce = M._owner, xe = ye(M.type, M._source, ce ? ce.type : null);
        is.setExtraStackFrame(xe);
      } else
        is.setExtraStackFrame(null);
    }
    var Jr;
    Jr = !1;
    function sc(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function Ld() {
      {
        if (Uo.current) {
          var M = Z(Uo.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function D0(M) {
      {
        if (M !== void 0) {
          var ce = M.fileName.replace(/^.*[\\\/]/, ""), xe = M.lineNumber;
          return `

Check your code at ` + ce + ":" + xe + ".";
        }
        return "";
      }
    }
    var Fd = {};
    function M0(M) {
      {
        var ce = Ld();
        if (!ce) {
          var xe = typeof M == "string" ? M : M.displayName || M.name;
          xe && (ce = `

Check the top-level render call using <` + xe + ">.");
        }
        return ce;
      }
    }
    function Vd(M, ce) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var xe = M0(ce);
        if (Fd[xe])
          return;
        Fd[xe] = !0;
        var De = "";
        M && M._owner && M._owner !== Uo.current && (De = " It was passed a child from " + Z(M._owner.type) + "."), kn(M), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, De), kn(null);
      }
    }
    function Wd(M, ce) {
      {
        if (typeof M != "object")
          return;
        if ($e(M))
          for (var xe = 0; xe < M.length; xe++) {
            var De = M[xe];
            sc(De) && Vd(De, ce);
          }
        else if (sc(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var Ye = g(M);
          if (typeof Ye == "function" && Ye !== M.entries)
            for (var Je = Ye.call(M), ze; !(ze = Je.next()).done; )
              sc(ze.value) && Vd(ze.value, ce);
        }
      }
    }
    function R0(M) {
      {
        var ce = M.type;
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
          var De = Z(ce);
          le(xe, M.props, "prop", De, M);
        } else if (ce.PropTypes !== void 0 && !Jr) {
          Jr = !0;
          var Ye = Z(ce);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ye || "Unknown");
        }
        typeof ce.getDefaultProps == "function" && !ce.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function j0(M) {
      {
        for (var ce = Object.keys(M.props), xe = 0; xe < ce.length; xe++) {
          var De = ce[xe];
          if (De !== "children" && De !== "key") {
            kn(M), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", De), kn(null);
            break;
          }
        }
        M.ref !== null && (kn(M), x("Invalid attribute `ref` supplied to `React.Fragment`."), kn(null));
      }
    }
    function Ud(M, ce, xe, De, Ye, Je) {
      {
        var ze = K(M);
        if (!ze) {
          var Ve = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kt = D0(Ye);
          kt ? Ve += kt : Ve += Ld();
          var mt;
          M === null ? mt = "null" : $e(M) ? mt = "array" : M !== void 0 && M.$$typeof === t ? (mt = "<" + (Z(M.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : mt = typeof M, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", mt, Ve);
        }
        var vt = Qr(M, ce, xe, Ye, Je);
        if (vt == null)
          return vt;
        if (ze) {
          var Yt = ce.children;
          if (Yt !== void 0)
            if (De)
              if ($e(Yt)) {
                for (var eo = 0; eo < Yt.length; eo++)
                  Wd(Yt[eo], M);
                Object.freeze && Object.freeze(Yt);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wd(Yt, M);
        }
        return M === r ? j0(vt) : R0(vt), vt;
      }
    }
    function A0(M, ce, xe) {
      return Ud(M, ce, xe, !0);
    }
    function I0(M, ce, xe) {
      return Ud(M, ce, xe, !1);
    }
    var L0 = I0, F0 = A0;
    Bo.Fragment = r, Bo.jsx = L0, Bo.jsxs = F0;
  }()), Bo;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = B0() : e.exports = H0();
})(f);
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, P.apply(this, arguments);
}
function K0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Da(...e) {
  return (t) => e.forEach(
    (n) => K0(n, t)
  );
}
function Se(...e) {
  return ve(Da(...e), e);
}
const Zt = /* @__PURE__ */ A((e, t) => {
  const { children: n, ...r } = e, o = Rt.toArray(n), a = o.find(Y0);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Rt.count(s) > 1 ? Rt.only(null) : /* @__PURE__ */ ur(s) ? s.props.children : null : c);
    return /* @__PURE__ */ $(ol, P({}, r, {
      ref: t
    }), /* @__PURE__ */ ur(s) ? /* @__PURE__ */ Oo(s, void 0, i) : null);
  }
  return /* @__PURE__ */ $(ol, P({}, r, {
    ref: t
  }), n);
});
Zt.displayName = "Slot";
const ol = /* @__PURE__ */ A((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ ur(n) ? /* @__PURE__ */ Oo(n, {
    ...G0(r, n.props),
    ref: t ? Da(t, n.ref) : n.ref
  }) : Rt.count(n) > 1 ? Rt.only(null) : null;
});
ol.displayName = "SlotClone";
const Xl = ({ children: e }) => /* @__PURE__ */ $(Kt, null, e);
function Y0(e) {
  return /* @__PURE__ */ ur(e) && e.type === Xl;
}
function G0(e, t) {
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
function nm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = nm(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function rm() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = nm(e)) && (r && (r += " "), r += t);
  return r;
}
const Kd = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Yd = rm, ko = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return Yd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const p = Kd(u) || Kd(d);
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
  return Yd(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function YM(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const GM = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, ic = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, qM = (e) => {
  const t = ic(e), n = ic(e, 0.1), r = ic(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, cc = {
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
}, ZM = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), XM = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), QM = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), JM = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, As = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, eR = () => [...cc.DIGITAL, ...cc.MOVILNET, ...cc.MOVISTAR], Ho = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function q0() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = om(t)) && (r && (r += " "), r += n);
  return r;
}
function om(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = om(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Ql = "-";
function Z0(e) {
  var t = Q0(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(Ql);
    return c[0] === "" && c.length !== 1 && c.shift(), am(c, t) || X0(i);
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
function am(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? am(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(Ql);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Gd = /^\[(.+)\]$/;
function X0(e) {
  if (Gd.test(e)) {
    var t = Gd.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Q0(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = ey(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    al(i, r, s, t);
  }), r;
}
function al(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : qd(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (J0(o)) {
        al(o(r), t, n, r);
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
      al(c, qd(t, i), n, r);
    });
  });
}
function qd(e, t) {
  var n = e;
  return t.split(Ql).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function J0(e) {
  return e.isThemeGetter;
}
function ey(e, t) {
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
function ty(e) {
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
var sm = "!";
function ny(e) {
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
    var m = i.length === 0 ? s : s.substring(l), h = m.startsWith(sm), v = h ? m.substring(1) : m, g = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function ry(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function oy(e) {
  return {
    cache: ty(e.cacheSize),
    splitModifiers: ny(e),
    ...Z0(e)
  };
}
var ay = /\s+/;
function sy(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(ay).map(function(s) {
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
    var h = ry(c).join(":"), v = l ? h + sm : h;
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
function iy() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var u = t[0], d = t.slice(1), p = d.reduce(function(m, h) {
      return h(m);
    }, u());
    return r = oy(p), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = sy(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(q0.apply(null, arguments));
  };
}
function at(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var im = /^\[(?:([a-z-]+):)?(.+)\]$/i, cy = /^\d+\/\d+$/, ly = /* @__PURE__ */ new Set(["px", "full", "screen"]), uy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, dy = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, fy = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Jt(e) {
  return kr(e) || ly.has(e) || cy.test(e) || sl(e);
}
function sl(e) {
  return zr(e, "length", by);
}
function py(e) {
  return zr(e, "size", cm);
}
function my(e) {
  return zr(e, "position", cm);
}
function vy(e) {
  return zr(e, "url", xy);
}
function cs(e) {
  return zr(e, "number", kr);
}
function kr(e) {
  return !Number.isNaN(Number(e));
}
function hy(e) {
  return e.endsWith("%") && kr(e.slice(0, -1));
}
function Ko(e) {
  return Zd(e) || zr(e, "number", Zd);
}
function We(e) {
  return im.test(e);
}
function Yo() {
  return !0;
}
function tr(e) {
  return uy.test(e);
}
function gy(e) {
  return zr(e, "", yy);
}
function zr(e, t, n) {
  var r = im.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function by(e) {
  return dy.test(e);
}
function cm() {
  return !1;
}
function xy(e) {
  return e.startsWith("url(");
}
function Zd(e) {
  return Number.isInteger(Number(e));
}
function yy(e) {
  return fy.test(e);
}
function $y() {
  var e = at("colors"), t = at("spacing"), n = at("blur"), r = at("brightness"), o = at("borderColor"), a = at("borderRadius"), s = at("borderSpacing"), i = at("borderWidth"), c = at("contrast"), l = at("grayscale"), u = at("hueRotate"), d = at("invert"), p = at("gap"), m = at("gradientColorStops"), h = at("gradientColorStopPositions"), v = at("inset"), g = at("margin"), b = at("opacity"), x = at("padding"), y = at("saturate"), _ = at("scale"), w = at("sepia"), N = at("skew"), k = at("space"), E = at("translate"), T = function() {
    return ["auto", "contain", "none"];
  }, K = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, U = function() {
    return ["auto", We, t];
  }, B = function() {
    return [We, t];
  }, Z = function() {
    return ["", Jt];
  }, F = function() {
    return ["auto", kr, We];
  }, I = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, L = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, W = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, q = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R = function() {
    return ["", "0", We];
  }, D = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, G = function() {
    return [kr, cs];
  }, Q = function() {
    return [kr, We];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Yo],
      spacing: [Jt],
      blur: ["none", "", tr, We],
      brightness: G(),
      borderColor: [e],
      borderRadius: ["none", "", "full", tr, We],
      borderSpacing: B(),
      borderWidth: Z(),
      contrast: G(),
      grayscale: R(),
      hueRotate: Q(),
      invert: R(),
      gap: B(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hy, sl],
      inset: U(),
      margin: U(),
      opacity: G(),
      padding: B(),
      saturate: G(),
      scale: G(),
      sepia: R(),
      skew: Q(),
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
        columns: [tr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": D()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": D()
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
        object: [].concat(I(), [We])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: K()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": K()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": K()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
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
        "grid-cols": [Yo]
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
        "grid-rows": [Yo]
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
        justify: ["normal"].concat(q())
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
        content: ["normal"].concat(q(), ["baseline"])
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
        "place-content": [].concat(q(), ["baseline"])
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
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
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
        "min-w": ["min", "max", "fit", We, Jt]
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
        "min-h": ["min", "max", "fit", We, Jt]
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
        text: ["base", tr, sl]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", cs]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Yo]
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
        "line-clamp": ["none", kr, cs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", We, Jt]
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
        "placeholder-opacity": [b]
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
        "text-opacity": [b]
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
        decoration: ["auto", "from-font", Jt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", We, Jt]
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
        "bg-opacity": [b]
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
        bg: [].concat(I(), [my])
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
        bg: ["auto", "cover", "contain", py]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vy]
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
        "border-opacity": [b]
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
        "divide-opacity": [b]
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
        "outline-offset": [We, Jt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Jt]
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
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Jt]
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
        shadow: ["", "inner", "none", tr, gy]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Yo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
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
        sepia: [w]
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
        "backdrop-opacity": [b]
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
        "backdrop-sepia": [w]
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
        duration: Q()
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
        delay: Q()
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
        "translate-x": [E]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [E]
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
        stroke: [Jt, cs]
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
var wy = /* @__PURE__ */ iy($y);
function j(...e) {
  return wy(rm(e));
}
const Jl = ({ className: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: j(`spinner h-4 w-4 ${e}`) }), bo = ko(
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
    const c = a ? Zt : "button";
    return /* @__PURE__ */ f.exports.jsx(
      c,
      {
        className: j(bo({ variant: r, size: o, className: e })),
        ref: i,
        ...s,
        children: t ? /* @__PURE__ */ f.exports.jsx(Jl, {}) : n
      }
    );
  }
);
Fe.displayName = "Button";
var _y = {
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
const Cy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ey = (e, t) => {
  const n = A(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => $(
      "svg",
      {
        ref: l,
        ..._y,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${Cy(e)}`,
        ...c
      },
      [
        ...t.map(([u, d]) => $(u, d)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
var st = Ey;
const Sy = st("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]), Ny = st("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]), ln = st("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), ra = st("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), $i = st("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), xr = st("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Xd = st("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), il = st("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), wi = st("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), Py = st("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]), Is = st("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]), ls = st("EyeOff", [
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
]), us = st("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), lc = st("ImageOff", [
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
]), eu = st("ImagePlus", [
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
]), lm = st("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), um = st("MoreHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]), Ty = st("PanelLeftClose", [
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
]), Oy = st("PanelLeftOpen", [
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
]), dm = st("PanelLeft", [
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
]), fm = st("PenSquare", [
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
]), Ls = st("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), pm = st("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), ky = st("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), _i = st("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function uc(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function Go(e) {
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
function qo(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? My(i, function(d) {
      return d.test(s);
    }) : Dy(i, function(d) {
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
function Dy(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function My(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ry(e) {
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
function xo(e) {
  return xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xo(e);
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
  return e instanceof Date || xo(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function qt(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = xt(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function $n(e, t) {
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
function jy(e, t) {
  Te(2, arguments);
  var n = Ie(e).getTime(), r = xt(t);
  return new Date(n + r);
}
var Ay = {};
function yr() {
  return Ay;
}
function wn(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = yr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ie(e), m = p.getDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setDate(p.getDate() - h), p.setHours(0, 0, 0, 0), p;
}
function Ar(e) {
  return Te(1, arguments), wn(e, {
    weekStartsOn: 1
  });
}
function Iy(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Ar(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Ar(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Ly(e) {
  Te(1, arguments);
  var t = Iy(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Ar(n);
  return r;
}
function oa(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function yo(e) {
  Te(1, arguments);
  var t = Ie(e);
  return t.setHours(0, 0, 0, 0), t;
}
var Fy = 864e5;
function In(e, t) {
  Te(2, arguments);
  var n = yo(e), r = yo(t), o = n.getTime() - oa(n), a = r.getTime() - oa(r);
  return Math.round((o - a) / Fy);
}
function cl(e, t) {
  Te(2, arguments);
  var n = xt(t), r = n * 7;
  return qt(e, r);
}
function Vy(e, t) {
  Te(2, arguments);
  var n = xt(t);
  return $n(e, n * 12);
}
function Wy(e) {
  Te(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (xo(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Ie(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function Uy(e) {
  Te(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (xo(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Ie(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
function Vt(e, t) {
  Te(2, arguments);
  var n = yo(e), r = yo(t);
  return n.getTime() === r.getTime();
}
function tu(e) {
  return Te(1, arguments), e instanceof Date || xo(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function zy(e) {
  if (Te(1, arguments), !tu(e) && typeof e != "number")
    return !1;
  var t = Ie(e);
  return !isNaN(Number(t));
}
function aa(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var By = 6048e5;
function Hy(e, t, n) {
  Te(2, arguments);
  var r = wn(e, n), o = wn(t, n), a = r.getTime() - oa(r), s = o.getTime() - oa(o);
  return Math.round((a - s) / By);
}
function nu(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Wt(e) {
  Te(1, arguments);
  var t = Ie(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Ky(e) {
  Te(1, arguments);
  var t = Ie(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ru(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = yr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ie(e), m = p.getDay(), h = (m < d ? -7 : 0) + 6 - (m - d);
  return p.setDate(p.getDate() + h), p.setHours(23, 59, 59, 999), p;
}
function mm(e) {
  return Te(1, arguments), ru(e, {
    weekStartsOn: 1
  });
}
function Yy(e, t) {
  Te(2, arguments);
  var n = xt(t);
  return jy(e, -n);
}
var Gy = 864e5;
function qy(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / Gy) + 1;
}
function Fs(e) {
  Te(1, arguments);
  var t = 1, n = Ie(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function vm(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = Fs(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = Fs(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Zy(e) {
  Te(1, arguments);
  var t = vm(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Fs(n);
  return r;
}
var Xy = 6048e5;
function Qy(e) {
  Te(1, arguments);
  var t = Ie(e), n = Fs(t).getTime() - Zy(t).getTime();
  return Math.round(n / Xy) + 1;
}
function Vs(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = yr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ie(e), m = p.getUTCDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setUTCDate(p.getUTCDate() - h), p.setUTCHours(0, 0, 0, 0), p;
}
function hm(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = Ie(e), d = u.getUTCFullYear(), p = yr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(d + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var v = Vs(h, t), g = new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var b = Vs(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= b.getTime() ? d : d - 1;
}
function Jy(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = yr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = hm(e, t), m = new Date(0);
  m.setUTCFullYear(p, 0, d), m.setUTCHours(0, 0, 0, 0);
  var h = Vs(m, t);
  return h;
}
var e1 = 6048e5;
function t1(e, t) {
  Te(1, arguments);
  var n = Ie(e), r = Vs(n, t).getTime() - Jy(n, t).getTime();
  return Math.round(r / e1) + 1;
}
function Ze(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var n1 = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return Ze(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Ze(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return Ze(t.getUTCDate(), n.length);
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
    return Ze(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return Ze(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return Ze(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return Ze(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return Ze(a, n.length);
  }
};
const nr = n1;
var to = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, r1 = {
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
    var a = hm(t, o), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var i = s % 100;
      return Ze(i, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : Ze(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = vm(t);
    return Ze(r, n.length);
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
    return Ze(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return Ze(o, 2);
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
        return Ze(o, 2);
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
        return Ze(o + 1, 2);
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
    var a = t1(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Ze(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = Qy(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Ze(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : nr.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = qy(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : Ze(o, n.length);
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
        return Ze(s, 2);
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
        return Ze(s, n.length);
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
        return Ze(a, n.length);
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
    switch (o === 12 ? a = to.noon : o === 0 ? a = to.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = to.evening : o >= 12 ? a = to.afternoon : o >= 4 ? a = to.morning : a = to.night, n) {
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
    }) : Ze(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : Ze(o, n.length);
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
        return Jd(s);
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
        return Jd(s);
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
        return "GMT" + Qd(s, ":");
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
        return "GMT" + Qd(s, ":");
      case "zzzz":
      default:
        return "GMT" + Tr(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, s = Math.floor(a.getTime() / 1e3);
    return Ze(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTime();
    return Ze(s, n.length);
  }
};
function Qd(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + Ze(a, 2);
}
function Jd(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Ze(Math.abs(e) / 60, 2);
  }
  return Tr(e, t);
}
function Tr(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = Ze(Math.floor(o / 60), 2), s = Ze(o % 60, 2);
  return r + a + n + s;
}
const o1 = r1;
var ef = function(t, n) {
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
}, gm = function(t, n) {
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
}, a1 = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return ef(t, n);
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
  return s.replace("{{date}}", ef(o, n)).replace("{{time}}", gm(a, n));
}, s1 = {
  p: gm,
  P: a1
};
const i1 = s1;
var c1 = ["D", "DD"], l1 = ["YY", "YYYY"];
function u1(e) {
  return c1.indexOf(e) !== -1;
}
function d1(e) {
  return l1.indexOf(e) !== -1;
}
function tf(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var f1 = {
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
}, p1 = function(t, n, r) {
  var o, a = f1[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const m1 = p1;
var v1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, h1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, g1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, b1 = {
  date: uc({
    formats: v1,
    defaultWidth: "full"
  }),
  time: uc({
    formats: h1,
    defaultWidth: "full"
  }),
  dateTime: uc({
    formats: g1,
    defaultWidth: "full"
  })
};
const x1 = b1;
var y1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, $1 = function(t, n, r, o) {
  return y1[t];
};
const w1 = $1;
var _1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, C1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, E1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, S1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, N1 = {
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
}, P1 = {
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
}, T1 = function(t, n) {
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
}, O1 = {
  ordinalNumber: T1,
  era: Go({
    values: _1,
    defaultWidth: "wide"
  }),
  quarter: Go({
    values: C1,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Go({
    values: E1,
    defaultWidth: "wide"
  }),
  day: Go({
    values: S1,
    defaultWidth: "wide"
  }),
  dayPeriod: Go({
    values: N1,
    defaultWidth: "wide",
    formattingValues: P1,
    defaultFormattingWidth: "wide"
  })
};
const k1 = O1;
var D1 = /^(\d+)(th|st|nd|rd)?/i, M1 = /\d+/i, R1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, j1 = {
  any: [/^b/i, /^(a|c)/i]
}, A1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, I1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, L1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, F1 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, V1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, W1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, U1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, z1 = {
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
}, B1 = {
  ordinalNumber: Ry({
    matchPattern: D1,
    parsePattern: M1,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: qo({
    matchPatterns: R1,
    defaultMatchWidth: "wide",
    parsePatterns: j1,
    defaultParseWidth: "any"
  }),
  quarter: qo({
    matchPatterns: A1,
    defaultMatchWidth: "wide",
    parsePatterns: I1,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: qo({
    matchPatterns: L1,
    defaultMatchWidth: "wide",
    parsePatterns: F1,
    defaultParseWidth: "any"
  }),
  day: qo({
    matchPatterns: V1,
    defaultMatchWidth: "wide",
    parsePatterns: W1,
    defaultParseWidth: "any"
  }),
  dayPeriod: qo({
    matchPatterns: U1,
    defaultMatchWidth: "any",
    parsePatterns: z1,
    defaultParseWidth: "any"
  })
};
const H1 = B1;
var K1 = {
  code: "en-US",
  formatDistance: m1,
  formatLong: x1,
  formatRelative: w1,
  localize: k1,
  match: H1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const bm = K1;
var Y1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, G1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, q1 = /^'([^]*?)'?$/, Z1 = /''/g, X1 = /[a-zA-Z]/;
function Br(e, t, n) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g, b, x, y, _;
  Te(2, arguments);
  var w = String(t), N = yr(), k = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : N.locale) !== null && r !== void 0 ? r : bm, E = xt((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : N.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = N.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(E >= 1 && E <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var T = xt((m = (h = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (b = n.locale) === null || b === void 0 || (x = b.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && v !== void 0 ? v : N.weekStartsOn) !== null && h !== void 0 ? h : (y = N.locale) === null || y === void 0 || (_ = y.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(T >= 0 && T <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!k.localize)
    throw new RangeError("locale must contain localize property");
  if (!k.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var K = Ie(e);
  if (!zy(K))
    throw new RangeError("Invalid time value");
  var U = oa(K), B = Yy(K, U), Z = {
    firstWeekContainsDate: E,
    weekStartsOn: T,
    locale: k,
    _originalDate: K
  }, F = w.match(G1).map(function(I) {
    var L = I[0];
    if (L === "p" || L === "P") {
      var W = i1[L];
      return W(I, k.formatLong);
    }
    return I;
  }).join("").match(Y1).map(function(I) {
    if (I === "''")
      return "'";
    var L = I[0];
    if (L === "'")
      return Q1(I);
    var W = o1[L];
    if (W)
      return !(n != null && n.useAdditionalWeekYearTokens) && d1(I) && tf(I, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && u1(I) && tf(I, t, String(e)), W(B, I, k.localize, Z);
    if (L.match(X1))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + L + "`");
    return I;
  }).join("");
  return F;
}
function Q1(e) {
  var t = e.match(q1);
  return t ? t[1].replace(Z1, "'") : e;
}
function J1(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var e$ = 6048e5;
function t$(e) {
  Te(1, arguments);
  var t = Ie(e), n = Ar(t).getTime() - Ly(t).getTime();
  return Math.round(n / e$) + 1;
}
function n$(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getTime();
  return n;
}
function r$(e) {
  return Te(1, arguments), Math.floor(n$(e) / 1e3);
}
function o$(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = Ie(e), d = u.getFullYear(), p = yr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setFullYear(d + 1, 0, m), h.setHours(0, 0, 0, 0);
  var v = wn(h, t), g = new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var b = wn(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= b.getTime() ? d : d - 1;
}
function a$(e, t) {
  var n, r, o, a, s, i, c, l;
  Te(1, arguments);
  var u = yr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = o$(e, t), m = new Date(0);
  m.setFullYear(p, 0, d), m.setHours(0, 0, 0, 0);
  var h = wn(m, t);
  return h;
}
var s$ = 6048e5;
function i$(e, t) {
  Te(1, arguments);
  var n = Ie(e), r = wn(n, t).getTime() - a$(n, t).getTime();
  return Math.round(r / s$) + 1;
}
function c$(e) {
  Te(1, arguments);
  var t = Ie(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function l$(e, t) {
  return Te(1, arguments), Hy(c$(e), Wt(e), t) + 1;
}
function xm(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getTime() > r.getTime();
}
function ym(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getTime() < r.getTime();
}
function ou(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function u$(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = Ie(t);
  return n.getFullYear() === r.getFullYear();
}
function nf(e, t) {
  Te(2, arguments);
  var n = xt(t);
  return qt(e, -n);
}
function dc(e, t) {
  Te(2, arguments);
  var n = Ie(e), r = xt(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = J1(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function rf(e, t) {
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
function d$(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function $m(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Ma(e) {
  return e.mode === "multiple";
}
function Ra(e) {
  return e.mode === "range";
}
function Ci(e) {
  return e.mode === "single";
}
var f$ = {
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
function p$(e, t) {
  return Br(e, "LLLL y", t);
}
function m$(e, t) {
  return Br(e, "d", t);
}
function v$(e, t) {
  return Br(e, "LLLL", t);
}
function h$(e) {
  return "".concat(e);
}
function g$(e, t) {
  return Br(e, "cccccc", t);
}
function b$(e, t) {
  return Br(e, "yyyy", t);
}
var x$ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: p$,
  formatDay: m$,
  formatMonthCaption: v$,
  formatWeekNumber: h$,
  formatWeekdayName: g$,
  formatYearCaption: b$
}), y$ = function(e, t, n) {
  return Br(e, "do MMMM (EEEE)", n);
}, $$ = function() {
  return "Month: ";
}, w$ = function() {
  return "Go to next month";
}, _$ = function() {
  return "Go to previous month";
}, C$ = function(e, t) {
  return Br(e, "cccc", t);
}, E$ = function(e) {
  return "Week n. ".concat(e);
}, S$ = function() {
  return "Year: ";
}, N$ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: y$,
  labelMonthDropdown: $$,
  labelNext: w$,
  labelPrevious: _$,
  labelWeekNumber: E$,
  labelWeekday: C$,
  labelYearDropdown: S$
});
function P$() {
  var e = "buttons", t = f$, n = bm, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: x$,
    labels: N$,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function T$(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Wt(r) : t && (a = new Date(t, 0, 1)), o ? s = nu(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? yo(a) : void 0,
    toDate: s ? yo(s) : void 0
  };
}
var wm = ht(void 0);
function O$(e) {
  var t, n = e.initialProps, r = P$(), o = T$(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (Ci(n) || Ma(n) || Ra(n)) && (c = n.onSelect);
  var l = Oe(Oe(Oe({}, r), n), { captionLayout: i, classNames: Oe(Oe({}, r.classNames), n.classNames), components: Oe({}, n.components), formatters: Oe(Oe({}, r.formatters), n.formatters), fromDate: a, labels: Oe(Oe({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Oe(Oe({}, r.modifiers), n.modifiers), modifiersClassNames: Oe(Oe({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Oe(Oe({}, r.styles), n.styles), toDate: s });
  return S.createElement(wm.Provider, { value: l }, e.children);
}
function it() {
  var e = Xe(wm);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function _m(e) {
  var t = it(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return S.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function k$(e) {
  return S.createElement(
    "svg",
    Oe({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    S.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function Cm(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = it(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : k$;
  return S.createElement(
    "div",
    { className: i, style: c },
    S.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    S.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    S.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      s,
      S.createElement(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function D$(e) {
  var t, n = it(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return S.createElement(S.Fragment, null);
  if (!o)
    return S.createElement(S.Fragment, null);
  var d = [];
  if (u$(r, o))
    for (var p = Wt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      d.push(dc(p, m));
  else
    for (var p = Wt(new Date()), m = 0; m <= 11; m++)
      d.push(dc(p, m));
  var h = function(g) {
    var b = Number(g.target.value), x = dc(Wt(e.displayMonth), b);
    e.onChange(x);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Cm;
  return S.createElement(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return S.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function M$(e) {
  var t, n = e.displayMonth, r = it(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, p = [];
  if (!o)
    return S.createElement(S.Fragment, null);
  if (!a)
    return S.createElement(S.Fragment, null);
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    p.push(rf(Ky(new Date()), v));
  var g = function(x) {
    var y = rf(Wt(n), Number(x.target.value));
    e.onChange(y);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Cm;
  return S.createElement(b, { name: "years", "aria-label": d(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, p.map(function(x) {
    return S.createElement("option", { key: x.getFullYear(), value: x.getFullYear() }, u(x, { locale: s }));
  }));
}
function R$(e, t) {
  var n = te(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function j$(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && aa(a, o) < 0) {
    var l = -1 * (c - 1);
    o = $n(a, l);
  }
  return s && aa(o, s) < 0 && (o = s), Wt(o);
}
function A$() {
  var e = it(), t = j$(e), n = R$(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Wt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function I$(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Wt(e), a = Wt($n(o, r)), s = aa(a, o), i = [], c = 0; c < s; c++) {
    var l = $n(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function L$(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Wt(e);
    if (!n)
      return $n(i, s);
    var c = aa(n, e);
    if (!(c < a))
      return $n(i, s);
  }
}
function F$(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Wt(e);
    if (!n)
      return $n(i, -s);
    var c = aa(i, n);
    if (!(c <= 0))
      return $n(i, -s);
  }
}
var Em = ht(void 0);
function V$(e) {
  var t = it(), n = A$(), r = n[0], o = n[1], a = I$(r, t), s = L$(r, t), i = F$(r, t), c = function(d) {
    return a.some(function(p) {
      return ou(d, p);
    });
  }, l = function(d, p) {
    c(d) || (p && ym(d, p) ? o($n(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return S.createElement(Em.Provider, { value: u }, e.children);
}
function ja() {
  var e = Xe(Em);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function of(e) {
  var t, n = it(), r = n.classNames, o = n.styles, a = n.components, s = ja().goToMonth, i = function(u) {
    s(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : _m, l = S.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return S.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    S.createElement("div", { className: r.vhidden }, l),
    S.createElement(D$, { onChange: i, displayMonth: e.displayMonth }),
    S.createElement(M$, { onChange: i, displayMonth: e.displayMonth })
  );
}
function W$(e) {
  return S.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    S.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function U$(e) {
  return S.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    S.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var Ws = A(function(e, t) {
  var n = it(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Oe(Oe({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), S.createElement("button", Oe({}, e, { ref: t, type: "button", className: s, style: i }));
});
function z$(e) {
  var t, n, r = it(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return S.createElement(S.Fragment, null);
  var p = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : U$, b = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : W$;
  return S.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && S.createElement(Ws, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? S.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : S.createElement(b, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && S.createElement(Ws, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? S.createElement(b, { className: s.nav_icon, style: i.nav_icon }) : S.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function af(e) {
  var t = it().numberOfMonths, n = ja(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return ou(e.displayMonth, h);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return S.createElement(z$, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function B$(e) {
  var t, n = it(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : _m, l;
  return o ? l = S.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = S.createElement(of, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = S.createElement(
    S.Fragment,
    null,
    S.createElement(of, { displayMonth: e.displayMonth, id: e.id }),
    S.createElement(af, { displayMonth: e.displayMonth, id: e.id })
  ) : l = S.createElement(
    S.Fragment,
    null,
    S.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    S.createElement(af, { displayMonth: e.displayMonth, id: e.id })
  ), S.createElement("div", { className: r.caption, style: a.caption }, l);
}
function H$(e) {
  var t = it(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? S.createElement(
    "tfoot",
    { className: o, style: r.tfoot },
    S.createElement(
      "tr",
      null,
      S.createElement("td", { colSpan: 8 }, n)
    )
  ) : S.createElement(S.Fragment, null);
}
function K$(e, t, n) {
  for (var r = n ? Ar(new Date()) : wn(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = qt(r, a);
    o.push(s);
  }
  return o;
}
function Y$() {
  var e = it(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = K$(o, a, s);
  return S.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && S.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return S.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, i(u, { locale: o }));
    })
  );
}
function G$() {
  var e, t = it(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : Y$;
  return S.createElement(
    "thead",
    { style: r.head, className: n.head },
    S.createElement(a, null)
  );
}
function q$(e) {
  var t = it(), n = t.locale, r = t.formatters.formatDay;
  return S.createElement(S.Fragment, null, r(e.date, { locale: n }));
}
var au = ht(void 0);
function Z$(e) {
  if (!Ma(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return S.createElement(au.Provider, { value: t }, e.children);
  }
  return S.createElement(X$, { initialProps: e.initialProps, children: e.children });
}
function X$(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, d);
    var h = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? $m([], r, !0) : [];
        if (u.selected) {
          var b = g.findIndex(function(x) {
            return Vt(l, x);
          });
          g.splice(b, 1);
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
      return Vt(p, l);
    });
    return Boolean(u && !d);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return S.createElement(au.Provider, { value: c }, n);
}
function su() {
  var e = Xe(au);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function Q$(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Vt(r, e))
    return { from: r, to: e };
  if (!o && ym(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Vt(o, e) && Vt(r, e))) {
    if (Vt(o, e))
      return { from: o, to: void 0 };
    if (!Vt(r, e))
      return xm(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var iu = ht(void 0);
function J$(e) {
  if (!Ra(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return S.createElement(iu.Provider, { value: t }, e.children);
  }
  return S.createElement(ew, { initialProps: e.initialProps, children: e.children });
}
function ew(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, h, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var x = Q$(m, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, x, m, h, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (u.range_start = [a], s ? (u.range_end = [s], Vt(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]), i && (a && !s && u.disabled.push({
    after: nf(a, i - 1),
    before: qt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: qt(a, i - 1)
  })), c && (a && !s && (u.disabled.push({
    before: qt(a, -c + 1)
  }), u.disabled.push({
    after: qt(a, c - 1)
  })), a && s)) {
    var d = In(s, a) + 1, p = c - d;
    u.disabled.push({
      before: nf(a, p)
    }), u.disabled.push({
      after: qt(s, p)
    });
  }
  return S.createElement(iu.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function cu() {
  var e = Xe(iu);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Ps(e) {
  return Array.isArray(e) ? $m([], e, !0) : e !== void 0 ? [e] : [];
}
function tw(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Ps(o);
  }), t;
}
var un;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(un || (un = {}));
var nw = un.Selected, Mn = un.Disabled, rw = un.Hidden, ow = un.Today, fc = un.RangeEnd, pc = un.RangeMiddle, mc = un.RangeStart, aw = un.Outside;
function sw(e, t, n) {
  var r, o = (r = {}, r[nw] = Ps(e.selected), r[Mn] = Ps(e.disabled), r[rw] = Ps(e.hidden), r[ow] = [e.today], r[fc] = [], r[pc] = [], r[mc] = [], r[aw] = [], r);
  return e.fromDate && o[Mn].push({ before: e.fromDate }), e.toDate && o[Mn].push({ after: e.toDate }), Ma(e) ? o[Mn] = o[Mn].concat(t.modifiers[Mn]) : Ra(e) && (o[Mn] = o[Mn].concat(n.modifiers[Mn]), o[mc] = n.modifiers[mc], o[pc] = n.modifiers[pc], o[fc] = n.modifiers[fc]), o;
}
var Sm = ht(void 0);
function iw(e) {
  var t = it(), n = su(), r = cu(), o = sw(t, n, r), a = tw(t.modifiers), s = Oe(Oe({}, o), a);
  return S.createElement(Sm.Provider, { value: s }, e.children);
}
function Nm() {
  var e = Xe(Sm);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function cw(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function lw(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function uw(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function dw(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function fw(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function pw(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Vt(r, e))
    return !0;
  if (!o)
    return !1;
  var a = In(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = In(e, r) >= 0 && In(o, e) >= 0;
  return s;
}
function mw(e) {
  return tu(e);
}
function vw(e) {
  return Array.isArray(e) && e.every(tu);
}
function hw(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (mw(n))
      return Vt(e, n);
    if (vw(n))
      return n.includes(e);
    if (lw(n))
      return pw(e, n);
    if (fw(n))
      return n.dayOfWeek.includes(e.getDay());
    if (cw(n)) {
      var r = In(n.before, e), o = In(n.after, e), a = r > 0, s = o < 0, i = xm(n.before, n.after);
      return i ? s && a : a || s;
    }
    return uw(n) ? In(e, n.after) > 0 : dw(n) ? In(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function lu(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return hw(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !ou(e, n) && (o.outside = !0), o;
}
function gw(e, t) {
  for (var n = Wt(e[0]), r = nu(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = lu(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = qt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = qt(s, 1);
  }
  return a || o;
}
var bw = 365;
function Pm(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, p = {
    day: qt,
    week: cl,
    month: $n,
    year: Vy,
    startOfWeek: function(g) {
      return o.ISOWeek ? Ar(g) : wn(g, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? mm(g) : ru(g, { locale: d, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = Wy([l, m]) : r === "after" && u && (m = Uy([u, m]));
  var h = !0;
  if (a) {
    var v = lu(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > bw ? i.lastFocused : Pm(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Oe(Oe({}, i), { count: i.count + 1 })
  });
}
var Tm = ht(void 0);
function xw(e) {
  var t = ja(), n = Nm(), r = te(), o = r[0], a = r[1], s = te(), i = s[0], c = s[1], l = gw(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, d = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = it(), h = function(g, b) {
    if (o) {
      var x = Pm(o, {
        moveBy: g,
        direction: b,
        context: m,
        modifiers: n
      });
      Vt(o, x) || (t.goToDate(x, o), p(x));
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
  return S.createElement(Tm.Provider, { value: v }, e.children);
}
function uu() {
  var e = Xe(Tm);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function yw(e, t) {
  var n = Nm(), r = lu(e, n, t);
  return r;
}
var du = ht(void 0);
function $w(e) {
  if (!Ci(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return S.createElement(du.Provider, { value: t }, e.children);
  }
  return S.createElement(ww, { initialProps: e.initialProps, children: e.children });
}
function ww(e) {
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
  return S.createElement(du.Provider, { value: o }, n);
}
function Om() {
  var e = Xe(du);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function _w(e, t) {
  var n = it(), r = Om(), o = su(), a = cu(), s = uu(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, p = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, x = s.focusEndOfWeek, y = function(W) {
    var q, R, D, G;
    Ci(n) ? (q = r.onDayClick) === null || q === void 0 || q.call(r, e, t, W) : Ma(n) ? (R = o.onDayClick) === null || R === void 0 || R.call(o, e, t, W) : Ra(n) ? (D = a.onDayClick) === null || D === void 0 || D.call(a, e, t, W) : (G = n.onDayClick) === null || G === void 0 || G.call(n, e, t, W);
  }, _ = function(W) {
    var q;
    p(e), (q = n.onDayFocus) === null || q === void 0 || q.call(n, e, t, W);
  }, w = function(W) {
    var q;
    d(), (q = n.onDayBlur) === null || q === void 0 || q.call(n, e, t, W);
  }, N = function(W) {
    var q;
    (q = n.onDayMouseEnter) === null || q === void 0 || q.call(n, e, t, W);
  }, k = function(W) {
    var q;
    (q = n.onDayMouseLeave) === null || q === void 0 || q.call(n, e, t, W);
  }, E = function(W) {
    var q;
    (q = n.onDayPointerEnter) === null || q === void 0 || q.call(n, e, t, W);
  }, T = function(W) {
    var q;
    (q = n.onDayPointerLeave) === null || q === void 0 || q.call(n, e, t, W);
  }, K = function(W) {
    var q;
    (q = n.onDayTouchCancel) === null || q === void 0 || q.call(n, e, t, W);
  }, U = function(W) {
    var q;
    (q = n.onDayTouchEnd) === null || q === void 0 || q.call(n, e, t, W);
  }, B = function(W) {
    var q;
    (q = n.onDayTouchMove) === null || q === void 0 || q.call(n, e, t, W);
  }, Z = function(W) {
    var q;
    (q = n.onDayTouchStart) === null || q === void 0 || q.call(n, e, t, W);
  }, F = function(W) {
    var q;
    (q = n.onDayKeyUp) === null || q === void 0 || q.call(n, e, t, W);
  }, I = function(W) {
    var q;
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
        W.preventDefault(), W.stopPropagation(), b();
        break;
      case "End":
        W.preventDefault(), W.stopPropagation(), x();
        break;
    }
    (q = n.onDayKeyDown) === null || q === void 0 || q.call(n, e, t, W);
  }, L = {
    onClick: y,
    onFocus: _,
    onBlur: w,
    onKeyDown: I,
    onKeyUp: F,
    onMouseEnter: N,
    onMouseLeave: k,
    onPointerEnter: E,
    onPointerLeave: T,
    onTouchCancel: K,
    onTouchEnd: U,
    onTouchMove: B,
    onTouchStart: Z
  };
  return L;
}
function Cw() {
  var e = it(), t = Om(), n = su(), r = cu(), o = Ci(e) ? t.selected : Ma(e) ? n.selected : Ra(e) ? r.selected : void 0;
  return o;
}
function Ew(e) {
  return Object.values(un).includes(e);
}
function Sw(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (Ew(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function Nw(e, t) {
  var n = Oe({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Oe(Oe({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function Pw(e, t, n) {
  var r, o, a, s = it(), i = uu(), c = yw(e, t), l = _w(e, c), u = Cw(), d = Boolean(s.onDayClick || s.mode !== "default");
  X(function() {
    var N;
    c.outside || i.focusedDay && d && Vt(i.focusedDay, e) && ((N = n.current) === null || N === void 0 || N.focus());
  }, [
    i.focusedDay,
    e,
    n,
    d,
    c.outside
  ]);
  var p = Sw(s, c).join(" "), m = Nw(s, c), h = Boolean(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : q$, g = S.createElement(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, x = i.focusTarget && Vt(i.focusTarget, e) && !c.outside, y = i.focusedDay && Vt(i.focusedDay, e), _ = Oe(Oe(Oe({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = y || x ? 0 : -1, r)), l), w = {
    isButton: d,
    isHidden: h,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: b
  };
  return w;
}
function Tw(e) {
  var t = H(null), n = Pw(e.date, e.displayMonth, t);
  return n.isHidden ? S.createElement("div", { role: "gridcell" }) : n.isButton ? S.createElement(Ws, Oe({ name: "day", ref: t }, n.buttonProps)) : S.createElement("div", Oe({}, n.divProps));
}
function Ow(e) {
  var t = e.number, n = e.dates, r = it(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return S.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return S.createElement(Ws, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: p }, u);
}
function kw(e) {
  var t, n, r = it(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : Tw, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : Ow, u;
  return s && (u = S.createElement(
    "td",
    { className: a.cell, style: o.cell },
    S.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), S.createElement(
    "tr",
    { className: a.row, style: o.row },
    u,
    e.dates.map(function(d) {
      return S.createElement(
        "td",
        { className: a.cell, style: o.cell, key: r$(d), role: "presentation" },
        S.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function sf(e, t, n) {
  for (var r = n != null && n.ISOWeek ? mm(t) : ru(t, n), o = n != null && n.ISOWeek ? Ar(e) : wn(e, n), a = In(r, o), s = [], i = 0; i <= a; i++)
    s.push(qt(o, i));
  var c = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? t$(u) : i$(u, n), p = l.find(function(m) {
      return m.weekNumber === d;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function Dw(e, t) {
  var n = sf(Wt(e), nu(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = l$(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = cl(a, 6 - r), i = sf(cl(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function Mw(e) {
  var t, n, r, o = it(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, h = Dw(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : G$, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : kw, b = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : H$;
  return S.createElement(
    "table",
    { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && S.createElement(v, null),
    S.createElement("tbody", { className: s.tbody, style: i.tbody, role: "rowgroup" }, h.map(function(x) {
      return S.createElement(g, { displayMonth: e.displayMonth, key: x.weekNumber, dates: x.dates, weekNumber: x.weekNumber });
    })),
    S.createElement(b, { displayMonth: e.displayMonth })
  );
}
function Rw() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var jw = Rw() ? C.useLayoutEffect : C.useEffect, vc = !1, Aw = 0;
function cf() {
  return "react-day-picker-".concat(++Aw);
}
function Iw(e) {
  var t, n = e ?? (vc ? cf() : null), r = C.useState(n), o = r[0], a = r[1];
  return jw(function() {
    o === null && a(cf());
  }, []), C.useEffect(function() {
    vc === !1 && (vc = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function Lw(e) {
  var t, n, r = it(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = ja().displayMonths, l = Iw(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], p = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (d.push(a.caption_start), p = Oe(Oe({}, p), s.caption_start)), h && (d.push(a.caption_end), p = Oe(Oe({}, p), s.caption_end)), v && (d.push(a.caption_between), p = Oe(Oe({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : B$;
  return S.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: p },
    S.createElement(g, { id: l, displayMonth: e.displayMonth }),
    S.createElement(Mw, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function Fw(e) {
  var t = e.initialProps, n = it(), r = uu(), o = ja(), a = te(!1), s = a[0], i = a[1];
  X(function() {
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
  return S.createElement(
    "div",
    Oe({ className: c.join(" "), style: l, dir: n.dir, id: n.id }, u),
    S.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(d, p) {
      return S.createElement(Lw, { key: p, displayIndex: p, displayMonth: d });
    }))
  );
}
function Vw(e) {
  var t = e.children, n = d$(e, ["children"]);
  return S.createElement(
    O$,
    { initialProps: n },
    S.createElement(
      V$,
      null,
      S.createElement(
        $w,
        { initialProps: n },
        S.createElement(
          Z$,
          { initialProps: n },
          S.createElement(
            J$,
            { initialProps: n },
            S.createElement(
              iw,
              null,
              S.createElement(xw, null, t)
            )
          )
        )
      )
    )
  );
}
function Ww(e) {
  return S.createElement(
    Vw,
    Oe({}, e),
    S.createElement(Fw, { initialProps: e })
  );
}
function Uw({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f.exports.jsx(
    Ww,
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
          bo({ variant: "outline" }),
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
          bo({ variant: "ghost" }),
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
Uw.displayName = "Calendar";
function km(e, t) {
  const n = /* @__PURE__ */ ht(t);
  function r(a) {
    const { children: s, ...i } = a, c = _t(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ $(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = Xe(n);
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
function ot(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ ht(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = _t(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ $(v.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = Xe(m);
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
    const a = n.map((s) => /* @__PURE__ */ ht(s));
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
    zw(o, ...t)
  ];
}
function zw(...e) {
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
function Be(e) {
  const t = H(e);
  return X(() => {
    t.current = e;
  }), _t(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const Ct = Boolean(globalThis == null ? void 0 : globalThis.document) ? ka : () => {
}, Bw = [
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
], ue = Bw.reduce((e, t) => {
  const n = /* @__PURE__ */ A((r, o) => {
    const { asChild: a, ...s } = r, i = a ? Zt : t;
    return X(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ $(i, P({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function sa(e, t) {
  e && yi(
    () => e.dispatchEvent(t)
  );
}
const Dm = "Avatar", [Hw, tR] = ot(Dm), [Kw, Mm] = Hw(Dm), Yw = /* @__PURE__ */ A((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = te("idle");
  return /* @__PURE__ */ $(Kw, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ $(ue.span, P({}, r, {
    ref: t
  })));
}), Gw = "AvatarImage", qw = /* @__PURE__ */ A((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = Mm(Gw, n), i = Qw(r), c = Be((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return Ct(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ $(ue.img, P({}, a, {
    ref: t,
    src: r
  })) : null;
}), Zw = "AvatarFallback", Xw = /* @__PURE__ */ A((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Mm(Zw, n), [s, i] = te(r === void 0);
  return X(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ $(ue.span, P({}, o, {
    ref: t
  })) : null;
});
function Qw(e) {
  const [t, n] = te("idle");
  return X(() => {
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
const Rm = Yw, jm = qw, Am = Xw, fo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Rm,
  {
    ref: n,
    className: j(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
fo.displayName = Rm.displayName;
const Mr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jm,
  {
    ref: n,
    className: j("aspect-square h-full w-full", e),
    ...t
  }
));
Mr.displayName = jm.displayName;
const po = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Am,
  {
    ref: n,
    className: j(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
po.displayName = Am.displayName;
const Jw = ko(
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
function jt({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f.exports.jsx("div", { className: j(Jw({ variant: t }), e), ...n });
}
function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function $r(e) {
  const t = e + "CollectionProvider", [n, r] = ot(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: h, children: v } = m, g = S.useRef(null), b = S.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ S.createElement(o, {
      scope: h,
      itemMap: b,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ S.forwardRef((m, h) => {
    const { scope: v, children: g } = m, b = a(i, v), x = Se(h, b.collectionRef);
    return /* @__PURE__ */ S.createElement(Zt, {
      ref: x
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ S.forwardRef((m, h) => {
    const { scope: v, children: g, ...b } = m, x = S.useRef(null), y = Se(h, x), _ = a(l, v);
    return S.useEffect(() => (_.itemMap.set(x, {
      ref: x,
      ...b
    }), () => void _.itemMap.delete(x))), /* @__PURE__ */ S.createElement(Zt, {
      [u]: "",
      ref: y
    }, g);
  });
  function p(m) {
    const h = a(e + "CollectionConsumer", m);
    return S.useCallback(() => {
      const g = h.collectionRef.current;
      if (!g)
        return [];
      const b = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(h.itemMap.values()).sort(
        (_, w) => b.indexOf(_.ref.current) - b.indexOf(w.ref.current)
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
const e_ = /* @__PURE__ */ ht(void 0);
function Pn(e) {
  const t = Xe(e_);
  return e || t || "ltr";
}
function Im(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Be(e);
  X(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const ll = "dismissableLayer.update", t_ = "dismissableLayer.pointerDownOutside", n_ = "dismissableLayer.focusOutside";
let lf;
const r_ = /* @__PURE__ */ ht({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Hr = /* @__PURE__ */ A((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = Xe(r_), [d, p] = te(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = te({}), v = Se(
    t,
    (E) => p(E)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), x = g.indexOf(b), y = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, w = y >= x, N = o_((E) => {
    const T = E.target, K = [
      ...u.branches
    ].some(
      (U) => U.contains(T)
    );
    !w || K || (a == null || a(E), i == null || i(E), E.defaultPrevented || c == null || c());
  }, m), k = a_((E) => {
    const T = E.target;
    [
      ...u.branches
    ].some(
      (U) => U.contains(T)
    ) || (s == null || s(E), i == null || i(E), E.defaultPrevented || c == null || c());
  }, m);
  return Im((E) => {
    y === u.layers.size - 1 && (o == null || o(E), !E.defaultPrevented && c && (E.preventDefault(), c()));
  }, m), X(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (lf = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), uf(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = lf);
      };
  }, [
    d,
    m,
    r,
    u
  ]), X(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), uf());
  }, [
    d,
    u
  ]), X(() => {
    const E = () => h({});
    return document.addEventListener(ll, E), () => document.removeEventListener(ll, E);
  }, []), /* @__PURE__ */ $(ue.div, P({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ee(e.onFocusCapture, k.onFocusCapture),
    onBlurCapture: ee(e.onBlurCapture, k.onBlurCapture),
    onPointerDownCapture: ee(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
});
function o_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Be(e), r = H(!1), o = H(() => {
  });
  return X(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Lm(t_, n, c, {
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
function a_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Be(e), r = H(!1);
  return X(() => {
    const o = (a) => {
      a.target && !r.current && Lm(n_, n, {
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
function uf() {
  const e = new CustomEvent(ll);
  document.dispatchEvent(e);
}
function Lm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? sa(o, a) : o.dispatchEvent(a);
}
let hc = 0;
function Aa() {
  X(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : df()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : df()), hc++, () => {
      hc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), hc--;
    };
  }, []);
}
function df() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const gc = "focusScope.autoFocusOnMount", bc = "focusScope.autoFocusOnUnmount", ff = {
  bubbles: !1,
  cancelable: !0
}, Ei = /* @__PURE__ */ A((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = te(null), l = Be(o), u = Be(a), d = H(null), p = Se(
    t,
    (v) => c(v)
  ), m = H({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  X(() => {
    if (r) {
      let v = function(y) {
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
      }, b = function(y) {
        const _ = document.activeElement;
        for (const w of y)
          w.removedNodes.length > 0 && (i != null && i.contains(_) || ar(i));
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const x = new MutationObserver(b);
      return i && x.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), x.disconnect();
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), X(() => {
    if (i) {
      mf.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(gc, ff);
        i.addEventListener(gc, l), i.dispatchEvent(b), b.defaultPrevented || (s_(d_(Fm(i)), {
          select: !0
        }), document.activeElement === v && ar(i));
      }
      return () => {
        i.removeEventListener(gc, l), setTimeout(() => {
          const b = new CustomEvent(bc, ff);
          i.addEventListener(bc, u), i.dispatchEvent(b), b.defaultPrevented || ar(v ?? document.body, {
            select: !0
          }), i.removeEventListener(bc, u), mf.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const h = ve((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const x = v.currentTarget, [y, _] = i_(x);
      y && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && ar(y, {
        select: !0
      })) : v.shiftKey && b === y && (v.preventDefault(), n && ar(_, {
        select: !0
      })) : b === x && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ $(ue.div, P({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function s_(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ar(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function i_(e) {
  const t = Fm(e), n = pf(t, e), r = pf(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Fm(e) {
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
function pf(e, t) {
  for (const n of e)
    if (!c_(n, {
      upTo: t
    }))
      return n;
}
function c_(e, { upTo: t }) {
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
function l_(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ar(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && l_(e) && t && e.select();
  }
}
const mf = u_();
function u_() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = vf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = vf(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function vf(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function d_(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const f_ = C["useId".toString()] || (() => {
});
let p_ = 0;
function lt(e) {
  const [t, n] = C.useState(f_());
  return Ct(() => {
    e || n(
      (r) => r ?? String(p_++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const m_ = ["top", "right", "bottom", "left"], dr = Math.min, Bt = Math.max, Us = Math.round, ds = Math.floor, fr = (e) => ({
  x: e,
  y: e
}), v_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, h_ = {
  start: "end",
  end: "start"
};
function ul(e, t, n) {
  return Bt(e, dr(t, n));
}
function Vn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wn(e) {
  return e.split("-")[0];
}
function Do(e) {
  return e.split("-")[1];
}
function fu(e) {
  return e === "x" ? "y" : "x";
}
function pu(e) {
  return e === "y" ? "height" : "width";
}
function Mo(e) {
  return ["top", "bottom"].includes(Wn(e)) ? "y" : "x";
}
function mu(e) {
  return fu(Mo(e));
}
function g_(e, t, n) {
  n === void 0 && (n = !1);
  const r = Do(e), o = mu(e), a = pu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = zs(s)), [s, zs(s)];
}
function b_(e) {
  const t = zs(e);
  return [dl(e), t, dl(t)];
}
function dl(e) {
  return e.replace(/start|end/g, (t) => h_[t]);
}
function x_(e, t, n) {
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
function y_(e, t, n, r) {
  const o = Do(e);
  let a = x_(Wn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(dl)))), a;
}
function zs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => v_[t]);
}
function $_(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Vm(e) {
  return typeof e != "number" ? $_(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Bs(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function hf(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Mo(t), s = mu(t), i = pu(s), c = Wn(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (Do(t)) {
    case "start":
      m[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const w_ = async (e, t, n) => {
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
  } = hf(l, r, c), p = r, m = {}, h = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: b
    } = i[v], {
      x,
      y,
      data: _,
      reset: w
    } = await b({
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
    if (u = x ?? u, d = y ?? d, m = {
      ...m,
      [g]: {
        ...m[g],
        ..._
      }
    }, w && h <= 50) {
      h++, typeof w == "object" && (w.placement && (p = w.placement), w.rects && (l = w.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : w.rects), {
        x: u,
        y: d
      } = hf(l, p, c)), v = -1;
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
async function ia(e, t) {
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
  } = Vn(t, e), h = Vm(m), g = i[p ? d === "floating" ? "reference" : "floating" : d], b = Bs(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), x = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Bs(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: y,
    strategy: c
  }) : x);
  return {
    top: (b.top - w.top + h.top) / _.y,
    bottom: (w.bottom - b.bottom + h.bottom) / _.y,
    left: (b.left - w.left + h.left) / _.x,
    right: (w.right - b.right + h.right) / _.x
  };
}
const gf = (e) => ({
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
    const u = Vm(l), d = {
      x: n,
      y: r
    }, p = mu(o), m = pu(p), h = await s.getDimensions(c), v = p === "y", g = v ? "top" : "left", b = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", y = a.reference[m] + a.reference[p] - d[p] - a.floating[m], _ = d[p] - a.reference[p], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let N = w ? w[x] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(w))) && (N = i.floating[x] || a.floating[m]);
    const k = y / 2 - _ / 2, E = N / 2 - h[m] / 2 - 1, T = dr(u[g], E), K = dr(u[b], E), U = T, B = N - h[m] - K, Z = N / 2 - h[m] / 2 + k, F = ul(U, Z, B), L = Do(o) != null && Z != F && a.reference[m] / 2 - (Z < U ? T : K) - h[m] / 2 < 0 ? Z < U ? U - Z : B - Z : 0;
    return {
      [p]: d[p] - L,
      data: {
        [p]: F,
        centerOffset: Z - F + L
      }
    };
  }
}), __ = function(e) {
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
      } = Vn(e, t), g = Wn(r), b = Wn(s) === s, x = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), y = d || (b || !h ? [zs(s)] : b_(s));
      !d && m !== "none" && y.push(...y_(s, h, m, x));
      const _ = [s, ...y], w = await ia(t, v), N = [];
      let k = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && N.push(w[g]), u) {
        const U = g_(r, a, x);
        N.push(w[U[0]], w[U[1]]);
      }
      if (k = [...k, {
        placement: r,
        overflows: N
      }], !N.every((U) => U <= 0)) {
        var E, T;
        const U = (((E = o.flip) == null ? void 0 : E.index) || 0) + 1, B = _[U];
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
        let Z = (T = k.filter((F) => F.overflows[0] <= 0).sort((F, I) => F.overflows[1] - I.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!Z)
          switch (p) {
            case "bestFit": {
              var K;
              const F = (K = k.map((I) => [I.placement, I.overflows.filter((L) => L > 0).reduce((L, W) => L + W, 0)]).sort((I, L) => I[1] - L[1])[0]) == null ? void 0 : K[0];
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
function bf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function xf(e) {
  return m_.some((t) => e[t] >= 0);
}
const C_ = function(e) {
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
          const a = await ia(t, {
            ...o,
            elementContext: "reference"
          }), s = bf(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: xf(s)
            }
          };
        }
        case "escaped": {
          const a = await ia(t, {
            ...o,
            altBoundary: !0
          }), s = bf(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: xf(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function E_(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Wn(n), i = Do(n), c = Mo(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = Vn(t, e);
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
const S_ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await E_(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, N_ = function(e) {
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
              x: b,
              y: x
            } = g;
            return {
              x: b,
              y: x
            };
          }
        },
        ...c
      } = Vn(e, t), l = {
        x: n,
        y: r
      }, u = await ia(t, c), d = Mo(Wn(o)), p = fu(d);
      let m = l[p], h = l[d];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = m + u[g], y = m - u[b];
        m = ul(x, m, y);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", x = h + u[g], y = h - u[b];
        h = ul(x, h, y);
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
}, P_ = function(e) {
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
      }, d = Mo(o), p = fu(d);
      let m = u[p], h = u[d];
      const v = Vn(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const y = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[y] + g.mainAxis, w = a.reference[p] + a.reference[y] - g.mainAxis;
        m < _ ? m = _ : m > w && (m = w);
      }
      if (l) {
        var b, x;
        const y = p === "y" ? "width" : "height", _ = ["top", "left"].includes(Wn(o)), w = a.reference[d] - a.floating[y] + (_ && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (_ ? 0 : g.crossAxis), N = a.reference[d] + a.reference[y] + (_ ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (_ ? g.crossAxis : 0);
        h < w ? h = w : h > N && (h = N);
      }
      return {
        [p]: m,
        [d]: h
      };
    }
  };
}, T_ = function(e) {
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
      } = Vn(e, t), c = await ia(t, i), l = Wn(n), u = Do(n), d = Mo(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let h, v;
      l === "top" || l === "bottom" ? (h = l, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, h = u === "end" ? "top" : "bottom");
      const g = m - c[h], b = p - c[v], x = !t.middlewareData.shift;
      let y = g, _ = b;
      if (d) {
        const N = p - c.left - c.right;
        _ = u || x ? dr(b, N) : N;
      } else {
        const N = m - c.top - c.bottom;
        y = u || x ? dr(g, N) : N;
      }
      if (x && !u) {
        const N = Bt(c.left, 0), k = Bt(c.right, 0), E = Bt(c.top, 0), T = Bt(c.bottom, 0);
        d ? _ = p - 2 * (N !== 0 || k !== 0 ? N + k : Bt(c.left, c.right)) : y = m - 2 * (E !== 0 || T !== 0 ? E + T : Bt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: y
      });
      const w = await o.getDimensions(a.floating);
      return p !== w.width || m !== w.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pr(e) {
  return Wm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ht(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Zn(e) {
  var t;
  return (t = (Wm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Wm(e) {
  return e instanceof Node || e instanceof Ht(e).Node;
}
function Un(e) {
  return e instanceof Element || e instanceof Ht(e).Element;
}
function _n(e) {
  return e instanceof HTMLElement || e instanceof Ht(e).HTMLElement;
}
function yf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ht(e).ShadowRoot;
}
function Ia(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Xt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function O_(e) {
  return ["table", "td", "th"].includes(pr(e));
}
function vu(e) {
  const t = hu(), n = Xt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function k_(e) {
  let t = $o(e);
  for (; _n(t) && !Si(t); ) {
    if (vu(t))
      return t;
    t = $o(t);
  }
  return null;
}
function hu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Si(e) {
  return ["html", "body", "#document"].includes(pr(e));
}
function Xt(e) {
  return Ht(e).getComputedStyle(e);
}
function Ni(e) {
  return Un(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function $o(e) {
  if (pr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    yf(e) && e.host || // Fallback.
    Zn(e)
  );
  return yf(t) ? t.host : t;
}
function Um(e) {
  const t = $o(e);
  return Si(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _n(t) && Ia(t) ? t : Um(t);
}
function Hs(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Um(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ht(r);
  return o ? t.concat(a, a.visualViewport || [], Ia(r) ? r : []) : t.concat(r, Hs(r));
}
function zm(e) {
  const t = Xt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _n(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Us(n) !== a || Us(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function gu(e) {
  return Un(e) ? e : e.contextElement;
}
function mo(e) {
  const t = gu(e);
  if (!_n(t))
    return fr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = zm(t);
  let s = (a ? Us(n.width) : n.width) / r, i = (a ? Us(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const D_ = /* @__PURE__ */ fr(0);
function Bm(e) {
  const t = Ht(e);
  return !hu() || !t.visualViewport ? D_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function M_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ht(e) ? !1 : t;
}
function Ir(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = gu(e);
  let s = fr(1);
  t && (r ? Un(r) && (s = mo(r)) : s = mo(e));
  const i = M_(a, n, r) ? Bm(a) : fr(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const p = Ht(a), m = r && Un(r) ? Ht(r) : r;
    let h = p.frameElement;
    for (; h && r && m !== p; ) {
      const v = mo(h), g = h.getBoundingClientRect(), b = Xt(h), x = g.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, y = g.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += x, l += y, h = Ht(h).frameElement;
    }
  }
  return Bs({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function R_(e) {
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
  if ((o || !o && r !== "fixed") && ((pr(n) !== "body" || Ia(a)) && (s = Ni(n)), _n(n))) {
    const l = Ir(n);
    i = mo(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function j_(e) {
  return Array.from(e.getClientRects());
}
function Hm(e) {
  return Ir(Zn(e)).left + Ni(e).scrollLeft;
}
function A_(e) {
  const t = Zn(e), n = Ni(e), r = e.ownerDocument.body, o = Bt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Bt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Hm(e);
  const i = -n.scrollTop;
  return Xt(r).direction === "rtl" && (s += Bt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function I_(e, t) {
  const n = Ht(e), r = Zn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = hu();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function L_(e, t) {
  const n = Ir(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = _n(e) ? mo(e) : fr(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function $f(e, t, n) {
  let r;
  if (t === "viewport")
    r = I_(e, n);
  else if (t === "document")
    r = A_(Zn(e));
  else if (Un(t))
    r = L_(t, n);
  else {
    const o = Bm(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Bs(r);
}
function Km(e, t) {
  const n = $o(e);
  return n === t || !Un(n) || Si(n) ? !1 : Xt(n).position === "fixed" || Km(n, t);
}
function F_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Hs(e).filter((i) => Un(i) && pr(i) !== "body"), o = null;
  const a = Xt(e).position === "fixed";
  let s = a ? $o(e) : e;
  for (; Un(s) && !Si(s); ) {
    const i = Xt(s), c = vu(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ia(s) && !c && Km(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = $o(s);
  }
  return t.set(e, r), r;
}
function V_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? F_(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = $f(t, u, o);
    return l.top = Bt(d.top, l.top), l.right = dr(d.right, l.right), l.bottom = dr(d.bottom, l.bottom), l.left = Bt(d.left, l.left), l;
  }, $f(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function W_(e) {
  return zm(e);
}
function U_(e, t, n) {
  const r = _n(t), o = Zn(t), a = n === "fixed", s = Ir(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = fr(0);
  if (r || !r && !a)
    if ((pr(t) !== "body" || Ia(o)) && (i = Ni(t)), r) {
      const l = Ir(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Hm(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function wf(e, t) {
  return !_n(e) || Xt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Ym(e, t) {
  const n = Ht(e);
  if (!_n(e))
    return n;
  let r = wf(e, t);
  for (; r && O_(r) && Xt(r).position === "static"; )
    r = wf(r, t);
  return r && (pr(r) === "html" || pr(r) === "body" && Xt(r).position === "static" && !vu(r)) ? n : r || k_(e) || n;
}
const z_ = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Ym, a = this.getDimensions;
  return {
    reference: U_(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function B_(e) {
  return Xt(e).direction === "rtl";
}
const H_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: R_,
  getDocumentElement: Zn,
  getClippingRect: V_,
  getOffsetParent: Ym,
  getElementRects: z_,
  getClientRects: j_,
  getDimensions: W_,
  getScale: mo,
  isElement: Un,
  isRTL: B_
};
function K_(e, t) {
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
    const m = ds(u), h = ds(o.clientWidth - (l + d)), v = ds(o.clientHeight - (u + p)), g = ds(l), x = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: Bt(0, dr(1, c)) || 1
    };
    let y = !0;
    function _(w) {
      const N = w[0].intersectionRatio;
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
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, x);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Y_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = gu(e), u = o || a ? [...l ? Hs(l) : [], ...Hs(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const d = l && i ? K_(l, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let h, v = c ? Ir(e) : null;
  c && g();
  function g() {
    const b = Ir(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const G_ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: H_,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return w_(e, t, {
    ...o,
    platform: a
  });
}, q_ = (e) => {
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
      return r && t(r) ? r.current != null ? gf({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? gf({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Ts = typeof document < "u" ? ka : X;
function Ks(e, t) {
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
        if (!Ks(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Ks(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Gm(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _f(e, t) {
  const n = Gm(e);
  return Math.round(t * n) / n;
}
function Cf(e) {
  const t = C.useRef(e);
  return Ts(() => {
    t.current = e;
  }), t;
}
function Z_(e) {
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
  Ks(p, r) || m(r);
  const [h, v] = C.useState(null), [g, b] = C.useState(null), x = C.useCallback((L) => {
    L != N.current && (N.current = L, v(L));
  }, [v]), y = C.useCallback((L) => {
    L !== k.current && (k.current = L, b(L));
  }, [b]), _ = a || h, w = s || g, N = C.useRef(null), k = C.useRef(null), E = C.useRef(u), T = Cf(c), K = Cf(o), U = C.useCallback(() => {
    if (!N.current || !k.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: p
    };
    K.current && (L.platform = K.current), G_(N.current, k.current, L).then((W) => {
      const q = {
        ...W,
        isPositioned: !0
      };
      B.current && !Ks(E.current, q) && (E.current = q, U0.flushSync(() => {
        d(q);
      }));
    });
  }, [p, t, n, K]);
  Ts(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [l]);
  const B = C.useRef(!1);
  Ts(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Ts(() => {
    if (_ && (N.current = _), w && (k.current = w), _ && w) {
      if (T.current)
        return T.current(_, w, U);
      U();
    }
  }, [_, w, U, T]);
  const Z = C.useMemo(() => ({
    reference: N,
    floating: k,
    setReference: x,
    setFloating: y
  }), [x, y]), F = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), I = C.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return L;
    const W = _f(F.floating, u.x), q = _f(F.floating, u.y);
    return i ? {
      ...L,
      transform: "translate(" + W + "px, " + q + "px)",
      ...Gm(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: q
    };
  }, [n, i, F.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: U,
    refs: Z,
    elements: F,
    floatingStyles: I
  }), [u, U, Z, F, I]);
}
function La(e) {
  const [t, n] = te(void 0);
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
const qm = "Popper", [Zm, Tn] = ot(qm), [X_, Xm] = Zm(qm), Q_ = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = te(null);
  return /* @__PURE__ */ $(X_, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, J_ = "PopperAnchor", e2 = /* @__PURE__ */ A((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Xm(J_, n), s = H(null), i = Se(t, s);
  return X(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ $(ue.div, P({}, o, {
    ref: i
  }));
}), Qm = "PopperContent", [t2, nR] = Zm(Qm), n2 = /* @__PURE__ */ A((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: b = 0, sticky: x = "partial", hideWhenDetached: y = !1, avoidCollisions: _ = !0, onPlaced: w, ...N } = e, k = Xm(Qm, u), [E, T] = te(null), K = Se(
    t,
    (he) => T(he)
  ), [U, B] = te(null), Z = La(U), F = (n = Z == null ? void 0 : Z.width) !== null && n !== void 0 ? n : 0, I = (r = Z == null ? void 0 : Z.height) !== null && r !== void 0 ? r : 0, L = d + (m !== "center" ? "-" + m : ""), W = typeof b == "number" ? b : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...b
  }, q = Array.isArray(g) ? g : [
    g
  ], R = q.length > 0, D = {
    padding: W,
    boundary: q.filter(r2),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: R
  }, { refs: G, floatingStyles: Q, placement: ae, isPositioned: ne, middlewareData: ge } = Z_({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: L,
    whileElementsMounted: Y_,
    elements: {
      reference: k.anchor
    },
    middleware: [
      S_({
        mainAxis: p + I,
        alignmentAxis: h
      }),
      _ && N_({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? P_() : void 0,
        ...D
      }),
      _ && __({
        ...D
      }),
      T_({
        ...D,
        apply: ({ elements: he, rects: ye, availableWidth: O, availableHeight: z }) => {
          const { width: J, height: pe } = ye.reference, le = he.floating.style;
          le.setProperty("--radix-popper-available-width", `${O}px`), le.setProperty("--radix-popper-available-height", `${z}px`), le.setProperty("--radix-popper-anchor-width", `${J}px`), le.setProperty("--radix-popper-anchor-height", `${pe}px`);
        }
      }),
      U && q_({
        element: U,
        padding: v
      }),
      o2({
        arrowWidth: F,
        arrowHeight: I
      }),
      y && C_({
        strategy: "referenceHidden"
      })
    ]
  }), [be, oe] = Jm(ae), ie = Be(w);
  Ct(() => {
    ne && (ie == null || ie());
  }, [
    ne,
    ie
  ]);
  const me = (o = ge.arrow) === null || o === void 0 ? void 0 : o.x, Y = (a = ge.arrow) === null || a === void 0 ? void 0 : a.y, re = ((s = ge.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [V, fe] = te();
  return Ct(() => {
    E && fe(window.getComputedStyle(E).zIndex);
  }, [
    E
  ]), /* @__PURE__ */ $("div", {
    ref: G.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...Q,
      transform: ne ? Q.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: V,
      ["--radix-popper-transform-origin"]: [
        (i = ge.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ge.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ $(t2, {
    scope: u,
    placedSide: be,
    onArrowChange: B,
    arrowX: me,
    arrowY: Y,
    shouldHideArrow: re
  }, /* @__PURE__ */ $(ue.div, P({
    "data-side": be,
    "data-align": oe
  }, N, {
    ref: K,
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
function r2(e) {
  return e !== null;
}
const o2 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [h, v] = Jm(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], b = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, x = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let y = "", _ = "";
    return h === "bottom" ? (y = d ? g : `${b}px`, _ = `${-m}px`) : h === "top" ? (y = d ? g : `${b}px`, _ = `${c.floating.height + m}px`) : h === "right" ? (y = `${-m}px`, _ = d ? g : `${x}px`) : h === "left" && (y = `${c.floating.width + m}px`, _ = d ? g : `${x}px`), {
      data: {
        x: y,
        y: _
      }
    };
  }
});
function Jm(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Ro = Q_, Fa = e2, Va = n2, Pi = /* @__PURE__ */ A((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ xi.createPortal(/* @__PURE__ */ $(ue.div, P({}, o, {
    ref: t
  })), r) : null;
});
function a2(e, t) {
  return bi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const tt = (e) => {
  const { present: t, children: n } = e, r = s2(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Rt.only(n), a = Se(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Oo(o, {
    ref: a
  }) : null;
};
tt.displayName = "Presence";
function s2(e) {
  const [t, n] = te(), r = H({}), o = H(e), a = H("none"), s = e ? "mounted" : "unmounted", [i, c] = a2(s, {
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
  return X(() => {
    const l = fs(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), Ct(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = fs(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), Ct(() => {
    if (t) {
      const l = (d) => {
        const m = fs(r.current).includes(d.animationName);
        d.target === t && m && yi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = fs(r.current));
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
function fs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ft({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = i2({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Be(n), c = ve((l) => {
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
function i2({ defaultProp: e, onChange: t }) {
  const n = te(e), [r] = n, o = H(r), a = Be(t);
  return X(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const xc = "rovingFocusGroup.onEntryFocus", c2 = {
  bubbles: !1,
  cancelable: !0
}, bu = "RovingFocusGroup", [fl, ev, l2] = $r(bu), [u2, wr] = ot(bu, [
  l2
]), [d2, f2] = u2(bu), p2 = /* @__PURE__ */ A((e, t) => /* @__PURE__ */ $(fl.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(fl.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(m2, P({}, e, {
  ref: t
}))))), m2 = /* @__PURE__ */ A((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = H(null), p = Se(t, d), m = Pn(a), [h = null, v] = ft({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = te(!1), x = Be(l), y = ev(n), _ = H(!1), [w, N] = te(0);
  return X(() => {
    const k = d.current;
    if (k)
      return k.addEventListener(xc, x), () => k.removeEventListener(xc, x);
  }, [
    x
  ]), /* @__PURE__ */ $(d2, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: h,
    onItemFocus: ve(
      (k) => v(k),
      [
        v
      ]
    ),
    onItemShiftTab: ve(
      () => b(!0),
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
  }, /* @__PURE__ */ $(ue.div, P({
    tabIndex: g || w === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: ee(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: ee(e.onFocus, (k) => {
      const E = !_.current;
      if (k.target === k.currentTarget && E && !g) {
        const T = new CustomEvent(xc, c2);
        if (k.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
          const K = y().filter(
            (I) => I.focusable
          ), U = K.find(
            (I) => I.active
          ), B = K.find(
            (I) => I.id === h
          ), F = [
            U,
            B,
            ...K
          ].filter(Boolean).map(
            (I) => I.ref.current
          );
          tv(F);
        }
      }
      _.current = !1;
    }),
    onBlur: ee(
      e.onBlur,
      () => b(!1)
    )
  })));
}), v2 = "RovingFocusGroupItem", h2 = /* @__PURE__ */ A((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = lt(), c = a || i, l = f2(v2, n), u = l.currentTabStopId === c, d = ev(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = l;
  return X(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ $(fl.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ $(ue.span, P({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: ee(e.onMouseDown, (h) => {
      r ? l.onItemFocus(c) : h.preventDefault();
    }),
    onFocus: ee(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: ee(e.onKeyDown, (h) => {
      if (h.key === "Tab" && h.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (h.target !== h.currentTarget)
        return;
      const v = x2(h, l.orientation, l.dir);
      if (v !== void 0) {
        h.preventDefault();
        let b = d().filter(
          (x) => x.focusable
        ).map(
          (x) => x.ref.current
        );
        if (v === "last")
          b.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && b.reverse();
          const x = b.indexOf(h.currentTarget);
          b = l.loop ? y2(b, x + 1) : b.slice(x + 1);
        }
        setTimeout(
          () => tv(b)
        );
      }
    })
  })));
}), g2 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function b2(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function x2(e, t, n) {
  const r = b2(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return g2[r];
}
function tv(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function y2(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Ti = p2, Oi = h2;
var $2 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, no = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ new WeakMap(), ms = {}, yc = 0, nv = function(e) {
  return e && (e.host || nv(e.parentNode));
}, w2 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = nv(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, _2 = function(e, t, n, r) {
  var o = w2(t, Array.isArray(e) ? e : [e]);
  ms[n] || (ms[n] = /* @__PURE__ */ new WeakMap());
  var a = ms[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        u(p);
      else {
        var m = p.getAttribute(r), h = m !== null && m !== "false", v = (no.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
        no.set(p, v), a.set(p, g), s.push(p), v === 1 && h && ps.set(p, !0), g === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), yc++, function() {
    s.forEach(function(d) {
      var p = no.get(d) - 1, m = a.get(d) - 1;
      no.set(d, p), a.set(d, m), p || (ps.has(d) || d.removeAttribute(r), ps.delete(d)), m || d.removeAttribute(n);
    }), yc--, yc || (no = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ new WeakMap(), ms = {});
  };
}, jo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || $2(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), _2(r, o, n, "aria-hidden")) : function() {
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
function xu(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function rv(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ea = "right-scroll-bar-position", ta = "width-before-scroll-bar", C2 = "with-scroll-bars-hidden", E2 = "--removed-body-scroll-bar-size";
function S2(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function N2(e, t) {
  var n = te(function() {
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
function ov(e, t) {
  return N2(t || null, function(n) {
    return e.forEach(function(r) {
      return S2(r, n);
    });
  });
}
function P2(e) {
  return e;
}
function T2(e, t) {
  t === void 0 && (t = P2);
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
function av(e) {
  e === void 0 && (e = {});
  var t = T2(null);
  return t.options = Nt({ async: !0, ssr: !1 }, e), t;
}
var sv = function(e) {
  var t = e.sideCar, n = xu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, Nt({}, n));
};
sv.isSideCarExport = !0;
function iv(e, t) {
  return e.useMedium(t), sv;
}
var cv = av(), $c = function() {
}, ki = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: $c,
    onWheelCapture: $c,
    onTouchMoveCapture: $c
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, x = xu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = ov([n, t]), w = Nt(Nt({}, x), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: cv, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), Nt(Nt({}, w), { ref: _ })) : C.createElement(b, Nt({}, w, { className: c, ref: _ }), i)
  );
});
ki.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ki.classNames = {
  fullWidth: ta,
  zeroRight: ea
};
var Ef, O2 = function() {
  if (Ef)
    return Ef;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function k2() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = O2();
  return t && e.setAttribute("nonce", t), e;
}
function D2(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function M2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var R2 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = k2()) && (D2(t, n), M2(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, j2 = function() {
  var e = R2();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, yu = function() {
  var e = j2(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, A2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, wc = function(e) {
  return parseInt(e || "", 10) || 0;
}, I2 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [wc(n), wc(r), wc(o)];
}, L2 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return A2;
  var t = I2(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, F2 = yu(), V2 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(C2, ` {
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
  
  .`).concat(ea, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ta, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ea, " .").concat(ea, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ta, " .").concat(ta, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(E2, ": ").concat(i, `px;
  }
`);
}, lv = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return L2(o);
  }, [o]);
  return C.createElement(F2, { styles: V2(a, !t, o, n ? "" : "!important") });
}, pl = !1;
if (typeof window < "u")
  try {
    var vs = Object.defineProperty({}, "passive", {
      get: function() {
        return pl = !0, !0;
      }
    });
    window.addEventListener("test", vs, vs), window.removeEventListener("test", vs, vs);
  } catch {
    pl = !1;
  }
var ro = pl ? { passive: !1 } : !1, W2 = function(e) {
  return e.tagName === "TEXTAREA";
}, uv = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !W2(e) && n[t] === "visible")
  );
}, U2 = function(e) {
  return uv(e, "overflowY");
}, z2 = function(e) {
  return uv(e, "overflowX");
}, Sf = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = dv(e, n);
    if (r) {
      var o = fv(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, B2 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, H2 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, dv = function(e, t) {
  return e === "v" ? U2(t) : z2(t);
}, fv = function(e, t) {
  return e === "v" ? B2(t) : H2(t);
}, K2 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Y2 = function(e, t, n, r, o) {
  var a = K2(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = fv(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && dv(e, i) && (d += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, hs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Nf = function(e) {
  return [e.deltaX, e.deltaY];
}, Pf = function(e) {
  return e && "current" in e ? e.current : e;
}, G2 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, q2 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Z2 = 0, oo = [];
function X2(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(Z2++)[0], a = C.useState(function() {
    return yu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = rv([e.lockRef.current], (e.shards || []).map(Pf), !0).filter(Boolean);
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
    var b = hs(v), x = n.current, y = "deltaX" in v ? v.deltaX : x[0] - b[0], _ = "deltaY" in v ? v.deltaY : x[1] - b[1], w, N = v.target, k = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && N.type === "range")
      return !1;
    var E = Sf(k, N);
    if (!E)
      return !0;
    if (E ? w = k : (w = k === "v" ? "h" : "v", E = Sf(k, N)), !E)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = w), !w)
      return !0;
    var T = r.current || w;
    return Y2(T, g, v, T === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!oo.length || oo[oo.length - 1] !== a)) {
      var b = "deltaY" in g ? Nf(g) : hs(g), x = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && G2(w.delta, b);
      })[0];
      if (x && x.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!x) {
        var y = (s.current.shards || []).map(Pf).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, b, x) {
    var y = { name: v, delta: g, target: b, should: x };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = hs(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, Nf(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, hs(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return oo.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, ro), document.addEventListener("touchmove", c, ro), document.addEventListener("touchstart", u, ro), function() {
      oo = oo.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, ro), document.removeEventListener("touchmove", c, ro), document.removeEventListener("touchstart", u, ro);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: q2(o) }) : null,
    m ? C.createElement(lv, { gapMode: "margin" }) : null
  );
}
const Q2 = iv(cv, X2);
var pv = C.forwardRef(function(e, t) {
  return C.createElement(ki, Nt({}, e, { ref: t, sideCar: Q2 }));
});
pv.classNames = ki.classNames;
const Wa = pv, ml = [
  "Enter",
  " "
], J2 = [
  "ArrowDown",
  "PageUp",
  "Home"
], mv = [
  "ArrowUp",
  "PageDown",
  "End"
], eC = [
  ...J2,
  ...mv
], tC = {
  ltr: [
    ...ml,
    "ArrowRight"
  ],
  rtl: [
    ...ml,
    "ArrowLeft"
  ]
}, nC = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Di = "Menu", [ca, rC, oC] = $r(Di), [Kr, Ua] = ot(Di, [
  oC,
  Tn,
  wr
]), Mi = Tn(), vv = wr(), [hv, _r] = Kr(Di), [aC, za] = Kr(Di), sC = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Mi(t), [c, l] = te(null), u = H(!1), d = Be(a), p = Pn(o);
  return X(() => {
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
  }, []), /* @__PURE__ */ $(Ro, i, /* @__PURE__ */ $(hv, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ $(aC, {
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
}, gv = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Mi(n);
  return /* @__PURE__ */ $(Fa, P({}, o, r, {
    ref: t
  }));
}), bv = "MenuPortal", [iC, xv] = Kr(bv, {
  forceMount: void 0
}), cC = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = _r(bv, t);
  return /* @__PURE__ */ $(iC, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(tt, {
    present: n || a.open
  }, /* @__PURE__ */ $(Pi, {
    asChild: !0,
    container: o
  }, r)));
}, on = "MenuContent", [lC, $u] = Kr(on), uC = /* @__PURE__ */ A((e, t) => {
  const n = xv(on, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = _r(on, e.__scopeMenu), s = za(on, e.__scopeMenu);
  return /* @__PURE__ */ $(ca.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(tt, {
    present: r || a.open
  }, /* @__PURE__ */ $(ca.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ $(dC, P({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(fC, P({}, o, {
    ref: t
  })))));
}), dC = /* @__PURE__ */ A((e, t) => {
  const n = _r(on, e.__scopeMenu), r = H(null), o = Se(t, r);
  return X(() => {
    const a = r.current;
    if (a)
      return jo(a);
  }, []), /* @__PURE__ */ $(wu, P({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: ee(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), fC = /* @__PURE__ */ A((e, t) => {
  const n = _r(on, e.__scopeMenu);
  return /* @__PURE__ */ $(wu, P({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), wu = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = _r(on, n), b = za(on, n), x = Mi(n), y = vv(n), _ = rC(n), [w, N] = te(null), k = H(null), E = Se(t, k, g.onContentChange), T = H(0), K = H(""), U = H(0), B = H(null), Z = H("right"), F = H(0), I = h ? Wa : Kt, L = h ? {
    as: Zt,
    allowPinchZoom: !0
  } : void 0, W = (R) => {
    var D, G;
    const Q = K.current + R, ae = _().filter(
      (me) => !me.disabled
    ), ne = document.activeElement, ge = (D = ae.find(
      (me) => me.ref.current === ne
    )) === null || D === void 0 ? void 0 : D.textValue, be = ae.map(
      (me) => me.textValue
    ), oe = kC(be, Q, ge), ie = (G = ae.find(
      (me) => me.textValue === oe
    )) === null || G === void 0 ? void 0 : G.ref.current;
    (function me(Y) {
      K.current = Y, window.clearTimeout(T.current), Y !== "" && (T.current = window.setTimeout(
        () => me(""),
        1e3
      ));
    })(Q), ie && setTimeout(
      () => ie.focus()
    );
  };
  X(() => () => window.clearTimeout(T.current), []), Aa();
  const q = ve((R) => {
    var D, G;
    return Z.current === ((D = B.current) === null || D === void 0 ? void 0 : D.side) && MC(R, (G = B.current) === null || G === void 0 ? void 0 : G.area);
  }, []);
  return /* @__PURE__ */ $(lC, {
    scope: n,
    searchRef: K,
    onItemEnter: ve((R) => {
      q(R) && R.preventDefault();
    }, [
      q
    ]),
    onItemLeave: ve((R) => {
      var D;
      q(R) || ((D = k.current) === null || D === void 0 || D.focus(), N(null));
    }, [
      q
    ]),
    onTriggerLeave: ve((R) => {
      q(R) && R.preventDefault();
    }, [
      q
    ]),
    pointerGraceTimerRef: U,
    onPointerGraceIntentChange: ve((R) => {
      B.current = R;
    }, [])
  }, /* @__PURE__ */ $(I, L, /* @__PURE__ */ $(Ei, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: ee(a, (R) => {
      var D;
      R.preventDefault(), (D = k.current) === null || D === void 0 || D.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ $(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ $(Ti, P({
    asChild: !0
  }, y, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: N,
    onEntryFocus: ee(c, (R) => {
      b.isUsingKeyboardRef.current || R.preventDefault();
    })
  }), /* @__PURE__ */ $(Va, P({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": Sv(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, x, v, {
    ref: E,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: ee(v.onKeyDown, (R) => {
      const G = R.target.closest("[data-radix-menu-content]") === R.currentTarget, Q = R.ctrlKey || R.altKey || R.metaKey, ae = R.key.length === 1;
      G && (R.key === "Tab" && R.preventDefault(), !Q && ae && W(R.key));
      const ne = k.current;
      if (R.target !== ne || !eC.includes(R.key))
        return;
      R.preventDefault();
      const be = _().filter(
        (oe) => !oe.disabled
      ).map(
        (oe) => oe.ref.current
      );
      mv.includes(R.key) && be.reverse(), TC(be);
    }),
    onBlur: ee(e.onBlur, (R) => {
      R.currentTarget.contains(R.target) || (window.clearTimeout(T.current), K.current = "");
    }),
    onPointerMove: ee(e.onPointerMove, la((R) => {
      const D = R.target, G = F.current !== R.clientX;
      if (R.currentTarget.contains(D) && G) {
        const Q = R.clientX > F.current ? "right" : "left";
        Z.current = Q, F.current = R.clientX;
      }
    }))
  })))))));
}), yv = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(ue.div, P({
    role: "group"
  }, r, {
    ref: t
  }));
}), pC = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(ue.div, P({}, r, {
    ref: t
  }));
}), vl = "MenuItem", Tf = "menu.itemSelect", _u = /* @__PURE__ */ A((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = H(null), s = za(vl, e.__scopeMenu), i = $u(vl, e.__scopeMenu), c = Se(t, a), l = H(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const p = new CustomEvent(Tf, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        Tf,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), sa(d, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ $($v, P({}, o, {
    ref: c,
    disabled: n,
    onClick: ee(e.onClick, u),
    onPointerDown: (d) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, d), l.current = !0;
    },
    onPointerUp: ee(e.onPointerUp, (d) => {
      var p;
      l.current || (p = d.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: ee(e.onKeyDown, (d) => {
      const p = i.searchRef.current !== "";
      n || p && d.key === " " || ml.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), $v = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = $u(vl, n), i = vv(n), c = H(null), l = Se(t, c), [u, d] = te(!1), [p, m] = te("");
  return X(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ $(ca.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ $(Oi, P({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ $(ue.div, P({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: ee(e.onPointerMove, la((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: ee(e.onPointerLeave, la(
      (h) => s.onItemLeave(h)
    )),
    onFocus: ee(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: ee(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), mC = /* @__PURE__ */ A((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ $(_v, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ $(_u, P({
    role: "menuitemcheckbox",
    "aria-checked": Ys(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Cu(n),
    onSelect: ee(
      o.onSelect,
      () => r == null ? void 0 : r(Ys(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), vC = "MenuRadioGroup", [hC, gC] = Kr(vC, {
  value: void 0,
  onValueChange: () => {
  }
}), bC = /* @__PURE__ */ A((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Be(r);
  return /* @__PURE__ */ $(hC, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ $(yv, P({}, o, {
    ref: t
  })));
}), xC = "MenuRadioItem", yC = /* @__PURE__ */ A((e, t) => {
  const { value: n, ...r } = e, o = gC(xC, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ $(_v, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ $(_u, P({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Cu(a),
    onSelect: ee(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), wv = "MenuItemIndicator", [_v, $C] = Kr(wv, {
  checked: !1
}), wC = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = $C(wv, n);
  return /* @__PURE__ */ $(tt, {
    present: r || Ys(a.checked) || a.checked === !0
  }, /* @__PURE__ */ $(ue.span, P({}, o, {
    ref: t,
    "data-state": Cu(a.checked)
  })));
}), _C = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(ue.div, P({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), Cv = "MenuSub", [CC, Ev] = Kr(Cv), EC = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = _r(Cv, t), s = Mi(t), [i, c] = te(null), [l, u] = te(null), d = Be(o);
  return X(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ $(Ro, s, /* @__PURE__ */ $(hv, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ $(CC, {
    scope: t,
    contentId: lt(),
    triggerId: lt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, gs = "MenuSubTrigger", SC = /* @__PURE__ */ A((e, t) => {
  const n = _r(gs, e.__scopeMenu), r = za(gs, e.__scopeMenu), o = Ev(gs, e.__scopeMenu), a = $u(gs, e.__scopeMenu), s = H(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = ve(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return X(
    () => u,
    [
      u
    ]
  ), X(() => {
    const d = i.current;
    return () => {
      window.clearTimeout(d), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ $(gv, P({
    asChild: !0
  }, l), /* @__PURE__ */ $($v, P({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": Sv(n.open)
  }, e, {
    ref: Da(t, o.onTriggerChange),
    onClick: (d) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: ee(e.onPointerMove, la((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: ee(e.onPointerLeave, la((d) => {
      var p;
      u();
      const m = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
      if (m) {
        var h;
        const v = (h = n.content) === null || h === void 0 ? void 0 : h.dataset.side, g = v === "right", b = g ? -5 : 5, x = m[g ? "left" : "right"], y = m[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + b,
              y: d.clientY
            },
            {
              x,
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
              x,
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
    onKeyDown: ee(e.onKeyDown, (d) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && d.key === " ") && tC[r.dir].includes(d.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })));
}), NC = "MenuSubContent", PC = /* @__PURE__ */ A((e, t) => {
  const n = xv(on, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = _r(on, e.__scopeMenu), s = za(on, e.__scopeMenu), i = Ev(NC, e.__scopeMenu), c = H(null), l = Se(t, c);
  return /* @__PURE__ */ $(ca.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(tt, {
    present: r || a.open
  }, /* @__PURE__ */ $(ca.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(wu, P({
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
    onFocusOutside: ee(e.onFocusOutside, (u) => {
      u.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: ee(e.onEscapeKeyDown, (u) => {
      s.onClose(), u.preventDefault();
    }),
    onKeyDown: ee(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), p = nC[s.dir].includes(u.key);
      if (d && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function Sv(e) {
  return e ? "open" : "closed";
}
function Ys(e) {
  return e === "indeterminate";
}
function Cu(e) {
  return Ys(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function TC(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function OC(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function kC(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = OC(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function DC(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function MC(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return DC(n, t);
}
function la(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Eu = sC, Su = gv, Nu = cC, Pu = uC, Tu = yv, Ou = pC, ku = _u, Du = mC, Mu = bC, Ru = yC, ju = wC, Au = _C, Iu = EC, Lu = SC, Fu = PC, Nv = "ContextMenu", [RC, rR] = ot(Nv, [
  Ua
]), It = Ua(), [jC, Pv] = RC(Nv), AC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = te(!1), c = It(t), l = Be(r), u = ve((d) => {
    i(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ $(jC, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ $(Eu, P({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, IC = "ContextMenuTrigger", LC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = Pv(IC, n), s = It(n), i = H({
    x: 0,
    y: 0
  }), c = H({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = H(0), u = ve(
    () => window.clearTimeout(l.current),
    []
  ), d = (p) => {
    i.current = {
      x: p.clientX,
      y: p.clientY
    }, a.onOpenChange(!0);
  };
  return X(
    () => u,
    [
      u
    ]
  ), X(
    () => void (r && u()),
    [
      r,
      u
    ]
  ), /* @__PURE__ */ $(Kt, null, /* @__PURE__ */ $(Su, P({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ $(ue.span, P({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : ee(e.onContextMenu, (p) => {
      u(), d(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : ee(e.onPointerDown, bs((p) => {
      u(), l.current = window.setTimeout(
        () => d(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : ee(e.onPointerMove, bs(u)),
    onPointerCancel: r ? e.onPointerCancel : ee(e.onPointerCancel, bs(u)),
    onPointerUp: r ? e.onPointerUp : ee(e.onPointerUp, bs(u))
  })));
}), FC = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = It(t);
  return /* @__PURE__ */ $(Nu, P({}, r, n));
}, VC = "ContextMenuContent", WC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Pv(VC, n), a = It(n), s = H(!1);
  return /* @__PURE__ */ $(Pu, P({}, a, r, {
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
}), UC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(Tu, P({}, o, r, {
    ref: t
  }));
}), zC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(Ou, P({}, o, r, {
    ref: t
  }));
}), BC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(ku, P({}, o, r, {
    ref: t
  }));
}), HC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(Du, P({}, o, r, {
    ref: t
  }));
}), KC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(Mu, P({}, o, r, {
    ref: t
  }));
}), YC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(Ru, P({}, o, r, {
    ref: t
  }));
}), GC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(ju, P({}, o, r, {
    ref: t
  }));
}), qC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(Au, P({}, o, r, {
    ref: t
  }));
}), ZC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = It(t), [i, c] = ft({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ $(Iu, P({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, XC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(Lu, P({}, o, r, {
    ref: t
  }));
}), QC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(Fu, P({}, o, r, {
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
function bs(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const JC = AC, eE = LC, Tv = FC, Ov = WC, tE = UC, kv = zC, Dv = BC, Mv = HC, nE = KC, Rv = YC, jv = GC, Av = qC, rE = ZC, Iv = XC, Lv = QC, oR = JC, aR = eE, sR = tE, iR = Tv, cR = rE, lR = nE, oE = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Iv,
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
      /* @__PURE__ */ f.exports.jsx(xr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
oE.displayName = Iv.displayName;
const aE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Lv,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
aE.displayName = Lv.displayName;
const sE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(Tv, { children: /* @__PURE__ */ f.exports.jsx(
  Ov,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
sE.displayName = Ov.displayName;
const iE = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Dv,
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
iE.displayName = Dv.displayName;
const cE = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Mv,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(jv, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
cE.displayName = Mv.displayName;
const lE = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Rv,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(jv, { children: /* @__PURE__ */ f.exports.jsx(wi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
lE.displayName = Rv.displayName;
const uE = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  kv,
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
uE.displayName = kv.displayName;
const dE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Av,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
dE.displayName = Av.displayName;
const fE = ({
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
fE.displayName = "ContextMenuShortcut";
var Ba = (e) => e.type === "checkbox", uo = (e) => e instanceof Date, Dt = (e) => e == null;
const Fv = (e) => typeof e == "object";
var gt = (e) => !Dt(e) && !Array.isArray(e) && Fv(e) && !uo(e), Vv = (e) => gt(e) && e.target ? Ba(e.target) ? e.target.checked : e.target.value : e, pE = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Wv = (e, t) => e.has(pE(t)), mE = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return gt(t) && t.hasOwnProperty("isPrototypeOf");
}, Vu = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function xn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Vu && (e instanceof Blob || e instanceof FileList)) && (n || gt(e)))
    if (t = n ? [] : {}, !n && !mE(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = xn(e[r]));
  else
    return e;
  return t;
}
var Ha = (e) => Array.isArray(e) ? e.filter(Boolean) : [], pt = (e) => e === void 0, we = (e, t, n) => {
  if (!t || !gt(e))
    return n;
  const r = Ha(t.split(/[,[\].]+?/)).reduce((o, a) => Dt(o) ? o : o[a], e);
  return pt(r) || r === e ? pt(e[t]) ? n : e[t] : r;
};
const Gs = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, nn = {
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
}, Uv = S.createContext(null), Ri = () => S.useContext(Uv), vE = (e) => {
  const { children: t, ...n } = e;
  return S.createElement(Uv.Provider, { value: n }, t);
};
var zv = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== nn.all && (t._proxyFormState[s] = !r || nn.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Gt = (e) => gt(e) && !Object.keys(e).length, Bv = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Gt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || nn.all));
}, Os = (e) => Array.isArray(e) ? e : [e], Hv = (e, t, n) => n && t ? e === t : !e || !t || e === t || Os(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function Wu(e) {
  const t = S.useRef(e);
  t.current = e, S.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function hE(e) {
  const t = Ri(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = S.useState(n._formState), c = S.useRef(!0), l = S.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = S.useRef(o);
  return u.current = o, Wu({
    disabled: r,
    next: (d) => c.current && Hv(u.current, d.name, a) && Bv(d, l.current, n._updateFormState) && i({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), S.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), zv(s, n, l.current, !1);
}
var yn = (e) => typeof e == "string", Kv = (e, t, n, r, o) => yn(e) ? (r && t.watch.add(e), we(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), we(n, a))) : (r && (t.watchAll = !0), n);
function gE(e) {
  const t = Ri(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = S.useRef(r);
  i.current = r, Wu({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Hv(i.current, u.name, s) && l(xn(Kv(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = S.useState(n._getWatch(r, o));
  return S.useEffect(() => n._removeUnmounted()), c;
}
var Uu = (e) => /^\w*$/.test(e), Yv = (e) => Ha(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Qe(e, t, n) {
  let r = -1;
  const o = Uu(t) ? [t] : Yv(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const l = e[i];
      c = gt(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
}
function bE(e) {
  const t = Ri(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = Wv(r._names.array, n), s = gE({
    control: r,
    name: n,
    defaultValue: we(r._formValues, n, we(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = hE({
    control: r,
    name: n
  }), c = S.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), S.useEffect(() => {
    const l = r._options.shouldUnregister || o, u = (d, p) => {
      const m = we(r._fields, d);
      m && (m._f.mount = p);
    };
    if (u(n, !0), l) {
      const d = xn(we(r._options.defaultValues, n));
      Qe(r._defaultValues, n, d), pt(we(r._formValues, n)) && Qe(r._formValues, n, d);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : u(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: S.useCallback((l) => c.current.onChange({
        target: {
          value: Vv(l),
          name: n
        },
        type: Gs.CHANGE
      }), [n]),
      onBlur: S.useCallback(() => c.current.onBlur({
        target: {
          value: we(r._formValues, n),
          name: n
        },
        type: Gs.BLUR
      }), [n, r]),
      ref: (l) => {
        const u = we(r._fields, n);
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
        get: () => !!we(i.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!we(i.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!we(i.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => we(i.errors, n)
      }
    })
  };
}
const xE = (e) => e.render(bE(e));
var Gv = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const hl = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const o = we(e, r);
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
        gt(s) && hl(s, t);
    }
  }
};
var Of = (e) => ({
  isOnSubmit: !e || e === nn.onSubmit,
  isOnBlur: e === nn.onBlur,
  isOnChange: e === nn.onChange,
  isOnAll: e === nn.all,
  isOnTouch: e === nn.onTouched
}), kf = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), yE = (e, t, n) => {
  const r = Ha(we(e, n));
  return Qe(r, "root", t[n]), Qe(e, n, r), e;
}, vo = (e) => typeof e == "boolean", zu = (e) => e.type === "file", lr = (e) => typeof e == "function", qs = (e) => {
  if (!Vu)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, ks = (e) => yn(e), Bu = (e) => e.type === "radio", Zs = (e) => e instanceof RegExp;
const Df = {
  value: !1,
  isValid: !1
}, Mf = { value: !0, isValid: !0 };
var qv = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !pt(e[0].attributes.value) ? pt(e[0].value) || e[0].value === "" ? Mf : { value: e[0].value, isValid: !0 } : Mf
    ) : Df;
  }
  return Df;
};
const Rf = {
  isValid: !1,
  value: null
};
var Zv = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Rf) : Rf;
function jf(e, t, n = "validate") {
  if (ks(e) || Array.isArray(e) && e.every(ks) || vo(e) && !e)
    return {
      type: n,
      message: ks(e) ? e : "",
      ref: t
    };
}
var ao = (e) => gt(e) && !Zs(e) ? e : {
  value: e,
  message: ""
}, Af = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: m, name: h, valueAsNumber: v, mount: g, disabled: b } = e._f, x = we(t, h);
  if (!g || b)
    return {};
  const y = s ? s[0] : a, _ = (B) => {
    r && y.reportValidity && (y.setCustomValidity(vo(B) ? "" : B || ""), y.reportValidity());
  }, w = {}, N = Bu(a), k = Ba(a), E = N || k, T = (v || zu(a)) && pt(a.value) && pt(x) || qs(a) && a.value === "" || x === "" || Array.isArray(x) && !x.length, K = Gv.bind(null, h, n, w), U = (B, Z, F, I = Rn.maxLength, L = Rn.minLength) => {
    const W = B ? Z : F;
    w[h] = {
      type: B ? I : L,
      message: W,
      ref: a,
      ...K(B ? I : L, W)
    };
  };
  if (o ? !Array.isArray(x) || !x.length : i && (!E && (T || Dt(x)) || vo(x) && !x || k && !qv(s).isValid || N && !Zv(s).isValid)) {
    const { value: B, message: Z } = ks(i) ? { value: !!i, message: i } : ao(i);
    if (B && (w[h] = {
      type: Rn.required,
      message: Z,
      ref: y,
      ...K(Rn.required, Z)
    }, !n))
      return _(Z), w;
  }
  if (!T && (!Dt(u) || !Dt(d))) {
    let B, Z;
    const F = ao(d), I = ao(u);
    if (!Dt(x) && !isNaN(x)) {
      const L = a.valueAsNumber || x && +x;
      Dt(F.value) || (B = L > F.value), Dt(I.value) || (Z = L < I.value);
    } else {
      const L = a.valueAsDate || new Date(x), W = (D) => new Date(new Date().toDateString() + " " + D), q = a.type == "time", R = a.type == "week";
      yn(F.value) && x && (B = q ? W(x) > W(F.value) : R ? x > F.value : L > new Date(F.value)), yn(I.value) && x && (Z = q ? W(x) < W(I.value) : R ? x < I.value : L < new Date(I.value));
    }
    if ((B || Z) && (U(!!B, F.message, I.message, Rn.max, Rn.min), !n))
      return _(w[h].message), w;
  }
  if ((c || l) && !T && (yn(x) || o && Array.isArray(x))) {
    const B = ao(c), Z = ao(l), F = !Dt(B.value) && x.length > +B.value, I = !Dt(Z.value) && x.length < +Z.value;
    if ((F || I) && (U(F, B.message, Z.message), !n))
      return _(w[h].message), w;
  }
  if (p && !T && yn(x)) {
    const { value: B, message: Z } = ao(p);
    if (Zs(B) && !x.match(B) && (w[h] = {
      type: Rn.pattern,
      message: Z,
      ref: a,
      ...K(Rn.pattern, Z)
    }, !n))
      return _(Z), w;
  }
  if (m) {
    if (lr(m)) {
      const B = await m(x, t), Z = jf(B, y);
      if (Z && (w[h] = {
        ...Z,
        ...K(Rn.validate, Z.message)
      }, !n))
        return _(Z.message), w;
    } else if (gt(m)) {
      let B = {};
      for (const Z in m) {
        if (!Gt(B) && !n)
          break;
        const F = jf(await m[Z](x, t), y, Z);
        F && (B = {
          ...F,
          ...K(Z, F.message)
        }, _(F.message), n && (w[h] = B));
      }
      if (!Gt(B) && (w[h] = {
        ref: y,
        ...B
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function $E(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = pt(e) ? r++ : e[t[r++]];
  return e;
}
function wE(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !pt(e[t]))
      return !1;
  return !0;
}
function $t(e, t) {
  const n = Array.isArray(t) ? t : Uu(t) ? [t] : Yv(t), r = n.length === 1 ? e : $E(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (gt(r) && Gt(r) || Array.isArray(r) && wE(r)) && $t(e, n.slice(0, -1)), e;
}
function _c() {
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
var Xs = (e) => Dt(e) || !Fv(e);
function Dr(e, t) {
  if (Xs(e) || Xs(t))
    return e === t;
  if (uo(e) && uo(t))
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
      if (uo(a) && uo(s) || gt(a) && gt(s) || Array.isArray(a) && Array.isArray(s) ? !Dr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Xv = (e) => e.type === "select-multiple", _E = (e) => Bu(e) || Ba(e), Cc = (e) => qs(e) && e.isConnected, Qv = (e) => {
  for (const t in e)
    if (lr(e[t]))
      return !0;
  return !1;
};
function Qs(e, t = {}) {
  const n = Array.isArray(e);
  if (gt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || gt(e[r]) && !Qv(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Qs(e[r], t[r])) : Dt(e[r]) || (t[r] = !0);
  return t;
}
function Jv(e, t, n) {
  const r = Array.isArray(e);
  if (gt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || gt(e[o]) && !Qv(e[o]) ? pt(t) || Xs(n[o]) ? n[o] = Array.isArray(e[o]) ? Qs(e[o], []) : { ...Qs(e[o]) } : Jv(e[o], Dt(t) ? {} : t[o], n[o]) : n[o] = !Dr(e[o], t[o]);
  return n;
}
var Ec = (e, t) => Jv(e, t, Qs(t)), eh = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => pt(e) ? e : t ? e === "" ? NaN : e && +e : n && yn(e) ? new Date(e) : r ? r(e) : e;
function Sc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return zu(t) ? t.files : Bu(t) ? Zv(e.refs).value : Xv(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Ba(t) ? qv(e.refs).value : eh(pt(t.value) ? e.ref.value : t.value, e);
}
var CE = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = we(t, a);
    s && Qe(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Zo = (e) => pt(e) ? e : Zs(e) ? e.source : gt(e) ? Zs(e.value) ? e.value.source : e.value : e, EE = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function If(e, t, n) {
  const r = we(e, n);
  if (r || Uu(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = we(t, a), i = we(e, a);
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
var SE = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, NE = (e, t) => !Ha(we(e, t)).length && $t(e, t);
const PE = {
  mode: nn.onSubmit,
  reValidateMode: nn.onChange,
  shouldFocusError: !0
};
function TE(e = {}, t) {
  let n = {
    ...PE,
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
  }, o = {}, a = gt(n.defaultValues) || gt(n.values) ? xn(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : xn(a), i = {
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
    values: _c(),
    array: _c(),
    state: _c()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, h = Of(n.mode), v = Of(n.reValidateMode), g = n.criteriaMode === nn.all, b = (O) => (z) => {
    clearTimeout(u), u = setTimeout(O, z);
  }, x = async (O) => {
    if (d.isValid || O) {
      const z = n.resolver ? Gt((await T()).errors) : await U(o, !0);
      z !== r.isValid && p.state.next({
        isValid: z
      });
    }
  }, y = (O) => d.isValidating && p.state.next({
    isValidating: O
  }), _ = (O, z = [], J, pe, le = !0, se = !0) => {
    if (pe && J) {
      if (i.action = !0, se && Array.isArray(we(o, O))) {
        const $e = J(we(o, O), pe.argA, pe.argB);
        le && Qe(o, O, $e);
      }
      if (se && Array.isArray(we(r.errors, O))) {
        const $e = J(we(r.errors, O), pe.argA, pe.argB);
        le && Qe(r.errors, O, $e), NE(r.errors, O);
      }
      if (d.touchedFields && se && Array.isArray(we(r.touchedFields, O))) {
        const $e = J(we(r.touchedFields, O), pe.argA, pe.argB);
        le && Qe(r.touchedFields, O, $e);
      }
      d.dirtyFields && (r.dirtyFields = Ec(a, s)), p.state.next({
        name: O,
        isDirty: Z(O, z),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Qe(s, O, z);
  }, w = (O, z) => {
    Qe(r.errors, O, z), p.state.next({
      errors: r.errors
    });
  }, N = (O, z, J, pe) => {
    const le = we(o, O);
    if (le) {
      const se = we(s, O, pt(J) ? we(a, O) : J);
      pt(se) || pe && pe.defaultChecked || z ? Qe(s, O, z ? se : Sc(le._f)) : L(O, se), i.mount && x();
    }
  }, k = (O, z, J, pe, le) => {
    let se = !1, $e = !1;
    const Le = {
      name: O
    };
    if (!J || pe) {
      d.isDirty && ($e = r.isDirty, r.isDirty = Le.isDirty = Z(), se = $e !== Le.isDirty);
      const Ue = Dr(we(a, O), z);
      $e = we(r.dirtyFields, O), Ue ? $t(r.dirtyFields, O) : Qe(r.dirtyFields, O, !0), Le.dirtyFields = r.dirtyFields, se = se || d.dirtyFields && $e !== !Ue;
    }
    if (J) {
      const Ue = we(r.touchedFields, O);
      Ue || (Qe(r.touchedFields, O, J), Le.touchedFields = r.touchedFields, se = se || d.touchedFields && Ue !== J);
    }
    return se && le && p.state.next(Le), se ? Le : {};
  }, E = (O, z, J, pe) => {
    const le = we(r.errors, O), se = d.isValid && vo(z) && r.isValid !== z;
    if (e.delayError && J ? (l = b(() => w(O, J)), l(e.delayError)) : (clearTimeout(u), l = null, J ? Qe(r.errors, O, J) : $t(r.errors, O)), (J ? !Dr(le, J) : le) || !Gt(pe) || se) {
      const $e = {
        ...pe,
        ...se && vo(z) ? { isValid: z } : {},
        errors: r.errors,
        name: O
      };
      r = {
        ...r,
        ...$e
      }, p.state.next($e);
    }
    y(!1);
  }, T = async (O) => n.resolver(s, n.context, CE(O || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), K = async (O) => {
    const { errors: z } = await T();
    if (O)
      for (const J of O) {
        const pe = we(z, J);
        pe ? Qe(r.errors, J, pe) : $t(r.errors, J);
      }
    else
      r.errors = z;
    return z;
  }, U = async (O, z, J = {
    valid: !0
  }) => {
    for (const pe in O) {
      const le = O[pe];
      if (le) {
        const { _f: se, ...$e } = le;
        if (se) {
          const Le = c.array.has(se.name), Ue = await Af(le, s, g, n.shouldUseNativeValidation && !z, Le);
          if (Ue[se.name] && (J.valid = !1, z))
            break;
          !z && (we(Ue, se.name) ? Le ? yE(r.errors, Ue, se.name) : Qe(r.errors, se.name, Ue[se.name]) : $t(r.errors, se.name));
        }
        $e && await U($e, z, J);
      }
    }
    return J.valid;
  }, B = () => {
    for (const O of c.unMount) {
      const z = we(o, O);
      z && (z._f.refs ? z._f.refs.every((J) => !Cc(J)) : !Cc(z._f.ref)) && be(O);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, Z = (O, z) => (O && z && Qe(s, O, z), !Dr(G(), a)), F = (O, z, J) => Kv(O, c, {
    ...i.mount ? s : pt(z) ? a : yn(O) ? { [O]: z } : z
  }, J, z), I = (O) => Ha(we(i.mount ? s : a, O, e.shouldUnregister ? we(a, O, []) : [])), L = (O, z, J = {}) => {
    const pe = we(o, O);
    let le = z;
    if (pe) {
      const se = pe._f;
      se && (!se.disabled && Qe(s, O, eh(z, se)), le = qs(se.ref) && Dt(z) ? "" : z, Xv(se.ref) ? [...se.ref.options].forEach(($e) => $e.selected = le.includes($e.value)) : se.refs ? Ba(se.ref) ? se.refs.length > 1 ? se.refs.forEach(($e) => (!$e.defaultChecked || !$e.disabled) && ($e.checked = Array.isArray(le) ? !!le.find((Le) => Le === $e.value) : le === $e.value)) : se.refs[0] && (se.refs[0].checked = !!le) : se.refs.forEach(($e) => $e.checked = $e.value === le) : zu(se.ref) ? se.ref.value = "" : (se.ref.value = le, se.ref.type || p.values.next({
        name: O,
        values: { ...s }
      })));
    }
    (J.shouldDirty || J.shouldTouch) && k(O, le, J.shouldTouch, J.shouldDirty, !0), J.shouldValidate && D(O);
  }, W = (O, z, J) => {
    for (const pe in z) {
      const le = z[pe], se = `${O}.${pe}`, $e = we(o, se);
      (c.array.has(O) || !Xs(le) || $e && !$e._f) && !uo(le) ? W(se, le, J) : L(se, le, J);
    }
  }, q = (O, z, J = {}) => {
    const pe = we(o, O), le = c.array.has(O), se = xn(z);
    Qe(s, O, se), le ? (p.array.next({
      name: O,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && J.shouldDirty && p.state.next({
      name: O,
      dirtyFields: Ec(a, s),
      isDirty: Z(O, se)
    })) : pe && !pe._f && !Dt(se) ? W(O, se, J) : L(O, se, J), kf(O, c) && p.state.next({ ...r }), p.values.next({
      name: O,
      values: { ...s }
    }), !i.mount && t();
  }, R = async (O) => {
    const z = O.target;
    let J = z.name, pe = !0;
    const le = we(o, J), se = () => z.type ? Sc(le._f) : Vv(O);
    if (le) {
      let $e, Le;
      const Ue = se(), yt = O.type === Gs.BLUR || O.type === Gs.FOCUS_OUT, bn = !EE(le._f) && !n.resolver && !we(r.errors, J) && !le._f.deps || SE(yt, we(r.touchedFields, J), r.isSubmitted, v, h), Et = kf(J, c, yt);
      Qe(s, J, Ue), yt ? (le._f.onBlur && le._f.onBlur(O), l && l(0)) : le._f.onChange && le._f.onChange(O);
      const Ne = k(J, Ue, yt, !1), Ee = !Gt(Ne) || Et;
      if (!yt && p.values.next({
        name: J,
        type: O.type,
        values: { ...s }
      }), bn)
        return d.isValid && x(), Ee && p.state.next({ name: J, ...Et ? {} : Ne });
      if (!yt && Et && p.state.next({ ...r }), y(!0), n.resolver) {
        const { errors: Re } = await T([J]), Ke = If(r.errors, o, J), nt = If(Re, o, Ke.name || J);
        $e = nt.error, J = nt.name, Le = Gt(Re);
      } else
        $e = (await Af(le, s, g, n.shouldUseNativeValidation))[J], pe = isNaN(Ue) || Ue === we(s, J, Ue), pe && ($e ? Le = !1 : d.isValid && (Le = await U(o, !0)));
      pe && (le._f.deps && D(le._f.deps), E(J, Le, $e, Ne));
    }
  }, D = async (O, z = {}) => {
    let J, pe;
    const le = Os(O);
    if (y(!0), n.resolver) {
      const se = await K(pt(O) ? O : le);
      J = Gt(se), pe = O ? !le.some(($e) => we(se, $e)) : J;
    } else
      O ? (pe = (await Promise.all(le.map(async (se) => {
        const $e = we(o, se);
        return await U($e && $e._f ? { [se]: $e } : $e);
      }))).every(Boolean), !(!pe && !r.isValid) && x()) : pe = J = await U(o);
    return p.state.next({
      ...!yn(O) || d.isValid && J !== r.isValid ? {} : { name: O },
      ...n.resolver || !O ? { isValid: J } : {},
      errors: r.errors,
      isValidating: !1
    }), z.shouldFocus && !pe && hl(o, (se) => se && we(r.errors, se), O ? le : c.mount), pe;
  }, G = (O) => {
    const z = {
      ...a,
      ...i.mount ? s : {}
    };
    return pt(O) ? z : yn(O) ? we(z, O) : O.map((J) => we(z, J));
  }, Q = (O, z) => ({
    invalid: !!we((z || r).errors, O),
    isDirty: !!we((z || r).dirtyFields, O),
    isTouched: !!we((z || r).touchedFields, O),
    error: we((z || r).errors, O)
  }), ae = (O) => {
    O && Os(O).forEach((z) => $t(r.errors, z)), p.state.next({
      errors: O ? r.errors : {}
    });
  }, ne = (O, z, J) => {
    const pe = (we(o, O, { _f: {} })._f || {}).ref;
    Qe(r.errors, O, {
      ...z,
      ref: pe
    }), p.state.next({
      name: O,
      errors: r.errors,
      isValid: !1
    }), J && J.shouldFocus && pe && pe.focus && pe.focus();
  }, ge = (O, z) => lr(O) ? p.values.subscribe({
    next: (J) => O(F(void 0, z), J)
  }) : F(O, z, !0), be = (O, z = {}) => {
    for (const J of O ? Os(O) : c.mount)
      c.mount.delete(J), c.array.delete(J), z.keepValue || ($t(o, J), $t(s, J)), !z.keepError && $t(r.errors, J), !z.keepDirty && $t(r.dirtyFields, J), !z.keepTouched && $t(r.touchedFields, J), !n.shouldUnregister && !z.keepDefaultValue && $t(a, J);
    p.values.next({
      values: { ...s }
    }), p.state.next({
      ...r,
      ...z.keepDirty ? { isDirty: Z() } : {}
    }), !z.keepIsValid && x();
  }, oe = (O, z = {}) => {
    let J = we(o, O);
    const pe = vo(z.disabled);
    return Qe(o, O, {
      ...J || {},
      _f: {
        ...J && J._f ? J._f : { ref: { name: O } },
        name: O,
        mount: !0,
        ...z
      }
    }), c.mount.add(O), pt(z.value) || Qe(s, O, z.value), J ? pe && Qe(s, O, z.disabled ? void 0 : we(s, O, Sc(J._f))) : N(O, !0, z.value), {
      ...pe ? { disabled: z.disabled } : {},
      ...n.progressive ? {
        required: !!z.required,
        min: Zo(z.min),
        max: Zo(z.max),
        minLength: Zo(z.minLength),
        maxLength: Zo(z.maxLength),
        pattern: Zo(z.pattern)
      } : {},
      name: O,
      onChange: R,
      onBlur: R,
      ref: (le) => {
        if (le) {
          oe(O, z), J = we(o, O);
          const se = pt(le.value) && le.querySelectorAll && le.querySelectorAll("input,select,textarea")[0] || le, $e = _E(se), Le = J._f.refs || [];
          if ($e ? Le.find((Ue) => Ue === se) : se === J._f.ref)
            return;
          Qe(o, O, {
            _f: {
              ...J._f,
              ...$e ? {
                refs: [
                  ...Le.filter(Cc),
                  se,
                  ...Array.isArray(we(a, O)) ? [{}] : []
                ],
                ref: { type: se.type, name: O }
              } : { ref: se }
            }
          }), N(O, !1, void 0, se);
        } else
          J = we(o, O, {}), J._f && (J._f.mount = !1), (n.shouldUnregister || z.shouldUnregister) && !(Wv(c.array, O) && i.action) && c.unMount.add(O);
      }
    };
  }, ie = () => n.shouldFocusError && hl(o, (O) => O && we(r.errors, O), c.mount), me = (O, z) => async (J) => {
    J && (J.preventDefault && J.preventDefault(), J.persist && J.persist());
    let pe = xn(s);
    if (p.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: le, values: se } = await T();
      r.errors = le, pe = se;
    } else
      await U(o);
    $t(r.errors, "root"), Gt(r.errors) ? (p.state.next({
      errors: {}
    }), await O(pe, J)) : (z && await z({ ...r.errors }, J), ie(), setTimeout(ie)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Gt(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, Y = (O, z = {}) => {
    we(o, O) && (pt(z.defaultValue) ? q(O, we(a, O)) : (q(O, z.defaultValue), Qe(a, O, z.defaultValue)), z.keepTouched || $t(r.touchedFields, O), z.keepDirty || ($t(r.dirtyFields, O), r.isDirty = z.defaultValue ? Z(O, we(a, O)) : Z()), z.keepError || ($t(r.errors, O), d.isValid && x()), p.state.next({ ...r }));
  }, re = (O, z = {}) => {
    const J = O || a, pe = xn(J), le = O && !Gt(O) ? pe : a;
    if (z.keepDefaultValues || (a = J), !z.keepValues) {
      if (z.keepDirtyValues || m)
        for (const se of c.mount)
          we(r.dirtyFields, se) ? Qe(le, se, we(s, se)) : q(se, we(le, se));
      else {
        if (Vu && pt(O))
          for (const se of c.mount) {
            const $e = we(o, se);
            if ($e && $e._f) {
              const Le = Array.isArray($e._f.refs) ? $e._f.refs[0] : $e._f.ref;
              if (qs(Le)) {
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
      s = e.shouldUnregister ? z.keepDefaultValues ? xn(a) : {} : xn(le), p.array.next({
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
      isDirty: z.keepDirty ? r.isDirty : !!(z.keepDefaultValues && !Dr(O, a)),
      isSubmitted: z.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: z.keepDirtyValues ? r.dirtyFields : z.keepDefaultValues && O ? Ec(a, O) : {},
      touchedFields: z.keepTouched ? r.touchedFields : {},
      errors: z.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, V = (O, z) => re(lr(O) ? O(s) : O, z);
  return {
    control: {
      register: oe,
      unregister: be,
      getFieldState: Q,
      handleSubmit: me,
      setError: ne,
      _executeSchema: T,
      _getWatch: F,
      _getDirty: Z,
      _updateValid: x,
      _removeUnmounted: B,
      _updateFieldArray: _,
      _getFieldArray: I,
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
    trigger: D,
    register: oe,
    handleSubmit: me,
    watch: ge,
    setValue: q,
    getValues: G,
    reset: V,
    resetField: Y,
    clearErrors: ae,
    unregister: be,
    setError: ne,
    setFocus: (O, z = {}) => {
      const J = we(o, O), pe = J && J._f;
      if (pe) {
        const le = pe.refs ? pe.refs[0] : pe.ref;
        le.focus && (le.focus(), z.shouldSelect && le.select());
      }
    },
    getFieldState: Q
  };
}
function th(e = {}) {
  const t = S.useRef(), n = S.useRef(), [r, o] = S.useState({
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
    ...TE(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, Wu({
    subject: a._subjects.state,
    next: (s) => {
      Bv(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), S.useEffect(() => {
    e.values && !Dr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), S.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = zv(r, a), t.current;
}
const OE = /* @__PURE__ */ A((e, t) => /* @__PURE__ */ $(ue.label, P({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), nh = OE, kE = ko(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), On = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  nh,
  {
    ref: n,
    className: j(kE(), e),
    ...t
  }
));
On.displayName = nh.displayName;
const rh = vE, oh = C.createContext(
  {}
), Yr = ({
  ...e
}) => /* @__PURE__ */ f.exports.jsx(oh.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.exports.jsx(xE, { ...e }) }), ji = () => {
  const e = C.useContext(oh), t = C.useContext(ah), { getFieldState: n, formState: r } = Ri(), o = n(e.name, r);
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
}, ah = C.createContext(
  {}
), Cr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ f.exports.jsx(ah.Provider, { value: { id: r }, children: /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: j("space-y-2", e), ...t }) });
});
Cr.displayName = "FormItem";
const Gr = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = ji();
  return /* @__PURE__ */ f.exports.jsx(
    On,
    {
      ref: n,
      className: j(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Gr.displayName = "FormLabel";
const Ka = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = ji();
  return /* @__PURE__ */ f.exports.jsx(
    Zt,
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
const Ao = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = ji();
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
Ao.displayName = "FormDescription";
const DE = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = ji(), s = o ? String(o == null ? void 0 : o.message) : t;
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
DE.displayName = "FormMessage";
const gl = "dismissableLayer.update", ME = "dismissableLayer.pointerDownOutside", RE = "dismissableLayer.focusOutside";
let Lf;
const jE = /* @__PURE__ */ ht({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), AE = /* @__PURE__ */ A((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = Xe(jE), [d, p] = te(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = te({}), v = Se(
    t,
    (E) => p(E)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), x = g.indexOf(b), y = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, w = y >= x, N = IE((E) => {
    const T = E.target, K = [
      ...u.branches
    ].some(
      (U) => U.contains(T)
    );
    !w || K || (a == null || a(E), i == null || i(E), E.defaultPrevented || c == null || c());
  }, m), k = LE((E) => {
    const T = E.target;
    [
      ...u.branches
    ].some(
      (U) => U.contains(T)
    ) || (s == null || s(E), i == null || i(E), E.defaultPrevented || c == null || c());
  }, m);
  return Im((E) => {
    y === u.layers.size - 1 && (o == null || o(E), !E.defaultPrevented && c && (E.preventDefault(), c()));
  }, m), X(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Lf = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Ff(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Lf);
      };
  }, [
    d,
    m,
    r,
    u
  ]), X(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Ff());
  }, [
    d,
    u
  ]), X(() => {
    const E = () => h({});
    return document.addEventListener(gl, E), () => document.removeEventListener(gl, E);
  }, []), /* @__PURE__ */ $(ue.div, P({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ee(e.onFocusCapture, k.onFocusCapture),
    onBlurCapture: ee(e.onBlurCapture, k.onBlurCapture),
    onPointerDownCapture: ee(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
});
function IE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Be(e), r = H(!1), o = H(() => {
  });
  return X(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          sh(ME, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: i
        };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", o.current);
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
function LE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Be(e), r = H(!1);
  return X(() => {
    const o = (a) => {
      a.target && !r.current && sh(RE, n, {
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
function Ff() {
  const e = new CustomEvent(gl);
  document.dispatchEvent(e);
}
function sh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? sa(o, a) : o.dispatchEvent(a);
}
const Nc = "focusScope.autoFocusOnMount", Pc = "focusScope.autoFocusOnUnmount", Vf = {
  bubbles: !1,
  cancelable: !0
}, FE = /* @__PURE__ */ A((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = te(null), l = Be(o), u = Be(a), d = H(null), p = Se(
    t,
    (v) => c(v)
  ), m = H({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  X(() => {
    if (r) {
      let v = function(y) {
        if (m.paused || !i)
          return;
        const _ = y.target;
        i.contains(_) ? d.current = _ : sr(d.current, {
          select: !0
        });
      }, g = function(y) {
        if (m.paused || !i)
          return;
        const _ = y.relatedTarget;
        _ !== null && (i.contains(_) || sr(d.current, {
          select: !0
        }));
      }, b = function(y) {
        if (document.activeElement === document.body)
          for (const w of y)
            w.removedNodes.length > 0 && sr(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const x = new MutationObserver(b);
      return i && x.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), x.disconnect();
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), X(() => {
    if (i) {
      Uf.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Nc, Vf);
        i.addEventListener(Nc, l), i.dispatchEvent(b), b.defaultPrevented || (VE(HE(ih(i)), {
          select: !0
        }), document.activeElement === v && sr(i));
      }
      return () => {
        i.removeEventListener(Nc, l), setTimeout(() => {
          const b = new CustomEvent(Pc, Vf);
          i.addEventListener(Pc, u), i.dispatchEvent(b), b.defaultPrevented || sr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Pc, u), Uf.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const h = ve((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const x = v.currentTarget, [y, _] = WE(x);
      y && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && sr(y, {
        select: !0
      })) : v.shiftKey && b === y && (v.preventDefault(), n && sr(_, {
        select: !0
      })) : b === x && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ $(ue.div, P({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function VE(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (sr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function WE(e) {
  const t = ih(e), n = Wf(t, e), r = Wf(t.reverse(), e);
  return [
    n,
    r
  ];
}
function ih(e) {
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
function Wf(e, t) {
  for (const n of e)
    if (!UE(n, {
      upTo: t
    }))
      return n;
}
function UE(e, { upTo: t }) {
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
function zE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function sr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && zE(e) && t && e.select();
  }
}
const Uf = BE();
function BE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = zf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = zf(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function zf(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function HE(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const KE = /* @__PURE__ */ A((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ xi.createPortal(/* @__PURE__ */ $(ue.div, P({}, o, {
    ref: t
  })), r) : null;
}), ch = "Dialog", [lh, uR] = ot(ch), [YE, mn] = lh(ch), GE = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = H(null), c = H(null), [l = !1, u] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(YE, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: lt(),
    titleId: lt(),
    descriptionId: lt(),
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
}, qE = "DialogTrigger", ZE = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(qE, n), a = Se(t, o.triggerRef);
  return /* @__PURE__ */ $(ue.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Hu(o.open)
  }, r, {
    ref: a,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
}), uh = "DialogPortal", [XE, dh] = lh(uh, {
  forceMount: void 0
}), QE = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = mn(uh, t);
  return /* @__PURE__ */ $(XE, {
    scope: t,
    forceMount: n
  }, Rt.map(
    r,
    (s) => /* @__PURE__ */ $(tt, {
      present: n || a.open
    }, /* @__PURE__ */ $(KE, {
      asChild: !0,
      container: o
    }, s))
  ));
}, bl = "DialogOverlay", JE = /* @__PURE__ */ A((e, t) => {
  const n = dh(bl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = mn(bl, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ $(tt, {
    present: r || a.open
  }, /* @__PURE__ */ $(eS, P({}, o, {
    ref: t
  }))) : null;
}), eS = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(bl, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $(Wa, {
      as: Zt,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ $(ue.div, P({
      "data-state": Hu(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), wo = "DialogContent", tS = /* @__PURE__ */ A((e, t) => {
  const n = dh(wo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = mn(wo, e.__scopeDialog);
  return /* @__PURE__ */ $(tt, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(nS, P({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(rS, P({}, o, {
    ref: t
  })));
}), nS = /* @__PURE__ */ A((e, t) => {
  const n = mn(wo, e.__scopeDialog), r = H(null), o = Se(t, n.contentRef, r);
  return X(() => {
    const a = r.current;
    if (a)
      return jo(a);
  }, []), /* @__PURE__ */ $(fh, P({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ee(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: ee(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: ee(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), rS = /* @__PURE__ */ A((e, t) => {
  const n = mn(wo, e.__scopeDialog), r = H(!1), o = H(!1);
  return /* @__PURE__ */ $(fh, P({}, e, {
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
}), fh = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = mn(wo, n), c = H(null), l = Se(t, c);
  return Aa(), /* @__PURE__ */ $(Kt, null, /* @__PURE__ */ $(FE, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(AE, P({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Hu(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), ph = "DialogTitle", oS = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(ph, n);
  return /* @__PURE__ */ $(ue.h2, P({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), aS = "DialogDescription", sS = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(aS, n);
  return /* @__PURE__ */ $(ue.p, P({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), iS = "DialogClose", cS = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(iS, n);
  return /* @__PURE__ */ $(ue.button, P({
    type: "button"
  }, r, {
    ref: t,
    onClick: ee(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Hu(e) {
  return e ? "open" : "closed";
}
const lS = "DialogTitleWarning";
km(lS, {
  contentName: wo,
  titleName: ph,
  docsSlug: "dialog"
});
const Ku = GE, Yu = ZE, Gu = QE, Ya = JE, Ga = tS, qa = oS, Za = sS, Xa = cS, mh = Ku, dR = Yu, uS = Gu, fR = Xa, vh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ya,
  {
    ref: n,
    className: j(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
vh.displayName = Ya.displayName;
const qu = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(uS, { children: [
  /* @__PURE__ */ f.exports.jsx(vh, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Ga,
    {
      ref: r,
      className: j(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ f.exports.jsxs(Xa, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ f.exports.jsx(_i, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
qu.displayName = Ga.displayName;
const dS = ({
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
dS.displayName = "DialogHeader";
const fS = ({
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
fS.displayName = "DialogFooter";
const pS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  qa,
  {
    ref: n,
    className: j(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
pS.displayName = qa.displayName;
const mS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Za,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
mS.displayName = Za.displayName;
const vS = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
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
          children: l ? /* @__PURE__ */ f.exports.jsx(us, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ls, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(
        ua,
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
          children: l ? /* @__PURE__ */ f.exports.jsx(us, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ls, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Yr,
    {
      control: t.control,
      name: e,
      render: ({ field: d, formState: p }) => {
        var m;
        return /* @__PURE__ */ f.exports.jsxs(Cr, { className: j("w-full", a), children: [
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
          r && /* @__PURE__ */ f.exports.jsx(Ao, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ f.exports.jsx(Ka, { children: /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => u((h) => !h),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                disabled: c == null ? void 0 : c.disabled,
                children: l ? /* @__PURE__ */ f.exports.jsx(us, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ls, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(
              ua,
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
                children: l ? /* @__PURE__ */ f.exports.jsx(us, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ls, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, hS = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: l }) => c || c && l.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
    Pt,
    {
      className: j(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : l.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(On, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ f.exports.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ f.exports.jsx(
      ua,
      {
        ...l,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ f.exports.jsx(
  Yr,
  {
    control: t.control,
    name: e,
    render: ({ field: u, formState: d }) => {
      var p;
      return /* @__PURE__ */ f.exports.jsxs(Cr, { className: j("w-full", s), children: [
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
        o && /* @__PURE__ */ f.exports.jsx(Ao, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ f.exports.jsx(Ka, { children: /* @__PURE__ */ f.exports.jsx(
            ua,
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
), ua = C.forwardRef(
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
ua.displayName = "InputUI";
function Zu({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const l = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ f.exports.jsx(
    vS,
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
    hS,
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
const gS = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), bS = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, Bf = (e) => {
  const t = [
    Ho.VENEZUELAN,
    Ho.JURIDICAL,
    Ho.FOREIGN,
    Ho.PASSPORT,
    Ho.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, St = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: Bf(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: Bf(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function pR({ form: e, pid: t = St }) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g, b, x, y;
  const n = (_) => {
    var E;
    const { value: w } = _.target, N = gS(w), k = ((E = t == null ? void 0 : t.number) == null ? void 0 : E.id) || St.number.id;
    e.setValue(k, N);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      RD,
      {
        id: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.id) || St.type.id,
        form: e,
        label: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.label) || St.type.label,
        items: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.items) || St.type.items,
        tabIndex: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.tabIndex) || St.type.tabIndex,
        placeholder: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.placeholder) || St.type.placeholder,
        defaultValue: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.defaultValue) || St.type.defaultValue,
        notFoundLabel: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.notFoundLabel) || St.type.notFoundLabel,
        ctaPlaceholder: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.ctaPlaceholder) || St.type.ctaPlaceholder,
        buttonClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.buttonClassName) || St.type.buttonClassName,
        popoverClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.popoverClassName) || St.type.popoverClassName,
        disabled: (m = t == null ? void 0 : t.type) == null ? void 0 : m.disabled
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      Zu,
      {
        id: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.id) || St.number.id,
        form: e,
        type: "text",
        defaultValue: (v = t == null ? void 0 : t.number) == null ? void 0 : v.defaultValue,
        onKeyPress: bS,
        onKeyUp: n,
        tabIndex: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.tabIndex) || St.number.tabIndex,
        maxLength: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.maxLength) || St.number.maxLength,
        placeholder: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.placeholder) || St.number.placeholder,
        disabled: (y = t == null ? void 0 : t.number) == null ? void 0 : y.disabled
      }
    )
  ] });
}
const hh = "Popover", [gh, mR] = ot(hh, [
  Tn
]), Xu = Tn(), [xS, Io] = gh(hh), yS = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Xu(t), c = H(null), [l, u] = te(!1), [d = !1, p] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(Ro, i, /* @__PURE__ */ $(xS, {
    scope: t,
    contentId: lt(),
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
}, $S = "PopoverTrigger", wS = /* @__PURE__ */ A((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Io($S, n), a = Xu(n), s = Se(t, o.triggerRef), i = /* @__PURE__ */ $(ue.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": yh(o.open)
  }, r, {
    ref: s,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ $(Fa, P({
    asChild: !0
  }, a), i);
}), bh = "PopoverPortal", [_S, CS] = gh(bh, {
  forceMount: void 0
}), ES = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Io(bh, t);
  return /* @__PURE__ */ $(_S, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(tt, {
    present: n || a.open
  }, /* @__PURE__ */ $(Pi, {
    asChild: !0,
    container: o
  }, r)));
}, da = "PopoverContent", SS = /* @__PURE__ */ A((e, t) => {
  const n = CS(da, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Io(da, e.__scopePopover);
  return /* @__PURE__ */ $(tt, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(NS, P({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(PS, P({}, o, {
    ref: t
  })));
}), NS = /* @__PURE__ */ A((e, t) => {
  const n = Io(da, e.__scopePopover), r = H(null), o = Se(t, r), a = H(!1);
  return X(() => {
    const s = r.current;
    if (s)
      return jo(s);
  }, []), /* @__PURE__ */ $(Wa, {
    as: Zt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $(xh, P({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ee(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: ee(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: ee(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), PS = /* @__PURE__ */ A((e, t) => {
  const n = Io(da, e.__scopePopover), r = H(!1), o = H(!1);
  return /* @__PURE__ */ $(xh, P({}, e, {
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
}), xh = /* @__PURE__ */ A((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, p = Io(da, n), m = Xu(n);
  return Aa(), /* @__PURE__ */ $(Ei, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ $(Va, P({
    "data-state": yh(p.open),
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
function yh(e) {
  return e ? "open" : "closed";
}
const TS = yS, OS = wS, kS = ES, $h = SS, zn = TS, Bn = OS, Cn = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(kS, { children: /* @__PURE__ */ f.exports.jsx(
  $h,
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
Cn.displayName = $h.displayName;
const wh = C.forwardRef(
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
wh.displayName = "TextareaUI";
const vR = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i || i && c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full"), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
    Pt,
    {
      className: j("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ f.exports.jsx(
  Yr,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: u }) => {
      var d;
      return /* @__PURE__ */ f.exports.jsxs(Cr, { className: j("w-full", s), children: [
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
        o && /* @__PURE__ */ f.exports.jsx(Ao, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsx(Ka, { children: /* @__PURE__ */ f.exports.jsx(
          wh,
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
function fa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Lo(e) {
  const t = H({
    value: e,
    previous: e
  });
  return _t(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const _h = /* @__PURE__ */ A((e, t) => /* @__PURE__ */ $(ue.span, P({}, e, {
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
}))), Ch = _h, DS = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], MS = [
  " ",
  "Enter"
], Ai = "Select", [Ii, Qu, RS] = $r(Ai), [Fo, hR] = ot(Ai, [
  RS,
  Tn
]), Ju = Tn(), [jS, qr] = Fo(Ai), [AS, IS] = Fo(Ai), LS = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: p, required: m } = e, h = Ju(t), [v, g] = te(null), [b, x] = te(null), [y, _] = te(!1), w = Pn(l), [N = !1, k] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [E, T] = ft({
    prop: s,
    defaultProp: i,
    onChange: c
  }), K = H(null), U = v ? Boolean(v.closest("form")) : !0, [B, Z] = te(/* @__PURE__ */ new Set()), F = Array.from(B).map(
    (I) => I.props.value
  ).join(";");
  return /* @__PURE__ */ $(Ro, h, /* @__PURE__ */ $(jS, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: x,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: _,
    contentId: lt(),
    value: E,
    onValueChange: T,
    open: N,
    onOpenChange: k,
    dir: w,
    triggerPointerDownPosRef: K,
    disabled: p
  }, /* @__PURE__ */ $(Ii.Provider, {
    scope: t
  }, /* @__PURE__ */ $(AS, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ve((I) => {
      Z(
        (L) => new Set(L).add(I)
      );
    }, []),
    onNativeOptionRemove: ve((I) => {
      Z((L) => {
        const W = new Set(L);
        return W.delete(I), W;
      });
    }, [])
  }, n)), U ? /* @__PURE__ */ $(Nh, {
    key: F,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: E,
    onChange: (I) => T(I.target.value),
    disabled: p
  }, E === void 0 ? /* @__PURE__ */ $("option", {
    value: ""
  }) : null, Array.from(B)) : null));
}, FS = "SelectTrigger", VS = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Ju(n), s = qr(FS, n), i = s.disabled || r, c = Se(t, s.onTriggerChange), l = Qu(n), [u, d, p] = Ph((h) => {
    const v = l().filter(
      (x) => !x.disabled
    ), g = v.find(
      (x) => x.value === s.value
    ), b = Th(v, h, g);
    b !== void 0 && s.onValueChange(b.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ $(Fa, P({
    asChild: !0
  }, a), /* @__PURE__ */ $(ue.button, P({
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
    onClick: ee(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: ee(o.onPointerDown, (h) => {
      const v = h.target;
      v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: ee(o.onKeyDown, (h) => {
      const v = u.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && d(h.key), !(v && h.key === " ") && DS.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), WS = "SelectValue", US = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = qr(WS, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = Se(t, c.onValueNodeChange);
  return Ct(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ $(ue.span, P({}, i, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && s !== void 0 ? s : a);
}), zS = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ $(ue.span, P({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), BS = (e) => /* @__PURE__ */ $(Pi, P({
  asChild: !0
}, e)), _o = "SelectContent", HS = /* @__PURE__ */ A((e, t) => {
  const n = qr(_o, e.__scopeSelect), [r, o] = te();
  if (Ct(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ tm(/* @__PURE__ */ $(Eh, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $(Ii.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ $(KS, P({}, e, {
    ref: t
  }));
}), jn = 10, [Eh, Li] = Fo(_o), KS = /* @__PURE__ */ A((e, t) => {
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
    ...b
  } = e, x = qr(_o, n), [y, _] = te(null), [w, N] = te(null), k = Se(
    t,
    (oe) => _(oe)
  ), [E, T] = te(null), [K, U] = te(null), B = Qu(n), [Z, F] = te(!1), I = H(!1);
  X(() => {
    if (y)
      return jo(y);
  }, [
    y
  ]), Aa();
  const L = ve((oe) => {
    const [ie, ...me] = B().map(
      (V) => V.ref.current
    ), [Y] = me.slice(-1), re = document.activeElement;
    for (const V of oe)
      if (V === re || (V == null || V.scrollIntoView({
        block: "nearest"
      }), V === ie && w && (w.scrollTop = 0), V === Y && w && (w.scrollTop = w.scrollHeight), V == null || V.focus(), document.activeElement !== re))
        return;
  }, [
    B,
    w
  ]), W = ve(
    () => L([
      E,
      y
    ]),
    [
      L,
      E,
      y
    ]
  );
  X(() => {
    Z && W();
  }, [
    Z,
    W
  ]);
  const { onOpenChange: q, triggerPointerDownPosRef: R } = x;
  X(() => {
    if (y) {
      let oe = {
        x: 0,
        y: 0
      };
      const ie = (Y) => {
        var re, V, fe, he;
        oe = {
          x: Math.abs(Math.round(Y.pageX) - ((re = (V = R.current) === null || V === void 0 ? void 0 : V.x) !== null && re !== void 0 ? re : 0)),
          y: Math.abs(Math.round(Y.pageY) - ((fe = (he = R.current) === null || he === void 0 ? void 0 : he.y) !== null && fe !== void 0 ? fe : 0))
        };
      }, me = (Y) => {
        oe.x <= 10 && oe.y <= 10 ? Y.preventDefault() : y.contains(Y.target) || q(!1), document.removeEventListener("pointermove", ie), R.current = null;
      };
      return R.current !== null && (document.addEventListener("pointermove", ie), document.addEventListener("pointerup", me, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ie), document.removeEventListener("pointerup", me, {
          capture: !0
        });
      };
    }
  }, [
    y,
    q,
    R
  ]), X(() => {
    const oe = () => q(!1);
    return window.addEventListener("blur", oe), window.addEventListener("resize", oe), () => {
      window.removeEventListener("blur", oe), window.removeEventListener("resize", oe);
    };
  }, [
    q
  ]);
  const [D, G] = Ph((oe) => {
    const ie = B().filter(
      (re) => !re.disabled
    ), me = ie.find(
      (re) => re.ref.current === document.activeElement
    ), Y = Th(ie, oe, me);
    Y && setTimeout(
      () => Y.ref.current.focus()
    );
  }), Q = ve((oe, ie, me) => {
    const Y = !I.current && !me;
    (x.value !== void 0 && x.value === ie || Y) && (T(oe), Y && (I.current = !0));
  }, [
    x.value
  ]), ae = ve(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), ne = ve((oe, ie, me) => {
    const Y = !I.current && !me;
    (x.value !== void 0 && x.value === ie || Y) && U(oe);
  }, [
    x.value
  ]), ge = r === "popper" ? Hf : YS, be = ge === Hf ? {
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
  return /* @__PURE__ */ $(Eh, {
    scope: n,
    content: y,
    viewport: w,
    onViewportChange: N,
    itemRefCallback: Q,
    selectedItem: E,
    onItemLeave: ae,
    itemTextRefCallback: ne,
    focusSelectedItem: W,
    selectedItemText: K,
    position: r,
    isPositioned: Z,
    searchRef: D
  }, /* @__PURE__ */ $(Wa, {
    as: Zt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $(Ei, {
    asChild: !0,
    trapped: x.open,
    onMountAutoFocus: (oe) => {
      oe.preventDefault();
    },
    onUnmountAutoFocus: ee(o, (oe) => {
      var ie;
      (ie = x.trigger) === null || ie === void 0 || ie.focus({
        preventScroll: !0
      }), oe.preventDefault();
    })
  }, /* @__PURE__ */ $(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (oe) => oe.preventDefault(),
    onDismiss: () => x.onOpenChange(!1)
  }, /* @__PURE__ */ $(ge, P({
    role: "listbox",
    id: x.contentId,
    "data-state": x.open ? "open" : "closed",
    dir: x.dir,
    onContextMenu: (oe) => oe.preventDefault()
  }, b, be, {
    onPlaced: () => F(!0),
    ref: k,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: ee(b.onKeyDown, (oe) => {
      const ie = oe.ctrlKey || oe.altKey || oe.metaKey;
      if (oe.key === "Tab" && oe.preventDefault(), !ie && oe.key.length === 1 && G(oe.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(oe.key)) {
        let Y = B().filter(
          (re) => !re.disabled
        ).map(
          (re) => re.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(oe.key) && (Y = Y.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(oe.key)) {
          const re = oe.target, V = Y.indexOf(re);
          Y = Y.slice(V + 1);
        }
        setTimeout(
          () => L(Y)
        ), oe.preventDefault();
      }
    })
  }))))));
}), YS = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = qr(_o, n), s = Li(_o, n), [i, c] = te(null), [l, u] = te(null), d = Se(
    t,
    (k) => u(k)
  ), p = Qu(n), m = H(!1), h = H(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: x } = s, y = ve(() => {
    if (a.trigger && a.valueNode && i && l && v && g && b) {
      const k = a.trigger.getBoundingClientRect(), E = l.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), K = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const re = K.left - E.left, V = T.left - re, fe = k.left - V, he = k.width + fe, ye = Math.max(he, E.width), O = window.innerWidth - jn, z = fa(V, [
          jn,
          O - ye
        ]);
        i.style.minWidth = he + "px", i.style.left = z + "px";
      } else {
        const re = E.right - K.right, V = window.innerWidth - T.right - re, fe = window.innerWidth - k.right - V, he = k.width + fe, ye = Math.max(he, E.width), O = window.innerWidth - jn, z = fa(V, [
          jn,
          O - ye
        ]);
        i.style.minWidth = he + "px", i.style.right = z + "px";
      }
      const U = p(), B = window.innerHeight - jn * 2, Z = v.scrollHeight, F = window.getComputedStyle(l), I = parseInt(F.borderTopWidth, 10), L = parseInt(F.paddingTop, 10), W = parseInt(F.borderBottomWidth, 10), q = parseInt(F.paddingBottom, 10), R = I + L + Z + q + W, D = Math.min(g.offsetHeight * 5, R), G = window.getComputedStyle(v), Q = parseInt(G.paddingTop, 10), ae = parseInt(G.paddingBottom, 10), ne = k.top + k.height / 2 - jn, ge = B - ne, be = g.offsetHeight / 2, oe = g.offsetTop + be, ie = I + L + oe, me = R - ie;
      if (ie <= ne) {
        const re = g === U[U.length - 1].ref.current;
        i.style.bottom = "0px";
        const V = l.clientHeight - v.offsetTop - v.offsetHeight, fe = Math.max(ge, be + (re ? ae : 0) + V + W), he = ie + fe;
        i.style.height = he + "px";
      } else {
        const re = g === U[0].ref.current;
        i.style.top = "0px";
        const fe = Math.max(ne, I + v.offsetTop + (re ? Q : 0) + be) + me;
        i.style.height = fe + "px", v.scrollTop = ie - ne + v.offsetTop;
      }
      i.style.margin = `${jn}px 0`, i.style.minHeight = D + "px", i.style.maxHeight = B + "px", r == null || r(), requestAnimationFrame(
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
    b,
    a.dir,
    r
  ]);
  Ct(
    () => y(),
    [
      y
    ]
  );
  const [_, w] = te();
  Ct(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const N = ve((k) => {
    k && h.current === !0 && (y(), x == null || x(), h.current = !1);
  }, [
    y,
    x
  ]);
  return /* @__PURE__ */ $(GS, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: N
  }, /* @__PURE__ */ $("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ $(ue.div, P({}, o, {
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
}), Hf = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = jn, ...a } = e, s = Ju(n);
  return /* @__PURE__ */ $(Va, P({}, s, a, {
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
}), [GS, qS] = Fo(_o, {}), Kf = "SelectViewport", ZS = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Li(Kf, n), a = qS(Kf, n), s = Se(t, o.onViewportChange), i = H(0);
  return /* @__PURE__ */ $(Kt, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(Ii.Slot, {
    scope: n
  }, /* @__PURE__ */ $(ue.div, P({
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
    onScroll: ee(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = a;
      if (d != null && d.current && u) {
        const p = Math.abs(i.current - l.scrollTop);
        if (p > 0) {
          const m = window.innerHeight - jn * 2, h = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(h, v);
          if (g < m) {
            const b = g + p, x = Math.min(m, b), y = b - x;
            u.style.height = x + "px", u.style.bottom === "0px" && (l.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), XS = "SelectGroup", [QS, JS] = Fo(XS), eN = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = lt();
  return /* @__PURE__ */ $(QS, {
    scope: n,
    id: o
  }, /* @__PURE__ */ $(ue.div, P({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), tN = "SelectLabel", nN = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = JS(tN, n);
  return /* @__PURE__ */ $(ue.div, P({
    id: o.id
  }, r, {
    ref: t
  }));
}), xl = "SelectItem", [rN, Sh] = Fo(xl), oN = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = qr(xl, n), c = Li(xl, n), l = i.value === r, [u, d] = te(a ?? ""), [p, m] = te(!1), h = Se(t, (b) => {
    var x;
    return (x = c.itemRefCallback) === null || x === void 0 ? void 0 : x.call(c, b, r, o);
  }), v = lt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ $(rN, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: ve((b) => {
      d((x) => {
        var y;
        return x || ((y = b == null ? void 0 : b.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ $(Ii.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ $(ue.div, P({
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
    onFocus: ee(
      s.onFocus,
      () => m(!0)
    ),
    onBlur: ee(
      s.onBlur,
      () => m(!1)
    ),
    onPointerUp: ee(s.onPointerUp, g),
    onPointerMove: ee(s.onPointerMove, (b) => {
      if (o) {
        var x;
        (x = c.onItemLeave) === null || x === void 0 || x.call(c);
      } else
        b.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: ee(s.onPointerLeave, (b) => {
      if (b.currentTarget === document.activeElement) {
        var x;
        (x = c.onItemLeave) === null || x === void 0 || x.call(c);
      }
    }),
    onKeyDown: ee(s.onKeyDown, (b) => {
      var x;
      ((x = c.searchRef) === null || x === void 0 ? void 0 : x.current) !== "" && b.key === " " || (MS.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), xs = "SelectItemText", aN = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = qr(xs, n), i = Li(xs, n), c = Sh(xs, n), l = IS(xs, n), [u, d] = te(null), p = Se(
    t,
    (b) => d(b),
    c.onItemTextChange,
    (b) => {
      var x;
      return (x = i.itemTextRefCallback) === null || x === void 0 ? void 0 : x.call(i, b, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, h = _t(
    () => /* @__PURE__ */ $("option", {
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
  ]), /* @__PURE__ */ $(Kt, null, /* @__PURE__ */ $(ue.span, P({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ tm(a.children, s.valueNode) : null);
}), sN = "SelectItemIndicator", iN = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return Sh(sN, n).isSelected ? /* @__PURE__ */ $(ue.span, P({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), cN = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ $(ue.div, P({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), Nh = /* @__PURE__ */ A((e, t) => {
  const { value: n, ...r } = e, o = H(null), a = Se(t, o), s = Lo(n);
  return X(() => {
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
  ]), /* @__PURE__ */ $(_h, {
    asChild: !0
  }, /* @__PURE__ */ $("select", P({}, r, {
    ref: a,
    defaultValue: n
  })));
});
Nh.displayName = "BubbleSelect";
function Ph(e) {
  const t = Be(e), n = H(""), r = H(0), o = ve((s) => {
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
  return X(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function Th(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = lN(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function lN(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const uN = LS, Oh = VS, dN = US, fN = zS, pN = BS, kh = HS, mN = ZS, vN = eN, Dh = nN, Mh = oN, hN = aN, gN = iN, Rh = cN, ed = uN, bN = vN, td = dN, Fi = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Oh,
  {
    ref: r,
    className: j(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(fN, { asChild: !0, children: /* @__PURE__ */ f.exports.jsx(ra, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Fi.displayName = Oh.displayName;
const Vi = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.exports.jsx(pN, { children: /* @__PURE__ */ f.exports.jsx(
  kh,
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
      mN,
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
Vi.displayName = kh.displayName;
const xN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Dh,
  {
    ref: n,
    className: j("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
xN.displayName = Dh.displayName;
const Wi = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Mh,
  {
    ref: r,
    className: j(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(gN, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.exports.jsx(hN, { children: t })
    ]
  }
));
Wi.displayName = Mh.displayName;
const yN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Rh,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
yN.displayName = Rh.displayName;
const jh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
jh.displayName = "Card";
const $N = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: j("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
$N.displayName = "CardHeader";
const wN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
wN.displayName = "CardTitle";
const _N = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "p",
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
_N.displayName = "CardDescription";
const CN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: j("p-6 pt-0", e), ...t }));
CN.displayName = "CardContent";
const EN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: j(" flex items-center p-6 pt-0", e),
    ...t
  }
));
EN.displayName = "CardFooter";
const Ah = "Checkbox", [SN, gR] = ot(Ah), [NN, PN] = SN(Ah), TN = /* @__PURE__ */ A((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = te(null), m = Se(
    t,
    (y) => p(y)
  ), h = H(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, b] = ft({
    prop: o,
    defaultProp: a,
    onChange: l
  }), x = H(g);
  return X(() => {
    const y = d == null ? void 0 : d.form;
    if (y) {
      const _ = () => b(x.current);
      return y.addEventListener("reset", _), () => y.removeEventListener("reset", _);
    }
  }, [
    d,
    b
  ]), /* @__PURE__ */ $(NN, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ $(ue.button, P({
    type: "button",
    role: "checkbox",
    "aria-checked": Rr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": Ih(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onKeyDown: ee(e.onKeyDown, (y) => {
      y.key === "Enter" && y.preventDefault();
    }),
    onClick: ee(e.onClick, (y) => {
      b(
        (_) => Rr(_) ? !0 : !_
      ), v && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ $(DN, {
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
}), ON = "CheckboxIndicator", kN = /* @__PURE__ */ A((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = PN(ON, n);
  return /* @__PURE__ */ $(tt, {
    present: r || Rr(a.state) || a.state === !0
  }, /* @__PURE__ */ $(ue.span, P({
    "data-state": Ih(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), DN = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Lo(n), i = La(t);
  return X(() => {
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
  ]), /* @__PURE__ */ $("input", P({
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
function Ih(e) {
  return Rr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Lh = TN, MN = kN, Fh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Lh,
  {
    ref: n,
    className: j(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx(
      MN,
      {
        className: j("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" })
      }
    )
  }
));
Fh.displayName = Lh.displayName;
const Vh = "DropdownMenu", [RN, bR] = ot(Vh, [
  Ua
]), Lt = Ua(), [jN, Wh] = RN(Vh), AN = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = Lt(t), l = H(null), [u = !1, d] = ft({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ $(jN, {
    scope: t,
    triggerId: lt(),
    triggerRef: l,
    contentId: lt(),
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
  }, /* @__PURE__ */ $(Eu, P({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: i
  }), n));
}, IN = "DropdownMenuTrigger", LN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Wh(IN, n), s = Lt(n);
  return /* @__PURE__ */ $(Su, P({
    asChild: !0
  }, s), /* @__PURE__ */ $(ue.button, P({
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
    onPointerDown: ee(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: ee(e.onKeyDown, (i) => {
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
}), FN = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Lt(t);
  return /* @__PURE__ */ $(Nu, P({}, r, n));
}, VN = "DropdownMenuContent", WN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Wh(VN, n), a = Lt(n), s = H(!1);
  return /* @__PURE__ */ $(Pu, P({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: ee(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: ee(e.onInteractOutside, (i) => {
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
}), UN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(Tu, P({}, o, r, {
    ref: t
  }));
}), zN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(Ou, P({}, o, r, {
    ref: t
  }));
}), BN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(ku, P({}, o, r, {
    ref: t
  }));
}), HN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(Du, P({}, o, r, {
    ref: t
  }));
}), KN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(Mu, P({}, o, r, {
    ref: t
  }));
}), YN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(Ru, P({}, o, r, {
    ref: t
  }));
}), GN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(ju, P({}, o, r, {
    ref: t
  }));
}), qN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(Au, P({}, o, r, {
    ref: t
  }));
}), ZN = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Lt(t), [i = !1, c] = ft({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(Iu, P({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, XN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(Lu, P({}, o, r, {
    ref: t
  }));
}), QN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(Fu, P({}, o, r, {
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
}), JN = AN, e5 = LN, Uh = FN, zh = WN, t5 = UN, Bh = zN, Hh = BN, Kh = HN, n5 = KN, Yh = YN, Gh = GN, qh = qN, r5 = ZN, Zh = XN, Xh = QN, xR = JN, yR = e5, $R = t5, wR = Uh, _R = r5, CR = n5, o5 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Zh,
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
      /* @__PURE__ */ f.exports.jsx(xr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
o5.displayName = Zh.displayName;
const a5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Xh,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
a5.displayName = Xh.displayName;
const s5 = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(Uh, { children: /* @__PURE__ */ f.exports.jsx(
  zh,
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
s5.displayName = zh.displayName;
const i5 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Hh,
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
i5.displayName = Hh.displayName;
const c5 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Kh,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Gh, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
c5.displayName = Kh.displayName;
const l5 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Yh,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Gh, { children: /* @__PURE__ */ f.exports.jsx(wi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
l5.displayName = Yh.displayName;
const u5 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Bh,
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
u5.displayName = Bh.displayName;
const d5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  qh,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
d5.displayName = qh.displayName;
const f5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: j("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
f5.displayName = "DropdownMenuShortcut";
const yl = "horizontal", p5 = [
  "horizontal",
  "vertical"
], Qh = /* @__PURE__ */ A((e, t) => {
  const { decorative: n, orientation: r = yl, ...o } = e, a = Jh(r) ? r : yl, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ $(ue.div, P({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
Qh.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Jh(r) ? new Error(m5(o, n)) : null;
  }
};
function m5(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${yl}\`.`;
}
function Jh(e) {
  return p5.includes(e);
}
const eg = Qh, Qa = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
    eg,
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
Qa.displayName = eg.displayName;
function ho(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function v5(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function tg(...e) {
  return (t) => e.forEach(
    (n) => v5(n, t)
  );
}
function Ja(...e) {
  return ve(tg(...e), e);
}
function h5(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ ht(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = _t(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ $(v.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = Xe(m);
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
    const a = n.map((s) => /* @__PURE__ */ ht(s));
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
    g5(o, ...t)
  ];
}
function g5(...e) {
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
const $l = Boolean(globalThis == null ? void 0 : globalThis.document) ? ka : () => {
}, b5 = C["useId".toString()] || (() => {
});
let x5 = 0;
function Tc(e) {
  const [t, n] = C.useState(b5());
  return $l(() => {
    e || n(
      (r) => r ?? String(x5++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Lr(e) {
  const t = H(e);
  return X(() => {
    t.current = e;
  }), _t(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function y5({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = $5({
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
function $5({ defaultProp: e, onChange: t }) {
  const n = te(e), [r] = n, o = H(r), a = Lr(t);
  return X(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const nd = /* @__PURE__ */ A((e, t) => {
  const { children: n, ...r } = e, o = Rt.toArray(n), a = o.find(_5);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Rt.count(s) > 1 ? Rt.only(null) : /* @__PURE__ */ ur(s) ? s.props.children : null : c);
    return /* @__PURE__ */ $(wl, P({}, r, {
      ref: t
    }), /* @__PURE__ */ ur(s) ? /* @__PURE__ */ Oo(s, void 0, i) : null);
  }
  return /* @__PURE__ */ $(wl, P({}, r, {
    ref: t
  }), n);
});
nd.displayName = "Slot";
const wl = /* @__PURE__ */ A((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ ur(n) ? /* @__PURE__ */ Oo(n, {
    ...C5(r, n.props),
    ref: tg(t, n.ref)
  }) : Rt.count(n) > 1 ? Rt.only(null) : null;
});
wl.displayName = "SlotClone";
const w5 = ({ children: e }) => /* @__PURE__ */ $(Kt, null, e);
function _5(e) {
  return /* @__PURE__ */ ur(e) && e.type === w5;
}
function C5(e, t) {
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
const E5 = [
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
], Ui = E5.reduce((e, t) => {
  const n = /* @__PURE__ */ A((r, o) => {
    const { asChild: a, ...s } = r, i = a ? nd : t;
    return X(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ $(i, P({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function S5(e, t) {
  e && yi(
    () => e.dispatchEvent(t)
  );
}
function N5(e) {
  const t = Lr(e);
  X(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const _l = "dismissableLayer.update", P5 = "dismissableLayer.pointerDownOutside", T5 = "dismissableLayer.focusOutside";
let Yf;
const O5 = /* @__PURE__ */ ht({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), k5 = /* @__PURE__ */ A((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = Xe(O5), [u, d] = te(null), [, p] = te({}), m = Ja(
    t,
    (N) => d(N)
  ), h = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = h.indexOf(v), b = u ? h.indexOf(u) : -1, x = l.layersWithOutsidePointerEventsDisabled.size > 0, y = b >= g, _ = D5((N) => {
    const k = N.target, E = [
      ...l.branches
    ].some(
      (T) => T.contains(k)
    );
    !y || E || (o == null || o(N), s == null || s(N), N.defaultPrevented || i == null || i());
  }), w = M5((N) => {
    const k = N.target;
    [
      ...l.branches
    ].some(
      (T) => T.contains(k)
    ) || (a == null || a(N), s == null || s(N), N.defaultPrevented || i == null || i());
  });
  return N5((N) => {
    b === l.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && i && (N.preventDefault(), i()));
  }), X(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Yf = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Gf(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Yf);
      };
  }, [
    u,
    n,
    l
  ]), X(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Gf());
  }, [
    u,
    l
  ]), X(() => {
    const N = () => p({});
    return document.addEventListener(_l, N), () => document.removeEventListener(_l, N);
  }, []), /* @__PURE__ */ $(Ui.div, P({}, c, {
    ref: m,
    style: {
      pointerEvents: x ? y ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ho(e.onFocusCapture, w.onFocusCapture),
    onBlurCapture: ho(e.onBlurCapture, w.onBlurCapture),
    onPointerDownCapture: ho(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function D5(e) {
  const t = Lr(e), n = H(!1), r = H(() => {
  });
  return X(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          ng(P5, t, i, {
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
function M5(e) {
  const t = Lr(e), n = H(!1);
  return X(() => {
    const r = (o) => {
      o.target && !n.current && ng(T5, t, {
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
function Gf() {
  const e = new CustomEvent(_l);
  document.dispatchEvent(e);
}
function ng(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? S5(o, a) : o.dispatchEvent(a);
}
const Oc = "focusScope.autoFocusOnMount", kc = "focusScope.autoFocusOnUnmount", qf = {
  bubbles: !1,
  cancelable: !0
}, R5 = /* @__PURE__ */ A((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = te(null), l = Lr(o), u = Lr(a), d = H(null), p = Ja(
    t,
    (v) => c(v)
  ), m = H({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  X(() => {
    if (r) {
      let v = function(b) {
        if (m.paused || !i)
          return;
        const x = b.target;
        i.contains(x) ? d.current = x : Or(d.current, {
          select: !0
        });
      }, g = function(b) {
        m.paused || !i || i.contains(b.relatedTarget) || Or(d.current, {
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
  ]), X(() => {
    if (i) {
      Xf.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Oc, qf);
        i.addEventListener(Oc, l), i.dispatchEvent(b), b.defaultPrevented || (j5(V5(rg(i)), {
          select: !0
        }), document.activeElement === v && Or(i));
      }
      return () => {
        i.removeEventListener(Oc, l), setTimeout(() => {
          const b = new CustomEvent(kc, qf);
          i.addEventListener(kc, u), i.dispatchEvent(b), b.defaultPrevented || Or(v ?? document.body, {
            select: !0
          }), i.removeEventListener(kc, u), Xf.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const h = ve((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const x = v.currentTarget, [y, _] = A5(x);
      y && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && Or(y, {
        select: !0
      })) : v.shiftKey && b === y && (v.preventDefault(), n && Or(_, {
        select: !0
      })) : b === x && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ $(Ui.div, P({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function j5(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Or(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function A5(e) {
  const t = rg(e), n = Zf(t, e), r = Zf(t.reverse(), e);
  return [
    n,
    r
  ];
}
function rg(e) {
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
function Zf(e, t) {
  for (const n of e)
    if (!I5(n, {
      upTo: t
    }))
      return n;
}
function I5(e, { upTo: t }) {
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
function L5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Or(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && L5(e) && t && e.select();
  }
}
const Xf = F5();
function F5() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Qf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Qf(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Qf(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function V5(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const W5 = /* @__PURE__ */ A((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ xi.createPortal(/* @__PURE__ */ $(Ui.div, P({}, o, {
    ref: t
  })), r) : null;
});
function U5(e, t) {
  return bi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const zi = (e) => {
  const { present: t, children: n } = e, r = z5(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Rt.only(n), a = Ja(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Oo(o, {
    ref: a
  }) : null;
};
zi.displayName = "Presence";
function z5(e) {
  const [t, n] = te(), r = H({}), o = H(e), a = H("none"), s = e ? "mounted" : "unmounted", [i, c] = U5(s, {
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
  return X(() => {
    const l = ys(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), $l(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = ys(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), $l(() => {
    if (t) {
      const l = (d) => {
        const m = ys(r.current).includes(d.animationName);
        d.target === t && m && yi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = ys(r.current));
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
function ys(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Dc = 0;
function B5() {
  X(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Jf()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Jf()), Dc++, () => {
      Dc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Dc--;
    };
  }, []);
}
function Jf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var og = av(), Mc = function() {
}, Bi = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Mc,
    onWheelCapture: Mc,
    onTouchMoveCapture: Mc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, x = xu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = ov([n, t]), w = Nt(Nt({}, x), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: og, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), Nt(Nt({}, w), { ref: _ })) : C.createElement(b, Nt({}, w, { className: c, ref: _ }), i)
  );
});
Bi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Bi.classNames = {
  fullWidth: ta,
  zeroRight: ea
};
var Cl = !1;
if (typeof window < "u")
  try {
    var $s = Object.defineProperty({}, "passive", {
      get: function() {
        return Cl = !0, !0;
      }
    });
    window.addEventListener("test", $s, $s), window.removeEventListener("test", $s, $s);
  } catch {
    Cl = !1;
  }
var so = Cl ? { passive: !1 } : !1, H5 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, K5 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, ep = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = ag(e, n);
    if (r) {
      var o = sg(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Y5 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, G5 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ag = function(e, t) {
  return e === "v" ? H5(t) : K5(t);
}, sg = function(e, t) {
  return e === "v" ? Y5(t) : G5(t);
}, q5 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Z5 = function(e, t, n, r, o) {
  var a = q5(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = sg(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && ag(e, i) && (d += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, ws = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, tp = function(e) {
  return [e.deltaX, e.deltaY];
}, np = function(e) {
  return e && "current" in e ? e.current : e;
}, X5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Q5 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, J5 = 0, io = [];
function eP(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(J5++)[0], a = C.useState(function() {
    return yu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = rv([e.lockRef.current], (e.shards || []).map(np), !0).filter(Boolean);
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
    var b = ws(v), x = n.current, y = "deltaX" in v ? v.deltaX : x[0] - b[0], _ = "deltaY" in v ? v.deltaY : x[1] - b[1], w, N = v.target, k = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && N.type === "range")
      return !1;
    var E = ep(k, N);
    if (!E)
      return !0;
    if (E ? w = k : (w = k === "v" ? "h" : "v", E = ep(k, N)), !E)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = w), !w)
      return !0;
    var T = r.current || w;
    return Z5(T, g, v, T === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!io.length || io[io.length - 1] !== a)) {
      var b = "deltaY" in g ? tp(g) : ws(g), x = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && X5(w.delta, b);
      })[0];
      if (x && x.should) {
        g.preventDefault();
        return;
      }
      if (!x) {
        var y = (s.current.shards || []).map(np).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        _ && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, b, x) {
    var y = { name: v, delta: g, target: b, should: x };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = ws(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, tp(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, ws(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return io.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, so), document.addEventListener("touchmove", c, so), document.addEventListener("touchstart", u, so), function() {
      io = io.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, so), document.removeEventListener("touchmove", c, so), document.removeEventListener("touchstart", u, so);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: Q5(o) }) : null,
    m ? C.createElement(lv, { gapMode: "margin" }) : null
  );
}
const tP = iv(og, eP);
var ig = C.forwardRef(function(e, t) {
  return C.createElement(Bi, Nt({}, e, { ref: t, sideCar: tP }));
});
ig.classNames = Bi.classNames;
const nP = ig, cg = "Dialog", [lg, ER] = h5(cg), [rP, Zr] = lg(cg), oP = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = H(null), c = H(null), [l = !1, u] = y5({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(rP, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: Tc(),
    titleId: Tc(),
    descriptionId: Tc(),
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
}, ug = "DialogPortal", [aP, dg] = lg(ug, {
  forceMount: void 0
}), sP = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Zr(ug, t);
  return /* @__PURE__ */ $(aP, {
    scope: t,
    forceMount: n
  }, Rt.map(
    r,
    (s) => /* @__PURE__ */ $(zi, {
      present: n || a.open
    }, /* @__PURE__ */ $(W5, {
      asChild: !0,
      container: o
    }, s))
  ));
}, El = "DialogOverlay", iP = /* @__PURE__ */ A((e, t) => {
  const n = dg(El, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Zr(El, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ $(zi, {
    present: r || a.open
  }, /* @__PURE__ */ $(cP, P({}, o, {
    ref: t
  }))) : null;
}), cP = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Zr(El, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $(nP, {
      as: nd,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ $(Ui.div, P({
      "data-state": pg(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), pa = "DialogContent", lP = /* @__PURE__ */ A((e, t) => {
  const n = dg(pa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Zr(pa, e.__scopeDialog);
  return /* @__PURE__ */ $(zi, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(uP, P({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(dP, P({}, o, {
    ref: t
  })));
}), uP = /* @__PURE__ */ A((e, t) => {
  const n = Zr(pa, e.__scopeDialog), r = H(null), o = Ja(t, n.contentRef, r);
  return X(() => {
    const a = r.current;
    if (a)
      return jo(a);
  }, []), /* @__PURE__ */ $(fg, P({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ho(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: ho(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: ho(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), dP = /* @__PURE__ */ A((e, t) => {
  const n = Zr(pa, e.__scopeDialog), r = H(!1);
  return /* @__PURE__ */ $(fg, P({}, e, {
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
}), fg = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Zr(pa, n), c = H(null), l = Ja(t, c);
  return B5(), /* @__PURE__ */ $(Kt, null, /* @__PURE__ */ $(R5, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(k5, P({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": pg(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function pg(e) {
  return e ? "open" : "closed";
}
const fP = oP, pP = sP, mP = iP, vP = lP;
var rp = 1, hP = 0.9, gP = 0.3, Rc = 0.1, bP = 0, jc = 0.999, xP = 0.9999, yP = 0.99, op = /[\\\/\-_+.# \t"@\[\(\{&]/, $P = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Sl(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? rp : yP;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, u, d; i >= 0; )
    l = Sl(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= rp : op.test(e.charAt(i - 1)) ? (l *= hP, d = e.slice(o, i - 1).match($P), d && o > 0 && (l *= Math.pow(jc, d.length))) : op.test(e.slice(o, i - 1)) ? (l *= bP, o > 0 && (l *= Math.pow(jc, i - o))) : (l *= gP, o > 0 && (l *= Math.pow(jc, i - o))), e.charAt(i) !== t.charAt(a) && (l *= xP)), l < Rc && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (u = Sl(e, t, n, r, i + 1, a + 2), u * Rc > l && (l = u * Rc)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function wP(e, t) {
  return Sl(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var _P = wP, CP = '[cmdk-list-sizer=""]', Xo = '[cmdk-group=""]', Ac = '[cmdk-group-items=""]', EP = '[cmdk-group-heading=""]', mg = '[cmdk-item=""]', ap = `${mg}:not([aria-disabled="true"])`, Nl = "cmdk-item-select", ir = "data-value", SP = (e, t) => _P(e, t), vg = C.createContext(void 0), es = () => C.useContext(vg), hg = C.createContext(void 0), rd = () => C.useContext(hg), gg = C.createContext(void 0), bg = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = co(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = co(() => /* @__PURE__ */ new Set()), a = co(() => /* @__PURE__ */ new Map()), s = co(() => /* @__PURE__ */ new Map()), i = co(() => /* @__PURE__ */ new Set()), c = xg(e), { label: l, children: u, value: d, onValueChange: p, filter: m, shouldFilter: h, ...v } = e, g = C.useId(), b = C.useId(), x = C.useId(), y = IP();
  Vo(() => {
    if (d !== void 0) {
      let R = d.trim().toLowerCase();
      r.current.value = R, y(6, K), _.emit();
    }
  }, [d]);
  let _ = C.useMemo(() => ({ subscribe: (R) => (i.current.add(R), () => i.current.delete(R)), snapshot: () => r.current, setState: (R, D, G) => {
    var Q, ae, ne;
    if (!Object.is(r.current[R], D)) {
      if (r.current[R] = D, R === "search")
        T(), k(), y(1, E);
      else if (R === "value")
        if (((Q = c.current) == null ? void 0 : Q.value) !== void 0) {
          (ne = (ae = c.current).onValueChange) == null || ne.call(ae, D);
          return;
        } else
          G || y(5, K);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((R) => R());
  } }), []), w = C.useMemo(() => ({ value: (R, D) => {
    D !== s.current.get(R) && (s.current.set(R, D), r.current.filtered.items.set(R, N(D)), y(2, () => {
      k(), _.emit();
    }));
  }, item: (R, D) => (o.current.add(R), D && (a.current.has(D) ? a.current.get(D).add(R) : a.current.set(D, /* @__PURE__ */ new Set([R]))), y(3, () => {
    T(), k(), r.current.value || E(), _.emit();
  }), () => {
    s.current.delete(R), o.current.delete(R), r.current.filtered.items.delete(R), y(4, () => {
      T(), E(), _.emit();
    });
  }), group: (R) => (a.current.has(R) || a.current.set(R, /* @__PURE__ */ new Set()), () => {
    s.current.delete(R), a.current.delete(R);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: x, labelId: b }), []);
  function N(R) {
    var D;
    let G = ((D = c.current) == null ? void 0 : D.filter) ?? SP;
    return R ? G(R, r.current.search) : 0;
  }
  function k() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let R = r.current.filtered.items, D = [];
    r.current.filtered.groups.forEach((Q) => {
      let ae = a.current.get(Q), ne = 0;
      ae.forEach((ge) => {
        let be = R.get(ge);
        ne = Math.max(be, ne);
      }), D.push([Q, ne]);
    });
    let G = n.current.querySelector(CP);
    B().sort((Q, ae) => {
      let ne = Q.getAttribute(ir), ge = ae.getAttribute(ir);
      return (R.get(ge) ?? 0) - (R.get(ne) ?? 0);
    }).forEach((Q) => {
      let ae = Q.closest(Ac);
      ae ? ae.appendChild(Q.parentElement === ae ? Q : Q.closest(`${Ac} > *`)) : G.appendChild(Q.parentElement === G ? Q : Q.closest(`${Ac} > *`));
    }), D.sort((Q, ae) => ae[1] - Q[1]).forEach((Q) => {
      let ae = n.current.querySelector(`${Xo}[${ir}="${Q[0]}"]`);
      ae == null || ae.parentElement.appendChild(ae);
    });
  }
  function E() {
    let R = B().find((G) => !G.ariaDisabled), D = R == null ? void 0 : R.getAttribute(ir);
    _.setState("value", D || void 0);
  }
  function T() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let R = 0;
    for (let D of o.current) {
      let G = s.current.get(D), Q = N(G);
      r.current.filtered.items.set(D, Q), Q > 0 && R++;
    }
    for (let [D, G] of a.current)
      for (let Q of G)
        if (r.current.filtered.items.get(Q) > 0) {
          r.current.filtered.groups.add(D);
          break;
        }
    r.current.filtered.count = R;
  }
  function K() {
    var R, D, G;
    let Q = U();
    Q && (((R = Q.parentElement) == null ? void 0 : R.firstChild) === Q && ((G = (D = Q.closest(Xo)) == null ? void 0 : D.querySelector(EP)) == null || G.scrollIntoView({ block: "nearest" })), Q.scrollIntoView({ block: "nearest" }));
  }
  function U() {
    return n.current.querySelector(`${mg}[aria-selected="true"]`);
  }
  function B() {
    return Array.from(n.current.querySelectorAll(ap));
  }
  function Z(R) {
    let D = B()[R];
    D && _.setState("value", D.getAttribute(ir));
  }
  function F(R) {
    var D;
    let G = U(), Q = B(), ae = Q.findIndex((ge) => ge === G), ne = Q[ae + R];
    (D = c.current) != null && D.loop && (ne = ae + R < 0 ? Q[Q.length - 1] : ae + R === Q.length ? Q[0] : Q[ae + R]), ne && _.setState("value", ne.getAttribute(ir));
  }
  function I(R) {
    let D = U(), G = D == null ? void 0 : D.closest(Xo), Q;
    for (; G && !Q; )
      G = R > 0 ? jP(G, Xo) : AP(G, Xo), Q = G == null ? void 0 : G.querySelector(ap);
    Q ? _.setState("value", Q.getAttribute(ir)) : F(R);
  }
  let L = () => Z(B().length - 1), W = (R) => {
    R.preventDefault(), R.metaKey ? L() : R.altKey ? I(1) : F(1);
  }, q = (R) => {
    R.preventDefault(), R.metaKey ? Z(0) : R.altKey ? I(-1) : F(-1);
  };
  return C.createElement("div", { ref: ts([n, t]), ...v, "cmdk-root": "", onKeyDown: (R) => {
    var D;
    if ((D = v.onKeyDown) == null || D.call(v, R), !R.defaultPrevented)
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
          R.ctrlKey && q(R);
          break;
        }
        case "ArrowUp": {
          q(R);
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
          let G = U();
          if (G) {
            let Q = new Event(Nl);
            G.dispatchEvent(Q);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: w.inputId, id: w.labelId, style: LP }, l), C.createElement(hg.Provider, { value: _ }, C.createElement(vg.Provider, { value: w }, u)));
}), NP = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(gg), a = es(), s = xg(e);
  Vo(() => a.item(n, o), []);
  let i = yg(n, r, [e.value, e.children, r]), c = rd(), l = Co((b) => b.value && b.value === i.current), u = Co((b) => a.filter() === !1 ? !0 : b.search ? b.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let b = r.current;
    if (!(!b || e.disabled))
      return b.addEventListener(Nl, d), () => b.removeEventListener(Nl, d);
  }, [u, e.onSelect, e.disabled]);
  function d() {
    var b, x;
    (x = (b = s.current).onSelect) == null || x.call(b, i.current);
  }
  function p() {
    c.setState("value", i.current, !0);
  }
  if (!u)
    return null;
  let { disabled: m, value: h, onSelect: v, ...g } = e;
  return C.createElement("div", { ref: ts([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : p, onClick: m ? void 0 : d }, e.children);
}), PP = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = es(), u = Co((p) => l.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Vo(() => l.group(a), []), yg(a, s, [e.value, e.heading, i]);
  let d = C.createElement(gg.Provider, { value: a }, r);
  return C.createElement("div", { ref: ts([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, d));
}), TP = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = Co((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: ts([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), OP = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = rd(), s = Co((c) => c.search), i = es();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), kP = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = es();
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
  }, []), C.createElement("div", { ref: ts([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), DP = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(fP, { open: n, onOpenChange: r }, C.createElement(pP, { container: o }, C.createElement(mP, { "cmdk-overlay": "" }), C.createElement(vP, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(bg, { ref: t, ...a }))));
}), MP = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = Co((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), RP = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), Ut = Object.assign(bg, { List: kP, Item: NP, Input: OP, Group: PP, Separator: TP, Dialog: DP, Empty: MP, Loading: RP });
function jP(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function AP(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function xg(e) {
  let t = C.useRef(e);
  return Vo(() => {
    t.current = e;
  }), t;
}
var Vo = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function co(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function ts(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Co(e) {
  let t = rd(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function yg(e, t, n) {
  let r = C.useRef(), o = es();
  return Vo(() => {
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
    o.value(e, s), (a = t.current) == null || a.setAttribute(ir, s), r.current = s;
  }), r;
}
var IP = () => {
  let [e, t] = C.useState(), n = co(() => /* @__PURE__ */ new Map());
  return Vo(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, LP = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Hn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
Hn.displayName = Ut.displayName;
const SR = ({ children: e, ...t }) => /* @__PURE__ */ f.exports.jsx(mh, { ...t, children: /* @__PURE__ */ f.exports.jsx(qu, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ f.exports.jsx(Hn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), mr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.exports.jsx(Ls, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
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
mr.displayName = Ut.Input.displayName;
const ns = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.List,
  {
    ref: n,
    className: j("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
ns.displayName = Ut.List.displayName;
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
    className: j(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
dn.displayName = Ut.Group.displayName;
const Hi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.Separator,
  {
    ref: n,
    className: j("-mx-1 h-px bg-border", e),
    ...t
  }
));
Hi.displayName = Ut.Separator.displayName;
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
const FP = ({
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
FP.displayName = "CommandShortcut";
const VP = /* @__PURE__ */ A((e, t) => {
  const { ratio: n = 1, style: r, ...o } = e;
  return /* @__PURE__ */ $("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ $(ue.div, P({}, o, {
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
}), WP = VP, NR = WP;
function UP(e, t) {
  return bi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const $g = "ScrollArea", [wg, PR] = ot($g), [zP, Qt] = wg($g), BP = /* @__PURE__ */ A((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = te(null), [l, u] = te(null), [d, p] = te(null), [m, h] = te(null), [v, g] = te(null), [b, x] = te(0), [y, _] = te(0), [w, N] = te(!1), [k, E] = te(!1), T = Se(
    t,
    (U) => c(U)
  ), K = Pn(o);
  return /* @__PURE__ */ $(zP, {
    scope: n,
    type: r,
    dir: K,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: l,
    onViewportChange: u,
    content: d,
    onContentChange: p,
    scrollbarX: m,
    onScrollbarXChange: h,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: N,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: k,
    onScrollbarYEnabledChange: E,
    onCornerWidthChange: x,
    onCornerHeightChange: _
  }, /* @__PURE__ */ $(ue.div, P({
    dir: K
  }, s, {
    ref: T,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: b + "px",
      ["--radix-scroll-area-corner-height"]: y + "px",
      ...e.style
    }
  })));
}), HP = "ScrollAreaViewport", KP = /* @__PURE__ */ A((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = Qt(HP, n), s = H(null), i = Se(t, s, a.onViewportChange);
  return /* @__PURE__ */ $(Kt, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(ue.div, P({
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
  }), /* @__PURE__ */ $("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), Xn = "ScrollAreaScrollbar", _g = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Xn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return X(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ $(YP, P({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ $(GP, P({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ $(Cg, P({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ $(od, P({}, r, {
    ref: t
  })) : null;
}), YP = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Xn, e.__scopeScrollArea), [a, s] = te(!1);
  return X(() => {
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
  ]), /* @__PURE__ */ $(tt, {
    present: n || a
  }, /* @__PURE__ */ $(Cg, P({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), GP = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Xn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Yi(
    () => c("SCROLL_END"),
    100
  ), [i, c] = UP("hidden", {
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
  return X(() => {
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
  ]), X(() => {
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
  ]), /* @__PURE__ */ $(tt, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ $(od, P({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: ee(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: ee(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), Cg = /* @__PURE__ */ A((e, t) => {
  const n = Qt(Xn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = te(!1), i = e.orientation === "horizontal", c = Yi(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return Eo(n.viewport, c), Eo(n.content, c), /* @__PURE__ */ $(tt, {
    present: r || a
  }, /* @__PURE__ */ $(od, P({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), od = /* @__PURE__ */ A((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Qt(Xn, e.__scopeScrollArea), a = H(null), s = H(0), [i, c] = te({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = Pg(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function d(p, m) {
    return nT(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ $(qP, P({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = sp(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = d(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ $(ZP, P({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = sp(p, i);
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
}), qP = /* @__PURE__ */ A((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Qt(Xn, e.__scopeScrollArea), [s, i] = te(), c = H(null), l = Se(t, c, a.onScrollbarXChange);
  return X(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(Sg, P({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Ki(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), Og(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Js(s.paddingLeft),
          paddingEnd: Js(s.paddingRight)
        }
      });
    }
  }));
}), ZP = /* @__PURE__ */ A((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Qt(Xn, e.__scopeScrollArea), [s, i] = te(), c = H(null), l = Se(t, c, a.onScrollbarYChange);
  return X(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(Sg, P({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Ki(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), Og(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Js(s.paddingTop),
          paddingEnd: Js(s.paddingBottom)
        }
      });
    }
  }));
}), [XP, Eg] = wg(Xn), Sg = /* @__PURE__ */ A((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...p } = e, m = Qt(Xn, n), [h, v] = te(null), g = Se(
    t,
    (T) => v(T)
  ), b = H(null), x = H(""), y = m.viewport, _ = r.content - r.viewport, w = Be(u), N = Be(c), k = Yi(d, 10);
  function E(T) {
    if (b.current) {
      const K = T.clientX - b.current.left, U = T.clientY - b.current.top;
      l({
        x: K,
        y: U
      });
    }
  }
  return X(() => {
    const T = (K) => {
      const U = K.target;
      (h == null ? void 0 : h.contains(U)) && w(K, _);
    };
    return document.addEventListener("wheel", T, {
      passive: !1
    }), () => document.removeEventListener("wheel", T, {
      passive: !1
    });
  }, [
    y,
    h,
    _,
    w
  ]), X(N, [
    r,
    N
  ]), Eo(h, k), Eo(m.content, k), /* @__PURE__ */ $(XP, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: Be(a),
    onThumbPointerUp: Be(s),
    onThumbPositionChange: N,
    onThumbPointerDown: Be(i)
  }, /* @__PURE__ */ $(ue.div, P({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: ee(e.onPointerDown, (T) => {
      T.button === 0 && (T.target.setPointerCapture(T.pointerId), b.current = h.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", E(T));
    }),
    onPointerMove: ee(e.onPointerMove, E),
    onPointerUp: ee(e.onPointerUp, (T) => {
      const K = T.target;
      K.hasPointerCapture(T.pointerId) && K.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = x.current, b.current = null;
    })
  })));
}), Pl = "ScrollAreaThumb", QP = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = Eg(Pl, e.__scopeScrollArea);
  return /* @__PURE__ */ $(tt, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ $(JP, P({
    ref: t
  }, r)));
}), JP = /* @__PURE__ */ A((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = Qt(Pl, n), s = Eg(Pl, n), { onThumbPositionChange: i } = s, c = Se(
    t,
    (d) => s.onThumbChange(d)
  ), l = H(), u = Yi(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return X(() => {
    const d = a.viewport;
    if (d) {
      const p = () => {
        if (u(), !l.current) {
          const m = rT(d, i);
          l.current = m, i();
        }
      };
      return i(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ $(ue.div, P({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: ee(e.onPointerDownCapture, (d) => {
      const m = d.target.getBoundingClientRect(), h = d.clientX - m.left, v = d.clientY - m.top;
      s.onThumbPointerDown({
        x: h,
        y: v
      });
    }),
    onPointerUp: ee(e.onPointerUp, s.onThumbPointerUp)
  }));
}), Ng = "ScrollAreaCorner", eT = /* @__PURE__ */ A((e, t) => {
  const n = Qt(Ng, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ $(tT, P({}, e, {
    ref: t
  })) : null;
}), tT = /* @__PURE__ */ A((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Qt(Ng, n), [a, s] = te(0), [i, c] = te(0), l = Boolean(a && i);
  return Eo(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), Eo(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), l ? /* @__PURE__ */ $(ue.div, P({}, r, {
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
function Js(e) {
  return e ? parseInt(e, 10) : 0;
}
function Pg(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Ki(e) {
  const t = Pg(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function nT(e, t, n, r = "ltr") {
  const o = Ki(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return Tg([
    c,
    l
  ], d)(e);
}
function sp(e, t, n = "ltr") {
  const r = Ki(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = fa(e, c);
  return Tg([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function Tg(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Og(e, t) {
  return e > 0 && e < t;
}
const rT = (e, t = () => {
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
function Yi(e, t) {
  const n = Be(e), r = H(0);
  return X(
    () => () => window.clearTimeout(r.current),
    []
  ), ve(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Eo(e, t) {
  const n = Be(t);
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
const kg = BP, oT = KP, aT = eT, sT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  kg,
  {
    ref: r,
    className: j("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx(oT, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.exports.jsx(Dg, {}),
      /* @__PURE__ */ f.exports.jsx(aT, {})
    ]
  }
));
sT.displayName = kg.displayName;
const Dg = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  _g,
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
    children: /* @__PURE__ */ f.exports.jsx(QP, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Dg.displayName = _g.displayName;
const TR = Ku, OR = Yu, kR = Xa, iT = Gu, Mg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ya,
  {
    className: j(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Mg.displayName = Ya.displayName;
const cT = ko(
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
), lT = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(iT, { children: [
  /* @__PURE__ */ f.exports.jsx(Mg, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Ga,
    {
      ref: o,
      className: j(cT({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f.exports.jsxs(Xa, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ f.exports.jsx(_i, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
lT.displayName = Ga.displayName;
const uT = ({
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
uT.displayName = "SheetHeader";
const dT = ({
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
dT.displayName = "SheetFooter";
const fT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  qa,
  {
    ref: n,
    className: j("text-lg font-semibold text-foreground", e),
    ...t
  }
));
fT.displayName = qa.displayName;
const pT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Za,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
pT.displayName = Za.displayName;
const ad = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f.exports.jsx(
  "table",
  {
    ref: n,
    className: j("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
ad.displayName = "TableUI";
const Rg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("thead", { ref: n, className: j("[&_tr]:border-b", e), ...t }));
Rg.displayName = "TableHeader";
const jg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tbody",
  {
    ref: n,
    className: j("[&_tr:last-child]:border-0", e),
    ...t
  }
));
jg.displayName = "TableBody";
const mT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: j("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
mT.displayName = "TableFooter";
const Gi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
Gi.displayName = "TableRow";
const Ag = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
Ag.displayName = "TableHead";
const sd = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "td",
  {
    ref: n,
    className: j("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
sd.displayName = "TableCell";
const vT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "caption",
  {
    ref: n,
    className: j("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
vT.displayName = "TableCaption";
const Ig = "Dialog", [Lg, Fg] = ot(Ig), [hT, vn] = Lg(Ig), gT = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = H(null), c = H(null), [l = !1, u] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(hT, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: lt(),
    titleId: lt(),
    descriptionId: lt(),
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
}, bT = "DialogTrigger", xT = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = vn(bT, n), a = Se(t, o.triggerRef);
  return /* @__PURE__ */ $(ue.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": id(o.open)
  }, r, {
    ref: a,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
}), Vg = "DialogPortal", [yT, Wg] = Lg(Vg, {
  forceMount: void 0
}), $T = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = vn(Vg, t);
  return /* @__PURE__ */ $(yT, {
    scope: t,
    forceMount: n
  }, Rt.map(
    r,
    (s) => /* @__PURE__ */ $(tt, {
      present: n || a.open
    }, /* @__PURE__ */ $(Pi, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Tl = "DialogOverlay", wT = /* @__PURE__ */ A((e, t) => {
  const n = Wg(Tl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = vn(Tl, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ $(tt, {
    present: r || a.open
  }, /* @__PURE__ */ $(_T, P({}, o, {
    ref: t
  }))) : null;
}), _T = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = vn(Tl, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $(Wa, {
      as: Zt,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ $(ue.div, P({
      "data-state": id(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), So = "DialogContent", CT = /* @__PURE__ */ A((e, t) => {
  const n = Wg(So, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = vn(So, e.__scopeDialog);
  return /* @__PURE__ */ $(tt, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(ET, P({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(ST, P({}, o, {
    ref: t
  })));
}), ET = /* @__PURE__ */ A((e, t) => {
  const n = vn(So, e.__scopeDialog), r = H(null), o = Se(t, n.contentRef, r);
  return X(() => {
    const a = r.current;
    if (a)
      return jo(a);
  }, []), /* @__PURE__ */ $(Ug, P({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ee(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: ee(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: ee(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), ST = /* @__PURE__ */ A((e, t) => {
  const n = vn(So, e.__scopeDialog), r = H(!1), o = H(!1);
  return /* @__PURE__ */ $(Ug, P({}, e, {
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
}), Ug = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = vn(So, n), c = H(null), l = Se(t, c);
  return Aa(), /* @__PURE__ */ $(Kt, null, /* @__PURE__ */ $(Ei, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(Hr, P({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": id(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), zg = "DialogTitle", NT = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = vn(zg, n);
  return /* @__PURE__ */ $(ue.h2, P({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), PT = "DialogDescription", TT = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = vn(PT, n);
  return /* @__PURE__ */ $(ue.p, P({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), OT = "DialogClose", kT = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = vn(OT, n);
  return /* @__PURE__ */ $(ue.button, P({
    type: "button"
  }, r, {
    ref: t,
    onClick: ee(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function id(e) {
  return e ? "open" : "closed";
}
const DT = "DialogTitleWarning", [MT, DR] = km(DT, {
  contentName: So,
  titleName: zg,
  docsSlug: "dialog"
}), RT = gT, jT = xT, AT = $T, IT = wT, LT = CT, FT = NT, VT = TT, Bg = kT, WT = "AlertDialog", [UT, MR] = ot(WT, [
  Fg
]), Qn = Fg(), zT = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Qn(t);
  return /* @__PURE__ */ $(RT, P({}, r, n, {
    modal: !0
  }));
}, BT = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Qn(n);
  return /* @__PURE__ */ $(jT, P({}, o, r, {
    ref: t
  }));
}), HT = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Qn(t);
  return /* @__PURE__ */ $(AT, P({}, r, n));
}, KT = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Qn(n);
  return /* @__PURE__ */ $(IT, P({}, o, r, {
    ref: t
  }));
}), Hg = "AlertDialogContent", [YT, GT] = UT(Hg), qT = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Qn(n), s = H(null), i = Se(t, s), c = H(null);
  return /* @__PURE__ */ $(MT, {
    contentName: Hg,
    titleName: ZT,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ $(YT, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ $(LT, P({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: ee(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ $(Xl, null, r), !1)));
}), ZT = "AlertDialogTitle", XT = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Qn(n);
  return /* @__PURE__ */ $(FT, P({}, o, r, {
    ref: t
  }));
}), QT = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Qn(n);
  return /* @__PURE__ */ $(VT, P({}, o, r, {
    ref: t
  }));
}), JT = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Qn(n);
  return /* @__PURE__ */ $(Bg, P({}, o, r, {
    ref: t
  }));
}), e6 = "AlertDialogCancel", t6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = GT(e6, n), a = Qn(n), s = Se(t, o);
  return /* @__PURE__ */ $(Bg, P({}, a, r, {
    ref: s
  }));
}), n6 = zT, r6 = BT, Kg = HT, Yg = KT, Gg = qT, qg = JT, Zg = t6, Xg = XT, Qg = QT, RR = n6, jR = r6, Jg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(Kg, { className: j(e), ...t });
Jg.displayName = Kg.displayName;
const eb = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Yg,
  {
    className: j(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
eb.displayName = Yg.displayName;
const o6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(Jg, { children: [
  /* @__PURE__ */ f.exports.jsx(eb, {}),
  /* @__PURE__ */ f.exports.jsx(
    Gg,
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
o6.displayName = Gg.displayName;
const a6 = ({
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
a6.displayName = "AlertDialogHeader";
const s6 = ({
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
s6.displayName = "AlertDialogFooter";
const i6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Xg,
  {
    ref: n,
    className: j("text-lg font-semibold", e),
    ...t
  }
));
i6.displayName = Xg.displayName;
const c6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Qg,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
c6.displayName = Qg.displayName;
const l6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  qg,
  {
    ref: n,
    className: j(bo(), e),
    ...t
  }
));
l6.displayName = qg.displayName;
const u6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Zg,
  {
    ref: n,
    className: j(
      bo({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
u6.displayName = Zg.displayName;
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
const tb = "Collapsible", [d6, nb] = ot(tb), [f6, cd] = d6(tb), p6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = ft({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ $(f6, {
    scope: n,
    disabled: a,
    contentId: lt(),
    open: c,
    onOpenToggle: ve(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ $(ue.div, P({
    "data-state": ld(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), m6 = "CollapsibleTrigger", rb = /* @__PURE__ */ A((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = cd(m6, n);
  return /* @__PURE__ */ $(ue.button, P({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": ld(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
}), ob = "CollapsibleContent", ab = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = cd(ob, e.__scopeCollapsible);
  return /* @__PURE__ */ $(
    tt,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ $(v6, P({}, r, {
      ref: t,
      present: a
    }))
  );
}), v6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = cd(ob, n), [i, c] = te(r), l = H(null), u = Se(t, l), d = H(0), p = d.current, m = H(0), h = m.current, v = s.open || i, g = H(v), b = H();
  return X(() => {
    const x = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(x);
  }, []), Ct(() => {
    const x = l.current;
    if (x) {
      b.current = b.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const y = x.getBoundingClientRect();
      d.current = y.height, m.current = y.width, g.current || (x.style.transitionDuration = b.current.transitionDuration, x.style.animationName = b.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ $(ue.div, P({
    "data-state": ld(s.open),
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
function ld(e) {
  return e ? "open" : "closed";
}
const sb = p6, h6 = rb, g6 = ab, Er = "Accordion", b6 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [ud, x6, y6] = $r(Er), [qi, AR] = ot(Er, [
  y6,
  nb
]), dd = nb(), ib = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ S.createElement(ud.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ S.createElement(C6, P({}, a, {
    ref: t
  })) : /* @__PURE__ */ S.createElement(_6, P({}, o, {
    ref: t
  })));
});
ib.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [cb, $6] = qi(Er), [lb, w6] = qi(Er, {
  collapsible: !1
}), _6 = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = ft({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ S.createElement(cb, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: S.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ S.createElement(lb, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ S.createElement(ub, P({}, s, {
    ref: t
  }))));
}), C6 = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = ft({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = S.useCallback(
    (u) => i(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      i
    ]
  ), l = S.useCallback(
    (u) => i(
      (d = []) => d.filter(
        (p) => p !== u
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ S.createElement(cb, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ S.createElement(lb, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ S.createElement(ub, P({}, a, {
    ref: t
  }))));
}), [E6, Zi] = qi(Er), ub = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = S.useRef(null), c = Se(i, t), l = x6(n), d = Pn(o) === "ltr", p = ee(e.onKeyDown, (m) => {
    var h;
    if (!b6.includes(m.key))
      return;
    const v = m.target, g = l().filter((T) => {
      var K;
      return !((K = T.ref.current) !== null && K !== void 0 && K.disabled);
    }), b = g.findIndex(
      (T) => T.ref.current === v
    ), x = g.length;
    if (b === -1)
      return;
    m.preventDefault();
    let y = b;
    const _ = 0, w = x - 1, N = () => {
      y = b + 1, y > w && (y = _);
    }, k = () => {
      y = b - 1, y < _ && (y = w);
    };
    switch (m.key) {
      case "Home":
        y = _;
        break;
      case "End":
        y = w;
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
    const E = y % x;
    (h = g[E].ref.current) === null || h === void 0 || h.focus();
  });
  return /* @__PURE__ */ S.createElement(E6, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ S.createElement(ud.Slot, {
    scope: n
  }, /* @__PURE__ */ S.createElement(ue.div, P({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Ol = "AccordionItem", [S6, fd] = qi(Ol), N6 = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Zi(Ol, n), s = $6(Ol, n), i = dd(n), c = lt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ S.createElement(S6, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ S.createElement(sb, P({
    "data-orientation": a.orientation,
    "data-state": db(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), P6 = "AccordionHeader", T6 = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Zi(Er, n), a = fd(P6, n);
  return /* @__PURE__ */ S.createElement(ue.h3, P({
    "data-orientation": o.orientation,
    "data-state": db(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), ip = "AccordionTrigger", O6 = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Zi(Er, n), a = fd(ip, n), s = w6(ip, n), i = dd(n);
  return /* @__PURE__ */ S.createElement(ud.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ S.createElement(h6, P({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), k6 = "AccordionContent", D6 = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Zi(Er, n), a = fd(k6, n), s = dd(n);
  return /* @__PURE__ */ S.createElement(g6, P({
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
function db(e) {
  return e ? "open" : "closed";
}
const M6 = ib, R6 = N6, j6 = T6, fb = O6, pb = D6, IR = M6, A6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  R6,
  {
    ref: n,
    className: j("border-b", e),
    ...t
  }
));
A6.displayName = "AccordionItem";
const I6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(j6, { className: "flex", children: /* @__PURE__ */ f.exports.jsxs(
  fb,
  {
    ref: r,
    className: j(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(ra, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
I6.displayName = fb.displayName;
const L6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  pb,
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
L6.displayName = pb.displayName;
const LR = sb, FR = rb, VR = ab;
let Ic;
const mb = "HoverCard", [vb, WR] = ot(mb, [
  Tn
]), pd = Tn(), [F6, md] = vb(mb), V6 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = pd(t), l = H(0), u = H(0), d = H(!1), p = H(!1), [m = !1, h] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = ve(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => h(!0),
      s
    );
  }, [
    s,
    h
  ]), g = ve(() => {
    clearTimeout(l.current), !d.current && !p.current && (u.current = window.setTimeout(
      () => h(!1),
      i
    ));
  }, [
    i,
    h
  ]), b = ve(
    () => h(!1),
    [
      h
    ]
  );
  return X(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ $(F6, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: d,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ $(Ro, c, n));
}, W6 = "HoverCardTrigger", U6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = md(W6, n), a = pd(n);
  return /* @__PURE__ */ $(Fa, P({
    asChild: !0
  }, a), /* @__PURE__ */ $(ue.a, P({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: ee(e.onPointerEnter, ei(o.onOpen)),
    onPointerLeave: ee(e.onPointerLeave, ei(o.onClose)),
    onFocus: ee(e.onFocus, o.onOpen),
    onBlur: ee(e.onBlur, o.onClose),
    onTouchStart: ee(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), z6 = "HoverCardPortal", [UR, B6] = vb(z6, {
  forceMount: void 0
}), kl = "HoverCardContent", H6 = /* @__PURE__ */ A((e, t) => {
  const n = B6(kl, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = md(kl, e.__scopeHoverCard);
  return /* @__PURE__ */ $(tt, {
    present: r || a.open
  }, /* @__PURE__ */ $(K6, P({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: ee(e.onPointerEnter, ei(a.onOpen)),
    onPointerLeave: ee(e.onPointerLeave, ei(a.onClose)),
    ref: t
  })));
}), K6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = md(kl, n), l = pd(n), u = H(null), d = Se(t, u), [p, m] = te(!1);
  return X(() => {
    if (p) {
      const h = document.body;
      return Ic = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = Ic, h.style.webkitUserSelect = Ic;
      };
    }
  }, [
    p
  ]), X(() => {
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
  ]), X(() => {
    u.current && Y6(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ $(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: ee(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ $(Va, P({}, l, i, {
    onPointerDown: ee(i.onPointerDown, (h) => {
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
function ei(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function Y6(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const G6 = V6, q6 = U6, hb = H6, zR = G6, BR = q6, Z6 = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  hb,
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
Z6.displayName = hb.displayName;
const HR = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), vd = "Menubar", [Dl, X6, Q6] = $r(vd), [gb, KR] = ot(vd, [
  Q6,
  wr
]), Ft = Ua(), bb = wr(), [J6, hd] = gb(vd), eO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = Pn(i), u = bb(n), [d = "", p] = ft({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = te(null);
  return /* @__PURE__ */ $(J6, {
    scope: n,
    value: d,
    onMenuOpen: ve((v) => {
      p(v), h(v);
    }, [
      p
    ]),
    onMenuClose: ve(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: ve((v) => {
      p(
        (g) => Boolean(g) ? "" : v
      ), h(v);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ $(Dl.Provider, {
    scope: n
  }, /* @__PURE__ */ $(Dl.Slot, {
    scope: n
  }, /* @__PURE__ */ $(Ti, P({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: m,
    onCurrentTabStopIdChange: h
  }), /* @__PURE__ */ $(ue.div, P({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), xb = "MenubarMenu", [tO, yb] = gb(xb), nO = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = lt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = hd(xb, t), i = Ft(t), c = H(null), l = H(!1), u = s.value === a;
  return X(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ $(tO, {
    scope: t,
    value: a,
    triggerId: lt(),
    triggerRef: c,
    contentId: lt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ $(Eu, P({}, i, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, cp = "MenubarTrigger", rO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = bb(n), s = Ft(n), i = hd(cp, n), c = yb(cp, n), l = H(null), u = Se(t, l, c.triggerRef), [d, p] = te(!1), m = i.value === c.value;
  return /* @__PURE__ */ $(Dl.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ $(Oi, P({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ $(Su, P({
    asChild: !0
  }, s), /* @__PURE__ */ $(ue.button, P({
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
    onPointerDown: ee(e.onPointerDown, (h) => {
      !r && h.button === 0 && h.ctrlKey === !1 && (i.onMenuOpen(c.value), m || h.preventDefault());
    }),
    onPointerEnter: ee(e.onPointerEnter, () => {
      if (Boolean(i.value) && !m) {
        var v;
        i.onMenuOpen(c.value), (v = l.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: ee(e.onKeyDown, (h) => {
      r || ([
        "Enter",
        " "
      ].includes(h.key) && i.onMenuToggle(c.value), h.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(h.key) && (c.wasKeyboardTriggerOpenRef.current = !0, h.preventDefault()));
    }),
    onFocus: ee(
      e.onFocus,
      () => p(!0)
    ),
    onBlur: ee(
      e.onBlur,
      () => p(!1)
    )
  })))));
}), oO = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Ft(t);
  return /* @__PURE__ */ $(Nu, P({}, r, n));
}, lp = "MenubarContent", aO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Ft(n), s = hd(lp, n), i = yb(lp, n), c = X6(n), l = H(!1);
  return /* @__PURE__ */ $(Pu, P({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: ee(e.onCloseAutoFocus, (u) => {
      if (!Boolean(s.value) && !l.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
      }
      l.current = !1, u.preventDefault();
    }),
    onFocusOutside: ee(e.onFocusOutside, (u) => {
      const d = u.target;
      c().some((m) => {
        var h;
        return (h = m.ref.current) === null || h === void 0 ? void 0 : h.contains(d);
      }) && u.preventDefault();
    }),
    onInteractOutside: ee(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (u) => {
      i.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: ee(e.onKeyDown, (u) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(u.key)) {
        const d = u.target, p = d.hasAttribute("data-radix-menubar-subtrigger"), m = d.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!v && p || m && v)
          return;
        let x = c().filter(
          (w) => !w.disabled
        ).map(
          (w) => w.value
        );
        v && x.reverse();
        const y = x.indexOf(i.value);
        x = s.loop ? gO(x, y + 1) : x.slice(y + 1);
        const [_] = x;
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
}), sO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(Tu, P({}, o, r, {
    ref: t
  }));
}), iO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(Ou, P({}, o, r, {
    ref: t
  }));
}), cO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(ku, P({}, o, r, {
    ref: t
  }));
}), lO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(Du, P({}, o, r, {
    ref: t
  }));
}), uO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(Mu, P({}, o, r, {
    ref: t
  }));
}), dO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(Ru, P({}, o, r, {
    ref: t
  }));
}), fO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(ju, P({}, o, r, {
    ref: t
  }));
}), pO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(Au, P({}, o, r, {
    ref: t
  }));
}), mO = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Ft(t), [i = !1, c] = ft({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(Iu, P({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, vO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(Lu, P({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), hO = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(Fu, P({}, o, {
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
function gO(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const $b = eO, bO = nO, wb = rO, _b = oO, Cb = aO, xO = sO, Eb = iO, Sb = cO, Nb = lO, yO = uO, Pb = dO, Tb = fO, Ob = pO, $O = mO, kb = vO, Db = hO, YR = bO, GR = xO, qR = _b, ZR = $O, XR = yO, wO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $b,
  {
    ref: n,
    className: j(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
wO.displayName = $b.displayName;
const _O = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  wb,
  {
    ref: n,
    className: j(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
_O.displayName = wb.displayName;
const CO = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  kb,
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
      /* @__PURE__ */ f.exports.jsx(xr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
CO.displayName = kb.displayName;
const EO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Db,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
EO.displayName = Db.displayName;
const SO = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.exports.jsx(_b, { children: /* @__PURE__ */ f.exports.jsx(
    Cb,
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
SO.displayName = Cb.displayName;
const NO = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Sb,
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
NO.displayName = Sb.displayName;
const PO = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Nb,
  {
    ref: o,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Tb, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
PO.displayName = Nb.displayName;
const TO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Pb,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Tb, { children: /* @__PURE__ */ f.exports.jsx(wi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
TO.displayName = Pb.displayName;
const OO = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Eb,
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
OO.displayName = Eb.displayName;
const kO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ob,
  {
    ref: n,
    className: j("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
kO.displayName = Ob.displayName;
const DO = ({
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
DO.displayname = "MenubarShortcut";
const rs = "NavigationMenu", [gd, Mb, MO] = $r(rs), [Ml, RO, jO] = $r(rs), [bd, QR] = ot(rs, [
  MO,
  jO
]), [AO, hn] = bd(rs), [IO, LO] = bd(rs), FO = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, p] = te(null), m = Se(
    t,
    (T) => p(T)
  ), h = Pn(l), v = H(0), g = H(0), b = H(0), [x, y] = te(!0), [_ = "", w] = ft({
    prop: r,
    onChange: (T) => {
      const K = T !== "", U = i > 0;
      K ? (window.clearTimeout(b.current), U && y(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => y(!0),
        i
      )), o == null || o(T);
    },
    defaultProp: a
  }), N = ve(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), k = ve((T) => {
    window.clearTimeout(g.current), w(T);
  }, [
    w
  ]), E = ve((T) => {
    _ === T ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(T);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return X(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ $(VO, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: h,
    orientation: c,
    rootNavigationMenu: d,
    onTriggerEnter: (T) => {
      window.clearTimeout(v.current), x ? E(T) : k(T);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), N();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: N,
    onItemSelect: (T) => {
      w(
        (K) => K === T ? "" : T
      );
    },
    onItemDismiss: () => w("")
  }, /* @__PURE__ */ $(ue.nav, P({
    "aria-label": "Main",
    "data-orientation": c,
    dir: h
  }, u, {
    ref: m
  })));
}), VO = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: p, onContentLeave: m } = e, [h, v] = te(null), [g, b] = te(/* @__PURE__ */ new Map()), [x, y] = te(null);
  return /* @__PURE__ */ $(AO, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: Lo(i),
    baseId: lt(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: x,
    onIndicatorTrackChange: y,
    onTriggerEnter: Be(u),
    onTriggerLeave: Be(d),
    onContentEnter: Be(p),
    onContentLeave: Be(m),
    onItemSelect: Be(c),
    onItemDismiss: Be(l),
    onViewportContentChange: ve((_, w) => {
      b((N) => (N.set(_, w), new Map(N)));
    }, []),
    onViewportContentRemove: ve((_) => {
      b((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ $(gd.Provider, {
    scope: t
  }, /* @__PURE__ */ $(IO, {
    scope: t,
    items: g
  }, s)));
}, WO = "NavigationMenuList", UO = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = hn(WO, n), a = /* @__PURE__ */ $(ue.ul, P({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ $(ue.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ $(gd.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ $(Lb, {
    asChild: !0
  }, a) : a));
}), zO = "NavigationMenuItem", [BO, Rb] = bd(zO), HO = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = lt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = H(null), c = H(null), l = H(null), u = H(() => {
  }), d = H(!1), p = ve((h = "start") => {
    if (i.current) {
      u.current();
      const v = Rl(i.current);
      v.length && xd(h === "start" ? v : v.reverse());
    }
  }, []), m = ve(() => {
    if (i.current) {
      const h = Rl(i.current);
      h.length && (u.current = n4(h));
    }
  }, []);
  return /* @__PURE__ */ $(BO, {
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
  }, /* @__PURE__ */ $(ue.li, P({}, o, {
    ref: t
  })));
}), up = "NavigationMenuTrigger", KO = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = hn(up, e.__scopeNavigationMenu), s = Rb(up, e.__scopeNavigationMenu), i = H(null), c = Se(i, s.triggerRef, t), l = Vb(a.baseId, s.value), u = Wb(a.baseId, s.value), d = H(!1), p = H(!1), m = s.value === a.value;
  return /* @__PURE__ */ $(Kt, null, /* @__PURE__ */ $(gd.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ $(Fb, {
    asChild: !0
  }, /* @__PURE__ */ $(ue.button, P({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": yd(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: ee(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: ee(e.onPointerMove, ti(() => {
      r || p.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: ee(e.onPointerLeave, ti(() => {
      r || (a.onTriggerLeave(), d.current = !1);
    })),
    onClick: ee(e.onClick, () => {
      a.onItemSelect(s.value), p.current = m;
    }),
    onKeyDown: ee(e.onKeyDown, (h) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && h.key === g && (s.onEntryKeyDown(), h.preventDefault());
    })
  })))), m && /* @__PURE__ */ $(Kt, null, /* @__PURE__ */ $(Ch, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (h) => {
      const v = s.contentRef.current, g = h.relatedTarget, b = g === i.current, x = v == null ? void 0 : v.contains(g);
      (b || !x) && s.onFocusProxyEnter(b ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ $("span", {
    "aria-owns": u
  })));
}), dp = "navigationMenu.linkSelect", YO = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ $(Fb, {
    asChild: !0
  }, /* @__PURE__ */ $(ue.a, P({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: ee(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(dp, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        dp,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), sa(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(Ds, {
          bubbles: !0,
          cancelable: !0
        });
        sa(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), jb = "NavigationMenuIndicator", GO = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = hn(jb, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ xi.createPortal(/* @__PURE__ */ $(tt, {
    present: n || a
  }, /* @__PURE__ */ $(qO, P({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), qO = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = hn(jb, n), a = Mb(n), [s, i] = te(null), [c, l] = te(null), u = o.orientation === "horizontal", d = Boolean(o.value);
  X(() => {
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
  return jl(s, p), jl(o.indicatorTrack, p), c ? /* @__PURE__ */ $(ue.div, P({
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
}), ma = "NavigationMenuContent", ZO = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = hn(ma, e.__scopeNavigationMenu), a = Rb(ma, e.__scopeNavigationMenu), s = Se(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ $(XO, P({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ $(tt, {
    present: n || i
  }, /* @__PURE__ */ $(Ab, P({
    "data-state": yd(i)
  }, c, {
    ref: s,
    onPointerEnter: ee(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: ee(e.onPointerLeave, ti(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), XO = /* @__PURE__ */ A((e, t) => {
  const n = hn(ma, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
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
}), Ds = "navigationMenu.rootContentDismiss", Ab = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = hn(ma, n), d = H(null), p = Se(d, t), m = Vb(u.baseId, r), h = Wb(u.baseId, r), v = Mb(n), g = H(null), { onItemDismiss: b } = u;
  X(() => {
    const y = d.current;
    if (u.isRootMenu && y) {
      const _ = () => {
        var w;
        b(), i(), y.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
      };
      return y.addEventListener(Ds, _), () => y.removeEventListener(Ds, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const x = _t(() => {
    const _ = v().map(
      (K) => K.value
    );
    u.dir === "rtl" && _.reverse();
    const w = _.indexOf(u.value), N = _.indexOf(u.previousValue), k = r === u.value, E = N === _.indexOf(r);
    if (!k && !E)
      return g.current;
    const T = (() => {
      if (w !== N) {
        if (k && N !== -1)
          return w > N ? "from-end" : "from-start";
        if (E && w !== -1)
          return w > N ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = T, T;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ $(Lb, {
    asChild: !0
  }, /* @__PURE__ */ $(Hr, P({
    id: h,
    "aria-labelledby": m,
    "data-motion": x,
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
    onFocusOutside: ee(e.onFocusOutside, (y) => {
      var _;
      c();
      const w = y.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains(w) && y.preventDefault();
    }),
    onPointerDownOutside: ee(e.onPointerDownOutside, (y) => {
      var _;
      const w = y.target, N = v().some((E) => {
        var T;
        return (T = E.ref.current) === null || T === void 0 ? void 0 : T.contains(w);
      }), k = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (N || k || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: ee(e.onKeyDown, (y) => {
      const _ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !_) {
        const k = Rl(y.currentTarget), E = document.activeElement, T = k.findIndex(
          (B) => B === E
        ), U = y.shiftKey ? k.slice(0, T).reverse() : k.slice(T + 1, k.length);
        if (xd(U))
          y.preventDefault();
        else {
          var N;
          (N = a.current) === null || N === void 0 || N.focus();
        }
      }
    }),
    onEscapeKeyDown: ee(e.onEscapeKeyDown, (y) => {
      s.current = !0;
    })
  })));
}), Ib = "NavigationMenuViewport", QO = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = hn(Ib, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ $(tt, {
    present: n || a
  }, /* @__PURE__ */ $(JO, P({}, r, {
    ref: t
  })));
}), JO = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = hn(Ib, n), s = Se(t, a.onViewportChange), i = LO(ma, e.__scopeNavigationMenu), [c, l] = te(null), [u, d] = te(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = Boolean(a.value), v = h ? a.value : a.previousValue;
  return jl(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ $(ue.div, P({
    "data-state": yd(h),
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
    onPointerEnter: ee(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: ee(e.onPointerLeave, ti(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: x, forceMount: y, ..._ }]) => {
    const w = v === b;
    return /* @__PURE__ */ $(tt, {
      key: b,
      present: y || w
    }, /* @__PURE__ */ $(Ab, P({}, _, {
      ref: Da(x, (N) => {
        w && N && d(N);
      })
    })));
  }));
}), e4 = "FocusGroup", Lb = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = hn(e4, n);
  return /* @__PURE__ */ $(Ml.Provider, {
    scope: n
  }, /* @__PURE__ */ $(Ml.Slot, {
    scope: n
  }, /* @__PURE__ */ $(ue.div, P({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), fp = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], t4 = "FocusGroupItem", Fb = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = RO(n), a = hn(t4, n);
  return /* @__PURE__ */ $(Ml.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ $(ue.button, P({}, r, {
    ref: t,
    onKeyDown: ee(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...fp
      ].includes(s.key)) {
        let c = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), fp.includes(s.key)) {
          const d = c.indexOf(s.currentTarget);
          c = c.slice(d + 1);
        }
        setTimeout(
          () => xd(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Rl(e) {
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
function xd(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function n4(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function jl(e, t) {
  const n = Be(t);
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
function yd(e) {
  return e ? "open" : "closed";
}
function Vb(e, t) {
  return `${e}-trigger-${t}`;
}
function Wb(e, t) {
  return `${e}-content-${t}`;
}
function ti(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Ub = FO, zb = UO, r4 = HO, Bb = KO, o4 = YO, Hb = GO, Kb = ZO, Yb = QO, a4 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Ub,
  {
    ref: r,
    className: j(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(Gb, {})
    ]
  }
));
a4.displayName = Ub.displayName;
const s4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  zb,
  {
    ref: n,
    className: j(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
s4.displayName = zb.displayName;
const JR = r4, i4 = ko(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), c4 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Bb,
  {
    ref: r,
    className: j(i4(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.exports.jsx(
        ra,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
c4.displayName = Bb.displayName;
const l4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Kb,
  {
    ref: n,
    className: j(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
l4.displayName = Kb.displayName;
const ej = o4, Gb = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: j("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.exports.jsx(
  Yb,
  {
    className: j(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Gb.displayName = Yb.displayName;
const u4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Hb,
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
u4.displayName = Hb.displayName;
const qb = "Progress", Xi = 100, [d4, tj] = ot(qb), [f4, p4] = d4(qb), Zb = /* @__PURE__ */ A((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = h4, ...s } = e, i = Al(o) ? o : Xi, c = Qb(r, i) ? r : null, l = ni(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ $(f4, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ $(ue.div, P({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": ni(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Xb(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
Zb.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Al(r) ? new Error(g4(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Al(e.max) ? e.max : Xi;
    return r != null && !Qb(r, a) ? new Error(b4(o, n)) : null;
  }
};
const m4 = "ProgressIndicator", v4 = /* @__PURE__ */ A((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = p4(m4, r);
  return /* @__PURE__ */ $(ue.div, P({
    "data-state": Xb(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function h4(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Xb(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function ni(e) {
  return typeof e == "number";
}
function Al(e) {
  return ni(e) && !isNaN(e) && e > 0;
}
function Qb(e, t) {
  return ni(e) && !isNaN(e) && e <= t && e >= 0;
}
function g4(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Xi}\`.`;
}
function b4(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Xi} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Jb = Zb, x4 = v4, y4 = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Jb,
  {
    ref: r,
    className: j(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(
      x4,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
y4.displayName = Jb.displayName;
const ex = "Radio", [$4, tx] = ot(ex), [w4, _4] = $4(ex), C4 = /* @__PURE__ */ A((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, d] = te(null), p = Se(
    t,
    (v) => d(v)
  ), m = H(!1), h = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ $(w4, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ $(ue.button, P({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": nx(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: ee(e.onClick, (v) => {
      o || c == null || c(), h && (m.current = v.isPropagationStopped(), m.current || v.stopPropagation());
    })
  })), h && /* @__PURE__ */ $(N4, {
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
}), E4 = "RadioIndicator", S4 = /* @__PURE__ */ A((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = _4(E4, n);
  return /* @__PURE__ */ $(tt, {
    present: r || a.checked
  }, /* @__PURE__ */ $(ue.span, P({
    "data-state": nx(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), N4 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Lo(n), i = La(t);
  return X(() => {
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
  ]), /* @__PURE__ */ $("input", P({
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
function nx(e) {
  return e ? "checked" : "unchecked";
}
const P4 = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], rx = "RadioGroup", [T4, nj] = ot(rx, [
  wr,
  tx
]), ox = wr(), ax = tx(), [O4, k4] = T4(rx), D4 = /* @__PURE__ */ A((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...p } = e, m = ox(n), h = Pn(l), [v, g] = ft({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ $(O4, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ $(Ti, P({
    asChild: !0
  }, m, {
    orientation: c,
    dir: h,
    loop: u
  }), /* @__PURE__ */ $(ue.div, P({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: h
  }, p, {
    ref: t
  }))));
}), M4 = "RadioGroupItem", R4 = /* @__PURE__ */ A((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = k4(M4, n), s = a.disabled || r, i = ox(n), c = ax(n), l = H(null), u = Se(t, l), d = a.value === o.value, p = H(!1);
  return X(() => {
    const m = (v) => {
      P4.includes(v.key) && (p.current = !0);
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ $(Oi, P({
    asChild: !0
  }, i, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ $(C4, P({
    disabled: s,
    required: a.required,
    checked: d
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: ee((m) => {
      m.key === "Enter" && m.preventDefault();
    }),
    onFocus: ee(o.onFocus, () => {
      var m;
      p.current && ((m = l.current) === null || m === void 0 || m.click());
    })
  })));
}), j4 = /* @__PURE__ */ A((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = ax(n);
  return /* @__PURE__ */ $(S4, P({}, o, r, {
    ref: t
  }));
}), sx = D4, ix = R4, A4 = j4, I4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  sx,
  {
    className: j("grid gap-2", e),
    ...t,
    ref: n
  }
));
I4.displayName = sx.displayName;
const L4 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ix,
  {
    ref: r,
    className: j(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(A4, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(wi, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
L4.displayName = ix.displayName;
const cx = [
  "PageUp",
  "PageDown"
], lx = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], ux = {
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
}, os = "Slider", [Il, F4, V4] = $r(os), [dx, rj] = ot(os, [
  V4
]), [W4, Qi] = dx(os), U4 = /* @__PURE__ */ A((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = te(null), b = Se(
    t,
    (F) => g(F)
  ), x = H(/* @__PURE__ */ new Set()), y = H(0), _ = s === "horizontal", w = v ? Boolean(v.closest("form")) : !0, N = _ ? z4 : B4, [k = [], E] = ft({
    prop: u,
    defaultProp: l,
    onChange: (F) => {
      var I;
      (I = [
        ...x.current
      ][y.current]) === null || I === void 0 || I.focus(), d(F);
    }
  }), T = H(k);
  function K(F) {
    const I = J4(k, F);
    Z(F, I);
  }
  function U(F) {
    Z(F, y.current);
  }
  function B() {
    const F = T.current[y.current];
    k[y.current] !== F && p(k);
  }
  function Z(F, I, { commit: L } = {
    commit: !1
  }) {
    const W = r3(a), q = o3(Math.round((F - r) / a) * a + r, W), R = fa(q, [
      r,
      o
    ]);
    E((D = []) => {
      const G = X4(D, R, I);
      if (n3(G, c * a)) {
        y.current = G.indexOf(R);
        const Q = String(G) !== String(D);
        return Q && L && p(G), Q ? G : D;
      } else
        return D;
    });
  }
  return /* @__PURE__ */ $(W4, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: y,
    thumbs: x.current,
    values: k,
    orientation: s
  }, /* @__PURE__ */ $(Il.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(Il.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(N, P({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: b,
    onPointerDown: ee(h.onPointerDown, () => {
      i || (T.current = k);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : K,
    onSlideMove: i ? void 0 : U,
    onSlideEnd: i ? void 0 : B,
    onHomeKeyDown: () => !i && Z(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && Z(o, k.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: F, direction: I }) => {
      if (!i) {
        const q = cx.includes(F.key) || F.shiftKey && lx.includes(F.key) ? 10 : 1, R = y.current, D = k[R], G = a * q * I;
        Z(D + G, R, {
          commit: !0
        });
      }
    }
  })))), w && k.map(
    (F, I) => /* @__PURE__ */ $(Z4, {
      key: I,
      name: n ? n + (k.length > 1 ? "[]" : "") : void 0,
      value: F
    })
  ));
}), [fx, px] = dx(os, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), z4 = /* @__PURE__ */ A((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, p] = te(null), m = Se(
    t,
    (y) => p(y)
  ), h = H(), v = Pn(o), g = v === "ltr", b = g && !a || !g && a;
  function x(y) {
    const _ = h.current || d.getBoundingClientRect(), w = [
      0,
      _.width
    ], k = $d(w, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = _, k(y - _.left);
  }
  return /* @__PURE__ */ $(fx, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ $(mx, P({
    dir: v,
    "data-orientation": "horizontal"
  }, u, {
    ref: m,
    style: {
      ...u.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: (y) => {
      const _ = x(y.clientX);
      s == null || s(_);
    },
    onSlideMove: (y) => {
      const _ = x(y.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      h.current = void 0, c == null || c();
    },
    onStepKeyDown: (y) => {
      const w = ux[b ? "from-left" : "from-right"].includes(y.key);
      l == null || l({
        event: y,
        direction: w ? -1 : 1
      });
    }
  })));
}), B4 = /* @__PURE__ */ A((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = H(null), d = Se(t, u), p = H(), m = !o;
  function h(v) {
    const g = p.current || u.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], y = $d(b, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, y(v - g.top);
  }
  return /* @__PURE__ */ $(fx, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ $(mx, P({
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
      const b = ux[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), mx = /* @__PURE__ */ A((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = Qi(os, n);
  return /* @__PURE__ */ $(ue.span, P({}, l, {
    ref: t,
    onKeyDown: ee(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (i(d), d.preventDefault()) : cx.concat(lx).includes(d.key) && (c(d), d.preventDefault());
    }),
    onPointerDown: ee(e.onPointerDown, (d) => {
      const p = d.target;
      p.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(p) ? p.focus() : r(d);
    }),
    onPointerMove: ee(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && o(d);
    }),
    onPointerUp: ee(e.onPointerUp, (d) => {
      const p = d.target;
      p.hasPointerCapture(d.pointerId) && (p.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), H4 = "SliderTrack", K4 = /* @__PURE__ */ A((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Qi(H4, n);
  return /* @__PURE__ */ $(ue.span, P({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), pp = "SliderRange", Y4 = /* @__PURE__ */ A((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Qi(pp, n), a = px(pp, n), s = H(null), i = Se(t, s), c = o.values.length, l = o.values.map(
    (p) => vx(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ $(ue.span, P({
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
}), mp = "SliderThumb", G4 = /* @__PURE__ */ A((e, t) => {
  const n = F4(e.__scopeSlider), [r, o] = te(null), a = Se(
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
  return /* @__PURE__ */ $(q4, P({}, e, {
    ref: a,
    index: s
  }));
}), q4 = /* @__PURE__ */ A((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Qi(mp, n), s = px(mp, n), [i, c] = te(null), l = Se(
    t,
    (g) => c(g)
  ), u = La(i), d = a.values[r], p = d === void 0 ? 0 : vx(d, a.min, a.max), m = Q4(r, a.values.length), h = u == null ? void 0 : u[s.size], v = h ? e3(h, p, s.direction) : 0;
  return X(() => {
    if (i)
      return a.thumbs.add(i), () => {
        a.thumbs.delete(i);
      };
  }, [
    i,
    a.thumbs
  ]), /* @__PURE__ */ $("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [s.startEdge]: `calc(${p}% + ${v}px)`
    }
  }, /* @__PURE__ */ $(Il.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(ue.span, P({
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
    onFocus: ee(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), Z4 = (e) => {
  const { value: t, ...n } = e, r = H(null), o = Lo(t);
  return X(() => {
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
  ]), /* @__PURE__ */ $("input", P({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function X4(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function vx(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return fa(a, [
    0,
    100
  ]);
}
function Q4(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function J4(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function e3(e, t, n) {
  const r = e / 2, a = $d([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function t3(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function n3(e, t) {
  if (t > 0) {
    const n = t3(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function $d(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function r3(e) {
  return (String(e).split(".")[1] || "").length;
}
function o3(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const hx = U4, a3 = K4, s3 = Y4, i3 = G4, c3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(
  hx,
  {
    ref: n,
    className: j(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(a3, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.exports.jsx(s3, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.exports.jsx(i3, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
c3.displayName = hx.displayName;
const gx = "Tabs", [l3, oj] = ot(gx, [
  wr
]), bx = wr(), [u3, wd] = l3(gx), d3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = Pn(i), [d, p] = ft({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ $(u3, {
    scope: n,
    baseId: lt(),
    value: d,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ $(ue.div, P({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), f3 = "TabsList", p3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = wd(f3, n), s = bx(n);
  return /* @__PURE__ */ $(Ti, P({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ $(ue.div, P({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), m3 = "TabsTrigger", v3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = wd(m3, n), i = bx(n), c = xx(s.baseId, r), l = yx(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ $(Oi, P({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ $(ue.button, P({
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
    onMouseDown: ee(e.onMouseDown, (d) => {
      !o && d.button === 0 && d.ctrlKey === !1 ? s.onValueChange(r) : d.preventDefault();
    }),
    onKeyDown: ee(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && s.onValueChange(r);
    }),
    onFocus: ee(e.onFocus, () => {
      const d = s.activationMode !== "manual";
      !u && !o && d && s.onValueChange(r);
    })
  })));
}), h3 = "TabsContent", g3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = wd(h3, n), c = xx(i.baseId, r), l = yx(i.baseId, r), u = r === i.value, d = H(u);
  return X(() => {
    const p = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ $(
    tt,
    {
      present: o || u
    },
    ({ present: p }) => /* @__PURE__ */ $(ue.div, P({
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
function xx(e, t) {
  return `${e}-trigger-${t}`;
}
function yx(e, t) {
  return `${e}-content-${t}`;
}
const b3 = d3, $x = p3, wx = v3, _x = g3, aj = b3, x3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $x,
  {
    ref: n,
    className: j(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
x3.displayName = $x.displayName;
const y3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  wx,
  {
    ref: n,
    className: j(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
y3.displayName = wx.displayName;
const $3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  _x,
  {
    ref: n,
    className: j(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
$3.displayName = _x.displayName;
const w3 = /* @__PURE__ */ A((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = ft({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ $(ue.button, P({
    type: "button",
    "aria-pressed": s,
    "data-state": s ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: ee(e.onClick, () => {
      e.disabled || i(!s);
    })
  }));
}), Cx = w3, _3 = ko(
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
), C3 = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  Cx,
  {
    ref: o,
    className: j(_3({ variant: t, size: n, className: e })),
    ...r
  }
));
C3.displayName = Cx.displayName;
const [Ji, sj] = ot("Tooltip", [
  Tn
]), _d = Tn(), E3 = "TooltipProvider", S3 = 700, Ll = "tooltip.open", [N3, Cd] = Ji(E3), P3 = (e) => {
  const { __scopeTooltip: t, delayDuration: n = S3, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = te(!0), c = H(!1), l = H(0);
  return X(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ $(N3, {
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
}, Ed = "Tooltip", [T3, ec] = Ji(Ed), O3 = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Cd(Ed, e.__scopeTooltip), l = _d(t), [u, d] = te(null), p = lt(), m = H(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = H(!1), [b = !1, x] = ft({
    prop: r,
    defaultProp: o,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ll))) : c.onClose(), a == null || a(k);
    }
  }), y = _t(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), _ = ve(() => {
    window.clearTimeout(m.current), g.current = !1, x(!0);
  }, [
    x
  ]), w = ve(() => {
    window.clearTimeout(m.current), x(!1);
  }, [
    x
  ]), N = ve(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, x(!0);
    }, v);
  }, [
    v,
    x
  ]);
  return X(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ $(Ro, l, /* @__PURE__ */ $(T3, {
    scope: t,
    contentId: p,
    open: b,
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
      h ? w() : window.clearTimeout(m.current);
    }, [
      w,
      h
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: h
  }, n));
}, vp = "TooltipTrigger", k3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = ec(vp, n), a = Cd(vp, n), s = _d(n), i = H(null), c = Se(t, i, o.onTriggerChange), l = H(!1), u = H(!1), d = ve(
    () => l.current = !1,
    []
  );
  return X(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ $(Fa, P({
    asChild: !0
  }, s), /* @__PURE__ */ $(ue.button, P({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: ee(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: ee(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: ee(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: ee(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: ee(e.onBlur, o.onClose),
    onClick: ee(e.onClick, o.onClose)
  })));
}), D3 = "TooltipPortal", [ij, M3] = Ji(D3, {
  forceMount: void 0
}), va = "TooltipContent", R3 = /* @__PURE__ */ A((e, t) => {
  const n = M3(va, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = ec(va, e.__scopeTooltip);
  return /* @__PURE__ */ $(tt, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ $(Ex, P({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ $(j3, P({
    side: o
  }, a, {
    ref: t
  })));
}), j3 = /* @__PURE__ */ A((e, t) => {
  const n = ec(va, e.__scopeTooltip), r = Cd(va, e.__scopeTooltip), o = H(null), a = Se(t, o), [s, i] = te(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, p = ve(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = ve((h, v) => {
    const g = h.currentTarget, b = {
      x: h.clientX,
      y: h.clientY
    }, x = I3(b, g.getBoundingClientRect()), y = L3(b, x), _ = F3(v.getBoundingClientRect()), w = W3([
      ...y,
      ..._
    ]);
    i(w), d(!0);
  }, [
    d
  ]);
  return X(() => () => p(), [
    p
  ]), X(() => {
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
  ]), X(() => {
    if (s) {
      const h = (v) => {
        const g = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, x = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !V3(b, s);
        x ? p() : y && (p(), l());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    c,
    u,
    s,
    l,
    p
  ]), /* @__PURE__ */ $(Ex, P({}, e, {
    ref: a
  }));
}), [A3, cj] = Ji(Ed, {
  isInside: !1
}), Ex = /* @__PURE__ */ A((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = ec(va, n), l = _d(n), { onClose: u } = c;
  return X(() => (document.addEventListener(Ll, u), () => document.removeEventListener(Ll, u)), [
    u
  ]), X(() => {
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
  ]), /* @__PURE__ */ $(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ $(Va, P({
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
  }), /* @__PURE__ */ $(Xl, null, r), /* @__PURE__ */ $(A3, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ $(Ch, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function I3(e, t) {
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
function L3(e, t, n = 5) {
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
function F3(e) {
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
function V3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function W3(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), U3(t);
}
function U3(e) {
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
const z3 = P3, B3 = O3, H3 = k3, Sx = R3, Kn = z3, Yn = B3, Gn = H3, En = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Sx,
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
En.displayName = Sx.displayName;
const Nx = "Switch", [K3, lj] = ot(Nx), [Y3, G3] = K3(Nx), q3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = te(null), m = Se(
    t,
    (x) => p(x)
  ), h = H(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, b] = ft({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ $(Y3, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ $(ue.button, P({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": Px(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onClick: ee(e.onClick, (x) => {
      b(
        (y) => !y
      ), v && (h.current = x.isPropagationStopped(), h.current || x.stopPropagation());
    })
  })), v && /* @__PURE__ */ $(Q3, {
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
}), Z3 = "SwitchThumb", X3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = G3(Z3, n);
  return /* @__PURE__ */ $(ue.span, P({
    "data-state": Px(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Q3 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Lo(n), i = La(t);
  return X(() => {
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
  ]), /* @__PURE__ */ $("input", P({
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
function Px(e) {
  return e ? "checked" : "unchecked";
}
const Tx = q3, J3 = X3, e7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tx,
  {
    className: j(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.exports.jsx(
      J3,
      {
        className: j(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
e7.displayName = Tx.displayName;
const hp = (e) => {
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
}, t7 = (e) => e ? hp(e) : hp;
var Ox = { exports: {} }, Lc = {}, Fc = { exports: {} }, Vc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp;
function n7() {
  if (gp)
    return Vc;
  gp = 1;
  var e = S;
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
  return Vc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Vc;
}
var Wc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bp;
function r7() {
  return bp || (bp = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = S, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), N = 1; N < _; N++)
          w[N - 1] = arguments[N];
        r("error", y, w);
      }
    }
    function r(y, _, w) {
      {
        var N = t.ReactDebugCurrentFrame, k = N.getStackAddendum();
        k !== "" && (_ += "%s", w = w.concat([k]));
        var E = w.map(function(T) {
          return String(T);
        });
        E.unshift("Warning: " + _), Function.prototype.apply.call(console[y], console, E);
      }
    }
    function o(y, _) {
      return y === _ && (y !== 0 || 1 / y === 1 / _) || y !== y && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function p(y, _, w) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var N = _();
      if (!d) {
        var k = _();
        a(N, k) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var E = s({
        inst: {
          value: N,
          getSnapshot: _
        }
      }), T = E[0].inst, K = E[1];
      return c(function() {
        T.value = N, T.getSnapshot = _, m(T) && K({
          inst: T
        });
      }, [y, N, _]), i(function() {
        m(T) && K({
          inst: T
        });
        var U = function() {
          m(T) && K({
            inst: T
          });
        };
        return y(U);
      }, [y]), l(N), N;
    }
    function m(y) {
      var _ = y.getSnapshot, w = y.value;
      try {
        var N = _();
        return !a(w, N);
      } catch {
        return !0;
      }
    }
    function h(y, _, w) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? h : p, x = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    Wc.useSyncExternalStore = x, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Wc;
}
var xp;
function kx() {
  return xp || (xp = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = n7() : e.exports = r7();
  }(Fc)), Fc.exports;
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
var yp;
function o7() {
  if (yp)
    return Lc;
  yp = 1;
  var e = S, t = kx();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Lc.useSyncExternalStoreWithSelector = function(l, u, d, p, m) {
    var h = a(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else
      v = h.current;
    h = i(function() {
      function b(N) {
        if (!x) {
          if (x = !0, y = N, N = p(N), m !== void 0 && v.hasValue) {
            var k = v.value;
            if (m(k, N))
              return _ = k;
          }
          return _ = N;
        }
        if (k = _, r(y, N))
          return k;
        var E = p(N);
        return m !== void 0 && m(k, E) ? k : (y = N, _ = E);
      }
      var x = !1, y, _, w = d === void 0 ? null : d;
      return [function() {
        return b(u());
      }, w === null ? void 0 : function() {
        return b(w());
      }];
    }, [u, d, p, m]);
    var g = o(l, h[0], h[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, Lc;
}
var Uc = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $p;
function a7() {
  return $p || ($p = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = S, t = kx();
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
      var b = i(function() {
        var w = !1, N, k, E = function(B) {
          if (!w) {
            w = !0, N = B;
            var Z = m(B);
            if (h !== void 0 && g.hasValue) {
              var F = g.value;
              if (h(F, Z))
                return k = F, F;
            }
            return k = Z, Z;
          }
          var I = N, L = k;
          if (r(I, B))
            return L;
          var W = m(B);
          return h !== void 0 && h(L, W) ? L : (N = B, k = W, W);
        }, T = p === void 0 ? null : p, K = function() {
          return E(d());
        }, U = T === null ? void 0 : function() {
          return E(T());
        };
        return [K, U];
      }, [d, p, m, h]), x = b[0], y = b[1], _ = o(u, x, y);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Uc.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Uc;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = o7() : e.exports = a7();
})(Ox);
const s7 = /* @__PURE__ */ z0(Ox.exports), { useSyncExternalStoreWithSelector: i7 } = s7;
function c7(e, t = e.getState, n) {
  const r = i7(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return V0(r), r;
}
const wp = (e) => {
  const t = typeof e == "function" ? t7(e) : e, n = (r, o) => c7(t, r, o);
  return Object.assign(n, t), n;
}, l7 = (e) => e ? wp(e) : wp, u7 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ f.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ f.exports.jsxs(fo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ f.exports.jsx(
      Mr,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ f.exports.jsx(po, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(ky, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(jt, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
var An = { exports: {} }, zc = { exports: {} }, Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _p;
function d7() {
  if (_p)
    return Ge;
  _p = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function y(w) {
    if (typeof w == "object" && w !== null) {
      var N = w.$$typeof;
      switch (N) {
        case t:
          switch (w = w.type, w) {
            case c:
            case l:
            case r:
            case a:
            case o:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case i:
                case u:
                case h:
                case m:
                case s:
                  return w;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  function _(w) {
    return y(w) === l;
  }
  return Ge.AsyncMode = c, Ge.ConcurrentMode = l, Ge.ContextConsumer = i, Ge.ContextProvider = s, Ge.Element = t, Ge.ForwardRef = u, Ge.Fragment = r, Ge.Lazy = h, Ge.Memo = m, Ge.Portal = n, Ge.Profiler = a, Ge.StrictMode = o, Ge.Suspense = d, Ge.isAsyncMode = function(w) {
    return _(w) || y(w) === c;
  }, Ge.isConcurrentMode = _, Ge.isContextConsumer = function(w) {
    return y(w) === i;
  }, Ge.isContextProvider = function(w) {
    return y(w) === s;
  }, Ge.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Ge.isForwardRef = function(w) {
    return y(w) === u;
  }, Ge.isFragment = function(w) {
    return y(w) === r;
  }, Ge.isLazy = function(w) {
    return y(w) === h;
  }, Ge.isMemo = function(w) {
    return y(w) === m;
  }, Ge.isPortal = function(w) {
    return y(w) === n;
  }, Ge.isProfiler = function(w) {
    return y(w) === a;
  }, Ge.isStrictMode = function(w) {
    return y(w) === o;
  }, Ge.isSuspense = function(w) {
    return y(w) === d;
  }, Ge.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === d || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === m || w.$$typeof === s || w.$$typeof === i || w.$$typeof === u || w.$$typeof === g || w.$$typeof === b || w.$$typeof === x || w.$$typeof === v);
  }, Ge.typeOf = y, Ge;
}
var qe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cp;
function f7() {
  return Cp || (Cp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function y(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === r || V === l || V === a || V === o || V === d || V === p || typeof V == "object" && V !== null && (V.$$typeof === h || V.$$typeof === m || V.$$typeof === s || V.$$typeof === i || V.$$typeof === u || V.$$typeof === g || V.$$typeof === b || V.$$typeof === x || V.$$typeof === v);
    }
    function _(V) {
      if (typeof V == "object" && V !== null) {
        var fe = V.$$typeof;
        switch (fe) {
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
                  case h:
                  case m:
                  case s:
                    return ye;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var w = c, N = l, k = i, E = s, T = t, K = u, U = r, B = h, Z = m, F = n, I = a, L = o, W = d, q = !1;
    function R(V) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(V) || _(V) === c;
    }
    function D(V) {
      return _(V) === l;
    }
    function G(V) {
      return _(V) === i;
    }
    function Q(V) {
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
    function me(V) {
      return _(V) === a;
    }
    function Y(V) {
      return _(V) === o;
    }
    function re(V) {
      return _(V) === d;
    }
    qe.AsyncMode = w, qe.ConcurrentMode = N, qe.ContextConsumer = k, qe.ContextProvider = E, qe.Element = T, qe.ForwardRef = K, qe.Fragment = U, qe.Lazy = B, qe.Memo = Z, qe.Portal = F, qe.Profiler = I, qe.StrictMode = L, qe.Suspense = W, qe.isAsyncMode = R, qe.isConcurrentMode = D, qe.isContextConsumer = G, qe.isContextProvider = Q, qe.isElement = ae, qe.isForwardRef = ne, qe.isFragment = ge, qe.isLazy = be, qe.isMemo = oe, qe.isPortal = ie, qe.isProfiler = me, qe.isStrictMode = Y, qe.isSuspense = re, qe.isValidElementType = y, qe.typeOf = _;
  }()), qe;
}
var Ep;
function Dx() {
  return Ep || (Ep = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = d7() : e.exports = f7();
  }(zc)), zc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Bc, Sp;
function p7() {
  if (Sp)
    return Bc;
  Sp = 1;
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
  return Bc = o() ? Object.assign : function(a, s) {
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
  }, Bc;
}
var Hc, Np;
function Sd() {
  if (Np)
    return Hc;
  Np = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Hc = e, Hc;
}
var Kc, Pp;
function Mx() {
  return Pp || (Pp = 1, Kc = Function.call.bind(Object.prototype.hasOwnProperty)), Kc;
}
var Yc, Tp;
function m7() {
  if (Tp)
    return Yc;
  Tp = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Sd(), n = {}, r = Mx();
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
  }, Yc = o, Yc;
}
var Gc, Op;
function v7() {
  if (Op)
    return Gc;
  Op = 1;
  var e = Dx(), t = p7(), n = Sd(), r = Mx(), o = m7(), a = function() {
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
  return Gc = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(D) {
      var G = D && (l && D[l] || D[u]);
      if (typeof G == "function")
        return G;
    }
    var p = "<<anonymous>>", m = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: x(),
      arrayOf: y,
      element: _(),
      elementType: w(),
      instanceOf: N,
      node: K(),
      objectOf: E,
      oneOf: k,
      oneOfType: T,
      shape: B,
      exact: Z
    };
    function h(D, G) {
      return D === G ? D !== 0 || 1 / D === 1 / G : D !== D && G !== G;
    }
    function v(D, G) {
      this.message = D, this.data = G && typeof G == "object" ? G : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function g(D) {
      if (process.env.NODE_ENV !== "production")
        var G = {}, Q = 0;
      function ae(ge, be, oe, ie, me, Y, re) {
        if (ie = ie || p, Y = Y || oe, re !== n) {
          if (c) {
            var V = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw V.name = "Invariant Violation", V;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = ie + ":" + oe;
            !G[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            Q < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), G[fe] = !0, Q++);
          }
        }
        return be[oe] == null ? ge ? be[oe] === null ? new v("The " + me + " `" + Y + "` is marked as required " + ("in `" + ie + "`, but its value is `null`.")) : new v("The " + me + " `" + Y + "` is marked as required in " + ("`" + ie + "`, but its value is `undefined`.")) : null : D(be, oe, ie, me, Y);
      }
      var ne = ae.bind(null, !1);
      return ne.isRequired = ae.bind(null, !0), ne;
    }
    function b(D) {
      function G(Q, ae, ne, ge, be, oe) {
        var ie = Q[ae], me = L(ie);
        if (me !== D) {
          var Y = W(ie);
          return new v(
            "Invalid " + ge + " `" + be + "` of type " + ("`" + Y + "` supplied to `" + ne + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return g(G);
    }
    function x() {
      return g(s);
    }
    function y(D) {
      function G(Q, ae, ne, ge, be) {
        if (typeof D != "function")
          return new v("Property `" + be + "` of component `" + ne + "` has invalid PropType notation inside arrayOf.");
        var oe = Q[ae];
        if (!Array.isArray(oe)) {
          var ie = L(oe);
          return new v("Invalid " + ge + " `" + be + "` of type " + ("`" + ie + "` supplied to `" + ne + "`, expected an array."));
        }
        for (var me = 0; me < oe.length; me++) {
          var Y = D(oe, me, ne, ge, be + "[" + me + "]", n);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return g(G);
    }
    function _() {
      function D(G, Q, ae, ne, ge) {
        var be = G[Q];
        if (!i(be)) {
          var oe = L(be);
          return new v("Invalid " + ne + " `" + ge + "` of type " + ("`" + oe + "` supplied to `" + ae + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(D);
    }
    function w() {
      function D(G, Q, ae, ne, ge) {
        var be = G[Q];
        if (!e.isValidElementType(be)) {
          var oe = L(be);
          return new v("Invalid " + ne + " `" + ge + "` of type " + ("`" + oe + "` supplied to `" + ae + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(D);
    }
    function N(D) {
      function G(Q, ae, ne, ge, be) {
        if (!(Q[ae] instanceof D)) {
          var oe = D.name || p, ie = R(Q[ae]);
          return new v("Invalid " + ge + " `" + be + "` of type " + ("`" + ie + "` supplied to `" + ne + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return g(G);
    }
    function k(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function G(Q, ae, ne, ge, be) {
        for (var oe = Q[ae], ie = 0; ie < D.length; ie++)
          if (h(oe, D[ie]))
            return null;
        var me = JSON.stringify(D, function(re, V) {
          var fe = W(V);
          return fe === "symbol" ? String(V) : V;
        });
        return new v("Invalid " + ge + " `" + be + "` of value `" + String(oe) + "` " + ("supplied to `" + ne + "`, expected one of " + me + "."));
      }
      return g(G);
    }
    function E(D) {
      function G(Q, ae, ne, ge, be) {
        if (typeof D != "function")
          return new v("Property `" + be + "` of component `" + ne + "` has invalid PropType notation inside objectOf.");
        var oe = Q[ae], ie = L(oe);
        if (ie !== "object")
          return new v("Invalid " + ge + " `" + be + "` of type " + ("`" + ie + "` supplied to `" + ne + "`, expected an object."));
        for (var me in oe)
          if (r(oe, me)) {
            var Y = D(oe, me, ne, ge, be + "." + me, n);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return g(G);
    }
    function T(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var G = 0; G < D.length; G++) {
        var Q = D[G];
        if (typeof Q != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(Q) + " at index " + G + "."
          ), s;
      }
      function ae(ne, ge, be, oe, ie) {
        for (var me = [], Y = 0; Y < D.length; Y++) {
          var re = D[Y], V = re(ne, ge, be, oe, ie, n);
          if (V == null)
            return null;
          V.data && r(V.data, "expectedType") && me.push(V.data.expectedType);
        }
        var fe = me.length > 0 ? ", expected one of type [" + me.join(", ") + "]" : "";
        return new v("Invalid " + oe + " `" + ie + "` supplied to " + ("`" + be + "`" + fe + "."));
      }
      return g(ae);
    }
    function K() {
      function D(G, Q, ae, ne, ge) {
        return F(G[Q]) ? null : new v("Invalid " + ne + " `" + ge + "` supplied to " + ("`" + ae + "`, expected a ReactNode."));
      }
      return g(D);
    }
    function U(D, G, Q, ae, ne) {
      return new v(
        (D || "React class") + ": " + G + " type `" + Q + "." + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ne + "`."
      );
    }
    function B(D) {
      function G(Q, ae, ne, ge, be) {
        var oe = Q[ae], ie = L(oe);
        if (ie !== "object")
          return new v("Invalid " + ge + " `" + be + "` of type `" + ie + "` " + ("supplied to `" + ne + "`, expected `object`."));
        for (var me in D) {
          var Y = D[me];
          if (typeof Y != "function")
            return U(ne, ge, be, me, W(Y));
          var re = Y(oe, me, ne, ge, be + "." + me, n);
          if (re)
            return re;
        }
        return null;
      }
      return g(G);
    }
    function Z(D) {
      function G(Q, ae, ne, ge, be) {
        var oe = Q[ae], ie = L(oe);
        if (ie !== "object")
          return new v("Invalid " + ge + " `" + be + "` of type `" + ie + "` " + ("supplied to `" + ne + "`, expected `object`."));
        var me = t({}, Q[ae], D);
        for (var Y in me) {
          var re = D[Y];
          if (r(D, Y) && typeof re != "function")
            return U(ne, ge, be, Y, W(re));
          if (!re)
            return new v(
              "Invalid " + ge + " `" + be + "` key `" + Y + "` supplied to `" + ne + "`.\nBad object: " + JSON.stringify(Q[ae], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var V = re(oe, Y, ne, ge, be + "." + Y, n);
          if (V)
            return V;
        }
        return null;
      }
      return g(G);
    }
    function F(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every(F);
          if (D === null || i(D))
            return !0;
          var G = d(D);
          if (G) {
            var Q = G.call(D), ae;
            if (G !== D.entries) {
              for (; !(ae = Q.next()).done; )
                if (!F(ae.value))
                  return !1;
            } else
              for (; !(ae = Q.next()).done; ) {
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
    function I(D, G) {
      return D === "symbol" ? !0 : G ? G["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && G instanceof Symbol : !1;
    }
    function L(D) {
      var G = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : I(G, D) ? "symbol" : G;
    }
    function W(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var G = L(D);
      if (G === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return G;
    }
    function q(D) {
      var G = W(D);
      switch (G) {
        case "array":
        case "object":
          return "an " + G;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + G;
        default:
          return G;
      }
    }
    function R(D) {
      return !D.constructor || !D.constructor.name ? p : D.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, Gc;
}
var qc, kp;
function h7() {
  if (kp)
    return qc;
  kp = 1;
  var e = Sd();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, qc = function() {
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
  }, qc;
}
if (process.env.NODE_ENV !== "production") {
  var g7 = Dx(), b7 = !0;
  An.exports = v7()(g7.isElement, b7);
} else
  An.exports = h7()();
var x7 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, y7 = Object.defineProperty, $7 = Object.defineProperties, w7 = Object.getOwnPropertyDescriptors, ri = Object.getOwnPropertySymbols, Rx = Object.prototype.hasOwnProperty, jx = Object.prototype.propertyIsEnumerable, Dp = (e, t, n) => t in e ? y7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Mp = (e, t) => {
  for (var n in t || (t = {}))
    Rx.call(t, n) && Dp(e, n, t[n]);
  if (ri)
    for (var n of ri(t))
      jx.call(t, n) && Dp(e, n, t[n]);
  return e;
}, _7 = (e, t) => $7(e, w7(t)), C7 = (e, t) => {
  var n = {};
  for (var r in e)
    Rx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ri)
    for (var r of ri(e))
      t.indexOf(r) < 0 && jx.call(e, r) && (n[r] = e[r]);
  return n;
}, Sr = (e, t, n) => {
  const r = A(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = C7(s, ["color", "size", "stroke", "children"]);
      return $(
        "svg",
        Mp(_7(Mp({
          ref: a
        }, x7), {
          width: c,
          height: c,
          stroke: i,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([p, m]) => $(p, m)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: An.exports.string,
    size: An.exports.oneOfType([An.exports.string, An.exports.number]),
    stroke: An.exports.oneOfType([An.exports.string, An.exports.number])
  }, r.displayName = `${t}`, r;
}, Ax = Sr(
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
), Ix = Sr("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), E7 = Sr("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), S7 = Sr("click", "IconClick", [
  ["path", { d: "M3 12l3 0", key: "svg-0" }],
  ["path", { d: "M12 3l0 3", key: "svg-1" }],
  ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }],
  ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }],
  ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }],
  ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]
]), Lx = Sr("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), Fx = Sr("photo-star", "IconPhotoStar", [
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
]), Vx = Sr("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), Wx = Sr("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]);
const N7 = /* @__PURE__ */ ht(void 0), P7 = { setTheme: (e) => {
}, themes: [] }, T7 = () => {
  var e;
  return (e = Xe(N7)) !== null && e !== void 0 ? e : P7;
}, O7 = ({ isExpanded: e }) => {
  const [t, n] = te(!1), { theme: r, setTheme: o } = T7();
  if (X(() => {
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
        /* @__PURE__ */ f.exports.jsx(Lx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Wx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, k7 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(O7, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ f.exports.jsx(Ty, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Oy, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ f.exports.jsx(lm, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), tc = l7((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), uj = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = tc();
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
        /* @__PURE__ */ f.exports.jsx(u7, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ f.exports.jsx(
          k7,
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
}, dj = ({ children: e }) => {
  const { isExpanded: t } = tc();
  return /* @__PURE__ */ f.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ f.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, Ux = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = te(!1), c = H(null), { isExpanded: l } = tc();
  return X(() => {
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
  }, [e]), o ? /* @__PURE__ */ f.exports.jsx(Kn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
          /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(En, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Kn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
          /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(En, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Rp = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = te(!1), c = H(null);
  return X(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        i(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ f.exports.jsx(Kn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
          /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(En, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Kn, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
          /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(En, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, D7 = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = te(!1), [i, c] = te(!1), { isExpanded: l } = tc(), u = H(null), d = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return X(() => {
    const m = () => {
      const h = u.current.querySelector(`#${p}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsxs(Kn, { delayDuration: 180, children: [
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
              /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(En, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Xd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(ra, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      Rp,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ f.exports.jsxs(Kn, { delayDuration: 180, children: [
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
              /* @__PURE__ */ f.exports.jsx(Gn, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(En, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Xd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(ra, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      Rp,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
}, Jn = ht({
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
function M7() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Xe(Jn);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        ed,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(Fi, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(td, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Vi, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(Wi, { value: `${a}`, children: a }, a)) })
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
const zx = () => {
  const { columns: e } = Xe(Jn);
  return /* @__PURE__ */ f.exports.jsx(Rg, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ f.exports.jsx(Gi, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ f.exports.jsx(Ag, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, fj = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, Wo = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), pj = { limit: 10, page: 1 }, jp = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), mj = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], R7 = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(Gi, { children: /* @__PURE__ */ f.exports.jsx(sd, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), j7 = ({
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
        children: /* @__PURE__ */ f.exports.jsx(S7, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ f.exports.jsx(
      Fh,
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
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((l) => /* @__PURE__ */ f.exports.jsx(Gi, { children: t.map((u) => /* @__PURE__ */ f.exports.jsx(sd, { children: c(u, l) }, jp())) }, jp())) });
}, Bx = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Xe(Jn), [s, i] = te(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(jg, { className: "bg-card", children: e.length ? /* @__PURE__ */ f.exports.jsx(
    j7,
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
  ) : /* @__PURE__ */ f.exports.jsx(R7, { colSpan: t.length }) });
}, A7 = () => /* @__PURE__ */ f.exports.jsxs(ad, { children: [
  /* @__PURE__ */ f.exports.jsx(zx, {}),
  /* @__PURE__ */ f.exports.jsx(Bx, {})
] }), I7 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), L7 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(I7, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var Ap = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = we(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, Hx = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? Ap(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return Ap(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, F7 = function(e, t) {
  t.shouldUseNativeValidation && Hx(e, t);
  var n = {};
  for (var r in e) {
    var o = we(t.fields, r);
    Qe(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, V7 = function(e, t) {
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
      n[s] = Gv(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, Kx = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && Hx({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: F7(V7(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, He;
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
})(He || (He = {}));
var Fl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Fl || (Fl = {}));
const _e = He.arrayToEnum([
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
}, de = He.arrayToEnum([
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
]), W7 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class an extends Error {
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
    return JSON.stringify(this.issues, He.jsonStringifyReplacer, 2);
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
an.create = (e) => new an(e);
const ha = (e, t) => {
  let n;
  switch (e.code) {
    case de.invalid_type:
      e.received === _e.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case de.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, He.jsonStringifyReplacer)}`;
      break;
    case de.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${He.joinValues(e.keys, ", ")}`;
      break;
    case de.invalid_union:
      n = "Invalid input";
      break;
    case de.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${He.joinValues(e.options)}`;
      break;
    case de.invalid_enum_value:
      n = `Invalid enum value. Expected ${He.joinValues(e.options)}, received '${e.received}'`;
      break;
    case de.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case de.invalid_return_type:
      n = "Invalid function return type";
      break;
    case de.invalid_date:
      n = "Invalid date";
      break;
    case de.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : He.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case de.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case de.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case de.custom:
      n = "Invalid input";
      break;
    case de.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case de.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case de.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, He.assertNever(e);
  }
  return { message: n };
};
let Yx = ha;
function U7(e) {
  Yx = e;
}
function oi() {
  return Yx;
}
const ai = (e) => {
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
}, z7 = [];
function Ce(e, t) {
  const n = ai({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      oi(),
      ha
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
        return Me;
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
        return Me;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const Me = Object.freeze({
  status: "aborted"
}), Gx = (e) => ({ status: "dirty", value: e }), At = (e) => ({ status: "valid", value: e }), Vl = (e) => e.status === "aborted", Wl = (e) => e.status === "dirty", si = (e) => e.status === "valid", ii = (e) => typeof Promise < "u" && e instanceof Promise;
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
const Ip = (e, t) => {
  if (si(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new an(e.common.issues);
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
    if (ii(n))
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
    return Ip(o, a);
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
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (ii(o) ? o : Promise.resolve(o));
    return Ip(r, a);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, a) => {
      const s = t(o), i = () => a.addIssue({
        code: de.custom,
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
    return sn.create(this, this._def);
  }
  promise() {
    return Po.create(this, this._def);
  }
  or(t) {
    return ya.create([this, t], this._def);
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
    return new Sa({
      ...je(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ke.ZodDefault
    });
  }
  brand() {
    return new Zx({
      typeName: ke.ZodBranded,
      type: this,
      ...je(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new di({
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
    return as.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const B7 = /^c[^\s-]{8,}$/i, H7 = /^[a-z][a-z0-9]*$/, K7 = /[0-9A-HJKMNP-TV-Z]{26}/, Y7 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, G7 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, q7 = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, Z7 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, X7 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Q7 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function J7(e, t) {
  return !!((t === "v4" || !t) && Z7.test(e) || (t === "v6" || !t) && X7.test(e));
}
class rn extends Ae {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((o) => t.test(o), {
      validation: n,
      code: de.invalid_string,
      ...Pe.errToObj(r)
    }), this.nonempty = (t) => this.min(1, Pe.errToObj(t)), this.trim = () => new rn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new rn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new rn({
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
          code: de.invalid_type,
          expected: _e.string,
          received: a.parsedType
        }
        //
      ), Me;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: de.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: de.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? Ce(o, {
          code: de.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && Ce(o, {
          code: de.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        G7.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "email",
          code: de.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        q7.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "emoji",
          code: de.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        Y7.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "uuid",
          code: de.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        B7.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "cuid",
          code: de.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        H7.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "cuid2",
          code: de.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        K7.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "ulid",
          code: de.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), Ce(o, {
            validation: "url",
            code: de.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "regex",
          code: de.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: de.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: de.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: de.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? Q7(a).test(t.data) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          code: de.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? J7(t.data, a.version) || (o = this._getOrReturnCtx(t, o), Ce(o, {
          validation: "ip",
          code: de.invalid_string,
          message: a.message
        }), r.dirty()) : He.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _addCheck(t) {
    return new rn({
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
rn.create = (e) => {
  var t;
  return new rn({
    checks: [],
    typeName: ke.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...je(e)
  });
};
function ek(e, t) {
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
        code: de.invalid_type,
        expected: _e.number,
        received: a.parsedType
      }), Me;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "int" ? He.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: de.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: de.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: de.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? ek(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: de.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: de.not_finite,
        message: a.message
      }), o.dirty()) : He.assertNever(a);
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && He.isInteger(t.value));
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
        code: de.invalid_type,
        expected: _e.bigint,
        received: a.parsedType
      }), Me;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: de.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: de.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), Ce(r, {
        code: de.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : He.assertNever(a);
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
class ga extends Ae {
  _parse(t) {
    if (this._def.coerce && (t.data = Boolean(t.data)), this._getType(t) !== _e.boolean) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: de.invalid_type,
        expected: _e.boolean,
        received: r.parsedType
      }), Me;
    }
    return At(t.data);
  }
}
ga.create = (e) => new ga({
  typeName: ke.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...je(e)
});
class Fr extends Ae {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== _e.date) {
      const a = this._getOrReturnCtx(t);
      return Ce(a, {
        code: de.invalid_type,
        expected: _e.date,
        received: a.parsedType
      }), Me;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return Ce(a, {
        code: de.invalid_date
      }), Me;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), Ce(o, {
        code: de.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), Ce(o, {
        code: de.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : He.assertNever(a);
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
class ci extends Ae {
  _parse(t) {
    if (this._getType(t) !== _e.symbol) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: de.invalid_type,
        expected: _e.symbol,
        received: r.parsedType
      }), Me;
    }
    return At(t.data);
  }
}
ci.create = (e) => new ci({
  typeName: ke.ZodSymbol,
  ...je(e)
});
class ba extends Ae {
  _parse(t) {
    if (this._getType(t) !== _e.undefined) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: de.invalid_type,
        expected: _e.undefined,
        received: r.parsedType
      }), Me;
    }
    return At(t.data);
  }
}
ba.create = (e) => new ba({
  typeName: ke.ZodUndefined,
  ...je(e)
});
class xa extends Ae {
  _parse(t) {
    if (this._getType(t) !== _e.null) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: de.invalid_type,
        expected: _e.null,
        received: r.parsedType
      }), Me;
    }
    return At(t.data);
  }
}
xa.create = (e) => new xa({
  typeName: ke.ZodNull,
  ...je(e)
});
class No extends Ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return At(t.data);
  }
}
No.create = (e) => new No({
  typeName: ke.ZodAny,
  ...je(e)
});
class jr extends Ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return At(t.data);
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
      code: de.invalid_type,
      expected: _e.never,
      received: n.parsedType
    }), Me;
  }
}
qn.create = (e) => new qn({
  typeName: ke.ZodNever,
  ...je(e)
});
class li extends Ae {
  _parse(t) {
    if (this._getType(t) !== _e.undefined) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: de.invalid_type,
        expected: _e.void,
        received: r.parsedType
      }), Me;
    }
    return At(t.data);
  }
}
li.create = (e) => new li({
  typeName: ke.ZodVoid,
  ...je(e)
});
class sn extends Ae {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== _e.array)
      return Ce(n, {
        code: de.invalid_type,
        expected: _e.array,
        received: n.parsedType
      }), Me;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && (Ce(n, {
        code: s ? de.too_big : de.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (Ce(n, {
      code: de.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (Ce(n, {
      code: de.too_big,
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
    return new sn({
      ...this._def,
      minLength: { value: t, message: Pe.toString(n) }
    });
  }
  max(t, n) {
    return new sn({
      ...this._def,
      maxLength: { value: t, message: Pe.toString(n) }
    });
  }
  length(t, n) {
    return new sn({
      ...this._def,
      exactLength: { value: t, message: Pe.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
sn.create = (e, t) => new sn({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ke.ZodArray,
  ...je(t)
});
function lo(e) {
  if (e instanceof dt) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Ln.create(lo(r));
    }
    return new dt({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof sn ? new sn({
      ...e._def,
      type: lo(e.element)
    }) : e instanceof Ln ? Ln.create(lo(e.unwrap())) : e instanceof Wr ? Wr.create(lo(e.unwrap())) : e instanceof Nn ? Nn.create(e.items.map((t) => lo(t))) : e;
}
class dt extends Ae {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = He.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== _e.object) {
      const l = this._getOrReturnCtx(t);
      return Ce(l, {
        code: de.invalid_type,
        expected: _e.object,
        received: l.parsedType
      }), Me;
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
        value: u._parse(new Sn(o, d, o.path, l)),
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
          code: de.unrecognized_keys,
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
    return Pe.errToObj, new dt({
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
    return new dt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new dt({
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
    return new dt({
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
    return new dt({
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
    return new dt({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return He.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new dt({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return He.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new dt({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return lo(this);
  }
  partial(t) {
    const n = {};
    return He.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new dt({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return He.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Ln; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new dt({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return qx(He.objectKeys(this.shape));
  }
}
dt.create = (e, t) => new dt({
  shape: () => e,
  unknownKeys: "strip",
  catchall: qn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
dt.strictCreate = (e, t) => new dt({
  shape: () => e,
  unknownKeys: "strict",
  catchall: qn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
dt.lazycreate = (e, t) => new dt({
  shape: e,
  unknownKeys: "strip",
  catchall: qn.create(),
  typeName: ke.ZodObject,
  ...je(t)
});
class ya extends Ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new an(i.ctx.common.issues));
      return Ce(n, {
        code: de.invalid_union,
        unionErrors: s
      }), Me;
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
      const i = s.map((c) => new an(c));
      return Ce(n, {
        code: de.invalid_union,
        unionErrors: i
      }), Me;
    }
  }
  get options() {
    return this._def.options;
  }
}
ya.create = (e, t) => new ya({
  options: e,
  typeName: ke.ZodUnion,
  ...je(t)
});
const Ms = (e) => e instanceof _a ? Ms(e.schema) : e instanceof pn ? Ms(e.innerType()) : e instanceof Ca ? [e.value] : e instanceof br ? e.options : e instanceof Ea ? Object.keys(e.enum) : e instanceof Sa ? Ms(e._def.innerType) : e instanceof ba ? [void 0] : e instanceof xa ? [null] : null;
class nc extends Ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== _e.object)
      return Ce(n, {
        code: de.invalid_type,
        expected: _e.object,
        received: n.parsedType
      }), Me;
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
      code: de.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), Me);
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
      const s = Ms(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new nc({
      typeName: ke.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...je(r)
    });
  }
}
function Ul(e, t) {
  const n = cr(e), r = cr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === _e.object && r === _e.object) {
    const o = He.objectKeys(t), a = He.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = Ul(e[i], t[i]);
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
      const s = e[a], i = t[a], c = Ul(s, i);
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
      if (Vl(a) || Vl(s))
        return Me;
      const i = Ul(a.value, s.value);
      return i.valid ? ((Wl(a) || Wl(s)) && n.dirty(), { status: n.value, value: i.data }) : (Ce(r, {
        code: de.invalid_intersection_types
      }), Me);
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
class Nn extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== _e.array)
      return Ce(r, {
        code: de.invalid_type,
        expected: _e.array,
        received: r.parsedType
      }), Me;
    if (r.data.length < this._def.items.length)
      return Ce(r, {
        code: de.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Me;
    !this._def.rest && r.data.length > this._def.items.length && (Ce(r, {
      code: de.too_big,
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
class wa extends Ae {
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
        code: de.invalid_type,
        expected: _e.object,
        received: r.parsedType
      }), Me;
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
    return n instanceof Ae ? new wa({
      keyType: t,
      valueType: n,
      typeName: ke.ZodRecord,
      ...je(r)
    }) : new wa({
      keyType: rn.create(),
      valueType: t,
      typeName: ke.ZodRecord,
      ...je(n)
    });
  }
}
class ui extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== _e.map)
      return Ce(r, {
        code: de.invalid_type,
        expected: _e.map,
        received: r.parsedType
      }), Me;
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
            return Me;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return Me;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
      }
      return { status: n.value, value: i };
    }
  }
}
ui.create = (e, t, n) => new ui({
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
        code: de.invalid_type,
        expected: _e.set,
        received: r.parsedType
      }), Me;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (Ce(r, {
      code: de.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (Ce(r, {
      code: de.too_big,
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
          return Me;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const i = [...r.data.values()].map((c, l) => a._parse(new Sn(r, c, r.path, l)));
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
class go extends Ae {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== _e.function)
      return Ce(n, {
        code: de.invalid_type,
        expected: _e.function,
        received: n.parsedType
      }), Me;
    function r(i, c) {
      return ai({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          oi(),
          ha
        ].filter((l) => !!l),
        issueData: {
          code: de.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return ai({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          oi(),
          ha
        ].filter((l) => !!l),
        issueData: {
          code: de.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof Po ? At(async (...i) => {
      const c = new an([]), l = await this._def.args.parseAsync(i, a).catch((p) => {
        throw c.addIssue(r(i, p)), c;
      }), u = await s(...l);
      return await this._def.returns._def.type.parseAsync(u, a).catch((p) => {
        throw c.addIssue(o(u, p)), c;
      });
    }) : At((...i) => {
      const c = this._def.args.safeParse(i, a);
      if (!c.success)
        throw new an([r(i, c.error)]);
      const l = s(...c.data), u = this._def.returns.safeParse(l, a);
      if (!u.success)
        throw new an([o(l, u.error)]);
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
    return new go({
      ...this._def,
      args: Nn.create(t).rest(jr.create())
    });
  }
  returns(t) {
    return new go({
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
    return new go({
      args: t || Nn.create([]).rest(jr.create()),
      returns: n || jr.create(),
      typeName: ke.ZodFunction,
      ...je(r)
    });
  }
}
class _a extends Ae {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
_a.create = (e, t) => new _a({
  getter: e,
  typeName: ke.ZodLazy,
  ...je(t)
});
class Ca extends Ae {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return Ce(n, {
        received: n.data,
        code: de.invalid_literal,
        expected: this._def.value
      }), Me;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Ca.create = (e, t) => new Ca({
  value: e,
  typeName: ke.ZodLiteral,
  ...je(t)
});
function qx(e, t) {
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
        expected: He.joinValues(r),
        received: n.parsedType,
        code: de.invalid_type
      }), Me;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return Ce(n, {
        received: n.data,
        code: de.invalid_enum_value,
        options: r
      }), Me;
    }
    return At(t.data);
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
br.create = qx;
class Ea extends Ae {
  _parse(t) {
    const n = He.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== _e.string && r.parsedType !== _e.number) {
      const o = He.objectValues(n);
      return Ce(r, {
        expected: He.joinValues(o),
        received: r.parsedType,
        code: de.invalid_type
      }), Me;
    }
    if (n.indexOf(t.data) === -1) {
      const o = He.objectValues(n);
      return Ce(r, {
        received: r.data,
        code: de.invalid_enum_value,
        options: o
      }), Me;
    }
    return At(t.data);
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
class Po extends Ae {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== _e.promise && n.common.async === !1)
      return Ce(n, {
        code: de.invalid_type,
        expected: _e.promise,
        received: n.parsedType
      }), Me;
    const r = n.parsedType === _e.promise ? n.data : Promise.resolve(n.data);
    return At(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Po.create = (e, t) => new Po({
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
        return i.status === "aborted" ? Me : (i.status === "dirty" && n.dirty(), s(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? Me : (i.status === "dirty" && n.dirty(), s(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!si(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => si(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    He.assertNever(o);
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
    return this._getType(t) === _e.undefined ? At(void 0) : this._def.innerType._parse(t);
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
    return this._getType(t) === _e.null ? At(null) : this._def.innerType._parse(t);
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
class Sa extends Ae {
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
Sa.create = (e, t) => new Sa({
  innerType: e,
  typeName: ke.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...je(t)
});
class di extends Ae {
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
    return ii(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new an(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new an(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
di.create = (e, t) => new di({
  innerType: e,
  typeName: ke.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...je(t)
});
class fi extends Ae {
  _parse(t) {
    if (this._getType(t) !== _e.nan) {
      const r = this._getOrReturnCtx(t);
      return Ce(r, {
        code: de.invalid_type,
        expected: _e.nan,
        received: r.parsedType
      }), Me;
    }
    return { status: "valid", value: t.data };
  }
}
fi.create = (e) => new fi({
  typeName: ke.ZodNaN,
  ...je(e)
});
const tk = Symbol("zod_brand");
class Zx extends Ae {
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
class as extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? Me : a.status === "dirty" ? (n.dirty(), Gx(a.value)) : this._def.out._parseAsync({
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
      return o.status === "aborted" ? Me : o.status === "dirty" ? (n.dirty(), {
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
    return new as({
      in: t,
      out: n,
      typeName: ke.ZodPipeline
    });
  }
}
const Xx = (e, t = {}, n) => e ? No.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : No.create(), nk = {
  object: dt.lazycreate
};
var ke;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(ke || (ke = {}));
const rk = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Xx((n) => n instanceof e, t), Qx = rn.create, Jx = hr.create, ok = fi.create, ak = gr.create, e0 = ga.create, sk = Fr.create, ik = ci.create, ck = ba.create, lk = xa.create, uk = No.create, dk = jr.create, fk = qn.create, pk = li.create, mk = sn.create, vk = dt.create, hk = dt.strictCreate, gk = ya.create, bk = nc.create, xk = $a.create, yk = Nn.create, $k = wa.create, wk = ui.create, _k = Vr.create, Ck = go.create, Ek = _a.create, Sk = Ca.create, Nk = br.create, Pk = Ea.create, Tk = Po.create, Lp = pn.create, Ok = Ln.create, kk = Wr.create, Dk = pn.createWithPreprocess, Mk = as.create, Rk = () => Qx().optional(), jk = () => Jx().optional(), Ak = () => e0().optional(), Ik = {
  string: (e) => rn.create({ ...e, coerce: !0 }),
  number: (e) => hr.create({ ...e, coerce: !0 }),
  boolean: (e) => ga.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => gr.create({ ...e, coerce: !0 }),
  date: (e) => Fr.create({ ...e, coerce: !0 })
}, Lk = Me;
var pi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ha,
  setErrorMap: U7,
  getErrorMap: oi,
  makeIssue: ai,
  EMPTY_PATH: z7,
  addIssueToContext: Ce,
  ParseStatus: Tt,
  INVALID: Me,
  DIRTY: Gx,
  OK: At,
  isAborted: Vl,
  isDirty: Wl,
  isValid: si,
  isAsync: ii,
  get util() {
    return He;
  },
  get objectUtil() {
    return Fl;
  },
  ZodParsedType: _e,
  getParsedType: cr,
  ZodType: Ae,
  ZodString: rn,
  ZodNumber: hr,
  ZodBigInt: gr,
  ZodBoolean: ga,
  ZodDate: Fr,
  ZodSymbol: ci,
  ZodUndefined: ba,
  ZodNull: xa,
  ZodAny: No,
  ZodUnknown: jr,
  ZodNever: qn,
  ZodVoid: li,
  ZodArray: sn,
  ZodObject: dt,
  ZodUnion: ya,
  ZodDiscriminatedUnion: nc,
  ZodIntersection: $a,
  ZodTuple: Nn,
  ZodRecord: wa,
  ZodMap: ui,
  ZodSet: Vr,
  ZodFunction: go,
  ZodLazy: _a,
  ZodLiteral: Ca,
  ZodEnum: br,
  ZodNativeEnum: Ea,
  ZodPromise: Po,
  ZodEffects: pn,
  ZodTransformer: pn,
  ZodOptional: Ln,
  ZodNullable: Wr,
  ZodDefault: Sa,
  ZodCatch: di,
  ZodNaN: fi,
  BRAND: tk,
  ZodBranded: Zx,
  ZodPipeline: as,
  custom: Xx,
  Schema: Ae,
  ZodSchema: Ae,
  late: nk,
  get ZodFirstPartyTypeKind() {
    return ke;
  },
  coerce: Ik,
  any: uk,
  array: mk,
  bigint: ak,
  boolean: e0,
  date: sk,
  discriminatedUnion: bk,
  effect: Lp,
  enum: Nk,
  function: Ck,
  instanceof: rk,
  intersection: xk,
  lazy: Ek,
  literal: Sk,
  map: wk,
  nan: ok,
  nativeEnum: Pk,
  never: fk,
  null: lk,
  nullable: kk,
  number: Jx,
  object: vk,
  oboolean: Ak,
  onumber: jk,
  optional: Ok,
  ostring: Rk,
  pipeline: Mk,
  preprocess: Dk,
  promise: Tk,
  record: $k,
  set: _k,
  strictObject: hk,
  string: Qx,
  symbol: ik,
  transformer: Lp,
  tuple: yk,
  undefined: ck,
  union: gk,
  unknown: dk,
  void: pk,
  NEVER: Lk,
  ZodIssueCode: de,
  quotelessJson: W7,
  ZodError: an
});
const Fk = () => {
  const { showFilters: e, setShowFilters: t } = Xe(Jn);
  return /* @__PURE__ */ f.exports.jsxs(
    Fe,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(Ax, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, Vk = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Xe(Jn), [l, u] = te(null), d = H(null), p = (m) => {
    c(m);
  };
  return X(() => {
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
          n || /* @__PURE__ */ f.exports.jsx(Ix, { size: 16, className: "mr-2" }),
          r,
          i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
            /* @__PURE__ */ f.exports.jsx(Qa, { orientation: "vertical", className: "mx-2 h-4" }),
            /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length >= 1 ? /* @__PURE__ */ f.exports.jsx(
              jt,
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
              jt,
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
      /* @__PURE__ */ f.exports.jsxs(ns, { children: [
        /* @__PURE__ */ f.exports.jsx(vr, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(dn, { children: o.map((m) => /* @__PURE__ */ f.exports.jsx(Kn, { children: /* @__PURE__ */ f.exports.jsxs(Yn, { delayDuration: 150, children: [
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
          /* @__PURE__ */ f.exports.jsx(En, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ f.exports.jsx("p", { children: m.label }) })
        ] }) })) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Hi, {}),
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
}, Wk = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = Xe(Jn), l = () => {
    var d;
    const u = [];
    (d = Object.entries(t == null ? void 0 : t.getValues())) == null || d.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : Wo(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ f.exports.jsxs(zn, { children: [
    /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Fe, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ f.exports.jsx(Ls, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Qa, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          jt,
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
          Zu,
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
            children: /* @__PURE__ */ f.exports.jsx(Ls, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, Uk = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = Xe(Jn), u = e.watch(n.map((p) => p.id)), d = () => {
    var m;
    a();
    const p = [];
    (m = Object.entries(e == null ? void 0 : e.getValues())) == null || m.forEach((h) => {
      h[1] && p.push({
        field: l ? h[0] : Wo(h[0]),
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
          Wk,
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
      /* @__PURE__ */ f.exports.jsx(Fk, {}),
      o && r && r.map((p) => /* @__PURE__ */ f.exports.jsx(
        Vk,
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
            /* @__PURE__ */ f.exports.jsx(_i, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, zk = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = Xe(Jn), l = th({
    defaultValues: n.reduce((d, p) => (d[p.id] = "", d), {}),
    resolver: Kx(
      pi.object(
        n.reduce((d, p) => (d[p.id] = pi.string().optional(), d), {})
      )
    )
  }), u = async (d) => {
    var h;
    console.log({ data: d });
    const p = r(), m = [];
    (h = Object.entries(d)) == null || h.forEach((v) => {
      v[1] && m.push({
        field: c ? v[0] : Wo(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", m), e({ queries: m, filters: p, limit: s, page: a });
  };
  return X(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(rh, { ...l, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(Uk, { form: l, onSubmit: u }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "submit",
        onClick: l.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Jl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Vx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, Bk = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), Hk = () => /* @__PURE__ */ f.exports.jsxs(ad, { children: [
  /* @__PURE__ */ f.exports.jsx(zx, {}),
  /* @__PURE__ */ f.exports.jsx(Bx, {})
] }), Kk = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function vj(e) {
  const [t, n] = te([]), [r, o] = te([]), [a, s] = te([]), [i, c] = te(!1), [l, u] = te(e == null ? void 0 : e.error), [d, p] = te(e == null ? void 0 : e.loading), [m, h] = te(), [v, g] = te(
    (e == null ? void 0 : e.pagination) ?? Kk
  ), [b, x] = te(
    (e == null ? void 0 : e.columns) || []
  ), y = ve(
    (F) => e.onSubmitTable({ ...F }),
    [e]
  ), _ = ve(
    (F) => {
      var q;
      g(F);
      const I = m.getValues(), L = [];
      (q = Object.entries(I)) == null || q.forEach((R) => {
        R[1] && L.push({
          field: e.isFormatedUpperQueries ? R[0] : Wo(R[0]),
          text: R[1]
        });
      });
      const W = r.map((R) => ({
        id: R.id,
        label: R.label,
        options: R.options.filter((D) => D.selected).map((D) => D.value)
      })).filter((R) => R.options.length > 0);
      y({
        filters: W,
        queries: L,
        limit: F.limit,
        page: F.page
      });
    },
    [r, y, m]
  ), w = ve(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), N = ve(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), k = () => r.map((F) => ({
    id: F.id,
    label: F.label,
    options: F.options.filter((I) => I.selected).map((I) => I.value)
  })).filter((F) => F.options.length > 0), E = (F) => {
    const I = r.find((L) => L.id === F);
    return I ? I.options.filter((W) => W.selected).map((W) => W.value) : [];
  }, T = (F, I, L) => {
    const W = r.map((q) => q.id === F ? {
      ...q,
      options: q.options.map((R) => R.id === I ? { ...R, selected: L } : R)
    } : q);
    o(W);
  }, K = () => r, U = (F) => {
    const I = r.map((L) => L.id === F ? {
      ...L,
      options: L.options.map((W) => ({
        ...W,
        selected: !1
      }))
    } : L);
    o(I);
  }, B = (F) => _({ ...v, limit: F }), Z = () => {
    const F = r.map((I) => ({
      ...I,
      options: I.options.map((L) => ({ ...L, selected: !1 }))
    }));
    o(F);
  };
  return X(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), X(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), X(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), X(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), X(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), X(() => {
    const F = b.filter((I) => I.isQuery).map((I) => ({
      id: I.id,
      label: I.label
    }));
    s(F);
  }, [b]), X(() => {
    const F = (L) => (L == null ? void 0 : L.filters) && (L == null ? void 0 : L.filters.length), I = b.filter(F).map((L) => {
      const W = L.filters.map((R) => ({
        ...R,
        selected: !1
      }));
      return {
        ...L,
        id: L.id,
        options: W
      };
    });
    o(I);
  }, [b]), X(() => {
    e != null && e.filters && (e == null || e.filters.forEach((F) => {
      F != null && F.filters && b.forEach((I) => {
        F.id === I.id && o((L) => L.some((q) => q.id === F.id) ? L : [
          ...L,
          {
            id: I.id,
            label: I.label,
            options: F.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), X(() => {
    g((F) => {
      var I, L;
      return {
        ...F,
        hasNextPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasNextPage,
        hasPrevPage: (L = e == null ? void 0 : e.pagination) == null ? void 0 : L.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Jn.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: w,
        prevPage: N,
        searchForm: m,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: B,
        showFilters: i,
        resetFilters: Z,
        getGlobalFilters: K,
        selectOptionFilter: T,
        resetOptionsByFilter: U,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: y,
        getFilterOptionsSelectedById: E,
        getFiltersWithOptionsSelected: k,
        setSelectItem: e.setSelectItem,
        setShowFilters: (F) => c(F),
        setSearchForm: (F) => h(F)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(zk, { onSubmitTable: y, loading: d }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          d && /* @__PURE__ */ f.exports.jsx(L7, {}),
          !d && l && /* @__PURE__ */ f.exports.jsx(Bk, {}),
          !d && !l && !t && /* @__PURE__ */ f.exports.jsx(Hk, {}),
          !d && !l && t && /* @__PURE__ */ f.exports.jsx(A7, {})
        ] }),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(M7, {})
      ] })
    }
  );
}
const hj = ({
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
  Yr,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: m, formState: h }) => {
      var v;
      return /* @__PURE__ */ f.exports.jsxs(Cr, { className: j("w-full", c), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ f.exports.jsxs(Gr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((v = h == null ? void 0 : h.errors[e]) == null ? void 0 : v.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            h.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(Ao, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs(
          ed,
          {
            onValueChange: (g) => g && m.onChange(g),
            defaultValue: m.value,
            disabled: d,
            value: m == null ? void 0 : m.value,
            children: [
              /* @__PURE__ */ f.exports.jsx(Ka, { placeholder: r, children: /* @__PURE__ */ f.exports.jsx(Fi, { disabled: d, tabIndex: i, className: j("w-full", l), placeholder: r, children: /* @__PURE__ */ f.exports.jsx(td, { placeholder: r }) }) }),
              /* @__PURE__ */ f.exports.jsx(Vi, { children: /* @__PURE__ */ f.exports.jsxs(bN, { className: j("overflow-auto", u), children: [
                a.length ? null : /* @__PURE__ */ f.exports.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
                a.map((g) => {
                  var b, x;
                  return /* @__PURE__ */ f.exports.jsx(Wi, { value: (b = g.value) == null ? void 0 : b.toString(), children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-center items-center", children: [
                    (g == null ? void 0 : g.icon) && /* @__PURE__ */ f.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: g.icon }),
                    g.label
                  ] }) }, (x = g.value) == null ? void 0 : x.toString());
                })
              ] }) })
            ]
          }
        )
      ] });
    }
  }
);
function rc() {
  return (rc = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function t0(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function zl(e) {
  var t = H(e), n = H(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var Na = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, na = function(e) {
  return "touches" in e;
}, Bl = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Fp = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = na(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: Na((o.pageX - (r.left + Bl(e).pageXOffset)) / r.width), top: Na((o.pageY - (r.top + Bl(e).pageYOffset)) / r.height) };
}, Vp = function(e) {
  !na(e) && e.preventDefault();
}, n0 = S.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = t0(e, ["onMove", "onKey"]), o = H(null), a = zl(t), s = zl(n), i = H(null), c = H(!1), l = _t(function() {
    var m = function(g) {
      Vp(g), (na(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Fp(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, x = Bl(o.current), y = g ? x.addEventListener : x.removeEventListener;
      y(b ? "touchmove" : "mousemove", m), y(b ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var b = g.nativeEvent, x = o.current;
      if (x && (Vp(b), !function(_, w) {
        return w && !na(_);
      }(b, c.current) && x)) {
        if (na(b)) {
          c.current = !0;
          var y = b.changedTouches || [];
          y.length && (i.current = y[0].identifier);
        }
        x.focus(), a(Fp(x, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], d = l[1], p = l[2];
  return X(function() {
    return p;
  }, [p]), S.createElement("div", rc({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), Nd = function(e) {
  return e.filter(Boolean).join(" ");
}, r0 = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Nd(["react-colorful__pointer", e.className]);
  return S.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, S.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, wt = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, Yk = function(e) {
  return Qk(Hl(e));
}, Hl = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? wt(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? wt(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, Gk = function(e) {
  return Xk(Zk(e));
}, qk = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: wt(e.h), s: wt(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: wt(o / 2), a: wt(r, 2) };
}, Kl = function(e) {
  var t = qk(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Zk = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: wt(255 * [r, i, s, s, c, r][l]), g: wt(255 * [c, r, r, i, s, s][l]), b: wt(255 * [s, s, c, r, r, i][l]), a: wt(o, 2) };
}, _s = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Xk = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? _s(wt(255 * o)) : "";
  return "#" + _s(t) + _s(n) + _s(r) + a;
}, Qk = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: wt(60 * (i < 0 ? i + 6 : i)), s: wt(a ? s / a * 100 : 0), v: wt(a / 255 * 100), a: o };
}, Jk = S.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Nd(["react-colorful__hue", e.className]);
  return S.createElement("div", { className: r }, S.createElement(n0, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: Na(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": wt(t), "aria-valuemax": "360", "aria-valuemin": "0" }, S.createElement(r0, { className: "react-colorful__hue-pointer", left: t / 360, color: Kl({ h: t, s: 100, v: 100, a: 1 }) })));
}), eD = S.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: Kl({ h: t.h, s: 100, v: 100, a: 1 }) };
  return S.createElement("div", { className: "react-colorful__saturation", style: r }, S.createElement(n0, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: Na(t.s + 100 * o.left, 0, 100), v: Na(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + wt(t.s) + "%, Brightness " + wt(t.v) + "%" }, S.createElement(r0, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Kl(t) })));
}), o0 = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, tD = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || o0(Hl(e), Hl(t));
};
function nD(e, t, n) {
  var r = zl(n), o = te(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = H({ color: t, hsva: a });
  X(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), X(function() {
    var l;
    o0(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = ve(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var rD = typeof window < "u" ? ka : X, oD = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Wp = /* @__PURE__ */ new Map(), aD = function(e) {
  rD(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Wp.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Wp.set(t, n);
      var r = oD();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, sD = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = t0(e, ["className", "colorModel", "color", "onChange"]), i = H(null);
  aD(i);
  var c = nD(n, o, a), l = c[0], u = c[1], d = Nd(["react-colorful", t]);
  return S.createElement("div", rc({}, s, { ref: i, className: d }), S.createElement(eD, { hsva: l, onChange: u }), S.createElement(Jk, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, iD = { defaultColor: "000", toHsva: Yk, fromHsva: function(e) {
  return Gk({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: tD }, cD = function(e) {
  return S.createElement(sD, rc({}, e, { colorModel: iD }));
};
const gj = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ f.exports.jsx(cD, { color: e, onChange: t }),
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
function lD(e, t, n) {
  var r = te([]), o = r[0], a = r[1], s = H([]), i = ve(function(d, p) {
    var m = e(d, p), h = m[0], v = m[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), h;
  }, [e]), c = bi(i, n), l = c[0], u = c[1];
  return X(function() {
    var d = o.pop();
    if (d) {
      var p = t(d, u);
      p && s.current.push(p), a([].concat(o));
    }
  }, [o, t]), X(function() {
    return function() {
      s.current.forEach(function(d) {
        d();
      });
    };
  }, []), [l, u];
}
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tn.apply(this, arguments);
}
function uD(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var oc = {
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
}, Mt;
for (Mt = 1; Mt < 25; Mt += 1)
  oc[111 + Mt] = "F" + Mt;
for (Mt = 65; Mt < 91; Mt += 1) {
  var Up = /* @__PURE__ */ String.fromCharCode(Mt);
  oc[Mt] = [/* @__PURE__ */ Up.toLowerCase(), /* @__PURE__ */ Up.toUpperCase()];
}
for (Mt = 96; Mt < 106; Mt += 1)
  oc[Mt] = /* @__PURE__ */ String.fromCharCode(Mt - 48);
function dD(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = oc[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var fD = {
  getKey: dD
};
function Cs() {
}
function a0(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function pD(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var mD = ["refs"], Zc = [], vD = ["autoFocus", "length", "validate", "format", "debug"], hD = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], gD = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], bD = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: Cs,
  onRejectKey: Cs,
  onChange: Cs,
  onComplete: Cs,
  debug: !1
};
function xD(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: yD(e.validate),
    fallback: null
  };
}
function s0(e) {
  return Math.max(0, e - 1);
}
function Yl(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function yD(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function zp(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = Yl(o + e.focusIdx - 1, e.codeLength), s = a0(0, o).flatMap(function(i) {
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
  }), [tn({}, e, {
    focusIdx: a
  }), s];
}
var $D = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [tn({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), Zc];
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
          var r = s0(t.focusIdx);
          return [tn({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = Yl(t.focusIdx, t.codeLength);
          return [tn({}, t, {
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
          var a = Yl(t.focusIdx, t.codeLength);
          return [tn({}, t, {
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
        return [t, Zc];
      var s = tn({}, t, {
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
        return zp(s, l, d);
      return [s, i];
    }
    case "handle-paste":
      return zp(t, n.idx, n.val);
    case "focus-input":
      return [tn({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, Zc];
  }
};
function wD(e) {
  var t = e.refs, n = uD(e, mD);
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
          var s = s0(r.idx);
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
var _D = /* @__PURE__ */ A(function(e, t) {
  var n = tn({}, bD, e), r = n.autoFocus, o = n.length, a = pD([].concat(vD, hD), n), s = H([]), i = wD(tn({
    refs: s
  }, n)), c = lD($D, i, xD(n))[1];
  W0(t, function() {
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
      var b = fD.getKey(g.nativeEvent);
      !gD.includes(b) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
        type: "handle-key-down",
        idx: v,
        key: b,
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
      var b = g.clipboardData.getData("Text");
      c({
        type: "handle-paste",
        idx: v,
        val: b
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
  return S.createElement(S.Fragment, null, a0(0, o).map(function(v) {
    return S.createElement("input", Object.assign({
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
const bj = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = S.useState(!1);
  return /* @__PURE__ */ f.exports.jsx("div", { className: j("pin-field-container", s), children: /* @__PURE__ */ f.exports.jsx(
    _D,
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
var i0 = {}, Pd = {};
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
})(Pd);
var c0 = {}, Fn = {};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.DEFAULT_DATA_URL_KEY = Fn.INIT_MAX_NUMBER = Fn.DEFAULT_NULL_INDEX = void 0;
Fn.DEFAULT_NULL_INDEX = -1;
Fn.INIT_MAX_NUMBER = 1e3;
Fn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = bt && bt.__awaiter || function(a, s, i, c) {
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
  }, n = bt && bt.__generator || function(a, s) {
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
  var r = Fn, o = Pd;
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
      var g, b, x, y, _;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, w.label = 2;
          case 2:
            return b < s.length ? (x = s[b].file, x ? !v && !e.isImageValid(x.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, x.name) ? e.isMaxFileSizeValid(x.size, d) ? p ? [4, o.getImage(x)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (y = w.sent(), _ = e.isResolutionValid(y, p, m, h), !_)
              return g.resolution = !0, [3, 5];
            w.label = 4;
          case 4:
            return b += 1, [3, 2];
          case 5:
            return Object.values(g).find(Boolean) ? [2, g] : [2, null];
        }
      });
    });
  };
})(c0);
var Gl = bt && bt.__assign || function() {
  return Gl = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Gl.apply(this, arguments);
}, CD = bt && bt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), ED = bt && bt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), SD = bt && bt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && CD(t, e, n);
  return ED(t, e), t;
}, Xc = bt && bt.__awaiter || function(e, t, n, r) {
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
}, Qc = bt && bt.__generator || function(e, t) {
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
}, Jc = bt && bt.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(i0, "__esModule", { value: !0 });
var en = SD(S), el = Pd, ND = c0, rr = Fn, PD = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? rr.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, d = u === void 0 ? rr.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, x = b === void 0 ? {} : b, y = e.allowNonImageType, _ = y === void 0 ? !1 : y, w = n || [], N = en.useRef(null), k = en.useState(rr.DEFAULT_NULL_INDEX), E = k[0], T = k[1], K = en.useState(null), U = K[0], B = K[1], Z = en.useState(!1), F = Z[0], I = Z[1], L = en.useCallback(function() {
    return el.openFileDialog(N);
  }, [
    N
  ]), W = en.useCallback(function() {
    T(rr.DEFAULT_NULL_INDEX), L();
  }, [L]), q = en.useCallback(function() {
    r == null || r([]);
  }, [r]), R = function(Y) {
    var re = Jc(w);
    Array.isArray(Y) ? Y.forEach(function(V) {
      re.splice(V, 1);
    }) : re.splice(Y, 1), r == null || r(re);
  }, D = function(Y) {
    T(Y), L();
  }, G = function(Y) {
    return Xc(void 0, void 0, void 0, function() {
      var re;
      return Qc(this, function(V) {
        switch (V.label) {
          case 0:
            return [4, ND.getErrorValidation({
              fileList: Y,
              maxFileSize: m,
              maxNumber: d,
              acceptType: p,
              keyUpdate: E,
              resolutionType: g,
              resolutionWidth: h,
              resolutionHeight: v,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return re = V.sent(), re ? (B(re), o == null || o(re, Y), [2, !1]) : (U && B(null), [2, !0]);
        }
      });
    });
  }, Q = function(Y) {
    return Xc(void 0, void 0, void 0, function() {
      var re, V, fe, he, ye, O;
      return Qc(this, function(z) {
        switch (z.label) {
          case 0:
            return Y ? [4, el.getListFiles(Y, i)] : [
              2
              /*return*/
            ];
          case 1:
            return re = z.sent(), re.length ? [4, G(re)] : [
              2
              /*return*/
            ];
          case 2:
            if (V = z.sent(), !V)
              return [
                2
                /*return*/
              ];
            if (he = [], E > rr.DEFAULT_NULL_INDEX)
              ye = re[0], fe = Jc(w), fe[E] = ye, he.push(E);
            else if (l)
              for (fe = Jc(w, re), O = w.length; O < fe.length; O += 1)
                he.push(O);
            else
              fe = [re[0]], he.push(0);
            return r == null || r(fe, he), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ae = function(Y) {
    return Xc(void 0, void 0, void 0, function() {
      return Qc(this, function(re) {
        switch (re.label) {
          case 0:
            return [4, Q(Y.target.files)];
          case 1:
            return re.sent(), E > rr.DEFAULT_NULL_INDEX && T(rr.DEFAULT_NULL_INDEX), N.current && (N.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ne = en.useMemo(function() {
    return el.getAcceptTypeString(p, _);
  }, [p, _]), ge = function(Y) {
    Y.preventDefault(), Y.stopPropagation();
  }, be = function(Y) {
    Y.preventDefault(), Y.stopPropagation(), Y.dataTransfer.items && Y.dataTransfer.items.length > 0 && I(!0);
  }, oe = function(Y) {
    Y.preventDefault(), Y.stopPropagation(), I(!1);
  }, ie = function(Y) {
    Y.preventDefault(), Y.stopPropagation(), I(!1), Y.dataTransfer.files && Y.dataTransfer.files.length > 0 && Q(Y.dataTransfer.files);
  }, me = function(Y) {
    Y.preventDefault(), Y.stopPropagation(), Y.dataTransfer.clearData();
  };
  return en.default.createElement(
    en.default.Fragment,
    null,
    en.default.createElement("input", Gl({ type: "file", accept: ne, ref: N, multiple: l && E === rr.DEFAULT_NULL_INDEX, onChange: ae, style: { display: "none" } }, x)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: W,
      onImageRemoveAll: q,
      onImageUpdate: D,
      onImageRemove: R,
      errors: U,
      dragProps: {
        onDrop: ie,
        onDragEnter: be,
        onDragLeave: oe,
        onDragOver: ge,
        onDragStart: me
      },
      isDragging: F
    })
  );
}, l0 = i0.default = PD;
const TD = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, u0 = ({
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
      const u = TD(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
});
function mi(e, t) {
  fetch(e).then((n) => n.blob()).then((n) => {
    const r = window.URL.createObjectURL(new Blob([n])), o = document.createElement("a");
    o.href = r, o.setAttribute("download", t || "imagen.jpg"), document.body.appendChild(o), o.click();
  });
}
const OD = (e) => {
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
        children: /* @__PURE__ */ f.exports.jsx(Fx, { size: 16 })
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
        children: /* @__PURE__ */ f.exports.jsx(fm, { size: 16 })
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
        children: /* @__PURE__ */ f.exports.jsx(pm, { size: 16 })
      }
    ),
    l && p && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => mi(p, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Is, { size: 16 })
      }
    )
  ] });
}, kD = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ f.exports.jsxs(
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
          children: /* @__PURE__ */ f.exports.jsx(eu, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), d0 = ({ src: e, containerClassName: t, imageClassName: n, zoom: r, fallback: o, download: a, filename: s }) => {
  const [i, c] = te(!1);
  return r ? /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit relative", children: [
    a && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "button",
        onClick: () => mi(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Is, { size: 18 })
      }
    ),
    /* @__PURE__ */ f.exports.jsxs(mh, { open: i, onOpenChange: c, children: [
      /* @__PURE__ */ f.exports.jsxs(fo, { className: j("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
        /* @__PURE__ */ f.exports.jsx(
          Mr,
          {
            src: e,
            className: j("aspect-video w-auto rounded-md object-contain m-auto h-full cursor-zoom-in", n),
            onClick: () => c(!0)
          }
        ),
        /* @__PURE__ */ f.exports.jsx(po, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(lc, {}) })
      ] }),
      /* @__PURE__ */ f.exports.jsx(qu, { className: "p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none", style: { background: "transparent !important" }, onClick: () => c(!1), children: /* @__PURE__ */ f.exports.jsxs(fo, { className: j("w-full h-full rounded-md"), children: [
        /* @__PURE__ */ f.exports.jsx(Mr, { src: e, className: j("aspect-video rounded-md object-contain m-auto h-full"), style: { width: "-webkit-fill-available" } }),
        /* @__PURE__ */ f.exports.jsx(po, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(lc, {}) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx("div", { className: "w-full", children: /* @__PURE__ */ f.exports.jsxs(fo, { className: j("relative w-full h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
    a && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "button",
        onClick: () => mi(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Is, { size: 18 })
      }
    ),
    /* @__PURE__ */ f.exports.jsx(Mr, { src: e, className: j("aspect-video w-auto rounded-md object-contain m-auto h-full", n), style: { width: "-webkit-fill-available" } }),
    /* @__PURE__ */ f.exports.jsx(po, { className: j("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ f.exports.jsx(lc, {}) })
  ] }) });
}, xj = (e) => {
  const { edit: t = !0, initialPreview: n = null, setUploadImage: r, format: o, label: a, uploadLabel: s, tabIndexs: i, disabled: c, emptyClassName: l, imageContainerClassName: u, zoom: d, compress: p, download: m, onRemove: h, onEdit: v } = e, [g, b] = te(n ? [{ data_url: n, file: null }] : []), x = async (_, w) => {
    var T, K, U, B, Z, F, I, L, W, q;
    const N = (T = _[0]) == null ? void 0 : T.file, k = (K = _[0]) == null ? void 0 : K.data_url;
    N || (b([]), r({ original: null, compressed: null })), b(_);
    const E = As((U = _[0]) == null ? void 0 : U.file.size);
    if (p != null && p.resizer && N) {
      const { data_url: R, file: D } = await u0({
        resizer: p == null ? void 0 : p.resizer,
        imageFile: N,
        quality: (o == null ? void 0 : o.quality) || 10,
        maxWidth: (o == null ? void 0 : o.width) || 500,
        maxHeight: (o == null ? void 0 : o.width) || 500,
        compressFormat: (o == null ? void 0 : o.extension) || "png",
        rotation: (o == null ? void 0 : o.rotation) || 0
      }), G = As(D.size);
      r({
        original: {
          preview: k,
          file: N,
          size: {
            formated: E,
            bytes: (B = _[0]) == null ? void 0 : B.file.size
          }
        },
        compressed: {
          preview: R == null ? void 0 : R.toString(),
          file: D,
          size: {
            formated: G,
            bytes: D.size
          }
        }
      });
      return;
    }
    v && (Z = _[0]) != null && Z.data_url && v({
      data_url: ((F = _[0]) == null ? void 0 : F.data_url) || null,
      file: ((I = _[0]) == null ? void 0 : I.file) || null
    }), r({
      original: {
        preview: (L = _[0]) == null ? void 0 : L.data_url,
        file: (W = _[0]) == null ? void 0 : W.file,
        size: { formated: E, bytes: (q = _[0]) == null ? void 0 : q.file.size }
      },
      compressed: null
    });
  }, y = (_) => {
    _ == null || !g || !g.length || h && h(g[_]);
  };
  return X(() => {
    n && b([{ data_url: n, file: null }]);
  }, [n]), /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full", children: [
    a && /* @__PURE__ */ f.exports.jsx(On, { children: a }),
    a && /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      l0,
      {
        value: g,
        onChange: x,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: _, onImageUpload: w, onImageUpdate: N, onImageRemove: k, isDragging: E, dragProps: T }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: _.length >= 1 ? /* @__PURE__ */ f.exports.jsx("div", { children: _.map((K, U) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          /* @__PURE__ */ f.exports.jsx(
            d0,
            {
              zoom: d,
              src: K == null ? void 0 : K.data_url,
              containerClassName: u
            }
          ),
          /* @__PURE__ */ f.exports.jsx(
            OD,
            {
              edit: t,
              imageIndex: U,
              compress: p,
              disabled: c,
              download: m,
              tabIndexs: i,
              src: K == null ? void 0 : K.data_url,
              onImageRemove: k,
              onImageUpdate: N,
              setLocalImage: b,
              setUploadImage: r,
              handleOnRemove: y
            }
          )
        ] }, U)) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
          kD,
          {
            dragProps: T,
            emptyClassName: l,
            isDragging: E,
            onImageUpload: w,
            tabIndexs: i,
            uploadLabel: s,
            disabled: c
          }
        ) }) })
      }
    )
  ] });
}, DD = (e) => {
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
        children: /* @__PURE__ */ f.exports.jsx(Fx, { size: 16 })
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
        children: /* @__PURE__ */ f.exports.jsx(fm, { size: 16 })
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
        children: /* @__PURE__ */ f.exports.jsx(pm, { size: 16 })
      }
    ),
    i && l && /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => mi(l, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ f.exports.jsx(Is, { size: 16 })
      }
    )
  ] });
}, MD = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ f.exports.jsxs(
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
          children: /* @__PURE__ */ f.exports.jsx(eu, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), yj = (e) => {
  const { edit: t = !0, label: n, setUploadImages: r, format: o, uploadLabel: a, tabIndexs: s, emptyClassName: i, imageContainerClassName: c, zoom: l, compress: u, limit: d, initialPreview: p, disabled: m, download: h, onRemove: v, onEdit: g } = e, [b, x] = te([]);
  X(() => {
    p && p.length && x([...p]);
  }, [p]);
  const y = async (w, N) => {
    x(w);
    const k = w.map(async (E) => {
      var T, K, U, B;
      if (u != null && u.resizer && (E != null && E.file) && !((T = E == null ? void 0 : E.file) != null && T.compressed)) {
        const { data_url: Z, file: F } = await u0({
          imageFile: E == null ? void 0 : E.file,
          resizer: u == null ? void 0 : u.resizer,
          quality: (o == null ? void 0 : o.quality) || 10,
          maxWidth: (o == null ? void 0 : o.width) || 500,
          maxHeight: (o == null ? void 0 : o.width) || 500,
          rotation: (o == null ? void 0 : o.rotation) || 0,
          compressFormat: (o == null ? void 0 : o.extension) || "png"
        }), I = As(F == null ? void 0 : F.size), L = {
          original: {
            preview: E == null ? void 0 : E.data_url,
            file: E == null ? void 0 : E.file,
            size: {
              formated: (K = E == null ? void 0 : E.file) != null && K.size ? As((U = E == null ? void 0 : E.file) == null ? void 0 : U.size) : null,
              bytes: ((B = E == null ? void 0 : E.file) == null ? void 0 : B.size) || null
            }
          },
          compressed: {
            preview: Z == null ? void 0 : Z.toString(),
            file: F,
            size: {
              formated: I,
              bytes: F == null ? void 0 : F.size
            }
          }
        };
        return {
          ...E,
          file: L,
          data_url: E == null ? void 0 : E.data_url
        };
      } else
        return {
          ...E,
          file: (E == null ? void 0 : E.file) || null
        };
    });
    if (g && N) {
      const E = w[N[0]];
      E != null && E.data_url && g({
        data_url: (E == null ? void 0 : E.data_url) || null,
        file: (E == null ? void 0 : E.file) || null
      });
    }
    Promise.all(k).then((E) => {
      r(E);
    });
  }, _ = (w) => {
    w == null || !b || !b.length || v && v(b[w]);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { children: [
    n && /* @__PURE__ */ f.exports.jsx(On, { children: n }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      l0,
      {
        multiple: !0,
        value: b,
        dataURLKey: "data_url",
        onChange: y,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: d,
        children: ({ imageList: w, onImageUpload: N, onImageUpdate: k, onImageRemove: E, isDragging: T, dragProps: K }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: w.length >= 1 ? /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `grid ${d === 1 || !d ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              w.map((U, B) => /* @__PURE__ */ f.exports.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    /* @__PURE__ */ f.exports.jsx(
                      d0,
                      {
                        zoom: l,
                        src: U == null ? void 0 : U.data_url,
                        containerClassName: c
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx(
                      DD,
                      {
                        edit: t,
                        imageIndex: B,
                        download: h,
                        compress: u,
                        disabled: m,
                        tabIndexs: s,
                        src: U == null ? void 0 : U.data_url,
                        onImageRemove: E,
                        onImageUpdate: k,
                        handleOnRemoveImage: _
                      }
                    )
                  ]
                },
                B
              )),
              b.length < d && /* @__PURE__ */ f.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  ...K,
                  className: j(
                    `w-full h-[237px] ${T ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
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
                      className: `mt-2 ${T && "text-indigo-600"}`,
                      onClick: N,
                      children: /* @__PURE__ */ f.exports.jsx(eu, { size: 24 })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ f.exports.jsx(
          MD,
          {
            dragProps: K,
            emptyClassName: i,
            isDragging: T,
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
function $j({
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
  const [m, h] = te(!1);
  return s ? /* @__PURE__ */ f.exports.jsxs("div", { className: j("w-full"), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(Pt, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
      Pt,
      {
        className: j("w-full h-9 mt-2")
      }
    ) })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Yr,
    {
      control: t.control,
      name: e,
      defaultValue: c,
      render: ({ field: v }) => {
        var g;
        return /* @__PURE__ */ f.exports.jsxs(Cr, { className: "flex flex-col", children: [
          /* @__PURE__ */ f.exports.jsx(On, { children: n }),
          /* @__PURE__ */ f.exports.jsxs(zn, { open: m, onOpenChange: h, children: [
            /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Fe,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: j("w-min justify-between", !v.value && "text-muted-foreground", `${d}`),
                children: [
                  v.value ? (g = r.find((b) => {
                    var x, y;
                    return ((x = b == null ? void 0 : b.value) == null ? void 0 : x.toUpperCase()) === ((y = v == null ? void 0 : v.value) == null ? void 0 : y.toUpperCase());
                  })) == null ? void 0 : g.label : u,
                  /* @__PURE__ */ f.exports.jsx(il, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(Cn, { className: j("w-[200px] p-0", p), children: /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
              /* @__PURE__ */ f.exports.jsx(mr, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(vr, { children: l }),
              /* @__PURE__ */ f.exports.jsx(dn, { children: r.map((b) => /* @__PURE__ */ f.exports.jsxs(
                fn,
                {
                  value: b.value,
                  onSelect: (x) => {
                    t.setValue(e, x, { shouldDirty: !0 }), h(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (b == null ? void 0 : b.image) && /* @__PURE__ */ f.exports.jsx("img", { src: b.image, alt: b.label, width: 40, className: "mr-2" }),
                    (b == null ? void 0 : b.icon) && b.icon,
                    b.label,
                    /* @__PURE__ */ f.exports.jsx(
                      E7,
                      {
                        className: j(
                          "ml-auto h-4 w-4",
                          b.value === v.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                b.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  );
}
function RD({
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
  var b;
  const [v, g] = te(!1);
  return t ? /* @__PURE__ */ f.exports.jsx(
    Yr,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: x, formState: y }) => {
        var _, w, N;
        return /* @__PURE__ */ f.exports.jsxs(Cr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Gr, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = y.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              y.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsxs(zn, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, disabled: s, children: /* @__PURE__ */ f.exports.jsxs(
              Fe,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: j("w-min justify-between", !x.value && "text-muted-foreground", `${m}`),
                children: [
                  x.value ? (N = r.find((k) => k.value === x.value)) == null ? void 0 : N.label : p,
                  /* @__PURE__ */ f.exports.jsx(il, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(Cn, { className: j("w-[200px] p-0", h), children: /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
              /* @__PURE__ */ f.exports.jsx(mr, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(vr, { children: d }),
              /* @__PURE__ */ f.exports.jsx(dn, { children: r.map((k) => /* @__PURE__ */ f.exports.jsxs(
                fn,
                {
                  value: k.value,
                  onSelect: (E) => {
                    t.setValue(e, E), g(!1);
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
                          k.value === x.value ? "opacity-100" : "opacity-0"
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
  ) : /* @__PURE__ */ f.exports.jsxs(zn, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Fe,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((x) => x.value === a)) == null ? void 0 : b.label : p,
          /* @__PURE__ */ f.exports.jsx(il, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(Cn, { className: "w-full p-0", children: /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
      /* @__PURE__ */ f.exports.jsx(mr, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ f.exports.jsx(vr, { children: d }),
      /* @__PURE__ */ f.exports.jsx(dn, { children: r.map((x) => /* @__PURE__ */ f.exports.jsxs(
        fn,
        {
          onSelect: (y) => {
            i(y === a ? "" : y), g(!1);
          },
          children: [
            x.label,
            /* @__PURE__ */ f.exports.jsx(
              ln,
              {
                className: j(
                  "ml-auto h-4 w-4",
                  a === x.value ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        x.value
      )) })
    ] }) })
  ] });
}
const jD = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i, disabled: c }) => {
  const l = H(null), [u, d] = te(null);
  return X(() => {
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
                jt,
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
                jt,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((p) => /* @__PURE__ */ f.exports.jsx(
                jt,
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
      /* @__PURE__ */ f.exports.jsx(Cn, { style: { width: u + 24 }, className: j("w-full p-0", i), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Hn, { children: [
        /* @__PURE__ */ f.exports.jsx(mr, { placeholder: r }),
        /* @__PURE__ */ f.exports.jsxs(ns, { children: [
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
}, AD = (e) => {
  var k;
  const { form: t, id: n, description: r, icon: o, placeholder: a, label: s, tabIndex: i, items: c, classNameContainer: l, classNamePopover: u, disabled: d } = e, [p, m] = te([]), [h, v] = te(null), g = H(null), b = (k = t == null ? void 0 : t.formState) == null ? void 0 : k.defaultValues[n], x = (E) => ({
    ...E,
    selected: b ? b.includes(E.value) : !1
  }), y = _t(() => c.map(x), [b]), _ = _t(() => p.filter((T) => T.selected).map((T) => T.value), [p]), w = () => m(
    (E) => E.map((T) => ({ ...T, selected: !1 }))
  ), N = (E, T) => {
    const K = p.map((U) => U.id === E ? { ...U, selected: T } : U);
    m(K), t.setValue(
      n,
      K.filter((U) => U.selected).map((U) => U.value),
      { shouldDirty: !0 }
    );
  };
  return X(() => {
    const E = g.current;
    if (!E)
      return;
    const T = new ResizeObserver((K) => {
      const U = K[0].contentRect.width;
      v(U);
    });
    return T.observe(E), () => {
      T.unobserve(E), T.disconnect();
    };
  }, []), X(() => {
    m(y);
  }, [y]), /* @__PURE__ */ f.exports.jsx(
    Yr,
    {
      control: t.control,
      name: n,
      render: ({ field: E, formState: T }) => {
        var K;
        return /* @__PURE__ */ f.exports.jsxs(Cr, { className: j("w-full space-y-2", l), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            s && /* @__PURE__ */ f.exports.jsxs(Gr, { className: "flex", children: [
              s,
              " "
            ] }),
            ((K = T == null ? void 0 : T.errors[n]) == null ? void 0 : K.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              T.errors[n].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(Ao, { className: "text-xs", children: r }),
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
                      jt,
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
                      jt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          _.length,
                          " seleccionados"
                        ]
                      }
                    ) : p.filter((U) => U.selected).map((U) => /* @__PURE__ */ f.exports.jsx(
                      jt,
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
              Cn,
              {
                className: j("w-full p-0 combox-checkbox-content", u),
                align: "start",
                children: /* @__PURE__ */ f.exports.jsxs(Hn, { style: { width: "50px !important" }, children: [
                  /* @__PURE__ */ f.exports.jsx(mr, { placeholder: s }),
                  /* @__PURE__ */ f.exports.jsxs(ns, { children: [
                    /* @__PURE__ */ f.exports.jsx(vr, { children: "Sin Resultados" }),
                    /* @__PURE__ */ f.exports.jsx(dn, { children: p.map((U) => /* @__PURE__ */ f.exports.jsx(Kn, { children: /* @__PURE__ */ f.exports.jsxs(Yn, { delayDuration: 150, children: [
                      /* @__PURE__ */ f.exports.jsx(Gn, { className: "w-full", children: /* @__PURE__ */ f.exports.jsxs(
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
                      /* @__PURE__ */ f.exports.jsx(En, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ f.exports.jsx("p", { children: U.label }) })
                    ] }) })) }),
                    _.length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                      /* @__PURE__ */ f.exports.jsx(Hi, {}),
                      /* @__PURE__ */ f.exports.jsx(dn, { children: /* @__PURE__ */ f.exports.jsx(
                        fn,
                        {
                          onSelect: () => {
                            t.setValue(n, []), w();
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
}, wj = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, disabled: l, ...u }) => i ? /* @__PURE__ */ f.exports.jsx(
  jD,
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
  AD,
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
function ID({
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
function Bp({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ f.exports.jsx(Kn, { children: /* @__PURE__ */ f.exports.jsxs(Yn, { children: [
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
          Ux,
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
    /* @__PURE__ */ f.exports.jsx(En, { children: t })
  ] }) });
}
function LD({
  profile: e
}) {
  return /* @__PURE__ */ f.exports.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ f.exports.jsxs(fo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ f.exports.jsx(Mr, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ f.exports.jsx(po, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(Mr, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(jt, { className: "w-full", children: e.role })
    ] })
  ] });
}
const FD = ({ isExpanded: e, theme: t }) => {
  const [n, r] = te(!1), { value: o, toggleTheme: a } = t;
  return X(() => {
    r(!0);
  }, []), n ? /* @__PURE__ */ f.exports.jsx(
    "button",
    {
      onClick: a,
      "data-testId": "theme-sidebar-bottom-btn",
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
      children: o === "light" ? /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Lx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Wx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function VD({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(FD, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
        "button",
        {
          onClick: t,
          "data-testId": "toggle-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(dm, { className: "dark:text-white", size: 20 }),
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
            /* @__PURE__ */ f.exports.jsx(lm, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function WD({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx(LD, { profile: a }),
    /* @__PURE__ */ f.exports.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ f.exports.jsx(
        Ux,
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
        D7,
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
        VD,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function _j({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = te(!1);
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-brand-sidebar-background border-t border-gray-200 dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-between h-full max-w-lg  mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ f.exports.jsx(
        Bp,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ f.exports.jsx(
        Bp,
        {
          icon: /* @__PURE__ */ f.exports.jsx(dm, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      ID,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ f.exports.jsx(
          WD,
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
const Xr = ht({
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
function UD() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Xe(Xr);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        ed,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(Fi, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(td, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Vi, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(Wi, { value: `${a}`, children: a }, a)) })
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
const Cj = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, zD = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), Ej = {
  limit: 10,
  page: 1
}, tl = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), Sj = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], BD = () => /* @__PURE__ */ f.exports.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), HD = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ f.exports.jsx("div", { children: r.render(o) }, tl()) : /* @__PURE__ */ f.exports.jsx(Kt, { children: o[r.id] }, tl());
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((r) => /* @__PURE__ */ f.exports.jsx(jh, { children: t.map((o) => n(o, r)) }, tl())) });
}, f0 = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Xe(Xr), [s, i] = te(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    HD,
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
  ) : /* @__PURE__ */ f.exports.jsx(BD, {}) });
}, KD = () => /* @__PURE__ */ f.exports.jsx(f0, {}), YD = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), GD = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(YD, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), qD = () => {
  const { showFilters: e, setShowFilters: t } = Xe(Xr);
  return /* @__PURE__ */ f.exports.jsxs(
    Fe,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(Ax, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, ZD = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Xe(Xr), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(zn, { children: [
    /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Fe, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ f.exports.jsx(Ix, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Qa, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          jt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          jt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ f.exports.jsx(
          jt,
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
      /* @__PURE__ */ f.exports.jsxs(ns, { children: [
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
          /* @__PURE__ */ f.exports.jsx(Hi, {}),
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
}, XD = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(zn, { children: [
  /* @__PURE__ */ f.exports.jsx(Bn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Fe, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(Ls, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(Qa, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ f.exports.jsx(
        jt,
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
      Zu,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), QD = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = Xe(Xr), l = e.watch(n.map((d) => d.id)), u = () => {
    var p;
    a();
    const d = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((m) => {
      m[1] && d.push({
        field: Wo(m[0]),
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
          XD,
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
      /* @__PURE__ */ f.exports.jsx(qD, {}),
      o && r && r.map((d) => /* @__PURE__ */ f.exports.jsx(
        ZD,
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
            /* @__PURE__ */ f.exports.jsx(_i, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, JD = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = Xe(Xr), c = th({
    defaultValues: n.reduce((u, d) => (u[d.id] = "", u), {}),
    resolver: Kx(
      pi.object(
        n.reduce((u, d) => (u[d.id] = pi.string().optional(), u), {})
      )
    )
  }), l = async (u) => {
    var m;
    console.log({ data: u });
    const d = r(), p = [];
    (m = Object.entries(u)) == null || m.forEach((h) => {
      h[1] && p.push({
        field: Wo(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: d, limit: s, page: a });
  };
  return X(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(rh, { ...c, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(QD, { form: c, onSubmit: l }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Fe,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Jl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Vx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, e8 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), t8 = () => /* @__PURE__ */ f.exports.jsx(f0, {}), n8 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function Nj(e) {
  const [t, n] = te([]), [r, o] = te([]), [a, s] = te([]), [i, c] = te(!1), [l, u] = te(e == null ? void 0 : e.error), [d, p] = te(e == null ? void 0 : e.loading), [m, h] = te(), [v, g] = te(
    (e == null ? void 0 : e.pagination) ?? n8
  ), [b, x] = te(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: y } = e, _ = ve(
    (I) => e.onSubmitTable({ ...I }),
    [e]
  ), w = ve(
    (I) => {
      var R;
      g(I);
      const L = m.getValues(), W = [];
      (R = Object.entries(L)) == null || R.forEach((D) => {
        D[1] && W.push({
          field: zD(D[0]),
          text: D[1]
        });
      });
      const q = r.map((D) => ({
        id: D.id,
        label: D.label,
        options: D.options.filter((G) => G.selected).map((G) => G.value)
      })).filter((D) => D.options.length > 0);
      _({
        filters: q,
        queries: W,
        limit: I.limit,
        page: I.page
      });
    },
    [r, _, m]
  ), N = ve(() => {
    w({ ...v, page: v.page + 1 });
  }, [v, w]), k = ve(() => {
    v.page > 1 && w({ ...v, page: v.page - 1 });
  }, [v, w]), E = () => r.map((I) => ({
    id: I.id,
    label: I.label,
    options: I.options.filter((L) => L.selected).map((L) => L.value)
  })).filter((I) => I.options.length > 0), T = (I) => {
    const L = r.find((W) => W.id === I);
    return L ? L.options.filter((q) => q.selected).map((q) => q.value) : [];
  }, K = (I, L, W) => {
    const q = r.map((R) => R.id === I ? {
      ...R,
      options: R.options.map((D) => D.id === L ? { ...D, selected: W } : D)
    } : R);
    o(q);
  }, U = () => r, B = (I) => {
    const L = r.map((W) => W.id === I ? {
      ...W,
      options: W.options.map((q) => ({
        ...q,
        selected: !1
      }))
    } : W);
    o(L);
  }, Z = (I) => w({ ...v, limit: I }), F = () => {
    const I = r.map((L) => ({
      ...L,
      options: L.options.map((W) => ({ ...W, selected: !1 }))
    }));
    o(I);
  };
  return X(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), X(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), X(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), X(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), X(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), X(() => {
    const I = b.filter((L) => L.isQuery).map((L) => ({
      id: L.id,
      label: L.label
    }));
    s(I);
  }, [b]), X(() => {
    const I = (W) => (W == null ? void 0 : W.filters) && (W == null ? void 0 : W.filters.length), L = b.filter(I).map((W) => {
      const q = W.filters.map((D) => ({
        ...D,
        selected: !1
      }));
      return {
        ...W,
        id: W.id,
        options: q
      };
    });
    o(L);
  }, [b]), X(() => {
    e != null && e.filters && (e == null || e.filters.forEach((I) => {
      I != null && I.filters && b.forEach((L) => {
        I.id === L.id && o((W) => W.some((R) => R.id === I.id) ? W : [
          ...W,
          {
            id: L.id,
            label: L.label,
            options: I.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), X(() => {
    g((I) => {
      var L, W;
      return {
        ...I,
        hasNextPage: (L = e == null ? void 0 : e.pagination) == null ? void 0 : L.hasNextPage,
        hasPrevPage: (W = e == null ? void 0 : e.pagination) == null ? void 0 : W.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Xr.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: N,
        prevPage: k,
        searchForm: m,
        updateLimit: Z,
        showFilters: i,
        resetFilters: F,
        getGlobalFilters: U,
        selectOptionFilter: K,
        resetOptionsByFilter: B,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: _,
        getFilterOptionsSelectedById: T,
        getFiltersWithOptionsSelected: E,
        setSelectItem: e.setSelectItem,
        setShowFilters: (I) => c(I),
        setSearchForm: (I) => h(I)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(JD, { onSubmitTable: _, loading: d }),
        /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${y ? `${y === 2 ? "sm" : "lg"}:grid-cols-${y}` : "grid-cols-3"}  gap-6`,
            children: [
              d && /* @__PURE__ */ f.exports.jsx(GD, {}),
              !d && l && /* @__PURE__ */ f.exports.jsx(e8, {}),
              !d && !l && !t && /* @__PURE__ */ f.exports.jsx(t8, {}),
              !d && !l && t && /* @__PURE__ */ f.exports.jsx(KD, {})
            ]
          }
        ),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(UD, {})
      ] })
    }
  );
}
function r8(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Hp(e) {
  return r8(e) || Array.isArray(e);
}
function o8() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Td(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !Hp(i) || !Hp(c) ? i === c : Td(i, c);
  });
}
function Kp(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function a8(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Kp(e), r = Kp(t);
  return n.every((o, a) => {
    const s = r[a];
    return Td(o, s);
  });
}
function Od(e) {
  return typeof e == "number";
}
function ql(e) {
  return typeof e == "string";
}
function kd(e) {
  return typeof e == "boolean";
}
function Yp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ct(e) {
  return Math.abs(e);
}
function Dd(e) {
  return Math.sign(e);
}
function Rs(e, t) {
  return ct(e - t);
}
function s8(e, t) {
  if (e === 0 || t === 0 || ct(e) <= ct(t))
    return 0;
  const n = Rs(ct(e), ct(t));
  return ct(n / e);
}
function Pa(e) {
  return Ta(e).map(Number);
}
function cn(e) {
  return e[ss(e)];
}
function ss(e) {
  return Math.max(0, e.length - 1);
}
function Md(e, t) {
  return t === ss(e);
}
function Gp(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Ta(e) {
  return Object.keys(e);
}
function p0(e, t) {
  return [e, t].reduce((n, r) => (Ta(r).forEach((o) => {
    const a = n[o], s = r[o], i = Yp(a) && Yp(s);
    n[o] = i ? p0(a, s) : s;
  }), n), {});
}
function m0(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function i8(e, t) {
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
    return ql(e) ? n[e](c) : e(t, c, l);
  }
  return {
    measure: s
  };
}
function c8(e, t) {
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
  const n = ct(e - t);
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
function v0(e, t, n) {
  const {
    constrain: r
  } = Ur(0, e), o = e + 1;
  let a = s(t);
  function s(p) {
    return n ? ct((o + p) % o) : r(p);
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
    return v0(e, i(), n);
  }
  const d = {
    get: i,
    set: c,
    add: l,
    clone: u
  };
  return d;
}
function l8(e) {
  const t = e === "rtl" ? -1 : 1;
  function n(o) {
    return o * t;
  }
  return {
    apply: n
  };
}
function Oa() {
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
function u8(e, t, n, r, o, a, s, i, c, l, u, d, p, m, h, v, g, b, x, y) {
  const {
    cross: _
  } = e, w = ["INPUT", "SELECT", "TEXTAREA"], N = {
    passive: !1
  }, k = Oa(), E = Oa(), T = Ur(50, 225).constrain(h.measure(20)), K = {
    mouse: 300,
    touch: 400
  }, U = {
    mouse: 500,
    touch: 600
  }, B = v ? 43 : 25;
  let Z = !1, F = 0, I = 0, L = !1, W = !1, q = !1, R = !1;
  function D(V) {
    if (!y)
      return;
    function fe(ye) {
      (kd(y) || y(V, ye)) && be(ye);
    }
    const he = n;
    k.add(he, "dragstart", (ye) => ye.preventDefault(), N).add(he, "touchmove", () => {
    }, N).add(he, "touchend", () => {
    }).add(he, "touchstart", fe).add(he, "mousedown", fe).add(he, "touchcancel", ie).add(he, "contextmenu", ie).add(he, "click", me, !0);
  }
  function G() {
    k.clear(), E.clear();
  }
  function Q() {
    const V = R ? r : n;
    E.add(V, "touchmove", oe, N).add(V, "touchend", ie).add(V, "mousemove", oe, N).add(V, "mouseup", ie);
  }
  function ae(V) {
    const fe = V.nodeName || "";
    return w.includes(fe);
  }
  function ne() {
    return (v ? U : K)[R ? "mouse" : "touch"];
  }
  function ge(V, fe) {
    const he = p.add(Dd(V) * -1), ye = d.byDistance(V, !v).distance;
    return v || ct(V) < T ? ye : b && fe ? ye * 0.5 : d.byIndex(he.get(), 0).distance;
  }
  function be(V) {
    const fe = m0(V, o);
    R = fe, !(fe && V.button !== 0) && (ae(V.target) || (q = v && fe && !V.buttons && Z, Z = Rs(a.get(), i.get()) >= 2, L = !0, s.pointerDown(V), u.useFriction(0).useDuration(0), a.set(i), Q(), F = s.readPoint(V), I = s.readPoint(V, _), m.emit("pointerDown")));
  }
  function oe(V) {
    const fe = s.readPoint(V), he = s.readPoint(V, _), ye = Rs(fe, F), O = Rs(he, I);
    if (!W && !R && (!V.cancelable || (W = ye > O, !W)))
      return ie(V);
    const z = s.pointerMove(V);
    ye > g && (q = !0), u.useFriction(0.3).useDuration(1), c.start(), a.add(t.apply(z)), V.preventDefault();
  }
  function ie(V) {
    const he = d.byDistance(0, !1).index !== p.get(), ye = s.pointerUp(V) * ne(), O = ge(t.apply(ye), he), z = s8(ye, O), J = B - 10 * z, pe = x + z / 50;
    W = !1, L = !1, E.clear(), u.useDuration(J).useFriction(pe), l.distance(O, !v), R = !1, m.emit("pointerUp");
  }
  function me(V) {
    q && (V.stopPropagation(), V.preventDefault());
  }
  function Y() {
    return L;
  }
  return {
    init: D,
    pointerDown: Y,
    destroy: G
  };
}
function d8(e, t) {
  let r, o;
  function a(d) {
    return d.timeStamp;
  }
  function s(d, p) {
    const h = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (m0(d, t) ? d : d.touches[0])[h];
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
    return m && !h && ct(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function f8() {
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
function p8(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function m8(e, t, n, r, o, a, s) {
  let i, c, l = [], u = !1;
  function d(v) {
    return o.measureSize(s.measure(v));
  }
  function p(v) {
    if (!a)
      return;
    c = d(e), l = r.map(d);
    function g(x) {
      for (const y of x) {
        const _ = y.target === e, w = r.indexOf(y.target), N = _ ? c : l[w], k = d(_ ? e : r[w]);
        if (ct(k - N) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((x) => {
      u || (kd(a) || a(v, x)) && g(x);
    }), [e].concat(r).forEach((x) => i.observe(x));
  }
  function m() {
    i && i.disconnect(), u = !0;
  }
  return {
    init: p,
    destroy: m
  };
}
function v8(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, l = e.get(), u = 0;
  function d() {
    const w = n.get() - e.get(), N = !i;
    let k = 0;
    return N ? (a = 0, e.set(n), k = w) : (a += w / i, a *= c, l += a, e.add(a), k = l - u), s = Dd(k), u = l, _;
  }
  function p() {
    const w = n.get() - t.get();
    return ct(w) < 1e-3;
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
    return x(r);
  }
  function b() {
    return y(o);
  }
  function x(w) {
    return i = w, _;
  }
  function y(w) {
    return c = w, _;
  }
  const _ = {
    direction: h,
    duration: m,
    velocity: v,
    seek: d,
    settled: p,
    useBaseFriction: b,
    useBaseDuration: g,
    useFriction: y,
    useDuration: x
  };
  return _;
}
function h8(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = Ur(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!l())
      return;
    const h = e.reachedMin(t.get()) ? "min" : "max", v = ct(e[h] - t.get()), g = n.get() - t.get(), b = i.constrain(v / s);
    n.subtract(g * b), !m && ct(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(m) {
    c = !m;
  }
  return {
    constrain: u,
    toggleActive: d
  };
}
function g8(e, t, n, r, o) {
  const a = Ur(-t + e, 0), s = u(), i = l(), c = d();
  function l() {
    const m = s[0], h = cn(s), v = s.lastIndexOf(m), g = s.indexOf(h) + 1;
    return Ur(v, g);
  }
  function u() {
    return n.map((m, h) => {
      const v = !h, g = Md(n, h);
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
function b8(e, t, n) {
  const r = t[0], o = n ? r - e : cn(t);
  return {
    limit: Ur(o, r)
  };
}
function x8(e, t, n, r) {
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
    r.forEach((h) => h.add(m));
  }
  return {
    loop: u
  };
}
function y8(e) {
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
function $8(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = d().map(t.measure), l = p(), u = m();
  function d() {
    return i(r).map((v) => cn(v)[s] - v[0][a]).map(ct);
  }
  function p() {
    return r.map((v) => n[a] - v[a]).map((v) => -ct(v));
  }
  function m() {
    return i(l).map((v) => v[0]).map((v, g) => v + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function w8(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, l = u();
  function u() {
    const p = s(a), m = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : m ? p : p.slice(i, c).map((h, v, g) => {
      const b = !v, x = Md(g, v);
      if (b) {
        const y = cn(g[0]) + 1;
        return Gp(y);
      }
      if (x) {
        const y = ss(a) - cn(g)[0] + 1;
        return Gp(y, cn(g)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: l
  };
}
function _8(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(h) {
    return h.concat().sort((v, g) => ct(v) - ct(g))[0];
  }
  function l(h) {
    const v = e ? s(h) : i(h), g = t.map((x) => x - v).map((x) => u(x, 0)).map((x, y) => ({
      diff: x,
      index: y
    })).sort((x, y) => ct(x.diff) - ct(y.diff)), {
      index: b
    } = g[0];
    return {
      index: b,
      distance: v
    };
  }
  function u(h, v) {
    const g = [h, h + n, h - n];
    if (!e)
      return g[0];
    if (!v)
      return c(g);
    const b = g.filter((x) => Dd(x) === v);
    return b.length ? c(b) : cn(g) - n;
  }
  function d(h, v) {
    const g = t[h] - o.get(), b = u(g, v);
    return {
      index: h,
      distance: b
    };
  }
  function p(h, v) {
    const g = o.get() + h, {
      index: b,
      distance: x
    } = l(g), y = !e && a(g);
    if (!v || y)
      return {
        index: b,
        distance: h
      };
    const _ = t[b] - x, w = h + u(_, 0);
    return {
      index: b,
      distance: w
    };
  }
  return {
    byDistance: p,
    byIndex: d,
    shortcut: u
  };
}
function C8(e, t, n, r, o, a) {
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
function E8(e, t, n, r, o, a) {
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
      const v = t.indexOf(d), g = n.findIndex((b) => b.includes(v));
      Od(g) && (o.useDuration(0), r.index(g, 0));
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
function js(e) {
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
    return Od(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function h0(e, t, n) {
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
function S8(e, t, n, r, o, a, s, i, c, l) {
  const d = Pa(a), p = Pa(a).reverse(), m = x().concat(y());
  function h(E, T) {
    return E.reduce((K, U) => K - a[U], T);
  }
  function v(E, T) {
    return E.reduce((K, U) => h(K, T) > 0 ? K.concat([U]) : K, []);
  }
  function g(E) {
    return s.map((T, K) => ({
      start: T - o[K] + 0.5 + E,
      end: T + n - 0.5 + E
    }));
  }
  function b(E, T, K) {
    const U = g(T);
    return E.map((B) => {
      const Z = K ? 0 : -r, F = K ? r : 0, I = K ? "end" : "start", L = U[B][I];
      return {
        index: B,
        loopPoint: L,
        slideLocation: js(-1),
        translate: h0(e, t, l[B]),
        target: () => c.get() > L ? Z : F
      };
    });
  }
  function x() {
    const E = i[0], T = v(p, E);
    return b(T, r, !1);
  }
  function y() {
    const E = n - i[0] - 1, T = v(d, E);
    return b(T, -r, !0);
  }
  function _() {
    return m.every(({
      index: E
    }) => {
      const T = d.filter((K) => K !== E);
      return h(T, n) <= 0.1;
    });
  }
  function w() {
    m.forEach((E) => {
      const {
        target: T,
        translate: K,
        slideLocation: U
      } = E, B = T();
      B !== U.get() && (K.to(B), U.set(B));
    });
  }
  function N() {
    m.forEach((E) => E.translate.clear());
  }
  return {
    canLoop: _,
    clear: N,
    loop: w,
    loopPoints: m
  };
}
function N8(e, t, n) {
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
      o || (kd(n) || n(c, u)) && l(u);
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
function P8(e, t, n, r) {
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
    return Ta(o).reduce((v, g) => {
      const b = parseInt(g), {
        isIntersecting: x
      } = o[b];
      return (h && x || !h && !x) && v.push(b), v;
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
function T8(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, l = n[0] && o, u = h(), d = v(), p = n.map(s), m = g();
  function h() {
    if (!l)
      return 0;
    const x = n[0];
    return ct(t[i] - x[i]);
  }
  function v() {
    if (!l)
      return 0;
    const x = a.getComputedStyle(cn(r));
    return parseFloat(x.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((x, y, _) => {
      const w = !y, N = Md(_, y);
      return w ? p[y] + u : N ? p[y] + d : _[y + 1][i] - x[i];
    }).map(ct);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: m,
    startGap: u,
    endGap: d
  };
}
function O8(e, t, n, r, o, a, s, i, c, l) {
  const {
    startEdge: u,
    endEdge: d
  } = e, p = Od(r);
  function m(b, x) {
    return Pa(b).filter((y) => y % x === 0).map((y) => b.slice(y, y + x));
  }
  function h(b) {
    return b.length ? Pa(b).reduce((x, y) => {
      const _ = cn(x) || 0, w = _ === 0, N = y === ss(b), k = a[u] - s[_][u], E = a[u] - s[y][d], T = !o && w ? t.apply(i) : 0, K = !o && N ? t.apply(c) : 0;
      return ct(E - K - (k + T)) > n + l && x.push(y), N && x.push(b.length), x;
    }, []).map((x, y, _) => {
      const w = Math.max(_[y - 1] || 0);
      return b.slice(w, x);
    }) : [];
  }
  function v(b) {
    return p ? m(b, r) : h(b);
  }
  return {
    groupSlides: v
  };
}
function k8(e, t, n, r, o, a, s, i) {
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
    slidesToScroll: b,
    skipSnaps: x,
    containScroll: y,
    watchResize: _,
    watchSlides: w,
    watchDrag: N
  } = a, k = 2, E = f8(), T = E.measure(t), K = n.map(E.measure), U = l8(u), B = c8(l, u), Z = B.measureSize(T), F = p8(Z), I = i8(c, Z), L = !p && !!y, W = p || !!y, {
    slideSizes: q,
    slideSizesWithGaps: R,
    startGap: D,
    endGap: G
  } = T8(B, T, K, n, W, o), Q = O8(B, U, Z, b, p, T, K, D, G, k), {
    snaps: ae,
    snapsAligned: ne
  } = $8(B, I, T, K, Q), ge = -cn(ae) + cn(R), {
    snapsContained: be,
    scrollContainLimit: oe
  } = g8(Z, ge, ne, y, k), ie = L ? be : ne, {
    limit: me
  } = b8(ge, ie, p), Y = v0(ss(ie), d, p), re = Y.clone(), V = Pa(n), fe = ({
    dragHandler: Re,
    scrollBody: Ke,
    scrollBounds: nt,
    options: {
      loop: rt
    }
  }) => {
    rt || nt.constrain(Re.pointerDown()), Ke.seek();
  }, he = ({
    scrollBody: Re,
    translate: Ke,
    location: nt,
    offsetLocation: rt,
    scrollLooper: Ot,
    slideLooper: Nr,
    dragHandler: zt,
    animation: er,
    eventHandler: Qr,
    options: {
      loop: Uo
    }
  }, is) => {
    const kn = Re.velocity(), Jr = Re.settled();
    Jr && !zt.pointerDown() && (er.stop(), Qr.emit("settle")), Jr || Qr.emit("scroll"), rt.set(nt.get() - kn + kn * is), Uo && (Ot.loop(Re.direction()), Nr.loop()), Ke.to(rt.get());
  }, ye = {
    start: () => i.start(Ee),
    stop: () => i.stop(Ee),
    update: () => fe(Ee),
    render: (Re) => he(Ee, Re)
  }, O = 0.68, z = ie[Y.get()], J = js(z), pe = js(z), le = js(z), se = v8(J, pe, le, m, O), $e = _8(p, ie, ge, me, le), Le = C8(ye, Y, re, $e, le, s), Ue = y8(me), yt = Oa(), bn = P8(t, n, s, g), {
    slideRegistry: Et
  } = w8(L, y, ie, oe, Q, V), Ne = E8(e, n, Et, Le, se, yt), Ee = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: T,
    slideRects: K,
    animation: ye,
    axis: B,
    direction: U,
    dragHandler: u8(B, U, e, r, o, le, d8(B, o), J, ye, Le, se, $e, Y, s, F, h, v, x, O, N),
    eventStore: yt,
    percentOfView: F,
    index: Y,
    indexPrevious: re,
    limit: me,
    location: J,
    offsetLocation: pe,
    options: a,
    resizeHandler: m8(t, s, o, n, B, _, E),
    scrollBody: se,
    scrollBounds: h8(me, J, le, se, F),
    scrollLooper: x8(ge, me, pe, [J, pe, le]),
    scrollProgress: Ue,
    scrollSnapList: ie.map(Ue.get),
    scrollSnaps: ie,
    scrollTarget: $e,
    scrollTo: Le,
    slideLooper: S8(B, U, Z, ge, q, R, ae, ie, pe, n),
    slideFocus: Ne,
    slidesHandler: N8(t, s, w),
    slidesInView: bn,
    slideIndexes: V,
    slideRegistry: Et,
    slidesToScroll: Q,
    target: le,
    translate: h0(B, U, t)
  };
  return Ee;
}
function D8(e) {
  const t = 16.666666666666668;
  let n = [], r = null, o = 0, a = 0;
  function s(d) {
    r || (r = d);
    const p = d - r;
    for (r = d, o += p; o >= t; )
      n.forEach(({
        animation: h
      }) => h.update()), o -= t;
    const m = ct(o / t);
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
function M8() {
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
const R8 = {
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
function j8(e) {
  function t(a, s) {
    return p0(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = Ta(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, l) => t(c, l), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => Ta(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function A8(e) {
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
function To(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = j8(o), s = A8(a), i = Oa(), c = Oa(), l = M8(), {
    animationRealms: u
  } = To, {
    mergeOptions: d,
    optionsAtMedia: p,
    optionsMediaQueries: m
  } = a, {
    on: h,
    off: v,
    emit: g
  } = l, b = Z;
  let x = !1, y, _ = d(R8, To.globalOptions), w = d(_), N = [], k, E, T;
  function K() {
    const {
      container: fe,
      slides: he
    } = w;
    E = (ql(fe) ? e.querySelector(fe) : fe) || e.children[0];
    const O = ql(he) ? E.querySelectorAll(he) : he;
    T = [].slice.call(O || E.children);
  }
  function U(fe, he) {
    const ye = k8(e, E, T, r, o, fe, l, he);
    if (fe.loop && !ye.slideLooper.canLoop()) {
      const O = Object.assign({}, fe, {
        loop: !1
      });
      return U(O, he);
    }
    return ye;
  }
  function B(fe, he) {
    if (x)
      return;
    const ye = u.find((z) => z.window === o), O = ye || D8(o);
    ye || u.push(O), _ = d(_, fe), w = p(_), N = he || N, K(), y = U(w, O), m([_, ...N.map(({
      options: z
    }) => z)]).forEach((z) => i.add(z, "change", Z)), w.active && (y.translate.to(y.location.get()), y.slidesInView.init(), y.slideFocus.init(), y.eventHandler.init(V), y.resizeHandler.init(V), y.slidesHandler.init(V), c.add(r, "visibilitychange", () => {
      r.hidden && O.reset();
    }), y.options.loop && y.slideLooper.loop(), E.offsetParent && T.length && y.dragHandler.init(V), k = s.init(V, N));
  }
  function Z(fe, he) {
    const ye = ae();
    F(), B(d({
      startIndex: ye
    }, fe), he), l.emit("reInit");
  }
  function F() {
    y.dragHandler.destroy(), y.animation.stop(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), s.destroy(), i.clear(), c.clear();
  }
  function I() {
    x || (x = !0, i.clear(), F(), l.emit("destroy"));
  }
  function L(fe, he, ye) {
    !w.active || x || (y.scrollBody.useBaseFriction().useDuration(he === !0 ? 0 : w.duration), y.scrollTo.index(fe, ye || 0));
  }
  function W(fe) {
    const he = y.index.add(1).get();
    L(he, fe, -1);
  }
  function q(fe) {
    const he = y.index.add(-1).get();
    L(he, fe, 1);
  }
  function R() {
    return y.index.add(1).get() !== ae();
  }
  function D() {
    return y.index.add(-1).get() !== ae();
  }
  function G() {
    return y.scrollSnapList;
  }
  function Q() {
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
  function me() {
    return e;
  }
  function Y() {
    return E;
  }
  function re() {
    return T;
  }
  const V = {
    canScrollNext: R,
    canScrollPrev: D,
    containerNode: Y,
    internalEngine: ie,
    destroy: I,
    off: v,
    on: h,
    emit: g,
    plugins: oe,
    previousScrollSnap: ne,
    reInit: b,
    rootNode: me,
    scrollNext: W,
    scrollPrev: q,
    scrollProgress: Q,
    scrollSnapList: G,
    scrollTo: L,
    selectedScrollSnap: ae,
    slideNodes: re,
    slidesInView: ge,
    slidesNotInView: be
  };
  return B(t, n), setTimeout(() => l.emit("init"), 0), V;
}
To.animationRealms = [];
To.globalOptions = void 0;
function Rd(e = {}, t = []) {
  const n = H(e), r = H(t), [o, a] = te(), [s, i] = te(), c = ve(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return X(() => {
    if (o8() && s) {
      To.globalOptions = Rd.globalOptions;
      const l = To(s, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [s, a]), X(() => {
    Td(n.current, e) || (n.current = e, c());
  }, [e, c]), X(() => {
    a8(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
Rd.globalOptions = void 0;
const g0 = C.createContext(null);
function ac() {
  const e = C.useContext(g0);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const I8 = C.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, l] = Rd(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [u, d] = C.useState(!1), [p, m] = C.useState(!1), h = C.useCallback((x) => {
      x && (d(x.canScrollPrev()), m(x.canScrollNext()));
    }, []), v = C.useCallback(() => {
      l == null || l.scrollPrev();
    }, [l]), g = C.useCallback(() => {
      l == null || l.scrollNext();
    }, [l]), b = C.useCallback(
      (x) => {
        x.key === "ArrowLeft" ? (x.preventDefault(), v()) : x.key === "ArrowRight" && (x.preventDefault(), g());
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
      g0.Provider,
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
            onKeyDownCapture: b,
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
I8.displayName = "Carousel";
const L8 = C.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = ac();
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
L8.displayName = "CarouselContent";
const F8 = C.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = ac();
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
F8.displayName = "CarouselItem";
const V8 = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = ac();
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
        /* @__PURE__ */ f.exports.jsx(Sy, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
V8.displayName = "CarouselPrevious";
const W8 = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = ac();
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
        /* @__PURE__ */ f.exports.jsx(Ny, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
W8.displayName = "CarouselNext";
var b0 = S.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
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
} }), jd = () => S.useContext(b0);
function U8(e, { insertAt: t } = {}) {
  if (!e || typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
U8(`[vaul-drawer]{touch-action:none;transform:translate3d(0,100%,0);transition:transform .5s cubic-bezier(.32,.72,0,1)}.vaul-dragging .vaul-scrollable{overflow-y:hidden!important}[vaul-drawer][vaul-drawer-visible=true]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;top:100%;background:inherit;background-color:inherit;left:0;right:0;height:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var z8 = typeof window < "u" ? ka : X;
function Zl(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function B8() {
  return Ad(/^Mac/);
}
function H8() {
  return Ad(/^iPhone/);
}
function K8() {
  return Ad(/^iPad/) || B8() && navigator.maxTouchPoints > 1;
}
function x0() {
  return H8() || K8();
}
function Ad(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var nl = typeof document < "u" && window.visualViewport;
function qp(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function y0(e) {
  for (qp(e) && (e = e.parentElement); e && !qp(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var Y8 = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), Es = 0, rl;
function G8(e = {}) {
  let { isDisabled: t } = e;
  z8(() => {
    if (!t)
      return Es++, Es === 1 && (x0() ? rl = Z8() : rl = q8()), () => {
        Es--, Es === 0 && rl();
      };
  }, [t]);
}
function q8() {
  return Zl(vi(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), vi(document.documentElement, "overflow", "hidden"));
}
function Z8() {
  let e, t = 0, n = (d) => {
    e = y0(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY);
  }, r = (d) => {
    if (!e || e === document.documentElement || e === document.body) {
      d.preventDefault();
      return;
    }
    let p = d.changedTouches[0].pageY, m = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((m <= 0 && p > t || m >= h && p < t) && d.preventDefault(), t = p);
  }, o = (d) => {
    let p = d.target;
    hi(p) && p !== document.activeElement && (d.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (d) => {
    let p = d.target;
    hi(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", nl && (nl.height < window.innerHeight ? requestAnimationFrame(() => {
        Zp(p);
      }) : nl.addEventListener("resize", () => Zp(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, l = Zl(vi(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), vi(document.documentElement, "overflow", "hidden"));
  window.scrollTo(0, 0);
  let u = Zl(Qo(document, "touchstart", n, { passive: !1, capture: !0 }), Qo(document, "touchmove", r, { passive: !1, capture: !0 }), Qo(document, "touchend", o, { passive: !1, capture: !0 }), Qo(document, "focus", a, !0), Qo(window, "scroll", s));
  return () => {
    l(), u(), window.scrollTo(i, c);
  };
}
function vi(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Qo(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Zp(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = y0(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function hi(e) {
  return e instanceof HTMLInputElement && !Y8.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function X8(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Q8(...e) {
  return (t) => e.forEach((n) => X8(n, t));
}
function $0(...e) {
  return C.useCallback(Q8(...e), e);
}
var or = null;
function J8({ isOpen: e, modal: t, nested: n, hasBeenOpened: r }) {
  let [o, a] = S.useState(typeof window < "u" ? window.location.href : ""), s = S.useRef(0);
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
  return S.useEffect(() => {
    function l() {
      s.current = window.scrollY;
    }
    return l(), window.addEventListener("scroll", l), () => {
      window.removeEventListener("scroll", l);
    };
  }, []), S.useEffect(() => {
    n || !r || (e ? (i(), t || setTimeout(() => {
      c();
    }, 500)) : c());
  }, [e, r, o]), { restorePositionSetting: c };
}
var w0 = /* @__PURE__ */ new WeakMap();
function ut(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && w0.set(e, r);
}
function Ss(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = w0.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
function Ns(e) {
  let t = window.getComputedStyle(e), n = t.transform || t.webkitTransform || t.mozTransform, r = n.match(/^matrix3d\((.+)\)$/);
  return r ? parseFloat(r[1].split(", ")[13]) : (r = n.match(/^matrix\((.+)\)$/), r ? parseFloat(r[1].split(", ")[5]) : null);
}
function eM(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var et = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, _0 = 0.4;
function C0(e) {
  let t = S.useRef(e);
  return S.useEffect(() => {
    t.current = e;
  }), S.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function tM({ defaultProp: e, onChange: t }) {
  let n = S.useState(e), [r] = n, o = S.useRef(r), a = C0(t);
  return S.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function nM({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = tM({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = C0(n), c = S.useCallback((l) => {
    if (a) {
      let u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
    } else
      o(l);
  }, [a, e, o, i]);
  return [s, c];
}
function rM({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s }) {
  let [i, c] = nM({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), l = S.useMemo(() => i === (n == null ? void 0 : n[n.length - 1]), [n, i]), u = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === i || !n, d = S.useMemo(() => {
    var x;
    return (x = n == null ? void 0 : n.findIndex((y) => y === i)) != null ? x : null;
  }, [n, i]), p = S.useMemo(() => {
    var x;
    return (x = n == null ? void 0 : n.map((y) => {
      let _ = typeof window < "u", w = typeof y == "string", N = 0;
      w && (N = parseInt(y, 10));
      let k = w ? N : _ ? y * window.innerHeight : 0;
      return _ ? window.innerHeight - k : k;
    })) != null ? x : [];
  }, [n]), m = S.useMemo(() => d !== null ? p == null ? void 0 : p[d] : null, [p, d]), h = S.useCallback((x) => {
    var y;
    let _ = (y = p == null ? void 0 : p.findIndex((w) => w === x)) != null ? y : null;
    s(_), ut(r.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `translate3d(0, ${x}px, 0)` }), p && _ !== p.length - 1 && _ !== a ? ut(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "0" }) : ut(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), c(_ !== null ? n == null ? void 0 : n[_] : null);
  }, [r.current, n, p, a, o, c]);
  S.useEffect(() => {
    var x;
    if (e) {
      let y = (x = n == null ? void 0 : n.findIndex((_) => _ === e)) != null ? x : null;
      p && y && typeof p[y] == "number" && h(p[y]);
    }
  }, [e, n, p, h]);
  function v({ draggedDistance: x, closeDrawer: y, velocity: _, dismissible: w }) {
    if (a === void 0)
      return;
    let N = m - x, k = d === a - 1, E = d === 0, T = x > 0;
    if (k && ut(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), _ > 2 && !T) {
      w ? y() : h(p[0]);
      return;
    }
    if (_ > 2 && T && p && n) {
      h(p[n.length - 1]);
      return;
    }
    let K = p == null ? void 0 : p.reduce((U, B) => typeof U != "number" || typeof B != "number" ? U : Math.abs(B - N) < Math.abs(U - N) ? B : U);
    if (_ > _0 && Math.abs(x) < window.innerHeight * 0.4) {
      let U = T ? 1 : -1;
      if (U > 0 && l) {
        h(p[n.length - 1]);
        return;
      }
      if (E && U < 0 && w && y(), d === null)
        return;
      h(p[d + U]);
      return;
    }
    h(K);
  }
  function g({ draggedDistance: x }) {
    if (m === null)
      return;
    let y = m - x;
    ut(r.current, { transform: `translate3d(0, ${y}px, 0)` });
  }
  function b(x, y) {
    if (!n || typeof d != "number" || !p || a === void 0)
      return null;
    let _ = d === a - 1;
    if (d >= a && y)
      return 0;
    if (_ && !y)
      return 1;
    if (!u && !_)
      return null;
    let w = _ ? d + 1 : d - 1, N = _ ? p[w] - p[w - 1] : p[w + 1] - p[w], k = x / Math.abs(N);
    return _ ? 1 - k : k;
  }
  return { isLastSnapPoint: l, activeSnapPoint: i, shouldFade: u, getPercentageDragged: b, setActiveSnapPoint: c, activeSnapPointIndex: d, onRelease: v, onDrag: g, snapPointsOffset: p };
}
var oM = 0.25, aM = 100, Xp = 8, Pr = 16, Qp = 26, Jp = "vaul-dragging";
function E0({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i, closeThreshold: c = oM, scrollLockTimeout: l = aM, dismissible: u = !0, fadeFromIndex: d = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: h, modal: v = !0, onClose: g }) {
  var b;
  let [x = !1, y] = S.useState(!1), [_, w] = S.useState(!1), [N, k] = S.useState(!1), [E, T] = S.useState(!1), [K, U] = S.useState(!1), [B, Z] = S.useState(!1), F = S.useRef(null), I = S.useRef(null), L = S.useRef(null), W = S.useRef(null), q = S.useRef(null), R = S.useRef(!1), D = S.useRef(null), G = S.useRef(0), Q = S.useRef(!1), ae = S.useRef(0), ne = S.useRef(null), ge = S.useRef(((b = ne.current) == null ? void 0 : b.getBoundingClientRect().height) || 0), be = S.useRef(0), oe = S.useCallback((Ne) => {
    s && Ne === V.length - 1 && (I.current = new Date());
  }, []), { activeSnapPoint: ie, activeSnapPointIndex: me, setActiveSnapPoint: Y, onRelease: re, snapPointsOffset: V, onDrag: fe, shouldFade: he, getPercentageDragged: ye } = rM({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: m, drawerRef: ne, fadeFromIndex: d, overlayRef: F, onSnapPointChange: oe });
  G8({ isDisabled: !x || K || !v || B || !_ });
  let { restorePositionSetting: O } = J8({ isOpen: x, modal: v, nested: i, hasBeenOpened: _ });
  function z() {
    return (window.innerWidth - Qp) / window.innerWidth;
  }
  function J(Ne) {
    var Ee;
    !u && !s || ne.current && !ne.current.contains(Ne.target) || (ge.current = ((Ee = ne.current) == null ? void 0 : Ee.getBoundingClientRect().height) || 0, U(!0), L.current = new Date(), x0() && window.addEventListener("touchend", () => R.current = !1, { once: !0 }), Ne.target.setPointerCapture(Ne.pointerId), G.current = Ne.screenY);
  }
  function pe(Ne, Ee) {
    var Re;
    let Ke = Ne, nt = (Re = window.getSelection()) == null ? void 0 : Re.toString(), rt = ne.current ? Ns(ne.current) : null, Ot = new Date();
    if (I.current && Ot.getTime() - I.current.getTime() < 500)
      return !1;
    if (rt > 0)
      return !0;
    if (nt && nt.length > 0)
      return !1;
    if (q.current && Ot.getTime() - q.current.getTime() < l && rt === 0 || Ee)
      return q.current = Ot, !1;
    for (; Ke; ) {
      if (Ke.scrollHeight > Ke.clientHeight) {
        if (Ke.scrollTop !== 0)
          return q.current = new Date(), !1;
        if (Ke.getAttribute("role") === "dialog")
          return !0;
      }
      Ke = Ke.parentNode;
    }
    return !0;
  }
  function le(Ne) {
    if (K) {
      let Ee = G.current - Ne.screenY, Re = Ee > 0;
      if (s && me === 0 && !u || !R.current && !pe(Ne.target, Re))
        return;
      if (ne.current.classList.add(Jp), R.current = !0, ut(ne.current, { transition: "none" }), ut(F.current, { transition: "none" }), s && fe({ draggedDistance: Ee }), Re && !s) {
        let zt = eM(Ee);
        ut(ne.current, { transform: `translate3d(0, ${Math.min(zt * -1, 0)}px, 0)` });
        return;
      }
      let Ke = Math.abs(Ee), nt = document.querySelector("[vaul-drawer-wrapper]"), rt = Ke / ge.current, Ot = ye(Ke, Re);
      Ot !== null && (rt = Ot);
      let Nr = 1 - rt;
      if ((he || d && me === d - 1) && (o == null || o(Ne, rt), ut(F.current, { opacity: `${Nr}`, transition: "none" }, !0)), nt && F.current && r) {
        let zt = Math.min(z() + rt * (1 - z()), 1), er = 8 - rt * 8, Qr = Math.max(0, 14 - rt * 14);
        ut(nt, { borderRadius: `${er}px`, transform: `scale(${zt}) translate3d(0, ${Qr}px, 0)`, transition: "none" }, !0);
      }
      s || ut(ne.current, { transform: `translate3d(0, ${Ke}px, 0)` });
    }
  }
  S.useEffect(() => () => {
    Ue(!1), O();
  }, []), S.useEffect(() => {
    var Ne;
    function Ee() {
      var Re;
      if (!ne.current)
        return;
      let Ke = document.activeElement;
      if (hi(Ke) || Q.current) {
        let nt = ((Re = window.visualViewport) == null ? void 0 : Re.height) || 0, rt = window.innerHeight - nt, Ot = ne.current.getBoundingClientRect().height || 0;
        be.current || (be.current = Ot);
        let Nr = ne.current.getBoundingClientRect().top;
        if (Math.abs(ae.current - rt) > 60 && (Q.current = !Q.current), s && s.length > 0 && V && me) {
          let zt = V[me] || 0;
          rt += zt;
        }
        if (ae.current = rt, Ot > nt || Q.current) {
          let zt = ne.current.getBoundingClientRect().height, er = zt;
          zt > nt && (er = nt - Qp), h ? ne.current.style.height = `${zt - Math.max(rt, 0)}px` : ne.current.style.height = `${Math.max(er, nt - Nr)}px`;
        } else
          ne.current.style.height = `${be.current}px`;
        s && s.length > 0 && !Q.current ? ne.current.style.bottom = "0px" : ne.current.style.bottom = `${Math.max(rt, 0)}px`;
      }
    }
    return (Ne = window.visualViewport) == null || Ne.addEventListener("resize", Ee), () => {
      var Re;
      return (Re = window.visualViewport) == null ? void 0 : Re.removeEventListener("resize", Ee);
    };
  }, [me, s, V]);
  function se() {
    ne.current && (g == null || g(), ut(ne.current, { transform: "translate3d(0, 100%, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), ut(F.current, { opacity: "0", transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), Ue(!1), setTimeout(() => {
      k(!1), y(!1);
    }, 300), setTimeout(() => {
      s && Y(s[0]);
    }, et.DURATION * 1e3));
  }
  S.useEffect(() => {
    if (!x && r) {
      let Ne = setTimeout(() => {
        Ss(document.body);
      }, 200);
      return () => clearTimeout(Ne);
    }
  }, [x, r]), S.useEffect(() => {
    e ? (y(!0), w(!0)) : se();
  }, [e]), S.useEffect(() => {
    E && (t == null || t(x));
  }, [x]), S.useEffect(() => {
    T(!0);
  }, []);
  function $e() {
    if (!ne.current)
      return;
    let Ne = document.querySelector("[vaul-drawer-wrapper]"), Ee = Ns(ne.current);
    ut(ne.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), ut(F.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), r && Ee && Ee > 0 && x && ut(Ne, { borderRadius: `${Xp}px`, overflow: "hidden", transform: `scale(${z()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` }, !0);
  }
  function Le(Ne) {
    var Ee;
    if (!K || !ne.current)
      return;
    R.current && hi(Ne.target) && Ne.target.blur(), ne.current.classList.remove(Jp), R.current = !1, U(!1), W.current = new Date();
    let Re = Ns(ne.current);
    if (!pe(Ne.target, !1) || !Re || Number.isNaN(Re) || L.current === null)
      return;
    let Ke = W.current.getTime() - L.current.getTime(), nt = G.current - Ne.screenY, rt = Math.abs(nt) / Ke;
    if (rt > 0.05 && (Z(!0), setTimeout(() => {
      Z(!1);
    }, 200)), s) {
      re({ draggedDistance: nt, closeDrawer: se, velocity: rt, dismissible: u }), a == null || a(Ne, !0);
      return;
    }
    if (nt > 0) {
      $e(), a == null || a(Ne, !0);
      return;
    }
    if (rt > _0) {
      se(), a == null || a(Ne, !1);
      return;
    }
    let Ot = Math.min((Ee = ne.current.getBoundingClientRect().height) != null ? Ee : 0, window.innerHeight);
    if (Re >= Ot * c) {
      se(), a == null || a(Ne, !1);
      return;
    }
    a == null || a(Ne, !0), $e();
  }
  S.useEffect(() => {
    x && (I.current = new Date(), Ue(!0));
  }, [x]), S.useEffect(() => {
    N && ne.current.querySelectorAll("*").forEach((Ne) => {
      let Ee = Ne;
      (Ee.scrollHeight > Ee.clientHeight || Ee.scrollWidth > Ee.clientWidth) && Ee.classList.add("vaul-scrollable");
    });
  }, [N]);
  function Ue(Ne) {
    let Ee = document.querySelector("[vaul-drawer-wrapper]");
    !Ee || !r || (Ne ? (ut(document.body, { background: "black" }, !0), ut(Ee, { borderRadius: `${Xp}px`, overflow: "hidden", transform: `scale(${z()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })) : (Ss(Ee, "overflow"), Ss(Ee, "transform"), Ss(Ee, "borderRadius"), ut(Ee, { transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })));
  }
  function yt(Ne) {
    let Ee = Ne ? (window.innerWidth - Pr) / window.innerWidth : 1, Re = Ne ? -Pr : 0;
    D.current && window.clearTimeout(D.current), ut(ne.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Ee}) translate3d(0, ${Re}px, 0)` }), !Ne && ne.current && (D.current = setTimeout(() => {
      ut(ne.current, { transition: "none", transform: `translate3d(0, ${Ns(ne.current)}px, 0)` });
    }, 500));
  }
  function bn(Ne, Ee) {
    if (Ee < 0)
      return;
    let Re = (window.innerWidth - Pr) / window.innerWidth, Ke = Re + Ee * (1 - Re), nt = -Pr + Ee * Pr;
    ut(ne.current, { transform: `scale(${Ke}) translate3d(0, ${nt}px, 0)`, transition: "none" });
  }
  function Et(Ne, Ee) {
    let Re = Ee ? (window.innerWidth - Pr) / window.innerWidth : 1, Ke = Ee ? -Pr : 0;
    Ee && ut(ne.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Re}) translate3d(0, ${Ke}px, 0)` });
  }
  return S.createElement(Ku, { modal: v, onOpenChange: (Ne) => {
    if (e !== void 0) {
      t == null || t(Ne);
      return;
    }
    Ne ? (w(!0), y(Ne)) : se();
  }, open: x }, S.createElement(b0.Provider, { value: { visible: N, activeSnapPoint: ie, snapPoints: s, setActiveSnapPoint: Y, drawerRef: ne, overlayRef: F, scaleBackground: Ue, onOpenChange: t, onPress: J, setVisible: k, onRelease: Le, onDrag: le, dismissible: u, isOpen: x, shouldFade: he, closeDrawer: se, onNestedDrag: bn, onNestedOpenChange: yt, onNestedRelease: Et, keyboardIsOpen: Q, openProp: e, modal: v, snapPointsOffset: V } }, n));
}
var S0 = S.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = jd(), l = $0(n, r), u = o && o.length > 0;
  return S.createElement(Ya, { onMouseUp: a, ref: l, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
S0.displayName = "Drawer.Overlay";
var N0 = S.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: l, dismissible: u, keyboardIsOpen: d, snapPointsOffset: p, visible: m, closeDrawer: h, modal: v, openProp: g, onOpenChange: b, setVisible: x } = jd(), y = $0(a, s);
  return S.useEffect(() => {
    x(!0);
  }, []), S.createElement(Ga, { onOpenAutoFocus: (_) => {
    e ? e(_) : (_.preventDefault(), s.current.focus());
  }, onPointerDown: i, onPointerDownOutside: (_) => {
    if (t == null || t(_), !v) {
      _.preventDefault();
      return;
    }
    d.current && (d.current = !1), _.preventDefault(), b == null || b(!1), !(!u || g !== void 0) && h();
  }, onPointerMove: l, onPointerUp: c, ref: y, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-visible": m ? "true" : "false" });
});
N0.displayName = "Drawer.Content";
function sM({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = jd();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return S.createElement(E0, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var gn = { Root: E0, NestedRoot: sM, Content: N0, Overlay: S0, Trigger: Yu, Portal: Gu, Close: Xa, Title: qa, Description: Za };
const iM = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  gn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
iM.displayName = "Drawer";
const Pj = gn.Trigger, cM = gn.Portal, Tj = gn.Close, P0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  gn.Overlay,
  {
    ref: n,
    className: j("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
P0.displayName = gn.Overlay.displayName;
const lM = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(cM, { children: [
  /* @__PURE__ */ f.exports.jsx(P0, {}),
  /* @__PURE__ */ f.exports.jsxs(
    gn.Content,
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
lM.displayName = "DrawerContent";
const uM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
uM.displayName = "DrawerHeader";
const dM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: j("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
dM.displayName = "DrawerFooter";
const fM = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  gn.Title,
  {
    ref: n,
    className: j(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
fM.displayName = gn.Title.displayName;
const pM = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  gn.Description,
  {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t
  }
));
pM.displayName = gn.Description.displayName;
var mM = Object.defineProperty, vM = Object.defineProperties, hM = Object.getOwnPropertyDescriptors, gi = Object.getOwnPropertySymbols, T0 = Object.prototype.hasOwnProperty, O0 = Object.prototype.propertyIsEnumerable, em = (e, t, n) => t in e ? mM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, gM = (e, t) => {
  for (var n in t || (t = {}))
    T0.call(t, n) && em(e, n, t[n]);
  if (gi)
    for (var n of gi(t))
      O0.call(t, n) && em(e, n, t[n]);
  return e;
}, bM = (e, t) => vM(e, hM(t)), xM = (e, t) => {
  var n = {};
  for (var r in e)
    T0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && gi)
    for (var r of gi(e))
      t.indexOf(r) < 0 && O0.call(e, r) && (n[r] = e[r]);
  return n;
}, yM = "^\\d+$";
function $M(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
var wM = 18, _M = "40px", CM = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function EM({ inputRef: e, pwmAreaRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let o = C.useRef({ done: !1, refocused: !1 }), [a, s] = C.useState(!1), [i, c] = C.useState(!1), [l, u] = C.useState(!1), d = C.useMemo(() => n === "none" ? !1 : n === "increase-width" && a && i || n === "experimental-no-flickering" && (!l || l && i && a), [l, a, i, n]), p = C.useCallback(() => {
    let m = e.current, h = t.current;
    if (!m || !h || l || n === "none")
      return;
    let v = n === "increase-width" ? m : h, g = v.getBoundingClientRect().left + v.offsetWidth, b = v.getBoundingClientRect().top + v.offsetHeight / 2, x = g - wM, y = b, _ = document.elementFromPoint(x, y);
    if ((document.querySelectorAll(CM).length > 0 || _ !== m) && (s(!0), u(!0), !o.current.refocused && document.activeElement === m)) {
      let w = [m.selectionStart, m.selectionEnd];
      m.blur(), m.focus(), m.setSelectionRange(w[0], w[1]), o.current.refocused = !0;
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
    let h = setTimeout(p, 0), v = setTimeout(p, 2e3), g = setTimeout(p, 5e3), b = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(v), clearTimeout(g), clearTimeout(b);
    };
  }, [e, r, n, p]), { willPushPWMBadge: d, PWM_BADGE_SPACE_WIDTH: _M };
}
function SM(e) {
  let t = C.useRef();
  return C.useEffect(() => {
    t.current = e;
  }), t.current;
}
var k0 = C.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: s = "left", pattern: i = yM, inputMode: c = "numeric", onComplete: l, pushPasswordManagerStrategy: u = "increase-width", render: d, containerClassName: p, noScriptCSSFallback: m = NM } = n, h = xM(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "render", "containerClassName", "noScriptCSSFallback"]), v, g, b, x;
  let [y, _] = C.useState(typeof h.defaultValue == "string" ? h.defaultValue : ""), w = r ?? y, N = SM(w), k = C.useCallback((Y) => {
    o == null || o(Y), _(Y);
  }, [o]), E = C.useMemo(() => i ? typeof i == "string" ? new RegExp(i) : i : null, [i]), T = C.useRef(null), K = C.useRef(null), U = C.useRef(null), B = C.useRef({ value: w, onChange: k, isIOS: typeof window < "u" && ((v = window == null ? void 0 : window.CSS) == null ? void 0 : v.supports("-webkit-touch-callout", "none")) }), Z = C.useRef({ prev: [(g = T.current) == null ? void 0 : g.selectionStart, (b = T.current) == null ? void 0 : b.selectionEnd, (x = T.current) == null ? void 0 : x.selectionDirection] });
  C.useImperativeHandle(t, () => T.current, []), C.useEffect(() => {
    let Y = T.current, re = K.current;
    if (!Y || !re)
      return;
    B.current.value !== Y.value && B.current.onChange(Y.value), Z.current.prev = [Y.selectionStart, Y.selectionEnd, Y.selectionDirection];
    function V() {
      if (document.activeElement !== Y) {
        R(null), G(null);
        return;
      }
      let ye = Y.selectionStart, O = Y.selectionEnd, z = Y.selectionDirection, J = Y.maxLength, pe = Y.value, le = Z.current.prev, se = -1, $e = -1, Le;
      if (pe.length !== 0 && ye !== null && O !== null) {
        let Et = ye === O, Ne = ye === pe.length && pe.length < J;
        if (Et && !Ne) {
          let Ee = ye;
          if (Ee === 0)
            se = 0, $e = 1, Le = "forward";
          else if (Ee === J)
            se = Ee - 1, $e = Ee, Le = "backward";
          else if (J > 2 && pe.length > 2) {
            let Re = 0;
            if (le[0] !== null && le[1] !== null) {
              Le = Ee < le[1] ? "backward" : "forward";
              let Ke = le[0] === le[1] && le[0] < J;
              Le === "backward" && !Ke && (Re = -1);
            }
            se = Re + Ee, $e = Re + Ee + 1;
          }
        }
        se !== -1 && $e !== -1 && se !== $e && T.current.setSelectionRange(se, $e, Le);
      }
      let Ue = se !== -1 ? se : ye, yt = $e !== -1 ? $e : O, bn = Le ?? z;
      R(Ue), G(yt), Z.current.prev = [Ue, yt, bn];
    }
    if (document.addEventListener("selectionchange", V, { capture: !0 }), V(), document.activeElement === Y && W(!0), !document.getElementById("input-otp-style")) {
      let ye = document.createElement("style");
      if (ye.id = "input-otp-style", document.head.appendChild(ye), ye.sheet) {
        let O = "background: transparent !important; text: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        Jo(ye.sheet, "[data-input-otp]::selection { background: transparent !important; }"), Jo(ye.sheet, `[data-input-otp]:autofill { ${O} }`), Jo(ye.sheet, `[data-input-otp]:-webkit-autofill { ${O} }`), Jo(ye.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Jo(ye.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let fe = () => {
      re && re.style.setProperty("--root-height", `${Y.clientHeight}px`);
    };
    fe();
    let he = new ResizeObserver(fe);
    return he.observe(Y), () => {
      document.removeEventListener("selectionchange", V, { capture: !0 }), he.disconnect();
    };
  }, []);
  let [F, I] = C.useState(!1), [L, W] = C.useState(!1), [q, R] = C.useState(null), [D, G] = C.useState(null);
  C.useEffect(() => {
    $M(() => {
      var Y, re, V, fe;
      (Y = T.current) == null || Y.dispatchEvent(new Event("input"));
      let he = (re = T.current) == null ? void 0 : re.selectionStart, ye = (V = T.current) == null ? void 0 : V.selectionEnd, O = (fe = T.current) == null ? void 0 : fe.selectionDirection;
      he !== null && ye !== null && (R(he), G(ye), Z.current.prev = [he, ye, O]);
    });
  }, [w, L]), C.useEffect(() => {
    N !== void 0 && w !== N && N.length < a && w.length === a && (l == null || l(w));
  }, [a, l, N, w]);
  let Q = EM({ inputRef: T, pwmAreaRef: U, pushPasswordManagerStrategy: u, isFocused: L }), ae = C.useCallback((Y) => {
    let re = Y.currentTarget.value.slice(0, a);
    if (re.length > 0 && E && !E.test(re)) {
      Y.preventDefault();
      return;
    }
    k(re);
  }, [a, k, E]), ne = C.useCallback(() => {
    var Y;
    if (T.current) {
      let re = Math.min(T.current.value.length, a - 1), V = T.current.value.length;
      (Y = T.current) == null || Y.setSelectionRange(re, V), R(re), G(V);
    }
    W(!0);
  }, [a]), ge = C.useCallback((Y) => {
    var re, V;
    let fe = T.current;
    if (!B.current.isIOS || !Y.clipboardData || !fe)
      return;
    let he = Y.clipboardData.getData("text/plain");
    Y.preventDefault();
    let ye = (re = T.current) == null ? void 0 : re.selectionStart, O = (V = T.current) == null ? void 0 : V.selectionEnd, z = (ye !== O ? w.slice(0, ye) + he + w.slice(O) : w.slice(0, ye) + he + w.slice(ye)).slice(0, a);
    if (z.length > 0 && E && !E.test(z))
      return;
    fe.value = z, k(z);
    let J = Math.min(z.length, a - 1), pe = z.length;
    fe.setSelectionRange(J, pe), R(J), G(pe);
  }, [a, k, E, w]), be = C.useMemo(() => ({ position: "relative", cursor: h.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [h.disabled]), oe = C.useMemo(() => ({ position: "absolute", inset: 0, width: Q.willPushPWMBadge ? `calc(100% + ${Q.PWM_BADGE_SPACE_WIDTH})` : "100%", height: "100%", display: "flex", textAlign: s, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [Q.PWM_BADGE_SPACE_WIDTH, Q.willPushPWMBadge, s]), ie = C.useMemo(() => C.createElement("input", bM(gM({ autoComplete: h.autoComplete || "one-time-code" }, h), { "data-input-otp": !0, "data-input-otp-mss": q, "data-input-otp-mse": D, inputMode: c, pattern: E == null ? void 0 : E.source, style: oe, maxLength: a, value: w, ref: T, onPaste: (Y) => {
    var re;
    ge(Y), (re = h.onPaste) == null || re.call(h, Y);
  }, onChange: ae, onMouseOver: (Y) => {
    var re;
    I(!0), (re = h.onMouseOver) == null || re.call(h, Y);
  }, onMouseLeave: (Y) => {
    var re;
    I(!1), (re = h.onMouseLeave) == null || re.call(h, Y);
  }, onFocus: (Y) => {
    var re;
    ne(), (re = h.onFocus) == null || re.call(h, Y);
  }, onBlur: (Y) => {
    var re;
    W(!1), (re = h.onBlur) == null || re.call(h, Y);
  } })), [ae, ne, ge, c, oe, a, D, q, h, E == null ? void 0 : E.source, w]), me = C.useMemo(() => d({ slots: Array.from({ length: a }).map((Y, re) => {
    let V = L && q !== null && D !== null && (q === D && re === q || re >= q && re < D), fe = w[re] !== void 0 ? w[re] : null;
    return { char: fe, isActive: V, hasFakeCaret: V && fe === null };
  }), isFocused: L, isHovering: !h.disabled && F }), [L, F, a, D, q, h.disabled, d, w]);
  return C.createElement(C.Fragment, null, m !== null && C.createElement("noscript", null, C.createElement("style", null, m)), C.createElement("div", { ref: K, "data-input-otp-container": !0, style: be, className: p }, C.createElement("div", { ref: U, style: { position: "absolute", top: 0, right: `calc(-1 * ${Q.PWM_BADGE_SPACE_WIDTH})`, bottom: 0, left: "100%", pointerEvents: "none", userSelect: "none", background: "transparent" } }), me, C.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, ie)));
});
k0.displayName = "Input";
function Jo(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var NM = `
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
const PM = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  k0,
  {
    ref: n,
    containerClassName: j("flex items-center gap-2", e),
    ...t
  }
));
PM.displayName = "InputOTP";
const TM = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: j("flex items-center", e), ...t }));
TM.displayName = "InputOTPGroup";
const OM = C.forwardRef(({ char: e, hasFakeCaret: t, isActive: n, className: r, ...o }, a) => /* @__PURE__ */ f.exports.jsxs(
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
OM.displayName = "InputOTPSlot";
const kM = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ f.exports.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ f.exports.jsx(Py, {}) }));
kM.displayName = "InputOTPSeparator";
const DM = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ f.exports.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
DM.displayName = "Breadcrumb";
const MM = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
MM.displayName = "BreadcrumbList";
const RM = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "li",
  {
    ref: n,
    className: j("inline-flex items-center gap-1.5", e),
    ...t
  }
));
RM.displayName = "BreadcrumbItem";
const jM = C.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? Zt : "a";
  return /* @__PURE__ */ f.exports.jsx(
    o,
    {
      ref: r,
      className: j("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
jM.displayName = "BreadcrumbLink";
const AM = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
AM.displayName = "BreadcrumbPage";
const IM = ({
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
    children: e ?? /* @__PURE__ */ f.exports.jsx(xr, {})
  }
);
IM.displayName = "BreadcrumbSeparator";
const LM = ({
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
      /* @__PURE__ */ f.exports.jsx(um, { className: "h-4 w-4" }),
      /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
LM.displayName = "BreadcrumbElipssis";
const FM = ({ className: e, ...t }) => /* @__PURE__ */ f.exports.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: j("mx-auto flex w-full justify-center", e),
    ...t
  }
);
FM.displayName = "Pagination";
const VM = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "ul",
  {
    ref: n,
    className: j("flex flex-row items-center gap-1", e),
    ...t
  }
));
VM.displayName = "PaginationContent";
const WM = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("li", { ref: n, className: j("", e), ...t }));
WM.displayName = "PaginationItem";
const Id = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ f.exports.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: j(
      bo({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
Id.displayName = "PaginationLink";
const UM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsxs(
  Id,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: j("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx($i, { className: "h-4 w-4" }),
      /* @__PURE__ */ f.exports.jsx("span", { children: "Previous" })
    ]
  }
);
UM.displayName = "PaginationPrevious";
const zM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsxs(
  Id,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: j("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { children: "Next" }),
      /* @__PURE__ */ f.exports.jsx(xr, { className: "h-4 w-4" })
    ]
  }
);
zM.displayName = "PaginationNext";
const BM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: j("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(um, { className: "h-4 w-4" }),
      /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
BM.displayName = "PaginationEllipsis";
const Oj = ({ children: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: "app-layout", children: e });
export {
  IR as Accordion,
  L6 as AccordionContent,
  A6 as AccordionItem,
  I6 as AccordionTrigger,
  RR as AlertDialog,
  l6 as AlertDialogAction,
  u6 as AlertDialogCancel,
  o6 as AlertDialogContent,
  c6 as AlertDialogDescription,
  s6 as AlertDialogFooter,
  a6 as AlertDialogHeader,
  i6 as AlertDialogTitle,
  jR as AlertDialogTrigger,
  Oj as AppLayout,
  NR as AspectRatio,
  fo as Avatar,
  po as AvatarFallback,
  Mr as AvatarImage,
  jt as Badge,
  _j as BottomNavigation,
  DM as Breadcrumb,
  LM as BreadcrumbEllipsis,
  RM as BreadcrumbItem,
  jM as BreadcrumbLink,
  MM as BreadcrumbList,
  AM as BreadcrumbPage,
  IM as BreadcrumbSeparator,
  Fe as Button,
  Ho as CI_TYPES,
  Uw as Calendar,
  jh as Card,
  CN as CardContent,
  _N as CardDescription,
  EN as CardFooter,
  $N as CardHeader,
  wN as CardTitle,
  I8 as Carousel,
  L8 as CarouselContent,
  F8 as CarouselItem,
  W8 as CarouselNext,
  V8 as CarouselPrevious,
  Fh as Checkbox,
  bj as CodeVerification,
  LR as Collapsible,
  VR as CollapsibleContent,
  FR as CollapsibleTrigger,
  RD as ComboBox,
  wj as ComboxCheckbox,
  Hn as Command,
  SR as CommandDialog,
  vr as CommandEmpty,
  dn as CommandGroup,
  mr as CommandInput,
  fn as CommandItem,
  ns as CommandList,
  Hi as CommandSeparator,
  FP as CommandShortcut,
  oR as ContextMenu,
  cE as ContextMenuCheckboxItem,
  sE as ContextMenuContent,
  sR as ContextMenuGroup,
  iE as ContextMenuItem,
  uE as ContextMenuLabel,
  iR as ContextMenuPortal,
  lR as ContextMenuRadioGroup,
  lE as ContextMenuRadioItem,
  dE as ContextMenuSeparator,
  fE as ContextMenuShortcut,
  cR as ContextMenuSub,
  aE as ContextMenuSubContent,
  oE as ContextMenuSubTrigger,
  aR as ContextMenuTrigger,
  Nj as D4TCardsList,
  d0 as D4TImage,
  vj as D4TTable,
  mh as Dialog,
  fR as DialogClose,
  qu as DialogContent,
  mS as DialogDescription,
  fS as DialogFooter,
  dS as DialogHeader,
  vh as DialogOverlay,
  uS as DialogPortal,
  pS as DialogTitle,
  dR as DialogTrigger,
  iM as Drawer,
  Tj as DrawerClose,
  lM as DrawerContent,
  pM as DrawerDescription,
  dM as DrawerFooter,
  uM as DrawerHeader,
  P0 as DrawerOverlay,
  cM as DrawerPortal,
  fM as DrawerTitle,
  Pj as DrawerTrigger,
  xR as DropdownMenu,
  c5 as DropdownMenuCheckboxItem,
  s5 as DropdownMenuContent,
  $R as DropdownMenuGroup,
  i5 as DropdownMenuItem,
  u5 as DropdownMenuLabel,
  wR as DropdownMenuPortal,
  CR as DropdownMenuRadioGroup,
  l5 as DropdownMenuRadioItem,
  d5 as DropdownMenuSeparator,
  f5 as DropdownMenuShortcut,
  _R as DropdownMenuSub,
  a5 as DropdownMenuSubContent,
  o5 as DropdownMenuSubTrigger,
  yR as DropdownMenuTrigger,
  rh as Form,
  Ka as FormControl,
  Ao as FormDescription,
  Yr as FormField,
  Cr as FormItem,
  Gr as FormLabel,
  DE as FormMessage,
  $j as GenericCombobox,
  hj as GenericSelect,
  zR as HoverCard,
  Z6 as HoverCardContent,
  BR as HoverCardTrigger,
  Zu as Input,
  PM as InputOTP,
  TM as InputOTPGroup,
  kM as InputOTPSeparator,
  OM as InputOTPSlot,
  pR as InputPID,
  ua as InputUI,
  On as Label,
  HR as LoaderDots,
  wO as Menubar,
  PO as MenubarCheckboxItem,
  SO as MenubarContent,
  GR as MenubarGroup,
  NO as MenubarItem,
  OO as MenubarLabel,
  YR as MenubarMenu,
  qR as MenubarPortal,
  XR as MenubarRadioGroup,
  TO as MenubarRadioItem,
  kO as MenubarSeparator,
  DO as MenubarShortcut,
  ZR as MenubarSub,
  EO as MenubarSubContent,
  CO as MenubarSubTrigger,
  _O as MenubarTrigger,
  yj as MultipleImages,
  Ux as NavLink,
  D7 as NavLinkNested,
  a4 as NavigationMenu,
  l4 as NavigationMenuContent,
  u4 as NavigationMenuIndicator,
  JR as NavigationMenuItem,
  ej as NavigationMenuLink,
  s4 as NavigationMenuList,
  c4 as NavigationMenuTrigger,
  Gb as NavigationMenuViewport,
  cc as PHONE_LINE_CODES,
  FM as Pagination,
  VM as PaginationContent,
  BM as PaginationEllipsis,
  WM as PaginationItem,
  Id as PaginationLink,
  zM as PaginationNext,
  UM as PaginationPrevious,
  zn as Popover,
  Cn as PopoverContent,
  Bn as PopoverTrigger,
  y4 as Progress,
  I4 as RadioGroup,
  L4 as RadioGroupItem,
  sT as ScrollArea,
  Dg as ScrollBar,
  ed as Select,
  Vi as SelectContent,
  bN as SelectGroup,
  Wi as SelectItem,
  xN as SelectLabel,
  yN as SelectSeparator,
  Fi as SelectTrigger,
  td as SelectValue,
  Qa as Separator,
  TR as Sheet,
  kR as SheetClose,
  lT as SheetContent,
  pT as SheetDescription,
  dT as SheetFooter,
  uT as SheetHeader,
  Mg as SheetOverlay,
  iT as SheetPortal,
  fT as SheetTitle,
  OR as SheetTrigger,
  uj as Sidebar,
  dj as SidebarContent,
  k7 as SidebarFooter,
  u7 as SidebarHeader,
  Pt as Skeleton,
  c3 as Slider,
  Jl as Spinner,
  gj as SwatchesPicker,
  e7 as Switch,
  jg as TableBody,
  vT as TableCaption,
  sd as TableCell,
  mT as TableFooter,
  Ag as TableHead,
  Rg as TableHeader,
  Gi as TableRow,
  ad as TableUI,
  aj as Tabs,
  $3 as TabsContent,
  x3 as TabsList,
  y3 as TabsTrigger,
  vR as TextArea,
  wh as TextareaUI,
  C3 as Toggle,
  O7 as ToggleTheme,
  Yn as Tooltip,
  En as TooltipContent,
  Kn as TooltipProvider,
  Gn as TooltipTrigger,
  xj as UploadImage,
  Jw as badgeVariants,
  bo as buttonVariants,
  Wo as camelToSnake,
  j as cn,
  As as convertBytes,
  ic as convertHexToRGBA,
  YM as fetcher,
  ZM as formatCI,
  Bf as formatCITypes,
  eR as formatCodePhoneLines,
  Cj as formatListPagination,
  fj as formatPagination,
  JM as formatPhone,
  QM as formatPhoneNumber,
  XM as formatRIF,
  jp as generateUUID,
  tl as generateUUIDToList,
  qM as getMultiOpacityColor,
  Ej as initialListPagination,
  pj as initialPagination,
  mj as insertColumn,
  Sj as insertColumnList,
  zD as listCamelToSnake,
  i4 as navigationMenuTriggerStyle,
  GM as simulateFetch,
  _3 as toggleVariants,
  ji as useFormField,
  tc as useSidebar
};
//# sourceMappingURL=index.es.js.map
