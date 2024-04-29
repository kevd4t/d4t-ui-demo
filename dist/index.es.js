import * as _ from "react";
import z, { useCallback as ge, forwardRef as D, Children as Tr, isValidElement as Cs, createElement as w, cloneElement as bl, Fragment as ln, createContext as zt, useContext as st, useState as q, useEffect as Q, useLayoutEffect as Ea, useRef as Y, useMemo as Gt, useReducer as xl, useImperativeHandle as d0 } from "react";
import * as u0 from "react-dom";
import Gf, { flushSync as Yf, createPortal as Zf } from "react-dom";
var $t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function f0(e) {
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
var cu;
function p0() {
  if (cu)
    return Io;
  cu = 1;
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
var lu;
function m0() {
  return lu || (lu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = z, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(k) {
      if (k === null || typeof k != "object")
        return null;
      var oe = h && k[h] || k[v];
      return typeof oe == "function" ? oe : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(k) {
      {
        for (var oe = arguments.length, be = new Array(oe > 1 ? oe - 1 : 0), De = 1; De < oe; De++)
          be[De - 1] = arguments[De];
        y("error", k, be);
      }
    }
    function y(k, oe, be) {
      {
        var De = b.ReactDebugCurrentFrame, Ye = De.getStackAddendum();
        Ye !== "" && (oe += "%s", be = be.concat([Ye]));
        var tt = be.map(function(He) {
          return String(He);
        });
        tt.unshift("Warning: " + oe), Function.prototype.apply.call(console[k], console, tt);
      }
    }
    var $ = !1, C = !1, E = !1, S = !1, N = !1, j;
    j = Symbol.for("react.module.reference");
    function V(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === r || k === a || N || k === o || k === d || k === u || S || k === m || $ || C || E || typeof k == "object" && k !== null && (k.$$typeof === p || k.$$typeof === f || k.$$typeof === s || k.$$typeof === i || k.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === j || k.getModuleId !== void 0));
    }
    function L(k, oe, be) {
      var De = k.displayName;
      if (De)
        return De;
      var Ye = oe.displayName || oe.name || "";
      return Ye !== "" ? be + "(" + Ye + ")" : be;
    }
    function B(k) {
      return k.displayName || "Context";
    }
    function Z(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
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
      if (typeof k == "object")
        switch (k.$$typeof) {
          case i:
            var oe = k;
            return B(oe) + ".Consumer";
          case s:
            var be = k;
            return B(be._context) + ".Provider";
          case c:
            return L(k, k.render, "ForwardRef");
          case f:
            var De = k.displayName || null;
            return De !== null ? De : Z(k.type) || "Memo";
          case p: {
            var Ye = k, tt = Ye._payload, He = Ye._init;
            try {
              return Z(He(tt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, O = 0, F, A, H, G, ne, me, K;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function ye() {
      {
        if (O === 0) {
          F = console.log, A = console.info, H = console.warn, G = console.error, ne = console.group, me = console.groupCollapsed, K = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        O++;
      }
    }
    function fe() {
      {
        if (O--, O === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, k, {
              value: F
            }),
            info: T({}, k, {
              value: A
            }),
            warn: T({}, k, {
              value: H
            }),
            error: T({}, k, {
              value: G
            }),
            group: T({}, k, {
              value: ne
            }),
            groupCollapsed: T({}, k, {
              value: me
            }),
            groupEnd: T({}, k, {
              value: K
            })
          });
        }
        O < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = b.ReactCurrentDispatcher, re;
    function he(k, oe, be) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Ye) {
            var De = Ye.stack.trim().match(/\n( *(at )?)/);
            re = De && De[1] || "";
          }
        return `
` + re + k;
      }
    }
    var Ne = !1, ae;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new de();
    }
    function W(k, oe) {
      if (!k || Ne)
        return "";
      {
        var be = ae.get(k);
        if (be !== void 0)
          return be;
      }
      var De;
      Ne = !0;
      var Ye = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var tt;
      tt = J.current, J.current = null, ye();
      try {
        if (oe) {
          var He = function() {
            throw Error();
          };
          if (Object.defineProperty(He.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(He, []);
            } catch (Rn) {
              De = Rn;
            }
            Reflect.construct(k, [], He);
          } else {
            try {
              He.call();
            } catch (Rn) {
              De = Rn;
            }
            k.call(He.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Rn) {
            De = Rn;
          }
          k();
        }
      } catch (Rn) {
        if (Rn && De && typeof Rn.stack == "string") {
          for (var We = Rn.stack.split(`
`), kt = De.stack.split(`
`), mt = We.length - 1, bt = kt.length - 1; mt >= 1 && bt >= 0 && We[mt] !== kt[bt]; )
            bt--;
          for (; mt >= 1 && bt >= 0; mt--, bt--)
            if (We[mt] !== kt[bt]) {
              if (mt !== 1 || bt !== 1)
                do
                  if (mt--, bt--, bt < 0 || We[mt] !== kt[bt]) {
                    var qt = `
` + We[mt].replace(" at new ", " at ");
                    return k.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", k.displayName)), typeof k == "function" && ae.set(k, qt), qt;
                  }
                while (mt >= 1 && bt >= 0);
              break;
            }
        }
      } finally {
        Ne = !1, J.current = tt, fe(), Error.prepareStackTrace = Ye;
      }
      var Jr = k ? k.displayName || k.name : "", iu = Jr ? he(Jr) : "";
      return typeof k == "function" && ae.set(k, iu), iu;
    }
    function te(k, oe, be) {
      return W(k, !1);
    }
    function $e(k) {
      var oe = k.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function ke(k, oe, be) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return W(k, $e(k));
      if (typeof k == "string")
        return he(k);
      switch (k) {
        case d:
          return he("Suspense");
        case u:
          return he("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case c:
            return te(k.render);
          case f:
            return ke(k.type, oe, be);
          case p: {
            var De = k, Ye = De._payload, tt = De._init;
            try {
              return ke(tt(Ye), oe, be);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, je = {}, P = b.ReactDebugCurrentFrame;
    function R(k) {
      if (k) {
        var oe = k._owner, be = ke(k.type, k._source, oe ? oe.type : null);
        P.setExtraStackFrame(be);
      } else
        P.setExtraStackFrame(null);
    }
    function U(k, oe, be, De, Ye) {
      {
        var tt = Function.call.bind(Le);
        for (var He in k)
          if (tt(k, He)) {
            var We = void 0;
            try {
              if (typeof k[He] != "function") {
                var kt = Error((De || "React class") + ": " + be + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kt.name = "Invariant Violation", kt;
              }
              We = k[He](oe, He, De, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (mt) {
              We = mt;
            }
            We && !(We instanceof Error) && (R(Ye), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", De || "React class", be, He, typeof We), R(null)), We instanceof Error && !(We.message in je) && (je[We.message] = !0, R(Ye), x("Failed %s type: %s", be, We.message), R(null));
          }
      }
    }
    var ce = Array.isArray;
    function ie(k) {
      return ce(k);
    }
    function ee(k) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, be = oe && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return be;
      }
    }
    function xe(k) {
      try {
        return Re(k), !1;
      } catch {
        return !0;
      }
    }
    function Re(k) {
      return "" + k;
    }
    function Ge(k) {
      if (xe(k))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ee(k)), Re(k);
    }
    var Je = b.ReactCurrentOwner, vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zt, _e, Ce;
    Ce = {};
    function ze(k) {
      if (Le.call(k, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function Fe(k) {
      if (Le.call(k, "key")) {
        var oe = Object.getOwnPropertyDescriptor(k, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function qe(k, oe) {
      if (typeof k.ref == "string" && Je.current && oe && Je.current.stateNode !== oe) {
        var be = Z(Je.current.type);
        Ce[be] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Je.current.type), k.ref), Ce[be] = !0);
      }
    }
    function et(k, oe) {
      {
        var be = function() {
          Zt || (Zt = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        be.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function gt(k, oe) {
      {
        var be = function() {
          _e || (_e = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        be.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var nr = function(k, oe, be, De, Ye, tt, He) {
      var We = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: k,
        key: oe,
        ref: be,
        props: He,
        // Record the component responsible for creating this element.
        _owner: tt
      };
      return We._store = {}, Object.defineProperty(We._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(We, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: De
      }), Object.defineProperty(We, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ye
      }), Object.freeze && (Object.freeze(We.props), Object.freeze(We)), We;
    };
    function Jt(k, oe, be, De, Ye) {
      {
        var tt, He = {}, We = null, kt = null;
        be !== void 0 && (Ge(be), We = "" + be), Fe(oe) && (Ge(oe.key), We = "" + oe.key), ze(oe) && (kt = oe.ref, qe(oe, Ye));
        for (tt in oe)
          Le.call(oe, tt) && !vt.hasOwnProperty(tt) && (He[tt] = oe[tt]);
        if (k && k.defaultProps) {
          var mt = k.defaultProps;
          for (tt in mt)
            He[tt] === void 0 && (He[tt] = mt[tt]);
        }
        if (We || kt) {
          var bt = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          We && et(He, bt), kt && gt(He, bt);
        }
        return nr(k, We, kt, Ye, De, Je.current, He);
      }
    }
    var Ct = b.ReactCurrentOwner, yn = b.ReactDebugCurrentFrame;
    function Dn(k) {
      if (k) {
        var oe = k._owner, be = ke(k.type, k._source, oe ? oe.type : null);
        yn.setExtraStackFrame(be);
      } else
        yn.setExtraStackFrame(null);
    }
    var Hi;
    Hi = !1;
    function Ui(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function nu() {
      {
        if (Ct.current) {
          var k = Z(Ct.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function n0(k) {
      return "";
    }
    var ru = {};
    function r0(k) {
      {
        var oe = nu();
        if (!oe) {
          var be = typeof k == "string" ? k : k.displayName || k.name;
          be && (oe = `

Check the top-level render call using <` + be + ">.");
        }
        return oe;
      }
    }
    function ou(k, oe) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var be = r0(oe);
        if (ru[be])
          return;
        ru[be] = !0;
        var De = "";
        k && k._owner && k._owner !== Ct.current && (De = " It was passed a child from " + Z(k._owner.type) + "."), Dn(k), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, De), Dn(null);
      }
    }
    function au(k, oe) {
      {
        if (typeof k != "object")
          return;
        if (ie(k))
          for (var be = 0; be < k.length; be++) {
            var De = k[be];
            Ui(De) && ou(De, oe);
          }
        else if (Ui(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var Ye = g(k);
          if (typeof Ye == "function" && Ye !== k.entries)
            for (var tt = Ye.call(k), He; !(He = tt.next()).done; )
              Ui(He.value) && ou(He.value, oe);
        }
      }
    }
    function o0(k) {
      {
        var oe = k.type;
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
          var De = Z(oe);
          U(be, k.props, "prop", De, k);
        } else if (oe.PropTypes !== void 0 && !Hi) {
          Hi = !0;
          var Ye = Z(oe);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ye || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function a0(k) {
      {
        for (var oe = Object.keys(k.props), be = 0; be < oe.length; be++) {
          var De = oe[be];
          if (De !== "children" && De !== "key") {
            Dn(k), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", De), Dn(null);
            break;
          }
        }
        k.ref !== null && (Dn(k), x("Invalid attribute `ref` supplied to `React.Fragment`."), Dn(null));
      }
    }
    function su(k, oe, be, De, Ye, tt) {
      {
        var He = V(k);
        if (!He) {
          var We = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (We += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kt = n0();
          kt ? We += kt : We += nu();
          var mt;
          k === null ? mt = "null" : ie(k) ? mt = "array" : k !== void 0 && k.$$typeof === t ? (mt = "<" + (Z(k.type) || "Unknown") + " />", We = " Did you accidentally export a JSX literal instead of a component?") : mt = typeof k, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", mt, We);
        }
        var bt = Jt(k, oe, be, Ye, tt);
        if (bt == null)
          return bt;
        if (He) {
          var qt = oe.children;
          if (qt !== void 0)
            if (De)
              if (ie(qt)) {
                for (var Jr = 0; Jr < qt.length; Jr++)
                  au(qt[Jr], k);
                Object.freeze && Object.freeze(qt);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              au(qt, k);
        }
        return k === r ? a0(bt) : o0(bt), bt;
      }
    }
    function s0(k, oe, be) {
      return su(k, oe, be, !0);
    }
    function i0(k, oe, be) {
      return su(k, oe, be, !1);
    }
    var c0 = i0, l0 = s0;
    Lo.Fragment = r, Lo.jsx = c0, Lo.jsxs = l0;
  }()), Lo;
}
process.env.NODE_ENV === "production" ? jc.exports = p0() : jc.exports = m0();
var l = jc.exports;
function Ee() {
  return Ee = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ee.apply(this, arguments);
}
function h0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Pa(...e) {
  return (t) => e.forEach(
    (n) => h0(n, t)
  );
}
function Pe(...e) {
  return ge(Pa(...e), e);
}
const dn = /* @__PURE__ */ D((e, t) => {
  const { children: n, ...r } = e, o = Tr.toArray(n), a = o.find(v0);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Tr.count(s) > 1 ? Tr.only(null) : /* @__PURE__ */ Cs(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(Mc, Ee({}, r, {
      ref: t
    }), /* @__PURE__ */ Cs(s) ? /* @__PURE__ */ bl(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(Mc, Ee({}, r, {
    ref: t
  }), n);
});
dn.displayName = "Slot";
const Mc = /* @__PURE__ */ D((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Cs(n) ? /* @__PURE__ */ bl(n, {
    ...g0(r, n.props),
    ref: t ? Pa(t, n.ref) : n.ref
  }) : Tr.count(n) > 1 ? Tr.only(null) : null;
});
Mc.displayName = "SlotClone";
const yl = ({ children: e }) => /* @__PURE__ */ w(ln, null, e);
function v0(e) {
  return /* @__PURE__ */ Cs(e) && e.type === yl;
}
function g0(e, t) {
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
function qf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = qf(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function b0() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = qf(e)) && (r && (r += " "), r += t);
  return r;
}
const du = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, uu = b0, Co = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return uu(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const u = n == null ? void 0 : n[d], f = a == null ? void 0 : a[d];
    if (u === null)
      return null;
    const p = du(u) || du(f);
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
  return uu(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function x7(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const y7 = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, Ki = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, w7 = (e) => {
  const t = Ki(e), n = Ki(e, 0.1), r = Ki(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, Gi = {
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
}, $7 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), _7 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), C7 = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), S7 = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, Ss = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, N7 = () => [...Gi.DIGITAL, ...Gi.MOVILNET, ...Gi.MOVISTAR], Fo = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function Xf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Xf(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function x0() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Xf(e)) && (r && (r += " "), r += t);
  return r;
}
const wl = "-";
function y0(e) {
  const t = $0(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(s) {
    const i = s.split(wl);
    return i[0] === "" && i.length !== 1 && i.shift(), Qf(i, t) || w0(s);
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
function Qf(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Qf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(wl);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}
const fu = /^\[(.+)\]$/;
function w0(e) {
  if (fu.test(e)) {
    const t = fu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function $0(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return C0(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    Tc(s, r, a, t);
  }), r;
}
function Tc(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : pu(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (_0(o)) {
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
      Tc(s, pu(t, a), n, r);
    });
  });
}
function pu(e, t) {
  let n = e;
  return t.split(wl).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function _0(e) {
  return e.isThemeGetter;
}
function C0(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
    return [n, o];
  }) : e;
}
function S0(e) {
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
const Jf = "!";
function N0(e) {
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
    const f = i.length === 0 ? s : s.substring(d), p = f.startsWith(Jf), m = p ? f.substring(1) : f, h = u && u > d ? u - d : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: h
    };
  };
}
function E0(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function P0(e) {
  return {
    cache: S0(e.cacheSize),
    splitModifiers: N0(e),
    ...y0(e)
  };
}
const k0 = /\s+/;
function j0(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(k0).map((s) => {
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
    const m = E0(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? m + Jf : m,
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
function M0() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ep(t)) && (r && (r += " "), r += n);
  return r;
}
function ep(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ep(e[r])) && (n && (n += " "), n += t);
  return n;
}
function T0(e, ...t) {
  let n, r, o, a = s;
  function s(c) {
    const d = t.reduce((u, f) => f(u), e());
    return n = P0(d), r = n.cache.get, o = n.cache.set, a = i, i(c);
  }
  function i(c) {
    const d = r(c);
    if (d)
      return d;
    const u = j0(c, n);
    return o(c, u), u;
  }
  return function() {
    return a(M0.apply(null, arguments));
  };
}
function ot(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const tp = /^\[(?:([a-z-]+):)?(.+)\]$/i, O0 = /^\d+\/\d+$/, D0 = /* @__PURE__ */ new Set(["px", "full", "screen"]), R0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, A0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, I0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, L0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, F0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function An(e) {
  return jr(e) || D0.has(e) || O0.test(e);
}
function rr(e) {
  return So(e, "length", G0);
}
function jr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Xa(e) {
  return So(e, "number", jr);
}
function Vo(e) {
  return !!e && Number.isInteger(Number(e));
}
function V0(e) {
  return e.endsWith("%") && jr(e.slice(0, -1));
}
function Ie(e) {
  return tp.test(e);
}
function or(e) {
  return R0.test(e);
}
const z0 = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function B0(e) {
  return So(e, z0, np);
}
function W0(e) {
  return So(e, "position", np);
}
const H0 = /* @__PURE__ */ new Set(["image", "url"]);
function U0(e) {
  return So(e, H0, Z0);
}
function K0(e) {
  return So(e, "", Y0);
}
function zo() {
  return !0;
}
function So(e, t, n) {
  const r = tp.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function G0(e) {
  return A0.test(e) && !I0.test(e);
}
function np() {
  return !1;
}
function Y0(e) {
  return L0.test(e);
}
function Z0(e) {
  return F0.test(e);
}
function q0() {
  const e = ot("colors"), t = ot("spacing"), n = ot("blur"), r = ot("brightness"), o = ot("borderColor"), a = ot("borderRadius"), s = ot("borderSpacing"), i = ot("borderWidth"), c = ot("contrast"), d = ot("grayscale"), u = ot("hueRotate"), f = ot("invert"), p = ot("gap"), m = ot("gradientColorStops"), h = ot("gradientColorStopPositions"), v = ot("inset"), g = ot("margin"), b = ot("opacity"), x = ot("padding"), y = ot("saturate"), $ = ot("scale"), C = ot("sepia"), E = ot("skew"), S = ot("space"), N = ot("translate"), j = () => ["auto", "contain", "none"], V = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", Ie, t], B = () => [Ie, t], Z = () => ["", An, rr], T = () => ["auto", jr, Ie], O = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], F = () => ["solid", "dashed", "dotted", "double", "none"], A = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", Ie], ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], me = () => [jr, Xa], K = () => [jr, Ie];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [zo],
      spacing: [An, rr],
      blur: ["none", "", or, Ie],
      brightness: me(),
      borderColor: [e],
      borderRadius: ["none", "", "full", or, Ie],
      borderSpacing: B(),
      borderWidth: Z(),
      contrast: me(),
      grayscale: G(),
      hueRotate: K(),
      invert: G(),
      gap: B(),
      gradientColorStops: [e],
      gradientColorStopPositions: [V0, rr],
      inset: L(),
      margin: L(),
      opacity: me(),
      padding: B(),
      saturate: me(),
      scale: me(),
      sepia: G(),
      skew: K(),
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
        aspect: ["auto", "square", "video", Ie]
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
        columns: [or]
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
        object: [...O(), Ie]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: V()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": V()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": V()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
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
        z: ["auto", Vo, Ie]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: L()
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
        flex: ["1", "auto", "initial", "none", Ie]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Vo, Ie]
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
          span: ["full", Vo, Ie]
        }, Ie]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": T()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": T()
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
          span: [Vo, Ie]
        }, Ie]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": T()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": T()
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
        "auto-cols": ["auto", "min", "max", "fr", Ie]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ie]
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
        justify: ["normal", ...H()]
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
        content: ["normal", ...H(), "baseline"]
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
        "place-content": [...H(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ie, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ie, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ie, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [or]
        }, or]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ie, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ie, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ie, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ie, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", or, rr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Xa]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ie]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", jr, Xa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", An, Ie]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ie]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ie]
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
        decoration: [...F(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", An, rr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", An, Ie]
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
        indent: B()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ie]
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
        content: ["none", Ie]
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
        bg: [...O(), W0]
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
        bg: ["auto", "cover", "contain", B0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, U0]
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
        border: [...F(), "hidden"]
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
        divide: F()
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
        outline: ["", ...F()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [An, Ie]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [An, rr]
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
        "ring-offset": [An, rr]
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
        shadow: ["", "inner", "none", or, K0]
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
        "mix-blend": [...A(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": A()
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
        "drop-shadow": ["", "none", or, Ie]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ie]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: K()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ie]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: K()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ie]
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
        rotate: [Vo, Ie]
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
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ie]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ie]
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
        "will-change": ["auto", "scroll", "contents", "transform", Ie]
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
        stroke: [An, rr, Xa]
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
const X0 = /* @__PURE__ */ T0(q0);
function M(...e) {
  return X0(x0(e));
}
const $l = ({ className: e }) => /* @__PURE__ */ l.jsx("div", { className: M(`spinner h-4 w-4 ${e}`) }), ho = Co(
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
), Be = _.forwardRef(
  ({ className: e, isLoading: t, children: n, variant: r, size: o, asChild: a = !1, ...s }, i) => {
    const c = a ? dn : "button";
    return /* @__PURE__ */ l.jsx(
      c,
      {
        className: M(ho({ variant: r, size: o, className: e })),
        ref: i,
        ...s,
        children: t ? /* @__PURE__ */ l.jsx($l, {}) : n
      }
    );
  }
);
Be.displayName = "Button";
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), rp = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var J0 = {
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
const ex = D(
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
      ...J0,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: rp("lucide", o),
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
const it = (e, t) => {
  const n = D(
    ({ className: r, ...o }, a) => w(ex, {
      ref: a,
      iconNode: t,
      className: rp(`lucide-${Q0(e)}`, r),
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
const tx = it("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = it("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = it("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = it("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oi = it("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yr = it("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mu = it("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = it("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = it("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = it("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = it("Download", [
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
const op = it("Ellipsis", [
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
const Qa = it("EyeOff", [
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
const Ja = it("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = it("ImageOff", [
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
const _l = it("ImagePlus", [
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
const ap = it("LogOut", [
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
const ox = it("PanelLeftClose", [
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
const ax = it("PanelLeftOpen", [
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
const sp = it("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = it("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = it("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = it("Trash", [
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
const sx = it("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const si = it("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Ke(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Yt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function jt(e, t) {
  const n = Ke(e);
  return isNaN(t) ? Yt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function fn(e, t) {
  const n = Ke(e);
  if (isNaN(t))
    return Yt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = Yt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const Cl = 6048e5, ix = 864e5;
let cx = {};
function ka() {
  return cx;
}
function Sn(e, t) {
  var i, c, d, u;
  const n = ka(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = Ke(e), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Ar(e) {
  return Sn(e, { weekStartsOn: 1 });
}
function lp(e) {
  const t = Ke(e), n = t.getFullYear(), r = Yt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Ar(r), a = Yt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = Ar(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function vo(e) {
  const t = Ke(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Ps(e) {
  const t = Ke(e), n = new Date(
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
function $n(e, t) {
  const n = vo(e), r = vo(t), o = +n - Ps(n), a = +r - Ps(r);
  return Math.round((o - a) / ix);
}
function lx(e) {
  const t = lp(e), n = Yt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Ar(n);
}
function Dc(e, t) {
  const n = t * 7;
  return jt(e, n);
}
function dx(e, t) {
  return fn(e, t * 12);
}
function ux(e) {
  let t;
  return e.forEach(function(n) {
    const r = Ke(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function fx(e) {
  let t;
  return e.forEach((n) => {
    const r = Ke(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Ft(e, t) {
  const n = vo(e), r = vo(t);
  return +n == +r;
}
function Sl(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function px(e) {
  if (!Sl(e) && typeof e != "number")
    return !1;
  const t = Ke(e);
  return !isNaN(Number(t));
}
function ea(e, t) {
  const n = Ke(e), r = Ke(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function mx(e, t, n) {
  const r = Sn(e, n), o = Sn(t, n), a = +r - Ps(r), s = +o - Ps(o);
  return Math.round((a - s) / Cl);
}
function Nl(e) {
  const t = Ke(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Vt(e) {
  const t = Ke(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function dp(e) {
  const t = Ke(e), n = Yt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function El(e, t) {
  var i, c, d, u;
  const n = ka(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = Ke(e), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function up(e) {
  return El(e, { weekStartsOn: 1 });
}
const hx = {
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
}, vx = (e, t, n) => {
  let r;
  const o = hx[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Zi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const gx = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, bx = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, xx = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, yx = {
  date: Zi({
    formats: gx,
    defaultWidth: "full"
  }),
  time: Zi({
    formats: bx,
    defaultWidth: "full"
  }),
  dateTime: Zi({
    formats: xx,
    defaultWidth: "full"
  })
}, wx = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, $x = (e, t, n, r) => wx[e];
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
const _x = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Cx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Sx = {
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
}, Nx = {
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
}, Ex = {
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
}, Px = {
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
}, kx = (e, t) => {
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
}, jx = {
  ordinalNumber: kx,
  era: Bo({
    values: _x,
    defaultWidth: "wide"
  }),
  quarter: Bo({
    values: Cx,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Bo({
    values: Sx,
    defaultWidth: "wide"
  }),
  day: Bo({
    values: Nx,
    defaultWidth: "wide"
  }),
  dayPeriod: Bo({
    values: Ex,
    defaultWidth: "wide",
    formattingValues: Px,
    defaultFormattingWidth: "wide"
  })
};
function Wo(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Tx(i, (f) => f.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Mx(i, (f) => f.test(s))
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
function Mx(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Tx(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ox(e) {
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
const Dx = /^(\d+)(th|st|nd|rd)?/i, Rx = /\d+/i, Ax = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ix = {
  any: [/^b/i, /^(a|c)/i]
}, Lx = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Fx = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Vx = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zx = {
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
}, Bx = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Wx = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Hx = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ux = {
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
}, Kx = {
  ordinalNumber: Ox({
    matchPattern: Dx,
    parsePattern: Rx,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Wo({
    matchPatterns: Ax,
    defaultMatchWidth: "wide",
    parsePatterns: Ix,
    defaultParseWidth: "any"
  }),
  quarter: Wo({
    matchPatterns: Lx,
    defaultMatchWidth: "wide",
    parsePatterns: Fx,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Wo({
    matchPatterns: Vx,
    defaultMatchWidth: "wide",
    parsePatterns: zx,
    defaultParseWidth: "any"
  }),
  day: Wo({
    matchPatterns: Bx,
    defaultMatchWidth: "wide",
    parsePatterns: Wx,
    defaultParseWidth: "any"
  }),
  dayPeriod: Wo({
    matchPatterns: Hx,
    defaultMatchWidth: "any",
    parsePatterns: Ux,
    defaultParseWidth: "any"
  })
}, fp = {
  code: "en-US",
  formatDistance: vx,
  formatLong: yx,
  formatRelative: $x,
  localize: jx,
  match: Kx,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Gx(e) {
  const t = Ke(e);
  return $n(t, dp(t)) + 1;
}
function pp(e) {
  const t = Ke(e), n = +Ar(t) - +lx(t);
  return Math.round(n / Cl) + 1;
}
function mp(e, t) {
  var u, f, p, m;
  const n = Ke(e), r = n.getFullYear(), o = ka(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((m = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = Yt(e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = Sn(s, t), c = Yt(e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const d = Sn(c, t);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= d.getTime() ? r : r - 1;
}
function Yx(e, t) {
  var i, c, d, u;
  const n = ka(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = mp(e, t), a = Yt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Sn(a, t);
}
function hp(e, t) {
  const n = Ke(e), r = +Sn(n, t) - +Yx(n, t);
  return Math.round(r / Cl) + 1;
}
function Xe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const ar = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Xe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Xe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Xe(e.getDate(), t.length);
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
    return Xe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Xe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Xe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Xe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Xe(o, t.length);
  }
}, eo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, hu = {
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
    return ar.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = mp(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return Xe(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Xe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = lp(e);
    return Xe(n, t.length);
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
    return Xe(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Xe(r, 2);
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
        return Xe(r, 2);
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
        return ar.M(e, t);
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
        return Xe(r + 1, 2);
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
    const o = hp(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Xe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = pp(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Xe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : ar.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Gx(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Xe(r, t.length);
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
        return Xe(a, 2);
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
        return Xe(a, t.length);
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
        return Xe(o, t.length);
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
    switch (r === 12 ? o = eo.noon : r === 0 ? o = eo.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = eo.evening : r >= 12 ? o = eo.afternoon : r >= 4 ? o = eo.morning : o = eo.night, t) {
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
    return ar.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : ar.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Xe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Xe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : ar.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : ar.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return ar.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return gu(r);
      case "XXXX":
      case "XX":
        return Pr(r);
      case "XXXXX":
      case "XXX":
      default:
        return Pr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return gu(r);
      case "xxxx":
      case "xx":
        return Pr(r);
      case "xxxxx":
      case "xxx":
      default:
        return Pr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + vu(r, ":");
      case "OOOO":
      default:
        return "GMT" + Pr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + vu(r, ":");
      case "zzzz":
      default:
        return "GMT" + Pr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Xe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return Xe(r, t.length);
  }
};
function vu(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Xe(a, 2);
}
function gu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Xe(Math.abs(e) / 60, 2) : Pr(e, t);
}
function Pr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Xe(Math.trunc(r / 60), 2), a = Xe(r % 60, 2);
  return n + o + t + a;
}
const bu = (e, t) => {
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
}, vp = (e, t) => {
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
}, Zx = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return bu(e, t);
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
  return a.replace("{{date}}", bu(r, t)).replace("{{time}}", vp(o, t));
}, qx = {
  p: vp,
  P: Zx
}, Xx = /^D+$/, Qx = /^Y+$/, Jx = ["D", "DD", "YY", "YYYY"];
function ey(e) {
  return Xx.test(e);
}
function ty(e) {
  return Qx.test(e);
}
function ny(e, t, n) {
  const r = ry(e, t, n);
  if (console.warn(r), Jx.includes(e))
    throw new RangeError(r);
}
function ry(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const oy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ay = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, sy = /^'([^]*?)'?$/, iy = /''/g, cy = /[a-zA-Z]/;
function Wr(e, t, n) {
  var u, f, p, m, h, v, g, b;
  const r = ka(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? fp, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((m = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((b = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : b.weekStartsOn) ?? 0, i = Ke(e);
  if (!px(i))
    throw new RangeError("Invalid time value");
  let c = t.match(ay).map((x) => {
    const y = x[0];
    if (y === "p" || y === "P") {
      const $ = qx[y];
      return $(x, o.formatLong);
    }
    return x;
  }).join("").match(oy).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const y = x[0];
    if (y === "'")
      return { isToken: !1, value: ly(x) };
    if (hu[y])
      return { isToken: !0, value: x };
    if (y.match(cy))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && ty(y) || !(n != null && n.useAdditionalDayOfYearTokens) && ey(y)) && ny(y, t, String(e));
    const $ = hu[y[0]];
    return $(i, y, o.localize, d);
  }).join("");
}
function ly(e) {
  const t = e.match(sy);
  return t ? t[1].replace(iy, "'") : e;
}
function dy(e) {
  const t = Ke(e), n = t.getFullYear(), r = t.getMonth(), o = Yt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function uy(e) {
  return Math.trunc(+Ke(e) / 1e3);
}
function fy(e) {
  const t = Ke(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function py(e, t) {
  return mx(
    fy(e),
    Vt(e),
    t
  ) + 1;
}
function Rc(e, t) {
  const n = Ke(e), r = Ke(t);
  return n.getTime() > r.getTime();
}
function gp(e, t) {
  const n = Ke(e), r = Ke(t);
  return +n < +r;
}
function Pl(e, t) {
  const n = Ke(e), r = Ke(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function my(e, t) {
  const n = Ke(e), r = Ke(t);
  return n.getFullYear() === r.getFullYear();
}
function qi(e, t) {
  return jt(e, -t);
}
function Xi(e, t) {
  const n = Ke(e), r = n.getFullYear(), o = n.getDate(), a = Yt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const s = dy(a);
  return n.setMonth(t, Math.min(o, s)), n;
}
function xu(e, t) {
  const n = Ke(e);
  return isNaN(+n) ? Yt(e, NaN) : (n.setFullYear(t), n);
}
var Te = function() {
  return Te = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Te.apply(this, arguments);
};
function hy(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function bp(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function ja(e) {
  return e.mode === "multiple";
}
function Ma(e) {
  return e.mode === "range";
}
function ii(e) {
  return e.mode === "single";
}
var vy = {
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
function gy(e, t) {
  return Wr(e, "LLLL y", t);
}
function by(e, t) {
  return Wr(e, "d", t);
}
function xy(e, t) {
  return Wr(e, "LLLL", t);
}
function yy(e) {
  return "".concat(e);
}
function wy(e, t) {
  return Wr(e, "cccccc", t);
}
function $y(e, t) {
  return Wr(e, "yyyy", t);
}
var _y = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: gy,
  formatDay: by,
  formatMonthCaption: xy,
  formatWeekNumber: yy,
  formatWeekdayName: wy,
  formatYearCaption: $y
}), Cy = function(e, t, n) {
  return Wr(e, "do MMMM (EEEE)", n);
}, Sy = function() {
  return "Month: ";
}, Ny = function() {
  return "Go to next month";
}, Ey = function() {
  return "Go to previous month";
}, Py = function(e, t) {
  return Wr(e, "cccc", t);
}, ky = function(e) {
  return "Week n. ".concat(e);
}, jy = function() {
  return "Year: ";
}, My = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Cy,
  labelMonthDropdown: Sy,
  labelNext: Ny,
  labelPrevious: Ey,
  labelWeekNumber: ky,
  labelWeekday: Py,
  labelYearDropdown: jy
});
function Ty() {
  var e = "buttons", t = vy, n = fp, r = {}, o = {}, a = 1, s = {}, i = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: _y,
    labels: My,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function Oy(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Vt(r) : t && (a = new Date(t, 0, 1)), o ? s = Nl(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? vo(a) : void 0,
    toDate: s ? vo(s) : void 0
  };
}
var xp = zt(void 0);
function Dy(e) {
  var t, n = e.initialProps, r = Ty(), o = Oy(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (ii(n) || ja(n) || Ma(n)) && (c = n.onSelect);
  var d = Te(Te(Te({}, r), n), { captionLayout: i, classNames: Te(Te({}, r.classNames), n.classNames), components: Te({}, n.components), formatters: Te(Te({}, r.formatters), n.formatters), fromDate: a, labels: Te(Te({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Te(Te({}, r.modifiers), n.modifiers), modifiersClassNames: Te(Te({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Te(Te({}, r.styles), n.styles), toDate: s });
  return l.jsx(xp.Provider, { value: d, children: e.children });
}
function rt() {
  var e = st(xp);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function yp(e) {
  var t = rt(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return l.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function Ry(e) {
  return l.jsx("svg", Te({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: l.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function wp(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, d = rt(), u = (n = (t = d.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Ry;
  return l.jsxs("div", { className: i, style: c, children: [l.jsx("span", { className: d.classNames.vhidden, children: e["aria-label"] }), l.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: d.classNames.dropdown, style: d.styles.dropdown, value: o, onChange: r, children: a }), l.jsxs("div", { className: d.classNames.caption_label, style: d.styles.caption_label, "aria-hidden": "true", children: [s, l.jsx(u, { className: d.classNames.dropdown_icon, style: d.styles.dropdown_icon })] })] });
}
function Ay(e) {
  var t, n = rt(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, d = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return l.jsx(l.Fragment, {});
  if (!o)
    return l.jsx(l.Fragment, {});
  var f = [];
  if (my(r, o))
    for (var p = Vt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      f.push(Xi(p, m));
  else
    for (var p = Vt(/* @__PURE__ */ new Date()), m = 0; m <= 11; m++)
      f.push(Xi(p, m));
  var h = function(g) {
    var b = Number(g.target.value), x = Xi(Vt(e.displayMonth), b);
    e.onChange(x);
  }, v = (t = d == null ? void 0 : d.Dropdown) !== null && t !== void 0 ? t : wp;
  return l.jsx(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }), children: f.map(function(g) {
    return l.jsx("option", { value: g.getMonth(), children: i(g, { locale: s }) }, g.getMonth());
  }) });
}
function Iy(e) {
  var t, n = e.displayMonth, r = rt(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, d = r.components, u = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, p = [];
  if (!o)
    return l.jsx(l.Fragment, {});
  if (!a)
    return l.jsx(l.Fragment, {});
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    p.push(xu(dp(/* @__PURE__ */ new Date()), v));
  var g = function(x) {
    var y = xu(Vt(n), Number(x.target.value));
    e.onChange(y);
  }, b = (t = d == null ? void 0 : d.Dropdown) !== null && t !== void 0 ? t : wp;
  return l.jsx(b, { name: "years", "aria-label": f(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }), children: p.map(function(x) {
    return l.jsx("option", { value: x.getFullYear(), children: u(x, { locale: s }) }, x.getFullYear());
  }) });
}
function Ly(e, t) {
  var n = q(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Fy(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && ea(a, o) < 0) {
    var d = -1 * (c - 1);
    o = fn(a, d);
  }
  return s && ea(o, s) < 0 && (o = s), Vt(o);
}
function Vy() {
  var e = rt(), t = Fy(e), n = Ly(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Vt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function zy(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Vt(e), a = Vt(fn(o, r)), s = ea(a, o), i = [], c = 0; c < s; c++) {
    var d = fn(o, c);
    i.push(d);
  }
  return n && (i = i.reverse()), i;
}
function By(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Vt(e);
    if (!n)
      return fn(i, s);
    var c = ea(n, e);
    if (!(c < a))
      return fn(i, s);
  }
}
function Wy(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Vt(e);
    if (!n)
      return fn(i, -s);
    var c = ea(i, n);
    if (!(c <= 0))
      return fn(i, -s);
  }
}
var $p = zt(void 0);
function Hy(e) {
  var t = rt(), n = Vy(), r = n[0], o = n[1], a = zy(r, t), s = By(r, t), i = Wy(r, t), c = function(f) {
    return a.some(function(p) {
      return Pl(f, p);
    });
  }, d = function(f, p) {
    c(f) || (p && gp(f, p) ? o(fn(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: d,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return l.jsx($p.Provider, { value: u, children: e.children });
}
function Ta() {
  var e = st($p);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function yu(e) {
  var t, n = rt(), r = n.classNames, o = n.styles, a = n.components, s = Ta().goToMonth, i = function(u) {
    s(fn(u, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : yp, d = l.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return l.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [l.jsx("div", { className: r.vhidden, children: d }), l.jsx(Ay, { onChange: i, displayMonth: e.displayMonth }), l.jsx(Iy, { onChange: i, displayMonth: e.displayMonth })] });
}
function Uy(e) {
  return l.jsx("svg", Te({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Ky(e) {
  return l.jsx("svg", Te({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var ks = D(function(e, t) {
  var n = rt(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Te(Te({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), l.jsx("button", Te({}, e, { ref: t, type: "button", className: s, style: i }));
});
function Gy(e) {
  var t, n, r = rt(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, d = c.labelPrevious, u = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return l.jsx(l.Fragment, {});
  var p = d(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : Ky, b = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : Uy;
  return l.jsxs("div", { className: s.nav, style: i.nav, children: [!e.hidePrevious && l.jsx(ks, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? l.jsx(g, { className: s.nav_icon, style: i.nav_icon }) : l.jsx(b, { className: s.nav_icon, style: i.nav_icon }) }), !e.hideNext && l.jsx(ks, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? l.jsx(b, { className: s.nav_icon, style: i.nav_icon }) : l.jsx(g, { className: s.nav_icon, style: i.nav_icon }) })] });
}
function wu(e) {
  var t = rt().numberOfMonths, n = Ta(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return Pl(e.displayMonth, h);
  }), c = i === 0, d = i === s.length - 1, u = t > 1 && (c || !d), f = t > 1 && (d || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return l.jsx(Gy, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function Yy(e) {
  var t, n = rt(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : yp, d;
  return o ? d = l.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? d = l.jsx(yu, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? d = l.jsxs(l.Fragment, { children: [l.jsx(yu, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), l.jsx(wu, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : d = l.jsxs(l.Fragment, { children: [l.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l.jsx(wu, { displayMonth: e.displayMonth, id: e.id })] }), l.jsx("div", { className: r.caption, style: a.caption, children: d });
}
function Zy(e) {
  var t = rt(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? l.jsx("tfoot", { className: o, style: r.tfoot, children: l.jsx("tr", { children: l.jsx("td", { colSpan: 8, children: n }) }) }) : l.jsx(l.Fragment, {});
}
function qy(e, t, n) {
  for (var r = n ? Ar(/* @__PURE__ */ new Date()) : Sn(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = jt(r, a);
    o.push(s);
  }
  return o;
}
function Xy() {
  var e = rt(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, d = qy(o, a, s);
  return l.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && l.jsx("td", { style: n.head_cell, className: t.head_cell }), d.map(function(u, f) {
    return l.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }), children: i(u, { locale: o }) }, f);
  })] });
}
function Qy() {
  var e, t = rt(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : Xy;
  return l.jsx("thead", { style: r.head, className: n.head, children: l.jsx(a, {}) });
}
function Jy(e) {
  var t = rt(), n = t.locale, r = t.formatters.formatDay;
  return l.jsx(l.Fragment, { children: r(e.date, { locale: n }) });
}
var kl = zt(void 0);
function e1(e) {
  if (!ja(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return l.jsx(kl.Provider, { value: t, children: e.children });
  }
  return l.jsx(t1, { initialProps: e.initialProps, children: e.children });
}
function t1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(d, u, f) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, d, u, f);
    var h = !!(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = !!(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? bp([], r) : [];
        if (u.selected) {
          var b = g.findIndex(function(x) {
            return Ft(d, x);
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
      return Ft(p, d);
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
  var e = st(kl);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function n1(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Ft(o, e) && Ft(r, e) ? void 0 : Ft(o, e) ? { from: o, to: void 0 } : Ft(r, e) ? void 0 : Rc(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? Rc(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? gp(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Ml = zt(void 0);
function r1(e) {
  if (!Ma(e.initialProps)) {
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
  return l.jsx(o1, { initialProps: e.initialProps, children: e.children });
}
function o1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, d = function(m, h, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var x = n1(m, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, x, m, h, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (u.range_start = [a], s ? (u.range_end = [s], Ft(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]) : s && (u.range_start = [s], u.range_end = [s]), i && (a && !s && u.disabled.push({
    after: qi(a, i - 1),
    before: jt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: jt(a, i - 1)
  }), !a && s && u.disabled.push({
    after: qi(s, i - 1),
    before: jt(s, i - 1)
  })), c) {
    if (a && !s && (u.disabled.push({
      before: jt(a, -c + 1)
    }), u.disabled.push({
      after: jt(a, c - 1)
    })), a && s) {
      var f = $n(s, a) + 1, p = c - f;
      u.disabled.push({
        before: qi(a, p)
      }), u.disabled.push({
        after: jt(s, p)
      });
    }
    !a && s && (u.disabled.push({
      before: jt(s, -c + 1)
    }), u.disabled.push({
      after: jt(s, c - 1)
    }));
  }
  return l.jsx(Ml.Provider, { value: { selected: r, onDayClick: d, modifiers: u }, children: n });
}
function Tl() {
  var e = st(Ml);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function vs(e) {
  return Array.isArray(e) ? bp([], e) : e !== void 0 ? [e] : [];
}
function a1(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = vs(o);
  }), t;
}
var pn;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(pn || (pn = {}));
var s1 = pn.Selected, In = pn.Disabled, i1 = pn.Hidden, c1 = pn.Today, Qi = pn.RangeEnd, Ji = pn.RangeMiddle, ec = pn.RangeStart, l1 = pn.Outside;
function d1(e, t, n) {
  var r, o = (r = {}, r[s1] = vs(e.selected), r[In] = vs(e.disabled), r[i1] = vs(e.hidden), r[c1] = [e.today], r[Qi] = [], r[Ji] = [], r[ec] = [], r[l1] = [], r);
  return e.fromDate && o[In].push({ before: e.fromDate }), e.toDate && o[In].push({ after: e.toDate }), ja(e) ? o[In] = o[In].concat(t.modifiers[In]) : Ma(e) && (o[In] = o[In].concat(n.modifiers[In]), o[ec] = n.modifiers[ec], o[Ji] = n.modifiers[Ji], o[Qi] = n.modifiers[Qi]), o;
}
var _p = zt(void 0);
function u1(e) {
  var t = rt(), n = jl(), r = Tl(), o = d1(t, n, r), a = a1(t.modifiers), s = Te(Te({}, o), a);
  return l.jsx(_p.Provider, { value: s, children: e.children });
}
function Cp() {
  var e = st(_p);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function f1(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function p1(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function m1(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function h1(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function v1(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function g1(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = $n(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var s = $n(e, r) >= 0 && $n(o, e) >= 0;
    return s;
  }
  return o ? Ft(o, e) : r ? Ft(r, e) : !1;
}
function b1(e) {
  return Sl(e);
}
function x1(e) {
  return Array.isArray(e) && e.every(Sl);
}
function y1(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (b1(n))
      return Ft(e, n);
    if (x1(n))
      return n.includes(e);
    if (p1(n))
      return g1(e, n);
    if (v1(n))
      return n.dayOfWeek.includes(e.getDay());
    if (f1(n)) {
      var r = $n(n.before, e), o = $n(n.after, e), a = r > 0, s = o < 0, i = Rc(n.before, n.after);
      return i ? s && a : a || s;
    }
    return m1(n) ? $n(e, n.after) > 0 : h1(n) ? $n(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Ol(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return y1(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Pl(e, n) && (o.outside = !0), o;
}
function w1(e, t) {
  for (var n = Vt(e[0]), r = Nl(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = Ol(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = jt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = jt(s, 1);
  }
  return a || o;
}
var $1 = 365;
function Sp(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, d = o.fromDate, u = o.toDate, f = o.locale, p = {
    day: jt,
    week: Dc,
    month: fn,
    year: dx,
    startOfWeek: function(g) {
      return o.ISOWeek ? Ar(g) : Sn(g, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? up(g) : El(g, { locale: f, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && d ? m = ux([d, m]) : r === "after" && u && (m = fx([u, m]));
  var h = !0;
  if (a) {
    var v = Ol(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > $1 ? i.lastFocused : Sp(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Te(Te({}, i), { count: i.count + 1 })
  });
}
var Np = zt(void 0);
function _1(e) {
  var t = Ta(), n = Cp(), r = q(), o = r[0], a = r[1], s = q(), i = s[0], c = s[1], d = w1(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : d, f = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = rt(), h = function(g, b) {
    if (o) {
      var x = Sp(o, {
        moveBy: g,
        direction: b,
        context: m,
        modifiers: n
      });
      Ft(o, x) || (t.goToDate(x, o), p(x));
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
  return l.jsx(Np.Provider, { value: v, children: e.children });
}
function Dl() {
  var e = st(Np);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function C1(e, t) {
  var n = Cp(), r = Ol(e, n, t);
  return r;
}
var Rl = zt(void 0);
function S1(e) {
  if (!ii(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return l.jsx(Rl.Provider, { value: t, children: e.children });
  }
  return l.jsx(N1, { initialProps: e.initialProps, children: e.children });
}
function N1(e) {
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
function Ep() {
  var e = st(Rl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function E1(e, t) {
  var n = rt(), r = Ep(), o = jl(), a = Tl(), s = Dl(), i = s.focusDayAfter, c = s.focusDayBefore, d = s.focusWeekAfter, u = s.focusWeekBefore, f = s.blur, p = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, x = s.focusEndOfWeek, y = function(A) {
    var H, G, ne, me;
    ii(n) ? (H = r.onDayClick) === null || H === void 0 || H.call(r, e, t, A) : ja(n) ? (G = o.onDayClick) === null || G === void 0 || G.call(o, e, t, A) : Ma(n) ? (ne = a.onDayClick) === null || ne === void 0 || ne.call(a, e, t, A) : (me = n.onDayClick) === null || me === void 0 || me.call(n, e, t, A);
  }, $ = function(A) {
    var H;
    p(e), (H = n.onDayFocus) === null || H === void 0 || H.call(n, e, t, A);
  }, C = function(A) {
    var H;
    f(), (H = n.onDayBlur) === null || H === void 0 || H.call(n, e, t, A);
  }, E = function(A) {
    var H;
    (H = n.onDayMouseEnter) === null || H === void 0 || H.call(n, e, t, A);
  }, S = function(A) {
    var H;
    (H = n.onDayMouseLeave) === null || H === void 0 || H.call(n, e, t, A);
  }, N = function(A) {
    var H;
    (H = n.onDayPointerEnter) === null || H === void 0 || H.call(n, e, t, A);
  }, j = function(A) {
    var H;
    (H = n.onDayPointerLeave) === null || H === void 0 || H.call(n, e, t, A);
  }, V = function(A) {
    var H;
    (H = n.onDayTouchCancel) === null || H === void 0 || H.call(n, e, t, A);
  }, L = function(A) {
    var H;
    (H = n.onDayTouchEnd) === null || H === void 0 || H.call(n, e, t, A);
  }, B = function(A) {
    var H;
    (H = n.onDayTouchMove) === null || H === void 0 || H.call(n, e, t, A);
  }, Z = function(A) {
    var H;
    (H = n.onDayTouchStart) === null || H === void 0 || H.call(n, e, t, A);
  }, T = function(A) {
    var H;
    (H = n.onDayKeyUp) === null || H === void 0 || H.call(n, e, t, A);
  }, O = function(A) {
    var H;
    switch (A.key) {
      case "ArrowLeft":
        A.preventDefault(), A.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        A.preventDefault(), A.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        A.preventDefault(), A.stopPropagation(), d();
        break;
      case "ArrowUp":
        A.preventDefault(), A.stopPropagation(), u();
        break;
      case "PageUp":
        A.preventDefault(), A.stopPropagation(), A.shiftKey ? v() : m();
        break;
      case "PageDown":
        A.preventDefault(), A.stopPropagation(), A.shiftKey ? g() : h();
        break;
      case "Home":
        A.preventDefault(), A.stopPropagation(), b();
        break;
      case "End":
        A.preventDefault(), A.stopPropagation(), x();
        break;
    }
    (H = n.onDayKeyDown) === null || H === void 0 || H.call(n, e, t, A);
  }, F = {
    onClick: y,
    onFocus: $,
    onBlur: C,
    onKeyDown: O,
    onKeyUp: T,
    onMouseEnter: E,
    onMouseLeave: S,
    onPointerEnter: N,
    onPointerLeave: j,
    onTouchCancel: V,
    onTouchEnd: L,
    onTouchMove: B,
    onTouchStart: Z
  };
  return F;
}
function P1() {
  var e = rt(), t = Ep(), n = jl(), r = Tl(), o = ii(e) ? t.selected : ja(e) ? n.selected : Ma(e) ? r.selected : void 0;
  return o;
}
function k1(e) {
  return Object.values(pn).includes(e);
}
function j1(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (k1(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function M1(e, t) {
  var n = Te({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Te(Te({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function T1(e, t, n) {
  var r, o, a, s = rt(), i = Dl(), c = C1(e, t), d = E1(e, c), u = P1(), f = !!(s.onDayClick || s.mode !== "default");
  Q(function() {
    var E;
    c.outside || i.focusedDay && f && Ft(i.focusedDay, e) && ((E = n.current) === null || E === void 0 || E.focus());
  }, [
    i.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var p = j1(s, c).join(" "), m = M1(s, c), h = !!(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : Jy, g = l.jsx(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, x = i.focusTarget && Ft(i.focusTarget, e) && !c.outside, y = i.focusedDay && Ft(i.focusedDay, e), $ = Te(Te(Te({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = y || x ? 0 : -1, r)), d), C = {
    isButton: f,
    isHidden: h,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: $,
    divProps: b
  };
  return C;
}
function O1(e) {
  var t = Y(null), n = T1(e.date, e.displayMonth, t);
  return n.isHidden ? l.jsx("div", { role: "gridcell" }) : n.isButton ? l.jsx(ks, Te({ name: "day", ref: t }, n.buttonProps)) : l.jsx("div", Te({}, n.divProps));
}
function D1(e) {
  var t = e.number, n = e.dates, r = rt(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, d = r.formatters.formatWeekNumber, u = d(Number(t), { locale: i });
  if (!o)
    return l.jsx("span", { className: s.weeknumber, style: a.weeknumber, children: u });
  var f = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return l.jsx(ks, { name: "week-number", "aria-label": f, className: s.weeknumber, style: a.weeknumber, onClick: p, children: u });
}
function R1(e) {
  var t, n, r = rt(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : O1, d = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : D1, u;
  return s && (u = l.jsx("td", { className: a.cell, style: o.cell, children: l.jsx(d, { number: e.weekNumber, dates: e.dates }) })), l.jsxs("tr", { className: a.row, style: o.row, children: [u, e.dates.map(function(f) {
    return l.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: l.jsx(c, { displayMonth: e.displayMonth, date: f }) }, uy(f));
  })] });
}
function $u(e, t, n) {
  for (var r = n != null && n.ISOWeek ? up(t) : El(t, n), o = n != null && n.ISOWeek ? Ar(e) : Sn(e, n), a = $n(r, o), s = [], i = 0; i <= a; i++)
    s.push(jt(o, i));
  var c = s.reduce(function(d, u) {
    var f = n != null && n.ISOWeek ? pp(u) : hp(u, n), p = d.find(function(m) {
      return m.weekNumber === f;
    });
    return p ? (p.dates.push(u), d) : (d.push({
      weekNumber: f,
      dates: [u]
    }), d);
  }, []);
  return c;
}
function A1(e, t) {
  var n = $u(Vt(e), Nl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = py(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = Dc(a, 6 - r), i = $u(Dc(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function I1(e) {
  var t, n, r, o = rt(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, d = o.fixedWeeks, u = o.components, f = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, h = A1(e.displayMonth, {
    useFixedWeeks: !!d,
    ISOWeek: m,
    locale: a,
    weekStartsOn: f,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : Qy, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : R1, b = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : Zy;
  return l.jsxs("table", { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && l.jsx(v, {}), l.jsx("tbody", { className: s.tbody, style: i.tbody, children: h.map(function(x) {
    return l.jsx(g, { displayMonth: e.displayMonth, dates: x.dates, weekNumber: x.weekNumber }, x.weekNumber);
  }) }), l.jsx(b, { displayMonth: e.displayMonth })] });
}
function L1() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var F1 = L1() ? Ea : Q, tc = !1, V1 = 0;
function _u() {
  return "react-day-picker-".concat(++V1);
}
function z1(e) {
  var t, n = e ?? (tc ? _u() : null), r = q(n), o = r[0], a = r[1];
  return F1(function() {
    o === null && a(_u());
  }, []), Q(function() {
    tc === !1 && (tc = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function B1(e) {
  var t, n, r = rt(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = Ta().displayMonths, d = z1(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [a.month], p = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (f.push(a.caption_start), p = Te(Te({}, p), s.caption_start)), h && (f.push(a.caption_end), p = Te(Te({}, p), s.caption_end)), v && (f.push(a.caption_between), p = Te(Te({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : Yy;
  return l.jsxs("div", { className: f.join(" "), style: p, children: [l.jsx(g, { id: d, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l.jsx(I1, { id: u, "aria-labelledby": d, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function W1(e) {
  var t = rt(), n = t.classNames, r = t.styles;
  return l.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function H1(e) {
  var t, n, r = e.initialProps, o = rt(), a = Dl(), s = Ta(), i = q(!1), c = i[0], d = i[1];
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
  var f = Te(Te({}, o.styles.root), o.style), p = Object.keys(r).filter(function(h) {
    return h.startsWith("data-");
  }).reduce(function(h, v) {
    var g;
    return Te(Te({}, h), (g = {}, g[v] = r[v], g));
  }, {}), m = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : W1;
  return l.jsx("div", Te({ className: u.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: l.jsx(m, { children: s.displayMonths.map(function(h, v) {
    return l.jsx(B1, { displayIndex: v, displayMonth: h }, v);
  }) }) }));
}
function U1(e) {
  var t = e.children, n = hy(e, ["children"]);
  return l.jsx(Dy, { initialProps: n, children: l.jsx(Hy, { children: l.jsx(S1, { initialProps: n, children: l.jsx(e1, { initialProps: n, children: l.jsx(r1, { initialProps: n, children: l.jsx(u1, { children: l.jsx(_1, { children: t }) }) }) }) }) }) });
}
function K1(e) {
  return l.jsx(U1, Te({}, e, { children: l.jsx(H1, { initialProps: e }) }));
}
function G1({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ l.jsx(
    K1,
    {
      showOutsideDays: n,
      className: M("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: M(
          ho({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: M(
          ho({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ l.jsx(oi, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ l.jsx(yr, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
G1.displayName = "Calendar";
function I() {
  return I = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, I.apply(this, arguments);
}
function Y1(e, t) {
  const n = /* @__PURE__ */ zt(t);
  function r(a) {
    const { children: s, ...i } = a, c = Gt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ w(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = st(n);
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
function ct(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ zt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function d(f) {
      const { scope: p, children: m, ...h } = f, v = (p == null ? void 0 : p[e][c]) || i, g = Gt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ w(v.Provider, {
        value: g
      }, m);
    }
    function u(f, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = st(m);
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
    const a = n.map((s) => /* @__PURE__ */ zt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return Gt(
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
    Z1(o, ...t)
  ];
}
function Z1(...e) {
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
      return Gt(
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
function Qe(e) {
  const t = Y(e);
  return Q(() => {
    t.current = e;
  }), Gt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const _t = globalThis != null && globalThis.document ? Ea : () => {
}, q1 = [
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
], le = q1.reduce((e, t) => {
  const n = /* @__PURE__ */ D((r, o) => {
    const { asChild: a, ...s } = r, i = a ? dn : t;
    return Q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, I({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function js(e, t) {
  e && Yf(
    () => e.dispatchEvent(t)
  );
}
const Pp = "Avatar", [X1, E7] = ct(Pp), [Q1, kp] = X1(Pp), J1 = /* @__PURE__ */ D((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = q("idle");
  return /* @__PURE__ */ w(Q1, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ w(le.span, I({}, r, {
    ref: t
  })));
}), ew = "AvatarImage", tw = /* @__PURE__ */ D((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = kp(ew, n), i = ow(r), c = Qe((d) => {
    o(d), s.onImageLoadingStatusChange(d);
  });
  return _t(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ w(le.img, I({}, a, {
    ref: t,
    src: r
  })) : null;
}), nw = "AvatarFallback", rw = /* @__PURE__ */ D((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = kp(nw, n), [s, i] = q(r === void 0);
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
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ w(le.span, I({}, o, {
    ref: t
  })) : null;
});
function ow(e) {
  const [t, n] = q("idle");
  return _t(() => {
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
const jp = J1, Mp = tw, Tp = rw, lo = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  jp,
  {
    ref: n,
    className: M(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
lo.displayName = jp.displayName;
const Or = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Mp,
  {
    ref: n,
    className: M("aspect-square h-full w-full", e),
    ...t
  }
));
Or.displayName = Mp.displayName;
const uo = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Tp,
  {
    ref: n,
    className: M(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
uo.displayName = Tp.displayName;
const aw = Co(
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
function Ot({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ l.jsx("div", { className: M(aw({ variant: t }), e), ...n });
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function wr(e) {
  const t = e + "CollectionProvider", [n, r] = ct(t), [o, a] = n(t, {
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
    const { scope: v, children: g } = m, b = a(i, v), x = Pe(h, b.collectionRef);
    return /* @__PURE__ */ z.createElement(dn, {
      ref: x
    }, g);
  }), d = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ z.forwardRef((m, h) => {
    const { scope: v, children: g, ...b } = m, x = z.useRef(null), y = Pe(h, x), $ = a(d, v);
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
const sw = /* @__PURE__ */ zt(void 0);
function Mn(e) {
  const t = st(sw);
  return e || t || "ltr";
}
function iw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Qe(e);
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
const Ac = "dismissableLayer.update", cw = "dismissableLayer.pointerDownOutside", lw = "dismissableLayer.focusOutside";
let Cu;
const dw = /* @__PURE__ */ zt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Hr = /* @__PURE__ */ D((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...d } = e, u = st(dw), [f, p] = q(null), m = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = q({}), v = Pe(
    t,
    (N) => p(N)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), x = g.indexOf(b), y = f ? g.indexOf(f) : -1, $ = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= x, E = uw((N) => {
    const j = N.target, V = [
      ...u.branches
    ].some(
      (L) => L.contains(j)
    );
    !C || V || (a == null || a(N), i == null || i(N), N.defaultPrevented || c == null || c());
  }, m), S = fw((N) => {
    const j = N.target;
    [
      ...u.branches
    ].some(
      (L) => L.contains(j)
    ) || (s == null || s(N), i == null || i(N), N.defaultPrevented || c == null || c());
  }, m);
  return iw((N) => {
    y === u.layers.size - 1 && (o == null || o(N), !N.defaultPrevented && c && (N.preventDefault(), c()));
  }, m), Q(() => {
    if (f)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Cu = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Su(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Cu);
      };
  }, [
    f,
    m,
    r,
    u
  ]), Q(() => () => {
    f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Su());
  }, [
    f,
    u
  ]), Q(() => {
    const N = () => h({});
    return document.addEventListener(Ac, N), () => document.removeEventListener(Ac, N);
  }, []), /* @__PURE__ */ w(le.div, I({}, d, {
    ref: v,
    style: {
      pointerEvents: $ ? C ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: X(e.onFocusCapture, S.onFocusCapture),
    onBlurCapture: X(e.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: X(e.onPointerDownCapture, E.onPointerDownCapture)
  }));
});
function uw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Qe(e), r = Y(!1), o = Y(() => {
  });
  return Q(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let d = function() {
          Op(cw, n, c, {
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
function fw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Qe(e), r = Y(!1);
  return Q(() => {
    const o = (a) => {
      a.target && !r.current && Op(lw, n, {
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
function Su() {
  const e = new CustomEvent(Ac);
  document.dispatchEvent(e);
}
function Op(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? js(o, a) : o.dispatchEvent(a);
}
let nc = 0;
function ci() {
  Q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Nu()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Nu()), nc++, () => {
      nc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), nc--;
    };
  }, []);
}
function Nu() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const rc = "focusScope.autoFocusOnMount", oc = "focusScope.autoFocusOnUnmount", Eu = {
  bubbles: !1,
  cancelable: !0
}, li = /* @__PURE__ */ D((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = q(null), d = Qe(o), u = Qe(a), f = Y(null), p = Pe(
    t,
    (v) => c(v)
  ), m = Y({
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
        i.contains($) ? f.current = $ : cr(f.current, {
          select: !0
        });
      }, g = function(y) {
        if (m.paused || !i)
          return;
        const $ = y.relatedTarget;
        $ !== null && (i.contains($) || cr(f.current, {
          select: !0
        }));
      }, b = function(y) {
        if (document.activeElement === document.body)
          for (const C of y)
            C.removedNodes.length > 0 && cr(i);
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
      ku.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(rc, Eu);
        i.addEventListener(rc, d), i.dispatchEvent(b), b.defaultPrevented || (pw(bw(Dp(i)), {
          select: !0
        }), document.activeElement === v && cr(i));
      }
      return () => {
        i.removeEventListener(rc, d), setTimeout(() => {
          const b = new CustomEvent(oc, Eu);
          i.addEventListener(oc, u), i.dispatchEvent(b), b.defaultPrevented || cr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(oc, u), ku.remove(m);
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
      const x = v.currentTarget, [y, $] = mw(x);
      y && $ ? !v.shiftKey && b === $ ? (v.preventDefault(), n && cr(y, {
        select: !0
      })) : v.shiftKey && b === y && (v.preventDefault(), n && cr($, {
        select: !0
      })) : b === x && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ w(le.div, I({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function pw(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (cr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function mw(e) {
  const t = Dp(e), n = Pu(t, e), r = Pu(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Dp(e) {
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
function Pu(e, t) {
  for (const n of e)
    if (!hw(n, {
      upTo: t
    }))
      return n;
}
function hw(e, { upTo: t }) {
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
function vw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function cr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && vw(e) && t && e.select();
  }
}
const ku = gw();
function gw() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ju(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ju(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function ju(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function bw(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const xw = _.useId || (() => {
});
let yw = 0;
function ht(e) {
  const [t, n] = _.useState(xw());
  return _t(() => {
    n(
      (r) => r ?? String(yw++)
    );
  }, [
    e
  ]), t ? `radix-${t}` : "";
}
const ww = ["top", "right", "bottom", "left"], ur = Math.min, Ht = Math.max, Ms = Math.round, es = Math.floor, fr = (e) => ({
  x: e,
  y: e
}), $w = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, _w = {
  start: "end",
  end: "start"
};
function Ic(e, t, n) {
  return Ht(e, ur(t, n));
}
function Bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wn(e) {
  return e.split("-")[0];
}
function No(e) {
  return e.split("-")[1];
}
function Al(e) {
  return e === "x" ? "y" : "x";
}
function Il(e) {
  return e === "y" ? "height" : "width";
}
function Eo(e) {
  return ["top", "bottom"].includes(Wn(e)) ? "y" : "x";
}
function Ll(e) {
  return Al(Eo(e));
}
function Cw(e, t, n) {
  n === void 0 && (n = !1);
  const r = No(e), o = Ll(e), a = Il(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Ts(s)), [s, Ts(s)];
}
function Sw(e) {
  const t = Ts(e);
  return [Lc(e), t, Lc(t)];
}
function Lc(e) {
  return e.replace(/start|end/g, (t) => _w[t]);
}
function Nw(e, t, n) {
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
function Ew(e, t, n, r) {
  const o = No(e);
  let a = Nw(Wn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Lc)))), a;
}
function Ts(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $w[t]);
}
function Pw(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Rp(e) {
  return typeof e != "number" ? Pw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Os(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Mu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Eo(t), s = Ll(t), i = Il(s), c = Wn(t), d = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (No(t)) {
    case "start":
      m[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const kw = async (e, t, n) => {
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
  } = Mu(d, r, c), p = r, m = {}, h = 0;
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
    if (u = x ?? u, f = y ?? f, m = {
      ...m,
      [g]: {
        ...m[g],
        ...$
      }
    }, C && h <= 50) {
      h++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : C.rects), {
        x: u,
        y: f
      } = Mu(d, p, c)), v = -1;
      continue;
    }
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
  } = Bn(t, e), h = Rp(m), g = i[p ? f === "floating" ? "reference" : "floating" : f], b = Os(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: c
  })), x = f === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), $ = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Os(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Tu = (e) => ({
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
      padding: d = 0
    } = Bn(e, t) || {};
    if (c == null)
      return {};
    const u = Rp(d), f = {
      x: n,
      y: r
    }, p = Ll(o), m = Il(p), h = await s.getDimensions(c), v = p === "y", g = v ? "top" : "left", b = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", y = a.reference[m] + a.reference[p] - f[p] - a.floating[m], $ = f[p] - a.reference[p], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let E = C ? C[x] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(C))) && (E = i.floating[x] || a.floating[m]);
    const S = y / 2 - $ / 2, N = E / 2 - h[m] / 2 - 1, j = ur(u[g], N), V = ur(u[b], N), L = j, B = E - h[m] - V, Z = E / 2 - h[m] / 2 + S, T = Ic(L, Z, B), F = No(o) != null && Z != T && a.reference[m] / 2 - (Z < L ? j : V) - h[m] / 2 < 0 ? Z < L ? L - Z : B - Z : 0;
    return {
      [p]: f[p] - F,
      data: {
        [p]: T,
        centerOffset: Z - T + F
      }
    };
  }
}), jw = function(e) {
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
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...v
      } = Bn(e, t), g = Wn(r), b = Wn(s) === s, x = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), y = f || (b || !h ? [Ts(s)] : Sw(s));
      !f && m !== "none" && y.push(...Ew(s, h, m, x));
      const $ = [s, ...y], C = await ta(t, v), E = [];
      let S = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (d && E.push(C[g]), u) {
        const L = Cw(r, a, x);
        E.push(C[L[0]], C[L[1]]);
      }
      if (S = [...S, {
        placement: r,
        overflows: E
      }], !E.every((L) => L <= 0)) {
        var N, j;
        const L = (((N = o.flip) == null ? void 0 : N.index) || 0) + 1, B = $[L];
        if (B)
          return {
            data: {
              index: L,
              overflows: S
            },
            reset: {
              placement: B
            }
          };
        let Z = (j = S.filter((T) => T.overflows[0] <= 0).sort((T, O) => T.overflows[1] - O.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!Z)
          switch (p) {
            case "bestFit": {
              var V;
              const T = (V = S.map((O) => [O.placement, O.overflows.filter((F) => F > 0).reduce((F, A) => F + A, 0)]).sort((O, F) => O[1] - F[1])[0]) == null ? void 0 : V[0];
              T && (Z = T);
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
function Ou(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Du(e) {
  return ww.some((t) => e[t] >= 0);
}
const Mw = function(e) {
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
async function Tw(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Wn(n), i = No(n), c = Eo(n) === "y", d = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, f = Bn(t, e);
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
const Ow = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await Tw(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, Dw = function(e) {
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
      }, u = await ta(t, c), f = Eo(Wn(o)), p = Al(f);
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
}, Rw = function(e) {
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
      }, f = Eo(o), p = Al(f);
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
        const y = p === "y" ? "width" : "height", $ = ["top", "left"].includes(Wn(o)), C = a.reference[f] - a.floating[y] + ($ && ((b = s.offset) == null ? void 0 : b[f]) || 0) + ($ ? 0 : g.crossAxis), E = a.reference[f] + a.reference[y] + ($ ? 0 : ((x = s.offset) == null ? void 0 : x[f]) || 0) - ($ ? g.crossAxis : 0);
        h < C ? h = C : h > E && (h = E);
      }
      return {
        [p]: m,
        [f]: h
      };
    }
  };
}, Aw = function(e) {
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
      } = Bn(e, t), c = await ta(t, i), d = Wn(n), u = No(n), f = Eo(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let h, v;
      d === "top" || d === "bottom" ? (h = d, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d, h = u === "end" ? "top" : "bottom");
      const g = m - c[h], b = p - c[v], x = !t.middlewareData.shift;
      let y = g, $ = b;
      if (f) {
        const E = p - c.left - c.right;
        $ = u || x ? ur(b, E) : E;
      } else {
        const E = m - c.top - c.bottom;
        y = u || x ? ur(g, E) : E;
      }
      if (x && !u) {
        const E = Ht(c.left, 0), S = Ht(c.right, 0), N = Ht(c.top, 0), j = Ht(c.bottom, 0);
        f ? $ = p - 2 * (E !== 0 || S !== 0 ? E + S : Ht(c.left, c.right)) : y = m - 2 * (N !== 0 || j !== 0 ? N + j : Ht(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: $,
        availableHeight: y
      });
      const C = await o.getDimensions(a.floating);
      return p !== C.width || m !== C.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pr(e) {
  return Ap(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ut(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qn(e) {
  var t;
  return (t = (Ap(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ap(e) {
  return e instanceof Node || e instanceof Ut(e).Node;
}
function Hn(e) {
  return e instanceof Element || e instanceof Ut(e).Element;
}
function Nn(e) {
  return e instanceof HTMLElement || e instanceof Ut(e).HTMLElement;
}
function Ru(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ut(e).ShadowRoot;
}
function Oa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Xt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Iw(e) {
  return ["table", "td", "th"].includes(pr(e));
}
function Fl(e) {
  const t = Vl(), n = Xt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Lw(e) {
  let t = go(e);
  for (; Nn(t) && !di(t); ) {
    if (Fl(t))
      return t;
    t = go(t);
  }
  return null;
}
function Vl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function di(e) {
  return ["html", "body", "#document"].includes(pr(e));
}
function Xt(e) {
  return Ut(e).getComputedStyle(e);
}
function ui(e) {
  return Hn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function go(e) {
  if (pr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ru(e) && e.host || // Fallback.
    Qn(e)
  );
  return Ru(t) ? t.host : t;
}
function Ip(e) {
  const t = go(e);
  return di(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Nn(t) && Oa(t) ? t : Ip(t);
}
function Ds(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Ip(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ut(r);
  return o ? t.concat(a, a.visualViewport || [], Oa(r) ? r : []) : t.concat(r, Ds(r));
}
function Lp(e) {
  const t = Xt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Nn(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Ms(n) !== a || Ms(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function zl(e) {
  return Hn(e) ? e : e.contextElement;
}
function fo(e) {
  const t = zl(e);
  if (!Nn(t))
    return fr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Lp(t);
  let s = (a ? Ms(n.width) : n.width) / r, i = (a ? Ms(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Fw = /* @__PURE__ */ fr(0);
function Fp(e) {
  const t = Ut(e);
  return !Vl() || !t.visualViewport ? Fw : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Vw(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ut(e) ? !1 : t;
}
function Ir(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = zl(e);
  let s = fr(1);
  t && (r ? Hn(r) && (s = fo(r)) : s = fo(e));
  const i = Vw(a, n, r) ? Fp(a) : fr(0);
  let c = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (a) {
    const p = Ut(a), m = r && Hn(r) ? Ut(r) : r;
    let h = p.frameElement;
    for (; h && r && m !== p; ) {
      const v = fo(h), g = h.getBoundingClientRect(), b = Xt(h), x = g.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, y = g.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, d *= v.y, u *= v.x, f *= v.y, c += x, d += y, h = Ut(h).frameElement;
    }
  }
  return Os({
    width: u,
    height: f,
    x: c,
    y: d
  });
}
function zw(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Nn(n), a = Qn(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = fr(1);
  const c = fr(0);
  if ((o || !o && r !== "fixed") && ((pr(n) !== "body" || Oa(a)) && (s = ui(n)), Nn(n))) {
    const d = Ir(n);
    i = fo(n), c.x = d.x + n.clientLeft, c.y = d.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function Bw(e) {
  return Array.from(e.getClientRects());
}
function Vp(e) {
  return Ir(Qn(e)).left + ui(e).scrollLeft;
}
function Ww(e) {
  const t = Qn(e), n = ui(e), r = e.ownerDocument.body, o = Ht(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ht(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Vp(e);
  const i = -n.scrollTop;
  return Xt(r).direction === "rtl" && (s += Ht(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function Hw(e, t) {
  const n = Ut(e), r = Qn(e), o = n.visualViewport;
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
function Uw(e, t) {
  const n = Ir(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Nn(e) ? fo(e) : fr(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, d = r * a.y;
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
    r = Hw(e, n);
  else if (t === "document")
    r = Ww(Qn(e));
  else if (Hn(t))
    r = Uw(t, n);
  else {
    const o = Fp(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Os(r);
}
function zp(e, t) {
  const n = go(e);
  return n === t || !Hn(n) || di(n) ? !1 : Xt(n).position === "fixed" || zp(n, t);
}
function Kw(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ds(e).filter((i) => Hn(i) && pr(i) !== "body"), o = null;
  const a = Xt(e).position === "fixed";
  let s = a ? go(e) : e;
  for (; Hn(s) && !di(s); ) {
    const i = Xt(s), c = Fl(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Oa(s) && !c && zp(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = go(s);
  }
  return t.set(e, r), r;
}
function Gw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Kw(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((d, u) => {
    const f = Au(t, u, o);
    return d.top = Ht(f.top, d.top), d.right = ur(f.right, d.right), d.bottom = ur(f.bottom, d.bottom), d.left = Ht(f.left, d.left), d;
  }, Au(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Yw(e) {
  return Lp(e);
}
function Zw(e, t, n) {
  const r = Nn(t), o = Qn(t), a = n === "fixed", s = Ir(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = fr(0);
  if (r || !r && !a)
    if ((pr(t) !== "body" || Oa(o)) && (i = ui(t)), r) {
      const d = Ir(t, !0, a, t);
      c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
    } else
      o && (c.x = Vp(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Iu(e, t) {
  return !Nn(e) || Xt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Bp(e, t) {
  const n = Ut(e);
  if (!Nn(e))
    return n;
  let r = Iu(e, t);
  for (; r && Iw(r) && Xt(r).position === "static"; )
    r = Iu(r, t);
  return r && (pr(r) === "html" || pr(r) === "body" && Xt(r).position === "static" && !Fl(r)) ? n : r || Lw(e) || n;
}
const qw = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Bp, a = this.getDimensions;
  return {
    reference: Zw(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function Xw(e) {
  return Xt(e).direction === "rtl";
}
const Qw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: zw,
  getDocumentElement: Qn,
  getClippingRect: Gw,
  getOffsetParent: Bp,
  getElementRects: qw,
  getClientRects: Bw,
  getDimensions: Yw,
  getScale: fo,
  isElement: Hn,
  isRTL: Xw
};
function Jw(e, t) {
  let n = null, r;
  const o = Qn(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
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
    const m = es(u), h = es(o.clientWidth - (d + f)), v = es(o.clientHeight - (u + p)), g = es(d), x = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: Ht(0, ur(1, c)) || 1
    };
    let y = !0;
    function $(C) {
      const E = C[0].intersectionRatio;
      if (E !== c) {
        if (!y)
          return s();
        E ? s(!1, E) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
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
function e$(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, d = zl(e), u = o || a ? [...d ? Ds(d) : [], ...Ds(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const f = d && i ? Jw(d, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === d && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), d && !c && m.observe(d), m.observe(t));
  let h, v = c ? Ir(e) : null;
  c && g();
  function g() {
    const b = Ir(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), f && f(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const t$ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Qw,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return kw(e, t, {
    ...o,
    platform: a
  });
}, n$ = (e) => {
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
      return r && t(r) ? r.current != null ? Tu({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Tu({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var gs = typeof document < "u" ? Ea : Q;
function Rs(e, t) {
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
        if (!Rs(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Rs(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Wp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Lu(e, t) {
  const n = Wp(e);
  return Math.round(t * n) / n;
}
function Fu(e) {
  const t = _.useRef(e);
  return gs(() => {
    t.current = e;
  }), t;
}
function r$(e) {
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
  Rs(p, r) || m(r);
  const [h, v] = _.useState(null), [g, b] = _.useState(null), x = _.useCallback((F) => {
    F != E.current && (E.current = F, v(F));
  }, [v]), y = _.useCallback((F) => {
    F !== S.current && (S.current = F, b(F));
  }, [b]), $ = a || h, C = s || g, E = _.useRef(null), S = _.useRef(null), N = _.useRef(u), j = Fu(c), V = Fu(o), L = _.useCallback(() => {
    if (!E.current || !S.current)
      return;
    const F = {
      placement: t,
      strategy: n,
      middleware: p
    };
    V.current && (F.platform = V.current), t$(E.current, S.current, F).then((A) => {
      const H = {
        ...A,
        isPositioned: !0
      };
      B.current && !Rs(N.current, H) && (N.current = H, u0.flushSync(() => {
        f(H);
      }));
    });
  }, [p, t, n, V]);
  gs(() => {
    d === !1 && N.current.isPositioned && (N.current.isPositioned = !1, f((F) => ({
      ...F,
      isPositioned: !1
    })));
  }, [d]);
  const B = _.useRef(!1);
  gs(() => (B.current = !0, () => {
    B.current = !1;
  }), []), gs(() => {
    if ($ && (E.current = $), C && (S.current = C), $ && C) {
      if (j.current)
        return j.current($, C, L);
      L();
    }
  }, [$, C, L, j]);
  const Z = _.useMemo(() => ({
    reference: E,
    floating: S,
    setReference: x,
    setFloating: y
  }), [x, y]), T = _.useMemo(() => ({
    reference: $,
    floating: C
  }), [$, C]), O = _.useMemo(() => {
    const F = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return F;
    const A = Lu(T.floating, u.x), H = Lu(T.floating, u.y);
    return i ? {
      ...F,
      transform: "translate(" + A + "px, " + H + "px)",
      ...Wp(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: A,
      top: H
    };
  }, [n, i, T.floating, u.x, u.y]);
  return _.useMemo(() => ({
    ...u,
    update: L,
    refs: Z,
    elements: T,
    floatingStyles: O
  }), [u, L, Z, T, O]);
}
function Da(e) {
  const [t, n] = q(void 0);
  return _t(() => {
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
const Hp = "Popper", [Up, Tn] = ct(Hp), [o$, Kp] = Up(Hp), a$ = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = q(null);
  return /* @__PURE__ */ w(o$, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, s$ = "PopperAnchor", i$ = /* @__PURE__ */ D((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Kp(s$, n), s = Y(null), i = Pe(t, s);
  return Q(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ w(le.div, I({}, o, {
    ref: i
  }));
}), Gp = "PopperContent", [c$, P7] = Up(Gp), l$ = /* @__PURE__ */ D((e, t) => {
  var n, r, o, a, s, i, c, d;
  const { __scopePopper: u, side: f = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, avoidCollisions: g = !0, collisionBoundary: b = [], collisionPadding: x = 0, sticky: y = "partial", hideWhenDetached: $ = !1, updatePositionStrategy: C = "optimized", onPlaced: E, ...S } = e, N = Kp(Gp, u), [j, V] = q(null), L = Pe(
    t,
    (ke) => V(ke)
  ), [B, Z] = q(null), T = Da(B), O = (n = T == null ? void 0 : T.width) !== null && n !== void 0 ? n : 0, F = (r = T == null ? void 0 : T.height) !== null && r !== void 0 ? r : 0, A = f + (m !== "center" ? "-" + m : ""), H = typeof x == "number" ? x : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...x
  }, G = Array.isArray(b) ? b : [
    b
  ], ne = G.length > 0, me = {
    padding: H,
    boundary: G.filter(d$),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: ne
  }, { refs: K, floatingStyles: ue, placement: ye, isPositioned: fe, middlewareData: J } = r$({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: A,
    whileElementsMounted: (...ke) => e$(...ke, {
      animationFrame: C === "always"
    }),
    elements: {
      reference: N.anchor
    },
    middleware: [
      Ow({
        mainAxis: p + F,
        alignmentAxis: h
      }),
      g && Dw({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? Rw() : void 0,
        ...me
      }),
      g && jw({
        ...me
      }),
      Aw({
        ...me,
        apply: ({ elements: ke, rects: Le, availableWidth: je, availableHeight: P }) => {
          const { width: R, height: U } = Le.reference, ce = ke.floating.style;
          ce.setProperty("--radix-popper-available-width", `${je}px`), ce.setProperty("--radix-popper-available-height", `${P}px`), ce.setProperty("--radix-popper-anchor-width", `${R}px`), ce.setProperty("--radix-popper-anchor-height", `${U}px`);
        }
      }),
      B && n$({
        element: B,
        padding: v
      }),
      u$({
        arrowWidth: O,
        arrowHeight: F
      }),
      $ && Mw({
        strategy: "referenceHidden",
        ...me
      })
    ]
  }), [re, he] = Yp(ye), Ne = Qe(E);
  _t(() => {
    fe && (Ne == null || Ne());
  }, [
    fe,
    Ne
  ]);
  const ae = (o = J.arrow) === null || o === void 0 ? void 0 : o.x, de = (a = J.arrow) === null || a === void 0 ? void 0 : a.y, W = ((s = J.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [te, $e] = q();
  return _t(() => {
    j && $e(window.getComputedStyle(j).zIndex);
  }, [
    j
  ]), /* @__PURE__ */ w("div", {
    ref: K.setFloating,
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
  }, /* @__PURE__ */ w(c$, {
    scope: u,
    placedSide: re,
    onArrowChange: Z,
    arrowX: ae,
    arrowY: de,
    shouldHideArrow: W
  }, /* @__PURE__ */ w(le.div, I({
    "data-side": re,
    "data-align": he
  }, S, {
    ref: L,
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
function d$(e) {
  return e !== null;
}
const u$ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: d } = t, f = ((n = d.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = f ? 0 : e.arrowWidth, m = f ? 0 : e.arrowHeight, [h, v] = Yp(i), g = {
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
function Yp(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Po = a$, Ra = i$, Aa = l$, fi = /* @__PURE__ */ D((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Gf.createPortal(/* @__PURE__ */ w(le.div, I({}, o, {
    ref: t
  })), r) : null;
});
function f$(e, t) {
  return xl((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const dt = (e) => {
  const { present: t, children: n } = e, r = p$(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Tr.only(n), a = Pe(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ bl(o, {
    ref: a
  }) : null;
};
dt.displayName = "Presence";
function p$(e) {
  const [t, n] = q(), r = Y({}), o = Y(e), a = Y("none"), s = e ? "mounted" : "unmounted", [i, c] = f$(s, {
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
    const d = ts(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [
    i
  ]), _t(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = ts(d);
      e ? c("MOUNT") : m === "none" || (d == null ? void 0 : d.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), _t(() => {
    if (t) {
      const d = (f) => {
        const m = ts(r.current).includes(f.animationName);
        f.target === t && m && Yf(
          () => c("ANIMATION_END")
        );
      }, u = (f) => {
        f.target === t && (a.current = ts(r.current));
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
function ts(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function pt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = m$({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Qe(n), c = ge((d) => {
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
function m$({ defaultProp: e, onChange: t }) {
  const n = q(e), [r] = n, o = Y(r), a = Qe(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const ac = "rovingFocusGroup.onEntryFocus", h$ = {
  bubbles: !1,
  cancelable: !0
}, Bl = "RovingFocusGroup", [Fc, Zp, v$] = wr(Bl), [g$, $r] = ct(Bl, [
  v$
]), [b$, x$] = g$(Bl), y$ = /* @__PURE__ */ D((e, t) => /* @__PURE__ */ w(Fc.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(Fc.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(w$, Ee({}, e, {
  ref: t
}))))), w$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: d, ...u } = e, f = Y(null), p = Pe(t, f), m = Mn(a), [h = null, v] = pt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = q(!1), x = Qe(d), y = Zp(n), $ = Y(!1), [C, E] = q(0);
  return Q(() => {
    const S = f.current;
    if (S)
      return S.addEventListener(ac, x), () => S.removeEventListener(ac, x);
  }, [
    x
  ]), /* @__PURE__ */ w(b$, {
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
      () => E(
        (S) => S + 1
      ),
      []
    ),
    onFocusableItemRemove: ge(
      () => E(
        (S) => S - 1
      ),
      []
    )
  }, /* @__PURE__ */ w(le.div, Ee({
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
        const j = new CustomEvent(ac, h$);
        if (S.currentTarget.dispatchEvent(j), !j.defaultPrevented) {
          const V = y().filter(
            (O) => O.focusable
          ), L = V.find(
            (O) => O.active
          ), B = V.find(
            (O) => O.id === h
          ), T = [
            L,
            B,
            ...V
          ].filter(Boolean).map(
            (O) => O.ref.current
          );
          qp(T);
        }
      }
      $.current = !1;
    }),
    onBlur: X(
      e.onBlur,
      () => b(!1)
    )
  })));
}), $$ = "RovingFocusGroupItem", _$ = /* @__PURE__ */ D((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = ht(), c = a || i, d = x$($$, n), u = d.currentTabStopId === c, f = Zp(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = d;
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
  }, /* @__PURE__ */ w(le.span, Ee({
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
      const v = N$(h, d.orientation, d.dir);
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
          b = d.loop ? E$(b, x + 1) : b.slice(x + 1);
        }
        setTimeout(
          () => qp(b)
        );
      }
    })
  })));
}), C$ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function S$(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function N$(e, t, n) {
  const r = S$(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return C$[r];
}
function qp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function E$(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const pi = y$, mi = _$;
var P$ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, to = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap(), rs = {}, sc = 0, Xp = function(e) {
  return e && (e.host || Xp(e.parentNode));
}, k$ = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Xp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, j$ = function(e, t, n, r) {
  var o = k$(t, Array.isArray(e) ? e : [e]);
  rs[n] || (rs[n] = /* @__PURE__ */ new WeakMap());
  var a = rs[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var m = p.getAttribute(r), h = m !== null && m !== "false", v = (to.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          to.set(p, v), a.set(p, g), s.push(p), v === 1 && h && ns.set(p, !0), g === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return u(t), i.clear(), sc++, function() {
    s.forEach(function(f) {
      var p = to.get(f) - 1, m = a.get(f) - 1;
      to.set(f, p), a.set(f, m), p || (ns.has(f) || f.removeAttribute(r), ns.delete(f)), m || f.removeAttribute(n);
    }), sc--, sc || (to = /* @__PURE__ */ new WeakMap(), to = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap(), rs = {});
  };
}, hi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = P$(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), j$(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, wn = function() {
  return wn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, wn.apply(this, arguments);
};
function Qp(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function M$(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var bs = "right-scroll-bar-position", xs = "width-before-scroll-bar", T$ = "with-scroll-bars-hidden", O$ = "--removed-body-scroll-bar-size";
function ic(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function D$(e, t) {
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
var R$ = typeof window < "u" ? _.useLayoutEffect : _.useEffect, Vu = /* @__PURE__ */ new WeakMap();
function A$(e, t) {
  var n = D$(null, function(r) {
    return e.forEach(function(o) {
      return ic(o, r);
    });
  });
  return R$(function() {
    var r = Vu.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || ic(i, null);
      }), a.forEach(function(i) {
        o.has(i) || ic(i, s);
      });
    }
    Vu.set(n, e);
  }, [e]), n;
}
function I$(e) {
  return e;
}
function L$(e, t) {
  t === void 0 && (t = I$);
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
function F$(e) {
  e === void 0 && (e = {});
  var t = L$(null);
  return t.options = wn({ async: !0, ssr: !1 }, e), t;
}
var Jp = function(e) {
  var t = e.sideCar, n = Qp(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return _.createElement(r, wn({}, n));
};
Jp.isSideCarExport = !0;
function V$(e, t) {
  return e.useMedium(t), Jp;
}
var em = F$(), cc = function() {
}, vi = _.forwardRef(function(e, t) {
  var n = _.useRef(null), r = _.useState({
    onScrollCapture: cc,
    onWheelCapture: cc,
    onTouchMoveCapture: cc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, d = e.removeScrollBar, u = e.enabled, f = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, x = Qp(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, $ = A$([n, t]), C = wn(wn({}, x), o);
  return _.createElement(
    _.Fragment,
    null,
    u && _.createElement(y, { sideCar: em, removeScrollBar: d, shards: f, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? _.cloneElement(_.Children.only(i), wn(wn({}, C), { ref: $ })) : _.createElement(b, wn({}, C, { className: c, ref: $ }), i)
  );
});
vi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
vi.classNames = {
  fullWidth: xs,
  zeroRight: bs
};
var z$ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function B$() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = z$();
  return t && e.setAttribute("nonce", t), e;
}
function W$(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function H$(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var U$ = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = B$()) && (W$(t, n), H$(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, K$ = function() {
  var e = U$();
  return function(t, n) {
    _.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, tm = function() {
  var e = K$(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, G$ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, lc = function(e) {
  return parseInt(e || "", 10) || 0;
}, Y$ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [lc(n), lc(r), lc(o)];
}, Z$ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return G$;
  var t = Y$(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, q$ = tm(), po = "data-scroll-locked", X$ = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(T$, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(po, `] {
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
  
  .`).concat(bs, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(xs, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(bs, " .").concat(bs, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(xs, " .").concat(xs, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(po, `] {
    `).concat(O$, ": ").concat(i, `px;
  }
`);
}, zu = function() {
  var e = parseInt(document.body.getAttribute(po) || "0", 10);
  return isFinite(e) ? e : 0;
}, Q$ = function() {
  _.useEffect(function() {
    return document.body.setAttribute(po, (zu() + 1).toString()), function() {
      var e = zu() - 1;
      e <= 0 ? document.body.removeAttribute(po) : document.body.setAttribute(po, e.toString());
    };
  }, []);
}, J$ = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Q$();
  var a = _.useMemo(function() {
    return Z$(o);
  }, [o]);
  return _.createElement(q$, { styles: X$(a, !t, o, n ? "" : "!important") });
}, Vc = !1;
if (typeof window < "u")
  try {
    var os = Object.defineProperty({}, "passive", {
      get: function() {
        return Vc = !0, !0;
      }
    });
    window.addEventListener("test", os, os), window.removeEventListener("test", os, os);
  } catch {
    Vc = !1;
  }
var no = Vc ? { passive: !1 } : !1, e_ = function(e) {
  return e.tagName === "TEXTAREA";
}, nm = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !e_(e) && n[t] === "visible")
  );
}, t_ = function(e) {
  return nm(e, "overflowY");
}, n_ = function(e) {
  return nm(e, "overflowX");
}, Bu = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = rm(e, n);
    if (r) {
      var o = om(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, r_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, o_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, rm = function(e, t) {
  return e === "v" ? t_(t) : n_(t);
}, om = function(e, t) {
  return e === "v" ? r_(t) : o_(t);
}, a_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, s_ = function(e, t, n, r, o) {
  var a = a_(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), d = !1, u = s > 0, f = 0, p = 0;
  do {
    var m = om(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && rm(e, i) && (f += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (f === 0 || !o) || !u && (p === 0 || !o)) && (d = !0), d;
}, as = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Wu = function(e) {
  return [e.deltaX, e.deltaY];
}, Hu = function(e) {
  return e && "current" in e ? e.current : e;
}, i_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, c_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, l_ = 0, ro = [];
function d_(e) {
  var t = _.useRef([]), n = _.useRef([0, 0]), r = _.useRef(), o = _.useState(l_++)[0], a = _.useState(function() {
    return tm();
  })[0], s = _.useRef(e);
  _.useEffect(function() {
    s.current = e;
  }, [e]), _.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = M$([e.lockRef.current], (e.shards || []).map(Hu), !0).filter(Boolean);
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
    var b = as(v), x = n.current, y = "deltaX" in v ? v.deltaX : x[0] - b[0], $ = "deltaY" in v ? v.deltaY : x[1] - b[1], C, E = v.target, S = Math.abs(y) > Math.abs($) ? "h" : "v";
    if ("touches" in v && S === "h" && E.type === "range")
      return !1;
    var N = Bu(S, E);
    if (!N)
      return !0;
    if (N ? C = S : (C = S === "v" ? "h" : "v", N = Bu(S, E)), !N)
      return !1;
    if (!r.current && "changedTouches" in v && (y || $) && (r.current = C), !C)
      return !0;
    var j = r.current || C;
    return s_(j, g, v, j === "h" ? y : $, !0);
  }, []), c = _.useCallback(function(v) {
    var g = v;
    if (!(!ro.length || ro[ro.length - 1] !== a)) {
      var b = "deltaY" in g ? Wu(g) : as(g), x = t.current.filter(function(C) {
        return C.name === g.type && C.target === g.target && i_(C.delta, b);
      })[0];
      if (x && x.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!x) {
        var y = (s.current.shards || []).map(Hu).filter(Boolean).filter(function(C) {
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
    n.current = as(v), r.current = void 0;
  }, []), f = _.useCallback(function(v) {
    d(v.type, Wu(v), v.target, i(v, e.lockRef.current));
  }, []), p = _.useCallback(function(v) {
    d(v.type, as(v), v.target, i(v, e.lockRef.current));
  }, []);
  _.useEffect(function() {
    return ro.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, no), document.addEventListener("touchmove", c, no), document.addEventListener("touchstart", u, no), function() {
      ro = ro.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, no), document.removeEventListener("touchmove", c, no), document.removeEventListener("touchstart", u, no);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return _.createElement(
    _.Fragment,
    null,
    h ? _.createElement(a, { styles: c_(o) }) : null,
    m ? _.createElement(J$, { gapMode: "margin" }) : null
  );
}
const u_ = V$(em, d_);
var Ia = _.forwardRef(function(e, t) {
  return _.createElement(vi, wn({}, e, { ref: t, sideCar: u_ }));
});
Ia.classNames = vi.classNames;
const zc = [
  "Enter",
  " "
], f_ = [
  "ArrowDown",
  "PageUp",
  "Home"
], am = [
  "ArrowUp",
  "PageDown",
  "End"
], p_ = [
  ...f_,
  ...am
], m_ = {
  ltr: [
    ...zc,
    "ArrowRight"
  ],
  rtl: [
    ...zc,
    "ArrowLeft"
  ]
}, h_ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, gi = "Menu", [na, v_, g_] = wr(gi), [Ur, La] = ct(gi, [
  g_,
  Tn,
  $r
]), bi = Tn(), sm = $r(), [im, _r] = Ur(gi), [b_, Fa] = Ur(gi), x_ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = bi(t), [c, d] = q(null), u = Y(!1), f = Qe(a), p = Mn(o);
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
  }, []), /* @__PURE__ */ w(Po, i, /* @__PURE__ */ w(im, {
    scope: t,
    open: n,
    onOpenChange: f,
    content: c,
    onContentChange: d
  }, /* @__PURE__ */ w(b_, {
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
}, cm = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = bi(n);
  return /* @__PURE__ */ w(Ra, I({}, o, r, {
    ref: t
  }));
}), lm = "MenuPortal", [y_, dm] = Ur(lm, {
  forceMount: void 0
}), w_ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = _r(lm, t);
  return /* @__PURE__ */ w(y_, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(dt, {
    present: n || a.open
  }, /* @__PURE__ */ w(fi, {
    asChild: !0,
    container: o
  }, r)));
}, an = "MenuContent", [$_, Wl] = Ur(an), __ = /* @__PURE__ */ D((e, t) => {
  const n = dm(an, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = _r(an, e.__scopeMenu), s = Fa(an, e.__scopeMenu);
  return /* @__PURE__ */ w(na.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(dt, {
    present: r || a.open
  }, /* @__PURE__ */ w(na.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ w(C_, I({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(S_, I({}, o, {
    ref: t
  })))));
}), C_ = /* @__PURE__ */ D((e, t) => {
  const n = _r(an, e.__scopeMenu), r = Y(null), o = Pe(t, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return hi(a);
  }, []), /* @__PURE__ */ w(Hl, I({}, e, {
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
}), S_ = /* @__PURE__ */ D((e, t) => {
  const n = _r(an, e.__scopeMenu);
  return /* @__PURE__ */ w(Hl, I({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Hl = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: d, onPointerDownOutside: u, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = _r(an, n), b = Fa(an, n), x = bi(n), y = sm(n), $ = v_(n), [C, E] = q(null), S = Y(null), N = Pe(t, S, g.onContentChange), j = Y(0), V = Y(""), L = Y(0), B = Y(null), Z = Y("right"), T = Y(0), O = h ? Ia : ln, F = h ? {
    as: dn,
    allowPinchZoom: !0
  } : void 0, A = (G) => {
    var ne, me;
    const K = V.current + G, ue = $().filter(
      (Ne) => !Ne.disabled
    ), ye = document.activeElement, fe = (ne = ue.find(
      (Ne) => Ne.ref.current === ye
    )) === null || ne === void 0 ? void 0 : ne.textValue, J = ue.map(
      (Ne) => Ne.textValue
    ), re = H_(J, K, fe), he = (me = ue.find(
      (Ne) => Ne.textValue === re
    )) === null || me === void 0 ? void 0 : me.ref.current;
    (function Ne(ae) {
      V.current = ae, window.clearTimeout(j.current), ae !== "" && (j.current = window.setTimeout(
        () => Ne(""),
        1e3
      ));
    })(K), he && setTimeout(
      () => he.focus()
    );
  };
  Q(() => () => window.clearTimeout(j.current), []), ci();
  const H = ge((G) => {
    var ne, me;
    return Z.current === ((ne = B.current) === null || ne === void 0 ? void 0 : ne.side) && K_(G, (me = B.current) === null || me === void 0 ? void 0 : me.area);
  }, []);
  return /* @__PURE__ */ w($_, {
    scope: n,
    searchRef: V,
    onItemEnter: ge((G) => {
      H(G) && G.preventDefault();
    }, [
      H
    ]),
    onItemLeave: ge((G) => {
      var ne;
      H(G) || ((ne = S.current) === null || ne === void 0 || ne.focus(), E(null));
    }, [
      H
    ]),
    onTriggerLeave: ge((G) => {
      H(G) && G.preventDefault();
    }, [
      H
    ]),
    pointerGraceTimerRef: L,
    onPointerGraceIntentChange: ge((G) => {
      B.current = G;
    }, [])
  }, /* @__PURE__ */ w(O, F, /* @__PURE__ */ w(li, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: X(a, (G) => {
      var ne;
      G.preventDefault(), (ne = S.current) === null || ne === void 0 || ne.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ w(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: d,
    onPointerDownOutside: u,
    onFocusOutside: f,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ w(pi, I({
    asChild: !0
  }, y, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: C,
    onCurrentTabStopIdChange: E,
    onEntryFocus: X(c, (G) => {
      b.isUsingKeyboardRef.current || G.preventDefault();
    })
  }), /* @__PURE__ */ w(Aa, I({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": gm(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, x, v, {
    ref: N,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: X(v.onKeyDown, (G) => {
      const me = G.target.closest("[data-radix-menu-content]") === G.currentTarget, K = G.ctrlKey || G.altKey || G.metaKey, ue = G.key.length === 1;
      me && (G.key === "Tab" && G.preventDefault(), !K && ue && A(G.key));
      const ye = S.current;
      if (G.target !== ye || !p_.includes(G.key))
        return;
      G.preventDefault();
      const J = $().filter(
        (re) => !re.disabled
      ).map(
        (re) => re.ref.current
      );
      am.includes(G.key) && J.reverse(), B_(J);
    }),
    onBlur: X(e.onBlur, (G) => {
      G.currentTarget.contains(G.target) || (window.clearTimeout(j.current), V.current = "");
    }),
    onPointerMove: X(e.onPointerMove, ra((G) => {
      const ne = G.target, me = T.current !== G.clientX;
      if (G.currentTarget.contains(ne) && me) {
        const K = G.clientX > T.current ? "right" : "left";
        Z.current = K, T.current = G.clientX;
      }
    }))
  })))))));
}), um = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, I({
    role: "group"
  }, r, {
    ref: t
  }));
}), N_ = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, I({}, r, {
    ref: t
  }));
}), Bc = "MenuItem", Uu = "menu.itemSelect", Ul = /* @__PURE__ */ D((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = Y(null), s = Fa(Bc, e.__scopeMenu), i = Wl(Bc, e.__scopeMenu), c = Pe(t, a), d = Y(!1), u = () => {
    const f = a.current;
    if (!n && f) {
      const p = new CustomEvent(Uu, {
        bubbles: !0,
        cancelable: !0
      });
      f.addEventListener(
        Uu,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), js(f, p), p.defaultPrevented ? d.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ w(fm, I({}, o, {
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
}), fm = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Wl(Bc, n), i = sm(n), c = Y(null), d = Pe(t, c), [u, f] = q(!1), [p, m] = q("");
  return Q(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ w(na.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ w(mi, I({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ w(le.div, I({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: d,
    onPointerMove: X(e.onPointerMove, ra((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: X(e.onPointerLeave, ra(
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
}), E_ = /* @__PURE__ */ D((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ w(mm, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ w(Ul, I({
    role: "menuitemcheckbox",
    "aria-checked": As(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Kl(n),
    onSelect: X(
      o.onSelect,
      () => r == null ? void 0 : r(As(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), P_ = "MenuRadioGroup", [k_, j_] = Ur(P_, {
  value: void 0,
  onValueChange: () => {
  }
}), M_ = /* @__PURE__ */ D((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Qe(r);
  return /* @__PURE__ */ w(k_, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ w(um, I({}, o, {
    ref: t
  })));
}), T_ = "MenuRadioItem", O_ = /* @__PURE__ */ D((e, t) => {
  const { value: n, ...r } = e, o = j_(T_, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ w(mm, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ w(Ul, I({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Kl(a),
    onSelect: X(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), pm = "MenuItemIndicator", [mm, D_] = Ur(pm, {
  checked: !1
}), R_ = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = D_(pm, n);
  return /* @__PURE__ */ w(dt, {
    present: r || As(a.checked) || a.checked === !0
  }, /* @__PURE__ */ w(le.span, I({}, o, {
    ref: t,
    "data-state": Kl(a.checked)
  })));
}), A_ = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, I({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), hm = "MenuSub", [I_, vm] = Ur(hm), L_ = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = _r(hm, t), s = bi(t), [i, c] = q(null), [d, u] = q(null), f = Qe(o);
  return Q(() => (a.open === !1 && f(!1), () => f(!1)), [
    a.open,
    f
  ]), /* @__PURE__ */ w(Po, s, /* @__PURE__ */ w(im, {
    scope: t,
    open: r,
    onOpenChange: f,
    content: d,
    onContentChange: u
  }, /* @__PURE__ */ w(I_, {
    scope: t,
    contentId: ht(),
    triggerId: ht(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, ss = "MenuSubTrigger", F_ = /* @__PURE__ */ D((e, t) => {
  const n = _r(ss, e.__scopeMenu), r = Fa(ss, e.__scopeMenu), o = vm(ss, e.__scopeMenu), a = Wl(ss, e.__scopeMenu), s = Y(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, d = {
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
  ]), /* @__PURE__ */ w(cm, I({
    asChild: !0
  }, d), /* @__PURE__ */ w(fm, I({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": gm(n.open)
  }, e, {
    ref: Pa(t, o.onTriggerChange),
    onClick: (f) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: X(e.onPointerMove, ra((f) => {
      a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: X(e.onPointerLeave, ra((f) => {
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
      if (!(e.disabled || p && f.key === " ") && m_[r.dir].includes(f.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), f.preventDefault();
      }
    })
  })));
}), V_ = "MenuSubContent", z_ = /* @__PURE__ */ D((e, t) => {
  const n = dm(an, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = _r(an, e.__scopeMenu), s = Fa(an, e.__scopeMenu), i = vm(V_, e.__scopeMenu), c = Y(null), d = Pe(t, c);
  return /* @__PURE__ */ w(na.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(dt, {
    present: r || a.open
  }, /* @__PURE__ */ w(na.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(Hl, I({
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
      const f = u.currentTarget.contains(u.target), p = h_[s.dir].includes(u.key);
      if (f && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function gm(e) {
  return e ? "open" : "closed";
}
function As(e) {
  return e === "indeterminate";
}
function Kl(e) {
  return As(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function B_(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function W_(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function H_(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (d) => d === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = W_(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (d) => d !== n
  ));
  const c = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function U_(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, d = t[s].x, u = t[s].y;
    c > r != u > r && n < (d - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function K_(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return U_(n, t);
}
function ra(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Gl = x_, Yl = cm, Zl = w_, ql = __, Xl = um, Ql = N_, Jl = Ul, ed = E_, td = M_, nd = O_, rd = R_, od = A_, ad = L_, sd = F_, id = z_, bm = "ContextMenu", [G_, k7] = ct(bm, [
  La
]), Rt = La(), [Y_, xm] = G_(bm), Z_ = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = q(!1), c = Rt(t), d = Qe(r), u = ge((f) => {
    i(f), d(f);
  }, [
    d
  ]);
  return /* @__PURE__ */ w(Y_, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ w(Gl, I({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, q_ = "ContextMenuTrigger", X_ = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = xm(q_, n), s = Rt(n), i = Y({
    x: 0,
    y: 0
  }), c = Y({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), d = Y(0), u = ge(
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
  ), /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w(Yl, I({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ w(le.span, I({
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
    onPointerDown: r ? e.onPointerDown : X(e.onPointerDown, is((p) => {
      u(), d.current = window.setTimeout(
        () => f(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : X(e.onPointerMove, is(u)),
    onPointerCancel: r ? e.onPointerCancel : X(e.onPointerCancel, is(u)),
    onPointerUp: r ? e.onPointerUp : X(e.onPointerUp, is(u))
  })));
}), Q_ = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Rt(t);
  return /* @__PURE__ */ w(Zl, I({}, r, n));
}, J_ = "ContextMenuContent", e2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = xm(J_, n), a = Rt(n), s = Y(!1);
  return /* @__PURE__ */ w(ql, I({}, a, r, {
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
}), t2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Xl, I({}, o, r, {
    ref: t
  }));
}), n2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Ql, I({}, o, r, {
    ref: t
  }));
}), r2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Jl, I({}, o, r, {
    ref: t
  }));
}), o2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(ed, I({}, o, r, {
    ref: t
  }));
}), a2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(td, I({}, o, r, {
    ref: t
  }));
}), s2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(nd, I({}, o, r, {
    ref: t
  }));
}), i2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(rd, I({}, o, r, {
    ref: t
  }));
}), c2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(od, I({}, o, r, {
    ref: t
  }));
}), l2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = Rt(t), [i, c] = pt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ w(ad, I({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, d2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(sd, I({}, o, r, {
    ref: t
  }));
}), u2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(id, I({}, o, r, {
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
function is(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const f2 = Z_, p2 = X_, ym = Q_, wm = e2, m2 = t2, $m = n2, _m = r2, Cm = o2, h2 = a2, Sm = s2, Nm = i2, Em = c2, v2 = l2, Pm = d2, km = u2, j7 = f2, M7 = p2, T7 = m2, O7 = ym, D7 = v2, R7 = h2, g2 = _.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Pm,
  {
    ref: o,
    className: M(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ l.jsx(yr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
g2.displayName = Pm.displayName;
const b2 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  km,
  {
    ref: n,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
b2.displayName = km.displayName;
const x2 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(ym, { children: /* @__PURE__ */ l.jsx(
  wm,
  {
    ref: n,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
x2.displayName = wm.displayName;
const y2 = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  _m,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
y2.displayName = _m.displayName;
const w2 = _.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Cm,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Nm, { children: /* @__PURE__ */ l.jsx(un, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
w2.displayName = Cm.displayName;
const $2 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Sm,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Nm, { children: /* @__PURE__ */ l.jsx(ai, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
$2.displayName = Sm.displayName;
const _2 = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  $m,
  {
    ref: r,
    className: M(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
_2.displayName = $m.displayName;
const C2 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Em,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
C2.displayName = Em.displayName;
const S2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: M(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
S2.displayName = "ContextMenuShortcut";
var Va = (e) => e.type === "checkbox", io = (e) => e instanceof Date, Mt = (e) => e == null;
const jm = (e) => typeof e == "object";
var wt = (e) => !Mt(e) && !Array.isArray(e) && jm(e) && !io(e), Mm = (e) => wt(e) && e.target ? Va(e.target) ? e.target.checked : e.target.value : e, N2 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Tm = (e, t) => e.has(N2(t)), E2 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return wt(t) && t.hasOwnProperty("isPrototypeOf");
}, cd = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Lt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(cd && (e instanceof Blob || e instanceof FileList)) && (n || wt(e)))
    if (t = n ? [] : {}, !n && !E2(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Lt(e[r]));
  else
    return e;
  return t;
}
var za = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ft = (e) => e === void 0, pe = (e, t, n) => {
  if (!t || !wt(e))
    return n;
  const r = za(t.split(/[,[\].]+?/)).reduce((o, a) => Mt(o) ? o : o[a], e);
  return ft(r) || r === e ? ft(e[t]) ? n : e[t] : r;
}, tn = (e) => typeof e == "boolean";
const Is = {
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
}, Om = z.createContext(null), xi = () => z.useContext(Om), P2 = (e) => {
  const { children: t, ...n } = e;
  return z.createElement(Om.Provider, { value: n }, t);
};
var Dm = (e, t, n, r = !0) => {
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
}, Wt = (e) => wt(e) && !Object.keys(e).length, Rm = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Wt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || rn.all));
}, ys = (e) => Array.isArray(e) ? e : [e], Am = (e, t, n) => !e || !t || e === t || ys(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function ld(e) {
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
function k2(e) {
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
  return u.current = o, ld({
    disabled: r,
    next: (f) => c.current && Am(u.current, f.name, a) && Rm(f, d.current, n._updateFormState) && i({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), z.useEffect(() => (c.current = !0, d.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Dm(s, n, d.current, !1);
}
var _n = (e) => typeof e == "string", Im = (e, t, n, r, o) => _n(e) ? (r && t.watch.add(e), pe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), pe(n, a))) : (r && (t.watchAll = !0), n);
function j2(e) {
  const t = xi(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = z.useRef(r);
  i.current = r, ld({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Am(i.current, u.name, s) && d(Lt(Im(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, d] = z.useState(n._getWatch(r, o));
  return z.useEffect(() => n._removeUnmounted()), c;
}
var dd = (e) => /^\w*$/.test(e), Lm = (e) => za(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ze = (e, t, n) => {
  let r = -1;
  const o = dd(t) ? [t] : Lm(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const d = e[i];
      c = wt(d) || Array.isArray(d) ? d : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
};
function M2(e) {
  const t = xi(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a } = e, s = Tm(o._names.array, n), i = j2({
    control: o,
    name: n,
    defaultValue: pe(o._formValues, n, pe(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = k2({
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
      const p = Lt(pe(o._options.defaultValues, n));
      Ze(o._defaultValues, n, p), ft(pe(o._formValues, n)) && Ze(o._formValues, n, p);
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
          value: Mm(u),
          name: n
        },
        type: Is.CHANGE
      }), [n]),
      onBlur: z.useCallback(() => d.current.onBlur({
        target: {
          value: pe(o._formValues, n),
          name: n
        },
        type: Is.BLUR
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
const T2 = (e) => e.render(M2(e));
var Fm = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, Ku = (e) => ({
  isOnSubmit: !e || e === rn.onSubmit,
  isOnBlur: e === rn.onBlur,
  isOnChange: e === rn.onChange,
  isOnAll: e === rn.all,
  isOnTouch: e === rn.onTouched
}), Gu = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
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
        wt(i) && qo(i, t);
    }
  }
};
var O2 = (e, t, n) => {
  const r = za(pe(e, n));
  return Ze(r, "root", t[n]), Ze(e, n, r), e;
}, ud = (e) => e.type === "file", dr = (e) => typeof e == "function", Ls = (e) => {
  if (!cd)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, ws = (e) => _n(e), fd = (e) => e.type === "radio", Fs = (e) => e instanceof RegExp;
const Yu = {
  value: !1,
  isValid: !1
}, Zu = { value: !0, isValid: !0 };
var Vm = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ft(e[0].attributes.value) ? ft(e[0].value) || e[0].value === "" ? Zu : { value: e[0].value, isValid: !0 } : Zu
    ) : Yu;
  }
  return Yu;
};
const qu = {
  isValid: !1,
  value: null
};
var zm = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, qu) : qu;
function Xu(e, t, n = "validate") {
  if (ws(e) || Array.isArray(e) && e.every(ws) || tn(e) && !e)
    return {
      type: n,
      message: ws(e) ? e : "",
      ref: t
    };
}
var oo = (e) => wt(e) && !Fs(e) ? e : {
  value: e,
  message: ""
}, Qu = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: d, min: u, max: f, pattern: p, validate: m, name: h, valueAsNumber: v, mount: g, disabled: b } = e._f, x = pe(t, h);
  if (!g || b)
    return {};
  const y = s ? s[0] : a, $ = (B) => {
    r && y.reportValidity && (y.setCustomValidity(tn(B) ? "" : B || ""), y.reportValidity());
  }, C = {}, E = fd(a), S = Va(a), N = E || S, j = (v || ud(a)) && ft(a.value) && ft(x) || Ls(a) && a.value === "" || x === "" || Array.isArray(x) && !x.length, V = Fm.bind(null, h, n, C), L = (B, Z, T, O = Ln.maxLength, F = Ln.minLength) => {
    const A = B ? Z : T;
    C[h] = {
      type: B ? O : F,
      message: A,
      ref: a,
      ...V(B ? O : F, A)
    };
  };
  if (o ? !Array.isArray(x) || !x.length : i && (!N && (j || Mt(x)) || tn(x) && !x || S && !Vm(s).isValid || E && !zm(s).isValid)) {
    const { value: B, message: Z } = ws(i) ? { value: !!i, message: i } : oo(i);
    if (B && (C[h] = {
      type: Ln.required,
      message: Z,
      ref: y,
      ...V(Ln.required, Z)
    }, !n))
      return $(Z), C;
  }
  if (!j && (!Mt(u) || !Mt(f))) {
    let B, Z;
    const T = oo(f), O = oo(u);
    if (!Mt(x) && !isNaN(x)) {
      const F = a.valueAsNumber || x && +x;
      Mt(T.value) || (B = F > T.value), Mt(O.value) || (Z = F < O.value);
    } else {
      const F = a.valueAsDate || new Date(x), A = (ne) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ne), H = a.type == "time", G = a.type == "week";
      _n(T.value) && x && (B = H ? A(x) > A(T.value) : G ? x > T.value : F > new Date(T.value)), _n(O.value) && x && (Z = H ? A(x) < A(O.value) : G ? x < O.value : F < new Date(O.value));
    }
    if ((B || Z) && (L(!!B, T.message, O.message, Ln.max, Ln.min), !n))
      return $(C[h].message), C;
  }
  if ((c || d) && !j && (_n(x) || o && Array.isArray(x))) {
    const B = oo(c), Z = oo(d), T = !Mt(B.value) && x.length > +B.value, O = !Mt(Z.value) && x.length < +Z.value;
    if ((T || O) && (L(T, B.message, Z.message), !n))
      return $(C[h].message), C;
  }
  if (p && !j && _n(x)) {
    const { value: B, message: Z } = oo(p);
    if (Fs(B) && !x.match(B) && (C[h] = {
      type: Ln.pattern,
      message: Z,
      ref: a,
      ...V(Ln.pattern, Z)
    }, !n))
      return $(Z), C;
  }
  if (m) {
    if (dr(m)) {
      const B = await m(x, t), Z = Xu(B, y);
      if (Z && (C[h] = {
        ...Z,
        ...V(Ln.validate, Z.message)
      }, !n))
        return $(Z.message), C;
    } else if (wt(m)) {
      let B = {};
      for (const Z in m) {
        if (!Wt(B) && !n)
          break;
        const T = Xu(await m[Z](x, t), y, Z);
        T && (B = {
          ...T,
          ...V(Z, T.message)
        }, $(T.message), n && (C[h] = B));
      }
      if (!Wt(B) && (C[h] = {
        ref: y,
        ...B
      }, !n))
        return C;
    }
  }
  return $(!0), C;
};
function D2(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = ft(e) ? r++ : e[t[r++]];
  return e;
}
function R2(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ft(e[t]))
      return !1;
  return !0;
}
function yt(e, t) {
  const n = Array.isArray(t) ? t : dd(t) ? [t] : Lm(t), r = n.length === 1 ? e : D2(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (wt(r) && Wt(r) || Array.isArray(r) && R2(r)) && yt(e, n.slice(0, -1)), e;
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
}, Vs = (e) => Mt(e) || !jm(e);
function Mr(e, t) {
  if (Vs(e) || Vs(t))
    return e === t;
  if (io(e) && io(t))
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
      if (io(a) && io(s) || wt(a) && wt(s) || Array.isArray(a) && Array.isArray(s) ? !Mr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Bm = (e) => e.type === "select-multiple", A2 = (e) => fd(e) || Va(e), uc = (e) => Ls(e) && e.isConnected, Wm = (e) => {
  for (const t in e)
    if (dr(e[t]))
      return !0;
  return !1;
};
function zs(e, t = {}) {
  const n = Array.isArray(e);
  if (wt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || wt(e[r]) && !Wm(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, zs(e[r], t[r])) : Mt(e[r]) || (t[r] = !0);
  return t;
}
function Hm(e, t, n) {
  const r = Array.isArray(e);
  if (wt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || wt(e[o]) && !Wm(e[o]) ? ft(t) || Vs(n[o]) ? n[o] = Array.isArray(e[o]) ? zs(e[o], []) : { ...zs(e[o]) } : Hm(e[o], Mt(t) ? {} : t[o], n[o]) : n[o] = !Mr(e[o], t[o]);
  return n;
}
var cs = (e, t) => Hm(e, t, zs(t)), Um = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => ft(e) ? e : t ? e === "" ? NaN : e && +e : n && _n(e) ? new Date(e) : r ? r(e) : e;
function fc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return ud(t) ? t.files : fd(t) ? zm(e.refs).value : Bm(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Va(t) ? Vm(e.refs).value : Um(ft(t.value) ? e.ref.value : t.value, e);
}
var I2 = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = pe(t, a);
    s && Ze(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Ho = (e) => ft(e) ? e : Fs(e) ? e.source : wt(e) ? Fs(e.value) ? e.value.source : e.value : e, L2 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Ju(e, t, n) {
  const r = pe(e, n);
  if (r || dd(n))
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
var F2 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, V2 = (e, t) => !za(pe(e, t)).length && yt(e, t);
const z2 = {
  mode: rn.onSubmit,
  reValidateMode: rn.onChange,
  shouldFocusError: !0
};
function B2(e = {}) {
  let t = {
    ...z2,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: dr(t.defaultValues),
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
  }, r = {}, o = wt(t.defaultValues) || wt(t.values) ? Lt(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : Lt(o), s = {
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
  }, p = Ku(t.mode), m = Ku(t.reValidateMode), h = t.criteriaMode === rn.all, v = (P) => (R) => {
    clearTimeout(d), d = setTimeout(P, R);
  }, g = async (P) => {
    if (u.isValid || P) {
      const R = t.resolver ? Wt((await N()).errors) : await V(r, !0);
      R !== n.isValid && f.state.next({
        isValid: R
      });
    }
  }, b = (P, R) => {
    (u.isValidating || u.validatingFields) && ((P || Array.from(i.mount)).forEach((U) => {
      U && (R ? Ze(n.validatingFields, U, R) : yt(n.validatingFields, U));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Wt(n.validatingFields)
    }));
  }, x = (P, R = [], U, ce, ie = !0, ee = !0) => {
    if (ce && U) {
      if (s.action = !0, ee && Array.isArray(pe(r, P))) {
        const xe = U(pe(r, P), ce.argA, ce.argB);
        ie && Ze(r, P, xe);
      }
      if (ee && Array.isArray(pe(n.errors, P))) {
        const xe = U(pe(n.errors, P), ce.argA, ce.argB);
        ie && Ze(n.errors, P, xe), V2(n.errors, P);
      }
      if (u.touchedFields && ee && Array.isArray(pe(n.touchedFields, P))) {
        const xe = U(pe(n.touchedFields, P), ce.argA, ce.argB);
        ie && Ze(n.touchedFields, P, xe);
      }
      u.dirtyFields && (n.dirtyFields = cs(o, a)), f.state.next({
        name: P,
        isDirty: B(P, R),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ze(a, P, R);
  }, y = (P, R) => {
    Ze(n.errors, P, R), f.state.next({
      errors: n.errors
    });
  }, $ = (P) => {
    n.errors = P, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, C = (P, R, U, ce) => {
    const ie = pe(r, P);
    if (ie) {
      const ee = pe(a, P, ft(U) ? pe(o, P) : U);
      ft(ee) || ce && ce.defaultChecked || R ? Ze(a, P, R ? ee : fc(ie._f)) : O(P, ee), s.mount && g();
    }
  }, E = (P, R, U, ce, ie) => {
    let ee = !1, xe = !1;
    const Re = {
      name: P
    }, Ge = !!(pe(r, P) && pe(r, P)._f.disabled);
    if (!U || ce) {
      u.isDirty && (xe = n.isDirty, n.isDirty = Re.isDirty = B(), ee = xe !== Re.isDirty);
      const Je = Ge || Mr(pe(o, P), R);
      xe = !!(!Ge && pe(n.dirtyFields, P)), Je || Ge ? yt(n.dirtyFields, P) : Ze(n.dirtyFields, P, !0), Re.dirtyFields = n.dirtyFields, ee = ee || u.dirtyFields && xe !== !Je;
    }
    if (U) {
      const Je = pe(n.touchedFields, P);
      Je || (Ze(n.touchedFields, P, U), Re.touchedFields = n.touchedFields, ee = ee || u.touchedFields && Je !== U);
    }
    return ee && ie && f.state.next(Re), ee ? Re : {};
  }, S = (P, R, U, ce) => {
    const ie = pe(n.errors, P), ee = u.isValid && tn(R) && n.isValid !== R;
    if (e.delayError && U ? (c = v(() => y(P, U)), c(e.delayError)) : (clearTimeout(d), c = null, U ? Ze(n.errors, P, U) : yt(n.errors, P)), (U ? !Mr(ie, U) : ie) || !Wt(ce) || ee) {
      const xe = {
        ...ce,
        ...ee && tn(R) ? { isValid: R } : {},
        errors: n.errors,
        name: P
      };
      n = {
        ...n,
        ...xe
      }, f.state.next(xe);
    }
  }, N = async (P) => {
    b(P, !0);
    const R = await t.resolver(a, t.context, I2(P || i.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return b(P), R;
  }, j = async (P) => {
    const { errors: R } = await N(P);
    if (P)
      for (const U of P) {
        const ce = pe(R, U);
        ce ? Ze(n.errors, U, ce) : yt(n.errors, U);
      }
    else
      n.errors = R;
    return R;
  }, V = async (P, R, U = {
    valid: !0
  }) => {
    for (const ce in P) {
      const ie = P[ce];
      if (ie) {
        const { _f: ee, ...xe } = ie;
        if (ee) {
          const Re = i.array.has(ee.name);
          b([ce], !0);
          const Ge = await Qu(ie, a, h, t.shouldUseNativeValidation && !R, Re);
          if (b([ce]), Ge[ee.name] && (U.valid = !1, R))
            break;
          !R && (pe(Ge, ee.name) ? Re ? O2(n.errors, Ge, ee.name) : Ze(n.errors, ee.name, Ge[ee.name]) : yt(n.errors, ee.name));
        }
        xe && await V(xe, R, U);
      }
    }
    return U.valid;
  }, L = () => {
    for (const P of i.unMount) {
      const R = pe(r, P);
      R && (R._f.refs ? R._f.refs.every((U) => !uc(U)) : !uc(R._f.ref)) && J(P);
    }
    i.unMount = /* @__PURE__ */ new Set();
  }, B = (P, R) => (P && R && Ze(a, P, R), !Mr(me(), o)), Z = (P, R, U) => Im(P, i, {
    ...s.mount ? a : ft(R) ? o : _n(P) ? { [P]: R } : R
  }, U, R), T = (P) => za(pe(s.mount ? a : o, P, e.shouldUnregister ? pe(o, P, []) : [])), O = (P, R, U = {}) => {
    const ce = pe(r, P);
    let ie = R;
    if (ce) {
      const ee = ce._f;
      ee && (!ee.disabled && Ze(a, P, Um(R, ee)), ie = Ls(ee.ref) && Mt(R) ? "" : R, Bm(ee.ref) ? [...ee.ref.options].forEach((xe) => xe.selected = ie.includes(xe.value)) : ee.refs ? Va(ee.ref) ? ee.refs.length > 1 ? ee.refs.forEach((xe) => (!xe.defaultChecked || !xe.disabled) && (xe.checked = Array.isArray(ie) ? !!ie.find((Re) => Re === xe.value) : ie === xe.value)) : ee.refs[0] && (ee.refs[0].checked = !!ie) : ee.refs.forEach((xe) => xe.checked = xe.value === ie) : ud(ee.ref) ? ee.ref.value = "" : (ee.ref.value = ie, ee.ref.type || f.values.next({
        name: P,
        values: { ...a }
      })));
    }
    (U.shouldDirty || U.shouldTouch) && E(P, ie, U.shouldTouch, U.shouldDirty, !0), U.shouldValidate && ne(P);
  }, F = (P, R, U) => {
    for (const ce in R) {
      const ie = R[ce], ee = `${P}.${ce}`, xe = pe(r, ee);
      (i.array.has(P) || !Vs(ie) || xe && !xe._f) && !io(ie) ? F(ee, ie, U) : O(ee, ie, U);
    }
  }, A = (P, R, U = {}) => {
    const ce = pe(r, P), ie = i.array.has(P), ee = Lt(R);
    Ze(a, P, ee), ie ? (f.array.next({
      name: P,
      values: { ...a }
    }), (u.isDirty || u.dirtyFields) && U.shouldDirty && f.state.next({
      name: P,
      dirtyFields: cs(o, a),
      isDirty: B(P, ee)
    })) : ce && !ce._f && !Mt(ee) ? F(P, ee, U) : O(P, ee, U), Gu(P, i) && f.state.next({ ...n }), f.values.next({
      name: s.mount ? P : void 0,
      values: { ...a }
    });
  }, H = async (P) => {
    s.mount = !0;
    const R = P.target;
    let U = R.name, ce = !0;
    const ie = pe(r, U), ee = () => R.type ? fc(ie._f) : Mm(P), xe = (Re) => {
      ce = Number.isNaN(Re) || Re === pe(a, U, Re);
    };
    if (ie) {
      let Re, Ge;
      const Je = ee(), vt = P.type === Is.BLUR || P.type === Is.FOCUS_OUT, Zt = !L2(ie._f) && !t.resolver && !pe(n.errors, U) && !ie._f.deps || F2(vt, pe(n.touchedFields, U), n.isSubmitted, m, p), _e = Gu(U, i, vt);
      Ze(a, U, Je), vt ? (ie._f.onBlur && ie._f.onBlur(P), c && c(0)) : ie._f.onChange && ie._f.onChange(P);
      const Ce = E(U, Je, vt, !1), ze = !Wt(Ce) || _e;
      if (!vt && f.values.next({
        name: U,
        type: P.type,
        values: { ...a }
      }), Zt)
        return u.isValid && g(), ze && f.state.next({ name: U, ..._e ? {} : Ce });
      if (!vt && _e && f.state.next({ ...n }), t.resolver) {
        const { errors: Fe } = await N([U]);
        if (xe(Je), ce) {
          const qe = Ju(n.errors, r, U), et = Ju(Fe, r, qe.name || U);
          Re = et.error, U = et.name, Ge = Wt(Fe);
        }
      } else
        b([U], !0), Re = (await Qu(ie, a, h, t.shouldUseNativeValidation))[U], b([U]), xe(Je), ce && (Re ? Ge = !1 : u.isValid && (Ge = await V(r, !0)));
      ce && (ie._f.deps && ne(ie._f.deps), S(U, Ge, Re, Ce));
    }
  }, G = (P, R) => {
    if (pe(n.errors, R) && P.focus)
      return P.focus(), 1;
  }, ne = async (P, R = {}) => {
    let U, ce;
    const ie = ys(P);
    if (t.resolver) {
      const ee = await j(ft(P) ? P : ie);
      U = Wt(ee), ce = P ? !ie.some((xe) => pe(ee, xe)) : U;
    } else
      P ? (ce = (await Promise.all(ie.map(async (ee) => {
        const xe = pe(r, ee);
        return await V(xe && xe._f ? { [ee]: xe } : xe);
      }))).every(Boolean), !(!ce && !n.isValid) && g()) : ce = U = await V(r);
    return f.state.next({
      ...!_n(P) || u.isValid && U !== n.isValid ? {} : { name: P },
      ...t.resolver || !P ? { isValid: U } : {},
      errors: n.errors
    }), R.shouldFocus && !ce && qo(r, G, P ? ie : i.mount), ce;
  }, me = (P) => {
    const R = {
      ...o,
      ...s.mount ? a : {}
    };
    return ft(P) ? R : _n(P) ? pe(R, P) : P.map((U) => pe(R, U));
  }, K = (P, R) => ({
    invalid: !!pe((R || n).errors, P),
    isDirty: !!pe((R || n).dirtyFields, P),
    isTouched: !!pe((R || n).touchedFields, P),
    isValidating: !!pe((R || n).validatingFields, P),
    error: pe((R || n).errors, P)
  }), ue = (P) => {
    P && ys(P).forEach((R) => yt(n.errors, R)), f.state.next({
      errors: P ? n.errors : {}
    });
  }, ye = (P, R, U) => {
    const ce = (pe(r, P, { _f: {} })._f || {}).ref;
    Ze(n.errors, P, {
      ...R,
      ref: ce
    }), f.state.next({
      name: P,
      errors: n.errors,
      isValid: !1
    }), U && U.shouldFocus && ce && ce.focus && ce.focus();
  }, fe = (P, R) => dr(P) ? f.values.subscribe({
    next: (U) => P(Z(void 0, R), U)
  }) : Z(P, R, !0), J = (P, R = {}) => {
    for (const U of P ? ys(P) : i.mount)
      i.mount.delete(U), i.array.delete(U), R.keepValue || (yt(r, U), yt(a, U)), !R.keepError && yt(n.errors, U), !R.keepDirty && yt(n.dirtyFields, U), !R.keepTouched && yt(n.touchedFields, U), !R.keepIsValidating && yt(n.validatingFields, U), !t.shouldUnregister && !R.keepDefaultValue && yt(o, U);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...n,
      ...R.keepDirty ? { isDirty: B() } : {}
    }), !R.keepIsValid && g();
  }, re = ({ disabled: P, name: R, field: U, fields: ce, value: ie }) => {
    if (tn(P)) {
      const ee = P ? void 0 : ft(ie) ? fc(U ? U._f : pe(ce, R)._f) : ie;
      Ze(a, R, ee), E(R, ee, !1, !1, !0);
    }
  }, he = (P, R = {}) => {
    let U = pe(r, P);
    const ce = tn(R.disabled);
    return Ze(r, P, {
      ...U || {},
      _f: {
        ...U && U._f ? U._f : { ref: { name: P } },
        name: P,
        mount: !0,
        ...R
      }
    }), i.mount.add(P), U ? re({
      field: U,
      disabled: R.disabled,
      name: P,
      value: R.value
    }) : C(P, !0, R.value), {
      ...ce ? { disabled: R.disabled } : {},
      ...t.progressive ? {
        required: !!R.required,
        min: Ho(R.min),
        max: Ho(R.max),
        minLength: Ho(R.minLength),
        maxLength: Ho(R.maxLength),
        pattern: Ho(R.pattern)
      } : {},
      name: P,
      onChange: H,
      onBlur: H,
      ref: (ie) => {
        if (ie) {
          he(P, R), U = pe(r, P);
          const ee = ft(ie.value) && ie.querySelectorAll && ie.querySelectorAll("input,select,textarea")[0] || ie, xe = A2(ee), Re = U._f.refs || [];
          if (xe ? Re.find((Ge) => Ge === ee) : ee === U._f.ref)
            return;
          Ze(r, P, {
            _f: {
              ...U._f,
              ...xe ? {
                refs: [
                  ...Re.filter(uc),
                  ee,
                  ...Array.isArray(pe(o, P)) ? [{}] : []
                ],
                ref: { type: ee.type, name: P }
              } : { ref: ee }
            }
          }), C(P, !1, void 0, ee);
        } else
          U = pe(r, P, {}), U._f && (U._f.mount = !1), (t.shouldUnregister || R.shouldUnregister) && !(Tm(i.array, P) && s.action) && i.unMount.add(P);
      }
    };
  }, Ne = () => t.shouldFocusError && qo(r, G, i.mount), ae = (P) => {
    tn(P) && (f.state.next({ disabled: P }), qo(r, (R, U) => {
      let ce = P;
      const ie = pe(r, U);
      ie && tn(ie._f.disabled) && (ce || (ce = ie._f.disabled)), R.disabled = ce;
    }, 0, !1));
  }, de = (P, R) => async (U) => {
    let ce;
    U && (U.preventDefault && U.preventDefault(), U.persist && U.persist());
    let ie = Lt(a);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: ee, values: xe } = await N();
      n.errors = ee, ie = xe;
    } else
      await V(r);
    if (yt(n.errors, "root"), Wt(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await P(ie, U);
      } catch (ee) {
        ce = ee;
      }
    } else
      R && await R({ ...n.errors }, U), Ne(), setTimeout(Ne);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Wt(n.errors) && !ce,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), ce)
      throw ce;
  }, W = (P, R = {}) => {
    pe(r, P) && (ft(R.defaultValue) ? A(P, Lt(pe(o, P))) : (A(P, R.defaultValue), Ze(o, P, Lt(R.defaultValue))), R.keepTouched || yt(n.touchedFields, P), R.keepDirty || (yt(n.dirtyFields, P), n.isDirty = R.defaultValue ? B(P, Lt(pe(o, P))) : B()), R.keepError || (yt(n.errors, P), u.isValid && g()), f.state.next({ ...n }));
  }, te = (P, R = {}) => {
    const U = P ? Lt(P) : o, ce = Lt(U), ie = Wt(P), ee = ie ? o : ce;
    if (R.keepDefaultValues || (o = U), !R.keepValues) {
      if (R.keepDirtyValues)
        for (const xe of i.mount)
          pe(n.dirtyFields, xe) ? Ze(ee, xe, pe(a, xe)) : A(xe, pe(ee, xe));
      else {
        if (cd && ft(P))
          for (const xe of i.mount) {
            const Re = pe(r, xe);
            if (Re && Re._f) {
              const Ge = Array.isArray(Re._f.refs) ? Re._f.refs[0] : Re._f.ref;
              if (Ls(Ge)) {
                const Je = Ge.closest("form");
                if (Je) {
                  Je.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      a = e.shouldUnregister ? R.keepDefaultValues ? Lt(o) : {} : Lt(ee), f.array.next({
        values: { ...ee }
      }), f.values.next({
        values: { ...ee }
      });
    }
    i = {
      mount: R.keepDirtyValues ? i.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !u.isValid || !!R.keepIsValid || !!R.keepDirtyValues, s.watch = !!e.shouldUnregister, f.state.next({
      submitCount: R.keepSubmitCount ? n.submitCount : 0,
      isDirty: ie ? !1 : R.keepDirty ? n.isDirty : !!(R.keepDefaultValues && !Mr(P, o)),
      isSubmitted: R.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: ie ? [] : R.keepDirtyValues ? R.keepDefaultValues && a ? cs(o, a) : n.dirtyFields : R.keepDefaultValues && P ? cs(o, P) : {},
      touchedFields: R.keepTouched ? n.touchedFields : {},
      errors: R.keepErrors ? n.errors : {},
      isSubmitSuccessful: R.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, $e = (P, R) => te(dr(P) ? P(a) : P, R);
  return {
    control: {
      register: he,
      unregister: J,
      getFieldState: K,
      handleSubmit: de,
      setError: ye,
      _executeSchema: N,
      _getWatch: Z,
      _getDirty: B,
      _updateValid: g,
      _removeUnmounted: L,
      _updateFieldArray: x,
      _updateDisabledField: re,
      _getFieldArray: T,
      _reset: te,
      _resetDefaultValues: () => dr(t.defaultValues) && t.defaultValues().then((P) => {
        $e(P, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (P) => {
        n = {
          ...n,
          ...P
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
      set _state(P) {
        s = P;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return i;
      },
      set _names(P) {
        i = P;
      },
      get _formState() {
        return n;
      },
      set _formState(P) {
        n = P;
      },
      get _options() {
        return t;
      },
      set _options(P) {
        t = {
          ...t,
          ...P
        };
      }
    },
    trigger: ne,
    register: he,
    handleSubmit: de,
    watch: fe,
    setValue: A,
    getValues: me,
    reset: $e,
    resetField: W,
    clearErrors: ue,
    unregister: J,
    setError: ye,
    setFocus: (P, R = {}) => {
      const U = pe(r, P), ce = U && U._f;
      if (ce) {
        const ie = ce.refs ? ce.refs[0] : ce.ref;
        ie.focus && (ie.focus(), R.shouldSelect && ie.select());
      }
    },
    getFieldState: K
  };
}
function Km(e = {}) {
  const t = z.useRef(), n = z.useRef(), [r, o] = z.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: dr(e.defaultValues),
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
    defaultValues: dr(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...B2(e),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, ld({
    subject: a._subjects.state,
    next: (s) => {
      Rm(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), z.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), z.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== r.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, r.isDirty]), z.useEffect(() => {
    e.values && !Mr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, o((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [e.values, a]), z.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), z.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), z.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = Dm(r, a), t.current;
}
const W2 = /* @__PURE__ */ D((e, t) => /* @__PURE__ */ w(le.label, Ee({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Gm = W2, H2 = Co(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), On = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Gm,
  {
    ref: n,
    className: M(H2(), e),
    ...t
  }
));
On.displayName = Gm.displayName;
const Ym = P2, Zm = _.createContext(
  {}
), Kr = ({
  ...e
}) => /* @__PURE__ */ l.jsx(Zm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ l.jsx(T2, { ...e }) }), yi = () => {
  const e = _.useContext(Zm), t = _.useContext(qm), { getFieldState: n, formState: r } = xi(), o = n(e.name, r);
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
}, qm = _.createContext(
  {}
), Cr = _.forwardRef(({ className: e, ...t }, n) => {
  const r = _.useId();
  return /* @__PURE__ */ l.jsx(qm.Provider, { value: { id: r }, children: /* @__PURE__ */ l.jsx("div", { ref: n, className: M("space-y-2", e), ...t }) });
});
Cr.displayName = "FormItem";
const Gr = _.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = yi();
  return /* @__PURE__ */ l.jsx(
    On,
    {
      ref: n,
      className: M(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Gr.displayName = "FormLabel";
const Ba = _.forwardRef(({ ...e }, t) => {
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
Ba.displayName = "FormControl";
const ko = _.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = yi();
  return /* @__PURE__ */ l.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: M("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
ko.displayName = "FormDescription";
const U2 = _.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = yi(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ l.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: M("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
U2.displayName = "FormMessage";
const Xm = "Dialog", [Qm, Jm] = ct(Xm), [K2, gn] = Qm(Xm), G2 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = Y(null), c = Y(null), [d = !1, u] = pt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(K2, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: ht(),
    titleId: ht(),
    descriptionId: ht(),
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
}, Y2 = "DialogTrigger", Z2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = gn(Y2, n), a = Pe(t, o.triggerRef);
  return /* @__PURE__ */ w(le.button, I({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": pd(o.open)
  }, r, {
    ref: a,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), eh = "DialogPortal", [q2, th] = Qm(eh, {
  forceMount: void 0
}), X2 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = gn(eh, t);
  return /* @__PURE__ */ w(q2, {
    scope: t,
    forceMount: n
  }, Tr.map(
    r,
    (s) => /* @__PURE__ */ w(dt, {
      present: n || a.open
    }, /* @__PURE__ */ w(fi, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Wc = "DialogOverlay", Q2 = /* @__PURE__ */ D((e, t) => {
  const n = th(Wc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = gn(Wc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(dt, {
    present: r || a.open
  }, /* @__PURE__ */ w(J2, I({}, o, {
    ref: t
  }))) : null;
}), J2 = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = gn(Wc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(Ia, {
      as: dn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(le.div, I({
      "data-state": pd(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), bo = "DialogContent", eC = /* @__PURE__ */ D((e, t) => {
  const n = th(bo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = gn(bo, e.__scopeDialog);
  return /* @__PURE__ */ w(dt, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(tC, I({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(nC, I({}, o, {
    ref: t
  })));
}), tC = /* @__PURE__ */ D((e, t) => {
  const n = gn(bo, e.__scopeDialog), r = Y(null), o = Pe(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return hi(a);
  }, []), /* @__PURE__ */ w(nh, I({}, e, {
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
}), nC = /* @__PURE__ */ D((e, t) => {
  const n = gn(bo, e.__scopeDialog), r = Y(!1), o = Y(!1);
  return /* @__PURE__ */ w(nh, I({}, e, {
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
}), nh = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = gn(bo, n), c = Y(null), d = Pe(t, c);
  return ci(), /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w(li, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(Hr, I({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": pd(i.open)
  }, s, {
    ref: d,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), rh = "DialogTitle", rC = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = gn(rh, n);
  return /* @__PURE__ */ w(le.h2, I({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), oC = "DialogDescription", aC = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = gn(oC, n);
  return /* @__PURE__ */ w(le.p, I({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), sC = "DialogClose", iC = /* @__PURE__ */ D((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = gn(sC, n);
  return /* @__PURE__ */ w(le.button, I({
    type: "button"
  }, r, {
    ref: t,
    onClick: X(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function pd(e) {
  return e ? "open" : "closed";
}
const cC = "DialogTitleWarning", [lC, A7] = Y1(cC, {
  contentName: bo,
  titleName: rh,
  docsSlug: "dialog"
}), Wa = G2, wi = Z2, Ha = X2, Yr = Q2, Zr = eC, jo = rC, Mo = aC, qr = iC, oh = Wa, I7 = wi, dC = Ha, L7 = qr, ah = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Yr,
  {
    ref: n,
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ah.displayName = Yr.displayName;
const md = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(dC, { children: [
  /* @__PURE__ */ l.jsx(ah, {}),
  /* @__PURE__ */ l.jsxs(
    Zr,
    {
      ref: r,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ l.jsxs(qr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ l.jsx(si, { className: "h-4 w-4" }),
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
md.displayName = Zr.displayName;
const uC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
uC.displayName = "DialogHeader";
const fC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
fC.displayName = "DialogFooter";
const pC = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  jo,
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
pC.displayName = jo.displayName;
const mC = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Mo,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
mC.displayName = Mo.displayName;
const hC = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
  const [d, u] = _.useState(!1);
  return s ? /* @__PURE__ */ l.jsxs("div", { className: M("w-full", a), children: [
    /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ l.jsx(Et, { className: "h-5 w-full" }) }),
    r && /* @__PURE__ */ l.jsx(Et, { className: "h-5 w-full" }),
    /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ l.jsx(Et, { className: "h-4 w-4 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }),
      /* @__PURE__ */ l.jsx(
        Et,
        {
          className: i()
        }
      ),
      o === "right" && /* @__PURE__ */ l.jsx(Et, { className: "h-4 w-4 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" })
    ] })
  ] }) : c.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: M("w-full", a), children: [
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
          children: d ? /* @__PURE__ */ l.jsx(Ja, { size: 18 }) : /* @__PURE__ */ l.jsx(Qa, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ l.jsx(
        oa,
        {
          ...c,
          className: M(i(), c.className),
          type: d ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => u((f) => !f),
          children: d ? /* @__PURE__ */ l.jsx(Ja, { size: 18 }) : /* @__PURE__ */ l.jsx(Qa, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ l.jsx(
    Kr,
    {
      control: t.control,
      name: e,
      render: ({ field: f, formState: p }) => {
        var m;
        return /* @__PURE__ */ l.jsxs(Cr, { className: M("w-full", a), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ l.jsxs(Gr, { className: "flex", children: [
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
          /* @__PURE__ */ l.jsx(Ba, { children: /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => u((h) => !h),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                disabled: c == null ? void 0 : c.disabled,
                children: d ? /* @__PURE__ */ l.jsx(Ja, { size: 18 }) : /* @__PURE__ */ l.jsx(Qa, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ l.jsx(
              oa,
              {
                ...f,
                ...c,
                disabled: c == null ? void 0 : c.disabled,
                className: M(i(), c.className),
                type: d ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => u((h) => !h),
                children: d ? /* @__PURE__ */ l.jsx(Ja, { size: 18 }) : /* @__PURE__ */ l.jsx(Qa, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, vC = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: d }) => c || c && d.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: M("w-full", s), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ l.jsx(Et, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ l.jsx(Et, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(
    Et,
    {
      className: M(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : d.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: M("w-full", s), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ l.jsxs(On, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ l.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ l.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ l.jsx(
      oa,
      {
        ...d,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ l.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ l.jsx(
  Kr,
  {
    control: t.control,
    name: e,
    render: ({ field: u, formState: f }) => {
      var p;
      return /* @__PURE__ */ l.jsxs(Cr, { className: M("w-full", s), children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ l.jsxs(Gr, { className: "flex", children: [
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
          /* @__PURE__ */ l.jsx(Ba, { children: /* @__PURE__ */ l.jsx(
            oa,
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
), oa = _.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ l.jsx(
    "input",
    {
      type: t,
      className: M(
        "w-full flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
oa.displayName = "InputUI";
function hd({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const d = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ l.jsx(
    hC,
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
    vC,
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
const gC = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), bC = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, ef = (e) => {
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
}, Nt = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: ef(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: ef(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function F7({ form: e, pid: t = Nt, format: n = !0 }) {
  var o, a, s, i, c, d, u, f, p, m, h, v, g, b, x, y, $;
  const r = (C) => {
    var j;
    const { value: E } = C.target, S = n ? gC(E) : E, N = ((j = t == null ? void 0 : t.number) == null ? void 0 : j.id) || Nt.number.id;
    e.setValue(N, S);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ l.jsx(
      i3,
      {
        id: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.id) || Nt.type.id,
        form: e,
        label: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.label) || Nt.type.label,
        items: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.items) || Nt.type.items,
        tabIndex: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.tabIndex) || Nt.type.tabIndex,
        placeholder: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.placeholder) || Nt.type.placeholder,
        defaultValue: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.defaultValue) || Nt.type.defaultValue,
        notFoundLabel: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.notFoundLabel) || Nt.type.notFoundLabel,
        ctaPlaceholder: ((f = t == null ? void 0 : t.type) == null ? void 0 : f.ctaPlaceholder) || Nt.type.ctaPlaceholder,
        buttonClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.buttonClassName) || Nt.type.buttonClassName,
        popoverClassName: ((m = t == null ? void 0 : t.type) == null ? void 0 : m.popoverClassName) || Nt.type.popoverClassName,
        disabled: (h = t == null ? void 0 : t.type) == null ? void 0 : h.disabled
      }
    ),
    /* @__PURE__ */ l.jsx(
      hd,
      {
        id: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.id) || Nt.number.id,
        form: e,
        type: "text",
        defaultValue: (g = t == null ? void 0 : t.number) == null ? void 0 : g.defaultValue,
        onKeyPress: bC,
        onKeyUp: r,
        tabIndex: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.tabIndex) || Nt.number.tabIndex,
        maxLength: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.maxLength) || Nt.number.maxLength,
        placeholder: ((y = t == null ? void 0 : t.number) == null ? void 0 : y.placeholder) || Nt.number.placeholder,
        disabled: ($ = t == null ? void 0 : t.number) == null ? void 0 : $.disabled
      }
    )
  ] });
}
const sh = "Popover", [ih, V7] = ct(sh, [
  Tn
]), vd = Tn(), [xC, To] = ih(sh), yC = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = vd(t), c = Y(null), [d, u] = q(!1), [f = !1, p] = pt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(Po, i, /* @__PURE__ */ w(xC, {
    scope: t,
    contentId: ht(),
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
}, wC = "PopoverTrigger", $C = /* @__PURE__ */ D((e, t) => {
  const { __scopePopover: n, ...r } = e, o = To(wC, n), a = vd(n), s = Pe(t, o.triggerRef), i = /* @__PURE__ */ w(le.button, I({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": dh(o.open)
  }, r, {
    ref: s,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ w(Ra, I({
    asChild: !0
  }, a), i);
}), ch = "PopoverPortal", [_C, CC] = ih(ch, {
  forceMount: void 0
}), SC = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = To(ch, t);
  return /* @__PURE__ */ w(_C, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(dt, {
    present: n || a.open
  }, /* @__PURE__ */ w(fi, {
    asChild: !0,
    container: o
  }, r)));
}, aa = "PopoverContent", NC = /* @__PURE__ */ D((e, t) => {
  const n = CC(aa, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = To(aa, e.__scopePopover);
  return /* @__PURE__ */ w(dt, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(EC, I({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(PC, I({}, o, {
    ref: t
  })));
}), EC = /* @__PURE__ */ D((e, t) => {
  const n = To(aa, e.__scopePopover), r = Y(null), o = Pe(t, r), a = Y(!1);
  return Q(() => {
    const s = r.current;
    if (s)
      return hi(s);
  }, []), /* @__PURE__ */ w(Ia, {
    as: dn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(lh, I({}, e, {
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
}), PC = /* @__PURE__ */ D((e, t) => {
  const n = To(aa, e.__scopePopover), r = Y(!1), o = Y(!1);
  return /* @__PURE__ */ w(lh, I({}, e, {
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
}), lh = /* @__PURE__ */ D((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: d, onInteractOutside: u, ...f } = e, p = To(aa, n), m = vd(n);
  return ci(), /* @__PURE__ */ w(li, {
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
    onFocusOutside: d,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ w(Aa, I({
    "data-state": dh(p.open),
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
function dh(e) {
  return e ? "open" : "closed";
}
const kC = yC, jC = $C, MC = SC, uh = NC, Un = kC, Kn = jC, En = _.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l.jsx(MC, { children: /* @__PURE__ */ l.jsx(
  uh,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: M(
      "z-50 w-72 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
En.displayName = uh.displayName;
const fh = _.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
    "textarea",
    {
      className: M(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
fh.displayName = "TextareaUI";
const z7 = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i || i && c.readOnly ? /* @__PURE__ */ l.jsxs("div", { className: M("w-full"), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ l.jsx(Et, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ l.jsx(Et, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(
    Et,
    {
      className: M("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ l.jsx(
  Kr,
  {
    control: t.control,
    name: e,
    render: ({ field: d, formState: u }) => {
      var f;
      return /* @__PURE__ */ l.jsxs(Cr, { className: M("w-full", s), children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ l.jsxs(Gr, { className: "flex", children: [
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
        /* @__PURE__ */ l.jsx(Ba, { children: /* @__PURE__ */ l.jsx(
          fh,
          {
            placeholder: a,
            className: M("resize-none", r),
            ...d,
            ...c
          }
        ) })
      ] });
    }
  }
);
function sa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Oo(e) {
  const t = Y({
    value: e,
    previous: e
  });
  return Gt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const ph = /* @__PURE__ */ D((e, t) => /* @__PURE__ */ w(le.span, I({}, e, {
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
}))), mh = ph, TC = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], OC = [
  " ",
  "Enter"
], $i = "Select", [_i, gd, DC] = wr($i), [Do, B7] = ct($i, [
  DC,
  Tn
]), bd = Tn(), [RC, Xr] = Do($i), [AC, IC] = Do($i), LC = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: d, name: u, autoComplete: f, disabled: p, required: m } = e, h = bd(t), [v, g] = q(null), [b, x] = q(null), [y, $] = q(!1), C = Mn(d), [E = !1, S] = pt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [N, j] = pt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), V = Y(null), L = v ? !!v.closest("form") : !0, [B, Z] = q(/* @__PURE__ */ new Set()), T = Array.from(B).map(
    (O) => O.props.value
  ).join(";");
  return /* @__PURE__ */ w(Po, h, /* @__PURE__ */ w(RC, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: x,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: $,
    contentId: ht(),
    value: N,
    onValueChange: j,
    open: E,
    onOpenChange: S,
    dir: C,
    triggerPointerDownPosRef: V,
    disabled: p
  }, /* @__PURE__ */ w(_i.Provider, {
    scope: t
  }, /* @__PURE__ */ w(AC, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ge((O) => {
      Z(
        (F) => new Set(F).add(O)
      );
    }, []),
    onNativeOptionRemove: ge((O) => {
      Z((F) => {
        const A = new Set(F);
        return A.delete(O), A;
      });
    }, [])
  }, n)), L ? /* @__PURE__ */ w(bh, {
    key: T,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: f,
    value: N,
    onChange: (O) => j(O.target.value),
    disabled: p
  }, N === void 0 ? /* @__PURE__ */ w("option", {
    value: ""
  }) : null, Array.from(B)) : null));
}, FC = "SelectTrigger", VC = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = bd(n), s = Xr(FC, n), i = s.disabled || r, c = Pe(t, s.onTriggerChange), d = gd(n), [u, f, p] = xh((h) => {
    const v = d().filter(
      (x) => !x.disabled
    ), g = v.find(
      (x) => x.value === s.value
    ), b = yh(v, h, g);
    b !== void 0 && s.onValueChange(b.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ w(Ra, I({
    asChild: !0
  }, a), /* @__PURE__ */ w(le.button, I({
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
    "data-placeholder": gh(s.value) ? "" : void 0
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
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && f(h.key), !(v && h.key === " ") && TC.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), zC = "SelectValue", BC = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = Xr(zC, n), { onValueNodeHasChildrenChange: d } = c, u = a !== void 0, f = Pe(t, c.onValueNodeChange);
  return _t(() => {
    d(u);
  }, [
    d,
    u
  ]), /* @__PURE__ */ w(le.span, I({}, i, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), gh(c.value) ? /* @__PURE__ */ w(ln, null, s) : a);
}), WC = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ w(le.span, I({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), HC = (e) => /* @__PURE__ */ w(fi, I({
  asChild: !0
}, e)), xo = "SelectContent", UC = /* @__PURE__ */ D((e, t) => {
  const n = Xr(xo, e.__scopeSelect), [r, o] = q();
  if (_t(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Zf(/* @__PURE__ */ w(hh, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w(_i.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ w(KC, I({}, e, {
    ref: t
  }));
}), Vn = 10, [hh, Ci] = Do(xo), KC = /* @__PURE__ */ D((e, t) => {
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
  } = e, x = Xr(xo, n), [y, $] = q(null), [C, E] = q(null), S = Pe(
    t,
    (re) => $(re)
  ), [N, j] = q(null), [V, L] = q(null), B = gd(n), [Z, T] = q(!1), O = Y(!1);
  Q(() => {
    if (y)
      return hi(y);
  }, [
    y
  ]), ci();
  const F = ge((re) => {
    const [he, ...Ne] = B().map(
      (W) => W.ref.current
    ), [ae] = Ne.slice(-1), de = document.activeElement;
    for (const W of re)
      if (W === de || (W == null || W.scrollIntoView({
        block: "nearest"
      }), W === he && C && (C.scrollTop = 0), W === ae && C && (C.scrollTop = C.scrollHeight), W == null || W.focus(), document.activeElement !== de))
        return;
  }, [
    B,
    C
  ]), A = ge(
    () => F([
      N,
      y
    ]),
    [
      F,
      N,
      y
    ]
  );
  Q(() => {
    Z && A();
  }, [
    Z,
    A
  ]);
  const { onOpenChange: H, triggerPointerDownPosRef: G } = x;
  Q(() => {
    if (y) {
      let re = {
        x: 0,
        y: 0
      };
      const he = (ae) => {
        var de, W, te, $e;
        re = {
          x: Math.abs(Math.round(ae.pageX) - ((de = (W = G.current) === null || W === void 0 ? void 0 : W.x) !== null && de !== void 0 ? de : 0)),
          y: Math.abs(Math.round(ae.pageY) - ((te = ($e = G.current) === null || $e === void 0 ? void 0 : $e.y) !== null && te !== void 0 ? te : 0))
        };
      }, Ne = (ae) => {
        re.x <= 10 && re.y <= 10 ? ae.preventDefault() : y.contains(ae.target) || H(!1), document.removeEventListener("pointermove", he), G.current = null;
      };
      return G.current !== null && (document.addEventListener("pointermove", he), document.addEventListener("pointerup", Ne, {
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
    H,
    G
  ]), Q(() => {
    const re = () => H(!1);
    return window.addEventListener("blur", re), window.addEventListener("resize", re), () => {
      window.removeEventListener("blur", re), window.removeEventListener("resize", re);
    };
  }, [
    H
  ]);
  const [ne, me] = xh((re) => {
    const he = B().filter(
      (de) => !de.disabled
    ), Ne = he.find(
      (de) => de.ref.current === document.activeElement
    ), ae = yh(he, re, Ne);
    ae && setTimeout(
      () => ae.ref.current.focus()
    );
  }), K = ge((re, he, Ne) => {
    const ae = !O.current && !Ne;
    (x.value !== void 0 && x.value === he || ae) && (j(re), ae && (O.current = !0));
  }, [
    x.value
  ]), ue = ge(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), ye = ge((re, he, Ne) => {
    const ae = !O.current && !Ne;
    (x.value !== void 0 && x.value === he || ae) && L(re);
  }, [
    x.value
  ]), fe = r === "popper" ? tf : GC, J = fe === tf ? {
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
  return /* @__PURE__ */ w(hh, {
    scope: n,
    content: y,
    viewport: C,
    onViewportChange: E,
    itemRefCallback: K,
    selectedItem: N,
    onItemLeave: ue,
    itemTextRefCallback: ye,
    focusSelectedItem: A,
    selectedItemText: V,
    position: r,
    isPositioned: Z,
    searchRef: ne
  }, /* @__PURE__ */ w(Ia, {
    as: dn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(li, {
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
  }, /* @__PURE__ */ w(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (re) => re.preventDefault(),
    onDismiss: () => x.onOpenChange(!1)
  }, /* @__PURE__ */ w(fe, I({
    role: "listbox",
    id: x.contentId,
    "data-state": x.open ? "open" : "closed",
    dir: x.dir,
    onContextMenu: (re) => re.preventDefault()
  }, b, J, {
    onPlaced: () => T(!0),
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
        let ae = B().filter(
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
          const de = re.target, W = ae.indexOf(de);
          ae = ae.slice(W + 1);
        }
        setTimeout(
          () => F(ae)
        ), re.preventDefault();
      }
    })
  }))))));
}), GC = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Xr(xo, n), s = Ci(xo, n), [i, c] = q(null), [d, u] = q(null), f = Pe(
    t,
    (S) => u(S)
  ), p = gd(n), m = Y(!1), h = Y(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: x } = s, y = ge(() => {
    if (a.trigger && a.valueNode && i && d && v && g && b) {
      const S = a.trigger.getBoundingClientRect(), N = d.getBoundingClientRect(), j = a.valueNode.getBoundingClientRect(), V = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const de = V.left - N.left, W = j.left - de, te = S.left - W, $e = S.width + te, ke = Math.max($e, N.width), Le = window.innerWidth - Vn, je = sa(W, [
          Vn,
          Le - ke
        ]);
        i.style.minWidth = $e + "px", i.style.left = je + "px";
      } else {
        const de = N.right - V.right, W = window.innerWidth - j.right - de, te = window.innerWidth - S.right - W, $e = S.width + te, ke = Math.max($e, N.width), Le = window.innerWidth - Vn, je = sa(W, [
          Vn,
          Le - ke
        ]);
        i.style.minWidth = $e + "px", i.style.right = je + "px";
      }
      const L = p(), B = window.innerHeight - Vn * 2, Z = v.scrollHeight, T = window.getComputedStyle(d), O = parseInt(T.borderTopWidth, 10), F = parseInt(T.paddingTop, 10), A = parseInt(T.borderBottomWidth, 10), H = parseInt(T.paddingBottom, 10), G = O + F + Z + H + A, ne = Math.min(g.offsetHeight * 5, G), me = window.getComputedStyle(v), K = parseInt(me.paddingTop, 10), ue = parseInt(me.paddingBottom, 10), ye = S.top + S.height / 2 - Vn, fe = B - ye, J = g.offsetHeight / 2, re = g.offsetTop + J, he = O + F + re, Ne = G - he;
      if (he <= ye) {
        const de = g === L[L.length - 1].ref.current;
        i.style.bottom = "0px";
        const W = d.clientHeight - v.offsetTop - v.offsetHeight, te = Math.max(fe, J + (de ? ue : 0) + W + A), $e = he + te;
        i.style.height = $e + "px";
      } else {
        const de = g === L[0].ref.current;
        i.style.top = "0px";
        const te = Math.max(ye, O + v.offsetTop + (de ? K : 0) + J) + Ne;
        i.style.height = te + "px", v.scrollTop = he - ye + v.offsetTop;
      }
      i.style.margin = `${Vn}px 0`, i.style.minHeight = ne + "px", i.style.maxHeight = B + "px", r == null || r(), requestAnimationFrame(
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
  _t(
    () => y(),
    [
      y
    ]
  );
  const [$, C] = q();
  _t(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [
    d
  ]);
  const E = ge((S) => {
    S && h.current === !0 && (y(), x == null || x(), h.current = !1);
  }, [
    y,
    x
  ]);
  return /* @__PURE__ */ w(YC, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: E
  }, /* @__PURE__ */ w("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: $
    }
  }, /* @__PURE__ */ w(le.div, I({}, o, {
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
}), tf = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Vn, ...a } = e, s = bd(n);
  return /* @__PURE__ */ w(Aa, I({}, s, a, {
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
}), [YC, ZC] = Do(xo, {}), nf = "SelectViewport", qC = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Ci(nf, n), a = ZC(nf, n), s = Pe(t, o.onViewportChange), i = Y(0);
  return /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(_i.Slot, {
    scope: n
  }, /* @__PURE__ */ w(le.div, I({
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
}), XC = "SelectGroup", [QC, JC] = Do(XC), eS = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = ht();
  return /* @__PURE__ */ w(QC, {
    scope: n,
    id: o
  }, /* @__PURE__ */ w(le.div, I({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), tS = "SelectLabel", nS = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = JC(tS, n);
  return /* @__PURE__ */ w(le.div, I({
    id: o.id
  }, r, {
    ref: t
  }));
}), Hc = "SelectItem", [rS, vh] = Do(Hc), oS = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = Xr(Hc, n), c = Ci(Hc, n), d = i.value === r, [u, f] = q(a ?? ""), [p, m] = q(!1), h = Pe(t, (b) => {
    var x;
    return (x = c.itemRefCallback) === null || x === void 0 ? void 0 : x.call(c, b, r, o);
  }), v = ht(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  if (r === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ w(rS, {
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
  }, /* @__PURE__ */ w(le.div, I({
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
      ((x = c.searchRef) === null || x === void 0 ? void 0 : x.current) !== "" && b.key === " " || (OC.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), ls = "SelectItemText", aS = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Xr(ls, n), i = Ci(ls, n), c = vh(ls, n), d = IC(ls, n), [u, f] = q(null), p = Pe(
    t,
    (b) => f(b),
    c.onItemTextChange,
    (b) => {
      var x;
      return (x = i.itemTextRefCallback) === null || x === void 0 ? void 0 : x.call(i, b, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, h = Gt(
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
  return _t(() => (v(h), () => g(h)), [
    v,
    g,
    h
  ]), /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w(le.span, I({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Zf(a.children, s.valueNode) : null);
}), sS = "SelectItemIndicator", iS = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return vh(sS, n).isSelected ? /* @__PURE__ */ w(le.span, I({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), cS = /* @__PURE__ */ D((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ w(le.div, I({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
});
function gh(e) {
  return e === "" || e === void 0;
}
const bh = /* @__PURE__ */ D((e, t) => {
  const { value: n, ...r } = e, o = Y(null), a = Pe(t, o), s = Oo(n);
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
  ]), /* @__PURE__ */ w(ph, {
    asChild: !0
  }, /* @__PURE__ */ w("select", I({}, r, {
    ref: a,
    defaultValue: n
  })));
});
bh.displayName = "BubbleSelect";
function xh(e) {
  const t = Qe(e), n = Y(""), r = Y(0), o = ge((s) => {
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
function yh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (d) => d === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = lS(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (d) => d !== n
  ));
  const c = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function lS(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const dS = LC, wh = VC, uS = BC, fS = WC, pS = HC, $h = UC, mS = qC, hS = eS, _h = nS, Ch = oS, vS = aS, gS = iS, Sh = cS, xd = dS, bS = hS, yd = uS, Si = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  wh,
  {
    ref: r,
    className: M(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(fS, { asChild: !0, children: /* @__PURE__ */ l.jsx(Jo, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Si.displayName = wh.displayName;
const Ni = _.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ l.jsx(pS, { children: /* @__PURE__ */ l.jsx(
  $h,
  {
    ref: o,
    className: M(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ l.jsx(
      mS,
      {
        className: M(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Ni.displayName = $h.displayName;
const xS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  _h,
  {
    ref: n,
    className: M("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
xS.displayName = _h.displayName;
const Ei = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Ch,
  {
    ref: r,
    className: M(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(gS, { children: /* @__PURE__ */ l.jsx(un, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ l.jsx(vS, { children: t })
    ]
  }
));
Ei.displayName = Ch.displayName;
const yS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Sh,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
yS.displayName = Sh.displayName;
const Nh = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Nh.displayName = "Card";
const wS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
wS.displayName = "CardHeader";
const $S = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "h3",
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
$S.displayName = "CardTitle";
const _S = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "p",
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
_S.displayName = "CardDescription";
const CS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: M("p-6 pt-0", e), ...t }));
CS.displayName = "CardContent";
const SS = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M(" flex items-center p-6 pt-0", e),
    ...t
  }
));
SS.displayName = "CardFooter";
const Eh = "Checkbox", [NS, W7] = ct(Eh), [ES, PS] = NS(Eh), kS = /* @__PURE__ */ D((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: d, ...u } = e, [f, p] = q(null), m = Pe(
    t,
    (y) => p(y)
  ), h = Y(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = pt({
    prop: o,
    defaultProp: a,
    onChange: d
  }), x = Y(g);
  return Q(() => {
    const y = f == null ? void 0 : f.form;
    if (y) {
      const $ = () => b(x.current);
      return y.addEventListener("reset", $), () => y.removeEventListener("reset", $);
    }
  }, [
    f,
    b
  ]), /* @__PURE__ */ w(ES, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ w(le.button, Ee({
    type: "button",
    role: "checkbox",
    "aria-checked": Dr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": Ph(g),
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
        ($) => Dr($) ? !0 : !$
      ), v && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(TS, {
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
}), jS = "CheckboxIndicator", MS = /* @__PURE__ */ D((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = PS(jS, n);
  return /* @__PURE__ */ w(dt, {
    present: r || Dr(a.state) || a.state === !0
  }, /* @__PURE__ */ w(le.span, Ee({
    "data-state": Ph(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), TS = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = Y(null), s = Oo(n), i = Da(t);
  return Q(() => {
    const c = a.current, d = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Dr(n), f.call(c, Dr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", Ee({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Dr(n) ? !1 : n
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
function Dr(e) {
  return e === "indeterminate";
}
function Ph(e) {
  return Dr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const kh = kS, OS = MS, jh = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  kh,
  {
    ref: n,
    className: M(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(
      OS,
      {
        className: M("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ l.jsx(un, { className: "h-4 w-4" })
      }
    )
  }
));
jh.displayName = kh.displayName;
const Mh = "DropdownMenu", [DS, H7] = ct(Mh, [
  La
]), At = La(), [RS, Th] = DS(Mh), AS = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = At(t), d = Y(null), [u = !1, f] = pt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ w(RS, {
    scope: t,
    triggerId: ht(),
    triggerRef: d,
    contentId: ht(),
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
  }, /* @__PURE__ */ w(Gl, I({}, c, {
    open: u,
    onOpenChange: f,
    dir: r,
    modal: i
  }), n));
}, IS = "DropdownMenuTrigger", LS = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Th(IS, n), s = At(n);
  return /* @__PURE__ */ w(Yl, I({
    asChild: !0
  }, s), /* @__PURE__ */ w(le.button, I({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: Pa(t, a.triggerRef),
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
}), FS = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = At(t);
  return /* @__PURE__ */ w(Zl, I({}, r, n));
}, VS = "DropdownMenuContent", zS = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Th(VS, n), a = At(n), s = Y(!1);
  return /* @__PURE__ */ w(ql, I({
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
}), BS = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Xl, I({}, o, r, {
    ref: t
  }));
}), WS = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Ql, I({}, o, r, {
    ref: t
  }));
}), HS = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Jl, I({}, o, r, {
    ref: t
  }));
}), US = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ed, I({}, o, r, {
    ref: t
  }));
}), KS = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(td, I({}, o, r, {
    ref: t
  }));
}), GS = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(nd, I({}, o, r, {
    ref: t
  }));
}), YS = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(rd, I({}, o, r, {
    ref: t
  }));
}), ZS = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(od, I({}, o, r, {
    ref: t
  }));
}), qS = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = At(t), [i = !1, c] = pt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(ad, I({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, XS = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(sd, I({}, o, r, {
    ref: t
  }));
}), QS = /* @__PURE__ */ D((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(id, I({}, o, r, {
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
}), JS = AS, eN = LS, Oh = FS, Dh = zS, tN = BS, Rh = WS, Ah = HS, Ih = US, nN = KS, Lh = GS, Fh = YS, Vh = ZS, rN = qS, zh = XS, Bh = QS, U7 = JS, K7 = eN, G7 = tN, Y7 = Oh, Z7 = rN, q7 = nN, oN = _.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  zh,
  {
    ref: o,
    className: M(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ l.jsx(yr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
oN.displayName = zh.displayName;
const aN = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bh,
  {
    ref: n,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
aN.displayName = Bh.displayName;
const sN = _.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l.jsx(Oh, { children: /* @__PURE__ */ l.jsx(
  Dh,
  {
    ref: r,
    sideOffset: t,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
sN.displayName = Dh.displayName;
const iN = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Ah,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
iN.displayName = Ah.displayName;
const cN = _.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Ih,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Fh, { children: /* @__PURE__ */ l.jsx(un, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
cN.displayName = Ih.displayName;
const lN = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Lh,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Fh, { children: /* @__PURE__ */ l.jsx(ai, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
lN.displayName = Lh.displayName;
const dN = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Rh,
  {
    ref: r,
    className: M(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
dN.displayName = Rh.displayName;
const uN = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Vh,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
uN.displayName = Vh.displayName;
const fN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: M("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
fN.displayName = "DropdownMenuShortcut";
const Uc = "horizontal", pN = [
  "horizontal",
  "vertical"
], Wh = /* @__PURE__ */ D((e, t) => {
  const { decorative: n, orientation: r = Uc, ...o } = e, a = Hh(r) ? r : Uc, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ w(le.div, Ee({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
Wh.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Hh(r) ? new Error(mN(o, n)) : null;
  }
};
function mN(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Uc}\`.`;
}
function Hh(e) {
  return pN.includes(e);
}
const Uh = Wh, Ua = _.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ l.jsx(
    Uh,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: M(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
Ua.displayName = Uh.displayName;
var rf = 1, hN = 0.9, vN = 0.8, gN = 0.17, pc = 0.1, mc = 0.999, bN = 0.9999, xN = 0.99, yN = /[\\\/_+.#"@\[\(\{&]/, wN = /[\\\/_+.#"@\[\(\{&]/g, $N = /[\s-]/, Kh = /[\s-]/g;
function Kc(e, t, n, r, o, a, s) {
  if (a === t.length)
    return o === e.length ? rf : xN;
  var i = `${o},${a}`;
  if (s[i] !== void 0)
    return s[i];
  for (var c = r.charAt(a), d = n.indexOf(c, o), u = 0, f, p, m, h; d >= 0; )
    f = Kc(e, t, n, r, d + 1, a + 1, s), f > u && (d === o ? f *= rf : yN.test(e.charAt(d - 1)) ? (f *= vN, m = e.slice(o, d - 1).match(wN), m && o > 0 && (f *= Math.pow(mc, m.length))) : $N.test(e.charAt(d - 1)) ? (f *= hN, h = e.slice(o, d - 1).match(Kh), h && o > 0 && (f *= Math.pow(mc, h.length))) : (f *= gN, o > 0 && (f *= Math.pow(mc, d - o))), e.charAt(d) !== t.charAt(a) && (f *= bN)), (f < pc && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = Kc(e, t, n, r, d + 1, a + 2, s), p * pc > f && (f = p * pc)), f > u && (u = f), d = n.indexOf(c, d + 1);
  return s[i] = u, u;
}
function of(e) {
  return e.toLowerCase().replace(Kh, " ");
}
function _N(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Kc(e, t, of(e), of(t), 0, 0, {});
}
var Uo = '[cmdk-group=""]', hc = '[cmdk-group-items=""]', CN = '[cmdk-group-heading=""]', wd = '[cmdk-item=""]', af = `${wd}:not([aria-disabled="true"])`, Gc = "cmdk-item-select", kr = "data-value", SN = (e, t, n) => _N(e, t, n), Gh = _.createContext(void 0), Ka = () => _.useContext(Gh), Yh = _.createContext(void 0), $d = () => _.useContext(Yh), Zh = _.createContext(void 0), qh = _.forwardRef((e, t) => {
  let n = ao(() => {
    var K, ue;
    return { search: "", value: (ue = (K = e.value) != null ? K : e.defaultValue) != null ? ue : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = ao(() => /* @__PURE__ */ new Set()), o = ao(() => /* @__PURE__ */ new Map()), a = ao(() => /* @__PURE__ */ new Map()), s = ao(() => /* @__PURE__ */ new Set()), i = Qh(e), { label: c, children: d, value: u, onValueChange: f, filter: p, shouldFilter: m, loop: h, disablePointerSelection: v = !1, vimBindings: g = !0, ...b } = e, x = _.useId(), y = _.useId(), $ = _.useId(), C = _.useRef(null), E = RN();
  Lr(() => {
    if (u !== void 0) {
      let K = u.trim();
      n.current.value = K, S.emit();
    }
  }, [u]), Lr(() => {
    E(6, Z);
  }, []);
  let S = _.useMemo(() => ({ subscribe: (K) => (s.current.add(K), () => s.current.delete(K)), snapshot: () => n.current, setState: (K, ue, ye) => {
    var fe, J, re;
    if (!Object.is(n.current[K], ue)) {
      if (n.current[K] = ue, K === "search")
        B(), V(), E(1, L);
      else if (K === "value" && (ye || E(5, Z), ((fe = i.current) == null ? void 0 : fe.value) !== void 0)) {
        let he = ue ?? "";
        (re = (J = i.current).onValueChange) == null || re.call(J, he);
        return;
      }
      S.emit();
    }
  }, emit: () => {
    s.current.forEach((K) => K());
  } }), []), N = _.useMemo(() => ({ value: (K, ue, ye) => {
    var fe;
    ue !== ((fe = a.current.get(K)) == null ? void 0 : fe.value) && (a.current.set(K, { value: ue, keywords: ye }), n.current.filtered.items.set(K, j(ue, ye)), E(2, () => {
      V(), S.emit();
    }));
  }, item: (K, ue) => (r.current.add(K), ue && (o.current.has(ue) ? o.current.get(ue).add(K) : o.current.set(ue, /* @__PURE__ */ new Set([K]))), E(3, () => {
    B(), V(), n.current.value || L(), S.emit();
  }), () => {
    a.current.delete(K), r.current.delete(K), n.current.filtered.items.delete(K);
    let ye = T();
    E(4, () => {
      B(), (ye == null ? void 0 : ye.getAttribute("id")) === K && L(), S.emit();
    });
  }), group: (K) => (o.current.has(K) || o.current.set(K, /* @__PURE__ */ new Set()), () => {
    a.current.delete(K), o.current.delete(K);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], disablePointerSelection: v, listId: x, inputId: $, labelId: y, listInnerRef: C }), []);
  function j(K, ue) {
    var ye, fe;
    let J = (fe = (ye = i.current) == null ? void 0 : ye.filter) != null ? fe : SN;
    return K ? J(K, n.current.search, ue) : 0;
  }
  function V() {
    if (!n.current.search || i.current.shouldFilter === !1)
      return;
    let K = n.current.filtered.items, ue = [];
    n.current.filtered.groups.forEach((fe) => {
      let J = o.current.get(fe), re = 0;
      J.forEach((he) => {
        let Ne = K.get(he);
        re = Math.max(Ne, re);
      }), ue.push([fe, re]);
    });
    let ye = C.current;
    O().sort((fe, J) => {
      var re, he;
      let Ne = fe.getAttribute("id"), ae = J.getAttribute("id");
      return ((re = K.get(ae)) != null ? re : 0) - ((he = K.get(Ne)) != null ? he : 0);
    }).forEach((fe) => {
      let J = fe.closest(hc);
      J ? J.appendChild(fe.parentElement === J ? fe : fe.closest(`${hc} > *`)) : ye.appendChild(fe.parentElement === ye ? fe : fe.closest(`${hc} > *`));
    }), ue.sort((fe, J) => J[1] - fe[1]).forEach((fe) => {
      let J = C.current.querySelector(`${Uo}[${kr}="${encodeURIComponent(fe[0])}"]`);
      J == null || J.parentElement.appendChild(J);
    });
  }
  function L() {
    let K = O().find((ye) => ye.getAttribute("aria-disabled") !== "true"), ue = K == null ? void 0 : K.getAttribute(kr);
    S.setState("value", ue || void 0);
  }
  function B() {
    var K, ue, ye, fe;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let J = 0;
    for (let re of r.current) {
      let he = (ue = (K = a.current.get(re)) == null ? void 0 : K.value) != null ? ue : "", Ne = (fe = (ye = a.current.get(re)) == null ? void 0 : ye.keywords) != null ? fe : [], ae = j(he, Ne);
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
  function Z() {
    var K, ue, ye;
    let fe = T();
    fe && (((K = fe.parentElement) == null ? void 0 : K.firstChild) === fe && ((ye = (ue = fe.closest(Uo)) == null ? void 0 : ue.querySelector(CN)) == null || ye.scrollIntoView({ block: "nearest" })), fe.scrollIntoView({ block: "nearest" }));
  }
  function T() {
    var K;
    return (K = C.current) == null ? void 0 : K.querySelector(`${wd}[aria-selected="true"]`);
  }
  function O() {
    var K;
    return Array.from((K = C.current) == null ? void 0 : K.querySelectorAll(af));
  }
  function F(K) {
    let ue = O()[K];
    ue && S.setState("value", ue.getAttribute(kr));
  }
  function A(K) {
    var ue;
    let ye = T(), fe = O(), J = fe.findIndex((he) => he === ye), re = fe[J + K];
    (ue = i.current) != null && ue.loop && (re = J + K < 0 ? fe[fe.length - 1] : J + K === fe.length ? fe[0] : fe[J + K]), re && S.setState("value", re.getAttribute(kr));
  }
  function H(K) {
    let ue = T(), ye = ue == null ? void 0 : ue.closest(Uo), fe;
    for (; ye && !fe; )
      ye = K > 0 ? ON(ye, Uo) : DN(ye, Uo), fe = ye == null ? void 0 : ye.querySelector(af);
    fe ? S.setState("value", fe.getAttribute(kr)) : A(K);
  }
  let G = () => F(O().length - 1), ne = (K) => {
    K.preventDefault(), K.metaKey ? G() : K.altKey ? H(1) : A(1);
  }, me = (K) => {
    K.preventDefault(), K.metaKey ? F(0) : K.altKey ? H(-1) : A(-1);
  };
  return _.createElement(le.div, { ref: t, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (K) => {
    var ue;
    if ((ue = b.onKeyDown) == null || ue.call(b, K), !K.defaultPrevented)
      switch (K.key) {
        case "n":
        case "j": {
          g && K.ctrlKey && ne(K);
          break;
        }
        case "ArrowDown": {
          ne(K);
          break;
        }
        case "p":
        case "k": {
          g && K.ctrlKey && me(K);
          break;
        }
        case "ArrowUp": {
          me(K);
          break;
        }
        case "Home": {
          K.preventDefault(), F(0);
          break;
        }
        case "End": {
          K.preventDefault(), G();
          break;
        }
        case "Enter":
          if (!K.nativeEvent.isComposing && K.keyCode !== 229) {
            K.preventDefault();
            let ye = T();
            if (ye) {
              let fe = new Event(Gc);
              ye.dispatchEvent(fe);
            }
          }
      }
  } }, _.createElement("label", { "cmdk-label": "", htmlFor: N.inputId, id: N.labelId, style: IN }, c), Pi(e, (K) => _.createElement(Yh.Provider, { value: S }, _.createElement(Gh.Provider, { value: N }, K))));
}), NN = _.forwardRef((e, t) => {
  var n, r;
  let o = _.useId(), a = _.useRef(null), s = _.useContext(Zh), i = Ka(), c = Qh(e), d = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Lr(() => {
    if (!d)
      return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let u = Jh(o, a, [e.value, e.children, a], e.keywords), f = $d(), p = Fr((E) => E.value && E.value === u.current), m = Fr((E) => d || i.filter() === !1 ? !0 : E.search ? E.filtered.items.get(o) > 0 : !0);
  _.useEffect(() => {
    let E = a.current;
    if (!(!E || e.disabled))
      return E.addEventListener(Gc, h), () => E.removeEventListener(Gc, h);
  }, [m, e.onSelect, e.disabled]);
  function h() {
    var E, S;
    v(), (S = (E = c.current).onSelect) == null || S.call(E, u.current);
  }
  function v() {
    f.setState("value", u.current, !0);
  }
  if (!m)
    return null;
  let { disabled: g, value: b, onSelect: x, forceMount: y, keywords: $, ...C } = e;
  return _.createElement(le.div, { ref: ia([a, t]), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.disablePointerSelection ? void 0 : v, onClick: g ? void 0 : h }, e.children);
}), EN = _.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = _.useId(), i = _.useRef(null), c = _.useRef(null), d = _.useId(), u = Ka(), f = Fr((m) => o || u.filter() === !1 ? !0 : m.search ? m.filtered.groups.has(s) : !0);
  Lr(() => u.group(s), []), Jh(s, i, [e.value, e.heading, c]);
  let p = _.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return _.createElement(le.div, { ref: ia([i, t]), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && _.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), Pi(e, (m) => _.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, _.createElement(Zh.Provider, { value: p }, m))));
}), PN = _.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = _.useRef(null), a = Fr((s) => !s.search);
  return !n && !a ? null : _.createElement(le.div, { ref: ia([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), kN = _.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = $d(), s = Fr((u) => u.search), i = Fr((u) => u.value), c = Ka(), d = _.useMemo(() => {
    var u;
    let f = (u = c.listInnerRef.current) == null ? void 0 : u.querySelector(`${wd}[${kr}="${encodeURIComponent(i)}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, []);
  return _.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), _.createElement(le.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": d, id: c.inputId, type: "text", value: o ? e.value : s, onChange: (u) => {
    o || a.setState("search", u.target.value), n == null || n(u.target.value);
  } });
}), Xh = _.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = _.useRef(null), s = _.useRef(null), i = Ka();
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
  }, []), _.createElement(le.div, { ref: ia([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": r, id: i.listId }, Pi(e, (c) => _.createElement("div", { ref: ia([s, i.listInnerRef]), "cmdk-list-sizer": "" }, c)));
}), jN = _.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return _.createElement(Wa, { open: n, onOpenChange: r }, _.createElement(Ha, { container: s }, _.createElement(Yr, { "cmdk-overlay": "", className: o }), _.createElement(Zr, { "aria-label": e.label, "cmdk-dialog": "", className: a }, _.createElement(qh, { ref: t, ...i }))));
}), MN = _.forwardRef((e, t) => Fr((n) => n.filtered.count === 0) ? _.createElement(le.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), TN = _.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return _.createElement(le.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Pi(e, (s) => _.createElement("div", { "aria-hidden": !0 }, s)));
}), Bt = Object.assign(qh, { List: Xh, Item: NN, Input: kN, Group: EN, Separator: PN, Dialog: jN, Empty: MN, Loading: TN });
function ON(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function DN(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function Qh(e) {
  let t = _.useRef(e);
  return Lr(() => {
    t.current = e;
  }), t;
}
var Lr = typeof window > "u" ? _.useEffect : _.useLayoutEffect;
function ao(e) {
  let t = _.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function ia(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Fr(e) {
  let t = $d(), n = () => e(t.snapshot());
  return _.useSyncExternalStore(t.subscribe, n, n);
}
function Jh(e, t, n, r = []) {
  let o = _.useRef(), a = Ka();
  return Lr(() => {
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
    a.value(e, i, c), (s = t.current) == null || s.setAttribute(kr, i), o.current = i;
  }), o;
}
var RN = () => {
  let [e, t] = _.useState(), n = ao(() => /* @__PURE__ */ new Map());
  return Lr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function AN(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Pi({ asChild: e, children: t }, n) {
  return e && _.isValidElement(t) ? _.cloneElement(AN(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var IN = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Gn = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bt,
  {
    ref: n,
    className: M(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Gn.displayName = Bt.displayName;
const X7 = ({ children: e, ...t }) => /* @__PURE__ */ l.jsx(oh, { ...t, children: /* @__PURE__ */ l.jsx(md, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ l.jsx(Gn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), mr = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ l.jsx(Es, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ l.jsx(
    Bt.Input,
    {
      ref: n,
      className: M(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
mr.displayName = Bt.Input.displayName;
const Ro = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bt.List,
  {
    ref: n,
    className: M("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Ro.displayName = Bt.List.displayName;
const hr = _.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
  Bt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
hr.displayName = Bt.Empty.displayName;
const mn = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bt.Group,
  {
    ref: n,
    className: M(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
mn.displayName = Bt.Group.displayName;
const ki = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bt.Separator,
  {
    ref: n,
    className: M("-mx-1 h-px bg-border", e),
    ...t
  }
));
ki.displayName = Bt.Separator.displayName;
const hn = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Bt.Item,
  {
    ref: n,
    className: M("cmdk-item relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer", e),
    ...t
  }
));
hn.displayName = Bt.Item.displayName;
const LN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: M(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
LN.displayName = "CommandShortcut";
const FN = /* @__PURE__ */ D((e, t) => {
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
  }, /* @__PURE__ */ w(le.div, Ee({}, o, {
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
}), VN = FN, Q7 = VN;
function zN(e, t) {
  return xl((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ev = "ScrollArea", [tv, J7] = ct(ev), [BN, Qt] = tv(ev), WN = /* @__PURE__ */ D((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = q(null), [d, u] = q(null), [f, p] = q(null), [m, h] = q(null), [v, g] = q(null), [b, x] = q(0), [y, $] = q(0), [C, E] = q(!1), [S, N] = q(!1), j = Pe(
    t,
    (L) => c(L)
  ), V = Mn(o);
  return /* @__PURE__ */ w(BN, {
    scope: n,
    type: r,
    dir: V,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: d,
    onViewportChange: u,
    content: f,
    onContentChange: p,
    scrollbarX: m,
    onScrollbarXChange: h,
    scrollbarXEnabled: C,
    onScrollbarXEnabledChange: E,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: S,
    onScrollbarYEnabledChange: N,
    onCornerWidthChange: x,
    onCornerHeightChange: $
  }, /* @__PURE__ */ w(le.div, I({
    dir: V
  }, s, {
    ref: j,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": b + "px",
      "--radix-scroll-area-corner-height": y + "px",
      ...e.style
    }
  })));
}), HN = "ScrollAreaViewport", UN = /* @__PURE__ */ D((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = Qt(HN, n), s = Y(null), i = Pe(t, s, a.onViewportChange);
  return /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(le.div, I({
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
}), Jn = "ScrollAreaScrollbar", nv = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Jn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return Q(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ w(KN, I({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ w(GN, I({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ w(rv, I({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ w(_d, I({}, r, {
    ref: t
  })) : null;
}), KN = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Jn, e.__scopeScrollArea), [a, s] = q(!1);
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
  ]), /* @__PURE__ */ w(dt, {
    present: n || a
  }, /* @__PURE__ */ w(rv, I({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), GN = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Jn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Mi(
    () => c("SCROLL_END"),
    100
  ), [i, c] = zN("hidden", {
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
  ]), /* @__PURE__ */ w(dt, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ w(_d, I({
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
}), rv = /* @__PURE__ */ D((e, t) => {
  const n = Qt(Jn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = q(!1), i = e.orientation === "horizontal", c = Mi(() => {
    if (n.viewport) {
      const d = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? d : u);
    }
  }, 10);
  return yo(n.viewport, c), yo(n.content, c), /* @__PURE__ */ w(dt, {
    present: r || a
  }, /* @__PURE__ */ w(_d, I({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), _d = /* @__PURE__ */ D((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Qt(Jn, e.__scopeScrollArea), a = Y(null), s = Y(0), [i, c] = q({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), d = iv(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function f(p, m) {
    return tE(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ w(YN, I({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = sf(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ w(ZN, I({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = sf(p, i);
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
}), YN = /* @__PURE__ */ D((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Qt(Jn, e.__scopeScrollArea), [s, i] = q(), c = Y(null), d = Pe(t, c, a.onScrollbarXChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(av, I({
    "data-orientation": "horizontal"
  }, o, {
    ref: d,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": ji(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), lv(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Bs(s.paddingLeft),
          paddingEnd: Bs(s.paddingRight)
        }
      });
    }
  }));
}), ZN = /* @__PURE__ */ D((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Qt(Jn, e.__scopeScrollArea), [s, i] = q(), c = Y(null), d = Pe(t, c, a.onScrollbarYChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(av, I({
    "data-orientation": "vertical"
  }, o, {
    ref: d,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": ji(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), lv(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Bs(s.paddingTop),
          paddingEnd: Bs(s.paddingBottom)
        }
      });
    }
  }));
}), [qN, ov] = tv(Jn), av = /* @__PURE__ */ D((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: d, onWheelScroll: u, onResize: f, ...p } = e, m = Qt(Jn, n), [h, v] = q(null), g = Pe(
    t,
    (j) => v(j)
  ), b = Y(null), x = Y(""), y = m.viewport, $ = r.content - r.viewport, C = Qe(u), E = Qe(c), S = Mi(f, 10);
  function N(j) {
    if (b.current) {
      const V = j.clientX - b.current.left, L = j.clientY - b.current.top;
      d({
        x: V,
        y: L
      });
    }
  }
  return Q(() => {
    const j = (V) => {
      const L = V.target;
      (h == null ? void 0 : h.contains(L)) && C(V, $);
    };
    return document.addEventListener("wheel", j, {
      passive: !1
    }), () => document.removeEventListener("wheel", j, {
      passive: !1
    });
  }, [
    y,
    h,
    $,
    C
  ]), Q(E, [
    r,
    E
  ]), yo(h, S), yo(m.content, S), /* @__PURE__ */ w(qN, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: Qe(a),
    onThumbPointerUp: Qe(s),
    onThumbPositionChange: E,
    onThumbPointerDown: Qe(i)
  }, /* @__PURE__ */ w(le.div, I({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: X(e.onPointerDown, (j) => {
      j.button === 0 && (j.target.setPointerCapture(j.pointerId), b.current = h.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), N(j));
    }),
    onPointerMove: X(e.onPointerMove, N),
    onPointerUp: X(e.onPointerUp, (j) => {
      const V = j.target;
      V.hasPointerCapture(j.pointerId) && V.releasePointerCapture(j.pointerId), document.body.style.webkitUserSelect = x.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null;
    })
  })));
}), Yc = "ScrollAreaThumb", XN = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, o = ov(Yc, e.__scopeScrollArea);
  return /* @__PURE__ */ w(dt, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ w(QN, I({
    ref: t
  }, r)));
}), QN = /* @__PURE__ */ D((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = Qt(Yc, n), s = ov(Yc, n), { onThumbPositionChange: i } = s, c = Pe(
    t,
    (f) => s.onThumbChange(f)
  ), d = Y(), u = Mi(() => {
    d.current && (d.current(), d.current = void 0);
  }, 100);
  return Q(() => {
    const f = a.viewport;
    if (f) {
      const p = () => {
        if (u(), !d.current) {
          const m = nE(f, i);
          d.current = m, i();
        }
      };
      return i(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ w(le.div, I({
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
}), sv = "ScrollAreaCorner", JN = /* @__PURE__ */ D((e, t) => {
  const n = Qt(sv, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ w(eE, I({}, e, {
    ref: t
  })) : null;
}), eE = /* @__PURE__ */ D((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Qt(sv, n), [a, s] = q(0), [i, c] = q(0), d = !!(a && i);
  return yo(o.scrollbarX, () => {
    var u;
    const f = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(f), c(f);
  }), yo(o.scrollbarY, () => {
    var u;
    const f = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(f), s(f);
  }), d ? /* @__PURE__ */ w(le.div, I({}, r, {
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
function Bs(e) {
  return e ? parseInt(e, 10) : 0;
}
function iv(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ji(e) {
  const t = iv(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function tE(e, t, n, r = "ltr") {
  const o = ji(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, d = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, f = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return cv([
    c,
    d
  ], f)(e);
}
function sf(e, t, n = "ltr") {
  const r = ji(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], d = sa(e, c);
  return cv([
    0,
    s
  ], [
    0,
    i
  ])(d);
}
function cv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function lv(e, t) {
  return e > 0 && e < t;
}
const nE = (e, t = () => {
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
function Mi(e, t) {
  const n = Qe(e), r = Y(0);
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
function yo(e, t) {
  const n = Qe(t);
  _t(() => {
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
const dv = WN, rE = UN, oE = JN, aE = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  dv,
  {
    ref: r,
    className: M("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx(rE, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ l.jsx(uv, {}),
      /* @__PURE__ */ l.jsx(oE, {})
    ]
  }
));
aE.displayName = dv.displayName;
const uv = _.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ l.jsx(
  nv,
  {
    ref: r,
    orientation: t,
    className: M(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx(XN, { className: "relative flex-1 rounded-full bg-border" })
  }
));
uv.displayName = nv.displayName;
const eT = Wa, tT = wi, nT = qr, sE = Ha, fv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Yr,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
fv.displayName = Yr.displayName;
const iE = Co(
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
), cE = _.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(sE, { children: [
  /* @__PURE__ */ l.jsx(fv, {}),
  /* @__PURE__ */ l.jsxs(
    Zr,
    {
      ref: o,
      className: M(iE({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ l.jsxs(qr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ l.jsx(si, { className: "h-4 w-4" }),
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
cE.displayName = Zr.displayName;
const lE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
lE.displayName = "SheetHeader";
const dE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
dE.displayName = "SheetFooter";
const uE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  jo,
  {
    ref: n,
    className: M("text-lg font-semibold text-foreground", e),
    ...t
  }
));
uE.displayName = jo.displayName;
const fE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Mo,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
fE.displayName = Mo.displayName;
const Cd = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ l.jsx(
  "table",
  {
    ref: n,
    className: M("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Cd.displayName = "TableUI";
const pv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("thead", { ref: n, className: M("[&_tr]:border-b", e), ...t }));
pv.displayName = "TableHeader";
const mv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tbody",
  {
    ref: n,
    className: M("[&_tr:last-child]:border-0", e),
    ...t
  }
));
mv.displayName = "TableBody";
const pE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tfoot",
  {
    ref: n,
    className: M("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
pE.displayName = "TableFooter";
const Ti = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tr",
  {
    ref: n,
    className: M(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Ti.displayName = "TableRow";
const hv = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "th",
  {
    ref: n,
    className: M(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
hv.displayName = "TableHead";
const Sd = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "td",
  {
    ref: n,
    className: M("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Sd.displayName = "TableCell";
const mE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "caption",
  {
    ref: n,
    className: M("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
mE.displayName = "TableCaption";
const hE = "AlertDialog", [vE, rT] = ct(hE, [
  Jm
]), er = Jm(), gE = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = er(t);
  return /* @__PURE__ */ w(Wa, I({}, r, n, {
    modal: !0
  }));
}, bE = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = er(n);
  return /* @__PURE__ */ w(wi, I({}, o, r, {
    ref: t
  }));
}), xE = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = er(t);
  return /* @__PURE__ */ w(Ha, I({}, r, n));
}, yE = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = er(n);
  return /* @__PURE__ */ w(Yr, I({}, o, r, {
    ref: t
  }));
}), vv = "AlertDialogContent", [wE, $E] = vE(vv), _E = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = er(n), s = Y(null), i = Pe(t, s), c = Y(null);
  return /* @__PURE__ */ w(lC, {
    contentName: vv,
    titleName: CE,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ w(wE, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ w(Zr, I({
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
}), CE = "AlertDialogTitle", SE = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = er(n);
  return /* @__PURE__ */ w(jo, I({}, o, r, {
    ref: t
  }));
}), NE = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = er(n);
  return /* @__PURE__ */ w(Mo, I({}, o, r, {
    ref: t
  }));
}), EE = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = er(n);
  return /* @__PURE__ */ w(qr, I({}, o, r, {
    ref: t
  }));
}), PE = "AlertDialogCancel", kE = /* @__PURE__ */ D((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = $E(PE, n), a = er(n), s = Pe(t, o);
  return /* @__PURE__ */ w(qr, I({}, a, r, {
    ref: s
  }));
}), jE = gE, ME = bE, TE = xE, gv = yE, bv = _E, xv = EE, yv = kE, wv = SE, $v = NE, oT = jE, aT = ME, OE = TE, _v = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  gv,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
_v.displayName = gv.displayName;
const DE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs(OE, { children: [
  /* @__PURE__ */ l.jsx(_v, {}),
  /* @__PURE__ */ l.jsx(
    bv,
    {
      ref: n,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
DE.displayName = bv.displayName;
const RE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
RE.displayName = "AlertDialogHeader";
const AE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
AE.displayName = "AlertDialogFooter";
const IE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  wv,
  {
    ref: n,
    className: M("text-lg font-semibold", e),
    ...t
  }
));
IE.displayName = wv.displayName;
const LE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  $v,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
LE.displayName = $v.displayName;
const FE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xv,
  {
    ref: n,
    className: M(ho(), e),
    ...t
  }
));
FE.displayName = xv.displayName;
const VE = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  yv,
  {
    ref: n,
    className: M(
      ho({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
VE.displayName = yv.displayName;
function Et({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: M("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Cv = "Collapsible", [zE, Sv] = ct(Cv), [BE, Nd] = zE(Cv), WE = /* @__PURE__ */ D((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, d] = pt({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ w(BE, {
    scope: n,
    disabled: a,
    contentId: ht(),
    open: c,
    onOpenToggle: ge(
      () => d(
        (u) => !u
      ),
      [
        d
      ]
    )
  }, /* @__PURE__ */ w(le.div, Ee({
    "data-state": Ed(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), HE = "CollapsibleTrigger", Nv = /* @__PURE__ */ D((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = Nd(HE, n);
  return /* @__PURE__ */ w(le.button, Ee({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Ed(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: X(e.onClick, o.onOpenToggle)
  }));
}), Ev = "CollapsibleContent", Pv = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, o = Nd(Ev, e.__scopeCollapsible);
  return /* @__PURE__ */ w(
    dt,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ w(UE, Ee({}, r, {
      ref: t,
      present: a
    }))
  );
}), UE = /* @__PURE__ */ D((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Nd(Ev, n), [i, c] = q(r), d = Y(null), u = Pe(t, d), f = Y(0), p = f.current, m = Y(0), h = m.current, v = s.open || i, g = Y(v), b = Y();
  return Q(() => {
    const x = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(x);
  }, []), _t(() => {
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
  ]), /* @__PURE__ */ w(le.div, Ee({
    "data-state": Ed(s.open),
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
function Ed(e) {
  return e ? "open" : "closed";
}
const kv = WE, KE = Nv, GE = Pv, Sr = "Accordion", YE = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [Pd, ZE, qE] = wr(Sr), [Oi, sT] = ct(Sr, [
  qE,
  Sv
]), kd = Sv(), jv = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ z.createElement(Pd.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ z.createElement(e5, Ee({}, a, {
    ref: t
  })) : /* @__PURE__ */ z.createElement(JE, Ee({}, o, {
    ref: t
  })));
});
jv.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Mv, XE] = Oi(Sr), [Tv, QE] = Oi(Sr, {
  collapsible: !1
}), JE = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = pt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ z.createElement(Mv, {
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
  }, /* @__PURE__ */ z.createElement(Tv, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ z.createElement(Ov, Ee({}, s, {
    ref: t
  }))));
}), e5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = pt({
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
  return /* @__PURE__ */ z.createElement(Mv, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: d
  }, /* @__PURE__ */ z.createElement(Tv, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ z.createElement(Ov, Ee({}, a, {
    ref: t
  }))));
}), [t5, Di] = Oi(Sr), Ov = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = z.useRef(null), c = Pe(i, t), d = ZE(n), f = Mn(o) === "ltr", p = X(e.onKeyDown, (m) => {
    var h;
    if (!YE.includes(m.key))
      return;
    const v = m.target, g = d().filter((j) => {
      var V;
      return !((V = j.ref.current) !== null && V !== void 0 && V.disabled);
    }), b = g.findIndex(
      (j) => j.ref.current === v
    ), x = g.length;
    if (b === -1)
      return;
    m.preventDefault();
    let y = b;
    const $ = 0, C = x - 1, E = () => {
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
        a === "horizontal" && (f ? E() : S());
        break;
      case "ArrowDown":
        a === "vertical" && E();
        break;
      case "ArrowLeft":
        a === "horizontal" && (f ? S() : E());
        break;
      case "ArrowUp":
        a === "vertical" && S();
        break;
    }
    const N = y % x;
    (h = g[N].ref.current) === null || h === void 0 || h.focus();
  });
  return /* @__PURE__ */ z.createElement(t5, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ z.createElement(Pd.Slot, {
    scope: n
  }, /* @__PURE__ */ z.createElement(le.div, Ee({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Zc = "AccordionItem", [n5, jd] = Oi(Zc), r5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Di(Zc, n), s = XE(Zc, n), i = kd(n), c = ht(), d = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ z.createElement(n5, {
    scope: n,
    open: d,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ z.createElement(kv, Ee({
    "data-orientation": a.orientation,
    "data-state": Dv(d)
  }, i, o, {
    ref: t,
    disabled: u,
    open: d,
    onOpenChange: (f) => {
      f ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), o5 = "AccordionHeader", a5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Di(Sr, n), a = jd(o5, n);
  return /* @__PURE__ */ z.createElement(le.h3, Ee({
    "data-orientation": o.orientation,
    "data-state": Dv(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), cf = "AccordionTrigger", s5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Di(Sr, n), a = jd(cf, n), s = QE(cf, n), i = kd(n);
  return /* @__PURE__ */ z.createElement(Pd.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ z.createElement(KE, Ee({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), i5 = "AccordionContent", c5 = /* @__PURE__ */ z.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Di(Sr, n), a = jd(i5, n), s = kd(n);
  return /* @__PURE__ */ z.createElement(GE, Ee({
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
function Dv(e) {
  return e ? "open" : "closed";
}
const l5 = jv, d5 = r5, u5 = a5, Rv = s5, Av = c5, iT = l5, f5 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  d5,
  {
    ref: n,
    className: M("border-b", e),
    ...t
  }
));
f5.displayName = "AccordionItem";
const p5 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(u5, { className: "flex", children: /* @__PURE__ */ l.jsxs(
  Rv,
  {
    ref: r,
    className: M(
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
p5.displayName = Rv.displayName;
const m5 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Av,
  {
    ref: r,
    className: M(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
m5.displayName = Av.displayName;
const cT = kv, lT = Nv, dT = Pv;
let vc;
const Iv = "HoverCard", [Lv, uT] = ct(Iv, [
  Tn
]), Md = Tn(), [h5, Td] = Lv(Iv), v5 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = Md(t), d = Y(0), u = Y(0), f = Y(!1), p = Y(!1), [m = !1, h] = pt({
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
  }, []), /* @__PURE__ */ w(h5, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: f,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ w(Po, c, n));
}, g5 = "HoverCardTrigger", b5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Td(g5, n), a = Md(n);
  return /* @__PURE__ */ w(Ra, I({
    asChild: !0
  }, a), /* @__PURE__ */ w(le.a, I({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: X(e.onPointerEnter, Ws(o.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Ws(o.onClose)),
    onFocus: X(e.onFocus, o.onOpen),
    onBlur: X(e.onBlur, o.onClose),
    onTouchStart: X(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), x5 = "HoverCardPortal", [fT, y5] = Lv(x5, {
  forceMount: void 0
}), qc = "HoverCardContent", w5 = /* @__PURE__ */ D((e, t) => {
  const n = y5(qc, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Td(qc, e.__scopeHoverCard);
  return /* @__PURE__ */ w(dt, {
    present: r || a.open
  }, /* @__PURE__ */ w($5, I({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: X(e.onPointerEnter, Ws(a.onOpen)),
    onPointerLeave: X(e.onPointerLeave, Ws(a.onClose)),
    ref: t
  })));
}), $5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = Td(qc, n), d = Md(n), u = Y(null), f = Pe(t, u), [p, m] = q(!1);
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
    u.current && _5(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ w(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: X(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ w(Aa, I({}, d, i, {
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
function Ws(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function _5(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const C5 = v5, S5 = b5, Fv = w5, pT = C5, mT = S5, N5 = _.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l.jsx(
  Fv,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: M(
      "z-50 w-64 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
N5.displayName = Fv.displayName;
const hT = () => /* @__PURE__ */ l.jsx("span", { className: "loader-fade-dot" }), Od = "Menubar", [Xc, E5, P5] = wr(Od), [Vv, vT] = ct(Od, [
  P5,
  $r
]), It = La(), zv = $r(), [k5, Dd] = Vv(Od), j5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, d = Mn(i), u = zv(n), [f = "", p] = pt({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = q(null);
  return /* @__PURE__ */ w(k5, {
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
  }, /* @__PURE__ */ w(pi, I({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: d,
    currentTabStopId: m,
    onCurrentTabStopIdChange: h
  }), /* @__PURE__ */ w(le.div, I({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), Bv = "MenubarMenu", [M5, Wv] = Vv(Bv), T5 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = ht(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = Dd(Bv, t), i = It(t), c = Y(null), d = Y(!1), u = s.value === a;
  return Q(() => {
    u || (d.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ w(M5, {
    scope: t,
    value: a,
    triggerId: ht(),
    triggerRef: c,
    contentId: ht(),
    wasKeyboardTriggerOpenRef: d
  }, /* @__PURE__ */ w(Gl, I({}, i, {
    open: u,
    onOpenChange: (f) => {
      f || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, lf = "MenubarTrigger", O5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = zv(n), s = It(n), i = Dd(lf, n), c = Wv(lf, n), d = Y(null), u = Pe(t, d, c.triggerRef), [f, p] = q(!1), m = i.value === c.value;
  return /* @__PURE__ */ w(Xc.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ w(mi, I({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ w(Yl, I({
    asChild: !0
  }, s), /* @__PURE__ */ w(le.button, I({
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
}), D5 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = It(t);
  return /* @__PURE__ */ w(Zl, I({}, r, n));
}, df = "MenubarContent", R5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = It(n), s = Dd(df, n), i = Wv(df, n), c = E5(n), d = Y(!1);
  return /* @__PURE__ */ w(ql, I({
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
        x = s.loop ? G5(x, y + 1) : x.slice(y + 1);
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
}), A5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Xl, I({}, o, r, {
    ref: t
  }));
}), I5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Ql, I({}, o, r, {
    ref: t
  }));
}), L5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(Jl, I({}, o, r, {
    ref: t
  }));
}), F5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(ed, I({}, o, r, {
    ref: t
  }));
}), V5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(td, I({}, o, r, {
    ref: t
  }));
}), z5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(nd, I({}, o, r, {
    ref: t
  }));
}), B5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(rd, I({}, o, r, {
    ref: t
  }));
}), W5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(od, I({}, o, r, {
    ref: t
  }));
}), H5 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = It(t), [i = !1, c] = pt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(ad, I({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, U5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(sd, I({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), K5 = /* @__PURE__ */ D((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(id, I({}, o, {
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
function G5(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Hv = j5, Y5 = T5, Uv = O5, Kv = D5, Gv = R5, Z5 = A5, Yv = I5, Zv = L5, qv = F5, q5 = V5, Xv = z5, Qv = B5, Jv = W5, X5 = H5, eg = U5, tg = K5, gT = Y5, bT = Z5, xT = Kv, yT = X5, wT = q5, Q5 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Hv,
  {
    ref: n,
    className: M(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
Q5.displayName = Hv.displayName;
const J5 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Uv,
  {
    ref: n,
    className: M(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
J5.displayName = Uv.displayName;
const eP = _.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  eg,
  {
    ref: o,
    className: M(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ l.jsx(yr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
eP.displayName = eg.displayName;
const tP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  tg,
  {
    ref: n,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
tP.displayName = tg.displayName;
const nP = _.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ l.jsx(Kv, { children: /* @__PURE__ */ l.jsx(
    Gv,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: M(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
nP.displayName = Gv.displayName;
const rP = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Zv,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
rP.displayName = Zv.displayName;
const oP = _.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  qv,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Qv, { children: /* @__PURE__ */ l.jsx(un, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
oP.displayName = qv.displayName;
const aP = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Xv,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Qv, { children: /* @__PURE__ */ l.jsx(ai, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
aP.displayName = Xv.displayName;
const sP = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Yv,
  {
    ref: r,
    className: M(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
sP.displayName = Yv.displayName;
const iP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Jv,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
iP.displayName = Jv.displayName;
const cP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: M(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
cP.displayname = "MenubarShortcut";
const Ga = "NavigationMenu", [Rd, ng, lP] = wr(Ga), [Qc, dP, uP] = wr(Ga), [Ad, $T] = ct(Ga, [
  lP,
  uP
]), [fP, bn] = Ad(Ga), [pP, mP] = Ad(Ga), hP = /* @__PURE__ */ D((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: d, ...u } = e, [f, p] = q(null), m = Pe(
    t,
    (j) => p(j)
  ), h = Mn(d), v = Y(0), g = Y(0), b = Y(0), [x, y] = q(!0), [$ = "", C] = pt({
    prop: r,
    onChange: (j) => {
      const V = j !== "", L = i > 0;
      V ? (window.clearTimeout(b.current), L && y(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => y(!0),
        i
      )), o == null || o(j);
    },
    defaultProp: a
  }), E = ge(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => C(""),
      150
    );
  }, [
    C
  ]), S = ge((j) => {
    window.clearTimeout(g.current), C(j);
  }, [
    C
  ]), N = ge((j) => {
    $ === j ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), C(j);
    }, s);
  }, [
    $,
    C,
    s
  ]);
  return Q(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ w(vP, {
    scope: n,
    isRootMenu: !0,
    value: $,
    dir: h,
    orientation: c,
    rootNavigationMenu: f,
    onTriggerEnter: (j) => {
      window.clearTimeout(v.current), x ? N(j) : S(j);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), E();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: E,
    onItemSelect: (j) => {
      C(
        (V) => V === j ? "" : j
      );
    },
    onItemDismiss: () => C("")
  }, /* @__PURE__ */ w(le.nav, I({
    "aria-label": "Main",
    "data-orientation": c,
    dir: h
  }, u, {
    ref: m
  })));
}), vP = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: d, onTriggerEnter: u, onTriggerLeave: f, onContentEnter: p, onContentLeave: m } = e, [h, v] = q(null), [g, b] = q(/* @__PURE__ */ new Map()), [x, y] = q(null);
  return /* @__PURE__ */ w(fP, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: Oo(i),
    baseId: ht(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: x,
    onIndicatorTrackChange: y,
    onTriggerEnter: Qe(u),
    onTriggerLeave: Qe(f),
    onContentEnter: Qe(p),
    onContentLeave: Qe(m),
    onItemSelect: Qe(c),
    onItemDismiss: Qe(d),
    onViewportContentChange: ge(($, C) => {
      b((E) => (E.set($, C), new Map(E)));
    }, []),
    onViewportContentRemove: ge(($) => {
      b((C) => C.has($) ? (C.delete($), new Map(C)) : C);
    }, [])
  }, /* @__PURE__ */ w(Rd.Provider, {
    scope: t
  }, /* @__PURE__ */ w(pP, {
    scope: t,
    items: g
  }, s)));
}, gP = "NavigationMenuList", bP = /* @__PURE__ */ D((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = bn(gP, n), a = /* @__PURE__ */ w(le.ul, I({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ w(le.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ w(Rd.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ w(ig, {
    asChild: !0
  }, a) : a));
}), xP = "NavigationMenuItem", [yP, rg] = Ad(xP), wP = /* @__PURE__ */ D((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = ht(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = Y(null), c = Y(null), d = Y(null), u = Y(() => {
  }), f = Y(!1), p = ge((h = "start") => {
    if (i.current) {
      u.current();
      const v = Jc(i.current);
      v.length && Id(h === "start" ? v : v.reverse());
    }
  }, []), m = ge(() => {
    if (i.current) {
      const h = Jc(i.current);
      h.length && (u.current = TP(h));
    }
  }, []);
  return /* @__PURE__ */ w(yP, {
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
  }, /* @__PURE__ */ w(le.li, I({}, o, {
    ref: t
  })));
}), uf = "NavigationMenuTrigger", $P = /* @__PURE__ */ D((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = bn(uf, e.__scopeNavigationMenu), s = rg(uf, e.__scopeNavigationMenu), i = Y(null), c = Pe(i, s.triggerRef, t), d = lg(a.baseId, s.value), u = dg(a.baseId, s.value), f = Y(!1), p = Y(!1), m = s.value === a.value;
  return /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w(Rd.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ w(cg, {
    asChild: !0
  }, /* @__PURE__ */ w(le.button, I({
    id: d,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Ld(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: X(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: X(e.onPointerMove, Hs(() => {
      r || p.current || s.wasEscapeCloseRef.current || f.current || (a.onTriggerEnter(s.value), f.current = !0);
    })),
    onPointerLeave: X(e.onPointerLeave, Hs(() => {
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
  })))), m && /* @__PURE__ */ w(ln, null, /* @__PURE__ */ w(mh, {
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
}), ff = "navigationMenu.linkSelect", _P = /* @__PURE__ */ D((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ w(cg, {
    asChild: !0
  }, /* @__PURE__ */ w(le.a, I({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: X(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(ff, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        ff,
        (d) => o == null ? void 0 : o(d),
        {
          once: !0
        }
      ), js(i, c), !c.defaultPrevented && !s.metaKey) {
        const d = new CustomEvent($s, {
          bubbles: !0,
          cancelable: !0
        });
        js(i, d);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), og = "NavigationMenuIndicator", CP = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, o = bn(og, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? /* @__PURE__ */ Gf.createPortal(/* @__PURE__ */ w(dt, {
    present: n || a
  }, /* @__PURE__ */ w(SP, I({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), SP = /* @__PURE__ */ D((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = bn(og, n), a = ng(n), [s, i] = q(null), [c, d] = q(null), u = o.orientation === "horizontal", f = !!o.value;
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
  return el(s, p), el(o.indicatorTrack, p), c ? /* @__PURE__ */ w(le.div, I({
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
}), ca = "NavigationMenuContent", NP = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, o = bn(ca, e.__scopeNavigationMenu), a = rg(ca, e.__scopeNavigationMenu), s = Pe(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ w(EP, I({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ w(dt, {
    present: n || i
  }, /* @__PURE__ */ w(ag, I({
    "data-state": Ld(i)
  }, c, {
    ref: s,
    onPointerEnter: X(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: X(e.onPointerLeave, Hs(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), EP = /* @__PURE__ */ D((e, t) => {
  const n = bn(ca, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return _t(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), _t(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), $s = "navigationMenu.rootContentDismiss", ag = /* @__PURE__ */ D((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...d } = e, u = bn(ca, n), f = Y(null), p = Pe(f, t), m = lg(u.baseId, r), h = dg(u.baseId, r), v = ng(n), g = Y(null), { onItemDismiss: b } = u;
  Q(() => {
    const y = f.current;
    if (u.isRootMenu && y) {
      const $ = () => {
        var C;
        b(), i(), y.contains(document.activeElement) && ((C = o.current) === null || C === void 0 || C.focus());
      };
      return y.addEventListener($s, $), () => y.removeEventListener($s, $);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const x = Gt(() => {
    const $ = v().map(
      (V) => V.value
    );
    u.dir === "rtl" && $.reverse();
    const C = $.indexOf(u.value), E = $.indexOf(u.previousValue), S = r === u.value, N = E === $.indexOf(r);
    if (!S && !N)
      return g.current;
    const j = (() => {
      if (C !== E) {
        if (S && E !== -1)
          return C > E ? "from-end" : "from-start";
        if (N && C !== -1)
          return C > E ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = j, j;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ w(ig, {
    asChild: !0
  }, /* @__PURE__ */ w(Hr, I({
    id: h,
    "aria-labelledby": m,
    "data-motion": x,
    "data-orientation": u.orientation
  }, d, {
    ref: p,
    onDismiss: () => {
      var y;
      const $ = new Event($s, {
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
      const C = y.target, E = v().some((N) => {
        var j;
        return (j = N.ref.current) === null || j === void 0 ? void 0 : j.contains(C);
      }), S = u.isRootMenu && (($ = u.viewport) === null || $ === void 0 ? void 0 : $.contains(C));
      (E || S || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: X(e.onKeyDown, (y) => {
      const $ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !$) {
        const S = Jc(y.currentTarget), N = document.activeElement, j = S.findIndex(
          (B) => B === N
        ), L = y.shiftKey ? S.slice(0, j).reverse() : S.slice(j + 1, S.length);
        if (Id(L))
          y.preventDefault();
        else {
          var E;
          (E = a.current) === null || E === void 0 || E.focus();
        }
      }
    }),
    onEscapeKeyDown: X(e.onEscapeKeyDown, (y) => {
      s.current = !0;
    })
  })));
}), sg = "NavigationMenuViewport", PP = /* @__PURE__ */ D((e, t) => {
  const { forceMount: n, ...r } = e, a = !!bn(sg, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ w(dt, {
    present: n || a
  }, /* @__PURE__ */ w(kP, I({}, r, {
    ref: t
  })));
}), kP = /* @__PURE__ */ D((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = bn(sg, n), s = Pe(t, a.onViewportChange), i = mP(ca, e.__scopeNavigationMenu), [c, d] = q(null), [u, f] = q(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = !!a.value, v = h ? a.value : a.previousValue;
  return el(u, () => {
    u && d({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ w(le.div, I({
    "data-state": Ld(h),
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
    onPointerLeave: X(e.onPointerLeave, Hs(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: x, forceMount: y, ...$ }]) => {
    const C = v === b;
    return /* @__PURE__ */ w(dt, {
      key: b,
      present: y || C
    }, /* @__PURE__ */ w(ag, I({}, $, {
      ref: Pa(x, (E) => {
        C && E && f(E);
      })
    })));
  }));
}), jP = "FocusGroup", ig = /* @__PURE__ */ D((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = bn(jP, n);
  return /* @__PURE__ */ w(Qc.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Qc.Slot, {
    scope: n
  }, /* @__PURE__ */ w(le.div, I({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), pf = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], MP = "FocusGroupItem", cg = /* @__PURE__ */ D((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = dP(n), a = bn(MP, n);
  return /* @__PURE__ */ w(Qc.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ w(le.button, I({}, r, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...pf
      ].includes(s.key)) {
        let c = o().map(
          (f) => f.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), pf.includes(s.key)) {
          const f = c.indexOf(s.currentTarget);
          c = c.slice(f + 1);
        }
        setTimeout(
          () => Id(c)
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
function Id(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function TP(e) {
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
  const n = Qe(t);
  _t(() => {
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
function Ld(e) {
  return e ? "open" : "closed";
}
function lg(e, t) {
  return `${e}-trigger-${t}`;
}
function dg(e, t) {
  return `${e}-content-${t}`;
}
function Hs(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const ug = hP, fg = bP, OP = wP, pg = $P, DP = _P, mg = CP, hg = NP, vg = PP, RP = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  ug,
  {
    ref: r,
    className: M(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(gg, {})
    ]
  }
));
RP.displayName = ug.displayName;
const AP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  fg,
  {
    ref: n,
    className: M(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
AP.displayName = fg.displayName;
const _T = OP, IP = Co(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), LP = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  pg,
  {
    ref: r,
    className: M(IP(), "group", e),
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
LP.displayName = pg.displayName;
const FP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  hg,
  {
    ref: n,
    className: M(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
FP.displayName = hg.displayName;
const CT = DP, gg = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { className: M("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ l.jsx(
  vg,
  {
    className: M(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
gg.displayName = vg.displayName;
const VP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  mg,
  {
    ref: n,
    className: M(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
VP.displayName = mg.displayName;
const bg = "Progress", Ri = 100, [zP, ST] = ct(bg), [BP, WP] = zP(bg), xg = /* @__PURE__ */ D((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = KP, ...s } = e, i = tl(o) ? o : Ri, c = wg(r, i) ? r : null, d = Us(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ w(BP, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ w(le.div, Ee({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Us(c) ? c : void 0,
    "aria-valuetext": d,
    role: "progressbar",
    "data-state": yg(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
xg.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !tl(r) ? new Error(GP(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = tl(e.max) ? e.max : Ri;
    return r != null && !wg(r, a) ? new Error(YP(o, n)) : null;
  }
};
const HP = "ProgressIndicator", UP = /* @__PURE__ */ D((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = WP(HP, r);
  return /* @__PURE__ */ w(le.div, Ee({
    "data-state": yg(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function KP(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function yg(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Us(e) {
  return typeof e == "number";
}
function tl(e) {
  return Us(e) && !isNaN(e) && e > 0;
}
function wg(e, t) {
  return Us(e) && !isNaN(e) && e <= t && e >= 0;
}
function GP(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ri}\`.`;
}
function YP(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ri} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const $g = xg, ZP = UP, qP = _.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  $g,
  {
    ref: r,
    className: M(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx(
      ZP,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
qP.displayName = $g.displayName;
const _g = "Radio", [XP, Cg] = ct(_g), [QP, JP] = XP(_g), ek = /* @__PURE__ */ D((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...d } = e, [u, f] = q(null), p = Pe(
    t,
    (v) => f(v)
  ), m = Y(!1), h = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ w(QP, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ w(le.button, Ee({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Sg(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, d, {
    ref: p,
    onClick: X(e.onClick, (v) => {
      o || c == null || c(), h && (m.current = v.isPropagationStopped(), m.current || v.stopPropagation());
    })
  })), h && /* @__PURE__ */ w(rk, {
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
}), tk = "RadioIndicator", nk = /* @__PURE__ */ D((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = JP(tk, n);
  return /* @__PURE__ */ w(dt, {
    present: r || a.checked
  }, /* @__PURE__ */ w(le.span, Ee({
    "data-state": Sg(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), rk = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = Y(null), s = Oo(n), i = Da(t);
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
  ]), /* @__PURE__ */ w("input", Ee({
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
function Sg(e) {
  return e ? "checked" : "unchecked";
}
const ok = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Ng = "RadioGroup", [ak, NT] = ct(Ng, [
  $r,
  Cg
]), Eg = $r(), Pg = Cg(), [sk, ik] = ak(Ng), ck = /* @__PURE__ */ D((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: d, loop: u = !0, onValueChange: f, ...p } = e, m = Eg(n), h = Mn(d), [v, g] = pt({
    prop: a,
    defaultProp: o,
    onChange: f
  });
  return /* @__PURE__ */ w(sk, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ w(pi, Ee({
    asChild: !0
  }, m, {
    orientation: c,
    dir: h,
    loop: u
  }), /* @__PURE__ */ w(le.div, Ee({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: h
  }, p, {
    ref: t
  }))));
}), lk = "RadioGroupItem", dk = /* @__PURE__ */ D((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = ik(lk, n), s = a.disabled || r, i = Eg(n), c = Pg(n), d = Y(null), u = Pe(t, d), f = a.value === o.value, p = Y(!1);
  return Q(() => {
    const m = (v) => {
      ok.includes(v.key) && (p.current = !0);
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ w(mi, Ee({
    asChild: !0
  }, i, {
    focusable: !s,
    active: f
  }), /* @__PURE__ */ w(ek, Ee({
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
}), uk = /* @__PURE__ */ D((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Pg(n);
  return /* @__PURE__ */ w(nk, Ee({}, o, r, {
    ref: t
  }));
}), kg = ck, jg = dk, fk = uk, pk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  kg,
  {
    className: M("grid gap-2", e),
    ...t,
    ref: n
  }
));
pk.displayName = kg.displayName;
const mk = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  jg,
  {
    ref: r,
    className: M(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx(fk, { className: "flex items-center justify-center", children: /* @__PURE__ */ l.jsx(ai, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
mk.displayName = jg.displayName;
const Mg = [
  "PageUp",
  "PageDown"
], Tg = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Og = {
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
}, Ya = "Slider", [nl, hk, vk] = wr(Ya), [Dg, ET] = ct(Ya, [
  vk
]), [gk, Ai] = Dg(Ya), bk = /* @__PURE__ */ D((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: d = [
    r
  ], value: u, onValueChange: f = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = q(null), b = Pe(
    t,
    (T) => g(T)
  ), x = Y(/* @__PURE__ */ new Set()), y = Y(0), $ = s === "horizontal", C = v ? !!v.closest("form") : !0, E = $ ? xk : yk, [S = [], N] = pt({
    prop: u,
    defaultProp: d,
    onChange: (T) => {
      var O;
      (O = [
        ...x.current
      ][y.current]) === null || O === void 0 || O.focus(), f(T);
    }
  }), j = Y(S);
  function V(T) {
    const O = kk(S, T);
    Z(T, O);
  }
  function L(T) {
    Z(T, y.current);
  }
  function B() {
    const T = j.current[y.current];
    S[y.current] !== T && p(S);
  }
  function Z(T, O, { commit: F } = {
    commit: !1
  }) {
    const A = Ok(a), H = Dk(Math.round((T - r) / a) * a + r, A), G = sa(H, [
      r,
      o
    ]);
    N((ne = []) => {
      const me = Ek(ne, G, O);
      if (Tk(me, c * a)) {
        y.current = me.indexOf(G);
        const K = String(me) !== String(ne);
        return K && F && p(me), K ? me : ne;
      } else
        return ne;
    });
  }
  return /* @__PURE__ */ w(gk, {
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
  }, /* @__PURE__ */ w(E, Ee({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: b,
    onPointerDown: X(h.onPointerDown, () => {
      i || (j.current = S);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : V,
    onSlideMove: i ? void 0 : L,
    onSlideEnd: i ? void 0 : B,
    onHomeKeyDown: () => !i && Z(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && Z(o, S.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: T, direction: O }) => {
      if (!i) {
        const H = Mg.includes(T.key) || T.shiftKey && Tg.includes(T.key) ? 10 : 1, G = y.current, ne = S[G], me = a * H * O;
        Z(ne + me, G, {
          commit: !0
        });
      }
    }
  })))), C && S.map(
    (T, O) => /* @__PURE__ */ w(Nk, {
      key: O,
      name: n ? n + (S.length > 1 ? "[]" : "") : void 0,
      value: T
    })
  ));
}), [Rg, Ag] = Dg(Ya, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), xk = /* @__PURE__ */ D((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: d, ...u } = e, [f, p] = q(null), m = Pe(
    t,
    (y) => p(y)
  ), h = Y(), v = Mn(o), g = v === "ltr", b = g && !a || !g && a;
  function x(y) {
    const $ = h.current || f.getBoundingClientRect(), C = [
      0,
      $.width
    ], S = Fd(C, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = $, S(y - $.left);
  }
  return /* @__PURE__ */ w(Rg, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ w(Ig, Ee({
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
      const C = Og[b ? "from-left" : "from-right"].includes(y.key);
      d == null || d({
        event: y,
        direction: C ? -1 : 1
      });
    }
  })));
}), yk = /* @__PURE__ */ D((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...d } = e, u = Y(null), f = Pe(t, u), p = Y(), m = !o;
  function h(v) {
    const g = p.current || u.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], y = Fd(b, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, y(v - g.top);
  }
  return /* @__PURE__ */ w(Rg, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ w(Ig, Ee({
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
      const b = Og[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Ig = /* @__PURE__ */ D((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...d } = e, u = Ai(Ya, n);
  return /* @__PURE__ */ w(le.span, Ee({}, d, {
    ref: t,
    onKeyDown: X(e.onKeyDown, (f) => {
      f.key === "Home" ? (s(f), f.preventDefault()) : f.key === "End" ? (i(f), f.preventDefault()) : Mg.concat(Tg).includes(f.key) && (c(f), f.preventDefault());
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
}), wk = "SliderTrack", $k = /* @__PURE__ */ D((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Ai(wk, n);
  return /* @__PURE__ */ w(le.span, Ee({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), mf = "SliderRange", _k = /* @__PURE__ */ D((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Ai(mf, n), a = Ag(mf, n), s = Y(null), i = Pe(t, s), c = o.values.length, d = o.values.map(
    (p) => Lg(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...d) : 0, f = 100 - Math.max(...d);
  return /* @__PURE__ */ w(le.span, Ee({
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
}), hf = "SliderThumb", Ck = /* @__PURE__ */ D((e, t) => {
  const n = hk(e.__scopeSlider), [r, o] = q(null), a = Pe(
    t,
    (i) => o(i)
  ), s = Gt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ w(Sk, Ee({}, e, {
    ref: a,
    index: s
  }));
}), Sk = /* @__PURE__ */ D((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Ai(hf, n), s = Ag(hf, n), [i, c] = q(null), d = Pe(
    t,
    (g) => c(g)
  ), u = Da(i), f = a.values[r], p = f === void 0 ? 0 : Lg(f, a.min, a.max), m = Pk(r, a.values.length), h = u == null ? void 0 : u[s.size], v = h ? jk(h, p, s.direction) : 0;
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
  }, /* @__PURE__ */ w(le.span, Ee({
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
}), Nk = (e) => {
  const { value: t, ...n } = e, r = Y(null), o = Oo(t);
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
  ]), /* @__PURE__ */ w("input", Ee({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function Ek(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Lg(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return sa(a, [
    0,
    100
  ]);
}
function Pk(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function kk(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function jk(e, t, n) {
  const r = e / 2, a = Fd([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function Mk(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function Tk(e, t) {
  if (t > 0) {
    const n = Mk(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Fd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Ok(e) {
  return (String(e).split(".")[1] || "").length;
}
function Dk(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Fg = bk, Rk = $k, Ak = _k, Ik = Ck, Lk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs(
  Fg,
  {
    ref: n,
    className: M(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(Rk, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ l.jsx(Ak, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ l.jsx(Ik, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Lk.displayName = Fg.displayName;
const Vg = "Tabs", [Fk, PT] = ct(Vg, [
  $r
]), zg = $r(), [Vk, Vd] = Fk(Vg), zk = /* @__PURE__ */ D((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...d } = e, u = Mn(i), [f, p] = pt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ w(Vk, {
    scope: n,
    baseId: ht(),
    value: f,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ w(le.div, Ee({
    dir: u,
    "data-orientation": s
  }, d, {
    ref: t
  })));
}), Bk = "TabsList", Wk = /* @__PURE__ */ D((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Vd(Bk, n), s = zg(n);
  return /* @__PURE__ */ w(pi, Ee({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ w(le.div, Ee({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), Hk = "TabsTrigger", Uk = /* @__PURE__ */ D((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Vd(Hk, n), i = zg(n), c = Bg(s.baseId, r), d = Wg(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ w(mi, Ee({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ w(le.button, Ee({
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
}), Kk = "TabsContent", Gk = /* @__PURE__ */ D((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Vd(Kk, n), c = Bg(i.baseId, r), d = Wg(i.baseId, r), u = r === i.value, f = Y(u);
  return Q(() => {
    const p = requestAnimationFrame(
      () => f.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ w(
    dt,
    {
      present: o || u
    },
    ({ present: p }) => /* @__PURE__ */ w(le.div, Ee({
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
function Bg(e, t) {
  return `${e}-trigger-${t}`;
}
function Wg(e, t) {
  return `${e}-content-${t}`;
}
const Yk = zk, Hg = Wk, Ug = Uk, Kg = Gk, kT = Yk, Zk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Hg,
  {
    ref: n,
    className: M(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Zk.displayName = Hg.displayName;
const qk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ug,
  {
    ref: n,
    className: M(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
qk.displayName = Ug.displayName;
const Xk = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Kg,
  {
    ref: n,
    className: M(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Xk.displayName = Kg.displayName;
const Qk = /* @__PURE__ */ D((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = pt({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ w(le.button, Ee({
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
}), Gg = Qk, Jk = Co(
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
), e6 = _.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ l.jsx(
  Gg,
  {
    ref: o,
    className: M(Jk({ variant: t, size: n, className: e })),
    ...r
  }
));
e6.displayName = Gg.displayName;
const [Ii, jT] = ct("Tooltip", [
  Tn
]), zd = Tn(), t6 = "TooltipProvider", n6 = 700, rl = "tooltip.open", [r6, Bd] = Ii(t6), o6 = (e) => {
  const { __scopeTooltip: t, delayDuration: n = n6, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = q(!0), c = Y(!1), d = Y(0);
  return Q(() => {
    const u = d.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ w(r6, {
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
}, Wd = "Tooltip", [a6, Li] = Ii(Wd), s6 = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Bd(Wd, e.__scopeTooltip), d = zd(t), [u, f] = q(null), p = ht(), m = Y(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = Y(!1), [b = !1, x] = pt({
    prop: r,
    defaultProp: o,
    onChange: (S) => {
      S ? (c.onOpen(), document.dispatchEvent(new CustomEvent(rl))) : c.onClose(), a == null || a(S);
    }
  }), y = Gt(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), $ = ge(() => {
    window.clearTimeout(m.current), g.current = !1, x(!0);
  }, [
    x
  ]), C = ge(() => {
    window.clearTimeout(m.current), x(!1);
  }, [
    x
  ]), E = ge(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, x(!0);
    }, v);
  }, [
    v,
    x
  ]);
  return Q(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ w(Po, d, /* @__PURE__ */ w(a6, {
    scope: t,
    contentId: p,
    open: b,
    stateAttribute: y,
    trigger: u,
    onTriggerChange: f,
    onTriggerEnter: ge(() => {
      c.isOpenDelayed ? E() : $();
    }, [
      c.isOpenDelayed,
      E,
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
}, vf = "TooltipTrigger", i6 = /* @__PURE__ */ D((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = Li(vf, n), a = Bd(vf, n), s = zd(n), i = Y(null), c = Pe(t, i, o.onTriggerChange), d = Y(!1), u = Y(!1), f = ge(
    () => d.current = !1,
    []
  );
  return Q(() => () => document.removeEventListener("pointerup", f), [
    f
  ]), /* @__PURE__ */ w(Ra, I({
    asChild: !0
  }, s), /* @__PURE__ */ w(le.button, I({
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
}), c6 = "TooltipPortal", [MT, l6] = Ii(c6, {
  forceMount: void 0
}), la = "TooltipContent", d6 = /* @__PURE__ */ D((e, t) => {
  const n = l6(la, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = Li(la, e.__scopeTooltip);
  return /* @__PURE__ */ w(dt, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ w(Yg, I({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ w(u6, I({
    side: o
  }, a, {
    ref: t
  })));
}), u6 = /* @__PURE__ */ D((e, t) => {
  const n = Li(la, e.__scopeTooltip), r = Bd(la, e.__scopeTooltip), o = Y(null), a = Pe(t, o), [s, i] = q(null), { trigger: c, onClose: d } = n, u = o.current, { onPointerInTransitChange: f } = r, p = ge(() => {
    i(null), f(!1);
  }, [
    f
  ]), m = ge((h, v) => {
    const g = h.currentTarget, b = {
      x: h.clientX,
      y: h.clientY
    }, x = p6(b, g.getBoundingClientRect()), y = m6(b, x), $ = h6(v.getBoundingClientRect()), C = g6([
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
        }, x = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !v6(b, s);
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
  ]), /* @__PURE__ */ w(Yg, I({}, e, {
    ref: a
  }));
}), [f6, TT] = Ii(Wd, {
  isInside: !1
}), Yg = /* @__PURE__ */ D((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = Li(la, n), d = zd(n), { onClose: u } = c;
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
  ]), /* @__PURE__ */ w(Hr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (f) => f.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ w(Aa, I({
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
  }), /* @__PURE__ */ w(yl, null, r), /* @__PURE__ */ w(f6, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ w(mh, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function p6(e, t) {
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
function m6(e, t, n = 5) {
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
function h6(e) {
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
function v6(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, d = t[s].x, u = t[s].y;
    c > r != u > r && n < (d - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function g6(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), b6(t);
}
function b6(e) {
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
const x6 = o6, y6 = s6, w6 = i6, Zg = d6, Yn = x6, Zn = y6, qn = w6, Pn = _.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l.jsx(
  Zg,
  {
    ref: r,
    sideOffset: t,
    className: M(
      "z-50 overflow-hidden rounded-md border bg-card px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Pn.displayName = Zg.displayName;
const qg = "Switch", [$6, OT] = ct(qg), [_6, C6] = $6(qg), S6 = /* @__PURE__ */ D((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: d, ...u } = e, [f, p] = q(null), m = Pe(
    t,
    (x) => p(x)
  ), h = Y(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = pt({
    prop: o,
    defaultProp: a,
    onChange: d
  });
  return /* @__PURE__ */ w(_6, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ w(le.button, Ee({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": Xg(g),
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
  })), v && /* @__PURE__ */ w(P6, {
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
}), N6 = "SwitchThumb", E6 = /* @__PURE__ */ D((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = C6(N6, n);
  return /* @__PURE__ */ w(le.span, Ee({
    "data-state": Xg(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), P6 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = Y(null), s = Oo(n), i = Da(t);
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
  ]), /* @__PURE__ */ w("input", Ee({
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
function Xg(e) {
  return e ? "checked" : "unchecked";
}
const Qg = S6, k6 = E6, j6 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Qg,
  {
    className: M(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ l.jsx(
      k6,
      {
        className: M(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
j6.displayName = Qg.displayName;
var M6 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const gf = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, f) => {
    const p = typeof u == "function" ? u(t) : u;
    if (!Object.is(p, t)) {
      const m = t;
      t = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((h) => h(t, m));
    }
  }, o = () => t, c = { setState: r, getState: o, getInitialState: () => d, subscribe: (u) => (n.add(u), () => n.delete(u)), destroy: () => {
    (M6 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, d = t = e(r, o, c);
  return c;
}, T6 = (e) => e ? gf(e) : gf;
var ol = { exports: {} }, gc = {}, ds = { exports: {} }, bc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bf;
function O6() {
  if (bf)
    return bc;
  bf = 1;
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
var xf;
function D6() {
  return xf || (xf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = z, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var $ = arguments.length, C = new Array($ > 1 ? $ - 1 : 0), E = 1; E < $; E++)
          C[E - 1] = arguments[E];
        r("error", y, C);
      }
    }
    function r(y, $, C) {
      {
        var E = t.ReactDebugCurrentFrame, S = E.getStackAddendum();
        S !== "" && ($ += "%s", C = C.concat([S]));
        var N = C.map(function(j) {
          return String(j);
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
      var E = $();
      if (!f) {
        var S = $();
        a(E, S) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var N = s({
        inst: {
          value: E,
          getSnapshot: $
        }
      }), j = N[0].inst, V = N[1];
      return c(function() {
        j.value = E, j.getSnapshot = $, m(j) && V({
          inst: j
        });
      }, [y, E, $]), i(function() {
        m(j) && V({
          inst: j
        });
        var L = function() {
          m(j) && V({
            inst: j
          });
        };
        return y(L);
      }, [y]), d(E), E;
    }
    function m(y) {
      var $ = y.getSnapshot, C = y.value;
      try {
        var E = $();
        return !a(C, E);
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
var yf;
function Jg() {
  return yf || (yf = 1, process.env.NODE_ENV === "production" ? ds.exports = O6() : ds.exports = D6()), ds.exports;
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
var wf;
function R6() {
  if (wf)
    return gc;
  wf = 1;
  var e = z, t = Jg();
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
      function b(E) {
        if (!x) {
          if (x = !0, y = E, E = p(E), m !== void 0 && v.hasValue) {
            var S = v.value;
            if (m(S, E))
              return $ = S;
          }
          return $ = E;
        }
        if (S = $, r(y, E))
          return S;
        var N = p(E);
        return m !== void 0 && m(S, N) ? S : (y = E, $ = N);
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
var $f;
function A6() {
  return $f || ($f = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = z, t = Jg();
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
        var C = !1, E, S, N = function(B) {
          if (!C) {
            C = !0, E = B;
            var Z = m(B);
            if (h !== void 0 && g.hasValue) {
              var T = g.value;
              if (h(T, Z))
                return S = T, T;
            }
            return S = Z, Z;
          }
          var O = E, F = S;
          if (r(O, B))
            return F;
          var A = m(B);
          return h !== void 0 && h(F, A) ? F : (E = B, S = A, A);
        }, j = p === void 0 ? null : p, V = function() {
          return N(f());
        }, L = j === null ? void 0 : function() {
          return N(j());
        };
        return [V, L];
      }, [f, p, m, h]), x = b[0], y = b[1], $ = o(u, x, y);
      return s(function() {
        g.hasValue = !0, g.value = $;
      }, [$]), c($), $;
    }
    yc.useSyncExternalStoreWithSelector = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), yc;
}
process.env.NODE_ENV === "production" ? ol.exports = R6() : ol.exports = A6();
var I6 = ol.exports;
const L6 = /* @__PURE__ */ f0(I6);
var eb = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: F6 } = z, { useSyncExternalStoreWithSelector: V6 } = L6;
let _f = !1;
const z6 = (e) => e;
function B6(e, t = z6, n) {
  (eb ? "production" : void 0) !== "production" && n && !_f && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), _f = !0);
  const r = V6(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return F6(r), r;
}
const Cf = (e) => {
  (eb ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? T6(e) : e, n = (r, o) => B6(t, r, o);
  return Object.assign(n, t), n;
}, W6 = (e) => e ? Cf(e) : Cf, H6 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ l.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ l.jsxs(lo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ l.jsx(
      Or,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ l.jsx(uo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ l.jsx(sx, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ l.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ l.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ l.jsx(Ot, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var U6 = {
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
const Nr = (e, t, n, r) => {
  const o = D(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, className: c, children: d, ...u }, f) => w(
      "svg",
      {
        ref: f,
        ...U6[e],
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
var tb = Nr("outline", "adjustments-horizontal", "IconAdjustmentsHorizontal", [["path", { d: "M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M4 6l8 0", key: "svg-1" }], ["path", { d: "M16 6l4 0", key: "svg-2" }], ["path", { d: "M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M4 12l2 0", key: "svg-4" }], ["path", { d: "M10 12l10 0", key: "svg-5" }], ["path", { d: "M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }], ["path", { d: "M4 18l11 0", key: "svg-7" }], ["path", { d: "M19 18l1 0", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nb = Nr("outline", "adjustments", "IconAdjustments", [["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M6 4v4", key: "svg-1" }], ["path", { d: "M6 12v8", key: "svg-2" }], ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }], ["path", { d: "M12 4v10", key: "svg-4" }], ["path", { d: "M12 18v2", key: "svg-5" }], ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }], ["path", { d: "M18 4v1", key: "svg-7" }], ["path", { d: "M18 9v11", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var K6 = Nr("outline", "check", "IconCheck", [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var G6 = Nr("outline", "click", "IconClick", [["path", { d: "M3 12l3 0", key: "svg-0" }], ["path", { d: "M12 3l0 3", key: "svg-1" }], ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }], ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }], ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }], ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rb = Nr("outline", "moon", "IconMoon", [["path", { d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ob = Nr("outline", "photo-star", "IconPhotoStar", [["path", { d: "M15 8h.01", key: "svg-0" }], ["path", { d: "M11 21h-5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5", key: "svg-1" }], ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2", key: "svg-2" }], ["path", { d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z", key: "svg-3" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ab = Nr("outline", "search", "IconSearch", [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sb = Nr("outline", "sun", "IconSun", [["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }], ["path", { d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7", key: "svg-1" }]]), Sf = ["light", "dark"], Y6 = "(prefers-color-scheme: dark)", Z6 = _.createContext(void 0), q6 = { setTheme: (e) => {
}, themes: [] }, X6 = () => {
  var e;
  return (e = _.useContext(Z6)) != null ? e : q6;
};
_.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: s, attrs: i, nonce: c }) => {
  let d = a === "system", u = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map((h) => `'${h}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = o ? Sf.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", p = (h, v = !1, g = !0) => {
    let b = s ? s[h] : h, x = v ? h + "|| ''" : `'${b}'`, y = "";
    return o && g && !v && Sf.includes(h) && (y += `d.style.colorScheme = '${h}';`), n === "class" ? v || b ? y += `c.add(${x})` : y += "null" : b && (y += `d[s](n,${x})`), y;
  }, m = e ? `!function(){${u}${p(e)}}()` : r ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${Y6}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}${d ? "" : "else{" + p(a, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}else{${p(a, !1, !1)};}${f}}catch(t){}}();`;
  return _.createElement("script", { nonce: c, dangerouslySetInnerHTML: { __html: m } });
});
const Q6 = ({ isExpanded: e }) => {
  const [t, n] = q(!1), { theme: r, setTheme: o } = X6();
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
        /* @__PURE__ */ l.jsx(rb, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(sb, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, J6 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ l.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ l.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ l.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(Q6, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ l.jsx(ox, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ l.jsx(ax, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ l.jsx(ap, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Fi = W6((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), DT = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = Fi();
  return /* @__PURE__ */ l.jsx(
    "aside",
    {
      tabIndex: -1,
      className: M(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ l.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ l.jsx(H6, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ l.jsx(
          J6,
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
}, RT = ({ children: e }) => {
  const { isExpanded: t } = Fi();
  return /* @__PURE__ */ l.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ l.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, ib = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = q(!1), c = Y(null), { isExpanded: d } = Fi();
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
  }, [e]), o ? /* @__PURE__ */ l.jsx(Yn, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
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
        s && d && /* @__PURE__ */ l.jsxs(Zn, { children: [
          /* @__PURE__ */ l.jsx(qn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ l.jsx(Pn, { children: /* @__PURE__ */ l.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ l.jsx(Yn, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
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
        s && d && /* @__PURE__ */ l.jsxs(Zn, { children: [
          /* @__PURE__ */ l.jsx(qn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ l.jsx(Pn, { children: /* @__PURE__ */ l.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Nf = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = q(!1), c = Y(null);
  return Q(() => {
    const d = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const f = u.offsetWidth < u.scrollWidth;
        i(f);
      }
    };
    return window.addEventListener("resize", d), d(), () => window.removeEventListener("resize", d);
  }, [n]), a ? /* @__PURE__ */ l.jsx(Yn, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
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
        s && e && /* @__PURE__ */ l.jsxs(Zn, { children: [
          /* @__PURE__ */ l.jsx(qn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ l.jsx(Pn, { children: /* @__PURE__ */ l.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ l.jsx(Yn, { delayDuration: 180, children: /* @__PURE__ */ l.jsxs(
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
        s && e && /* @__PURE__ */ l.jsxs(Zn, { children: [
          /* @__PURE__ */ l.jsx(qn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ l.jsx(Pn, { children: /* @__PURE__ */ l.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, ej = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = q(!1), [i, c] = q(!1), { isExpanded: d } = Fi(), u = Y(null), f = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return Q(() => {
    const m = () => {
      const h = u.current.querySelector(`#${p}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ l.jsxs(Yn, { delayDuration: 180, children: [
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
            a && d && /* @__PURE__ */ l.jsxs(Zn, { children: [
              /* @__PURE__ */ l.jsx(qn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ l.jsx(Pn, { children: /* @__PURE__ */ l.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ l.jsx(mu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ l.jsx(Jo, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(
      Nf,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: d
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ l.jsxs(Yn, { delayDuration: 180, children: [
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
            a && d && /* @__PURE__ */ l.jsxs(Zn, { children: [
              /* @__PURE__ */ l.jsx(qn, { className: "truncate", children: /* @__PURE__ */ l.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ l.jsx(Pn, { children: /* @__PURE__ */ l.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ l.jsx(mu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ l.jsx(Jo, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(
      Nf,
      {
        ...m,
        pathname: r,
        isExpanded: d
      }
    ) }, m.to)) })
  ] });
}, tr = zt({
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
function tj() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = st(tr);
  return /* @__PURE__ */ l.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ l.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ l.jsxs(
        xd,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ l.jsx(Si, { className: "h-8 w-[70px]", children: /* @__PURE__ */ l.jsx(yd, { placeholder: e.limit }) }),
            /* @__PURE__ */ l.jsx(Ni, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ l.jsx(Ei, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ l.jsxs(
        Be,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ l.jsx(oi, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ l.jsxs(
        Be,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ l.jsx(yr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const cb = () => {
  const { columns: e } = st(tr);
  return /* @__PURE__ */ l.jsx(pv, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ l.jsx(Ti, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ l.jsx(hv, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, AT = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, Ao = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), IT = { limit: 10, page: 1 }, Ef = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), LT = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], nj = ({ colSpan: e }) => /* @__PURE__ */ l.jsx(Ti, { children: /* @__PURE__ */ l.jsx(Sd, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), rj = ({
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
      Be,
      {
        onClick: () => n(u),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ l.jsx(G6, { size: 18 })
      }
    ) : d.id === "multi-select" ? /* @__PURE__ */ l.jsx(
      jh,
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
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: e.map((d) => /* @__PURE__ */ l.jsx(Ti, { children: t.map((u) => /* @__PURE__ */ l.jsx(Sd, { children: c(u, d) }, Ef())) }, Ef())) });
}, lb = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = st(tr), [s, i] = q(
    o ? o.length : 0
  );
  return /* @__PURE__ */ l.jsx(mv, { className: "bg-card", children: e.length ? /* @__PURE__ */ l.jsx(
    rj,
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
  ) : /* @__PURE__ */ l.jsx(nj, { colSpan: t.length }) });
}, oj = () => /* @__PURE__ */ l.jsxs(Cd, { children: [
  /* @__PURE__ */ l.jsx(cb, {}),
  /* @__PURE__ */ l.jsx(lb, {})
] }), aj = () => /* @__PURE__ */ l.jsx("span", { className: "loader-fade-dot" }), sj = () => /* @__PURE__ */ l.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ l.jsx(aj, {}),
  /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var Pf = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = pe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, db = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? Pf(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return Pf(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, ij = function(e, t) {
  t.shouldUseNativeValidation && db(e, t);
  var n = {};
  for (var r in e) {
    var o = pe(t.fields, r), a = Object.assign(e[r] || {}, { ref: o && o.ref });
    if (cj(t.names || Object.keys(e), r)) {
      var s = Object.assign({}, pe(n, r));
      Ze(s, "root", a), Ze(n, r, s);
    } else
      Ze(n, r, a);
  }
  return n;
}, cj = function(e, t) {
  return e.some(function(n) {
    return n.startsWith(t + ".");
  });
}, lj = function(e, t) {
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
      n[s] = Fm(s, t, n, o, d ? [].concat(d, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, ub = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(d) {
            return a.shouldUseNativeValidation && db({}, a), { errors: {}, values: n.raw ? r : d };
          });
        } catch (d) {
          return i(d);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: ij(lj(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, Ue;
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
})(Ue || (Ue = {}));
var al;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(al || (al = {}));
const we = Ue.arrayToEnum([
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
]), lr = (e) => {
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
}, se = Ue.arrayToEnum([
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
]), dj = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Kt extends Error {
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
    if (!(t instanceof Kt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ue.jsonStringifyReplacer, 2);
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
Kt.create = (e) => new Kt(e);
const wo = (e, t) => {
  let n;
  switch (e.code) {
    case se.invalid_type:
      e.received === we.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case se.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ue.jsonStringifyReplacer)}`;
      break;
    case se.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ue.joinValues(e.keys, ", ")}`;
      break;
    case se.invalid_union:
      n = "Invalid input";
      break;
    case se.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ue.joinValues(e.options)}`;
      break;
    case se.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ue.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ue.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
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
      n = t.defaultError, Ue.assertNever(e);
  }
  return { message: n };
};
let fb = wo;
function uj(e) {
  fb = e;
}
function Ks() {
  return fb;
}
const Gs = (e) => {
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
}, fj = [];
function ve(e, t) {
  const n = Ks(), r = Gs({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === wo ? void 0 : wo
      // then global default map
    ].filter((o) => !!o)
  });
  e.common.issues.push(r);
}
class Pt {
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
        return Oe;
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
    return Pt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: a, value: s } = o;
      if (a.status === "aborted" || s.status === "aborted")
        return Oe;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const Oe = Object.freeze({
  status: "aborted"
}), co = (e) => ({ status: "dirty", value: e }), Dt = (e) => ({ status: "valid", value: e }), sl = (e) => e.status === "aborted", il = (e) => e.status === "dirty", da = (e) => e.status === "valid", Ys = (e) => typeof Promise < "u" && e instanceof Promise;
function Zs(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function pb(e, t, n, r, o) {
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
const kf = (e, t) => {
  if (da(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Kt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Ae(e) {
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
class Ve {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return lr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: lr(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Pt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: lr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Ys(n))
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
      parsedType: lr(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return kf(o, a);
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
      parsedType: lr(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (Ys(o) ? o : Promise.resolve(o));
    return kf(r, a);
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
    return new vn({
      schema: this,
      typeName: Me.ZodEffects,
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
    return xr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return sn.create(this, this._def);
  }
  promise() {
    return _o.create(this, this._def);
  }
  or(t) {
    return ma.create([this, t], this._def);
  }
  and(t) {
    return ha.create(this, t, this._def);
  }
  transform(t) {
    return new vn({
      ...Ae(this._def),
      schema: this,
      typeName: Me.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ya({
      ...Ae(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Me.ZodDefault
    });
  }
  brand() {
    return new Hd({
      typeName: Me.ZodBranded,
      type: this,
      ...Ae(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new wa({
      ...Ae(this._def),
      innerType: this,
      catchValue: n,
      typeName: Me.ZodCatch
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
    return Za.create(this, t);
  }
  readonly() {
    return $a.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const pj = /^c[^\s-]{8,}$/i, mj = /^[0-9a-z]+$/, hj = /^[0-9A-HJKMNP-TV-Z]{26}$/, vj = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, gj = /^[a-z0-9_-]{21}$/i, bj = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, xj = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, yj = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let wc;
const wj = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, $j = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, _j = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, mb = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Cj = new RegExp(`^${mb}$`);
function hb(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function Sj(e) {
  return new RegExp(`^${hb(e)}$`);
}
function vb(e) {
  let t = `${mb}T${hb(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function Nj(e, t) {
  return !!((t === "v4" || !t) && wj.test(e) || (t === "v6" || !t) && $j.test(e));
}
class on extends Ve {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== we.string) {
      const a = this._getOrReturnCtx(t);
      return ve(a, {
        code: se.invalid_type,
        expected: we.string,
        received: a.parsedType
      }), Oe;
    }
    const r = new Pt();
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
        xj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "email",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        wc || (wc = new RegExp(yj, "u")), wc.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "emoji",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        vj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "uuid",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        gj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "nanoid",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        pj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "cuid",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        mj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "cuid2",
          code: se.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        hj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
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
        }), r.dirty()) : a.kind === "datetime" ? vb(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "date" ? Cj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: "date",
          message: a.message
        }), r.dirty()) : a.kind === "time" ? Sj(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          code: se.invalid_string,
          validation: "time",
          message: a.message
        }), r.dirty()) : a.kind === "duration" ? bj.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "duration",
          code: se.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? Nj(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "ip",
          code: se.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "base64" ? _j.test(t.data) || (o = this._getOrReturnCtx(t, o), ve(o, {
          validation: "base64",
          code: se.invalid_string,
          message: a.message
        }), r.dirty()) : Ue.assertNever(a);
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
    typeName: Me.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ae(e)
  });
};
function Ej(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class vr extends Ve {
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
      }), Oe;
    }
    let r;
    const o = new Pt();
    for (const a of this._def.checks)
      a.kind === "int" ? Ue.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ve(r, {
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
      }), o.dirty()) : a.kind === "multipleOf" ? Ej(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ve(r, {
        code: se.not_finite,
        message: a.message
      }), o.dirty()) : Ue.assertNever(a);
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
    return new vr({
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
    return new vr({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ue.isInteger(t.value));
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
vr.create = (e) => new vr({
  checks: [],
  typeName: Me.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ae(e)
});
class gr extends Ve {
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
      }), Oe;
    }
    let r;
    const o = new Pt();
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
      }), o.dirty()) : Ue.assertNever(a);
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
    return new gr({
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
gr.create = (e) => {
  var t;
  return new gr({
    checks: [],
    typeName: Me.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ae(e)
  });
};
class ua extends Ve {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== we.boolean) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.boolean,
        received: r.parsedType
      }), Oe;
    }
    return Dt(t.data);
  }
}
ua.create = (e) => new ua({
  typeName: Me.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ae(e)
});
class Vr extends Ve {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== we.date) {
      const a = this._getOrReturnCtx(t);
      return ve(a, {
        code: se.invalid_type,
        expected: we.date,
        received: a.parsedType
      }), Oe;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ve(a, {
        code: se.invalid_date
      }), Oe;
    }
    const r = new Pt();
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
      }), r.dirty()) : Ue.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Vr({
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
Vr.create = (e) => new Vr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Me.ZodDate,
  ...Ae(e)
});
class qs extends Ve {
  _parse(t) {
    if (this._getType(t) !== we.symbol) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.symbol,
        received: r.parsedType
      }), Oe;
    }
    return Dt(t.data);
  }
}
qs.create = (e) => new qs({
  typeName: Me.ZodSymbol,
  ...Ae(e)
});
class fa extends Ve {
  _parse(t) {
    if (this._getType(t) !== we.undefined) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.undefined,
        received: r.parsedType
      }), Oe;
    }
    return Dt(t.data);
  }
}
fa.create = (e) => new fa({
  typeName: Me.ZodUndefined,
  ...Ae(e)
});
class pa extends Ve {
  _parse(t) {
    if (this._getType(t) !== we.null) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.null,
        received: r.parsedType
      }), Oe;
    }
    return Dt(t.data);
  }
}
pa.create = (e) => new pa({
  typeName: Me.ZodNull,
  ...Ae(e)
});
class $o extends Ve {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Dt(t.data);
  }
}
$o.create = (e) => new $o({
  typeName: Me.ZodAny,
  ...Ae(e)
});
class Rr extends Ve {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Dt(t.data);
  }
}
Rr.create = (e) => new Rr({
  typeName: Me.ZodUnknown,
  ...Ae(e)
});
class Xn extends Ve {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ve(n, {
      code: se.invalid_type,
      expected: we.never,
      received: n.parsedType
    }), Oe;
  }
}
Xn.create = (e) => new Xn({
  typeName: Me.ZodNever,
  ...Ae(e)
});
class Xs extends Ve {
  _parse(t) {
    if (this._getType(t) !== we.undefined) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.void,
        received: r.parsedType
      }), Oe;
    }
    return Dt(t.data);
  }
}
Xs.create = (e) => new Xs({
  typeName: Me.ZodVoid,
  ...Ae(e)
});
class sn extends Ve {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== we.array)
      return ve(n, {
        code: se.invalid_type,
        expected: we.array,
        received: n.parsedType
      }), Oe;
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
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new kn(n, s, n.path, i)))).then((s) => Pt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new kn(n, s, n.path, i)));
    return Pt.mergeArray(r, a);
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
  typeName: Me.ZodArray,
  ...Ae(t)
});
function so(e) {
  if (e instanceof ut) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Cn.create(so(r));
    }
    return new ut({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof sn ? new sn({
      ...e._def,
      type: so(e.element)
    }) : e instanceof Cn ? Cn.create(so(e.unwrap())) : e instanceof xr ? xr.create(so(e.unwrap())) : e instanceof jn ? jn.create(e.items.map((t) => so(t))) : e;
}
class ut extends Ve {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Ue.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== we.object) {
      const d = this._getOrReturnCtx(t);
      return ve(d, {
        code: se.invalid_type,
        expected: we.object,
        received: d.parsedType
      }), Oe;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Xn && this._def.unknownKeys === "strip"))
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
    if (this._def.catchall instanceof Xn) {
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
    }).then((d) => Pt.mergeObjectSync(r, d)) : Pt.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Se.errToObj, new ut({
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
      typeName: Me.ZodObject
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
    return Ue.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Ue.objectKeys(this.shape).forEach((r) => {
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
    return so(this);
  }
  partial(t) {
    const n = {};
    return Ue.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Ue.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Cn; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return gb(Ue.objectKeys(this.shape));
  }
}
ut.create = (e, t) => new ut({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Xn.create(),
  typeName: Me.ZodObject,
  ...Ae(t)
});
ut.strictCreate = (e, t) => new ut({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Xn.create(),
  typeName: Me.ZodObject,
  ...Ae(t)
});
ut.lazycreate = (e, t) => new ut({
  shape: e,
  unknownKeys: "strip",
  catchall: Xn.create(),
  typeName: Me.ZodObject,
  ...Ae(t)
});
class ma extends Ve {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new Kt(i.ctx.common.issues));
      return ve(n, {
        code: se.invalid_union,
        unionErrors: s
      }), Oe;
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
      const i = s.map((c) => new Kt(c));
      return ve(n, {
        code: se.invalid_union,
        unionErrors: i
      }), Oe;
    }
  }
  get options() {
    return this._def.options;
  }
}
ma.create = (e, t) => new ma({
  options: e,
  typeName: Me.ZodUnion,
  ...Ae(t)
});
const Fn = (e) => e instanceof ga ? Fn(e.schema) : e instanceof vn ? Fn(e.innerType()) : e instanceof ba ? [e.value] : e instanceof br ? e.options : e instanceof xa ? Ue.objectValues(e.enum) : e instanceof ya ? Fn(e._def.innerType) : e instanceof fa ? [void 0] : e instanceof pa ? [null] : e instanceof Cn ? [void 0, ...Fn(e.unwrap())] : e instanceof xr ? [null, ...Fn(e.unwrap())] : e instanceof Hd || e instanceof $a ? Fn(e.unwrap()) : e instanceof wa ? Fn(e._def.innerType) : [];
class Vi extends Ve {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== we.object)
      return ve(n, {
        code: se.invalid_type,
        expected: we.object,
        received: n.parsedType
      }), Oe;
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
    }), Oe);
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
    return new Vi({
      typeName: Me.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Ae(r)
    });
  }
}
function cl(e, t) {
  const n = lr(e), r = lr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === we.object && r === we.object) {
    const o = Ue.objectKeys(t), a = Ue.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
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
class ha extends Ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (sl(a) || sl(s))
        return Oe;
      const i = cl(a.value, s.value);
      return i.valid ? ((il(a) || il(s)) && n.dirty(), { status: n.value, value: i.data }) : (ve(r, {
        code: se.invalid_intersection_types
      }), Oe);
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
ha.create = (e, t, n) => new ha({
  left: e,
  right: t,
  typeName: Me.ZodIntersection,
  ...Ae(n)
});
class jn extends Ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== we.array)
      return ve(r, {
        code: se.invalid_type,
        expected: we.array,
        received: r.parsedType
      }), Oe;
    if (r.data.length < this._def.items.length)
      return ve(r, {
        code: se.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Oe;
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
    return r.common.async ? Promise.all(a).then((s) => Pt.mergeArray(n, s)) : Pt.mergeArray(n, a);
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
    typeName: Me.ZodTuple,
    rest: null,
    ...Ae(t)
  });
};
class va extends Ve {
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
      }), Oe;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new kn(r, i, r.path, i)),
        value: s._parse(new kn(r, r.data[i], r.path, i)),
        alwaysSet: i in r.data
      });
    return r.common.async ? Pt.mergeObjectAsync(n, o) : Pt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Ve ? new va({
      keyType: t,
      valueType: n,
      typeName: Me.ZodRecord,
      ...Ae(r)
    }) : new va({
      keyType: on.create(),
      valueType: t,
      typeName: Me.ZodRecord,
      ...Ae(n)
    });
  }
}
class Qs extends Ve {
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
      }), Oe;
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
            return Oe;
          (d.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(d.value, u.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const d = c.key, u = c.value;
        if (d.status === "aborted" || u.status === "aborted")
          return Oe;
        (d.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(d.value, u.value);
      }
      return { status: n.value, value: i };
    }
  }
}
Qs.create = (e, t, n) => new Qs({
  valueType: t,
  keyType: e,
  typeName: Me.ZodMap,
  ...Ae(n)
});
class zr extends Ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== we.set)
      return ve(r, {
        code: se.invalid_type,
        expected: we.set,
        received: r.parsedType
      }), Oe;
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
          return Oe;
        u.status === "dirty" && n.dirty(), d.add(u.value);
      }
      return { status: n.value, value: d };
    }
    const i = [...r.data.values()].map((c, d) => a._parse(new kn(r, c, r.path, d)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new zr({
      ...this._def,
      minSize: { value: t, message: Se.toString(n) }
    });
  }
  max(t, n) {
    return new zr({
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
zr.create = (e, t) => new zr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Me.ZodSet,
  ...Ae(t)
});
class mo extends Ve {
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
      }), Oe;
    function r(i, c) {
      return Gs({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Ks(),
          wo
        ].filter((d) => !!d),
        issueData: {
          code: se.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return Gs({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Ks(),
          wo
        ].filter((d) => !!d),
        issueData: {
          code: se.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof _o) {
      const i = this;
      return Dt(async function(...c) {
        const d = new Kt([]), u = await i._def.args.parseAsync(c, a).catch((m) => {
          throw d.addIssue(r(c, m)), d;
        }), f = await Reflect.apply(s, this, u);
        return await i._def.returns._def.type.parseAsync(f, a).catch((m) => {
          throw d.addIssue(o(f, m)), d;
        });
      });
    } else {
      const i = this;
      return Dt(function(...c) {
        const d = i._def.args.safeParse(c, a);
        if (!d.success)
          throw new Kt([r(c, d.error)]);
        const u = Reflect.apply(s, this, d.data), f = i._def.returns.safeParse(u, a);
        if (!f.success)
          throw new Kt([o(u, f.error)]);
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
    return new mo({
      ...this._def,
      args: jn.create(t).rest(Rr.create())
    });
  }
  returns(t) {
    return new mo({
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
    return new mo({
      args: t || jn.create([]).rest(Rr.create()),
      returns: n || Rr.create(),
      typeName: Me.ZodFunction,
      ...Ae(r)
    });
  }
}
class ga extends Ve {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ga.create = (e, t) => new ga({
  getter: e,
  typeName: Me.ZodLazy,
  ...Ae(t)
});
class ba extends Ve {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ve(n, {
        received: n.data,
        code: se.invalid_literal,
        expected: this._def.value
      }), Oe;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ba.create = (e, t) => new ba({
  value: e,
  typeName: Me.ZodLiteral,
  ...Ae(t)
});
function gb(e, t) {
  return new br({
    values: e,
    typeName: Me.ZodEnum,
    ...Ae(t)
  });
}
class br extends Ve {
  constructor() {
    super(...arguments), Yo.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ve(n, {
        expected: Ue.joinValues(r),
        received: n.parsedType,
        code: se.invalid_type
      }), Oe;
    }
    if (Zs(this, Yo) || pb(this, Yo, new Set(this._def.values)), !Zs(this, Yo).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ve(n, {
        received: n.data,
        code: se.invalid_enum_value,
        options: r
      }), Oe;
    }
    return Dt(t.data);
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
    return br.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return br.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Yo = /* @__PURE__ */ new WeakMap();
br.create = gb;
class xa extends Ve {
  constructor() {
    super(...arguments), Zo.set(this, void 0);
  }
  _parse(t) {
    const n = Ue.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== we.string && r.parsedType !== we.number) {
      const o = Ue.objectValues(n);
      return ve(r, {
        expected: Ue.joinValues(o),
        received: r.parsedType,
        code: se.invalid_type
      }), Oe;
    }
    if (Zs(this, Zo) || pb(this, Zo, new Set(Ue.getValidEnumValues(this._def.values))), !Zs(this, Zo).has(t.data)) {
      const o = Ue.objectValues(n);
      return ve(r, {
        received: r.data,
        code: se.invalid_enum_value,
        options: o
      }), Oe;
    }
    return Dt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Zo = /* @__PURE__ */ new WeakMap();
xa.create = (e, t) => new xa({
  values: e,
  typeName: Me.ZodNativeEnum,
  ...Ae(t)
});
class _o extends Ve {
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
      }), Oe;
    const r = n.parsedType === we.promise ? n.data : Promise.resolve(n.data);
    return Dt(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
_o.create = (e, t) => new _o({
  type: e,
  typeName: Me.ZodPromise,
  ...Ae(t)
});
class vn extends Ve {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Me.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
            return Oe;
          const c = await this._def.schema._parseAsync({
            data: i,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? Oe : c.status === "dirty" || n.value === "dirty" ? co(c.value) : c;
        });
      {
        if (n.value === "aborted")
          return Oe;
        const i = this._def.schema._parseSync({
          data: s,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? Oe : i.status === "dirty" || n.value === "dirty" ? co(i.value) : i;
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
        return i.status === "aborted" ? Oe : (i.status === "dirty" && n.dirty(), s(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? Oe : (i.status === "dirty" && n.dirty(), s(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!da(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => da(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    Ue.assertNever(o);
  }
}
vn.create = (e, t, n) => new vn({
  schema: e,
  typeName: Me.ZodEffects,
  effect: t,
  ...Ae(n)
});
vn.createWithPreprocess = (e, t, n) => new vn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Me.ZodEffects,
  ...Ae(n)
});
class Cn extends Ve {
  _parse(t) {
    return this._getType(t) === we.undefined ? Dt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Cn.create = (e, t) => new Cn({
  innerType: e,
  typeName: Me.ZodOptional,
  ...Ae(t)
});
class xr extends Ve {
  _parse(t) {
    return this._getType(t) === we.null ? Dt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
xr.create = (e, t) => new xr({
  innerType: e,
  typeName: Me.ZodNullable,
  ...Ae(t)
});
class ya extends Ve {
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
ya.create = (e, t) => new ya({
  innerType: e,
  typeName: Me.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Ae(t)
});
class wa extends Ve {
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
    return Ys(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Kt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Kt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
wa.create = (e, t) => new wa({
  innerType: e,
  typeName: Me.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Ae(t)
});
class Js extends Ve {
  _parse(t) {
    if (this._getType(t) !== we.nan) {
      const r = this._getOrReturnCtx(t);
      return ve(r, {
        code: se.invalid_type,
        expected: we.nan,
        received: r.parsedType
      }), Oe;
    }
    return { status: "valid", value: t.data };
  }
}
Js.create = (e) => new Js({
  typeName: Me.ZodNaN,
  ...Ae(e)
});
const Pj = Symbol("zod_brand");
class Hd extends Ve {
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
class Za extends Ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? Oe : a.status === "dirty" ? (n.dirty(), co(a.value)) : this._def.out._parseAsync({
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
      return o.status === "aborted" ? Oe : o.status === "dirty" ? (n.dirty(), {
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
    return new Za({
      in: t,
      out: n,
      typeName: Me.ZodPipeline
    });
  }
}
class $a extends Ve {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return da(n) && (n.value = Object.freeze(n.value)), n;
  }
  unwrap() {
    return this._def.innerType;
  }
}
$a.create = (e, t) => new $a({
  innerType: e,
  typeName: Me.ZodReadonly,
  ...Ae(t)
});
function bb(e, t = {}, n) {
  return e ? $o.create().superRefine((r, o) => {
    var a, s;
    if (!e(r)) {
      const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, d = typeof i == "string" ? { message: i } : i;
      o.addIssue({ code: "custom", ...d, fatal: c });
    }
  }) : $o.create();
}
const kj = {
  object: ut.lazycreate
};
var Me;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Me || (Me = {}));
const jj = (e, t = {
  message: `Input not instance of ${e.name}`
}) => bb((n) => n instanceof e, t), xb = on.create, yb = vr.create, Mj = Js.create, Tj = gr.create, wb = ua.create, Oj = Vr.create, Dj = qs.create, Rj = fa.create, Aj = pa.create, Ij = $o.create, Lj = Rr.create, Fj = Xn.create, Vj = Xs.create, zj = sn.create, Bj = ut.create, Wj = ut.strictCreate, Hj = ma.create, Uj = Vi.create, Kj = ha.create, Gj = jn.create, Yj = va.create, Zj = Qs.create, qj = zr.create, Xj = mo.create, Qj = ga.create, Jj = ba.create, e4 = br.create, t4 = xa.create, n4 = _o.create, jf = vn.create, r4 = Cn.create, o4 = xr.create, a4 = vn.createWithPreprocess, s4 = Za.create, i4 = () => xb().optional(), c4 = () => yb().optional(), l4 = () => wb().optional(), d4 = {
  string: (e) => on.create({ ...e, coerce: !0 }),
  number: (e) => vr.create({ ...e, coerce: !0 }),
  boolean: (e) => ua.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => gr.create({ ...e, coerce: !0 }),
  date: (e) => Vr.create({ ...e, coerce: !0 })
}, u4 = Oe;
var ei = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: wo,
  setErrorMap: uj,
  getErrorMap: Ks,
  makeIssue: Gs,
  EMPTY_PATH: fj,
  addIssueToContext: ve,
  ParseStatus: Pt,
  INVALID: Oe,
  DIRTY: co,
  OK: Dt,
  isAborted: sl,
  isDirty: il,
  isValid: da,
  isAsync: Ys,
  get util() {
    return Ue;
  },
  get objectUtil() {
    return al;
  },
  ZodParsedType: we,
  getParsedType: lr,
  ZodType: Ve,
  datetimeRegex: vb,
  ZodString: on,
  ZodNumber: vr,
  ZodBigInt: gr,
  ZodBoolean: ua,
  ZodDate: Vr,
  ZodSymbol: qs,
  ZodUndefined: fa,
  ZodNull: pa,
  ZodAny: $o,
  ZodUnknown: Rr,
  ZodNever: Xn,
  ZodVoid: Xs,
  ZodArray: sn,
  ZodObject: ut,
  ZodUnion: ma,
  ZodDiscriminatedUnion: Vi,
  ZodIntersection: ha,
  ZodTuple: jn,
  ZodRecord: va,
  ZodMap: Qs,
  ZodSet: zr,
  ZodFunction: mo,
  ZodLazy: ga,
  ZodLiteral: ba,
  ZodEnum: br,
  ZodNativeEnum: xa,
  ZodPromise: _o,
  ZodEffects: vn,
  ZodTransformer: vn,
  ZodOptional: Cn,
  ZodNullable: xr,
  ZodDefault: ya,
  ZodCatch: wa,
  ZodNaN: Js,
  BRAND: Pj,
  ZodBranded: Hd,
  ZodPipeline: Za,
  ZodReadonly: $a,
  custom: bb,
  Schema: Ve,
  ZodSchema: Ve,
  late: kj,
  get ZodFirstPartyTypeKind() {
    return Me;
  },
  coerce: d4,
  any: Ij,
  array: zj,
  bigint: Tj,
  boolean: wb,
  date: Oj,
  discriminatedUnion: Uj,
  effect: jf,
  enum: e4,
  function: Xj,
  instanceof: jj,
  intersection: Kj,
  lazy: Qj,
  literal: Jj,
  map: Zj,
  nan: Mj,
  nativeEnum: t4,
  never: Fj,
  null: Aj,
  nullable: o4,
  number: yb,
  object: Bj,
  oboolean: l4,
  onumber: c4,
  optional: r4,
  ostring: i4,
  pipeline: s4,
  preprocess: a4,
  promise: n4,
  record: Yj,
  set: qj,
  strictObject: Wj,
  string: xb,
  symbol: Dj,
  transformer: jf,
  tuple: Gj,
  undefined: Rj,
  union: Hj,
  unknown: Lj,
  void: Vj,
  NEVER: u4,
  ZodIssueCode: se,
  quotelessJson: dj,
  ZodError: Kt
});
const f4 = () => {
  const { showFilters: e, setShowFilters: t } = st(tr);
  return /* @__PURE__ */ l.jsxs(
    Be,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ l.jsx(tb, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, p4 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = st(tr), [d, u] = q(null), f = Y(null), p = (m) => {
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
  }, []), /* @__PURE__ */ l.jsxs(Un, { children: [
    /* @__PURE__ */ l.jsx(Kn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
      Be,
      {
        size: "sm",
        type: "button",
        ref: f,
        variant: "outline",
        className: "py-5 border-dashed border-muted-foreground",
        children: [
          n || /* @__PURE__ */ l.jsx(nb, { size: 16, className: "mr-2" }),
          r,
          i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx(Ua, { orientation: "vertical", className: "mx-2 h-4" }),
            /* @__PURE__ */ l.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length >= 1 ? /* @__PURE__ */ l.jsx(
              Ot,
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
              Ot,
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
    /* @__PURE__ */ l.jsx(En, { className: "p-0 combox-checkbox-content", align: "start", children: /* @__PURE__ */ l.jsxs(Gn, { children: [
      /* @__PURE__ */ l.jsx(mr, { placeholder: r }),
      /* @__PURE__ */ l.jsxs(Ro, { children: [
        /* @__PURE__ */ l.jsx(hr, { children: "Sin Resultados" }),
        /* @__PURE__ */ l.jsx(mn, { children: o.map((m) => /* @__PURE__ */ l.jsx(Yn, { children: /* @__PURE__ */ l.jsxs(Zn, { delayDuration: 150, children: [
          /* @__PURE__ */ l.jsx(qn, { className: "w-full", children: /* @__PURE__ */ l.jsxs(
            hn,
            {
              onSelect: () => {
                m.selected ? s(e, m.id, !1) : s(e, m.id, !0);
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: M(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      m.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                    ),
                    children: /* @__PURE__ */ l.jsx(un, { className: M("h-4 w-4") })
                  }
                ),
                m.icon,
                /* @__PURE__ */ l.jsx("span", { className: "truncate", children: m.label })
              ]
            },
            m.value.toString()
          ) }),
          /* @__PURE__ */ l.jsx(Pn, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ l.jsx("p", { children: m.label }) })
        ] }) })) }),
        i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(ki, {}),
          /* @__PURE__ */ l.jsx(mn, { children: /* @__PURE__ */ l.jsx(
            hn,
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
}, m4 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = st(tr), d = () => {
    var f;
    const u = [];
    (f = Object.entries(t == null ? void 0 : t.getValues())) == null || f.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : Ao(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ l.jsxs(Un, { children: [
    /* @__PURE__ */ l.jsx(Kn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(Be, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ l.jsx(Es, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Ua, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ l.jsx(
          Ot,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: o
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsxs(En, { className: "w-fit p-4", align: "start", children: [
      /* @__PURE__ */ l.jsxs(On, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ l.jsx(
          hd,
          {
            id: e,
            form: t,
            type: "text",
            placeholder: `Ingrese ${n}`
          }
        ),
        /* @__PURE__ */ l.jsx(
          Be,
          {
            type: "button",
            onClick: d,
            className: "h-10 w-fit",
            children: /* @__PURE__ */ l.jsx(Es, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, h4 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: d
  } = st(tr), u = e.watch(n.map((p) => p.id)), f = () => {
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
          m4,
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
      /* @__PURE__ */ l.jsx(f4, {}),
      o && r && r.map((p) => /* @__PURE__ */ l.jsx(
        p4,
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
        Be,
        {
          type: "button",
          variant: "ghost",
          onClick: f,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ l.jsx(si, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, v4 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = st(tr), d = Km({
    defaultValues: n.reduce((f, p) => (f[p.id] = "", f), {}),
    resolver: ub(
      ei.object(
        n.reduce((f, p) => (f[p.id] = ei.string().optional(), f), {})
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
  return Q(() => i(d), [d]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ l.jsx("div", {}) : /* @__PURE__ */ l.jsx(Ym, { ...d, children: /* @__PURE__ */ l.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ l.jsx(h4, { form: d, onSubmit: u }) : /* @__PURE__ */ l.jsx("div", {}),
    /* @__PURE__ */ l.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ l.jsx(
      Be,
      {
        type: "submit",
        onClick: d.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ l.jsx($l, {}) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(ab, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, g4 = () => /* @__PURE__ */ l.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), b4 = () => /* @__PURE__ */ l.jsxs(Cd, { children: [
  /* @__PURE__ */ l.jsx(cb, {}),
  /* @__PURE__ */ l.jsx(lb, {})
] }), x4 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function FT(e) {
  const [t, n] = q([]), [r, o] = q([]), [a, s] = q([]), [i, c] = q(!1), [d, u] = q(e == null ? void 0 : e.error), [f, p] = q(e == null ? void 0 : e.loading), [m, h] = q(), [v, g] = q(
    (e == null ? void 0 : e.pagination) ?? x4
  ), [b, x] = q(
    (e == null ? void 0 : e.columns) || []
  ), y = ge(
    (T) => e.onSubmitTable({ ...T }),
    [e]
  ), $ = ge(
    (T) => {
      var H;
      g(T);
      const O = m.getValues(), F = [];
      (H = Object.entries(O)) == null || H.forEach((G) => {
        G[1] && F.push({
          field: e.isFormatedUpperQueries ? G[0] : Ao(G[0]),
          text: G[1]
        });
      });
      const A = r.map((G) => ({
        id: G.id,
        label: G.label,
        options: G.options.filter((ne) => ne.selected).map((ne) => ne.value)
      })).filter((G) => G.options.length > 0);
      y({
        filters: A,
        queries: F,
        limit: T.limit,
        page: T.page
      });
    },
    [r, y, m]
  ), C = ge(() => {
    $({ ...v, page: v.page + 1 });
  }, [v, $]), E = ge(() => {
    v.page > 1 && $({ ...v, page: v.page - 1 });
  }, [v, $]), S = () => r.map((T) => ({
    id: T.id,
    label: T.label,
    options: T.options.filter((O) => O.selected).map((O) => O.value)
  })).filter((T) => T.options.length > 0), N = (T) => {
    const O = r.find((F) => F.id === T);
    return O ? O.options.filter((A) => A.selected).map((A) => A.value) : [];
  }, j = (T, O, F) => {
    const A = r.map((H) => H.id === T ? {
      ...H,
      options: H.options.map((G) => G.id === O ? { ...G, selected: F } : G)
    } : H);
    o(A);
  }, V = () => r, L = (T) => {
    const O = r.map((F) => F.id === T ? {
      ...F,
      options: F.options.map((A) => ({
        ...A,
        selected: !1
      }))
    } : F);
    o(O);
  }, B = (T) => $({ ...v, limit: T }), Z = () => {
    const T = r.map((O) => ({
      ...O,
      options: O.options.map((F) => ({ ...F, selected: !1 }))
    }));
    o(T);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const T = b.filter((O) => O.isQuery).map((O) => ({
      id: O.id,
      label: O.label
    }));
    s(T);
  }, [b]), Q(() => {
    const T = (F) => (F == null ? void 0 : F.filters) && (F == null ? void 0 : F.filters.length), O = b.filter(T).map((F) => {
      const A = F.filters.map((G) => ({
        ...G,
        selected: !1
      }));
      return {
        ...F,
        id: F.id,
        options: A
      };
    });
    o(O);
  }, [b]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((T) => {
      T != null && T.filters && b.forEach((O) => {
        T.id === O.id && o((F) => F.some((H) => H.id === T.id) ? F : [
          ...F,
          {
            id: O.id,
            label: O.label,
            options: T.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), Q(() => {
    g((T) => {
      var O, F;
      return {
        ...T,
        hasNextPage: (O = e == null ? void 0 : e.pagination) == null ? void 0 : O.hasNextPage,
        hasPrevPage: (F = e == null ? void 0 : e.pagination) == null ? void 0 : F.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ l.jsx(
    tr.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: C,
        prevPage: E,
        searchForm: m,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: B,
        showFilters: i,
        resetFilters: Z,
        getGlobalFilters: V,
        selectOptionFilter: j,
        resetOptionsByFilter: L,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: y,
        getFilterOptionsSelectedById: N,
        getFiltersWithOptionsSelected: S,
        setSelectItem: e.setSelectItem,
        setShowFilters: (T) => c(T),
        setSearchForm: (T) => h(T)
      },
      children: /* @__PURE__ */ l.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ l.jsx(v4, { onSubmitTable: y, loading: f }),
        /* @__PURE__ */ l.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          f && /* @__PURE__ */ l.jsx(sj, {}),
          !f && d && /* @__PURE__ */ l.jsx(g4, {}),
          !f && !d && !t && /* @__PURE__ */ l.jsx(b4, {}),
          !f && !d && t && /* @__PURE__ */ l.jsx(oj, {})
        ] }),
        !f && !d && t && /* @__PURE__ */ l.jsx(tj, {})
      ] })
    }
  );
}
const VT = ({
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
}) => p ? /* @__PURE__ */ l.jsxs("div", { className: M("w-full", c), children: [
  /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: t && /* @__PURE__ */ l.jsx(Et, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ l.jsx(Et, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(Et, { className: "w-full h-9 mt-2" }) })
] }) : /* @__PURE__ */ l.jsx(
  Kr,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: m, formState: h }) => {
      var v;
      return /* @__PURE__ */ l.jsxs(Cr, { className: M("w-full", c), children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ l.jsxs(Gr, { className: "flex", children: [
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
          xd,
          {
            onValueChange: (g) => g && m.onChange(g),
            defaultValue: m.value,
            disabled: f,
            value: m == null ? void 0 : m.value,
            children: [
              /* @__PURE__ */ l.jsx(Ba, { children: /* @__PURE__ */ l.jsx(Si, { disabled: f, tabIndex: i, className: M("w-full", d), children: /* @__PURE__ */ l.jsx(yd, { placeholder: r }) }) }),
              /* @__PURE__ */ l.jsx(Ni, { children: /* @__PURE__ */ l.jsxs(bS, { className: M("overflow-auto", u), children: [
                a.length ? null : /* @__PURE__ */ l.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
                a.map((g) => {
                  var b, x;
                  return /* @__PURE__ */ l.jsx(Ei, { value: (b = g.value) == null ? void 0 : b.toString(), children: /* @__PURE__ */ l.jsxs("div", { className: "flex justify-center items-center", children: [
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
function zi() {
  return (zi = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function $b(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function ll(e) {
  var t = Y(e), n = Y(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var _a = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Xo = function(e) {
  return "touches" in e;
}, dl = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Mf = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = Xo(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: _a((o.pageX - (r.left + dl(e).pageXOffset)) / r.width), top: _a((o.pageY - (r.top + dl(e).pageYOffset)) / r.height) };
}, Tf = function(e) {
  !Xo(e) && e.preventDefault();
}, _b = z.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = $b(e, ["onMove", "onKey"]), o = Y(null), a = ll(t), s = ll(n), i = Y(null), c = Y(!1), d = Gt(function() {
    var m = function(g) {
      Tf(g), (Xo(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Mf(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, x = dl(o.current), y = g ? x.addEventListener : x.removeEventListener;
      y(b ? "touchmove" : "mousemove", m), y(b ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var b = g.nativeEvent, x = o.current;
      if (x && (Tf(b), !function($, C) {
        return C && !Xo($);
      }(b, c.current) && x)) {
        if (Xo(b)) {
          c.current = !0;
          var y = b.changedTouches || [];
          y.length && (i.current = y[0].identifier);
        }
        x.focus(), a(Mf(x, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = d[0], f = d[1], p = d[2];
  return Q(function() {
    return p;
  }, [p]), z.createElement("div", zi({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: f, tabIndex: 0, role: "slider" }));
}), Ud = function(e) {
  return e.filter(Boolean).join(" ");
}, Cb = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Ud(["react-colorful__pointer", e.className]);
  return z.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, z.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, St = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, y4 = function(e) {
  return S4(ul(e));
}, ul = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? St(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? St(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, w4 = function(e) {
  return C4(_4(e));
}, $4 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: St(e.h), s: St(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: St(o / 2), a: St(r, 2) };
}, fl = function(e) {
  var t = $4(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, _4 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), d = a % 6;
  return { r: St(255 * [r, i, s, s, c, r][d]), g: St(255 * [c, r, r, i, s, s][d]), b: St(255 * [s, s, c, r, r, i][d]), a: St(o, 2) };
}, us = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, C4 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? us(St(255 * o)) : "";
  return "#" + us(t) + us(n) + us(r) + a;
}, S4 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: St(60 * (i < 0 ? i + 6 : i)), s: St(a ? s / a * 100 : 0), v: St(a / 255 * 100), a: o };
}, N4 = z.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Ud(["react-colorful__hue", e.className]);
  return z.createElement("div", { className: r }, z.createElement(_b, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: _a(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": St(t), "aria-valuemax": "360", "aria-valuemin": "0" }, z.createElement(Cb, { className: "react-colorful__hue-pointer", left: t / 360, color: fl({ h: t, s: 100, v: 100, a: 1 }) })));
}), E4 = z.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: fl({ h: t.h, s: 100, v: 100, a: 1 }) };
  return z.createElement("div", { className: "react-colorful__saturation", style: r }, z.createElement(_b, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: _a(t.s + 100 * o.left, 0, 100), v: _a(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + St(t.s) + "%, Brightness " + St(t.v) + "%" }, z.createElement(Cb, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: fl(t) })));
}), Sb = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, P4 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Sb(ul(e), ul(t));
};
function k4(e, t, n) {
  var r = ll(n), o = q(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = Y({ color: t, hsva: a });
  Q(function() {
    if (!e.equal(t, i.current.color)) {
      var d = e.toHsva(t);
      i.current = { hsva: d, color: t }, s(d);
    }
  }, [t, e]), Q(function() {
    var d;
    Sb(a, i.current.hsva) || e.equal(d = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: d }, r(d));
  }, [a, e, r]);
  var c = ge(function(d) {
    s(function(u) {
      return Object.assign({}, u, d);
    });
  }, []);
  return [a, c];
}
var j4 = typeof window < "u" ? Ea : Q, M4 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Of = /* @__PURE__ */ new Map(), T4 = function(e) {
  j4(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Of.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Of.set(t, n);
      var r = M4();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, O4 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = $b(e, ["className", "colorModel", "color", "onChange"]), i = Y(null);
  T4(i);
  var c = k4(n, o, a), d = c[0], u = c[1], f = Ud(["react-colorful", t]);
  return z.createElement("div", zi({}, s, { ref: i, className: f }), z.createElement(E4, { hsva: d, onChange: u }), z.createElement(N4, { hue: d.h, onChange: u, className: "react-colorful__last-control" }));
}, D4 = { defaultColor: "000", toHsva: y4, fromHsva: function(e) {
  return w4({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: P4 }, R4 = function(e) {
  return z.createElement(O4, zi({}, e, { colorModel: D4 }));
};
const zT = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ l.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ l.jsx(R4, { color: e, onChange: t }),
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
function A4(e, t, n) {
  var r = q([]), o = r[0], a = r[1], s = Y([]), i = ge(function(f, p) {
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
function I4(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Bi = {
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
}, Tt;
for (Tt = 1; Tt < 25; Tt += 1)
  Bi[111 + Tt] = "F" + Tt;
for (Tt = 65; Tt < 91; Tt += 1) {
  var Df = /* @__PURE__ */ String.fromCharCode(Tt);
  Bi[Tt] = [/* @__PURE__ */ Df.toLowerCase(), /* @__PURE__ */ Df.toUpperCase()];
}
for (Tt = 96; Tt < 106; Tt += 1)
  Bi[Tt] = /* @__PURE__ */ String.fromCharCode(Tt - 48);
function L4(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = Bi[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var F4 = {
  getKey: L4
};
function fs() {
}
function Nb(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function V4(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var z4 = ["refs"], $c = [], B4 = ["autoFocus", "length", "validate", "format", "formatAriaLabel", "debug"], W4 = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], H4 = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], U4 = {
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
  onResolveKey: fs,
  onRejectKey: fs,
  onChange: fs,
  onComplete: fs,
  debug: !1
};
function K4(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: G4(e.validate),
    fallback: null
  };
}
function Eb(e) {
  return Math.max(0, e - 1);
}
function pl(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function G4(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Rf(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = pl(o + e.focusIdx - 1, e.codeLength), s = Nb(0, o).flatMap(function(i) {
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
var Y4 = function(t, n) {
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
          var r = Eb(t.focusIdx);
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
        return Rf(s, d, f);
      return [s, i];
    }
    case "handle-paste":
      return Rf(t, n.idx, n.val);
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
function Z4(e) {
  var t = e.refs, n = I4(e, z4);
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
          var s = Eb(r.idx);
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
var q4 = /* @__PURE__ */ D(function(e, t) {
  var n = nn({}, U4, e), r = n.autoFocus, o = n.formatAriaLabel, a = n.length, s = V4([].concat(B4, W4), n), i = Y([]), c = Z4(nn({
    refs: i
  }, n)), d = A4(Y4, c, K4(n))[1];
  d0(t, function() {
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
      var x = F4.getKey(b.nativeEvent);
      !H4.includes(x) && !b.ctrlKey && !b.altKey && !b.metaKey && b.nativeEvent.target instanceof HTMLInputElement && (b.preventDefault(), d({
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
  return z.createElement(z.Fragment, null, Nb(0, a).map(function(g) {
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
const BT = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [d] = z.useState(!1);
  return /* @__PURE__ */ l.jsx("div", { className: M("pin-field-container", s), children: /* @__PURE__ */ l.jsx(
    q4,
    {
      className: M("pin-field", { complete: d }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var Pb = {}, Kd = {};
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
})(Kd);
var kb = {}, zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.DEFAULT_DATA_URL_KEY = zn.INIT_MAX_NUMBER = zn.DEFAULT_NULL_INDEX = void 0;
zn.DEFAULT_NULL_INDEX = -1;
zn.INIT_MAX_NUMBER = 1e3;
zn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = $t && $t.__awaiter || function(a, s, i, c) {
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
  }, n = $t && $t.__generator || function(a, s) {
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
  var r = zn, o = Kd;
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
})(kb);
var ml = $t && $t.__assign || function() {
  return ml = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ml.apply(this, arguments);
}, X4 = $t && $t.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), Q4 = $t && $t.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), J4 = $t && $t.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && X4(t, e, n);
  return Q4(t, e), t;
}, _c = $t && $t.__awaiter || function(e, t, n, r) {
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
}, Cc = $t && $t.__generator || function(e, t) {
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
}, Sc = $t && $t.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(Pb, "__esModule", { value: !0 });
var en = J4(z), Nc = Kd, e3 = kb, sr = zn, t3 = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? sr.DEFAULT_DATA_URL_KEY : s, c = e.multiple, d = c === void 0 ? !1 : c, u = e.maxNumber, f = u === void 0 ? sr.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, x = b === void 0 ? {} : b, y = e.allowNonImageType, $ = y === void 0 ? !1 : y, C = n || [], E = en.useRef(null), S = en.useState(sr.DEFAULT_NULL_INDEX), N = S[0], j = S[1], V = en.useState(null), L = V[0], B = V[1], Z = en.useState(!1), T = Z[0], O = Z[1], F = en.useCallback(function() {
    return Nc.openFileDialog(E);
  }, [
    E
  ]), A = en.useCallback(function() {
    j(sr.DEFAULT_NULL_INDEX), F();
  }, [F]), H = en.useCallback(function() {
    r == null || r([]);
  }, [r]), G = function(ae) {
    var de = Sc(C);
    Array.isArray(ae) ? ae.forEach(function(W) {
      de.splice(W, 1);
    }) : de.splice(ae, 1), r == null || r(de);
  }, ne = function(ae) {
    j(ae), F();
  }, me = function(ae) {
    return _c(void 0, void 0, void 0, function() {
      var de;
      return Cc(this, function(W) {
        switch (W.label) {
          case 0:
            return [4, e3.getErrorValidation({
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
            return de = W.sent(), de ? (B(de), o == null || o(de, ae), [2, !1]) : (L && B(null), [2, !0]);
        }
      });
    });
  }, K = function(ae) {
    return _c(void 0, void 0, void 0, function() {
      var de, W, te, $e, ke, Le;
      return Cc(this, function(je) {
        switch (je.label) {
          case 0:
            return ae ? [4, Nc.getListFiles(ae, i)] : [
              2
              /*return*/
            ];
          case 1:
            return de = je.sent(), de.length ? [4, me(de)] : [
              2
              /*return*/
            ];
          case 2:
            if (W = je.sent(), !W)
              return [
                2
                /*return*/
              ];
            if ($e = [], N > sr.DEFAULT_NULL_INDEX)
              ke = de[0], te = Sc(C), te[N] = ke, $e.push(N);
            else if (d)
              for (te = Sc(C, de), Le = C.length; Le < te.length; Le += 1)
                $e.push(Le);
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
            return [4, K(ae.target.files)];
          case 1:
            return de.sent(), N > sr.DEFAULT_NULL_INDEX && j(sr.DEFAULT_NULL_INDEX), E.current && (E.current.value = ""), [
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
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.items && ae.dataTransfer.items.length > 0 && O(!0);
  }, re = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), O(!1);
  }, he = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), O(!1), ae.dataTransfer.files && ae.dataTransfer.files.length > 0 && K(ae.dataTransfer.files);
  }, Ne = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.clearData();
  };
  return en.default.createElement(
    en.default.Fragment,
    null,
    en.default.createElement("input", ml({ type: "file", accept: ye, ref: E, multiple: d && N === sr.DEFAULT_NULL_INDEX, onChange: ue, style: { display: "none" } }, x)),
    a == null ? void 0 : a({
      imageList: C,
      onImageUpload: A,
      onImageRemoveAll: H,
      onImageUpdate: ne,
      onImageRemove: G,
      errors: L,
      dragProps: {
        onDrop: he,
        onDragEnter: J,
        onDragLeave: re,
        onDragOver: fe,
        onDragStart: Ne
      },
      isDragging: T
    })
  );
}, jb = Pb.default = t3;
const n3 = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Mb = ({
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
      const u = n3(d == null ? void 0 : d.toString(), t.name);
      c({ data_url: d, file: u });
    },
    i
  );
});
function ti(e, t) {
  fetch(e).then((n) => n.blob()).then((n) => {
    const r = window.URL.createObjectURL(new Blob([n])), o = document.createElement("a");
    o.href = r, o.setAttribute("download", t || "imagen.jpg"), document.body.appendChild(o), o.click();
  });
}
const r3 = (e) => {
  const { imageIndex: t, compress: n, disabled: r, tabIndexs: o, onImageUpdate: a, setUploadImage: s, onImageRemove: i, setLocalImage: c, download: d, handleOnRemove: u, edit: f, src: p } = e;
  return /* @__PURE__ */ l.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !r && /* @__PURE__ */ l.jsx(
      Be,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(ob, { size: 16 })
      }
    ),
    !r && f && /* @__PURE__ */ l.jsx(
      Be,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.change,
        onClick: () => a(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(ip, { size: 16 })
      }
    ),
    !r && /* @__PURE__ */ l.jsx(
      Be,
      {
        tabIndex: o == null ? void 0 : o.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          u(t), i(t), c([]), s({ original: null, compressed: null });
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(cp, { size: 16 })
      }
    ),
    d && p && /* @__PURE__ */ l.jsx(
      Be,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => ti(p, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ns, { size: 16 })
      }
    )
  ] });
}, o3 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    ...e,
    className: M(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ l.jsx(
        Be,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: M("mt-2", t && "text-indigo-600", a && "cursor-not-allowed"),
          onClick: s,
          children: /* @__PURE__ */ l.jsx(_l, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ l.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), Tb = ({ src: e, containerClassName: t, imageClassName: n, zoom: r, fallback: o, download: a, filename: s }) => {
  const [i, c] = q(!1);
  return r ? /* @__PURE__ */ l.jsxs("div", { className: "w-full h-fit relative", children: [
    a && /* @__PURE__ */ l.jsx(
      Be,
      {
        type: "button",
        onClick: () => ti(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ns, { size: 18 })
      }
    ),
    /* @__PURE__ */ l.jsxs(oh, { open: i, onOpenChange: c, children: [
      /* @__PURE__ */ l.jsxs(lo, { className: M("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
        /* @__PURE__ */ l.jsx(
          Or,
          {
            src: e,
            className: M("aspect-video w-auto rounded-md object-contain m-auto h-full cursor-zoom-in", n),
            onClick: () => c(!0)
          }
        ),
        /* @__PURE__ */ l.jsx(uo, { className: M("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ l.jsx(Yi, {}) })
      ] }),
      /* @__PURE__ */ l.jsx(md, { className: "p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none", style: { background: "transparent !important" }, onClick: () => c(!1), children: /* @__PURE__ */ l.jsxs(lo, { className: M("w-full h-full rounded-md"), children: [
        /* @__PURE__ */ l.jsx(Or, { src: e, className: M("aspect-video rounded-md object-contain m-auto h-full"), style: { width: "-webkit-fill-available" } }),
        /* @__PURE__ */ l.jsx(uo, { className: M("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ l.jsx(Yi, {}) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ l.jsx("div", { className: "w-full", children: /* @__PURE__ */ l.jsxs(lo, { className: M("relative w-full h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
    a && /* @__PURE__ */ l.jsx(
      Be,
      {
        type: "button",
        onClick: () => ti(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ns, { size: 18 })
      }
    ),
    /* @__PURE__ */ l.jsx(Or, { src: e, className: M("aspect-video w-auto rounded-md object-contain m-auto h-full", n), style: { width: "-webkit-fill-available" } }),
    /* @__PURE__ */ l.jsx(uo, { className: M("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ l.jsx(Yi, {}) })
  ] }) });
}, WT = (e) => {
  const { edit: t = !0, initialPreview: n = null, setUploadImage: r, format: o, label: a, uploadLabel: s, tabIndexs: i, disabled: c, emptyClassName: d, imageContainerClassName: u, zoom: f, compress: p, download: m, onRemove: h, onEdit: v } = e, [g, b] = q(n ? [{ data_url: n, file: null }] : []), x = async ($, C) => {
    var j, V, L, B, Z, T, O, F, A, H;
    const E = (j = $[0]) == null ? void 0 : j.file, S = (V = $[0]) == null ? void 0 : V.data_url;
    E || (b([]), r({ original: null, compressed: null })), b($);
    const N = Ss((L = $[0]) == null ? void 0 : L.file.size);
    if (p != null && p.resizer && E) {
      const { data_url: G, file: ne } = await Mb({
        resizer: p == null ? void 0 : p.resizer,
        imageFile: E,
        quality: (o == null ? void 0 : o.quality) || 10,
        maxWidth: (o == null ? void 0 : o.width) || 500,
        maxHeight: (o == null ? void 0 : o.width) || 500,
        compressFormat: (o == null ? void 0 : o.extension) || "png",
        rotation: (o == null ? void 0 : o.rotation) || 0
      }), me = Ss(ne.size);
      r({
        original: {
          preview: S,
          file: E,
          size: {
            formated: N,
            bytes: (B = $[0]) == null ? void 0 : B.file.size
          }
        },
        compressed: {
          preview: G == null ? void 0 : G.toString(),
          file: ne,
          size: {
            formated: me,
            bytes: ne.size
          }
        }
      });
      return;
    }
    v && (Z = $[0]) != null && Z.data_url && v({
      data_url: ((T = $[0]) == null ? void 0 : T.data_url) || null,
      file: ((O = $[0]) == null ? void 0 : O.file) || null
    }), r({
      original: {
        preview: (F = $[0]) == null ? void 0 : F.data_url,
        file: (A = $[0]) == null ? void 0 : A.file,
        size: { formated: N, bytes: (H = $[0]) == null ? void 0 : H.file.size }
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
      jb,
      {
        value: g,
        onChange: x,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: $, onImageUpload: C, onImageUpdate: E, onImageRemove: S, isDragging: N, dragProps: j }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: $.length >= 1 ? /* @__PURE__ */ l.jsx("div", { children: $.map((V, L) => /* @__PURE__ */ l.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          /* @__PURE__ */ l.jsx(
            Tb,
            {
              zoom: f,
              src: V == null ? void 0 : V.data_url,
              containerClassName: u
            }
          ),
          /* @__PURE__ */ l.jsx(
            r3,
            {
              edit: t,
              imageIndex: L,
              compress: p,
              disabled: c,
              download: m,
              tabIndexs: i,
              src: V == null ? void 0 : V.data_url,
              onImageRemove: S,
              onImageUpdate: E,
              setLocalImage: b,
              setUploadImage: r,
              handleOnRemove: y
            }
          )
        ] }, L)) }) : /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx(
          o3,
          {
            dragProps: j,
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
}, a3 = (e) => {
  const { imageIndex: t, compress: n, tabIndexs: r, onImageUpdate: o, onImageRemove: a, disabled: s, download: i, handleOnRemoveImage: c, src: d, edit: u } = e;
  return /* @__PURE__ */ l.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !s && /* @__PURE__ */ l.jsx(
      Be,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(ob, { size: 16 })
      }
    ),
    !s && u && /* @__PURE__ */ l.jsx(
      Be,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.change,
        onClick: () => o(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(ip, { size: 16 })
      }
    ),
    !s && /* @__PURE__ */ l.jsx(
      Be,
      {
        tabIndex: r == null ? void 0 : r.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          c(t), a(t);
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(cp, { size: 16 })
      }
    ),
    i && d && /* @__PURE__ */ l.jsx(
      Be,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => ti(d, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ l.jsx(Ns, { size: 16 })
      }
    )
  ] });
}, s3 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    ...e,
    className: M(
      `${t ? "border-indigo-600" : "border-muted-foreground"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ l.jsx(
        Be,
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
), HT = (e) => {
  const { edit: t = !0, label: n, setUploadImages: r, format: o, uploadLabel: a, tabIndexs: s, emptyClassName: i, imageContainerClassName: c, zoom: d, compress: u, limit: f, initialPreview: p, disabled: m, download: h, onRemove: v, onEdit: g } = e, [b, x] = q([]);
  Q(() => {
    p && p.length && x([...p]);
  }, [p]);
  const y = async (C, E) => {
    x(C);
    const S = C.map(async (N) => {
      var j, V, L, B;
      if (u != null && u.resizer && (N != null && N.file) && !((j = N == null ? void 0 : N.file) != null && j.compressed)) {
        const { data_url: Z, file: T } = await Mb({
          imageFile: N == null ? void 0 : N.file,
          resizer: u == null ? void 0 : u.resizer,
          quality: (o == null ? void 0 : o.quality) || 10,
          maxWidth: (o == null ? void 0 : o.width) || 500,
          maxHeight: (o == null ? void 0 : o.width) || 500,
          rotation: (o == null ? void 0 : o.rotation) || 0,
          compressFormat: (o == null ? void 0 : o.extension) || "png"
        }), O = Ss(T == null ? void 0 : T.size), F = {
          original: {
            preview: N == null ? void 0 : N.data_url,
            file: N == null ? void 0 : N.file,
            size: {
              formated: (V = N == null ? void 0 : N.file) != null && V.size ? Ss((L = N == null ? void 0 : N.file) == null ? void 0 : L.size) : null,
              bytes: ((B = N == null ? void 0 : N.file) == null ? void 0 : B.size) || null
            }
          },
          compressed: {
            preview: Z == null ? void 0 : Z.toString(),
            file: T,
            size: {
              formated: O,
              bytes: T == null ? void 0 : T.size
            }
          }
        };
        return {
          ...N,
          file: F,
          data_url: N == null ? void 0 : N.data_url
        };
      } else
        return {
          ...N,
          file: (N == null ? void 0 : N.file) || null
        };
    });
    if (g && E) {
      const N = C[E[0]];
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
      jb,
      {
        multiple: !0,
        value: b,
        dataURLKey: "data_url",
        onChange: y,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: f,
        children: ({ imageList: C, onImageUpload: E, onImageUpdate: S, onImageRemove: N, isDragging: j, dragProps: V }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: C.length >= 1 ? /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: `grid ${f === 1 || !f ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              C.map((L, B) => /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    /* @__PURE__ */ l.jsx(
                      Tb,
                      {
                        zoom: d,
                        src: L == null ? void 0 : L.data_url,
                        containerClassName: c
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      a3,
                      {
                        edit: t,
                        imageIndex: B,
                        download: h,
                        compress: u,
                        disabled: m,
                        tabIndexs: s,
                        src: L == null ? void 0 : L.data_url,
                        onImageRemove: N,
                        onImageUpdate: S,
                        handleOnRemoveImage: $
                      }
                    )
                  ]
                },
                B
              )),
              b.length < f && /* @__PURE__ */ l.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  ...V,
                  className: M(
                    `w-full h-[237px] ${j ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    c
                  ),
                  children: /* @__PURE__ */ l.jsx(
                    Be,
                    {
                      size: "icon",
                      type: "button",
                      variant: "outline",
                      tabIndex: s == null ? void 0 : s.upload,
                      disabled: m,
                      className: `mt-2 ${j && "text-indigo-600"}`,
                      onClick: E,
                      children: /* @__PURE__ */ l.jsx(_l, { size: 24 })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ l.jsx(
          s3,
          {
            dragProps: V,
            emptyClassName: i,
            isDragging: j,
            onImageUpload: E,
            tabIndexs: s,
            uploadLabel: a,
            disabled: m
          }
        ) })
      }
    )
  ] });
};
function UT({
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
  return s ? /* @__PURE__ */ l.jsxs("div", { className: M("w-full"), children: [
    /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ l.jsx(Et, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ l.jsx("div", { className: "relative", children: /* @__PURE__ */ l.jsx(
      Et,
      {
        className: M("w-full h-9 mt-2")
      }
    ) })
  ] }) : /* @__PURE__ */ l.jsx(
    Kr,
    {
      control: t.control,
      name: e,
      defaultValue: c,
      render: ({ field: g }) => {
        var b;
        return /* @__PURE__ */ l.jsxs(Cr, { className: "flex flex-col", children: [
          /* @__PURE__ */ l.jsx(On, { children: n }),
          /* @__PURE__ */ l.jsxs(Un, { open: h, onOpenChange: v, children: [
            /* @__PURE__ */ l.jsx(Kn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
              Be,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: M("w-min justify-between", !g.value && "text-muted-foreground", `${p}`),
                children: [
                  g.value ? (b = r.find((x) => {
                    var y, $;
                    return ((y = x == null ? void 0 : x.value) == null ? void 0 : y.toUpperCase()) === (($ = g == null ? void 0 : g.value) == null ? void 0 : $.toUpperCase());
                  })) == null ? void 0 : b.label : f,
                  /* @__PURE__ */ l.jsx(Oc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ l.jsx(En, { className: M("w-[200px] p-0", m), children: /* @__PURE__ */ l.jsxs(Gn, { children: [
              /* @__PURE__ */ l.jsx(mr, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ l.jsxs(Ro, { children: [
                /* @__PURE__ */ l.jsx(hr, { children: d }),
                /* @__PURE__ */ l.jsx(mn, { className: M("overflow-auto", u), children: r.map((x) => /* @__PURE__ */ l.jsxs(
                  hn,
                  {
                    disabled: x == null ? void 0 : x.disabled,
                    value: x.value,
                    className: M("w-full flex justify-start items-center", (x == null ? void 0 : x.disabled) && "pointer-events-none opacity-50 cursor-default"),
                    onSelect: (y) => {
                      t.setValue(e, y, { shouldDirty: !0 }), v(!1);
                    },
                    children: [
                      (x == null ? void 0 : x.image) && /* @__PURE__ */ l.jsx("img", { src: x.image, alt: x.label, width: 40, className: "mr-2" }),
                      (x == null ? void 0 : x.icon) && x.icon,
                      x.label,
                      /* @__PURE__ */ l.jsx(
                        K6,
                        {
                          className: M(
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
function i3({
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
    Kr,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: x, formState: y }) => {
        var $, C, E;
        return /* @__PURE__ */ l.jsxs(Cr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ l.jsxs(Gr, { className: "flex", children: [
            n,
            " ",
            ((C = ($ = y.errors) == null ? void 0 : $.pidType) == null ? void 0 : C.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              y.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs(Un, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ l.jsx(Kn, { asChild: !0, disabled: s, children: /* @__PURE__ */ l.jsxs(
              Be,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: M("w-min justify-between", !x.value && "text-muted-foreground", `${m}`),
                children: [
                  x.value ? (E = r.find((S) => S.value === x.value)) == null ? void 0 : E.label : p,
                  /* @__PURE__ */ l.jsx(Oc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ l.jsx(En, { className: M("w-[200px] p-0", h), children: /* @__PURE__ */ l.jsxs(Gn, { children: [
              /* @__PURE__ */ l.jsx(mr, { placeholder: d, className: "h-9" }),
              /* @__PURE__ */ l.jsxs(Xh, { children: [
                /* @__PURE__ */ l.jsx(hr, { children: f }),
                /* @__PURE__ */ l.jsx(mn, { children: r.map((S) => /* @__PURE__ */ l.jsxs(
                  hn,
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
                        un,
                        {
                          className: M(
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
  ) : /* @__PURE__ */ l.jsxs(Un, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ l.jsx(Kn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
      Be,
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
    /* @__PURE__ */ l.jsx(En, { className: "w-full p-0", children: /* @__PURE__ */ l.jsxs(Gn, { children: [
      /* @__PURE__ */ l.jsx(mr, { placeholder: d, className: "h-9" }),
      /* @__PURE__ */ l.jsx(hr, { children: f }),
      /* @__PURE__ */ l.jsx(mn, { children: r.map((x) => /* @__PURE__ */ l.jsxs(
        hn,
        {
          onSelect: (y) => {
            i(y === a ? "" : y), g(!1);
          },
          children: [
            x.label,
            /* @__PURE__ */ l.jsx(
              un,
              {
                className: M(
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
const c3 = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i, disabled: c }) => {
  const d = Y(null), [u, f] = q(null);
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
  }, []), /* @__PURE__ */ l.jsxs("div", { className: M("w-full space-y-2", s), children: [
    /* @__PURE__ */ l.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ l.jsxs(On, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ l.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ l.jsxs(Un, { children: [
      /* @__PURE__ */ l.jsx(Kn, { asChild: !0, disabled: c, children: /* @__PURE__ */ l.jsxs(
        Be,
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
                Ot,
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
                Ot,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((p) => /* @__PURE__ */ l.jsx(
                Ot,
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
      /* @__PURE__ */ l.jsx(En, { style: { width: u + 24 }, className: M("w-full p-0", i), align: "start", children: /* @__PURE__ */ l.jsxs(Gn, { children: [
        /* @__PURE__ */ l.jsx(mr, { placeholder: r }),
        /* @__PURE__ */ l.jsxs(Ro, { children: [
          /* @__PURE__ */ l.jsx(hr, { children: "Sin Resultados" }),
          /* @__PURE__ */ l.jsx(mn, { children: a.map((p) => /* @__PURE__ */ l.jsxs(
            hn,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    className: M(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ l.jsx(un, { className: M("h-4 w-4") })
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
}, l3 = (e) => {
  var S;
  const { form: t, id: n, description: r, icon: o, placeholder: a, label: s, tabIndex: i, items: c, classNameContainer: d, classNamePopover: u, disabled: f } = e, [p, m] = q([]), [h, v] = q(null), g = Y(null), b = (S = t == null ? void 0 : t.formState) == null ? void 0 : S.defaultValues[n], x = (N) => ({
    ...N,
    selected: b ? b.includes(N.value) : !1
  }), y = Gt(() => c.map(x), [b]), $ = Gt(() => p.filter((j) => j.selected).map((j) => j.value), [p]), C = () => m(
    (N) => N.map((j) => ({ ...j, selected: !1 }))
  ), E = (N, j) => {
    const V = p.map((L) => L.id === N ? { ...L, selected: j } : L);
    m(V), t.setValue(
      n,
      V.filter((L) => L.selected).map((L) => L.value),
      { shouldDirty: !0 }
    );
  };
  return Q(() => {
    const N = g.current;
    if (!N)
      return;
    const j = new ResizeObserver((V) => {
      const L = V[0].contentRect.width;
      v(L);
    });
    return j.observe(N), () => {
      j.unobserve(N), j.disconnect();
    };
  }, []), Q(() => {
    m(y);
  }, [y]), /* @__PURE__ */ l.jsx(
    Kr,
    {
      control: t.control,
      name: n,
      render: ({ field: N, formState: j }) => {
        var V;
        return /* @__PURE__ */ l.jsxs(Cr, { className: M("w-full space-y-2", d), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex justify-start items-end", children: [
            s && /* @__PURE__ */ l.jsxs(Gr, { className: "flex", children: [
              s,
              " "
            ] }),
            ((V = j == null ? void 0 : j.errors[n]) == null ? void 0 : V.message) && /* @__PURE__ */ l.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              j.errors[n].message
            ] })
          ] }),
          r && /* @__PURE__ */ l.jsx(ko, { className: "text-xs", children: r }),
          /* @__PURE__ */ l.jsxs(Un, { children: [
            /* @__PURE__ */ l.jsx(Kn, { asChild: !0, disabled: f, children: /* @__PURE__ */ l.jsxs(
              Be,
              {
                ref: g,
                type: "button",
                variant: "outline",
                size: "sm",
                disabled: f,
                className: "py-5 border w-full justify-start",
                tabIndex: i,
                children: [
                  o && o,
                  !$.length && /* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground font-normal", children: a || "Seleccione alguna opción" }),
                  $.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                    /* @__PURE__ */ l.jsxs(
                      Ot,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal lg:hidden",
                        children: [
                          $.length,
                          " seleccionados"
                        ]
                      }
                    ),
                    /* @__PURE__ */ l.jsx("div", { className: "hidden space-x-1 lg:flex", children: $.length > 2 ? /* @__PURE__ */ l.jsxs(
                      Ot,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          $.length,
                          " seleccionados"
                        ]
                      }
                    ) : p.filter((L) => L.selected).map((L) => /* @__PURE__ */ l.jsx(
                      Ot,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: L.label
                      },
                      L.value.toString()
                    )) })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ l.jsx("style", { children: `
                .combox-checkbox-content {
                    min-width: 150px !important;
                    width: ${h + 24}px !important;
                  }

                  .checkbox-tooltip-content {
                    min-width: 150px !important;
                    width: ${h + 10}px !important;
                  }
                ` }),
            /* @__PURE__ */ l.jsx(
              En,
              {
                className: M("w-full p-0 combox-checkbox-content", u),
                align: "start",
                children: /* @__PURE__ */ l.jsxs(Gn, { style: { width: "50px !important" }, children: [
                  /* @__PURE__ */ l.jsx(mr, { placeholder: s }),
                  /* @__PURE__ */ l.jsxs(Ro, { children: [
                    /* @__PURE__ */ l.jsx(hr, { children: "Sin Resultados" }),
                    /* @__PURE__ */ l.jsx(mn, { children: p.map((L) => /* @__PURE__ */ l.jsx(Yn, { children: /* @__PURE__ */ l.jsxs(Zn, { delayDuration: 150, children: [
                      /* @__PURE__ */ l.jsx(qn, { className: "w-full", children: /* @__PURE__ */ l.jsxs(
                        hn,
                        {
                          disabled: L == null ? void 0 : L.disabled,
                          onSelect: () => {
                            L.selected ? E(L.id, !1) : E(L.id, !0);
                          },
                          children: [
                            /* @__PURE__ */ l.jsx(
                              "div",
                              {
                                className: M(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  L.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ l.jsx(un, { className: M("h-4 w-4") })
                              }
                            ),
                            L.icon,
                            /* @__PURE__ */ l.jsx("span", { className: "truncate", children: L.label })
                          ]
                        },
                        L.value.toString()
                      ) }),
                      /* @__PURE__ */ l.jsx(Pn, { className: "whitespace-normal checkbox-tooltip-content", sideOffset: 20, children: /* @__PURE__ */ l.jsx("p", { children: L.label }) })
                    ] }) })) }),
                    $.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx(ki, {}),
                      /* @__PURE__ */ l.jsx(mn, { children: /* @__PURE__ */ l.jsx(
                        hn,
                        {
                          onSelect: () => {
                            t.setValue(n, []), C();
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
}, KT = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, disabled: d, ...u }) => i ? /* @__PURE__ */ l.jsx(
  c3,
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
  l3,
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
    form: (u == null ? void 0 : u.form) || null,
    items: (u == null ? void 0 : u.items) || []
  }
);
function d3({
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
function Af({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ l.jsx(Yn, { children: /* @__PURE__ */ l.jsxs(Zn, { children: [
    /* @__PURE__ */ l.jsx(qn, { children: /* @__PURE__ */ l.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        "data-testId": `bottom-sidebar-${t}`,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ l.jsx(
          ib,
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
    /* @__PURE__ */ l.jsx(Pn, { children: t })
  ] }) });
}
function u3({
  profile: e
}) {
  return /* @__PURE__ */ l.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ l.jsxs(lo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ l.jsx(Or, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ l.jsx(uo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ l.jsx(Or, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ l.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ l.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ l.jsx(Ot, { className: "w-full", children: e.role })
    ] })
  ] });
}
const f3 = ({ isExpanded: e, theme: t }) => {
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
        /* @__PURE__ */ l.jsx(rb, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(sb, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function p3({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ l.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ l.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ l.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(f3, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsxs(
        "button",
        {
          onClick: t,
          "data-testId": "toggle-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ l.jsx(sp, { className: "dark:text-white", size: 20 }),
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
            /* @__PURE__ */ l.jsx(ap, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ l.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function m3({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(u3, { profile: a }),
    /* @__PURE__ */ l.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ l.jsx(
        ib,
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
        ej,
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
        p3,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function GT({
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
        Af,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ l.jsx(
        Af,
        {
          icon: /* @__PURE__ */ l.jsx(sp, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      d3,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ l.jsx(
          m3,
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
const Qr = zt({
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
function h3() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = st(Qr);
  return /* @__PURE__ */ l.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ l.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ l.jsxs(
        xd,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ l.jsx(Si, { className: "h-8 w-[70px]", children: /* @__PURE__ */ l.jsx(yd, { placeholder: e.limit }) }),
            /* @__PURE__ */ l.jsx(Ni, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ l.jsx(Ei, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ l.jsxs(
        Be,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ l.jsx(oi, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ l.jsxs(
        Be,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ l.jsx(yr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const YT = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, v3 = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), ZT = {
  limit: 10,
  page: 1
}, Ec = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), qT = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], g3 = () => /* @__PURE__ */ l.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), b3 = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ l.jsx("div", { children: r.render(o) }, Ec()) : /* @__PURE__ */ l.jsx(ln, { children: o[r.id] }, Ec());
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: e.map((r) => /* @__PURE__ */ l.jsx(Nh, { children: t.map((o) => n(o, r)) }, Ec())) });
}, Ob = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = st(Qr), [s, i] = q(
    o ? o.length : 0
  );
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: e.length ? /* @__PURE__ */ l.jsx(
    b3,
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
  ) : /* @__PURE__ */ l.jsx(g3, {}) });
}, x3 = () => /* @__PURE__ */ l.jsx(Ob, {}), y3 = () => /* @__PURE__ */ l.jsx("span", { className: "loader-fade-dot" }), w3 = () => /* @__PURE__ */ l.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ l.jsx(y3, {}),
  /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), $3 = () => {
  const { showFilters: e, setShowFilters: t } = st(Qr);
  return /* @__PURE__ */ l.jsxs(
    Be,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ l.jsx(tb, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, _3 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = st(Qr), d = (u) => {
    c(u);
  };
  return /* @__PURE__ */ l.jsxs(Un, { children: [
    /* @__PURE__ */ l.jsx(Kn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(Be, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ l.jsx(nb, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Ua, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ l.jsx(
          Ot,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ l.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ l.jsxs(
          Ot,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ l.jsx(
          Ot,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx(En, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ l.jsxs(Gn, { children: [
      /* @__PURE__ */ l.jsx(mr, { placeholder: r }),
      /* @__PURE__ */ l.jsxs(Ro, { children: [
        /* @__PURE__ */ l.jsx(hr, { children: "Sin Resultados" }),
        /* @__PURE__ */ l.jsx(mn, { children: o.map((u) => /* @__PURE__ */ l.jsxs(
          hn,
          {
            onSelect: () => {
              u.selected ? s(e, u.id, !1) : s(e, u.id, !0);
            },
            children: [
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: M(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ l.jsx(un, { className: M("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ l.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(ki, {}),
          /* @__PURE__ */ l.jsx(mn, { children: /* @__PURE__ */ l.jsx(
            hn,
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
}, C3 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ l.jsxs(Un, { children: [
  /* @__PURE__ */ l.jsx(Kn, { asChild: !0, children: /* @__PURE__ */ l.jsxs(Be, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ l.jsx(Es, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(Ua, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ l.jsx(
        Ot,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ l.jsxs(En, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ l.jsxs(On, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ l.jsx(
      hd,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), S3 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = st(Qr), d = e.watch(n.map((f) => f.id)), u = () => {
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
          C3,
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
      /* @__PURE__ */ l.jsx($3, {}),
      o && r && r.map((f) => /* @__PURE__ */ l.jsx(
        _3,
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
        Be,
        {
          type: "button",
          variant: "ghost",
          onClick: u,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ l.jsx(si, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, N3 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = st(Qr), c = Km({
    defaultValues: n.reduce((u, f) => (u[f.id] = "", u), {}),
    resolver: ub(
      ei.object(
        n.reduce((u, f) => (u[f.id] = ei.string().optional(), u), {})
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
  return Q(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ l.jsx("div", {}) : /* @__PURE__ */ l.jsx(Ym, { ...c, children: /* @__PURE__ */ l.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ l.jsx(S3, { form: c, onSubmit: d }) : /* @__PURE__ */ l.jsx("div", {}),
    /* @__PURE__ */ l.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ l.jsx(
      Be,
      {
        type: "submit",
        onClick: c.handleSubmit(d),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ l.jsx($l, {}) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(ab, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, E3 = () => /* @__PURE__ */ l.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ l.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), P3 = () => /* @__PURE__ */ l.jsx(Ob, {}), k3 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function XT(e) {
  const [t, n] = q([]), [r, o] = q([]), [a, s] = q([]), [i, c] = q(!1), [d, u] = q(e == null ? void 0 : e.error), [f, p] = q(e == null ? void 0 : e.loading), [m, h] = q(), [v, g] = q(
    (e == null ? void 0 : e.pagination) ?? k3
  ), [b, x] = q(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: y } = e, $ = ge(
    (O) => e.onSubmitTable({ ...O }),
    [e]
  ), C = ge(
    (O) => {
      var G;
      g(O);
      const F = m.getValues(), A = [];
      (G = Object.entries(F)) == null || G.forEach((ne) => {
        ne[1] && A.push({
          field: v3(ne[0]),
          text: ne[1]
        });
      });
      const H = r.map((ne) => ({
        id: ne.id,
        label: ne.label,
        options: ne.options.filter((me) => me.selected).map((me) => me.value)
      })).filter((ne) => ne.options.length > 0);
      $({
        filters: H,
        queries: A,
        limit: O.limit,
        page: O.page
      });
    },
    [r, $, m]
  ), E = ge(() => {
    C({ ...v, page: v.page + 1 });
  }, [v, C]), S = ge(() => {
    v.page > 1 && C({ ...v, page: v.page - 1 });
  }, [v, C]), N = () => r.map((O) => ({
    id: O.id,
    label: O.label,
    options: O.options.filter((F) => F.selected).map((F) => F.value)
  })).filter((O) => O.options.length > 0), j = (O) => {
    const F = r.find((A) => A.id === O);
    return F ? F.options.filter((H) => H.selected).map((H) => H.value) : [];
  }, V = (O, F, A) => {
    const H = r.map((G) => G.id === O ? {
      ...G,
      options: G.options.map((ne) => ne.id === F ? { ...ne, selected: A } : ne)
    } : G);
    o(H);
  }, L = () => r, B = (O) => {
    const F = r.map((A) => A.id === O ? {
      ...A,
      options: A.options.map((H) => ({
        ...H,
        selected: !1
      }))
    } : A);
    o(F);
  }, Z = (O) => C({ ...v, limit: O }), T = () => {
    const O = r.map((F) => ({
      ...F,
      options: F.options.map((A) => ({ ...A, selected: !1 }))
    }));
    o(O);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const O = b.filter((F) => F.isQuery).map((F) => ({
      id: F.id,
      label: F.label
    }));
    s(O);
  }, [b]), Q(() => {
    const O = (A) => (A == null ? void 0 : A.filters) && (A == null ? void 0 : A.filters.length), F = b.filter(O).map((A) => {
      const H = A.filters.map((ne) => ({
        ...ne,
        selected: !1
      }));
      return {
        ...A,
        id: A.id,
        options: H
      };
    });
    o(F);
  }, [b]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((O) => {
      O != null && O.filters && b.forEach((F) => {
        O.id === F.id && o((A) => A.some((G) => G.id === O.id) ? A : [
          ...A,
          {
            id: F.id,
            label: F.label,
            options: O.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), Q(() => {
    g((O) => {
      var F, A;
      return {
        ...O,
        hasNextPage: (F = e == null ? void 0 : e.pagination) == null ? void 0 : F.hasNextPage,
        hasPrevPage: (A = e == null ? void 0 : e.pagination) == null ? void 0 : A.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ l.jsx(
    Qr.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: E,
        prevPage: S,
        searchForm: m,
        updateLimit: Z,
        showFilters: i,
        resetFilters: T,
        getGlobalFilters: L,
        selectOptionFilter: V,
        resetOptionsByFilter: B,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: $,
        getFilterOptionsSelectedById: j,
        getFiltersWithOptionsSelected: N,
        setSelectItem: e.setSelectItem,
        setShowFilters: (O) => c(O),
        setSearchForm: (O) => h(O)
      },
      children: /* @__PURE__ */ l.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ l.jsx(N3, { onSubmitTable: $, loading: f }),
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${y ? `${y === 2 ? "sm" : "lg"}:grid-cols-${y}` : "grid-cols-3"}  gap-6`,
            children: [
              f && /* @__PURE__ */ l.jsx(w3, {}),
              !f && d && /* @__PURE__ */ l.jsx(E3, {}),
              !f && !d && !t && /* @__PURE__ */ l.jsx(P3, {}),
              !f && !d && t && /* @__PURE__ */ l.jsx(x3, {})
            ]
          }
        ),
        !f && !d && t && /* @__PURE__ */ l.jsx(h3, {})
      ] })
    }
  );
}
function j3(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function If(e) {
  return j3(e) || Array.isArray(e);
}
function M3() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Gd(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !If(i) || !If(c) ? i === c : Gd(i, c);
  });
}
function Lf(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function T3(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Lf(e), r = Lf(t);
  return n.every((o, a) => {
    const s = r[a];
    return Gd(o, s);
  });
}
function Yd(e) {
  return typeof e == "number";
}
function hl(e) {
  return typeof e == "string";
}
function Zd(e) {
  return typeof e == "boolean";
}
function Ff(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function lt(e) {
  return Math.abs(e);
}
function qd(e) {
  return Math.sign(e);
}
function Qo(e, t) {
  return lt(e - t);
}
function O3(e, t) {
  if (e === 0 || t === 0 || lt(e) <= lt(t))
    return 0;
  const n = Qo(lt(e), lt(t));
  return lt(n / e);
}
function Ca(e) {
  return Sa(e).map(Number);
}
function cn(e) {
  return e[qa(e)];
}
function qa(e) {
  return Math.max(0, e.length - 1);
}
function Xd(e, t) {
  return t === qa(e);
}
function Vf(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Sa(e) {
  return Object.keys(e);
}
function Db(e, t) {
  return [e, t].reduce((n, r) => (Sa(r).forEach((o) => {
    const a = n[o], s = r[o], i = Ff(a) && Ff(s);
    n[o] = i ? Db(a, s) : s;
  }), n), {});
}
function Rb(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function D3(e, t) {
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
function Na() {
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
function R3(e, t, n, r) {
  const o = Na(), a = 1e3 / 60;
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
    const x = lt(i / a);
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
function A3(e, t) {
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
function Br(e = 0, t = 0) {
  const n = lt(e - t);
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
function Ab(e, t, n) {
  const {
    constrain: r
  } = Br(0, e), o = e + 1;
  let a = s(t);
  function s(p) {
    return n ? lt((o + p) % o) : r(p);
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
    return Ab(e, i(), n);
  }
  const f = {
    get: i,
    set: c,
    add: d,
    clone: u
  };
  return f;
}
function I3(e, t, n, r, o, a, s, i, c, d, u, f, p, m, h, v, g, b, x) {
  const {
    cross: y,
    direction: $
  } = e, C = ["INPUT", "SELECT", "TEXTAREA"], E = {
    passive: !1
  }, S = Na(), N = Na(), j = Br(50, 225).constrain(m.measure(20)), V = {
    mouse: 300,
    touch: 400
  }, L = {
    mouse: 500,
    touch: 600
  }, B = h ? 43 : 25;
  let Z = !1, T = 0, O = 0, F = !1, A = !1, H = !1, G = !1;
  function ne(W) {
    if (!x)
      return;
    function te(ke) {
      (Zd(x) || x(W, ke)) && J(ke);
    }
    const $e = t;
    S.add($e, "dragstart", (ke) => ke.preventDefault(), E).add($e, "touchmove", () => {
    }, E).add($e, "touchend", () => {
    }).add($e, "touchstart", te).add($e, "mousedown", te).add($e, "touchcancel", he).add($e, "contextmenu", he).add($e, "click", Ne, !0);
  }
  function me() {
    S.clear(), N.clear();
  }
  function K() {
    const W = G ? n : t;
    N.add(W, "touchmove", re, E).add(W, "touchend", he).add(W, "mousemove", re, E).add(W, "mouseup", he);
  }
  function ue(W) {
    const te = W.nodeName || "";
    return C.includes(te);
  }
  function ye() {
    return (h ? L : V)[G ? "mouse" : "touch"];
  }
  function fe(W, te) {
    const $e = f.add(qd(W) * -1), ke = u.byDistance(W, !h).distance;
    return h || lt(W) < j ? ke : g && te ? ke * 0.5 : u.byIndex($e.get(), 0).distance;
  }
  function J(W) {
    const te = Rb(W, r);
    G = te, H = h && te && !W.buttons && Z, Z = Qo(o.get(), s.get()) >= 2, !(te && W.button !== 0) && (ue(W.target) || (F = !0, a.pointerDown(W), d.useFriction(0).useDuration(0), o.set(s), K(), T = a.readPoint(W), O = a.readPoint(W, y), p.emit("pointerDown")));
  }
  function re(W) {
    const te = a.readPoint(W), $e = a.readPoint(W, y), ke = Qo(te, T), Le = Qo($e, O);
    if (!A && !G && (!W.cancelable || (A = ke > Le, !A)))
      return he(W);
    const je = a.pointerMove(W);
    ke > v && (H = !0), d.useFriction(0.3).useDuration(1), i.start(), o.add($(je)), W.preventDefault();
  }
  function he(W) {
    const $e = u.byDistance(0, !1).index !== f.get(), ke = a.pointerUp(W) * ye(), Le = fe($(ke), $e), je = O3(ke, Le), P = B - 10 * je, R = b + je / 50;
    A = !1, F = !1, N.clear(), d.useDuration(P).useFriction(R), c.distance(Le, !h), G = !1, p.emit("pointerUp");
  }
  function Ne(W) {
    H && (W.stopPropagation(), W.preventDefault(), H = !1);
  }
  function ae() {
    return F;
  }
  return {
    init: ne,
    pointerDown: ae,
    destroy: me
  };
}
function L3(e, t) {
  let r, o;
  function a(f) {
    return f.timeStamp;
  }
  function s(f, p) {
    const h = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (Rb(f, t) ? f : f.touches[0])[h];
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
    return m && !h && lt(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: d,
    readPoint: s
  };
}
function F3() {
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
function V3(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function z3(e, t, n, r, o, a, s) {
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
        const $ = y.target === e, C = r.indexOf(y.target), E = $ ? c : d[C], S = f($ ? e : r[C]);
        if (lt(S - E) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((x) => {
      u || (Zd(a) || a(v, x)) && g(x);
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
function B3(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, d = e.get(), u = 0;
  function f() {
    const C = n.get() - e.get(), E = !i;
    let S = 0;
    return E ? (a = 0, e.set(n), S = C) : (a += C / i, a *= c, d += a, e.add(a), S = d - u), s = qd(S), u = d, $;
  }
  function p() {
    const C = n.get() - t.get();
    return lt(C) < 1e-3;
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
function W3(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = Br(0.1, 0.99);
  let c = !1;
  function d() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!d())
      return;
    const h = e.reachedMin(t.get()) ? "min" : "max", v = lt(e[h] - t.get()), g = n.get() - t.get(), b = i.constrain(v / s);
    n.subtract(g * b), !m && lt(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(m) {
    c = !m;
  }
  return {
    constrain: u,
    toggleActive: f
  };
}
function H3(e, t, n, r, o) {
  const a = Br(-t + e, 0), s = f(), i = u(), c = p();
  function d(h, v) {
    return Qo(h, v) < 1;
  }
  function u() {
    const h = s[0], v = cn(s), g = s.lastIndexOf(h), b = s.indexOf(v) + 1;
    return Br(g, b);
  }
  function f() {
    return n.map((h, v) => {
      const {
        min: g,
        max: b
      } = a, x = a.constrain(h), y = !v, $ = Xd(n, v);
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
function U3(e, t, n) {
  const r = t[0], o = n ? r - e : cn(t);
  return {
    limit: Br(o, r)
  };
}
function K3(e, t, n, r) {
  const a = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = Br(a, s);
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
function G3(e) {
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
function Y3(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = f().map(t.measure), d = p(), u = m();
  function f() {
    return i(r).map((v) => cn(v)[s] - v[0][a]).map(lt);
  }
  function p() {
    return r.map((v) => n[a] - v[a]).map((v) => -lt(v));
  }
  function m() {
    return i(d).map((v) => v[0]).map((v, g) => v + c[g]);
  }
  return {
    snaps: d,
    snapsAligned: u
  };
}
function Z3(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, d = u();
  function u() {
    const p = s(a), m = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : m ? p : p.slice(i, c).map((h, v, g) => {
      const b = !v, x = Xd(g, v);
      if (b) {
        const y = cn(g[0]) + 1;
        return Vf(y);
      }
      if (x) {
        const y = qa(a) - cn(g)[0] + 1;
        return Vf(y, cn(g)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: d
  };
}
function q3(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(h) {
    return h.concat().sort((v, g) => lt(v) - lt(g))[0];
  }
  function d(h) {
    const v = e ? s(h) : i(h), g = t.map((x, y) => ({
      diff: u(x - v, 0),
      index: y
    })).sort((x, y) => lt(x.diff) - lt(y.diff)), {
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
    const b = g.filter((x) => qd(x) === v);
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
function X3(e, t, n, r, o, a, s) {
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
function Q3(e, t, n, r, o, a) {
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
      Yd(g) && (o.useDuration(0), r.index(g, 0));
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
function _s(e) {
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
    return Yd(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function Ib(e, t) {
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
function J3(e, t, n, r, o, a, s, i, c) {
  const u = Ca(o), f = Ca(o).reverse(), p = b().concat(x());
  function m(S, N) {
    return S.reduce((j, V) => j - o[V], N);
  }
  function h(S, N) {
    return S.reduce((j, V) => m(j, N) > 0 ? j.concat([V]) : j, []);
  }
  function v(S) {
    return a.map((N, j) => ({
      start: N - r[j] + 0.5 + S,
      end: N + t - 0.5 + S
    }));
  }
  function g(S, N, j) {
    const V = v(N);
    return S.map((L) => {
      const B = j ? 0 : -n, Z = j ? n : 0, T = j ? "end" : "start", O = V[L][T];
      return {
        index: L,
        loopPoint: O,
        slideLocation: _s(-1),
        translate: Ib(e, c[L]),
        target: () => i.get() > O ? B : Z
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
      const N = u.filter((j) => j !== S);
      return m(N, t) <= 0.1;
    });
  }
  function $() {
    p.forEach((S) => {
      const {
        target: N,
        translate: j,
        slideLocation: V
      } = S, L = N();
      L !== V.get() && (j.to(L), V.set(L));
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
function eM(e, t, n) {
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
      o || (Zd(n) || n(c, u)) && d(u);
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
function tM(e, t, n, r) {
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
    return Sa(o).reduce((v, g) => {
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
function nM(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, d = n[0] && o, u = h(), f = v(), p = n.map(s), m = g();
  function h() {
    if (!d)
      return 0;
    const x = n[0];
    return lt(t[i] - x[i]);
  }
  function v() {
    if (!d)
      return 0;
    const x = a.getComputedStyle(cn(r));
    return parseFloat(x.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((x, y, $) => {
      const C = !y, E = Xd($, y);
      return C ? p[y] + u : E ? p[y] + f : $[y + 1][i] - x[i];
    }).map(lt);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: m,
    startGap: u,
    endGap: f
  };
}
function rM(e, t, n, r, o, a, s, i, c) {
  const {
    startEdge: d,
    endEdge: u,
    direction: f
  } = e, p = Yd(n);
  function m(b, x) {
    return Ca(b).filter((y) => y % x === 0).map((y) => b.slice(y, y + x));
  }
  function h(b) {
    return b.length ? Ca(b).reduce((x, y, $) => {
      const C = cn(x) || 0, E = C === 0, S = y === qa(b), N = o[d] - a[C][d], j = o[d] - a[y][u], V = !r && E ? f(s) : 0, L = !r && S ? f(i) : 0, B = lt(j - L - (N + V));
      return $ && B > t + c && x.push(y), S && x.push(b.length), x;
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
function oM(e, t, n, r, o, a, s) {
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
  } = a, E = 2, S = F3(), N = S.measure(t), j = n.map(S.measure), V = A3(c, d), L = V.measureSize(N), B = V3(L), Z = D3(i, L), T = !f && !!x, O = f || !!x, {
    slideSizes: F,
    slideSizesWithGaps: A,
    startGap: H,
    endGap: G
  } = nM(V, N, j, n, O, o), ne = rM(V, L, g, f, N, j, H, G, E), {
    snaps: me,
    snapsAligned: K
  } = Y3(V, Z, N, j, ne), ue = -cn(me) + cn(A), {
    snapsContained: ye,
    scrollContainLimit: fe
  } = H3(L, ue, K, x, E), J = T ? ye : K, {
    limit: re
  } = U3(ue, J, f), he = Ab(qa(J), u, f), Ne = he.clone(), ae = Ca(n), de = ({
    dragHandler: vt,
    scrollBody: Zt,
    scrollBounds: _e,
    options: {
      loop: Ce
    }
  }) => {
    Ce || _e.constrain(vt.pointerDown()), Zt.seek();
  }, W = ({
    scrollBody: vt,
    translate: Zt,
    location: _e,
    offsetLocation: Ce,
    scrollLooper: ze,
    slideLooper: Fe,
    dragHandler: qe,
    animation: et,
    eventHandler: gt,
    options: {
      loop: nr
    }
  }, Jt) => {
    const Ct = vt.velocity(), yn = vt.settled();
    yn && !qe.pointerDown() && (et.stop(), gt.emit("settle")), yn || gt.emit("scroll"), Ce.set(_e.get() - Ct + Ct * Jt), nr && (ze.loop(vt.direction()), Fe.loop()), Zt.to(Ce.get());
  }, te = R3(r, o, () => de(Je), (vt) => W(Je, vt)), $e = 0.68, ke = J[he.get()], Le = _s(ke), je = _s(ke), P = _s(ke), R = B3(Le, je, P, p, $e), U = q3(f, J, ue, re, P), ce = X3(te, he, Ne, R, U, P, s), ie = G3(re), ee = Na(), xe = tM(t, n, s, v), {
    slideRegistry: Re
  } = Z3(T, x, J, fe, ne, ae), Ge = Q3(e, n, Re, ce, R, ee), Je = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: N,
    slideRects: j,
    animation: te,
    axis: V,
    dragHandler: I3(V, e, r, o, P, L3(V, o), Le, te, ce, R, U, he, s, B, m, h, b, $e, C),
    eventStore: ee,
    percentOfView: B,
    index: he,
    indexPrevious: Ne,
    limit: re,
    location: Le,
    offsetLocation: je,
    options: a,
    resizeHandler: z3(t, s, o, n, V, y, S),
    scrollBody: R,
    scrollBounds: W3(re, je, P, R, B),
    scrollLooper: K3(ue, re, je, [Le, je, P]),
    scrollProgress: ie,
    scrollSnapList: J.map(ie.get),
    scrollSnaps: J,
    scrollTarget: U,
    scrollTo: ce,
    slideLooper: J3(V, L, ue, F, A, me, J, je, n),
    slideFocus: Ge,
    slidesHandler: eM(t, s, $),
    slidesInView: xe,
    slideIndexes: ae,
    slideRegistry: Re,
    slidesToScroll: ne,
    target: P,
    translate: Ib(V, t)
  };
  return Je;
}
function aM() {
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
const sM = {
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
function iM(e) {
  function t(a, s) {
    return Db(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = Sa(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, d) => t(c, d), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => Sa(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function cM(e) {
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
function ni(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = iM(o), s = cM(a), i = Na(), c = aM(), {
    mergeOptions: d,
    optionsAtMedia: u,
    optionsMediaQueries: f
  } = a, {
    on: p,
    off: m,
    emit: h
  } = c, v = L;
  let g = !1, b, x = d(sM, ni.globalOptions), y = d(x), $ = [], C, E, S;
  function N() {
    const {
      container: de,
      slides: W
    } = y;
    E = (hl(de) ? e.querySelector(de) : de) || e.children[0];
    const $e = hl(W) ? E.querySelectorAll(W) : W;
    S = [].slice.call($e || E.children);
  }
  function j(de) {
    const W = oM(e, E, S, r, o, de, c);
    if (de.loop && !W.slideLooper.canLoop()) {
      const te = Object.assign({}, de, {
        loop: !1
      });
      return j(te);
    }
    return W;
  }
  function V(de, W) {
    g || (x = d(x, de), y = u(x), $ = W || $, N(), b = j(y), f([x, ...$.map(({
      options: te
    }) => te)]).forEach((te) => i.add(te, "change", L)), y.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(), b.eventHandler.init(ae), b.resizeHandler.init(ae), b.slidesHandler.init(ae), b.options.loop && b.slideLooper.loop(), E.offsetParent && S.length && b.dragHandler.init(ae), C = s.init(ae, $)));
  }
  function L(de, W) {
    const te = me();
    B(), V(d({
      startIndex: te
    }, de), W), c.emit("reInit");
  }
  function B() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), s.destroy(), i.clear();
  }
  function Z() {
    g || (g = !0, i.clear(), B(), c.emit("destroy"));
  }
  function T(de, W, te) {
    !y.active || g || (b.scrollBody.useBaseFriction().useDuration(W === !0 ? 0 : y.duration), b.scrollTo.index(de, te || 0));
  }
  function O(de) {
    const W = b.index.add(1).get();
    T(W, de, -1);
  }
  function F(de) {
    const W = b.index.add(-1).get();
    T(W, de, 1);
  }
  function A() {
    return b.index.add(1).get() !== me();
  }
  function H() {
    return b.index.add(-1).get() !== me();
  }
  function G() {
    return b.scrollSnapList;
  }
  function ne() {
    return b.scrollProgress.get(b.location.get());
  }
  function me() {
    return b.index.get();
  }
  function K() {
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
    return E;
  }
  function Ne() {
    return S;
  }
  const ae = {
    canScrollNext: A,
    canScrollPrev: H,
    containerNode: he,
    internalEngine: J,
    destroy: Z,
    off: m,
    on: p,
    emit: h,
    plugins: fe,
    previousScrollSnap: K,
    reInit: v,
    rootNode: re,
    scrollNext: O,
    scrollPrev: F,
    scrollProgress: ne,
    scrollSnapList: G,
    scrollTo: T,
    selectedScrollSnap: me,
    slideNodes: Ne,
    slidesInView: ue,
    slidesNotInView: ye
  };
  return V(t, n), setTimeout(() => c.emit("init"), 0), ae;
}
ni.globalOptions = void 0;
function Qd(e = {}, t = []) {
  const n = Y(e), r = Y(t), [o, a] = q(), [s, i] = q(), c = ge(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Q(() => {
    if (M3() && s) {
      ni.globalOptions = Qd.globalOptions;
      const d = ni(s, n.current, r.current);
      return a(d), () => d.destroy();
    } else
      a(void 0);
  }, [s, a]), Q(() => {
    Gd(n.current, e) || (n.current = e, c());
  }, [e, c]), Q(() => {
    T3(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
Qd.globalOptions = void 0;
const Lb = _.createContext(null);
function Wi() {
  const e = _.useContext(Lb);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const lM = _.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, d] = Qd(
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
      Lb.Provider,
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
            className: M("relative", o),
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
lM.displayName = "Carousel";
const dM = _.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = Wi();
  return /* @__PURE__ */ l.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      className: M(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
dM.displayName = "CarouselContent";
const uM = _.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = Wi();
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: M(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
uM.displayName = "CarouselItem";
const fM = _.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = Wi();
  return /* @__PURE__ */ l.jsxs(
    Be,
    {
      ref: o,
      variant: t,
      size: n,
      className: M(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(tx, { className: "h-4 w-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
fM.displayName = "CarouselPrevious";
const pM = _.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = Wi();
  return /* @__PURE__ */ l.jsxs(
    Be,
    {
      ref: o,
      variant: t,
      size: n,
      className: M(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ l.jsx(nx, { className: "h-4 w-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
pM.displayName = "CarouselNext";
var Fb = z.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
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
}, direction: "bottom" }), Jd = () => z.useContext(Fb);
function mM(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
mM(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var hM = typeof window < "u" ? Ea : Q;
function vl(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function vM() {
  return eu(/^Mac/);
}
function gM() {
  return eu(/^iPhone/);
}
function bM() {
  return eu(/^iPad/) || vM() && navigator.maxTouchPoints > 1;
}
function Vb() {
  return gM() || bM();
}
function eu(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var Pc = typeof document < "u" && window.visualViewport;
function zf(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function zb(e) {
  for (zf(e) && (e = e.parentElement); e && !zf(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var xM = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), ps = 0, kc;
function yM(e = {}) {
  let { isDisabled: t } = e;
  hM(() => {
    if (!t)
      return ps++, ps === 1 && (Vb() ? kc = $M() : kc = wM()), () => {
        ps--, ps === 0 && kc();
      };
  }, [t]);
}
function wM() {
  return vl(Bb(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function $M() {
  let e, t = 0, n = (f) => {
    e = zb(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
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
        Bf(p);
      }) : Pc.addEventListener("resize", () => Bf(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, d = vl(Bb(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let u = vl(Ko(document, "touchstart", n, { passive: !1, capture: !0 }), Ko(document, "touchmove", r, { passive: !1, capture: !0 }), Ko(document, "touchend", o, { passive: !1, capture: !0 }), Ko(document, "focus", a, !0), Ko(window, "scroll", s));
  return () => {
    d(), u(), window.scrollTo(i, c);
  };
}
function Bb(e, t, n) {
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
function Bf(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = zb(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function gl(e) {
  return e instanceof HTMLInputElement && !xM.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function _M(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function CM(...e) {
  return (t) => e.forEach((n) => _M(n, t));
}
function Wb(...e) {
  return _.useCallback(CM(...e), e);
}
var ir = null;
function SM({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o }) {
  let [a, s] = z.useState(typeof window < "u" ? window.location.href : ""), i = z.useRef(0), c = z.useCallback(() => {
    if (ir === null && e) {
      ir = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: u, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-i.current}px`, document.body.style.left = `${-u}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let p = f - window.innerHeight;
        p && i.current >= f && (document.body.style.top = `${-(i.current + p)}px`);
      }), 300);
    }
  }, [e]), d = z.useCallback(() => {
    if (ir !== null) {
      let u = -parseInt(document.body.style.top, 10), f = -parseInt(document.body.style.left, 10);
      document.body.style.position = ir.position, document.body.style.top = ir.top, document.body.style.left = ir.left, document.body.style.height = ir.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (o && a !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(f, u);
      }), ir = null;
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
var Hb = /* @__PURE__ */ new WeakMap();
function at(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && Hb.set(e, r);
}
function ms(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = Hb.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
var xt = (e) => {
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
function hs(e, t) {
  let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[xt(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[xt(t) ? 5 : 4]) : null);
}
function NM(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var nt = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, Ub = 0.4;
function Kb(e) {
  let t = z.useRef(e);
  return z.useEffect(() => {
    t.current = e;
  }), z.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function EM({ defaultProp: e, onChange: t }) {
  let n = z.useState(e), [r] = n, o = z.useRef(r), a = Kb(t);
  return z.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function PM({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = EM({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = Kb(n), c = z.useCallback((d) => {
    if (a) {
      let u = typeof d == "function" ? d(e) : d;
      u !== e && i(u);
    } else
      o(d);
  }, [a, e, o, i]);
  return [s, c];
}
function kM({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s, direction: i = "bottom" }) {
  let [c, d] = PM({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), u = z.useMemo(() => c === (n == null ? void 0 : n[n.length - 1]) || null, [n, c]), f = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === c || !n, p = z.useMemo(() => n == null ? void 0 : n.findIndex((y) => y === c), [n, c]), m = z.useMemo(() => {
    var y;
    return (y = n == null ? void 0 : n.map(($) => {
      let C = typeof window < "u", E = typeof $ == "string", S = 0;
      if (E && (S = parseInt($, 10)), xt(i)) {
        let j = E ? S : C ? $ * window.innerHeight : 0;
        return C ? i === "bottom" ? window.innerHeight - j : -window.innerHeight + j : j;
      }
      let N = E ? S : C ? $ * window.innerWidth : 0;
      return C ? i === "right" ? window.innerWidth - N : -window.innerWidth + N : N;
    })) != null ? y : [];
  }, [n]), h = z.useMemo(() => p !== null ? m == null ? void 0 : m[p] : null, [m, p]), v = z.useCallback((y) => {
    var $;
    let C = ($ = m == null ? void 0 : m.findIndex((E) => E === y)) != null ? $ : null;
    s(C), at(r.current, { transition: `transform ${nt.DURATION}s cubic-bezier(${nt.EASE.join(",")})`, transform: xt(i) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)` }), m && C !== m.length - 1 && C !== a ? at(o.current, { transition: `opacity ${nt.DURATION}s cubic-bezier(${nt.EASE.join(",")})`, opacity: "0" }) : at(o.current, { transition: `opacity ${nt.DURATION}s cubic-bezier(${nt.EASE.join(",")})`, opacity: "1" }), d(C !== null ? n == null ? void 0 : n[C] : null);
  }, [r.current, n, m, a, o, d]);
  z.useEffect(() => {
    var y;
    if (e) {
      let $ = (y = n == null ? void 0 : n.findIndex((C) => C === e)) != null ? y : -1;
      m && $ !== -1 && typeof m[$] == "number" && v(m[$]);
    }
  }, [e, n, m, v]);
  function g({ draggedDistance: y, closeDrawer: $, velocity: C, dismissible: E }) {
    if (a === void 0)
      return;
    let S = i === "bottom" || i === "right" ? (h ?? 0) - y : (h ?? 0) + y, N = p === a - 1, j = p === 0, V = y > 0;
    if (N && at(o.current, { transition: `opacity ${nt.DURATION}s cubic-bezier(${nt.EASE.join(",")})` }), C > 2 && !V) {
      E ? $() : v(m[0]);
      return;
    }
    if (C > 2 && V && m && n) {
      v(m[n.length - 1]);
      return;
    }
    let L = m == null ? void 0 : m.reduce((Z, T) => typeof Z != "number" || typeof T != "number" ? Z : Math.abs(T - S) < Math.abs(Z - S) ? T : Z), B = xt(i) ? window.innerHeight : window.innerWidth;
    if (C > Ub && Math.abs(y) < B * 0.4) {
      let Z = V ? 1 : -1;
      if (Z > 0 && u) {
        v(m[n.length - 1]);
        return;
      }
      if (j && Z < 0 && E && $(), p === null)
        return;
      v(m[p + Z]);
      return;
    }
    v(L);
  }
  function b({ draggedDistance: y }) {
    if (h === null)
      return;
    let $ = i === "bottom" || i === "right" ? h - y : h + y;
    (i === "bottom" || i === "right") && $ < m[m.length - 1] || (i === "top" || i === "left") && $ > m[m.length - 1] || at(r.current, { transform: xt(i) ? `translate3d(0, ${$}px, 0)` : `translate3d(${$}px, 0, 0)` });
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
    let E = C ? p + 1 : p - 1, S = C ? m[E] - m[E - 1] : m[E + 1] - m[E], N = y / Math.abs(S);
    return C ? 1 - N : N;
  }
  return { isLastSnapPoint: u, activeSnapPoint: c, shouldFade: f, getPercentageDragged: x, setActiveSnapPoint: d, activeSnapPointIndex: p, onRelease: g, onDrag: b, snapPointsOffset: m };
}
var jM = 0.25, MM = 100, Wf = 8, Er = 16, Hf = 26, Uf = "vaul-dragging";
function Gb({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i = !1, closeThreshold: c = jM, scrollLockTimeout: d = MM, dismissible: u = !0, fadeFromIndex: f = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: h, modal: v = !0, onClose: g, direction: b = "bottom", preventScrollRestoration: x = !0 }) {
  var y;
  let [$ = !1, C] = z.useState(!1), [E, S] = z.useState(!1), [N, j] = z.useState(!1), [V, L] = z.useState(!1), [B, Z] = z.useState(!1), [T, O] = z.useState(!1), F = z.useRef(null), A = z.useRef(null), H = z.useRef(null), G = z.useRef(null), ne = z.useRef(null), me = z.useRef(!1), K = z.useRef(null), ue = z.useRef(0), ye = z.useRef(!1), fe = z.useRef(0), J = z.useRef(null), re = z.useRef(((y = J.current) == null ? void 0 : y.getBoundingClientRect().height) || 0), he = z.useRef(0), Ne = z.useCallback((_e) => {
    s && _e === $e.length - 1 && (A.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: ae, activeSnapPointIndex: de, setActiveSnapPoint: W, onRelease: te, snapPointsOffset: $e, onDrag: ke, shouldFade: Le, getPercentageDragged: je } = kM({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: m, drawerRef: J, fadeFromIndex: f, overlayRef: F, onSnapPointChange: Ne, direction: b });
  yM({ isDisabled: !$ || B || !v || T || !E });
  let { restorePositionSetting: P } = SM({ isOpen: $, modal: v, nested: i, hasBeenOpened: E, preventScrollRestoration: x });
  function R() {
    return (window.innerWidth - Hf) / window.innerWidth;
  }
  function U(_e) {
    var Ce;
    !u && !s || J.current && !J.current.contains(_e.target) || (re.current = ((Ce = J.current) == null ? void 0 : Ce.getBoundingClientRect().height) || 0, Z(!0), H.current = /* @__PURE__ */ new Date(), Vb() && window.addEventListener("touchend", () => me.current = !1, { once: !0 }), _e.target.setPointerCapture(_e.pointerId), ue.current = xt(b) ? _e.screenY : _e.screenX);
  }
  function ce(_e, Ce) {
    var ze;
    let Fe = _e, qe = (ze = window.getSelection()) == null ? void 0 : ze.toString(), et = J.current ? hs(J.current, b) : null, gt = /* @__PURE__ */ new Date();
    if (Fe.hasAttribute("data-vaul-no-drag"))
      return !1;
    if (b === "right" || b === "left")
      return !0;
    if (A.current && gt.getTime() - A.current.getTime() < 500)
      return !1;
    if (et !== null && (b === "bottom" ? et > 0 : et < 0))
      return !0;
    if (qe && qe.length > 0)
      return !1;
    if (ne.current && gt.getTime() - ne.current.getTime() < d && et === 0 || Ce)
      return ne.current = gt, !1;
    for (; Fe; ) {
      if (Fe.scrollHeight > Fe.clientHeight) {
        if (Fe.scrollTop !== 0)
          return ne.current = /* @__PURE__ */ new Date(), !1;
        if (Fe.getAttribute("role") === "dialog")
          return !0;
      }
      Fe = Fe.parentNode;
    }
    return !0;
  }
  function ie(_e) {
    if (J.current && B) {
      let Ce = b === "bottom" || b === "right" ? 1 : -1, ze = (ue.current - (xt(b) ? _e.screenY : _e.screenX)) * Ce, Fe = ze > 0;
      if (s && de === 0 && !u || !me.current && !ce(_e.target, Fe))
        return;
      if (J.current.classList.add(Uf), me.current = !0, at(J.current, { transition: "none" }), at(F.current, { transition: "none" }), s && ke({ draggedDistance: ze }), Fe && !s) {
        let Ct = NM(ze), yn = Math.min(Ct * -1, 0) * Ce;
        at(J.current, { transform: xt(b) ? `translate3d(0, ${yn}px, 0)` : `translate3d(${yn}px, 0, 0)` });
        return;
      }
      let qe = Math.abs(ze), et = document.querySelector("[vaul-drawer-wrapper]"), gt = qe / re.current, nr = je(qe, Fe);
      nr !== null && (gt = nr);
      let Jt = 1 - gt;
      if ((Le || f && de === f - 1) && (o == null || o(_e, gt), at(F.current, { opacity: `${Jt}`, transition: "none" }, !0)), et && F.current && r) {
        let Ct = Math.min(R() + gt * (1 - R()), 1), yn = 8 - gt * 8, Dn = Math.max(0, 14 - gt * 14);
        at(et, { borderRadius: `${yn}px`, transform: xt(b) ? `scale(${Ct}) translate3d(0, ${Dn}px, 0)` : `scale(${Ct}) translate3d(${Dn}px, 0, 0)`, transition: "none" }, !0);
      }
      if (!s) {
        let Ct = qe * Ce;
        at(J.current, { transform: xt(b) ? `translate3d(0, ${Ct}px, 0)` : `translate3d(${Ct}px, 0, 0)` });
      }
    }
  }
  z.useEffect(() => () => {
    Ge(!1), P();
  }, []), z.useEffect(() => {
    var _e;
    function Ce() {
      var ze;
      if (!J.current)
        return;
      let Fe = document.activeElement;
      if (gl(Fe) || ye.current) {
        let qe = ((ze = window.visualViewport) == null ? void 0 : ze.height) || 0, et = window.innerHeight - qe, gt = J.current.getBoundingClientRect().height || 0;
        he.current || (he.current = gt);
        let nr = J.current.getBoundingClientRect().top;
        if (Math.abs(fe.current - et) > 60 && (ye.current = !ye.current), s && s.length > 0 && $e && de) {
          let Jt = $e[de] || 0;
          et += Jt;
        }
        if (fe.current = et, gt > qe || ye.current) {
          let Jt = J.current.getBoundingClientRect().height, Ct = Jt;
          Jt > qe && (Ct = qe - Hf), h ? J.current.style.height = `${Jt - Math.max(et, 0)}px` : J.current.style.height = `${Math.max(Ct, qe - nr)}px`;
        } else
          J.current.style.height = `${he.current}px`;
        s && s.length > 0 && !ye.current ? J.current.style.bottom = "0px" : J.current.style.bottom = `${Math.max(et, 0)}px`;
      }
    }
    return (_e = window.visualViewport) == null || _e.addEventListener("resize", Ce), () => {
      var ze;
      return (ze = window.visualViewport) == null ? void 0 : ze.removeEventListener("resize", Ce);
    };
  }, [de, s, $e]);
  function ee() {
    J.current && (g == null || g(), at(J.current, { transform: xt(b) ? `translate3d(0, ${b === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${b === "right" ? "100%" : "-100%"}, 0, 0)`, transition: `transform ${nt.DURATION}s cubic-bezier(${nt.EASE.join(",")})` }), at(F.current, { opacity: "0", transition: `opacity ${nt.DURATION}s cubic-bezier(${nt.EASE.join(",")})` }), Ge(!1), setTimeout(() => {
      j(!1), C(!1);
    }, 300), setTimeout(() => {
      s && W(s[0]);
    }, nt.DURATION * 1e3));
  }
  z.useEffect(() => {
    if (!$ && r) {
      let _e = setTimeout(() => {
        ms(document.body);
      }, 200);
      return () => clearTimeout(_e);
    }
  }, [$, r]), z.useEffect(() => {
    e ? (C(!0), S(!0)) : ee();
  }, [e]), z.useEffect(() => {
    V && (t == null || t($));
  }, [$]), z.useEffect(() => {
    L(!0);
  }, []);
  function xe() {
    if (!J.current)
      return;
    let _e = document.querySelector("[vaul-drawer-wrapper]"), Ce = hs(J.current, b);
    at(J.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${nt.DURATION}s cubic-bezier(${nt.EASE.join(",")})` }), at(F.current, { transition: `opacity ${nt.DURATION}s cubic-bezier(${nt.EASE.join(",")})`, opacity: "1" }), r && Ce && Ce > 0 && $ && at(_e, { borderRadius: `${Wf}px`, overflow: "hidden", ...xt(b) ? { transform: `scale(${R()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${R()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${nt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${nt.EASE.join(",")})` }, !0);
  }
  function Re(_e) {
    var Ce;
    if (!B || !J.current)
      return;
    J.current.classList.remove(Uf), me.current = !1, Z(!1), G.current = /* @__PURE__ */ new Date();
    let ze = hs(J.current, b);
    if (!ce(_e.target, !1) || !ze || Number.isNaN(ze) || H.current === null)
      return;
    let Fe = G.current.getTime() - H.current.getTime(), qe = ue.current - (xt(b) ? _e.screenY : _e.screenX), et = Math.abs(qe) / Fe;
    if (et > 0.05 && (O(!0), setTimeout(() => {
      O(!1);
    }, 200)), s) {
      te({ draggedDistance: qe * (b === "bottom" || b === "right" ? 1 : -1), closeDrawer: ee, velocity: et, dismissible: u }), a == null || a(_e, !0);
      return;
    }
    if (b === "bottom" || b === "right" ? qe > 0 : qe < 0) {
      xe(), a == null || a(_e, !0);
      return;
    }
    if (et > Ub) {
      ee(), a == null || a(_e, !1);
      return;
    }
    let gt = Math.min((Ce = J.current.getBoundingClientRect().height) != null ? Ce : 0, window.innerHeight);
    if (ze >= gt * c) {
      ee(), a == null || a(_e, !1);
      return;
    }
    a == null || a(_e, !0), xe();
  }
  z.useEffect(() => {
    $ && (at(document.documentElement, { scrollBehavior: "auto" }), A.current = /* @__PURE__ */ new Date(), Ge(!0));
  }, [$]), z.useEffect(() => {
    var _e;
    if (J.current && N) {
      let Ce = (_e = J == null ? void 0 : J.current) == null ? void 0 : _e.querySelectorAll("*");
      Ce == null || Ce.forEach((ze) => {
        let Fe = ze;
        (Fe.scrollHeight > Fe.clientHeight || Fe.scrollWidth > Fe.clientWidth) && Fe.classList.add("vaul-scrollable");
      });
    }
  }, [N]);
  function Ge(_e) {
    let Ce = document.querySelector("[vaul-drawer-wrapper]");
    !Ce || !r || (_e ? (at(document.body, { background: document.body.style.backgroundColor || document.body.style.background }), at(document.body, { background: "black" }, !0), at(Ce, { borderRadius: `${Wf}px`, overflow: "hidden", ...xt(b) ? { transform: `scale(${R()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${R()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${nt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${nt.EASE.join(",")})` })) : (ms(Ce, "overflow"), ms(Ce, "transform"), ms(Ce, "borderRadius"), at(Ce, { transitionProperty: "transform, border-radius", transitionDuration: `${nt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${nt.EASE.join(",")})` })));
  }
  function Je(_e) {
    let Ce = _e ? (window.innerWidth - Er) / window.innerWidth : 1, ze = _e ? -Er : 0;
    K.current && window.clearTimeout(K.current), at(J.current, { transition: `transform ${nt.DURATION}s cubic-bezier(${nt.EASE.join(",")})`, transform: `scale(${Ce}) translate3d(0, ${ze}px, 0)` }), !_e && J.current && (K.current = setTimeout(() => {
      let Fe = hs(J.current, b);
      at(J.current, { transition: "none", transform: xt(b) ? `translate3d(0, ${Fe}px, 0)` : `translate3d(${Fe}px, 0, 0)` });
    }, 500));
  }
  function vt(_e, Ce) {
    if (Ce < 0)
      return;
    let ze = xt(b) ? window.innerHeight : window.innerWidth, Fe = (ze - Er) / ze, qe = Fe + Ce * (1 - Fe), et = -Er + Ce * Er;
    at(J.current, { transform: xt(b) ? `scale(${qe}) translate3d(0, ${et}px, 0)` : `scale(${qe}) translate3d(${et}px, 0, 0)`, transition: "none" });
  }
  function Zt(_e, Ce) {
    let ze = xt(b) ? window.innerHeight : window.innerWidth, Fe = Ce ? (ze - Er) / ze : 1, qe = Ce ? -Er : 0;
    Ce && at(J.current, { transition: `transform ${nt.DURATION}s cubic-bezier(${nt.EASE.join(",")})`, transform: xt(b) ? `scale(${Fe}) translate3d(0, ${qe}px, 0)` : `scale(${Fe}) translate3d(${qe}px, 0, 0)` });
  }
  return z.createElement(Wa, { modal: v, onOpenChange: (_e) => {
    if (e !== void 0) {
      t == null || t(_e);
      return;
    }
    _e ? (S(!0), C(_e)) : ee();
  }, open: $ }, z.createElement(Fb.Provider, { value: { visible: N, activeSnapPoint: ae, snapPoints: s, setActiveSnapPoint: W, drawerRef: J, overlayRef: F, scaleBackground: Ge, onOpenChange: t, onPress: U, setVisible: j, onRelease: Re, onDrag: ie, dismissible: u, isOpen: $, shouldFade: Le, closeDrawer: ee, onNestedDrag: vt, onNestedOpenChange: Je, onNestedRelease: Zt, keyboardIsOpen: ye, openProp: e, modal: v, snapPointsOffset: $e, direction: b } }, n));
}
var Yb = z.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = Jd(), d = Wb(n, r), u = o && o.length > 0;
  return z.createElement(Yr, { onMouseUp: a, ref: d, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
Yb.displayName = "Drawer.Overlay";
var Zb = z.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: d, dismissible: u, keyboardIsOpen: f, snapPointsOffset: p, visible: m, closeDrawer: h, modal: v, openProp: g, onOpenChange: b, setVisible: x, direction: y } = Jd(), $ = Wb(a, s);
  return z.useEffect(() => {
    x(!0);
  }, []), z.createElement(Zr, { onOpenAutoFocus: (C) => {
    var E;
    e ? e(C) : (C.preventDefault(), (E = s.current) == null || E.focus());
  }, onPointerDown: i, onPointerDownOutside: (C) => {
    if (t == null || t(C), !v || C.defaultPrevented) {
      C.preventDefault();
      return;
    }
    f.current && (f.current = !1), C.preventDefault(), b == null || b(!1), !(!u || g !== void 0) && h();
  }, onPointerMove: d, onPointerUp: c, ref: $, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-direction": y, "vaul-drawer-visible": m ? "true" : "false" });
});
Zb.displayName = "Drawer.Content";
function TM({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = Jd();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return z.createElement(Gb, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var xn = { Root: Gb, NestedRoot: TM, Content: Zb, Overlay: Yb, Trigger: wi, Portal: Ha, Close: qr, Title: jo, Description: Mo };
const OM = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ l.jsx(
  xn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
OM.displayName = "Drawer";
const QT = xn.Trigger, DM = xn.Portal, JT = xn.Close, qb = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xn.Overlay,
  {
    ref: n,
    className: M("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
qb.displayName = xn.Overlay.displayName;
const RM = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(DM, { children: [
  /* @__PURE__ */ l.jsx(qb, {}),
  /* @__PURE__ */ l.jsxs(
    xn.Content,
    {
      ref: r,
      className: M(
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
RM.displayName = "DrawerContent";
const AM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
AM.displayName = "DrawerHeader";
const IM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
IM.displayName = "DrawerFooter";
const LM = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xn.Title,
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
LM.displayName = xn.Title.displayName;
const FM = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xn.Description,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
FM.displayName = xn.Description.displayName;
var VM = Object.defineProperty, zM = Object.defineProperties, BM = Object.getOwnPropertyDescriptors, ri = Object.getOwnPropertySymbols, Xb = Object.prototype.hasOwnProperty, Qb = Object.prototype.propertyIsEnumerable, Kf = (e, t, n) => t in e ? VM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, WM = (e, t) => {
  for (var n in t || (t = {}))
    Xb.call(t, n) && Kf(e, n, t[n]);
  if (ri)
    for (var n of ri(t))
      Qb.call(t, n) && Kf(e, n, t[n]);
  return e;
}, HM = (e, t) => zM(e, BM(t)), UM = (e, t) => {
  var n = {};
  for (var r in e)
    Xb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ri)
    for (var r of ri(e))
      t.indexOf(r) < 0 && Qb.call(e, r) && (n[r] = e[r]);
  return n;
}, KM = "^\\d+$";
function GM(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function YM(e) {
  let t = _.useRef();
  return _.useEffect(() => {
    t.current = e;
  }), t.current;
}
var ZM = 18, Jb = 40, qM = `${Jb}px`, XM = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function QM({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let o = _.useRef({ done: !1, refocused: !1 }), [a, s] = _.useState(!1), [i, c] = _.useState(!1), [d, u] = _.useState(!1), f = _.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && i, [a, i, n]), p = _.useCallback(() => {
    let m = e.current, h = t.current;
    if (!m || !h || d || n === "none")
      return;
    let v = m, g = v.getBoundingClientRect().left + v.offsetWidth, b = v.getBoundingClientRect().top + v.offsetHeight / 2, x = g - ZM, y = b;
    if (!(document.querySelectorAll(XM).length === 0 && document.elementFromPoint(x, y) === m) && (s(!0), u(!0), !o.current.refocused && document.activeElement === h)) {
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
      c(g >= Jb);
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
  }, [t, r, n, p]), { hasPWMBadge: a, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: qM };
}
var e0 = _.createContext({}), t0 = _.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: s = "left", pattern: i = KM, inputMode: c = "numeric", onComplete: d, pushPasswordManagerStrategy: u = "increase-width", containerClassName: f, noScriptCSSFallback: p = JM, render: m, children: h } = n, v = UM(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]), g, b, x, y, $;
  let [C, E] = _.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), S = r ?? C, N = YM(S), j = _.useCallback((W) => {
    o == null || o(W), E(W);
  }, [o]), V = _.useMemo(() => i ? typeof i == "string" ? new RegExp(i) : i : null, [i]), L = _.useRef(null), B = _.useRef(null), Z = _.useRef({ value: S, onChange: j, isIOS: typeof window < "u" && ((b = (g = window == null ? void 0 : window.CSS) == null ? void 0 : g.supports) == null ? void 0 : b.call(g, "-webkit-touch-callout", "none")) }), T = _.useRef({ prev: [(x = L.current) == null ? void 0 : x.selectionStart, (y = L.current) == null ? void 0 : y.selectionEnd, ($ = L.current) == null ? void 0 : $.selectionDirection] });
  _.useImperativeHandle(t, () => L.current, []), _.useEffect(() => {
    let W = L.current, te = B.current;
    if (!W || !te)
      return;
    Z.current.value !== W.value && Z.current.onChange(W.value), T.current.prev = [W.selectionStart, W.selectionEnd, W.selectionDirection];
    function $e() {
      if (document.activeElement !== W) {
        ne(null), K(null);
        return;
      }
      let je = W.selectionStart, P = W.selectionEnd, R = W.selectionDirection, U = W.maxLength, ce = W.value, ie = T.current.prev, ee = -1, xe = -1, Re;
      if (ce.length !== 0 && je !== null && P !== null) {
        let Zt = je === P, _e = je === ce.length && ce.length < U;
        if (Zt && !_e) {
          let Ce = je;
          if (Ce === 0)
            ee = 0, xe = 1, Re = "forward";
          else if (Ce === U)
            ee = Ce - 1, xe = Ce, Re = "backward";
          else if (U > 1 && ce.length > 1) {
            let ze = 0;
            if (ie[0] !== null && ie[1] !== null) {
              Re = Ce < ie[1] ? "backward" : "forward";
              let Fe = ie[0] === ie[1] && ie[0] < U;
              Re === "backward" && !Fe && (ze = -1);
            }
            ee = ze + Ce, xe = ze + Ce + 1;
          }
        }
        ee !== -1 && xe !== -1 && ee !== xe && L.current.setSelectionRange(ee, xe, Re);
      }
      let Ge = ee !== -1 ? ee : je, Je = xe !== -1 ? xe : P, vt = Re ?? R;
      ne(Ge), K(Je), T.current.prev = [Ge, Je, vt];
    }
    if (document.addEventListener("selectionchange", $e, { capture: !0 }), $e(), document.activeElement === W && H(!0), !document.getElementById("input-otp-style")) {
      let je = document.createElement("style");
      if (je.id = "input-otp-style", document.head.appendChild(je), je.sheet) {
        let P = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        Go(je.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), Go(je.sheet, `[data-input-otp]:autofill { ${P} }`), Go(je.sheet, `[data-input-otp]:-webkit-autofill { ${P} }`), Go(je.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Go(je.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ke = () => {
      te && te.style.setProperty("--root-height", `${W.clientHeight}px`);
    };
    ke();
    let Le = new ResizeObserver(ke);
    return Le.observe(W), () => {
      document.removeEventListener("selectionchange", $e, { capture: !0 }), Le.disconnect();
    };
  }, []);
  let [O, F] = _.useState(!1), [A, H] = _.useState(!1), [G, ne] = _.useState(null), [me, K] = _.useState(null);
  _.useEffect(() => {
    GM(() => {
      var W, te, $e, ke;
      (W = L.current) == null || W.dispatchEvent(new Event("input"));
      let Le = (te = L.current) == null ? void 0 : te.selectionStart, je = ($e = L.current) == null ? void 0 : $e.selectionEnd, P = (ke = L.current) == null ? void 0 : ke.selectionDirection;
      Le !== null && je !== null && (ne(Le), K(je), T.current.prev = [Le, je, P]);
    });
  }, [S, A]), _.useEffect(() => {
    N !== void 0 && S !== N && N.length < a && S.length === a && (d == null || d(S));
  }, [a, d, N, S]);
  let ue = QM({ containerRef: B, inputRef: L, pushPasswordManagerStrategy: u, isFocused: A }), ye = _.useCallback((W) => {
    let te = W.currentTarget.value.slice(0, a);
    if (te.length > 0 && V && !V.test(te)) {
      W.preventDefault();
      return;
    }
    typeof N == "string" && te.length < N.length && document.dispatchEvent(new Event("selectionchange")), j(te);
  }, [a, j, N, V]), fe = _.useCallback(() => {
    var W;
    if (L.current) {
      let te = Math.min(L.current.value.length, a - 1), $e = L.current.value.length;
      (W = L.current) == null || W.setSelectionRange(te, $e), ne(te), K($e);
    }
    H(!0);
  }, [a]), J = _.useCallback((W) => {
    var te, $e;
    let ke = L.current;
    if (!Z.current.isIOS || !W.clipboardData || !ke)
      return;
    let Le = W.clipboardData.getData("text/plain");
    W.preventDefault();
    let je = (te = L.current) == null ? void 0 : te.selectionStart, P = ($e = L.current) == null ? void 0 : $e.selectionEnd, R = (je !== P ? S.slice(0, je) + Le + S.slice(P) : S.slice(0, je) + Le + S.slice(je)).slice(0, a);
    if (R.length > 0 && V && !V.test(R))
      return;
    ke.value = R, j(R);
    let U = Math.min(R.length, a - 1), ce = R.length;
    ke.setSelectionRange(U, ce), ne(U), K(ce);
  }, [a, j, V, S]), re = _.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), he = _.useMemo(() => ({ position: "absolute", inset: 0, width: ue.willPushPWMBadge ? `calc(100% + ${ue.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: ue.willPushPWMBadge ? `inset(0 ${ue.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: s, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [ue.PWM_BADGE_SPACE_WIDTH, ue.willPushPWMBadge, s]), Ne = _.useMemo(() => _.createElement("input", HM(WM({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-mss": G, "data-input-otp-mse": me, inputMode: c, pattern: V == null ? void 0 : V.source, style: he, maxLength: a, value: S, ref: L, onPaste: (W) => {
    var te;
    J(W), (te = v.onPaste) == null || te.call(v, W);
  }, onChange: ye, onMouseOver: (W) => {
    var te;
    F(!0), (te = v.onMouseOver) == null || te.call(v, W);
  }, onMouseLeave: (W) => {
    var te;
    F(!1), (te = v.onMouseLeave) == null || te.call(v, W);
  }, onFocus: (W) => {
    var te;
    fe(), (te = v.onFocus) == null || te.call(v, W);
  }, onBlur: (W) => {
    var te;
    H(!1), (te = v.onBlur) == null || te.call(v, W);
  } })), [ye, fe, J, c, he, a, me, G, v, V == null ? void 0 : V.source, S]), ae = _.useMemo(() => ({ slots: Array.from({ length: a }).map((W, te) => {
    let $e = A && G !== null && me !== null && (G === me && te === G || te >= G && te < me), ke = S[te] !== void 0 ? S[te] : null;
    return { char: ke, isActive: $e, hasFakeCaret: $e && ke === null };
  }), isFocused: A, isHovering: !v.disabled && O }), [A, O, a, me, G, v.disabled, S]), de = _.useMemo(() => m ? m(ae) : _.createElement(e0.Provider, { value: ae }, h), [h, ae, m]);
  return _.createElement(_.Fragment, null, p !== null && _.createElement("noscript", null, _.createElement("style", null, p)), _.createElement("div", { ref: B, "data-input-otp-container": !0, style: re, className: f }, de, _.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, Ne)));
});
t0.displayName = "Input";
function Go(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var JM = `
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
const e7 = _.forwardRef(({ className: e, containerClassName: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  t0,
  {
    ref: r,
    containerClassName: M(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      t
    ),
    className: M("disabled:cursor-not-allowed", e),
    ...n
  }
));
e7.displayName = "InputOTP";
const t7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: M("flex items-center", e), ...t }));
t7.displayName = "InputOTPGroup";
const n7 = _.forwardRef(({ index: e, className: t, ...n }, r) => {
  const o = _.useContext(e0), { char: a, hasFakeCaret: s, isActive: i } = o.slots[e];
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: r,
      className: M(
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
n7.displayName = "InputOTPSlot";
const r7 = _.forwardRef(({ ...e }, t) => /* @__PURE__ */ l.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ l.jsx(rx, {}) }));
r7.displayName = "InputOTPSeparator";
const o7 = _.forwardRef(({ ...e }, t) => /* @__PURE__ */ l.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
o7.displayName = "Breadcrumb";
const a7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "ol",
  {
    ref: n,
    className: M(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
a7.displayName = "BreadcrumbList";
const s7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "li",
  {
    ref: n,
    className: M("inline-flex items-center gap-1.5", e),
    ...t
  }
));
s7.displayName = "BreadcrumbItem";
const i7 = _.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? dn : "a";
  return /* @__PURE__ */ l.jsx(
    o,
    {
      ref: r,
      className: M("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
i7.displayName = "BreadcrumbLink";
const c7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: M("font-normal text-foreground", e),
    ...t
  }
));
c7.displayName = "BreadcrumbPage";
const l7 = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ l.jsx(yr, {})
  }
);
l7.displayName = "BreadcrumbSeparator";
const d7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(op, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
d7.displayName = "BreadcrumbElipssis";
const u7 = ({ className: e, ...t }) => /* @__PURE__ */ l.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: M("mx-auto flex w-full justify-center", e),
    ...t
  }
);
u7.displayName = "Pagination";
const f7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "ul",
  {
    ref: n,
    className: M("flex flex-row items-center gap-1", e),
    ...t
  }
));
f7.displayName = "PaginationContent";
const p7 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("li", { ref: n, className: M("", e), ...t }));
p7.displayName = "PaginationItem";
const tu = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ l.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: M(
      ho({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
tu.displayName = "PaginationLink";
const m7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  tu,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: M("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(oi, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { children: "Previous" })
    ]
  }
);
m7.displayName = "PaginationPrevious";
const h7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  tu,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: M("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx("span", { children: "Next" }),
      /* @__PURE__ */ l.jsx(yr, { className: "h-4 w-4" })
    ]
  }
);
h7.displayName = "PaginationNext";
const v7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: M("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(op, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
v7.displayName = "PaginationEllipsis";
const e8 = ({ children: e }) => /* @__PURE__ */ l.jsx("div", { className: "app-layout", children: e });
export {
  iT as Accordion,
  m5 as AccordionContent,
  f5 as AccordionItem,
  p5 as AccordionTrigger,
  oT as AlertDialog,
  FE as AlertDialogAction,
  VE as AlertDialogCancel,
  DE as AlertDialogContent,
  LE as AlertDialogDescription,
  AE as AlertDialogFooter,
  RE as AlertDialogHeader,
  _v as AlertDialogOverlay,
  OE as AlertDialogPortal,
  IE as AlertDialogTitle,
  aT as AlertDialogTrigger,
  e8 as AppLayout,
  Q7 as AspectRatio,
  lo as Avatar,
  uo as AvatarFallback,
  Or as AvatarImage,
  Ot as Badge,
  GT as BottomNavigation,
  o7 as Breadcrumb,
  d7 as BreadcrumbEllipsis,
  s7 as BreadcrumbItem,
  i7 as BreadcrumbLink,
  a7 as BreadcrumbList,
  c7 as BreadcrumbPage,
  l7 as BreadcrumbSeparator,
  Be as Button,
  Fo as CI_TYPES,
  G1 as Calendar,
  Nh as Card,
  CS as CardContent,
  _S as CardDescription,
  SS as CardFooter,
  wS as CardHeader,
  $S as CardTitle,
  lM as Carousel,
  dM as CarouselContent,
  uM as CarouselItem,
  pM as CarouselNext,
  fM as CarouselPrevious,
  jh as Checkbox,
  BT as CodeVerification,
  cT as Collapsible,
  dT as CollapsibleContent,
  lT as CollapsibleTrigger,
  i3 as ComboBox,
  KT as ComboxCheckbox,
  Gn as Command,
  X7 as CommandDialog,
  hr as CommandEmpty,
  mn as CommandGroup,
  mr as CommandInput,
  hn as CommandItem,
  Ro as CommandList,
  ki as CommandSeparator,
  LN as CommandShortcut,
  j7 as ContextMenu,
  w2 as ContextMenuCheckboxItem,
  x2 as ContextMenuContent,
  T7 as ContextMenuGroup,
  y2 as ContextMenuItem,
  _2 as ContextMenuLabel,
  O7 as ContextMenuPortal,
  R7 as ContextMenuRadioGroup,
  $2 as ContextMenuRadioItem,
  C2 as ContextMenuSeparator,
  S2 as ContextMenuShortcut,
  D7 as ContextMenuSub,
  b2 as ContextMenuSubContent,
  g2 as ContextMenuSubTrigger,
  M7 as ContextMenuTrigger,
  XT as D4TCardsList,
  Tb as D4TImage,
  FT as D4TTable,
  oh as Dialog,
  L7 as DialogClose,
  md as DialogContent,
  mC as DialogDescription,
  fC as DialogFooter,
  uC as DialogHeader,
  ah as DialogOverlay,
  dC as DialogPortal,
  pC as DialogTitle,
  I7 as DialogTrigger,
  OM as Drawer,
  JT as DrawerClose,
  RM as DrawerContent,
  FM as DrawerDescription,
  IM as DrawerFooter,
  AM as DrawerHeader,
  qb as DrawerOverlay,
  DM as DrawerPortal,
  LM as DrawerTitle,
  QT as DrawerTrigger,
  U7 as DropdownMenu,
  cN as DropdownMenuCheckboxItem,
  sN as DropdownMenuContent,
  G7 as DropdownMenuGroup,
  iN as DropdownMenuItem,
  dN as DropdownMenuLabel,
  Y7 as DropdownMenuPortal,
  q7 as DropdownMenuRadioGroup,
  lN as DropdownMenuRadioItem,
  uN as DropdownMenuSeparator,
  fN as DropdownMenuShortcut,
  Z7 as DropdownMenuSub,
  aN as DropdownMenuSubContent,
  oN as DropdownMenuSubTrigger,
  K7 as DropdownMenuTrigger,
  Ym as Form,
  Ba as FormControl,
  ko as FormDescription,
  Kr as FormField,
  Cr as FormItem,
  Gr as FormLabel,
  U2 as FormMessage,
  UT as GenericCombobox,
  VT as GenericSelect,
  pT as HoverCard,
  N5 as HoverCardContent,
  mT as HoverCardTrigger,
  hd as Input,
  e7 as InputOTP,
  t7 as InputOTPGroup,
  r7 as InputOTPSeparator,
  n7 as InputOTPSlot,
  F7 as InputPID,
  oa as InputUI,
  On as Label,
  hT as LoaderDots,
  Q5 as Menubar,
  oP as MenubarCheckboxItem,
  nP as MenubarContent,
  bT as MenubarGroup,
  rP as MenubarItem,
  sP as MenubarLabel,
  gT as MenubarMenu,
  xT as MenubarPortal,
  wT as MenubarRadioGroup,
  aP as MenubarRadioItem,
  iP as MenubarSeparator,
  cP as MenubarShortcut,
  yT as MenubarSub,
  tP as MenubarSubContent,
  eP as MenubarSubTrigger,
  J5 as MenubarTrigger,
  HT as MultipleImages,
  ib as NavLink,
  ej as NavLinkNested,
  RP as NavigationMenu,
  FP as NavigationMenuContent,
  VP as NavigationMenuIndicator,
  _T as NavigationMenuItem,
  CT as NavigationMenuLink,
  AP as NavigationMenuList,
  LP as NavigationMenuTrigger,
  gg as NavigationMenuViewport,
  Gi as PHONE_LINE_CODES,
  u7 as Pagination,
  f7 as PaginationContent,
  v7 as PaginationEllipsis,
  p7 as PaginationItem,
  tu as PaginationLink,
  h7 as PaginationNext,
  m7 as PaginationPrevious,
  Un as Popover,
  En as PopoverContent,
  Kn as PopoverTrigger,
  qP as Progress,
  pk as RadioGroup,
  mk as RadioGroupItem,
  aE as ScrollArea,
  uv as ScrollBar,
  xd as Select,
  Ni as SelectContent,
  bS as SelectGroup,
  Ei as SelectItem,
  xS as SelectLabel,
  yS as SelectSeparator,
  Si as SelectTrigger,
  yd as SelectValue,
  Ua as Separator,
  eT as Sheet,
  nT as SheetClose,
  cE as SheetContent,
  fE as SheetDescription,
  dE as SheetFooter,
  lE as SheetHeader,
  fv as SheetOverlay,
  sE as SheetPortal,
  uE as SheetTitle,
  tT as SheetTrigger,
  DT as Sidebar,
  RT as SidebarContent,
  J6 as SidebarFooter,
  H6 as SidebarHeader,
  Et as Skeleton,
  Lk as Slider,
  $l as Spinner,
  zT as SwatchesPicker,
  j6 as Switch,
  mv as TableBody,
  mE as TableCaption,
  Sd as TableCell,
  pE as TableFooter,
  hv as TableHead,
  pv as TableHeader,
  Ti as TableRow,
  Cd as TableUI,
  kT as Tabs,
  Xk as TabsContent,
  Zk as TabsList,
  qk as TabsTrigger,
  z7 as TextArea,
  fh as TextareaUI,
  e6 as Toggle,
  Q6 as ToggleTheme,
  Zn as Tooltip,
  Pn as TooltipContent,
  Yn as TooltipProvider,
  qn as TooltipTrigger,
  WT as UploadImage,
  aw as badgeVariants,
  ho as buttonVariants,
  Ao as camelToSnake,
  M as cn,
  Ss as convertBytes,
  Ki as convertHexToRGBA,
  x7 as fetcher,
  $7 as formatCI,
  ef as formatCITypes,
  N7 as formatCodePhoneLines,
  YT as formatListPagination,
  AT as formatPagination,
  S7 as formatPhone,
  C7 as formatPhoneNumber,
  _7 as formatRIF,
  Ef as generateUUID,
  Ec as generateUUIDToList,
  w7 as getMultiOpacityColor,
  ZT as initialListPagination,
  IT as initialPagination,
  LT as insertColumn,
  qT as insertColumnList,
  v3 as listCamelToSnake,
  IP as navigationMenuTriggerStyle,
  y7 as simulateFetch,
  Jk as toggleVariants,
  yi as useFormField,
  Fi as useSidebar
};
//# sourceMappingURL=index.es.js.map
