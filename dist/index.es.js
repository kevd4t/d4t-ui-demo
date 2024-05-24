import * as _ from "react";
import z, { useCallback as ge, forwardRef as I, Children as Pr, isValidElement as Ns, createElement as w, cloneElement as bl, Fragment as ln, createContext as Vt, useContext as at, useState as q, useEffect as Q, useLayoutEffect as ka, useRef as Z, useMemo as Kt, useReducer as xl, useImperativeHandle as u0 } from "react";
import * as f0 from "react-dom";
import Yf, { flushSync as Zf, createPortal as qf } from "react-dom";
var wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function p0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jc = { exports: {} }, Io = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lu;
function m0() {
  if (lu)
    return Io;
  lu = 1;
  var e = z, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, d) {
    var u, f = {}, p = null, m = null;
    d !== void 0 && (p = "" + d), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c)
      r.call(c, u) && !a.hasOwnProperty(u) && (f[u] = c[u]);
    if (i && i.defaultProps)
      for (u in c = i.defaultProps, c)
        f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: t, type: i, key: p, ref: m, props: f, _owner: o.current };
  }
  return Io.Fragment = n, Io.jsx = s, Io.jsxs = s, Io;
}
var Lo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var du;
function h0() {
  return du || (du = 1, process.env.NODE_ENV !== "production" && function() {
    var e = z, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(j) {
      if (j === null || typeof j != "object")
        return null;
      var oe = h && j[h] || j[v];
      return typeof oe == "function" ? oe : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(j) {
      {
        for (var oe = arguments.length, be = new Array(oe > 1 ? oe - 1 : 0), Oe = 1; Oe < oe; Oe++)
          be[Oe - 1] = arguments[Oe];
        y("error", j, be);
      }
    }
    function y(j, oe, be) {
      {
        var Oe = b.ReactDebugCurrentFrame, Ge = Oe.getStackAddendum();
        Ge !== "" && (oe += "%s", be = be.concat([Ge]));
        var et = be.map(function(We) {
          return String(We);
        });
        et.unshift("Warning: " + oe), Function.prototype.apply.call(console[j], console, et);
      }
    }
    var $ = !1, C = !1, P = !1, S = !1, N = !1, O;
    O = Symbol.for("react.module.reference");
    function F(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === r || j === a || N || j === o || j === d || j === u || S || j === m || $ || C || P || typeof j == "object" && j !== null && (j.$$typeof === p || j.$$typeof === f || j.$$typeof === s || j.$$typeof === i || j.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === O || j.getModuleId !== void 0));
    }
    function G(j, oe, be) {
      var Oe = j.displayName;
      if (Oe)
        return Oe;
      var Ge = oe.displayName || oe.name || "";
      return Ge !== "" ? be + "(" + Ge + ")" : be;
    }
    function A(j) {
      return j.displayName || "Context";
    }
    function B(j) {
      if (j == null)
        return null;
      if (typeof j.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof j == "function")
        return j.displayName || j.name || null;
      if (typeof j == "string")
        return j;
      switch (j) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case i:
            var oe = j;
            return A(oe) + ".Consumer";
          case s:
            var be = j;
            return A(be._context) + ".Provider";
          case c:
            return G(j, j.render, "ForwardRef");
          case f:
            var Oe = j.displayName || null;
            return Oe !== null ? Oe : B(j.type) || "Memo";
          case p: {
            var Ge = j, et = Ge._payload, We = Ge._init;
            try {
              return B(We(et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, M = 0, V, R, U, W, ne, me, Y;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function ye() {
      {
        if (M === 0) {
          V = console.log, R = console.info, U = console.warn, W = console.error, ne = console.group, me = console.groupCollapsed, Y = console.groupEnd;
          var j = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: j,
            log: j,
            warn: j,
            error: j,
            group: j,
            groupCollapsed: j,
            groupEnd: j
          });
        }
        M++;
      }
    }
    function fe() {
      {
        if (M--, M === 0) {
          var j = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, j, {
              value: V
            }),
            info: D({}, j, {
              value: R
            }),
            warn: D({}, j, {
              value: U
            }),
            error: D({}, j, {
              value: W
            }),
            group: D({}, j, {
              value: ne
            }),
            groupCollapsed: D({}, j, {
              value: me
            }),
            groupEnd: D({}, j, {
              value: Y
            })
          });
        }
        M < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = b.ReactCurrentDispatcher, re;
    function he(j, oe, be) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var Oe = Ge.stack.trim().match(/\n( *(at )?)/);
            re = Oe && Oe[1] || "";
          }
        return `
` + re + j;
      }
    }
    var Ne = !1, ae;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new de();
    }
    function H(j, oe) {
      if (!j || Ne)
        return "";
      {
        var be = ae.get(j);
        if (be !== void 0)
          return be;
      }
      var Oe;
      Ne = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var et;
      et = J.current, J.current = null, ye();
      try {
        if (oe) {
          var We = function() {
            throw Error();
          };
          if (Object.defineProperty(We.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(We, []);
            } catch (Rn) {
              Oe = Rn;
            }
            Reflect.construct(j, [], We);
          } else {
            try {
              We.call();
            } catch (Rn) {
              Oe = Rn;
            }
            j.call(We.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Rn) {
            Oe = Rn;
          }
          j();
        }
      } catch (Rn) {
        if (Rn && Oe && typeof Rn.stack == "string") {
          for (var Be = Rn.stack.split(`
`), Pt = Oe.stack.split(`
`), pt = Be.length - 1, gt = Pt.length - 1; pt >= 1 && gt >= 0 && Be[pt] !== Pt[gt]; )
            gt--;
          for (; pt >= 1 && gt >= 0; pt--, gt--)
            if (Be[pt] !== Pt[gt]) {
              if (pt !== 1 || gt !== 1)
                do
                  if (pt--, gt--, gt < 0 || Be[pt] !== Pt[gt]) {
                    var Zt = `
` + Be[pt].replace(" at new ", " at ");
                    return j.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", j.displayName)), typeof j == "function" && ae.set(j, Zt), Zt;
                  }
                while (pt >= 1 && gt >= 0);
              break;
            }
        }
      } finally {
        Ne = !1, J.current = et, fe(), Error.prepareStackTrace = Ge;
      }
      var Qr = j ? j.displayName || j.name : "", cu = Qr ? he(Qr) : "";
      return typeof j == "function" && ae.set(j, cu), cu;
    }
    function te(j, oe, be) {
      return H(j, !1);
    }
    function $e(j) {
      var oe = j.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function Pe(j, oe, be) {
      if (j == null)
        return "";
      if (typeof j == "function")
        return H(j, $e(j));
      if (typeof j == "string")
        return he(j);
      switch (j) {
        case d:
          return he("Suspense");
        case u:
          return he("SuspenseList");
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case c:
            return te(j.render);
          case f:
            return Pe(j.type, oe, be);
          case p: {
            var Oe = j, Ge = Oe._payload, et = Oe._init;
            try {
              return Pe(et(Ge), oe, be);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, ke = {}, E = b.ReactDebugCurrentFrame;
    function L(j) {
      if (j) {
        var oe = j._owner, be = Pe(j.type, j._source, oe ? oe.type : null);
        E.setExtraStackFrame(be);
      } else
        E.setExtraStackFrame(null);
    }
    function K(j, oe, be, Oe, Ge) {
      {
        var et = Function.call.bind(Ie);
        for (var We in j)
          if (et(j, We)) {
            var Be = void 0;
            try {
              if (typeof j[We] != "function") {
                var Pt = Error((Oe || "React class") + ": " + be + " type `" + We + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof j[We] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pt.name = "Invariant Violation", Pt;
              }
              Be = j[We](oe, We, Oe, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              Be = pt;
            }
            Be && !(Be instanceof Error) && (L(Ge), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Oe || "React class", be, We, typeof Be), L(null)), Be instanceof Error && !(Be.message in ke) && (ke[Be.message] = !0, L(Ge), x("Failed %s type: %s", be, Be.message), L(null));
          }
      }
    }
    var ce = Array.isArray;
    function ie(j) {
      return ce(j);
    }
    function ee(j) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, be = oe && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return be;
      }
    }
    function xe(j) {
      try {
        return De(j), !1;
      } catch {
        return !0;
      }
    }
    function De(j) {
      return "" + j;
    }
    function Ke(j) {
      if (xe(j))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ee(j)), De(j);
    }
    var Qe = b.ReactCurrentOwner, ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yt, _e, Ce;
    Ce = {};
    function Ve(j) {
      if (Ie.call(j, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(j, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return j.ref !== void 0;
    }
    function Le(j) {
      if (Ie.call(j, "key")) {
        var oe = Object.getOwnPropertyDescriptor(j, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return j.key !== void 0;
    }
    function Ze(j, oe) {
      if (typeof j.ref == "string" && Qe.current && oe && Qe.current.stateNode !== oe) {
        var be = B(Qe.current.type);
        Ce[be] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Qe.current.type), j.ref), Ce[be] = !0);
      }
    }
    function Je(j, oe) {
      {
        var be = function() {
          Yt || (Yt = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        be.isReactWarning = !0, Object.defineProperty(j, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function vt(j, oe) {
      {
        var be = function() {
          _e || (_e = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        be.isReactWarning = !0, Object.defineProperty(j, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var Qn = function(j, oe, be, Oe, Ge, et, We) {
      var Be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: j,
        key: oe,
        ref: be,
        props: We,
        // Record the component responsible for creating this element.
        _owner: et
      };
      return Be._store = {}, Object.defineProperty(Be._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Be, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.defineProperty(Be, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(Be.props), Object.freeze(Be)), Be;
    };
    function Jt(j, oe, be, Oe, Ge) {
      {
        var et, We = {}, Be = null, Pt = null;
        be !== void 0 && (Ke(be), Be = "" + be), Le(oe) && (Ke(oe.key), Be = "" + oe.key), Ve(oe) && (Pt = oe.ref, Ze(oe, Ge));
        for (et in oe)
          Ie.call(oe, et) && !ht.hasOwnProperty(et) && (We[et] = oe[et]);
        if (j && j.defaultProps) {
          var pt = j.defaultProps;
          for (et in pt)
            We[et] === void 0 && (We[et] = pt[et]);
        }
        if (Be || Pt) {
          var gt = typeof j == "function" ? j.displayName || j.name || "Unknown" : j;
          Be && Je(We, gt), Pt && vt(We, gt);
        }
        return Qn(j, Be, Pt, Ge, Oe, Qe.current, We);
      }
    }
    var _t = b.ReactCurrentOwner, xn = b.ReactDebugCurrentFrame;
    function Dn(j) {
      if (j) {
        var oe = j._owner, be = Pe(j.type, j._source, oe ? oe.type : null);
        xn.setExtraStackFrame(be);
      } else
        xn.setExtraStackFrame(null);
    }
    var Wi;
    Wi = !1;
    function Hi(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function ru() {
      {
        if (_t.current) {
          var j = B(_t.current.type);
          if (j)
            return `

Check the render method of \`` + j + "`.";
        }
        return "";
      }
    }
    function r0(j) {
      return "";
    }
    var ou = {};
    function o0(j) {
      {
        var oe = ru();
        if (!oe) {
          var be = typeof j == "string" ? j : j.displayName || j.name;
          be && (oe = `

Check the top-level render call using <` + be + ">.");
        }
        return oe;
      }
    }
    function au(j, oe) {
      {
        if (!j._store || j._store.validated || j.key != null)
          return;
        j._store.validated = !0;
        var be = o0(oe);
        if (ou[be])
          return;
        ou[be] = !0;
        var Oe = "";
        j && j._owner && j._owner !== _t.current && (Oe = " It was passed a child from " + B(j._owner.type) + "."), Dn(j), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, Oe), Dn(null);
      }
    }
    function su(j, oe) {
      {
        if (typeof j != "object")
          return;
        if (ie(j))
          for (var be = 0; be < j.length; be++) {
            var Oe = j[be];
            Hi(Oe) && au(Oe, oe);
          }
        else if (Hi(j))
          j._store && (j._store.validated = !0);
        else if (j) {
          var Ge = g(j);
          if (typeof Ge == "function" && Ge !== j.entries)
            for (var et = Ge.call(j), We; !(We = et.next()).done; )
              Hi(We.value) && au(We.value, oe);
        }
      }
    }
    function a0(j) {
      {
        var oe = j.type;
        if (oe == null || typeof oe == "string")
          return;
        var be;
        if (typeof oe == "function")
          be = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === f))
          be = oe.propTypes;
        else
          return;
        if (be) {
          var Oe = B(oe);
          K(be, j.props, "prop", Oe, j);
        } else if (oe.PropTypes !== void 0 && !Wi) {
          Wi = !0;
          var Ge = B(oe);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function s0(j) {
      {
        for (var oe = Object.keys(j.props), be = 0; be < oe.length; be++) {
          var Oe = oe[be];
          if (Oe !== "children" && Oe !== "key") {
            Dn(j), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Oe), Dn(null);
            break;
          }
        }
        j.ref !== null && (Dn(j), x("Invalid attribute `ref` supplied to `React.Fragment`."), Dn(null));
      }
    }
    function iu(j, oe, be, Oe, Ge, et) {
      {
        var We = F(j);
        if (!We) {
          var Be = "";
          (j === void 0 || typeof j == "object" && j !== null && Object.keys(j).length === 0) && (Be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pt = r0();
          Pt ? Be += Pt : Be += ru();
          var pt;
          j === null ? pt = "null" : ie(j) ? pt = "array" : j !== void 0 && j.$$typeof === t ? (pt = "<" + (B(j.type) || "Unknown") + " />", Be = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof j, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Be);
        }
        var gt = Jt(j, oe, be, Ge, et);
        if (gt == null)
          return gt;
        if (We) {
          var Zt = oe.children;
          if (Zt !== void 0)
            if (Oe)
              if (ie(Zt)) {
                for (var Qr = 0; Qr < Zt.length; Qr++)
                  su(Zt[Qr], j);
                Object.freeze && Object.freeze(Zt);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              su(Zt, j);
        }
        return j === r ? s0(gt) : a0(gt), gt;
      }
    }
    function i0(j, oe, be) {
      return iu(j, oe, be, !0);
    }
    function c0(j, oe, be) {
      return iu(j, oe, be, !1);
    }
    var l0 = c0, d0 = i0;
    Lo.Fragment = r, Lo.jsx = l0, Lo.jsxs = d0;
  }()), Lo;
}
process.env.NODE_ENV === "production" ? jc.exports = m0() : jc.exports = h0();
var l = jc.exports;
function k() {
  return k = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, k.apply(this, arguments);
}
function v0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ja(...e) {
  return (t) => e.forEach(
    (n) => v0(n, t)
  );
}
function Ee(...e) {
  return ge(ja(...e), e);
}
const dn = /* @__PURE__ */ I((e, t) => {
  const { children: n, ...r } = e, o = Pr.toArray(n), a = o.find(g0);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Pr.count(s) > 1 ? Pr.only(null) : /* @__PURE__ */ Ns(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(Mc, k({}, r, {
      ref: t
    }), /* @__PURE__ */ Ns(s) ? /* @__PURE__ */ bl(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(Mc, k({}, r, {
    ref: t
  }), n);
});
dn.displayName = "Slot";
const Mc = /* @__PURE__ */ I((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Ns(n) ? /* @__PURE__ */ bl(n, {
    ...b0(r, n.props),
    ref: t ? ja(t, n.ref) : n.ref
  }) : Pr.count(n) > 1 ? Pr.only(null) : null;
});
Mc.displayName = "SlotClone";
const yl = ({ children: e }) => /* @__PURE__ */ w(ln, null, e);
function g0(e) {
  return /* @__PURE__ */ Ns(e) && e.type === yl;
}
function b0(e, t) {
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
function Xf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Xf(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function x0() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Xf(e)) && (r && (r += " "), r += t);
  return r;
}
const uu = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, fu = x0, _o = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return fu(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const u = n == null ? void 0 : n[d], f = a == null ? void 0 : a[d];
    if (u === null)
      return null;
    const p = uu(u) || uu(f);
    return o[d][p];
  }), i = n && Object.entries(n).reduce((d, u) => {
    let [f, p] = u;
    return p === void 0 || (d[f] = p), d;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, u) => {
    let { class: f, className: p, ...m } = u;
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
      ...d,
      f,
      p
    ] : d;
  }, []);
  return fu(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function R7(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const A7 = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, Ui = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, I7 = (e) => {
  const t = Ui(e), n = Ui(e, 0.1), r = Ui(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, Ki = {
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
}, L7 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), F7 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), V7 = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), z7 = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, Es = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, B7 = () => [...Ki.DIGITAL, ...Ki.MOVILNET, ...Ki.MOVISTAR], Fo = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function Qf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Qf(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function y0() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Qf(e)) && (r && (r += " "), r += t);
  return r;
}
const wl = "-";
function w0(e) {
  const t = _0(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(s) {
    const i = s.split(wl);
    return i[0] === "" && i.length !== 1 && i.shift(), Jf(i, t) || $0(s);
  }
  function a(s, i) {
    const c = n[s] || [];
    return i && r[s] ? [...c, ...r[s]] : c;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  };
}
function Jf(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Jf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(wl);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}
const pu = /^\[(.+)\]$/;
function $0(e) {
  if (pu.test(e)) {
    const t = pu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function _0(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return S0(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    Tc(s, r, a, t);
  }), r;
}
function Tc(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : mu(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (C0(o)) {
        Tc(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Tc(s, mu(t, a), n, r);
    });
  });
}
function mu(e, t) {
  let n = e;
  return t.split(wl).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function C0(e) {
  return e.isThemeGetter;
}
function S0(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
    return [n, o];
  }) : e;
}
function N0(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(a, s) {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(a) {
      let s = n.get(a);
      if (s !== void 0)
        return s;
      if ((s = r.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      n.has(a) ? n.set(a, s) : o(a, s);
    }
  };
}
const ep = "!";
function E0(e) {
  const t = e.separator, n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    const i = [];
    let c = 0, d = 0, u;
    for (let v = 0; v < s.length; v++) {
      let g = s[v];
      if (c === 0) {
        if (g === r && (n || s.slice(v, v + o) === t)) {
          i.push(s.slice(d, v)), d = v + o;
          continue;
        }
        if (g === "/") {
          u = v;
          continue;
        }
      }
      g === "[" ? c++ : g === "]" && c--;
    }
    const f = i.length === 0 ? s : s.substring(d), p = f.startsWith(ep), m = p ? f.substring(1) : f, h = u && u > d ? u - d : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: h
    };
  };
}
function P0(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function k0(e) {
  return {
    cache: N0(e.cacheSize),
    splitModifiers: E0(e),
    ...w0(e)
  };
}
const j0 = /\s+/;
function M0(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(j0).map((s) => {
    const {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: d,
      maybePostfixModifierPosition: u
    } = n(s);
    let f = r(u ? d.substring(0, u) : d), p = !!u;
    if (!f) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (f = r(d), !f)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      p = !1;
    }
    const m = P0(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? m + ep : m,
      classGroupId: f,
      originalClassName: s,
      hasPostfixModifier: p
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: c,
      hasPostfixModifier: d
    } = s, u = i + c;
    return a.has(u) ? !1 : (a.add(u), o(c, d).forEach((f) => a.add(i + f)), !0);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function T0() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = tp(t)) && (r && (r += " "), r += n);
  return r;
}
function tp(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = tp(e[r])) && (n && (n += " "), n += t);
  return n;
}
function O0(e, ...t) {
  let n, r, o, a = s;
  function s(c) {
    const d = t.reduce((u, f) => f(u), e());
    return n = k0(d), r = n.cache.get, o = n.cache.set, a = i, i(c);
  }
  function i(c) {
    const d = r(c);
    if (d)
      return d;
    const u = M0(c, n);
    return o(c, u), u;
  }
  return function() {
    return a(T0.apply(null, arguments));
  };
}
function rt(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const np = /^\[(?:([a-z-]+):)?(.+)\]$/i, D0 = /^\d+\/\d+$/, R0 = /* @__PURE__ */ new Set(["px", "full", "screen"]), A0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, I0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, L0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, F0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, V0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function An(e) {
  return Nr(e) || R0.has(e) || D0.test(e);
}
function Jn(e) {
  return Co(e, "length", Y0);
}
function Nr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ja(e) {
  return Co(e, "number", Nr);
}
function Vo(e) {
  return !!e && Number.isInteger(Number(e));
}
function z0(e) {
  return e.endsWith("%") && Nr(e.slice(0, -1));
}
function Ae(e) {
  return np.test(e);
}
function er(e) {
  return A0.test(e);
}
const B0 = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function W0(e) {
  return Co(e, B0, rp);
}
function H0(e) {
  return Co(e, "position", rp);
}
const U0 = /* @__PURE__ */ new Set(["image", "url"]);
function K0(e) {
  return Co(e, U0, q0);
}
function G0(e) {
  return Co(e, "", Z0);
}
function zo() {
  return !0;
}
function Co(e, t, n) {
  const r = np.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function Y0(e) {
  return I0.test(e) && !L0.test(e);
}
function rp() {
  return !1;
}
function Z0(e) {
  return F0.test(e);
}
function q0(e) {
  return V0.test(e);
}
function X0() {
  const e = rt("colors"), t = rt("spacing"), n = rt("blur"), r = rt("brightness"), o = rt("borderColor"), a = rt("borderRadius"), s = rt("borderSpacing"), i = rt("borderWidth"), c = rt("contrast"), d = rt("grayscale"), u = rt("hueRotate"), f = rt("invert"), p = rt("gap"), m = rt("gradientColorStops"), h = rt("gradientColorStopPositions"), v = rt("inset"), g = rt("margin"), b = rt("opacity"), x = rt("padding"), y = rt("saturate"), $ = rt("scale"), C = rt("sepia"), P = rt("skew"), S = rt("space"), N = rt("translate"), O = () => ["auto", "contain", "none"], F = () => ["auto", "hidden", "clip", "visible", "scroll"], G = () => ["auto", Ae, t], A = () => [Ae, t], B = () => ["", An, Jn], D = () => ["auto", Nr, Ae], M = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], R = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], U = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], W = () => ["", "0", Ae], ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], me = () => [Nr, Ja], Y = () => [Nr, Ae];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [zo],
      spacing: [An, Jn],
      blur: ["none", "", er, Ae],
      brightness: me(),
      borderColor: [e],
      borderRadius: ["none", "", "full", er, Ae],
      borderSpacing: A(),
      borderWidth: B(),
      contrast: me(),
      grayscale: W(),
      hueRotate: Y(),
      invert: W(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [z0, Jn],
      inset: G(),
      margin: G(),
      opacity: me(),
      padding: A(),
      saturate: me(),
      scale: me(),
      sepia: W(),
      skew: Y(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Ae]
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
        "break-after": ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ne()
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
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
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
        object: [...M(), Ae]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: F()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": F()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": F()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: O()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": O()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": O()
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
        z: ["auto", Vo, Ae]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: G()
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
        flex: ["1", "auto", "initial", "none", Ae]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: W()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: W()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Vo, Ae]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [zo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Vo, Ae]
        }, Ae]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [zo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Vo, Ae]
        }, Ae]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
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
        "auto-cols": ["auto", "min", "max", "fr", Ae]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ae]
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
        justify: ["normal", ...U()]
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
        content: ["normal", ...U(), "baseline"]
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
        "place-content": [...U(), "baseline"]
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
        "space-x": [S]
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
        "space-y": [S]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ae, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ae, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ae, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [er]
        }, er]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ae, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ae, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ae, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ae, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", er, Jn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ja]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [zo]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ae]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Nr, Ja]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", An, Ae]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ae]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ae]
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
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", An, Jn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", An, Ae]
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
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ae]
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
        content: ["none", Ae]
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
        bg: [...M(), H0]
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
        bg: ["auto", "cover", "contain", W0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, K0]
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
        border: [...V(), "hidden"]
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
        divide: V()
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
        outline: ["", ...V()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [An, Ae]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [An, Jn]
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
        ring: B()
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
        "ring-offset": [An, Jn]
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
        shadow: ["", "inner", "none", er, G0]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [zo]
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
        "mix-blend": [...R(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": R()
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
        "drop-shadow": ["", "none", er, Ae]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
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
        invert: [f]
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
        sepia: [C]
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
        "backdrop-grayscale": [d]
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
        "backdrop-invert": [f]
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
        "backdrop-sepia": [C]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ae]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Y()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ae]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Y()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ae]
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
        scale: [$]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [$]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [$]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Vo, Ae]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ae]
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
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ae]
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
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
        "will-change": ["auto", "scroll", "contents", "transform", Ae]
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
        stroke: [An, Jn, Ja]
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
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
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
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
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
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const Q0 = /* @__PURE__ */ O0(X0);
function T(...e) {
  return Q0(y0(e));
}
const $l = ({ className: e }) => /* @__PURE__ */ l.jsx("div", { className: T(`spinner h-4 w-4 ${e}`) }), mo = _o(
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
), ze = _.forwardRef(
  ({ className: e, isLoading: t, children: n, variant: r, size: o, asChild: a = !1, ...s }, i) => {
    const c = a ? dn : "button";
    return /* @__PURE__ */ l.jsx(
      c,
      {
        className: T(mo({ variant: r, size: o, className: e })),
        ref: i,
        ...s,
        children: t ? /* @__PURE__ */ l.jsx($l, {}) : n
      }
    );
  }
);
ze.displayName = "Button";
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), op = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ex = {
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
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tx = I(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, c) => w(
    "svg",
    {
      ref: c,
      ...ex,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: op("lucide", o),
      ...i
    },
    [
      ...s.map(([d, u]) => w(d, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = (e, t) => {
  const n = I(
    ({ className: r, ...o }, a) => w(tx, {
      ref: a,
      iconNode: t,
      className: op(`lucide-${J0(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = st("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = st("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = st("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = st("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = st("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vr = st("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hu = st("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = st("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const si = st("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ox = st("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = st("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = st("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = st("EyeOff", [
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
    { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = st("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = st("ImageOff", [
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
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _l = st("ImagePlus", [
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "31hg93" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = st("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = st("PanelLeftClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sx = st("PanelLeftOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = st("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = st("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = st("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = st("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ix = st("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ii = st("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Ue(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Gt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function kt(e, t) {
  const n = Ue(e);
  return isNaN(t) ? Gt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function un(e, t) {
  const n = Ue(e);
  if (isNaN(t))
    return Gt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = Gt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const Cl = 6048e5, cx = 864e5;
let lx = {};
function Ma() {
  return lx;
}
function Sn(e, t) {
  var i, c, d, u;
  const n = Ma(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = Ue(e), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Tr(e) {
  return Sn(e, { weekStartsOn: 1 });
}
function dp(e) {
  const t = Ue(e), n = t.getFullYear(), r = Gt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Tr(r), a = Gt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = Tr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function ho(e) {
  const t = Ue(e);
  return t.setHours(0, 0, 0, 0), t;
}
function js(e) {
  const t = Ue(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function wn(e, t) {
  const n = ho(e), r = ho(t), o = +n - js(n), a = +r - js(r);
  return Math.round((o - a) / cx);
}
function dx(e) {
  const t = dp(e), n = Gt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Tr(n);
}
function Dc(e, t) {
  const n = t * 7;
  return kt(e, n);
}
function ux(e, t) {
  return un(e, t * 12);
}
function fx(e) {
  let t;
  return e.forEach(function(n) {
    const r = Ue(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function px(e) {
  let t;
  return e.forEach((n) => {
    const r = Ue(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Lt(e, t) {
  const n = ho(e), r = ho(t);
  return +n == +r;
}
function Sl(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function mx(e) {
  if (!Sl(e) && typeof e != "number")
    return !1;
  const t = Ue(e);
  return !isNaN(Number(t));
}
function ea(e, t) {
  const n = Ue(e), r = Ue(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function hx(e, t, n) {
  const r = Sn(e, n), o = Sn(t, n), a = +r - js(r), s = +o - js(o);
  return Math.round((a - s) / Cl);
}
function Nl(e) {
  const t = Ue(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Ft(e) {
  const t = Ue(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function up(e) {
  const t = Ue(e), n = Gt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function El(e, t) {
  var i, c, d, u;
  const n = Ma(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = Ue(e), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function fp(e) {
  return El(e, { weekStartsOn: 1 });
}
const vx = {
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
}, gx = (e, t, n) => {
  let r;
  const o = vx[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Yi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const bx = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, xx = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, yx = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, wx = {
  date: Yi({
    formats: bx,
    defaultWidth: "full"
  }),
  time: Yi({
    formats: xx,
    defaultWidth: "full"
  }),
  dateTime: Yi({
    formats: yx,
    defaultWidth: "full"
  })
}, $x = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, _x = (e, t, n, r) => $x[e];
function Bo(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const Cx = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Sx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Nx = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Ex = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Px = {
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
}, kx = {
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
}, jx = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Mx = {
  ordinalNumber: jx,
  era: Bo({
    values: Cx,
    defaultWidth: "wide"
  }),
  quarter: Bo({
    values: Sx,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Bo({
    values: Nx,
    defaultWidth: "wide"
  }),
  day: Bo({
    values: Ex,
    defaultWidth: "wide"
  }),
  dayPeriod: Bo({
    values: Px,
    defaultWidth: "wide",
    formattingValues: kx,
    defaultFormattingWidth: "wide"
  })
};
function Wo(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Ox(i, (f) => f.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Tx(i, (f) => f.test(s))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(c) : c, d = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(d)
    ) : d;
    const u = t.slice(s.length);
    return { value: d, rest: u };
  };
}
function Tx(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Ox(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Dx(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r)
      return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const Rx = /^(\d+)(th|st|nd|rd)?/i, Ax = /\d+/i, Ix = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Lx = {
  any: [/^b/i, /^(a|c)/i]
}, Fx = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Vx = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, zx = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Bx = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Wx = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Hx = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ux = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Kx = {
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
}, Gx = {
  ordinalNumber: Dx({
    matchPattern: Rx,
    parsePattern: Ax,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Wo({
    matchPatterns: Ix,
    defaultMatchWidth: "wide",
    parsePatterns: Lx,
    defaultParseWidth: "any"
  }),
  quarter: Wo({
    matchPatterns: Fx,
    defaultMatchWidth: "wide",
    parsePatterns: Vx,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Wo({
    matchPatterns: zx,
    defaultMatchWidth: "wide",
    parsePatterns: Bx,
    defaultParseWidth: "any"
  }),
  day: Wo({
    matchPatterns: Wx,
    defaultMatchWidth: "wide",
    parsePatterns: Hx,
    defaultParseWidth: "any"
  }),
  dayPeriod: Wo({
    matchPatterns: Ux,
    defaultMatchWidth: "any",
    parsePatterns: Kx,
    defaultParseWidth: "any"
  })
}, pp = {
  code: "en-US",
  formatDistance: gx,
  formatLong: wx,
  formatRelative: _x,
  localize: Mx,
  match: Gx,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Yx(e) {
  const t = Ue(e);
  return wn(t, up(t)) + 1;
}
function mp(e) {
  const t = Ue(e), n = +Tr(t) - +dx(t);
  return Math.round(n / Cl) + 1;
}
function hp(e, t) {
  var u, f, p, m;
  const n = Ue(e), r = n.getFullYear(), o = Ma(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((m = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = Gt(e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = Sn(s, t), c = Gt(e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const d = Sn(c, t);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= d.getTime() ? r : r - 1;
}
function Zx(e, t) {
  var i, c, d, u;
  const n = Ma(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = hp(e, t), a = Gt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Sn(a, t);
}
function vp(e, t) {
  const n = Ue(e), r = +Sn(n, t) - +Zx(n, t);
  return Math.round(r / Cl) + 1;
}
function qe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const tr = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return qe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : qe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return qe(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return qe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return qe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return qe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return qe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return qe(o, t.length);
  }
}, Jr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, vu = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return tr.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = hp(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return qe(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : qe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = dp(e);
    return qe(n, t.length);
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
  u: function(e, t) {
    const n = e.getFullYear();
    return qe(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return qe(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return qe(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return tr.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return qe(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = vp(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : qe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = mp(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : qe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : tr.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Yx(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : qe(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return qe(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return qe(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return qe(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = Jr.noon : r === 0 ? o = Jr.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = Jr.evening : r >= 12 ? o = Jr.afternoon : r >= 4 ? o = Jr.morning : o = Jr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return tr.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : tr.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : qe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : qe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : tr.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : tr.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return tr.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return bu(r);
      case "XXXX":
      case "XX":
        return Cr(r);
      case "XXXXX":
      case "XXX":
      default:
        return Cr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return bu(r);
      case "xxxx":
      case "xx":
        return Cr(r);
      case "xxxxx":
      case "xxx":
      default:
        return Cr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + gu(r, ":");
      case "OOOO":
      default:
        return "GMT" + Cr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + gu(r, ":");
      case "zzzz":
      default:
        return "GMT" + Cr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return qe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return qe(r, t.length);
  }
};
function gu(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + qe(a, 2);
}
function bu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + qe(Math.abs(e) / 60, 2) : Cr(e, t);
}
function Cr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = qe(Math.trunc(r / 60), 2), a = qe(r % 60, 2);
  return n + o + t + a;
}
const xu = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, gp = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, qx = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return xu(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", xu(r, t)).replace("{{time}}", gp(o, t));
}, Xx = {
  p: gp,
  P: qx
}, Qx = /^D+$/, Jx = /^Y+$/, ey = ["D", "DD", "YY", "YYYY"];
function ty(e) {
  return Qx.test(e);
}
function ny(e) {
  return Jx.test(e);
}
function ry(e, t, n) {
  const r = oy(e, t, n);
  if (console.warn(r), ey.includes(e))
    throw new RangeError(r);
}
function oy(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ay = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, sy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, iy = /^'([^]*?)'?$/, cy = /''/g, ly = /[a-zA-Z]/;
function Br(e, t, n) {
  var u, f, p, m, h, v, g, b;
  const r = Ma(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? pp, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((m = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((b = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : b.weekStartsOn) ?? 0, i = Ue(e);
  if (!mx(i))
    throw new RangeError("Invalid time value");
  let c = t.match(sy).map((x) => {
    const y = x[0];
    if (y === "p" || y === "P") {
      const $ = Xx[y];
      return $(x, o.formatLong);
    }
    return x;
  }).join("").match(ay).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const y = x[0];
    if (y === "'")
      return { isToken: !1, value: dy(x) };
    if (vu[y])
      return { isToken: !0, value: x };
    if (y.match(ly))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: x };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return c.map((x) => {
    if (!x.isToken)
      return x.value;
    const y = x.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && ny(y) || !(n != null && n.useAdditionalDayOfYearTokens) && ty(y)) && ry(y, t, String(e));
    const $ = vu[y[0]];
    return $(i, y, o.localize, d);
  }).join("");
}
function dy(e) {
  const t = e.match(iy);
  return t ? t[1].replace(cy, "'") : e;
}
function uy(e) {
  const t = Ue(e), n = t.getFullYear(), r = t.getMonth(), o = Gt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function fy(e) {
  return Math.trunc(+Ue(e) / 1e3);
}
function py(e) {
  const t = Ue(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function my(e, t) {
  return hx(
    py(e),
    Ft(e),
    t
  ) + 1;
}
function Rc(e, t) {
  const n = Ue(e), r = Ue(t);
  return n.getTime() > r.getTime();
}
function bp(e, t) {
  const n = Ue(e), r = Ue(t);
  return +n < +r;
}
function Pl(e, t) {
  const n = Ue(e), r = Ue(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function hy(e, t) {
  const n = Ue(e), r = Ue(t);
  return n.getFullYear() === r.getFullYear();
}
function Zi(e, t) {
  return kt(e, -t);
}
function qi(e, t) {
  const n = Ue(e), r = n.getFullYear(), o = n.getDate(), a = Gt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const s = uy(a);
  return n.setMonth(t, Math.min(o, s)), n;
}
function yu(e, t) {
  const n = Ue(e);
  return isNaN(+n) ? Gt(e, NaN) : (n.setFullYear(t), n);
}
var Me = function() {
  return Me = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Me.apply(this, arguments);
};
function vy(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function xp(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Ta(e) {
  return e.mode === "multiple";
}
function Oa(e) {
  return e.mode === "range";
}
function ci(e) {
  return e.mode === "single";
}
var gy = {
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
function by(e, t) {
  return Br(e, "LLLL y", t);
}
function xy(e, t) {
  return Br(e, "d", t);
}
function yy(e, t) {
  return Br(e, "LLLL", t);
}
function wy(e) {
  return "".concat(e);
}
function $y(e, t) {
  return Br(e, "cccccc", t);
}
function _y(e, t) {
  return Br(e, "yyyy", t);
}
var Cy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: by,
  formatDay: xy,
  formatMonthCaption: yy,
  formatWeekNumber: wy,
  formatWeekdayName: $y,
  formatYearCaption: _y
}), Sy = function(e, t, n) {
  return Br(e, "do MMMM (EEEE)", n);
}, Ny = function() {
  return "Month: ";
}, Ey = function() {
  return "Go to next month";
}, Py = function() {
  return "Go to previous month";
}, ky = function(e, t) {
  return Br(e, "cccc", t);
}, jy = function(e) {
  return "Week n. ".concat(e);
}, My = function() {
  return "Year: ";
}, Ty = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Sy,
  labelMonthDropdown: Ny,
  labelNext: Ey,
  labelPrevious: Py,
  labelWeekNumber: jy,
  labelWeekday: ky,
  labelYearDropdown: My
});
function Oy() {
  var e = "buttons", t = gy, n = pp, r = {}, o = {}, a = 1, s = {}, i = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Cy,
    labels: Ty,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function Dy(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Ft(r) : t && (a = new Date(t, 0, 1)), o ? s = Nl(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? ho(a) : void 0,
    toDate: s ? ho(s) : void 0
  };
}
var yp = Vt(void 0);
function Ry(e) {
  var t, n = e.initialProps, r = Oy(), o = Dy(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (ci(n) || Ta(n) || Oa(n)) && (c = n.onSelect);
  var d = Me(Me(Me({}, r), n), { captionLayout: i, classNames: Me(Me({}, r.classNames), n.classNames), components: Me({}, n.components), formatters: Me(Me({}, r.formatters), n.formatters), fromDate: a, labels: Me(Me({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Me(Me({}, r.modifiers), n.modifiers), modifiersClassNames: Me(Me({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Me(Me({}, r.styles), n.styles), toDate: s });
  return l.jsx(yp.Provider, { value: d, children: e.children });
}
function nt() {
  var e = at(yp);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function wp(e) {
  var t = nt(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return l.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function Ay(e) {
  return l.jsx("svg", Me({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: l.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function $p(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, d = nt(), u = (n = (t = d.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Ay;
  return l.jsxs("div", { className: i, style: c, children: [l.jsx("span", { className: d.classNames.vhidden, children: e["aria-label"] }), l.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: d.classNames.dropdown, style: d.styles.dropdown, value: o, onChange: r, children: a }), l.jsxs("div", { className: d.classNames.caption_label, style: d.styles.caption_label, "aria-hidden": "true", children: [s, l.jsx(u, { className: d.classNames.dropdown_icon, style: d.styles.dropdown_icon })] })] });
}
function Iy(e) {
  var t, n = nt(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, d = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return l.jsx(l.Fragment, {});
  if (!o)
    return l.jsx(l.Fragment, {});
  var f = [];
  if (hy(r, o))
    for (var p = Ft(r), m = r.getMonth(); m <= o.getMonth(); m++)
      f.push(qi(p, m));
  else
    for (var p = Ft(/* @__PURE__ */ new Date()), m = 0; m <= 11; m++)
      f.push(qi(p, m));
  var h = function(g) {
    var b = Number(g.target.value), x = qi(Ft(e.displayMonth), b);
    e.onChange(x);
  }, v = (t = d == null ? void 0 : d.Dropdown) !== null && t !== void 0 ? t : $p;
  return l.jsx(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }), children: f.map(function(g) {
    return l.jsx("option", { value: g.getMonth(), children: i(g, { locale: s }) }, g.getMonth());
  }) });
}
function Ly(e) {
  var t, n = e.displayMonth, r = nt(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, d = r.components, u = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, p = [];
  if (!o)
    return l.jsx(l.Fragment, {});
  if (!a)
    return l.jsx(l.Fragment, {});
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    p.push(yu(up(/* @__PURE__ */ new Date()), v));
  var g = function(x) {
    var y = yu(Ft(n), Number(x.target.value));
    e.onChange(y);
  }, b = (t = d == null ? void 0 : d.Dropdown) !== null && t !== void 0 ? t : $p;
  return l.jsx(b, { name: "years", "aria-label": f(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }), children: p.map(function(x) {
    return l.jsx("option", { value: x.getFullYear(), children: u(x, { locale: s }) }, x.getFullYear());
  }) });
}
function Fy(e, t) {
  var n = q(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Vy(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && ea(a, o) < 0) {
    var d = -1 * (c - 1);
    o = un(a, d);
  }
  return s && ea(o, s) < 0 && (o = s), Ft(o);
}
function zy() {
  var e = nt(), t = Vy(e), n = Fy(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Ft(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function By(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Ft(e), a = Ft(un(o, r)), s = ea(a, o), i = [], c = 0; c < s; c++) {
    var d = un(o, c);
    i.push(d);
  }
  return n && (i = i.reverse()), i;
}
function Wy(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Ft(e);
    if (!n)
      return un(i, s);
    var c = ea(n, e);
    if (!(c < a))
      return un(i, s);
  }
}
function Hy(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Ft(e);
    if (!n)
      return un(i, -s);
    var c = ea(i, n);
    if (!(c <= 0))
      return un(i, -s);
  }
}
var _p = Vt(void 0);
function Uy(e) {
  var t = nt(), n = zy(), r = n[0], o = n[1], a = By(r, t), s = Wy(r, t), i = Hy(r, t), c = function(f) {
    return a.some(function(p) {
      return Pl(f, p);
    });
  }, d = function(f, p) {
    c(f) || (p && bp(f, p) ? o(un(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: d,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return l.jsx(_p.Provider, { value: u, children: e.children });
}
function Da() {
  var e = at(_p);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function wu(e) {
  var t, n = nt(), r = n.classNames, o = n.styles, a = n.components, s = Da().goToMonth, i = function(u) {
    s(un(u, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : wp, d = l.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return l.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [l.jsx("div", { className: r.vhidden, children: d }), l.jsx(Iy, { onChange: i, displayMonth: e.displayMonth }), l.jsx(Ly, { onChange: i, displayMonth: e.displayMonth })] });
}
function Ky(e) {
  return l.jsx("svg", Me({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Gy(e) {
  return l.jsx("svg", Me({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Ms = I(function(e, t) {
  var n = nt(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Me(Me({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), l.jsx("button", Me({}, e, { ref: t, type: "button", className: s, style: i }));
});
function Yy(e) {
  var t, n, r = nt(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, d = c.labelPrevious, u = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return l.jsx(l.Fragment, {});
  var p = d(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : Gy, b = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : Ky;
  return l.jsxs("div", { className: s.nav, style: i.nav, children: [!e.hidePrevious && l.jsx(Ms, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? l.jsx(g, { className: s.nav_icon, style: i.nav_icon }) : l.jsx(b, { className: s.nav_icon, style: i.nav_icon }) }), !e.hideNext && l.jsx(Ms, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? l.jsx(b, { className: s.nav_icon, style: i.nav_icon }) : l.jsx(g, { className: s.nav_icon, style: i.nav_icon }) })] });
}
function $u(e) {
  var t = nt().numberOfMonths, n = Da(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return Pl(e.displayMonth, h);
  }), c = i === 0, d = i === s.length - 1, u = t > 1 && (c || !d), f = t > 1 && (d || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return l.jsx(Yy, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function Zy(e) {
  var t, n = nt(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : wp, d;
  return o ? d = l.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? d = l.jsx(wu, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? d = l.jsxs(l.Fragment, { children: [l.jsx(wu, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), l.jsx($u, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : d = l.jsxs(l.Fragment, { children: [l.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l.jsx($u, { displayMonth: e.displayMonth, id: e.id })] }), l.jsx("div", { className: r.caption, style: a.caption, children: d });
}
function qy(e) {
  var t = nt(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? l.jsx("tfoot", { className: o, style: r.tfoot, children: l.jsx("tr", { children: l.jsx("td", { colSpan: 8, children: n }) }) }) : l.jsx(l.Fragment, {});
}
function Xy(e, t, n) {
  for (var r = n ? Tr(/* @__PURE__ */ new Date()) : Sn(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = kt(r, a);
    o.push(s);
  }
  return o;
}
function Qy() {
  var e = nt(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, d = Xy(o, a, s);
  return l.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && l.jsx("td", { style: n.head_cell, className: t.head_cell }), d.map(function(u, f) {
    return l.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }), children: i(u, { locale: o }) }, f);
  })] });
}
function Jy() {
  var e, t = nt(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : Qy;
  return l.jsx("thead", { style: r.head, className: n.head, children: l.jsx(a, {}) });
}
function e1(e) {
  var t = nt(), n = t.locale, r = t.formatters.formatDay;
  return l.jsx(l.Fragment, { children: r(e.date, { locale: n }) });
}
var kl = Vt(void 0);
function t1(e) {
  if (!Ta(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return l.jsx(kl.Provider, { value: t, children: e.children });
  }
  return l.jsx(n1, { initialProps: e.initialProps, children: e.children });
}
function n1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(d, u, f) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, d, u, f);
    var h = !!(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = !!(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? xp([], r) : [];
        if (u.selected) {
          var b = g.findIndex(function(x) {
            return Lt(d, x);
          });
          g.splice(b, 1);
        } else
          g.push(d);
        (m = t.onSelect) === null || m === void 0 || m.call(t, g, d, u, f);
      }
    }
  }, i = {
    disabled: []
  };
  r && i.disabled.push(function(d) {
    var u = a && r.length > a - 1, f = r.some(function(p) {
      return Lt(p, d);
    });
    return !!(u && !f);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return l.jsx(kl.Provider, { value: c, children: n });
}
function jl() {
  var e = at(kl);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function r1(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Lt(o, e) && Lt(r, e) ? void 0 : Lt(o, e) ? { from: o, to: void 0 } : Lt(r, e) ? void 0 : Rc(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? Rc(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? bp(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Ml = Vt(void 0);
function o1(e) {
  if (!Oa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return l.jsx(Ml.Provider, { value: t, children: e.children });
  }
  return l.jsx(a1, { initialProps: e.initialProps, children: e.children });
}
function a1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, d = function(m, h, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var x = r1(m, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, x, m, h, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (u.range_start = [a], s ? (u.range_end = [s], Lt(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]) : s && (u.range_start = [s], u.range_end = [s]), i && (a && !s && u.disabled.push({
    after: Zi(a, i - 1),
    before: kt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: kt(a, i - 1)
  }), !a && s && u.disabled.push({
    after: Zi(s, i - 1),
    before: kt(s, i - 1)
  })), c) {
    if (a && !s && (u.disabled.push({
      before: kt(a, -c + 1)
    }), u.disabled.push({
      after: kt(a, c - 1)
    })), a && s) {
      var f = wn(s, a) + 1, p = c - f;
      u.disabled.push({
        before: Zi(a, p)
      }), u.disabled.push({
        after: kt(s, p)
      });
    }
    !a && s && (u.disabled.push({
      before: kt(s, -c + 1)
    }), u.disabled.push({
      after: kt(s, c - 1)
    }));
  }
  return l.jsx(Ml.Provider, { value: { selected: r, onDayClick: d, modifiers: u }, children: n });
}
function Tl() {
  var e = at(Ml);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function bs(e) {
  return Array.isArray(e) ? xp([], e) : e !== void 0 ? [e] : [];
}
function s1(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = bs(o);
  }), t;
}
var fn;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(fn || (fn = {}));
var i1 = fn.Selected, In = fn.Disabled, c1 = fn.Hidden, l1 = fn.Today, Xi = fn.RangeEnd, Qi = fn.RangeMiddle, Ji = fn.RangeStart, d1 = fn.Outside;
function u1(e, t, n) {
  var r, o = (r = {}, r[i1] = bs(e.selected), r[In] = bs(e.disabled), r[c1] = bs(e.hidden), r[l1] = [e.today], r[Xi] = [], r[Qi] = [], r[Ji] = [], r[d1] = [], r);
  return e.fromDate && o[In].push({ before: e.fromDate }), e.toDate && o[In].push({ after: e.toDate }), Ta(e) ? o[In] = o[In].concat(t.modifiers[In]) : Oa(e) && (o[In] = o[In].concat(n.modifiers[In]), o[Ji] = n.modifiers[Ji], o[Qi] = n.modifiers[Qi], o[Xi] = n.modifiers[Xi]), o;
}
var Cp = Vt(void 0);
function f1(e) {
  var t = nt(), n = jl(), r = Tl(), o = u1(t, n, r), a = s1(t.modifiers), s = Me(Me({}, o), a);
  return l.jsx(Cp.Provider, { value: s, children: e.children });
}
function Sp() {
  var e = at(Cp);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function p1(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function m1(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function h1(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function v1(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function g1(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function b1(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = wn(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var s = wn(e, r) >= 0 && wn(o, e) >= 0;
    return s;
  }
  return o ? Lt(o, e) : r ? Lt(r, e) : !1;
}
function x1(e) {
  return Sl(e);
}
function y1(e) {
  return Array.isArray(e) && e.every(Sl);
}
function w1(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (x1(n))
      return Lt(e, n);
    if (y1(n))
      return n.includes(e);
    if (m1(n))
      return b1(e, n);
    if (g1(n))
      return n.dayOfWeek.includes(e.getDay());
    if (p1(n)) {
      var r = wn(n.before, e), o = wn(n.after, e), a = r > 0, s = o < 0, i = Rc(n.before, n.after);
      return i ? s && a : a || s;
    }
    return h1(n) ? wn(e, n.after) > 0 : v1(n) ? wn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Ol(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return w1(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Pl(e, n) && (o.outside = !0), o;
}
function $1(e, t) {
  for (var n = Ft(e[0]), r = Nl(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = Ol(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = kt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = kt(s, 1);
  }
  return a || o;
}
var _1 = 365;
function Np(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, d = o.fromDate, u = o.toDate, f = o.locale, p = {
    day: kt,
    week: Dc,
    month: un,
    year: ux,
    startOfWeek: function(g) {
      return o.ISOWeek ? Tr(g) : Sn(g, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? fp(g) : El(g, { locale: f, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && d ? m = fx([d, m]) : r === "after" && u && (m = px([u, m]));
  var h = !0;
  if (a) {
    var v = Ol(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > _1 ? i.lastFocused : Np(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Me(Me({}, i), { count: i.count + 1 })
  });
}
var Ep = Vt(void 0);
function C1(e) {
  var t = Da(), n = Sp(), r = q(), o = r[0], a = r[1], s = q(), i = s[0], c = s[1], d = $1(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : d, f = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = nt(), h = function(g, b) {
    if (o) {
      var x = Np(o, {
        moveBy: g,
        direction: b,
        context: m,
        modifiers: n
      });
      Lt(o, x) || (t.goToDate(x, o), p(x));
    }
  }, v = {
    focusedDay: o,
    focusTarget: u,
    blur: f,
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
  return l.jsx(Ep.Provider, { value: v, children: e.children });
}
function Dl() {
  var e = at(Ep);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function S1(e, t) {
  var n = Sp(), r = Ol(e, n, t);
  return r;
}
var Rl = Vt(void 0);
function N1(e) {
  if (!ci(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return l.jsx(Rl.Provider, { value: t, children: e.children });
  }
  return l.jsx(E1, { initialProps: e.initialProps, children: e.children });
}
function E1(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, i) {
    var c, d, u;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, s, i), s.selected && !t.required) {
      (d = t.onSelect) === null || d === void 0 || d.call(t, void 0, a, s, i);
      return;
    }
    (u = t.onSelect) === null || u === void 0 || u.call(t, a, a, s, i);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return l.jsx(Rl.Provider, { value: o, children: n });
}
function Pp() {
  var e = at(Rl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function P1(e, t) {
  var n = nt(), r = Pp(), o = jl(), a = Tl(), s = Dl(), i = s.focusDayAfter, c = s.focusDayBefore, d = s.focusWeekAfter, u = s.focusWeekBefore, f = s.blur, p = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, x = s.focusEndOfWeek, y = function(R) {
    var U, W, ne, me;
    ci(n) ? (U = r.onDayClick) === null || U === void 0 || U.call(r, e, t, R) : Ta(n) ? (W = o.onDayClick) === null || W === void 0 || W.call(o, e, t, R) : Oa(n) ? (ne = a.onDayClick) === null || ne === void 0 || ne.call(a, e, t, R) : (me = n.onDayClick) === null || me === void 0 || me.call(n, e, t, R);
  }, $ = function(R) {
    var U;
    p(e), (U = n.onDayFocus) === null || U === void 0 || U.call(n, e, t, R);
  }, C = function(R) {
    var U;
    f(), (U = n.onDayBlur) === null || U === void 0 || U.call(n, e, t, R);
  }, P = function(R) {
    var U;
    (U = n.onDayMouseEnter) === null || U === void 0 || U.call(n, e, t, R);
  }, S = function(R) {
    var U;
    (U = n.onDayMouseLeave) === null || U === void 0 || U.call(n, e, t, R);
  }, N = function(R) {
    var U;
    (U = n.onDayPointerEnter) === null || U === void 0 || U.call(n, e, t, R);
  }, O = function(R) {
    var U;
    (U = n.onDayPointerLeave) === null || U === void 0 || U.call(n, e, t, R);
  }, F = function(R) {
    var U;
    (U = n.onDayTouchCancel) === null || U === void 0 || U.call(n, e, t, R);
  }, G = function(R) {
    var U;
    (U = n.onDayTouchEnd) === null || U === void 0 || U.call(n, e, t, R);
  }, A = function(R) {
    var U;
    (U = n.onDayTouchMove) === null || U === void 0 || U.call(n, e, t, R);
  }, B = function(R) {
    var U;
    (U = n.onDayTouchStart) === null || U === void 0 || U.call(n, e, t, R);
  }, D = function(R) {
    var U;
    (U = n.onDayKeyUp) === null || U === void 0 || U.call(n, e, t, R);
  }, M = function(R) {
    var U;
    switch (R.key) {
      case "ArrowLeft":
        R.preventDefault(), R.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        R.preventDefault(), R.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        R.preventDefault(), R.stopPropagation(), d();
        break;
      case "ArrowUp":
        R.preventDefault(), R.stopPropagation(), u();
        break;
      case "PageUp":
        R.preventDefault(), R.stopPropagation(), R.shiftKey ? v() : m();
        break;
      case "PageDown":
        R.preventDefault(), R.stopPropagation(), R.shiftKey ? g() : h();
        break;
      case "Home":
        R.preventDefault(), R.stopPropagation(), b();
        break;
      case "End":
        R.preventDefault(), R.stopPropagation(), x();
        break;
    }
    (U = n.onDayKeyDown) === null || U === void 0 || U.call(n, e, t, R);
  }, V = {
    onClick: y,
    onFocus: $,
    onBlur: C,
    onKeyDown: M,
    onKeyUp: D,
    onMouseEnter: P,
    onMouseLeave: S,
    onPointerEnter: N,
    onPointerLeave: O,
    onTouchCancel: F,
    onTouchEnd: G,
    onTouchMove: A,
    onTouchStart: B
  };
  return V;
}
function k1() {
  var e = nt(), t = Pp(), n = jl(), r = Tl(), o = ci(e) ? t.selected : Ta(e) ? n.selected : Oa(e) ? r.selected : void 0;
  return o;
}
function j1(e) {
  return Object.values(fn).includes(e);
}
function M1(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (j1(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function T1(e, t) {
  var n = Me({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Me(Me({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function O1(e, t, n) {
  var r, o, a, s = nt(), i = Dl(), c = S1(e, t), d = P1(e, c), u = k1(), f = !!(s.onDayClick || s.mode !== "default");
  Q(function() {
    var P;
    c.outside || i.focusedDay && f && Lt(i.focusedDay, e) && ((P = n.current) === null || P === void 0 || P.focus());
  }, [
    i.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var p = M1(s, c).join(" "), m = T1(s, c), h = !!(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : e1, g = l.jsx(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, x = i.focusTarget && Lt(i.focusTarget, e) && !c.outside, y = i.focusedDay && Lt(i.focusedDay, e), $ = Me(Me(Me({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = y || x ? 0 : -1, r)), d), C = {
    isButton: f,
    isHidden: h,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: $,
    divProps: b
  };
  return C;
}
function D1(e) {
  var t = Z(null), n = O1(e.date, e.displayMonth, t);
  return n.isHidden ? l.jsx("div", { role: "gridcell" }) : n.isButton ? l.jsx(Ms, Me({ name: "day", ref: t }, n.buttonProps)) : l.jsx("div", Me({}, n.divProps));
}
function R1(e) {
  var t = e.number, n = e.dates, r = nt(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, d = r.formatters.formatWeekNumber, u = d(Number(t), { locale: i });
  if (!o)
    return l.jsx("span", { className: s.weeknumber, style: a.weeknumber, children: u });
  var f = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return l.jsx(Ms, { name: "week-number", "aria-label": f, className: s.weeknumber, style: a.weeknumber, onClick: p, children: u });
}
function A1(e) {
  var t, n, r = nt(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : D1, d = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : R1, u;
  return s && (u = l.jsx("td", { className: a.cell, style: o.cell, children: l.jsx(d, { number: e.weekNumber, dates: e.dates }) })), l.jsxs("tr", { className: a.row, style: o.row, children: [u, e.dates.map(function(f) {
    return l.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: l.jsx(c, { displayMonth: e.displayMonth, date: f }) }, fy(f));
  })] });
}
function _u(e, t, n) {
  for (var r = n != null && n.ISOWeek ? fp(t) : El(t, n), o = n != null && n.ISOWeek ? Tr(e) : Sn(e, n), a = wn(r, o), s = [], i = 0; i <= a; i++)
    s.push(kt(o, i));
  var c = s.reduce(function(d, u) {
    var f = n != null && n.ISOWeek ? mp(u) : vp(u, n), p = d.find(function(m) {
      return m.weekNumber === f;
    });
    return p ? (p.dates.push(u), d) : (d.push({
      weekNumber: f,
      dates: [u]
    }), d);
  }, []);
  return c;
}
function I1(e, t) {
  var n = _u(Ft(e), Nl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = my(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = Dc(a, 6 - r), i = _u(Dc(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function L1(e) {
  var t, n, r, o = nt(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, d = o.fixedWeeks, u = o.components, f = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, h = I1(e.displayMonth, {
    useFixedWeeks: !!d,
    ISOWeek: m,
    locale: a,
    weekStartsOn: f,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : Jy, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : A1, b = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : qy;
  return l.jsxs("table", { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && l.jsx(v, {}), l.jsx("tbody", { className: s.tbody, style: i.tbody, children: h.map(function(x) {
    return l.jsx(g, { displayMonth: e.displayMonth, dates: x.dates, weekNumber: x.weekNumber }, x.weekNumber);
  }) }), l.jsx(b, { displayMonth: e.displayMonth })] });
}
function F1() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var V1 = F1() ? ka : Q, ec = !1, z1 = 0;
function Cu() {
  return "react-day-picker-".concat(++z1);
}
function B1(e) {
  var t, n = e ?? (ec ? Cu() : null), r = q(n), o = r[0], a = r[1];
  return V1(function() {
    o === null && a(Cu());
  }, []), Q(function() {
    ec === !1 && (ec = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function W1(e) {
  var t, n, r = nt(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = Da().displayMonths, d = B1(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [a.month], p = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (f.push(a.caption_start), p = Me(Me({}, p), s.caption_start)), h && (f.push(a.caption_end), p = Me(Me({}, p), s.caption_end)), v && (f.push(a.caption_between), p = Me(Me({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : Zy;
  return l.jsxs("div", { className: f.join(" "), style: p, children: [l.jsx(g, { id: d, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l.jsx(L1, { id: u, "aria-labelledby": d, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function H1(e) {
  var t = nt(), n = t.classNames, r = t.styles;
  return l.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function U1(e) {
  var t, n, r = e.initialProps, o = nt(), a = Dl(), s = Da(), i = q(!1), c = i[0], d = i[1];
  Q(function() {
    o.initialFocus && a.focusTarget && (c || (a.focus(a.focusTarget), d(!0)));
  }, [
    o.initialFocus,
    c,
    a.focus,
    a.focusTarget,
    a
  ]);
  var u = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && u.push(o.classNames.multiple_months), o.showWeekNumber && u.push(o.classNames.with_weeknumber);
  var f = Me(Me({}, o.styles.root), o.style), p = Object.keys(r).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, v) {
    var g;
    return Me(Me({}, h), (g = {}, g[v] = r[v], g));
  }, {}), m = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : H1;
  return l.jsx("div", Me({ className: u.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: l.jsx(m, { children: s.displayMonths.map(function(h, v) {
    return l.jsx(W1, { displayIndex: v, displayMonth: h }, v);
  }) }) }));
}
function K1(e) {
  var t = e.children, n = vy(e, ["children"]);
  return l.jsx(Ry, { initialProps: n, children: l.jsx(Uy, { children: l.jsx(N1, { initialProps: n, children: l.jsx(t1, { initialProps: n, children: l.jsx(o1, { initialProps: n, children: l.jsx(f1, { children: l.jsx(C1, { children: t }) }) }) }) }) }) });
}
function G1(e) {
  return l.jsx(K1, Me({}, e, { children: l.jsx(U1, { initialProps: e }) }));
}
function Y1({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ l.jsx(
    G1,
    {
      showOutsideDays: n,
      className: T("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: T(
          mo({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: T(
          mo({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ l.jsx(ai, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ l.jsx(vr, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
Y1.displayName = "Calendar";
function Z1(e, t) {
  const n = /* @__PURE__ */ Vt(t);
  function r(a) {
    const { children: s, ...i } = a, c = Kt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ w(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = at(n);
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
function it(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ Vt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function d(f) {
      const { scope: p, children: m, ...h } = f, v = (p == null ? void 0 : p[e][c]) || i, g = Kt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ w(v.Provider, {
        value: g
      }, m);
    }
    function u(f, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = at(m);
      if (h)
        return h;
      if (s !== void 0)
        return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return d.displayName = a + "Provider", [
      d,
      u
    ];
  }
  const o = () => {
    const a = n.map((s) => /* @__PURE__ */ Vt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return Kt(
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
    q1(o, ...t)
  ];
}
function q1(...e) {
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
      const s = r.reduce((i, { useScope: c, scopeName: d }) => {
        const f = c(a)[`__scope${d}`];
        return {
          ...i,
          ...f
        };
      }, {});
      return Kt(
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
function Xe(e) {
  const t = Z(e);
  return Q(() => {
    t.current = e;
  }), Kt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const $t = globalThis != null && globalThis.document ? ka : () => {
}, X1 = [
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
], le = X1.reduce((e, t) => {
  const n = /* @__PURE__ */ I((r, o) => {
    const { asChild: a, ...s } = r, i = a ? dn : t;
    return Q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, k({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Ts(e, t) {
  e && Zf(
    () => e.dispatchEvent(t)
  );
}
const kp = "Avatar", [Q1, W7] = it(kp), [J1, jp] = Q1(kp), ew = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = q("idle");
  return /* @__PURE__ */ w(J1, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ w(le.span, k({}, r, {
    ref: t
  })));
}), tw = "AvatarImage", nw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = jp(tw, n), i = aw(r), c = Xe((d) => {
    o(d), s.onImageLoadingStatusChange(d);
  });
  return $t(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ w(le.img, k({}, a, {
    ref: t,
    src: r
  })) : null;
}), rw = "AvatarFallback", ow = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = jp(rw, n), [s, i] = q(r === void 0);
  return Q(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ w(le.span, k({}, o, {
    ref: t
  })) : null;
});
function aw(e) {
  const [t, n] = q("idle");
  return $t(() => {
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
const Mp = ew, Tp = nw, Op = ow, co = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Mp,
  {
    ref: n,
    className: T(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
co.displayName = Mp.displayName;
const kr = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Tp,
  {
    ref: n,
    className: T("aspect-square h-full w-full", e),
    ...t
  }
));
kr.displayName = Tp.displayName;
const lo = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Op,
  {
    ref: n,
    className: T(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
lo.displayName = Op.displayName;
const sw = _o(
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
function Tt({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ l.jsx("div", { className: T(sw({ variant: t }), e), ...n });
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function gr(e) {
  const t = e + "CollectionProvider", [n, r] = it(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: h, children: v } = m, g = z.useRef(null), b = z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ z.createElement(o, {
      scope: h,
      itemMap: b,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ z.forwardRef((m, h) => {
    const { scope: v, children: g } = m, b = a(i, v), x = Ee(h, b.collectionRef);
    return /* @__PURE__ */ z.createElement(dn, {
      ref: x
    }, g);
  }), d = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ z.forwardRef((m, h) => {
    const { scope: v, children: g, ...b } = m, x = z.useRef(null), y = Ee(h, x), $ = a(d, v);
    return z.useEffect(() => ($.itemMap.set(x, {
      ref: x,
      ...b
    }), () => void $.itemMap.delete(x))), /* @__PURE__ */ z.createElement(dn, {
      [u]: "",
      ref: y
    }, g);
  });
  function p(m) {
    const h = a(e + "CollectionConsumer", m);
    return z.useCallback(() => {
      const g = h.collectionRef.current;
      if (!g)
        return [];
      const b = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(h.itemMap.values()).sort(
        ($, C) => b.indexOf($.ref.current) - b.indexOf(C.ref.current)
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
      ItemSlot: f
    },
    p,
    r
  ];
}
const iw = /* @__PURE__ */ Vt(void 0);
function Mn(e) {
  const t = at(iw);
  return e || t || "ltr";
}
function cw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Xe(e);
  Q(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Ac = "dismissableLayer.update", lw = "dismissableLayer.pointerDownOutside", dw = "dismissableLayer.focusOutside";
let Su;
const uw = /* @__PURE__ */ Vt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Wr = /* @__PURE__ */ I((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...d } = e, u = at(uw), [f, p] = q(null), m = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = q({}), v = Ee(
    t,
    (N) => p(N)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), x = g.indexOf(b), y = f ? g.indexOf(f) : -1, $ = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= x, P = fw((N) => {
    const O = N.target, F = [
      ...u.branches
    ].some(
      (G) => G.contains(O)
    );
    !C || F || (a == null || a(N), i == null || i(N), N.defaultPrevented || c == null || c());
  }, m), S = pw((N) => {
    const O = N.target;
    [
      ...u.branches
    ].some(
      (G) => G.contains(O)
    ) || (s == null || s(N), i == null || i(N), N.defaultPrevented || c == null || c());
  }, m);
  return cw((N) => {
    y === u.layers.size - 1 && (o == null || o(N), !N.defaultPrevented && c && (N.preventDefault(), c()));
  }, m), Q(() => {
    if (f)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Su = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Nu(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Su);
      };
  }, [
    f,
    m,
    r,
    u
  ]), Q(() => () => {
    f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Nu());
  }, [
    f,
    u
  ]), Q(() => {
    const N = () => h({});
    return document.addEventListener(Ac, N), () => document.removeEventListener(Ac, N);
  }, []), /* @__PURE__ */ w(le.div, k({}, d, {
    ref: v,
    style: {
      pointerEvents: $ ? C ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: X(e.onFocusCapture, S.onFocusCapture),
    onBlurCapture: X(e.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: X(e.onPointerDownCapture, P.onPointerDownCapture)
  }));
});
function fw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Xe(e), r = Z(!1), o = Z(() => {
  });
  return Q(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let d = function() {
          Dp(lw, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: i
        };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = d, t.addEventListener("click", o.current, {
          once: !0
        })) : d();
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
function pw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Xe(e), r = Z(!1);
  return Q(() => {
    const o = (a) => {
      a.target && !r.current && Dp(dw, n, {
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
function Nu() {
  const e = new CustomEvent(Ac);
  document.dispatchEvent(e);
}
function Dp(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Ts(o, a) : o.dispatchEvent(a);
}
let tc = 0;
function li() {
  Q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Eu()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Eu()), tc++, () => {
      tc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), tc--;
    };
  }, []);
}
function Eu() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const nc = "focusScope.autoFocusOnMount", rc = "focusScope.autoFocusOnUnmount", Pu = {
  bubbles: !1,
  cancelable: !0
}, di = /* @__PURE__ */ I((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = q(null), d = Xe(o), u = Xe(a), f = Z(null), p = Ee(
    t,
    (v) => c(v)
  ), m = Z({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  Q(() => {
    if (r) {
      let v = function(y) {
        if (m.paused || !i)
          return;
        const $ = y.target;
        i.contains($) ? f.current = $ : or(f.current, {
          select: !0
        });
      }, g = function(y) {
        if (m.paused || !i)
          return;
        const $ = y.relatedTarget;
        $ !== null && (i.contains($) || or(f.current, {
          select: !0
        }));
      }, b = function(y) {
        if (document.activeElement === document.body)
          for (const C of y)
            C.removedNodes.length > 0 && or(i);
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
  ]), Q(() => {
    if (i) {
      ju.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(nc, Pu);
        i.addEventListener(nc, d), i.dispatchEvent(b), b.defaultPrevented || (mw(xw(Rp(i)), {
          select: !0
        }), document.activeElement === v && or(i));
      }
      return () => {
        i.removeEventListener(nc, d), setTimeout(() => {
          const b = new CustomEvent(rc, Pu);
          i.addEventListener(rc, u), i.dispatchEvent(b), b.defaultPrevented || or(v ?? document.body, {
            select: !0
          }), i.removeEventListener(rc, u), ju.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    d,
    u,
    m
  ]);
  const h = ge((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const x = v.currentTarget, [y, $] = hw(x);
      y && $ ? !v.shiftKey && b === $ ? (v.preventDefault(), n && or(y, {
        select: !0
      })) : v.shiftKey && b === y && (v.preventDefault(), n && or($, {
        select: !0
      })) : b === x && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ w(le.div, k({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function mw(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (or(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function hw(e) {
  const t = Rp(e), n = ku(t, e), r = ku(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Rp(e) {
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
function ku(e, t) {
  for (const n of e)
    if (!vw(n, {
      upTo: t
    }))
      return n;
}
function vw(e, { upTo: t }) {
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
function gw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function or(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && gw(e) && t && e.select();
  }
}
const ju = bw();
function bw() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Mu(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Mu(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Mu(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function xw(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const yw = _.useId || (() => {
});
let ww = 0;
function mt(e) {
  const [t, n] = _.useState(yw());
  return $t(() => {
    n(
      (r) => r ?? String(ww++)
    );
  }, [
    e
  ]), t ? `radix-${t}` : "";
}
const $w = ["top", "right", "bottom", "left"], $n = Math.min, Wt = Math.max, Os = Math.round, ns = Math.floor, ir = (e) => ({
  x: e,
  y: e
}), _w = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Cw = {
  start: "end",
  end: "start"
};
function Ic(e, t, n) {
  return Wt(e, $n(t, n));
}
function Bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wn(e) {
  return e.split("-")[0];
}
function So(e) {
  return e.split("-")[1];
}
function Al(e) {
  return e === "x" ? "y" : "x";
}
function Il(e) {
  return e === "y" ? "height" : "width";
}
function No(e) {
  return ["top", "bottom"].includes(Wn(e)) ? "y" : "x";
}
function Ll(e) {
  return Al(No(e));
}
function Sw(e, t, n) {
  n === void 0 && (n = !1);
  const r = So(e), o = Ll(e), a = Il(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Ds(s)), [s, Ds(s)];
}
function Nw(e) {
  const t = Ds(e);
  return [Lc(e), t, Lc(t)];
}
function Lc(e) {
  return e.replace(/start|end/g, (t) => Cw[t]);
}
function Ew(e, t, n) {
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
function Pw(e, t, n, r) {
  const o = So(e);
  let a = Ew(Wn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Lc)))), a;
}
function Ds(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _w[t]);
}
function kw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ap(e) {
  return typeof e != "number" ? kw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Rs(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Tu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = No(t), s = Ll(t), i = Il(s), c = Wn(t), d = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
        y: f
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (So(t)) {
    case "start":
      m[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const jw = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: f
  } = Tu(d, r, c), p = r, m = {}, h = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: b
    } = i[v], {
      x,
      y,
      data: $,
      reset: C
    } = await b({
      x: u,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: m,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = x ?? u, f = y ?? f, m = {
      ...m,
      [g]: {
        ...m[g],
        ...$
      }
    }, C && h <= 50 && (h++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: u,
      y: f
    } = Tu(d, p, c)), v = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: m
  };
};
async function ta(e, t) {
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
    boundary: d = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = Bn(t, e), h = Ap(m), g = i[p ? f === "floating" ? "reference" : "floating" : f], b = Rs(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: c
  })), x = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), $ = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Rs(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: y,
    strategy: c
  }) : x);
  return {
    top: (b.top - C.top + h.top) / $.y,
    bottom: (C.bottom - b.bottom + h.bottom) / $.y,
    left: (b.left - C.left + h.left) / $.x,
    right: (C.right - b.right + h.right) / $.x
  };
}
const Mw = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: c
    } = t, {
      element: d,
      padding: u = 0
    } = Bn(e, t) || {};
    if (d == null)
      return {};
    const f = Ap(u), p = {
      x: n,
      y: r
    }, m = Ll(o), h = Il(m), v = await s.getDimensions(d), g = m === "y", b = g ? "top" : "left", x = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", $ = a.reference[h] + a.reference[m] - p[m] - a.floating[h], C = p[m] - a.reference[m], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let S = P ? P[y] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(P))) && (S = i.floating[y] || a.floating[h]);
    const N = $ / 2 - C / 2, O = S / 2 - v[h] / 2 - 1, F = $n(f[b], O), G = $n(f[x], O), A = F, B = S - v[h] - G, D = S / 2 - v[h] / 2 + N, M = Ic(A, D, B), V = !c.arrow && So(o) != null && D !== M && a.reference[h] / 2 - (D < A ? F : G) - v[h] / 2 < 0, R = V ? D < A ? D - A : D - B : 0;
    return {
      [m]: p[m] + R,
      data: {
        [m]: M,
        centerOffset: D - M - R,
        ...V && {
          alignmentOffset: R
        }
      },
      reset: V
    };
  }
}), Tw = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: c,
        elements: d
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: v = !0,
        ...g
      } = Bn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const b = Wn(o), x = Wn(i) === i, y = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), $ = p || (x || !v ? [Ds(i)] : Nw(i));
      !p && h !== "none" && $.push(...Pw(i, v, h, y));
      const C = [i, ...$], P = await ta(t, g), S = [];
      let N = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && S.push(P[b]), f) {
        const A = Sw(o, s, y);
        S.push(P[A[0]], P[A[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: S
      }], !S.every((A) => A <= 0)) {
        var O, F;
        const A = (((O = a.flip) == null ? void 0 : O.index) || 0) + 1, B = C[A];
        if (B)
          return {
            data: {
              index: A,
              overflows: N
            },
            reset: {
              placement: B
            }
          };
        let D = (F = N.filter((M) => M.overflows[0] <= 0).sort((M, V) => M.overflows[1] - V.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!D)
          switch (m) {
            case "bestFit": {
              var G;
              const M = (G = N.map((V) => [V.placement, V.overflows.filter((R) => R > 0).reduce((R, U) => R + U, 0)]).sort((V, R) => V[1] - R[1])[0]) == null ? void 0 : G[0];
              M && (D = M);
              break;
            }
            case "initialPlacement":
              D = i;
              break;
          }
        if (o !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
function Ou(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Du(e) {
  return $w.some((t) => e[t] >= 0);
}
const Ow = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Bn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await ta(t, {
            ...o,
            elementContext: "reference"
          }), s = Ou(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Du(s)
            }
          };
        }
        case "escaped": {
          const a = await ta(t, {
            ...o,
            altBoundary: !0
          }), s = Ou(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Du(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Dw(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Wn(n), i = So(n), c = No(n) === "y", d = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, f = Bn(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return i && typeof h == "number" && (m = i === "end" ? h * -1 : h), c ? {
    x: m * u,
    y: p * d
  } : {
    x: p * d,
    y: m * u
  };
}
const Rw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: i
      } = t, c = await Dw(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Aw = function(e) {
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
      } = Bn(e, t), d = {
        x: n,
        y: r
      }, u = await ta(t, c), f = No(Wn(o)), p = Al(f);
      let m = d[p], h = d[f];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = m + u[g], y = m - u[b];
        m = Ic(x, m, y);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = h + u[g], y = h - u[b];
        h = Ic(x, h, y);
      }
      const v = i.fn({
        ...t,
        [p]: m,
        [f]: h
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
}, Iw = function(e) {
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
        crossAxis: d = !0
      } = Bn(e, t), u = {
        x: n,
        y: r
      }, f = No(o), p = Al(f);
      let m = u[p], h = u[f];
      const v = Bn(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const y = p === "y" ? "height" : "width", $ = a.reference[p] - a.floating[y] + g.mainAxis, C = a.reference[p] + a.reference[y] - g.mainAxis;
        m < $ ? m = $ : m > C && (m = C);
      }
      if (d) {
        var b, x;
        const y = p === "y" ? "width" : "height", $ = ["top", "left"].includes(Wn(o)), C = a.reference[f] - a.floating[y] + ($ && ((b = s.offset) == null ? void 0 : b[f]) || 0) + ($ ? 0 : g.crossAxis), P = a.reference[f] + a.reference[y] + ($ ? 0 : ((x = s.offset) == null ? void 0 : x[f]) || 0) - ($ ? g.crossAxis : 0);
        h < C ? h = C : h > P && (h = P);
      }
      return {
        [p]: m,
        [f]: h
      };
    }
  };
}, Lw = function(e) {
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
      } = Bn(e, t), c = await ta(t, i), d = Wn(n), u = So(n), f = No(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let h, v;
      d === "top" || d === "bottom" ? (h = d, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d, h = u === "end" ? "top" : "bottom");
      const g = m - c.top - c.bottom, b = p - c.left - c.right, x = $n(m - c[h], g), y = $n(p - c[v], b), $ = !t.middlewareData.shift;
      let C = x, P = y;
      if (f ? P = u || $ ? $n(y, b) : b : C = u || $ ? $n(x, g) : g, $ && !u) {
        const N = Wt(c.left, 0), O = Wt(c.right, 0), F = Wt(c.top, 0), G = Wt(c.bottom, 0);
        f ? P = p - 2 * (N !== 0 || O !== 0 ? N + O : Wt(c.left, c.right)) : C = m - 2 * (F !== 0 || G !== 0 ? F + G : Wt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: P,
        availableHeight: C
      });
      const S = await o.getDimensions(a.floating);
      return p !== S.width || m !== S.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Eo(e) {
  return Ip(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ht(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yn(e) {
  var t;
  return (t = (Ip(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ip(e) {
  return e instanceof Node || e instanceof Ht(e).Node;
}
function Nn(e) {
  return e instanceof Element || e instanceof Ht(e).Element;
}
function En(e) {
  return e instanceof HTMLElement || e instanceof Ht(e).HTMLElement;
}
function Ru(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ht(e).ShadowRoot;
}
function Ra(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = pn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Fw(e) {
  return ["table", "td", "th"].includes(Eo(e));
}
function Fl(e) {
  const t = Vl(), n = pn(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Vw(e) {
  let t = cr(e);
  for (; En(t) && !vo(t); ) {
    if (Fl(t))
      return t;
    t = cr(t);
  }
  return null;
}
function Vl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function vo(e) {
  return ["html", "body", "#document"].includes(Eo(e));
}
function pn(e) {
  return Ht(e).getComputedStyle(e);
}
function ui(e) {
  return Nn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function cr(e) {
  if (Eo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ru(e) && e.host || // Fallback.
    Yn(e)
  );
  return Ru(t) ? t.host : t;
}
function Lp(e) {
  const t = cr(e);
  return vo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : En(t) && Ra(t) ? t : Lp(t);
}
function na(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Lp(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ht(o);
  return a ? t.concat(s, s.visualViewport || [], Ra(o) ? o : [], s.frameElement && n ? na(s.frameElement) : []) : t.concat(o, na(o, [], n));
}
function Fp(e) {
  const t = pn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = En(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Os(n) !== a || Os(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function zl(e) {
  return Nn(e) ? e : e.contextElement;
}
function uo(e) {
  const t = zl(e);
  if (!En(t))
    return ir(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Fp(t);
  let s = (a ? Os(n.width) : n.width) / r, i = (a ? Os(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const zw = /* @__PURE__ */ ir(0);
function Vp(e) {
  const t = Ht(e);
  return !Vl() || !t.visualViewport ? zw : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Bw(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ht(e) ? !1 : t;
}
function Or(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = zl(e);
  let s = ir(1);
  t && (r ? Nn(r) && (s = uo(r)) : s = uo(e));
  const i = Bw(a, n, r) ? Vp(a) : ir(0);
  let c = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (a) {
    const p = Ht(a), m = r && Nn(r) ? Ht(r) : r;
    let h = p, v = h.frameElement;
    for (; v && r && m !== h; ) {
      const g = uo(v), b = v.getBoundingClientRect(), x = pn(v), y = b.left + (v.clientLeft + parseFloat(x.paddingLeft)) * g.x, $ = b.top + (v.clientTop + parseFloat(x.paddingTop)) * g.y;
      c *= g.x, d *= g.y, u *= g.x, f *= g.y, c += y, d += $, h = Ht(v), v = h.frameElement;
    }
  }
  return Rs({
    width: u,
    height: f,
    x: c,
    y: d
  });
}
const Ww = [":popover-open", ":modal"];
function Bl(e) {
  return Ww.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Hw(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = Yn(r), i = t ? Bl(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ir(1);
  const u = ir(0), f = En(r);
  if ((f || !f && !a) && ((Eo(r) !== "body" || Ra(s)) && (c = ui(r)), En(r))) {
    const p = Or(r);
    d = uo(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - c.scrollLeft * d.x + u.x,
    y: n.y * d.y - c.scrollTop * d.y + u.y
  };
}
function Uw(e) {
  return Array.from(e.getClientRects());
}
function zp(e) {
  return Or(Yn(e)).left + ui(e).scrollLeft;
}
function Kw(e) {
  const t = Yn(e), n = ui(e), r = e.ownerDocument.body, o = Wt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Wt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + zp(e);
  const i = -n.scrollTop;
  return pn(r).direction === "rtl" && (s += Wt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function Gw(e, t) {
  const n = Ht(e), r = Yn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const d = Vl();
    (!d || d && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function Yw(e, t) {
  const n = Or(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = En(e) ? uo(e) : ir(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: d
  };
}
function Au(e, t, n) {
  let r;
  if (t === "viewport")
    r = Gw(e, n);
  else if (t === "document")
    r = Kw(Yn(e));
  else if (Nn(t))
    r = Yw(t, n);
  else {
    const o = Vp(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Rs(r);
}
function Bp(e, t) {
  const n = cr(e);
  return n === t || !Nn(n) || vo(n) ? !1 : pn(n).position === "fixed" || Bp(n, t);
}
function Zw(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = na(e, [], !1).filter((i) => Nn(i) && Eo(i) !== "body"), o = null;
  const a = pn(e).position === "fixed";
  let s = a ? cr(e) : e;
  for (; Nn(s) && !vo(s); ) {
    const i = pn(s), c = Fl(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ra(s) && !c && Bp(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = cr(s);
  }
  return t.set(e, r), r;
}
function qw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Bl(t) ? [] : Zw(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((d, u) => {
    const f = Au(t, u, o);
    return d.top = Wt(f.top, d.top), d.right = $n(f.right, d.right), d.bottom = $n(f.bottom, d.bottom), d.left = Wt(f.left, d.left), d;
  }, Au(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Xw(e) {
  const {
    width: t,
    height: n
  } = Fp(e);
  return {
    width: t,
    height: n
  };
}
function Qw(e, t, n) {
  const r = En(t), o = Yn(t), a = n === "fixed", s = Or(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ir(0);
  if (r || !r && !a)
    if ((Eo(t) !== "body" || Ra(o)) && (i = ui(t)), r) {
      const f = Or(t, !0, a, t);
      c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
    } else
      o && (c.x = zp(o));
  const d = s.left + i.scrollLeft - c.x, u = s.top + i.scrollTop - c.y;
  return {
    x: d,
    y: u,
    width: s.width,
    height: s.height
  };
}
function oc(e) {
  return pn(e).position === "static";
}
function Iu(e, t) {
  return !En(e) || pn(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Wp(e, t) {
  const n = Ht(e);
  if (Bl(e))
    return n;
  if (!En(e)) {
    let o = cr(e);
    for (; o && !vo(o); ) {
      if (Nn(o) && !oc(o))
        return o;
      o = cr(o);
    }
    return n;
  }
  let r = Iu(e, t);
  for (; r && Fw(r) && oc(r); )
    r = Iu(r, t);
  return r && vo(r) && oc(r) && !Fl(r) ? n : r || Vw(e) || n;
}
const Jw = async function(e) {
  const t = this.getOffsetParent || Wp, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Qw(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function e$(e) {
  return pn(e).direction === "rtl";
}
const t$ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hw,
  getDocumentElement: Yn,
  getClippingRect: qw,
  getOffsetParent: Wp,
  getElementRects: Jw,
  getClientRects: Uw,
  getDimensions: Xw,
  getScale: uo,
  isElement: Nn,
  isRTL: e$
};
function n$(e, t) {
  let n = null, r;
  const o = Yn(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const {
      left: d,
      top: u,
      width: f,
      height: p
    } = e.getBoundingClientRect();
    if (i || t(), !f || !p)
      return;
    const m = ns(u), h = ns(o.clientWidth - (d + f)), v = ns(o.clientHeight - (u + p)), g = ns(d), x = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: Wt(0, $n(1, c)) || 1
    };
    let y = !0;
    function $(C) {
      const P = C[0].intersectionRatio;
      if (P !== c) {
        if (!y)
          return s();
        P ? s(!1, P) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver($, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver($, x);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function r$(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, d = zl(e), u = o || a ? [...d ? na(d) : [], ...na(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const f = d && i ? n$(d, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === d && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = m) == null || y.observe(t);
    })), n();
  }), d && !c && m.observe(d), m.observe(t));
  let h, v = c ? Or(e) : null;
  c && g();
  function g() {
    const b = Or(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    var b;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), f == null || f(), (b = m) == null || b.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const o$ = Rw, a$ = Aw, s$ = Tw, i$ = Lw, c$ = Ow, Lu = Mw, l$ = Iw, d$ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: t$,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return jw(e, t, {
    ...o,
    platform: a
  });
};
var xs = typeof document < "u" ? ka : Q;
function As(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!As(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !As(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Hp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fu(e, t) {
  const n = Hp(e);
  return Math.round(t * n) / n;
}
function Vu(e) {
  const t = _.useRef(e);
  return xs(() => {
    t.current = e;
  }), t;
}
function u$(e) {
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
    open: d
  } = e, [u, f] = _.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, m] = _.useState(r);
  As(p, r) || m(r);
  const [h, v] = _.useState(null), [g, b] = _.useState(null), x = _.useCallback((R) => {
    R !== P.current && (P.current = R, v(R));
  }, []), y = _.useCallback((R) => {
    R !== S.current && (S.current = R, b(R));
  }, []), $ = a || h, C = s || g, P = _.useRef(null), S = _.useRef(null), N = _.useRef(u), O = c != null, F = Vu(c), G = Vu(o), A = _.useCallback(() => {
    if (!P.current || !S.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: p
    };
    G.current && (R.platform = G.current), d$(P.current, S.current, R).then((U) => {
      const W = {
        ...U,
        isPositioned: !0
      };
      B.current && !As(N.current, W) && (N.current = W, f0.flushSync(() => {
        f(W);
      }));
    });
  }, [p, t, n, G]);
  xs(() => {
    d === !1 && N.current.isPositioned && (N.current.isPositioned = !1, f((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [d]);
  const B = _.useRef(!1);
  xs(() => (B.current = !0, () => {
    B.current = !1;
  }), []), xs(() => {
    if ($ && (P.current = $), C && (S.current = C), $ && C) {
      if (F.current)
        return F.current($, C, A);
      A();
    }
  }, [$, C, A, F, O]);
  const D = _.useMemo(() => ({
    reference: P,
    floating: S,
    setReference: x,
    setFloating: y
  }), [x, y]), M = _.useMemo(() => ({
    reference: $,
    floating: C
  }), [$, C]), V = _.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!M.floating)
      return R;
    const U = Fu(M.floating, u.x), W = Fu(M.floating, u.y);
    return i ? {
      ...R,
      transform: "translate(" + U + "px, " + W + "px)",
      ...Hp(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: W
    };
  }, [n, i, M.floating, u.x, u.y]);
  return _.useMemo(() => ({
    ...u,
    update: A,
    refs: D,
    elements: M,
    floatingStyles: V
  }), [u, A, D, M, V]);
}
const f$ = (e) => {
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
      return r && t(r) ? r.current != null ? Lu({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Lu({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, p$ = (e, t) => ({
  ...o$(e),
  options: [e, t]
}), m$ = (e, t) => ({
  ...a$(e),
  options: [e, t]
}), h$ = (e, t) => ({
  ...l$(e),
  options: [e, t]
}), v$ = (e, t) => ({
  ...s$(e),
  options: [e, t]
}), g$ = (e, t) => ({
  ...i$(e),
  options: [e, t]
}), b$ = (e, t) => ({
  ...c$(e),
  options: [e, t]
}), x$ = (e, t) => ({
  ...f$(e),
  options: [e, t]
});
function Aa(e) {
  const [t, n] = q(void 0);
  return $t(() => {
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
          const c = a.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          s = d.inlineSize, i = d.blockSize;
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
const Up = "Popper", [Kp, Tn] = it(Up), [y$, Gp] = Kp(Up), w$ = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = q(null);
  return /* @__PURE__ */ w(y$, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, $$ = "PopperAnchor", _$ = /* @__PURE__ */ I((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Gp($$, n), s = Z(null), i = Ee(t, s);
  return Q(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ w(le.div, k({}, o, {
    ref: i
  }));
}), Yp = "PopperContent", [C$, H7] = Kp(Yp), S$ = /* @__PURE__ */ I((e, t) => {
  var n, r, o, a, s, i, c, d;
  const { __scopePopper: u, side: f = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, avoidCollisions: g = !0, collisionBoundary: b = [], collisionPadding: x = 0, sticky: y = "partial", hideWhenDetached: $ = !1, updatePositionStrategy: C = "optimized", onPlaced: P, ...S } = e, N = Gp(Yp, u), [O, F] = q(null), G = Ee(
    t,
    (Pe) => F(Pe)
  ), [A, B] = q(null), D = Aa(A), M = (n = D == null ? void 0 : D.width) !== null && n !== void 0 ? n : 0, V = (r = D == null ? void 0 : D.height) !== null && r !== void 0 ? r : 0, R = f + (m !== "center" ? "-" + m : ""), U = typeof x == "number" ? x : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...x
  }, W = Array.isArray(b) ? b : [
    b
  ], ne = W.length > 0, me = {
    padding: U,
    boundary: W.filter(N$),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: ne
  }, { refs: Y, floatingStyles: ue, placement: ye, isPositioned: fe, middlewareData: J } = u$({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: R,
    whileElementsMounted: (...Pe) => r$(...Pe, {
      animationFrame: C === "always"
    }),
    elements: {
      reference: N.anchor
    },
    middleware: [
      p$({
        mainAxis: p + V,
        alignmentAxis: h
      }),
      g && m$({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? h$() : void 0,
        ...me
      }),
      g && v$({
        ...me
      }),
      g$({
        ...me,
        apply: ({ elements: Pe, rects: Ie, availableWidth: ke, availableHeight: E }) => {
          const { width: L, height: K } = Ie.reference, ce = Pe.floating.style;
          ce.setProperty("--radix-popper-available-width", `${ke}px`), ce.setProperty("--radix-popper-available-height", `${E}px`), ce.setProperty("--radix-popper-anchor-width", `${L}px`), ce.setProperty("--radix-popper-anchor-height", `${K}px`);
        }
      }),
      A && x$({
        element: A,
        padding: v
      }),
      E$({
        arrowWidth: M,
        arrowHeight: V
      }),
      $ && b$({
        strategy: "referenceHidden",
        ...me
      })
    ]
  }), [re, he] = Zp(ye), Ne = Xe(P);
  $t(() => {
    fe && (Ne == null || Ne());
  }, [
    fe,
    Ne
  ]);
  const ae = (o = J.arrow) === null || o === void 0 ? void 0 : o.x, de = (a = J.arrow) === null || a === void 0 ? void 0 : a.y, H = ((s = J.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [te, $e] = q();
  return $t(() => {
    O && $e(window.getComputedStyle(O).zIndex);
  }, [
    O
  ]), /* @__PURE__ */ w("div", {
    ref: Y.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...ue,
      transform: fe ? ue.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: te,
      "--radix-popper-transform-origin": [
        (i = J.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = J.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ w(C$, {
    scope: u,
    placedSide: re,
    onArrowChange: B,
    arrowX: ae,
    arrowY: de,
    shouldHideArrow: H
  }, /* @__PURE__ */ w(le.div, k({
    "data-side": re,
    "data-align": he
  }, S, {
    ref: G,
    style: {
      ...S.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: fe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (d = J.hide) !== null && d !== void 0 && d.referenceHidden ? 0 : void 0
    }
  }))));
});
function N$(e) {
  return e !== null;
}
const E$ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: d } = t, f = ((n = d.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = f ? 0 : e.arrowWidth, m = f ? 0 : e.arrowHeight, [h, v] = Zp(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], b = ((r = (o = d.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, x = ((a = (s = d.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let y = "", $ = "";
    return h === "bottom" ? (y = f ? g : `${b}px`, $ = `${-m}px`) : h === "top" ? (y = f ? g : `${b}px`, $ = `${c.floating.height + m}px`) : h === "right" ? (y = `${-m}px`, $ = f ? g : `${x}px`) : h === "left" && (y = `${c.floating.width + m}px`, $ = f ? g : `${x}px`), {
      data: {
        x: y,
        y: $
      }
    };
  }
});
function Zp(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Po = w$, Ia = _$, La = S$, fi = /* @__PURE__ */ I((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Yf.createPortal(/* @__PURE__ */ w(le.div, k({}, o, {
    ref: t
  })), r) : null;
});
function P$(e, t) {
  return xl((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const lt = (e) => {
  const { present: t, children: n } = e, r = k$(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Pr.only(n), a = Ee(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ bl(o, {
    ref: a
  }) : null;
};
lt.displayName = "Presence";
function k$(e) {
  const [t, n] = q(), r = Z({}), o = Z(e), a = Z("none"), s = e ? "mounted" : "unmounted", [i, c] = P$(s, {
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
  return Q(() => {
    const d = rs(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [
    i
  ]), $t(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = rs(d);
      e ? c("MOUNT") : m === "none" || (d == null ? void 0 : d.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), $t(() => {
    if (t) {
      const d = (f) => {
        const m = rs(r.current).includes(f.animationName);
        f.target === t && m && Zf(
          () => c("ANIMATION_END")
        );
      }, u = (f) => {
        f.target === t && (a.current = rs(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
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
    ref: ge((d) => {
      d && (r.current = getComputedStyle(d)), n(d);
    }, [])
  };
}
function rs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ft({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = j$({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Xe(n), c = ge((d) => {
    if (a) {
      const f = typeof d == "function" ? d(e) : d;
      f !== e && i(f);
    } else
      o(d);
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
function j$({ defaultProp: e, onChange: t }) {
  const n = q(e), [r] = n, o = Z(r), a = Xe(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const ac = "rovingFocusGroup.onEntryFocus", M$ = {
  bubbles: !1,
  cancelable: !0
}, Wl = "RovingFocusGroup", [Fc, qp, T$] = gr(Wl), [O$, br] = it(Wl, [
  T$
]), [D$, R$] = O$(Wl), A$ = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ w(Fc.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(Fc.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(I$, k({}, e, {
  ref: t
}))))), I$ = /* @__PURE__ */ I((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: d, ...u } = e, f = Z(null), p = Ee(t, f), m = Mn(a), [h = null, v] = ft({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = q(!1), x = Xe(d), y = qp(n), $ = Z(!1), [C, P] = q(0);
  return Q(() => {
    const S = f.current;
    if (S)
      return S.addEventListener(ac, x), () => S.removeEventListener(ac, x);
  }, [
    x
  ]), /* @__PURE__ */ w(D$, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: h,
    onItemFocus: ge(
      (S) => v(S),
      [
        v
      ]
    ),
    onItemShiftTab: ge(
      () => b(!0),
      []
    ),
    onFocusableItemAdd: ge(
      () => P(
        (S) => S + 1
      ),
      []
    ),
    onFocusableItemRemove: ge(
      () => P(
        (S) => S - 1
      ),
      []
    )
  }, /* @__PURE__ */ w(le.div, k({
    tabIndex: g || C === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: X(e.onMouseDown, () => {
      $.current = !0;
    }),
    onFocus: X(e.onFocus, (S) => {
      const N = !$.current;
      if (S.target === S.currentTarget && N && !g) {
        const O = new CustomEvent(ac, M$);
        if (S.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
          const F = y().filter(
            (M) => M.focusable
          ), G = F.find(
            (M) => M.active
          ), A = F.find(
            (M) => M.id === h
          ), D = [
            G,
            A,
            ...F
          ].filter(Boolean).map(
            (M) => M.ref.current
          );
          Xp(D);
        }
      }
      $.current = !1;
    }),
    onBlur: X(
      e.onBlur,
      () => b(!1)
    )
  })));
}), L$ = "RovingFocusGroupItem", F$ = /* @__PURE__ */ I((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = mt(), c = a || i, d = R$(L$, n), u = d.currentTabStopId === c, f = qp(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = d;
  return Q(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ w(Fc.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ w(le.span, k({
    tabIndex: u ? 0 : -1,
    "data-orientation": d.orientation
  }, s, {
    ref: t,
    onMouseDown: X(e.onMouseDown, (h) => {
      r ? d.onItemFocus(c) : h.preventDefault();
    }),
    onFocus: X(
      e.onFocus,
      () => d.onItemFocus(c)
    ),
    onKeyDown: X(e.onKeyDown, (h) => {
      if (h.key === "Tab" && h.shiftKey) {
        d.onItemShiftTab();
        return;
      }
      if (h.target !== h.currentTarget)
        return;
      const v = B$(h, d.orientation, d.dir);
      if (v !== void 0) {
        h.preventDefault();
        let b = f().filter(
          (x) => x.focusable
        ).map(
          (x) => x.ref.current
        );
        if (v === "last")
          b.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && b.reverse();
          const x = b.indexOf(h.currentTarget);
          b = d.loop ? W$(b, x + 1) : b.slice(x + 1);
        }
        setTimeout(
          () => Xp(b)
        );
      }
    })
  })));
}), V$ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function z$(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function B$(e, t, n) {
  const r = z$(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return V$[r];
}
function Xp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function W$(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const pi = A$, mi = F$;
var H$ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, eo = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), as = {}, sc = 0, Qp = function(e) {
  return e && (e.host || Qp(e.parentNode));
}, U$ = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Qp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, K$ = function(e, t, n, r) {
  var o = U$(t, Array.isArray(e) ? e : [e]);
  as[n] || (as[n] = /* @__PURE__ */ new WeakMap());
  var a = as[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var m = p.getAttribute(r), h = m !== null && m !== "false", v = (eo.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          eo.set(p, v), a.set(p, g), s.push(p), v === 1 && h && os.set(p, !0), g === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return u(t), i.clear(), sc++, function() {
    s.forEach(function(f) {
      var p = eo.get(f) - 1, m = a.get(f) - 1;
      eo.set(f, p), a.set(f, m), p || (os.has(f) || f.removeAttribute(r), os.delete(f)), m || f.removeAttribute(n);
    }), sc--, sc || (eo = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), as = {});
  };
}, hi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = H$(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), K$(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, yn = function() {
  return yn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, yn.apply(this, arguments);
};
function Jp(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function G$(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ys = "right-scroll-bar-position", ws = "width-before-scroll-bar", Y$ = "with-scroll-bars-hidden", Z$ = "--removed-body-scroll-bar-size";
function ic(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function q$(e, t) {
  var n = q(function() {
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
var X$ = typeof window < "u" ? _.useLayoutEffect : _.useEffect, zu = /* @__PURE__ */ new WeakMap();
function Q$(e, t) {
  var n = q$(null, function(r) {
    return e.forEach(function(o) {
      return ic(o, r);
    });
  });
  return X$(function() {
    var r = zu.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || ic(i, null);
      }), a.forEach(function(i) {
        o.has(i) || ic(i, s);
      });
    }
    zu.set(n, e);
  }, [e]), n;
}
function J$(e) {
  return e;
}
function e_(e, t) {
  t === void 0 && (t = J$);
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
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), n = {
        push: function(u) {
          s.push(u), d();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function t_(e) {
  e === void 0 && (e = {});
  var t = e_(null);
  return t.options = yn({ async: !0, ssr: !1 }, e), t;
}
var em = function(e) {
  var t = e.sideCar, n = Jp(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return _.createElement(r, yn({}, n));
};
em.isSideCarExport = !0;
function n_(e, t) {
  return e.useMedium(t), em;
}
var tm = t_(), cc = function() {
}, vi = _.forwardRef(function(e, t) {
  var n = _.useRef(null), r = _.useState({
    onScrollCapture: cc,
    onWheelCapture: cc,
    onTouchMoveCapture: cc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, d = e.removeScrollBar, u = e.enabled, f = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, x = Jp(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, $ = Q$([n, t]), C = yn(yn({}, x), o);
  return _.createElement(
    _.Fragment,
    null,
    u && _.createElement(y, { sideCar: tm, removeScrollBar: d, shards: f, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? _.cloneElement(_.Children.only(i), yn(yn({}, C), { ref: $ })) : _.createElement(b, yn({}, C, { className: c, ref: $ }), i)
  );
});
vi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
vi.classNames = {
  fullWidth: ws,
  zeroRight: ys
};
var r_ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function o_() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = r_();
  return t && e.setAttribute("nonce", t), e;
}
function a_(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function s_(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var i_ = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = o_()) && (a_(t, n), s_(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, c_ = function() {
  var e = i_();
  return function(t, n) {
    _.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, nm = function() {
  var e = c_(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, l_ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, lc = function(e) {
  return parseInt(e || "", 10) || 0;
}, d_ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [lc(n), lc(r), lc(o)];
}, u_ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return l_;
  var t = d_(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, f_ = nm(), fo = "data-scroll-locked", p_ = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Y$, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(fo, `] {
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
  
  .`).concat(ys, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ws, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ys, " .").concat(ys, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ws, " .").concat(ws, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(fo, `] {
    `).concat(Z$, ": ").concat(i, `px;
  }
`);
}, Bu = function() {
  var e = parseInt(document.body.getAttribute(fo) || "0", 10);
  return isFinite(e) ? e : 0;
}, m_ = function() {
  _.useEffect(function() {
    return document.body.setAttribute(fo, (Bu() + 1).toString()), function() {
      var e = Bu() - 1;
      e <= 0 ? document.body.removeAttribute(fo) : document.body.setAttribute(fo, e.toString());
    };
  }, []);
}, h_ = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  m_();
  var a = _.useMemo(function() {
    return u_(o);
  }, [o]);
  return _.createElement(f_, { styles: p_(a, !t, o, n ? "" : "!important") });
}, Vc = !1;
if (typeof window < "u")
  try {
    var ss = Object.defineProperty({}, "passive", {
      get: function() {
        return Vc = !0, !0;
      }
    });
    window.addEventListener("test", ss, ss), window.removeEventListener("test", ss, ss);
  } catch {
    Vc = !1;
  }
var to = Vc ? { passive: !1 } : !1, v_ = function(e) {
  return e.tagName === "TEXTAREA";
}, rm = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !v_(e) && n[t] === "visible")
  );
}, g_ = function(e) {
  return rm(e, "overflowY");
}, b_ = function(e) {
  return rm(e, "overflowX");
}, Wu = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = om(e, n);
    if (r) {
      var o = am(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, x_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, y_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, om = function(e, t) {
  return e === "v" ? g_(t) : b_(t);
}, am = function(e, t) {
  return e === "v" ? x_(t) : y_(t);
}, w_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, $_ = function(e, t, n, r, o) {
  var a = w_(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), d = !1, u = s > 0, f = 0, p = 0;
  do {
    var m = am(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && om(e, i) && (f += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (f === 0 || !o) || !u && (p === 0 || !o)) && (d = !0), d;
}, is = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Hu = function(e) {
  return [e.deltaX, e.deltaY];
}, Uu = function(e) {
  return e && "current" in e ? e.current : e;
}, __ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, C_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, S_ = 0, no = [];
function N_(e) {
  var t = _.useRef([]), n = _.useRef([0, 0]), r = _.useRef(), o = _.useState(S_++)[0], a = _.useState(function() {
    return nm();
  })[0], s = _.useRef(e);
  _.useEffect(function() {
    s.current = e;
  }, [e]), _.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = G$([e.lockRef.current], (e.shards || []).map(Uu), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = _.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2)
      return !s.current.allowPinchZoom;
    var b = is(v), x = n.current, y = "deltaX" in v ? v.deltaX : x[0] - b[0], $ = "deltaY" in v ? v.deltaY : x[1] - b[1], C, P = v.target, S = Math.abs(y) > Math.abs($) ? "h" : "v";
    if ("touches" in v && S === "h" && P.type === "range")
      return !1;
    var N = Wu(S, P);
    if (!N)
      return !0;
    if (N ? C = S : (C = S === "v" ? "h" : "v", N = Wu(S, P)), !N)
      return !1;
    if (!r.current && "changedTouches" in v && (y || $) && (r.current = C), !C)
      return !0;
    var O = r.current || C;
    return $_(O, g, v, O === "h" ? y : $, !0);
  }, []), c = _.useCallback(function(v) {
    var g = v;
    if (!(!no.length || no[no.length - 1] !== a)) {
      var b = "deltaY" in g ? Hu(g) : is(g), x = t.current.filter(function(C) {
        return C.name === g.type && C.target === g.target && __(C.delta, b);
      })[0];
      if (x && x.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!x) {
        var y = (s.current.shards || []).map(Uu).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), $ = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        $ && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = _.useCallback(function(v, g, b, x) {
    var y = { name: v, delta: g, target: b, should: x };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function($) {
        return $ !== y;
      });
    }, 1);
  }, []), u = _.useCallback(function(v) {
    n.current = is(v), r.current = void 0;
  }, []), f = _.useCallback(function(v) {
    d(v.type, Hu(v), v.target, i(v, e.lockRef.current));
  }, []), p = _.useCallback(function(v) {
    d(v.type, is(v), v.target, i(v, e.lockRef.current));
  }, []);
  _.useEffect(function() {
    return no.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, to), document.addEventListener("touchmove", c, to), document.addEventListener("touchstart", u, to), function() {
      no = no.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, to), document.removeEventListener("touchmove", c, to), document.removeEventListener("touchstart", u, to);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return _.createElement(
    _.Fragment,
    null,
    h ? _.createElement(a, { styles: C_(o) }) : null,
    m ? _.createElement(h_, { gapMode: "margin" }) : null
  );
}
const E_ = n_(tm, N_);
var Fa = _.forwardRef(function(e, t) {
  return _.createElement(vi, yn({}, e, { ref: t, sideCar: E_ }));
});
Fa.classNames = vi.classNames;
const zc = [
  "Enter",
  " "
], P_ = [
  "ArrowDown",
  "PageUp",
  "Home"
], sm = [
  "ArrowUp",
  "PageDown",
  "End"
], k_ = [
  ...P_,
  ...sm
], j_ = {
  ltr: [
    ...zc,
    "ArrowRight"
  ],
  rtl: [
    ...zc,
    "ArrowLeft"
  ]
}, M_ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, gi = "Menu", [ra, T_, O_] = gr(gi), [Hr, Va] = it(gi, [
  O_,
  Tn,
  br
]), bi = Tn(), im = br(), [cm, xr] = Hr(gi), [D_, za] = Hr(gi), R_ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = bi(t), [c, d] = q(null), u = Z(!1), f = Xe(a), p = Mn(o);
  return Q(() => {
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
  }, []), /* @__PURE__ */ w(Po, i, /* @__PURE__ */ w(cm, {
    scope: t,
    open: n,
    onOpenChange: f,
    content: c,
    onContentChange: d
  }, /* @__PURE__ */ w(D_, {
    scope: t,
    onClose: ge(
      () => f(!1),
      [
        f
      ]
    ),
    isUsingKeyboardRef: u,
    dir: p,
    modal: s
  }, r)));
}, lm = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = bi(n);
  return /* @__PURE__ */ w(Ia, k({}, o, r, {
    ref: t
  }));
}), dm = "MenuPortal", [A_, um] = Hr(dm, {
  forceMount: void 0
}), I_ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = xr(dm, t);
  return /* @__PURE__ */ w(A_, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(lt, {
    present: n || a.open
  }, /* @__PURE__ */ w(fi, {
    asChild: !0,
    container: o
  }, r)));
}, an = "MenuContent", [L_, Hl] = Hr(an), F_ = /* @__PURE__ */ I((e, t) => {
  const n = um(an, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = xr(an, e.__scopeMenu), s = za(an, e.__scopeMenu);
  return /* @__PURE__ */ w(ra.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(lt, {
    present: r || a.open
  }, /* @__PURE__ */ w(ra.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ w(V_, k({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(z_, k({}, o, {
    ref: t
  })))));
}), V_ = /* @__PURE__ */ I((e, t) => {
  const n = xr(an, e.__scopeMenu), r = Z(null), o = Ee(t, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return hi(a);
  }, []), /* @__PURE__ */ w(Ul, k({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: X(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), z_ = /* @__PURE__ */ I((e, t) => {
  const n = xr(an, e.__scopeMenu);
  return /* @__PURE__ */ w(Ul, k({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Ul = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: d, onPointerDownOutside: u, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = xr(an, n), b = za(an, n), x = bi(n), y = im(n), $ = T_(n), [C, P] = q(null), S = Z(null), N = Ee(t, S, g.onContentChange), O = Z(0), F = Z(""), G = Z(0), A = Z(null), B = Z("right"), D = Z(0), M = h ? Fa : ln, V = h ? {
    as: dn,
    allowPinchZoom: !0
  } : void 0, R = (W) => {
    var ne, me;
    const Y = F.current + W, ue = $().filter(
      (Ne) => !Ne.disabled
    ), ye = document.activeElement, fe = (ne = ue.find(
      (Ne) => Ne.ref.current === ye
    )) === null || ne === void 0 ? void 0 : ne.textValue, J = ue.map(
      (Ne) => Ne.textValue
    ), re = s2(J, Y, fe), he = (me = ue.find(
      (Ne) => Ne.textValue === re
    )) === null || me === void 0 ? void 0 : me.ref.current;
    (function Ne(ae) {
      F.current = ae, window.clearTimeout(O.current), ae !== "" && (O.current = window.setTimeout(
        () => Ne(""),
        1e3
      ));
    })(Y), he && setTimeout(
      () => he.focus()
    );
  };
  Q(() => () => window.clearTimeout(O.current), []), li();
  const U = ge((W) => {
    var ne, me;
    return B.current === ((ne = A.current) === null || ne === void 0 ? void 0 : ne.side) && c2(W, (me = A.current) === null || me === void 0 ? void 0 : me.area);
  }, []);
  return /* @__PURE__ */ w(L_, {
    scope: n,
    searchRef: F,
    onItemEnter: ge((W) => {
      U(W) && W.preventDefault();
    }, [
      U
    ]),
    onItemLeave: ge((W) => {
      var ne;
      U(W) || ((ne = S.current) === null || ne === void 0 || ne.focus(), P(null));
    }, [
      U
    ]),
    onTriggerLeave: ge((W) => {
      U(W) && W.preventDefault();
    }, [
      U
    ]),
    pointerGraceTimerRef: G,
    onPointerGraceIntentChange: ge((W) => {
      A.current = W;
    }, [])
  }, /* @__PURE__ */ w(M, V, /* @__PURE__ */ w(di, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: X(a, (W) => {
      var ne;
      W.preventDefault(), (ne = S.current) === null || ne === void 0 || ne.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ w(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: d,
    onPointerDownOutside: u,
    onFocusOutside: f,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ w(pi, k({
    asChild: !0
  }, y, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: C,
    onCurrentTabStopIdChange: P,
    onEntryFocus: X(c, (W) => {
      b.isUsingKeyboardRef.current || W.preventDefault();
    })
  }), /* @__PURE__ */ w(La, k({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": bm(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, x, v, {
    ref: N,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: X(v.onKeyDown, (W) => {
      const me = W.target.closest("[data-radix-menu-content]") === W.currentTarget, Y = W.ctrlKey || W.altKey || W.metaKey, ue = W.key.length === 1;
      me && (W.key === "Tab" && W.preventDefault(), !Y && ue && R(W.key));
      const ye = S.current;
      if (W.target !== ye || !k_.includes(W.key))
        return;
      W.preventDefault();
      const J = $().filter(
        (re) => !re.disabled
      ).map(
        (re) => re.ref.current
      );
      sm.includes(W.key) && J.reverse(), o2(J);
    }),
    onBlur: X(e.onBlur, (W) => {
      W.currentTarget.contains(W.target) || (window.clearTimeout(O.current), F.current = "");
    }),
    onPointerMove: X(e.onPointerMove, oa((W) => {
      const ne = W.target, me = D.current !== W.clientX;
      if (W.currentTarget.contains(ne) && me) {
        const Y = W.clientX > D.current ? "right" : "left";
        B.current = Y, D.current = W.clientX;
      }
    }))
  })))))));
}), fm = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, k({
    role: "group"
  }, r, {
    ref: t
  }));
}), B_ = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, k({}, r, {
    ref: t
  }));
}), Bc = "MenuItem", Ku = "menu.itemSelect", Kl = /* @__PURE__ */ I((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = Z(null), s = za(Bc, e.__scopeMenu), i = Hl(Bc, e.__scopeMenu), c = Ee(t, a), d = Z(!1), u = () => {
    const f = a.current;
    if (!n && f) {
      const p = new CustomEvent(Ku, {
        bubbles: !0,
        cancelable: !0
      });
      f.addEventListener(
        Ku,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), Ts(f, p), p.defaultPrevented ? d.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ w(pm, k({}, o, {
    ref: c,
    disabled: n,
    onClick: X(e.onClick, u),
    onPointerDown: (f) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, f), d.current = !0;
    },
    onPointerUp: X(e.onPointerUp, (f) => {
      var p;
      d.current || (p = f.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: X(e.onKeyDown, (f) => {
      const p = i.searchRef.current !== "";
      n || p && f.key === " " || zc.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
    })
  }));
}), pm = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Hl(Bc, n), i = im(n), c = Z(null), d = Ee(t, c), [u, f] = q(!1), [p, m] = q("");
  return Q(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ w(ra.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ w(mi, k({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ w(le.div, k({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: d,
    onPointerMove: X(e.onPointerMove, oa((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: X(e.onPointerLeave, oa(
      (h) => s.onItemLeave(h)
    )),
    onFocus: X(
      e.onFocus,
      () => f(!0)
    ),
    onBlur: X(
      e.onBlur,
      () => f(!1)
    )
  }))));
}), W_ = /* @__PURE__ */ I((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ w(hm, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ w(Kl, k({
    role: "menuitemcheckbox",
    "aria-checked": Is(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Gl(n),
    onSelect: X(
      o.onSelect,
      () => r == null ? void 0 : r(Is(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), H_ = "MenuRadioGroup", [U_, K_] = Hr(H_, {
  value: void 0,
  onValueChange: () => {
  }
}), G_ = /* @__PURE__ */ I((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Xe(r);
  return /* @__PURE__ */ w(U_, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ w(fm, k({}, o, {
    ref: t
  })));
}), Y_ = "MenuRadioItem", Z_ = /* @__PURE__ */ I((e, t) => {
  const { value: n, ...r } = e, o = K_(Y_, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ w(hm, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ w(Kl, k({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Gl(a),
    onSelect: X(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), mm = "MenuItemIndicator", [hm, q_] = Hr(mm, {
  checked: !1
}), X_ = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = q_(mm, n);
  return /* @__PURE__ */ w(lt, {
    present: r || Is(a.checked) || a.checked === !0
  }, /* @__PURE__ */ w(le.span, k({}, o, {
    ref: t,
    "data-state": Gl(a.checked)
  })));
}), Q_ = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, k({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), vm = "MenuSub", [J_, gm] = Hr(vm), e2 = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = xr(vm, t), s = bi(t), [i, c] = q(null), [d, u] = q(null), f = Xe(o);
  return Q(() => (a.open === !1 && f(!1), () => f(!1)), [
    a.open,
    f
  ]), /* @__PURE__ */ w(Po, s, /* @__PURE__ */ w(cm, {
    scope: t,
    open: r,
    onOpenChange: f,
    content: d,
    onContentChange: u
  }, /* @__PURE__ */ w(J_, {
    scope: t,
    contentId: mt(),
    triggerId: mt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, cs = "MenuSubTrigger", t2 = /* @__PURE__ */ I((e, t) => {
  const n = xr(cs, e.__scopeMenu), r = za(cs, e.__scopeMenu), o = gm(cs, e.__scopeMenu), a = Hl(cs, e.__scopeMenu), s = Z(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, d = {
    __scopeMenu: e.__scopeMenu
  }, u = ge(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return Q(
    () => u,
    [
      u
    ]
  ), Q(() => {
    const f = i.current;
    return () => {
      window.clearTimeout(f), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ w(lm, k({
    asChild: !0
  }, d), /* @__PURE__ */ w(pm, k({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": bm(n.open)
  }, e, {
    ref: ja(t, o.onTriggerChange),
    onClick: (f) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: X(e.onPointerMove, oa((f) => {
      a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: X(e.onPointerLeave, oa((f) => {
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
              x: f.clientX + b,
              y: f.clientY
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
        if (a.onTriggerLeave(f), f.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: X(e.onKeyDown, (f) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && f.key === " ") && j_[r.dir].includes(f.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), f.preventDefault();
      }
    })
  })));
}), n2 = "MenuSubContent", r2 = /* @__PURE__ */ I((e, t) => {
  const n = um(an, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = xr(an, e.__scopeMenu), s = za(an, e.__scopeMenu), i = gm(n2, e.__scopeMenu), c = Z(null), d = Ee(t, c);
  return /* @__PURE__ */ w(ra.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(lt, {
    present: r || a.open
  }, /* @__PURE__ */ w(ra.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(Ul, k({
    id: i.contentId,
    "aria-labelledby": i.triggerId
  }, o, {
    ref: d,
    align: "start",
    side: s.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (u) => {
      var f;
      s.isUsingKeyboardRef.current && ((f = c.current) === null || f === void 0 || f.focus()), u.preventDefault();
    },
    onCloseAutoFocus: (u) => u.preventDefault(),
    onFocusOutside: X(e.onFocusOutside, (u) => {
      u.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: X(e.onEscapeKeyDown, (u) => {
      s.onClose(), u.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (u) => {
      const f = u.currentTarget.contains(u.target), p = M_[s.dir].includes(u.key);
      if (f && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function bm(e) {
  return e ? "open" : "closed";
}
function Is(e) {
  return e === "indeterminate";
}
function Gl(e) {
  return Is(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function o2(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function a2(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function s2(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (d) => d === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = a2(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (d) => d !== n
  ));
  const c = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function i2(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, d = t[s].x, u = t[s].y;
    c > r != u > r && n < (d - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function c2(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return i2(n, t);
}
function oa(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Yl = R_, Zl = lm, ql = I_, Xl = F_, Ql = fm, Jl = B_, ed = Kl, td = W_, nd = G_, rd = Z_, od = X_, ad = Q_, sd = e2, id = t2, cd = r2, xm = "ContextMenu", [l2, U7] = it(xm, [
  Va
]), Dt = Va(), [d2, ym] = l2(xm), u2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = q(!1), c = Dt(t), d = Xe(r), u = ge((f) => {
    i(f), d(f);
  }, [
    d
  ]);
  return /* @__PURE__ */ w(d2, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ w(Yl, k({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, f2 = "ContextMenuTrigger", p2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = ym(f2, n), s = Dt(n), i = Z({
    x: 0,
    y: 0
  }), c = Z({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), d = Z(0), u = ge(
    () => window.clearTimeout(d.current),
    []
  ), f = (p) => {
    i.current = {
      x: p.clientX,
      y: p.clientY
    }, a.onOpenChange(!0);
  };
  return Q(
    () => u,
    [
      u
    ]
  ), Q(
    () => void (r && u()),
    [
      r,
      u
    ]
  ), /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w(Zl, k({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ w(le.span, k({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : X(e.onContextMenu, (p) => {
      u(), f(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : X(e.onPointerDown, ls((p) => {
      u(), d.current = window.setTimeout(
        () => f(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : X(e.onPointerMove, ls(u)),
    onPointerCancel: r ? e.onPointerCancel : X(e.onPointerCancel, ls(u)),
    onPointerUp: r ? e.onPointerUp : X(e.onPointerUp, ls(u))
  })));
}), m2 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Dt(t);
  return /* @__PURE__ */ w(ql, k({}, r, n));
}, h2 = "ContextMenuContent", v2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = ym(h2, n), a = Dt(n), s = Z(!1);
  return /* @__PURE__ */ w(Xl, k({}, a, r, {
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
}), g2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(Ql, k({}, o, r, {
    ref: t
  }));
}), b2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(Jl, k({}, o, r, {
    ref: t
  }));
}), x2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(ed, k({}, o, r, {
    ref: t
  }));
}), y2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(td, k({}, o, r, {
    ref: t
  }));
}), w2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(nd, k({}, o, r, {
    ref: t
  }));
}), $2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(rd, k({}, o, r, {
    ref: t
  }));
}), _2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(od, k({}, o, r, {
    ref: t
  }));
}), C2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(ad, k({}, o, r, {
    ref: t
  }));
}), S2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = Dt(t), [i, c] = ft({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ w(sd, k({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, N2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(id, k({}, o, r, {
    ref: t
  }));
}), E2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(cd, k({}, o, r, {
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
function ls(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const P2 = u2, k2 = p2, wm = m2, $m = v2, j2 = g2, _m = b2, Cm = x2, Sm = y2, M2 = w2, Nm = $2, Em = _2, Pm = C2, T2 = S2, km = N2, jm = E2, K7 = P2, G7 = k2, Y7 = j2, Z7 = wm, q7 = T2, X7 = M2, O2 = _.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  km,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ l.jsx(vr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
O2.displayName = km.displayName;
const D2 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  jm,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
D2.displayName = jm.displayName;
const R2 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(wm, { children: /* @__PURE__ */ l.jsx(
  $m,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
R2.displayName = $m.displayName;
const A2 = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Cm,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
A2.displayName = Cm.displayName;
const I2 = _.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Sm,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Em, { children: /* @__PURE__ */ l.jsx(Xt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
I2.displayName = Sm.displayName;
const L2 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Nm,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Em, { children: /* @__PURE__ */ l.jsx(si, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
L2.displayName = Nm.displayName;
const F2 = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  _m,
  {
    ref: r,
    className: T(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
F2.displayName = _m.displayName;
const V2 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Pm,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
V2.displayName = Pm.displayName;
const z2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: T(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
z2.displayName = "ContextMenuShortcut";
var Ba = (e) => e.type === "checkbox", so = (e) => e instanceof Date, jt = (e) => e == null;
const Mm = (e) => typeof e == "object";
var yt = (e) => !jt(e) && !Array.isArray(e) && Mm(e) && !so(e), Tm = (e) => yt(e) && e.target ? Ba(e.target) ? e.target.checked : e.target.value : e, B2 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Om = (e, t) => e.has(B2(t)), W2 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return yt(t) && t.hasOwnProperty("isPrototypeOf");
}, ld = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function It(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(ld && (e instanceof Blob || e instanceof FileList)) && (n || yt(e)))
    if (t = n ? [] : {}, !n && !W2(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = It(e[r]));
  else
    return e;
  return t;
}
var Wa = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ut = (e) => e === void 0, pe = (e, t, n) => {
  if (!t || !yt(e))
    return n;
  const r = Wa(t.split(/[,[\].]+?/)).reduce((o, a) => jt(o) ? o : o[a], e);
  return ut(r) || r === e ? ut(e[t]) ? n : e[t] : r;
}, tn = (e) => typeof e == "boolean";
const Ls = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, rn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Ln = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Dm = z.createContext(null), xi = () => z.useContext(Dm), H2 = (e) => {
  const { children: t, ...n } = e;
  return z.createElement(Dm.Provider, { value: n }, t);
};
var Rm = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== rn.all && (t._proxyFormState[s] = !r || rn.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Bt = (e) => yt(e) && !Object.keys(e).length, Am = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Bt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || rn.all));
}, $s = (e) => Array.isArray(e) ? e : [e], Im = (e, t, n) => !e || !t || e === t || $s(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function dd(e) {
  const t = z.useRef(e);
  t.current = e, z.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function U2(e) {
  const t = xi(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = z.useState(n._formState), c = z.useRef(!0), d = z.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = z.useRef(o);
  return u.current = o, dd({
    disabled: r,
    next: (f) => c.current && Im(u.current, f.name, a) && Am(f, d.current, n._updateFormState) && i({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), z.useEffect(() => (c.current = !0, d.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Rm(s, n, d.current, !1);
}
var _n = (e) => typeof e == "string", Lm = (e, t, n, r, o) => _n(e) ? (r && t.watch.add(e), pe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), pe(n, a))) : (r && (t.watchAll = !0), n);
function K2(e) {
  const t = xi(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = z.useRef(r);
  i.current = r, dd({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Im(i.current, u.name, s) && d(It(Lm(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, d] = z.useState(n._getWatch(r, o));
  return z.useEffect(() => n._removeUnmounted()), c;
}
var ud = (e) => /^\w*$/.test(e), Fm = (e) => Wa(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ye = (e, t, n) => {
  let r = -1;
  const o = ud(t) ? [t] : Fm(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const d = e[i];
      c = yt(d) || Array.isArray(d) ? d : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
};
function G2(e) {
  const t = xi(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a } = e, s = Om(o._names.array, n), i = K2({
    control: o,
    name: n,
    defaultValue: pe(o._formValues, n, pe(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = U2({
    control: o,
    name: n
  }), d = z.useRef(o.register(n, {
    ...e.rules,
    value: i,
    ...tn(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return z.useEffect(() => {
    const u = o._options.shouldUnregister || a, f = (p, m) => {
      const h = pe(o._fields, p);
      h && (h._f.mount = m);
    };
    if (f(n, !0), u) {
      const p = It(pe(o._options.defaultValues, n));
      Ye(o._defaultValues, n, p), ut(pe(o._formValues, n)) && Ye(o._formValues, n, p);
    }
    return () => {
      (s ? u && !o._state.action : u) ? o.unregister(n) : f(n, !1);
    };
  }, [n, o, s, a]), z.useEffect(() => {
    pe(o._fields, n) && o._updateDisabledField({
      disabled: r,
      fields: o._fields,
      name: n,
      value: pe(o._fields, n)._f.value
    });
  }, [r, n, o]), {
    field: {
      name: n,
      value: i,
      ...tn(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: z.useCallback((u) => d.current.onChange({
        target: {
          value: Tm(u),
          name: n
        },
        type: Ls.CHANGE
      }), [n]),
      onBlur: z.useCallback(() => d.current.onBlur({
        target: {
          value: pe(o._formValues, n),
          name: n
        },
        type: Ls.BLUR
      }), [n, o]),
      ref: (u) => {
        const f = pe(o._fields, n);
        f && u && (f._f.ref = {
          focus: () => u.focus(),
          select: () => u.select(),
          setCustomValidity: (p) => u.setCustomValidity(p),
          reportValidity: () => u.reportValidity()
        });
      }
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!pe(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!pe(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!pe(c.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!pe(c.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => pe(c.errors, n)
      }
    })
  };
}
const Y2 = (e) => e.render(G2(e));
var Vm = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, Gu = (e) => ({
  isOnSubmit: !e || e === rn.onSubmit,
  isOnBlur: e === rn.onBlur,
  isOnChange: e === rn.onChange,
  isOnAll: e === rn.all,
  isOnTouch: e === rn.onTouched
}), Yu = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const qo = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const a = pe(e, o);
    if (a) {
      const { _f: s, ...i } = a;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r)
          break;
        if (s.ref && t(s.ref, s.name) && !r)
          break;
        qo(i, t);
      } else
        yt(i) && qo(i, t);
    }
  }
};
var Z2 = (e, t, n) => {
  const r = Wa(pe(e, n));
  return Ye(r, "root", t[n]), Ye(e, n, r), e;
}, fd = (e) => e.type === "file", sr = (e) => typeof e == "function", Fs = (e) => {
  if (!ld)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, _s = (e) => _n(e), pd = (e) => e.type === "radio", Vs = (e) => e instanceof RegExp;
const Zu = {
  value: !1,
  isValid: !1
}, qu = { value: !0, isValid: !0 };
var zm = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ut(e[0].attributes.value) ? ut(e[0].value) || e[0].value === "" ? qu : { value: e[0].value, isValid: !0 } : qu
    ) : Zu;
  }
  return Zu;
};
const Xu = {
  isValid: !1,
  value: null
};
var Bm = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Xu) : Xu;
function Qu(e, t, n = "validate") {
  if (_s(e) || Array.isArray(e) && e.every(_s) || tn(e) && !e)
    return {
      type: n,
      message: _s(e) ? e : "",
      ref: t
    };
}
var ro = (e) => yt(e) && !Vs(e) ? e : {
  value: e,
  message: ""
}, Ju = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: d, min: u, max: f, pattern: p, validate: m, name: h, valueAsNumber: v, mount: g, disabled: b } = e._f, x = pe(t, h);
  if (!g || b)
    return {};
  const y = s ? s[0] : a, $ = (A) => {
    r && y.reportValidity && (y.setCustomValidity(tn(A) ? "" : A || ""), y.reportValidity());
  }, C = {}, P = pd(a), S = Ba(a), N = P || S, O = (v || fd(a)) && ut(a.value) && ut(x) || Fs(a) && a.value === "" || x === "" || Array.isArray(x) && !x.length, F = Vm.bind(null, h, n, C), G = (A, B, D, M = Ln.maxLength, V = Ln.minLength) => {
    const R = A ? B : D;
    C[h] = {
      type: A ? M : V,
      message: R,
      ref: a,
      ...F(A ? M : V, R)
    };
  };
  if (o ? !Array.isArray(x) || !x.length : i && (!N && (O || jt(x)) || tn(x) && !x || S && !zm(s).isValid || P && !Bm(s).isValid)) {
    const { value: A, message: B } = _s(i) ? { value: !!i, message: i } : ro(i);
    if (A && (C[h] = {
      type: Ln.required,
      message: B,
      ref: y,
      ...F(Ln.required, B)
    }, !n))
      return $(B), C;
  }
  if (!O && (!jt(u) || !jt(f))) {
    let A, B;
    const D = ro(f), M = ro(u);
    if (!jt(x) && !isNaN(x)) {
      const V = a.valueAsNumber || x && +x;
      jt(D.value) || (A = V > D.value), jt(M.value) || (B = V < M.value);
    } else {
      const V = a.valueAsDate || new Date(x), R = (ne) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ne), U = a.type == "time", W = a.type == "week";
      _n(D.value) && x && (A = U ? R(x) > R(D.value) : W ? x > D.value : V > new Date(D.value)), _n(M.value) && x && (B = U ? R(x) < R(M.value) : W ? x < M.value : V < new Date(M.value));
    }
    if ((A || B) && (G(!!A, D.message, M.message, Ln.max, Ln.min), !n))
      return $(C[h].message), C;
  }
  if ((c || d) && !O && (_n(x) || o && Array.isArray(x))) {
    const A = ro(c), B = ro(d), D = !jt(A.value) && x.length > +A.value, M = !jt(B.value) && x.length < +B.value;
    if ((D || M) && (G(D, A.message, B.message), !n))
      return $(C[h].message), C;
  }
  if (p && !O && _n(x)) {
    const { value: A, message: B } = ro(p);
    if (Vs(A) && !x.match(A) && (C[h] = {
      type: Ln.pattern,
      message: B,
      ref: a,
      ...F(Ln.pattern, B)
    }, !n))
      return $(B), C;
  }
  if (m) {
    if (sr(m)) {
      const A = await m(x, t), B = Qu(A, y);
      if (B && (C[h] = {
        ...B,
        ...F(Ln.validate, B.message)
      }, !n))
        return $(B.message), C;
    } else if (yt(m)) {
      let A = {};
      for (const B in m) {
        if (!Bt(A) && !n)
          break;
        const D = Qu(await m[B](x, t), y, B);
        D && (A = {
          ...D,
          ...F(B, D.message)
        }, $(D.message), n && (C[h] = A));
      }
      if (!Bt(A) && (C[h] = {
        ref: y,
        ...A
      }, !n))
        return C;
    }
  }
  return $(!0), C;
};
function q2(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = ut(e) ? r++ : e[t[r++]];
  return e;
}
function X2(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ut(e[t]))
      return !1;
  return !0;
}
function xt(e, t) {
  const n = Array.isArray(t) ? t : ud(t) ? [t] : Fm(t), r = n.length === 1 ? e : q2(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (yt(r) && Bt(r) || Array.isArray(r) && X2(r)) && xt(e, n.slice(0, -1)), e;
}
var dc = () => {
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
}, zs = (e) => jt(e) || !Mm(e);
function Er(e, t) {
  if (zs(e) || zs(t))
    return e === t;
  if (so(e) && so(t))
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
      if (so(a) && so(s) || yt(a) && yt(s) || Array.isArray(a) && Array.isArray(s) ? !Er(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Wm = (e) => e.type === "select-multiple", Q2 = (e) => pd(e) || Ba(e), uc = (e) => Fs(e) && e.isConnected, Hm = (e) => {
  for (const t in e)
    if (sr(e[t]))
      return !0;
  return !1;
};
function Bs(e, t = {}) {
  const n = Array.isArray(e);
  if (yt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || yt(e[r]) && !Hm(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Bs(e[r], t[r])) : jt(e[r]) || (t[r] = !0);
  return t;
}
function Um(e, t, n) {
  const r = Array.isArray(e);
  if (yt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || yt(e[o]) && !Hm(e[o]) ? ut(t) || zs(n[o]) ? n[o] = Array.isArray(e[o]) ? Bs(e[o], []) : { ...Bs(e[o]) } : Um(e[o], jt(t) ? {} : t[o], n[o]) : n[o] = !Er(e[o], t[o]);
  return n;
}
var ds = (e, t) => Um(e, t, Bs(t)), Km = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => ut(e) ? e : t ? e === "" ? NaN : e && +e : n && _n(e) ? new Date(e) : r ? r(e) : e;
function fc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return fd(t) ? t.files : pd(t) ? Bm(e.refs).value : Wm(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Ba(t) ? zm(e.refs).value : Km(ut(t.value) ? e.ref.value : t.value, e);
}
var J2 = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = pe(t, a);
    s && Ye(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Ho = (e) => ut(e) ? e : Vs(e) ? e.source : yt(e) ? Vs(e.value) ? e.value.source : e.value : e, eC = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function ef(e, t, n) {
  const r = pe(e, n);
  if (r || ud(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = pe(t, a), i = pe(e, a);
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
var tC = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, nC = (e, t) => !Wa(pe(e, t)).length && xt(e, t);
const rC = {
  mode: rn.onSubmit,
  reValidateMode: rn.onChange,
  shouldFocusError: !0
};
function oC(e = {}) {
  let t = {
    ...rC,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: sr(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, o = yt(t.defaultValues) || yt(t.values) ? It(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : It(o), s = {
    action: !1,
    mount: !1,
    watch: !1
  }, i = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, d = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: dc(),
    array: dc(),
    state: dc()
  }, p = Gu(t.mode), m = Gu(t.reValidateMode), h = t.criteriaMode === rn.all, v = (E) => (L) => {
    clearTimeout(d), d = setTimeout(E, L);
  }, g = async (E) => {
    if (u.isValid || E) {
      const L = t.resolver ? Bt((await N()).errors) : await F(r, !0);
      L !== n.isValid && f.state.next({
        isValid: L
      });
    }
  }, b = (E, L) => {
    (u.isValidating || u.validatingFields) && ((E || Array.from(i.mount)).forEach((K) => {
      K && (L ? Ye(n.validatingFields, K, L) : xt(n.validatingFields, K));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Bt(n.validatingFields)
    }));
  }, x = (E, L = [], K, ce, ie = !0, ee = !0) => {
    if (ce && K) {
      if (s.action = !0, ee && Array.isArray(pe(r, E))) {
        const xe = K(pe(r, E), ce.argA, ce.argB);
        ie && Ye(r, E, xe);
      }
      if (ee && Array.isArray(pe(n.errors, E))) {
        const xe = K(pe(n.errors, E), ce.argA, ce.argB);
        ie && Ye(n.errors, E, xe), nC(n.errors, E);
      }
      if (u.touchedFields && ee && Array.isArray(pe(n.touchedFields, E))) {
        const xe = K(pe(n.touchedFields, E), ce.argA, ce.argB);
        ie && Ye(n.touchedFields, E, xe);
      }
      u.dirtyFields && (n.dirtyFields = ds(o, a)), f.state.next({
        name: E,
        isDirty: A(E, L),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ye(a, E, L);
  }, y = (E, L) => {
    Ye(n.errors, E, L), f.state.next({
      errors: n.errors
    });
  }, $ = (E) => {
    n.errors = E, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, C = (E, L, K, ce) => {
    const ie = pe(r, E);
    if (ie) {
      const ee = pe(a, E, ut(K) ? pe(o, E) : K);
      ut(ee) || ce && ce.defaultChecked || L ? Ye(a, E, L ? ee : fc(ie._f)) : M(E, ee), s.mount && g();
    }
  }, P = (E, L, K, ce, ie) => {
    let ee = !1, xe = !1;
    const De = {
      name: E
    }, Ke = !!(pe(r, E) && pe(r, E)._f.disabled);
    if (!K || ce) {
      u.isDirty && (xe = n.isDirty, n.isDirty = De.isDirty = A(), ee = xe !== De.isDirty);
      const Qe = Ke || Er(pe(o, E), L);
      xe = !!(!Ke && pe(n.dirtyFields, E)), Qe || Ke ? xt(n.dirtyFields, E) : Ye(n.dirtyFields, E, !0), De.dirtyFields = n.dirtyFields, ee = ee || u.dirtyFields && xe !== !Qe;
    }
    if (K) {
      const Qe = pe(n.touchedFields, E);
      Qe || (Ye(n.touchedFields, E, K), De.touchedFields = n.touchedFields, ee = ee || u.touchedFields && Qe !== K);
    }
    return ee && ie && f.state.next(De), ee ? De : {};
  }, S = (E, L, K, ce) => {
    const ie = pe(n.errors, E), ee = u.isValid && tn(L) && n.isValid !== L;
    if (e.delayError && K ? (c = v(() => y(E, K)), c(e.delayError)) : (clearTimeout(d), c = null, K ? Ye(n.errors, E, K) : xt(n.errors, E)), (K ? !Er(ie, K) : ie) || !Bt(ce) || ee) {
      const xe = {
        ...ce,
        ...ee && tn(L) ? { isValid: L } : {},
        errors: n.errors,
        name: E
      };
      n = {
        ...n,
        ...xe
      }, f.state.next(xe);
    }
  }, N = async (E) => {
    b(E, !0);
    const L = await t.resolver(a, t.context, J2(E || i.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return b(E), L;
  }, O = async (E) => {
    const { errors: L } = await N(E);
    if (E)
      for (const K of E) {
        const ce = pe(L, K);
        ce ? Ye(n.errors, K, ce) : xt(n.errors, K);
      }
    else
      n.errors = L;
    return L;
  }, F = async (E, L, K = {
    valid: !0
  }) => {
    for (const ce in E) {
      const ie = E[ce];
      if (ie) {
        const { _f: ee, ...xe } = ie;
        if (ee) {
          const De = i.array.has(ee.name);
          b([ce], !0);
          const Ke = await Ju(ie, a, h, t.shouldUseNativeValidation && !L, De);
          if (b([ce]), Ke[ee.name] && (K.valid = !1, L))
            break;
          !L && (pe(Ke, ee.name) ? De ? Z2(n.errors, Ke, ee.name) : Ye(n.errors, ee.name, Ke[ee.name]) : xt(n.errors, ee.name));
        }
        xe && await F(xe, L, K);
      }
    }
    return K.valid;
  }, G = () => {
    for (const E of i.unMount) {
      const L = pe(r, E);
      L && (L._f.refs ? L._f.refs.every((K) => !uc(K)) : !uc(L._f.ref)) && J(E);
    }
    i.unMount = /* @__PURE__ */ new Set();
  }, A = (E, L) => (E && L && Ye(a, E, L), !Er(me(), o)), B = (E, L, K) => Lm(E, i, {
    ...s.mount ? a : ut(L) ? o : _n(E) ? { [E]: L } : L
  }, K, L), D = (E) => Wa(pe(s.mount ? a : o, E, e.shouldUnregister ? pe(o, E, []) : [])), M = (E, L, K = {}) => {
    const ce = pe(r, E);
    let ie = L;
    if (ce) {
      const ee = ce._f;
      ee && (!ee.disabled && Ye(a, E, Km(L, ee)), ie = Fs(ee.ref) && jt(L) ? "" : L, Wm(ee.ref) ? [...ee.ref.options].forEach((xe) => xe.selected = ie.includes(xe.value)) : ee.refs ? Ba(ee.ref) ? ee.refs.length > 1 ? ee.refs.forEach((xe) => (!xe.defaultChecked || !xe.disabled) && (xe.checked = Array.isArray(ie) ? !!ie.find((De) => De === xe.value) : ie === xe.value)) : ee.refs[0] && (ee.refs[0].checked = !!ie) : ee.refs.forEach((xe) => xe.checked = xe.value === ie) : fd(ee.ref) ? ee.ref.value = "" : (ee.ref.value = ie, ee.ref.type || f.values.next({
        name: E,
        values: { ...a }
      })));
    }
    (K.shouldDirty || K.shouldTouch) && P(E, ie, K.shouldTouch, K.shouldDirty, !0), K.shouldValidate && ne(E);
  }, V = (E, L, K) => {
    for (const ce in L) {
      const ie = L[ce], ee = `${E}.${ce}`, xe = pe(r, ee);
      (i.array.has(E) || !zs(ie) || xe && !xe._f) && !so(ie) ? V(ee, ie, K) : M(ee, ie, K);
    }
  }, R = (E, L, K = {}) => {
    const ce = pe(r, E), ie = i.array.has(E), ee = It(L);
    Ye(a, E, ee), ie ? (f.array.next({
      name: E,
      values: { ...a }
    }), (u.isDirty || u.dirtyFields) && K.shouldDirty && f.state.next({
      name: E,
      dirtyFields: ds(o, a),
      isDirty: A(E, ee)
    })) : ce && !ce._f && !jt(ee) ? V(E, ee, K) : M(E, ee, K), Yu(E, i) && f.state.next({ ...n }), f.values.next({
      name: s.mount ? E : void 0,
      values: { ...a }
    });
  }, U = async (E) => {
    s.mount = !0;
    const L = E.target;
    let K = L.name, ce = !0;
    const ie = pe(r, K), ee = () => L.type ? fc(ie._f) : Tm(E), xe = (De) => {
      ce = Number.isNaN(De) || De === pe(a, K, De);
    };
    if (ie) {
      let De, Ke;
      const Qe = ee(), ht = E.type === Ls.BLUR || E.type === Ls.FOCUS_OUT, Yt = !eC(ie._f) && !t.resolver && !pe(n.errors, K) && !ie._f.deps || tC(ht, pe(n.touchedFields, K), n.isSubmitted, m, p), _e = Yu(K, i, ht);
      Ye(a, K, Qe), ht ? (ie._f.onBlur && ie._f.onBlur(E), c && c(0)) : ie._f.onChange && ie._f.onChange(E);
      const Ce = P(K, Qe, ht, !1), Ve = !Bt(Ce) || _e;
      if (!ht && f.values.next({
        name: K,
        type: E.type,
        values: { ...a }
      }), Yt)
        return u.isValid && g(), Ve && f.state.next({ name: K, ..._e ? {} : Ce });
      if (!ht && _e && f.state.next({ ...n }), t.resolver) {
        const { errors: Le } = await N([K]);
        if (xe(Qe), ce) {
          const Ze = ef(n.errors, r, K), Je = ef(Le, r, Ze.name || K);
          De = Je.error, K = Je.name, Ke = Bt(Le);
        }
      } else
        b([K], !0), De = (await Ju(ie, a, h, t.shouldUseNativeValidation))[K], b([K]), xe(Qe), ce && (De ? Ke = !1 : u.isValid && (Ke = await F(r, !0)));
      ce && (ie._f.deps && ne(ie._f.deps), S(K, Ke, De, Ce));
    }
  }, W = (E, L) => {
    if (pe(n.errors, L) && E.focus)
      return E.focus(), 1;
  }, ne = async (E, L = {}) => {
    let K, ce;
    const ie = $s(E);
    if (t.resolver) {
      const ee = await O(ut(E) ? E : ie);
      K = Bt(ee), ce = E ? !ie.some((xe) => pe(ee, xe)) : K;
    } else
      E ? (ce = (await Promise.all(ie.map(async (ee) => {
        const xe = pe(r, ee);
        return await F(xe && xe._f ? { [ee]: xe } : xe);
      }))).every(Boolean), !(!ce && !n.isValid) && g()) : ce = K = await F(r);
    return f.state.next({
      ...!_n(E) || u.isValid && K !== n.isValid ? {} : { name: E },
      ...t.resolver || !E ? { isValid: K } : {},
      errors: n.errors
    }), L.shouldFocus && !ce && qo(r, W, E ? ie : i.mount), ce;
  }, me = (E) => {
    const L = {
      ...o,
      ...s.mount ? a : {}
    };
    return ut(E) ? L : _n(E) ? pe(L, E) : E.map((K) => pe(L, K));
  }, Y = (E, L) => ({
    invalid: !!pe((L || n).errors, E),
    isDirty: !!pe((L || n).dirtyFields, E),
    isTouched: !!pe((L || n).touchedFields, E),
    isValidating: !!pe((L || n).validatingFields, E),
    error: pe((L || n).errors, E)
  }), ue = (E) => {
    E && $s(E).forEach((L) => xt(n.errors, L)), f.state.next({
      errors: E ? n.errors : {}
    });
  }, ye = (E, L, K) => {
    const ce = (pe(r, E, { _f: {} })._f || {}).ref;
    Ye(n.errors, E, {
      ...L,
      ref: ce
    }), f.state.next({
      name: E,
      errors: n.errors,
      isValid: !1
    }), K && K.shouldFocus && ce && ce.focus && ce.focus();
  }, fe = (E, L) => sr(E) ? f.values.subscribe({
    next: (K) => E(B(void 0, L), K)
  }) : B(E, L, !0), J = (E, L = {}) => {
    for (const K of E ? $s(E) : i.mount)
      i.mount.delete(K), i.array.delete(K), L.keepValue || (xt(r, K), xt(a, K)), !L.keepError && xt(n.errors, K), !L.keepDirty && xt(n.dirtyFields, K), !L.keepTouched && xt(n.touchedFields, K), !L.keepIsValidating && xt(n.validatingFields, K), !t.shouldUnregister && !L.keepDefaultValue && xt(o, K);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...n,
      ...L.keepDirty ? { isDirty: A() } : {}
    }), !L.keepIsValid && g();
  }, re = ({ disabled: E, name: L, field: K, fields: ce, value: ie }) => {
    if (tn(E)) {
      const ee = E ? void 0 : ut(ie) ? fc(K ? K._f : pe(ce, L)._f) : ie;
      Ye(a, L, ee), P(L, ee, !1, !1, !0);
    }
  }, he = (E, L = {}) => {
    let K = pe(r, E);
    const ce = tn(L.disabled);
    return Ye(r, E, {
      ...K || {},
      _f: {
        ...K && K._f ? K._f : { ref: { name: E } },
        name: E,
        mount: !0,
        ...L
      }
    }), i.mount.add(E), K ? re({
      field: K,
      disabled: L.disabled,
      name: E,
      value: L.value
    }) : C(E, !0, L.value), {
      ...ce ? { disabled: L.disabled } : {},
      ...t.progressive ? {
        required: !!L.required,
        min: Ho(L.min),
        max: Ho(L.max),
        minLength: Ho(L.minLength),
        maxLength: Ho(L.maxLength),
        pattern: Ho(L.pattern)
      } : {},
      name: E,
      onChange: U,
      onBlur: U,
      ref: (ie) => {
        if (ie) {
          he(E, L), K = pe(r, E);
          const ee = ut(ie.value) && ie.querySelectorAll && ie.querySelectorAll("input,select,textarea")[0] || ie, xe = Q2(ee), De = K._f.refs || [];
          if (xe ? De.find((Ke) => Ke === ee) : ee === K._f.ref)
            return;
          Ye(r, E, {
            _f: {
              ...K._f,
              ...xe ? {
                refs: [
                  ...De.filter(uc),
                  ee,
                  ...Array.isArray(pe(o, E)) ? [{}] : []
                ],
                ref: { type: ee.type, name: E }
              } : { ref: ee }
            }
          }), C(E, !1, void 0, ee);
        } else
          K = pe(r, E, {}), K._f && (K._f.mount = !1), (t.shouldUnregister || L.shouldUnregister) && !(Om(i.array, E) && s.action) && i.unMount.add(E);
      }
    };
  }, Ne = () => t.shouldFocusError && qo(r, W, i.mount), ae = (E) => {
    tn(E) && (f.state.next({ disabled: E }), qo(r, (L, K) => {
      let ce = E;
      const ie = pe(r, K);
      ie && tn(ie._f.disabled) && (ce || (ce = ie._f.disabled)), L.disabled = ce;
    }, 0, !1));
  }, de = (E, L) => async (K) => {
    let ce;
    K && (K.preventDefault && K.preventDefault(), K.persist && K.persist());
    let ie = It(a);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: ee, values: xe } = await N();
      n.errors = ee, ie = xe;
    } else
      await F(r);
    if (xt(n.errors, "root"), Bt(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await E(ie, K);
      } catch (ee) {
        ce = ee;
      }
    } else
      L && await L({ ...n.errors }, K), Ne(), setTimeout(Ne);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Bt(n.errors) && !ce,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), ce)
      throw ce;
  }, H = (E, L = {}) => {
    pe(r, E) && (ut(L.defaultValue) ? R(E, It(pe(o, E))) : (R(E, L.defaultValue), Ye(o, E, It(L.defaultValue))), L.keepTouched || xt(n.touchedFields, E), L.keepDirty || (xt(n.dirtyFields, E), n.isDirty = L.defaultValue ? A(E, It(pe(o, E))) : A()), L.keepError || (xt(n.errors, E), u.isValid && g()), f.state.next({ ...n }));
  }, te = (E, L = {}) => {
    const K = E ? It(E) : o, ce = It(K), ie = Bt(E), ee = ie ? o : ce;
    if (L.keepDefaultValues || (o = K), !L.keepValues) {
      if (L.keepDirtyValues)
        for (const xe of i.mount)
          pe(n.dirtyFields, xe) ? Ye(ee, xe, pe(a, xe)) : R(xe, pe(ee, xe));
      else {
        if (ld && ut(E))
          for (const xe of i.mount) {
            const De = pe(r, xe);
            if (De && De._f) {
              const Ke = Array.isArray(De._f.refs) ? De._f.refs[0] : De._f.ref;
              if (Fs(Ke)) {
                const Qe = Ke.closest("form");
                if (Qe) {
                  Qe.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      a = e.shouldUnregister ? L.keepDefaultValues ? It(o) : {} : It(ee), f.array.next({
        values: { ...ee }
      }), f.values.next({
        values: { ...ee }
      });
    }
    i = {
      mount: L.keepDirtyValues ? i.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !u.isValid || !!L.keepIsValid || !!L.keepDirtyValues, s.watch = !!e.shouldUnregister, f.state.next({
      submitCount: L.keepSubmitCount ? n.submitCount : 0,
      isDirty: ie ? !1 : L.keepDirty ? n.isDirty : !!(L.keepDefaultValues && !Er(E, o)),
      isSubmitted: L.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: ie ? [] : L.keepDirtyValues ? L.keepDefaultValues && a ? ds(o, a) : n.dirtyFields : L.keepDefaultValues && E ? ds(o, E) : {},
      touchedFields: L.keepTouched ? n.touchedFields : {},
      errors: L.keepErrors ? n.errors : {},
      isSubmitSuccessful: L.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, $e = (E, L) => te(sr(E) ? E(a) : E, L);
  return {
    control: {
      register: he,
      unregister: J,
      getFieldState: Y,
      handleSubmit: de,
      setError: ye,
      _executeSchema: N,
      _getWatch: B,
      _getDirty: A,
      _updateValid: g,
      _removeUnmounted: G,
      _updateFieldArray: x,
      _updateDisabledField: re,
      _getFieldArray: D,
      _reset: te,
      _resetDefaultValues: () => sr(t.defaultValues) && t.defaultValues().then((E) => {
        $e(E, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (E) => {
        n = {
          ...n,
          ...E
        };
      },
      _disableForm: ae,
      _subjects: f,
      _proxyFormState: u,
      _setErrors: $,
      get _fields() {
        return r;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return s;
      },
      set _state(E) {
        s = E;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return i;
      },
      set _names(E) {
        i = E;
      },
      get _formState() {
        return n;
      },
      set _formState(E) {
        n = E;
      },
      get _options() {
        return t;
      },
      set _options(E) {
        t = {
          ...t,
          ...E
        };
      }
    },
    trigger: ne,
    register: he,
    handleSubmit: de,
    watch: fe,
    setValue: R,
    getValues: me,
    reset: $e,
    resetField: H,
    clearErrors: ue,
    unregister: J,
    setError: ye,
    setFocus: (E, L = {}) => {
      const K = pe(r, E), ce = K && K._f;
      if (ce) {
        const ie = ce.refs ? ce.refs[0] : ce.ref;
        ie.focus && (ie.focus(), L.shouldSelect && ie.select());
      }
    },
    getFieldState: Y
  };
}
function Gm(e = {}) {
  const t = z.useRef(), n = z.useRef(), [r, o] = z.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: sr(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: sr(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...oC(e),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, dd({
    subject: a._subjects.state,
    next: (s) => {
      Am(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), z.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), z.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== r.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, r.isDirty]), z.useEffect(() => {
    e.values && !Er(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, o((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [e.values, a]), z.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), z.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), z.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = Rm(r, a), t.current;
}
const aC = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ w(le.label, k({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Ym = aC, sC = _o(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), On = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ym,
  {
    ref: n,
    className: T(sC(), e),
    ...t
  }
));
On.displayName = Ym.displayName;
const Zm = H2, qm = _.createContext(
  {}
), Ur = ({
  ...e
}) => /* @__PURE__ */ l.jsx(qm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ l.jsx(Y2, { ...e }) }), yi = () => {
  const e = _.useContext(qm), t = _.useContext(Xm), { getFieldState: n, formState: r } = xi(), o = n(e.name, r);
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
}, Xm = _.createContext(
  {}
), yr = _.forwardRef(({ className: e, ...t }, n) => {
  const r = _.useId();
  return /* @__PURE__ */ l.jsx(Xm.Provider, { value: { id: r }, children: /* @__PURE__ */ l.jsx("div", { ref: n, className: T("space-y-2", e), ...t }) });
});
yr.displayName = "FormItem";
const Kr = _.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = yi();
  return /* @__PURE__ */ l.jsx(
    On,
    {
      ref: n,
      className: T(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Kr.displayName = "FormLabel";
const Ha = _.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = yi();
  return /* @__PURE__ */ l.jsx(
    dn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Ha.displayName = "FormControl";
const ko = _.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = yi();
  return /* @__PURE__ */ l.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: T("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
ko.displayName = "FormDescription";
const iC = _.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = yi(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ l.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: T("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
iC.displayName = "FormMessage";
const Qm = "Dialog", [Jm, eh] = it(Qm), [cC, vn] = Jm(Qm), lC = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = Z(null), c = Z(null), [d = !1, u] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(cC, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: mt(),
    titleId: mt(),
    descriptionId: mt(),
    open: d,
    onOpenChange: u,
    onOpenToggle: ge(
      () => u(
        (f) => !f
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, dC = "DialogTrigger", uC = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = vn(dC, n), a = Ee(t, o.triggerRef);
  return /* @__PURE__ */ w(le.button, k({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": md(o.open)
  }, r, {
    ref: a,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), th = "DialogPortal", [fC, nh] = Jm(th, {
  forceMount: void 0
}), pC = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = vn(th, t);
  return /* @__PURE__ */ w(fC, {
    scope: t,
    forceMount: n
  }, Pr.map(
    r,
    (s) => /* @__PURE__ */ w(lt, {
      present: n || a.open
    }, /* @__PURE__ */ w(fi, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Wc = "DialogOverlay", mC = /* @__PURE__ */ I((e, t) => {
  const n = nh(Wc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = vn(Wc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(lt, {
    present: r || a.open
  }, /* @__PURE__ */ w(hC, k({}, o, {
    ref: t
  }))) : null;
}), hC = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = vn(Wc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(Fa, {
      as: dn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(le.div, k({
      "data-state": md(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), go = "DialogContent", vC = /* @__PURE__ */ I((e, t) => {
  const n = nh(go, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = vn(go, e.__scopeDialog);
  return /* @__PURE__ */ w(lt, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(gC, k({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(bC, k({}, o, {
    ref: t
  })));
}), gC = /* @__PURE__ */ I((e, t) => {
  const n = vn(go, e.__scopeDialog), r = Z(null), o = Ee(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return hi(a);
  }, []), /* @__PURE__ */ w(rh, k({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: X(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: X(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), bC = /* @__PURE__ */ I((e, t) => {
  const n = vn(go, e.__scopeDialog), r = Z(!1), o = Z(!1);
  return /* @__PURE__ */ w(rh, k({}, e, {
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
}), rh = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = vn(go, n), c = Z(null), d = Ee(t, c);
  return li(), /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w(di, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(Wr, k({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": md(i.open)
  }, s, {
    ref: d,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), oh = "DialogTitle", xC = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = vn(oh, n);
  return /* @__PURE__ */ w(le.h2, k({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), yC = "DialogDescription", wC = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = vn(yC, n);
  return /* @__PURE__ */ w(le.p, k({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), $C = "DialogClose", _C = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = vn($C, n);
  return /* @__PURE__ */ w(le.button, k({
    type: "button"
  }, r, {
    ref: t,
    onClick: X(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function md(e) {
  return e ? "open" : "closed";
}
const CC = "DialogTitleWarning", [SC, Q7] = Z1(CC, {
  contentName: go,
  titleName: oh,
  docsSlug: "dialog"
}), Ua = lC, wi = uC, Ka = pC, Gr = mC, Yr = vC, jo = xC, Mo = wC, Zr = _C, ah = Ua, J7 = wi, NC = Ka, eT = Zr, sh = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Gr,
  {
    ref: n,
    className: T(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
sh.displayName = Gr.displayName;
const hd = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(NC, { children: [
  /* @__PURE__ */ l.jsx(sh, {}),
  /* @__PURE__ */ l.jsxs(
    Yr,
    {
      ref: r,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ l.jsxs(Zr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ l.jsx(ii, { className: "h-4 w-4" }),
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
hd.displayName = Yr.displayName;
const EC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
EC.displayName = "DialogHeader";
const PC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
PC.displayName = "DialogFooter";
const kC = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  jo,
  {
    ref: n,
    className: T(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
kC.displayName = jo.displayName;
const jC = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Mo,
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
jC.displayName = Mo.displayName;
const MC = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
  const [d, u] = _.useState(!1);
  return s ? /* @__PURE__ */ l.jsxs("div", { className: T("w-full", a), children: [
    /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ l.jsx(Nt, { className: "h-5 w-full" }) }),
    r && /* @__PURE__ */ l.jsx(Nt, { className: "h-5 w-full" }),
    /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ l.jsx(Nt, { className: "h-4 w-4 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }),
      /* @__PURE__ */ l.jsx(
        Nt,
        {
          className: i()
        }
      ),
      o === "right" && /* @__PURE__ */ l.jsx(Nt, { className: "h-4 w-4 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" })
    ] })
  ] }) : c.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: T("w-full", a), children: [
    /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ l.jsxs(On, { className: "flex", htmlFor: e, children: [
      n,
      " "
    ] }) }),
    r && /* @__PURE__ */ l.jsx("p", { className: "text-muted-foreground text-xs", children: r }),
    /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          onClick: () => u((f) => !f),
          className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
          tabIndex: -1,
          children: d ? /* @__PURE__ */ l.jsx(ts, { size: 18 }) : /* @__PURE__ */ l.jsx(es, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ l.jsx(
        aa,
        {
          ...c,
          className: T(i(), c.className),
          type: d ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => u((f) => !f),
          children: d ? /* @__PURE__ */ l.jsx(ts, { size: 18 }) : /* @__PURE__ */ l.jsx(es, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ l.jsx(
    Ur,
    {
      control: t.control,
      name: e,
      render: ({ field: f, formState: p }) => {
        var m;
        return /* @__PURE__ */ l.jsxs(yr, { className: T("w-full", a), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ l.jsxs(Kr, { className: "flex", children: [
              n,
              " "
            ] }),
            ((m = p == null ? void 0 : p.errors[e]) == null ? void 0 : m.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              p.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ l.jsx(ko, { className: "text-xs", children: r }),
          /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ l.jsx(Ha, { children: /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => u((h) => !h),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                disabled: c == null ? void 0 : c.disabled,
                children: d ? /* @__PURE__ */ l.jsx(ts, { size: 18 }) : /* @__PURE__ */ l.jsx(es, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ l.jsx(
              aa,
              {
                ...f,
                ...c,
                disabled: c == null ? void 0 : c.disabled,
                className: T(i(), c.className),
                type: d ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => u((h) => !h),
                children: d ? /* @__PURE__ */ l.jsx(ts, { size: 18 }) : /* @__PURE__ */ l.jsx(es, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, TC = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: d }) => c || c && d.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: T("w-full", s), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ l.jsx(Nt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ l.jsx(Nt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(
    Nt,
    {
      className: T(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : d.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: T("w-full", s), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ l.jsxs(On, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ l.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ l.jsx(
      aa,
      {
        ...d,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ l.jsx(
  Ur,
  {
    control: t.control,
    name: e,
    render: ({ field: u, formState: f }) => {
      var p;
      return /* @__PURE__ */ l.jsxs(yr, { className: T("w-full", s), children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ l.jsxs(Kr, { className: "flex", children: [
            r,
            " "
          ] }),
          ((p = f == null ? void 0 : f.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            f.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ l.jsx(ko, { className: "text-xs", children: o }),
        /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ l.jsx(Ha, { children: /* @__PURE__ */ l.jsx(
            aa,
            {
              ...u,
              ...d,
              disabled: d == null ? void 0 : d.disabled,
              className: i()
            }
          ) }),
          a === "right" && n && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
        ] })
      ] });
    }
  }
), aa = _.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ l.jsx(
    "input",
    {
      type: t,
      className: T(
        "w-full flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
aa.displayName = "InputUI";
function vd({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const d = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ l.jsx(
    MC,
    {
      id: t,
      validateInputIconClassNames: d,
      classNameContainer: r,
      iconDirection: i,
      description: o,
      isLoading: s,
      label: n,
      form: (c == null ? void 0 : c.form) || null,
      rest: c
    }
  ) : /* @__PURE__ */ l.jsx(
    TC,
    {
      id: t,
      validateInputIconClassNames: d,
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
const OC = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), DC = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, tf = (e) => {
  const t = [
    Fo.VENEZUELAN,
    Fo.JURIDICAL,
    Fo.FOREIGN,
    Fo.PASSPORT,
    Fo.GOVERNMENTAL
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
    defaultValue: tf(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: tf(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function tT({ form: e, pid: t = St, format: n = !0 }) {
  var o, a, s, i, c, d, u, f, p, m, h, v, g, b, x, y, $;
  const r = (C) => {
    var O;
    const { value: P } = C.target, S = n ? OC(P) : P, N = ((O = t == null ? void 0 : t.number) == null ? void 0 : O.id) || St.number.id;
    e.setValue(N, S);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ l.jsx(
      _3,
      {
        id: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.id) || St.type.id,
        form: e,
        label: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.label) || St.type.label,
        items: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.items) || St.type.items,
        tabIndex: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.tabIndex) || St.type.tabIndex,
        placeholder: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.placeholder) || St.type.placeholder,
        defaultValue: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.defaultValue) || St.type.defaultValue,
        notFoundLabel: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.notFoundLabel) || St.type.notFoundLabel,
        ctaPlaceholder: ((f = t == null ? void 0 : t.type) == null ? void 0 : f.ctaPlaceholder) || St.type.ctaPlaceholder,
        buttonClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.buttonClassName) || St.type.buttonClassName,
        popoverClassName: ((m = t == null ? void 0 : t.type) == null ? void 0 : m.popoverClassName) || St.type.popoverClassName,
        disabled: (h = t == null ? void 0 : t.type) == null ? void 0 : h.disabled
      }
    ),
    /* @__PURE__ */ l.jsx(
      vd,
      {
        id: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.id) || St.number.id,
        form: e,
        type: "text",
        defaultValue: (g = t == null ? void 0 : t.number) == null ? void 0 : g.defaultValue,
        onKeyPress: DC,
        onKeyUp: r,
        tabIndex: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.tabIndex) || St.number.tabIndex,
        maxLength: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.maxLength) || St.number.maxLength,
        placeholder: ((y = t == null ? void 0 : t.number) == null ? void 0 : y.placeholder) || St.number.placeholder,
        disabled: ($ = t == null ? void 0 : t.number) == null ? void 0 : $.disabled
      }
    )
  ] });
}
const ih = "Popover", [ch, nT] = it(ih, [
  Tn
]), gd = Tn(), [RC, To] = ch(ih), AC = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = gd(t), c = Z(null), [d, u] = q(!1), [f = !1, p] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(Po, i, /* @__PURE__ */ w(RC, {
    scope: t,
    contentId: mt(),
    triggerRef: c,
    open: f,
    onOpenChange: p,
    onOpenToggle: ge(
      () => p(
        (m) => !m
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: d,
    onCustomAnchorAdd: ge(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: ge(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, IC = "PopoverTrigger", LC = /* @__PURE__ */ I((e, t) => {
  const { __scopePopover: n, ...r } = e, o = To(IC, n), a = gd(n), s = Ee(t, o.triggerRef), i = /* @__PURE__ */ w(le.button, k({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": uh(o.open)
  }, r, {
    ref: s,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ w(Ia, k({
    asChild: !0
  }, a), i);
}), lh = "PopoverPortal", [FC, VC] = ch(lh, {
  forceMount: void 0
}), zC = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = To(lh, t);
  return /* @__PURE__ */ w(FC, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(lt, {
    present: n || a.open
  }, /* @__PURE__ */ w(fi, {
    asChild: !0,
    container: o
  }, r)));
}, sa = "PopoverContent", BC = /* @__PURE__ */ I((e, t) => {
  const n = VC(sa, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = To(sa, e.__scopePopover);
  return /* @__PURE__ */ w(lt, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(WC, k({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(HC, k({}, o, {
    ref: t
  })));
}), WC = /* @__PURE__ */ I((e, t) => {
  const n = To(sa, e.__scopePopover), r = Z(null), o = Ee(t, r), a = Z(!1);
  return Q(() => {
    const s = r.current;
    if (s)
      return hi(s);
  }, []), /* @__PURE__ */ w(Fa, {
    as: dn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(dh, k({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: X(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, d = i.button === 2 || c;
      a.current = d;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: X(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), HC = /* @__PURE__ */ I((e, t) => {
  const n = To(sa, e.__scopePopover), r = Z(!1), o = Z(!1);
  return /* @__PURE__ */ w(dh, k({}, e, {
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
}), dh = /* @__PURE__ */ I((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: d, onInteractOutside: u, ...f } = e, p = To(sa, n), m = gd(n);
  return li(), /* @__PURE__ */ w(di, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: d,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ w(La, k({
    "data-state": uh(p.open),
    role: "dialog",
    id: p.contentId
  }, m, f, {
    ref: t,
    style: {
      ...f.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function uh(e) {
  return e ? "open" : "closed";
}
const UC = AC, KC = LC, GC = zC, fh = BC, Hn = UC, Un = KC, Pn = _.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l.jsx(GC, { children: /* @__PURE__ */ l.jsx(
  fh,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: T(
      "z-50 w-72 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Pn.displayName = fh.displayName;
const ph = _.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
    "textarea",
    {
      className: T(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
ph.displayName = "TextareaUI";
const rT = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i || i && c.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: T("w-full"), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ l.jsx(Nt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ l.jsx(Nt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(
    Nt,
    {
      className: T("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ l.jsx(
  Ur,
  {
    control: t.control,
    name: e,
    render: ({ field: d, formState: u }) => {
      var f;
      return /* @__PURE__ */ l.jsxs(yr, { className: T("w-full", s), children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ l.jsxs(Kr, { className: "flex", children: [
            n,
            " "
          ] }),
          ((f = u == null ? void 0 : u.errors[e]) == null ? void 0 : f.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            u.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ l.jsx(ko, { className: "text-xs", children: o }),
        /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ l.jsx(Ha, { children: /* @__PURE__ */ l.jsx(
          ph,
          {
            placeholder: a,
            className: T("resize-none", r),
            ...d,
            ...c
          }
        ) })
      ] });
    }
  }
);
function ia(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Oo(e) {
  const t = Z({
    value: e,
    previous: e
  });
  return Kt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const mh = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ w(le.span, k({}, e, {
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
}))), hh = mh, YC = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], ZC = [
  " ",
  "Enter"
], $i = "Select", [_i, bd, qC] = gr($i), [Do, oT] = it($i, [
  qC,
  Tn
]), xd = Tn(), [XC, qr] = Do($i), [QC, JC] = Do($i), eS = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: d, name: u, autoComplete: f, disabled: p, required: m } = e, h = xd(t), [v, g] = q(null), [b, x] = q(null), [y, $] = q(!1), C = Mn(d), [P = !1, S] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [N, O] = ft({
    prop: s,
    defaultProp: i,
    onChange: c
  }), F = Z(null), G = v ? !!v.closest("form") : !0, [A, B] = q(/* @__PURE__ */ new Set()), D = Array.from(A).map(
    (M) => M.props.value
  ).join(";");
  return /* @__PURE__ */ w(Po, h, /* @__PURE__ */ w(XC, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: x,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: $,
    contentId: mt(),
    value: N,
    onValueChange: O,
    open: P,
    onOpenChange: S,
    dir: C,
    triggerPointerDownPosRef: F,
    disabled: p
  }, /* @__PURE__ */ w(_i.Provider, {
    scope: t
  }, /* @__PURE__ */ w(QC, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ge((M) => {
      B(
        (V) => new Set(V).add(M)
      );
    }, []),
    onNativeOptionRemove: ge((M) => {
      B((V) => {
        const R = new Set(V);
        return R.delete(M), R;
      });
    }, [])
  }, n)), G ? /* @__PURE__ */ w(xh, {
    key: D,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: f,
    value: N,
    onChange: (M) => O(M.target.value),
    disabled: p
  }, N === void 0 ? /* @__PURE__ */ w("option", {
    value: ""
  }) : null, Array.from(A)) : null));
}, tS = "SelectTrigger", nS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = xd(n), s = qr(tS, n), i = s.disabled || r, c = Ee(t, s.onTriggerChange), d = bd(n), [u, f, p] = yh((h) => {
    const v = d().filter(
      (x) => !x.disabled
    ), g = v.find(
      (x) => x.value === s.value
    ), b = wh(v, h, g);
    b !== void 0 && s.onValueChange(b.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ w(Ia, k({
    asChild: !0
  }, a), /* @__PURE__ */ w(le.button, k({
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
    "data-placeholder": bh(s.value) ? "" : void 0
  }, o, {
    ref: c,
    onClick: X(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: X(o.onPointerDown, (h) => {
      const v = h.target;
      v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: X(o.onKeyDown, (h) => {
      const v = u.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(v && h.key === " ") && YC.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), rS = "SelectValue", oS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = qr(rS, n), { onValueNodeHasChildrenChange: d } = c, u = a !== void 0, f = Ee(t, c.onValueNodeChange);
  return $t(() => {
    d(u);
  }, [
    d,
    u
  ]), /* @__PURE__ */ w(le.span, k({}, i, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), bh(c.value) ? /* @__PURE__ */ w(ln, null, s) : a);
}), aS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ w(le.span, k({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), sS = (e) => /* @__PURE__ */ w(fi, k({
  asChild: !0
}, e)), bo = "SelectContent", iS = /* @__PURE__ */ I((e, t) => {
  const n = qr(bo, e.__scopeSelect), [r, o] = q();
  if ($t(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ qf(/* @__PURE__ */ w(vh, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w(_i.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ w(cS, k({}, e, {
    ref: t
  }));
}), Vn = 10, [vh, Ci] = Do(bo), cS = /* @__PURE__ */ I((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    side: i,
    sideOffset: c,
    align: d,
    alignOffset: u,
    arrowPadding: f,
    collisionBoundary: p,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: g,
    //
    ...b
  } = e, x = qr(bo, n), [y, $] = q(null), [C, P] = q(null), S = Ee(
    t,
    (re) => $(re)
  ), [N, O] = q(null), [F, G] = q(null), A = bd(n), [B, D] = q(!1), M = Z(!1);
  Q(() => {
    if (y)
      return hi(y);
  }, [
    y
  ]), li();
  const V = ge((re) => {
    const [he, ...Ne] = A().map(
      (H) => H.ref.current
    ), [ae] = Ne.slice(-1), de = document.activeElement;
    for (const H of re)
      if (H === de || (H == null || H.scrollIntoView({
        block: "nearest"
      }), H === he && C && (C.scrollTop = 0), H === ae && C && (C.scrollTop = C.scrollHeight), H == null || H.focus(), document.activeElement !== de))
        return;
  }, [
    A,
    C
  ]), R = ge(
    () => V([
      N,
      y
    ]),
    [
      V,
      N,
      y
    ]
  );
  Q(() => {
    B && R();
  }, [
    B,
    R
  ]);
  const { onOpenChange: U, triggerPointerDownPosRef: W } = x;
  Q(() => {
    if (y) {
      let re = {
        x: 0,
        y: 0
      };
      const he = (ae) => {
        var de, H, te, $e;
        re = {
          x: Math.abs(Math.round(ae.pageX) - ((de = (H = W.current) === null || H === void 0 ? void 0 : H.x) !== null && de !== void 0 ? de : 0)),
          y: Math.abs(Math.round(ae.pageY) - ((te = ($e = W.current) === null || $e === void 0 ? void 0 : $e.y) !== null && te !== void 0 ? te : 0))
        };
      }, Ne = (ae) => {
        re.x <= 10 && re.y <= 10 ? ae.preventDefault() : y.contains(ae.target) || U(!1), document.removeEventListener("pointermove", he), W.current = null;
      };
      return W.current !== null && (document.addEventListener("pointermove", he), document.addEventListener("pointerup", Ne, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", he), document.removeEventListener("pointerup", Ne, {
          capture: !0
        });
      };
    }
  }, [
    y,
    U,
    W
  ]), Q(() => {
    const re = () => U(!1);
    return window.addEventListener("blur", re), window.addEventListener("resize", re), () => {
      window.removeEventListener("blur", re), window.removeEventListener("resize", re);
    };
  }, [
    U
  ]);
  const [ne, me] = yh((re) => {
    const he = A().filter(
      (de) => !de.disabled
    ), Ne = he.find(
      (de) => de.ref.current === document.activeElement
    ), ae = wh(he, re, Ne);
    ae && setTimeout(
      () => ae.ref.current.focus()
    );
  }), Y = ge((re, he, Ne) => {
    const ae = !M.current && !Ne;
    (x.value !== void 0 && x.value === he || ae) && (O(re), ae && (M.current = !0));
  }, [
    x.value
  ]), ue = ge(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), ye = ge((re, he, Ne) => {
    const ae = !M.current && !Ne;
    (x.value !== void 0 && x.value === he || ae) && G(re);
  }, [
    x.value
  ]), fe = r === "popper" ? nf : lS, J = fe === nf ? {
    side: i,
    sideOffset: c,
    align: d,
    alignOffset: u,
    arrowPadding: f,
    collisionBoundary: p,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ w(vh, {
    scope: n,
    content: y,
    viewport: C,
    onViewportChange: P,
    itemRefCallback: Y,
    selectedItem: N,
    onItemLeave: ue,
    itemTextRefCallback: ye,
    focusSelectedItem: R,
    selectedItemText: F,
    position: r,
    isPositioned: B,
    searchRef: ne
  }, /* @__PURE__ */ w(Fa, {
    as: dn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(di, {
    asChild: !0,
    trapped: x.open,
    onMountAutoFocus: (re) => {
      re.preventDefault();
    },
    onUnmountAutoFocus: X(o, (re) => {
      var he;
      (he = x.trigger) === null || he === void 0 || he.focus({
        preventScroll: !0
      }), re.preventDefault();
    })
  }, /* @__PURE__ */ w(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (re) => re.preventDefault(),
    onDismiss: () => x.onOpenChange(!1)
  }, /* @__PURE__ */ w(fe, k({
    role: "listbox",
    id: x.contentId,
    "data-state": x.open ? "open" : "closed",
    dir: x.dir,
    onContextMenu: (re) => re.preventDefault()
  }, b, J, {
    onPlaced: () => D(!0),
    ref: S,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: X(b.onKeyDown, (re) => {
      const he = re.ctrlKey || re.altKey || re.metaKey;
      if (re.key === "Tab" && re.preventDefault(), !he && re.key.length === 1 && me(re.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(re.key)) {
        let ae = A().filter(
          (de) => !de.disabled
        ).map(
          (de) => de.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(re.key) && (ae = ae.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(re.key)) {
          const de = re.target, H = ae.indexOf(de);
          ae = ae.slice(H + 1);
        }
        setTimeout(
          () => V(ae)
        ), re.preventDefault();
      }
    })
  }))))));
}), lS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = qr(bo, n), s = Ci(bo, n), [i, c] = q(null), [d, u] = q(null), f = Ee(
    t,
    (S) => u(S)
  ), p = bd(n), m = Z(!1), h = Z(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: x } = s, y = ge(() => {
    if (a.trigger && a.valueNode && i && d && v && g && b) {
      const S = a.trigger.getBoundingClientRect(), N = d.getBoundingClientRect(), O = a.valueNode.getBoundingClientRect(), F = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const de = F.left - N.left, H = O.left - de, te = S.left - H, $e = S.width + te, Pe = Math.max($e, N.width), Ie = window.innerWidth - Vn, ke = ia(H, [
          Vn,
          Ie - Pe
        ]);
        i.style.minWidth = $e + "px", i.style.left = ke + "px";
      } else {
        const de = N.right - F.right, H = window.innerWidth - O.right - de, te = window.innerWidth - S.right - H, $e = S.width + te, Pe = Math.max($e, N.width), Ie = window.innerWidth - Vn, ke = ia(H, [
          Vn,
          Ie - Pe
        ]);
        i.style.minWidth = $e + "px", i.style.right = ke + "px";
      }
      const G = p(), A = window.innerHeight - Vn * 2, B = v.scrollHeight, D = window.getComputedStyle(d), M = parseInt(D.borderTopWidth, 10), V = parseInt(D.paddingTop, 10), R = parseInt(D.borderBottomWidth, 10), U = parseInt(D.paddingBottom, 10), W = M + V + B + U + R, ne = Math.min(g.offsetHeight * 5, W), me = window.getComputedStyle(v), Y = parseInt(me.paddingTop, 10), ue = parseInt(me.paddingBottom, 10), ye = S.top + S.height / 2 - Vn, fe = A - ye, J = g.offsetHeight / 2, re = g.offsetTop + J, he = M + V + re, Ne = W - he;
      if (he <= ye) {
        const de = g === G[G.length - 1].ref.current;
        i.style.bottom = "0px";
        const H = d.clientHeight - v.offsetTop - v.offsetHeight, te = Math.max(fe, J + (de ? ue : 0) + H + R), $e = he + te;
        i.style.height = $e + "px";
      } else {
        const de = g === G[0].ref.current;
        i.style.top = "0px";
        const te = Math.max(ye, M + v.offsetTop + (de ? Y : 0) + J) + Ne;
        i.style.height = te + "px", v.scrollTop = he - ye + v.offsetTop;
      }
      i.style.margin = `${Vn}px 0`, i.style.minHeight = ne + "px", i.style.maxHeight = A + "px", r == null || r(), requestAnimationFrame(
        () => m.current = !0
      );
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    i,
    d,
    v,
    g,
    b,
    a.dir,
    r
  ]);
  $t(
    () => y(),
    [
      y
    ]
  );
  const [$, C] = q();
  $t(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [
    d
  ]);
  const P = ge((S) => {
    S && h.current === !0 && (y(), x == null || x(), h.current = !1);
  }, [
    y,
    x
  ]);
  return /* @__PURE__ */ w(dS, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: P
  }, /* @__PURE__ */ w("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: $
    }
  }, /* @__PURE__ */ w(le.div, k({}, o, {
    ref: f,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), nf = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Vn, ...a } = e, s = xd(n);
  return /* @__PURE__ */ w(La, k({}, s, a, {
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
}), [dS, uS] = Do(bo, {}), rf = "SelectViewport", fS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Ci(rf, n), a = uS(rf, n), s = Ee(t, o.onViewportChange), i = Z(0);
  return /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(_i.Slot, {
    scope: n
  }, /* @__PURE__ */ w(le.div, k({
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
    onScroll: X(r.onScroll, (c) => {
      const d = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: f } = a;
      if (f != null && f.current && u) {
        const p = Math.abs(i.current - d.scrollTop);
        if (p > 0) {
          const m = window.innerHeight - Vn * 2, h = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(h, v);
          if (g < m) {
            const b = g + p, x = Math.min(m, b), y = b - x;
            u.style.height = x + "px", u.style.bottom === "0px" && (d.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = d.scrollTop;
    })
  }))));
}), pS = "SelectGroup", [mS, hS] = Do(pS), vS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = mt();
  return /* @__PURE__ */ w(mS, {
    scope: n,
    id: o
  }, /* @__PURE__ */ w(le.div, k({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), gS = "SelectLabel", bS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = hS(gS, n);
  return /* @__PURE__ */ w(le.div, k({
    id: o.id
  }, r, {
    ref: t
  }));
}), Hc = "SelectItem", [xS, gh] = Do(Hc), yS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = qr(Hc, n), c = Ci(Hc, n), d = i.value === r, [u, f] = q(a ?? ""), [p, m] = q(!1), h = Ee(t, (b) => {
    var x;
    return (x = c.itemRefCallback) === null || x === void 0 ? void 0 : x.call(c, b, r, o);
  }), v = mt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  if (r === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ w(xS, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: d,
    onItemTextChange: ge((b) => {
      f((x) => {
        var y;
        return x || ((y = b == null ? void 0 : b.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ w(_i.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ w(le.div, k({
    role: "option",
    "aria-labelledby": v,
    "data-highlighted": p ? "" : void 0,
    "aria-selected": d && p,
    "data-state": d ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, s, {
    ref: h,
    onFocus: X(
      s.onFocus,
      () => m(!0)
    ),
    onBlur: X(
      s.onBlur,
      () => m(!1)
    ),
    onPointerUp: X(s.onPointerUp, g),
    onPointerMove: X(s.onPointerMove, (b) => {
      if (o) {
        var x;
        (x = c.onItemLeave) === null || x === void 0 || x.call(c);
      } else
        b.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: X(s.onPointerLeave, (b) => {
      if (b.currentTarget === document.activeElement) {
        var x;
        (x = c.onItemLeave) === null || x === void 0 || x.call(c);
      }
    }),
    onKeyDown: X(s.onKeyDown, (b) => {
      var x;
      ((x = c.searchRef) === null || x === void 0 ? void 0 : x.current) !== "" && b.key === " " || (ZC.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), us = "SelectItemText", wS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = qr(us, n), i = Ci(us, n), c = gh(us, n), d = JC(us, n), [u, f] = q(null), p = Ee(
    t,
    (b) => f(b),
    c.onItemTextChange,
    (b) => {
      var x;
      return (x = i.itemTextRefCallback) === null || x === void 0 ? void 0 : x.call(i, b, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, h = Kt(
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
  ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = d;
  return $t(() => (v(h), () => g(h)), [
    v,
    g,
    h
  ]), /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w(le.span, k({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ qf(a.children, s.valueNode) : null);
}), $S = "SelectItemIndicator", _S = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return gh($S, n).isSelected ? /* @__PURE__ */ w(le.span, k({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), CS = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, k({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
});
function bh(e) {
  return e === "" || e === void 0;
}
const xh = /* @__PURE__ */ I((e, t) => {
  const { value: n, ...r } = e, o = Z(null), a = Ee(t, o), s = Oo(n);
  return Q(() => {
    const i = o.current, c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(c, "value").set;
    if (s !== n && u) {
      const f = new Event("change", {
        bubbles: !0
      });
      u.call(i, n), i.dispatchEvent(f);
    }
  }, [
    s,
    n
  ]), /* @__PURE__ */ w(mh, {
    asChild: !0
  }, /* @__PURE__ */ w("select", k({}, r, {
    ref: a,
    defaultValue: n
  })));
});
xh.displayName = "BubbleSelect";
function yh(e) {
  const t = Xe(e), n = Z(""), r = Z(0), o = ge((s) => {
    const i = n.current + s;
    t(i), function c(d) {
      n.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = ge(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return Q(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function wh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (d) => d === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = SS(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (d) => d !== n
  ));
  const c = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function SS(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const NS = eS, $h = nS, ES = oS, PS = aS, kS = sS, _h = iS, jS = fS, MS = vS, Ch = bS, Sh = yS, TS = wS, OS = _S, Nh = CS, yd = NS, DS = MS, wd = ES, Si = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  $h,
  {
    ref: r,
    className: T(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(PS, { asChild: !0, children: /* @__PURE__ */ l.jsx(Jo, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Si.displayName = $h.displayName;
const Ni = _.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ l.jsx(kS, { children: /* @__PURE__ */ l.jsx(
  _h,
  {
    ref: o,
    className: T(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ l.jsx(
      jS,
      {
        className: T(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Ni.displayName = _h.displayName;
const RS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ch,
  {
    ref: n,
    className: T("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
RS.displayName = Ch.displayName;
const Ei = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Sh,
  {
    ref: r,
    className: T(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(OS, { children: /* @__PURE__ */ l.jsx(Xt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ l.jsx(TS, { children: t })
    ]
  }
));
Ei.displayName = Sh.displayName;
const AS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Nh,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
AS.displayName = Nh.displayName;
const Eh = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: T(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Eh.displayName = "Card";
const IS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: T("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
IS.displayName = "CardHeader";
const LS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "h3",
  {
    ref: n,
    className: T(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
LS.displayName = "CardTitle";
const FS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "p",
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
FS.displayName = "CardDescription";
const VS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: T("p-6 pt-0", e), ...t }));
VS.displayName = "CardContent";
const zS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: T(" flex items-center p-6 pt-0", e),
    ...t
  }
));
zS.displayName = "CardFooter";
const Ph = "Checkbox", [BS, aT] = it(Ph), [WS, HS] = BS(Ph), US = /* @__PURE__ */ I((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: d, ...u } = e, [f, p] = q(null), m = Ee(
    t,
    (y) => p(y)
  ), h = Z(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = ft({
    prop: o,
    defaultProp: a,
    onChange: d
  }), x = Z(g);
  return Q(() => {
    const y = f == null ? void 0 : f.form;
    if (y) {
      const $ = () => b(x.current);
      return y.addEventListener("reset", $), () => y.removeEventListener("reset", $);
    }
  }, [
    f,
    b
  ]), /* @__PURE__ */ w(WS, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ w(le.button, k({
    type: "button",
    role: "checkbox",
    "aria-checked": jr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": kh(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onKeyDown: X(e.onKeyDown, (y) => {
      y.key === "Enter" && y.preventDefault();
    }),
    onClick: X(e.onClick, (y) => {
      b(
        ($) => jr($) ? !0 : !$
      ), v && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(YS, {
    control: f,
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
}), KS = "CheckboxIndicator", GS = /* @__PURE__ */ I((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = HS(KS, n);
  return /* @__PURE__ */ w(lt, {
    present: r || jr(a.state) || a.state === !0
  }, /* @__PURE__ */ w(le.span, k({
    "data-state": kh(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), YS = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = Z(null), s = Oo(n), i = Aa(t);
  return Q(() => {
    const c = a.current, d = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = jr(n), f.call(c, jr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", k({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: jr(n) ? !1 : n
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
function jr(e) {
  return e === "indeterminate";
}
function kh(e) {
  return jr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const jh = US, ZS = GS, Mh = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  jh,
  {
    ref: n,
    className: T(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(
      ZS,
      {
        className: T("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ l.jsx(Xt, { className: "h-4 w-4" })
      }
    )
  }
));
Mh.displayName = jh.displayName;
const Th = "DropdownMenu", [qS, sT] = it(Th, [
  Va
]), Rt = Va(), [XS, Oh] = qS(Th), QS = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = Rt(t), d = Z(null), [u = !1, f] = ft({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ w(XS, {
    scope: t,
    triggerId: mt(),
    triggerRef: d,
    contentId: mt(),
    open: u,
    onOpenChange: f,
    onOpenToggle: ge(
      () => f(
        (p) => !p
      ),
      [
        f
      ]
    ),
    modal: i
  }, /* @__PURE__ */ w(Yl, k({}, c, {
    open: u,
    onOpenChange: f,
    dir: r,
    modal: i
  }), n));
}, JS = "DropdownMenuTrigger", eN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Oh(JS, n), s = Rt(n);
  return /* @__PURE__ */ w(Zl, k({
    asChild: !0
  }, s), /* @__PURE__ */ w(le.button, k({
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
    onPointerDown: X(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: X(e.onKeyDown, (i) => {
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
}), tN = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Rt(t);
  return /* @__PURE__ */ w(ql, k({}, r, n));
}, nN = "DropdownMenuContent", rN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Oh(nN, n), a = Rt(n), s = Z(!1);
  return /* @__PURE__ */ w(Xl, k({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: X(e.onInteractOutside, (i) => {
      const c = i.detail.originalEvent, d = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || d;
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
}), oN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Ql, k({}, o, r, {
    ref: t
  }));
}), aN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Jl, k({}, o, r, {
    ref: t
  }));
}), sN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(ed, k({}, o, r, {
    ref: t
  }));
}), iN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(td, k({}, o, r, {
    ref: t
  }));
}), cN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(nd, k({}, o, r, {
    ref: t
  }));
}), lN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(rd, k({}, o, r, {
    ref: t
  }));
}), dN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(od, k({}, o, r, {
    ref: t
  }));
}), uN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(ad, k({}, o, r, {
    ref: t
  }));
}), fN = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Rt(t), [i = !1, c] = ft({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(sd, k({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, pN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(id, k({}, o, r, {
    ref: t
  }));
}), mN = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(cd, k({}, o, r, {
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
}), hN = QS, vN = eN, Dh = tN, Rh = rN, gN = oN, Ah = aN, Ih = sN, Lh = iN, bN = cN, Fh = lN, Vh = dN, zh = uN, xN = fN, Bh = pN, Wh = mN, iT = hN, cT = vN, lT = gN, dT = Dh, uT = xN, fT = bN, yN = _.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Bh,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ l.jsx(vr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
yN.displayName = Bh.displayName;
const wN = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Wh,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
wN.displayName = Wh.displayName;
const $N = _.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l.jsx(Dh, { children: /* @__PURE__ */ l.jsx(
  Rh,
  {
    ref: r,
    sideOffset: t,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
$N.displayName = Rh.displayName;
const _N = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Ih,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
_N.displayName = Ih.displayName;
const CN = _.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Lh,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Vh, { children: /* @__PURE__ */ l.jsx(Xt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
CN.displayName = Lh.displayName;
const SN = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Fh,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Vh, { children: /* @__PURE__ */ l.jsx(si, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
SN.displayName = Fh.displayName;
const NN = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Ah,
  {
    ref: r,
    className: T(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
NN.displayName = Ah.displayName;
const EN = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  zh,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
EN.displayName = zh.displayName;
const PN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: T("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
PN.displayName = "DropdownMenuShortcut";
const Uc = "horizontal", kN = [
  "horizontal",
  "vertical"
], Hh = /* @__PURE__ */ I((e, t) => {
  const { decorative: n, orientation: r = Uc, ...o } = e, a = Uh(r) ? r : Uc, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ w(le.div, k({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
Hh.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Uh(r) ? new Error(jN(o, n)) : null;
  }
};
function jN(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Uc}\`.`;
}
function Uh(e) {
  return kN.includes(e);
}
const Kh = Hh, Ga = _.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ l.jsx(
    Kh,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: T(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
Ga.displayName = Kh.displayName;
var of = 1, MN = 0.9, TN = 0.8, ON = 0.17, pc = 0.1, mc = 0.999, DN = 0.9999, RN = 0.99, AN = /[\\\/_+.#"@\[\(\{&]/, IN = /[\\\/_+.#"@\[\(\{&]/g, LN = /[\s-]/, Gh = /[\s-]/g;
function Kc(e, t, n, r, o, a, s) {
  if (a === t.length)
    return o === e.length ? of : RN;
  var i = `${o},${a}`;
  if (s[i] !== void 0)
    return s[i];
  for (var c = r.charAt(a), d = n.indexOf(c, o), u = 0, f, p, m, h; d >= 0; )
    f = Kc(e, t, n, r, d + 1, a + 1, s), f > u && (d === o ? f *= of : AN.test(e.charAt(d - 1)) ? (f *= TN, m = e.slice(o, d - 1).match(IN), m && o > 0 && (f *= Math.pow(mc, m.length))) : LN.test(e.charAt(d - 1)) ? (f *= MN, h = e.slice(o, d - 1).match(Gh), h && o > 0 && (f *= Math.pow(mc, h.length))) : (f *= ON, o > 0 && (f *= Math.pow(mc, d - o))), e.charAt(d) !== t.charAt(a) && (f *= DN)), (f < pc && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = Kc(e, t, n, r, d + 1, a + 2, s), p * pc > f && (f = p * pc)), f > u && (u = f), d = n.indexOf(c, d + 1);
  return s[i] = u, u;
}
function af(e) {
  return e.toLowerCase().replace(Gh, " ");
}
function FN(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Kc(e, t, af(e), af(t), 0, 0, {});
}
var Uo = '[cmdk-group=""]', hc = '[cmdk-group-items=""]', VN = '[cmdk-group-heading=""]', $d = '[cmdk-item=""]', sf = `${$d}:not([aria-disabled="true"])`, Gc = "cmdk-item-select", Sr = "data-value", zN = (e, t, n) => FN(e, t, n), Yh = _.createContext(void 0), Ya = () => _.useContext(Yh), Zh = _.createContext(void 0), _d = () => _.useContext(Zh), qh = _.createContext(void 0), Xh = _.forwardRef((e, t) => {
  let n = oo(() => {
    var Y, ue;
    return { search: "", value: (ue = (Y = e.value) != null ? Y : e.defaultValue) != null ? ue : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = oo(() => /* @__PURE__ */ new Set()), o = oo(() => /* @__PURE__ */ new Map()), a = oo(() => /* @__PURE__ */ new Map()), s = oo(() => /* @__PURE__ */ new Set()), i = Jh(e), { label: c, children: d, value: u, onValueChange: f, filter: p, shouldFilter: m, loop: h, disablePointerSelection: v = !1, vimBindings: g = !0, ...b } = e, x = _.useId(), y = _.useId(), $ = _.useId(), C = _.useRef(null), P = XN();
  Dr(() => {
    if (u !== void 0) {
      let Y = u.trim();
      n.current.value = Y, S.emit();
    }
  }, [u]), Dr(() => {
    P(6, B);
  }, []);
  let S = _.useMemo(() => ({ subscribe: (Y) => (s.current.add(Y), () => s.current.delete(Y)), snapshot: () => n.current, setState: (Y, ue, ye) => {
    var fe, J, re;
    if (!Object.is(n.current[Y], ue)) {
      if (n.current[Y] = ue, Y === "search")
        A(), F(), P(1, G);
      else if (Y === "value" && (ye || P(5, B), ((fe = i.current) == null ? void 0 : fe.value) !== void 0)) {
        let he = ue ?? "";
        (re = (J = i.current).onValueChange) == null || re.call(J, he);
        return;
      }
      S.emit();
    }
  }, emit: () => {
    s.current.forEach((Y) => Y());
  } }), []), N = _.useMemo(() => ({ value: (Y, ue, ye) => {
    var fe;
    ue !== ((fe = a.current.get(Y)) == null ? void 0 : fe.value) && (a.current.set(Y, { value: ue, keywords: ye }), n.current.filtered.items.set(Y, O(ue, ye)), P(2, () => {
      F(), S.emit();
    }));
  }, item: (Y, ue) => (r.current.add(Y), ue && (o.current.has(ue) ? o.current.get(ue).add(Y) : o.current.set(ue, /* @__PURE__ */ new Set([Y]))), P(3, () => {
    A(), F(), n.current.value || G(), S.emit();
  }), () => {
    a.current.delete(Y), r.current.delete(Y), n.current.filtered.items.delete(Y);
    let ye = D();
    P(4, () => {
      A(), (ye == null ? void 0 : ye.getAttribute("id")) === Y && G(), S.emit();
    });
  }), group: (Y) => (o.current.has(Y) || o.current.set(Y, /* @__PURE__ */ new Set()), () => {
    a.current.delete(Y), o.current.delete(Y);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], disablePointerSelection: v, listId: x, inputId: $, labelId: y, listInnerRef: C }), []);
  function O(Y, ue) {
    var ye, fe;
    let J = (fe = (ye = i.current) == null ? void 0 : ye.filter) != null ? fe : zN;
    return Y ? J(Y, n.current.search, ue) : 0;
  }
  function F() {
    if (!n.current.search || i.current.shouldFilter === !1)
      return;
    let Y = n.current.filtered.items, ue = [];
    n.current.filtered.groups.forEach((fe) => {
      let J = o.current.get(fe), re = 0;
      J.forEach((he) => {
        let Ne = Y.get(he);
        re = Math.max(Ne, re);
      }), ue.push([fe, re]);
    });
    let ye = C.current;
    M().sort((fe, J) => {
      var re, he;
      let Ne = fe.getAttribute("id"), ae = J.getAttribute("id");
      return ((re = Y.get(ae)) != null ? re : 0) - ((he = Y.get(Ne)) != null ? he : 0);
    }).forEach((fe) => {
      let J = fe.closest(hc);
      J ? J.appendChild(fe.parentElement === J ? fe : fe.closest(`${hc} > *`)) : ye.appendChild(fe.parentElement === ye ? fe : fe.closest(`${hc} > *`));
    }), ue.sort((fe, J) => J[1] - fe[1]).forEach((fe) => {
      let J = C.current.querySelector(`${Uo}[${Sr}="${encodeURIComponent(fe[0])}"]`);
      J == null || J.parentElement.appendChild(J);
    });
  }
  function G() {
    let Y = M().find((ye) => ye.getAttribute("aria-disabled") !== "true"), ue = Y == null ? void 0 : Y.getAttribute(Sr);
    S.setState("value", ue || void 0);
  }
  function A() {
    var Y, ue, ye, fe;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let J = 0;
    for (let re of r.current) {
      let he = (ue = (Y = a.current.get(re)) == null ? void 0 : Y.value) != null ? ue : "", Ne = (fe = (ye = a.current.get(re)) == null ? void 0 : ye.keywords) != null ? fe : [], ae = O(he, Ne);
      n.current.filtered.items.set(re, ae), ae > 0 && J++;
    }
    for (let [re, he] of o.current)
      for (let Ne of he)
        if (n.current.filtered.items.get(Ne) > 0) {
          n.current.filtered.groups.add(re);
          break;
        }
    n.current.filtered.count = J;
  }
  function B() {
    var Y, ue, ye;
    let fe = D();
    fe && (((Y = fe.parentElement) == null ? void 0 : Y.firstChild) === fe && ((ye = (ue = fe.closest(Uo)) == null ? void 0 : ue.querySelector(VN)) == null || ye.scrollIntoView({ block: "nearest" })), fe.scrollIntoView({ block: "nearest" }));
  }
  function D() {
    var Y;
    return (Y = C.current) == null ? void 0 : Y.querySelector(`${$d}[aria-selected="true"]`);
  }
  function M() {
    var Y;
    return Array.from((Y = C.current) == null ? void 0 : Y.querySelectorAll(sf));
  }
  function V(Y) {
    let ue = M()[Y];
    ue && S.setState("value", ue.getAttribute(Sr));
  }
  function R(Y) {
    var ue;
    let ye = D(), fe = M(), J = fe.findIndex((he) => he === ye), re = fe[J + Y];
    (ue = i.current) != null && ue.loop && (re = J + Y < 0 ? fe[fe.length - 1] : J + Y === fe.length ? fe[0] : fe[J + Y]), re && S.setState("value", re.getAttribute(Sr));
  }
  function U(Y) {
    let ue = D(), ye = ue == null ? void 0 : ue.closest(Uo), fe;
    for (; ye && !fe; )
      ye = Y > 0 ? ZN(ye, Uo) : qN(ye, Uo), fe = ye == null ? void 0 : ye.querySelector(sf);
    fe ? S.setState("value", fe.getAttribute(Sr)) : R(Y);
  }
  let W = () => V(M().length - 1), ne = (Y) => {
    Y.preventDefault(), Y.metaKey ? W() : Y.altKey ? U(1) : R(1);
  }, me = (Y) => {
    Y.preventDefault(), Y.metaKey ? V(0) : Y.altKey ? U(-1) : R(-1);
  };
  return _.createElement(le.div, { ref: t, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (Y) => {
    var ue;
    if ((ue = b.onKeyDown) == null || ue.call(b, Y), !Y.defaultPrevented)
      switch (Y.key) {
        case "n":
        case "j": {
          g && Y.ctrlKey && ne(Y);
          break;
        }
        case "ArrowDown": {
          ne(Y);
          break;
        }
        case "p":
        case "k": {
          g && Y.ctrlKey && me(Y);
          break;
        }
        case "ArrowUp": {
          me(Y);
          break;
        }
        case "Home": {
          Y.preventDefault(), V(0);
          break;
        }
        case "End": {
          Y.preventDefault(), W();
          break;
        }
        case "Enter":
          if (!Y.nativeEvent.isComposing && Y.keyCode !== 229) {
            Y.preventDefault();
            let ye = D();
            if (ye) {
              let fe = new Event(Gc);
              ye.dispatchEvent(fe);
            }
          }
      }
  } }, _.createElement("label", { "cmdk-label": "", htmlFor: N.inputId, id: N.labelId, style: JN }, c), Pi(e, (Y) => _.createElement(Zh.Provider, { value: S }, _.createElement(Yh.Provider, { value: N }, Y))));
}), BN = _.forwardRef((e, t) => {
  var n, r;
  let o = _.useId(), a = _.useRef(null), s = _.useContext(qh), i = Ya(), c = Jh(e), d = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Dr(() => {
    if (!d)
      return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let u = ev(o, a, [e.value, e.children, a], e.keywords), f = _d(), p = Rr((P) => P.value && P.value === u.current), m = Rr((P) => d || i.filter() === !1 ? !0 : P.search ? P.filtered.items.get(o) > 0 : !0);
  _.useEffect(() => {
    let P = a.current;
    if (!(!P || e.disabled))
      return P.addEventListener(Gc, h), () => P.removeEventListener(Gc, h);
  }, [m, e.onSelect, e.disabled]);
  function h() {
    var P, S;
    v(), (S = (P = c.current).onSelect) == null || S.call(P, u.current);
  }
  function v() {
    f.setState("value", u.current, !0);
  }
  if (!m)
    return null;
  let { disabled: g, value: b, onSelect: x, forceMount: y, keywords: $, ...C } = e;
  return _.createElement(le.div, { ref: ca([a, t]), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.disablePointerSelection ? void 0 : v, onClick: g ? void 0 : h }, e.children);
}), WN = _.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = _.useId(), i = _.useRef(null), c = _.useRef(null), d = _.useId(), u = Ya(), f = Rr((m) => o || u.filter() === !1 ? !0 : m.search ? m.filtered.groups.has(s) : !0);
  Dr(() => u.group(s), []), ev(s, i, [e.value, e.heading, c]);
  let p = _.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return _.createElement(le.div, { ref: ca([i, t]), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && _.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), Pi(e, (m) => _.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, _.createElement(qh.Provider, { value: p }, m))));
}), HN = _.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = _.useRef(null), a = Rr((s) => !s.search);
  return !n && !a ? null : _.createElement(le.div, { ref: ca([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), UN = _.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = _d(), s = Rr((u) => u.search), i = Rr((u) => u.value), c = Ya(), d = _.useMemo(() => {
    var u;
    let f = (u = c.listInnerRef.current) == null ? void 0 : u.querySelector(`${$d}[${Sr}="${encodeURIComponent(i)}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, []);
  return _.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), _.createElement(le.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": d, id: c.inputId, type: "text", value: o ? e.value : s, onChange: (u) => {
    o || a.setState("search", u.target.value), n == null || n(u.target.value);
  } });
}), Qh = _.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = _.useRef(null), s = _.useRef(null), i = Ya();
  return _.useEffect(() => {
    if (s.current && a.current) {
      let c = s.current, d = a.current, u, f = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let p = c.offsetHeight;
          d.style.setProperty("--cmdk-list-height", p.toFixed(1) + "px");
        });
      });
      return f.observe(c), () => {
        cancelAnimationFrame(u), f.unobserve(c);
      };
    }
  }, []), _.createElement(le.div, { ref: ca([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": r, id: i.listId }, Pi(e, (c) => _.createElement("div", { ref: ca([s, i.listInnerRef]), "cmdk-list-sizer": "" }, c)));
}), KN = _.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return _.createElement(Ua, { open: n, onOpenChange: r }, _.createElement(Ka, { container: s }, _.createElement(Gr, { "cmdk-overlay": "", className: o }), _.createElement(Yr, { "aria-label": e.label, "cmdk-dialog": "", className: a }, _.createElement(Xh, { ref: t, ...i }))));
}), GN = _.forwardRef((e, t) => Rr((n) => n.filtered.count === 0) ? _.createElement(le.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), YN = _.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return _.createElement(le.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Pi(e, (s) => _.createElement("div", { "aria-hidden": !0 }, s)));
}), zt = Object.assign(Xh, { List: Qh, Item: BN, Input: UN, Group: WN, Separator: HN, Dialog: KN, Empty: GN, Loading: YN });
function ZN(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function qN(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function Jh(e) {
  let t = _.useRef(e);
  return Dr(() => {
    t.current = e;
  }), t;
}
var Dr = typeof window > "u" ? _.useEffect : _.useLayoutEffect;
function oo(e) {
  let t = _.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function ca(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Rr(e) {
  let t = _d(), n = () => e(t.snapshot());
  return _.useSyncExternalStore(t.subscribe, n, n);
}
function ev(e, t, n, r = []) {
  let o = _.useRef(), a = Ya();
  return Dr(() => {
    var s;
    let i = (() => {
      var d;
      for (let u of n) {
        if (typeof u == "string")
          return u.trim();
        if (typeof u == "object" && "current" in u)
          return u.current ? (d = u.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), c = r.map((d) => d.trim());
    a.value(e, i, c), (s = t.current) == null || s.setAttribute(Sr, i), o.current = i;
  }), o;
}
var XN = () => {
  let [e, t] = _.useState(), n = oo(() => /* @__PURE__ */ new Map());
  return Dr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function QN(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Pi({ asChild: e, children: t }, n) {
  return e && _.isValidElement(t) ? _.cloneElement(QN(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var JN = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Kn = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  zt,
  {
    ref: n,
    className: T(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Kn.displayName = zt.displayName;
const pT = ({ children: e, ...t }) => /* @__PURE__ */ l.jsx(ah, { ...t, children: /* @__PURE__ */ l.jsx(hd, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ l.jsx(Kn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), lr = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ l.jsx(ks, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ l.jsx(
    zt.Input,
    {
      ref: n,
      className: T(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
lr.displayName = zt.Input.displayName;
const Ro = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  zt.List,
  {
    ref: n,
    className: T("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Ro.displayName = zt.List.displayName;
const dr = _.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
  zt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
dr.displayName = zt.Empty.displayName;
const mn = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  zt.Group,
  {
    ref: n,
    className: T(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
mn.displayName = zt.Group.displayName;
const la = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  zt.Separator,
  {
    ref: n,
    className: T("-mx-1 h-px bg-border", e),
    ...t
  }
));
la.displayName = zt.Separator.displayName;
const qt = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  zt.Item,
  {
    ref: n,
    className: T("cmdk-item relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer", e),
    ...t
  }
));
qt.displayName = zt.Item.displayName;
const eE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: T(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
eE.displayName = "CommandShortcut";
const tE = /* @__PURE__ */ I((e, t) => {
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
  }, /* @__PURE__ */ w(le.div, k({}, o, {
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
}), nE = tE, mT = nE;
function rE(e, t) {
  return xl((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const tv = "ScrollArea", [nv, hT] = it(tv), [oE, Qt] = nv(tv), aE = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = q(null), [d, u] = q(null), [f, p] = q(null), [m, h] = q(null), [v, g] = q(null), [b, x] = q(0), [y, $] = q(0), [C, P] = q(!1), [S, N] = q(!1), O = Ee(
    t,
    (G) => c(G)
  ), F = Mn(o);
  return /* @__PURE__ */ w(oE, {
    scope: n,
    type: r,
    dir: F,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: d,
    onViewportChange: u,
    content: f,
    onContentChange: p,
    scrollbarX: m,
    onScrollbarXChange: h,
    scrollbarXEnabled: C,
    onScrollbarXEnabledChange: P,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: S,
    onScrollbarYEnabledChange: N,
    onCornerWidthChange: x,
    onCornerHeightChange: $
  }, /* @__PURE__ */ w(le.div, k({
    dir: F
  }, s, {
    ref: O,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": b + "px",
      "--radix-scroll-area-corner-height": y + "px",
      ...e.style
    }
  })));
}), sE = "ScrollAreaViewport", iE = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = Qt(sE, n), s = Z(null), i = Ee(t, s, a.onViewportChange);
  return /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(le.div, k({
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
}), Zn = "ScrollAreaScrollbar", rv = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Zn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return Q(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ w(cE, k({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ w(lE, k({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ w(ov, k({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ w(Cd, k({}, r, {
    ref: t
  })) : null;
}), cE = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Zn, e.__scopeScrollArea), [a, s] = q(!1);
  return Q(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const d = () => {
        window.clearTimeout(c), s(!0);
      }, u = () => {
        c = window.setTimeout(
          () => s(!1),
          o.scrollHideDelay
        );
      };
      return i.addEventListener("pointerenter", d), i.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", d), i.removeEventListener("pointerleave", u);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ w(lt, {
    present: n || a
  }, /* @__PURE__ */ w(ov, k({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), lE = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Zn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = ji(
    () => c("SCROLL_END"),
    100
  ), [i, c] = rE("hidden", {
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
  return Q(() => {
    if (i === "idle") {
      const d = window.setTimeout(
        () => c("HIDE"),
        o.scrollHideDelay
      );
      return () => window.clearTimeout(d);
    }
  }, [
    i,
    o.scrollHideDelay,
    c
  ]), Q(() => {
    const d = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (d) {
      let f = d[u];
      const p = () => {
        const m = d[u];
        f !== m && (c("SCROLL"), s()), f = m;
      };
      return d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
    }
  }, [
    o.viewport,
    a,
    c,
    s
  ]), /* @__PURE__ */ w(lt, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ w(Cd, k({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: X(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: X(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), ov = /* @__PURE__ */ I((e, t) => {
  const n = Qt(Zn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = q(!1), i = e.orientation === "horizontal", c = ji(() => {
    if (n.viewport) {
      const d = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? d : u);
    }
  }, 10);
  return xo(n.viewport, c), xo(n.content, c), /* @__PURE__ */ w(lt, {
    present: r || a
  }, /* @__PURE__ */ w(Cd, k({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), Cd = /* @__PURE__ */ I((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Qt(Zn, e.__scopeScrollArea), a = Z(null), s = Z(0), [i, c] = q({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), d = cv(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function f(p, m) {
    return gE(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ w(dE, k({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = cf(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ w(uE, k({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = cf(p, i);
        a.current.style.transform = `translate3d(0, ${m}px, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = f(p));
    }
  })) : null;
}), dE = /* @__PURE__ */ I((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Qt(Zn, e.__scopeScrollArea), [s, i] = q(), c = Z(null), d = Ee(t, c, a.onScrollbarXChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(sv, k({
    "data-orientation": "horizontal"
  }, o, {
    ref: d,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": ki(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), dv(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Ws(s.paddingLeft),
          paddingEnd: Ws(s.paddingRight)
        }
      });
    }
  }));
}), uE = /* @__PURE__ */ I((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Qt(Zn, e.__scopeScrollArea), [s, i] = q(), c = Z(null), d = Ee(t, c, a.onScrollbarYChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(sv, k({
    "data-orientation": "vertical"
  }, o, {
    ref: d,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": ki(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), dv(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Ws(s.paddingTop),
          paddingEnd: Ws(s.paddingBottom)
        }
      });
    }
  }));
}), [fE, av] = nv(Zn), sv = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: d, onWheelScroll: u, onResize: f, ...p } = e, m = Qt(Zn, n), [h, v] = q(null), g = Ee(
    t,
    (O) => v(O)
  ), b = Z(null), x = Z(""), y = m.viewport, $ = r.content - r.viewport, C = Xe(u), P = Xe(c), S = ji(f, 10);
  function N(O) {
    if (b.current) {
      const F = O.clientX - b.current.left, G = O.clientY - b.current.top;
      d({
        x: F,
        y: G
      });
    }
  }
  return Q(() => {
    const O = (F) => {
      const G = F.target;
      (h == null ? void 0 : h.contains(G)) && C(F, $);
    };
    return document.addEventListener("wheel", O, {
      passive: !1
    }), () => document.removeEventListener("wheel", O, {
      passive: !1
    });
  }, [
    y,
    h,
    $,
    C
  ]), Q(P, [
    r,
    P
  ]), xo(h, S), xo(m.content, S), /* @__PURE__ */ w(fE, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: Xe(a),
    onThumbPointerUp: Xe(s),
    onThumbPositionChange: P,
    onThumbPointerDown: Xe(i)
  }, /* @__PURE__ */ w(le.div, k({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: X(e.onPointerDown, (O) => {
      O.button === 0 && (O.target.setPointerCapture(O.pointerId), b.current = h.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), N(O));
    }),
    onPointerMove: X(e.onPointerMove, N),
    onPointerUp: X(e.onPointerUp, (O) => {
      const F = O.target;
      F.hasPointerCapture(O.pointerId) && F.releasePointerCapture(O.pointerId), document.body.style.webkitUserSelect = x.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null;
    })
  })));
}), Yc = "ScrollAreaThumb", pE = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = av(Yc, e.__scopeScrollArea);
  return /* @__PURE__ */ w(lt, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ w(mE, k({
    ref: t
  }, r)));
}), mE = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = Qt(Yc, n), s = av(Yc, n), { onThumbPositionChange: i } = s, c = Ee(
    t,
    (f) => s.onThumbChange(f)
  ), d = Z(), u = ji(() => {
    d.current && (d.current(), d.current = void 0);
  }, 100);
  return Q(() => {
    const f = a.viewport;
    if (f) {
      const p = () => {
        if (u(), !d.current) {
          const m = bE(f, i);
          d.current = m, i();
        }
      };
      return i(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ w(le.div, k({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: X(e.onPointerDownCapture, (f) => {
      const m = f.target.getBoundingClientRect(), h = f.clientX - m.left, v = f.clientY - m.top;
      s.onThumbPointerDown({
        x: h,
        y: v
      });
    }),
    onPointerUp: X(e.onPointerUp, s.onThumbPointerUp)
  }));
}), iv = "ScrollAreaCorner", hE = /* @__PURE__ */ I((e, t) => {
  const n = Qt(iv, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ w(vE, k({}, e, {
    ref: t
  })) : null;
}), vE = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Qt(iv, n), [a, s] = q(0), [i, c] = q(0), d = !!(a && i);
  return xo(o.scrollbarX, () => {
    var u;
    const f = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(f), c(f);
  }), xo(o.scrollbarY, () => {
    var u;
    const f = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(f), s(f);
  }), d ? /* @__PURE__ */ w(le.div, k({}, r, {
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
function Ws(e) {
  return e ? parseInt(e, 10) : 0;
}
function cv(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ki(e) {
  const t = cv(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function gE(e, t, n, r = "ltr") {
  const o = ki(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, d = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, f = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return lv([
    c,
    d
  ], f)(e);
}
function cf(e, t, n = "ltr") {
  const r = ki(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], d = ia(e, c);
  return lv([
    0,
    s
  ], [
    0,
    i
  ])(d);
}
function lv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function dv(e, t) {
  return e > 0 && e < t;
}
const bE = (e, t = () => {
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
function ji(e, t) {
  const n = Xe(e), r = Z(0);
  return Q(
    () => () => window.clearTimeout(r.current),
    []
  ), ge(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function xo(e, t) {
  const n = Xe(t);
  $t(() => {
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
const uv = aE, xE = iE, yE = hE, wE = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  uv,
  {
    ref: r,
    className: T("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx(xE, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ l.jsx(fv, {}),
      /* @__PURE__ */ l.jsx(yE, {})
    ]
  }
));
wE.displayName = uv.displayName;
const fv = _.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ l.jsx(
  rv,
  {
    ref: r,
    orientation: t,
    className: T(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx(pE, { className: "relative flex-1 rounded-full bg-border" })
  }
));
fv.displayName = rv.displayName;
const vT = Ua, gT = wi, bT = Zr, $E = Ka, pv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Gr,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
pv.displayName = Gr.displayName;
const _E = _o(
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
), CE = _.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs($E, { children: [
  /* @__PURE__ */ l.jsx(pv, {}),
  /* @__PURE__ */ l.jsxs(
    Yr,
    {
      ref: o,
      className: T(_E({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ l.jsxs(Zr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ l.jsx(ii, { className: "h-4 w-4" }),
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
CE.displayName = Yr.displayName;
const SE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
SE.displayName = "SheetHeader";
const NE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
NE.displayName = "SheetFooter";
const EE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  jo,
  {
    ref: n,
    className: T("text-lg font-semibold text-foreground", e),
    ...t
  }
));
EE.displayName = jo.displayName;
const PE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Mo,
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
PE.displayName = Mo.displayName;
const Sd = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ l.jsx(
  "table",
  {
    ref: n,
    className: T("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Sd.displayName = "TableUI";
const mv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("thead", { ref: n, className: T("[&_tr]:border-b", e), ...t }));
mv.displayName = "TableHeader";
const hv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tbody",
  {
    ref: n,
    className: T("[&_tr:last-child]:border-0", e),
    ...t
  }
));
hv.displayName = "TableBody";
const kE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tfoot",
  {
    ref: n,
    className: T("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
kE.displayName = "TableFooter";
const Mi = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tr",
  {
    ref: n,
    className: T(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Mi.displayName = "TableRow";
const vv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "th",
  {
    ref: n,
    className: T(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
vv.displayName = "TableHead";
const Nd = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "td",
  {
    ref: n,
    className: T("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Nd.displayName = "TableCell";
const jE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "caption",
  {
    ref: n,
    className: T("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
jE.displayName = "TableCaption";
const ME = "AlertDialog", [TE, xT] = it(ME, [
  eh
]), qn = eh(), OE = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = qn(t);
  return /* @__PURE__ */ w(Ua, k({}, r, n, {
    modal: !0
  }));
}, DE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = qn(n);
  return /* @__PURE__ */ w(wi, k({}, o, r, {
    ref: t
  }));
}), RE = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = qn(t);
  return /* @__PURE__ */ w(Ka, k({}, r, n));
}, AE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = qn(n);
  return /* @__PURE__ */ w(Gr, k({}, o, r, {
    ref: t
  }));
}), gv = "AlertDialogContent", [IE, LE] = TE(gv), FE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = qn(n), s = Z(null), i = Ee(t, s), c = Z(null);
  return /* @__PURE__ */ w(SC, {
    contentName: gv,
    titleName: VE,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ w(IE, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ w(Yr, k({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: X(o.onOpenAutoFocus, (d) => {
      var u;
      d.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (d) => d.preventDefault(),
    onInteractOutside: (d) => d.preventDefault()
  }), /* @__PURE__ */ w(yl, null, r), !1)));
}), VE = "AlertDialogTitle", zE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = qn(n);
  return /* @__PURE__ */ w(jo, k({}, o, r, {
    ref: t
  }));
}), BE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = qn(n);
  return /* @__PURE__ */ w(Mo, k({}, o, r, {
    ref: t
  }));
}), WE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = qn(n);
  return /* @__PURE__ */ w(Zr, k({}, o, r, {
    ref: t
  }));
}), HE = "AlertDialogCancel", UE = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = LE(HE, n), a = qn(n), s = Ee(t, o);
  return /* @__PURE__ */ w(Zr, k({}, a, r, {
    ref: s
  }));
}), KE = OE, GE = DE, YE = RE, bv = AE, xv = FE, yv = WE, wv = UE, $v = zE, _v = BE, yT = KE, wT = GE, ZE = YE, Cv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  bv,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Cv.displayName = bv.displayName;
const qE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs(ZE, { children: [
  /* @__PURE__ */ l.jsx(Cv, {}),
  /* @__PURE__ */ l.jsx(
    xv,
    {
      ref: n,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
qE.displayName = xv.displayName;
const XE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
XE.displayName = "AlertDialogHeader";
const QE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
QE.displayName = "AlertDialogFooter";
const JE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  $v,
  {
    ref: n,
    className: T("text-lg font-semibold", e),
    ...t
  }
));
JE.displayName = $v.displayName;
const e5 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  _v,
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
e5.displayName = _v.displayName;
const t5 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  yv,
  {
    ref: n,
    className: T(mo(), e),
    ...t
  }
));
t5.displayName = yv.displayName;
const n5 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  wv,
  {
    ref: n,
    className: T(
      mo({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
n5.displayName = wv.displayName;
function Nt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: T("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Sv = "Collapsible", [r5, Nv] = it(Sv), [o5, Ed] = r5(Sv), a5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, d] = ft({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ w(o5, {
    scope: n,
    disabled: a,
    contentId: mt(),
    open: c,
    onOpenToggle: ge(
      () => d(
        (u) => !u
      ),
      [
        d
      ]
    )
  }, /* @__PURE__ */ w(le.div, k({
    "data-state": Pd(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), s5 = "CollapsibleTrigger", Ev = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = Ed(s5, n);
  return /* @__PURE__ */ w(le.button, k({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Pd(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), Pv = "CollapsibleContent", kv = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = Ed(Pv, e.__scopeCollapsible);
  return /* @__PURE__ */ w(
    lt,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ w(i5, k({}, r, {
      ref: t,
      present: a
    }))
  );
}), i5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Ed(Pv, n), [i, c] = q(r), d = Z(null), u = Ee(t, d), f = Z(0), p = f.current, m = Z(0), h = m.current, v = s.open || i, g = Z(v), b = Z();
  return Q(() => {
    const x = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(x);
  }, []), $t(() => {
    const x = d.current;
    if (x) {
      b.current = b.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const y = x.getBoundingClientRect();
      f.current = y.height, m.current = y.width, g.current || (x.style.transitionDuration = b.current.transitionDuration, x.style.animationName = b.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ w(le.div, k({
    "data-state": Pd(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !v
  }, a, {
    ref: u,
    style: {
      "--radix-collapsible-content-height": p ? `${p}px` : void 0,
      "--radix-collapsible-content-width": h ? `${h}px` : void 0,
      ...e.style
    }
  }), v && o);
});
function Pd(e) {
  return e ? "open" : "closed";
}
const jv = a5, c5 = Ev, l5 = kv, wr = "Accordion", d5 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [kd, u5, f5] = gr(wr), [Ti, $T] = it(wr, [
  f5,
  Nv
]), jd = Nv(), Mv = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ z.createElement(kd.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ z.createElement(v5, k({}, a, {
    ref: t
  })) : /* @__PURE__ */ z.createElement(h5, k({}, o, {
    ref: t
  })));
});
Mv.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Tv, p5] = Ti(wr), [Ov, m5] = Ti(wr, {
  collapsible: !1
}), h5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = ft({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ z.createElement(Tv, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: z.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ z.createElement(Ov, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ z.createElement(Dv, k({}, s, {
    ref: t
  }))));
}), v5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = ft({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = z.useCallback(
    (u) => i(
      (f = []) => [
        ...f,
        u
      ]
    ),
    [
      i
    ]
  ), d = z.useCallback(
    (u) => i(
      (f = []) => f.filter(
        (p) => p !== u
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ z.createElement(Tv, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: d
  }, /* @__PURE__ */ z.createElement(Ov, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ z.createElement(Dv, k({}, a, {
    ref: t
  }))));
}), [g5, Oi] = Ti(wr), Dv = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = z.useRef(null), c = Ee(i, t), d = u5(n), f = Mn(o) === "ltr", p = X(e.onKeyDown, (m) => {
    var h;
    if (!d5.includes(m.key))
      return;
    const v = m.target, g = d().filter((O) => {
      var F;
      return !((F = O.ref.current) !== null && F !== void 0 && F.disabled);
    }), b = g.findIndex(
      (O) => O.ref.current === v
    ), x = g.length;
    if (b === -1)
      return;
    m.preventDefault();
    let y = b;
    const $ = 0, C = x - 1, P = () => {
      y = b + 1, y > C && (y = $);
    }, S = () => {
      y = b - 1, y < $ && (y = C);
    };
    switch (m.key) {
      case "Home":
        y = $;
        break;
      case "End":
        y = C;
        break;
      case "ArrowRight":
        a === "horizontal" && (f ? P() : S());
        break;
      case "ArrowDown":
        a === "vertical" && P();
        break;
      case "ArrowLeft":
        a === "horizontal" && (f ? S() : P());
        break;
      case "ArrowUp":
        a === "vertical" && S();
        break;
    }
    const N = y % x;
    (h = g[N].ref.current) === null || h === void 0 || h.focus();
  });
  return /* @__PURE__ */ z.createElement(g5, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ z.createElement(kd.Slot, {
    scope: n
  }, /* @__PURE__ */ z.createElement(le.div, k({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Zc = "AccordionItem", [b5, Md] = Ti(Zc), x5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Oi(Zc, n), s = p5(Zc, n), i = jd(n), c = mt(), d = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ z.createElement(b5, {
    scope: n,
    open: d,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ z.createElement(jv, k({
    "data-orientation": a.orientation,
    "data-state": Rv(d)
  }, i, o, {
    ref: t,
    disabled: u,
    open: d,
    onOpenChange: (f) => {
      f ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), y5 = "AccordionHeader", w5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Oi(wr, n), a = Md(y5, n);
  return /* @__PURE__ */ z.createElement(le.h3, k({
    "data-orientation": o.orientation,
    "data-state": Rv(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), lf = "AccordionTrigger", $5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Oi(wr, n), a = Md(lf, n), s = m5(lf, n), i = jd(n);
  return /* @__PURE__ */ z.createElement(kd.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ z.createElement(c5, k({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), _5 = "AccordionContent", C5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Oi(wr, n), a = Md(_5, n), s = jd(n);
  return /* @__PURE__ */ z.createElement(l5, k({
    role: "region",
    "aria-labelledby": a.triggerId,
    "data-orientation": o.orientation
  }, s, r, {
    ref: t,
    style: {
      "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
      "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function Rv(e) {
  return e ? "open" : "closed";
}
const S5 = Mv, N5 = x5, E5 = w5, Av = $5, Iv = C5, _T = S5, P5 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  N5,
  {
    ref: n,
    className: T("border-b", e),
    ...t
  }
));
P5.displayName = "AccordionItem";
const k5 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(E5, { className: "flex", children: /* @__PURE__ */ l.jsxs(
  Av,
  {
    ref: r,
    className: T(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(Jo, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
k5.displayName = Av.displayName;
const j5 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Iv,
  {
    ref: r,
    className: T(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
j5.displayName = Iv.displayName;
const CT = jv, ST = Ev, NT = kv;
let vc;
const Lv = "HoverCard", [Fv, ET] = it(Lv, [
  Tn
]), Td = Tn(), [M5, Od] = Fv(Lv), T5 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = Td(t), d = Z(0), u = Z(0), f = Z(!1), p = Z(!1), [m = !1, h] = ft({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = ge(() => {
    clearTimeout(u.current), d.current = window.setTimeout(
      () => h(!0),
      s
    );
  }, [
    s,
    h
  ]), g = ge(() => {
    clearTimeout(d.current), !f.current && !p.current && (u.current = window.setTimeout(
      () => h(!1),
      i
    ));
  }, [
    i,
    h
  ]), b = ge(
    () => h(!1),
    [
      h
    ]
  );
  return Q(() => () => {
    clearTimeout(d.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ w(M5, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: f,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ w(Po, c, n));
}, O5 = "HoverCardTrigger", D5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Od(O5, n), a = Td(n);
  return /* @__PURE__ */ w(Ia, k({
    asChild: !0
  }, a), /* @__PURE__ */ w(le.a, k({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: X(e.onPointerEnter, Hs(o.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Hs(o.onClose)),
    onFocus: X(e.onFocus, o.onOpen),
    onBlur: X(e.onBlur, o.onClose),
    onTouchStart: X(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), R5 = "HoverCardPortal", [PT, A5] = Fv(R5, {
  forceMount: void 0
}), qc = "HoverCardContent", I5 = /* @__PURE__ */ I((e, t) => {
  const n = A5(qc, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Od(qc, e.__scopeHoverCard);
  return /* @__PURE__ */ w(lt, {
    present: r || a.open
  }, /* @__PURE__ */ w(L5, k({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: X(e.onPointerEnter, Hs(a.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Hs(a.onClose)),
    ref: t
  })));
}), L5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = Od(qc, n), d = Td(n), u = Z(null), f = Ee(t, u), [p, m] = q(!1);
  return Q(() => {
    if (p) {
      const h = document.body;
      return vc = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = vc, h.style.webkitUserSelect = vc;
      };
    }
  }, [
    p
  ]), Q(() => {
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
  ]), Q(() => {
    u.current && F5(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ w(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: X(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ w(La, k({}, d, i, {
    onPointerDown: X(i.onPointerDown, (h) => {
      h.currentTarget.contains(h.target) && m(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
    }),
    ref: f,
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
function Hs(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function F5(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const V5 = T5, z5 = D5, Vv = I5, kT = V5, jT = z5, B5 = _.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l.jsx(
  Vv,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: T(
      "z-50 w-64 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
B5.displayName = Vv.displayName;
const MT = () => /* @__PURE__ */ l.jsx("span", { className: "loader-fade-dot" }), Dd = "Menubar", [Xc, W5, H5] = gr(Dd), [zv, TT] = it(Dd, [
  H5,
  br
]), At = Va(), Bv = br(), [U5, Rd] = zv(Dd), K5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, d = Mn(i), u = Bv(n), [f = "", p] = ft({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = q(null);
  return /* @__PURE__ */ w(U5, {
    scope: n,
    value: f,
    onMenuOpen: ge((v) => {
      p(v), h(v);
    }, [
      p
    ]),
    onMenuClose: ge(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: ge((v) => {
      p(
        (g) => g ? "" : v
      ), h(v);
    }, [
      p
    ]),
    dir: d,
    loop: s
  }, /* @__PURE__ */ w(Xc.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Xc.Slot, {
    scope: n
  }, /* @__PURE__ */ w(pi, k({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: d,
    currentTabStopId: m,
    onCurrentTabStopIdChange: h
  }), /* @__PURE__ */ w(le.div, k({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), Wv = "MenubarMenu", [G5, Hv] = zv(Wv), Y5 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = mt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = Rd(Wv, t), i = At(t), c = Z(null), d = Z(!1), u = s.value === a;
  return Q(() => {
    u || (d.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ w(G5, {
    scope: t,
    value: a,
    triggerId: mt(),
    triggerRef: c,
    contentId: mt(),
    wasKeyboardTriggerOpenRef: d
  }, /* @__PURE__ */ w(Yl, k({}, i, {
    open: u,
    onOpenChange: (f) => {
      f || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, df = "MenubarTrigger", Z5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = Bv(n), s = At(n), i = Rd(df, n), c = Hv(df, n), d = Z(null), u = Ee(t, d, c.triggerRef), [f, p] = q(!1), m = i.value === c.value;
  return /* @__PURE__ */ w(Xc.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ w(mi, k({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ w(Zl, k({
    asChild: !0
  }, s), /* @__PURE__ */ w(le.button, k({
    type: "button",
    role: "menuitem",
    id: c.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": m,
    "aria-controls": m ? c.contentId : void 0,
    "data-highlighted": f ? "" : void 0,
    "data-state": m ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: u,
    onPointerDown: X(e.onPointerDown, (h) => {
      !r && h.button === 0 && h.ctrlKey === !1 && (i.onMenuOpen(c.value), m || h.preventDefault());
    }),
    onPointerEnter: X(e.onPointerEnter, () => {
      if (!!i.value && !m) {
        var v;
        i.onMenuOpen(c.value), (v = d.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: X(e.onKeyDown, (h) => {
      r || ([
        "Enter",
        " "
      ].includes(h.key) && i.onMenuToggle(c.value), h.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(h.key) && (c.wasKeyboardTriggerOpenRef.current = !0, h.preventDefault()));
    }),
    onFocus: X(
      e.onFocus,
      () => p(!0)
    ),
    onBlur: X(
      e.onBlur,
      () => p(!1)
    )
  })))));
}), q5 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = At(t);
  return /* @__PURE__ */ w(ql, k({}, r, n));
}, uf = "MenubarContent", X5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = At(n), s = Rd(uf, n), i = Hv(uf, n), c = W5(n), d = Z(!1);
  return /* @__PURE__ */ w(Xl, k({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: X(e.onCloseAutoFocus, (u) => {
      if (!!!s.value && !d.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
      }
      d.current = !1, u.preventDefault();
    }),
    onFocusOutside: X(e.onFocusOutside, (u) => {
      const f = u.target;
      c().some((m) => {
        var h;
        return (h = m.ref.current) === null || h === void 0 ? void 0 : h.contains(f);
      }) && u.preventDefault();
    }),
    onInteractOutside: X(e.onInteractOutside, () => {
      d.current = !0;
    }),
    onEntryFocus: (u) => {
      i.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: X(e.onKeyDown, (u) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(u.key)) {
        const f = u.target, p = f.hasAttribute("data-radix-menubar-subtrigger"), m = f.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!v && p || m && v)
          return;
        let x = c().filter(
          (C) => !C.disabled
        ).map(
          (C) => C.value
        );
        v && x.reverse();
        const y = x.indexOf(i.value);
        x = s.loop ? lP(x, y + 1) : x.slice(y + 1);
        const [$] = x;
        $ && s.onMenuOpen($);
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
}), Q5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Ql, k({}, o, r, {
    ref: t
  }));
}), J5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Jl, k({}, o, r, {
    ref: t
  }));
}), eP = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ed, k({}, o, r, {
    ref: t
  }));
}), tP = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(td, k({}, o, r, {
    ref: t
  }));
}), nP = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(nd, k({}, o, r, {
    ref: t
  }));
}), rP = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(rd, k({}, o, r, {
    ref: t
  }));
}), oP = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(od, k({}, o, r, {
    ref: t
  }));
}), aP = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ad, k({}, o, r, {
    ref: t
  }));
}), sP = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = At(t), [i = !1, c] = ft({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(sd, k({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, iP = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(id, k({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), cP = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(cd, k({}, o, {
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
function lP(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Uv = K5, dP = Y5, Kv = Z5, Gv = q5, Yv = X5, uP = Q5, Zv = J5, qv = eP, Xv = tP, fP = nP, Qv = rP, Jv = oP, eg = aP, pP = sP, tg = iP, ng = cP, OT = dP, DT = uP, RT = Gv, AT = pP, IT = fP, mP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Uv,
  {
    ref: n,
    className: T(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
mP.displayName = Uv.displayName;
const hP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Kv,
  {
    ref: n,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
hP.displayName = Kv.displayName;
const vP = _.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  tg,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ l.jsx(vr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
vP.displayName = tg.displayName;
const gP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  ng,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
gP.displayName = ng.displayName;
const bP = _.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ l.jsx(Gv, { children: /* @__PURE__ */ l.jsx(
    Yv,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: T(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
bP.displayName = Yv.displayName;
const xP = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  qv,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
xP.displayName = qv.displayName;
const yP = _.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Xv,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Jv, { children: /* @__PURE__ */ l.jsx(Xt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
yP.displayName = Xv.displayName;
const wP = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Qv,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Jv, { children: /* @__PURE__ */ l.jsx(si, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
wP.displayName = Qv.displayName;
const $P = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Zv,
  {
    ref: r,
    className: T(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
$P.displayName = Zv.displayName;
const _P = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  eg,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
_P.displayName = eg.displayName;
const CP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: T(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
CP.displayname = "MenubarShortcut";
const Za = "NavigationMenu", [Ad, rg, SP] = gr(Za), [Qc, NP, EP] = gr(Za), [Id, LT] = it(Za, [
  SP,
  EP
]), [PP, gn] = Id(Za), [kP, jP] = Id(Za), MP = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: d, ...u } = e, [f, p] = q(null), m = Ee(
    t,
    (O) => p(O)
  ), h = Mn(d), v = Z(0), g = Z(0), b = Z(0), [x, y] = q(!0), [$ = "", C] = ft({
    prop: r,
    onChange: (O) => {
      const F = O !== "", G = i > 0;
      F ? (window.clearTimeout(b.current), G && y(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => y(!0),
        i
      )), o == null || o(O);
    },
    defaultProp: a
  }), P = ge(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => C(""),
      150
    );
  }, [
    C
  ]), S = ge((O) => {
    window.clearTimeout(g.current), C(O);
  }, [
    C
  ]), N = ge((O) => {
    $ === O ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), C(O);
    }, s);
  }, [
    $,
    C,
    s
  ]);
  return Q(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ w(TP, {
    scope: n,
    isRootMenu: !0,
    value: $,
    dir: h,
    orientation: c,
    rootNavigationMenu: f,
    onTriggerEnter: (O) => {
      window.clearTimeout(v.current), x ? N(O) : S(O);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), P();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: P,
    onItemSelect: (O) => {
      C(
        (F) => F === O ? "" : O
      );
    },
    onItemDismiss: () => C("")
  }, /* @__PURE__ */ w(le.nav, k({
    "aria-label": "Main",
    "data-orientation": c,
    dir: h
  }, u, {
    ref: m
  })));
}), TP = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: d, onTriggerEnter: u, onTriggerLeave: f, onContentEnter: p, onContentLeave: m } = e, [h, v] = q(null), [g, b] = q(/* @__PURE__ */ new Map()), [x, y] = q(null);
  return /* @__PURE__ */ w(PP, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: Oo(i),
    baseId: mt(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: x,
    onIndicatorTrackChange: y,
    onTriggerEnter: Xe(u),
    onTriggerLeave: Xe(f),
    onContentEnter: Xe(p),
    onContentLeave: Xe(m),
    onItemSelect: Xe(c),
    onItemDismiss: Xe(d),
    onViewportContentChange: ge(($, C) => {
      b((P) => (P.set($, C), new Map(P)));
    }, []),
    onViewportContentRemove: ge(($) => {
      b((C) => C.has($) ? (C.delete($), new Map(C)) : C);
    }, [])
  }, /* @__PURE__ */ w(Ad.Provider, {
    scope: t
  }, /* @__PURE__ */ w(kP, {
    scope: t,
    items: g
  }, s)));
}, OP = "NavigationMenuList", DP = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = gn(OP, n), a = /* @__PURE__ */ w(le.ul, k({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ w(le.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ w(Ad.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ w(cg, {
    asChild: !0
  }, a) : a));
}), RP = "NavigationMenuItem", [AP, og] = Id(RP), IP = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = mt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = Z(null), c = Z(null), d = Z(null), u = Z(() => {
  }), f = Z(!1), p = ge((h = "start") => {
    if (i.current) {
      u.current();
      const v = Jc(i.current);
      v.length && Ld(h === "start" ? v : v.reverse());
    }
  }, []), m = ge(() => {
    if (i.current) {
      const h = Jc(i.current);
      h.length && (u.current = YP(h));
    }
  }, []);
  return /* @__PURE__ */ w(AP, {
    scope: n,
    value: s,
    triggerRef: c,
    contentRef: i,
    focusProxyRef: d,
    wasEscapeCloseRef: f,
    onEntryKeyDown: p,
    onFocusProxyEnter: p,
    onRootContentClose: m,
    onContentFocusOutside: m
  }, /* @__PURE__ */ w(le.li, k({}, o, {
    ref: t
  })));
}), ff = "NavigationMenuTrigger", LP = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = gn(ff, e.__scopeNavigationMenu), s = og(ff, e.__scopeNavigationMenu), i = Z(null), c = Ee(i, s.triggerRef, t), d = dg(a.baseId, s.value), u = ug(a.baseId, s.value), f = Z(!1), p = Z(!1), m = s.value === a.value;
  return /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w(Ad.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ w(lg, {
    asChild: !0
  }, /* @__PURE__ */ w(le.button, k({
    id: d,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Fd(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: X(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: X(e.onPointerMove, Us(() => {
      r || p.current || s.wasEscapeCloseRef.current || f.current || (a.onTriggerEnter(s.value), f.current = !0);
    })),
    onPointerLeave: X(e.onPointerLeave, Us(() => {
      r || (a.onTriggerLeave(), f.current = !1);
    })),
    onClick: X(e.onClick, () => {
      a.onItemSelect(s.value), p.current = m;
    }),
    onKeyDown: X(e.onKeyDown, (h) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && h.key === g && (s.onEntryKeyDown(), h.preventDefault());
    })
  })))), m && /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w(hh, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (h) => {
      const v = s.contentRef.current, g = h.relatedTarget, b = g === i.current, x = v == null ? void 0 : v.contains(g);
      (b || !x) && s.onFocusProxyEnter(b ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ w("span", {
    "aria-owns": u
  })));
}), pf = "navigationMenu.linkSelect", FP = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ w(lg, {
    asChild: !0
  }, /* @__PURE__ */ w(le.a, k({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: X(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(pf, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        pf,
        (d) => o == null ? void 0 : o(d),
        {
          once: !0
        }
      ), Ts(i, c), !c.defaultPrevented && !s.metaKey) {
        const d = new CustomEvent(Cs, {
          bubbles: !0,
          cancelable: !0
        });
        Ts(i, d);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), ag = "NavigationMenuIndicator", VP = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = gn(ag, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? /* @__PURE__ */ Yf.createPortal(/* @__PURE__ */ w(lt, {
    present: n || a
  }, /* @__PURE__ */ w(zP, k({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), zP = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = gn(ag, n), a = rg(n), [s, i] = q(null), [c, d] = q(null), u = o.orientation === "horizontal", f = !!o.value;
  Q(() => {
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
    s && d({
      size: u ? s.offsetWidth : s.offsetHeight,
      offset: u ? s.offsetLeft : s.offsetTop
    });
  };
  return el(s, p), el(o.indicatorTrack, p), c ? /* @__PURE__ */ w(le.div, k({
    "aria-hidden": !0,
    "data-state": f ? "visible" : "hidden",
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
}), da = "NavigationMenuContent", BP = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, o = gn(da, e.__scopeNavigationMenu), a = og(da, e.__scopeNavigationMenu), s = Ee(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ w(WP, k({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ w(lt, {
    present: n || i
  }, /* @__PURE__ */ w(sg, k({
    "data-state": Fd(i)
  }, c, {
    ref: s,
    onPointerEnter: X(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: X(e.onPointerLeave, Us(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), WP = /* @__PURE__ */ I((e, t) => {
  const n = gn(da, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return $t(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), $t(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), Cs = "navigationMenu.rootContentDismiss", sg = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...d } = e, u = gn(da, n), f = Z(null), p = Ee(f, t), m = dg(u.baseId, r), h = ug(u.baseId, r), v = rg(n), g = Z(null), { onItemDismiss: b } = u;
  Q(() => {
    const y = f.current;
    if (u.isRootMenu && y) {
      const $ = () => {
        var C;
        b(), i(), y.contains(document.activeElement) && ((C = o.current) === null || C === void 0 || C.focus());
      };
      return y.addEventListener(Cs, $), () => y.removeEventListener(Cs, $);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const x = Kt(() => {
    const $ = v().map(
      (F) => F.value
    );
    u.dir === "rtl" && $.reverse();
    const C = $.indexOf(u.value), P = $.indexOf(u.previousValue), S = r === u.value, N = P === $.indexOf(r);
    if (!S && !N)
      return g.current;
    const O = (() => {
      if (C !== P) {
        if (S && P !== -1)
          return C > P ? "from-end" : "from-start";
        if (N && C !== -1)
          return C > P ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = O, O;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ w(cg, {
    asChild: !0
  }, /* @__PURE__ */ w(Wr, k({
    id: h,
    "aria-labelledby": m,
    "data-motion": x,
    "data-orientation": u.orientation
  }, d, {
    ref: p,
    onDismiss: () => {
      var y;
      const $ = new Event(Cs, {
        bubbles: !0,
        cancelable: !0
      });
      (y = f.current) === null || y === void 0 || y.dispatchEvent($);
    },
    onFocusOutside: X(e.onFocusOutside, (y) => {
      var $;
      c();
      const C = y.target;
      ($ = u.rootNavigationMenu) !== null && $ !== void 0 && $.contains(C) && y.preventDefault();
    }),
    onPointerDownOutside: X(e.onPointerDownOutside, (y) => {
      var $;
      const C = y.target, P = v().some((N) => {
        var O;
        return (O = N.ref.current) === null || O === void 0 ? void 0 : O.contains(C);
      }), S = u.isRootMenu && (($ = u.viewport) === null || $ === void 0 ? void 0 : $.contains(C));
      (P || S || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (y) => {
      const $ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !$) {
        const S = Jc(y.currentTarget), N = document.activeElement, O = S.findIndex(
          (A) => A === N
        ), G = y.shiftKey ? S.slice(0, O).reverse() : S.slice(O + 1, S.length);
        if (Ld(G))
          y.preventDefault();
        else {
          var P;
          (P = a.current) === null || P === void 0 || P.focus();
        }
      }
    }),
    onEscapeKeyDown: X(e.onEscapeKeyDown, (y) => {
      s.current = !0;
    })
  })));
}), ig = "NavigationMenuViewport", HP = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...r } = e, a = !!gn(ig, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ w(lt, {
    present: n || a
  }, /* @__PURE__ */ w(UP, k({}, r, {
    ref: t
  })));
}), UP = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = gn(ig, n), s = Ee(t, a.onViewportChange), i = jP(da, e.__scopeNavigationMenu), [c, d] = q(null), [u, f] = q(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = !!a.value, v = h ? a.value : a.previousValue;
  return el(u, () => {
    u && d({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ w(le.div, k({
    "data-state": Fd(h),
    "data-orientation": a.orientation
  }, o, {
    ref: s,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !h && a.isRootMenu ? "none" : void 0,
      "--radix-navigation-menu-viewport-width": p,
      "--radix-navigation-menu-viewport-height": m,
      ...o.style
    },
    onPointerEnter: X(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: X(e.onPointerLeave, Us(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: x, forceMount: y, ...$ }]) => {
    const C = v === b;
    return /* @__PURE__ */ w(lt, {
      key: b,
      present: y || C
    }, /* @__PURE__ */ w(sg, k({}, $, {
      ref: ja(x, (P) => {
        C && P && f(P);
      })
    })));
  }));
}), KP = "FocusGroup", cg = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = gn(KP, n);
  return /* @__PURE__ */ w(Qc.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Qc.Slot, {
    scope: n
  }, /* @__PURE__ */ w(le.div, k({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), mf = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], GP = "FocusGroupItem", lg = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = NP(n), a = gn(GP, n);
  return /* @__PURE__ */ w(Qc.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ w(le.button, k({}, r, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...mf
      ].includes(s.key)) {
        let c = o().map(
          (f) => f.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), mf.includes(s.key)) {
          const f = c.indexOf(s.currentTarget);
          c = c.slice(f + 1);
        }
        setTimeout(
          () => Ld(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Jc(e) {
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
function Ld(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function YP(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function el(e, t) {
  const n = Xe(t);
  $t(() => {
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
function Fd(e) {
  return e ? "open" : "closed";
}
function dg(e, t) {
  return `${e}-trigger-${t}`;
}
function ug(e, t) {
  return `${e}-content-${t}`;
}
function Us(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const fg = MP, pg = DP, ZP = IP, mg = LP, qP = FP, hg = VP, vg = BP, gg = HP, XP = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  fg,
  {
    ref: r,
    className: T(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(bg, {})
    ]
  }
));
XP.displayName = fg.displayName;
const QP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  pg,
  {
    ref: n,
    className: T(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
QP.displayName = pg.displayName;
const FT = ZP, JP = _o(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), ek = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  mg,
  {
    ref: r,
    className: T(JP(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ l.jsx(
        Jo,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
ek.displayName = mg.displayName;
const tk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  vg,
  {
    ref: n,
    className: T(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
tk.displayName = vg.displayName;
const VT = qP, bg = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { className: T("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ l.jsx(
  gg,
  {
    className: T(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
bg.displayName = gg.displayName;
const nk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  hg,
  {
    ref: n,
    className: T(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
nk.displayName = hg.displayName;
const xg = "Progress", Di = 100, [rk, zT] = it(xg), [ok, ak] = rk(xg), yg = /* @__PURE__ */ I((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = ck, ...s } = e, i = tl(o) ? o : Di, c = $g(r, i) ? r : null, d = Ks(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ w(ok, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ w(le.div, k({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Ks(c) ? c : void 0,
    "aria-valuetext": d,
    role: "progressbar",
    "data-state": wg(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
yg.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !tl(r) ? new Error(lk(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = tl(e.max) ? e.max : Di;
    return r != null && !$g(r, a) ? new Error(dk(o, n)) : null;
  }
};
const sk = "ProgressIndicator", ik = /* @__PURE__ */ I((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = ak(sk, r);
  return /* @__PURE__ */ w(le.div, k({
    "data-state": wg(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function ck(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function wg(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ks(e) {
  return typeof e == "number";
}
function tl(e) {
  return Ks(e) && !isNaN(e) && e > 0;
}
function $g(e, t) {
  return Ks(e) && !isNaN(e) && e <= t && e >= 0;
}
function lk(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Di}\`.`;
}
function dk(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Di} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const _g = yg, uk = ik, fk = _.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  _g,
  {
    ref: r,
    className: T(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx(
      uk,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
fk.displayName = _g.displayName;
const Cg = "Radio", [pk, Sg] = it(Cg), [mk, hk] = pk(Cg), vk = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...d } = e, [u, f] = q(null), p = Ee(
    t,
    (v) => f(v)
  ), m = Z(!1), h = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ w(mk, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ w(le.button, k({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Ng(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, d, {
    ref: p,
    onClick: X(e.onClick, (v) => {
      o || c == null || c(), h && (m.current = v.isPropagationStopped(), m.current || v.stopPropagation());
    })
  })), h && /* @__PURE__ */ w(xk, {
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
}), gk = "RadioIndicator", bk = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = hk(gk, n);
  return /* @__PURE__ */ w(lt, {
    present: r || a.checked
  }, /* @__PURE__ */ w(le.span, k({
    "data-state": Ng(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), xk = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = Z(null), s = Oo(n), i = Aa(t);
  return Q(() => {
    const c = a.current, d = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      f.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", k({
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
function Ng(e) {
  return e ? "checked" : "unchecked";
}
const yk = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Eg = "RadioGroup", [wk, BT] = it(Eg, [
  br,
  Sg
]), Pg = br(), kg = Sg(), [$k, _k] = wk(Eg), Ck = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: d, loop: u = !0, onValueChange: f, ...p } = e, m = Pg(n), h = Mn(d), [v, g] = ft({
    prop: a,
    defaultProp: o,
    onChange: f
  });
  return /* @__PURE__ */ w($k, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ w(pi, k({
    asChild: !0
  }, m, {
    orientation: c,
    dir: h,
    loop: u
  }), /* @__PURE__ */ w(le.div, k({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: h
  }, p, {
    ref: t
  }))));
}), Sk = "RadioGroupItem", Nk = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = _k(Sk, n), s = a.disabled || r, i = Pg(n), c = kg(n), d = Z(null), u = Ee(t, d), f = a.value === o.value, p = Z(!1);
  return Q(() => {
    const m = (v) => {
      yk.includes(v.key) && (p.current = !0);
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ w(mi, k({
    asChild: !0
  }, i, {
    focusable: !s,
    active: f
  }), /* @__PURE__ */ w(vk, k({
    disabled: s,
    required: a.required,
    checked: f
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: X((m) => {
      m.key === "Enter" && m.preventDefault();
    }),
    onFocus: X(o.onFocus, () => {
      var m;
      p.current && ((m = d.current) === null || m === void 0 || m.click());
    })
  })));
}), Ek = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = kg(n);
  return /* @__PURE__ */ w(bk, k({}, o, r, {
    ref: t
  }));
}), jg = Ck, Mg = Nk, Pk = Ek, kk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  jg,
  {
    className: T("grid gap-2", e),
    ...t,
    ref: n
  }
));
kk.displayName = jg.displayName;
const jk = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Mg,
  {
    ref: r,
    className: T(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx(Pk, { className: "flex items-center justify-center", children: /* @__PURE__ */ l.jsx(si, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
jk.displayName = Mg.displayName;
const Tg = [
  "PageUp",
  "PageDown"
], Og = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Dg = {
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
}, qa = "Slider", [nl, Mk, Tk] = gr(qa), [Rg, WT] = it(qa, [
  Tk
]), [Ok, Ri] = Rg(qa), Dk = /* @__PURE__ */ I((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: d = [
    r
  ], value: u, onValueChange: f = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = q(null), b = Ee(
    t,
    (D) => g(D)
  ), x = Z(/* @__PURE__ */ new Set()), y = Z(0), $ = s === "horizontal", C = v ? !!v.closest("form") : !0, P = $ ? Rk : Ak, [S = [], N] = ft({
    prop: u,
    defaultProp: d,
    onChange: (D) => {
      var M;
      (M = [
        ...x.current
      ][y.current]) === null || M === void 0 || M.focus(), f(D);
    }
  }), O = Z(S);
  function F(D) {
    const M = Uk(S, D);
    B(D, M);
  }
  function G(D) {
    B(D, y.current);
  }
  function A() {
    const D = O.current[y.current];
    S[y.current] !== D && p(S);
  }
  function B(D, M, { commit: V } = {
    commit: !1
  }) {
    const R = Zk(a), U = qk(Math.round((D - r) / a) * a + r, R), W = ia(U, [
      r,
      o
    ]);
    N((ne = []) => {
      const me = Wk(ne, W, M);
      if (Yk(me, c * a)) {
        y.current = me.indexOf(W);
        const Y = String(me) !== String(ne);
        return Y && V && p(me), Y ? me : ne;
      } else
        return ne;
    });
  }
  return /* @__PURE__ */ w(Ok, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: y,
    thumbs: x.current,
    values: S,
    orientation: s
  }, /* @__PURE__ */ w(nl.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(nl.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(P, k({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: b,
    onPointerDown: X(h.onPointerDown, () => {
      i || (O.current = S);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : F,
    onSlideMove: i ? void 0 : G,
    onSlideEnd: i ? void 0 : A,
    onHomeKeyDown: () => !i && B(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && B(o, S.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: D, direction: M }) => {
      if (!i) {
        const U = Tg.includes(D.key) || D.shiftKey && Og.includes(D.key) ? 10 : 1, W = y.current, ne = S[W], me = a * U * M;
        B(ne + me, W, {
          commit: !0
        });
      }
    }
  })))), C && S.map(
    (D, M) => /* @__PURE__ */ w(Bk, {
      key: M,
      name: n ? n + (S.length > 1 ? "[]" : "") : void 0,
      value: D
    })
  ));
}), [Ag, Ig] = Rg(qa, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), Rk = /* @__PURE__ */ I((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: d, ...u } = e, [f, p] = q(null), m = Ee(
    t,
    (y) => p(y)
  ), h = Z(), v = Mn(o), g = v === "ltr", b = g && !a || !g && a;
  function x(y) {
    const $ = h.current || f.getBoundingClientRect(), C = [
      0,
      $.width
    ], S = Vd(C, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = $, S(y - $.left);
  }
  return /* @__PURE__ */ w(Ag, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ w(Lg, k({
    dir: v,
    "data-orientation": "horizontal"
  }, u, {
    ref: m,
    style: {
      ...u.style,
      "--radix-slider-thumb-transform": "translateX(-50%)"
    },
    onSlideStart: (y) => {
      const $ = x(y.clientX);
      s == null || s($);
    },
    onSlideMove: (y) => {
      const $ = x(y.clientX);
      i == null || i($);
    },
    onSlideEnd: () => {
      h.current = void 0, c == null || c();
    },
    onStepKeyDown: (y) => {
      const C = Dg[b ? "from-left" : "from-right"].includes(y.key);
      d == null || d({
        event: y,
        direction: C ? -1 : 1
      });
    }
  })));
}), Ak = /* @__PURE__ */ I((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...d } = e, u = Z(null), f = Ee(t, u), p = Z(), m = !o;
  function h(v) {
    const g = p.current || u.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], y = Vd(b, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, y(v - g.top);
  }
  return /* @__PURE__ */ w(Ag, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ w(Lg, k({
    "data-orientation": "vertical"
  }, d, {
    ref: f,
    style: {
      ...d.style,
      "--radix-slider-thumb-transform": "translateY(50%)"
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
      const b = Dg[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Lg = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...d } = e, u = Ri(qa, n);
  return /* @__PURE__ */ w(le.span, k({}, d, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (f) => {
      f.key === "Home" ? (s(f), f.preventDefault()) : f.key === "End" ? (i(f), f.preventDefault()) : Tg.concat(Og).includes(f.key) && (c(f), f.preventDefault());
    }),
    onPointerDown: X(e.onPointerDown, (f) => {
      const p = f.target;
      p.setPointerCapture(f.pointerId), f.preventDefault(), u.thumbs.has(p) ? p.focus() : r(f);
    }),
    onPointerMove: X(e.onPointerMove, (f) => {
      f.target.hasPointerCapture(f.pointerId) && o(f);
    }),
    onPointerUp: X(e.onPointerUp, (f) => {
      const p = f.target;
      p.hasPointerCapture(f.pointerId) && (p.releasePointerCapture(f.pointerId), a(f));
    })
  }));
}), Ik = "SliderTrack", Lk = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Ri(Ik, n);
  return /* @__PURE__ */ w(le.span, k({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), hf = "SliderRange", Fk = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Ri(hf, n), a = Ig(hf, n), s = Z(null), i = Ee(t, s), c = o.values.length, d = o.values.map(
    (p) => Fg(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...d) : 0, f = 100 - Math.max(...d);
  return /* @__PURE__ */ w(le.span, k({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: i,
    style: {
      ...e.style,
      [a.startEdge]: u + "%",
      [a.endEdge]: f + "%"
    }
  }));
}), vf = "SliderThumb", Vk = /* @__PURE__ */ I((e, t) => {
  const n = Mk(e.__scopeSlider), [r, o] = q(null), a = Ee(
    t,
    (i) => o(i)
  ), s = Kt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ w(zk, k({}, e, {
    ref: a,
    index: s
  }));
}), zk = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Ri(vf, n), s = Ig(vf, n), [i, c] = q(null), d = Ee(
    t,
    (g) => c(g)
  ), u = Aa(i), f = a.values[r], p = f === void 0 ? 0 : Fg(f, a.min, a.max), m = Hk(r, a.values.length), h = u == null ? void 0 : u[s.size], v = h ? Kk(h, p, s.direction) : 0;
  return Q(() => {
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
  }, /* @__PURE__ */ w(nl.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(le.span, k({
    role: "slider",
    "aria-label": e["aria-label"] || m,
    "aria-valuemin": a.min,
    "aria-valuenow": f,
    "aria-valuemax": a.max,
    "aria-orientation": a.orientation,
    "data-orientation": a.orientation,
    "data-disabled": a.disabled ? "" : void 0,
    tabIndex: a.disabled ? void 0 : 0
  }, o, {
    ref: d,
    style: f === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: X(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), Bk = (e) => {
  const { value: t, ...n } = e, r = Z(null), o = Oo(t);
  return Q(() => {
    const a = r.current, s = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(s, "value").set;
    if (o !== t && c) {
      const d = new Event("input", {
        bubbles: !0
      });
      c.call(a, t), a.dispatchEvent(d);
    }
  }, [
    o,
    t
  ]), /* @__PURE__ */ w("input", k({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function Wk(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Fg(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return ia(a, [
    0,
    100
  ]);
}
function Hk(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function Uk(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function Kk(e, t, n) {
  const r = e / 2, a = Vd([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function Gk(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function Yk(e, t) {
  if (t > 0) {
    const n = Gk(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Vd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Zk(e) {
  return (String(e).split(".")[1] || "").length;
}
function qk(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Vg = Dk, Xk = Lk, Qk = Fk, Jk = Vk, e6 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs(
  Vg,
  {
    ref: n,
    className: T(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(Xk, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ l.jsx(Qk, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ l.jsx(Jk, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
e6.displayName = Vg.displayName;
const zg = "Tabs", [t6, HT] = it(zg, [
  br
]), Bg = br(), [n6, zd] = t6(zg), r6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...d } = e, u = Mn(i), [f, p] = ft({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ w(n6, {
    scope: n,
    baseId: mt(),
    value: f,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ w(le.div, k({
    dir: u,
    "data-orientation": s
  }, d, {
    ref: t
  })));
}), o6 = "TabsList", a6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = zd(o6, n), s = Bg(n);
  return /* @__PURE__ */ w(pi, k({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ w(le.div, k({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), s6 = "TabsTrigger", i6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = zd(s6, n), i = Bg(n), c = Wg(s.baseId, r), d = Hg(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ w(mi, k({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ w(le.button, k({
    type: "button",
    role: "tab",
    "aria-selected": u,
    "aria-controls": d,
    "data-state": u ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: c
  }, a, {
    ref: t,
    onMouseDown: X(e.onMouseDown, (f) => {
      !o && f.button === 0 && f.ctrlKey === !1 ? s.onValueChange(r) : f.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (f) => {
      [
        " ",
        "Enter"
      ].includes(f.key) && s.onValueChange(r);
    }),
    onFocus: X(e.onFocus, () => {
      const f = s.activationMode !== "manual";
      !u && !o && f && s.onValueChange(r);
    })
  })));
}), c6 = "TabsContent", l6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = zd(c6, n), c = Wg(i.baseId, r), d = Hg(i.baseId, r), u = r === i.value, f = Z(u);
  return Q(() => {
    const p = requestAnimationFrame(
      () => f.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ w(
    lt,
    {
      present: o || u
    },
    ({ present: p }) => /* @__PURE__ */ w(le.div, k({
      "data-state": u ? "active" : "inactive",
      "data-orientation": i.orientation,
      role: "tabpanel",
      "aria-labelledby": c,
      hidden: !p,
      id: d,
      tabIndex: 0
    }, s, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: f.current ? "0s" : void 0
      }
    }), p && a)
  );
});
function Wg(e, t) {
  return `${e}-trigger-${t}`;
}
function Hg(e, t) {
  return `${e}-content-${t}`;
}
const d6 = r6, Ug = a6, Kg = i6, Gg = l6, UT = d6, u6 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ug,
  {
    ref: n,
    className: T(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
u6.displayName = Ug.displayName;
const f6 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Kg,
  {
    ref: n,
    className: T(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
f6.displayName = Kg.displayName;
const p6 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Gg,
  {
    ref: n,
    className: T(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
p6.displayName = Gg.displayName;
const m6 = /* @__PURE__ */ I((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = ft({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ w(le.button, k({
    type: "button",
    "aria-pressed": s,
    "data-state": s ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: X(e.onClick, () => {
      e.disabled || i(!s);
    })
  }));
}), Yg = m6, h6 = _o(
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
), v6 = _.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ l.jsx(
  Yg,
  {
    ref: o,
    className: T(h6({ variant: t, size: n, className: e })),
    ...r
  }
));
v6.displayName = Yg.displayName;
const [Ai, KT] = it("Tooltip", [
  Tn
]), Bd = Tn(), g6 = "TooltipProvider", b6 = 700, rl = "tooltip.open", [x6, Wd] = Ai(g6), y6 = (e) => {
  const { __scopeTooltip: t, delayDuration: n = b6, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = q(!0), c = Z(!1), d = Z(0);
  return Q(() => {
    const u = d.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ w(x6, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: ge(() => {
      window.clearTimeout(d.current), i(!1);
    }, []),
    onClose: ge(() => {
      window.clearTimeout(d.current), d.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: ge((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, Hd = "Tooltip", [w6, Ii] = Ai(Hd), $6 = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Wd(Hd, e.__scopeTooltip), d = Bd(t), [u, f] = q(null), p = mt(), m = Z(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = Z(!1), [b = !1, x] = ft({
    prop: r,
    defaultProp: o,
    onChange: (S) => {
      S ? (c.onOpen(), document.dispatchEvent(new CustomEvent(rl))) : c.onClose(), a == null || a(S);
    }
  }), y = Kt(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), $ = ge(() => {
    window.clearTimeout(m.current), g.current = !1, x(!0);
  }, [
    x
  ]), C = ge(() => {
    window.clearTimeout(m.current), x(!1);
  }, [
    x
  ]), P = ge(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, x(!0);
    }, v);
  }, [
    v,
    x
  ]);
  return Q(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ w(Po, d, /* @__PURE__ */ w(w6, {
    scope: t,
    contentId: p,
    open: b,
    stateAttribute: y,
    trigger: u,
    onTriggerChange: f,
    onTriggerEnter: ge(() => {
      c.isOpenDelayed ? P() : $();
    }, [
      c.isOpenDelayed,
      P,
      $
    ]),
    onTriggerLeave: ge(() => {
      h ? C() : window.clearTimeout(m.current);
    }, [
      C,
      h
    ]),
    onOpen: $,
    onClose: C,
    disableHoverableContent: h
  }, n));
}, gf = "TooltipTrigger", _6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = Ii(gf, n), a = Wd(gf, n), s = Bd(n), i = Z(null), c = Ee(t, i, o.onTriggerChange), d = Z(!1), u = Z(!1), f = ge(
    () => d.current = !1,
    []
  );
  return Q(() => () => document.removeEventListener("pointerup", f), [
    f
  ]), /* @__PURE__ */ w(Ia, k({
    asChild: !0
  }, s), /* @__PURE__ */ w(le.button, k({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: X(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: X(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: X(e.onPointerDown, () => {
      d.current = !0, document.addEventListener("pointerup", f, {
        once: !0
      });
    }),
    onFocus: X(e.onFocus, () => {
      d.current || o.onOpen();
    }),
    onBlur: X(e.onBlur, o.onClose),
    onClick: X(e.onClick, o.onClose)
  })));
}), C6 = "TooltipPortal", [GT, S6] = Ai(C6, {
  forceMount: void 0
}), ua = "TooltipContent", N6 = /* @__PURE__ */ I((e, t) => {
  const n = S6(ua, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = Ii(ua, e.__scopeTooltip);
  return /* @__PURE__ */ w(lt, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ w(Zg, k({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ w(E6, k({
    side: o
  }, a, {
    ref: t
  })));
}), E6 = /* @__PURE__ */ I((e, t) => {
  const n = Ii(ua, e.__scopeTooltip), r = Wd(ua, e.__scopeTooltip), o = Z(null), a = Ee(t, o), [s, i] = q(null), { trigger: c, onClose: d } = n, u = o.current, { onPointerInTransitChange: f } = r, p = ge(() => {
    i(null), f(!1);
  }, [
    f
  ]), m = ge((h, v) => {
    const g = h.currentTarget, b = {
      x: h.clientX,
      y: h.clientY
    }, x = k6(b, g.getBoundingClientRect()), y = j6(b, x), $ = M6(v.getBoundingClientRect()), C = O6([
      ...y,
      ...$
    ]);
    i(C), f(!0);
  }, [
    f
  ]);
  return Q(() => () => p(), [
    p
  ]), Q(() => {
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
  ]), Q(() => {
    if (s) {
      const h = (v) => {
        const g = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, x = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !T6(b, s);
        x ? p() : y && (p(), d());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    c,
    u,
    s,
    d,
    p
  ]), /* @__PURE__ */ w(Zg, k({}, e, {
    ref: a
  }));
}), [P6, YT] = Ai(Hd, {
  isInside: !1
}), Zg = /* @__PURE__ */ I((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = Ii(ua, n), d = Bd(n), { onClose: u } = c;
  return Q(() => (document.addEventListener(rl, u), () => document.removeEventListener(rl, u)), [
    u
  ]), Q(() => {
    if (c.trigger) {
      const f = (p) => {
        const m = p.target;
        m != null && m.contains(c.trigger) && u();
      };
      return window.addEventListener("scroll", f, {
        capture: !0
      }), () => window.removeEventListener("scroll", f, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    u
  ]), /* @__PURE__ */ w(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (f) => f.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ w(La, k({
    "data-state": c.stateAttribute
  }, d, i, {
    ref: t,
    style: {
      ...i.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ w(yl, null, r), /* @__PURE__ */ w(P6, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ w(hh, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function k6(e, t) {
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
function j6(e, t, n = 5) {
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
function M6(e) {
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
function T6(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, d = t[s].x, u = t[s].y;
    c > r != u > r && n < (d - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function O6(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), D6(t);
}
function D6(e) {
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
const R6 = y6, A6 = $6, I6 = _6, qg = N6, Ar = R6, Ir = A6, Lr = I6, ur = _.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l.jsx(
  qg,
  {
    ref: r,
    sideOffset: t,
    className: T(
      "z-50 overflow-hidden rounded-md border bg-card px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
ur.displayName = qg.displayName;
const Xg = "Switch", [L6, ZT] = it(Xg), [F6, V6] = L6(Xg), z6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: d, ...u } = e, [f, p] = q(null), m = Ee(
    t,
    (x) => p(x)
  ), h = Z(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = ft({
    prop: o,
    defaultProp: a,
    onChange: d
  });
  return /* @__PURE__ */ w(F6, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ w(le.button, k({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": Qg(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onClick: X(e.onClick, (x) => {
      b(
        (y) => !y
      ), v && (h.current = x.isPropagationStopped(), h.current || x.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(H6, {
    control: f,
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
}), B6 = "SwitchThumb", W6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = V6(B6, n);
  return /* @__PURE__ */ w(le.span, k({
    "data-state": Qg(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), H6 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = Z(null), s = Oo(n), i = Aa(t);
  return Q(() => {
    const c = a.current, d = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      f.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", k({
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
function Qg(e) {
  return e ? "checked" : "unchecked";
}
const Jg = z6, U6 = W6, K6 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Jg,
  {
    className: T(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ l.jsx(
      U6,
      {
        className: T(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
K6.displayName = Jg.displayName;
var G6 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const bf = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, f) => {
    const p = typeof u == "function" ? u(t) : u;
    if (!Object.is(p, t)) {
      const m = t;
      t = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((h) => h(t, m));
    }
  }, o = () => t, c = { setState: r, getState: o, getInitialState: () => d, subscribe: (u) => (n.add(u), () => n.delete(u)), destroy: () => {
    (G6 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, d = t = e(r, o, c);
  return c;
}, Y6 = (e) => e ? bf(e) : bf;
var ol = { exports: {} }, gc = {}, fs = { exports: {} }, bc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xf;
function Z6() {
  if (xf)
    return bc;
  xf = 1;
  var e = z;
  function t(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(f, p) {
    var m = p(), h = r({ inst: { value: m, getSnapshot: p } }), v = h[0].inst, g = h[1];
    return a(function() {
      v.value = m, v.getSnapshot = p, c(v) && g({ inst: v });
    }, [f, m, p]), o(function() {
      return c(v) && g({ inst: v }), f(function() {
        c(v) && g({ inst: v });
      });
    }, [f]), s(m), m;
  }
  function c(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var m = p();
      return !n(f, m);
    } catch {
      return !0;
    }
  }
  function d(f, p) {
    return p();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : i;
  return bc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, bc;
}
var xc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yf;
function q6() {
  return yf || (yf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = z, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var $ = arguments.length, C = new Array($ > 1 ? $ - 1 : 0), P = 1; P < $; P++)
          C[P - 1] = arguments[P];
        r("error", y, C);
      }
    }
    function r(y, $, C) {
      {
        var P = t.ReactDebugCurrentFrame, S = P.getStackAddendum();
        S !== "" && ($ += "%s", C = C.concat([S]));
        var N = C.map(function(O) {
          return String(O);
        });
        N.unshift("Warning: " + $), Function.prototype.apply.call(console[y], console, N);
      }
    }
    function o(y, $) {
      return y === $ && (y !== 0 || 1 / y === 1 / $) || y !== y && $ !== $;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, d = e.useDebugValue, u = !1, f = !1;
    function p(y, $, C) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var P = $();
      if (!f) {
        var S = $();
        a(P, S) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var N = s({
        inst: {
          value: P,
          getSnapshot: $
        }
      }), O = N[0].inst, F = N[1];
      return c(function() {
        O.value = P, O.getSnapshot = $, m(O) && F({
          inst: O
        });
      }, [y, P, $]), i(function() {
        m(O) && F({
          inst: O
        });
        var G = function() {
          m(O) && F({
            inst: O
          });
        };
        return y(G);
      }, [y]), d(P), P;
    }
    function m(y) {
      var $ = y.getSnapshot, C = y.value;
      try {
        var P = $();
        return !a(C, P);
      } catch {
        return !0;
      }
    }
    function h(y, $, C) {
      return $();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? h : p, x = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    xc.useSyncExternalStore = x, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xc;
}
var wf;
function eb() {
  return wf || (wf = 1, process.env.NODE_ENV === "production" ? fs.exports = Z6() : fs.exports = q6()), fs.exports;
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
var $f;
function X6() {
  if ($f)
    return gc;
  $f = 1;
  var e = z, t = eb();
  function n(d, u) {
    return d === u && (d !== 0 || 1 / d === 1 / u) || d !== d && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return gc.useSyncExternalStoreWithSelector = function(d, u, f, p, m) {
    var h = a(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else
      v = h.current;
    h = i(function() {
      function b(P) {
        if (!x) {
          if (x = !0, y = P, P = p(P), m !== void 0 && v.hasValue) {
            var S = v.value;
            if (m(S, P))
              return $ = S;
          }
          return $ = P;
        }
        if (S = $, r(y, P))
          return S;
        var N = p(P);
        return m !== void 0 && m(S, N) ? S : (y = P, $ = N);
      }
      var x = !1, y, $, C = f === void 0 ? null : f;
      return [function() {
        return b(u());
      }, C === null ? void 0 : function() {
        return b(C());
      }];
    }, [u, f, p, m]);
    var g = o(d, h[0], h[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, gc;
}
var yc = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _f;
function Q6() {
  return _f || (_f = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = z, t = eb();
    function n(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
    function d(u, f, p, m, h) {
      var v = a(null), g;
      v.current === null ? (g = {
        hasValue: !1,
        value: null
      }, v.current = g) : g = v.current;
      var b = i(function() {
        var C = !1, P, S, N = function(A) {
          if (!C) {
            C = !0, P = A;
            var B = m(A);
            if (h !== void 0 && g.hasValue) {
              var D = g.value;
              if (h(D, B))
                return S = D, D;
            }
            return S = B, B;
          }
          var M = P, V = S;
          if (r(M, A))
            return V;
          var R = m(A);
          return h !== void 0 && h(V, R) ? V : (P = A, S = R, R);
        }, O = p === void 0 ? null : p, F = function() {
          return N(f());
        }, G = O === null ? void 0 : function() {
          return N(O());
        };
        return [F, G];
      }, [f, p, m, h]), x = b[0], y = b[1], $ = o(u, x, y);
      return s(function() {
        g.hasValue = !0, g.value = $;
      }, [$]), c($), $;
    }
    yc.useSyncExternalStoreWithSelector = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), yc;
}
process.env.NODE_ENV === "production" ? ol.exports = X6() : ol.exports = Q6();
var J6 = ol.exports;
const ej = /* @__PURE__ */ p0(J6);
var tb = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: tj } = z, { useSyncExternalStoreWithSelector: nj } = ej;
let Cf = !1;
const rj = (e) => e;
function oj(e, t = rj, n) {
  (tb ? "production" : void 0) !== "production" && n && !Cf && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Cf = !0);
  const r = nj(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return tj(r), r;
}
const Sf = (e) => {
  (tb ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? Y6(e) : e, n = (r, o) => oj(t, r, o);
  return Object.assign(n, t), n;
}, aj = (e) => e ? Sf(e) : Sf, sj = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ l.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ l.jsxs(co, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ l.jsx(
      kr,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ l.jsx(lo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ l.jsx(ix, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ l.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ l.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ l.jsx(Tt, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ij = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = (e, t, n, r) => {
  const o = I(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, className: c, children: d, ...u }, f) => w(
      "svg",
      {
        ref: f,
        ...ij[e],
        width: s,
        height: s,
        className: ["tabler-icon", `tabler-icon-${t}`, c].join(" "),
        strokeWidth: i,
        stroke: a,
        ...u
      },
      [
        ...r.map(([p, m]) => w(p, m)),
        ...Array.isArray(d) ? d : [d]
      ]
    )
  );
  return o.displayName = `${n}`, o;
};
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nb = $r("outline", "adjustments-horizontal", "IconAdjustmentsHorizontal", [["path", { d: "M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M4 6l8 0", key: "svg-1" }], ["path", { d: "M16 6l4 0", key: "svg-2" }], ["path", { d: "M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M4 12l2 0", key: "svg-4" }], ["path", { d: "M10 12l10 0", key: "svg-5" }], ["path", { d: "M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }], ["path", { d: "M4 18l11 0", key: "svg-7" }], ["path", { d: "M19 18l1 0", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rb = $r("outline", "adjustments", "IconAdjustments", [["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M6 4v4", key: "svg-1" }], ["path", { d: "M6 12v8", key: "svg-2" }], ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }], ["path", { d: "M12 4v10", key: "svg-4" }], ["path", { d: "M12 18v2", key: "svg-5" }], ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }], ["path", { d: "M18 4v1", key: "svg-7" }], ["path", { d: "M18 9v11", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cj = $r("outline", "check", "IconCheck", [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var lj = $r("outline", "click", "IconClick", [["path", { d: "M3 12l3 0", key: "svg-0" }], ["path", { d: "M12 3l0 3", key: "svg-1" }], ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }], ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }], ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }], ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ob = $r("outline", "moon", "IconMoon", [["path", { d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ab = $r("outline", "photo-star", "IconPhotoStar", [["path", { d: "M15 8h.01", key: "svg-0" }], ["path", { d: "M11 21h-5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5", key: "svg-1" }], ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2", key: "svg-2" }], ["path", { d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z", key: "svg-3" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sb = $r("outline", "search", "IconSearch", [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ib = $r("outline", "sun", "IconSun", [["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }], ["path", { d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7", key: "svg-1" }]]), Nf = ["light", "dark"], dj = "(prefers-color-scheme: dark)", uj = _.createContext(void 0), fj = { setTheme: (e) => {
}, themes: [] }, pj = () => {
  var e;
  return (e = _.useContext(uj)) != null ? e : fj;
};
_.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: s, attrs: i, nonce: c }) => {
  let d = a === "system", u = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map((h) => `'${h}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = o ? Nf.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", p = (h, v = !1, g = !0) => {
    let b = s ? s[h] : h, x = v ? h + "|| ''" : `'${b}'`, y = "";
    return o && g && !v && Nf.includes(h) && (y += `d.style.colorScheme = '${h}';`), n === "class" ? v || b ? y += `c.add(${x})` : y += "null" : b && (y += `d[s](n,${x})`), y;
  }, m = e ? `!function(){${u}${p(e)}}()` : r ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${dj}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}${d ? "" : "else{" + p(a, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}else{${p(a, !1, !1)};}${f}}catch(t){}}();`;
  return _.createElement("script", { nonce: c, dangerouslySetInnerHTML: { __html: m } });
});
const mj = ({ isExpanded: e }) => {
  const [t, n] = q(!1), { theme: r, setTheme: o } = pj();
  if (Q(() => {
    n(!0);
  }, []), !t)
    return null;
  const a = () => {
    o(r === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: a,
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
      children: r === "light" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(ob, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(ib, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, hj = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ l.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ l.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ l.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(mj, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ l.jsx(ax, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ l.jsx(sx, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
        ]
      }
    ) }),
    e && /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsxs(
      "button",
      {
        onClick: e,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ l.jsx(sp, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Li = aj((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), qT = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = Li();
  return /* @__PURE__ */ l.jsx(
    "aside",
    {
      tabIndex: -1,
      className: T(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ l.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ l.jsx(sj, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ l.jsx(
          hj,
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
}, XT = ({ children: e }) => {
  const { isExpanded: t } = Li();
  return /* @__PURE__ */ l.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ l.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, cb = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = q(!1), c = Z(null), { isExpanded: d } = Li();
  return Q(() => {
    const u = () => {
      const f = c.current.querySelector(
        `#${e.replaceAll("/", "_")}`
      );
      if (f) {
        const p = f.offsetWidth < f.scrollWidth;
        i(p);
      }
    };
    return window.addEventListener("resize", u), u(), () => window.removeEventListener("resize", u);
  }, [e]), o ? /* @__PURE__ */ l.jsx(Ar, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
    o,
    {
      href: e,
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${d ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ l.jsx("div", { children: n }),
        !s && d && /* @__PURE__ */ l.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && d && /* @__PURE__ */ l.jsxs(Ir, { children: [
          /* @__PURE__ */ l.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ l.jsx(ur, { children: /* @__PURE__ */ l.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ l.jsx(Ar, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${d ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10
          ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20  hover:dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ l.jsx("div", { children: n }),
        !s && d && /* @__PURE__ */ l.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && d && /* @__PURE__ */ l.jsxs(Ir, { children: [
          /* @__PURE__ */ l.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ l.jsx(ur, { children: /* @__PURE__ */ l.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Ef = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = q(!1), c = Z(null);
  return Q(() => {
    const d = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const f = u.offsetWidth < u.scrollWidth;
        i(f);
      }
    };
    return window.addEventListener("resize", d), d(), () => window.removeEventListener("resize", d);
  }, [n]), a ? /* @__PURE__ */ l.jsx(Ar, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
    a,
    {
      href: n,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg  hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ l.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ l.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ l.jsxs(Ir, { children: [
          /* @__PURE__ */ l.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ l.jsx(ur, { children: /* @__PURE__ */ l.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ l.jsx(Ar, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
          ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ l.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ l.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ l.jsxs(Ir, { children: [
          /* @__PURE__ */ l.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ l.jsx(ur, { children: /* @__PURE__ */ l.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, vj = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = q(!1), [i, c] = q(!1), { isExpanded: d } = Li(), u = Z(null), f = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return Q(() => {
    const m = () => {
      const h = u.current.querySelector(`#${p}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ l.jsxs(Ar, { delayDuration: 180, children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: u,
        onClick: f,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${d ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: `flex w-full justify-start items-center ${d ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ l.jsx("div", { children: t }),
            !a && d && /* @__PURE__ */ l.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && d && /* @__PURE__ */ l.jsxs(Ir, { children: [
              /* @__PURE__ */ l.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ l.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ l.jsx(ur, { children: /* @__PURE__ */ l.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ l.jsx(hu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ l.jsx(Jo, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(
      Ef,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: d
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ l.jsxs(Ar, { delayDuration: 180, children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: u,
        onClick: f,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${d ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: `flex w-full justify-start items-center ${d ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ l.jsx("div", { children: t }),
            !a && d && /* @__PURE__ */ l.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && d && /* @__PURE__ */ l.jsxs(Ir, { children: [
              /* @__PURE__ */ l.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ l.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ l.jsx(ur, { children: /* @__PURE__ */ l.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ l.jsx(hu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ l.jsx(Jo, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(
      Ef,
      {
        ...m,
        pathname: r,
        isExpanded: d
      }
    ) }, m.to)) })
  ] });
}, Xn = Vt({
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
function gj() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = at(Xn);
  return /* @__PURE__ */ l.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ l.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ l.jsxs(
        yd,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ l.jsx(Si, { className: "h-8 w-[70px]", children: /* @__PURE__ */ l.jsx(wd, { placeholder: e.limit }) }),
            /* @__PURE__ */ l.jsx(Ni, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ l.jsx(Ei, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ l.jsxs(
        ze,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ l.jsx(ai, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ l.jsxs(
        ze,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ l.jsx(vr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const lb = () => {
  const { columns: e } = at(Xn);
  return /* @__PURE__ */ l.jsx(mv, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ l.jsx(Mi, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ l.jsx(vv, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, QT = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, Ao = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), JT = { limit: 10, page: 1 }, Pf = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), e8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], bj = ({ colSpan: e }) => /* @__PURE__ */ l.jsx(Mi, { children: /* @__PURE__ */ l.jsx(Nd, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), xj = ({
  data: e,
  columns: t,
  setSelectItem: n,
  setMultiItemsSelected: r,
  multiItemsSelected: o,
  limitOfMultiSelect: a,
  itemsSelectedCount: s,
  setItemsSelectedCount: i
}) => {
  const c = (d, u) => {
    const f = () => {
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
    return d != null && d.render ? /* @__PURE__ */ l.jsx("div", { children: d.render(u) }) : d.id === "select" ? /* @__PURE__ */ l.jsx(
      ze,
      {
        onClick: () => n(u),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ l.jsx(lj, { size: 18 })
      }
    ) : d.id === "multi-select" ? /* @__PURE__ */ l.jsx(
      Mh,
      {
        className: "border-slate-500 data-[state=checked]:bg-brand-primary-lighter",
        onClick: () => {
          o && f();
        },
        checked: o ? o.some(
          (p) => p.id === u.id
        ) : !1,
        disabled: s === a && !s
      }
    ) : /* @__PURE__ */ l.jsx(l.Fragment, { children: u[d.id] });
  };
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: e.map((d) => /* @__PURE__ */ l.jsx(Mi, { children: t.map((u) => /* @__PURE__ */ l.jsx(Nd, { children: c(u, d) }, Pf())) }, Pf())) });
}, db = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = at(Xn), [s, i] = q(
    o ? o.length : 0
  );
  return /* @__PURE__ */ l.jsx(hv, { className: "bg-card", children: e.length ? /* @__PURE__ */ l.jsx(
    xj,
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
  ) : /* @__PURE__ */ l.jsx(bj, { colSpan: t.length }) });
}, yj = () => /* @__PURE__ */ l.jsxs(Sd, { children: [
  /* @__PURE__ */ l.jsx(lb, {}),
  /* @__PURE__ */ l.jsx(db, {})
] }), wj = () => /* @__PURE__ */ l.jsx("span", { className: "loader-fade-dot" }), $j = () => /* @__PURE__ */ l.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ l.jsx(wj, {}),
  /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var kf = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = pe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, ub = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? kf(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return kf(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, _j = function(e, t) {
  t.shouldUseNativeValidation && ub(e, t);
  var n = {};
  for (var r in e) {
    var o = pe(t.fields, r), a = Object.assign(e[r] || {}, { ref: o && o.ref });
    if (Cj(t.names || Object.keys(e), r)) {
      var s = Object.assign({}, pe(n, r));
      Ye(s, "root", a), Ye(n, r, s);
    } else
      Ye(n, r, a);
  }
  return n;
}, Cj = function(e, t) {
  return e.some(function(n) {
    return n.startsWith(t + ".");
  });
}, Sj = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, a = r.message, s = r.path.join(".");
    if (!n[s])
      if ("unionErrors" in r) {
        var i = r.unionErrors[0].errors[0];
        n[s] = { message: i.message, type: i.code };
      } else
        n[s] = { message: a, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(f) {
        return e.push(f);
      });
    }), t) {
      var c = n[s].types, d = c && c[r.code];
      n[s] = Vm(s, t, n, o, d ? [].concat(d, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, fb = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(d) {
            return a.shouldUseNativeValidation && ub({}, a), { errors: {}, values: n.raw ? r : d };
          });
        } catch (d) {
          return i(d);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: _j(Sj(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
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
var al;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(al || (al = {}));
const we = He.arrayToEnum([
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
]), ar = (e) => {
  switch (typeof e) {
    case "undefined":
      return we.undefined;
    case "string":
      return we.string;
    case "number":
      return isNaN(e) ? we.nan : we.number;
    case "boolean":
      return we.boolean;
    case "function":
      return we.function;
    case "bigint":
      return we.bigint;
    case "symbol":
      return we.symbol;
    case "object":
      return Array.isArray(e) ? we.array : e === null ? we.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? we.promise : typeof Map < "u" && e instanceof Map ? we.map : typeof Set < "u" && e instanceof Set ? we.set : typeof Date < "u" && e instanceof Date ? we.date : we.object;
    default:
      return we.unknown;
  }
}, se = He.arrayToEnum([
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
]), Nj = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Ut extends Error {
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
            const d = s.path[c];
            c === s.path.length - 1 ? (i[d] = i[d] || { _errors: [] }, i[d]._errors.push(n(s))) : i[d] = i[d] || { _errors: [] }, i = i[d], c++;
          }
        }
    };
    return o(this), r;
  }
  static assert(t) {
    if (!(t instanceof Ut))
      throw new Error(`Not a ZodError: ${t}`);
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
Ut.create = (e) => new Ut(e);
const yo = (e, t) => {
  let n;
  switch (e.code) {
    case se.invalid_type:
      e.received === we.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case se.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, He.jsonStringifyReplacer)}`;
      break;
    case se.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${He.joinValues(e.keys, ", ")}`;
      break;
    case se.invalid_union:
      n = "Invalid input";
      break;
    case se.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${He.joinValues(e.options)}`;
      break;
    case se.invalid_enum_value:
      n = `Invalid enum value. Expected ${He.joinValues(e.options)}, received '${e.received}'`;
      break;
    case se.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case se.invalid_return_type:
      n = "Invalid function return type";
      break;
    case se.invalid_date:
      n = "Invalid date";
      break;
    case se.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : He.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case se.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case se.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case se.custom:
      n = "Invalid input";
      break;
    case se.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case se.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case se.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, He.assertNever(e);
  }
  return { message: n };
};
let pb = yo;
function Ej(e) {
  pb = e;
}
function Gs() {
  return pb;
}
const Ys = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, a = [...n, ...o.path || []], s = {
    ...o,
    path: a
  };
  if (o.message !== void 0)
    return {
      ...o,
      path: a,
      message: o.message
    };
  let i = "";
  const c = r.filter((d) => !!d).slice().reverse();
  for (const d of c)
    i = d(s, { data: t, defaultError: i }).message;
  return {
    ...o,
    path: a,
    message: i
  };
}, Pj = [];
function ve(e, t) {
  const n = Gs(), r = Ys({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === yo ? void 0 : yo
      // then global default map
    ].filter((o) => !!o)
  });
  e.common.issues.push(r);
}
class Et {
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
        return Te;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n) {
      const a = await o.key, s = await o.value;
      r.push({
        key: a,
        value: s
      });
    }
    return Et.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: a, value: s } = o;
      if (a.status === "aborted" || s.status === "aborted")
        return Te;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const Te = Object.freeze({
  status: "aborted"
}), io = (e) => ({ status: "dirty", value: e }), Ot = (e) => ({ status: "valid", value: e }), sl = (e) => e.status === "aborted", il = (e) => e.status === "dirty", fa = (e) => e.status === "valid", Zs = (e) => typeof Promise < "u" && e instanceof Promise;
function qs(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function mb(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Se;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Se || (Se = {}));
var Yo, Zo;
class kn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const jf = (e, t) => {
  if (fa(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Ut(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Re(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (s, i) => {
    var c, d;
    const { message: u } = e;
    return s.code === "invalid_enum_value" ? { message: u ?? i.defaultError } : typeof i.data > "u" ? { message: (c = u ?? r) !== null && c !== void 0 ? c : i.defaultError } : s.code !== "invalid_type" ? { message: i.defaultError } : { message: (d = u ?? n) !== null && d !== void 0 ? d : i.defaultError };
  }, description: o };
}
class Fe {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return ar(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: ar(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Et(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: ar(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Zs(n))
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
      parsedType: ar(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return jf(o, a);
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
      parsedType: ar(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (Zs(o) ? o : Promise.resolve(o));
    return jf(r, a);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, a) => {
      const s = t(o), i = () => a.addIssue({
        code: se.custom,
        ...r(o)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((c) => c ? !0 : (i(), !1)) : s ? !0 : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new hn({
      schema: this,
      typeName: je.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Cn.create(this, this._def);
  }
  nullable() {
    return hr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return sn.create(this, this._def);
  }
  promise() {
    return $o.create(this, this._def);
  }
  or(t) {
    return va.create([this, t], this._def);
  }
  and(t) {
    return ga.create(this, t, this._def);
  }
  transform(t) {
    return new hn({
      ...Re(this._def),
      schema: this,
      typeName: je.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new $a({
      ...Re(this._def),
      innerType: this,
      defaultValue: n,
      typeName: je.ZodDefault
    });
  }
  brand() {
    return new Ud({
      typeName: je.ZodBranded,
      type: this,
      ...Re(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new _a({
      ...Re(this._def),
      innerType: this,
      catchValue: n,
      typeName: je.ZodCatch
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
    return Xa.create(this, t);
  }
  readonly() {
    return Ca.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const kj = /^c[^\s-]{8,}$/i, jj = /^[0-9a-z]+$/, Mj = /^[0-9A-HJKMNP-TV-Z]{26}$/, Tj = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Oj = /^[a-z0-9_-]{21}$/i, Dj = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Rj = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Aj = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let wc;
const Ij = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Lj = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Fj = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, hb = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Vj = new RegExp(`^${hb}$`);
function vb(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function zj(e) {
  return new RegExp(`^${vb(e)}$`);
}
function gb(e) {
  let t = `${hb}T${vb(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Bj(e, t) {
  return !!((t === "v4" || !t) && Ij.test(e) || (t === "v6" || !t) && Lj.test(e));
}
class on extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== we.string) {
      const a = this._getOrReturnCtx(t);
      return ve(a, {
        code: se.invalid_type,
        expected: we.string,
        received: a.parsedType
      }), Te;
    }
    const r = new Et();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? ve(o, {
          code: se.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && ve(o, {
          code: se.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        Rj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "email",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        wc || (wc = new RegExp(Aj, "u")), wc.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "emoji",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        Tj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "uuid",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        Oj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "nanoid",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        kj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "cuid",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        jj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "cuid2",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        Mj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "ulid",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), ve(o, {
            validation: "url",
            code: se.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "regex",
          code: se.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? gb(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "date" ? Vj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: "date",
          message: a.message
        }), r.dirty()) : a.kind === "time" ? zj(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: "time",
          message: a.message
        }), r.dirty()) : a.kind === "duration" ? Dj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "duration",
          code: se.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? Bj(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "ip",
          code: se.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "base64" ? Fj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "base64",
          code: se.invalid_string,
          message: a.message
        }), r.dirty()) : He.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: se.invalid_string,
      ...Se.errToObj(r)
    });
  }
  _addCheck(t) {
    return new on({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Se.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Se.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Se.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Se.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...Se.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Se.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Se.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Se.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...Se.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Se.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
      ...Se.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...Se.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...Se.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Se.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...Se.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Se.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Se.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Se.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Se.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Se.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, Se.errToObj(t));
  }
  trim() {
    return new on({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new on({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new on({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
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
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
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
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
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
on.create = (e) => {
  var t;
  return new on({
    checks: [],
    typeName: je.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Re(e)
  });
};
function Wj(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class fr extends Fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== we.number) {
      const a = this._getOrReturnCtx(t);
      return ve(a, {
        code: se.invalid_type,
        expected: we.number,
        received: a.parsedType
      }), Te;
    }
    let r;
    const o = new Et();
    for (const a of this._def.checks)
      a.kind === "int" ? He.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? Wj(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.not_finite,
        message: a.message
      }), o.dirty()) : He.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Se.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Se.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Se.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Se.toString(n));
  }
  setLimit(t, n, r, o) {
    return new fr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Se.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new fr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Se.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Se.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Se.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Se.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Se.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Se.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Se.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Se.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Se.toString(t)
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
fr.create = (e) => new fr({
  checks: [],
  typeName: je.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Re(e)
});
class pr extends Fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== we.bigint) {
      const a = this._getOrReturnCtx(t);
      return ve(a, {
        code: se.invalid_type,
        expected: we.bigint,
        received: a.parsedType
      }), Te;
    }
    let r;
    const o = new Et();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : He.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Se.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Se.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Se.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Se.toString(n));
  }
  setLimit(t, n, r, o) {
    return new pr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Se.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new pr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Se.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Se.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Se.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Se.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Se.toString(n)
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
pr.create = (e) => {
  var t;
  return new pr({
    checks: [],
    typeName: je.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Re(e)
  });
};
class pa extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== we.boolean) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.boolean,
        received: r.parsedType
      }), Te;
    }
    return Ot(t.data);
  }
}
pa.create = (e) => new pa({
  typeName: je.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Re(e)
});
class Fr extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== we.date) {
      const a = this._getOrReturnCtx(t);
      return ve(a, {
        code: se.invalid_type,
        expected: we.date,
        received: a.parsedType
      }), Te;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ve(a, {
        code: se.invalid_date
      }), Te;
    }
    const r = new Et();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), ve(o, {
        code: se.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), ve(o, {
        code: se.too_big,
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
      message: Se.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Se.toString(n)
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
  typeName: je.ZodDate,
  ...Re(e)
});
class Xs extends Fe {
  _parse(t) {
    if (this._getType(t) !== we.symbol) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.symbol,
        received: r.parsedType
      }), Te;
    }
    return Ot(t.data);
  }
}
Xs.create = (e) => new Xs({
  typeName: je.ZodSymbol,
  ...Re(e)
});
class ma extends Fe {
  _parse(t) {
    if (this._getType(t) !== we.undefined) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.undefined,
        received: r.parsedType
      }), Te;
    }
    return Ot(t.data);
  }
}
ma.create = (e) => new ma({
  typeName: je.ZodUndefined,
  ...Re(e)
});
class ha extends Fe {
  _parse(t) {
    if (this._getType(t) !== we.null) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.null,
        received: r.parsedType
      }), Te;
    }
    return Ot(t.data);
  }
}
ha.create = (e) => new ha({
  typeName: je.ZodNull,
  ...Re(e)
});
class wo extends Fe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Ot(t.data);
  }
}
wo.create = (e) => new wo({
  typeName: je.ZodAny,
  ...Re(e)
});
class Mr extends Fe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Ot(t.data);
  }
}
Mr.create = (e) => new Mr({
  typeName: je.ZodUnknown,
  ...Re(e)
});
class Gn extends Fe {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ve(n, {
      code: se.invalid_type,
      expected: we.never,
      received: n.parsedType
    }), Te;
  }
}
Gn.create = (e) => new Gn({
  typeName: je.ZodNever,
  ...Re(e)
});
class Qs extends Fe {
  _parse(t) {
    if (this._getType(t) !== we.undefined) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.void,
        received: r.parsedType
      }), Te;
    }
    return Ot(t.data);
  }
}
Qs.create = (e) => new Qs({
  typeName: je.ZodVoid,
  ...Re(e)
});
class sn extends Fe {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== we.array)
      return ve(n, {
        code: se.invalid_type,
        expected: we.array,
        received: n.parsedType
      }), Te;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && (ve(n, {
        code: s ? se.too_big : se.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (ve(n, {
      code: se.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (ve(n, {
      code: se.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new kn(n, s, n.path, i)))).then((s) => Et.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new kn(n, s, n.path, i)));
    return Et.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new sn({
      ...this._def,
      minLength: { value: t, message: Se.toString(n) }
    });
  }
  max(t, n) {
    return new sn({
      ...this._def,
      maxLength: { value: t, message: Se.toString(n) }
    });
  }
  length(t, n) {
    return new sn({
      ...this._def,
      exactLength: { value: t, message: Se.toString(n) }
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
  typeName: je.ZodArray,
  ...Re(t)
});
function ao(e) {
  if (e instanceof dt) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Cn.create(ao(r));
    }
    return new dt({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof sn ? new sn({
      ...e._def,
      type: ao(e.element)
    }) : e instanceof Cn ? Cn.create(ao(e.unwrap())) : e instanceof hr ? hr.create(ao(e.unwrap())) : e instanceof jn ? jn.create(e.items.map((t) => ao(t))) : e;
}
class dt extends Fe {
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
    if (this._getType(t) !== we.object) {
      const d = this._getOrReturnCtx(t);
      return ve(d, {
        code: se.invalid_type,
        expected: we.object,
        received: d.parsedType
      }), Te;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Gn && this._def.unknownKeys === "strip"))
      for (const d in o.data)
        s.includes(d) || i.push(d);
    const c = [];
    for (const d of s) {
      const u = a[d], f = o.data[d];
      c.push({
        key: { status: "valid", value: d },
        value: u._parse(new kn(o, f, o.path, d)),
        alwaysSet: d in o.data
      });
    }
    if (this._def.catchall instanceof Gn) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (d === "strict")
        i.length > 0 && (ve(o, {
          code: se.unrecognized_keys,
          keys: i
        }), r.dirty());
      else if (d !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const u of i) {
        const f = o.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: d._parse(
            new kn(o, f, o.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const u of c) {
        const f = await u.key, p = await u.value;
        d.push({
          key: f,
          value: p,
          alwaysSet: u.alwaysSet
        });
      }
      return d;
    }).then((d) => Et.mergeObjectSync(r, d)) : Et.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Se.errToObj, new dt({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, a, s, i;
          const c = (s = (a = (o = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(o, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (i = Se.errToObj(t).message) !== null && i !== void 0 ? i : c
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
      typeName: je.ZodObject
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
    return ao(this);
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
        for (; a instanceof Cn; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new dt({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return bb(He.objectKeys(this.shape));
  }
}
dt.create = (e, t) => new dt({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Gn.create(),
  typeName: je.ZodObject,
  ...Re(t)
});
dt.strictCreate = (e, t) => new dt({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Gn.create(),
  typeName: je.ZodObject,
  ...Re(t)
});
dt.lazycreate = (e, t) => new dt({
  shape: e,
  unknownKeys: "strip",
  catchall: Gn.create(),
  typeName: je.ZodObject,
  ...Re(t)
});
class va extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new Ut(i.ctx.common.issues));
      return ve(n, {
        code: se.invalid_union,
        unionErrors: s
      }), Te;
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
        const d = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
          data: n.data,
          path: n.path,
          parent: d
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !a && (a = { result: u, ctx: d }), d.common.issues.length && s.push(d.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = s.map((c) => new Ut(c));
      return ve(n, {
        code: se.invalid_union,
        unionErrors: i
      }), Te;
    }
  }
  get options() {
    return this._def.options;
  }
}
va.create = (e, t) => new va({
  options: e,
  typeName: je.ZodUnion,
  ...Re(t)
});
const Fn = (e) => e instanceof xa ? Fn(e.schema) : e instanceof hn ? Fn(e.innerType()) : e instanceof ya ? [e.value] : e instanceof mr ? e.options : e instanceof wa ? He.objectValues(e.enum) : e instanceof $a ? Fn(e._def.innerType) : e instanceof ma ? [void 0] : e instanceof ha ? [null] : e instanceof Cn ? [void 0, ...Fn(e.unwrap())] : e instanceof hr ? [null, ...Fn(e.unwrap())] : e instanceof Ud || e instanceof Ca ? Fn(e.unwrap()) : e instanceof _a ? Fn(e._def.innerType) : [];
class Fi extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== we.object)
      return ve(n, {
        code: se.invalid_type,
        expected: we.object,
        received: n.parsedType
      }), Te;
    const r = this.discriminator, o = n.data[r], a = this.optionsMap.get(o);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (ve(n, {
      code: se.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), Te);
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
      const s = Fn(a.shape[t]);
      if (!s.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new Fi({
      typeName: je.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Re(r)
    });
  }
}
function cl(e, t) {
  const n = ar(e), r = ar(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === we.object && r === we.object) {
    const o = He.objectKeys(t), a = He.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = cl(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      s[i] = c.data;
    }
    return { valid: !0, data: s };
  } else if (n === we.array && r === we.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a], i = t[a], c = cl(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === we.date && r === we.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class ga extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (sl(a) || sl(s))
        return Te;
      const i = cl(a.value, s.value);
      return i.valid ? ((il(a) || il(s)) && n.dirty(), { status: n.value, value: i.data }) : (ve(r, {
        code: se.invalid_intersection_types
      }), Te);
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
ga.create = (e, t, n) => new ga({
  left: e,
  right: t,
  typeName: je.ZodIntersection,
  ...Re(n)
});
class jn extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== we.array)
      return ve(r, {
        code: se.invalid_type,
        expected: we.array,
        received: r.parsedType
      }), Te;
    if (r.data.length < this._def.items.length)
      return ve(r, {
        code: se.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Te;
    !this._def.rest && r.data.length > this._def.items.length && (ve(r, {
      code: se.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new kn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => Et.mergeArray(n, s)) : Et.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new jn({
      ...this._def,
      rest: t
    });
  }
}
jn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new jn({
    items: e,
    typeName: je.ZodTuple,
    rest: null,
    ...Re(t)
  });
};
class ba extends Fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== we.object)
      return ve(r, {
        code: se.invalid_type,
        expected: we.object,
        received: r.parsedType
      }), Te;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new kn(r, i, r.path, i)),
        value: s._parse(new kn(r, r.data[i], r.path, i)),
        alwaysSet: i in r.data
      });
    return r.common.async ? Et.mergeObjectAsync(n, o) : Et.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Fe ? new ba({
      keyType: t,
      valueType: n,
      typeName: je.ZodRecord,
      ...Re(r)
    }) : new ba({
      keyType: on.create(),
      valueType: t,
      typeName: je.ZodRecord,
      ...Re(n)
    });
  }
}
class Js extends Fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== we.map)
      return ve(r, {
        code: se.invalid_type,
        expected: we.map,
        received: r.parsedType
      }), Te;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], d) => ({
      key: o._parse(new kn(r, i, r.path, [d, "key"])),
      value: a._parse(new kn(r, c, r.path, [d, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of s) {
          const d = await c.key, u = await c.value;
          if (d.status === "aborted" || u.status === "aborted")
            return Te;
          (d.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(d.value, u.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const d = c.key, u = c.value;
        if (d.status === "aborted" || u.status === "aborted")
          return Te;
        (d.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(d.value, u.value);
      }
      return { status: n.value, value: i };
    }
  }
}
Js.create = (e, t, n) => new Js({
  valueType: t,
  keyType: e,
  typeName: je.ZodMap,
  ...Re(n)
});
class Vr extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== we.set)
      return ve(r, {
        code: se.invalid_type,
        expected: we.set,
        received: r.parsedType
      }), Te;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (ve(r, {
      code: se.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ve(r, {
      code: se.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function s(c) {
      const d = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return Te;
        u.status === "dirty" && n.dirty(), d.add(u.value);
      }
      return { status: n.value, value: d };
    }
    const i = [...r.data.values()].map((c, d) => a._parse(new kn(r, c, r.path, d)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new Vr({
      ...this._def,
      minSize: { value: t, message: Se.toString(n) }
    });
  }
  max(t, n) {
    return new Vr({
      ...this._def,
      maxSize: { value: t, message: Se.toString(n) }
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
  typeName: je.ZodSet,
  ...Re(t)
});
class po extends Fe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== we.function)
      return ve(n, {
        code: se.invalid_type,
        expected: we.function,
        received: n.parsedType
      }), Te;
    function r(i, c) {
      return Ys({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Gs(),
          yo
        ].filter((d) => !!d),
        issueData: {
          code: se.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return Ys({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Gs(),
          yo
        ].filter((d) => !!d),
        issueData: {
          code: se.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof $o) {
      const i = this;
      return Ot(async function(...c) {
        const d = new Ut([]), u = await i._def.args.parseAsync(c, a).catch((m) => {
          throw d.addIssue(r(c, m)), d;
        }), f = await Reflect.apply(s, this, u);
        return await i._def.returns._def.type.parseAsync(f, a).catch((m) => {
          throw d.addIssue(o(f, m)), d;
        });
      });
    } else {
      const i = this;
      return Ot(function(...c) {
        const d = i._def.args.safeParse(c, a);
        if (!d.success)
          throw new Ut([r(c, d.error)]);
        const u = Reflect.apply(s, this, d.data), f = i._def.returns.safeParse(u, a);
        if (!f.success)
          throw new Ut([o(u, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new po({
      ...this._def,
      args: jn.create(t).rest(Mr.create())
    });
  }
  returns(t) {
    return new po({
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
    return new po({
      args: t || jn.create([]).rest(Mr.create()),
      returns: n || Mr.create(),
      typeName: je.ZodFunction,
      ...Re(r)
    });
  }
}
class xa extends Fe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
xa.create = (e, t) => new xa({
  getter: e,
  typeName: je.ZodLazy,
  ...Re(t)
});
class ya extends Fe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ve(n, {
        received: n.data,
        code: se.invalid_literal,
        expected: this._def.value
      }), Te;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ya.create = (e, t) => new ya({
  value: e,
  typeName: je.ZodLiteral,
  ...Re(t)
});
function bb(e, t) {
  return new mr({
    values: e,
    typeName: je.ZodEnum,
    ...Re(t)
  });
}
class mr extends Fe {
  constructor() {
    super(...arguments), Yo.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ve(n, {
        expected: He.joinValues(r),
        received: n.parsedType,
        code: se.invalid_type
      }), Te;
    }
    if (qs(this, Yo) || mb(this, Yo, new Set(this._def.values)), !qs(this, Yo).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ve(n, {
        received: n.data,
        code: se.invalid_enum_value,
        options: r
      }), Te;
    }
    return Ot(t.data);
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
  extract(t, n = this._def) {
    return mr.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return mr.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Yo = /* @__PURE__ */ new WeakMap();
mr.create = bb;
class wa extends Fe {
  constructor() {
    super(...arguments), Zo.set(this, void 0);
  }
  _parse(t) {
    const n = He.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== we.string && r.parsedType !== we.number) {
      const o = He.objectValues(n);
      return ve(r, {
        expected: He.joinValues(o),
        received: r.parsedType,
        code: se.invalid_type
      }), Te;
    }
    if (qs(this, Zo) || mb(this, Zo, new Set(He.getValidEnumValues(this._def.values))), !qs(this, Zo).has(t.data)) {
      const o = He.objectValues(n);
      return ve(r, {
        received: r.data,
        code: se.invalid_enum_value,
        options: o
      }), Te;
    }
    return Ot(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Zo = /* @__PURE__ */ new WeakMap();
wa.create = (e, t) => new wa({
  values: e,
  typeName: je.ZodNativeEnum,
  ...Re(t)
});
class $o extends Fe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== we.promise && n.common.async === !1)
      return ve(n, {
        code: se.invalid_type,
        expected: we.promise,
        received: n.parsedType
      }), Te;
    const r = n.parsedType === we.promise ? n.data : Promise.resolve(n.data);
    return Ot(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
$o.create = (e, t) => new $o({
  type: e,
  typeName: je.ZodPromise,
  ...Re(t)
});
class hn extends Fe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === je.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null, a = {
      addIssue: (s) => {
        ve(r, s), s.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), o.type === "preprocess") {
      const s = o.transform(r.data, a);
      if (r.common.async)
        return Promise.resolve(s).then(async (i) => {
          if (n.value === "aborted")
            return Te;
          const c = await this._def.schema._parseAsync({
            data: i,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? Te : c.status === "dirty" || n.value === "dirty" ? io(c.value) : c;
        });
      {
        if (n.value === "aborted")
          return Te;
        const i = this._def.schema._parseSync({
          data: s,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? Te : i.status === "dirty" || n.value === "dirty" ? io(i.value) : i;
      }
    }
    if (o.type === "refinement") {
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
        return i.status === "aborted" ? Te : (i.status === "dirty" && n.dirty(), s(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? Te : (i.status === "dirty" && n.dirty(), s(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!fa(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => fa(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    He.assertNever(o);
  }
}
hn.create = (e, t, n) => new hn({
  schema: e,
  typeName: je.ZodEffects,
  effect: t,
  ...Re(n)
});
hn.createWithPreprocess = (e, t, n) => new hn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: je.ZodEffects,
  ...Re(n)
});
class Cn extends Fe {
  _parse(t) {
    return this._getType(t) === we.undefined ? Ot(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Cn.create = (e, t) => new Cn({
  innerType: e,
  typeName: je.ZodOptional,
  ...Re(t)
});
class hr extends Fe {
  _parse(t) {
    return this._getType(t) === we.null ? Ot(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
hr.create = (e, t) => new hr({
  innerType: e,
  typeName: je.ZodNullable,
  ...Re(t)
});
class $a extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === we.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
$a.create = (e, t) => new $a({
  innerType: e,
  typeName: je.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Re(t)
});
class _a extends Fe {
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
    return Zs(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Ut(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Ut(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
_a.create = (e, t) => new _a({
  innerType: e,
  typeName: je.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Re(t)
});
class ei extends Fe {
  _parse(t) {
    if (this._getType(t) !== we.nan) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.nan,
        received: r.parsedType
      }), Te;
    }
    return { status: "valid", value: t.data };
  }
}
ei.create = (e) => new ei({
  typeName: je.ZodNaN,
  ...Re(e)
});
const Hj = Symbol("zod_brand");
class Ud extends Fe {
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
class Xa extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? Te : a.status === "dirty" ? (n.dirty(), io(a.value)) : this._def.out._parseAsync({
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
      return o.status === "aborted" ? Te : o.status === "dirty" ? (n.dirty(), {
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
    return new Xa({
      in: t,
      out: n,
      typeName: je.ZodPipeline
    });
  }
}
class Ca extends Fe {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return fa(n) && (n.value = Object.freeze(n.value)), n;
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ca.create = (e, t) => new Ca({
  innerType: e,
  typeName: je.ZodReadonly,
  ...Re(t)
});
function xb(e, t = {}, n) {
  return e ? wo.create().superRefine((r, o) => {
    var a, s;
    if (!e(r)) {
      const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, d = typeof i == "string" ? { message: i } : i;
      o.addIssue({ code: "custom", ...d, fatal: c });
    }
  }) : wo.create();
}
const Uj = {
  object: dt.lazycreate
};
var je;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(je || (je = {}));
const Kj = (e, t = {
  message: `Input not instance of ${e.name}`
}) => xb((n) => n instanceof e, t), yb = on.create, wb = fr.create, Gj = ei.create, Yj = pr.create, $b = pa.create, Zj = Fr.create, qj = Xs.create, Xj = ma.create, Qj = ha.create, Jj = wo.create, e4 = Mr.create, t4 = Gn.create, n4 = Qs.create, r4 = sn.create, o4 = dt.create, a4 = dt.strictCreate, s4 = va.create, i4 = Fi.create, c4 = ga.create, l4 = jn.create, d4 = ba.create, u4 = Js.create, f4 = Vr.create, p4 = po.create, m4 = xa.create, h4 = ya.create, v4 = mr.create, g4 = wa.create, b4 = $o.create, Mf = hn.create, x4 = Cn.create, y4 = hr.create, w4 = hn.createWithPreprocess, $4 = Xa.create, _4 = () => yb().optional(), C4 = () => wb().optional(), S4 = () => $b().optional(), N4 = {
  string: (e) => on.create({ ...e, coerce: !0 }),
  number: (e) => fr.create({ ...e, coerce: !0 }),
  boolean: (e) => pa.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => pr.create({ ...e, coerce: !0 }),
  date: (e) => Fr.create({ ...e, coerce: !0 })
}, E4 = Te;
var ti = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: yo,
  setErrorMap: Ej,
  getErrorMap: Gs,
  makeIssue: Ys,
  EMPTY_PATH: Pj,
  addIssueToContext: ve,
  ParseStatus: Et,
  INVALID: Te,
  DIRTY: io,
  OK: Ot,
  isAborted: sl,
  isDirty: il,
  isValid: fa,
  isAsync: Zs,
  get util() {
    return He;
  },
  get objectUtil() {
    return al;
  },
  ZodParsedType: we,
  getParsedType: ar,
  ZodType: Fe,
  datetimeRegex: gb,
  ZodString: on,
  ZodNumber: fr,
  ZodBigInt: pr,
  ZodBoolean: pa,
  ZodDate: Fr,
  ZodSymbol: Xs,
  ZodUndefined: ma,
  ZodNull: ha,
  ZodAny: wo,
  ZodUnknown: Mr,
  ZodNever: Gn,
  ZodVoid: Qs,
  ZodArray: sn,
  ZodObject: dt,
  ZodUnion: va,
  ZodDiscriminatedUnion: Fi,
  ZodIntersection: ga,
  ZodTuple: jn,
  ZodRecord: ba,
  ZodMap: Js,
  ZodSet: Vr,
  ZodFunction: po,
  ZodLazy: xa,
  ZodLiteral: ya,
  ZodEnum: mr,
  ZodNativeEnum: wa,
  ZodPromise: $o,
  ZodEffects: hn,
  ZodTransformer: hn,
  ZodOptional: Cn,
  ZodNullable: hr,
  ZodDefault: $a,
  ZodCatch: _a,
  ZodNaN: ei,
  BRAND: Hj,
  ZodBranded: Ud,
  ZodPipeline: Xa,
  ZodReadonly: Ca,
  custom: xb,
  Schema: Fe,
  ZodSchema: Fe,
  late: Uj,
  get ZodFirstPartyTypeKind() {
    return je;
  },
  coerce: N4,
  any: Jj,
  array: r4,
  bigint: Yj,
  boolean: $b,
  date: Zj,
  discriminatedUnion: i4,
  effect: Mf,
  enum: v4,
  function: p4,
  instanceof: Kj,
  intersection: c4,
  lazy: m4,
  literal: h4,
  map: u4,
  nan: Gj,
  nativeEnum: g4,
  never: t4,
  null: Qj,
  nullable: y4,
  number: wb,
  object: o4,
  oboolean: S4,
  onumber: C4,
  optional: x4,
  ostring: _4,
  pipeline: $4,
  preprocess: w4,
  promise: b4,
  record: d4,
  set: f4,
  strictObject: a4,
  string: yb,
  symbol: qj,
  transformer: Mf,
  tuple: l4,
  undefined: Xj,
  union: s4,
  unknown: e4,
  void: n4,
  NEVER: E4,
  ZodIssueCode: se,
  quotelessJson: Nj,
  ZodError: Ut
});
const P4 = () => {
  const { showFilters: e, setShowFilters: t } = at(Xn);
  return /* @__PURE__ */ l.jsxs(
    ze,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ l.jsx(nb, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, k4 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = at(Xn), [d, u] = q(null), f = Z(null), p = (m) => {
    c(m);
  };
  return Q(() => {
    const m = f.current;
    if (!m)
      return;
    const h = new ResizeObserver((v) => {
      const g = v[0].contentRect.width;
      u(g);
    });
    return h.observe(m), () => {
      h.unobserve(m), h.disconnect();
    };
  }, []), /* @__PURE__ */ l.jsxs(Hn, { children: [
    /* @__PURE__ */ l.jsx(Un, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
      ze,
      {
        size: "sm",
        type: "button",
        ref: f,
        variant: "outline",
        className: "py-5 border-dashed border-muted-foreground",
        children: [
          n || /* @__PURE__ */ l.jsx(rb, { size: 16, className: "mr-2" }),
          r,
          i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
            /* @__PURE__ */ l.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length >= 1 ? /* @__PURE__ */ l.jsx(
              Tt,
              {
                variant: "secondary",
                className: "rounded-sm px-1 font-normal",
                children: i(e).length === 1 ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                  i(e).length,
                  " seleccionado"
                ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                  i(e).length,
                  " seleccionados"
                ] })
              }
            ) : o.filter((m) => m.selected).map((m) => /* @__PURE__ */ l.jsx(
              Tt,
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
    /* @__PURE__ */ l.jsx("style", { children: `
          .combox-checkbox-content {
            min-width: 150px !important;
            width: ${d + 24}px !important;
          }

          .checkbox-tooltip-content {
            min-width: 150px !important;
            width: ${d + 10}px !important;
          }
        ` }),
    /* @__PURE__ */ l.jsx(Pn, { className: "p-0 combox-checkbox-content", align: "start", children: /* @__PURE__ */ l.jsxs(Kn, { children: [
      /* @__PURE__ */ l.jsx(lr, { placeholder: r }),
      /* @__PURE__ */ l.jsxs(Ro, { children: [
        /* @__PURE__ */ l.jsx(dr, { children: "Sin Resultados" }),
        /* @__PURE__ */ l.jsx(mn, { children: o.map((m) => /* @__PURE__ */ l.jsxs(
          qt,
          {
            onSelect: () => {
              m.selected ? s(e, m.id, !1) : s(e, m.id, !0);
            },
            children: [
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: T(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    m.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ l.jsx(Xt, { className: T("h-4 w-4") })
                }
              ),
              m.icon,
              /* @__PURE__ */ l.jsx("span", { className: "truncate", children: m.label })
            ]
          },
          m.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(la, {}),
          /* @__PURE__ */ l.jsx(mn, { children: /* @__PURE__ */ l.jsx(
            qt,
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
}, j4 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = at(Xn), d = () => {
    var f;
    const u = [];
    (f = Object.entries(t == null ? void 0 : t.getValues())) == null || f.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : Ao(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ l.jsxs(Hn, { children: [
    /* @__PURE__ */ l.jsx(Un, { asChild: !0, children: /* @__PURE__ */ l.jsxs(ze, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ l.jsx(ks, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ l.jsx(
          Tt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: o
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsxs(Pn, { className: "w-fit p-4", align: "start", children: [
      /* @__PURE__ */ l.jsxs(On, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ l.jsx(
          vd,
          {
            id: e,
            form: t,
            type: "text",
            placeholder: `Ingrese ${n}`
          }
        ),
        /* @__PURE__ */ l.jsx(
          ze,
          {
            type: "button",
            onClick: d,
            className: "h-10 w-fit",
            children: /* @__PURE__ */ l.jsx(ks, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, M4 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: d
  } = at(Xn), u = e.watch(n.map((p) => p.id)), f = () => {
    var m;
    a();
    const p = [];
    (m = Object.entries(e == null ? void 0 : e.getValues())) == null || m.forEach((h) => {
      h[1] && p.push({
        field: d ? h[0] : Ao(h[0]),
        text: h[1]
      });
    }), s({ queries: p, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ l.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ l.jsxs("div", { className: "w-full flex flex-col-reverse items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ l.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ l.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((p, m) => /* @__PURE__ */ l.jsx(
          j4,
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
    r != null && r.length ? /* @__PURE__ */ l.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ l.jsx(P4, {}),
      o && r && r.map((p) => /* @__PURE__ */ l.jsx(
        k4,
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
      ).length) ? /* @__PURE__ */ l.jsxs(
        ze,
        {
          type: "button",
          variant: "ghost",
          onClick: f,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ l.jsx(ii, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, T4 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = at(Xn), d = Gm({
    defaultValues: n.reduce((f, p) => (f[p.id] = "", f), {}),
    resolver: fb(
      ti.object(
        n.reduce((f, p) => (f[p.id] = ti.string().optional(), f), {})
      )
    )
  }), u = async (f) => {
    var h;
    console.log({ data: f });
    const p = r(), m = [];
    (h = Object.entries(f)) == null || h.forEach((v) => {
      v[1] && m.push({
        field: c ? v[0] : Ao(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", m), e({ queries: m, filters: p, limit: s, page: a });
  };
  return Q(() => i(d), [d]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ l.jsx("div", {}) : /* @__PURE__ */ l.jsx(Zm, { ...d, children: /* @__PURE__ */ l.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ l.jsx(M4, { form: d, onSubmit: u }) : /* @__PURE__ */ l.jsx("div", {}),
    /* @__PURE__ */ l.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ l.jsx(
      ze,
      {
        type: "submit",
        onClick: d.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ l.jsx($l, {}) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(sb, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, O4 = () => /* @__PURE__ */ l.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), D4 = () => /* @__PURE__ */ l.jsxs(Sd, { children: [
  /* @__PURE__ */ l.jsx(lb, {}),
  /* @__PURE__ */ l.jsx(db, {})
] }), R4 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function t8(e) {
  const [t, n] = q([]), [r, o] = q([]), [a, s] = q([]), [i, c] = q(!1), [d, u] = q(e == null ? void 0 : e.error), [f, p] = q(e == null ? void 0 : e.loading), [m, h] = q(), [v, g] = q(
    (e == null ? void 0 : e.pagination) ?? R4
  ), [b, x] = q(
    (e == null ? void 0 : e.columns) || []
  ), y = ge(
    (D) => e.onSubmitTable({ ...D }),
    [e]
  ), $ = ge(
    (D) => {
      var U;
      g(D);
      const M = m.getValues(), V = [];
      (U = Object.entries(M)) == null || U.forEach((W) => {
        W[1] && V.push({
          field: e.isFormatedUpperQueries ? W[0] : Ao(W[0]),
          text: W[1]
        });
      });
      const R = r.map((W) => ({
        id: W.id,
        label: W.label,
        options: W.options.filter((ne) => ne.selected).map((ne) => ne.value)
      })).filter((W) => W.options.length > 0);
      y({
        filters: R,
        queries: V,
        limit: D.limit,
        page: D.page
      });
    },
    [r, y, m]
  ), C = ge(() => {
    $({ ...v, page: v.page + 1 });
  }, [v, $]), P = ge(() => {
    v.page > 1 && $({ ...v, page: v.page - 1 });
  }, [v, $]), S = () => r.map((D) => ({
    id: D.id,
    label: D.label,
    options: D.options.filter((M) => M.selected).map((M) => M.value)
  })).filter((D) => D.options.length > 0), N = (D) => {
    const M = r.find((V) => V.id === D);
    return M ? M.options.filter((R) => R.selected).map((R) => R.value) : [];
  }, O = (D, M, V) => {
    const R = r.map((U) => U.id === D ? {
      ...U,
      options: U.options.map((W) => W.id === M ? { ...W, selected: V } : W)
    } : U);
    o(R);
  }, F = () => r, G = (D) => {
    const M = r.map((V) => V.id === D ? {
      ...V,
      options: V.options.map((R) => ({
        ...R,
        selected: !1
      }))
    } : V);
    o(M);
  }, A = (D) => $({ ...v, limit: D }), B = () => {
    const D = r.map((M) => ({
      ...M,
      options: M.options.map((V) => ({ ...V, selected: !1 }))
    }));
    o(D);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const D = b.filter((M) => M.isQuery).map((M) => ({
      id: M.id,
      label: M.label
    }));
    s(D);
  }, [b]), Q(() => {
    const D = (V) => (V == null ? void 0 : V.filters) && (V == null ? void 0 : V.filters.length), M = b.filter(D).map((V) => {
      const R = V.filters.map((W) => ({
        ...W,
        selected: !1
      }));
      return {
        ...V,
        id: V.id,
        options: R
      };
    });
    o(M);
  }, [b]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((D) => {
      D != null && D.filters && b.forEach((M) => {
        D.id === M.id && o((V) => V.some((U) => U.id === D.id) ? V : [
          ...V,
          {
            id: M.id,
            label: M.label,
            options: D.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), Q(() => {
    g((D) => {
      var M, V;
      return {
        ...D,
        hasNextPage: (M = e == null ? void 0 : e.pagination) == null ? void 0 : M.hasNextPage,
        hasPrevPage: (V = e == null ? void 0 : e.pagination) == null ? void 0 : V.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ l.jsx(
    Xn.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: C,
        prevPage: P,
        searchForm: m,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: A,
        showFilters: i,
        resetFilters: B,
        getGlobalFilters: F,
        selectOptionFilter: O,
        resetOptionsByFilter: G,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: y,
        getFilterOptionsSelectedById: N,
        getFiltersWithOptionsSelected: S,
        setSelectItem: e.setSelectItem,
        setShowFilters: (D) => c(D),
        setSearchForm: (D) => h(D)
      },
      children: /* @__PURE__ */ l.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ l.jsx(T4, { onSubmitTable: y, loading: f }),
        /* @__PURE__ */ l.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          f && /* @__PURE__ */ l.jsx($j, {}),
          !f && d && /* @__PURE__ */ l.jsx(O4, {}),
          !f && !d && !t && /* @__PURE__ */ l.jsx(D4, {}),
          !f && !d && t && /* @__PURE__ */ l.jsx(yj, {})
        ] }),
        !f && !d && t && /* @__PURE__ */ l.jsx(gj, {})
      ] })
    }
  );
}
const n8 = ({
  id: e,
  label: t,
  defaultValue: n,
  placeholder: r,
  description: o,
  items: a,
  form: s,
  tabIndex: i,
  classNameContainer: c,
  classNameSelect: d,
  classNameGroup: u,
  disabled: f,
  isLoading: p
}) => p ? /* @__PURE__ */ l.jsxs("div", { className: T("w-full", c), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: t && /* @__PURE__ */ l.jsx(Nt, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ l.jsx(Nt, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(Nt, { className: "w-full h-9 mt-2" }) })
] }) : /* @__PURE__ */ l.jsx(
  Ur,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: m, formState: h }) => {
      var v;
      return /* @__PURE__ */ l.jsxs(yr, { className: T("w-full", c), children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ l.jsxs(Kr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((v = h == null ? void 0 : h.errors[e]) == null ? void 0 : v.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            h.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ l.jsx(ko, { className: "text-xs", children: o }),
        /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ l.jsxs(
          yd,
          {
            onValueChange: (g) => g && m.onChange(g),
            defaultValue: m.value,
            disabled: f,
            value: m == null ? void 0 : m.value,
            children: [
              /* @__PURE__ */ l.jsx(Ha, { children: /* @__PURE__ */ l.jsx(Si, { disabled: f, tabIndex: i, className: T("w-full", d), children: /* @__PURE__ */ l.jsx(wd, { placeholder: r }) }) }),
              /* @__PURE__ */ l.jsx(Ni, { children: /* @__PURE__ */ l.jsxs(DS, { className: T("overflow-auto", u), children: [
                a.length ? null : /* @__PURE__ */ l.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
                a.map((g) => {
                  var b, x;
                  return /* @__PURE__ */ l.jsx(Ei, { value: (b = g.value) == null ? void 0 : b.toString(), disabled: g == null ? void 0 : g.disabled, children: /* @__PURE__ */ l.jsxs("div", { className: "flex justify-center items-center", children: [
                    (g == null ? void 0 : g.icon) && /* @__PURE__ */ l.jsx("div", { className: "dark:text-white mr-2 h-5", children: g.icon }),
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
function Vi() {
  return (Vi = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function _b(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function ll(e) {
  var t = Z(e), n = Z(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var Sa = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Xo = function(e) {
  return "touches" in e;
}, dl = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Tf = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = Xo(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: Sa((o.pageX - (r.left + dl(e).pageXOffset)) / r.width), top: Sa((o.pageY - (r.top + dl(e).pageYOffset)) / r.height) };
}, Of = function(e) {
  !Xo(e) && e.preventDefault();
}, Cb = z.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = _b(e, ["onMove", "onKey"]), o = Z(null), a = ll(t), s = ll(n), i = Z(null), c = Z(!1), d = Kt(function() {
    var m = function(g) {
      Of(g), (Xo(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Tf(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, x = dl(o.current), y = g ? x.addEventListener : x.removeEventListener;
      y(b ? "touchmove" : "mousemove", m), y(b ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var b = g.nativeEvent, x = o.current;
      if (x && (Of(b), !function($, C) {
        return C && !Xo($);
      }(b, c.current) && x)) {
        if (Xo(b)) {
          c.current = !0;
          var y = b.changedTouches || [];
          y.length && (i.current = y[0].identifier);
        }
        x.focus(), a(Tf(x, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = d[0], f = d[1], p = d[2];
  return Q(function() {
    return p;
  }, [p]), z.createElement("div", Vi({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: f, tabIndex: 0, role: "slider" }));
}), Kd = function(e) {
  return e.filter(Boolean).join(" ");
}, Sb = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Kd(["react-colorful__pointer", e.className]);
  return z.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, z.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Ct = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, A4 = function(e) {
  return z4(ul(e));
}, ul = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Ct(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Ct(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, I4 = function(e) {
  return V4(F4(e));
}, L4 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: Ct(e.h), s: Ct(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: Ct(o / 2), a: Ct(r, 2) };
}, fl = function(e) {
  var t = L4(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, F4 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), d = a % 6;
  return { r: Ct(255 * [r, i, s, s, c, r][d]), g: Ct(255 * [c, r, r, i, s, s][d]), b: Ct(255 * [s, s, c, r, r, i][d]), a: Ct(o, 2) };
}, ps = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, V4 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? ps(Ct(255 * o)) : "";
  return "#" + ps(t) + ps(n) + ps(r) + a;
}, z4 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: Ct(60 * (i < 0 ? i + 6 : i)), s: Ct(a ? s / a * 100 : 0), v: Ct(a / 255 * 100), a: o };
}, B4 = z.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Kd(["react-colorful__hue", e.className]);
  return z.createElement("div", { className: r }, z.createElement(Cb, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: Sa(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Ct(t), "aria-valuemax": "360", "aria-valuemin": "0" }, z.createElement(Sb, { className: "react-colorful__hue-pointer", left: t / 360, color: fl({ h: t, s: 100, v: 100, a: 1 }) })));
}), W4 = z.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: fl({ h: t.h, s: 100, v: 100, a: 1 }) };
  return z.createElement("div", { className: "react-colorful__saturation", style: r }, z.createElement(Cb, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: Sa(t.s + 100 * o.left, 0, 100), v: Sa(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Ct(t.s) + "%, Brightness " + Ct(t.v) + "%" }, z.createElement(Sb, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: fl(t) })));
}), Nb = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, H4 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Nb(ul(e), ul(t));
};
function U4(e, t, n) {
  var r = ll(n), o = q(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = Z({ color: t, hsva: a });
  Q(function() {
    if (!e.equal(t, i.current.color)) {
      var d = e.toHsva(t);
      i.current = { hsva: d, color: t }, s(d);
    }
  }, [t, e]), Q(function() {
    var d;
    Nb(a, i.current.hsva) || e.equal(d = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: d }, r(d));
  }, [a, e, r]);
  var c = ge(function(d) {
    s(function(u) {
      return Object.assign({}, u, d);
    });
  }, []);
  return [a, c];
}
var K4 = typeof window < "u" ? ka : Q, G4 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Df = /* @__PURE__ */ new Map(), Y4 = function(e) {
  K4(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Df.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Df.set(t, n);
      var r = G4();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, Z4 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = _b(e, ["className", "colorModel", "color", "onChange"]), i = Z(null);
  Y4(i);
  var c = U4(n, o, a), d = c[0], u = c[1], f = Kd(["react-colorful", t]);
  return z.createElement("div", Vi({}, s, { ref: i, className: f }), z.createElement(W4, { hsva: d, onChange: u }), z.createElement(B4, { hue: d.h, onChange: u, className: "react-colorful__last-control" }));
}, q4 = { defaultColor: "000", toHsva: A4, fromHsva: function(e) {
  return I4({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: H4 }, X4 = function(e) {
  return z.createElement(Z4, Vi({}, e, { colorModel: q4 }));
};
const r8 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ l.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ l.jsx(X4, { color: e, onChange: t }),
  /* @__PURE__ */ l.jsx("div", { className: "picker__swatches", children: n.map((r) => /* @__PURE__ */ l.jsx(
    "button",
    {
      className: "picker__swatch",
      style: { background: r },
      onClick: () => t(r)
    },
    r
  )) })
] });
function Q4(e, t, n) {
  var r = q([]), o = r[0], a = r[1], s = Z([]), i = ge(function(f, p) {
    var m = e(f, p), h = m[0], v = m[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), h;
  }, [e]), c = xl(i, n), d = c[0], u = c[1];
  return Q(function() {
    var f = o.pop();
    if (f) {
      var p = t(f, u);
      p && s.current.push(p), a([].concat(o));
    }
  }, [o, t]), Q(function() {
    return function() {
      s.current.forEach(function(f) {
        f();
      });
    };
  }, []), [d, u];
}
function nn() {
  return nn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nn.apply(this, arguments);
}
function J4(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var zi = {
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
  zi[111 + Mt] = "F" + Mt;
for (Mt = 65; Mt < 91; Mt += 1) {
  var Rf = /* @__PURE__ */ String.fromCharCode(Mt);
  zi[Mt] = [/* @__PURE__ */ Rf.toLowerCase(), /* @__PURE__ */ Rf.toUpperCase()];
}
for (Mt = 96; Mt < 106; Mt += 1)
  zi[Mt] = /* @__PURE__ */ String.fromCharCode(Mt - 48);
function e3(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = zi[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var t3 = {
  getKey: e3
};
function ms() {
}
function Eb(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function n3(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var r3 = ["refs"], $c = [], o3 = ["autoFocus", "length", "validate", "format", "formatAriaLabel", "debug"], a3 = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], s3 = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], i3 = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  formatAriaLabel: function(t, n) {
    return "pin code " + t + " of " + n;
  },
  onResolveKey: ms,
  onRejectKey: ms,
  onChange: ms,
  onComplete: ms,
  debug: !1
};
function c3(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: l3(e.validate),
    fallback: null
  };
}
function Pb(e) {
  return Math.max(0, e - 1);
}
function pl(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function l3(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Af(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = pl(o + e.focusIdx - 1, e.codeLength), s = Eb(0, o).flatMap(function(i) {
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
  }), [nn({}, e, {
    focusIdx: a
  }), s];
}
var d3 = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
        case "Process":
          return [nn({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), $c];
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
          var r = Pb(t.focusIdx);
          return [nn({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = pl(t.focusIdx, t.codeLength);
          return [nn({}, t, {
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
          var a = pl(t.focusIdx, t.codeLength);
          return [nn({}, t, {
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
        return [t, $c];
      var s = nn({}, t, {
        fallback: null
      }), i = [], c = t.fallback, d = c.idx, u = c.val, f = n.val;
      if (u === "" && f === "")
        i.push({
          type: "handle-delete",
          idx: d
        }, {
          type: "handle-code-change"
        });
      else if (f !== "")
        return Af(s, d, f);
      return [s, i];
    }
    case "handle-paste":
      return Af(t, n.idx, n.val);
    case "focus-input":
      return [nn({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, $c];
  }
};
function u3(e) {
  var t = e.refs, n = J4(e, r3);
  return ge(function(r) {
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
          var s = Pb(r.idx);
          t.current[s].focus(), t.current[s].setCustomValidity(""), t.current[s].value = "";
        }
        break;
      }
      case "handle-code-change": {
        var i = (n.dir || document.documentElement.getAttribute("dir") || "ltr").toLowerCase(), c = t.current.map(function(u) {
          return u.value.trim();
        }), d = (i === "rtl" ? c.reverse() : c).join("");
        n.onChange(d), d.length === n.length && n.onComplete(d);
        break;
      }
    }
  }, [n, t]);
}
var f3 = /* @__PURE__ */ I(function(e, t) {
  var n = nn({}, i3, e), r = n.autoFocus, o = n.formatAriaLabel, a = n.length, s = n3([].concat(o3, a3), n), i = Z([]), c = u3(nn({
    refs: i
  }, n)), d = Q4(d3, c, c3(n))[1];
  u0(t, function() {
    return i.current;
  }, [i]);
  function u(g) {
    return function() {
      d({
        type: "focus-input",
        idx: g
      });
    };
  }
  function f(g) {
    return function(b) {
      var x = t3.getKey(b.nativeEvent);
      !s3.includes(x) && !b.ctrlKey && !b.altKey && !b.metaKey && b.nativeEvent.target instanceof HTMLInputElement && (b.preventDefault(), d({
        type: "handle-key-down",
        idx: g,
        key: x,
        val: b.nativeEvent.target.value
      }));
    };
  }
  function p(g) {
    return function(b) {
      b.nativeEvent.target instanceof HTMLInputElement && d({
        type: "handle-key-up",
        idx: g,
        val: b.nativeEvent.target.value
      });
    };
  }
  function m(g) {
    return function(b) {
      b.preventDefault();
      var x = b.clipboardData.getData("Text");
      d({
        type: "handle-paste",
        idx: g,
        val: x
      });
    };
  }
  function h(g) {
    return function(b) {
      b && (i.current[g] = b);
    };
  }
  function v(g) {
    return !!(g === 0 && r);
  }
  return z.createElement(z.Fragment, null, Eb(0, a).map(function(g) {
    return z.createElement("input", Object.assign({
      type: "text",
      autoCapitalize: "off",
      autoCorrect: "off",
      autoComplete: "off",
      inputMode: "text"
    }, s, {
      "aria-disabled": s.disabled ? "true" : void 0,
      "aria-label": o(g + 1, a),
      "aria-readonly": s.readOnly ? "true" : void 0,
      "aria-required": "true",
      key: g,
      ref: h(g),
      autoFocus: v(g),
      onFocus: u(g),
      onKeyDown: f(g),
      onKeyUp: p(g),
      onPaste: m(g)
    }));
  }));
});
const o8 = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [d] = z.useState(!1);
  return /* @__PURE__ */ l.jsx("div", { className: T("pin-field-container", s), children: /* @__PURE__ */ l.jsx(
    f3,
    {
      className: T("pin-field", { complete: d }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var kb = {}, Gd = {};
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
        var d;
        return d = {}, d[n] = i, d.file = t[c], d;
      });
      return s;
    });
  };
})(Gd);
var jb = {}, zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.DEFAULT_DATA_URL_KEY = zn.INIT_MAX_NUMBER = zn.DEFAULT_NULL_INDEX = void 0;
zn.DEFAULT_NULL_INDEX = -1;
zn.INIT_MAX_NUMBER = 1e3;
zn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = wt && wt.__awaiter || function(a, s, i, c) {
    function d(u) {
      return u instanceof i ? u : new i(function(f) {
        f(u);
      });
    }
    return new (i || (i = Promise))(function(u, f) {
      function p(v) {
        try {
          h(c.next(v));
        } catch (g) {
          f(g);
        }
      }
      function m(v) {
        try {
          h(c.throw(v));
        } catch (g) {
          f(g);
        }
      }
      function h(v) {
        v.done ? u(v.value) : d(v.value).then(p, m);
      }
      h((c = c.apply(a, s || [])).next());
    });
  }, n = wt && wt.__generator || function(a, s) {
    var i = { label: 0, sent: function() {
      if (u[0] & 1)
        throw u[1];
      return u[1];
    }, trys: [], ops: [] }, c, d, u, f;
    return f = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
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
          if (c = 1, d && (u = h[0] & 2 ? d.return : h[0] ? d.throw || ((u = d.return) && u.call(d), 0) : d.next) && !(u = u.call(d, h[1])).done)
            return u;
          switch (d = 0, u && (h = [h[0] & 2, u.value]), h[0]) {
            case 0:
            case 1:
              u = h;
              break;
            case 4:
              return i.label++, { value: h[1], done: !1 };
            case 5:
              i.label++, d = h[1], h = [0];
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
          h = [6, v], d = 0;
        } finally {
          c = u = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getErrorValidation = e.isMaxNumberValid = e.isAcceptTypeValid = e.isMaxFileSizeValid = e.isImageValid = e.isResolutionValid = void 0;
  var r = zn, o = Gd;
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
        var d = i / c;
        if (a.width / a.height === d)
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
    var s = a.fileList, i = a.value, c = a.maxNumber, d = a.keyUpdate, u = a.acceptType, f = a.maxFileSize, p = a.resolutionType, m = a.resolutionWidth, h = a.resolutionHeight, v = a.allowNonImageType;
    return t(void 0, void 0, void 0, function() {
      var g, b, x, y, $;
      return n(this, function(C) {
        switch (C.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, d) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, C.label = 2;
          case 2:
            return b < s.length ? (x = s[b].file, x ? !v && !e.isImageValid(x.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, x.name) ? e.isMaxFileSizeValid(x.size, f) ? p ? [4, o.getImage(x)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (y = C.sent(), $ = e.isResolutionValid(y, p, m, h), !$)
              return g.resolution = !0, [3, 5];
            C.label = 4;
          case 4:
            return b += 1, [3, 2];
          case 5:
            return Object.values(g).find(Boolean) ? [2, g] : [2, null];
        }
      });
    });
  };
})(jb);
var ml = wt && wt.__assign || function() {
  return ml = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ml.apply(this, arguments);
}, p3 = wt && wt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), m3 = wt && wt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), h3 = wt && wt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && p3(t, e, n);
  return m3(t, e), t;
}, _c = wt && wt.__awaiter || function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(u) {
      try {
        d(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        d(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function d(u) {
      u.done ? a(u.value) : o(u.value).then(i, c);
    }
    d((r = r.apply(e, t || [])).next());
  });
}, Cc = wt && wt.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, s;
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(d) {
    return function(u) {
      return c([d, u]);
    };
  }
  function c(d) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, o && (a = d[0] & 2 ? o.return : d[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, d[1])).done)
          return a;
        switch (o = 0, a && (d = [d[0] & 2, a.value]), d[0]) {
          case 0:
          case 1:
            a = d;
            break;
          case 4:
            return n.label++, { value: d[1], done: !1 };
          case 5:
            n.label++, o = d[1], d = [0];
            continue;
          case 7:
            d = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (d[0] === 6 || d[0] === 2)) {
              n = 0;
              continue;
            }
            if (d[0] === 3 && (!a || d[1] > a[0] && d[1] < a[3])) {
              n.label = d[1];
              break;
            }
            if (d[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = d;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(d);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        d = t.call(e, n);
      } catch (u) {
        d = [6, u], o = 0;
      } finally {
        r = a = 0;
      }
    if (d[0] & 5)
      throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}, Sc = wt && wt.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(kb, "__esModule", { value: !0 });
var en = h3(z), Nc = Gd, v3 = jb, nr = zn, g3 = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? nr.DEFAULT_DATA_URL_KEY : s, c = e.multiple, d = c === void 0 ? !1 : c, u = e.maxNumber, f = u === void 0 ? nr.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, x = b === void 0 ? {} : b, y = e.allowNonImageType, $ = y === void 0 ? !1 : y, C = n || [], P = en.useRef(null), S = en.useState(nr.DEFAULT_NULL_INDEX), N = S[0], O = S[1], F = en.useState(null), G = F[0], A = F[1], B = en.useState(!1), D = B[0], M = B[1], V = en.useCallback(function() {
    return Nc.openFileDialog(P);
  }, [
    P
  ]), R = en.useCallback(function() {
    O(nr.DEFAULT_NULL_INDEX), V();
  }, [V]), U = en.useCallback(function() {
    r == null || r([]);
  }, [r]), W = function(ae) {
    var de = Sc(C);
    Array.isArray(ae) ? ae.forEach(function(H) {
      de.splice(H, 1);
    }) : de.splice(ae, 1), r == null || r(de);
  }, ne = function(ae) {
    O(ae), V();
  }, me = function(ae) {
    return _c(void 0, void 0, void 0, function() {
      var de;
      return Cc(this, function(H) {
        switch (H.label) {
          case 0:
            return [4, v3.getErrorValidation({
              fileList: ae,
              maxFileSize: m,
              maxNumber: f,
              acceptType: p,
              keyUpdate: N,
              resolutionType: g,
              resolutionWidth: h,
              resolutionHeight: v,
              value: C,
              allowNonImageType: $
            })];
          case 1:
            return de = H.sent(), de ? (A(de), o == null || o(de, ae), [2, !1]) : (G && A(null), [2, !0]);
        }
      });
    });
  }, Y = function(ae) {
    return _c(void 0, void 0, void 0, function() {
      var de, H, te, $e, Pe, Ie;
      return Cc(this, function(ke) {
        switch (ke.label) {
          case 0:
            return ae ? [4, Nc.getListFiles(ae, i)] : [
              2
              /*return*/
            ];
          case 1:
            return de = ke.sent(), de.length ? [4, me(de)] : [
              2
              /*return*/
            ];
          case 2:
            if (H = ke.sent(), !H)
              return [
                2
                /*return*/
              ];
            if ($e = [], N > nr.DEFAULT_NULL_INDEX)
              Pe = de[0], te = Sc(C), te[N] = Pe, $e.push(N);
            else if (d)
              for (te = Sc(C, de), Ie = C.length; Ie < te.length; Ie += 1)
                $e.push(Ie);
            else
              te = [de[0]], $e.push(0);
            return r == null || r(te, $e), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ue = function(ae) {
    return _c(void 0, void 0, void 0, function() {
      return Cc(this, function(de) {
        switch (de.label) {
          case 0:
            return [4, Y(ae.target.files)];
          case 1:
            return de.sent(), N > nr.DEFAULT_NULL_INDEX && O(nr.DEFAULT_NULL_INDEX), P.current && (P.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ye = en.useMemo(function() {
    return Nc.getAcceptTypeString(p, $);
  }, [p, $]), fe = function(ae) {
    ae.preventDefault(), ae.stopPropagation();
  }, J = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.items && ae.dataTransfer.items.length > 0 && M(!0);
  }, re = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), M(!1);
  }, he = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), M(!1), ae.dataTransfer.files && ae.dataTransfer.files.length > 0 && Y(ae.dataTransfer.files);
  }, Ne = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.clearData();
  };
  return en.default.createElement(
    en.default.Fragment,
    null,
    en.default.createElement("input", ml({ type: "file", accept: ye, ref: P, multiple: d && N === nr.DEFAULT_NULL_INDEX, onChange: ue, style: { display: "none" } }, x)),
    a == null ? void 0 : a({
      imageList: C,
      onImageUpload: R,
      onImageRemoveAll: U,
      onImageUpdate: ne,
      onImageRemove: W,
      errors: G,
      dragProps: {
        onDrop: he,
        onDragEnter: J,
        onDragLeave: re,
        onDragOver: fe,
        onDragStart: Ne
      },
      isDragging: D
    })
  );
}, Mb = kb.default = g3;
const b3 = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Tb = ({
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
    async (d) => {
      const u = b3(d == null ? void 0 : d.toString(), t.name);
      c({ data_url: d, file: u });
    },
    i
  );
});
function ni(e, t) {
  fetch(e).then((n) => n.blob()).then((n) => {
    const r = window.URL.createObjectURL(new Blob([n])), o = document.createElement("a");
    o.href = r, o.setAttribute("download", t || "imagen.jpg"), document.body.appendChild(o), o.click();
  });
}
const x3 = (e) => {
  const { imageIndex: t, compress: n, disabled: r, tabIndexs: o, onImageUpdate: a, setUploadImage: s, onImageRemove: i, setLocalImage: c, download: d, handleOnRemove: u, edit: f, src: p } = e;
  return /* @__PURE__ */ l.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !r && /* @__PURE__ */ l.jsx(
      ze,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(ab, { size: 16 })
      }
    ),
    !r && f && /* @__PURE__ */ l.jsx(
      ze,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.change,
        onClick: () => a(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(cp, { size: 16 })
      }
    ),
    !r && /* @__PURE__ */ l.jsx(
      ze,
      {
        tabIndex: o == null ? void 0 : o.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          u(t), i(t), c([]), s({ original: null, compressed: null });
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(lp, { size: 16 })
      }
    ),
    d && p && /* @__PURE__ */ l.jsx(
      ze,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => ni(p, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ps, { size: 16 })
      }
    )
  ] });
}, y3 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    ...e,
    className: T(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ l.jsx(
        ze,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: T("mt-2", t && "text-indigo-600", a && "cursor-not-allowed"),
          onClick: s,
          children: /* @__PURE__ */ l.jsx(_l, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ l.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), Ob = ({ src: e, containerClassName: t, imageClassName: n, zoom: r, fallback: o, download: a, filename: s }) => {
  const [i, c] = q(!1);
  return r ? /* @__PURE__ */ l.jsxs("div", { className: "w-full h-fit relative", children: [
    a && /* @__PURE__ */ l.jsx(
      ze,
      {
        type: "button",
        onClick: () => ni(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ps, { size: 18 })
      }
    ),
    /* @__PURE__ */ l.jsxs(ah, { open: i, onOpenChange: c, children: [
      /* @__PURE__ */ l.jsxs(co, { className: T("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
        /* @__PURE__ */ l.jsx(
          kr,
          {
            src: e,
            className: T("aspect-video w-auto rounded-md object-contain m-auto h-full cursor-zoom-in", n),
            onClick: () => c(!0)
          }
        ),
        /* @__PURE__ */ l.jsx(lo, { className: T("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ l.jsx(Gi, {}) })
      ] }),
      /* @__PURE__ */ l.jsx(hd, { className: "p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none", style: { background: "transparent !important" }, onClick: () => c(!1), children: /* @__PURE__ */ l.jsxs(co, { className: T("w-full h-full rounded-md"), children: [
        /* @__PURE__ */ l.jsx(kr, { src: e, className: T("aspect-video rounded-md object-contain m-auto h-full"), style: { width: "-webkit-fill-available" } }),
        /* @__PURE__ */ l.jsx(lo, { className: T("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ l.jsx(Gi, {}) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ l.jsx("div", { className: "w-full", children: /* @__PURE__ */ l.jsxs(co, { className: T("relative w-full h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
    a && /* @__PURE__ */ l.jsx(
      ze,
      {
        type: "button",
        onClick: () => ni(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ps, { size: 18 })
      }
    ),
    /* @__PURE__ */ l.jsx(kr, { src: e, className: T("aspect-video w-auto rounded-md object-contain m-auto h-full", n), style: { width: "-webkit-fill-available" } }),
    /* @__PURE__ */ l.jsx(lo, { className: T("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ l.jsx(Gi, {}) })
  ] }) });
}, a8 = (e) => {
  const { edit: t = !0, initialPreview: n = null, setUploadImage: r, format: o, label: a, uploadLabel: s, tabIndexs: i, disabled: c, emptyClassName: d, imageContainerClassName: u, zoom: f, compress: p, download: m, onRemove: h, onEdit: v } = e, [g, b] = q(n ? [{ data_url: n, file: null }] : []), x = async ($, C) => {
    var O, F, G, A, B, D, M, V, R, U;
    const P = (O = $[0]) == null ? void 0 : O.file, S = (F = $[0]) == null ? void 0 : F.data_url;
    P || (b([]), r({ original: null, compressed: null })), b($);
    const N = Es((G = $[0]) == null ? void 0 : G.file.size);
    if (p != null && p.resizer && P) {
      const { data_url: W, file: ne } = await Tb({
        resizer: p == null ? void 0 : p.resizer,
        imageFile: P,
        quality: (o == null ? void 0 : o.quality) || 10,
        maxWidth: (o == null ? void 0 : o.width) || 500,
        maxHeight: (o == null ? void 0 : o.width) || 500,
        compressFormat: (o == null ? void 0 : o.extension) || "png",
        rotation: (o == null ? void 0 : o.rotation) || 0
      }), me = Es(ne.size);
      r({
        original: {
          preview: S,
          file: P,
          size: {
            formated: N,
            bytes: (A = $[0]) == null ? void 0 : A.file.size
          }
        },
        compressed: {
          preview: W == null ? void 0 : W.toString(),
          file: ne,
          size: {
            formated: me,
            bytes: ne.size
          }
        }
      });
      return;
    }
    v && (B = $[0]) != null && B.data_url && v({
      data_url: ((D = $[0]) == null ? void 0 : D.data_url) || null,
      file: ((M = $[0]) == null ? void 0 : M.file) || null
    }), r({
      original: {
        preview: (V = $[0]) == null ? void 0 : V.data_url,
        file: (R = $[0]) == null ? void 0 : R.file,
        size: { formated: N, bytes: (U = $[0]) == null ? void 0 : U.file.size }
      },
      compressed: null
    });
  }, y = ($) => {
    $ == null || !g || !g.length || h && h(g[$]);
  };
  return Q(() => {
    n && b([{ data_url: n, file: null }]);
  }, [n]), /* @__PURE__ */ l.jsxs("div", { className: "w-full h-full", children: [
    a && /* @__PURE__ */ l.jsx(On, { children: a }),
    a && /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ l.jsx(
      Mb,
      {
        value: g,
        onChange: x,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: $, onImageUpload: C, onImageUpdate: P, onImageRemove: S, isDragging: N, dragProps: O }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: $.length >= 1 ? /* @__PURE__ */ l.jsx("div", { children: $.map((F, G) => /* @__PURE__ */ l.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          /* @__PURE__ */ l.jsx(
            Ob,
            {
              zoom: f,
              src: F == null ? void 0 : F.data_url,
              containerClassName: u
            }
          ),
          /* @__PURE__ */ l.jsx(
            x3,
            {
              edit: t,
              imageIndex: G,
              compress: p,
              disabled: c,
              download: m,
              tabIndexs: i,
              src: F == null ? void 0 : F.data_url,
              onImageRemove: S,
              onImageUpdate: P,
              setLocalImage: b,
              setUploadImage: r,
              handleOnRemove: y
            }
          )
        ] }, G)) }) : /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx(
          y3,
          {
            dragProps: O,
            emptyClassName: d,
            isDragging: N,
            onImageUpload: C,
            tabIndexs: i,
            uploadLabel: s,
            disabled: c
          }
        ) }) })
      }
    )
  ] });
}, w3 = (e) => {
  const { imageIndex: t, compress: n, tabIndexs: r, onImageUpdate: o, onImageRemove: a, disabled: s, download: i, handleOnRemoveImage: c, src: d, edit: u } = e;
  return /* @__PURE__ */ l.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !s && /* @__PURE__ */ l.jsx(
      ze,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(ab, { size: 16 })
      }
    ),
    !s && u && /* @__PURE__ */ l.jsx(
      ze,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.change,
        onClick: () => o(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(cp, { size: 16 })
      }
    ),
    !s && /* @__PURE__ */ l.jsx(
      ze,
      {
        tabIndex: r == null ? void 0 : r.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          c(t), a(t);
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(lp, { size: 16 })
      }
    ),
    i && d && /* @__PURE__ */ l.jsx(
      ze,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => ni(d, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ps, { size: 16 })
      }
    )
  ] });
}, $3 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    ...e,
    className: T(
      `${t ? "border-indigo-600" : "border-muted-foreground"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ l.jsx(
        ze,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: s,
          children: /* @__PURE__ */ l.jsx(_l, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ l.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), s8 = (e) => {
  const { edit: t = !0, label: n, setUploadImages: r, format: o, uploadLabel: a, tabIndexs: s, emptyClassName: i, imageContainerClassName: c, zoom: d, compress: u, limit: f, initialPreview: p, disabled: m, download: h, onRemove: v, onEdit: g } = e, [b, x] = q([]);
  Q(() => {
    p && p.length && x([...p]);
  }, [p]);
  const y = async (C, P) => {
    x(C);
    const S = C.map(async (N) => {
      var O, F, G, A;
      if (u != null && u.resizer && (N != null && N.file) && !((O = N == null ? void 0 : N.file) != null && O.compressed)) {
        const { data_url: B, file: D } = await Tb({
          imageFile: N == null ? void 0 : N.file,
          resizer: u == null ? void 0 : u.resizer,
          quality: (o == null ? void 0 : o.quality) || 10,
          maxWidth: (o == null ? void 0 : o.width) || 500,
          maxHeight: (o == null ? void 0 : o.width) || 500,
          rotation: (o == null ? void 0 : o.rotation) || 0,
          compressFormat: (o == null ? void 0 : o.extension) || "png"
        }), M = Es(D == null ? void 0 : D.size), V = {
          original: {
            preview: N == null ? void 0 : N.data_url,
            file: N == null ? void 0 : N.file,
            size: {
              formated: (F = N == null ? void 0 : N.file) != null && F.size ? Es((G = N == null ? void 0 : N.file) == null ? void 0 : G.size) : null,
              bytes: ((A = N == null ? void 0 : N.file) == null ? void 0 : A.size) || null
            }
          },
          compressed: {
            preview: B == null ? void 0 : B.toString(),
            file: D,
            size: {
              formated: M,
              bytes: D == null ? void 0 : D.size
            }
          }
        };
        return {
          ...N,
          file: V,
          data_url: N == null ? void 0 : N.data_url
        };
      } else
        return {
          ...N,
          file: (N == null ? void 0 : N.file) || null
        };
    });
    if (g && P) {
      const N = C[P[0]];
      N != null && N.data_url && g({
        data_url: (N == null ? void 0 : N.data_url) || null,
        file: (N == null ? void 0 : N.file) || null
      });
    }
    Promise.all(S).then((N) => {
      r(N);
    });
  }, $ = (C) => {
    C == null || !b || !b.length || v && v(b[C]);
  };
  return /* @__PURE__ */ l.jsxs("div", { children: [
    n && /* @__PURE__ */ l.jsx(On, { children: n }),
    /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ l.jsx(
      Mb,
      {
        multiple: !0,
        value: b,
        dataURLKey: "data_url",
        onChange: y,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: f,
        children: ({ imageList: C, onImageUpload: P, onImageUpdate: S, onImageRemove: N, isDragging: O, dragProps: F }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: C.length >= 1 ? /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: `grid ${f === 1 || !f ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              C.map((G, A) => /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    /* @__PURE__ */ l.jsx(
                      Ob,
                      {
                        zoom: d,
                        src: G == null ? void 0 : G.data_url,
                        containerClassName: c
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      w3,
                      {
                        edit: t,
                        imageIndex: A,
                        download: h,
                        compress: u,
                        disabled: m,
                        tabIndexs: s,
                        src: G == null ? void 0 : G.data_url,
                        onImageRemove: N,
                        onImageUpdate: S,
                        handleOnRemoveImage: $
                      }
                    )
                  ]
                },
                A
              )),
              b.length < f && /* @__PURE__ */ l.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  ...F,
                  className: T(
                    `w-full h-[237px] ${O ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    c
                  ),
                  children: /* @__PURE__ */ l.jsx(
                    ze,
                    {
                      size: "icon",
                      type: "button",
                      variant: "outline",
                      tabIndex: s == null ? void 0 : s.upload,
                      disabled: m,
                      className: `mt-2 ${O && "text-indigo-600"}`,
                      onClick: P,
                      children: /* @__PURE__ */ l.jsx(_l, { size: 24 })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ l.jsx(
          $3,
          {
            dragProps: F,
            emptyClassName: i,
            isDragging: O,
            onImageUpload: P,
            tabIndexs: s,
            uploadLabel: a,
            disabled: m
          }
        ) })
      }
    )
  ] });
};
function i8({
  id: e,
  form: t,
  label: n,
  items: r,
  disabled: o,
  tabIndex: a,
  isLoading: s,
  placeholder: i,
  defaultValue: c,
  notFoundLabel: d,
  classNameGroup: u,
  ctaPlaceholder: f,
  buttonClassName: p,
  popoverClassName: m
}) {
  const [h, v] = q(!1);
  return s ? /* @__PURE__ */ l.jsxs("div", { className: T("w-full"), children: [
    /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ l.jsx(Nt, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(
      Nt,
      {
        className: T("w-full h-9 mt-2")
      }
    ) })
  ] }) : /* @__PURE__ */ l.jsx(
    Ur,
    {
      control: t.control,
      name: e,
      defaultValue: c,
      render: ({ field: g }) => {
        var b;
        return /* @__PURE__ */ l.jsxs(yr, { className: "flex flex-col", children: [
          /* @__PURE__ */ l.jsx(On, { children: n }),
          /* @__PURE__ */ l.jsxs(Hn, { open: h, onOpenChange: v, children: [
            /* @__PURE__ */ l.jsx(Un, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
              ze,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: T("w-min justify-between", !g.value && "text-muted-foreground", `${p}`),
                children: [
                  g.value ? (b = r.find((x) => {
                    var y, $;
                    return ((y = x == null ? void 0 : x.value) == null ? void 0 : y.toUpperCase()) === (($ = g == null ? void 0 : g.value) == null ? void 0 : $.toUpperCase());
                  })) == null ? void 0 : b.label : f,
                  /* @__PURE__ */ l.jsx(Oc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ l.jsx(Pn, { className: T("w-[200px] p-0", m), children: /* @__PURE__ */ l.jsxs(Kn, { children: [
              /* @__PURE__ */ l.jsx(lr, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ l.jsxs(Ro, { children: [
                /* @__PURE__ */ l.jsx(dr, { children: d }),
                /* @__PURE__ */ l.jsx(mn, { className: T("overflow-auto", u), children: r.map((x) => /* @__PURE__ */ l.jsxs(
                  qt,
                  {
                    disabled: x == null ? void 0 : x.disabled,
                    value: x.value,
                    className: T("w-full flex justify-start items-center", (x == null ? void 0 : x.disabled) && "pointer-events-none opacity-50 cursor-default"),
                    onSelect: (y) => {
                      t.setValue(e, y, { shouldDirty: !0 }), v(!1);
                    },
                    children: [
                      (x == null ? void 0 : x.image) && /* @__PURE__ */ l.jsx("img", { src: x.image, alt: x.label, width: 40, className: "mr-2" }),
                      (x == null ? void 0 : x.icon) && x.icon,
                      x.label,
                      /* @__PURE__ */ l.jsx(
                        cj,
                        {
                          className: T(
                            "ml-auto h-4 w-4",
                            x.value === g.value ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  x.value
                )) })
              ] })
            ] }) })
          ] })
        ] });
      }
    }
  );
}
function _3({
  id: e,
  form: t,
  label: n,
  items: r,
  rules: o,
  value: a,
  disabled: s,
  setValue: i,
  tabIndex: c,
  placeholder: d,
  defaultValue: u,
  notFoundLabel: f,
  ctaPlaceholder: p,
  buttonClassName: m,
  popoverClassName: h
}) {
  var b;
  const [v, g] = q(!1);
  return t ? /* @__PURE__ */ l.jsx(
    Ur,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: x, formState: y }) => {
        var $, C, P;
        return /* @__PURE__ */ l.jsxs(yr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ l.jsxs(Kr, { className: "flex", children: [
            n,
            " ",
            ((C = ($ = y.errors) == null ? void 0 : $.pidType) == null ? void 0 : C.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              y.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs(Hn, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ l.jsx(Un, { asChild: !0, disabled: s, children: /* @__PURE__ */ l.jsxs(
              ze,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: T("w-min justify-between", !x.value && "text-muted-foreground", `${m}`),
                children: [
                  x.value ? (P = r.find((S) => S.value === x.value)) == null ? void 0 : P.label : p,
                  /* @__PURE__ */ l.jsx(Oc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ l.jsx(Pn, { className: T("w-[200px] p-0", h), children: /* @__PURE__ */ l.jsxs(Kn, { children: [
              /* @__PURE__ */ l.jsx(lr, { placeholder: d, className: "h-9" }),
              /* @__PURE__ */ l.jsxs(Qh, { children: [
                /* @__PURE__ */ l.jsx(dr, { children: f }),
                /* @__PURE__ */ l.jsx(mn, { children: r.map((S) => /* @__PURE__ */ l.jsxs(
                  qt,
                  {
                    value: S.value,
                    onSelect: (N) => {
                      t.setValue(e, N), g(!1);
                    },
                    className: "w-full flex justify-start items-center",
                    children: [
                      (S == null ? void 0 : S.image) && /* @__PURE__ */ l.jsx("img", { src: S.image, alt: S.label, width: 40, className: "mr-2" }),
                      (S == null ? void 0 : S.icon) && S.icon,
                      S.label,
                      /* @__PURE__ */ l.jsx(
                        Xt,
                        {
                          className: T(
                            "ml-auto h-4 w-4",
                            S.value === x.value ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  S.value
                )) })
              ] })
            ] }) })
          ] })
        ] });
      }
    }
  ) : /* @__PURE__ */ l.jsxs(Hn, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ l.jsx(Un, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
      ze,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((x) => x.value === a)) == null ? void 0 : b.label : p,
          /* @__PURE__ */ l.jsx(Oc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsx(Pn, { className: "w-full p-0", children: /* @__PURE__ */ l.jsxs(Kn, { children: [
      /* @__PURE__ */ l.jsx(lr, { placeholder: d, className: "h-9" }),
      /* @__PURE__ */ l.jsx(dr, { children: f }),
      /* @__PURE__ */ l.jsx(mn, { children: r.map((x) => /* @__PURE__ */ l.jsxs(
        qt,
        {
          onSelect: (y) => {
            i(y === a ? "" : y), g(!1);
          },
          children: [
            x.label,
            /* @__PURE__ */ l.jsx(
              Xt,
              {
                className: T(
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
const C3 = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i, disabled: c }) => {
  const d = Z(null), [u, f] = q(null);
  return Q(() => {
    const p = d.current;
    if (!p)
      return;
    const m = new ResizeObserver((h) => {
      const v = h[0].contentRect.width;
      f(v);
    });
    return m.observe(p), () => {
      m.unobserve(p), m.disconnect();
    };
  }, []), /* @__PURE__ */ l.jsxs("div", { className: T("w-full space-y-2", s), children: [
    /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ l.jsxs(On, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ l.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ l.jsxs(Hn, { children: [
      /* @__PURE__ */ l.jsx(Un, { asChild: !0, disabled: c, children: /* @__PURE__ */ l.jsxs(
        ze,
        {
          ref: d,
          type: "button",
          variant: "outline",
          disabled: c,
          size: "sm",
          className: "py-5 border w-full justify-start",
          tabIndex: o,
          children: [
            t && t,
            !a.length && /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground font-normal", children: n || "Seleccione alguna opción" }),
            a.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
              /* @__PURE__ */ l.jsxs(
                Tt,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal lg:hidden",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ),
              /* @__PURE__ */ l.jsx("div", { className: "hidden space-x-1 lg:flex", children: a.length > 2 ? /* @__PURE__ */ l.jsxs(
                Tt,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((p) => /* @__PURE__ */ l.jsx(
                Tt,
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
      /* @__PURE__ */ l.jsx(Pn, { style: { width: u + 24 }, className: T("w-full p-0", i), align: "start", children: /* @__PURE__ */ l.jsxs(Kn, { children: [
        /* @__PURE__ */ l.jsx(lr, { placeholder: r }),
        /* @__PURE__ */ l.jsxs(Ro, { children: [
          /* @__PURE__ */ l.jsx(dr, { children: "Sin Resultados" }),
          /* @__PURE__ */ l.jsx(mn, { children: a.map((p) => /* @__PURE__ */ l.jsxs(
            qt,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: T(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ l.jsx(Xt, { className: T("h-4 w-4") })
                  }
                ),
                /* @__PURE__ */ l.jsx("span", { children: p.label })
              ]
            },
            p.id
          )) })
        ] })
      ] }) })
    ] })
  ] });
}, S3 = (e) => {
  var G;
  const { form: t, id: n, description: r, icon: o, placeholder: a, label: s, tabIndex: i, selectAllLabel: c, items: d, classNameContainer: u, classNamePopover: f, disabled: p } = e, [m, h] = q([]), [v, g] = q(!1), [b, x] = q(null), y = Z(null), $ = (G = t == null ? void 0 : t.formState) == null ? void 0 : G.defaultValues[n], C = (A) => ({
    ...A,
    selected: $ ? $.includes(A.value) : !1
  }), P = Kt(() => d.map(C), [$]), S = Kt(() => m.filter((B) => B.selected).map((B) => B.value), [m]), N = () => {
    h((A) => {
      const B = A.map((D) => ({ ...D, selected: !1 }));
      return t.setValue(n, [], { shouldDirty: !0 }), B;
    });
  }, O = (A, B) => {
    const D = m.map((M) => M.id === A ? { ...M, selected: B } : M);
    h(D), t.setValue(
      n,
      D.filter((M) => M.selected).map((M) => M.value),
      { shouldDirty: !0 }
    );
  }, F = () => {
    if (v)
      return N(), g(!1);
    g(!0);
    const A = m.map((B) => ({ ...B, selected: !0 }));
    h(A), t.setValue(
      n,
      A.filter((B) => B.selected).map((B) => B.value),
      { shouldDirty: !0 }
    );
  };
  return Q(() => {
    const A = y.current;
    if (!A)
      return;
    const B = new ResizeObserver((D) => {
      const M = D[0].contentRect.width;
      x(M);
    });
    return B.observe(A), () => {
      B.unobserve(A), B.disconnect();
    };
  }, []), Q(() => {
    h(P);
  }, [P]), /* @__PURE__ */ l.jsx(
    Ur,
    {
      control: t.control,
      name: n,
      render: ({ field: A, formState: B }) => {
        var D;
        return /* @__PURE__ */ l.jsxs(yr, { className: T("w-full space-y-2", u), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
            s && /* @__PURE__ */ l.jsxs(Kr, { className: "flex", children: [
              s,
              " "
            ] }),
            ((D = B == null ? void 0 : B.errors[n]) == null ? void 0 : D.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              B.errors[n].message
            ] })
          ] }),
          r && /* @__PURE__ */ l.jsx(ko, { className: "text-xs", children: r }),
          /* @__PURE__ */ l.jsxs(Hn, { children: [
            /* @__PURE__ */ l.jsx(Un, { asChild: !0, disabled: p, children: /* @__PURE__ */ l.jsxs(
              ze,
              {
                ref: y,
                type: "button",
                variant: "outline",
                size: "sm",
                disabled: p,
                className: "py-5 border w-full justify-start",
                tabIndex: i,
                children: [
                  o && o,
                  !S.length && /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground font-normal", children: a || "Seleccione alguna opción" }),
                  S.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                    /* @__PURE__ */ l.jsxs(
                      Tt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal lg:hidden",
                        children: [
                          S.length,
                          " seleccionados"
                        ]
                      }
                    ),
                    /* @__PURE__ */ l.jsx("div", { className: "hidden space-x-1 lg:flex", children: S.length > 2 ? /* @__PURE__ */ l.jsxs(
                      Tt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          S.length,
                          " seleccionados"
                        ]
                      }
                    ) : m.filter((M) => M.selected).map((M) => /* @__PURE__ */ l.jsx(
                      Tt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: M.label
                      },
                      M.value.toString()
                    )) })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ l.jsx("style", { children: `
                .combox-checkbox-content {
                    min-width: 150px !important;
                    width: ${b + 24}px !important;
                  }

                  .checkbox-tooltip-content {
                    min-width: 150px !important;
                    width: ${b + 10}px !important;
                  }
                ` }),
            /* @__PURE__ */ l.jsx(
              Pn,
              {
                className: T("w-full p-0 combox-checkbox-content", f),
                align: "start",
                children: /* @__PURE__ */ l.jsxs(Kn, { style: { width: "50px !important" }, children: [
                  /* @__PURE__ */ l.jsx(lr, { placeholder: s }),
                  /* @__PURE__ */ l.jsxs(Ro, { children: [
                    /* @__PURE__ */ l.jsx(dr, { children: "Sin Resultados" }),
                    /* @__PURE__ */ l.jsxs(mn, { children: [
                      /* @__PURE__ */ l.jsxs(qt, { onSelect: F, children: [
                        /* @__PURE__ */ l.jsx(
                          "div",
                          {
                            className: T(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              v ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                            ),
                            children: /* @__PURE__ */ l.jsx(Xt, { className: T("h-4 w-4") })
                          }
                        ),
                        /* @__PURE__ */ l.jsx("span", { className: "truncate", children: c || "Seleccionar todos" })
                      ] }),
                      /* @__PURE__ */ l.jsx(la, { className: "my-2" }),
                      m.map((M) => /* @__PURE__ */ l.jsxs(
                        qt,
                        {
                          disabled: M == null ? void 0 : M.disabled,
                          onSelect: () => {
                            M.selected ? O(M.id, !1) : O(M.id, !0);
                          },
                          children: [
                            /* @__PURE__ */ l.jsx(
                              "div",
                              {
                                className: T(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  M.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ l.jsx(Xt, { className: T("h-4 w-4") })
                              }
                            ),
                            M.icon,
                            /* @__PURE__ */ l.jsx("span", { className: "truncate", children: M.label })
                          ]
                        },
                        M.value.toString()
                      ))
                    ] }),
                    S.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx(la, {}),
                      /* @__PURE__ */ l.jsx(mn, { children: /* @__PURE__ */ l.jsx(
                        qt,
                        {
                          onSelect: () => {
                            t.setValue(n, []), N();
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
}, c8 = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, disabled: d, ...u }) => i ? /* @__PURE__ */ l.jsx(
  C3,
  {
    label: o,
    description: t,
    classNameContainer: s,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    disabled: d,
    form: (u == null ? void 0 : u.form) || null,
    items: (u == null ? void 0 : u.items) || []
  }
) : /* @__PURE__ */ l.jsx(
  S3,
  {
    id: e,
    label: o,
    classNameContainer: s,
    description: t,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    disabled: d,
    selectAllLabel: u == null ? void 0 : u.selectAllLabel,
    form: (u == null ? void 0 : u.form) || null,
    items: (u == null ? void 0 : u.items) || []
  }
);
function N3({
  isOpen: e,
  onClose: t,
  children: n
}) {
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `fixed z-30 inset-0 bg-opacity-50  transition-opacity ${e ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "fixed z-50 inset-y-0  right-0  flex", "data-testId": "bottom-drawer", children: /* @__PURE__ */ l.jsx(
          "div",
          {
            className: "max-w-[250px] h-full overflow-y-scroll rounded-l-xl border-l-[1.5px] bg-brand-sidebar-background text-brand-sidebar-text",
            children: n
          }
        ) }),
        /* @__PURE__ */ l.jsx("div", { className: "h-full", "data-testId": "bottom-outside-drawer", onClick: t })
      ]
    }
  );
}
function If({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ l.jsx(Ar, { children: /* @__PURE__ */ l.jsxs(Ir, { children: [
    /* @__PURE__ */ l.jsx(Lr, { children: /* @__PURE__ */ l.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        "data-testId": `bottom-sidebar-${t}`,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ l.jsx(
          cb,
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
    /* @__PURE__ */ l.jsx(ur, { children: t })
  ] }) });
}
function E3({
  profile: e
}) {
  return /* @__PURE__ */ l.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ l.jsxs(co, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ l.jsx(kr, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ l.jsx(lo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ l.jsx(kr, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ l.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ l.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ l.jsx(Tt, { className: "w-full", children: e.role })
    ] })
  ] });
}
const P3 = ({ isExpanded: e, theme: t }) => {
  const [n, r] = q(!1), { value: o, toggleTheme: a } = t;
  return Q(() => {
    r(!0);
  }, []), n ? /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: a,
      "data-testId": "theme-sidebar-bottom-btn",
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
      children: o === "light" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(ob, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(ib, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function k3({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ l.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ l.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ l.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(P3, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsxs(
        "button",
        {
          onClick: t,
          "data-testId": "toggle-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ l.jsx(ip, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
          ]
        }
      ) }),
      e.logout && /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsxs(
        "button",
        {
          onClick: () => {
            e.logout();
          },
          "data-testId": "logout-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ l.jsx(sp, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function j3({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(E3, { profile: a }),
    /* @__PURE__ */ l.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ l.jsx(
        cb,
        {
          to: s.to,
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          Link: o
        },
        i
      )),
      t && t.map((s, i) => /* @__PURE__ */ l.jsx(
        vj,
        {
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          sublinks: s.subLinks,
          Link: o
        },
        i
      )),
      /* @__PURE__ */ l.jsx(
        k3,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function l8({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = q(!1);
  return /* @__PURE__ */ l.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-brand-sidebar-background border-t border-gray-200 dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex justify-between h-full max-w-lg  mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ l.jsx(
        If,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ l.jsx(
        If,
        {
          icon: /* @__PURE__ */ l.jsx(ip, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      N3,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ l.jsx(
          j3,
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
const Xr = Vt({
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
function M3() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = at(Xr);
  return /* @__PURE__ */ l.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ l.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ l.jsxs(
        yd,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ l.jsx(Si, { className: "h-8 w-[70px]", children: /* @__PURE__ */ l.jsx(wd, { placeholder: e.limit }) }),
            /* @__PURE__ */ l.jsx(Ni, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ l.jsx(Ei, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ l.jsxs(
        ze,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ l.jsx(ai, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ l.jsxs(
        ze,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ l.jsx(vr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const d8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, T3 = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), u8 = {
  limit: 10,
  page: 1
}, Ec = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), f8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], O3 = () => /* @__PURE__ */ l.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), D3 = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ l.jsx("div", { children: r.render(o) }, Ec()) : /* @__PURE__ */ l.jsx(ln, { children: o[r.id] }, Ec());
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: e.map((r) => /* @__PURE__ */ l.jsx(Eh, { children: t.map((o) => n(o, r)) }, Ec())) });
}, Db = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = at(Xr), [s, i] = q(
    o ? o.length : 0
  );
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: e.length ? /* @__PURE__ */ l.jsx(
    D3,
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
  ) : /* @__PURE__ */ l.jsx(O3, {}) });
}, R3 = () => /* @__PURE__ */ l.jsx(Db, {}), A3 = () => /* @__PURE__ */ l.jsx("span", { className: "loader-fade-dot" }), I3 = () => /* @__PURE__ */ l.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ l.jsx(A3, {}),
  /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), L3 = () => {
  const { showFilters: e, setShowFilters: t } = at(Xr);
  return /* @__PURE__ */ l.jsxs(
    ze,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ l.jsx(nb, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, F3 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = at(Xr), d = (u) => {
    c(u);
  };
  return /* @__PURE__ */ l.jsxs(Hn, { children: [
    /* @__PURE__ */ l.jsx(Un, { asChild: !0, children: /* @__PURE__ */ l.jsxs(ze, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ l.jsx(rb, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ l.jsx(
          Tt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ l.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ l.jsxs(
          Tt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ l.jsx(
          Tt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx(Pn, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ l.jsxs(Kn, { children: [
      /* @__PURE__ */ l.jsx(lr, { placeholder: r }),
      /* @__PURE__ */ l.jsxs(Ro, { children: [
        /* @__PURE__ */ l.jsx(dr, { children: "Sin Resultados" }),
        /* @__PURE__ */ l.jsx(mn, { children: o.map((u) => /* @__PURE__ */ l.jsxs(
          qt,
          {
            onSelect: () => {
              u.selected ? s(e, u.id, !1) : s(e, u.id, !0);
            },
            children: [
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: T(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ l.jsx(Xt, { className: T("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ l.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(la, {}),
          /* @__PURE__ */ l.jsx(mn, { children: /* @__PURE__ */ l.jsx(
            qt,
            {
              onSelect: () => d(e),
              className: "justify-center text-center",
              children: "Limpiar Filtros"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}, V3 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ l.jsxs(Hn, { children: [
  /* @__PURE__ */ l.jsx(Un, { asChild: !0, children: /* @__PURE__ */ l.jsxs(ze, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ l.jsx(ks, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(Ga, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ l.jsx(
        Tt,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ l.jsxs(Pn, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ l.jsxs(On, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ l.jsx(
      vd,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), z3 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = at(Xr), d = e.watch(n.map((f) => f.id)), u = () => {
    var p;
    a();
    const f = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((m) => {
      m[1] && f.push({
        field: Ao(m[0]),
        text: m[1]
      });
    }), s({ queries: f, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ l.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ l.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ l.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ l.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((f, p) => /* @__PURE__ */ l.jsx(
          V3,
          {
            queryText: d[p],
            label: f.label,
            id: f.id,
            form: e
          },
          f.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ l.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ l.jsx(L3, {}),
      o && r && r.map((f) => /* @__PURE__ */ l.jsx(
        F3,
        {
          onSubmit: t,
          form: e,
          id: f.id,
          icon: f.icon,
          label: f.label,
          options: f.options
        },
        f.id
      )),
      o && (r != null && r.filter(
        (f) => f.options.some((p) => p.selected)
      ).length) ? /* @__PURE__ */ l.jsxs(
        ze,
        {
          type: "button",
          variant: "ghost",
          onClick: u,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ l.jsx(ii, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, B3 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = at(Xr), c = Gm({
    defaultValues: n.reduce((u, f) => (u[f.id] = "", u), {}),
    resolver: fb(
      ti.object(
        n.reduce((u, f) => (u[f.id] = ti.string().optional(), u), {})
      )
    )
  }), d = async (u) => {
    var m;
    console.log({ data: u });
    const f = r(), p = [];
    (m = Object.entries(u)) == null || m.forEach((h) => {
      h[1] && p.push({
        field: Ao(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: f, limit: s, page: a });
  };
  return Q(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ l.jsx("div", {}) : /* @__PURE__ */ l.jsx(Zm, { ...c, children: /* @__PURE__ */ l.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ l.jsx(z3, { form: c, onSubmit: d }) : /* @__PURE__ */ l.jsx("div", {}),
    /* @__PURE__ */ l.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ l.jsx(
      ze,
      {
        type: "submit",
        onClick: c.handleSubmit(d),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ l.jsx($l, {}) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(sb, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, W3 = () => /* @__PURE__ */ l.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), H3 = () => /* @__PURE__ */ l.jsx(Db, {}), U3 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function p8(e) {
  const [t, n] = q([]), [r, o] = q([]), [a, s] = q([]), [i, c] = q(!1), [d, u] = q(e == null ? void 0 : e.error), [f, p] = q(e == null ? void 0 : e.loading), [m, h] = q(), [v, g] = q(
    (e == null ? void 0 : e.pagination) ?? U3
  ), [b, x] = q(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: y } = e, $ = ge(
    (M) => e.onSubmitTable({ ...M }),
    [e]
  ), C = ge(
    (M) => {
      var W;
      g(M);
      const V = m.getValues(), R = [];
      (W = Object.entries(V)) == null || W.forEach((ne) => {
        ne[1] && R.push({
          field: T3(ne[0]),
          text: ne[1]
        });
      });
      const U = r.map((ne) => ({
        id: ne.id,
        label: ne.label,
        options: ne.options.filter((me) => me.selected).map((me) => me.value)
      })).filter((ne) => ne.options.length > 0);
      $({
        filters: U,
        queries: R,
        limit: M.limit,
        page: M.page
      });
    },
    [r, $, m]
  ), P = ge(() => {
    C({ ...v, page: v.page + 1 });
  }, [v, C]), S = ge(() => {
    v.page > 1 && C({ ...v, page: v.page - 1 });
  }, [v, C]), N = () => r.map((M) => ({
    id: M.id,
    label: M.label,
    options: M.options.filter((V) => V.selected).map((V) => V.value)
  })).filter((M) => M.options.length > 0), O = (M) => {
    const V = r.find((R) => R.id === M);
    return V ? V.options.filter((U) => U.selected).map((U) => U.value) : [];
  }, F = (M, V, R) => {
    const U = r.map((W) => W.id === M ? {
      ...W,
      options: W.options.map((ne) => ne.id === V ? { ...ne, selected: R } : ne)
    } : W);
    o(U);
  }, G = () => r, A = (M) => {
    const V = r.map((R) => R.id === M ? {
      ...R,
      options: R.options.map((U) => ({
        ...U,
        selected: !1
      }))
    } : R);
    o(V);
  }, B = (M) => C({ ...v, limit: M }), D = () => {
    const M = r.map((V) => ({
      ...V,
      options: V.options.map((R) => ({ ...R, selected: !1 }))
    }));
    o(M);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const M = b.filter((V) => V.isQuery).map((V) => ({
      id: V.id,
      label: V.label
    }));
    s(M);
  }, [b]), Q(() => {
    const M = (R) => (R == null ? void 0 : R.filters) && (R == null ? void 0 : R.filters.length), V = b.filter(M).map((R) => {
      const U = R.filters.map((ne) => ({
        ...ne,
        selected: !1
      }));
      return {
        ...R,
        id: R.id,
        options: U
      };
    });
    o(V);
  }, [b]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((M) => {
      M != null && M.filters && b.forEach((V) => {
        M.id === V.id && o((R) => R.some((W) => W.id === M.id) ? R : [
          ...R,
          {
            id: V.id,
            label: V.label,
            options: M.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), Q(() => {
    g((M) => {
      var V, R;
      return {
        ...M,
        hasNextPage: (V = e == null ? void 0 : e.pagination) == null ? void 0 : V.hasNextPage,
        hasPrevPage: (R = e == null ? void 0 : e.pagination) == null ? void 0 : R.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ l.jsx(
    Xr.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: P,
        prevPage: S,
        searchForm: m,
        updateLimit: B,
        showFilters: i,
        resetFilters: D,
        getGlobalFilters: G,
        selectOptionFilter: F,
        resetOptionsByFilter: A,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: $,
        getFilterOptionsSelectedById: O,
        getFiltersWithOptionsSelected: N,
        setSelectItem: e.setSelectItem,
        setShowFilters: (M) => c(M),
        setSearchForm: (M) => h(M)
      },
      children: /* @__PURE__ */ l.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ l.jsx(B3, { onSubmitTable: $, loading: f }),
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${y ? `${y === 2 ? "sm" : "lg"}:grid-cols-${y}` : "grid-cols-3"}  gap-6`,
            children: [
              f && /* @__PURE__ */ l.jsx(I3, {}),
              !f && d && /* @__PURE__ */ l.jsx(W3, {}),
              !f && !d && !t && /* @__PURE__ */ l.jsx(H3, {}),
              !f && !d && t && /* @__PURE__ */ l.jsx(R3, {})
            ]
          }
        ),
        !f && !d && t && /* @__PURE__ */ l.jsx(M3, {})
      ] })
    }
  );
}
function K3(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Lf(e) {
  return K3(e) || Array.isArray(e);
}
function G3() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Yd(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !Lf(i) || !Lf(c) ? i === c : Yd(i, c);
  });
}
function Ff(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Y3(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Ff(e), r = Ff(t);
  return n.every((o, a) => {
    const s = r[a];
    return Yd(o, s);
  });
}
function Zd(e) {
  return typeof e == "number";
}
function hl(e) {
  return typeof e == "string";
}
function qd(e) {
  return typeof e == "boolean";
}
function Vf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ct(e) {
  return Math.abs(e);
}
function Xd(e) {
  return Math.sign(e);
}
function Qo(e, t) {
  return ct(e - t);
}
function Z3(e, t) {
  if (e === 0 || t === 0 || ct(e) <= ct(t))
    return 0;
  const n = Qo(ct(e), ct(t));
  return ct(n / e);
}
function Na(e) {
  return Ea(e).map(Number);
}
function cn(e) {
  return e[Qa(e)];
}
function Qa(e) {
  return Math.max(0, e.length - 1);
}
function Qd(e, t) {
  return t === Qa(e);
}
function zf(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Ea(e) {
  return Object.keys(e);
}
function Rb(e, t) {
  return [e, t].reduce((n, r) => (Ea(r).forEach((o) => {
    const a = n[o], s = r[o], i = Vf(a) && Vf(s);
    n[o] = i ? Rb(a, s) : s;
  }), n), {});
}
function Ab(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function q3(e, t) {
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
  function s(c, d) {
    return hl(e) ? n[e](c) : e(t, c, d);
  }
  return {
    measure: s
  };
}
function Pa() {
  let e = [];
  function t(o, a, s, i = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(a, s, i), c = () => o.removeEventListener(a, s, i);
    else {
      const d = o;
      d.addListener(s), c = () => d.removeListener(s);
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
function X3(e, t, n, r) {
  const o = Pa(), a = 1e3 / 60;
  let s = null, i = 0, c = 0;
  function d() {
    o.add(e, "visibilitychange", () => {
      e.hidden && h();
    });
  }
  function u() {
    m(), o.clear();
  }
  function f(g) {
    if (!c)
      return;
    s || (s = g);
    const b = g - s;
    for (s = g, i += b; i >= a; )
      n(), i -= a;
    const x = ct(i / a);
    r(x), c && t.requestAnimationFrame(f);
  }
  function p() {
    c || (c = t.requestAnimationFrame(f));
  }
  function m() {
    t.cancelAnimationFrame(c), s = null, i = 0, c = 0;
  }
  function h() {
    s = null, i = 0;
  }
  return {
    init: d,
    destroy: u,
    start: p,
    stop: m,
    update: n,
    render: r
  };
}
function Q3(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", s = !r && n ? -1 : 1, i = u(), c = f();
  function d(h) {
    const {
      height: v,
      width: g
    } = h;
    return r ? v : g;
  }
  function u() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function p(h) {
    return h * s;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: i,
    endEdge: c,
    measureSize: d,
    direction: p
  };
}
function zr(e = 0, t = 0) {
  const n = ct(e - t);
  function r(d) {
    return d < e;
  }
  function o(d) {
    return d > t;
  }
  function a(d) {
    return r(d) || o(d);
  }
  function s(d) {
    return a(d) ? r(d) ? e : t : d;
  }
  function i(d) {
    return n ? d - n * Math.ceil((d - t) / n) : d;
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
function Ib(e, t, n) {
  const {
    constrain: r
  } = zr(0, e), o = e + 1;
  let a = s(t);
  function s(p) {
    return n ? ct((o + p) % o) : r(p);
  }
  function i() {
    return a;
  }
  function c(p) {
    return a = s(p), f;
  }
  function d(p) {
    return u().set(i() + p);
  }
  function u() {
    return Ib(e, i(), n);
  }
  const f = {
    get: i,
    set: c,
    add: d,
    clone: u
  };
  return f;
}
function J3(e, t, n, r, o, a, s, i, c, d, u, f, p, m, h, v, g, b, x) {
  const {
    cross: y,
    direction: $
  } = e, C = ["INPUT", "SELECT", "TEXTAREA"], P = {
    passive: !1
  }, S = Pa(), N = Pa(), O = zr(50, 225).constrain(m.measure(20)), F = {
    mouse: 300,
    touch: 400
  }, G = {
    mouse: 500,
    touch: 600
  }, A = h ? 43 : 25;
  let B = !1, D = 0, M = 0, V = !1, R = !1, U = !1, W = !1;
  function ne(H) {
    if (!x)
      return;
    function te(Pe) {
      (qd(x) || x(H, Pe)) && J(Pe);
    }
    const $e = t;
    S.add($e, "dragstart", (Pe) => Pe.preventDefault(), P).add($e, "touchmove", () => {
    }, P).add($e, "touchend", () => {
    }).add($e, "touchstart", te).add($e, "mousedown", te).add($e, "touchcancel", he).add($e, "contextmenu", he).add($e, "click", Ne, !0);
  }
  function me() {
    S.clear(), N.clear();
  }
  function Y() {
    const H = W ? n : t;
    N.add(H, "touchmove", re, P).add(H, "touchend", he).add(H, "mousemove", re, P).add(H, "mouseup", he);
  }
  function ue(H) {
    const te = H.nodeName || "";
    return C.includes(te);
  }
  function ye() {
    return (h ? G : F)[W ? "mouse" : "touch"];
  }
  function fe(H, te) {
    const $e = f.add(Xd(H) * -1), Pe = u.byDistance(H, !h).distance;
    return h || ct(H) < O ? Pe : g && te ? Pe * 0.5 : u.byIndex($e.get(), 0).distance;
  }
  function J(H) {
    const te = Ab(H, r);
    W = te, U = h && te && !H.buttons && B, B = Qo(o.get(), s.get()) >= 2, !(te && H.button !== 0) && (ue(H.target) || (V = !0, a.pointerDown(H), d.useFriction(0).useDuration(0), o.set(s), Y(), D = a.readPoint(H), M = a.readPoint(H, y), p.emit("pointerDown")));
  }
  function re(H) {
    const te = a.readPoint(H), $e = a.readPoint(H, y), Pe = Qo(te, D), Ie = Qo($e, M);
    if (!R && !W && (!H.cancelable || (R = Pe > Ie, !R)))
      return he(H);
    const ke = a.pointerMove(H);
    Pe > v && (U = !0), d.useFriction(0.3).useDuration(1), i.start(), o.add($(ke)), H.preventDefault();
  }
  function he(H) {
    const $e = u.byDistance(0, !1).index !== f.get(), Pe = a.pointerUp(H) * ye(), Ie = fe($(Pe), $e), ke = Z3(Pe, Ie), E = A - 10 * ke, L = b + ke / 50;
    R = !1, V = !1, N.clear(), d.useDuration(E).useFriction(L), c.distance(Ie, !h), W = !1, p.emit("pointerUp");
  }
  function Ne(H) {
    U && (H.stopPropagation(), H.preventDefault(), U = !1);
  }
  function ae() {
    return V;
  }
  return {
    init: ne,
    pointerDown: ae,
    destroy: me
  };
}
function eM(e, t) {
  let r, o;
  function a(f) {
    return f.timeStamp;
  }
  function s(f, p) {
    const h = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (Ab(f, t) ? f : f.touches[0])[h];
  }
  function i(f) {
    return r = f, o = f, s(f);
  }
  function c(f) {
    const p = s(f) - s(o), m = a(f) - a(r) > 170;
    return o = f, m && (r = f), p;
  }
  function d(f) {
    if (!r || !o)
      return 0;
    const p = s(o) - s(r), m = a(f) - a(r), h = a(f) - a(o) > 170, v = p / m;
    return m && !h && ct(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: d,
    readPoint: s
  };
}
function tM() {
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
function nM(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function rM(e, t, n, r, o, a, s) {
  let i, c, d = [], u = !1;
  function f(v) {
    return o.measureSize(s.measure(v));
  }
  function p(v) {
    if (!a)
      return;
    c = f(e), d = r.map(f);
    function g(x) {
      for (const y of x) {
        const $ = y.target === e, C = r.indexOf(y.target), P = $ ? c : d[C], S = f($ ? e : r[C]);
        if (ct(S - P) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((x) => {
      u || (qd(a) || a(v, x)) && g(x);
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
function oM(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, d = e.get(), u = 0;
  function f() {
    const C = n.get() - e.get(), P = !i;
    let S = 0;
    return P ? (a = 0, e.set(n), S = C) : (a += C / i, a *= c, d += a, e.add(a), S = d - u), s = Xd(S), u = d, $;
  }
  function p() {
    const C = n.get() - t.get();
    return ct(C) < 1e-3;
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
  function x(C) {
    return i = C, $;
  }
  function y(C) {
    return c = C, $;
  }
  const $ = {
    direction: h,
    duration: m,
    velocity: v,
    seek: f,
    settled: p,
    useBaseFriction: b,
    useBaseDuration: g,
    useFriction: y,
    useDuration: x
  };
  return $;
}
function aM(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = zr(0.1, 0.99);
  let c = !1;
  function d() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!d())
      return;
    const h = e.reachedMin(t.get()) ? "min" : "max", v = ct(e[h] - t.get()), g = n.get() - t.get(), b = i.constrain(v / s);
    n.subtract(g * b), !m && ct(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(m) {
    c = !m;
  }
  return {
    constrain: u,
    toggleActive: f
  };
}
function sM(e, t, n, r, o) {
  const a = zr(-t + e, 0), s = f(), i = u(), c = p();
  function d(h, v) {
    return Qo(h, v) < 1;
  }
  function u() {
    const h = s[0], v = cn(s), g = s.lastIndexOf(h), b = s.indexOf(v) + 1;
    return zr(g, b);
  }
  function f() {
    return n.map((h, v) => {
      const {
        min: g,
        max: b
      } = a, x = a.constrain(h), y = !v, $ = Qd(n, v);
      return y ? b : $ || d(g, x) ? g : d(b, x) ? b : x;
    }).map((h) => parseFloat(h.toFixed(3)));
  }
  function p() {
    if (t <= e + o)
      return [a.max];
    if (r === "keepSnaps")
      return s;
    const {
      min: h,
      max: v
    } = i;
    return s.slice(h, v);
  }
  return {
    snapsContained: c,
    scrollContainLimit: i
  };
}
function iM(e, t, n) {
  const r = t[0], o = n ? r - e : cn(t);
  return {
    limit: zr(o, r)
  };
}
function cM(e, t, n, r) {
  const a = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = zr(a, s);
  function d(p) {
    return p === 1 ? c(n.get()) : p === -1 ? i(n.get()) : !1;
  }
  function u(p) {
    if (!d(p))
      return;
    const m = e * (p * -1);
    r.forEach((h) => h.add(m));
  }
  return {
    loop: u
  };
}
function lM(e) {
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
function dM(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = f().map(t.measure), d = p(), u = m();
  function f() {
    return i(r).map((v) => cn(v)[s] - v[0][a]).map(ct);
  }
  function p() {
    return r.map((v) => n[a] - v[a]).map((v) => -ct(v));
  }
  function m() {
    return i(d).map((v) => v[0]).map((v, g) => v + c[g]);
  }
  return {
    snaps: d,
    snapsAligned: u
  };
}
function uM(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, d = u();
  function u() {
    const p = s(a), m = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : m ? p : p.slice(i, c).map((h, v, g) => {
      const b = !v, x = Qd(g, v);
      if (b) {
        const y = cn(g[0]) + 1;
        return zf(y);
      }
      if (x) {
        const y = Qa(a) - cn(g)[0] + 1;
        return zf(y, cn(g)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: d
  };
}
function fM(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(h) {
    return h.concat().sort((v, g) => ct(v) - ct(g))[0];
  }
  function d(h) {
    const v = e ? s(h) : i(h), g = t.map((x, y) => ({
      diff: u(x - v, 0),
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
    const b = g.filter((x) => Xd(x) === v);
    return b.length ? c(b) : cn(g) - n;
  }
  function f(h, v) {
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
    } = d(g), y = !e && a(g);
    if (!v || y)
      return {
        index: b,
        distance: h
      };
    const $ = t[b] - x, C = h + u($, 0);
    return {
      index: b,
      distance: C
    };
  }
  return {
    byDistance: p,
    byIndex: f,
    shortcut: u
  };
}
function pM(e, t, n, r, o, a, s) {
  function i(f) {
    const p = f.distance, m = f.index !== t.get();
    a.add(p), p && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), m && (n.set(t.get()), t.set(f.index), s.emit("select"));
  }
  function c(f, p) {
    const m = o.byDistance(f, p);
    i(m);
  }
  function d(f, p) {
    const m = t.clone().set(f), h = o.byIndex(m.get(), p);
    i(h);
  }
  return {
    distance: c,
    index: d
  };
}
function mM(e, t, n, r, o, a) {
  let s = 0;
  function i() {
    a.add(document, "keydown", c, !1), t.forEach(d);
  }
  function c(f) {
    f.code === "Tab" && (s = (/* @__PURE__ */ new Date()).getTime());
  }
  function d(f) {
    const p = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - s > 10)
        return;
      e.scrollLeft = 0;
      const v = t.indexOf(f), g = n.findIndex((b) => b.includes(v));
      Zd(g) && (o.useDuration(0), r.index(g, 0));
    };
    a.add(f, "focus", p, {
      passive: !0,
      capture: !0
    });
  }
  return {
    init: i
  };
}
function Ss(e) {
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
    return Zd(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function Lb(e, t) {
  const n = e.scroll === "x" ? a : s, r = t.style;
  let o = !1;
  function a(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function s(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function i(f) {
    o || (r.transform = n(e.direction(f)));
  }
  function c(f) {
    o = !f;
  }
  function d() {
    o || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: d,
    to: i,
    toggleActive: c
  };
}
function hM(e, t, n, r, o, a, s, i, c) {
  const u = Na(o), f = Na(o).reverse(), p = b().concat(x());
  function m(S, N) {
    return S.reduce((O, F) => O - o[F], N);
  }
  function h(S, N) {
    return S.reduce((O, F) => m(O, N) > 0 ? O.concat([F]) : O, []);
  }
  function v(S) {
    return a.map((N, O) => ({
      start: N - r[O] + 0.5 + S,
      end: N + t - 0.5 + S
    }));
  }
  function g(S, N, O) {
    const F = v(N);
    return S.map((G) => {
      const A = O ? 0 : -n, B = O ? n : 0, D = O ? "end" : "start", M = F[G][D];
      return {
        index: G,
        loopPoint: M,
        slideLocation: Ss(-1),
        translate: Lb(e, c[G]),
        target: () => i.get() > M ? A : B
      };
    });
  }
  function b() {
    const S = s[0], N = h(f, S);
    return g(N, n, !1);
  }
  function x() {
    const S = t - s[0] - 1, N = h(u, S);
    return g(N, -n, !0);
  }
  function y() {
    return p.every(({
      index: S
    }) => {
      const N = u.filter((O) => O !== S);
      return m(N, t) <= 0.1;
    });
  }
  function $() {
    p.forEach((S) => {
      const {
        target: N,
        translate: O,
        slideLocation: F
      } = S, G = N();
      G !== F.get() && (O.to(G), F.set(G));
    });
  }
  function C() {
    p.forEach((S) => S.translate.clear());
  }
  return {
    canLoop: y,
    clear: C,
    loop: $,
    loopPoints: p
  };
}
function vM(e, t, n) {
  let r, o = !1;
  function a(c) {
    if (!n)
      return;
    function d(u) {
      for (const f of u)
        if (f.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((u) => {
      o || (qd(n) || n(c, u)) && d(u);
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
function gM(e, t, n, r) {
  const o = {};
  let a = null, s = null, i, c = !1;
  function d() {
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
  function f(h) {
    return Ea(o).reduce((v, g) => {
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
    const v = f(h);
    return h && (a = v), h || (s = v), v;
  }
  return {
    init: d,
    destroy: u,
    get: p
  };
}
function bM(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, d = n[0] && o, u = h(), f = v(), p = n.map(s), m = g();
  function h() {
    if (!d)
      return 0;
    const x = n[0];
    return ct(t[i] - x[i]);
  }
  function v() {
    if (!d)
      return 0;
    const x = a.getComputedStyle(cn(r));
    return parseFloat(x.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((x, y, $) => {
      const C = !y, P = Qd($, y);
      return C ? p[y] + u : P ? p[y] + f : $[y + 1][i] - x[i];
    }).map(ct);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: m,
    startGap: u,
    endGap: f
  };
}
function xM(e, t, n, r, o, a, s, i, c) {
  const {
    startEdge: d,
    endEdge: u,
    direction: f
  } = e, p = Zd(n);
  function m(b, x) {
    return Na(b).filter((y) => y % x === 0).map((y) => b.slice(y, y + x));
  }
  function h(b) {
    return b.length ? Na(b).reduce((x, y, $) => {
      const C = cn(x) || 0, P = C === 0, S = y === Qa(b), N = o[d] - a[C][d], O = o[d] - a[y][u], F = !r && P ? f(s) : 0, G = !r && S ? f(i) : 0, A = ct(O - G - (N + F));
      return $ && A > t + c && x.push(y), S && x.push(b.length), x;
    }, []).map((x, y, $) => {
      const C = Math.max($[y - 1] || 0);
      return b.slice(C, x);
    }) : [];
  }
  function v(b) {
    return p ? m(b, n) : h(b);
  }
  return {
    groupSlides: v
  };
}
function yM(e, t, n, r, o, a, s) {
  const {
    align: i,
    axis: c,
    direction: d,
    startIndex: u,
    loop: f,
    duration: p,
    dragFree: m,
    dragThreshold: h,
    inViewThreshold: v,
    slidesToScroll: g,
    skipSnaps: b,
    containScroll: x,
    watchResize: y,
    watchSlides: $,
    watchDrag: C
  } = a, P = 2, S = tM(), N = S.measure(t), O = n.map(S.measure), F = Q3(c, d), G = F.measureSize(N), A = nM(G), B = q3(i, G), D = !f && !!x, M = f || !!x, {
    slideSizes: V,
    slideSizesWithGaps: R,
    startGap: U,
    endGap: W
  } = bM(F, N, O, n, M, o), ne = xM(F, G, g, f, N, O, U, W, P), {
    snaps: me,
    snapsAligned: Y
  } = dM(F, B, N, O, ne), ue = -cn(me) + cn(R), {
    snapsContained: ye,
    scrollContainLimit: fe
  } = sM(G, ue, Y, x, P), J = D ? ye : Y, {
    limit: re
  } = iM(ue, J, f), he = Ib(Qa(J), u, f), Ne = he.clone(), ae = Na(n), de = ({
    dragHandler: ht,
    scrollBody: Yt,
    scrollBounds: _e,
    options: {
      loop: Ce
    }
  }) => {
    Ce || _e.constrain(ht.pointerDown()), Yt.seek();
  }, H = ({
    scrollBody: ht,
    translate: Yt,
    location: _e,
    offsetLocation: Ce,
    scrollLooper: Ve,
    slideLooper: Le,
    dragHandler: Ze,
    animation: Je,
    eventHandler: vt,
    options: {
      loop: Qn
    }
  }, Jt) => {
    const _t = ht.velocity(), xn = ht.settled();
    xn && !Ze.pointerDown() && (Je.stop(), vt.emit("settle")), xn || vt.emit("scroll"), Ce.set(_e.get() - _t + _t * Jt), Qn && (Ve.loop(ht.direction()), Le.loop()), Yt.to(Ce.get());
  }, te = X3(r, o, () => de(Qe), (ht) => H(Qe, ht)), $e = 0.68, Pe = J[he.get()], Ie = Ss(Pe), ke = Ss(Pe), E = Ss(Pe), L = oM(Ie, ke, E, p, $e), K = fM(f, J, ue, re, E), ce = pM(te, he, Ne, L, K, E, s), ie = lM(re), ee = Pa(), xe = gM(t, n, s, v), {
    slideRegistry: De
  } = uM(D, x, J, fe, ne, ae), Ke = mM(e, n, De, ce, L, ee), Qe = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: N,
    slideRects: O,
    animation: te,
    axis: F,
    dragHandler: J3(F, e, r, o, E, eM(F, o), Ie, te, ce, L, K, he, s, A, m, h, b, $e, C),
    eventStore: ee,
    percentOfView: A,
    index: he,
    indexPrevious: Ne,
    limit: re,
    location: Ie,
    offsetLocation: ke,
    options: a,
    resizeHandler: rM(t, s, o, n, F, y, S),
    scrollBody: L,
    scrollBounds: aM(re, ke, E, L, A),
    scrollLooper: cM(ue, re, ke, [Ie, ke, E]),
    scrollProgress: ie,
    scrollSnapList: J.map(ie.get),
    scrollSnaps: J,
    scrollTarget: K,
    scrollTo: ce,
    slideLooper: hM(F, G, ue, V, R, me, J, ke, n),
    slideFocus: Ke,
    slidesHandler: vM(t, s, $),
    slidesInView: xe,
    slideIndexes: ae,
    slideRegistry: De,
    slidesToScroll: ne,
    target: E,
    translate: Lb(F, t)
  };
  return Qe;
}
function wM() {
  const e = {};
  let t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function o(c) {
    return r(c).forEach((d) => d(t, c)), i;
  }
  function a(c, d) {
    return e[c] = r(c).concat([d]), i;
  }
  function s(c, d) {
    return e[c] = r(c).filter((u) => u !== d), i;
  }
  const i = {
    init: n,
    emit: o,
    off: s,
    on: a
  };
  return i;
}
const $M = {
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
function _M(e) {
  function t(a, s) {
    return Rb(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = Ea(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, d) => t(c, d), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => Ea(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function CM(e) {
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
function ri(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = _M(o), s = CM(a), i = Pa(), c = wM(), {
    mergeOptions: d,
    optionsAtMedia: u,
    optionsMediaQueries: f
  } = a, {
    on: p,
    off: m,
    emit: h
  } = c, v = G;
  let g = !1, b, x = d($M, ri.globalOptions), y = d(x), $ = [], C, P, S;
  function N() {
    const {
      container: de,
      slides: H
    } = y;
    P = (hl(de) ? e.querySelector(de) : de) || e.children[0];
    const $e = hl(H) ? P.querySelectorAll(H) : H;
    S = [].slice.call($e || P.children);
  }
  function O(de) {
    const H = yM(e, P, S, r, o, de, c);
    if (de.loop && !H.slideLooper.canLoop()) {
      const te = Object.assign({}, de, {
        loop: !1
      });
      return O(te);
    }
    return H;
  }
  function F(de, H) {
    g || (x = d(x, de), y = u(x), $ = H || $, N(), b = O(y), f([x, ...$.map(({
      options: te
    }) => te)]).forEach((te) => i.add(te, "change", G)), y.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(), b.eventHandler.init(ae), b.resizeHandler.init(ae), b.slidesHandler.init(ae), b.options.loop && b.slideLooper.loop(), P.offsetParent && S.length && b.dragHandler.init(ae), C = s.init(ae, $)));
  }
  function G(de, H) {
    const te = me();
    A(), F(d({
      startIndex: te
    }, de), H), c.emit("reInit");
  }
  function A() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), s.destroy(), i.clear();
  }
  function B() {
    g || (g = !0, i.clear(), A(), c.emit("destroy"));
  }
  function D(de, H, te) {
    !y.active || g || (b.scrollBody.useBaseFriction().useDuration(H === !0 ? 0 : y.duration), b.scrollTo.index(de, te || 0));
  }
  function M(de) {
    const H = b.index.add(1).get();
    D(H, de, -1);
  }
  function V(de) {
    const H = b.index.add(-1).get();
    D(H, de, 1);
  }
  function R() {
    return b.index.add(1).get() !== me();
  }
  function U() {
    return b.index.add(-1).get() !== me();
  }
  function W() {
    return b.scrollSnapList;
  }
  function ne() {
    return b.scrollProgress.get(b.location.get());
  }
  function me() {
    return b.index.get();
  }
  function Y() {
    return b.indexPrevious.get();
  }
  function ue() {
    return b.slidesInView.get();
  }
  function ye() {
    return b.slidesInView.get(!1);
  }
  function fe() {
    return C;
  }
  function J() {
    return b;
  }
  function re() {
    return e;
  }
  function he() {
    return P;
  }
  function Ne() {
    return S;
  }
  const ae = {
    canScrollNext: R,
    canScrollPrev: U,
    containerNode: he,
    internalEngine: J,
    destroy: B,
    off: m,
    on: p,
    emit: h,
    plugins: fe,
    previousScrollSnap: Y,
    reInit: v,
    rootNode: re,
    scrollNext: M,
    scrollPrev: V,
    scrollProgress: ne,
    scrollSnapList: W,
    scrollTo: D,
    selectedScrollSnap: me,
    slideNodes: Ne,
    slidesInView: ue,
    slidesNotInView: ye
  };
  return F(t, n), setTimeout(() => c.emit("init"), 0), ae;
}
ri.globalOptions = void 0;
function Jd(e = {}, t = []) {
  const n = Z(e), r = Z(t), [o, a] = q(), [s, i] = q(), c = ge(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Q(() => {
    if (G3() && s) {
      ri.globalOptions = Jd.globalOptions;
      const d = ri(s, n.current, r.current);
      return a(d), () => d.destroy();
    } else
      a(void 0);
  }, [s, a]), Q(() => {
    Yd(n.current, e) || (n.current = e, c());
  }, [e, c]), Q(() => {
    Y3(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
Jd.globalOptions = void 0;
const Fb = _.createContext(null);
function Bi() {
  const e = _.useContext(Fb);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const SM = _.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, d] = Jd(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [u, f] = _.useState(!1), [p, m] = _.useState(!1), h = _.useCallback((x) => {
      x && (f(x.canScrollPrev()), m(x.canScrollNext()));
    }, []), v = _.useCallback(() => {
      d == null || d.scrollPrev();
    }, [d]), g = _.useCallback(() => {
      d == null || d.scrollNext();
    }, [d]), b = _.useCallback(
      (x) => {
        x.key === "ArrowLeft" ? (x.preventDefault(), v()) : x.key === "ArrowRight" && (x.preventDefault(), g());
      },
      [v, g]
    );
    return _.useEffect(() => {
      !d || !n || n(d);
    }, [d, n]), _.useEffect(() => {
      if (d)
        return h(d), d.on("reInit", h), d.on("select", h), () => {
          d == null || d.off("select", h);
        };
    }, [d, h]), /* @__PURE__ */ l.jsx(
      Fb.Provider,
      {
        value: {
          carouselRef: c,
          api: d,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: g,
          canScrollPrev: u,
          canScrollNext: p
        },
        children: /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: i,
            onKeyDownCapture: b,
            className: T("relative", o),
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
SM.displayName = "Carousel";
const NM = _.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = Bi();
  return /* @__PURE__ */ l.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      className: T(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
NM.displayName = "CarouselContent";
const EM = _.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = Bi();
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: T(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
EM.displayName = "CarouselItem";
const PM = _.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = Bi();
  return /* @__PURE__ */ l.jsxs(
    ze,
    {
      ref: o,
      variant: t,
      size: n,
      className: T(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(nx, { className: "h-4 w-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
PM.displayName = "CarouselPrevious";
const kM = _.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = Bi();
  return /* @__PURE__ */ l.jsxs(
    ze,
    {
      ref: o,
      variant: t,
      size: n,
      className: T(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(rx, { className: "h-4 w-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
kM.displayName = "CarouselNext";
var Vb = z.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
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
}, direction: "bottom" }), eu = () => z.useContext(Vb);
function jM(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
jM(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var MM = typeof window < "u" ? ka : Q;
function vl(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function TM() {
  return tu(/^Mac/);
}
function OM() {
  return tu(/^iPhone/);
}
function DM() {
  return tu(/^iPad/) || TM() && navigator.maxTouchPoints > 1;
}
function zb() {
  return OM() || DM();
}
function tu(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var Pc = typeof document < "u" && window.visualViewport;
function Bf(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Bb(e) {
  for (Bf(e) && (e = e.parentElement); e && !Bf(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var RM = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), hs = 0, kc;
function AM(e = {}) {
  let { isDisabled: t } = e;
  MM(() => {
    if (!t)
      return hs++, hs === 1 && (zb() ? kc = LM() : kc = IM()), () => {
        hs--, hs === 0 && kc();
      };
  }, [t]);
}
function IM() {
  return vl(Wb(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function LM() {
  let e, t = 0, n = (f) => {
    e = Bb(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let p = f.changedTouches[0].pageY, m = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((m <= 0 && p > t || m >= h && p < t) && f.preventDefault(), t = p);
  }, o = (f) => {
    let p = f.target;
    gl(p) && p !== document.activeElement && (f.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (f) => {
    let p = f.target;
    gl(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", Pc && (Pc.height < window.innerHeight ? requestAnimationFrame(() => {
        Wf(p);
      }) : Pc.addEventListener("resize", () => Wf(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, d = vl(Wb(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let u = vl(Ko(document, "touchstart", n, { passive: !1, capture: !0 }), Ko(document, "touchmove", r, { passive: !1, capture: !0 }), Ko(document, "touchend", o, { passive: !1, capture: !0 }), Ko(document, "focus", a, !0), Ko(window, "scroll", s));
  return () => {
    d(), u(), window.scrollTo(i, c);
  };
}
function Wb(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Ko(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Wf(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Bb(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function gl(e) {
  return e instanceof HTMLInputElement && !RM.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function FM(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function VM(...e) {
  return (t) => e.forEach((n) => FM(n, t));
}
function Hb(...e) {
  return _.useCallback(VM(...e), e);
}
var rr = null;
function zM({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o }) {
  let [a, s] = z.useState(typeof window < "u" ? window.location.href : ""), i = z.useRef(0), c = z.useCallback(() => {
    if (rr === null && e) {
      rr = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: u, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-i.current}px`, document.body.style.left = `${-u}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let p = f - window.innerHeight;
        p && i.current >= f && (document.body.style.top = `${-(i.current + p)}px`);
      }), 300);
    }
  }, [e]), d = z.useCallback(() => {
    if (rr !== null) {
      let u = -parseInt(document.body.style.top, 10), f = -parseInt(document.body.style.left, 10);
      document.body.style.position = rr.position, document.body.style.top = rr.top, document.body.style.left = rr.left, document.body.style.height = rr.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (o && a !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(f, u);
      }), rr = null;
    }
  }, [a]);
  return z.useEffect(() => {
    function u() {
      i.current = window.scrollY;
    }
    return u(), window.addEventListener("scroll", u), () => {
      window.removeEventListener("scroll", u);
    };
  }, []), z.useEffect(() => {
    n || !r || (e ? (c(), t || setTimeout(() => {
      d();
    }, 500)) : d());
  }, [e, r, a, t, n, c, d]), { restorePositionSetting: d };
}
var Ub = /* @__PURE__ */ new WeakMap();
function ot(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && Ub.set(e, r);
}
function vs(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = Ub.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
var bt = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function gs(e, t) {
  let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[bt(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[bt(t) ? 5 : 4]) : null);
}
function BM(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var tt = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, Kb = 0.4;
function Gb(e) {
  let t = z.useRef(e);
  return z.useEffect(() => {
    t.current = e;
  }), z.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function WM({ defaultProp: e, onChange: t }) {
  let n = z.useState(e), [r] = n, o = z.useRef(r), a = Gb(t);
  return z.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function HM({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = WM({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = Gb(n), c = z.useCallback((d) => {
    if (a) {
      let u = typeof d == "function" ? d(e) : d;
      u !== e && i(u);
    } else
      o(d);
  }, [a, e, o, i]);
  return [s, c];
}
function UM({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s, direction: i = "bottom" }) {
  let [c, d] = HM({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), u = z.useMemo(() => c === (n == null ? void 0 : n[n.length - 1]) || null, [n, c]), f = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === c || !n, p = z.useMemo(() => n == null ? void 0 : n.findIndex((y) => y === c), [n, c]), m = z.useMemo(() => {
    var y;
    return (y = n == null ? void 0 : n.map(($) => {
      let C = typeof window < "u", P = typeof $ == "string", S = 0;
      if (P && (S = parseInt($, 10)), bt(i)) {
        let O = P ? S : C ? $ * window.innerHeight : 0;
        return C ? i === "bottom" ? window.innerHeight - O : -window.innerHeight + O : O;
      }
      let N = P ? S : C ? $ * window.innerWidth : 0;
      return C ? i === "right" ? window.innerWidth - N : -window.innerWidth + N : N;
    })) != null ? y : [];
  }, [n]), h = z.useMemo(() => p !== null ? m == null ? void 0 : m[p] : null, [m, p]), v = z.useCallback((y) => {
    var $;
    let C = ($ = m == null ? void 0 : m.findIndex((P) => P === y)) != null ? $ : null;
    s(C), ot(r.current, { transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`, transform: bt(i) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)` }), m && C !== m.length - 1 && C !== a ? ot(o.current, { transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`, opacity: "0" }) : ot(o.current, { transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`, opacity: "1" }), d(C !== null ? n == null ? void 0 : n[C] : null);
  }, [r.current, n, m, a, o, d]);
  z.useEffect(() => {
    var y;
    if (e) {
      let $ = (y = n == null ? void 0 : n.findIndex((C) => C === e)) != null ? y : -1;
      m && $ !== -1 && typeof m[$] == "number" && v(m[$]);
    }
  }, [e, n, m, v]);
  function g({ draggedDistance: y, closeDrawer: $, velocity: C, dismissible: P }) {
    if (a === void 0)
      return;
    let S = i === "bottom" || i === "right" ? (h ?? 0) - y : (h ?? 0) + y, N = p === a - 1, O = p === 0, F = y > 0;
    if (N && ot(o.current, { transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})` }), C > 2 && !F) {
      P ? $() : v(m[0]);
      return;
    }
    if (C > 2 && F && m && n) {
      v(m[n.length - 1]);
      return;
    }
    let G = m == null ? void 0 : m.reduce((B, D) => typeof B != "number" || typeof D != "number" ? B : Math.abs(D - S) < Math.abs(B - S) ? D : B), A = bt(i) ? window.innerHeight : window.innerWidth;
    if (C > Kb && Math.abs(y) < A * 0.4) {
      let B = F ? 1 : -1;
      if (B > 0 && u) {
        v(m[n.length - 1]);
        return;
      }
      if (O && B < 0 && P && $(), p === null)
        return;
      v(m[p + B]);
      return;
    }
    v(G);
  }
  function b({ draggedDistance: y }) {
    if (h === null)
      return;
    let $ = i === "bottom" || i === "right" ? h - y : h + y;
    (i === "bottom" || i === "right") && $ < m[m.length - 1] || (i === "top" || i === "left") && $ > m[m.length - 1] || ot(r.current, { transform: bt(i) ? `translate3d(0, ${$}px, 0)` : `translate3d(${$}px, 0, 0)` });
  }
  function x(y, $) {
    if (!n || typeof p != "number" || !m || a === void 0)
      return null;
    let C = p === a - 1;
    if (p >= a && $)
      return 0;
    if (C && !$)
      return 1;
    if (!f && !C)
      return null;
    let P = C ? p + 1 : p - 1, S = C ? m[P] - m[P - 1] : m[P + 1] - m[P], N = y / Math.abs(S);
    return C ? 1 - N : N;
  }
  return { isLastSnapPoint: u, activeSnapPoint: c, shouldFade: f, getPercentageDragged: x, setActiveSnapPoint: d, activeSnapPointIndex: p, onRelease: g, onDrag: b, snapPointsOffset: m };
}
var KM = 0.25, GM = 100, Hf = 8, _r = 16, Uf = 26, Kf = "vaul-dragging";
function Yb({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i = !1, closeThreshold: c = KM, scrollLockTimeout: d = GM, dismissible: u = !0, fadeFromIndex: f = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: h, modal: v = !0, onClose: g, direction: b = "bottom", preventScrollRestoration: x = !0 }) {
  var y;
  let [$ = !1, C] = z.useState(!1), [P, S] = z.useState(!1), [N, O] = z.useState(!1), [F, G] = z.useState(!1), [A, B] = z.useState(!1), [D, M] = z.useState(!1), V = z.useRef(null), R = z.useRef(null), U = z.useRef(null), W = z.useRef(null), ne = z.useRef(null), me = z.useRef(!1), Y = z.useRef(null), ue = z.useRef(0), ye = z.useRef(!1), fe = z.useRef(0), J = z.useRef(null), re = z.useRef(((y = J.current) == null ? void 0 : y.getBoundingClientRect().height) || 0), he = z.useRef(0), Ne = z.useCallback((_e) => {
    s && _e === $e.length - 1 && (R.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: ae, activeSnapPointIndex: de, setActiveSnapPoint: H, onRelease: te, snapPointsOffset: $e, onDrag: Pe, shouldFade: Ie, getPercentageDragged: ke } = UM({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: m, drawerRef: J, fadeFromIndex: f, overlayRef: V, onSnapPointChange: Ne, direction: b });
  AM({ isDisabled: !$ || A || !v || D || !P });
  let { restorePositionSetting: E } = zM({ isOpen: $, modal: v, nested: i, hasBeenOpened: P, preventScrollRestoration: x });
  function L() {
    return (window.innerWidth - Uf) / window.innerWidth;
  }
  function K(_e) {
    var Ce;
    !u && !s || J.current && !J.current.contains(_e.target) || (re.current = ((Ce = J.current) == null ? void 0 : Ce.getBoundingClientRect().height) || 0, B(!0), U.current = /* @__PURE__ */ new Date(), zb() && window.addEventListener("touchend", () => me.current = !1, { once: !0 }), _e.target.setPointerCapture(_e.pointerId), ue.current = bt(b) ? _e.screenY : _e.screenX);
  }
  function ce(_e, Ce) {
    var Ve;
    let Le = _e, Ze = (Ve = window.getSelection()) == null ? void 0 : Ve.toString(), Je = J.current ? gs(J.current, b) : null, vt = /* @__PURE__ */ new Date();
    if (Le.hasAttribute("data-vaul-no-drag"))
      return !1;
    if (b === "right" || b === "left")
      return !0;
    if (R.current && vt.getTime() - R.current.getTime() < 500)
      return !1;
    if (Je !== null && (b === "bottom" ? Je > 0 : Je < 0))
      return !0;
    if (Ze && Ze.length > 0)
      return !1;
    if (ne.current && vt.getTime() - ne.current.getTime() < d && Je === 0 || Ce)
      return ne.current = vt, !1;
    for (; Le; ) {
      if (Le.scrollHeight > Le.clientHeight) {
        if (Le.scrollTop !== 0)
          return ne.current = /* @__PURE__ */ new Date(), !1;
        if (Le.getAttribute("role") === "dialog")
          return !0;
      }
      Le = Le.parentNode;
    }
    return !0;
  }
  function ie(_e) {
    if (J.current && A) {
      let Ce = b === "bottom" || b === "right" ? 1 : -1, Ve = (ue.current - (bt(b) ? _e.screenY : _e.screenX)) * Ce, Le = Ve > 0;
      if (s && de === 0 && !u || !me.current && !ce(_e.target, Le))
        return;
      if (J.current.classList.add(Kf), me.current = !0, ot(J.current, { transition: "none" }), ot(V.current, { transition: "none" }), s && Pe({ draggedDistance: Ve }), Le && !s) {
        let _t = BM(Ve), xn = Math.min(_t * -1, 0) * Ce;
        ot(J.current, { transform: bt(b) ? `translate3d(0, ${xn}px, 0)` : `translate3d(${xn}px, 0, 0)` });
        return;
      }
      let Ze = Math.abs(Ve), Je = document.querySelector("[vaul-drawer-wrapper]"), vt = Ze / re.current, Qn = ke(Ze, Le);
      Qn !== null && (vt = Qn);
      let Jt = 1 - vt;
      if ((Ie || f && de === f - 1) && (o == null || o(_e, vt), ot(V.current, { opacity: `${Jt}`, transition: "none" }, !0)), Je && V.current && r) {
        let _t = Math.min(L() + vt * (1 - L()), 1), xn = 8 - vt * 8, Dn = Math.max(0, 14 - vt * 14);
        ot(Je, { borderRadius: `${xn}px`, transform: bt(b) ? `scale(${_t}) translate3d(0, ${Dn}px, 0)` : `scale(${_t}) translate3d(${Dn}px, 0, 0)`, transition: "none" }, !0);
      }
      if (!s) {
        let _t = Ze * Ce;
        ot(J.current, { transform: bt(b) ? `translate3d(0, ${_t}px, 0)` : `translate3d(${_t}px, 0, 0)` });
      }
    }
  }
  z.useEffect(() => () => {
    Ke(!1), E();
  }, []), z.useEffect(() => {
    var _e;
    function Ce() {
      var Ve;
      if (!J.current)
        return;
      let Le = document.activeElement;
      if (gl(Le) || ye.current) {
        let Ze = ((Ve = window.visualViewport) == null ? void 0 : Ve.height) || 0, Je = window.innerHeight - Ze, vt = J.current.getBoundingClientRect().height || 0;
        he.current || (he.current = vt);
        let Qn = J.current.getBoundingClientRect().top;
        if (Math.abs(fe.current - Je) > 60 && (ye.current = !ye.current), s && s.length > 0 && $e && de) {
          let Jt = $e[de] || 0;
          Je += Jt;
        }
        if (fe.current = Je, vt > Ze || ye.current) {
          let Jt = J.current.getBoundingClientRect().height, _t = Jt;
          Jt > Ze && (_t = Ze - Uf), h ? J.current.style.height = `${Jt - Math.max(Je, 0)}px` : J.current.style.height = `${Math.max(_t, Ze - Qn)}px`;
        } else
          J.current.style.height = `${he.current}px`;
        s && s.length > 0 && !ye.current ? J.current.style.bottom = "0px" : J.current.style.bottom = `${Math.max(Je, 0)}px`;
      }
    }
    return (_e = window.visualViewport) == null || _e.addEventListener("resize", Ce), () => {
      var Ve;
      return (Ve = window.visualViewport) == null ? void 0 : Ve.removeEventListener("resize", Ce);
    };
  }, [de, s, $e]);
  function ee() {
    J.current && (g == null || g(), ot(J.current, { transform: bt(b) ? `translate3d(0, ${b === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${b === "right" ? "100%" : "-100%"}, 0, 0)`, transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})` }), ot(V.current, { opacity: "0", transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})` }), Ke(!1), setTimeout(() => {
      O(!1), C(!1);
    }, 300), setTimeout(() => {
      s && H(s[0]);
    }, tt.DURATION * 1e3));
  }
  z.useEffect(() => {
    if (!$ && r) {
      let _e = setTimeout(() => {
        vs(document.body);
      }, 200);
      return () => clearTimeout(_e);
    }
  }, [$, r]), z.useEffect(() => {
    e ? (C(!0), S(!0)) : ee();
  }, [e]), z.useEffect(() => {
    F && (t == null || t($));
  }, [$]), z.useEffect(() => {
    G(!0);
  }, []);
  function xe() {
    if (!J.current)
      return;
    let _e = document.querySelector("[vaul-drawer-wrapper]"), Ce = gs(J.current, b);
    ot(J.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})` }), ot(V.current, { transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`, opacity: "1" }), r && Ce && Ce > 0 && $ && ot(_e, { borderRadius: `${Hf}px`, overflow: "hidden", ...bt(b) ? { transform: `scale(${L()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${L()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${tt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${tt.EASE.join(",")})` }, !0);
  }
  function De(_e) {
    var Ce;
    if (!A || !J.current)
      return;
    J.current.classList.remove(Kf), me.current = !1, B(!1), W.current = /* @__PURE__ */ new Date();
    let Ve = gs(J.current, b);
    if (!ce(_e.target, !1) || !Ve || Number.isNaN(Ve) || U.current === null)
      return;
    let Le = W.current.getTime() - U.current.getTime(), Ze = ue.current - (bt(b) ? _e.screenY : _e.screenX), Je = Math.abs(Ze) / Le;
    if (Je > 0.05 && (M(!0), setTimeout(() => {
      M(!1);
    }, 200)), s) {
      te({ draggedDistance: Ze * (b === "bottom" || b === "right" ? 1 : -1), closeDrawer: ee, velocity: Je, dismissible: u }), a == null || a(_e, !0);
      return;
    }
    if (b === "bottom" || b === "right" ? Ze > 0 : Ze < 0) {
      xe(), a == null || a(_e, !0);
      return;
    }
    if (Je > Kb) {
      ee(), a == null || a(_e, !1);
      return;
    }
    let vt = Math.min((Ce = J.current.getBoundingClientRect().height) != null ? Ce : 0, window.innerHeight);
    if (Ve >= vt * c) {
      ee(), a == null || a(_e, !1);
      return;
    }
    a == null || a(_e, !0), xe();
  }
  z.useEffect(() => {
    $ && (ot(document.documentElement, { scrollBehavior: "auto" }), R.current = /* @__PURE__ */ new Date(), Ke(!0));
  }, [$]), z.useEffect(() => {
    var _e;
    if (J.current && N) {
      let Ce = (_e = J == null ? void 0 : J.current) == null ? void 0 : _e.querySelectorAll("*");
      Ce == null || Ce.forEach((Ve) => {
        let Le = Ve;
        (Le.scrollHeight > Le.clientHeight || Le.scrollWidth > Le.clientWidth) && Le.classList.add("vaul-scrollable");
      });
    }
  }, [N]);
  function Ke(_e) {
    let Ce = document.querySelector("[vaul-drawer-wrapper]");
    !Ce || !r || (_e ? (ot(document.body, { background: document.body.style.backgroundColor || document.body.style.background }), ot(document.body, { background: "black" }, !0), ot(Ce, { borderRadius: `${Hf}px`, overflow: "hidden", ...bt(b) ? { transform: `scale(${L()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${L()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${tt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${tt.EASE.join(",")})` })) : (vs(Ce, "overflow"), vs(Ce, "transform"), vs(Ce, "borderRadius"), ot(Ce, { transitionProperty: "transform, border-radius", transitionDuration: `${tt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${tt.EASE.join(",")})` })));
  }
  function Qe(_e) {
    let Ce = _e ? (window.innerWidth - _r) / window.innerWidth : 1, Ve = _e ? -_r : 0;
    Y.current && window.clearTimeout(Y.current), ot(J.current, { transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`, transform: `scale(${Ce}) translate3d(0, ${Ve}px, 0)` }), !_e && J.current && (Y.current = setTimeout(() => {
      let Le = gs(J.current, b);
      ot(J.current, { transition: "none", transform: bt(b) ? `translate3d(0, ${Le}px, 0)` : `translate3d(${Le}px, 0, 0)` });
    }, 500));
  }
  function ht(_e, Ce) {
    if (Ce < 0)
      return;
    let Ve = bt(b) ? window.innerHeight : window.innerWidth, Le = (Ve - _r) / Ve, Ze = Le + Ce * (1 - Le), Je = -_r + Ce * _r;
    ot(J.current, { transform: bt(b) ? `scale(${Ze}) translate3d(0, ${Je}px, 0)` : `scale(${Ze}) translate3d(${Je}px, 0, 0)`, transition: "none" });
  }
  function Yt(_e, Ce) {
    let Ve = bt(b) ? window.innerHeight : window.innerWidth, Le = Ce ? (Ve - _r) / Ve : 1, Ze = Ce ? -_r : 0;
    Ce && ot(J.current, { transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`, transform: bt(b) ? `scale(${Le}) translate3d(0, ${Ze}px, 0)` : `scale(${Le}) translate3d(${Ze}px, 0, 0)` });
  }
  return z.createElement(Ua, { modal: v, onOpenChange: (_e) => {
    if (e !== void 0) {
      t == null || t(_e);
      return;
    }
    _e ? (S(!0), C(_e)) : ee();
  }, open: $ }, z.createElement(Vb.Provider, { value: { visible: N, activeSnapPoint: ae, snapPoints: s, setActiveSnapPoint: H, drawerRef: J, overlayRef: V, scaleBackground: Ke, onOpenChange: t, onPress: K, setVisible: O, onRelease: De, onDrag: ie, dismissible: u, isOpen: $, shouldFade: Ie, closeDrawer: ee, onNestedDrag: ht, onNestedOpenChange: Qe, onNestedRelease: Yt, keyboardIsOpen: ye, openProp: e, modal: v, snapPointsOffset: $e, direction: b } }, n));
}
var Zb = z.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = eu(), d = Hb(n, r), u = o && o.length > 0;
  return z.createElement(Gr, { onMouseUp: a, ref: d, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
Zb.displayName = "Drawer.Overlay";
var qb = z.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: d, dismissible: u, keyboardIsOpen: f, snapPointsOffset: p, visible: m, closeDrawer: h, modal: v, openProp: g, onOpenChange: b, setVisible: x, direction: y } = eu(), $ = Hb(a, s);
  return z.useEffect(() => {
    x(!0);
  }, []), z.createElement(Yr, { onOpenAutoFocus: (C) => {
    var P;
    e ? e(C) : (C.preventDefault(), (P = s.current) == null || P.focus());
  }, onPointerDown: i, onPointerDownOutside: (C) => {
    if (t == null || t(C), !v || C.defaultPrevented) {
      C.preventDefault();
      return;
    }
    f.current && (f.current = !1), C.preventDefault(), b == null || b(!1), !(!u || g !== void 0) && h();
  }, onPointerMove: d, onPointerUp: c, ref: $, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-direction": y, "vaul-drawer-visible": m ? "true" : "false" });
});
qb.displayName = "Drawer.Content";
function YM({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = eu();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return z.createElement(Yb, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var bn = { Root: Yb, NestedRoot: YM, Content: qb, Overlay: Zb, Trigger: wi, Portal: Ka, Close: Zr, Title: jo, Description: Mo };
const ZM = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ l.jsx(
  bn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
ZM.displayName = "Drawer";
const m8 = bn.Trigger, qM = bn.Portal, h8 = bn.Close, Xb = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  bn.Overlay,
  {
    ref: n,
    className: T("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
Xb.displayName = bn.Overlay.displayName;
const XM = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(qM, { children: [
  /* @__PURE__ */ l.jsx(Xb, {}),
  /* @__PURE__ */ l.jsxs(
    bn.Content,
    {
      ref: r,
      className: T(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
XM.displayName = "DrawerContent";
const QM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: T("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
QM.displayName = "DrawerHeader";
const JM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: T("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
JM.displayName = "DrawerFooter";
const e7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  bn.Title,
  {
    ref: n,
    className: T(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
e7.displayName = bn.Title.displayName;
const t7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  bn.Description,
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
t7.displayName = bn.Description.displayName;
var n7 = Object.defineProperty, r7 = Object.defineProperties, o7 = Object.getOwnPropertyDescriptors, oi = Object.getOwnPropertySymbols, Qb = Object.prototype.hasOwnProperty, Jb = Object.prototype.propertyIsEnumerable, Gf = (e, t, n) => t in e ? n7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, a7 = (e, t) => {
  for (var n in t || (t = {}))
    Qb.call(t, n) && Gf(e, n, t[n]);
  if (oi)
    for (var n of oi(t))
      Jb.call(t, n) && Gf(e, n, t[n]);
  return e;
}, s7 = (e, t) => r7(e, o7(t)), i7 = (e, t) => {
  var n = {};
  for (var r in e)
    Qb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && oi)
    for (var r of oi(e))
      t.indexOf(r) < 0 && Jb.call(e, r) && (n[r] = e[r]);
  return n;
}, c7 = "^\\d+$";
function l7(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function d7(e) {
  let t = _.useRef();
  return _.useEffect(() => {
    t.current = e;
  }), t.current;
}
var u7 = 18, e0 = 40, f7 = `${e0}px`, p7 = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function m7({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let o = _.useRef({ done: !1, refocused: !1 }), [a, s] = _.useState(!1), [i, c] = _.useState(!1), [d, u] = _.useState(!1), f = _.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && i, [a, i, n]), p = _.useCallback(() => {
    let m = e.current, h = t.current;
    if (!m || !h || d || n === "none")
      return;
    let v = m, g = v.getBoundingClientRect().left + v.offsetWidth, b = v.getBoundingClientRect().top + v.offsetHeight / 2, x = g - u7, y = b;
    if (!(document.querySelectorAll(p7).length === 0 && document.elementFromPoint(x, y) === m) && (s(!0), u(!0), !o.current.refocused && document.activeElement === h)) {
      let $ = [h.selectionStart, h.selectionEnd];
      h.blur(), h.focus(), h.setSelectionRange($[0], $[1]), o.current.refocused = !0;
    }
  }, [e, t, d, n]);
  return _.useEffect(() => {
    let m = e.current;
    if (!m || n === "none")
      return;
    function h() {
      let g = window.innerWidth - m.getBoundingClientRect().right;
      c(g >= e0);
    }
    h();
    let v = setInterval(h, 1e3);
    return () => {
      clearInterval(v);
    };
  }, [e, n]), _.useEffect(() => {
    let m = r || document.activeElement === t.current;
    if (n === "none" || !m)
      return;
    let h = setTimeout(p, 0), v = setTimeout(p, 2e3), g = setTimeout(p, 5e3), b = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(v), clearTimeout(g), clearTimeout(b);
    };
  }, [t, r, n, p]), { hasPWMBadge: a, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: f7 };
}
var t0 = _.createContext({}), n0 = _.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: s = "left", pattern: i = c7, inputMode: c = "numeric", onComplete: d, pushPasswordManagerStrategy: u = "increase-width", containerClassName: f, noScriptCSSFallback: p = h7, render: m, children: h } = n, v = i7(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]), g, b, x, y, $;
  let [C, P] = _.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), S = r ?? C, N = d7(S), O = _.useCallback((H) => {
    o == null || o(H), P(H);
  }, [o]), F = _.useMemo(() => i ? typeof i == "string" ? new RegExp(i) : i : null, [i]), G = _.useRef(null), A = _.useRef(null), B = _.useRef({ value: S, onChange: O, isIOS: typeof window < "u" && ((b = (g = window == null ? void 0 : window.CSS) == null ? void 0 : g.supports) == null ? void 0 : b.call(g, "-webkit-touch-callout", "none")) }), D = _.useRef({ prev: [(x = G.current) == null ? void 0 : x.selectionStart, (y = G.current) == null ? void 0 : y.selectionEnd, ($ = G.current) == null ? void 0 : $.selectionDirection] });
  _.useImperativeHandle(t, () => G.current, []), _.useEffect(() => {
    let H = G.current, te = A.current;
    if (!H || !te)
      return;
    B.current.value !== H.value && B.current.onChange(H.value), D.current.prev = [H.selectionStart, H.selectionEnd, H.selectionDirection];
    function $e() {
      if (document.activeElement !== H) {
        ne(null), Y(null);
        return;
      }
      let ke = H.selectionStart, E = H.selectionEnd, L = H.selectionDirection, K = H.maxLength, ce = H.value, ie = D.current.prev, ee = -1, xe = -1, De;
      if (ce.length !== 0 && ke !== null && E !== null) {
        let Yt = ke === E, _e = ke === ce.length && ce.length < K;
        if (Yt && !_e) {
          let Ce = ke;
          if (Ce === 0)
            ee = 0, xe = 1, De = "forward";
          else if (Ce === K)
            ee = Ce - 1, xe = Ce, De = "backward";
          else if (K > 1 && ce.length > 1) {
            let Ve = 0;
            if (ie[0] !== null && ie[1] !== null) {
              De = Ce < ie[1] ? "backward" : "forward";
              let Le = ie[0] === ie[1] && ie[0] < K;
              De === "backward" && !Le && (Ve = -1);
            }
            ee = Ve + Ce, xe = Ve + Ce + 1;
          }
        }
        ee !== -1 && xe !== -1 && ee !== xe && G.current.setSelectionRange(ee, xe, De);
      }
      let Ke = ee !== -1 ? ee : ke, Qe = xe !== -1 ? xe : E, ht = De ?? L;
      ne(Ke), Y(Qe), D.current.prev = [Ke, Qe, ht];
    }
    if (document.addEventListener("selectionchange", $e, { capture: !0 }), $e(), document.activeElement === H && U(!0), !document.getElementById("input-otp-style")) {
      let ke = document.createElement("style");
      if (ke.id = "input-otp-style", document.head.appendChild(ke), ke.sheet) {
        let E = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        Go(ke.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), Go(ke.sheet, `[data-input-otp]:autofill { ${E} }`), Go(ke.sheet, `[data-input-otp]:-webkit-autofill { ${E} }`), Go(ke.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Go(ke.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let Pe = () => {
      te && te.style.setProperty("--root-height", `${H.clientHeight}px`);
    };
    Pe();
    let Ie = new ResizeObserver(Pe);
    return Ie.observe(H), () => {
      document.removeEventListener("selectionchange", $e, { capture: !0 }), Ie.disconnect();
    };
  }, []);
  let [M, V] = _.useState(!1), [R, U] = _.useState(!1), [W, ne] = _.useState(null), [me, Y] = _.useState(null);
  _.useEffect(() => {
    l7(() => {
      var H, te, $e, Pe;
      (H = G.current) == null || H.dispatchEvent(new Event("input"));
      let Ie = (te = G.current) == null ? void 0 : te.selectionStart, ke = ($e = G.current) == null ? void 0 : $e.selectionEnd, E = (Pe = G.current) == null ? void 0 : Pe.selectionDirection;
      Ie !== null && ke !== null && (ne(Ie), Y(ke), D.current.prev = [Ie, ke, E]);
    });
  }, [S, R]), _.useEffect(() => {
    N !== void 0 && S !== N && N.length < a && S.length === a && (d == null || d(S));
  }, [a, d, N, S]);
  let ue = m7({ containerRef: A, inputRef: G, pushPasswordManagerStrategy: u, isFocused: R }), ye = _.useCallback((H) => {
    let te = H.currentTarget.value.slice(0, a);
    if (te.length > 0 && F && !F.test(te)) {
      H.preventDefault();
      return;
    }
    typeof N == "string" && te.length < N.length && document.dispatchEvent(new Event("selectionchange")), O(te);
  }, [a, O, N, F]), fe = _.useCallback(() => {
    var H;
    if (G.current) {
      let te = Math.min(G.current.value.length, a - 1), $e = G.current.value.length;
      (H = G.current) == null || H.setSelectionRange(te, $e), ne(te), Y($e);
    }
    U(!0);
  }, [a]), J = _.useCallback((H) => {
    var te, $e;
    let Pe = G.current;
    if (!B.current.isIOS || !H.clipboardData || !Pe)
      return;
    let Ie = H.clipboardData.getData("text/plain");
    H.preventDefault();
    let ke = (te = G.current) == null ? void 0 : te.selectionStart, E = ($e = G.current) == null ? void 0 : $e.selectionEnd, L = (ke !== E ? S.slice(0, ke) + Ie + S.slice(E) : S.slice(0, ke) + Ie + S.slice(ke)).slice(0, a);
    if (L.length > 0 && F && !F.test(L))
      return;
    Pe.value = L, O(L);
    let K = Math.min(L.length, a - 1), ce = L.length;
    Pe.setSelectionRange(K, ce), ne(K), Y(ce);
  }, [a, O, F, S]), re = _.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), he = _.useMemo(() => ({ position: "absolute", inset: 0, width: ue.willPushPWMBadge ? `calc(100% + ${ue.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: ue.willPushPWMBadge ? `inset(0 ${ue.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: s, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [ue.PWM_BADGE_SPACE_WIDTH, ue.willPushPWMBadge, s]), Ne = _.useMemo(() => _.createElement("input", s7(a7({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-mss": W, "data-input-otp-mse": me, inputMode: c, pattern: F == null ? void 0 : F.source, style: he, maxLength: a, value: S, ref: G, onPaste: (H) => {
    var te;
    J(H), (te = v.onPaste) == null || te.call(v, H);
  }, onChange: ye, onMouseOver: (H) => {
    var te;
    V(!0), (te = v.onMouseOver) == null || te.call(v, H);
  }, onMouseLeave: (H) => {
    var te;
    V(!1), (te = v.onMouseLeave) == null || te.call(v, H);
  }, onFocus: (H) => {
    var te;
    fe(), (te = v.onFocus) == null || te.call(v, H);
  }, onBlur: (H) => {
    var te;
    U(!1), (te = v.onBlur) == null || te.call(v, H);
  } })), [ye, fe, J, c, he, a, me, W, v, F == null ? void 0 : F.source, S]), ae = _.useMemo(() => ({ slots: Array.from({ length: a }).map((H, te) => {
    let $e = R && W !== null && me !== null && (W === me && te === W || te >= W && te < me), Pe = S[te] !== void 0 ? S[te] : null;
    return { char: Pe, isActive: $e, hasFakeCaret: $e && Pe === null };
  }), isFocused: R, isHovering: !v.disabled && M }), [R, M, a, me, W, v.disabled, S]), de = _.useMemo(() => m ? m(ae) : _.createElement(t0.Provider, { value: ae }, h), [h, ae, m]);
  return _.createElement(_.Fragment, null, p !== null && _.createElement("noscript", null, _.createElement("style", null, p)), _.createElement("div", { ref: A, "data-input-otp-container": !0, style: re, className: f }, de, _.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, Ne)));
});
n0.displayName = "Input";
function Go(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var h7 = `
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
const v7 = _.forwardRef(({ className: e, containerClassName: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  n0,
  {
    ref: r,
    containerClassName: T(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      t
    ),
    className: T("disabled:cursor-not-allowed", e),
    ...n
  }
));
v7.displayName = "InputOTP";
const g7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: T("flex items-center", e), ...t }));
g7.displayName = "InputOTPGroup";
const b7 = _.forwardRef(({ index: e, className: t, ...n }, r) => {
  const o = _.useContext(t0), { char: a, hasFakeCaret: s, isActive: i } = o.slots[e];
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: r,
      className: T(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        i && "z-10 ring-2 ring-ring ring-offset-background",
        t
      ),
      ...n,
      children: [
        a,
        s && /* @__PURE__ */ l.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ l.jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
b7.displayName = "InputOTPSlot";
const x7 = _.forwardRef(({ ...e }, t) => /* @__PURE__ */ l.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ l.jsx(ox, {}) }));
x7.displayName = "InputOTPSeparator";
const y7 = _.forwardRef(({ ...e }, t) => /* @__PURE__ */ l.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
y7.displayName = "Breadcrumb";
const w7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "ol",
  {
    ref: n,
    className: T(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
w7.displayName = "BreadcrumbList";
const $7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "li",
  {
    ref: n,
    className: T("inline-flex items-center gap-1.5", e),
    ...t
  }
));
$7.displayName = "BreadcrumbItem";
const _7 = _.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? dn : "a";
  return /* @__PURE__ */ l.jsx(
    o,
    {
      ref: r,
      className: T("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
_7.displayName = "BreadcrumbLink";
const C7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: T("font-normal text-foreground", e),
    ...t
  }
));
C7.displayName = "BreadcrumbPage";
const S7 = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ l.jsx(vr, {})
  }
);
S7.displayName = "BreadcrumbSeparator";
const N7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(ap, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
N7.displayName = "BreadcrumbElipssis";
const E7 = ({ className: e, ...t }) => /* @__PURE__ */ l.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: T("mx-auto flex w-full justify-center", e),
    ...t
  }
);
E7.displayName = "Pagination";
const P7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "ul",
  {
    ref: n,
    className: T("flex flex-row items-center gap-1", e),
    ...t
  }
));
P7.displayName = "PaginationContent";
const k7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("li", { ref: n, className: T("", e), ...t }));
k7.displayName = "PaginationItem";
const nu = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ l.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: T(
      mo({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
nu.displayName = "PaginationLink";
const j7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  nu,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: T("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(ai, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { children: "Previous" })
    ]
  }
);
j7.displayName = "PaginationPrevious";
const M7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  nu,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: T("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx("span", { children: "Next" }),
      /* @__PURE__ */ l.jsx(vr, { className: "h-4 w-4" })
    ]
  }
);
M7.displayName = "PaginationNext";
const T7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: T("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(ap, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
T7.displayName = "PaginationEllipsis";
const v8 = ({ children: e }) => /* @__PURE__ */ l.jsx("div", { className: "app-layout", children: e });
export {
  _T as Accordion,
  j5 as AccordionContent,
  P5 as AccordionItem,
  k5 as AccordionTrigger,
  yT as AlertDialog,
  t5 as AlertDialogAction,
  n5 as AlertDialogCancel,
  qE as AlertDialogContent,
  e5 as AlertDialogDescription,
  QE as AlertDialogFooter,
  XE as AlertDialogHeader,
  Cv as AlertDialogOverlay,
  ZE as AlertDialogPortal,
  JE as AlertDialogTitle,
  wT as AlertDialogTrigger,
  v8 as AppLayout,
  mT as AspectRatio,
  co as Avatar,
  lo as AvatarFallback,
  kr as AvatarImage,
  Tt as Badge,
  l8 as BottomNavigation,
  y7 as Breadcrumb,
  N7 as BreadcrumbEllipsis,
  $7 as BreadcrumbItem,
  _7 as BreadcrumbLink,
  w7 as BreadcrumbList,
  C7 as BreadcrumbPage,
  S7 as BreadcrumbSeparator,
  ze as Button,
  Fo as CI_TYPES,
  Y1 as Calendar,
  Eh as Card,
  VS as CardContent,
  FS as CardDescription,
  zS as CardFooter,
  IS as CardHeader,
  LS as CardTitle,
  SM as Carousel,
  NM as CarouselContent,
  EM as CarouselItem,
  kM as CarouselNext,
  PM as CarouselPrevious,
  Mh as Checkbox,
  o8 as CodeVerification,
  CT as Collapsible,
  NT as CollapsibleContent,
  ST as CollapsibleTrigger,
  _3 as ComboBox,
  c8 as ComboxCheckbox,
  Kn as Command,
  pT as CommandDialog,
  dr as CommandEmpty,
  mn as CommandGroup,
  lr as CommandInput,
  qt as CommandItem,
  Ro as CommandList,
  la as CommandSeparator,
  eE as CommandShortcut,
  K7 as ContextMenu,
  I2 as ContextMenuCheckboxItem,
  R2 as ContextMenuContent,
  Y7 as ContextMenuGroup,
  A2 as ContextMenuItem,
  F2 as ContextMenuLabel,
  Z7 as ContextMenuPortal,
  X7 as ContextMenuRadioGroup,
  L2 as ContextMenuRadioItem,
  V2 as ContextMenuSeparator,
  z2 as ContextMenuShortcut,
  q7 as ContextMenuSub,
  D2 as ContextMenuSubContent,
  O2 as ContextMenuSubTrigger,
  G7 as ContextMenuTrigger,
  p8 as D4TCardsList,
  Ob as D4TImage,
  t8 as D4TTable,
  ah as Dialog,
  eT as DialogClose,
  hd as DialogContent,
  jC as DialogDescription,
  PC as DialogFooter,
  EC as DialogHeader,
  sh as DialogOverlay,
  NC as DialogPortal,
  kC as DialogTitle,
  J7 as DialogTrigger,
  ZM as Drawer,
  h8 as DrawerClose,
  XM as DrawerContent,
  t7 as DrawerDescription,
  JM as DrawerFooter,
  QM as DrawerHeader,
  Xb as DrawerOverlay,
  qM as DrawerPortal,
  e7 as DrawerTitle,
  m8 as DrawerTrigger,
  iT as DropdownMenu,
  CN as DropdownMenuCheckboxItem,
  $N as DropdownMenuContent,
  lT as DropdownMenuGroup,
  _N as DropdownMenuItem,
  NN as DropdownMenuLabel,
  dT as DropdownMenuPortal,
  fT as DropdownMenuRadioGroup,
  SN as DropdownMenuRadioItem,
  EN as DropdownMenuSeparator,
  PN as DropdownMenuShortcut,
  uT as DropdownMenuSub,
  wN as DropdownMenuSubContent,
  yN as DropdownMenuSubTrigger,
  cT as DropdownMenuTrigger,
  Zm as Form,
  Ha as FormControl,
  ko as FormDescription,
  Ur as FormField,
  yr as FormItem,
  Kr as FormLabel,
  iC as FormMessage,
  i8 as GenericCombobox,
  n8 as GenericSelect,
  kT as HoverCard,
  B5 as HoverCardContent,
  jT as HoverCardTrigger,
  vd as Input,
  v7 as InputOTP,
  g7 as InputOTPGroup,
  x7 as InputOTPSeparator,
  b7 as InputOTPSlot,
  tT as InputPID,
  aa as InputUI,
  On as Label,
  MT as LoaderDots,
  mP as Menubar,
  yP as MenubarCheckboxItem,
  bP as MenubarContent,
  DT as MenubarGroup,
  xP as MenubarItem,
  $P as MenubarLabel,
  OT as MenubarMenu,
  RT as MenubarPortal,
  IT as MenubarRadioGroup,
  wP as MenubarRadioItem,
  _P as MenubarSeparator,
  CP as MenubarShortcut,
  AT as MenubarSub,
  gP as MenubarSubContent,
  vP as MenubarSubTrigger,
  hP as MenubarTrigger,
  s8 as MultipleImages,
  cb as NavLink,
  vj as NavLinkNested,
  XP as NavigationMenu,
  tk as NavigationMenuContent,
  nk as NavigationMenuIndicator,
  FT as NavigationMenuItem,
  VT as NavigationMenuLink,
  QP as NavigationMenuList,
  ek as NavigationMenuTrigger,
  bg as NavigationMenuViewport,
  Ki as PHONE_LINE_CODES,
  E7 as Pagination,
  P7 as PaginationContent,
  T7 as PaginationEllipsis,
  k7 as PaginationItem,
  nu as PaginationLink,
  M7 as PaginationNext,
  j7 as PaginationPrevious,
  Hn as Popover,
  Pn as PopoverContent,
  Un as PopoverTrigger,
  fk as Progress,
  kk as RadioGroup,
  jk as RadioGroupItem,
  wE as ScrollArea,
  fv as ScrollBar,
  yd as Select,
  Ni as SelectContent,
  DS as SelectGroup,
  Ei as SelectItem,
  RS as SelectLabel,
  AS as SelectSeparator,
  Si as SelectTrigger,
  wd as SelectValue,
  Ga as Separator,
  vT as Sheet,
  bT as SheetClose,
  CE as SheetContent,
  PE as SheetDescription,
  NE as SheetFooter,
  SE as SheetHeader,
  pv as SheetOverlay,
  $E as SheetPortal,
  EE as SheetTitle,
  gT as SheetTrigger,
  qT as Sidebar,
  XT as SidebarContent,
  hj as SidebarFooter,
  sj as SidebarHeader,
  Nt as Skeleton,
  e6 as Slider,
  $l as Spinner,
  r8 as SwatchesPicker,
  K6 as Switch,
  hv as TableBody,
  jE as TableCaption,
  Nd as TableCell,
  kE as TableFooter,
  vv as TableHead,
  mv as TableHeader,
  Mi as TableRow,
  Sd as TableUI,
  UT as Tabs,
  p6 as TabsContent,
  u6 as TabsList,
  f6 as TabsTrigger,
  rT as TextArea,
  ph as TextareaUI,
  v6 as Toggle,
  mj as ToggleTheme,
  Ir as Tooltip,
  ur as TooltipContent,
  Ar as TooltipProvider,
  Lr as TooltipTrigger,
  a8 as UploadImage,
  sw as badgeVariants,
  mo as buttonVariants,
  Ao as camelToSnake,
  T as cn,
  Es as convertBytes,
  Ui as convertHexToRGBA,
  R7 as fetcher,
  L7 as formatCI,
  tf as formatCITypes,
  B7 as formatCodePhoneLines,
  d8 as formatListPagination,
  QT as formatPagination,
  z7 as formatPhone,
  V7 as formatPhoneNumber,
  F7 as formatRIF,
  Pf as generateUUID,
  Ec as generateUUIDToList,
  I7 as getMultiOpacityColor,
  u8 as initialListPagination,
  JT as initialPagination,
  e8 as insertColumn,
  f8 as insertColumnList,
  T3 as listCamelToSnake,
  JP as navigationMenuTriggerStyle,
  A7 as simulateFetch,
  h6 as toggleVariants,
  yi as useFormField,
  Li as useSidebar
};
//# sourceMappingURL=index.es.js.map
